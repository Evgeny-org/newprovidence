const leftB = document.querySelector('main .choose_your .left .buttons .leftB')
const rightB = document.querySelector('main .choose_your .left .buttons .rightB')

const choose = document.querySelector('main .choose_your .left .buttons .choose')

const individual = document.querySelector('main .choose_your .right .individual')
const company = document.querySelector('main .choose_your .right .company')

rightB.addEventListener("click", function(){
	choose.style.left = '152px'

	individual.style.animationName = 'off'
	setTimeout("company.style.display = 'flex', company.style.animationName = 'on', individual.style.display = 'none'", 500);
})

leftB.addEventListener("click", function(){
	choose.style.left = '1%'
	company.style.animationName = 'off'
	setTimeout("individual.style.display = 'flex', individual.style.animationName = 'on', company.style.display = 'none'", 500);
	
})
