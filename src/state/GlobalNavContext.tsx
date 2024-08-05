import { NavLinks } from '../config/config'
import { createContext, useContext } from "react"

export type GlobalContextType = {
    currentTitle: NavLinks,
    setCurrentTitle: (value: NavLinks) => void
}

export const GlobalContext = createContext<GlobalContextType>({
    currentTitle: NavLinks.HOME,
    setCurrentTitle: () => { }
})

export const useGlobalContext = () => useContext(GlobalContext)