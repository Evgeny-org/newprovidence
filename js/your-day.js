const nthChild1 = document.querySelector('main .your-day .right .buttons a:nth-child(1)')
const nthChild2 = document.querySelector('main .your-day .right .buttons a:nth-child(2)')
const img1 = document.querySelector('main .your-day .right .buttons a:nth-child(1) img')
const img2 = document.querySelector('main .your-day .right .buttons a:nth-child(2) img')


nthChild2.addEventListener('mouseover', function(){
	nthChild2.style.backgroundColor = '#4d7cf0'
	nthChild2.style.color = '#fff'
	img2.style.marginLeft = 50 + 'px'

	nthChild1.style.backgroundColor = 'rgba(0,0,0,0)'
	nthChild1.style.color = '#000'
	img1.style.marginLeft = '0px'
})
nthChild2.addEventListener('mouseout', function(){
	nthChild2.style.backgroundColor = 'rgba(0,0,0,0)'
	nthChild2.style.color = '#000'
	img2.style.marginLeft = '0'
})

nthChild1.addEventListener('mouseover', function(){
	nthChild1.style.backgroundColor = '#4d7cf0'
	nthChild1.style.color = '#fff'
	img1.style.marginLeft = 50 + 'px'
})
nthChild1.addEventListener('mouseout', function(){
	nthChild1.style.backgroundColor = 'rgba(0,0,0,0)'
	nthChild1.style.color = '#000'
	img1.style.marginLeft = '0'
})

