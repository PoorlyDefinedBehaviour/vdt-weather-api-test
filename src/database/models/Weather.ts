import Mongoose from "../CreateConnection";

const WeatherSchema = new Mongoose.Schema({
  cityId: Number,

  data: [
    {
      dt: Number,
      temp: {
        day: Number,
        min: Number,
        max: Number,
        night: Number,
        eve: Number,
        morn: Number
      },
      pressure: Number,
      humidity: Number,
      weather: [
        {
          id: Number,
          main: String,
          description: String,
          icon: String
        }
      ],
      speed: Number,
      deg: Number,
      clouds: Number,
      uvi: Number
    }
  ]
});

export interface IWeather extends Mongoose.Document {
  cityId: number;

  data: Array<{
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
    pressure: number;
    humidity: number;
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    speed: number;
    deg: number;
    clouds: number;
    uvi: number;
  }>;
}

export const Weather: Mongoose.Model<IWeather> = Mongoose.model<IWeather>(
  "Weather",
  WeatherSchema
);
