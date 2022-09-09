import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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



const TransactionsCard = ({ claimId, ssn, owner, timestamp, getDataClick }) => {

    const { currentAccount, fetchData } = useContext(TransactionContext)


    const isOwner = parseInt(currentAccount) === parseInt(owner);

    // console.log(isOwner)

    return (


        <tr key={claimId}>
            <th scope="row">
                {claimId}
            </th>
            <td>
                <a href={`https://testnet.snowtrace.io/address/${owner}`} target="_blank" rel="noreferrer">
                    {shortenAddress(owner)}
                </a>
            </td>
            <td>
                {ssn}
            </td>
            <td>
                {timestamp}
            </td>
            <td>{isOwner ?
                <Button
                    onClick={getDataClick}
                    color="success"
                    className="bg-green-600 ml-2 items-center w-24 "
                >   <Link to={`/SentData?selectedEventId=${claimId}`} >
                        Get Data
                    </Link>
                </Button> :
                <Button
                    color="primary"
                    className="bg-blue-600 ml-2 flex items-center w-24 "
                >   <Link to={`/Response?selectedEventId=${claimId}`}>

                        Send Claims Data
                    </Link>
                </Button>

            }

            </td>
        </tr>

    )
}

const Welcome = ({ history }) => {
    const {
        connectWallet,
        currentAccount,
        formData,
        sendTransaction,
        handleChange,
        requests
    } = useContext(TransactionContext);



    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);






    return (
        <div>
            {currentAccount ? (
                <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
            ) : (
                <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the Latest Transactions</h3>
            )}
            <div>
                <div className="p-5 sm:w-2/4 ml-96 mt-7 flex-col  justify-center justify-items-center  ">
                    <Table className="text-white justify-center items-center">
                        <thead>
                            <tr className="decoration-transparent ">
                                <th>Claim ID</th>
                                <th>Owner Address</th>
                                <th>SSn</th>
                                <th>Timestamp</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                ([...requests].reverse().map((request, claimId) => {
                                    console.log("+++++", request.claimId)
                                    return (
                                        <TransactionsCard
                                            getDataClick={() => {
                                                history.push("/SentData", { myId: request.claimId });
                                            }}
                                            claimId={request.claimId}
                                            ssn={request.ssn}
                                            owner={request.owner}
                                            timestamp={request.timestamp}
                                            isOwner={request.isOwner} key={claimId} />
                                    )
                                }


                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
