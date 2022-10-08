import React, { useState } from 'react'

export const Contador = () => {

  const [valor, setvalor] = useState(0)

  const acumular = (numero: number) => {
    setvalor(valor + numero)
  }

  return (
    <>
      <h3>Contador <small>{valor}</small></h3>
      <button onClick={() => acumular(-1)} className='btn btn-primary'>-1</button>
      &nbsp;
      <button onClick={() => acumular(1)} className='btn btn-primary'>+1</button>
    </>
  )
}
