const removeStatusMessage = () => {
    if (document.querySelector('.status')) {
        document.querySelector('.status').remove();
    }
};

export default removeStatusMessage;
