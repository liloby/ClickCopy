const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();

  // coupon.select();
  // coupon.setSelectionRange(0, 999999);
  // document.execCommand('copy')

  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.innerHTML = "COPIED";
    setTimeout(() => {
      btn.innerHTML = "COPY";
    }, 2000);
  });
};

btn.addEventListener("click", copyText);
