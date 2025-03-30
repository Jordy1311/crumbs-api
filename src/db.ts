import mongoose from "mongoose";

const connectToMongoDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI!);

    console.log(`[Server]  Connected to mongoDB database: ${connection.connection.name}`);
  } catch (error) {
    console.error(`[Server]  Failed to connect to mongodb database: ${error}`);
    process.exit(1);
  }
};

export default connectToMongoDB;
