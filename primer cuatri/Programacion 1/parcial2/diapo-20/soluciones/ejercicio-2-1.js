'use strict';

// Document:
const w = window;
const d = document;

const goToSection = (sectionId) => {
    let scrollPos = w.pageYOffset;
    let sectionPos = d.querySelector(sectionId).offsetTop - d.querySelector('header').offsetHeight;
    if (scrollPos < sectionPos) {
        scrollTo(sectionPos, 'down');
    }
    if (scrollPos > sectionPos) {
        scrollTo(sectionPos, 'up');
    }
};

const scrollTo = (scrollToPos, direction) => {
    let scrollPos = window.pageYOffset;
    if (direction === 'up') {
        if (scrollPos > scrollToPos) {
            let fx = setInterval(() => {
                scrollPos -= 50;
                if (scrollPos <= scrollToPos) {
                    scrollPos = scrollToPos;
                    clearInterval(fx);
                }
                window.scrollTo(0, scrollPos);
            }, 10);
        }
    } else if (direction === 'down') {
        if (scrollPos < scrollToPos) {
            let fx = setInterval(() => {
                scrollPos += 50;
                if (scrollPos >= scrollToPos) {
                    scrollPos = scrollToPos;
                    clearInterval(fx);
                }
                window.scrollTo(0, scrollPos);
            }, 10);
        }
    }
};

const menuLinks = d.querySelectorAll('nav a'),
    sections = d.querySelectorAll('section');

for (let menuLink of menuLinks) {
    menuLink.addEventListener('click', (e) => {
        e.preventDefault();
        let sectionId = e.target.attributes.href.value;
        goToSection(sectionId);
    });
}

w.addEventListener('scroll', () => {
    let scrollPos = Math.ceil(window.pageYOffset);
    menuLinks.forEach((navLink) => {
        navLink.classList.remove('active');
    });
    sections.forEach((section) => {
        let start = Math.ceil(section.offsetTop - d.querySelector('header').offsetHeight);
        let end = Math.ceil(start + section.offsetHeight);
        if (scrollPos >= start && scrollPos < end) {
            d.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            console.log(scrollPos);
            if (section.id === sections[0].id) {
                history.pushState(null, null, `#`);
            } else {
                history.pushState(null, null, `#${section.id}`);
            }
        }
    });
});

w.addEventListener('load', () => {
    d.querySelector('#seccion-1').style.marginTop = d.querySelector('header').offsetHeight + 'px';
});
