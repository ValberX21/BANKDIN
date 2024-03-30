// Presumindo que este é o seu componente Navbar.tsx
import React, { useState } from 'react';
import { IoReorderTwoOutline, IoClose } from 'react-icons/io5';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Usar um fragmento para evitar elementos adicionais desnecessários
    <>
      {/* Ícone de Menu */}
      <IoReorderTwoOutline className="w-24 h-7 pl-9 text-GreenTheme cursor-pointer" onClick={toggleMenu} />
      
      {/* Tela cheia com animação e ícone de fechamento */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-white z-50 transition-transform duration-300 ease-in-out">
          {/* Ícone de Fechamento (X) no canto superior direito */}
          <IoClose className="text-3xl cursor-pointer text-GreenTheme absolute top-0 right-0 m-4" onClick={toggleMenu} />
          
          {/* Conteúdo da tela cheia aqui */}
          <div className="flex flex-col items-center justify-center h-full">
            {/* Seu conteúdo */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;