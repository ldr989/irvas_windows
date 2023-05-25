import calcScroll from "./calcScroll";
import showStatusMessage from "./showStatusMessage";
import removeStatusMessage from "./removeStatusMessage";

const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    timerId,
    closeClickOverlay = true,
    clearTimer = false,
    isCalc = false,
    state = {},
    formWindow = 1
) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();

    const closeAllFormsAndOpenNextForm = (opennedForm, nextForm) => {
        opennedForm.forEach(item => {
            item.style.display = 'none';
        });
        nextForm.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    };

    const addClass = (selector, newClass) => {
        document.querySelector(selector).classList.add(newClass);
    };

    const statusMessages = {
        form: 'Выберите нужную форму балкона',
        width: 'Выберите ширину окна',
        height: 'Выберите высоту окна',
        type: 'Выберите тип остекления',
        profile: 'Выберите профиль'
    };

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            if (clearTimer) {
                clearTimeout(timerId);
            }

            if (isCalc) {
                if (formWindow === 1) {
                    if (state.form === undefined) {
                        addClass('.balcon_icons', 'border-red');
                        removeStatusMessage();
                        showStatusMessage('.balcon_icons', statusMessages.form, true);
                    } else if (state.width === undefined) {
                        addClass('#width', 'border-red');
                        removeStatusMessage();
                        showStatusMessage('.big_img', statusMessages.width, true);
                    } else if (state.height === undefined) {
                        addClass('#height', 'border-red');
                        removeStatusMessage();
                        showStatusMessage('.big_img', statusMessages.height, true);
                    } else {
                        closeAllFormsAndOpenNextForm(windows, modal);
                    }
                } else if (formWindow === 2) {
                    if (state.type === undefined) {
                        addClass('#view_type', 'border-red');
                        removeStatusMessage();
                        showStatusMessage('.popup_calc_profile_content', statusMessages.type, true);
                    } else if (state.profile === undefined) {
                        removeStatusMessage();
                        showStatusMessage('.popup_calc_profile_content', statusMessages.profile, true);
                    } else {
                        closeAllFormsAndOpenNextForm(windows, modal);
                    }
                }
            } else {
                closeAllFormsAndOpenNextForm(windows, modal);
            }
        });
    });


    close.addEventListener('click', () => {
        windows.forEach(item => {
            item.style.display = 'none';
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal && closeClickOverlay) {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    });
};

export default bindModal;

