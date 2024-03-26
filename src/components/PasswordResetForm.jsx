function PasswordResetForm() {
  return (
    <fieldset className="flex flex-col gap-4 w-2/6 h-80">
      <legend className="text-2xl font-bold text-teal-800 mb-4 w-full ">
        Reset Password
      </legend>
      <label className="text-xl font-semibold" htmlFor="password">
        Password
      </label>
      <input
        className="h-10 text-lg pl-2 rounded-xl outline-none focus:border-solid focus:border-2 focus:border-light-green"
        id="password"
        type="text"
        placeholder="New Password"
      />
      <label className="text-xl font-semibold" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className="h-10 text-lg pl-2 rounded-xl outline-none focus:border-solid focus:border-2 focus:border-light-green"
        id="confirmPassword"
        type="text"
        placeholder="Confirm Password"
      />
      <button className="bg-medium-green text-white h-12 rounded-full text-xl hover:bg-teal-800">
        Save profile
      </button>
    </fieldset>
  );
}

export default PasswordResetForm;
