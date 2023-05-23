import calcScroll from "./calcScroll";

const bindModal = (
    triggerSelector,
    modalSelector,
    closeSelector,
    timerId,
    closeClickOverlay = true,
    isAutoRun = false
) => {
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
};

export default bindModal;

