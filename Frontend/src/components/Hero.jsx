import React from 'react'

const Hero = () => {
  return (
  <div className="px-10 py-20 bg-gray-600 text-white">
    <h1 className="text-4xl">Hoşgeldiniz</h1>
  <h1 className="text-xl">Milyonlarca Film, Dizi ve Aktörleri Keşfet</h1>


  <div className="mt-5 flex gap-1 justify-center">
    <input type="text" placeholder="Film, dizi veya oyuncu ara..." className="w-full text-center text-black  px-2 py-4 placeholder:text-gray-500 border-b rounded-l-full" />
    <button className="bg-blue-500  text-white px-5 py-2 font-semibold transition hover:bg-blue-700 rounded-r-full">Ara</button>
  </div>
  </div>

  )
}

export default Hero
