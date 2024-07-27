const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  button.addEventListener('click', (e)=>{
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor=e.target.id;
      case 'white':
        body.style.backgroundColor=e.target.id;
      case 'blue':
        body.style.backgroundColor=e.target.id;
      case 'yellow':
        body.style.backgroundColor=e.target.id;
      case 'green':
        body.style.backgroundColor=e.target.id;
      case 'orange':
        body.style.backgroundColor=e.target.id;
      case 'black':
        body.style.backgroundColor=e.target.id;
        break;
    
      default:
        break;
    }
  })
})