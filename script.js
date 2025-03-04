// const coachingContent = document.getElementById('Coaching-Content');
// const adviesContent = document.getElementById('Advies-Content');
// const deskundigContent = document.getElementById('Deskundigheidsbevordering-Content');

// adviesContent.classList.add('hidden');
// deskundigContent.classList.add('hidden');

// const coachingButton = document.getElementById('Coaching-Button');
// const adviesButton = document.getElementById('Advies-Button');
// const deskundigButton = document.getElementById('Deskundigheidsbevordering-Button');

// coachingButton.parentElement.classList.add('active');

// coachingButton.addEventListener('click', () => {
//     coachingContent.classList.remove('hidden');
//     adviesContent.classList.add('hidden');
//     deskundigContent.classList.add('hidden');

//     coachingButton.parentElement.classList.add('active');
//     adviesButton.parentElement.classList.remove('active');
//     deskundigButton.parentElement.classList.remove('active');
// });

// adviesButton.addEventListener('click', () => {
//     coachingContent.classList.add('hidden');
//     adviesContent.classList.remove('hidden');
//     deskundigContent.classList.add('hidden');

//     coachingButton.parentElement.classList.remove('active');
//     adviesButton.parentElement.classList.add('active');
//     deskundigButton.parentElement.classList.remove('active');
// });

// deskundigButton.addEventListener('click', () => {
//     coachingContent.classList.add('hidden');
//     adviesContent.classList.add('hidden');
//     deskundigContent.classList.remove('hidden');

//     coachingButton.parentElement.classList.remove('active');
//     adviesButton.parentElement.classList.remove('active');
//     deskundigButton.parentElement.classList.add('active');
// });

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
    if(coachingNav.classList.contains('active-nav')) {
        contentDrawer.classList.add('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active-nav');
        adviesNav.classList.remove('active-nav');
        deskundigNav.classList.remove('active-nav');
    }
    else {
        contentDrawer.classList.remove('hidden');
        coachingDrawer.classList.remove('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.add('active-nav');
        adviesNav.classList.remove('active-nav');
        deskundigNav.classList.remove('active-nav');
    }
});

adviesNav.addEventListener('click', () => {
    if(adviesNav.classList.contains('active-nav')) {
        contentDrawer.classList.add('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active-nav');
        adviesNav.classList.remove('active-nav');
        deskundigNav.classList.remove('active-nav');
    }
    else {
        contentDrawer.classList.remove('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.remove('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active-nav');
        adviesNav.classList.add('active-nav');
        deskundigNav.classList.remove('active-nav');
    }
});

deskundigNav.addEventListener('click', () => {
    if(deskundigNav.classList.contains('active-nav')) {
        contentDrawer.classList.add('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.add('hidden');
        coachingNav.classList.remove('active-nav');
        adviesNav.classList.remove('active-nav');
        deskundigNav.classList.remove('active-nav');
    }
    else {
        contentDrawer.classList.remove('hidden');
        coachingDrawer.classList.add('hidden');
        adviesDrawer.classList.add('hidden');
        deskundigDrawer.classList.remove('hidden');
        coachingNav.classList.remove('active-nav');
        adviesNav.classList.remove('active-nav');
        deskundigNav.classList.add('active-nav');
    }
});

const carouselLeft = document.getElementById("carouselLeft");
const carouselRight = document.getElementById("carouselRight");
const carouselContent = document.getElementById("carouselContent");

let carouselIndex = 0;
const carouselElements = [3];

const coachingRoot = document.createElement("div");
const adviesRoot = document.createElement("div");
const deskundigheidRoot = document.createElement("div");

const content0 = document.createElement("p").innerHTML("Hello world 1!");
const content1 = document.createElement("p").innerHTML("Hello world 2!");
const content2 = document.createElement("p").innerHTML("Hello world 3!");

coachingRoot.appendChild(content0);
adviesRoot.appendChild(content0);
deskundigheidRoot.appendChild(content1);

// Initialize carousel content
// Initialize  the carousel content
// Add carousel navigation