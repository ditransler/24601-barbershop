;(function (w, d, Site) {

  var link = d.querySelector('.login'),
      popup = d.querySelector('.modal-content'),
      overlay = d.querySelector('.modal-overlay'),
      close = popup.querySelector('.modal-content-close'),
      form = popup.querySelector('form'),
      login = popup.querySelector('[name=login]'),
      password = popup.querySelector('[name=password]'),
      storage = localStorage.getItem('login'),
      mapOpen = d.querySelector('.js-open-map'),
      mapPopup = d.querySelector('.modal-content-map'),
      mapClose = mapPopup.querySelector('.modal-content-close');


  link.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('modal-overlay-show');
    popup.classList.add('modal-content-show');

    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('modal-overlay-show');
    popup.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
  });

  form.addEventListener('submit', function(evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
    } else {
      localStorage.setItem('login', login.value);
    }
  });

  w.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains('modal-content-show')) {
        overlay.classList.remove('modal-overlay-show');
        popup.classList.remove('modal-content-show');
        popup.classList.remove('modal-error');
      }
    }
  });

  mapOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.add('modal-overlay-show');
    mapPopup.classList.add('modal-content-show');
  });

  mapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('modal-overlay-show');
    mapPopup.classList.remove('modal-content-show');
  });

  w.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-content-show')) {
        overlay.classList.remove('modal-overlay-show');
        mapPopup.classList.remove('modal-content-show');
      }
    }
  });

  overlay.addEventListener('click', function(evt) {
    this.classList.remove('modal-overlay-show');
    d.querySelector('.modal-content-show').classList.remove('modal-content-show');
  });

})(window, document, window.BarbershopSite || {});




