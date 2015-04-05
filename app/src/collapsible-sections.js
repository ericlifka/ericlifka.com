const convertToArray = elemList => Array.prototype.slice.apply(elemList);

class ContentComponent {
    constructor(section) {
        this.section = section;
        this.label = section.querySelector('label');
        this.contentMain = section.querySelector('.content');
        this.contentCollapsed = section.querySelector('.content-collapsed');
        this.collapsed = false;

        this.addListeners();
    }

    addListeners() {
        this.label.addEventListener('click', event => this.toggleState());
        this.contentCollapsed.addEventListener('click', event => this.toggleState());
    }

    toggleState() {
        if (this.collapsed) {
            this.section.classList.remove('collapsed');
        }
        else {
            this.section.classList.add('collapsed');
        }

        this.collapsed = !this.collapsed;
    }
}

export default function () {
    const sections = convertToArray(
        document.querySelectorAll('.center-stage .section')
    );

    sections.forEach(section => section.component = new ContentComponent(section));
};
