import React from 'react'

const Error = ({info, refetch}) => {
  return (
    <div className="flex items-center justify-center py-20 min-h-[800px] bg-red-50  rounded-md
    
    ">
      <div className="bg-white p-8 rounded-lg shadow-lg  border-l-4
       border-red-500 max-w-[700px] w-full"> 
        <div className="flex items-center gap-4 mb-4 ">
          <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold text-red-600">Üzgünüz!</h1>
        </div>
        <p className="text-gray-600 mb-2">Bir hata oluştu.</p>
        <p className="text-red-500 font-medium mb-6 bg-red-50 p-3  rounded text-sm">{info?.message || 'Bilinmeyen hata'}</p>
        <button 
          onClick={refetch} 
          className="
          
          w-full bg-red-500 hover:bg-red-800
           text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  )
}

export default Error
