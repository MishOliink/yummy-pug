window.onload = function() {
   if (window.location.hash) {
      window.location.href = window.location.href.split("#")[0];
   }
}

$(function() {
   /* Menu nav toggle */
   $('#nav_toggle').on('click', function(event) {
      event.preventDefault();

      $(this).toggleClass('active');
      $('#nav').toggleClass('active');
   });
});
