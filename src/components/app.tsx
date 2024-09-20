import { useCurrencies } from 'services/use-currencies';
import CurrencyConverter from './currency-converter';

function App() {
  const { currencies } = useCurrencies();

  console.log(currencies);

  return (
    <>
      <CurrencyConverter />
    </>
  );
}

export default App;
