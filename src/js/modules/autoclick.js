const autoclick = (selector) => {
    const elem = document.querySelector(selector);
    let event = new Event('click');
    elem.dispatchEvent(event);
};

export default autoclick;