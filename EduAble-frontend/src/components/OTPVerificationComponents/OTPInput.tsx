import React from "react";

interface OTPInputProps {
  value: string[];
  onChange: (index: number, value: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ value, onChange }) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "").slice(0, 1); // only one digit
    onChange(index, newValue);

    if (newValue && e.target.nextElementSibling) {
      (e.target.nextElementSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      const prevInput = e.currentTarget
        .previousElementSibling as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="grid grid-cols-6 gap-3">
      {value.map((digit, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-12 text-center border-2 border-indigo-300 rounded-lg bg-white text-xl font-bold focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300 transition-all duration-200 hover:border-purple-400"
        />
      ))}
    </div>
  );
};

export default OTPInput;
