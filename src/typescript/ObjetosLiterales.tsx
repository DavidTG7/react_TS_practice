interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion
}

interface Direccion {
  pais: string;
  casa: number

}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'David',
    edad: 36,
    direccion: {
      pais: 'Alemania',
      casa: 526
    }
  }

  return (
    <>
      <h3>
        Objetos Literales
        <code>
          <pre>
            {JSON.stringify(persona, null, 2)}

          </pre>
        </code>
      </h3>
    </>
  )
}
