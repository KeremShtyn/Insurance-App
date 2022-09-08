import React, { useContext, useState } from "react";
import { AiFillPlayCircle, AiOutlineLoading3Quarters } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from "./";

import {
    Table,
    Button,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
} from "reactstrap";

import { NavLink as Link } from "react-router-dom";
import { shortenAddress } from "../utils/shortenAddress";

const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
const listStyle = "text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const TransactionsCard = ({ key1, owner, name, status, index }) => {

    console.log(key1);
    return (


        <tr key={key1}>
            <th scope="row">
                {key1}
            </th>
            <td>
                <a href={`https://testnet.snowtrace.io/address/${owner}`} target="_blank" rel="noreferrer">
                    {shortenAddress(owner)}
                </a>
            </td>
            <td>
                {name}
            </td>
            <td>
                <Button
                    color="primary"
                    className="bg-blue-600 ml-2 items-center w-24 "
                >   <Link to={`/Response?selectedEventId=${index}`}>
                        Response Event
                    </Link>
                </Button>

            </td>
        </tr>

    )
}

const Welcome = (args) => {
    const {
        connectWallet,
        currentAccount,
        formData,
        sendTransaction,
        handleChange,
        requests
    } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        console.log(formData);
        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    console.log(requests);

    return (
        <div>
            {currentAccount ? (
                <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
            ) : (
                <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the Latest Transactions</h3>
            )}
            <div>
                <div className="p-5 sm:w-2/4 ml-96 mt-7  justify-center justify-items-center  ">
                    <Table className="text-white justify-center items-center">
                        <thead>
                            <tr className="decoration-transparent ">
                                <th>Key Number</th>
                                <th>Owner Address</th>
                                <th>Customer Name</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ([...requests].reverse().map((request, requestId) => (

                                    <TransactionsCard
                                        key1={request.key1}
                                        owner={request.owner}
                                        name={request.name}
                                        status={request.status} index={requestId} />))
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
