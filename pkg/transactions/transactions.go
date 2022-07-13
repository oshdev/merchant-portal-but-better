package transactions

import "time"

type Transaction struct {
	Date   time.Time `json:"date"`
	Amount int       `json:"amount"`
}

func GetTransactions() []Transaction {
	return []Transaction{
		{
			Date:   time.Now(),
			Amount: 30,
		},
		{
			Date:   time.Date(2022, 07, 12, 0, 0, 0, 0, time.Local),
			Amount: 20,
		},
		{
			Date:   time.Date(2022, 07, 10, 0, 0, 0, 0, time.Local),
			Amount: 1000,
		},
		{
			Date:   time.Date(2022, 05, 1, 0, 0, 0, 0, time.Local),
			Amount: 55,
		},
		{
			Date:   time.Date(2022, 04, 16, 0, 0, 0, 0, time.Local),
			Amount: 10,
		},
	}
}
