import { updateRoute } from '../common/route.js';


function routing(path, param = {}) {
    history.pushState(param, "", path);
    updateRoute();
}


window.routing = routing;


window.onpopstate = function (e) {

}


window.addEventListener('DOMContentLoaded', () => {

    console.log('....>> DOMContentLoaded');

    // path 없으면 page1으로 이동..
    if (location.pathname == '/') {
        routing('/page1');
    } else {
        routing(location.pathname);
    }

    Promise.all([
        import('../css/reset.css'),
        import('../css/common.css'),
    ])
        .then()
        .catch(err => console.log(err))
})
