import React, { useContext } from 'react'

import { TransactionContext } from "../context/TransactionContext"

import dummyData from "../utils/dummyData";
import useFetch from '../hooks/useFetch';



const TransactionsCard = ({ key1, owner, name, status }) => {

  console.log(key1);
  return (
    <div className="gradient-bg-services m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://testnet.snowtrace.io/address/${owner}`} target="_blank" rel="noreferrer">
            <p className=" text-base">Owner: {owner}</p>
          </a>
          <p className=" text-base">name: {name}</p>

          <p className=" text-base">Status: {
            !status ?
              (<text> Pending</text>) :
              (<text> Completed</text>)
          } </p>


          <p className=" text-base">Key: {key1}</p>


        </div>


      </div>
    </div>
  )
}

const Transactions = () => {

  const { currentAccount, requests } = useContext(TransactionContext);


  return (

    <div className='flex w-full justify-center 2xl:px20'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        {currentAccount ? (
          <h3 className='text-white text-3xl text-center my-2'>Latest Transactions</h3>
        ) : (
          <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the Latest Transactions</h3>
        )}
        <div className='flex flex-wrap justify-center items-center mt-10'>
          {[...requests].reverse().map((request, i) => (
            <TransactionsCard key={i} {...request} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Transactions;