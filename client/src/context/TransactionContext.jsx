import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants"



export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)



    return transactionContract;
}

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [requests, setRequests] = useState([]);
    const [requestData, setRequestData] = useState([]);
    const [sendingDatas, setSendingDatas] = useState({ date: "", code: '', description: "", amount: "" });
    const [claimData, setClaimData] = useState([]);

    const metamaskAlert = ("Please install metamask");
    

    const handleChange = (e, name) => {

        setRequestData((prevState) => ({
            ...prevState, [name]: e.target.value
        }))

    }
    const sendDatahandleChange = (e) => {

        const { name, value } = e.target;
        setSendingDatas(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(sendingDatas);

    }

    


    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask")
            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                getAllTransactions();


            } else {
                console.log("No account found");
            }
            console.log(accounts);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object. ")
        }

    }





    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask")
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);

            throw new Error("No Ethereum object. ")
        }
    }



    const getAllTransactions = async () => {
        try {
            if (ethereum) {

                const transactionsContract = getEthereumContract();

                const availableTransactions = await transactionsContract.getAllClaims();
                const structuredTransactions = availableTransactions.map((request) => ({

                    claimId: parseInt(request?.claimId._hex),
                    ssn: request?.ssn,
                    owner: request?.owner,
                    timestamp: new Date(request.timestamp.toNumber() * 1000).toLocaleString().replace(/ /g, "-"),

                }));

                
                console.log(structuredTransactions);
                setRequests(structuredTransactions);
                
                contract.on("ClaimEvent", (claimId)=> {
                    console.log("New Claim Event is: ", claimId);
                    alertify("New Claim has come...")
                })

            } else {
                console.log("Ethereum is not present");
            }
        } catch (error) {
            console.log(error);
        }
    };


    const requireData = async () => {
        try {
            if (!ethereum) return alert(metamaskAlert)

            const { _key, _name } = requestData;
            const transactionContract = getEthereumContract();
            const transactionHash = await transactionContract.setClaim(_key);

            setIsLoading(true);
            await transactionHash.wait();
            setIsLoading(false);

        } catch (error) {
            console.error(error);

            throw new Error("No ethereum Object");
        }

    }


    const fetchData = async (eventId) => {
        try {

            if (!ethereum) return alert(metamaskAlert);


            const transactionContract = getEthereumContract();
        
            const transactionHash = await transactionContract.getClaimsData(eventId);
            console.log("eventId", eventId, transactionHash)


            console.log("fetchData: " + transactionHash);

            setClaimData(transactionHash.claimsData);
        } catch (error) {

        }

    }


    const sendData = async (eventId) => {
        try {

            if (!ethereum) return alert(metamaskAlert);

            const transactionContract = getEthereumContract();
            const data = `date: ${sendingDatas.date}; code: ${sendingDatas.code}; description: ${sendingDatas.description}; amount: ${sendingDatas.amount};`
            const transactionHash = await transactionContract.setClaimsData(eventId, data);

            setIsLoading(true);
            await transactionHash.wait();
            setIsLoading(false);


        } catch (error) {

        }
    }

    

    useEffect(() => {
        checkIfWalletIsConnected();
        fetchData();

    }, [])



    console.log("++++++++++", requests)




    return (
        <TransactionContext.Provider value={{ fetchData, connectWallet, claimData, currentAccount, requests, handleChange, requireData, sendData, sendDatahandleChange, sendingDatas, isLoading }}>
            {children}
        </TransactionContext.Provider>
    )

}