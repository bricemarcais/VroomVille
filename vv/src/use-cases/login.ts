import { getUserByEmail } from "./queries";

export default async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const user = await getUserByEmail(email);
  } catch (error) {
    console.log("Erreur lors de user by email login: " + error);
  }
}
