import { Request, Response } from "express";

import { InternalServerError } from "../messages/InternalServerError";

import { City, ICity } from "../../database/models/City";
import { IWeather, Weather } from "../../database/models/Weather";

export class CityController {
  public static index = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    try {
      const { lat, lon, skip = 0, limit = 9999 } = request.query;

      const cities: Array<ICity> = (await City.find({})
        .skip(skip as number)
        .limit(limit as number)).filter(({ coord }: ICity) =>
        lat ? coord.lat >= lat : true && lon ? coord.lon <= lon : true
      );

      return response.json({ skip, limit, cities });
    } catch (ex) {
      console.error(ex);
      return response.status(500).json({ message: InternalServerError });
    }
  };

  public static available = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    try {
      const { skip = 0, limit = 9999 } = request.query;

      const weather: Array<IWeather> = await Weather.find();
      const cities: Array<ICity> = (await City.find({})
        .skip(skip as number)
        .limit(limit as number)).filter(
        (city: ICity) =>
          !!weather.find((weather: IWeather) => weather.cityId === city.id)
      );

      return response.json({ skip, limit, cities });
    } catch (ex) {
      console.error(ex);
      return response.status(500).json({ message: InternalServerError });
    }
  };

  public static get_by_id = async (
    request: Request,
    response: Response
  ): Promise<Response> => {
    try {
      const { id } = request.params;
      const { date_start, date_end } = request.query;

      const city: ICity | null = await City.findOne({ id });
      let weathers: Array<IWeather> = await Weather.find({ cityId: id });
      if (date_start || date_end) {
        weathers.forEach(
          (weather: IWeather) =>
            (weather.data = weather.data.filter(
              (data: any) =>
                (date_start ? data.dt >= date_start : true) &&
                (date_end ? data.dt <= date_end : true)
            ))
        );

        weathers = weathers.filter(
          (weather: IWeather) => weather.data.length > 0
        );
      }

      return response.json({ city, weathers });
    } catch (ex) {
      console.error(ex);
      return response.status(500).json({ message: InternalServerError });
    }
  };
}
