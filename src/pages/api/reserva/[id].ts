import type { NextApiRequest, NextApiResponse } from "next";
import { select_huesped_for_id, delete_huesped } from "database";
import { IHuesped } from "interfaces";

type Data = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return obtenerHuespedPorId(req, res);
    case "DELETE":          
      eliminarHuesped(req, res);
      break;
  }
}

const obtenerHuespedPorId = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query as { id: string };
  try {
    select_huesped_for_id(parseInt(id)).then((req) => {
      const datas: IHuesped = {
        id: req[0][0],
        cedula: req[0][1],
        nombre: req[0][2],
        apellido: req[0][3],
        direccion: req[0][4],
        telefono: req[0][5],
        email: req[0][6],        
      };
      return res.status(200).json(datas);
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};
const eliminarHuesped = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query as { id: string };        
    delete_huesped(parseInt(id));
    return res.status(200).json({id});
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};
