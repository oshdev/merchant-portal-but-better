import TransactionList from "@/components/TransactionList";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Transaction List</title>
      </Head>
      <TransactionList
        transactions={[
          { amount: "5 million", date: new Date("2022-07-01") },
          { amount: "billions", date: new Date("2022-07-03") },
        ]}
      />
    </div>
  );
}
