let menu = 0;

document.addEventListener("click", e =>{
    el = e.target;

    if(el.classList.contains('humButton') || el.classList.contains('line')){
        menuChange();
    }
})

function menuChange(){
    const lines = document.querySelectorAll('.line');
    const menuBar = document.querySelector('#test');

    if(menu % 2 == 0){
        lines[0].style.position = "absolute";
        lines[0].style.transform = "rotate(45deg)";
    
        lines[1].style.display = 'none';
    
        lines[2].style.position = "absolute";
        lines[2].style.transform = "rotate(-45deg)";

        menuBar.style.display = "block";
        menuBar.style.width = "60vw"

        menu ++
    } else {
        lines[0].style.position = "relative";
        lines[0].style.transform = "rotate(0deg)";
    
        lines[1].style.display = 'block';
    
        lines[2].style.position = "relative";
        lines[2].style.transform = "rotate(0deg)";

        menuBar.style.display = "none";
        menuBar.style.width = "0"

        menu ++;
    }
}