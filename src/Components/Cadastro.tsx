import React, { useState } from 'react';
import FintechPNG from '../assets/FintechPNG.png';
import { FaArrowTrendUp } from 'react-icons/fa6';
import './App.css'; // Importe o arquivo app.css aqui
import { Link } from 'react-router-dom';
import BackgroundLogin from './BackgroundLogin';

function Cadastro() {
    const [cpf, setCpf] = useState('');
    const [formattedCpf, setFormattedCpf] = useState('');
    const [cpfValido, setCpfValido] = useState(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        // Remove caracteres não numéricos do valor do CPF
        const cleanedValue = value.replace(/\D/g, '');

        // Formata o CPF adicionando pontos e traço
        const formattedValue = formatarCPF(cleanedValue);

        // Verifica se o CPF está no formato válido
        const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
        const isValid = cpfRegex.test(formattedValue);

        // Atualiza os estados
        setCpf(cleanedValue);
        setFormattedCpf(formattedValue);
        setCpfValido(isValid);
    };
    // Função para formatar o CPF
    const formatarCPF = (cpf: string) => {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };
    return (
        
        <div className=" bg-black  font-exo2">
            <BackgroundLogin />
            <div className=' relative z-10'> 
            <img src={FintechPNG} alt="Fintech" className='w-24 flex ml-36' />
            <div className=" p-5">
                <h1 className="  text-white tracking-wide text-2xl">
                    Para começar, entre com seu CPF.
                </h1>
                <div className="text-ST flex text-sm underline hover:cursor-pointer pb-5">
                    <a href="#">Fortalecendo Seu Futuro Financeiro.</a><FaArrowTrendUp className="ml-1" />
                </div>
                <label className=" text-ST font-bold p-1">CPF</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    autoComplete="off"
                    value={formattedCpf}
                    onChange={handleChange}
                    className={`block w-full h-10 p-3 border mt-1 ${cpfValido ? 'border-gray-300' : 'border-red-500'
                        } rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7`}
                    placeholder="Digite seu CPF"
                />
                {!cpfValido && (
                    <p className="text-red-500 text-sm mt-1">
                        Por favor, insira um CPF válido (123.456.789-00)
                    </p>
                )}
                <div className="pt-4">
                    <div className="text-white/50 p-1 font-bold">Nome</div>
                    <input type='text' id="name" name="nome" autoComplete="off" placeholder="Digite seu Nome" className="block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7"></input>
                </div>
                <div className="pt-4">
                    <div className="text-white/50 p-1 font-bold">E-mail</div>
                    <input type='email' id="email" name="email" autoComplete="off" placeholder="Digite seu E-mail" className="block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7"></input>
                </div>
                <div className="pt-4">
                    <div className="text-white/50 p-1 font-bold">Crie uma Senha</div>
                    <input type='text' id="senha" name="senha" autoComplete="off" placeholder="Nova Senha" className="block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7"></input>
                </div>
                <div className="pt-4">
                    <div className="text-white/50 p-1 font-bold">Confirmar Senha</div>
                    <input type='text' id="senha" name="senha" autoComplete="off" placeholder="Senha" className="block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7"></input>
                </div>
            </div>
            <button className=" m-64 mt-4 flex items-center   font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300  rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2" type="submit"> <Link to="./Components/CadastroFinal">Continuar</Link></button>
            </div>
        </div>
    );
}
export default Cadastro;