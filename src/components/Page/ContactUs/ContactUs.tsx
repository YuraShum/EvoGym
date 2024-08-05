import React from 'react'
import { NavLinks } from '../../../config/config'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form';
import ContactUsPageGraphic from '../../../assets/ContactUsPageGraphic.png'
import { useGlobalContext } from '../../../state/GlobalNavContext';

type Props = {

}

const ContactUs = (props: Props) => {

    const {currentTitle, setCurrentTitle} = useGlobalContext()
    const inputStype = 'bg-primary-300 p-3 text-white placeholder:text-white rounded-md w-full mt-6'

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (event: any) => {
        const isValid = await trigger()
        if (!isValid) {
            event.preventDefault()
        }
    }

    return (
        <section id='contactus' className='mx-auto w-5/6 py-24'>
            <div>
                {/** text section */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-3/5"
                    onViewportEnter={() => setCurrentTitle(NavLinks.CONTACT_US)}>
                    <h3 className='text-3xl font-bold font-montserrat'>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </h3>
                    <p className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p>
                </motion.div>
                {/* Form section */}
                <div className=' md:gap-8 md:flex'>
                    <form onSubmit={onSubmit} target='_blank' action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                        className='flex flex-col w-full flex-2'
                        method="POST">
                        {/* input name section */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            <input
                                className={inputStype}
                                type='text'
                                placeholder='Name'
                                {...register('name', {
                                    required: true,
                                    maxLength: 50
                                })}>

                            </input>
                            {errors.name && (
                                <p>
                                    {errors.name.type === 'required' ? "This field is required." : "Max length is 100 char."}
                                </p>
                            )}
                        </motion.div>
                        {/* input email section */}
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <input
                                className={inputStype}
                                type='text'
                                placeholder='Email'
                                {...register('email', {
                                    required: true,
                                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
                                })}>

                            </input>
                            {errors.email && (
                                <p>
                                    {errors.email.type === 'required' ? "This field is required." : "Invalid email address."}
                                </p>
                            )}
                        </motion.div>
                        {/* textarea section */}
                        <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.4 }}>
                            <textarea
                                rows={4}
                                className={`${inputStype}`}
                                placeholder='Message'
                                {...register('message', {
                                    required: true,
                                    maxLength: 500
                                })}
                            >

                            </textarea>
                            {errors.message && (
                                <p>
                                    {errors.message.type === 'required' ? "This field is required." : "Max length is 2000 char."}
                                </p>
                            )}
                        </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <button type='submit'
                            className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer transition duration-400 w-fit mt-6'>
                            SUBMIT
                        </button>
                    </motion.div>
                    </form>
                    <div className='relative md:w-3/6'>
                        <div className=' w-full before:absolute before:-bottom-20 before:-right-10 md:before:content-evolvetext mt-6 before:z-[-1]'>
                            <img className=' w-full m-auto  md:w-full ' src={ContactUsPageGraphic} alt="ContactUsPageGraphic" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs