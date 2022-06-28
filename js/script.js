const range = document.querySelector('#change_color');

document.querySelector(".color").style.opacity = `0`

range.addEventListener('input', ()=>{
  document.querySelector(".color").style.opacity = `${range.value/100}`
  })