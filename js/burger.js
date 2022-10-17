const hamb = document.querySelector("#hamb")
const popup = document.querySelector("#popup")
const close = document.querySelector("#close")

hamb.addEventListener("click", function(){
	popup.classList.toggle("open")
})

close.addEventListener("click", function(){
	popup.classList.remove("open")
})