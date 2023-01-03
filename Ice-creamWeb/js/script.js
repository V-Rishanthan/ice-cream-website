

// toggle nav bar 
const bar__btn=document.querySelector(".hamBar");
const nav__links=document.querySelector(".nav__links");
const close_iconbtn=document.querySelector(".close_iconbtn");


bar__btn.addEventListener("click",()=>{
    nav__links.classList.toggle('active_menu');
});

close_iconbtn.addEventListener('click',()=>{
    nav__links.classList.remove('active_menu');
});

const brand_box = document.querySelector('.brand_box');
const drop_menu=document.querySelector('.drop_menu');
brand_box.addEventListener('click',()=>{
    drop_menu.classList.toggle('active_dropMenu');
})

const verity=document.querySelector('.verity');
const mega__box=document.querySelector('.mega__box');
verity.addEventListener('click',()=>{
    mega__box.classList.toggle('active_dropMenu');
})