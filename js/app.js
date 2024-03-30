if(document.querySelector('.accordion')){
    let accordionBtn =  document.querySelectorAll('.accordion .accordion-item .accordion-button');
    let accordionItem = document.querySelectorAll('.accordion .accordion-item');
    
    
    accordionBtn.forEach(el=>{
       el.addEventListener('click', function(){
        if(el.classList.contains('collapsed')){
          el.parentNode.parentNode.classList.remove('open')
          
        }
        else{
          accordionItem.forEach(el=>{
            el.classList.remove('open')
          })  
          el.parentNode.parentNode.classList.add('open')
        }
       })
    })
    
  }