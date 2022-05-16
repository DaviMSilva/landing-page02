let set = document.getElementById('boxSlider')
let box = document.getElementById('homeSlider')
set.addEventListener('mouseover', mouseOverHome)
box.addEventListener('mouseout', mouseOutHome)

function mouseOverHome() {
  homeSlider.classList.add('active')
  homeAll.classList.add('active')
}
function mouseOutHome() {
  homeSlider.classList.remove('active')
  homeAll.classList.remove('active')
}
