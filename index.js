// let n = prompt('Enter a Number')
// n = Number.parseInt(n)
// let i = 0
// while (i < n)
// {
//     console.log(i)
//     i++
// }
//------------------------------------------------------------------------------
/*
function sum(x, y)
{
    console.log('Heyo')
    return x + y
}
const a = 10
const b = 20
let su = sum(a, b)
console.log(su)
*/

//------------------------------------------------------------------------------
// const hello = () =>
// {
//     console.log('What Up My Nizzles')
// }
// hello()
//------------------------------------------------------------------------------
// let stus = { 'Ravi': 90, 'Richa': 80, 'Rohan': 70 }
//Classic For Loop
// for (let i = 0; i < Object.keys(stus).length; i++)
// {
//     console.log('Marks of ' + Object.keys(stus)[i] + ' is ' + stus[Object.keys(stus)[i]])
// }

//For In Loop
// for (let i in stus)
// {
//     console.log('Marks of ' + i + ' is = ' + stus[i])
// }
//------------------------------------------------------------------------------
// let num = 10
// let Gnum = prompt("Enter the Number to Try to find the Correct Number")
// if (Gnum == num)
// {
//     alert('Correct Number')
// } else
// {
//     alert('Try Again')
// }
//------------------------------------------------------------------------------
// let mean = (a, b, c, d, e) =>
// {
//     return (a + b + c + d + e) / 5
// }

// let mea = mean(10, 20, 30, 40, 50)
// console.log(mea)
//------------------------------------------------------------------------------
// var n = 'Archna'
// let m = 'Vinod'
// console.log(n.length)
// console.log(np[2])
// console.log(`${n} is Wife of ${m}`)
// code to print each letter in the string inside of the variable n
// for (let i = 0; i < n.length; i++)
// {
//     console.log(n[i])
// }
//------------------------------------------------------------------------------
// let sen = 'We have gotten a job in the field of it sector in Bilaspur Hare Krishna'
// let word = 'Hare Krishna'
// console.log(`${word} ${sen.includes(word) ? 'is' : 'is Not'} in the sentence`)
//------------------------------------------------------------------------------

// let sen = 'HARE KRISHNA HARE KRISHNA KRISHNA KRISHNA HARE HARE HARE RAM HARE RAM RAM RAM HARE HARE'
// console.log(sen.toLocaleLowerCase())

//------------------------------------------------------------------------------

// let arr = [1, 3, 'Ravi', 'Got a', '7.5 Inches Long and 5.5 Inches thick Cock', 5]
// for (let i in arr)
// {
//     console.log(arr[i])
// }

//------------------------------------------------------------------------------

// //Arrays Methods
// let b = arr.toString()
// console.log(typeof b)
// let c = arr.join('-')
// console.log(c)
// console.log(typeof arr)
// let s = arr.pop()
// console.log(arr, s)

//------------------------------------------------------------------------------

// let ar = [1, 2]
// let arr = [3, 4]
// let arra = [5, 6]
// let con = ar.concat(arr, arra)
// console.log(con)

//------------------------------------------------------------------------------
//Normal For Loop to Traverce the array
// let arr = [1, 20, 50, 8, 69]
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }

//forEach Loop to traverce the array
// arr.forEach((ele) =>
// {
//     console.log(ele)
// });

//------------------------------------------------------------------------------
//Create array from another object. here String
// let n = 'ravi'
// let arr = Array.from(n)
// console.log(arr[2])

//------------------------------------------------------------------------------
//for...of
// for (let i of arr)
// {
//     console.log(i)
// }

//------------------------------------------------------------------------------
//for...In
// for (let i in arr)
// {
//     console.log(i)
// }

//------------------------------------------------------------------------------

// let arr = [2, 4, 6, 10]

// let a = arr.map((b, index, array) =>
// {
//     console.log(b, index, array)
//     return b + index
// })
// console.log(a)

