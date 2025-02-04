document.addEventListener('DOMContentLoaded', () => {
    const account = document.querySelector('.account');
    const accoountPopup = document.querySelector('.account-popup');

    // Initially hide the account popup
    accoountPopup.style.opacity = '0';
    accoountPopup.style.transition = 'opacity 0.5s ease';
    account.style.transition = 'background 0.5s ease, color 0.5s ease'; // Add transition for color

    account.addEventListener('click', () => {
        const isHidden = accoountPopup.style.opacity === '0';
        accoountPopup.style.opacity = isHidden ? '1' : '0';
        account.style.background = isHidden ? '#3e3e3e' : '#8b8b8bd2';
        account.style.color = isHidden ? '#8b8b8bd2' : 'black';
    });

    accoountPopup.addEventListener('click', () => {
        accoountPopup.style.opacity = '0';
    });
});