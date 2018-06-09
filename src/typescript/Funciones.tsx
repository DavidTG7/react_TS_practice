import React from 'react'

const Funciones = () => {

  const sumar = (a: number, b: number): number => {
    return a + b;
  }

  return (
    <>
      <h3>Funciones</h3>
      <span>
        El resultado es: {sumar(1, 32)}
      </span>
    </>
  )
}

export default Funciones;