// let a = arr.filter((v) =>
// {
//     return v < 5
// })
// console.log(a)

// const sum = (a, b) =>
// {
//     return a + b
// }

// let b = arr.reduce(sum)
// console.log(b)

//------------------------------------------------------------------------------

// let arr = [1,2,3,4]
// let a = prompt('Enter a number')
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4]
// do
// {
//     let a = prompt('Enter a number')
//     a = Number.parseInt(a)
//     arr.push(a)
//     console.log(arr)
// } while (a != 0)
// console.log(arr)

//------------------------------------------------------------------------------

// let arr = [10, 26, 30, 45]
// let a = arr.filter((b) =>
// {
//     return b % 10 == 0
// })
// console.log(a)

//------------------------------------------------------------------------------

// let arr = [5, 2, 3, 4]
// let a = arr.map((b) =>
// {
//     return b * b
// })
// console.log(a)

//------------------------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6]
// let a = arr.reduce((x, y) =>
// {
//     return x * y
// })
// console.log(a)

//------------------------------------------------------------------------------

// alert('hello')

// console.log('log')
// console.info('Info')
// console.warn('warning')
// console.error('err')
// console.assert('err' != false)
// console.assert('err' == false)

//------------------------------------------------------------------------------

// console.time('forLoop')
// for (let i = 0; i < 500; i++)
// {
//     console.log(233)
// }
// console.timeEnd('forLoop')

// console.time('whileLoop')
// let i = 0
// while (i < 500)
// {
//     console.log(233)
//     i++
// }
// console.timeEnd('whileLoop')

//------------------------------------------------------------------------------

// alert('Enter the Value of a')
// let a = prompt('Enter a Here', 10)
// a = Number.parseInt(a)
// let write = confirm('Do you want to write the value of a to the document?')
// if (write)
// {
//     document.write(a)
// }
// else
// {
//     document.write('Allow me to write it on the document!')
// }

//------------------------------------------------------------------------------

// document.body.style.background = 'pink'

//------------------------------------------------------------------------------

//This Works but...
// let age = prompt('enter your age boo')
// age = Number.parseInt(age)
// if(age<18){
// alert('you can not drive baby')
// }
// else{
// alert('Drive Safely!')
// }

//Let us write the same thing using an function

// let age = prompt('enter your age')
// age = Number.parseInt(age)
// const driveAge = (age) =>
// {
//     return age >= 18 ? true : false

// }
// if (driveAge(age))
// {
//     alert('You can Drive')
// } else
// {
//     alert('You Can Not Drive')
// }

//------------------------------------------------------------------------------

//Can Drive Test using loop
// let runagain = true
// const driveAge = (age) =>
// {
//     return age >= 18 ? true : false

// }
// while (runagain)
// {
//     let age = prompt('enter your age')
//     age = Number.parseInt(age)
//     if (driveAge(age))
//     {
//         alert('You can Drive')
//     } else
//     {
//         alert('You Can Not Drive')
//     }
//     runagain = confirm('Do you want to take the test again?')
// }

//------------------------------------------------------------------------------

// let runagain = true
// const driveAge = (age) =>
// {
//     return age >= 18 ? true : false

// }
// while (runagain)
// {
//     let age = prompt('enter your age')
//     age = Number.parseInt(age)
//     if (age < 0)
//     {
//         alert('Enter a valid age')
//         break
//     } else
//     {
//         if (driveAge(age))
//         {
//             alert('You can Drive')
//         } else
//         {
//             alert('You Can Not Drive')
//         }
//     }
//     runagain = confirm('Do you want to take the test again?')
// }

//------------------------------------------------------------------------------

// let num = prompt('enter a number')
// num = Number.parseInt(num)
// if (num > 4)
// {
//     location.href = 'https://google.com'
// } else
// {
//     alert(`the number you entered is = ${num}`)
// }

//------------------------------------------------------------------------------

