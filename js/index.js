var menu_button = document.getElementById('menu_button');
var sidebar = document.getElementById('sidebar');


menu_button.addEventListener('click', ()=>{
    sidebar.style.display = 'block';
    console.log('menu button clicked');
});

