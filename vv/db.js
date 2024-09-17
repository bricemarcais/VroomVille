// db.js
import mysql from "mysql2/promise";

// Configuration de la connexion
//TODO METTRE EN ENV
const connection = await mysql.createConnection({
  host: "localhost", // ou l'adresse de ton serveur MySQL
  user: "root", // ton nom d'utilisateur MySQL
  password: "0000", // ton mot de passe
  database: "vroomville", // nom de ta base de données
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err);
  } else {
    console.log("Connecté à la base de données MySQL");
  }
});

export default connection;
