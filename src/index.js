const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

let n = 1

// let event = function (ele) {
//     console.log(ele)
//     ele.addEventListener("click", (e) => {
//         element = e.currentTarget
//         console.log(element)
//         setTimeout((element) => {
//             console.log(element);

//             // element.classList.remove("x")
//         }, n * 1000)
//         n = n + 1
//     })
// }

//冒泡阶段，实验证明先走捕获
removeX = function (ele) {
    ele.addEventListener('click', (e) => {
        const t = e.currentTarget
        setTimeout(() => {
            t.classList.remove('x')
        }, n * 1000)
        n += 1
    }, true)
}
addX = function () {
    ele.addEventListener('click', (e) => {
        const t = e.currentTarget
        setTimeout(() => {
            t.classList.add('x')
        }, n * 1000)
        n += 1
    })
}
removeX(level1)
removeX(level2)

removeX(level3)

removeX(level4)

removeX(level5)

removeX(level6)

removeX(level7)

// }
// level1.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// level2.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// level3.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// level4.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// level5.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// level6.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// level7.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.add('x')
//     }, n * 1000)
//     n += 1
// })
// //捕获阶段                                          
// level1.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)
// level2.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)
// level3.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)
// level4.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)
// level5.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)
// level6.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)
// level7.addEventListener('click', (e) => {
//     const t = e.currentTarget
//     setTimeout(() => {
//         t.classList.remove('x')
//     }, n * 1000)
//     n += 1
// }, true)