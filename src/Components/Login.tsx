import React, { useEffect, useState } from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import FintechPNG from '../assets/FintechPNG.png';
import { motion } from "framer-motion"
import NexWallet from '../assets/NexWallet.mp4'
function Login() {
    const [showVideo, setShowVideo] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowVideo(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showVideo ? (
                <div className=" bg-black">
                    <div className="bg-black flex justify-center items-center" style={{ height: "100vh" }}>
                        {/* Mostrar o vídeo aqui */}
                        <video autoPlay muted style={{ maxWidth: "100%", maxHeight: "100%" }}>
                            <source src={NexWallet} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            ) : (
                <div className="bg-black">
                    <motion.div
                        initial={{ y: 300, opacity: 0.4 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0 }} // primeira div começa imediatamente
                    >
                        <motion.img
                            src={FintechPNG}
                            alt="Minha Imagem"
                            style={{
                                position: "relative",
                                width: "100px", // Ajuste o tamanho conforme necessário
                                height: "auto", // Manter a proporção da imagem
                                marginTop: "40px",
                                marginLeft: "140px"
                            }}
                        />
                    </motion.div>
                    <div className="p-5">
                        <motion.div
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }} // primeira div começa imediatamente
                            className="animate2"
                        >
                            <div className='animate1'>
                                <h1 className=" font-exo2 text-PT tracking-wide text-2xl"> Crie sua Conta para desbloquear sua liberdade financeira</h1>
                                <div className="text-ST flex text-sm underline hover:cursor-pointer">
                                    <a href="#">Fortalecendo Seu Futuro Financeiro</a><FaArrowTrendUp className="ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }} // primeira div começa imediatamente
                        className="animate3"
                    >
                        <div className=" bg-black text-white flex  flex-col items-center pt-2 sm:justify-center sm:pt-0">

                            <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                                <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                                <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20   border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                                    <div className="flex flex-col p-6">
                                        <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                                        <p className="mt-1.5 text-sm font-medium text-white/50">Bem vindo de volta, entre com seus dados para continuar.</p>
                                    </div>
                                    <div className="p-6 pt-0">
                                        <form>
                                            <div>
                                                <div>
                                                    <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-green-300/30">
                                                        <div className="flex justify-between">
                                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Login</label>
                                                            <div className="absolute right-3 translate-y-2 text-green-200">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <input type="text" name="username" placeholder="Login" autoComplete="off" className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <div>
                                                    <div className="group relative rounded-lg border focus-within:border-green-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-green-300/30">
                                                        <div className="flex justify-between">
                                                            <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">Senha</label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input type="password" name="password" className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center justify-between">
                                                <label className="flex items-center gap-2">
                                                    <input type="checkbox" name="remember" className="outline-none focus:outline focus:outline-green-300" />
                                                    <span className="text-xs">Remember me</span>
                                                </label>
                                                <a className="text-sm font-medium text-foreground underline" href="/forgot-password">Forgot Password?</a>
                                            </div>
                                            <div className="mt-4 flex items-center  gap-x-2">

                                                <button className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2" type="submit"> <Link to="./Components/Cadastro">Criar Conta</Link></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}
export default Login;
