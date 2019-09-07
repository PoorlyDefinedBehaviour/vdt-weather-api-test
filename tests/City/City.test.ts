import axios from "axios";

const ENDPOINT: string = "http://localhost:3000/api/v1";

describe("city test suite", () => {
  test("list all cities with no filter", async () => {
    const { data } = await axios.get(`${ENDPOINT}/city`);

    expect(data.cities.length).toBe(5);
  });

  test("list cities filtered by lat and lon", async () => {
    const { data: data_1 } = await axios.get(`${ENDPOINT}/city?lat=30&lon=60`);

    expect(data_1.cities.length).toBe(0);

    const { data: data_2 } = await axios.get(`${ENDPOINT}/city?lat=0&lon=180`);

    expect(data_2.cities.length).toBe(5);
  });

  test("list cities that have weather info available", async () => {
    const { data } = await axios.get(`${ENDPOINT}/city/available`);

    expect(data.cities.length).toBe(1);
  });

  test("get city by id", async () => {
    const id: number = 3531732;

    const { data } = await axios.get(`${ENDPOINT}/city/${id}`);

    expect(data.city.id).toBe(id);
  });
});
