const convertToArray = elemList => Array.prototype.slice.apply(elemList);

export default function () {
    const sections = convertToArray(
        document.querySelectorAll('.center-stage .section')
    );

    sections.forEach(section => {
        console.log(section);
    })
};