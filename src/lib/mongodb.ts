import { MongoClient, type Db } from "mongodb";

let clientPromise: Promise<MongoClient> | null = null;

async function getMongoClient() {
  const uri = process.env.MONGO_URL;

  if (!uri) {
    throw new Error("MONGO_URL is not configured");
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri).connect();
  }

  return clientPromise;
}

export async function getMongoDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(process.env.MONGO_DB_NAME || undefined);
}
