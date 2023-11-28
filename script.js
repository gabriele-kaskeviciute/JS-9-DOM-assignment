
// 1 užduotis
// H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.


const myName = document.querySelector(".myName")



myName.addEventListener("click", () => { 

myName.style.color = "red";
myName.style.fontSize = "4em";
myName.style.position = "absolute"
myName.style.top = "35%"
myName.style.left = "40%"






});

