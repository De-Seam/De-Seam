document.addEventListener('DOMContentLoaded', function() {
  let items = document.querySelectorAll('.item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      let modalId = item.getAttribute('data-modal-target');
      let modal = document.querySelector(modalId);
      if(modal != null) {
        modal.style.display = 'block';

        let images = Array.from(modal.querySelectorAll('.image-scroll img'));
        let currentIndex = 0;

        function showImage(index) {
          images.forEach((image, i) => {
            if (i === index) {
              image.style.display = 'block';
            } else {
              image.style.display = 'none';
            }
          });
        }

        showImage(currentIndex);

        let prevBtn = modal.querySelector('.prev');
        let nextBtn = modal.querySelector('.next');

        prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % images.length;
          showImage(currentIndex);
        });
      }
    });
  });

  let modals = document.querySelectorAll('.project-modal');

  modals.forEach(modal => {
    let closeBtn = modal.querySelector('.close');

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
    var stopVideo = function (element) {
        var iframe = element.querySelector('iframe');
        var video = element.querySelector('video');
        if (iframe) {
            var iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
        if (video) {
            video.pause();
        }
    };

    var closeButton = document.getElementsByClassName('close');
    for(var i = 0; i < closeButton.length; i++){
        closeButton[i].addEventListener('click', function() {
            stopVideo(document.getElementById(this.parentElement.id));
        });
    }
});
