import { useUsuarios } from '../hooks/useUsuarios'
import { Usuario } from '../interfaces/reqRes'

export const Usuarios = () => {

  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios()

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.last_name}
            style={{
              width: 100,
              borderRadius: 50
            }}
          />
        </td>
        <td>{usuario.first_name}</td>
        <td>{usuario.email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(usuario => renderItem(usuario))
          }
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={paginaAnterior}>Anterior</button>&nbsp;
      <button className='btn btn-primary' onClick={paginaSiguiente}>Siguiente</button>
    </>
  )
}
