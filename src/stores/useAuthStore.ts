import { create } from 'zustand'

type State = {
    email: string | null
    isLoggedIn: boolean
    setEmail: (email: string) => void
    setLoggedIn: (loggedIn: boolean) => void
}

export const useAuthStore = create<State>((set) => ({
    email: localStorage.getItem('email') || null,
    isLoggedIn: localStorage.getItem('loggedIn') === 'true' || false,

    setEmail: (email) => {
        set({ email })
        localStorage.setItem('email', email)
    },

    setLoggedIn: (loggedIn) => {
        set({ isLoggedIn: loggedIn })
        localStorage.setItem('loggedIn', loggedIn.toString())
    },
}))
