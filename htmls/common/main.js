import { updateRoute } from './route.js';

function routing(evt, path) {
    evt.preventDefault();
    history.pushState({}, "", path);
    updateRoute();
}

window.routing = routing;

