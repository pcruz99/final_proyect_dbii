import React from "react";

const nuevo = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Agregar una Nueva Habitacion
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          {/* ######################################################################## */}
          <form action="#" className="space-y-8">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="id_nume_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Numero de Habitacion
                </label>
                <input
                  type="text"
                  id="id_nume_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="id_nuca_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Cantidad de Camas
                </label>
                <input
                  type="text"
                  id="id_nuca_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="id_nuba_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Cantidad de Baños
                </label>
                <input
                  type="text"
                  id="id_nuba_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="id_piso_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Numero del Piso
                </label>
                <input
                  type="text"
                  id="id_piso_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="id_colo_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Color de Habitacion
                </label>
                <input
                  type="text"
                  id="id_colo_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="id_tele_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Telvision
                </label>
                <input
                  type="checkbox"
                  id="id_tele_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"                                    
                />
              </div>
              <div>
                <label
                  htmlFor="id_aire_habi"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Aire Acondicionado
                </label>
                <input
                  type="checkbox"
                  id="id_aire_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"                                    
                />
              </div>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default nuevo;
