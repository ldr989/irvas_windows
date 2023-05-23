import bindModal from "./bindModal";
import timerId from "./timerId";
import showStatusMessage from "./showStatusMessage";
import removeStatusMessage from "./removeStatusMessage";

const calc = (state) => {
    const balconForm = document.querySelector('.balcon_icons'),
        bigImg = document.querySelector('.big_img'),
        height = document.querySelector('#height');


    const statusMessages = {
        form: 'Выберите нужную форму балкона',
        width: 'Выберите ширину окна',
        height: 'Выберите высоту окна'
    };

    const tryCatch = (func) => {
        try {
            removeStatusMessage();
        } catch (err) {
        }
    };

    const addClass = (selector, newClass) => {
        document.querySelector(selector).classList.add(newClass);
    };

    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', timerId, true, true);

    document.querySelector('.popup_calc_button').addEventListener('click', () => {
        if (state.form === undefined) {
            addClass('.balcon_icons', 'border-red');
            tryCatch(removeStatusMessage);
            showStatusMessage(balconForm, statusMessages.form);
        } else if (state.width === undefined) {
            addClass('#width', 'border-red');
            tryCatch(removeStatusMessage);
            showStatusMessage(bigImg, statusMessages.width);
        } else if (state.height === undefined) {
            addClass('#height', 'border-red');
            tryCatch(removeStatusMessage);
            showStatusMessage(bigImg, statusMessages.height);
        } else {
            bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', timerId, false);
        }
    });
    


    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', timerId, false);
};

export default calc;