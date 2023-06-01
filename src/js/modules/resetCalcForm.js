import removeStatusMessage from "./removeStatusMessage";

const resetCalcForm = () => {
    const bigImage = document.querySelectorAll('.big_img > img'),
        windowForm = document.querySelectorAll('.balcon_icons_img'),
        checkboxes = document.querySelectorAll('.checkbox'),
        inputs = document.querySelectorAll('.popup_calc_content > input'),
        select = document.querySelector('.popup_calc_profile_content > .form-control');


    bigImage.forEach(item => {
        item.style.display = 'none';
    });

    windowForm.forEach(item => {
        item.classList.remove('do_image_more');
    });

    bigImage[0].style.display = 'inline-block';
    windowForm[0].classList.add('do_image_more');
    inputs.forEach(item => {
        item.value = '';
    });

    select.value = 'tree';
    checkboxes.forEach(item => {
        item.checked = false;
    });

    removeStatusMessage();
    if (document.querySelector('.border-red')) {
        document.querySelector('.border-red').classList.remove('border-red');
    }

};

export default resetCalcForm;