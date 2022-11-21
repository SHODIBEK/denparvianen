function initTab(value) {
  const active = 'is-active';
  let tabBlock = $(`.js-tab-block[data-id="${value}"]`);

  $(`.js-tab-link[href="${value}"]`).addClass(active).siblings().removeClass(active)

  tabBlock.addClass(active).siblings().removeClass(active);
}

$('.js-tab-link').on('click', function(e) {
  e.preventDefault();
  const target = $(e.currentTarget);
  const targetId = target.attr('href');
  initTab(targetId)
});


$('select').on('change', function() {
  let $value = $(this).val();

  initTab($value)
});