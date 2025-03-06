class 위젯 {
  constructor() {

  }

  async set결제금액(money) {
    const param = {
      currency: "KRW",
      value: money
    }

    this.setAmount(param);
  }


  set초기셋팅() {
    const button = document.getElementById("payment-button");
    const coupon = document.getElementById("coupon-box");

    return { button, coupon };
  }


  make토스위젯(개발자key, 고객key) {
    const tossPayments = TossPayments(개발자key);

    return tossPayments.widgets({
      customerKey: 고객key
    });
  }


  async set주문결제금액(price) {
    await this.setAmount({
      currency: "KRW",
      value: price,
    });
  }


  async render결제화면() {
    await Promise.all([
      // ------  결제 UI 렌더링 ------
      this.renderPaymentMethods({
        selector: "#payment-method",
        variantKey: "DEFAULT",
      }),
      // ------  이용약관 UI 렌더링 ------
      this.renderAgreement({ selector: "#agreement", variantKey: "AGREEMENT" }),
    ]);
  }


  async update금액() {
    if (coupon.checked) {
      await this.setAmount({
        currency: "KRW",
        value: 50000 - 5000,
      });

      return;
    }

    await this.setAmount({
      currency: "KRW",
      value: 50000,
    });
  }


  async popup결제창() {
    await this.requestPayment({
      orderId: "PVLFx1JRQbYhIRpctne9O",
      orderName: "토스 티셔츠 외 2건",
      successUrl: window.location.origin + "/success.html",
      failUrl: window.location.origin + "/fail.html",
      customerEmail: "customer123@gmail.com",
      customerName: "김토스",
      customerMobilePhone: "01012341234",
    });
  }


}


export default 위젯;
