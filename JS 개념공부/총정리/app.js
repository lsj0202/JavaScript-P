const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    console.log(h1.style.color);
    h1.style.color = "blue";
    console.log(h1.style.color);
}

h1.addEventListener("click", handleTitleClick);

// function handleMouseLeave(){
//     h1.innerText ="Mouse is gone!";
// }


// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy(){
//     alert("copier!");
// }

// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }

// function handleWindowCopyOnline(){
//     alert("Are GOOD!!!")
// }
// h1.addEventListener("mouseclick", handleTitleClick);
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy",handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


