import {render} from "@testing-library/react";
import TransactionList from "./TransactionList";

describe("Transaction list", () => {
    it("Provide the list", () => {

        const {getByTestId} = render(<TransactionList transactions={[]}/>);

        expect(getByTestId("transaction-list")).toBeInTheDocument();
    });
    it("show the transaction amount", () => {
        const randomAmount = Math.random().toString()
        const {getByText} = render(<TransactionList transactions={[{amount: randomAmount}]}/>);

        expect(getByText(`£${randomAmount}`)).toBeInTheDocument();
    });
    it("show multiple amounts", () => {
        const randomAmount = Math.random().toString()
        const randomAmount1 = Math.random().toString()
        const {getByText} = render(<TransactionList transactions={[{amount: randomAmount}, {amount: randomAmount1}]}/>);

        expect(getByText(`£${randomAmount}`)).toBeInTheDocument();
        expect(getByText(`£${randomAmount1}`)).toBeInTheDocument();
    });
});
