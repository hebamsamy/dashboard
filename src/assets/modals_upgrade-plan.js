"use strict";
var KTModalUpgradePlan = (function () {
  var t,
    n,
    e,
    a,
    i = function (n) {
      [].slice
        .call(t.querySelectorAll("[data-kt-plan-price-month]"))
        .map(function (t) {
          var e = t.getAttribute("data-kt-plan-price-month"),
            a = t.getAttribute("data-kt-plan-price-annual");
          "month" === n
            ? (t.innerHTML = e)
            : "annual" === n && (t.innerHTML = a);
        });
    };
  return {
    init: function () {
      (t = document.querySelector("#kt_modal_upgrade_plan")) &&
        ((n = t.querySelector('[data-kt-plan="month"]')),
        (e = t.querySelector('[data-kt-plan="annual"]')),
        (a = document.querySelector("#kt_modal_upgrade_plan_btn")),
        n.addEventListener("click", function (t) {
          t.preventDefault(),
            n.classList.add("active"),
            e.classList.remove("active"),
            i("month");
        }),
        e.addEventListener("click", function (t) {
          t.preventDefault(),
            n.classList.remove("active"),
            e.classList.add("active"),
            i("annual");
        }),
        a &&
          a.addEventListener("click", function (n) {
            n.preventDefault();
            var e = this;
            swal
              .fire({
                text: "Are you sure you would like to upgrade to selected plan ?",
                icon: "warning",
                buttonsStyling: !1,
                showDenyButton: !0,
                confirmButtonText: "Yes",
                denyButtonText: "No",
                customClass: {
                  confirmButton: "btn btn-primary",
                  denyButton: "btn btn-light-danger",
                },
              })
              .then((n) => {
                n.isConfirmed &&
                  (e.setAttribute("data-kt-indicator", "on"),
                  (e.disabled = !0),
                  setTimeout(function () {
                    Swal.fire({
                      text: "Your subscription plan has been successfully upgraded",
                      icon: "success",
                      confirmButtonText: "Ok",
                      buttonsStyling: !1,
                      customClass: { confirmButton: "btn btn-light-primary" },
                    }).then((n) => {
                      bootstrap.Modal.getInstance(t).hide();
                    });
                  }, 2e3));
              });
          }),
        i());
    },
  };
})();
KTUtil.onDOMContentLoaded(function () {
  KTModalUpgradePlan.init();
});
