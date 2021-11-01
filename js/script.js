'use strict'


const openBtn = document.querySelector('.plus')
const closeBtn = document.querySelector('.close')
const hidden = document.querySelector('.hidden')
const hide = document.querySelector('.done')


openBtn.addEventListener('click', function () {
  hidden.classList.remove('hidden')
  
})

closeBtn.addEventListener('click', function () {
  hidden.classList.add('hidden')
})


hide.addEventListener('click', function () {
  hidden.classList.remove('kit')
})
