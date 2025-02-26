import { updateRoute } from '../common/route.js';
import '../css/common.css';
import '../css/reset.css';

function routing(path) {
    history.pushState({}, "", path);
    updateRoute();
}

window.routing = routing;
window.addEventListener('DOMContentLoaded', () => {
    routing('/page1');
})
