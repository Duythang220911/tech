const overlay =
document.getElementById("sheetOverlay");

const frame =
document.getElementById("sheetFrame");

function openSheet(url){

    frame.src = url;

    overlay.classList.add("show");

    document
        .querySelector(".phone-app")
        .classList.add("scale");

}

function closeSheet(){

    overlay.classList.remove("show");

    document
        .querySelector(".phone-app")
        .classList.remove("scale");

    setTimeout(()=>{

        frame.src="";

    },350);

}

overlay.addEventListener("click",(e)=>{

    if(e.target===overlay){

        closeSheet();

    }

});