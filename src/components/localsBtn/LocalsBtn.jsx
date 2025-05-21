import i18next from "i18next";

import LOCALS from "../../i18n/constants";

const LocalsBtn = () => {
  return (
    <div className="flex gap-1">
      <button
        onClick={() => {
          i18next.changeLanguage(LOCALS.EN);
        }}
        className="cursor-pointer"
      >
        &#x1F1EC;&#x1F1E7; English
      </button>
      <span>|</span>
      <button
        className="cursor-pointer"
        onClick={() => {
          i18next.changeLanguage(LOCALS.UK);
        }}
      >
        &#x1F1FA;&#x1F1E6; Українська
      </button>
    </div>
  );
};

export default LocalsBtn;
