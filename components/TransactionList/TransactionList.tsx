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
    <div data-testid="transaction-list">
      {transactions.map((t) => (
        <>
          <p>£{t.amount}</p>
          <p>{new Intl.DateTimeFormat("en-GB").format(t.date)}</p>
        </>
      ))}
    </div>
  );
};

export default TransactionList;
