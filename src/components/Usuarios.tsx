import { useEffect, useState } from 'react'
import { ReqResListado, Usuario } from '../api/interfaces/reqRes'
import { reqResApi } from '../api/reqRes'

export const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    // Llamado a API
    reqResApi.get<ReqResListado>('/users')
      .then(res => {
        setUsuarios(res.data.data)
      })
      .catch(console.log)
  }, [])

  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id}>
        <td><img src={usuario.avatar} alt={usuario.last_name} /></td>
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
    </>
  )
}
