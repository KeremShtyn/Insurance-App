// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;



contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    // event: it is like a function that we are emit or call later on this function is going to accept a few parameters
    // each one of our transactions or transfers has to have an address from and thşs address here is going to be the type and the from is going to be a variable name 


    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    // struct: it is going to be similar to an object but we are not actually declaring an object here we are just specifying 
    // what properties is this object have and what type are they going to be  


    TransferStruct[] transactions; // defining an array, but we have to define of what type are these transactions to be 


    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public { // since this is a class we have to define the visibility of this specific function
       // memory means that this is some specific data stored in memory of that transaction whereas receiver is something that must be there because it is an address amount also must be there, 
       // but the message is just some additional data that we are passing through that blockchain 
       
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        // push method is so similar as in Javascript, we are going to say what do we want to push and that is our TransferStruct  and we have to pass in all the parameters that our TransferStruct need  
        // msg. == this is something you immediately whenever you call a specific function in the blockchain, it is already going to be stored there 
        // block. == the thing that was being executed on the blockchain is the specific block
        
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
        //just emitting
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) { 
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}