const mqP = document.querySelector(".marquee-parent");
const circle = document.querySelector(".circle");
const article = document.querySelector("article");
mqP.addEventListener("mouseover" , (e)=>{
       mqP.classList.add("rotateAndScale");
});
article.addEventListener("mouseleave" , (e)=>{
       mqP.classList.remove("rotateAndScale");
});
