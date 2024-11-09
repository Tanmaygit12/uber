import React, { useState } from 'react'

function Navbar() {

  return (

    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap" bis_skin_checked="1">
      <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10" bis_skin_checked="1">
      <div className="w-full sm:p-4 px-4 mb-6" bis_skin_checked="1">
        <h1 className="title-font font-bold text-3xl mb-2 text-gray-900">Go anywhere with Uber</h1>
        <div className="leading-relaxed " bis_skin_checked="1">Start your suffer towards your destination Now </div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2" bis_skin_checked="1">
        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2" bis_skin_checked="1">
        <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2" bis_skin_checked="1">
        <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
        <p className="leading-relaxed">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2" bis_skin_checked="1">
        <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
        <p className="leading-relaxed">Products</p>
      </div>
     </div>
      <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0" bis_skin_checked="1">
      <img className="object-cover object-center w-full h-full" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_465,w_698/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="stats" />
      </div>
      </div>
    </section>
  )
  
}

export default Navbar

