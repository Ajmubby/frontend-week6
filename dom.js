// document.querySelector("h2").textContent = 'Dom manipulation'

//queryselector

const title = document.querySelector('h2')

title.textContent = "DOM Manipulation"

const para1 =document.querySelector('p')
const para2 =document.querySelector('p:nth-of-type(2)')
const para3 =document.querySelector('body>:nth-child(5)')
const para4 =document.querySelector('p+p+p+p')
const para5 =document.querySelector('p:last-of-type')


para1.textContent = 'This is the first paragraph'
para2.textContent = 'This is the second paragraph'
para3.textContent = 'This is the third paragraph'
para4.textContent = 'This is the forth paragraph'
para5.textContent = 'This is the last paragraph'

//queryselectorAll

const lists = document.querySelectorAll('ul li')

lists[0].textContent = 'list001'
lists[1].textContent = 'list002'
lists[2].textContent = 'list003'
lists[3].textContent = 'list004'
lists[4].textContent = 'list005'
lists[5].textContent = 'list006'


//getelementsbyid
 const unique = document.getElementById('one')
 unique.style.backgroundColor = '#E55'
 unique.style.textTransform = 'uppercase'

 const header = document.querySelector('h1')
 header.style.textAlign = 'center'

 const classOne = document.getElementsByClassName('one')
 classOne[1].textContent = 'this is a class paragraph'