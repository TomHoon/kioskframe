import JsScript from './JsScript.js';
import Renderer from './Renderer.js';

async function updateRoute() {
    const js = new JsScript();
    const renderer = new Renderer();

    js.기존스크립트제거();

    // TODO: proxy써서 history 변경 시점에 처리
    renderer.render();
    
    js.스크립트생성();
}

export {
    updateRoute
}