// let color = prompt('Enter the color you want to set this page to')
// document.body.style.background = color

//------------------------------------------------------------------------------

// document.getElementsByClassName('lun')[0].style.color = 'red'

//------------------------------------------------------------------------------

// console.log(document.body.firstChild)

// console.log(document.body.hasChildNodes())
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

//------------------------------------------------------------------------------

// console.log(document.body.firstChild)
// a = document.body.firstChild

// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)

//------------------------------------------------------------------------------

// let b = document.body
// console.log('First child of B is: ', b.firstChild)
// console.log('First Element child of B is: ', b.firstElementChild)

//------------------------------------------------------------------------------

// const changeBodyRed = ()=> {
//     document.body.firstElementChild.style.background = 'red'
// }

//------------------------------------------------------------------------------

// console.log(typeof document)
// console.log(typeof window)

//------------------------------------------------------------------------------

// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.caption)
// console.log(t.tHead)
// console.log(t.tFoot)

//------------------------------------------------------------------------------

// let ct = document.getElementsByClassName('card-title')[0]
// ct.style.color = 'red'

//------------------------------------------------------------------------------

// let ct = document.getElementById('fone')
// ct.style.color = 'blue'

//------------------------------------------------------------------------------

// let ct = document.querySelectorAll('.card-title')
// ct[0].style.color = 'red'
// ct[1].style.color = 'blue'
// ct[2].style.color = 'green'

// document.querySelector('.this').style.color = 'yellow'
// document.querySelector('.this').style.background = 'darkblue'

// console.log(document.getElementsByTagName('a'))
// console.log(document.querySelector('.card').getElementsByTagName('a'))

// console.log(document.getElementsByName('search'))

//------------------------------------------------------------------------------

// let id1 = document.getElementById('id1')
// let sp1 = document.getElementById('sp1')
// console.log(id1)
// console.log(id1.matches('.class'))
// console.log(id1.matches('.box'))
// console.log(sp1.closest('#sp1'))
// console.log(id1.contains(sp1))
// console.log(sp1.contains(sp1))
// console.log(sp1.contains(id1))

//------------------------------------------------------------------------------

// let nav = document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red'
// let navv = document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green'
// let nav = document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green'

//------------------------------------------------------------------------------

//S W G Game JS CODE

// let user = prompt('enter S for snake W water or G for gun')
// let cpuI = Math.floor(Math.random() * 3)
// let cpu = ["S", "W", "G"][cpuI]

// let match = (cpu, user) => {
//     if(cpu === user){
//         return 'No Body'
//     }
//     else if (cpu === "S" && user === "W") {
//         return "cpu"
//     }    
//     else if (cpu === "S" && user === "G") {
//         return "user"
//     }
//     else if (cpu === "G" && user === "W") {
//         return "user"
//     }
//     else if (cpu === "G" && user === "S") {
//         return "cpu"
//     }
//     else if (cpu === "W" && user === "G") {
//         return "cpu"
//     }
//     else if (cpu === "W" && user === "S") {
//         return "user"
//     }
// }
// let result = match(cpu, user)

// document.write(`CPU :- ${cpu} <br> USER :- ${user} <br> <br> The Winner is : ${result.toUpperCase()}`)

//------------------------------------------------------------------------------

// console.log(document.getElementsByTagName('span')[0]) // This will print the Element
// console.dir(document.getElementsByTagName('span')[0]) // This will print it as an Object

// console.log(document.body.firstChild.nodeName)
// console.log(document.body.firstElementChild.nodeName)

// console.log(first.innerHTML) // These can be done only with the Elements of the HTML like <p> <h1> etc...
// console.log(first.innerHTML = 'Radhe Radhe') // These can be done only with the Elements of the HTML like <p> <h1> etc...

// console.log(first.outerHTML)
// console.log(first.outerHTML = '<div>Radhe Krishna</div>')

