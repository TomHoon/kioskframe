// import 위젯 from './payment.module';

// main();

// async function main() {
//   const { button, coupon } = 위젯.set초기셋팅();

//   const 개발자key = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
//   const 고객key = "tXBIn-wEhKTER9tiLWeFU";

//   // ------ 1. 위젯 생성  ------
//   const widgets = make토스위젯(개발자key, 고객key);

//   // ------ 2. 주문의 결제 금액 설정 ------
//   await 위젯.set주문결제금액.bind(widgets, 5000);

//   // ------ 3. 화면 렌더링 ------
//   await 위젯.render결제화면.bind(widgets);

//   // ------  4. 결제 금액변경시) 업데이트 ------
//   coupon.addEventListener("change", update금액);

//   // ------ 5. '결제하기' 버튼 누르면 결제창 띄우기 ------
//   button.addEventListener("click", 위젯.popup결제창.bind(widgets));
// }

main();

async function main() {
  const button = document.getElementById("payment-button");
  const coupon = document.getElementById("coupon-box");
  // ------  결제위젯 초기화 ------
  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
  const tossPayments = TossPayments(clientKey);
  // 회원 결제
  const customerKey = "YNeHlVs2iX4uUHejEayJQ";
  const widgets = tossPayments.widgets({
    customerKey,
  });
  // 비회원 결제
  // const widgets = tossPayments.widgets({ customerKey: TossPayments.ANONYMOUS });

  // ------ 주문의 결제 금액 설정 ------
  await widgets.setAmount({
    currency: "KRW",
    value: 50000,
  });

  await Promise.all([
    // ------  결제 UI 렌더링 ------
    widgets.renderPaymentMethods({
      selector: "#payment-method",
      variantKey: "DEFAULT",
    }),
    // ------  이용약관 UI 렌더링 ------
    widgets.renderAgreement({ selector: "#agreement", variantKey: "AGREEMENT" }),
  ]);

  // ------  주문서의 결제 금액이 변경되었을 경우 결제 금액 업데이트 ------
  coupon.addEventListener("change", async function () {
    if (coupon.checked) {
      await widgets.setAmount({
        currency: "KRW",
        value: 50000 - 5000,
      });

      return;
    }

    await widgets.setAmount({
      currency: "KRW",
      value: 50000,
    });
  });

  // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
  button.addEventListener("click", async function () {
    await widgets.requestPayment({
      orderId: "oiUDhregiTvDhyvVWAVH8",
      orderName: "토스 티셔츠 외 2건",
      successUrl: window.location.origin + "/success.html",
      failUrl: window.location.origin + "/fail.html",
      customerEmail: "customer123@gmail.com",
      customerName: "김토스",
      customerMobilePhone: "01012341234",
    });
  });
}
