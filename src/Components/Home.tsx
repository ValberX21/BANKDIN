import './Home.css'; // Importe o arquivo app.css aqui
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdAnalytics  } from "react-icons/io";
import { FaCirclePlus, FaMoneyBills } from "react-icons/fa6";
import { TbGraphFilled } from "react-icons/tb";

import CreditCard from './CreditCard';
import TransferenciaHome from './TransferenciaHome';
import Aviso from './Aviso';
import Navbar from './navbar';
import { Avatar  } from "@nextui-org/react";

function Home() {
    return (
        <>
            
            <div className="font-Poppins bg-bg">

                <div className="relative z-10">
                    <div className="gradient-circle-bg h-screen">
                        <div className=" h-43 backdrop-blur-sm   border-b-2  border-GreenTheme ">
                            <div className="flex justify-between p-5 pt-8   h-12">
                                <div className="flex items-center border-2  border-GreenTheme   p-3  rounded-2xl  ">
                                    <div className="font-normal text-sm text-white-fb">Olá, Danilo</div>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />                                   
                                </div>
                                <Navbar />
                                
                            </div>
                            <div className="p-5 pl-5  w-80">
                                <div className='text-white-fb  text-base font-medium pb-1'>Que bom ter você aqui!</div>
                                <div className="text-gray-c3 text-sm font-normal">Continue sua jornada financeira, como podemos te ajudar?</div>
                            </div>
                        </div>
                        <Aviso />
                        <div className="mid">
                            <div className="flex justify-between p-3 pt-0 ">
                                <div className=" font-semibold text-white-fe">Conta</div> <IoIosArrowForward className='w-24 h-5 pl-9 text-GreenTheme' />
                            </div>
                            <div className=" pl-4 font-medium text-2xl text-white-fe"> R$ 40,00</div>
                        </div>
                        <div className=" p-3 flex justify-around border border-1 rounded-3xl m-5">
                            <div className="font-normal text-base text-white-fe">Meus Cartões</div> <FaCirclePlus className=' w-16 h-6 pl-9 text-GreenTheme' />
                        </div>
                        <div className="">
                            <div className=" border-CardTheme border border-1 rounded-xl m-5 p-3  flex justify-around bg-CardTheme">
                                <FaMoneyBills className='text-GreenTheme m-0.5 ' />
                                <div className="text-white-fb text-sm">Transfira dinheiro para sua Conta </div>
                                <IoIosArrowForward className='text-GreenTheme m-0.5 ' />
                            </div>

                            <div className=" border-CardTheme border border-1 rounded-xl m-5 p-3  flex justify-around bg-CardTheme">
                                <TbGraphFilled className='text-GreenTheme m-0.5' />
                                <div className="text-white-fb text-sm">Descubra seu perfil de Investidor </div>
                                <IoIosArrowForward className='text-GreenTheme m-0.5 ' />
                            </div>

                            <div className=" border-CardTheme border border-1 rounded-xl m-5 p-3  flex justify-around bg-CardTheme">
                                <IoMdAnalytics className='text-GreenTheme m-0.5 ' />
                                <div className="text-white-fb text-sm">Faça uma Análise de seus Gastos </div>
                                <IoIosArrowForward className='text-GreenTheme m-0.5 ' />
                            </div>
                        </div>
                        <TransferenciaHome />
                    </div>
                </div>
            </div>
        </>)
}
export default Home