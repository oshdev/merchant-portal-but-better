package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/oshdev/merchant-portal-but-better/pkg/transactions"
)

func listTransactions(w http.ResponseWriter, r *http.Request) {
	trs := transactions.GetTransactions()
	tsBytes, err := json.Marshal(trs)
	if err != nil {
		http.Error(w, "could not marshal transactions", http.StatusInternalServerError)
	}
	fmt.Fprint(w, string(tsBytes))
}

func main() {
	http.HandleFunc("/transactions", listTransactions)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
