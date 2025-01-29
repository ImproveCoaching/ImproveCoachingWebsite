const coachingContent = document.getElementById('Coaching-Content');
const adviesContent = document.getElementById('Advies-Content');
const deskundigContent = document.getElementById('Deskundigheidsbevordering-Content');

adviesContent.classList.add('hidden');
deskundigContent.classList.add('hidden');

const coachingButton = document.getElementById('Coaching-Button');
const adviesButton = document.getElementById('Advies-Button');
const deskundigButton = document.getElementById('Deskundigheidsbevordering-Button');

coachingButton.parentElement.classList.add('active');

coachingButton.addEventListener('click', () => {
    coachingContent.classList.remove('hidden');
    adviesContent.classList.add('hidden');
    deskundigContent.classList.add('hidden');

    coachingButton.parentElement.classList.add('active');
    adviesButton.parentElement.classList.remove('active');
    deskundigButton.parentElement.classList.remove('active');
});

adviesButton.addEventListener('click', () => {
    coachingContent.classList.add('hidden');
    adviesContent.classList.remove('hidden');
    deskundigContent.classList.add('hidden');

    coachingButton.parentElement.classList.remove('active');
    adviesButton.parentElement.classList.add('active');
    deskundigButton.parentElement.classList.remove('active');
});

deskundigButton.addEventListener('click', () => {
    coachingContent.classList.add('hidden');
    adviesContent.classList.add('hidden');
    deskundigContent.classList.remove('hidden');

    coachingButton.parentElement.classList.remove('active');
    adviesButton.parentElement.classList.remove('active');
    deskundigButton.parentElement.classList.add('active');
});