const cookieContainer = document.querySelector(".cookie-container");
const cookieBtn = document.querySelector(".cookie-btn");

cookieBtn.addEventListener("click",()=> {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDsiplayed", "true")
});

setTimeout(()=>{
    if(!localStorage.getItem("cookieBannerDsiplayed"))
    cookieContainer.classList.add("active")
}, 2000);