export const NewHabitacion = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 grid justify-center w-full">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Nueva Habitacion de tu HotelFavorito
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Caracteristicas que encontraras para tu habitacion de Hotel
          </p>

          <form action="#">

            {/* ------------------------------------------------------------------------------ */}

            <div className="grid grid-cols-3 gap-4 ">
              <div className="form-group mb-6">
                <label htmlFor="id_nume_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Numero de Habitación
                </label>

                <input
                  type="number"
                  name="nume_habi"
                  id="id_nume_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="0"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="id_nuca_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Numero de camas
                </label>

                <input
                  type="number"
                  name="nuca_habi"
                  id="id_nuca_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="0"
                  required
                />
              </div>

              <div className="form-group mb-6">
                <label htmlFor="id_nuba_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Numero de Baños
                </label>

                <input
                  type="number"
                  name="nuba_habi"
                  id="id_nuba_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="0"
                  required
                />
              </div>

            </div>
            {/*-----------------------------------------------------------------------------------*/}

            <div className="grid grid-cols-3 gap-4 ">
              <div className="form-group mb-6 ">
                <label htmlFor="id_piso_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Piso
                </label>

                <input
                  type="number"
                  name="piso_habi"
                  id="id_piso_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="0"
                  required
                />
              </div>

              <div className="form-group mb-6 ">
                <label htmlFor="id_colo_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color de Habitacion</label>
                <select id="id_colo_habi" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                  <option selected>Color</option>
                  <option value="BL">Blanco</option>
                  <option value="GR">Gris</option>
                  <option value="RO">Rojo</option>
                  <option value="BE">Beige</option>
                </select>

              </div>

              <div className="form-group mb-6 ">
                <label htmlFor="id_tele_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Television</label>
                <select id="id_tele_habi" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>


            {/* ------------------------------------------------------------------------------ */}

            <div className="grid grid-cols-3 gap-4 ">
              <div className="form-group mb-6 ">
                <label htmlFor="id_aire_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aire Acondicionado</label>
                <select id="id_aire_habi" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="form-group mb-6 ">
                <label htmlFor="id_prec_habi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Precio de la Habitacion
                </label>

                <input
                  type="text"
                  name="prec_habi"
                  id="id_prec_habi"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="$30"
                  required
                />
              </div>
            </div>


            <div className="sm:col-span-2 py-2">
              <label
                htmlFor="id_desc_habi"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Descripccion.
              </label>
              <textarea
                id="id_desc_habi"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Description de la Habitacion"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Agregar nueva Habitacion
            </button>

          </form>
        </div>
      </section >




    </>
  );
};

