import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'

export const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    auth?.signOut(() => navigate('/'))
  }

  if (auth?.user === null) {
    return <p>You are not logged in.</p>
  }

  return (
    <p>
      Welcome user {auth?.user}
      <button onClick={handleSignOut}></button>
    </p>
  )
}
