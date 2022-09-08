import React, { useContext, useState, useEffect, useSearchParam } from 'react'

import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import { TransactionContext } from '../context/TransactionContext'
import Loader from './Loader';


const SendData = (

) => {

    const { connectWallet, sendData, requireData, requests, sendingDatas, sendDatahandleChange, isLoading } = useContext(TransactionContext);

  
    

    const query = new URLSearchParams(window.location.search);
    const claimId = query.get("selectedEventId");

    const handleSubmit = (event) => {

        debugger
        event.preventDefault();

        sendData(claimId);
        console.log(sendingDatas);
    };


    



    return (

        <div>

            <Form className='flex flex-row  justify-center h-full w-full  mt-5'>
                <div>

                    <FormGroup >
                        <Label for="exampleText">
                            Date
                        </Label>
                        <Input
                            className='bg-[#e1e0e782] border-0 w-96'
                            id="date"
                            name="date"
                            type="date"
                            onChange={(e) => sendDatahandleChange(e, "date")}


                        />
                        <Label for="exampleText">
                            Code
                        </Label>
                        <Input
                            className='bg-[#e1e0e782] border-0 w-96'
                            id="code"
                            name="code"
                            type="textarea"
                            onChange={(e) => sendDatahandleChange(e, "code")}


                        />
                        <Label for="exampleText">
                            Description
                        </Label>
                        <Input
                            className='bg-[#e1e0e782] border-0 w-96'
                            id="description"
                            name="description"
                            type="textarea"
                            onChange={(e) => sendDatahandleChange(e, "description")}


                        />
                        <Label for="exampleText">
                            Amount
                        </Label>
                        <Input
                            className='bg-[#e1e0e782] border-0 w-96'
                            id="amount"
                            name="amount"
                            type="textarea"
                            onChange={(e) => sendDatahandleChange(e, "amount")}


                        />
                    </FormGroup>
                    {isLoading ? <Loader /> :
                        <Button className='flex flex-col items-end bg-blue-500 hover:bg-blue-500' onClick={handleSubmit} >
                            Submit
                        </Button>}

                </div>
            </Form>
        </div>

    )
}

export default SendData;