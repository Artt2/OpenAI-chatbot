import { connect } from "mongoose";

const connectToDatabase = async () => {
  connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });
};

export { connectToDatabase };