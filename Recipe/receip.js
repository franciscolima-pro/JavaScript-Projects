document.getElementById('toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('dark-mode'))
  {
    icon.classList.add('fa-sun');
    icon.classList.remove('fa-moon')
  }else{
    icon.classList.add('fa-moon')
    icon.classList.remove('fa-sun');
  }
});
const walter = 37


console.log(walter)
