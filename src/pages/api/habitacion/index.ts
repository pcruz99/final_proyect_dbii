import type { NextApiRequest, NextApiResponse } from "next";
import {
  select_all_habitaciones,
  insert_habitacion,
  update_habitacion,
} from "database";
import { IHabitacion } from "interfaces";

type Data = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return obtenerHabitaciones(req, res);
    case "POST":
      insertarHabitacion(req, res);
      break;
    case "PUT":
      actualizarHabitacion(req, res);
      break;
  }
}

const obtenerHabitaciones = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    select_all_habitaciones().then((req) => {
      const datas: IHabitacion[] = [];
      for (let data of req) {
        const d: IHabitacion = {
          id: data[0],
          numero: data[1],
          cantidad_camas: data[2],
          cantidad_banos: data[3],
          piso: data[4],
          color: data[5],
          television: data[6],
          aire: data[7],
          descripcion: data[8],
          precio: data[9],
        };
        datas.push(d);
      }
      return res.status(200).json(datas);
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};

const insertarHabitacion = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: IHabitacion = req.body;

    insert_habitacion(
      data.numero,
      data.cantidad_camas,
      data.cantidad_banos,
      data.piso,
      data.color,
      data.television,
      data.aire,
      data.descripcion,
      data.precio
    );
    return res.status(200).json(data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};

const actualizarHabitacion = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: IHabitacion = req.body;
    update_habitacion(
      data.id,
      data.numero,
      data.cantidad_camas,
      data.cantidad_banos,
      data.piso,
      data.color,
      data.television,
      data.aire,
      data.descripcion,
      data.precio
    );
    return res.status(200).json(data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};

