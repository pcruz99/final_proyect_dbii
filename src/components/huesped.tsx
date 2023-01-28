import React from 'react'

const huesped = () => {
    return (
        <div className=" grid justify-center w-full ">
            <h2 className='pb-3'>Datos de Huesped</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="form-group mb-6">
                    <label htmlFor="id_nomb_hues" className="block mb-1 text-sm font-medium text-gray-900 dark:text-black" >
                        Nombre
                    </label>

                    <input
                        type="text"
                        name="nomb_hues"
                        id="id_nomb_hues"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder=""
                        required
                    />
                </div>
                <div className="form-group mb-6">
                    <label htmlFor="id_apel_hues" className="block mb-1  text-sm font-medium text-gray-900 dark:text-black">
                        Apellido
                    </label>

                    <input
                        type="text"
                        name="apel_hues"
                        id="id_apel_hues"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder=""
                        required
                    />
                </div>
            </div>


            <div className="grid grid-cols-2 gap-4 ">

                <div className="form-group mb-6">
                    <label htmlFor="id_cedu_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                        Cedula
                    </label>

                    <input
                        type="tel"
                        name="cedu_hues"
                        id="id_cedu_hues"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder=""
                        required
                    />
                </div>


                {/*-----------------------------------------------------------------------------------*/}


                <div className="form-group mb-6 ">
                    <label htmlFor="id_dire_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" >
                        Direccion
                    </label>

                    <input
                        type="text"
                        name="dire_hues"
                        id="id_dire_hues"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder=""
                        required
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="form-group mb-6 ">
                    <label htmlFor="id_tele_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" >
                        Telefono
                    </label>

                    <input
                        type="tel"
                        name="tele_hues"
                        id="id_tele_hues"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder=""
                        required
                    />
                </div>

                <div className="form-group mb-6 ">
                    <label htmlFor="id_emai_hues" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" >
                        E-mail
                    </label>

                    <input
                        type="email"
                        name="emai_hues"
                        id="id_temai_hues"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-80 p-2.5  dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="example@gmail.com"
                        required
                    />
                </div>
            </div>

        </div>
    )
}

export default huesped