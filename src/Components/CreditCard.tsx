import React from 'react';
import creditcard from '../assets/creditcard.png';

interface CreditCardProps {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  backgroundImage: string;
}
const CreditCard: React.FC<CreditCardProps> = ({ cardHolder, cardNumber, expiryDate }) => {
  return (
    <div className="  w-11/12 m-3 rounded-lg overflow-hidden shadow-lg relative bg-cover bg-center p-4" style={{ backgroundImage: `url(${creditcard})` }}>
      <div className="bg-black bg-opacity-50 p-4 rounded">
        <div className="mb-3">
          <div className="text-sm text-gray-400">Card Holder</div>
          <div className="text-lg text-white">{cardHolder}</div>
        </div>
        <div className="mb-3">
          <div className="text-sm text-gray-400">Card Number</div>
          <div className="text-lg text-white">{cardNumber}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Expiry Date</div>
          <div className="text-lg text-white">{expiryDate}</div>
        </div>
      </div>
      <div className="">
      </div>
    </div>
  );
};
export default CreditCard;