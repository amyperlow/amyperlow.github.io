$('a[href*=#]').click((e) => {
  let location = window.location;
  let target = (e.target.nodeName === 'SPAN') ? e.target.parentElement : e.target;

  if (location.pathname.replace(/^\//,'') === target.pathname.replace(/^\//,'') && location.hostname === target.hostname) {
    var $target = $(target.hash);
    $target = $target.length && $target || $('[name=' + target.hash.slice(1) +']');
    if ($target.length) {
      var targetOffset = Math.ceil($target.offset().top);
      $('html,body').animate({scrollTop: targetOffset}, 1500);
      return false;
    }
  }
});
