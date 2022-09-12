import React, { useContext, useState } from "react";
import TransactionsCard from "../tools/TransactionsCard"
import { TransactionContext } from "../context/TransactionContext";

import {
    Table
} from "reactstrap";


const commonStyles =
    "min-h-[70px] mt-5 sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const EventList = ({ history }) => {
    const {
        currentAccount,
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
                <div className={commonStyles}>
                    <Table className="text-white justify-center items-center  text-center">
                        <thead>
                            <tr className="decoration-transparent ">
                                <th>Claim ID</th>
                                <th>Owner Address</th>
                                <th>SSN</th>
                                <th>Timestamp</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody >

                            {
                                ([...requests].map((request, claimId) => {
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

export default EventList;
