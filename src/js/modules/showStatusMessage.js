const showStatusMessage = (item, message) => {
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message;
    item.appendChild(statusMessage);
};

export default showStatusMessage;