import React, { useState } from 'react';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import Logo from '../assets/Logo.png';
import { NavLinks, navLinkLabels } from '../config/config';

import useMediaQuery from '../hooks/useMediaQuery';
import CustomButton from './CustomButton/CustomButton';
import ScrollLink from './ScrollLink/ScrollLink';

type Props = {
    isTopOfPage: boolean;
}

const Navbar = ({ isTopOfPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
    const flexBetween = 'flex items-center justify-between';
    const navBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow-lg';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navBackground}`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} px-8 gap-8 text-sm`}>
                                {Object.values(NavLinks).map((item) => (
                                    <ScrollLink
                                        key={item}
                                        page={navLinkLabels[item]}
                                        
                                    />
                                ))}
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <CustomButton>
                                    Become a Member
                                </CustomButton>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <FaXmark className="text-white" /> : <FaBarsStaggered className="text-white" />}
                        </button>
                    )}
                </div>
            </div>
            {!isAboveMediumScreens && isMenuOpen && (
                <div className="fixed bg-primary-100 right-0 text-gray-500 w-[300px] p-10 h-full drop-shadow-lg z-40">
                    <button
                        className="absolute right-5 top-5 cursor-pointer hover:text-primary-500 transition duration-300 text-xl"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaXmark />
                    </button>
                    <div className={`${flexBetween} px-8 gap-8 flex text-lg flex-col`}>
                        {Object.values(NavLinks).map((item) => (
                            <ScrollLink
                                key={item}
                                page={navLinkLabels[item]}
                                
                            />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;