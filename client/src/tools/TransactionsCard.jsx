import React, {useContext} from "react";
import { Button } from "reactstrap";

import { Link } from "react-router-dom";

import { TransactionContext } from "../context/TransactionContext";
import {shortenAddress} from "../utils/shortenAddress"


const TransactionsCard = ({ claimId, ssn, owner, timestamp, getDataClick }) => {

    const { currentAccount } = useContext(TransactionContext)


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
                    className="bg-green-600 ml-2 flex items-center w-24 "
                >   <Link to={`/SentData?selectedEventId=${claimId}`} >
                        Get Data
                    </Link>
                </Button> :
                <Button
                    color="primary"
                    className="bg-blue-600 ml-2 flex items-center w-24 "
                >   <Link to={`/Response?selectedEventId=${claimId}`}>

                        Send Claims
                    </Link>
                </Button>

            }

            </td>
        </tr>
      

    )
}

export default TransactionsCard;