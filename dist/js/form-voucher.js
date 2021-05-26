// voucher form

var form_voucher = (function (document, window) {
  var evt = [
      function (document, window) {
        var toggle = document.querySelectorAll(".form-voucher")

        toggle.forEach(function (voucher) {
          var field = voucher.querySelector(".form-control")
          var apply = voucher.querySelector("button[name=apply]")
          var clear = voucher.querySelector("button[name=clear]")
          var codes = voucher.querySelector(".voucher-collection")

          var init = function () {
            field.value !== ""
              ? clear.removeAttribute("hidden")
              : clear.setAttribute("hidden", "hidden")
          }

          var toggle = function () {
            clear.setAttribute("hidden", "hidden")
            field.value !== ""
              ? apply.removeAttribute("hidden")
              : apply.setAttribute("hidden", "hidden")
          }

          field.addEventListener("keyup", function () {
            toggle()
          })

          apply.addEventListener("click", function () {
            var resultStored = field.value

            codes.innerHTML +=
              "<span class='codes'><i class='icon i-tags'></i>" +
              resultStored +
              "<button class='btn-remove' name='remove'>&times;</button></span>"

            apply.setAttribute("hidden", "hidden")
            clear.removeAttribute("hidden")
          })

          clear.addEventListener("click", function () {
            field.value = ""
            clear.setAttribute("hidden", "hidden")
          })

          document.addEventListener("click", function (e) {
            if (e.target && e.target.name == "remove") {
              e.target.parentElement.remove()
            }
          })

          init()
        })
      },
    ],
    initAll = function () {
      initEvt(document, window)
    },
    initEvt = function (document, window) {
      evt.forEach(function (e) {
        e(document, window)
      })
    }

  return { init: initAll }
})(document, window)

form_voucher.init()
