import { NavLinks } from '../../../config/config'

import { motion } from 'framer-motion'
import Gallery from '../../Gallery/Gallery'
import { CLASSES_LIST } from '../../../config/ourClassConfigs'
import { useGlobalContext } from '../../../state/GlobalNavContext'


type Props = {
}

const Classes = (props: Props) => {

  const {currentTitle, setCurrentTitle} = useGlobalContext()
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
      <motion.div
        onViewportEnter = {() => setCurrentTitle(NavLinks.OUR_CLASSES)}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='w-5/6 mx-auto'>
        <h3 className="text-md font-bold font-montserrat text-3xl">OUR CLASSES</h3>
        <p className="py-5">
          Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
          tellus quam porttitor. Mauris velit euismod elementum arcu neque
          facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
          enim mattis odio in risus nunc.
        </p>
      </motion.div>
      <div>
        <Gallery classElements={CLASSES_LIST}/>
      </div>
    </section>
  )
}

export default Classes