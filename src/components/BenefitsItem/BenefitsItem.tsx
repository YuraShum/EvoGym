import React from 'react'
import { BenefitsType, NavLinks } from '../../config/config'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
import CustomButton from '../CustomButton/CustomButton'
import { useGlobalContext } from '../../state/GlobalNavContext'

type Props = {
  benefit: BenefitsType,
  variants: any 
}

const BenefitsItem = (props: Props) => {

  const {currentTitle, setCurrentTitle} = useGlobalContext()
  return (
    <motion.div variants={props.variants} className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
      <div className='mb-4 flex  flex-col items-center gap-4'>
        {/* icon section */}
        <div className='rounded-full border-2 border-gray-100 bg-primary-300 p-4'>
          {props.benefit.icon}

        </div>
        {/* title section */}
        <div className='text-md font-bold font-montserrat'>
          {props.benefit.title}
        </div>
        {/* description section */}
        <div className='md:w-full w-4/5' >
          {props.benefit.description}
        </div>
        <Link
          className='cursor-pointer text-sm font-bold text-primary-500 underline hover:text-secondary-500'
          to={``}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Learn more
        </Link>

      </div>
    </motion.div>
  )
}

export default BenefitsItem