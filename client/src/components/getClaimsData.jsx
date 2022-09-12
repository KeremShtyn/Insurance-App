
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { TransactionContext } from '../context/TransactionContext'
import { Table } from 'reactstrap';



const getClaimsData = ({ location }) => {
    const { currentAccount, fetchData } = useContext(TransactionContext);
    const query = new URLSearchParams(window.location.search);
    //const claimId = query.get("selectedEventId");
    const claimId = location.state.myId;

    const { claimData } = useContext(TransactionContext)

    useEffect(() => {

        fetchData(claimId);


    }, [])


    console.log("DATA:::", claimData);

    console.log("...claimData", ...claimData)
    console.log("id:", location.state.myId)




    const list = claimData.map((cData) =>
        <li>{cData}</li>
    )


    return (
        <div className='flex w-full justify-center 2xl:px20'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>Latest Sent Datas</h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the Latest Transactions</h3>
                )}
                <div className='flex flex-wrap justify-center items-center mt-10'>
                    <ul>{list}</ul>
                </div>
            </div>
        </div>
    )
}

export default getClaimsData