import React from "react";

const Button = ({ names }) => {
  let name = names.name.charAt(0).toUpperCase() + names.name.slice(1);
    return (
    <button className="flex py-2 gap-5 justify-center items-center border-2 border-[#040308] rounded-md">
      <div className="size-6">
        <img
          src={`./assets/${names.name}.svg`}
          className="size-full object-cover"
        />
      </div>
      <p className="font-bold text-lg">Continue with {name}</p>
    </button>
  );
};

export default Button;
