function InputPassword() {
  return (
    <div className="border-2 rounded-md border-[#8D8D90] relative ">
      <input
        type="password"
        placeholder="password"
        className="focus-within:outline-none size-full rounded-md p-3 min-sm:placeholder:text-xl min-sm:text-xl"
      />
      <button className="size-5 absolute right-3 top-2/4 -translate-y-2/4">
        <img src="./assets/Icon.svg" className="object-cover size-full " />
      </button>
    </div>
  );
}
export default InputPassword;
