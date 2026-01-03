var container = document.querySelector('#container');
var icon = document.querySelector('#icon');
var btnAction = document.querySelector('#btn-action');

btnAction.addEventListener('click', () => {
  if (container.classList.contains('container-dark')) {
    container.classList.remove('container-dark');
    container.classList.add('container-light');
    btnAction.innerHTML = 'OFF';
    icon.classList.remove('ri-lightbulb-line');
    icon.classList.add('ri-lightbulb-flash-fill'); 
  } else {
    container.classList.remove('container-light');
    container.classList.add('container-dark');
    btnAction.innerHTML = 'ON';
    icon.classList.remove('ri-lightbulb-flash-fill');
    icon.classList.add('ri-lightbulb-line');
  }
});