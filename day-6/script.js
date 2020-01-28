const menuBar = document.getElementById('menuBar')
const container = document.getElementById('container');
const menu = document.getElementById('menu');
const inputSearch = document.getElementById('inputSearch');
const buttonSearch = document.getElementById('buttonSearch');

menuBar.addEventListener('click', () => {
    if (container.classList.contains('container-slide-left')) {
        container.classList.add('container-slide-right');
        container.classList.remove('container-slide-left');
        menu.classList.add('menu-slide-left');
        menu.classList.remove('menu-slide-right');
        return;
    }

    container.classList.add('container-slide-left');
    container.classList.remove('container-slide-right');
    menu.classList.add('menu-slide-right');
    menu.classList.remove('menu-slide-left');
});

buttonSearch.addEventListener('click', () => {
   if (!inputSearch.classList.contains('input-show')) {
       inputSearch.classList.add('input-show');
       inputSearch.classList.remove('input-hide');
       return;
   }

   inputSearch.classList.add('input-hide');
   inputSearch.classList.remove('input-show');
});


