import CurrencyInput from './form/currency-input';
import { useConverter } from 'hooks/use-converter';

const CurrencyConverter = () => {
  const {
    fromCurrency,
    toCurrency,
    handleFromCurrencyChange,
    handleToCurrencyChange,
    currencyOptions,
    isLoadingCurrencies,
    error,
    fromAmount,
    toAmount,
    handleFromAmountChange,
    handleToAmountChange,
  } = useConverter();

  if (isLoadingCurrencies) {
    return <div className="text-center">Loading currencies...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Currency Converter
      </h1>
      <CurrencyInput
        id="from"
        amount={fromAmount}
        currency={fromCurrency}
        onAmountChange={handleFromAmountChange}
        onCurrencyChange={handleFromCurrencyChange}
        currencyOptions={currencyOptions}
        placeholder="Enter amount"
      />
      <CurrencyInput
        id="from"
        amount={toAmount}
        currency={toCurrency}
        onAmountChange={handleToAmountChange}
        onCurrencyChange={handleToCurrencyChange}
        currencyOptions={currencyOptions}
        placeholder="Enter amount"
      />
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default CurrencyConverter;
