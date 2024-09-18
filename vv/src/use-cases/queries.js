import connection from "../../db";

export async function getCars() {
  const [res] = await connection.execute("SELECT * FROM cars");
  console.log(res);
  return res;
}

export async function getCar(id) {
  const [res] = await connection.execute(
    "SELECT model, brand, mileage, type, fuel, price FROM cars WHERE id = ?",
    [id]
  );
  console.log(res);
  return res;
}

export async function getUser(id) {
  const [res] = await connection.execute(
    "SELECT first_name, last_name, email, age, driver_license_number, phone FROM users WHERE id = ?",
    [id]
  );
  console.log(res);
  return res;
}
