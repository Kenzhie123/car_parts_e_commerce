var menu_button = document.getElementById('menu_button');
var sidebar = document.getElementById('sidebar');




document.addEventListener('click', (event)=>{
    if(!sidebar.contains(event.target) && !menu_button.contains(event.target))
    {
        sidebar.style.display = 'none';
        console.log('body clicked');
    }
    
});

menu_button.addEventListener('click', ()=>{
    sidebar.style.display = 'block';
    console.log('menu button clicked');
});
