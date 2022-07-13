import React from "react";

type Transaction = {
    amount: string
}

type TransactionListProps = {
    transactions: Transaction[]
}

const TransactionList: React.FC<TransactionListProps> = ({transactions}) => {
    return <div data-testid="transaction-list">{transactions.map((t) => <p>£{t.amount}</p>)}</div>;
}

export default TransactionList;
