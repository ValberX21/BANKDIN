import './Home.css'; // Importe o arquivo app.css aqui
import { IoReorderTwoOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import CreditCard from './CreditCard';
import TransferenciaHome from './TransferenciaHome';
import Aviso from './Aviso';
import { Avatar } from "@nextui-org/react";

function Home() {
    return (
        <>
            <div className="font-Poppins bg-BackgroundWhite">
                <div className="h-28 bg-CardPurple">
                    <div className="flex justify-between p-3 pt-5   h-12">
                        <div className="flex items-center border-2  border-black   p-3  rounded-2xl  ">
                            <div className="font-normal text-sm">Olá, Danilo</div>
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        </div>
                        <IoReorderTwoOutline className='w-24 h-7 pl-9' />
                    </div>
                </div>
                <Aviso />
                <div className="mid">
                    <div className="flex justify-between p-3 pt-5">
                        <div className=" font-semibold">Conta</div> <IoIosArrowForward className='w-24 h-5 pl-9' />
                    </div>
                    <div className=" pl-4 font-medium text-2xl"> R$ 40,00</div>
                </div>
                <div className=" pt-5 flex justify-around ">
                    <div className="font-semibold text-base">Meus Cartões</div> <FaCirclePlus className=' w-16 h-6 pl-9' />
                </div>
                <div className="">
                    <CreditCard
                        cardHolder="Danilo Martinez"
                        cardNumber="1234 5678 9101 1121"
                        expiryDate="12/25"
                        backgroundImage="URL_DA_IMAGEM_AQUI"
                    />
                </div>
                <TransferenciaHome />
            </div>
        </>)
}
export default Home