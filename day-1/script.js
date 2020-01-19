'use strict';

const el = document.querySelector('.container');
el.addEventListener('click', function() {

    if (this.classList.contains('active')) {
        this.classList.add('disabled');
        this.classList.remove('active');
       return;
   }

    this.classList.remove('disabled');
    this.classList.add('active');
});
