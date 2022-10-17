const img_1 = document.querySelector('main .beutiful_interface .blocks img:nth-child(2)')
const img_1S = window.getComputedStyle(img_1)

const img_2 = document.querySelector('main .beutiful_interface .blocks img:nth-child(3)')
const img_2S = window.getComputedStyle(img_2)

const img_3 = document.querySelector('main .beutiful_interface .blocks img:nth-child(4)')
const img_3S = window.getComputedStyle(img_3)

const img_4 = document.querySelector('main .beutiful_interface .blocks img:nth-child(5)')
const img_4S = window.getComputedStyle(img_4)

const img_5 = document.querySelector('main .beutiful_interface .blocks img:nth-child(6)')
const img_5S = window.getComputedStyle(img_5)

const half = window.innerWidth/2 + 'px'

img_1.addEventListener("click", function(e){
	// console.log('1: ' + img_1S.left)
	if (img_2S.left == half) {
		img_2.style.left = img_1S.left
	} 
	if (img_3S.left == half) {
		img_3.style.left = img_1S.left
	} 
	if (img_4S.left == half) {
		img_4.style.left = img_1S.left
	} 
	if (img_5S.left == half) {
		img_5.style.left = img_1S.left
	} 
	if (img_1S.left !== '50%') {
		img_1.style.left = '50%'
	} 	
})

img_2.addEventListener("click", function(e){
	// console.log('2: ' + img_2S.left)
	if (img_1S.left == half) {
		img_1.style.left = img_2S.left
	} 
	if (img_3S.left == half) {
		img_3.style.left = img_2S.left
	} 
	if (img_4S.left == half) {
		img_4.style.left = img_2S.left
	} 
	if (img_5S.left == half) {
		img_5.style.left = img_2S.left
	} 
	if (img_2S.left !== '50%') {
		img_2.style.left = '50%'
	} 	
})

img_3.addEventListener("click", function(e){
	// console.log('3: ' + img_3S.left)
	if (img_1S.left == half) {
		img_1.style.left = img_3S.left
	} 
	if (img_2S.left == half) {
		img_2.style.left = img_3S.left
	} 
	if (img_4S.left == half) {
		img_4.style.left = img_3S.left
	} 
	if (img_5S.left == half) {
		img_5.style.left = img_3S.left
	} 
	if (img_3S.left !== '50%') {
		img_3.style.left = '50%'
	} 	
})

img_4.addEventListener("click", function(e){
	// console.log('4: ' + img_4S.left)
	if (img_1S.left == half) {
		img_1.style.left = img_4S.left
	} 
	if (img_2S.left == half) {
		img_2.style.left = img_4S.left
	} 
	if (img_3S.left == half) {
		img_3.style.left = img_4S.left
	} 
	if (img_5S.left == half) {
		img_5.style.left = img_4S.left
	} 
	if (img_4S.left !== '50%') {
		img_4.style.left = '50%'
	} 	
})

img_5.addEventListener("click", function(e){	
	// console.log('5: ' + img_5S.left)
	if (img_1S.left == half) {
		img_1.style.left = img_5S.left
	} 
	if (img_2S.left == half) {
		img_2.style.left = img_5S.left
	} 
	if (img_3S.left == half) {
		img_3.style.left = img_5S.left
	} 
	if (img_4S.left == half) {
		img_4.style.left = img_5S.left
	} 
	if (img_5S.left !== '50%') {
		img_5.style.left = '50%'
	} 	
})