import * as Component from '../js/component-regist.js';

class JsScript {
    constructor() {
        console.log('jsscript...');
    }

    기존스크립트제거() {

        const src = document.querySelector('#sriptSRC');
        if (src) src.remove();

    }

    다이나믹임포트() {

        /**
         * 
         * 동적 임포트)
         * 정확한 파일명을 주지 않으면 모든 js파일을 빌드한다.
         */

        const pathname = location.pathname;
        const componentName = pathname.slice(1) || 'home';

        // window.jsModuleList = null;
        console.log('Module reference removed.');

        // page2에서 새로고침시 다 날리고 
        // 가져오나보다..

        Component.makeAll.apply(Component[componentName]);


    }

    // 스크립트생성() {

    //     let script = document.createElement('script');

    //     let fileName = location.pathname || 'home';

    //     script.src = `${fileName}.js`;
    //     script.setAttribute('id', 'scriptSRC');

    //     script.onload = function () {
    //         document.head.append(script);
    //     };

    //     script.onerror = function () {
    //         console.log('error ');
    //     }

    // }
}

export default JsScript;
