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
  return {
    props: {
      transactions: [
        { amount: "5 million", date: new Date("2022-07-01").toISOString() },
        { amount: "billions", date: new Date("2022-07-03").toISOString() },
      ],
    }, // will be passed to the page component as props
  };
};
