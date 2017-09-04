var btn = document.querySelector('.btn-footer');
if(btn){
  var modal = document.querySelector('.write-us');
  var close = document.querySelector('.close');
  var overlay = document.querySelector('.overlay');
  btn.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  })
  close.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  })
  overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  })
  window.addEventListener('keydown', function(event){
    if(event.keyCode === 27 && !modal.classList.contains('hidden')){
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  })
}
