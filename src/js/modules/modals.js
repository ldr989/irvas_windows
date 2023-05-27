import bindModal from "./bindModal";
import timerId from "./timerId";

const modals = (state) => {
    
    bindModal(
        '.popup_engineer_btn', 
        '.popup_engineer', 
        '.popup_engineer .popup_close', 
        timerId,  
        true, 
        true
        );
    bindModal('.phone_link', '.popup', '.popup .popup_close', timerId, true, true);
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', timerId, true, true, false, state);
    bindModal(
        '.popup_calc_button', 
        '.popup_calc_profile', 
        '.popup_calc_profile_close', 
        timerId, 
        false,
        false,
        true,
        state,
        1
        );
    bindModal(
        '.popup_calc_profile_button', 
        '.popup_calc_end', 
        '.popup_calc_end_close', 
        timerId, 
        false,
        false,
        true,
        state,
        2
        );
};

export default modals;