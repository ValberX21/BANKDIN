import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineNotificationsActive } from "react-icons/md";

const Aviso: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="flex justify-center items-center ">
            <div className=" cursor-pointer " onClick={handleClick}>
                {!isExpanded && (
                    <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-GreenTheme "
                        style={{
                            background: ' black', position: 'relative', top: '-20px' 
                        }}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                    >
                        <MdOutlineNotificationsActive className=' w-10  h-8 text-GreenTheme' />
                    </motion.div>
                )}
                {isExpanded && (
                    <motion.div
                        className="p-3 bg-gradient-to-r  from-CardTheme to-CardTheme rounded-lg shadow-lg absolute  w-60 h-36"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        style={{ position: 'relative', top: '-60px' }} // Adjust the position slightly up
                    >
                        <div className="font-semibold text-base mb-2 text-white-fe">Sua fatura vai expirar</div>
                        <p className=" text-sm text-gray-c6">
                            Este é um exemplo de aviso para você se lembrar de pagar sempre sua fatura em dia.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
export default Aviso;