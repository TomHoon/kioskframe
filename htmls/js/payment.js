// import 위젯 from './payment.module';

async function main() {
  const button = document.getElementById("payment-button");
  const coupon = document.getElementById("coupon-box");
  // ------  결제위젯 초기화 ------
  const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
  const tossPayments = TossPayments(clientKey);
  // 회원 결제
  const customerKey = "T48ryblO2dB8gWWKwm1Lh";
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
      orderId: "MpCPmTUYJGiZr9hhZzKzV",
      orderName: "토스 티셔츠 외 2건",
      successUrl: window.location.origin + "/success.html",
      failUrl: window.location.origin + "/fail.html",
      customerEmail: "customer123@gmail.com",
      customerName: "김토스",
      customerMobilePhone: "01012341234",
    });
  });
}


// ----- payment 열렸다 -------

const loadTossPayScript = () => {


  let script = document.createElement('script');

  script.src = "https://js.tosspayments.com/v2/standard";
  script.setAttribute('id', 'tosspayment');

  script.onload = function () {
    main();
  };

  script.onerror = function () {
    console.log('toss payment error >>>>> ');
  }

  document.head.append(script);


}



loadTossPayScript();


