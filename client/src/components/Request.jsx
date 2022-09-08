import React, { useContext, useState, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext'

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

    const { currentAccount, requireData, requests, handleChange, requestData } = useContext(TransactionContext);

    const handleSubmit = (e) => {

        //const { _key, _name } = requestData;

        e.preventDefault();

        //if (!_key || !_name) return;

        requireData();
        console.log("requestData: " + requestData);
    };

    return (
        <div className='p-5 sm:w-2/4 ml-96 mt-7  justify-center justify-items-center blue-glassmorphism'>
            <Input placeholder="Key" name="_key" type="text" handleChange={handleChange} />
            <Input placeholder="Name" name="_name" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button
                type='button'
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Send Request
            </button>
        </div>
    )
}

export default Request;