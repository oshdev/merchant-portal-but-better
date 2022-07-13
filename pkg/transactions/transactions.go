package transactions

import "time"

type Transaction struct {
	Date   time.Time
	Amount int
}

func GetTransactions() []Transaction {
	return []Transaction{
		{
			Date:   time.Now(),
			Amount: 20,
		},
		{
			Date:   time.Now(),
			Amount: 20,
		}}
}
