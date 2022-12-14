import { type } from "os"
import { useEffect, useReducer } from "react"

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: '',
  nombre: ''
}

type LoginPayload = {
  userName: string;
  nombre: string
}

type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        userName: ''
      }
    case 'login':
      const { nombre, userName } = action.payload
      return {
        validando: false,
        token: 'ABC123',
        nombre,
        userName
      }

    default:
      return state;
  }
}

export const Login = () => {

  const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500);
  }, [])

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        nombre: 'DavidTG',
        userName: 'Developer'
      }
    })
  }

  const logout = () => {
    dispatch({
      type: 'logout'
    }
    )
  }


  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>
      {
        (token)
          ? <div className="alert alert-success">Autenticado como: {nombre}</div>
          : <div className="alert alert-danger">No autenticado</div>
      }
      {
        (token)
          ? <button onClick={logout} className="btn btn-danger">Logout</button>
          : <button onClick={login} className="btn btn-primary">Login</button>
      }
    </>
  )
}
