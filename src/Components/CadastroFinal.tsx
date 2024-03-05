import React, { useState } from 'react';
import FintechPNG from '../assets/FintechPNG.png';
import './App.css'; // Importe o arquivo app.css aqui
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const buscarCEP = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const data = response.data;
            setRua(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
        }
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode enviar os dados do formulário para o backend
        console.log({
            rua,
            numero,
            bairro,
            cidade,
            estado,
            cep
        });
    };
    return (

        <div className=" p-5">
            <img src={FintechPNG} alt="Fintech" className='w-24 flex ml-36' />
            <h1 className="  text-white tracking-wide text-2xl">
                Qual seu endereço?
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="rua" className="block mb-2 text-white/50">Rua</label>
                        <input type="text" id="rua" className="input block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7" value={rua} onChange={(e) => setRua(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="numero" className="block mb-2 text-white/50">Número</label>
                        <input type="text" id="numero" className="input block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7" value={numero} onChange={(e) => setNumero(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="bairro" className="block mb-2 text-white/50">Bairro</label>
                        <input type="text" id="bairro" className="input block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="cidade" className="block mb-2 text-white/50" >Cidade</label>
                        <input type="text" id="cidade" className="input block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="estado" className="block mb-2 text-white/50">Estado</label>
                        <input type="text" id="estado" className="input block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7" value={estado} onChange={(e) => setEstado(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="cep" className="block mb-2 text-white/50">CEP</label>
                        <div className="flex">
                            <input type="text" id="cep" className="input block w-full h-10 p-3 border mt-1 rounded bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-0 sm:leading-7" value={cep} onChange={(e) => setCep(e.target.value)} required />
                            <button type="button" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={buscarCEP}>Buscar</button>
                        </div>
                    </div>
                </div>
                <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"><Link to="./Components/Home">Criar minha Conta</Link></button>
            </form>
        </div>
    );
};
export default Cadastro;