import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";

import { City } from "./City";

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => City)
  cityId: City;

  @Column("json")
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
