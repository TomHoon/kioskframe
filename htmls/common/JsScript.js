class JsScript {
    constructor() {
        console.log('jsscript...');
    }

    기존스크립트제거() {
        const src = document.querySelector('#sriptSRC');
        if (src) src.remove();
    }

    스크립트생성() {
        let script = document.createElement('script');

        let fileName = location.pathname || 'home';

        script.src = `${fileName}.js`;
        script.setAttribute('id', 'scriptSRC');

        script.onload = function () {
            document.head.append(script);
        };

        script.onerror = function () {
            console.log('error ');
        }


    }


    스타일생성() {
        const pathname = location.pathname;
        const fileName = pathname.slice(1) || 'home';

        import(`../css/${fileName}.css`)
            .then(res => res)
            .catch(err => console.log('err > ', err))
    }
}

export default JsScript;
