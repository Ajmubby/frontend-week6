const rhyme = document.querySelector('h1')
const nursery = rhyme.textContent

const lists = document.querySelectorAll('li')

//length of a string
lists[0].textContent += nursery.length

//touppercase method
lists[1].innerHTML += `<strong>${nursery.toUpperCase()}</strong>`

//tolowercase
lists[2].innerHTML += `<strong>${nursery.toLowerCase()}</strong>`

//firstcharacter
lists[3].innerHTML = `First character: ${nursery[0]}`

//lastcharacter
lists[4].innerHTML = `last character: ${nursery[nursery.length -1]}`

//indexof
lists[5].innerHTML = `The index of the letter "t" is ${nursery.indexOf('t')}`

//indexof
lists[6].innerHTML = `The index of the second letter "t" is ${nursery.indexOf('t', 10)}`

//indexof
lists[7].innerHTML = `The index of the letter "z" is ${nursery.indexOf('z')}`

//lastindexof
lists[8].textContent = 'The last index of letter \'a\ ' + nursery.lastIndexOf('a')

//replace
 lists[9].innerText = 'Replace "you" with "we": ' + nursery.replace('you', 'we')

//replace
 lists[10].innerText = 'Replace "o" with "u": ' + nursery.replaceAll('o', 'u')

//slice
 const twinkle = nursery.slice(0,7)
 lists[11].textContent = twinkle

//repeat
 lists[12].textContent = twinkle.repeat(3)

 //characterat
 lists[13].textContent = 'character at index 20: ' + nursery.charAt(20).toUpperCase()

 //startswith-Boolean
 lists[14].textContent = 'Does it start with K: ' + nursery.startsWith('k')

 //endswith-Boolean
lists[15].textContent = 'Does it end with high: ' + nursery.endsWith('high')

//includes-Boolean
lists[16].textContent = 'Includes Car: ' + nursery.includes('Car')

//split
lists[17].textContent = nursery.split(' ')

//concat
lists[18].textContent = 'The nursery rhyme starts with: '.concat(twinkle, ' Mubby')


