let menuIcon = document.querySelector('.menu-icon');
console.log(menuIcon);
let menu = document.querySelector('.menu');
let banner = document.querySelector('.banner');
menuIcon.addEventListener('click', function(e){
        let bannerHeight = banner.getBoundingClientRect().height;
        menu.classList.toggle('menu-show');
        menu.style.height = bannerHeight+'px';
});

