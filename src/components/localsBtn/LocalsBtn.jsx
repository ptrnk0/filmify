import i18next from "i18next";
import { Segmented } from "antd";

import css from "./LocalsBtn.module.css";

import LOCALS from "../../i18n/constants";

const LocalsBtn = () => {
  return (
    <Segmented
      size={"middle"}
      shape="round"
      defaultValue={i18next.language}
      options={[
        { value: "en", label: "en" },
        { value: "uk", icon: "uk" },
      ]}
      onChange={() => {
        i18next.changeLanguage(
          i18next.language === "en" ? LOCALS.UK : LOCALS.EN
        );
      }}
    />
  );
};

export default LocalsBtn;
