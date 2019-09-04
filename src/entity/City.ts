import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class City {
  @PrimaryColumn()
  id: number;

  @Column("json")
  coord: {
    lon: number;
    lat: number;
  };

  @Column()
  country: string;

  @Column("json")
  geoname: {
    cl: string;
    code: string;
    parent: number;
  };

  @Column()
  name: string;

  @Column("json")
  stat: {
    level: number;
    population: number;
  };

  @Column("json")
  stations: Array<{ id: number; dist: number; kf: number }>;

  @Column()
  zoom: number;
}
