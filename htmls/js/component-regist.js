// ------ Page1 ------
let page1 = {
  pageName: 'page1',
  js: () => import('../js/page1.js'),
  css: () => import(/* webpackChunkName: "page1" */'../css/page1.css')
}

// ------ Page2 ------
let page2 = {
  pageName: 'page2',
  js: () => import('../js/page2.js'),
  css: () => import(/* webpackChunkName: "page2" */'../css/page2.css'),
}

// ------ Payment ------
let payment = {
  pageName: 'payment',
  js: () => import('../js/payment.js'),
  css: () => import(/* webpackChunkName: "payment" */'../css/payment.css'),
}

let makeAll = function () {
  if (!window?.jsModuleList) {
    window.jsModuleList = [];
  }

  import(/* webpackChunkName: "common" */'../css/common.css');
  import(/* webpackChunkName: "reset" */'../css/reset.css');

  this.js().then(res => window.jsModuleList.push(res));
  this.css();
}


export {
  page1,
  page2,
  payment,
  makeAll
}
