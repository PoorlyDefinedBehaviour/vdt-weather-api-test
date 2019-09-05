import Mongoose from "mongoose";

Mongoose.set("useCreateIndex", true);
Mongoose.set("useFindAndModify", false);

Mongoose.connect(
  "mongodb://db:27017/weather-api"
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    keepAlive: true,
    keepAliveInitialDelay: 30000
  },
  (error: any): any => {
    if (error) {
      throw error;
    }
  }
);

export default Mongoose;
