import TransactionList from "@/components/TransactionList";
import { Transaction } from "@/components/TransactionList/TransactionList";
import { GetServerSideProps } from "next";
import Head from "next/head";

type HomePageProps = {
  transactions: (Pick<Transaction, "amount"> & { date: string })[];
};

export default function Home({ transactions }: HomePageProps) {
  return (
    <div>
      <Head>
        <title>Transaction List</title>
      </Head>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const transactions: Transaction[] = await fetch(
    "http://localhost:8080/transactions"
  ).then((res) => res.json());
  return {
    props: {
      transactions,
    }, // will be passed to the page component as props
  };
};
