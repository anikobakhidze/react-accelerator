import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageSwitcher from "../sharedComponents/Language/LanguageSwitcher";

function SettingsPanel() {
  return (
    <div className="flex flex-row justify-center items-center p-2 space-x-2 lg:px-14 xl:px-16 px-2 sm:px-10 md:space-x-2 md:justify-end bg-light-bg-color dark:bg-black">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  );
}

export default SettingsPanel;
