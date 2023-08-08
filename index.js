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

let arr = [1, 3, 'Ravi', 'Got a', '7.5 Inches Long and 5.5 Inches thick Cock', 5]
for (let i in arr)
{
    console.log(arr[i])
}

//Arrays Methods
let b = arr.toString()
console.log(typeof b)
let c = arr.join('-')
console.log(c)
console.log(typeof arr)
let s = arr.pop()
console.log(arr, s)

