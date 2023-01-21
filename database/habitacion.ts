import { IHabitacion } from "interfaces";
const oracledb = require('oracledb');
const mypw = 'hotel'  // set mypw to the hr schema password

export async function habitacion() {
  try {
    var connection = await oracledb.getConnection({
      user          : "hotel",
      password      : mypw,
      connectString : "localhost"
    });

    var result = await connection.execute(`SELECT last_name FROM employees`);
    console.log("Result is:", result);

  } catch (err: any) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        await connection.close();   // Always close connections
      } catch (err: any) {
        console.error(err.message);
      }
    }
  }
}
