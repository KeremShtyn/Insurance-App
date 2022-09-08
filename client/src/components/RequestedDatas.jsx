import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'

const RequestCard = ({ data }) => {

    console.log(key1);
    return (

        <tr key={key1}>
            <th scope="row">
                {key1}
            </th>
            <td>
                {data}
            </td>

        </tr>

    )
}


const RequestedDatas = () => {
    const { sendingDatas } = useContext(TransactionContext);

    console.log(sendingDatas);



    return (
        <div className='flex w-full justify-center 2xl:px20'>
            <div className='flex flex-col md:p-12 py-12 px-4'>
                {currentAccount ? (
                    <h3 className='text-white text-3xl text-center my-2'>Latest Sent Datas</h3>
                ) : (
                    <h3 className='text-white text-3xl text-center my-2'>Connect your account to see the Latest Transactions</h3>
                )}
                <div className='flex flex-wrap justify-center items-center mt-10'>
                    <Select />
                    {/* Buradan devam et */}
                    {[...sendingDatas].reverse().map((sendingData, i) => (
                        <RequestCard key={i} {...sendingData} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RequestedDatas