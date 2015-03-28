const FULL_THRESHOLD = 85;
const COLLAPSING_THRESHOLD = 291;
let titleBarState = 'full';

export default function () {
    const titleBar = document.querySelector('.title-card');

    window.addEventListener('scroll', function () {
        const scrollOffset = window.scrollY;

        if (titleBarState === 'full') {
            if (scrollOffset > FULL_THRESHOLD) {
                titleBarState = 'collapsing';
                titleBar.classList.remove('full');
                titleBar.classList.add('collapsing');
            }
        }

        else if (titleBarState === 'collapsing') {
            if (scrollOffset <= FULL_THRESHOLD) {
                titleBarState = 'full';
                titleBar.classList.remove('collapsing');
                titleBar.classList.add('full');
            }

            if (scrollOffset > COLLAPSING_THRESHOLD) {
                titleBarState = 'collapsed';
                titleBar.classList.remove('collapsing');
                titleBar.classList.add('collapsed');
            }
        }

        else if (titleBarState === 'collapsed') {
            if (scrollOffset <= COLLAPSING_THRESHOLD) {
                titleBarState = 'collapsing';
                titleBar.classList.remove('collapsed');
                titleBar.classList.add('collapsing');
            }
        }
    });
};