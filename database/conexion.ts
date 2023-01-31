export const oracledb = require("oracledb");
const mypw = "hotel"; // set mypw to the hr schema password

export async function conn_oracle() {
  try {
    var connection = await oracledb.getConnection({
      user: "hotel",
      password: mypw,
      connectString: "localhost",
    });
    return connection;
  } catch (err: any) {
    console.error(err);
  }
}

export async function close_conn_oracle(conn: any) {
  if (conn) {
    try {
      await conn.close(); // Always close connections
    } catch (err: any) {
      console.error(err.message);
    }
  }
}
