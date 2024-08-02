// package main

// import (
// 	"context"
// 	"fmt"
// 	"log"
// 	"net/http"

// 	connect "connectrpc.com/connect"
// 	petv1 "github.com/bufbuild/buf-tour/gen/pet/v1"
// 	"github.com/bufbuild/buf-tour/gen/pet/v1/petv1connect"
// 	"golang.org/x/net/http2"
// 	"golang.org/x/net/http2/h2c"
// )

// // petStoreServiceServer implements the PetStoreService API.
// type petStoreServiceServer struct {
// 	petv1connect.UnimplementedPetStoreServiceHandler
// }

// func main() {
// 	ws := &petStoreServiceServer{}
// 	mux := http.NewServeMux()
// 	path, handler := petv1connect.NewPetStoreServiceHandler(ws)
// 	mux.Handle(path, handler)
// 	fmt.Println("... Listening on", 8080)
// 	http.ListenAndServe(
// 		":8080",
// 		// Use h2c so we can serve HTTP/2 without TLS.
// 		h2c.NewHandler(mux, &http2.Server{}),
// 	)
// }

// // PutPet adds the pet associated with the given request into the PetStore.
// func (s *petStoreServiceServer) PutPet(
// 	ctx context.Context,
// 	req *connect.Request[petv1.PutPetRequest],
// ) (*connect.Response[petv1.PutPetResponse], error) {
// 	name := req.Msg.GetName()
// 	age := req.Msg.GetAge()
// 	pet_type := req.Msg.GetPetType()
// 	//petType := req.Msg.GetPetType()
// 	// log.Printf("Got a request to create a pet named %s", name, age,pet_type)
// 	log.Printf("Got a request to create a pet named %s, age %s, type %s", name, age, pet_type)
// 	return connect.NewResponse(&petv1.PutPetResponse{Name: name, Age: age, PetType: pet_type}),
// 		nil
// }

// func (s *petStoreServiceServer) ListPets(context.Context, *connect.Request[petv1.ListPetsRequest]) (*connect.Response[petv1.ListPetsResponse], error) {
// 	// データベースからペットのリストを取得するロジックを実装
// 	// ここでは、サンプルデータを返す
// 	pets := []*petv1.Pet{
// 		{PetId: "1", Name: "Buddy"},
// 		{PetId: "2", Name: "Lucy"},
// 	}
// 	response := &petv1.ListPetsResponse{Pets: pets}
// 	return connect.NewResponse(response), nil
// }

// package main

// import (
// 	"context"
// 	"database/sql"
// 	"fmt"
// 	"log"
// 	"net/http"

// 	"connectrpc.com/connect"
// 	petv1 "github.com/bufbuild/buf-tour/gen/pet/v1"
// 	"github.com/bufbuild/buf-tour/gen/pet/v1/petv1connect"
// 	_ "github.com/lib/pq"
// 	"golang.org/x/net/http2"
// 	"golang.org/x/net/http2/h2c"
// )

// const (
// 	host     = "localhost"
// 	port     = 5432 // PostgreSQLがリッスンしているポート
// 	user     = "postgres"
// 	password = "postgres"
// 	dbname   = "postgres"
// )

// // petStoreServiceServer implements the PetStoreService API.
// type petStoreServiceServer struct {
// 	petv1connect.UnimplementedPetStoreServiceHandler
// 	db *sql.DB
// }

// func main() {
// 	ws := &petStoreServiceServer{}
// 	mux := http.NewServeMux()
// 	path, handler := petv1connect.NewPetStoreServiceHandler(ws)
// 	mux.Handle(path, handler)
// 	fmt.Println("... Listening on", 8080)
// 	http.ListenAndServe(
// 		":8080",
// 		// Use h2c so we can serve HTTP/2 without TLS.
// 		h2c.NewHandler(mux, &http2.Server{}),
// 	)

// }

// func initDB() *sql.DB {
// 	// データベース接続文字列を構築
// 	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
// 		host, port, user, password, dbname)

// 	// データベースに接続
// 	db, err := sql.Open("postgres", psqlInfo)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	// defer db.Close() // この行を削除またはコメントアウト

// 	// データベース接続を確認
// 	// err = db.Ping()
// 	// if err != nil {
// 	// 	log.Fatal(err)
// 	// }

// 	// fmt.Println("Successfully connected!")

// 	// ペットを追加する関数を呼び出し
// 	AddPet(db, "Fluffy", 2, "2 months")

// 	return db // この行を追加
// }

// func AddPet(db *sql.DB, name string, pet_type int, age string) {
// 	sqlStatement := `
//     INSERT INTO PetStoreService (name, pet_type, age)
//     VALUES ($1, $2, $3)
//     RETURNING id`
// 	id := 0
// 	err := db.QueryRow(sqlStatement, name, pet_type, age).Scan(&id)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	fmt.Println("New record ID is:", id)
// }

