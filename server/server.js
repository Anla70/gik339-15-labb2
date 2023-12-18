const express = require("express");
const server = express();
const port = 3000;
const sqlite3 = require("sqlite3").verbose();

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // *?
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next(); // Skickar vidare till nästa 
  });

  // Skapar en databaskoppling
const db = new sqlite3.Database("./gik339-labb2.db");

// Skapar en GET-route för att hämta användardata från vår databas
server.get("/users", (req, res) => {
  // SQL-fråga med * för att hämta alla rader från tabellen users
  const query = "SELECT * FROM users";

  // Använder instansen db.all() för att utföra SQL-frågan med en callback-funktion  (err, rows)
  db.all(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send(err); // Hanterar eventuella fel (500 = generellt server-fel)
    } else {
      res.send(rows); // Allt gick bra - skickar resultatet till klienten
    }
  });
});

// Startar servern medoch visar bekräftelsemeddelande
server.listen(port, () => {console.log(`Server is running: ${port}`);});
    
  

