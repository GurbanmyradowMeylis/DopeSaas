import React from "react";

const Checkbox = () => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id="checkbox" className="size-5" />
      <label htmlFor="checkbox">
        {"I agree to DopeSass "}
        <a href="/TermsOfService" className="text-[#312ECB] underline">
          Terms of service
        </a>{" "}
        and{" "}
        <a href="/privacyPolicy" className="text-[#312ECB] underline">
          Privacy policy
        </a>
      </label>
    </div>
  );
};

export default Checkbox;
