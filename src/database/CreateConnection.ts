import Mongoose from "mongoose";

Mongoose.set("useCreateIndex", true);
Mongoose.set("useFindAndModify", false);

Mongoose.connect(
  /test/gi.test(process.env.NODE_ENV as string)
    ? (process.env.MONGODB_TEST_URL as string)
    : (process.env.MONGODB_URL as string),
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
