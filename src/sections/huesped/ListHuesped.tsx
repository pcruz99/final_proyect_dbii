import React from 'react'

export const ListHuesped = () => {
  return (
    <>
      <section className="bg-white  dark:bg-gray-900">
        <div className="mx-auto py-8 px-8 max-w-screen-xl">
          <h2 className="mb-5 pt-5 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Listado de los Huespedes
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Huespedes de tu HotelFavorito
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
            <div className="pb-4 bg-white dark:bg-gray-900">
              <label htmlFor="id_buscar_hues" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="id_buscar_hues" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar" />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input id="id_check" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="id_check" className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cedula
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Apellido
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Direccion
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telefono
                  </th>
                  <th scope="col" className="px-6 py-3">
                    E-mail
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Accion
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="id_ingr_hues" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="id_ingr_hues" className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1758605925
                  </th>
                  <td className="px-6 py-4">
                    David
                  </td>
                  <td className="px-6 py-4">
                    Carrascal
                  </td>
                  <td className="px-6 py-4">
                    Rio Lelia
                  </td>
                  <td className="px-6 py-4">
                    0994618212
                  </td>
                  <td className="px-6 py-4">
                    carrascal@gmail.com
                  </td>
                  
                  <td className="px-6 py-4 space-x-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</a>
                  </td>

                </tr>


                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                    </div>
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                  </th>
                  <td className="px-6 py-4">

                  </td>
                  <td className="px-6 py-4">

                  </td>
                  <td className="px-6 py-4">

                  </td>
                  <td className="px-6 py-4">

                  </td>
                  <td className="px-6 py-4">

                  </td>
 
                 
                  <td className="px-6 py-4 space-x-3">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Eliminar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>
      



    </>
  )
}
