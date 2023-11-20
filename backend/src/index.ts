import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeners
connectToDatabase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));