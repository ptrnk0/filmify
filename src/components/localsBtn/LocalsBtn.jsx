import i18next from "i18next";

import LOCALS from "../../i18n/constants";

const LocalsBtn = () => {
  return (
    <div>
      <button
        onClick={() => {
          i18next.changeLanguage(LOCALS.EN);
        }}
      >
        EN
      </button>
      <button
        onClick={() => {
          i18next.changeLanguage(LOCALS.UK);
        }}
      >
        UA
      </button>
    </div>
  );
};

export default LocalsBtn;
