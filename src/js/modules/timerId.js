import calcScroll from "./calcScroll";

const showModalByTime = (selector, time, calcFunc) => {
        return setTimeout(function () {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${calcFunc}px`;
        }, time);
    
};

let timerId = showModalByTime('body > .popup', 60000, calcScroll());

export default timerId;