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
import Subtitle from "@/components/Subtitle";

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
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold text-shadow"}
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
                            viewport={{ once: true }}
                            transition={{ delay: .1, duration: .5 }}
                            className={"relative flex flex-col gap-3 items-center sm:items-start"}
                        >
                            <Subtitle text={"¡Llámanos!"} />
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-light fa-phone-volume text-[#AFA96E]"></i>
                                <a href={"tel:8093901953"} target={'_blank'} className={"link font-medium"}>(809) 390-1953</a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .2, duration: .5 }}
                            className={"relative flex flex-col gap-3 items-center sm:items-start"}
                        >
                            <Subtitle text={"Escríbenos"} />
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-whatsapp text-[#AFA96E]"></i>
                                <a href={"tel:8093901953"} target={'_blank'} className={"link font-medium"}>(809) 390-1953</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-light fa-envelope text-[#AFA96E]"></i>
                                <a href={"mailto:info@fundacióncapcana.org"} target={'_blank'} className={"link font-medium"}>info@fundacióncapcana.org</a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}
                            className={"relative flex flex-col items-center sm:items-start gap-3"}
                        >
                            <Subtitle text={"Síguenos"} />
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-instagram text-[#AFA96E]"></i>
                                <a href={"https://instagram.com/fundacioncapcana"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-x-twitter text-[#AFA96E]"></i>
                                <a href={"https://x.com/fundacioncapcana"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-facebook text-[#AFA96E]"></i>
                                <a href={"https://www.facebook.com/p/Fundaci%C3%B3n-Cap-Cana-100083580931901/?_rdr"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-linkedin text-[#AFA96E]"></i>
                                <a href={"https://www.linkedin.com/company/fundaci%C3%B3n-cap-cana/mycompany/"} target={'_blank'} className={"link font-medium"}>@fundacioncapcana</a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .4, duration: .5 }}
                            className={"relative flex flex-col gap-3"}
                        >
                            <Subtitle text={"Dirección"} />
                            <div className={"flex flex-col items-center sm:items-start"}>
                                <span className={"text-neutral-700 font-medium"}>Distrito de Sostenibilidad, Caleton, Cap Cana, <br />Rep. Dominicana.</span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .5, duration: .5 }}
                            className={`h-[15rem] w-full rounded-xl overflow-hidden`}
                        >
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7569.182661722931!2d-68.4222118!3d18.4568553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea89b749e7b5333%3A0x72c99d9f2dbdada8!2sDistrito%20de%20Sostenibilidad%20(Fundaci%C3%B3n%20Cap%20Cana)!5e0!3m2!1ses!2suy!4v1731284342037!5m2!1ses!2suy" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, borderRadius: '0.75rem' }} 
                                allowFullScreen={false} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ top: '0', opacity: 0 }}
                        whileInView={{ top: '-7rem', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
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
        <div className={"flex flex-col gap-4 w-full futura-light-regular uppercase"}>
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

    const center = { lat: 18.479757290197856, lng: -68.41130759495732 };
    const zoom = 13;

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