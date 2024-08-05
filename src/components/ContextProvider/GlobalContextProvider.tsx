import React, { ReactNode, useState } from 'react'
import { NavLinks } from '../../config/config';
import { GlobalContextType, GlobalContext } from '../../state/GlobalNavContext'

type Props = {
    children: ReactNode
}

const GlobalContextProvider = ({ children }: Props) => {

    const [currentTitle, setCurrentTitle] = useState<NavLinks>(NavLinks.HOME);

    const value: GlobalContextType = {
        currentTitle,
        setCurrentTitle,
    };
    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}

export default GlobalContextProvider