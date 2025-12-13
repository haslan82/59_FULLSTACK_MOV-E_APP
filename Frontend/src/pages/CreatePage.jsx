import React from 'react'
import InputField from '../components/inputField'
import { inputs } from '../utils/constants'

const CreatePage = () => {
  
  return (
    <div className="min-h-screen bg-yellow-400 flex justify-center items-center py-20">
    <div className="bg-white w-full max-w-[1000px] p-10 rounded-xl shadow-lg">
   
   <form action="" className="flex flex-col gap-6">

<h1 className="text-3xl font-bold mb-6 text-center">Yeni Film Oluştur</h1>

{/* Form alanları buraya eklenecek 
inputlar, butonlar vb.*/}
{
  inputs.map((props) => (
    <InputField key={props.name} {...props} />
  ))
}




<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ">Oluştur</button>

   </form>
   </div>
    </div>
  )
}

export default CreatePage
