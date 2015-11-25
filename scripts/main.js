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
  const t = $(e.target);
  if (t.text() === showText) {
    t.text(hideText);
  } else {
    t.text(showText);
  }
  t.prev().toggle('slow');
});

const topButton = $('.top-button');

topButton.hide();

function showTopButton() {
  if ($(window).scrollTop() > 600) {
    topButton.fadeIn('slow');
  } else {
    topButton.fadeOut('fast');
  }
}

let scrollDebounce;

$(window).scroll(() => {
  clearTimeout(scrollDebounce);
  scrollDebounce = setTimeout(() => {
    showTopButton();
  }, 500);
});
