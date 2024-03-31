import defaultUserImage from "../assets/images/default-user-image.webp";
// import PasswordResetForm from "./PasswordResetForm";
import UserProfileInfo from "./UserProfileInfo";

function UserProfileSettings() {
  return (
    <section className="flex flex-1 flex-col bg-light-green py-14 ">
      <h2 className="text-center text-3xl font-bold text-teal-800 mb-12">
        User Profile
      </h2>
      <form className="text-medium-green w-1100 mx-auto flex bg-slate-100 p-16 justify-between rounded-3xl items-center">
        <img
          src={defaultUserImage}
          alt="user"
          className="w-60 h-60 rounded-full"
        />
        <UserProfileInfo />
      </form>
    </section>
  );
}

export default UserProfileSettings;
