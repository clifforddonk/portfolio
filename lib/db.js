import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

// Global variable caching for development (to avoid multiple connections)
let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "cliff-blog", // You can change this to "cliff-blog" or anything
    });
    cached.conn = await cached.promise;
  }

  global.mongoose = cached;
  return cached.conn;
}

export default dbConnect;
