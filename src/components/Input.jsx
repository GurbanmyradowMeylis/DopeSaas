import React from "react";

const Input = ({placeholder}) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="p-3 border-2 rounded-md border-[#8D8D90] focus-within:outline-none min-sm:placeholder:text-xl min-sm:text-xl"
      />
    );
};

export default Input;
