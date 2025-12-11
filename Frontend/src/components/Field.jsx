import React from 'react'

const Field = ({label, value}) => (
  <div className="flex flex-col">
    <span className="text-gray-400 text-sm uppercase tracking-wide mb-2">{label}</span>
    <span className="text-white text-lg break-words">{value}</span>
  </div>
)

export default Field
