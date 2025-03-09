class Render {
    constructor() {

    }

    async render() {

        const pathname = location.pathname;
        const fileName = pathname.slice(1) || 'home';
        const id = document.querySelector('#id');

        const res = await fetch(`${fileName}.html`);
        id.innerHTML = await res.text();

    }
}

export default Render;
