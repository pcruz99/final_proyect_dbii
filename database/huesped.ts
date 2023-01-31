import { conn_oracle, close_conn_oracle, oracledb } from "./conexion";

export async function select_all_huespedes() {
  try {
    var conn = await conn_oracle();
    var result = await conn.execute(`SELECT * FROM huesped`);
    return result.rows;
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function select_huesped_for_id(id: number) {
  try {
    var conn = await conn_oracle();
    var result = await conn.execute(
      `SELECT * FROM huesped WHERE idxx_hues= :id_hues`,
      [id],
      { maxRows: 1 }
    );
    return result.rows;
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function insert_huesped(
  cedu: string,
  nomb: string,
  apel: string,
  dire: string | undefined,
  tele: string | undefined,
  emai: string | undefined
) {
  try {
    var conn = await conn_oracle();
    await conn.execute(
      `BEGIN
        insertar_huesped (:cedu, :nomb, :apel, :dire, :tele, :emai);
        END;`,
      {
        // bind variables
        cedu: { dir: oracledb.BIND_IN, val: cedu, type: oracledb.STRING },
        nomb: { dir: oracledb.BIND_IN, val: nomb, type: oracledb.STRING },
        apel: { dir: oracledb.BIND_IN, val: apel, type: oracledb.STRING },
        dire: { dir: oracledb.BIND_IN, val: dire, type: oracledb.STRING },
        tele: { dir: oracledb.BIND_IN, val: tele, type: oracledb.STRING },
        emai: { dir: oracledb.BIND_IN, val: emai, type: oracledb.STRING },
      }
    );
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function update_huesped(
  idxx: number,
  cedu: string,
  nomb: string,
  apel: string,
  dire: string | undefined,
  tele: string | undefined,
  emai: string | undefined
) {
  try {
    var conn = await conn_oracle();
    await conn.execute(
      `BEGIN
      actualizar_huesped_for_id (:idxx, :cedu, :nomb, :apel, :dire, :tele, :emai);
      END;`,
      {
        // bind variables
        idxx: { dir: oracledb.BIND_IN, val: idxx, type: oracledb.NUMBER },
        cedu: { dir: oracledb.BIND_IN, val: cedu, type: oracledb.STRING },
        nomb: { dir: oracledb.BIND_IN, val: nomb, type: oracledb.STRING },
        apel: { dir: oracledb.BIND_IN, val: apel, type: oracledb.STRING },
        dire: { dir: oracledb.BIND_IN, val: dire, type: oracledb.STRING },
        tele: { dir: oracledb.BIND_IN, val: tele, type: oracledb.STRING },
        emai: { dir: oracledb.BIND_IN, val: emai, type: oracledb.STRING },
      }
    );
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function delete_huesped(idxx: number) {
  try {
    var conn = await conn_oracle();
    await conn.execute(
      `BEGIN
      eliminar_huesped_for_id (:idxx);
      END;`,
      {
        // bind variables
        idxx: { dir: oracledb.BIND_IN, val: idxx, type: oracledb.NUMBER },
      }
    );
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}