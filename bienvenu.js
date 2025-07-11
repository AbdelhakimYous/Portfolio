const tousBienvenu = document.querySelectorAll('.bienvenu p');

function AjouterOpacity(langue)
{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            langue.style.setProperty('opacity', '1');
            langue.style.setProperty('transform', 'translateX(6px)');
            
            resolve('done');

        },230);
    });
}

async function attendreChangementLangue(i)
{
        for(let y=0; y<i.length; y++)
            {
                const myPrmosie = new Promise((resolve)=>{
                    const allo = async function()
                    {
                        await AjouterOpacity(i[y]);
                        resolve('done');
                    }
                    allo();
                })

                const res = await myPrmosie;

            }
            
        



}

async function createObserver2(element) {
    
    let observer;
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8  
    };
    
    observer = new IntersectionObserver(handleIntersect2, options);
    observer.observe(element);

  
  
  }


  
  function handleIntersect2(entry){
    entry.forEach(element => {

        if(element.isIntersecting)
        {
            attendreChangementLangue(tousBienvenu);
        }
        if(!element.isIntersecting)
        {
            element.target.style.setProperty('opacity', '0');
        }
      });
  }


window.addEventListener("load", e =>{



    tousBienvenu.forEach((ele)=>{ 
        createObserver2(ele);
    });

})
