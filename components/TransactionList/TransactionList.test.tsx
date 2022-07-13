import {render} from "@testing-library/react";
import TransactionList from "./TransactionList";

describe("Transaction list", () => {
    it("Provide the list", () => {
        const {getByTestId} = render(<TransactionList/>);

        expect(getByTestId("transaction-list")).toBeInTheDocument();
    });
    it("show the transaction amount", () => {
        const {getByText} = render(<TransactionList/>);

        expect(getByText("£20")).toBeInTheDocument();
    });
});
