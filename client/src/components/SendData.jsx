import React, { useContext, useState, useEffect, useSearchParam } from 'react'

import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import { TransactionContext } from '../context/TransactionContext'
import Loader from './Loader';


const SendData = (

) => {

    const { connectWallet, sendData, requireData, requests, sendingData, sendDatahandleChange, isLoading } = useContext(TransactionContext);



    const query = new URLSearchParams(window.location.search);
    const requestId = query.get("selectedEventId");

    const handleSubmit = (event) => {


        event.preventDefault();

        sendData(requestId);

    };



    return (

        <div>

            <Form className='flex flex-row  justify-center h-full w-full  mt-5'>
                <div>

                    <FormGroup>
                        <Label for="exampleText">
                            Text Area
                        </Label>
                        <Input
                            className='bg-[#e1e0e782] border-0 w-96'
                            id="_data"
                            name="_data"
                            type="textarea"
                            onChange={(e) => sendDatahandleChange(e, "_data")}


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