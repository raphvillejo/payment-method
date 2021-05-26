// modal event

var ui_modal = (function (document, window) {
  var evt = [
      function (document, window) {
        var toggle = document.querySelectorAll("[data-toggle=modal]")

        toggle.forEach(function (button) {
          var panel = document.querySelector(
            "#" + button.getAttribute("aria-controls")
          )
          var target = document.querySelector(
            "#" +
              button.getAttribute("aria-controls") +
              " " +
              "." +
              button.getAttribute("data-toggle")
          )
          var event = button.getAttribute("data-target")

          var args = { panel: panel, target: target, event: event }

          button.addEventListener(
            "click",
            function (e) {
              e.preventDefault()

              event_transition.init(args)
            },
            false
          )
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

ui_modal.init()
