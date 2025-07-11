let section;
let imgContent;
window.addEventListener('load', (event)=>{
    section = document.querySelector(".section-2");
    imgContent = document.querySelector(".img");
    createOberver();
})
function createOberver()
{
    const objOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: "-100px",
      };
      function callBackFunction(entries) 
{

  const [entry] = entries;
  if (entry.isIntersecting) {
    imgContent.classList.remove("hidden");
  } else {
    imgContent.classList.add("hidden");
  }
}
      const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
      sectionObserver.observe(section);
}

