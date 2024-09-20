import React from 'react';
import NumberInput from 'components/form/text-input';
import Select from 'components/form/select';

interface CurrencyInputProps {
  id: string;
  amount: string;
  currency: string;
  onAmountChange: (value: string) => void;
  onCurrencyChange: (value: string) => void;
  currencyOptions: { value: string; label: string }[];
  placeholder?: string;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  id,
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  placeholder = 'Enter amount',
}) => {
  return (
    <div className="flex items-center mb-4">
      <NumberInput
        id={`${id}-amount`}
        value={amount}
        onChange={onAmountChange}
        placeholder={placeholder}
        className="flex-grow mr-2"
      />
      <Select
        id={`${id}-currency`}
        value={currency}
        onChange={onCurrencyChange}
        options={currencyOptions}
        placeholder="Select"
        className="w-48"
      />
    </div>
  );
};

export default CurrencyInput;
