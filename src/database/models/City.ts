import Mongoose from "../CreateConnection";

const CitySchema = new Mongoose.Schema({
  id: { type: Number, required: true },

  coord: {
    lon: Number,
    lat: Number
  },

  country: String,

  geoname: {
    cl: String,
    code: String,
    parent: Number
  },

  name: String,

  stat: {
    level: Number,
    population: Number
  },

  stations: [
    {
      id: Number,
      dist: Number,
      kf: Number
    }
  ],

  zoom: Number,

  langs: { type: [{}], required: false }
});

export interface ICity extends Mongoose.Document {
  id: number;

  coord: {
    lon: number;
    lat: number;
  };

  geoname: {
    cl: string;
    code: string;
    parent: number;
  };

  name: string;

  stat: {
    level: number;
    population: number;
  };

  stations: [
    {
      id: number;
      dist: number;
      kf: number;
    }
  ];

  zoom: number;

  langs: Array<any>;
}

export const City: Mongoose.Model<ICity> = Mongoose.model<ICity>(
  "City",
  CitySchema
);
