let menu = 0;

document.addEventListener("click", e =>{
    el = e.target;

    if(el.classList.contains('humButton') || el.classList.contains('line')){
        menuChange();
    }
})

function menuChange(){
    const lines = document.querySelectorAll('.line');
    const nav = document.querySelector('.nav01');
    
    if(menu % 2 == 0){
        lines[0].style.position = "absolute";
        lines[0].style.transform = "rotate(45deg)";
    
        lines[1].style.display = 'none';
    
        lines[2].style.position = "absolute";
        lines[2].style.transform = "rotate(-45deg)";

        nav.style.display = "block";

        menu ++
    } else {
        lines[0].style.position = "relative";
        lines[0].style.transform = "rotate(0deg)";
    
        lines[1].style.display = 'block';
    
        lines[2].style.position = "relative";
        lines[2].style.transform = "rotate(0deg)";

        nav.style.display = "none";

        menu ++;
    }
}