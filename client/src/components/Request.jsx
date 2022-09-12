import React, { useContext, useState, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import Loader from './Loader';

const Input = ({ placeholder, type, value, name, handleChange }) => (

    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
)


const Request = () => {

    const {  requireData,isLoading,  handleChange, requestData } = useContext(TransactionContext);

    const handleSubmit = (e) => {

        //const { _key, _name } = requestData;

        e.preventDefault();

        //if (!_key || !_name) return;
        
        requireData();
        
        console.log("requestData: " + requestData);
    };

    return (

        // TODO If wallet is not connected, we must hide the sending input and show a hint to connect
        <div className='p-5 sm:w-2/4 ml-96 mt-7  justify-center justify-items-center blue-glassmorphism'>
            <Input placeholder="Enter a SSN" name="_key" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            { isLoading? <Loader></Loader> :
             <button
                type='button'
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Send Claim
            </button>}
        </div>
    )
}

export default Request;