import { conn_oracle, close_conn_oracle, oracledb } from "./conexion";

export async function select_all_habitaciones() {
  try {
    var conn = await conn_oracle();
    var result = await conn.execute(`SELECT * FROM habitacion`);
    return result.rows;
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function select_habitacion_for_id(id: number) {
  try {
    var conn = await conn_oracle();
    var result = await conn.execute(
      `SELECT * FROM habitacion WHERE idxx_habi= :id_habi`,
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

export async function insert_habitacion(
  nume: number,
  nuca: number,
  nuba: number,
  piso: number | undefined,
  colo: string | undefined,
  tele: boolean | undefined,
  aire: boolean | undefined,
  descp: string | undefined,
  prec: number
) {
  try {
    var conn = await conn_oracle();
    await conn.execute(
      `BEGIN
      insertar_habitacion(:nume, :nuca, :nuba, :piso, :colo, :tele, :aire, :descp, :prec);
      END;`,
      {
        // bind variables
        nume: { dir: oracledb.BIND_IN, val: nume, type: oracledb.NUMBER },
        nuca: { dir: oracledb.BIND_IN, val: nuca, type: oracledb.NUMBER },
        nuba: { dir: oracledb.BIND_IN, val: nuba, type: oracledb.NUMBER },
        piso: { dir: oracledb.BIND_IN, val: piso, type: oracledb.NUMBER },
        colo: { dir: oracledb.BIND_IN, val: colo, type: oracledb.STRING },
        tele: { dir: oracledb.BIND_IN, val: tele, type: oracledb.NUMBER },
        aire: { dir: oracledb.BIND_IN, val: aire, type: oracledb.NUMBER },
        descp: { dir: oracledb.BIND_IN, val: descp, type: oracledb.STRING },
        prec: { dir: oracledb.BIND_IN, val: prec, type: oracledb.NUMBER },
      }
    );
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function update_habitacion(
  idxx: number,
  nume: number,
  nuca: number,
  nuba: number,
  piso: number | undefined,
  colo: string | undefined,
  tele: boolean | undefined,
  aire: boolean | undefined,
  descp: string | undefined,
  prec: number
) {
  try {
    var conn = await conn_oracle();
    await conn.execute(
      `BEGIN
      actualizar_habitacion_for_id (:idxx, :nume, :nuca, :nuba, :piso, :colo, :tele, :aire, :descp, :prec);
      END;`,
      {
        // bind variables
        idxx: { dir: oracledb.BIND_IN, val: idxx, type: oracledb.NUMBER },
        nume: { dir: oracledb.BIND_IN, val: nume, type: oracledb.NUMBER },
        nuca: { dir: oracledb.BIND_IN, val: nuca, type: oracledb.NUMBER },
        nuba: { dir: oracledb.BIND_IN, val: nuba, type: oracledb.NUMBER },
        piso: { dir: oracledb.BIND_IN, val: piso, type: oracledb.NUMBER },
        colo: { dir: oracledb.BIND_IN, val: colo, type: oracledb.STRING },
        tele: { dir: oracledb.BIND_IN, val: tele, type: oracledb.NUMBER },
        aire: { dir: oracledb.BIND_IN, val: aire, type: oracledb.NUMBER },
        descp: { dir: oracledb.BIND_IN, val: descp, type: oracledb.STRING },
        prec: { dir: oracledb.BIND_IN, val: prec, type: oracledb.NUMBER },
      }
    );
  } catch (err: any) {
    console.error(err.message);
  } finally {
    close_conn_oracle(conn);
  }
}

export async function delete_habitacion(idxx: number) {
  try {
    var conn = await conn_oracle();
    await conn.execute(
      `BEGIN
      eliminar_habitacion_for_id (:idxx );
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
