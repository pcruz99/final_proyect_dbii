import { conn_oracle, close_conn_oracle, oracledb } from "./conexion";

export async function select_all_reserva() {
    try {
      var conn = await conn_oracle();
      var result = await conn.execute(`SELECT * FROM reserva_detallada`);
      return result.rows;
    } catch (err: any) {
      console.error(err.message);
    } finally {
      close_conn_oracle(conn);
    }
  }