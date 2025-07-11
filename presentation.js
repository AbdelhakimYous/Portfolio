
        const list = ["H", "E", "L", "L", "O", " ", "W", "O", "R", "L", "D","!"];
        const list2En = ["I","'", "M", " ", "A", "B", "D", "E", "L", "H", "A","K","I","M"];
        const list2Fr = ["J","e", " ", "s","u","i","s"," ", "A", "B", "D", "E", "L", "H", "A","K","I","M"];
        const list3 = ["H", "E", "L", "L", "O", " ", "W", "O", "R", "L", "D","!"];
        const test = document.querySelector('.test');
        const test2 = document.querySelector('.name');
        const test3 = document.querySelector('.test');

        const lang = navigator.language || navigator.userLanguage;
        let list2;
        if(lang.search(/fr/i)!=-1)
        {
            list2=list2Fr;
        }
        else
        {
            list2=list2En;
        }

        function showMsg(word)
        {
            test.textContent += word;
        }



        function retarderChaqueLettre(params) {
            return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(params);
            }, 75)
            })
        
            }    
            async function chercherAwaitTimeout(params,zoneEcrire,start, stop, arrayPromises) 
            {
                
            
                if(start == 0)
                {
                    let arrayPromises= [];
                    let stop = params.length;
                    let lettre = await retarderChaqueLettre(start);
                    zoneEcrire.textContent += params[lettre];
                    arrayPromises.push(lettre);
                    await chercherAwaitTimeout(params, zoneEcrire, start+1, stop,arrayPromises );
                }
                else if (start < stop)
                {
                    let lettre = await retarderChaqueLettre(start);
                    arrayPromises.push(lettre);
                    zoneEcrire.textContent += params[lettre];
                    await chercherAwaitTimeout(params, zoneEcrire, start+1, stop, arrayPromises);
                }
                else
                {
                    return arrayPromises;
                    //chercherAwaitTimeout(list2, test2,0);
                }
        
            }
            
            
            
            chercherAwaitTimeout(list, test, 0).then(()=>chercherAwaitTimeout(list2, test2, 0));