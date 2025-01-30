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

const coachingNav = document.getElementById('Coaching-Nav');
const adviesNav = document.getElementById('Advies-Nav');
const deskundigNav = document.getElementById('Deskundigheidsbevordering-Nav');

const contentDrawer = document.getElementById('Content-Drawer');
const coachingDrawer = document.getElementById('Coaching-Drawer');
const adviesDrawer = document.getElementById('Advies-Drawer');
const deskundigDrawer = document.getElementById('Deskundigheidsbevordering-Drawer');

contentDrawer.classList.add('hidden');
coachingDrawer.classList.add('hidden');
adviesDrawer.classList.add('hidden');
deskundigDrawer.classList.add('hidden');

coachingNav.addEventListener('click', () => {
    if(coachingNav.classList.contains('active')) {
        contentDrawer.classList.add('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active');
        adviesNav.classList.remove('active');
        deskundigNav.classList.remove('active');
    }
    else {
        contentDrawer.classList.remove('hidden');
        coachingDrawer.classList.remove('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.add('active');
        adviesNav.classList.remove('active');
        deskundigNav.classList.remove('active');
    }
});

adviesNav.addEventListener('click', () => {
    if(adviesNav.classList.contains('active')) {
        contentDrawer.classList.add('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active');
        adviesNav.classList.remove('active');
        deskundigNav.classList.remove('active');
    }
    else {
        contentDrawer.classList.remove('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.remove('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active');
        adviesNav.classList.add('active');
        deskundigNav.classList.remove('active');
    }
});

deskundigNav.addEventListener('click', () => {
    if(deskundigNav.classList.contains('active')) {
        contentDrawer.classList.add('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active');
        adviesNav.classList.remove('active');
        deskundigNav.classList.remove('active');
    }
    else {
        contentDrawer.classList.remove('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.remove('hidden');
        coachingNav.classList.remove('active');
        adviesNav.classList.remove('active');
        deskundigNav.classList.add('active');
    }
});
