document.getElementById("toggle").addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('light-mode'))
    {
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun')
    }else{
      icon.classList.add('fa-sun')
      icon.classList.remove('fa-moon');
    }
  })