


// Toggle Menu Functionaliy Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".toggle").addEventListener("click", function () {
    document.body.classList.add("menuToggle");
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.body.classList.remove("menuToggle");
  });
});
// Toggle Menu Functionaliy End




document.querySelectorAll('.contless-button').forEach(function(button) {
  button.addEventListener('click', function() {
    var moreText = this.closest('.hotel-text').querySelector('.more-text');

    if (moreText.style.maxHeight) {
      // If the element is expanded, collapse it
      moreText.style.maxHeight = null;
      this.textContent = 'Read More';
    } else {
      // If the element is collapsed, expand it
      moreText.style.maxHeight = moreText.scrollHeight + 'px';
      this.textContent = 'Read Less';
    }
  });
});