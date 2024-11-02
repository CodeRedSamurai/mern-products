import mongoose from "mongoose";

export const conncetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO CONNECTED");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
