import ThemeSwitch from "../sharedComponents/UI/ThemeSwitch";
import LanguageSwitcher from "../sharedComponents/Language/LanguageSwitcher";

function SettingsPanel() {
  return (
    <div className="flex flex-row items-center p-4 space-x-4 justify-end">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  );
}

export default SettingsPanel;
