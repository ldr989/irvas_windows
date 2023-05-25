import checkNumInputs from "./checkNumInputs";
import showStatusMessage from "./showStatusMessage";
import removeStatusMessage from "./removeStatusMessage";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data, div) => {
        showStatusMessage(div, message.loading);
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData, item)
                .then(res => {
                    console.log(res);
                    removeStatusMessage();
                    showStatusMessage(item, message.success);
                })
                .catch(() => {
                    removeStatusMessage();
                    showStatusMessage(item, message.failure);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        removeStatusMessage();
                        Object.keys(state).forEach(key => delete state[key]);
                    }, 5000);
                });
        });
    });
};

export default forms;