import { create } from 'zustand'
import axios from 'axios' // Import Axios
import { StarshipsTypes } from '../starshipsTypes'

type State = {
    starships: StarshipsTypes[]
    isLoading: boolean
    error: Error | null
    fetchStarships: () => Promise<void>
}

// Define the store and its initial state
export const useStarshipStore = create<State>((set) => ({
    starships: [],
    isLoading: false,
    error: null,

    // Action to fetch starships
    fetchStarships: async () => {
        set({ isLoading: true, error: null })
        try {
            const response = await axios.get('https://swapi.dev/api/starships') // Use axios.get
            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = response.data // Axios already parses JSON
            set(() => ({
                starships: data.results,
                isLoading: false,
                error: null,
            }))
        } catch (error: unknown) {
            if (error instanceof Error) {
                // Error occurred in the request
                set({ isLoading: false, error }) // Update the error property with the typed error
                return
            }
        }
    },

    // Selectors (optional)
    getStarships: (state: State) => {
        // return set((state) => state.starships);
        return { starships: state.starships }
    },

    // Reset the store to its initial state
    reset: () => set({ starships: [], isLoading: false, error: null }),
}))
