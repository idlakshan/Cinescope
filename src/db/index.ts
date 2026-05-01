import { MongoClient } from "mongodb";
import dns from "node:dns/promises";

// Use reliable DNS for SRV resolution
dns.setServers(["1.1.1.1"]);
const MONGODB_URI = process.env.MONGO_URI || "";
const OPTIONS = {}

const client = new MongoClient(MONGODB_URI, OPTIONS);

export const db = client.db("sample_mflix");