import React from 'react'

const InputField = ({ label, type="text", name,min,max }) => {
  return (
    <div className='w-full relative'>

      <input
       className="text-gray-900 w-full block px-3 py-2 border border-gray-300 
       appearance-none peer 
       rounded-lg shadow-sm focus:outline-none focus:ring-0 focus:border-blue-600"
        type={type}
        id={name}
        name={name}
        required
        min={min}
        max={max}
        placeholder={"  "}
        
      />
<label htmlFor={name} className="absolute  text-sm text-gray-500
transform -translate-y-4 scale-100 top-2 z-10 origin-[0] bg-white px-2
left-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
peer-placeholder-shown:top-1/2  peer-focus:-translate-y-4 
peer-focus:left-3 peer-focus:text-blue-600 peer-focus:top-0
transition-all  duration-150 ease-in-out    
">{label}</label>

    </div>
  )
}

export default InputField
