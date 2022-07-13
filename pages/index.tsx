import TransactionList from "@/components/TransactionList";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Transaction List</title>
      </Head>
      <TransactionList />
    </div>
  );
}
