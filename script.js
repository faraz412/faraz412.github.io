const resumeBtn1=document.getElementById("resume-button-1");
const resumeBtn2=document.getElementById("resume-button-2");

// resumeBtn1.addEventListener("click",(e)=>{
//     setTimeout(()=>{
//         window.open(window.location.href);
//         window.location.href = "https://drive.google.com/file/d/1AcxnYYI7awYPNpPfYKPZAK_I_cW6gWmD/view?usp=sharing";
//     },500);
// })

// resumeBtn2.addEventListener("click",(e)=>{
//     setTimeout(()=>{
//         window.open(window.location.href);
//         window.location.href = "https://drive.google.com/file/d/1AcxnYYI7awYPNpPfYKPZAK_I_cW6gWmD/view?usp=sharing";
//     },500);
// })

const hamburger=document.getElementById("hamb");
const navbar_menu=document.getElementById("navbar-menu");

hamburger.addEventListener("click", (e)=>{
    if(navbar_menu.style.display=="none"){
        navbar_menu.style.display="block";
    }else{
        navbar_menu.style.display="none";
    }
})