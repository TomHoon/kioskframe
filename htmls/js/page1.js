const menuNode = document.querySelector("#icecream-menu");
const productNode = document.querySelector("#product-menu");

let productButtons = [];

const types = [
 { title: '싱글레귤러', price: '₩3,200'},
 { title: '싱글킹', price: '₩4,000'},
 { title: '더블주니어', price: '₩4,300'},
 { title: '더블레귤러', price: '₩6,200'},
 { title: '파인트', price: '₩8,200'},
 { title: '쿼터', price: '₩15,500'},
 { title: '패밀리', price: '₩22,000'},
 { title: '하프갤런', price: '₩26,500'},
];

const 상품종류 = [
 '아이스크림', '커피', '케이크',
 '아이스모찌', '음료수', '스무디',
 '마카롱', '쉐이크'
];



// ---- 함수 시작 ----
const 베라타입그리기 = () => {
  types.forEach(타입 => {
   
   const 넣을값 = `
    <li class="cursor" data-type=${타입.title}>
     <img src="images/${타입.title}.png">
     <span class="product-name">${타입.title}</span>
     <span class="product-price">${타입.price}</span>
    </li>
   `;
  
   menuNode.insertAdjacentHTML("beforeend", 넣을값);
  });
}


const 상품종류그리기 = () => {
 상품종류.forEach((종류, idx) => {

  
  const 넣을값 = idx == 0 ? 
  `
   <li class="cursor active">${종류}</li>
  ` 
  :
  `
   <li class="cursor">${종류}</li>
  `
 
  productNode.insertAdjacentHTML("beforeend", 넣을값);
 })
}


const changeActive = function(){
 productButtons.forEach(btn => btn.classList.remove('active'));
 this.classList.add('active');
}


const addActiveEvent = () => {
 productButtons = document.querySelectorAll('#product-menu li');
 productButtons.forEach(btn => {
  btn.addEventListener('click', changeActive);
 })
}


const 베라타입라우터추가 = () => {
  const types = document.querySelectorAll("#icecream-menu li");
  types.forEach(type => {

    const 종류 = type.dataset.type;
    type.addEventListener('click', () => routing('/page2', {종류}));
    
  });
}












// ---- 실행 ----

베라타입그리기();
상품종류그리기();
addActiveEvent();
베라타입라우터추가();