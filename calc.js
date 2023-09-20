// let screen = document.querySelector('#totalNum')
// let btn = document.querySelectorAll('.btn')
// let equal = document.querySelector('.btn-dark')
// let clear = document.getElementById('clear')


// btn.forEach(ele => {
//     ele.addEventListener('click', function(e) {
//         let value = e.target.dataset.num;
//         screen.value += value;
//         console.log(eval(screen.value))
//     })


//     equal.addEventListener('click', function(e) {
//         console.log('iam equal')
//         if (screen.value === "") {
//             screen.value = "Please Enter "
//             console.log(screen.value)
//         } else {
//             let answar = eval(screen.value)
//             console.log(answar)
//             screen.value = answar;
//         }
//     })

//     clear.addEventListener('click', function() {
//         screen.value = ""
//     })
// })



let screen = document.getElementById('screen')
let btn = document.querySelectorAll('.btn')
let equal = document.querySelector('.btn-dark')
let clear = document.querySelector('.btn-red')



// pring onclick button in screen 

btn.forEach(e => {
    e.addEventListener('click', printClick)

    function printClick(ele) {
        let value = ele.target.dataset.num
        screen.value += value
    }
})

equal.addEventListener('click', getTotal)

function getTotal() {
    if (screen.value == "") {
        screen.value = "please Enter Your Num To count"

    } else {
        let calcValue = eval(screen.value)
        screen.value = calcValue
    }
}


clear.addEventListener('click', clearData)

function clearData() {
    screen.value = ""
}