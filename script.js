const openmenu = () => {
    document.querySelector(selectors:'backdrop').className = 'backdrop active';
    document.querySelector(selectors:'aside').className = 'active';
}
const closemenu = () => {
    document.querySelector(selectors:'backdrop').className = 'backdrop';
    document.querySelector(selectors:'aside').className = '';
}

document.getElementById(elementId:'menuBtn').onclick = 0 => {
    e.preventDefault();
    openmenu();
}