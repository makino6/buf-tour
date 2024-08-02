// // client_connect_web.tsx
// import { createPromiseClient } from "@connectrpc/connect";
// import { createConnectTransport } from "@connectrpc/connect-web";

// // Import service definition that you want to connect to.
// import { PetStoreService } from './gen/pet/v1/pet_connect';
// import { PutPetRequest } from './gen/pet/v1/pet_pb';

// const transport = createConnectTransport({
//   baseUrl: "http://localhost:8080",
// });

// // Here we make the client itself, combining the service
// // definition with the transport.
// const client = createPromiseClient(PetStoreService, transport);

// async function App() {
  
//   const response = await client.putPet(new PutPetRequest(
//     { name: "Kenzo"}
//   ));
//   console.log(response)
// }
// App();

// client_connect_web.tsx
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

// サービス定義をインポートします。
import { PetStoreService } from './gen/pet/v1/pet_connect';
import { PutPetRequest, ListPetsRequest, PetType } from './gen/pet/v1/pet_pb';
import { PutPetResponse } from './gen/pet/v1/pet_pb';

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

// サービス定義とトランスポートを組み合わせてクライアント自体を作成します。
const client = createPromiseClient(PetStoreService, transport);

async function App() {
  // PutPetを呼び出してペットを追加
  const putResponse = await client.putPet(new PutPetRequest(
    {petType: PetType.DOG, name: "Kenzo", age: "2month"}
  ))as PutPetResponse;
  console.log(putResponse);
    // putResponseからpetTypeも出力（putResponseの構造に依存）
    console.log(`PetType: ${putResponse.type}`);

  // ListPetsを呼び出してペットのリストを取得
  const listResponse = await client.listPets(new ListPetsRequest());
  console.log(listResponse);
}

App();