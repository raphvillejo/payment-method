// backdrop event

var ui_backdrop = (function (document, window) {
  var evt = [
      function (document, window) {
        var backdrop = document.querySelector("#layout-backdrop")

        backdrop.addEventListener(
          "click",
          function (event) {
            event_close.init({ action: "close", event: event })
          },
          false
        )
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

ui_backdrop.init()
