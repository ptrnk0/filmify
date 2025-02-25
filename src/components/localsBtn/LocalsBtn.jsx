import i18next from "i18next";
import { Select } from "antd";

import css from "./LocalsBtn.module.css";

import LOCALS from "../../i18n/constants";

const LocalsBtn = () => {
  return (
    <Select
      defaultValue={i18next.language}
      style={{ width: 60 }}
      onChange={() => {
        i18next.changeLanguage(
          i18next.language === "en" ? LOCALS.UK : LOCALS.EN
        );
      }}
      options={[
        { value: "en", label: "en" },
        { value: "uk", label: "uk" },
      ]}
    />
  );
};

export default LocalsBtn;
