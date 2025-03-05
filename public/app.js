const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open');
    }
    else{
        sidebar.classList.add('open');
    };

})