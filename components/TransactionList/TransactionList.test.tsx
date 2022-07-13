import { render } from "@testing-library/react";
import TransactionList from "./TransactionList";

describe("Transaction list", () => {
  it("Provide the list", () => {
    const { getByTestId } = render(<TransactionList transactions={[]} />);

    expect(getByTestId("transaction-list")).toBeInTheDocument();
  });
  it("show the transaction amount", () => {
    const randomAmount = Math.random().toString();
    const { getByText } = render(
      <TransactionList
        transactions={[
          { amount: randomAmount, date: new Date().toISOString() },
        ]}
      />
    );

    expect(getByText(`£${randomAmount}`)).toBeInTheDocument();
  });
  it("show multiple amounts", () => {
    const randomAmount = Math.random().toString();
    const randomAmount1 = Math.random().toString();
    const { getByText } = render(
      <TransactionList
        transactions={[
          { amount: randomAmount, date: new Date().toISOString() },
          { amount: randomAmount1, date: new Date().toISOString() },
        ]}
      />
    );

    expect(getByText(`£${randomAmount}`)).toBeInTheDocument();
    expect(getByText(`£${randomAmount1}`)).toBeInTheDocument();
  });
  it("show the date for a transaction", () => {
    const { getByText } = render(
      <TransactionList
        transactions={[
          { amount: "0", date: new Date("2022-07-01").toISOString() },
          { amount: "0", date: new Date("2022-07-02").toISOString() },
        ]}
      />
    );

    expect(getByText(`01/07/2022`)).toBeInTheDocument();
    expect(getByText(`02/07/2022`)).toBeInTheDocument();
  });
});
