
export const NewHuesped = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 grid justify-center w-full ">
        <div className="py-8  px-4 lg:py-16 mx-auto max-w-screen-md">
          <h2 className="mb-3 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Nuevo Huesped
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Caracteristicas que encontraras para tus nuevos Huespedes
          </p>

          <form action="#">

            {/* ------------------------------------------------------------------------------ */}

            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <label htmlFor="id_nomb_hues" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Nombre
                </label>

                <input
                  type="text"
                  name="nomb_hues"
                  id="id_nomb_hues"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="id_apel_hues" className="block mb-1  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Apellido
                </label>

                <input
                  type="text"
                  name="apel_hues"
                  id="id_apel_hues"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
              </div>


              <div className="grid grid-cols-2 gap-4 ">

                <div className="form-group mb-6">
                  <label htmlFor="id_cedu_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Cedula
                  </label>

                  <input
                    type="tel"
                    name="cedu_hues"
                    id="id_cedu_hues"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder=""
                    required
                  />
                </div>

              
              {/*-----------------------------------------------------------------------------------*/}


              <div className="form-group mb-6 ">
                <label htmlFor="id_dire_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Direccion
                </label>

                <input
                  type="text"
                  name="dire_hues"
                  id="id_dire_hues"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="form-group mb-6 ">
                <label htmlFor="id_tele_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  Telefono
                </label>

                <input
                  type="tel"
                  name="tele_hues"
                  id="id_tele_hues"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder=""
                  required
                />
              </div>

              <div className="form-group mb-6 ">
                <label htmlFor="id_emai_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >
                  E-mail
                </label>

                <input
                  type="email"
                  name="emai_hues"
                  id="id_temai_hues"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="example@gmail.com"
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
