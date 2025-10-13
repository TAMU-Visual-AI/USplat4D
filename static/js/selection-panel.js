const enlargedImage = document.querySelector('#enlarged-image');

document.querySelectorAll('.selectable-image').forEach(img => {
  img.addEventListener('mouseenter', function() {
    const imgRect = img.getBoundingClientRect();
    enlargedImage.src = img.src;
    enlargedImage.style.opacity = 1;
    enlargedImage.style.left = Math.max(20, Math.min(window.innerWidth - enlargedImage.offsetWidth - 20, imgRect.left + imgRect.width / 2 - enlargedImage.offsetWidth / 2)) + 'px';
    enlargedImage.style.top = imgRect.top - 10 - enlargedImage.offsetHeight + 'px';
  });
  img.addEventListener('mouseleave', function() {
    enlargedImage.style.opacity = 0;
  });
  img.addEventListener('touchend', function() {
    enlargedImage.style.opacity = 0;
  });
}); 