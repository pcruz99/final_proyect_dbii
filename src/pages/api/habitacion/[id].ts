import type { NextApiRequest, NextApiResponse } from "next";
import { select_habitacion_for_id, delete_habitacion } from "database";
import { IHabitacion } from "interfaces";

type Data = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return obtenerHabitacionPorId(req, res);
    case "DELETE":          
      eliminarHabitacion(req, res);
      break;
  }
}

const obtenerHabitacionPorId = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  try {
    select_habitacion_for_id(parseInt(id)).then((req) => {
      const datas: IHabitacion = {
        id: req[0][0],
        numero: req[0][1],
        cantidad_camas: req[0][2],
        cantidad_banos: req[0][3],
        piso: req[0][4],
        color: req[0][5],
        television: req[0][6],
        aire: req[0][7],
        descripcion: req[0][8],
        precio: req[0][9],
      };
      return res.status(200).json(datas);
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};
const eliminarHabitacion = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query as { id: string };        
    delete_habitacion(parseInt(id));
    return res.status(200).json({id});
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};
