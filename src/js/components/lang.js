import clickOutsite from "./clickout";
const languages = $('.js-lang');

languages.on('click', (e) => {
  let $this = $(e.currentTarget);

  $this.toggleClass('is-active');
});

clickOutsite(languages)