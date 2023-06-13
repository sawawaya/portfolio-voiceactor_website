'use strict'

{ // menu
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const overlay = document.querySelector('.overlay');

    menuOpen.addEventListener('click', () => {
        overlay.classList.add('show');
        menuOpen.classList.add('hide');
    });

    menuClose.addEventListener('click', () => {
        overlay.classList.remove('show');
        menuOpen.classList.remove('hide');
    });
}

{ //profile
    const profile = document.querySelector('.profile');
    const profileAppearBtn = document.querySelector('.profile-appear-btn');
    const profileDisappearBtn = document.querySelector('.profile-disappear-btn');
    const profileDisappear = document.querySelector('.profile-appear-hidden');

    function profileOpen() {
        profileAppearBtn.addEventListener('click', () => {
            profile.classList.remove('profile');
            profileAppearBtn.classList.add('profile-appear-hidden');
            profileDisappear.classList.remove('profile-appear-hidden');
        });
    }

    function profileClose() {
        profileDisappearBtn.addEventListener('click', () => {
            profile.classList.add('profile');
            profileAppearBtn.classList.remove('profile-appear-hidden');
            profileDisappear.classList.add('profile-appear-hidden');
        });
    }

    profileOpen();
    profileClose();
}

{ //faq
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt => {
        dt.addEventListener('click', () => {
            dt.parentNode.classList.toggle('faqOpen');
        });
    });
}