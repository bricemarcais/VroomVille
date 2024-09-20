import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

// Configuration de la connexion
//TODO METTRE EN ENV
// SECRET_DB_HOST=
// SECRET_DB_USER=
// SECRET_DB_PASSWORD=
// SECRET_DB_DBNAME=

const connection = await mysql.createConnection({
  host: import.meta.env.SECRET_DB_HOST, // ou l'adresse du serveur MySQL
  user: import.meta.env.SECRET_DB_USER, // nom d'utilisateur MySQL
  password: import.meta.env.SECRET_DB_PASSWORD, // mot de passe
  database: import.meta.env.SECRET_DB_DBNAME, // nom de ta base de données
});

const db = drizzle(connection);

// connection.connect((err) => {
//   if (err) {
//     console.log("Erreur de connexion à la base de données:", err);
//   } else {
//     console.log("Connecté à la base de données MySQL");
//   }
// });

export default db;
