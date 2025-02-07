class Renderer {
    constructor() {

    }

    async render() {

        const pathname = location.pathname;
        const fileName = pathname.slice(1) || 'home';
        const id = document.querySelector('#id');
        
        console.log('tes t> ', fileName);

        const res = await fetch(`./webpackWithHtmls/${fileName}.html`);
        id.innerHTML = await res.text();

    }
}

export default Renderer;
