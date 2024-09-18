import connection from "../../db";

export async function getCars() {
  const [data] = await connection.execute("SELECT * FROM cars");
  //   console.log(data);
  return data;
}

export async function getCar(id) {
  const [data] = await connection.execute(
    "SELECT model, brand, mileage, type, fuel, price FROM cars WHERE id = ?",
    [id]
  );
  console.log(data);
  return data;
}

export async function getUser(id) {
  const [data] = await connection.execute(
    "SELECT first_name, last_name, email, age, driver_license_number, phone FROM users WHERE id = ?",
    [id]
  );
  console.log(data);
  return data;
}
