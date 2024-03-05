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
            <div className=" cursor-pointer" onClick={handleClick}>
                {!isExpanded && (
                    <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                            background: 'white', position: 'relative', top: '-25px'
                        }}
                        initial={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                    >
                        <MdOutlineNotificationsActive className=' w-10  h-8' />
                    </motion.div>
                )}
                {isExpanded && (
                    <motion.div
                        className="p-3 bg-gradient-to-r from-white to-gray-200 rounded-lg shadow-lg absolute  w-60 h-36"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        style={{ position: 'relative', top: '-60px' }} // Adjust the position slightly up
                    >
                        <div className="font-semibold text-base mb-2">Sua fatura vai expirar</div>
                        <p className="text-gray-700 text-sm">
                            Este é um exemplo de aviso para você se lembrar de pagar sempre sua fatura em dia.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
export default Aviso;