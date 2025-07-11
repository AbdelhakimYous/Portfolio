
window.addEventListener('load', (e)=>{
  const avantDiv = document.querySelector('.avant');
  const bienvenuDiv = document.querySelectorAll('.bienvenu p');
  const moiContainerDiv = document.querySelector('.moiContainer img');
  const bxDiv = document.querySelector('#bx');
  const eachContainerProjectDiv = document.querySelectorAll('.eachContainerProject');
  const skillsDiv = document.querySelectorAll('#skills div');
  const contactDiv = document.querySelector('#containerContact');
  const skillsh1 = document.querySelector('#allo'); 
  const arrayEle = [];
  arrayEle.push(skillsh1);
  arrayEle.push(avantDiv);
  arrayEle.push(moiContainerDiv);
  arrayEle.push(bxDiv);
  arrayEle.push(contactDiv);
  eachContainerProjectDiv.forEach((ele)=>{
    arrayEle.push(ele);
  })
  skillsDiv.forEach((ele)=>{
    arrayEle.push(ele);
  })



  arrayEle.forEach((element)=>
    {
      createObserver(element);

    })

  
})

function createObserver(element) {
  let observer;
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };
  
  observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(element);


}

function handleIntersect(entry){
  entry.forEach(element => {

    if(element.isIntersecting)
    {
        element.target.style.setProperty('opacity', '1');     
    }
    else
    {
      element.target.style.setProperty('opacity', '0');
    }
    });
}
