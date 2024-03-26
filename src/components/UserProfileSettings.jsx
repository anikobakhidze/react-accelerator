import defaultUserImage from "../assets/images/default-user-image.webp";

function UserProfileSettings() {
  return (
    <section className="flex flex-1 flex-col bg-light-green py-14 ">
      <h2 className="text-center text-3xl font-bold text-medium-green mb-12">
        User Profile
      </h2>
      <form className="text-medium-green w-1100 mx-auto flex bg-slate-100 p-16 justify-between rounded-3xl items-center">
        <img
          src={defaultUserImage}
          alt="user"
          className="w-60 h-60 rounded-full"
        />
        <fieldset className="flex flex-col gap-4 w-2/6 h-80 ">
          <legend className="text-2xl font-bold text-teal-800 mb-4 w-full ">
            About
          </legend>
          <label htmlFor="name" className="text-xl font-semibold">
            Name
          </label>
          <input
            className="h-10 text-lg pl-2 rounded-xl outline-none "
            id="name"
            type="text"
            value="Name"
            placeholder="Name"
            readOnly
          />
          <label htmlFor="surname" className="text-xl font-semibold">
            Surname
          </label>
          <input
            className="h-10 text-lg pl-2 rounded-xl outline-none "
            id="surname"
            type="text"
            value="Surname"
            placeholder="Surname"
            readOnly
          />
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            className="h-10 text-lg pl-2 rounded-xl outline-none "
            id="email"
            type="Email"
            value="Email"
            readOnly
          />
        </fieldset>
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
      </form>
    </section>
  );
}

export default UserProfileSettings;
