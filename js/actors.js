const photo_1 = document.querySelector("main .actors .blocks .photo_1 img")
const photo_2 = document.querySelector("main .actors .blocks .photo_2 img")
const photo_3 = document.querySelector("main .actors .blocks .photo_3 img")

const leftArrow = document.querySelector("main .actors .arrowL img")
const rightArrow = document.querySelector("main .actors .arrowR img")

const info_1 = document.querySelector("#info_1")
const info_1S = window.getComputedStyle(info_1)

const info_2 = document.querySelector("#info_2")
const info_2S = window.getComputedStyle(info_2)

const info_3 = document.querySelector("#info_3")
const info_3S = window.getComputedStyle(info_3)

photo_1.addEventListener("click", function(e){
	e.preventDefault() //отмена стандартных настроек кнопки
	photo_1.style.cssText = `
		opacity: 1;
		transform: scale(1);
	`
	photo_2.style.cssText = `
		opacity: .5;
		transform: scale(.8);
	`
	photo_3.style.cssText = `
		opacity: .5;
		transform: scale(.8);
	`
	info_1.style.cssText =  info_2.style.cssText = info_3.style.cssText =`
		left: 50%;
		transform: translateX(-50%);
	`
})
photo_2.addEventListener("click", function(e){
	e.preventDefault() //отмена стандартных настроек кнопки
	photo_2.style.cssText = `
		opacity: 1;
		transform: scale(1);
	`
	photo_1.style.cssText = `
		opacity: .5;
		transform: scale(.8);
	`
	photo_3.style.cssText = `
		opacity: .5;
		transform: scale(.8);
	`	
	info_1.style.cssText =  info_2.style.cssText = info_3.style.cssText =`
		left: 0;
		transform: translateX(0);
	`
})
photo_3.addEventListener("click", function(e){
	e.preventDefault() //отмена стандартных настроек кнопки
	photo_3.style.cssText = `
		opacity: 1;
		transform: scale(1);
	`
	photo_1.style.cssText = `
		opacity: .5;
		transform: scale(.8);
	`
	photo_2.style.cssText = `
		opacity: .5;
		transform: scale(.8);
	`
	info_1.style.cssText =  info_2.style.cssText = info_3.style.cssText =`
		left: -50%;
		transform: translateX(50%);
	`
})


const halfActors = window.innerWidth/2 + 'px'

leftArrow.addEventListener("click", function(){
	if (info_2S.left == '0px') {
		info_1.style.cssText = info_2.style.cssText = info_3.style.cssText = `
			left: 50%;
			transform: translateX(-50%);
		`
		photo_1.style.cssText = `
			opacity: 1;
			transform: scale(1);
		`
		photo_2.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_3.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
	} else if (info_2S.left == halfActors) {
		info_1.style.cssText = info_2.style.cssText = info_3.style.cssText = `
			left: -50%;
			transform: translateX(50%);
		`
		photo_1.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_2.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_3.style.cssText = `
			opacity: 1;
			transform: scale(1);
		`
	} else if (info_2S.left == '-' + halfActors) {
		info_1.style.cssText = info_2.style.cssText = info_3.style.cssText = `
			left: 0;
			transform: translateX(0);
		`
		photo_1.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_2.style.cssText = `
			opacity: 1;
			transform: scale(1);
		`
		photo_3.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
	}
})

rightArrow.addEventListener("click", function(){
	if (info_2S.left == '0px') {
		info_1.style.cssText = info_2.style.cssText = info_3.style.cssText = `
			left: -50%;
			transform: translateX(50%);
		`
		photo_1.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_2.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_3.style.cssText = `
			opacity: 1;
			transform: scale(1);
		`
	} else if (info_2S.left == halfActors) {
		info_1.style.cssText = info_2.style.cssText = info_3.style.cssText = `
			left: 0;
			transform: translateX(0);
		`
		photo_1.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_2.style.cssText = `
			opacity: 1;
			transform: scale(1);
		`
		photo_3.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
	} else if (info_2S.left == '-' + halfActors) {
		info_1.style.cssText = info_2.style.cssText = info_3.style.cssText = `
			left: 50%;
			transform: translateX(-50%);
		`
		photo_1.style.cssText = `
			opacity: 1;
			transform: scale(1);
		`
		photo_2.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
		photo_3.style.cssText = `
			opacity: .5;
			transform: scale(.8);
		`
	}
})



































