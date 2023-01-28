import React from "react";

export const NewReserva = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 grid justify-center w-full ">
        <div className="py-8  px-4 lg:py-16 mx-auto max-w-screen-md">
          <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Nueva Reserva
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Caracteristicas que encontraras hacerca de las nuevas reservas
          </p>

          <form action="#">

            {/* ------------------------------------------------------------------------------ */}

            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <label htmlFor="id_chin_rese" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Checkint
                </label>

                <input
                  type="time"
                  name="chin_rese"
                  id="id_chin_rese"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="id_chou_rese" className="block mb-1  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Checkout
                </label>

                <input
                  type="time"
                  name="chou_rese"
                  id="id_chou_rese"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
            </div>


            <div className="grid grid-cols-2 gap-4 ">

              <div className="form-group mb-6">
                <label htmlFor="id_hlla_rese" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Hora de llegada (aproximada)
                </label>

                <input
                  type="time"
                  name="hlla_rese"
                  id="id_hlla_rese"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>


              {/*-----------------------------------------------------------------------------------*/}


              <div className="form-group mb-6 ">
                <label htmlFor="id_proc_rese" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Procedencia
                </label>

                <input
                  type="text"
                  name="proc_rese"
                  id="id_proc_rese"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
            </div>


            {/* ------------------------------------------------------------------------------ */}


            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Agregar
            </button>

          </form>

        </div>
      </section >

    </>
  );
};
