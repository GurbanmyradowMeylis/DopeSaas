import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";
import InputPassword from "./components/InputPassword";

export default function App() {
  return (
    <div className="font-primary-font flex gap-5 flex-col w-dvw h-dvh min-sm:gap-20 md-sm:flex-row">
      <div className="header min-sm:h-[10%] min-sm:justify-start min-sm:pl-10 md-sm:h-full md-sm:w-[45%] md-sm:flex-col md-sm:py-20 md-sm:items-start md-sm:justify-between md-sm:pl-20">
        <div className="w-16 h-12 md-sm:flex md-sm:gap-5 md-sm:size-auto">
          <div className="w-16 h-12 hidden md-sm:block">
            <img
              src="./assets/logo.svg"
              className="size-full object-cover"
              alt="logo"
            />
          </div>
          <p className="font-bold text-white text-4xl hidden md-sm:block">
            DopeSaas
          </p>
        </div>
        <p className="font-bold text-white text-4xl md-sm:hidden">DopeSaas</p>
        <div className="hidden md-sm:block md-sm:*:text-white md-sm:text-2xl">
          <h1 className="font-bold text-4xl">Consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, vero!
          </p>
        </div>
      </div>
      <div className="bottom-block md-sm:self-center md-sm:ml-0 md-sm: md-sm:max-w-xl">
        <div className="flex flex-col gap-2 *:text-xl mb-24">
          <h2 className="font-bold text-[#040308] min-sm:text-3xl md-sm:text-4xl">
            Create account
          </h2>
          <p className="min-sm:text-xl md-sm:text-2xl">
            Already have an account?{" "}
            <a className="text-[#312ECB] underline" href="/login">
              Login
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 min-sm:flex-row min-sm:*:w-full">
              <Input placeholder={"first name"} />
              <Input placeholder={"last name"} />
            </div>

            <Input placeholder={"email"} />
            <InputPassword />
          </div>
          <Checkbox />
          <button className="bg-[#312ECB] text-white rounded-md p-5">
            Create account
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <div className="bg-[#A8A7A9] w-1/2 h-px" />
            <p>or</p>
            <div className="bg-[#A8A7A9] w-1/2 h-px" />
          </div>
          <Button names={{ name: "google" }} />
          <Button names={{ name: "apple" }} />
        </div>
      </div>
    </div>
  );
}
