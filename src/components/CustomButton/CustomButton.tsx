import React, { ReactNode } from 'react'
import { navLinkLabels, NavLinks } from '../../config/config'
import { Link } from 'react-scroll';
import { useGlobalContext } from '../../state/GlobalNavContext';


type Props = {
    children: ReactNode;
}

const CustomButton = ({ children }: Props) => {
    const {currentTitle, setCurrentTitle} = useGlobalContext()
    return (
        <Link
            className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer transition duration-400'
            to={`${NavLinks.CONTACT_US}`}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setCurrentTitle(NavLinks.CONTACT_US)}
        >
            {children}
        </Link >
    )
}

export default CustomButton