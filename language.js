       const mainLanguage = navigator.language || navigator.userLanguage;
        console.log(mainLanguage);
        const tousElements = document.querySelectorAll('.translation');

        if(mainLanguage.search(/fr/i)!=-1)
        {
            fetch('language.json')
            .then((reponse)=>reponse.json())
        .then((json) =>
        {
            let y=0;
            for (const ele of json.fr) {


                    for(const key in ele)
                    {


                        if(tousElements[y].classList.contains('temp'))
                        {
                            tousElements[y].placeholder = ele[key];
                        }
                        else if(!tousElements[y].classList.contains('temp'))
                        {
                            tousElements[y].textContent = ele[key];
                        }


                        y++;
                    }

            }
        })
        }
        else
        {
            let y=0;
            fetch('language.json')
                .then((response) => response.json())
                .then((json) => {
                for (const ele of json.en) {

                    for(const key in ele)
                    {

                        if(tousElements[y].classList.contains('temp'))
                        {
                            tousElements[y].placeholder = ele[key];
                        }
                        else if(!tousElements[y].classList.contains('temp'))
                        {
                            tousElements[y].textContent = ele[key];
                        }


                        y++;
                    }

          
                    


                }
            })
        }