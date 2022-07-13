import React from "react";

type Transaction = {
  amount: string;
  date: Date;
};

type TransactionListProps = {
  transactions: Transaction[];
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <ul data-testid="transaction-list">
      {transactions.map((t) => (
        <li>
          <span>£{t.amount} </span>
          <span>{new Intl.DateTimeFormat("en-GB").format(t.date)}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
