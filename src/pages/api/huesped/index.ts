import type { NextApiRequest, NextApiResponse } from "next";
import { select_all_huespedes, insert_huesped, update_huesped } from "database";
import { IHuesped } from "interfaces";

type Data = {
  name: string;
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return obtenerHuespedes(req, res);
    case "POST":
      insertarHuesped(req, res);
      break;
    case "PUT":
      actualizarHuesped(req, res);
      break;
  }
}

const obtenerHuespedes = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    select_all_huespedes().then((req) => {
      const datas: IHuesped[] = [];
      for (let data of req) {
        datas.push({
          id: data[0],
          cedula: data[1],
          nombre: data[2],
          apellido: data[3],
          direccion: data[4],
          telefono: data[5],
          email: data[6],
        });
      }
      return res.status(200).json(datas);
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};

const insertarHuesped = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: IHuesped = req.body;
    insert_huesped(
      data.cedula,
      data.nombre,
      data.apellido,
      data.direccion,
      data.telefono,
      data.email
    );
    return res.status(200).json(data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};

const actualizarHuesped = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data: IHuesped = req.body;
    update_huesped(
      data.id,
      data.cedula,
      data.nombre,
      data.apellido,
      data.direccion,
      data.telefono,
      data.email
    );
    return res.status(200).json(data);
  } catch (error: any) {
    return res
      .status(500)
      .json({ status: 500, message: error.message, data: error });
  }
};


