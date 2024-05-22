
// menu toggle 

$(function(){
    $(".toggle").on("click", function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name = 'menu-outline'></ion-icon>")
        }else{
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name = 'close-outline' id='close'></ion-icon>")
        }
    })
})



$(".switch").click(function(){
    $("body").toggleClass("dark-mode")
    if($("body").hasClass("dark-mode")){
        $(".switch").attr("name", "sunny-outline");
    }else{
        $(".switch").attr("name", "moon-outline");
    }
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((enrty)=>{
        console.log(enrty)
        if(enrty.isIntersecting){
            enrty.target.classList.add('show')
        }else{
            enrty.target.classList.remove('show')
        };
    });
});

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe((el)))



const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
    allFilterBtns[0].classList.add('active-btn');
});

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        showFilteredContent(btn);
    });
});

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });
}