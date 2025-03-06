import JsScript from './JsScript.js';
import Render from './Render.js';

async function updateRoute() {
    const js = new JsScript();
    const renderer = new Render();

    js.기존스크립트제거();

    // TODO: proxy써서 history 변경 시점에 처리
    // TODO: popState override
    renderer.render();

    js.스크립트생성();
    js.스타일생성();
}

export {
    updateRoute
}
