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
























