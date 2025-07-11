const listEn = [
    'Web Developer',
    'Problem Solver',
    'Programmer',
    'Fullstack Dev'
]
const listFR = [
    'Développeur Web',
    'Solutionneur',
    'Programmeur',
    'Dev Fullstack'
]

 let language = navigator.language || navigator.languages

if(language.search(/fr/i)!=-1)
 {
    timeoutArray(listFR);
 }
 else
 {
    timeoutArray(listEn);
 }

 const divProfession = document.querySelector(".profession");

function callPromise(item)
 {
    return new Promise((res)=>
    {
        setTimeout(()=>{
            divProfession.innerHTML = item;
            divProfession.style.setProperty('opacity', '1');
            res('done');
        }, 2500);

    })
 }

async function timeoutArray(array)
{
    for (let i=0; i<array.length; i++)
    {
        await callPromise(array[i]);
    }
}

 

