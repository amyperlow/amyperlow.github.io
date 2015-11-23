$('a[href*=#]').click((e) => {
  const location = window.location;
  const target = (e.target.nodeName === 'SPAN') ? e.target.parentElement : e.target;

  if (location.pathname.replace(/^\//, '') === target.pathname.replace(/^\//, '') && location.hostname === target.hostname) {
    let $target = $(target.hash);
    $target = $target.length && $target || $('[name=' + target.hash.slice(1) + ']');
    if ($target.length) {
      const targetOffset = Math.ceil($target.offset().top);
      $('html,body').animate({scrollTop: targetOffset}, 1500);
      return false;
    }
  }
});
