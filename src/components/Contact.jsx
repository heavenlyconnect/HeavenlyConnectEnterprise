import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import * as yup from 'yup';
import { Mail, Phone, User, ChevronRight } from 'react-feather';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

// Create validation schema factory
const getValidationSchema = (t) => {
    return yup.object().shape({
        name: yup.string().required(t('NameRequired')),
        email: yup.string()
            .email(t('ValidEmailRequired'))
            .required(t('EmailRequired')),
        phone: yup.string()
            .matches(/^0\d{9,11}$/, t('ValidPhoneRequired'))
            .required(t('PhoneRequired')),
        message: yup.string()
            .required(t('MessageRequired')).max(300, t('MaxCharacters', { max: 300 })),
    });
};

const ContactForm = ({ id }) => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(getValidationSchema(t)),
    });

    const onSubmit = (data) => {
        try {
            const serviceid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            
            //Create a new object that contains dynamic string params
            const templateParams = {
                name: data.name,
                email: data.email,
                phone: data.phone,
                time: new Date().toLocaleString(),
                message: data.message
            }

            emailjs.send(serviceid, templateid, templateParams, publickey)
                .then((response) => {
                    toast.success(t("SuccessMessage"), {
                        duration: 4000,
                        position: 'top-right',
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
                    toast.error(t("ErrorMessage"), {
                        duration: 4000,
                        position: 'top-right',
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
            toast.error(t("ErrorMessage"), {
                duration: 4000,
                position: 'top-right',
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
                        <h2 className="text-2xl font-light text-gray-800 mb-2">{t("LetsConnect")}</h2>
                        <p className="text-gray-500">{t("ContactUsMessage")}</p>
                    </motion.div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <motion.div variants={item}>
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                                <input
                                    {...register("name")}
                                    className={`w-full ps-10 pr-4 input-padding py-2 border-b ${errors.name ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                    placeholder={t("FullName")}
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
                                    className={`w-full pl-10 input-padding pr-4 py-2 border-b ${errors.email ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                    placeholder={t("EmailAddress")}
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
                                    className={`w-full pl-10 input-padding pr-4 py-2 border-b ${errors.phone ? 'border-red-300' : 'border-gray-200'} focus:border-gray-400 focus:outline-none bg-transparent`}
                                    placeholder={t("PhoneNumber")}
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
                                placeholder={t("Message")}
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
                                {t("SendMessage")}
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