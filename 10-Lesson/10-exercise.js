const button=document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));

function toggle(parameter){
  const but1=document.querySelector('.game-button');
  const but2=document.querySelector('.music-button');
  const but3=document.querySelector('.tech-button');

  if(parameter==='gaming'){
      if(!but1.classList.contains('is-toggled')){
    but1.classList.add('is-toggled');
    but2.classList.remove('is-toggled');
    but3.classList.remove('is-toggled');

   }
    else{
      but1.classList.remove('is-toggled');
    }
  }

  else if(parameter==='music'){
   if(!but2.classList.contains('is-toggled')){
      but2.classList.add('is-toggled');
      but1.classList.remove('is-toggled');
      but3.classList.remove('is-toggled');
    }
    else{
      but2.classList.remove('is-toggled');
    }
  }
  else if(parameter==='tech'){
  if(!but3.classList.contains('is-toggled')){
      but3.classList.add('is-toggled');
      but2.classList.remove('is-toggled');
      but1.classList.remove('is-toggled');
    }
    else{
      but3.classList.remove('is-toggled');
    }
  }

}
