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

export async function getUserByEmail(email) {
  const data = await connection.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  console.log(data);
  return data;
}
