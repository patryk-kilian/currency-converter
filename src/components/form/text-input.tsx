type NumberInputProps = {
  value: string;
  id: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
};

const NumberInput = ({
  value,
  id,
  onChange,
  placeholder = 'Enter amount',
  className,
}: NumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    onChange(inputValue);
  };

  return (
    <div className={className}>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default NumberInput;
