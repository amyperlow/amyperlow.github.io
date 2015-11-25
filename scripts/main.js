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

const showText = 'Read More >>';
const hideText = 'Hide <<';

$('.project-list').hide();
$('.read-more').click((e) => {
  var t = $(e.target);
  if (t.text() === showText) {
    t.text(hideText);
  } else {
    t.text(showText);
  }
  t.prev().toggle('slow');
});
