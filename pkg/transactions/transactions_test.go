package transactions_test

import (
	"testing"
	"transactions"
)

func Test_transaction(t *testing.T) {
	
	t.Run("Test_transaction", func(t *testing.T) {
		transactions_to_test := transactions.GetTransactions()
		
		if len(transactions_to_test) == 0 {
			t.Fatalf("Expected zero but got %d", transactions_to_test)
		}

	})
	
}