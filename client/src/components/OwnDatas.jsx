import React, {useContext} from 'react'
import { TransactionContext } from '../context/TransactionContext';
import TransactionsCard from '../tools/TransactionsCard';
import { Table } from 'reactstrap';
import { useState } from 'react';


const commonStyles =
    "min-h-[70px] mt-5 sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";


const OwnDatas = (
    
    ) => {

    const {currentAccount, requests} =  useContext(TransactionContext)
        
        
  return (
    <div>
            {currentAccount ? (
                <h3 className='text-white text-3xl text-center my-2'>Your Latest Transactions</h3>
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
                                <th>SSn</th>
                                <th>Timestamp</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody >

                            { 
                                ([...requests].map((request, claimId) => {
                                    console.log("request.owner", request.owner);
                                    console.log("currentAccount", currentAccount);
                                    return ( ( parseInt(currentAccount) === parseInt(request.owner)) &&
                                        (<TransactionsCard
                                            getDataClick={() => {
                                                history.push("/SentData", { myId: request.claimId });
                                            }}
                                            claimId={request.claimId}
                                            ssn={request.ssn}
                                            owner={request.owner}
                                            timestamp={request.timestamp}
                                            key={claimId} />)
                                    )
                                }

                                )) 
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
  )
}

export default OwnDatas