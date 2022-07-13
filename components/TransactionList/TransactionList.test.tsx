import { render } from "@testing-library/react";
import TransactionList from "./TransactionList";

describe("Transaction list", () => {
  it("Lists transactions", () => {
    const { getByTestId } = render(<TransactionList />);

    expect(getByTestId("transaction-list")).toBeInTheDocument();
  });
});
