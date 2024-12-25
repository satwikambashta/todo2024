import mongoose from "mongoose";
export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "backendAPI" }) //or mongodb://127.0.0.1:27017
    .then(console.log("connected"))
    .catch((e) => {
      console.log(e);
    });
};