// // PutPet adds the pet associated with the given request into the PetStore.
// func (s *petStoreServiceServer) PutPet(
// 	ctx context.Context,
// 	req *connect.Request[petv1.PutPetRequest],
// ) (*connect.Response[petv1.PutPetResponse], error) {
// 	name := req.Msg.GetName()
// 	age := req.Msg.GetAge()
// 	pet_type := req.Msg.GetPetType()
// 	//petType := req.Msg.GetPetType()
// 	// log.Printf("Got a request to create a pet named %s", name, age,pet_type)
// 	log.Printf("Got a request to create a pet named %s, age %s, type %s", name, age, pet_type)
// 	return connect.NewResponse(&petv1.PutPetResponse{Name: name, Age: age, PetType: pet_type}),
// 		nil
// }

// func (s *petStoreServiceServer) ListPets(context.Context, *connect.Request[petv1.ListPetsRequest]) (*connect.Response[petv1.ListPetsResponse], error) {
// 	// データベースからペットのリストを取得するロジックを実装
// 	// ここでは、サンプルデータを返す
// 	pets := []*petv1.Pet{
// 		{PetId: "1", Name: "Buddy"},
// 		{PetId: "2", Name: "Lucy"},
// 	}
// 	response := &petv1.ListPetsResponse{Pets: pets}
// 	return connect.NewResponse(response), nil
// }

package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"net/http"

	connect "connectrpc.com/connect"
	petv1 "github.com/bufbuild/buf-tour/gen/pet/v1"
	"github.com/bufbuild/buf-tour/gen/pet/v1/petv1connect"
	_ "github.com/lib/pq"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

const (
	host     = "localhost"
	port     = 5432 // PostgreSQLがリッスンしているポート
	user     = "postgres"
	password = "postgres"
	dbname   = "postgres"
)

// petStoreServiceServer implements the PetStoreService API.
type petStoreServiceServer struct {
	petv1connect.UnimplementedPetStoreServiceHandler
	db *sql.DB
}

func main() {
	// データベース接続の設定
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// データベース接続を確認
	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Successfully connected!")

	ws := &petStoreServiceServer{db: db}
	// 以下のコードは変更なし
	mux := http.NewServeMux()
	path, handler := petv1connect.NewPetStoreServiceHandler(ws)
	mux.Handle(path, handler)
	fmt.Println("... Listening on", 8080)
	http.ListenAndServe(
		":8080",
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(mux, &http2.Server{}))
}

func stringToPetType(s string) petv1.PetType {
	switch s {
	case "Dog":
		return petv1.PetType_PET_TYPE_DOG
	case "Cat":
		return petv1.PetType_PET_TYPE_CAT
	case "Snake":
		return petv1.PetType_PET_TYPE_SNAKE
	case "Hamster":
		return petv1.PetType_PET_TYPE_HAMSTER
	// 他のケース
	default:
		return petv1.PetType_PET_TYPE_UNSPECIFIED
	}
}

func (s *petStoreServiceServer) PutPet(ctx context.Context, req *connect.Request[petv1.PutPetRequest]) (*connect.Response[petv1.PutPetResponse], error) {
	// データベースにペットを追加するロジック
	name := req.Msg.GetName()
	age := req.Msg.GetAge()
	pet_type := petv1.PetType(req.Msg.GetPetType())

	_, err := s.db.Exec("INSERT INTO PetStoreService (name, pet_type, age) VALUES ($1, $2, $3)", name, pet_type, age)
	if err != nil {
		log.Printf("Failed to insert pet: %v", err)
		return nil, err
	}

	log.Printf("Added a pet named %s, age %s, type %s", name, age, pet_type)
	return connect.NewResponse(&petv1.PutPetResponse{Name: name, Age: age, PetType: pet_type}), nil
}

func (s *petStoreServiceServer) ListPets(ctx context.Context, req *connect.Request[petv1.ListPetsRequest]) (*connect.Response[petv1.ListPetsResponse], error) {
	// データベースからペットのリストを取得するロジック
	rows, err := s.db.Query("SELECT name, pet_type, age FROM PetStoreService")
	if err != nil {
		log.Printf("Failed to retrieve pets: %v", err)
		return nil, err
	}
	defer rows.Close()

	var pets []*petv1.Pet

	for rows.Next() {
		var name, pet_type, age string
		if err := rows.Scan(&name, &pet_type, &age); err != nil {
			log.Printf("Failed to scan pet: %v", err)
			continue
		}
		PetType_value := stringToPetType(pet_type)
		pets = append(pets, &petv1.Pet{Name: name, PetType: PetType_value, Age: age})
	}

	response := &petv1.ListPetsResponse{Pets: pets}
	return connect.NewResponse(response), nil
}
