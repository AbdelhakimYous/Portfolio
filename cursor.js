const debutBox = document.querySelector('.ensemble');
let ratio = 65;
let rgb = `40deg ,rgb(49, 47, 47), rgb(20, 2, ${ratio})`;
let yCurrent;
document.addEventListener('scroll', (event) => {
    let y = window.scrollY;
    //console.log('la valeur de y global');
    //console.log(yCurrent);
    if(y > yCurrent){
        ratio = ratio + 5;
        //console.log(ratio);
        //console.log("test");

        debutBox.style.setProperty('background', `linear-gradient(${rgb})`);
    }
    else if(y < yCurrent){
        ratio = ratio - 5;
        debutBox.style.setProperty('background', `linear-gradient(${rgb})`);
    }
    yCurrent = y;


    
});

function changerCouleur()
{

}
