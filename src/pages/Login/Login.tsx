import { Location, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import { FormEvent } from 'react'
import { TextInput } from '../../Components/CustomInputs/TextInput'

export function Login() {
  const auth = useAuth()
  const navigate = useNavigate()
  const location: Location<{ from: string } | null> = useLocation()

  let from = location.state?.from || '/'

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string

    auth?.signIn(username, () => navigate(from, { replace: true }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type='text'
        name='username'
        label='Your username'
        size='md'
        radius='lg'
      />
      <button type='submit'>Войти</button>
    </form>
  )
}
