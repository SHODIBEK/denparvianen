import helpers from '../helpers';

const projects = $('.js-project');

/**
* Модуль "Создание модального окна при клике по проекту"
* @param {string} image Путь до изображения
* @param {string} title Зоголовок проекта
* @param {string} subtitle Описание проекта
* @param {string} link Ссылка на проект
*/
function writeModal(image, title, subtitle, link) {
  $('body').append(`
    <div class="modal" id="project-modal">
      <div class="modal__wrapper">
        <button type="button" class="modal__close btn js-close-modal"><span class="sr-only">close</span></button>
        <div class="modal__block">
          <div class="modal__header">
            ${image && image != undefined ? `<img class="modal__image" src="${image}" alt="${title}"/>` : ''}
          </div>
          <div class="modal__body">
            ${link && link != undefined ? `<a class="modal__link" href="${link}" target="__blank" rel="nofollow">${link}</a>` : ''}
            ${title && title != undefined ? `<h2 class="modal__title">${title ? title : ''}</h2>` : ''}
            ${subtitle && subtitle != undefined ? `<p class="modal__subtitle">${subtitle}</p>` : ''}
          </div>
        </div>
      </div>
    </div>
  `);

  $('.js-close-modal').on('click', closeModal);
}

function getAllData(e) {
  const target = $(e.currentTarget);
  const targetImage = target.data('image');
  const targetTitle = target.data('title');
  const targetSubtitle = target.data('subtitle');
  const targetUrl = target.data('link');

  writeModal(targetImage, targetTitle, targetSubtitle, targetUrl);
}

function openModal(e) {
  helpers.$body.addClass('modal-is-open');
  helpers.lockScroll(true, helpers.$body.find('.modal'));
  getAllData(e)
}

function closeModal(e) {
  $('.modal').fadeOut();
  helpers.$body.removeClass('modal-is-open');
  helpers.lockScroll(false, helpers.$body.find('.modal'));

  setTimeout(() => {
    $('#project-modal').remove();
  }, 1000);
}

projects.on('click', openModal);

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) {
    closeModal()
  }
});
