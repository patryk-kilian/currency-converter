import { useCurrencies } from 'services/use-currencies';

function App() {
  const { currencies } = useCurrencies();

  console.log(currencies);

  return (
    <>
      <div className="mb-4 text-center">hello</div>
    </>
  );
}

export default App;
