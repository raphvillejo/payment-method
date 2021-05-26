// event transition

var event_transition = (function (document, window) {
  var evt = [
      function (document, window, args) {
        var html = document.querySelector("html")
        var backdrop = document.querySelector("#layout-backdrop")
        var panel = args.panel
        var target = args.target
        var event = args.event

        if (html.classList.contains("overflow")) {
          // to hide
          backdrop.classList.remove("show")
          target.classList.remove("show")
          panel.classList.remove("show")

          setTimeout(function () {
            backdrop.setAttribute("aria-hidden", true)
            target.setAttribute("aria-hidden", true)
            panel.setAttribute("aria-hidden", true)
            html.classList.remove("overflow", "overflow-" + event)
          }, 400)
        } else {
          // to show
          backdrop.setAttribute("aria-hidden", false)
          target.setAttribute("aria-hidden", false)
          panel.setAttribute("aria-hidden", false)
          html.classList.add("overflow", "overflow-" + event)

          setTimeout(function () {
            backdrop.classList.add("show")
            panel.classList.add("show")
            target.classList.add("show")
          }, 400)
        }
      },
    ],
    initAll = function (args) {
      initEvt(document, window, args)
    },
    initEvt = function (document, window, args) {
      evt.forEach(function (e) {
        e(document, window, args)
      })
    }

  return { init: initAll }
})(document, window)
