const express = require("express");
const server = express();
const port = 3000;
const sqlite3 = require("sqlite3").verbose();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

// Skapar en databaskoppling
const db = new sqlite3.Database("./gik339-labb2.db");

// Vi har en GET-route för att hämta användardata från databasen
server.get("/users", (req, res) => {
    const query = "SELECT * FROM users";
    db.all(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {
            res.send(rows);
        }
    });
});

// Vi har en POST-route för att lägga till en ny användare
server.post("/users", (req, res) => {
    const { firstName, lastName, username, color } = req.body;
    const query = `INSERT INTO users (firstName, lastName, username, color) VALUES (?, ?, ?, ?)`;
    // Vi kör vår query 
    db.run(query, [firstName, lastName, username, color], (err) => { 
      if (err) {
          console.error(err); // Skriver ut felmeddelandet i terminalen
          res.status(500).send("!!!  Error adding user to the database  !!!"); // Visar i Postman att det inte gick att lägga till användaren
      } else {
          console.log("User added successfully!"); // Skriver ut i terminalen att användaren har lagts till
          res.status(200).send("User added successfully!"); // Visar i Postman att användaren har lagts till
      }
  });
});

// Startar servern
server.listen(port, () => {console.log(`Server is running on port: ${port}`);});
    
  

