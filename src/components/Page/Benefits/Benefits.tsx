import { BENEFITS_LIST } from "../../../config/benefitsConfigs"
import { NavLinks } from "../../../config/config"
import { motion } from 'framer-motion'
import BenefitsItem from "../../../components/BenefitsItem/BenefitsItem"
import CustomButton from "../../../components/CustomButton/CustomButton"
import BenefitsPageGraphic from '../../../assets/BenefitsPageGraphic.png'
import { useGlobalContext } from "../../../state/GlobalNavContext"

type Props = {

}

const Benefits = (props: Props) => {
    const {currentTitle, setCurrentTitle} = useGlobalContext()

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <section id='benefits' className="mx-auto w-5/6 min-h-full py-20">
            <motion.div
                onViewportEnter={() => setCurrentTitle(NavLinks.BENEFITS)}>
                {/* Header section */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='md:my-5 md:w-3/5'
                >
                    <h3 className="text-3xl font-bold font-montserrat">MORE THAN JUST GYM.</h3>
                    <p className=" mt-4 text-sm">We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.</p>
                </motion.div>
                {/* item section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="md:flex justify-between gap-8 ">
                    {BENEFITS_LIST.map((benefitItem) => (
                        <BenefitsItem key={benefitItem.title} benefit={benefitItem} variants={itemVariants} />
                    ))}
                </motion.div>
                <div>

                </div>
            </motion.div>
            {/* Graphic and description section  */}
            <div className="mt-16 items-center justify-between gap-16 md:mt-28 md:flex">
                {/* img section */}
                <div className="md:w-full">
                    <img className="mx-auto " src={BenefitsPageGraphic} alt="Benefits Page Graphic" />
                </div>
                {/* text section */}
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }} className="relative"
                        >
                            <h3 className="text-md font-bold font-montserrat text-3xl">MILLIONS OF HAPPY MEMBERS GETTING
                                <span className="text-primary-500"> FIT</span>.
                            </h3>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }} className="relative"
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>
                    </div>
                    {/* button section */}
                    <div className="relative inline-block mt-16">
                        <div className="before:absolute before:-right-40 before:-bottom-20 before:content-sparkles">
                            <motion.div
                                initial={{ opacity: 0, x: -120 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }} className="relative">
                                <CustomButton>
                                    Join Now
                                </CustomButton>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits