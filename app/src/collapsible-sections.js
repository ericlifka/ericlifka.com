const convertToArray = elemList => Array.prototype.slice.apply(elemList);

export default function () {
    const sections = convertToArray(
        document.querySelectorAll('.center-stage .section')
    );

    sections.forEach(section => {
        const label = section.querySelector('label');
        const content = section.querySelector('.content');

        label.addEventListener('click', event => {});
    });
};
