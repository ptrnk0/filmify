import i18next from "i18next";

import css from "./LocalsBtn.module.css";

import LOCALS from "../../i18n/constants";

const LocalsBtn = () => {
	return (
		<div className={css.localsBtnContainer}>
			<button
				onClick={() => {
					i18next.changeLanguage(LOCALS.EN);
				}}
				className={css.localsBtn}
			>
				EN
			</button>
			<button
				onClick={() => {
					i18next.changeLanguage(LOCALS.UK);
				}}
				className={css.localsBtn}
			>
				UA
			</button>
		</div>
	);
};

export default LocalsBtn;
