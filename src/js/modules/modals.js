import calcScroll from './calcScroll';

const modals = () => {
    function bindModal(
        triggerSelector, 
        modalSelector, 
        closeSelector, 
        timerId, 
        closeClickOverlay = true, 
        isAutoRun = false
        ) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (isAutoRun) {
                    clearTimeout(timerId);
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });
        

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
            
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selector, time, calcFunc) {
        return setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${calcFunc}px`;
        }, time);
    }


    
    let timerId = showModalByTime('body > .popup', 60000, calcScroll());

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', timerId);
    bindModal('.phone_link', '.popup', '.popup .popup_close', timerId, true, true);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', timerId);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', timerId, false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', timerId, false);
    
};

export default modals;