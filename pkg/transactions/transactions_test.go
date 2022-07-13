package transactions_test

import (
	"testing"

	"github.com/alecthomas/assert/v2"
	"github.com/oshdev/merchant-portal-but-better/pkg/transactions"
)

func Test_transaction(t *testing.T) {
	t.Run("Test_transaction", func(t *testing.T) {
		transactionsToTest := transactions.GetTransactions()
		assert.NotZero(t, len(transactionsToTest))
	})
}
