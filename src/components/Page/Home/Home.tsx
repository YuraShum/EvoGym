import React from 'react'
import { NavLinks } from '../../../config/config'
import useMediaQuery from '../../../hooks/useMediaQuery'
import HomePageText from '../../../assets/HomePageText.png'
import HomePageGraphic from '../../../assets/HomePageGraphic.png'
import CustomButton from '../../CustomButton/CustomButton'
import SponsorForbes from '../../../assets/SponsorForbes.png'
import SponsorFortune from '../../../assets/SponsorFortune.png'
import SponsorRedBull from '../../../assets/SponsorRedBull.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useGlobalContext } from '../../../state/GlobalNavContext'

type Props = {
    
}

const Home = (props: Props) => {

    const {currentTitle, setCurrentTitle} = useGlobalContext()
    const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')
    return (
        <section id='home' className='gap 16 bg-gray-20 py-10 md:h-full md:pb-0 relative' 
        >
            <motion.div
                onViewportEnter={() => setCurrentTitle(NavLinks.HOME)}
                className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
                {/* img and header section */}
                <div className='z-10 mt-32 md:basis-3/5'>
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='md:-mt-20'>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 md:before:content-evolvetext before:z-[-1] '>
                                <img src={HomePageText} alt="homePageText" />
                            </div>
                        </div>
                        <p className='mt-8'>
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                    {/** actions section */}

                    <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1 }}
                        className='flex mt-8 gap-8 items-center'>
                        <CustomButton>
                            Join now
                        </CustomButton>
                        <Link
                            className='cursor-pointer text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            to={NavLinks.CONTACT_US}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setCurrentTitle(NavLinks.CONTACT_US)}>
                            <p>Learn more</p>
                        </Link>
                    </motion.div>
                </div>
                <div className='flex basis-3/5 justify-center md:ml-40 md:mt-20'>
                    <img src={HomePageGraphic} alt="homepageGraphic" />
                </div>
            </motion.div>
            {/* sponsors section */}
            {isAboveMediumScreens && (
                <div className='flex gap-20 px-16 py-6 bg-primary-100 justify-center items-center absolute bottom-0 w-full'>
                    <img src={SponsorForbes} alt="SponsorForbes" />
                    <img src={SponsorFortune} alt="SponsorFortune" />
                    <img src={SponsorRedBull} alt="SponsorRedBull" />
                </div>
            )}
        </section>
    )
}

export default Home