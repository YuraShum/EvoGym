import React from 'react'
import Logo from '../../../assets/Logo.png'
import { motion } from 'framer-motion'

type Props = {}

const Footer = (props: Props) => {

    const columnVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
            },
        }),
    };


    return (
        <footer className='bg-primary-100 py-16'>
            <div className='m-auto w-5/6 justify-content gap-8 md:flex'>
                {/** first column section */}
                <motion.div
                    className='mt-16 basis-1/2 md:mt-0'
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={columnVariants}
                >
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
                        purus et arcu massa dictum condimentum. Augue scelerisque iaculis
                        orci ut habitant laoreet. Iaculis tristique.
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </motion.div>
                {/** second column section */}
                <motion.div
                    className='mt-16 basis-1/4 md:mt-0'
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={columnVariants}
                >
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Massa orci senectus</p>
                    <p className="my-5">Et gravida id et etiam</p>
                    <p>Ullamcorper vivamus</p>
                </motion.div>
                {/** third column section */}
                <motion.div
                    className='mt-16 basis-1/4 md:mt-0'
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={columnVariants}
                >
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                    <p>(333)425-6825</p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;