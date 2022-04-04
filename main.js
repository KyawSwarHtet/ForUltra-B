const searchBox=document.getElementById('search');
const search_warp=document.getElementById("searchbox");
const alters=document.getElementById("alters");
const name=document.getElementById("name");
const navmeun= document.getElementById("menu_sub");
const submenu=document.querySelector("submenu");

searchBox.addEventListener('click',()=>{
        search_warp.style.display='block';
})



//submenu
navmeun.addEventListener("click",()=>{
    submenu.style.display="block";
})




// navigator bar
window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
    })

// show hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)