$(".gallery-list").magnificPopup({
         delegate: "a",
         type: 'image',
         gallery: {
            enabled: true
         }
      });


let menuToggle = document.querySelector('.menuToggle');
      let header = document.querySelector('header');

      menuToggle.onclick = function(){
         header.classList.toggle('open');
         
      }
