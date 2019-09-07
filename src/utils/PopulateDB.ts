import { City } from "../database/models/City";
import { Weather } from "../database/models/Weather";

/**
 * Run this only once to populate db with city_list.json and weather_List.json
 */
const get_data_path = (): Array<string> =>
  /test/gi.test(process.env.NODE_ENV as string)
    ? [
        "./../../tests/data/city_test_data.json",
        "./../../tests/data/weather_test_data.json"
      ]
    : ["./../../city_list.json", "./../../weather_list.json"];

export async function populate_db(): Promise<void> {
  await City.remove({});
  await Weather.remove({});

  const [city_data_path, weather_data_path] = get_data_path();

  const city_data = require(city_data_path);
  const weather_data = require(weather_data_path);

  await Promise.all([
    ...city_data.map((data: any) => City.create(data)),
    ...weather_data.map((data: any) => Weather.create(data))
  ]);
}
