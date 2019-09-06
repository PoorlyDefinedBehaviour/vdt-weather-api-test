import { City } from "./src/database/models/City";
import { Weather } from "./src/database/models/Weather";

/**
 * Run this only once to populate db with city_list.json and weather_List.json
 */
const populate_with_cities = async (): Promise<void> => {
  const cities = require("./city_list.json");
  const promises = cities.map((city: any) => City.create(city));

  await Promise.all(promises);
};

const populate_with_weathers = async (): Promise<void> => {
  const weathers = require("./weather_list.json");
  const promises = weathers.map((weather: any) => Weather.create(weather));

  await Promise.all(promises);
};

export async function populate_db(): Promise<void> {
  await City.remove({});
  await Weather.remove({});

  await populate_with_cities();
  await populate_with_weathers();
}
