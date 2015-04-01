const convertToArray = elemList => Array.prototype.slice.apply(elemList);

class ContentComponent {
    constructor(label, contentMain, contentCollapsed) {
        this.label = label;
        this.contentMain = contentMain;
        this.contentCollapsed = contentCollapsed;
        this.collapsed = false;

        this.addListeners();
        this.setInitialState();
    }

    addListeners() {
        this.label.addEventListener('click', event => this.toggleState());
        this.contentCollapsed.addEventListener('click', event => this.toggleState());
    }

    toggleState() {
        if (this.collapsed) {
            this.contentMain.classList.add('hidden');
            this.contentCollapsed.classList.remove('hidden');
        }
        else {
            this.contentMain.classList.remove('hidden');
            this.contentCollapsed.classList.add('hidden');
        }

        this.collapsed = !this.collapsed;
    }

    setInitialState() {
        this.contentCollapsed.classList.add('hidden');
    }
}

export default function () {
    const sections = convertToArray(
        document.querySelectorAll('.center-stage .section')
    );

    sections.forEach(section => {
        const label = section.querySelector('label');
        const contentMain = section.querySelector('.content');
        const contentCollapsed = section.querySelector('.content-collapsed');

        section.component = new ContentComponent(label, contentMain, contentCollapsed);
    });
};
