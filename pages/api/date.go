package api

import (
	"encoding/json"
	"net/http"
	"time"
)

func API(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now().Format(time.RFC850)
	res, err := json.Marshal(currentTime)
	if err != nil {
		w.Write([]byte(err.Error()))
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if _, err := w.Write(res); err != nil {
		w.Write([]byte(err.Error()))
	}

}
