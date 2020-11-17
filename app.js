const $form = document.querySelector('#survey-form');

$form.addEventListener('submit', e => {
    e.preventDefault();
    $form.reset()
})