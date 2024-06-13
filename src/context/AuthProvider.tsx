import { createContext, useContext, useState } from 'react'

type AuthContextT = {
  user: string | null
  signIn: (user: string, callback: () => void) => void
  signOut: (callback: () => void) => void
}

const AuthContext = createContext<AuthContextT | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null)

  const signIn = (newUser: string, callback: () => void) => {
    setUser(newUser)
    callback()
  }

  const signOut = (callback: () => void) => {
    setUser(null)
    callback()
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
