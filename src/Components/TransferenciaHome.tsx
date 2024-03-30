import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";

// Define types for the tab names and transaction items
type TabName = 'transfer' | 'receive';
type TransactionItem = {
    id: number;
    name: string;
    date: string;
    amount: string;
    imageUrl: string;
};
// Separate transactions for transfers and receipts
const transferTransactions: TransactionItem[] = [
    { id: 1, name: 'Uber', date: 'Sep 12, 2023', amount: '-R$35.00', imageUrl: 'https://placehold.co/40x40' },
    { id: 2, name: 'Netflix', date: 'Sep 12, 2023', amount: '-R$120.00', imageUrl: 'https://placehold.co/40x40' },
];
const receiveTransactions: TransactionItem[] = [
    { id: 1, name: 'Steam', date: 'Sep 12, 2023', amount: 'R$35.00', imageUrl: 'https://placehold.co/40x40' },
    { id: 2, name: 'Discord', date: 'Sep 12, 2023', amount: 'R$120.00', imageUrl: 'https://placehold.co/40x40' },
];
const TransferenciaHome = () => {
    const [activeTab, setActiveTab] = useState<TabName>('transfer');
    // Function to render transactions based on the active tab
    const renderTransactions = (transactions: TransactionItem[]) => {
        return transactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center px-6 py-4 ">
                <div className="flex space-x-3 items-center">
                    <img src={transaction.imageUrl} alt={transaction.name} className="rounded-full " />
                    <div>
                        <p className="text-sm font-semibold text-white-fb">{transaction.name}</p>
                        <p className="text-xs text-gray-c7">{transaction.date}</p>
                    </div>
                </div>
                <div>
                    {/* Adiciona lógica para determinar a cor baseada no tipo de transação */}
                    <p className={`text-sm font-semibold ${transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                        {transaction.amount}
                    </p>
                </div>
            </div>
        ));
    };
    return (
        <div className="bg-CardTheme max-w-sm mx-auto">
            <div className="flex justify-between items-center bg-CardTheme py-4 px-6 rounded-t-lg shadow">
                <div className="flex space-x-3 items-center">
                    <button
                        aria-label="Transferência"
                        className={`focus:outline-none ${activeTab === 'transfer' ? 'text-white-fe' : 'text-gray-600'} p-2`}
                        onClick={() => setActiveTab('transfer')}
                    >
                        <div className="flex ">
                            <LuArrowUpToLine className='mr-2 text-GreenTheme' />
                            <span>Transferência</span>
                        </div>

                    </button>
                    <button
                        aria-label="Recebido"
                        className={`focus:outline-none ${activeTab === 'receive' ? 'text-white-fe' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('receive')}
                    >
                        <div className="flex ">
                            <LuArrowDownToLine className='mr-2 text-GreenTheme' />
                            <span>Recebido</span>
                        </div>
                    </button>
                </div>
                <button aria-label="Options" className="text-gray-600 focus:outline-none">
                    <FontAwesomeIcon icon={faEllipsisV} className='text-GreenTheme' />
                </button>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: activeTab === 'transfer' ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: activeTab === 'transfer' ? 100 : -100 }}
                    transition={{ duration: 0.2 }}
                    className="bg-CardTheme divide-y divide-gray-800"
                >
                    {activeTab === 'transfer'
                        ? renderTransactions(transferTransactions)
                        : renderTransactions(receiveTransactions)}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
export default TransferenciaHome;