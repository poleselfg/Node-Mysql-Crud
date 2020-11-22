const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "codoacodo",
}); //datos de conexion con la base de datos

connection.connect((error) => {
  if (error) throw error;
  console.log(connection.threadId);
}); //llamar a conectar a la db con los datos de mas arriba
//captura el error y si lo hay lo console log

//-------------------
//        CRUD
//-------------------

//READ
connection.query("SELECT * FROM usuarios", (error, results, fields) => {
  if (error) throw error;
  console.table(results);
}); //hace query a la db seleccionando e imprimiendo la informacion (captura error de la misma manera que connection.connect)

//INSERT
let sqlInsert =
  "INSERT INTO usuarios ( user, pass) VALUES ('juancho', 'clavree')";

connection.query(sqlInsert, (error, results) => {
  if (error) throw error;
  console.log(results);
}); //query para agregar info a la db

//UPDATE

let sqlUpdate = "UPDATE usuarios SET user = 'pepito' WHERE id=2 ";

connection.query(sqlUpdate, (error, results) => {
  if (error) throw error;
  console.log(results);
});

//DELETE

let sqlDelete = "DELETE FROM `usuarios` WHERE id=5";

connection.query(sqlDelete, (error, results) => {
  if (error) throw error;
  console.log(results);
});

connection.end(); //debe ir al final para cortar la conexion si no queda activa constantemente hasta que se caiga.
