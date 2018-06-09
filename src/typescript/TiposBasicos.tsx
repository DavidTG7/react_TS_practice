import React from 'react'

const TiposBasicos = () => {

  let nombre: string | number = 'David';
  const edad: number = 36;
  const estaActivo: boolean = false;
  const poderes: string[] = ['Velocidad', 'Volar', 'Correr', 'Cantar']

  return (
    <>
      <h3>Tipos basicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo' : 'no activo'}
      <br />
      {poderes.join(', ')}
    </>
  )
}

export default TiposBasicos
