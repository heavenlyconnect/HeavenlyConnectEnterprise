import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { Mail, Phone, User, ChevronRight } from 'react-feather';
import toast, { Toaster } from 'react-hot-toast';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Valid email required').required('Email is required'),
    phone: yup.string()
        .matches(/^0\d{9,11}$/, 'Valid phone number required')
        .required('Phone is required'),
    message: yup.string().max(300, 'Max 300 characters')
});

const ContactForm = ({id}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        try {
            console.log(data);
            const serviceid = "";
            const templateid = "";
            const publickey = "";

            //Create a new object that contains dynamic string params
            const templateParams = {
                from_name: data.name,
                to_email: data.email,
                phone: data.phone,
                to_name: "Bethina Akeni",
                message: data.message
            }

            console.log("Form", templateParams);

            emailjs.send(serviceid, templateid, templateParams, publickey)
                .then((response) => {
                    toast.success('Email sent successfully! We will contact you shortly.', {
                        duration: 4000,
                        position: 'top-center',
                        style: {
                            background: '#4f46e5',
                            color: '#fff',
                            padding: '16px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        },
                        iconTheme: {
                            primary: '#fff',
                            secondary: '#4f46e5',
                        },
                    });
                    reset();
                })
                .catch((error) => {
                    toast.error("Can't send email at this time, Please try again at another time...", {
                        duration: 4000,
                        position: 'top-center',
                        style: {
                            background: '#f87171',
                            color: '#fff',
                            padding: '16px',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                        },
                        iconTheme: {
                            primary: '#fff',
                            secondary: '#f87171',
                        },
                    });
                    reset();
                })
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Error submitting form. Please try again.', {
                duration: 4000,
                position: 'top-center',
                style: {
                    background: '#f87171',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                },
                iconTheme: {
                    primary: '#fff',
                    secondary: '#f87171',
                },
            });
            reset();
            return;
        };
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section className="py-16 px-4 bg-gray-50" id={id}>
            <Toaster />
            <div className="max-w-md mx-auto">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
                >
                    <motion.div variants={item} className="mb-8 text-center">
                        <h2 className="text-2xl font-light text-gray-800 mb-2">Let's Connect</h2>
                        <p className="text-gray-500">We'll respond within one business day</p>
                    </motion.div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <motion.div variants={item}>
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                                <input
                                    {...register("name")}
                                    className={`w-full pl-10 pr-4 py-2 border-b ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                    placeholder="Full name"
                                />
                                {errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-xs text-red-500 mt-1"
                                    >
                                        {errors.name.message}
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>

                        <motion.div variants={item}>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                                <input
                                    {...register("email")}
                                    className={`w-full pl-10 pr-4 py-2 border-b ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                    placeholder="Email address"
                                />
                                {errors.email && (
                                    <motion.p className="text-xs text-red-500 mt-1">
                                        {errors.email.message}
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>

                        <motion.div variants={item}>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                                <input
                                    {...register("phone")}
                                    className={`w-full pl-10 pr-4 py-2 border-b ${errors.phone ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                    placeholder="Phone number"
                                />
                                {errors.phone && (
                                    <motion.p className="text-xs text-red-500 mt-1">
                                        {errors.phone.message}
                                    </motion.p>
                                )}
                            </div>
                        </motion.div>

                        <motion.div variants={item}>
                            <textarea
                                {...register("message")}
                                rows="3"
                                className={`w-full px-4 py-2 border-b ${errors.message ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                placeholder="Your message..."
                            ></textarea>
                            {errors.message && (
                                <motion.p className="text-xs text-red-500 mt-1">
                                    {errors.message.message}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div variants={item} className="pt-2">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg"
                            >
                                Send Message
                                <ChevronRight className="w-4 h-4" />
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;