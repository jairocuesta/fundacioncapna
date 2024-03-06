// Components
import Layout from "@/components/Layout";
// Styles
import styles from './index.module.css'
import Button from "@/components/Button/Index";

export default function Contact() {
    return (
        <Layout title={"Contacto"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[27.5rem] text-white px-5`}>
                    <h1 className={"text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>Contáctanos</h1>
                </div>
                <div className={"relative flex flex-col items-start w-full max-w-5xl mx-auto py-20 px-5 sm:px-10 gap-20"}>
                    <div className={"flex lg:hidden flex-col gap-4 w-full border rounded-xl bg-white p-5 sm:p-10"}>
                        <div className={"text-center text-xl text-[#7D8034] font-semibold"}>Completa los datos</div>
                        <form className={"flex flex-col gap-3 text-left"}>
                            <div>
                                <label htmlFor="name-surname" className={"text-sm font-medium"}>1. Nombres y apellidos</label>
                                <input type="text" id="name-surname" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full"} />
                            </div>
                            <div>
                                <label htmlFor="phone-number" className={"text-sm font-medium"}>2. Número de celular</label>
                                <input type="text" id="phone-number" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full"} />
                            </div>
                            <div>
                                <label htmlFor="email" className={"text-sm font-medium"}>3. Email</label>
                                <input type="text" id="email" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full"} />
                            </div>
                            <div>
                                <label htmlFor="comment" className={"text-sm font-medium"}>4. Comentario</label>
                                <textarea id="comment" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full resize-none"} rows={6} />
                            </div>
                            <button className={"py-2 w-full bg-[#7D8034] text-white rounded-full font-medium"}>
                                Conviértete en miembro
                            </button>
                        </form>
                    </div>
                    <div className={"flex flex-col gap-14 w-full"}>
                        <div className={"flex flex-col gap-3 items-center sm:items-start"}>
                            <span className={"font-semibold text-xl text-[#7D8034]"}>¡Llámanos!</span>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-light fa-phone-volume text-[#AFA96E]"></i>
                                <a href={"tel:180023552356"} target={'_blank'} className={"link font-medium"}>1800 - 2355-2356</a>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-3 items-center sm:items-start"}>
                            <span className={"font-semibold text-xl text-[#7D8034]"}>Escríbenos</span>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-brands fa-whatsapp text-[#AFA96E]"></i>
                                <a href={"tel:180023552356"} target={'_blank'} className={"link font-medium"}>1800 - 2355-2356</a>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <i className="fa-light fa-envelope text-[#AFA96E]"></i>
                                <a href={"mailto:info@fundacióncapcana.org"} target={'_blank'} className={"link font-medium"}>info@fundacióncapcana.org</a>
                            </div>
                        </div>
                        <div className={"flex flex-col items-center sm:items-start gap-3"}>
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
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <span className={"font-semibold text-xl text-[#7D8034]"}>Dirección</span>
                            <div className={"flex flex-col items-center sm:items-start"}>
                                <span className={"text-neutral-700 font-medium"}>Box 3233</span>
                                <span className={"text-neutral-700 font-medium"}>1810 Kings Way</span>
                                <span className={"text-neutral-700 font-medium"}>King Street, 5th Avenue, New York</span>
                            </div>
                        </div>
                        <div className={`${styles.secondImage} h-[15rem] w-full rounded-xl`}></div>
                    </div>
                    <div className={"hidden lg:flex flex-col gap-4 lg:absolute right-0 -top-28 w-1/2 border lg:border-none rounded-xl lg:shadow-xl bg-white p-5 sm:p-10"}>
                        <div className={"text-center text-xl text-[#7D8034] font-semibold"}>Completa los datos</div>
                        <form className={"flex flex-col gap-3 text-left"}>
                            <div>
                                <label htmlFor="name-surname" className={"text-sm font-medium"}>1. Nombres y apellidos</label>
                                <input type="text" id="name-surname" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full"} />
                            </div>
                            <div>
                                <label htmlFor="phone-number" className={"text-sm font-medium"}>2. Número de celular</label>
                                <input type="text" id="phone-number" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full"} />
                            </div>
                            <div>
                                <label htmlFor="email" className={"text-sm font-medium"}>3. Email</label>
                                <input type="text" id="email" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full"} />
                            </div>
                            <div>
                                <label htmlFor="comment" className={"text-sm font-medium"}>4. Comentario</label>
                                <textarea id="comment" placeholder={"Escribir aquí"} className={"py-2 px-3 border rounded-md w-full resize-none"} rows={6} />
                            </div>
                            <Button 
                                href={"#"}
                                text={"Conviértete en miembro"}
                                type={"main"}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}