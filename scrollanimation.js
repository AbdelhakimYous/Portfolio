document.addEventListener('keyup', (event) => {
    //console.log(event.key);
    if(event.key == 'ArrowDown'){
        window.scrollBy(0, 650);      
    }
    if(event.key == 'ArrowUp'){
        window.scrollBy(0,  -650);      
    }
});

