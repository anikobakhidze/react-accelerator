import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageSwitcher from "../sharedComponents/Language/LanguageSwitcher";

function SettingsPanel() {
  return (
    <div className="flex flex-row items-center p-2 space-x-2 md:p-4  md:space-x-2 justify-end bg-light-bg-color dark:bg-dark-bg-primary">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  );
}

export default SettingsPanel;
