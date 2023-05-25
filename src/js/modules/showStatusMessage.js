const showStatusMessage = (element, message, isSelector = false) => {
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message;
    if (!isSelector) {
        element.appendChild(statusMessage);
    } else {
        document.querySelector(element).appendChild(statusMessage);
    }
};

export default showStatusMessage;