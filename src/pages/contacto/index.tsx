import axios from "axios";
// Components
import Layout from "@/components/Layout";
import Button from "@/components/Button/Index";
import Input from "@/components/Input/Index";
// Styles
import styles from './index.module.css'
// Animations
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react";
// Google maps
import { Wrapper } from "@googlemaps/react-wrapper";
// Forms
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/utils/formValidations";
// Notifications
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {

    const formRef = useRef(null);

    useEffect(() => {
        let lastPos: number;
        const handleScroll = (e: Event | null) => {
            const ref = formRef.current! as HTMLDivElement;
            const height = (window.scrollY * 0.03);
            if (height < 12.75) {
                if (ref) ref.style.transform = `translateY(${height}rem)`;
            }
            lastPos = window.scrollY;
        };

        handleScroll(null);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Layout title={"Contacto"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[27.5rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .3 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}
                    >Contáctanos</motion.h1>
                </div>
                <div className={"relative flex flex-col items-start w-full max-w-5xl mx-auto py-20 px-5 sm:px-10 gap-20"}>
                    <div className={"flex lg:hidden w-full border rounded-xl bg-white p-5 sm:p-10"}>
                        <ContactForm id={1} />
                    </div>
                    <div className={"flex flex-col gap-14 w-full"}>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .1 }}
                            className={"relative flex flex-col gap-3 items-center sm:items-start"}
                        >
                            <span className={"font-semibold text-xl text-[#7D8034]"}>¡Llámanos!</span>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-light fa-phone-volume text-[#AFA96E]"></i>
                                <a href={"tel:180023552356"} target={'_blank'} className={"link font-medium"}>1800 - 2355-2356</a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .2 }}
                            className={"relative flex flex-col gap-3 items-center sm:items-start"}
                        >
                            <span className={"font-semibold text-xl text-[#7D8034]"}>Escríbenos</span>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-whatsapp text-[#AFA96E]"></i>
                                <a href={"tel:180023552356"} target={'_blank'} className={"link font-medium"}>1800 - 2355-2356</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-light fa-envelope text-[#AFA96E]"></i>
                                <a href={"mailto:info@fundacióncapcana.org"} target={'_blank'} className={"link font-medium"}>info@fundacióncapcana.org</a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .3 }}
                            className={"relative flex flex-col items-center sm:items-start gap-3"}
                        >
                            <span className={"font-semibold text-xl text-[#7D8034]"}>Síguenos</span>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-instagram text-[#AFA96E]"></i>
                                <a href={"https://instagram.com/fundacióncapcana"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-x-twitter text-[#AFA96E]"></i>
                                <a href={"https://x.com/fundacióncapcana"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-facebook text-[#AFA96E]"></i>
                                <a href={"https://facebook.com/fundacióncapcana"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-linkedin text-[#AFA96E]"></i>
                                <a href={"https://linkedin.com/in/fundacióncapcana"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .4 }}
                            className={"relative flex flex-col gap-3"}
                        >
                            <span className={"font-semibold text-xl text-[#7D8034]"}>Dirección</span>
                            <div className={"flex flex-col items-center sm:items-start"}>
                                <span className={"text-neutral-700 font-medium"}>Box 3233</span>
                                <span className={"text-neutral-700 font-medium"}>1810 Kings Way</span>
                                <span className={"text-neutral-700 font-medium"}>King Street, 5th Avenue, New York</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .5 }}
                            className={`h-[15rem] w-full rounded-xl overflow-hidden`}
                        >
                            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
                                <Map />
                            </Wrapper>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ top: '0', opacity: 0 }}
                        whileInView={{ top: '-7rem', opacity: 1 }}
                        transition={{ delay: .3 }}
                        className={"hidden lg:flex lg:absolute right-0 w-1/2 border lg:border-none rounded-xl lg:shadow-xl bg-white p-5 sm:p-10"}
                        style={{ top: `-7rem` }}
                        ref={formRef}
                    >
                        <ContactForm id={2} />
                    </motion.div>
                </div>
            </div>
            <Toaster position={"top-right"} />
        </Layout>
    )
}

function ContactForm({ id }: { id: number; }) {

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(contactSchema)
    });

    async function onSubmit(formData: any) {
        if(isSubmitting) return;
        setIsSubmitting(true);

        try {
            await axios.request({
                method: 'POST',
                url: '/api/sendMail',
                data: formData
            });
            toast.success("Hemos recibido tu información!");
        } catch (error) {
            toast.error("Hubo un error al enviar la información, vuelve a intentarlo más tarde");
        } finally {
            reset({ full_name: '', phone_number: '', email: '', comment: '' });
            setIsSubmitting(false);
        }
    }

    return (
        <div className={"flex flex-col gap-4 w-full"}>
            <div className={"text-center text-xl text-[#7D8034] font-semibold"}>Completa los datos</div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className={"flex flex-col gap-3 text-left"}
            >
                <Input 
                    htmlFor={`name-surname-${id}`}
                    type={"text"}
                    label={"1. Nombres y apellidos"}
                    placeholder={"Escribir aquí"}
                    props={register('full_name')}
                    errors={errors.full_name}
                />
                <Input
                    htmlFor={`phone-number-${id}`}
                    type={"tel"}
                    label={"2. Número de celular"}
                    placeholder={"Escribir aquí"}
                    props={register('phone_number')}
                    errors={errors.phone_number}
                />
                <Input
                    htmlFor={`email-${id}`}
                    type={"email"}
                    label={"3. Correo electrónico"}
                    placeholder={"Escribir aquí"}
                    props={register('email')}
                    errors={errors.email}
                />
                <div>
                    <label htmlFor={`comment-${id}`} className={"text-sm font-medium"}>4. Comentario</label>
                    <textarea 
                        id={`comment-${id}`} 
                        placeholder={"Escribir aquí"} 
                        className={"py-2 px-3 rounded-md w-full resize-none border focus:border-[#7D8034]"} 
                        rows={6} 
                        {...register('comment')}
                    />
                </div>
                <Button
                    buttonType={"submit"}
                    text={"Conviértete en miembro"}
                    type={"main"}
                />
            </form>
        </div>
    )
}

function Map() {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

    useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom,
            }));
        }
    }, [ref, map]);

    return <div ref={ref} id="map" className={"h-full"} />;
}