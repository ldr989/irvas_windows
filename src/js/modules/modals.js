import bindModal from "./bindModal";
import timerId from "./timerId";

const modals = () => {
    
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', timerId, true, true);
    bindModal('.phone_link', '.popup', '.popup .popup_close', timerId, true, true);
    
};

export default modals;