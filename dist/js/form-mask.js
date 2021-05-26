// input masking

var form_mask = (function (document, window) {
  var evt = [
      function (document, window) {
        var masks = document.querySelectorAll("[data-mask]")

        masks.forEach(function (masked) {
          var data = masked.getAttribute("data-mask")

          var phoneMask = IMask(masked, {
            mask: data,
            placeholderChar: "0",
          })
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

form_mask.init()
