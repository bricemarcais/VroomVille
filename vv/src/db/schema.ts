import {
  mysqlTable,
  int,
  varchar,
  decimal,
  boolean,
  date,
} from "drizzle-orm/mysql-core";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  first_name: varchar("full_name", { length: 50 }),
  last_name: varchar("last_name", { length: 50 }),
  email: varchar("user.name@mail.com", { length: 50 }).unique(""),
  password: varchar("password", { length: 255 }),
  phone: varchar("phone", { length: 12 }),
  age: int("age"),
  driver_license_number: varchar("20", { length: 20 }).unique(""),
  isAdmin: boolean("isAdmin"),
});

export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type

export const cars = mysqlTable("cars", {
  id: int("id").autoincrement().primaryKey(),
  brand: varchar("brand", { length: 50 }),
  model: varchar("model", { length: 50 }),
  plate: varchar("plate", { length: 12 }).unique(""),
  price: decimal("price"),
  mileage: int("mileage"),
  type: varchar("type", { length: 15 }),
  fuel: varchar("fuel", { length: 10 }),
  img: varchar("img", { length: 255 }),
  available: boolean("available"),
});

export type Car = typeof cars.$inferSelect; // return type when queried
export type NewCar = typeof cars.$inferInsert; // insert type

export const orders = mysqlTable("orders", {
  id: int("id").autoincrement().primaryKey(),
  user_id: int("user_id").references(() => users.id),
  car_id: int("car_id").references(() => cars.id),
  order_date: date("date"),
  status: varchar("status", { length: 50 }),
});

export type Order = typeof orders.$inferSelect; // return type when queried
export type NewOrder = typeof orders.$inferInsert; // insert type