// console.log(document.body.firstChild) // These can be done with text comment values
// console.log(document.body.firstChild.data) // These can be done with text comment values
// console.log(document.body.firstChild.nodeValue) // These can be done with text comment values

// console.log(document.body.textContent) // It is used to access only the Text's of an HTML page no tags will be included.

// first.hidden = false // Used to unhide the hidden parts of the page

//------------------------------------------------------------------------------

// document.getElementById('HK').style.color = 'Blue'
// document.getElementById('HK').style.background = 'cyan'

//------------------------------------------------------------------------------
// let a = document.getElementById('first')
// a.getAttribute('class')
// console.log(a)
// console.log(a.hasAttribute('class'))
// console.log(a.hasAttribute('style'))
// // a.setAttribute('hidden', 'true')
// // a.removeAttribute('class')
// console.log(a.attributes)

//------------------------------------------------------------------------------
//Custom Attributes Creation

// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

//------------------------------------------------------------------------------

// let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Yo This H1 Tag was inserted By JS!</h1>'

// let div = document.createElement('div')
// a.className = 'aloha'
// div.innerHTML = '<h1>Radhe Radhe</h1>'
// document.body.append(div) 
// document.body.prepend(div) 
// a.before(div) 
// a.after(div) 
// a.replaceWith(div) 

//------------------------------------------------------------------------------

// first.insertAdjacentHTML("beforebegin", "<div class='test'>beforebegin</div>")
// first.insertAdjacentHTML("beforeend", "<div class='test'>beforeend</div>")
// first.insertAdjacentHTML("afterbegin", "<div class='test'>afterbegin</div>")
// first.insertAdjacentHTML("afterend", "<div class='test'>afterend</div>")

//------------------------------------------------------------------------------

// first.insertAdjacentHTML('beforebegin','<p>Hello</p>')
// first.insertAdjacentHTML('afterend','<p>Bye</p>')

//------------------------------------------------------------------------------

// let firstt = document.getElementById('firstt')
// firstt.remove()

//------------------------------------------------------------------------------

// first.className = 'text-dark red'
// first.classList
// first.classList.remove('text-dark')
// first.classList.add('text-dark')
// first.classList.toggle('text-dark')
// first.classList.contains('text-dark')
// first.classList.contains('red')

//------------------------------------------------------------------------------

// let a = setTimeout(function(){
//     alert("Inside of Time Out")
// }, 5000)

// clearTimeout(a)
// console.log(a)    

//------------------------------------------------------------------------------

// let b = prompt('Do you want to run the settimeout?')
// if(b == 'n'){
//     clearTimeout(a)
// }
// console.log(a)

//------------------------------------------------------------------------------

// const sum =(a,b) => {
//     console.log('Im Running ' + (a+b))
// }
// setTimeout(sum, 2000, 2,6)

//------------------------------------------------------------------------------

// let a = setInterval(function() {
//     alert('Inside of the Interval')
// }, 3000)

//------------------------------------------------------------------------------

// function sum (a,b) {
//     document.write('Yo <br>')
// } 
// setInterval(sum,1000)

//------------------------------------------------------------------------------

// btn.addEventListener('click', () => {
//     alert('Hey')
// })

// btn.addEventListener('click', () => {
//     alert('Hey YO')
// })

//That Can be done using this type of function creation too
// btn.addEventListener('click', function() {
//     alert('Hey YO')
// })

//Also it is not necessary to make the fuction so raw we can assign the function to any variable as follows :-

// let x = ('click', (e) =>{
//     alert('Hey')
//     console.log(e.target, e.clientX, e.clientY)
//     // console.log(e)
// })

// let y = ('click', () =>{
//     alert('Hey Yo')
// })

// btn.addEventListener('click', x)
// btn.addEventListener('click', y)

// let a = prompt('Enter 2 to stop that alert or enter any number to see both of them on button click')
// if(a == 2){
//     btn.removeEventListener('click', y)
// }

































































































































