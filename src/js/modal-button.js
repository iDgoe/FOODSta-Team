window.addEventListener('load', function () {
  function addFormSubmitAttemptedTriggers() {
    var formEls = document.querySelectorAll('form');
    for (var i = 0; i < formEls.length; i++) {
      function addSubmitAttemptedTrigger(formEl) {
        var submitButtonEl = formEl.querySelector('button[type=submit]');
        let btn = document.querySelector('.modal-submit-btn');
        if (submitButtonEl) {
          submitButtonEl.addEventListener('click', function (event) {
            event.preventDefault();
            // formEl.classList.add('modal__form--submit-attempted');
            if (formEl.checkValidity()) {
              btn.classList.add('modal__form--submit-attempted');
            }
            {
              btn.classList.add('modal__form--submit-attempted-invalid');
            }
          });
        }
      }
      addSubmitAttemptedTrigger(formEls[i]);
    }
  }
  addFormSubmitAttemptedTriggers();
});
