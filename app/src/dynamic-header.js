export default function () {
    const titleBar = document.querySelector('.title-card');
    let titleBarState = 'full';

    window.addEventListener('scroll', function () {
        const scrollOffset = window.scrollY;

        if (titleBarState === 'full') {
            if (scrollOffset > 40) {
                titleBarState = 'collapsing';
                titleBar.classList.remove('full');
                titleBar.classList.add('collapsing');
            }
        }

        else if (titleBarState === 'collapsing') {
            if (scrollOffset <= 40) {
                titleBarState = 'full';
                titleBar.classList.remove('collapsing');
                titleBar.classList.add('full');
            }

            if (scrollOffset > 230) {
                titleBarState = 'collapsed';
                titleBar.classList.remove('collapsing');
                titleBar.classList.add('collapsed');
            }
        }

        else if (titleBarState === 'collapsed') {
            if (scrollOffset <= 230) {
                titleBarState = 'collapsing';
                titleBar.classList.remove('collapsed');
                titleBar.classList.add('collapsing');
            }
        }
    });
};