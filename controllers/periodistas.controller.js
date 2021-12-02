import { connection } from '../common/db.js';

// (GET) / → Lista de periodistas
const get = (req, res) => {
  connection.query(
    'SELECT * FROM periodistas ORDER BY created_at ASC',
    (err, rows) => {
      err ? res.status(500).send(err) : res.status(200).send(rows);
    }
  );
};

// (POST) / → Recibe en el body nombre y fecha de nacimiento
const addPeriodista = (req, res) => {
  // recibe los parametros de nombre y fecha nacimiento en el body
  const nombrePer = req.body.nombre;
  const fechaNacimientoPer = req.body.fechaNacimiento;
  // ejecuta la inserccion sql en la tabla periodistas
  connection.query(
    `INSERT INTO periodistas (nombre, fechaNacimiento) VALUES ('${nombrePer}', '${fechaNacimientoPer}');`,
    (err, rows) => {
      err ? res.status(500).send(err) : res.status(200).send(rows);
    }
  );
};

export { get, addPeriodista };
