!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).IMask = {}))
})(this, function (t) {
  "use strict"
  var e =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {}
  function n(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports
  }
  var u = function (t) {
      return t && t.Math == Math && t
    },
    i =
      u("object" == typeof globalThis && globalThis) ||
      u("object" == typeof window && window) ||
      u("object" == typeof self && self) ||
      u("object" == typeof e && e) ||
      Function("return this")(),
    r = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    },
    a = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7
          },
        })[1]
      )
    }),
    s = {}.propertyIsEnumerable,
    o = Object.getOwnPropertyDescriptor,
    l = {
      f:
        o && !s.call({ 1: 2 }, 1)
          ? function (t) {
              var e = o(this, t)
              return !!e && e.enumerable
            }
          : s,
    },
    h = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      }
    },
    c = {}.toString,
    f = "".split,
    p = r(function () {
      return !Object("z").propertyIsEnumerable(0)
    })
      ? function (t) {
          return "String" ==
            (function (t) {
              return c.call(t).slice(8, -1)
            })(t)
            ? f.call(t, "")
            : Object(t)
        }
      : Object,
    d = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t)
      return t
    },
    v = function (t) {
      return p(d(t))
    },
    g = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    },
    k = function (t, e) {
      if (!g(t)) return t
      var n, u
      if (e && "function" == typeof (n = t.toString) && !g((u = n.call(t))))
        return u
      if ("function" == typeof (n = t.valueOf) && !g((u = n.call(t)))) return u
      if (!e && "function" == typeof (n = t.toString) && !g((u = n.call(t))))
        return u
      throw TypeError("Can't convert object to primitive value")
    },
    m = {}.hasOwnProperty,
    y = function (t, e) {
      return m.call(t, e)
    },
    _ = i.document,
    A = g(_) && g(_.createElement),
    b =
      !a &&
      !r(function () {
        return (
          7 !=
          Object.defineProperty(
            ((t = "div"), A ? _.createElement(t) : {}),
            "a",
            {
              get: function () {
                return 7
              },
            }
          ).a
        )
        var t
      }),
    C = Object.getOwnPropertyDescriptor,
    E = {
      f: a
        ? C
        : function (t, e) {
            if (((t = v(t)), (e = k(e, !0)), b))
              try {
                return C(t, e)
              } catch (t) {}
            if (y(t, e)) return h(!l.f.call(t, e), t[e])
          },
    },
    F = function (t) {
      if (!g(t)) throw TypeError(String(t) + " is not an object")
      return t
    },
    S = Object.defineProperty,
    D = {
      f: a
        ? S
        : function (t, e, n) {
            if ((F(t), (e = k(e, !0)), F(n), b))
              try {
                return S(t, e, n)
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported")
            return "value" in n && (t[e] = n.value), t
          },
    },
    w = a
      ? function (t, e, n) {
          return D.f(t, e, h(1, n))
        }
      : function (t, e, n) {
          return (t[e] = n), t
        },
    B = function (t, e) {
      try {
        w(i, t, e)
      } catch (n) {
        i[t] = e
      }
      return e
    },
    x = i["__core-js_shared__"] || B("__core-js_shared__", {}),
    M = Function.toString
  "function" != typeof x.inspectSource &&
    (x.inspectSource = function (t) {
      return M.call(t)
    })
  var P,
    O,
    T,
    I,
    j = x.inspectSource,
    V = i.WeakMap,
    R = "function" == typeof V && /native code/.test(j(V)),
    L = n(function (t) {
      ;(t.exports = function (t, e) {
        return x[t] || (x[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: "3.6.4",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      })
    }),
    N = 0,
    U = Math.random(),
    z = L("keys"),
    H = {},
    Y = i.WeakMap
  if (R) {
    var q = new Y(),
      Z = q.get,
      K = q.has,
      G = q.set
    ;(P = function (t, e) {
      return G.call(q, t, e), e
    }),
      (O = function (t) {
        return Z.call(q, t) || {}
      }),
      (T = function (t) {
        return K.call(q, t)
      })
  } else {
    var W =
      z[(I = "state")] ||
      (z[I] = (function (t) {
        return (
          "Symbol(" +
          String(void 0 === t ? "" : t) +
          ")_" +
          (++N + U).toString(36)
        )
      })(I))
    ;(H[W] = !0),
      (P = function (t, e) {
        return w(t, W, e), e
      }),
      (O = function (t) {
        return y(t, W) ? t[W] : {}
      }),
      (T = function (t) {
        return y(t, W)
      })
  }
  var $ = {
      set: P,
      get: O,
      has: T,
      enforce: function (t) {
        return T(t) ? O(t) : P(t, {})
      },
      getterFor: function (t) {
        return function (e) {
          var n
          if (!g(e) || (n = O(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required")
          return n
        }
      },
    },
    X = n(function (t) {
      var e = $.get,
        n = $.enforce,
        u = String(String).split("String")
      ;(t.exports = function (t, e, r, a) {
        var s = !!a && !!a.unsafe,
          o = !!a && !!a.enumerable,
          l = !!a && !!a.noTargetGet
        "function" == typeof r &&
          ("string" != typeof e || y(r, "name") || w(r, "name", e),
          (n(r).source = u.join("string" == typeof e ? e : ""))),
          t !== i
            ? (s ? !l && t[e] && (o = !0) : delete t[e],
              o ? (t[e] = r) : w(t, e, r))
            : o
            ? (t[e] = r)
            : B(e, r)
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || j(this)
      })
    }),
    J = i,
    Q = function (t) {
      return "function" == typeof t ? t : void 0
    },
    tt = function (t, e) {
      return arguments.length < 2
        ? Q(J[t]) || Q(i[t])
        : (J[t] && J[t][e]) || (i[t] && i[t][e])
    },
    et = Math.ceil,
    nt = Math.floor,
    ut = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? nt : et)(t)
    },
    it = Math.min,
    rt = function (t) {
      return t > 0 ? it(ut(t), 9007199254740991) : 0
    },
    at = Math.max,
    st = Math.min,
    ot = function (t) {
      return function (e, n, u) {
        var i,
          r = v(e),
          a = rt(r.length),
          s = (function (t, e) {
            var n = ut(t)
            return n < 0 ? at(n + e, 0) : st(n, e)
          })(u, a)
        if (t && n != n) {
          for (; a > s; ) if ((i = r[s++]) != i) return !0
        } else
          for (; a > s; s++) if ((t || s in r) && r[s] === n) return t || s || 0
        return !t && -1
      }
    },
    lt = { includes: ot(!0), indexOf: ot(!1) }.indexOf,
    ht = function (t, e) {
      var n,
        u = v(t),
        i = 0,
        r = []
      for (n in u) !y(H, n) && y(u, n) && r.push(n)
      for (; e.length > i; ) y(u, (n = e[i++])) && (~lt(r, n) || r.push(n))
      return r
    },
    ct = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    ft = ct.concat("length", "prototype"),
    pt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return ht(t, ft)
        },
    },
    dt = { f: Object.getOwnPropertySymbols },
    vt =
      tt("Reflect", "ownKeys") ||
      function (t) {
        var e = pt.f(F(t)),
          n = dt.f
        return n ? e.concat(n(t)) : e
      },
    gt = function (t, e) {
      for (var n = vt(e), u = D.f, i = E.f, r = 0; r < n.length; r++) {
        var a = n[r]
        y(t, a) || u(t, a, i(e, a))
      }
    },
    kt = /#|\.prototype\./,
    mt = function (t, e) {
      var n = _t[yt(t)]
      return n == bt || (n != At && ("function" == typeof e ? r(e) : !!e))
    },
    yt = (mt.normalize = function (t) {
      return String(t).replace(kt, ".").toLowerCase()
    }),
    _t = (mt.data = {}),
    At = (mt.NATIVE = "N"),
    bt = (mt.POLYFILL = "P"),
    Ct = mt,
    Et = E.f,
    Ft = function (t, e) {
      var n,
        u,
        r,
        a,
        s,
        o = t.target,
        l = t.global,
        h = t.stat
      if ((n = l ? i : h ? i[o] || B(o, {}) : (i[o] || {}).prototype))
        for (u in e) {
          if (
            ((a = e[u]),
            (r = t.noTargetGet ? (s = Et(n, u)) && s.value : n[u]),
            !Ct(l ? u : o + (h ? "." : "#") + u, t.forced) && void 0 !== r)
          ) {
            if (typeof a == typeof r) continue
            gt(a, r)
          }
          ;(t.sham || (r && r.sham)) && w(a, "sham", !0), X(n, u, a, t)
        }
    },
    St =
      Object.keys ||
      function (t) {
        return ht(t, ct)
      },
    Dt = function (t) {
      return Object(d(t))
    },
    wt = Object.assign,
    Bt = Object.defineProperty,
    xt =
      !wt ||
      r(function () {
        if (
          a &&
          1 !==
            wt(
              { b: 1 },
              wt(
                Bt({}, "a", {
                  enumerable: !0,
                  get: function () {
                    Bt(this, "b", { value: 3, enumerable: !1 })
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0
        var t = {},
          e = {},
          n = Symbol()
        return (
          (t[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t
          }),
          7 != wt({}, t)[n] || "abcdefghijklmnopqrst" != St(wt({}, e)).join("")
        )
      })
        ? function (t, e) {
            for (
              var n = Dt(t), u = arguments.length, i = 1, r = dt.f, s = l.f;
              u > i;

            )
              for (
                var o,
                  h = p(arguments[i++]),
                  c = r ? St(h).concat(r(h)) : St(h),
                  f = c.length,
                  d = 0;
                f > d;

              )
                (o = c[d++]), (a && !s.call(h, o)) || (n[o] = h[o])
            return n
          }
        : wt
  Ft(
    { target: "Object", stat: !0, forced: Object.assign !== xt },
    { assign: xt }
  )
  var Mt =
      "".repeat ||
      function (t) {
        var e = String(d(this)),
          n = "",
          u = ut(t)
        if (u < 0 || u == 1 / 0) throw RangeError("Wrong number of repetitions")
        for (; u > 0; (u >>>= 1) && (e += e)) 1 & u && (n += e)
        return n
      },
    Pt = Math.ceil,
    Ot = function (t) {
      return function (e, n, u) {
        var i,
          r,
          a = String(d(e)),
          s = a.length,
          o = void 0 === u ? " " : String(u),
          l = rt(n)
        return l <= s || "" == o
          ? a
          : ((i = l - s),
            (r = Mt.call(o, Pt(i / o.length))).length > i &&
              (r = r.slice(0, i)),
            t ? a + r : r + a)
      }
    },
    Tt = { start: Ot(!1), end: Ot(!0) },
    It = tt("navigator", "userAgent") || "",
    jt = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(It),
    Vt = Tt.end
  Ft(
    { target: "String", proto: !0, forced: jt },
    {
      padEnd: function (t) {
        return Vt(this, t, arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  )
  var Rt = Tt.start
  function Lt(t) {
    return (Lt =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t
          })(t)
  }
  function Nt(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function")
  }
  function Ut(t, e) {
    for (var n = 0; n < e.length; n++) {
      var u = e[n]
      ;(u.enumerable = u.enumerable || !1),
        (u.configurable = !0),
        "value" in u && (u.writable = !0),
        Object.defineProperty(t, u.key, u)
    }
  }
  function zt(t, e, n) {
    return e && Ut(t.prototype, e), n && Ut(t, n), t
  }
  function Ht(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function")
    ;(t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && qt(t, e)
  }
  function Yt(t) {
    return (Yt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
  }
  function qt(t, e) {
    return (qt =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t
      })(t, e)
  }
  function Zt(t, e) {
    if (null == t) return {}
    var n,
      u,
      i = (function (t, e) {
        if (null == t) return {}
        var n,
          u,
          i = {},
          r = Object.keys(t)
        for (u = 0; u < r.length; u++)
          (n = r[u]), e.indexOf(n) >= 0 || (i[n] = t[n])
        return i
      })(t, e)
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t)
      for (u = 0; u < r.length; u++)
        (n = r[u]),
          e.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]))
    }
    return i
  }
  function Kt(t, e) {
    return !e || ("object" != typeof e && "function" != typeof e)
      ? (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          return t
        })(t)
      : e
  }
  function Gt(t, e) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Yt(t));

    );
    return t
  }
  function Wt(t, e, n) {
    return (Wt =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var u = Gt(t, e)
            if (u) {
              var i = Object.getOwnPropertyDescriptor(u, e)
              return i.get ? i.get.call(n) : i.value
            }
          })(t, e, n || t)
  }
  function $t(t, e, n, u) {
    return ($t =
      "undefined" != typeof Reflect && Reflect.set
        ? Reflect.set
        : function (t, e, n, u) {
            var i,
              r = Gt(t, e)
            if (r) {
              if ((i = Object.getOwnPropertyDescriptor(r, e)).set)
                return i.set.call(u, n), !0
              if (!i.writable) return !1
            }
            if ((i = Object.getOwnPropertyDescriptor(u, e))) {
              if (!i.writable) return !1
              ;(i.value = n), Object.defineProperty(u, e, i)
            } else
              !(function (t, e, n) {
                e in t
                  ? Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (t[e] = n)
              })(u, e, n)
            return !0
          })(t, e, n, u)
  }
  function Xt(t, e, n, u, i) {
    if (!$t(t, e, n, u || t) && i) throw new Error("failed to set property")
    return n
  }
  function Jt(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t
      })(t) ||
      (function (t, e) {
        if (
          !(Symbol.iterator in Object(t)) &&
          "[object Arguments]" !== Object.prototype.toString.call(t)
        )
          return
        var n = [],
          u = !0,
          i = !1,
          r = void 0
        try {
          for (
            var a, s = t[Symbol.iterator]();
            !(u = (a = s.next()).done) &&
            (n.push(a.value), !e || n.length !== e);
            u = !0
          );
        } catch (t) {
          ;(i = !0), (r = t)
        } finally {
          try {
            u || null == s.return || s.return()
          } finally {
            if (i) throw r
          }
        }
        return n
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        )
      })()
    )
  }
  function Qt(t) {
    return "string" == typeof t || t instanceof String
  }
  Ft(
    { target: "String", proto: !0, forced: jt },
    {
      padStart: function (t) {
        return Rt(this, t, arguments.length > 1 ? arguments[1] : void 0)
      },
    }
  ),
    Ft({ target: "String", proto: !0 }, { repeat: Mt }),
    Ft({ global: !0 }, { globalThis: i })
  var te = "NONE",
    ee = "LEFT",
    ne = "FORCE_LEFT",
    ue = "RIGHT",
    ie = "FORCE_RIGHT"
  function re(t) {
    switch (t) {
      case ee:
        return ne
      case ue:
        return ie
      default:
        return t
    }
  }
  function ae(t) {
    return t.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")
  }
  var se = (function () {
      function t(e, n, u, i) {
        for (
          Nt(this, t),
            this.value = e,
            this.cursorPos = n,
            this.oldValue = u,
            this.oldSelection = i;
          this.value.slice(0, this.startChangePos) !==
          this.oldValue.slice(0, this.startChangePos);

        )
          --this.oldSelection.start
      }
      return (
        zt(t, [
          {
            key: "startChangePos",
            get: function () {
              return Math.min(this.cursorPos, this.oldSelection.start)
            },
          },
          {
            key: "insertedCount",
            get: function () {
              return this.cursorPos - this.startChangePos
            },
          },
          {
            key: "inserted",
            get: function () {
              return this.value.substr(this.startChangePos, this.insertedCount)
            },
          },
          {
            key: "removedCount",
            get: function () {
              return Math.max(
                this.oldSelection.end - this.startChangePos ||
                  this.oldValue.length - this.value.length,
                0
              )
            },
          },
          {
            key: "removed",
            get: function () {
              return this.oldValue.substr(
                this.startChangePos,
                this.removedCount
              )
            },
          },
          {
            key: "head",
            get: function () {
              return this.value.substring(0, this.startChangePos)
            },
          },
          {
            key: "tail",
            get: function () {
              return this.value.substring(
                this.startChangePos + this.insertedCount
              )
            },
          },
          {
            key: "removeDirection",
            get: function () {
              return !this.removedCount || this.insertedCount
                ? te
                : this.oldSelection.end === this.cursorPos ||
                  this.oldSelection.start === this.cursorPos
                ? ue
                : ee
            },
          },
        ]),
        t
      )
    })(),
    oe = (function () {
      function t(e) {
        Nt(this, t),
          Object.assign(
            this,
            { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
            e
          )
      }
      return (
        zt(t, [
          {
            key: "aggregate",
            value: function (t) {
              return (
                (this.rawInserted += t.rawInserted),
                (this.skip = this.skip || t.skip),
                (this.inserted += t.inserted),
                (this.tailShift += t.tailShift),
                this
              )
            },
          },
          {
            key: "offset",
            get: function () {
              return this.tailShift + this.inserted.length
            },
          },
        ]),
        t
      )
    })(),
    le = (function () {
      function t() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          u = arguments.length > 2 ? arguments[2] : void 0
        Nt(this, t), (this.value = e), (this.from = n), (this.stop = u)
      }
      return (
        zt(t, [
          {
            key: "toString",
            value: function () {
              return this.value
            },
          },
          {
            key: "extend",
            value: function (t) {
              this.value += String(t)
            },
          },
          {
            key: "appendTo",
            value: function (t) {
              return t
                .append(this.toString(), { tail: !0 })
                .aggregate(t._appendPlaceholder())
            },
          },
          {
            key: "shiftBefore",
            value: function (t) {
              if (this.from >= t || !this.value.length) return ""
              var e = this.value[0]
              return (this.value = this.value.slice(1)), e
            },
          },
          {
            key: "state",
            get: function () {
              return { value: this.value, from: this.from, stop: this.stop }
            },
            set: function (t) {
              Object.assign(this, t)
            },
          },
        ]),
        t
      )
    })()
  function he(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
    return new he.InputMask(t, e)
  }
  var ce = (function () {
    function t(e) {
      Nt(this, t),
        (this._value = ""),
        this._update(Object.assign({}, t.DEFAULTS, {}, e)),
        (this.isInitialized = !0)
    }
    return (
      zt(t, [
        {
          key: "updateOptions",
          value: function (t) {
            Object.keys(t).length &&
              this.withValueRefresh(this._update.bind(this, t))
          },
        },
        {
          key: "_update",
          value: function (t) {
            Object.assign(this, t)
          },
        },
        {
          key: "reset",
          value: function () {
            this._value = ""
          },
        },
        {
          key: "resolve",
          value: function (t) {
            return (
              this.reset(),
              this.append(t, { input: !0 }, ""),
              this.doCommit(),
              this.value
            )
          },
        },
        {
          key: "nearestInputPos",
          value: function (t, e) {
            return t
          },
        },
        {
          key: "extractInput",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length
            return this.value.slice(t, e)
          },
        },
        {
          key: "extractTail",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length
            return new le(this.extractInput(t, e), t)
          },
        },
        {
          key: "appendTail",
          value: function (t) {
            return Qt(t) && (t = new le(String(t))), t.appendTo(this)
          },
        },
        {
          key: "_appendCharRaw",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return (t = this.doPrepare(t, e))
              ? ((this._value += t), new oe({ inserted: t, rawInserted: t }))
              : new oe()
          },
        },
        {
          key: "_appendChar",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = this.state,
              i = this._appendCharRaw(t, e)
            if (i.inserted) {
              var r,
                a = !1 !== this.doValidate(e)
              if (a && null != n) {
                var s = this.state
                this.overwrite &&
                  ((r = n.state), n.shiftBefore(this.value.length))
                var o = this.appendTail(n)
                ;(a = o.rawInserted === n.toString()) &&
                  o.inserted &&
                  (this.state = s)
              }
              a || ((i = new oe()), (this.state = u), n && r && (n.state = r))
            }
            return i
          },
        },
        {
          key: "_appendPlaceholder",
          value: function () {
            return new oe()
          },
        },
        {
          key: "append",
          value: function (t, e, n) {
            if (!Qt(t)) throw new Error("value should be string")
            var u = new oe(),
              i = Qt(n) ? new le(String(n)) : n
            e.tail && (e._beforeTailState = this.state)
            for (var r = 0; r < t.length; ++r)
              u.aggregate(this._appendChar(t[r], e, i))
            return null != i && (u.tailShift += this.appendTail(i).tailShift), u
          },
        },
        {
          key: "remove",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length
            return (
              (this._value = this.value.slice(0, t) + this.value.slice(e)),
              new oe()
            )
          },
        },
        {
          key: "withValueRefresh",
          value: function (t) {
            if (this._refreshing || !this.isInitialized) return t()
            this._refreshing = !0
            var e = this.rawInputValue,
              n = this.value,
              u = t()
            return (
              (this.rawInputValue = e),
              this.value !== n &&
                0 === n.indexOf(this.value) &&
                this.append(n.slice(this.value.length), {}, ""),
              delete this._refreshing,
              u
            )
          },
        },
        {
          key: "runIsolated",
          value: function (t) {
            if (this._isolated || !this.isInitialized) return t(this)
            this._isolated = !0
            var e = this.state,
              n = t(this)
            return (this.state = e), delete this._isolated, n
          },
        },
        {
          key: "doPrepare",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return this.prepare ? this.prepare(t, this, e) : t
          },
        },
        {
          key: "doValidate",
          value: function (t) {
            return (
              (!this.validate || this.validate(this.value, this, t)) &&
              (!this.parent || this.parent.doValidate(t))
            )
          },
        },
        {
          key: "doCommit",
          value: function () {
            this.commit && this.commit(this.value, this)
          },
        },
        {
          key: "doFormat",
          value: function (t) {
            return this.format ? this.format(t, this) : t
          },
        },
        {
          key: "doParse",
          value: function (t) {
            return this.parse ? this.parse(t, this) : t
          },
        },
        {
          key: "splice",
          value: function (t, e, n, u) {
            var i = t + e,
              r = this.extractTail(i),
              a = this.nearestInputPos(t, u)
            return new oe({ tailShift: a - t })
              .aggregate(this.remove(a))
              .aggregate(this.append(n, { input: !0 }, r))
          },
        },
        {
          key: "state",
          get: function () {
            return { _value: this.value }
          },
          set: function (t) {
            this._value = t._value
          },
        },
        {
          key: "value",
          get: function () {
            return this._value
          },
          set: function (t) {
            this.resolve(t)
          },
        },
        {
          key: "unmaskedValue",
          get: function () {
            return this.value
          },
          set: function (t) {
            this.reset(), this.append(t, {}, ""), this.doCommit()
          },
        },
        {
          key: "typedValue",
          get: function () {
            return this.doParse(this.value)
          },
          set: function (t) {
            this.value = this.doFormat(t)
          },
        },
        {
          key: "rawInputValue",
          get: function () {
            return this.extractInput(0, this.value.length, { raw: !0 })
          },
          set: function (t) {
            this.reset(), this.append(t, { raw: !0 }, ""), this.doCommit()
          },
        },
        {
          key: "isComplete",
          get: function () {
            return !0
          },
        },
      ]),
      t
    )
  })()
  function fe(t) {
    if (null == t) throw new Error("mask property should be defined")
    return t instanceof RegExp
      ? he.MaskedRegExp
      : Qt(t)
      ? he.MaskedPattern
      : t instanceof Date || t === Date
      ? he.MaskedDate
      : t instanceof Number || "number" == typeof t || t === Number
      ? he.MaskedNumber
      : Array.isArray(t) || t === Array
      ? he.MaskedDynamic
      : he.Masked && t.prototype instanceof he.Masked
      ? t
      : t instanceof Function
      ? he.MaskedFunction
      : t instanceof he.Masked
      ? t.constructor
      : (console.warn("Mask not found for mask", t), he.Masked)
  }
  function pe(t) {
    if (he.Masked && t instanceof he.Masked) return t
    var e = (t = Object.assign({}, t)).mask
    if (he.Masked && e instanceof he.Masked) return e
    var n = fe(e)
    if (!n)
      throw new Error(
        "Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask."
      )
    return new n(t)
  }
  ;(ce.DEFAULTS = {
    format: function (t) {
      return t
    },
    parse: function (t) {
      return t
    },
  }),
    (he.Masked = ce),
    (he.createMask = pe)
  var de = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      "*": /./,
    },
    ve = (function () {
      function t(e) {
        Nt(this, t)
        var n = e.mask,
          u = Zt(e, ["mask"])
        ;(this.masked = pe({ mask: n })), Object.assign(this, u)
      }
      return (
        zt(t, [
          {
            key: "reset",
            value: function () {
              ;(this._isFilled = !1), this.masked.reset()
            },
          },
          {
            key: "remove",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length
              return 0 === t && e >= 1
                ? ((this._isFilled = !1), this.masked.remove(t, e))
                : new oe()
            },
          },
          {
            key: "_appendChar",
            value: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {}
              if (this._isFilled) return new oe()
              var n = this.masked.state,
                u = this.masked._appendChar(t, e)
              return (
                u.inserted &&
                  !1 === this.doValidate(e) &&
                  ((u.inserted = u.rawInserted = ""), (this.masked.state = n)),
                u.inserted ||
                  this.isOptional ||
                  this.lazy ||
                  e.input ||
                  (u.inserted = this.placeholderChar),
                (u.skip = !u.inserted && !this.isOptional),
                (this._isFilled = Boolean(u.inserted)),
                u
              )
            },
          },
          {
            key: "append",
            value: function () {
              var t
              return (t = this.masked).append.apply(t, arguments)
            },
          },
          {
            key: "_appendPlaceholder",
            value: function () {
              var t = new oe()
              return (
                this._isFilled ||
                  this.isOptional ||
                  ((this._isFilled = !0), (t.inserted = this.placeholderChar)),
                t
              )
            },
          },
          {
            key: "extractTail",
            value: function () {
              var t
              return (t = this.masked).extractTail.apply(t, arguments)
            },
          },
          {
            key: "appendTail",
            value: function () {
              var t
              return (t = this.masked).appendTail.apply(t, arguments)
            },
          },
          {
            key: "extractInput",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length,
                n = arguments.length > 2 ? arguments[2] : void 0
              return this.masked.extractInput(t, e, n)
            },
          },
          {
            key: "nearestInputPos",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : te,
                n = 0,
                u = this.value.length,
                i = Math.min(Math.max(t, n), u)
              switch (e) {
                case ee:
                case ne:
                  return this.isComplete ? i : n
                case ue:
                case ie:
                  return this.isComplete ? i : u
                case te:
                default:
                  return i
              }
            },
          },
          {
            key: "doValidate",
            value: function () {
              var t, e
              return (
                (t = this.masked).doValidate.apply(t, arguments) &&
                (!this.parent ||
                  (e = this.parent).doValidate.apply(e, arguments))
              )
            },
          },
          {
            key: "doCommit",
            value: function () {
              this.masked.doCommit()
            },
          },
          {
            key: "value",
            get: function () {
              return (
                this.masked.value ||
                (this._isFilled && !this.isOptional ? this.placeholderChar : "")
              )
            },
          },
          {
            key: "unmaskedValue",
            get: function () {
              return this.masked.unmaskedValue
            },
          },
          {
            key: "isComplete",
            get: function () {
              return Boolean(this.masked.value) || this.isOptional
            },
          },
          {
            key: "state",
            get: function () {
              return { masked: this.masked.state, _isFilled: this._isFilled }
            },
            set: function (t) {
              ;(this.masked.state = t.masked), (this._isFilled = t._isFilled)
            },
          },
        ]),
        t
      )
    })(),
    ge = (function () {
      function t(e) {
        Nt(this, t), Object.assign(this, e), (this._value = "")
      }
      return (
        zt(t, [
          {
            key: "reset",
            value: function () {
              ;(this._isRawInput = !1), (this._value = "")
            },
          },
          {
            key: "remove",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this._value.length
              return (
                (this._value = this._value.slice(0, t) + this._value.slice(e)),
                this._value || (this._isRawInput = !1),
                new oe()
              )
            },
          },
          {
            key: "nearestInputPos",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : te,
                n = 0,
                u = this._value.length
              switch (e) {
                case ee:
                case ne:
                  return n
                case te:
                case ue:
                case ie:
                default:
                  return u
              }
            },
          },
          {
            key: "extractInput",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : this._value.length,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
              return (
                (n.raw && this._isRawInput && this._value.slice(t, e)) || ""
              )
            },
          },
          {
            key: "_appendChar",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = new oe()
              if (this._value) return n
              var u = this.char === t[0],
                i = u && (this.isUnmasking || e.input || e.raw) && !e.tail
              return (
                i && (n.rawInserted = this.char),
                (this._value = n.inserted = this.char),
                (this._isRawInput = i && (e.raw || e.input)),
                n
              )
            },
          },
          {
            key: "_appendPlaceholder",
            value: function () {
              var t = new oe()
              return this._value || (this._value = t.inserted = this.char), t
            },
          },
          {
            key: "extractTail",
            value: function () {
              ;(arguments.length > 1 && void 0 !== arguments[1]) ||
                this.value.length
              return new le("")
            },
          },
          {
            key: "appendTail",
            value: function (t) {
              return Qt(t) && (t = new le(String(t))), t.appendTo(this)
            },
          },
          {
            key: "append",
            value: function (t, e, n) {
              var u = this._appendChar(t, e)
              return (
                null != n && (u.tailShift += this.appendTail(n).tailShift), u
              )
            },
          },
          { key: "doCommit", value: function () {} },
          {
            key: "value",
            get: function () {
              return this._value
            },
          },
          {
            key: "unmaskedValue",
            get: function () {
              return this.isUnmasking ? this.value : ""
            },
          },
          {
            key: "isComplete",
            get: function () {
              return !0
            },
          },
          {
            key: "state",
            get: function () {
              return { _value: this._value, _isRawInput: this._isRawInput }
            },
            set: function (t) {
              Object.assign(this, t)
            },
          },
        ]),
        t
      )
    })(),
    ke = (function () {
      function t() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        Nt(this, t), (this.chunks = e), (this.from = n)
      }
      return (
        zt(t, [
          {
            key: "toString",
            value: function () {
              return this.chunks.map(String).join("")
            },
          },
          {
            key: "extend",
            value: function (e) {
              if (String(e)) {
                Qt(e) && (e = new le(String(e)))
                var n = this.chunks[this.chunks.length - 1],
                  u =
                    n &&
                    (n.stop === e.stop || null == e.stop) &&
                    e.from === n.from + n.toString().length
                if (e instanceof le)
                  u ? n.extend(e.toString()) : this.chunks.push(e)
                else if (e instanceof t) {
                  if (null == e.stop)
                    for (var i; e.chunks.length && null == e.chunks[0].stop; )
                      ((i = e.chunks.shift()).from += e.from), this.extend(i)
                  e.toString() && ((e.stop = e.blockIndex), this.chunks.push(e))
                }
              }
            },
          },
          {
            key: "appendTo",
            value: function (e) {
              if (!(e instanceof he.MaskedPattern))
                return new le(this.toString()).appendTo(e)
              for (
                var n = new oe(), u = 0;
                u < this.chunks.length && !n.skip;
                ++u
              ) {
                var i = this.chunks[u],
                  r = e._mapPosToBlock(e.value.length),
                  a = i.stop,
                  s = void 0
                if (
                  (null != a &&
                    (!r || r.index <= a) &&
                    ((i instanceof t || e._stops.indexOf(a) >= 0) &&
                      n.aggregate(e._appendPlaceholder(a)),
                    (s = i instanceof t && e._blocks[a])),
                  s)
                ) {
                  var o = s.appendTail(i)
                  ;(o.skip = !1), n.aggregate(o), (e._value += o.inserted)
                  var l = i.toString().slice(o.rawInserted.length)
                  l && n.aggregate(e.append(l, { tail: !0 }))
                } else n.aggregate(e.append(i.toString(), { tail: !0 }))
              }
              return n
            },
          },
          {
            key: "shiftBefore",
            value: function (t) {
              if (this.from >= t || !this.chunks.length) return ""
              for (var e = t - this.from, n = 0; n < this.chunks.length; ) {
                var u = this.chunks[n],
                  i = u.shiftBefore(e)
                if (u.toString()) {
                  if (!i) break
                  ++n
                } else this.chunks.splice(n, 1)
                if (i) return i
              }
              return ""
            },
          },
          {
            key: "state",
            get: function () {
              return {
                chunks: this.chunks.map(function (t) {
                  return t.state
                }),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex,
              }
            },
            set: function (e) {
              var n = e.chunks,
                u = Zt(e, ["chunks"])
              Object.assign(this, u),
                (this.chunks = n.map(function (e) {
                  var n = "chunks" in e ? new t() : new le()
                  return (n.state = e), n
                }))
            },
          },
        ]),
        t
      )
    })(),
    me = (function (t) {
      function e() {
        return Nt(this, e), Kt(this, Yt(e).apply(this, arguments))
      }
      return (
        Ht(e, t),
        zt(e, [
          {
            key: "_update",
            value: function (t) {
              t.mask &&
                (t.validate = function (e) {
                  return e.search(t.mask) >= 0
                }),
                Wt(Yt(e.prototype), "_update", this).call(this, t)
            },
          },
        ]),
        e
      )
    })(ce)
  he.MaskedRegExp = me
  var ye = (function (t) {
    function e() {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      return (
        Nt(this, e),
        (t.definitions = Object.assign({}, de, t.definitions)),
        Kt(this, Yt(e).call(this, Object.assign({}, e.DEFAULTS, {}, t)))
      )
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            ;(t.definitions = Object.assign(
              {},
              this.definitions,
              t.definitions
            )),
              Wt(Yt(e.prototype), "_update", this).call(this, t),
              this._rebuildMask()
          },
        },
        {
          key: "_rebuildMask",
          value: function () {
            var t = this,
              n = this.definitions
            ;(this._blocks = []), (this._stops = []), (this._maskedBlocks = {})
            var u = this.mask
            if (u && n)
              for (var i = !1, r = !1, a = 0; a < u.length; ++a) {
                if (this.blocks)
                  if (
                    "continue" ===
                    (function () {
                      var e = u.slice(a),
                        n = Object.keys(t.blocks).filter(function (t) {
                          return 0 === e.indexOf(t)
                        })
                      n.sort(function (t, e) {
                        return e.length - t.length
                      })
                      var i = n[0]
                      if (i) {
                        var r = pe(
                          Object.assign(
                            {
                              parent: t,
                              lazy: t.lazy,
                              placeholderChar: t.placeholderChar,
                              overwrite: t.overwrite,
                            },
                            t.blocks[i]
                          )
                        )
                        return (
                          r &&
                            (t._blocks.push(r),
                            t._maskedBlocks[i] || (t._maskedBlocks[i] = []),
                            t._maskedBlocks[i].push(t._blocks.length - 1)),
                          (a += i.length - 1),
                          "continue"
                        )
                      }
                    })()
                  )
                    continue
                var s = u[a],
                  o = s in n
                if (s !== e.STOP_CHAR)
                  if ("{" !== s && "}" !== s)
                    if ("[" !== s && "]" !== s) {
                      if (s === e.ESCAPE_CHAR) {
                        if ((++a, !(s = u[a]))) break
                        o = !1
                      }
                      var l = o
                        ? new ve({
                            parent: this,
                            lazy: this.lazy,
                            placeholderChar: this.placeholderChar,
                            mask: n[s],
                            isOptional: r,
                          })
                        : new ge({ char: s, isUnmasking: i })
                      this._blocks.push(l)
                    } else r = !r
                  else i = !i
                else this._stops.push(this._blocks.length)
              }
          },
        },
        {
          key: "reset",
          value: function () {
            Wt(Yt(e.prototype), "reset", this).call(this),
              this._blocks.forEach(function (t) {
                return t.reset()
              })
          },
        },
        {
          key: "doCommit",
          value: function () {
            this._blocks.forEach(function (t) {
              return t.doCommit()
            }),
              Wt(Yt(e.prototype), "doCommit", this).call(this)
          },
        },
        {
          key: "appendTail",
          value: function (t) {
            return Wt(Yt(e.prototype), "appendTail", this)
              .call(this, t)
              .aggregate(this._appendPlaceholder())
          },
        },
        {
          key: "_appendCharRaw",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            t = this.doPrepare(t, e)
            var n = this._mapPosToBlock(this.value.length),
              u = new oe()
            if (!n) return u
            for (var i = n.index; ; ++i) {
              var r = this._blocks[i]
              if (!r) break
              var a = r._appendChar(t, e),
                s = a.skip
              if ((u.aggregate(a), s || a.rawInserted)) break
            }
            return u
          },
        },
        {
          key: "extractTail",
          value: function () {
            var t = this,
              e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length,
              u = new ke()
            return (
              e === n ||
                this._forEachBlocksInRange(e, n, function (e, n, i, r) {
                  var a = e.extractTail(i, r)
                  ;(a.stop = t._findStopBefore(n)),
                    (a.from = t._blockStartPos(n)),
                    a instanceof ke && (a.blockIndex = n),
                    u.extend(a)
                }),
              u
            )
          },
        },
        {
          key: "extractInput",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {}
            if (t === e) return ""
            var u = ""
            return (
              this._forEachBlocksInRange(t, e, function (t, e, i, r) {
                u += t.extractInput(i, r, n)
              }),
              u
            )
          },
        },
        {
          key: "_findStopBefore",
          value: function (t) {
            for (var e, n = 0; n < this._stops.length; ++n) {
              var u = this._stops[n]
              if (!(u <= t)) break
              e = u
            }
            return e
          },
        },
        {
          key: "_appendPlaceholder",
          value: function (t) {
            var e = this,
              n = new oe()
            if (this.lazy && null == t) return n
            var u = this._mapPosToBlock(this.value.length)
            if (!u) return n
            var i = u.index,
              r = null != t ? t : this._blocks.length
            return (
              this._blocks.slice(i, r).forEach(function (u) {
                if (!u.lazy || null != t) {
                  var i = null != u._blocks ? [u._blocks.length] : [],
                    r = u._appendPlaceholder.apply(u, i)
                  ;(e._value += r.inserted), n.aggregate(r)
                }
              }),
              n
            )
          },
        },
        {
          key: "_mapPosToBlock",
          value: function (t) {
            for (var e = "", n = 0; n < this._blocks.length; ++n) {
              var u = this._blocks[n],
                i = e.length
              if (t <= (e += u.value).length) return { index: n, offset: t - i }
            }
          },
        },
        {
          key: "_blockStartPos",
          value: function (t) {
            return this._blocks.slice(0, t).reduce(function (t, e) {
              return t + e.value.length
            }, 0)
          },
        },
        {
          key: "_forEachBlocksInRange",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length,
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = this._mapPosToBlock(t)
            if (u) {
              var i = this._mapPosToBlock(e),
                r = i && u.index === i.index,
                a = u.offset,
                s = i && r ? i.offset : this._blocks[u.index].value.length
              if ((n(this._blocks[u.index], u.index, a, s), i && !r)) {
                for (var o = u.index + 1; o < i.index; ++o)
                  n(this._blocks[o], o, 0, this._blocks[o].value.length)
                n(this._blocks[i.index], i.index, 0, i.offset)
              }
            }
          },
        },
        {
          key: "remove",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length,
              u = Wt(Yt(e.prototype), "remove", this).call(this, t, n)
            return (
              this._forEachBlocksInRange(t, n, function (t, e, n, i) {
                u.aggregate(t.remove(n, i))
              }),
              u
            )
          },
        },
        {
          key: "nearestInputPos",
          value: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : te,
              n = this._mapPosToBlock(t) || { index: 0, offset: 0 },
              u = n.offset,
              i = n.index,
              r = this._blocks[i]
            if (!r) return t
            var a = u
            0 !== a && a < r.value.length && (a = r.nearestInputPos(u, re(e)))
            var s = a === r.value.length,
              o = 0 === a
            if (!o && !s) return this._blockStartPos(i) + a
            var l = s ? i + 1 : i
            if (e === te) {
              if (l > 0) {
                var h = l - 1,
                  c = this._blocks[h],
                  f = c.nearestInputPos(0, te)
                if (!c.value.length || f !== c.value.length)
                  return this._blockStartPos(l)
              }
              for (var p = l, d = p; d < this._blocks.length; ++d) {
                var v = this._blocks[d],
                  g = v.nearestInputPos(0, te)
                if (!v.value.length || g !== v.value.length)
                  return this._blockStartPos(d) + g
              }
              for (var k = l - 1; k >= 0; --k) {
                var m = this._blocks[k],
                  y = m.nearestInputPos(0, te)
                if (!m.value.length || y !== m.value.length)
                  return this._blockStartPos(k) + m.value.length
              }
              return t
            }
            if (e === ee || e === ne) {
              for (var _, A = l; A < this._blocks.length; ++A)
                if (this._blocks[A].value) {
                  _ = A
                  break
                }
              if (null != _) {
                var b = this._blocks[_],
                  C = b.nearestInputPos(0, ue)
                if (0 === C && b.unmaskedValue.length)
                  return this._blockStartPos(_) + C
              }
              for (var E, F = -1, S = l - 1; S >= 0; --S) {
                var D = this._blocks[S],
                  w = D.nearestInputPos(D.value.length, ne)
                if (((D.value && 0 === w) || (E = S), 0 !== w)) {
                  if (w !== D.value.length) return this._blockStartPos(S) + w
                  F = S
                  break
                }
              }
              if (e === ee)
                for (
                  var B = F + 1;
                  B <= Math.min(l, this._blocks.length - 1);
                  ++B
                ) {
                  var x = this._blocks[B],
                    M = x.nearestInputPos(0, te),
                    P = this._blockStartPos(B) + M
                  if (P > t) break
                  if (M !== x.value.length) return P
                }
              if (F >= 0)
                return this._blockStartPos(F) + this._blocks[F].value.length
              if (
                e === ne ||
                (this.lazy && !this.extractInput() && !_e(this._blocks[l]))
              )
                return 0
              if (null != E) return this._blockStartPos(E)
              for (var O = l; O < this._blocks.length; ++O) {
                var T = this._blocks[O],
                  I = T.nearestInputPos(0, te)
                if (!T.value.length || I !== T.value.length)
                  return this._blockStartPos(O) + I
              }
              return 0
            }
            if (e === ue || e === ie) {
              for (var j, V, R = l; R < this._blocks.length; ++R) {
                var L = this._blocks[R],
                  N = L.nearestInputPos(0, te)
                if (N !== L.value.length) {
                  ;(V = this._blockStartPos(R) + N), (j = R)
                  break
                }
              }
              if (null != j && null != V) {
                for (var U = j; U < this._blocks.length; ++U) {
                  var z = this._blocks[U],
                    H = z.nearestInputPos(0, ie)
                  if (H !== z.value.length) return this._blockStartPos(U) + H
                }
                return e === ie ? this.value.length : V
              }
              for (var Y = Math.min(l, this._blocks.length - 1); Y >= 0; --Y) {
                var q = this._blocks[Y],
                  Z = q.nearestInputPos(q.value.length, ee)
                if (0 !== Z) {
                  var K = this._blockStartPos(Y) + Z
                  if (K >= t) return K
                  break
                }
              }
            }
            return t
          },
        },
        {
          key: "maskedBlock",
          value: function (t) {
            return this.maskedBlocks(t)[0]
          },
        },
        {
          key: "maskedBlocks",
          value: function (t) {
            var e = this,
              n = this._maskedBlocks[t]
            return n
              ? n.map(function (t) {
                  return e._blocks[t]
                })
              : []
          },
        },
        {
          key: "state",
          get: function () {
            return Object.assign({}, Wt(Yt(e.prototype), "state", this), {
              _blocks: this._blocks.map(function (t) {
                return t.state
              }),
            })
          },
          set: function (t) {
            var n = t._blocks,
              u = Zt(t, ["_blocks"])
            this._blocks.forEach(function (t, e) {
              return (t.state = n[e])
            }),
              Xt(Yt(e.prototype), "state", u, this, !0)
          },
        },
        {
          key: "isComplete",
          get: function () {
            return this._blocks.every(function (t) {
              return t.isComplete
            })
          },
        },
        {
          key: "unmaskedValue",
          get: function () {
            return this._blocks.reduce(function (t, e) {
              return t + e.unmaskedValue
            }, "")
          },
          set: function (t) {
            Xt(Yt(e.prototype), "unmaskedValue", t, this, !0)
          },
        },
        {
          key: "value",
          get: function () {
            return this._blocks.reduce(function (t, e) {
              return t + e.value
            }, "")
          },
          set: function (t) {
            Xt(Yt(e.prototype), "value", t, this, !0)
          },
        },
      ]),
      e
    )
  })(ce)
  function _e(t) {
    if (!t) return !1
    var e = t.value
    return !e || t.nearestInputPos(0, te) !== e.length
  }
  ;(ye.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
    (ye.STOP_CHAR = "`"),
    (ye.ESCAPE_CHAR = "\\"),
    (ye.InputDefinition = ve),
    (ye.FixedDefinition = ge),
    (he.MaskedPattern = ye)
  var Ae = (function (t) {
    function e() {
      return Nt(this, e), Kt(this, Yt(e).apply(this, arguments))
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function (t) {
            t = Object.assign({ to: this.to || 0, from: this.from || 0 }, t)
            var n = String(t.to).length
            null != t.maxLength && (n = Math.max(n, t.maxLength)),
              (t.maxLength = n)
            for (
              var u = String(t.from).padStart(n, "0"),
                i = String(t.to).padStart(n, "0"),
                r = 0;
              r < i.length && i[r] === u[r];

            )
              ++r
            ;(t.mask = i.slice(0, r).replace(/0/g, "\\0") + "0".repeat(n - r)),
              Wt(Yt(e.prototype), "_update", this).call(this, t)
          },
        },
        {
          key: "boundaries",
          value: function (t) {
            var e = "",
              n = "",
              u = Jt(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
              i = u[1],
              r = u[2]
            return (
              r &&
                ((e = "0".repeat(i.length) + r),
                (n = "9".repeat(i.length) + r)),
              [
                (e = e.padEnd(this.maxLength, "0")),
                (n = n.padEnd(this.maxLength, "9")),
              ]
            )
          },
        },
        {
          key: "doPrepare",
          value: function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            if (
              ((t = Wt(Yt(e.prototype), "doPrepare", this)
                .call(this, t, n)
                .replace(/\D/g, "")),
              !this.autofix)
            )
              return t
            for (
              var u = String(this.from).padStart(this.maxLength, "0"),
                i = String(this.to).padStart(this.maxLength, "0"),
                r = this.value,
                a = "",
                s = 0;
              s < t.length;
              ++s
            ) {
              var o = r + a + t[s],
                l = this.boundaries(o),
                h = Jt(l, 2),
                c = h[0],
                f = h[1]
              Number(f) < this.from
                ? (a += u[o.length - 1])
                : Number(c) > this.to
                ? (a += i[o.length - 1])
                : (a += t[s])
            }
            return a
          },
        },
        {
          key: "doValidate",
          value: function () {
            var t,
              n = this.value,
              u = n.search(/[^0]/)
            if (-1 === u && n.length <= this._matchFrom) return !0
            for (
              var i = this.boundaries(n),
                r = Jt(i, 2),
                a = r[0],
                s = r[1],
                o = arguments.length,
                l = new Array(o),
                h = 0;
              h < o;
              h++
            )
              l[h] = arguments[h]
            return (
              this.from <= Number(s) &&
              Number(a) <= this.to &&
              (t = Wt(Yt(e.prototype), "doValidate", this)).call.apply(
                t,
                [this].concat(l)
              )
            )
          },
        },
        {
          key: "_matchFrom",
          get: function () {
            return this.maxLength - String(this.from).length
          },
        },
        {
          key: "isComplete",
          get: function () {
            return (
              Wt(Yt(e.prototype), "isComplete", this) && Boolean(this.value)
            )
          },
        },
      ]),
      e
    )
  })(ye)
  he.MaskedRange = Ae
  var be = (function (t) {
    function e(t) {
      return (
        Nt(this, e),
        Kt(this, Yt(e).call(this, Object.assign({}, e.DEFAULTS, {}, t)))
      )
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function (t) {
            t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern)
            var n = t.blocks
            ;(t.blocks = Object.assign({}, e.GET_DEFAULT_BLOCKS())),
              t.min && (t.blocks.Y.from = t.min.getFullYear()),
              t.max && (t.blocks.Y.to = t.max.getFullYear()),
              t.min &&
                t.max &&
                t.blocks.Y.from === t.blocks.Y.to &&
                ((t.blocks.m.from = t.min.getMonth() + 1),
                (t.blocks.m.to = t.max.getMonth() + 1),
                t.blocks.m.from === t.blocks.m.to &&
                  ((t.blocks.d.from = t.min.getDate()),
                  (t.blocks.d.to = t.max.getDate()))),
              Object.assign(t.blocks, n),
              Object.keys(t.blocks).forEach(function (e) {
                var n = t.blocks[e]
                "autofix" in n || (n.autofix = t.autofix)
              }),
              Wt(Yt(e.prototype), "_update", this).call(this, t)
          },
        },
        {
          key: "doValidate",
          value: function () {
            for (
              var t,
                n = this.date,
                u = arguments.length,
                i = new Array(u),
                r = 0;
              r < u;
              r++
            )
              i[r] = arguments[r]
            return (
              (t = Wt(Yt(e.prototype), "doValidate", this)).call.apply(
                t,
                [this].concat(i)
              ) &&
              (!this.isComplete ||
                (this.isDateExist(this.value) &&
                  null != n &&
                  (null == this.min || this.min <= n) &&
                  (null == this.max || n <= this.max)))
            )
          },
        },
        {
          key: "isDateExist",
          value: function (t) {
            return this.format(this.parse(t, this), this).indexOf(t) >= 0
          },
        },
        {
          key: "date",
          get: function () {
            return this.typedValue
          },
          set: function (t) {
            this.typedValue = t
          },
        },
        {
          key: "typedValue",
          get: function () {
            return this.isComplete
              ? Wt(Yt(e.prototype), "typedValue", this)
              : null
          },
          set: function (t) {
            Xt(Yt(e.prototype), "typedValue", t, this, !0)
          },
        },
      ]),
      e
    )
  })(ye)
  ;(be.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: function (t) {
      return [
        String(t.getDate()).padStart(2, "0"),
        String(t.getMonth() + 1).padStart(2, "0"),
        t.getFullYear(),
      ].join(".")
    },
    parse: function (t) {
      var e = Jt(t.split("."), 3),
        n = e[0],
        u = e[1],
        i = e[2]
      return new Date(i, u - 1, n)
    },
  }),
    (be.GET_DEFAULT_BLOCKS = function () {
      return {
        d: { mask: Ae, from: 1, to: 31, maxLength: 2 },
        m: { mask: Ae, from: 1, to: 12, maxLength: 2 },
        Y: { mask: Ae, from: 1900, to: 9999 },
      }
    }),
    (he.MaskedDate = be)
  var Ce = (function () {
    function t() {
      Nt(this, t)
    }
    return (
      zt(t, [
        {
          key: "select",
          value: function (t, e) {
            if (
              null != t &&
              null != e &&
              (t !== this.selectionStart || e !== this.selectionEnd)
            )
              try {
                this._unsafeSelect(t, e)
              } catch (t) {}
          },
        },
        { key: "_unsafeSelect", value: function (t, e) {} },
        { key: "bindEvents", value: function (t) {} },
        { key: "unbindEvents", value: function () {} },
        {
          key: "selectionStart",
          get: function () {
            var t
            try {
              t = this._unsafeSelectionStart
            } catch (t) {}
            return null != t ? t : this.value.length
          },
        },
        {
          key: "selectionEnd",
          get: function () {
            var t
            try {
              t = this._unsafeSelectionEnd
            } catch (t) {}
            return null != t ? t : this.value.length
          },
        },
        {
          key: "isActive",
          get: function () {
            return !1
          },
        },
      ]),
      t
    )
  })()
  he.MaskElement = Ce
  var Ee = (function (t) {
    function e(t) {
      var n
      return (
        Nt(this, e),
        ((n = Kt(this, Yt(e).call(this))).input = t),
        (n._handlers = {}),
        n
      )
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_unsafeSelect",
          value: function (t, e) {
            this.input.setSelectionRange(t, e)
          },
        },
        {
          key: "bindEvents",
          value: function (t) {
            var n = this
            Object.keys(t).forEach(function (u) {
              return n._toggleEventHandler(e.EVENTS_MAP[u], t[u])
            })
          },
        },
        {
          key: "unbindEvents",
          value: function () {
            var t = this
            Object.keys(this._handlers).forEach(function (e) {
              return t._toggleEventHandler(e)
            })
          },
        },
        {
          key: "_toggleEventHandler",
          value: function (t, e) {
            this._handlers[t] &&
              (this.input.removeEventListener(t, this._handlers[t]),
              delete this._handlers[t]),
              e && (this.input.addEventListener(t, e), (this._handlers[t] = e))
          },
        },
        {
          key: "rootElement",
          get: function () {
            return this.input.getRootNode ? this.input.getRootNode() : document
          },
        },
        {
          key: "isActive",
          get: function () {
            return this.input === this.rootElement.activeElement
          },
        },
        {
          key: "_unsafeSelectionStart",
          get: function () {
            return this.input.selectionStart
          },
        },
        {
          key: "_unsafeSelectionEnd",
          get: function () {
            return this.input.selectionEnd
          },
        },
        {
          key: "value",
          get: function () {
            return this.input.value
          },
          set: function (t) {
            this.input.value = t
          },
        },
      ]),
      e
    )
  })(Ce)
  ;(Ee.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur",
  }),
    (he.HTMLMaskElement = Ee)
  var Fe = (function (t) {
    function e() {
      return Nt(this, e), Kt(this, Yt(e).apply(this, arguments))
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_unsafeSelect",
          value: function (t, e) {
            if (this.rootElement.createRange) {
              var n = this.rootElement.createRange()
              n.setStart(this.input.firstChild || this.input, t),
                n.setEnd(this.input.lastChild || this.input, e)
              var u = this.rootElement,
                i = u.getSelection && u.getSelection()
              i && (i.removeAllRanges(), i.addRange(n))
            }
          },
        },
        {
          key: "_unsafeSelectionStart",
          get: function () {
            var t = this.rootElement,
              e = t.getSelection && t.getSelection()
            return e && e.anchorOffset
          },
        },
        {
          key: "_unsafeSelectionEnd",
          get: function () {
            var t = this.rootElement,
              e = t.getSelection && t.getSelection()
            return e && this._unsafeSelectionStart + String(e).length
          },
        },
        {
          key: "value",
          get: function () {
            return this.input.textContent
          },
          set: function (t) {
            this.input.textContent = t
          },
        },
      ]),
      e
    )
  })(Ee)
  he.HTMLContenteditableMaskElement = Fe
  var Se = (function () {
    function t(e, n) {
      Nt(this, t),
        (this.el =
          e instanceof Ce
            ? e
            : e.isContentEditable &&
              "INPUT" !== e.tagName &&
              "TEXTAREA" !== e.tagName
            ? new Fe(e)
            : new Ee(e)),
        (this.masked = pe(n)),
        (this._listeners = {}),
        (this._value = ""),
        (this._unmaskedValue = ""),
        (this._saveSelection = this._saveSelection.bind(this)),
        (this._onInput = this._onInput.bind(this)),
        (this._onChange = this._onChange.bind(this)),
        (this._onDrop = this._onDrop.bind(this)),
        (this._onFocus = this._onFocus.bind(this)),
        (this._onClick = this._onClick.bind(this)),
        (this.alignCursor = this.alignCursor.bind(this)),
        (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
        this._bindEvents(),
        this.updateValue(),
        this._onChange()
    }
    return (
      zt(t, [
        {
          key: "maskEquals",
          value: function (t) {
            return (
              null == t ||
              t === this.masked.mask ||
              (t === Date && this.masked instanceof be)
            )
          },
        },
        {
          key: "_bindEvents",
          value: function () {
            this.el.bindEvents({
              selectionChange: this._saveSelection,
              input: this._onInput,
              drop: this._onDrop,
              click: this._onClick,
              focus: this._onFocus,
              commit: this._onChange,
            })
          },
        },
        {
          key: "_unbindEvents",
          value: function () {
            this.el && this.el.unbindEvents()
          },
        },
        {
          key: "_fireEvent",
          value: function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1;
              u < e;
              u++
            )
              n[u - 1] = arguments[u]
            var i = this._listeners[t]
            i &&
              i.forEach(function (t) {
                return t.apply(void 0, n)
              })
          },
        },
        {
          key: "_saveSelection",
          value: function () {
            this.value !== this.el.value &&
              console.warn(
                "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
              ),
              (this._selection = {
                start: this.selectionStart,
                end: this.cursorPos,
              })
          },
        },
        {
          key: "updateValue",
          value: function () {
            ;(this.masked.value = this.el.value),
              (this._value = this.masked.value)
          },
        },
        {
          key: "updateControl",
          value: function () {
            var t = this.masked.unmaskedValue,
              e = this.masked.value,
              n = this.unmaskedValue !== t || this.value !== e
            ;(this._unmaskedValue = t),
              (this._value = e),
              this.el.value !== e && (this.el.value = e),
              n && this._fireChangeEvents()
          },
        },
        {
          key: "updateOptions",
          value: function (t) {
            var e = t.mask,
              n = Zt(t, ["mask"]),
              u = !this.maskEquals(e),
              i = !(function t(e, n) {
                if (n === e) return !0
                var u,
                  i = Array.isArray(n),
                  r = Array.isArray(e)
                if (i && r) {
                  if (n.length != e.length) return !1
                  for (u = 0; u < n.length; u++) if (!t(n[u], e[u])) return !1
                  return !0
                }
                if (i != r) return !1
                if (n && e && "object" === Lt(n) && "object" === Lt(e)) {
                  var a = n instanceof Date,
                    s = e instanceof Date
                  if (a && s) return n.getTime() == e.getTime()
                  if (a != s) return !1
                  var o = n instanceof RegExp,
                    l = e instanceof RegExp
                  if (o && l) return n.toString() == e.toString()
                  if (o != l) return !1
                  var h = Object.keys(n)
                  for (u = 0; u < h.length; u++)
                    if (!Object.prototype.hasOwnProperty.call(e, h[u]))
                      return !1
                  for (u = 0; u < h.length; u++)
                    if (!t(e[h[u]], n[h[u]])) return !1
                  return !0
                }
                return (
                  !(
                    !n ||
                    !e ||
                    "function" != typeof n ||
                    "function" != typeof e
                  ) && n.toString() === e.toString()
                )
              })(this.masked, n)
            u && (this.mask = e),
              i && this.masked.updateOptions(n),
              (u || i) && this.updateControl()
          },
        },
        {
          key: "updateCursor",
          value: function (t) {
            null != t && ((this.cursorPos = t), this._delayUpdateCursor(t))
          },
        },
        {
          key: "_delayUpdateCursor",
          value: function (t) {
            var e = this
            this._abortUpdateCursor(),
              (this._changingCursorPos = t),
              (this._cursorChanging = setTimeout(function () {
                e.el &&
                  ((e.cursorPos = e._changingCursorPos), e._abortUpdateCursor())
              }, 10))
          },
        },
        {
          key: "_fireChangeEvents",
          value: function () {
            this._fireEvent("accept", this._inputEvent),
              this.masked.isComplete &&
                this._fireEvent("complete", this._inputEvent)
          },
        },
        {
          key: "_abortUpdateCursor",
          value: function () {
            this._cursorChanging &&
              (clearTimeout(this._cursorChanging), delete this._cursorChanging)
          },
        },
        {
          key: "alignCursor",
          value: function () {
            this.cursorPos = this.masked.nearestInputPos(this.cursorPos, ee)
          },
        },
        {
          key: "alignCursorFriendly",
          value: function () {
            this.selectionStart === this.cursorPos && this.alignCursor()
          },
        },
        {
          key: "on",
          value: function (t, e) {
            return (
              this._listeners[t] || (this._listeners[t] = []),
              this._listeners[t].push(e),
              this
            )
          },
        },
        {
          key: "off",
          value: function (t, e) {
            if (!this._listeners[t]) return this
            if (!e) return delete this._listeners[t], this
            var n = this._listeners[t].indexOf(e)
            return n >= 0 && this._listeners[t].splice(n, 1), this
          },
        },
        {
          key: "_onInput",
          value: function (t) {
            if (
              ((this._inputEvent = t),
              this._abortUpdateCursor(),
              !this._selection)
            )
              return this.updateValue()
            var e = new se(
                this.el.value,
                this.cursorPos,
                this.value,
                this._selection
              ),
              n = this.masked.rawInputValue,
              u = this.masked.splice(
                e.startChangePos,
                e.removed.length,
                e.inserted,
                e.removeDirection
              ).offset,
              i = n === this.masked.rawInputValue ? e.removeDirection : te,
              r = this.masked.nearestInputPos(e.startChangePos + u, i)
            this.updateControl(), this.updateCursor(r), delete this._inputEvent
          },
        },
        {
          key: "_onChange",
          value: function () {
            this.value !== this.el.value && this.updateValue(),
              this.masked.doCommit(),
              this.updateControl(),
              this._saveSelection()
          },
        },
        {
          key: "_onDrop",
          value: function (t) {
            t.preventDefault(), t.stopPropagation()
          },
        },
        {
          key: "_onFocus",
          value: function (t) {
            this.alignCursorFriendly()
          },
        },
        {
          key: "_onClick",
          value: function (t) {
            this.alignCursorFriendly()
          },
        },
        {
          key: "destroy",
          value: function () {
            this._unbindEvents(), (this._listeners.length = 0), delete this.el
          },
        },
        {
          key: "mask",
          get: function () {
            return this.masked.mask
          },
          set: function (t) {
            if (!this.maskEquals(t))
              if (t instanceof he.Masked || this.masked.constructor !== fe(t)) {
                var e = pe({ mask: t })
                ;(e.unmaskedValue = this.masked.unmaskedValue),
                  (this.masked = e)
              } else this.masked.updateOptions({ mask: t })
          },
        },
        {
          key: "value",
          get: function () {
            return this._value
          },
          set: function (t) {
            ;(this.masked.value = t), this.updateControl(), this.alignCursor()
          },
        },
        {
          key: "unmaskedValue",
          get: function () {
            return this._unmaskedValue
          },
          set: function (t) {
            ;(this.masked.unmaskedValue = t),
              this.updateControl(),
              this.alignCursor()
          },
        },
        {
          key: "typedValue",
          get: function () {
            return this.masked.typedValue
          },
          set: function (t) {
            ;(this.masked.typedValue = t),
              this.updateControl(),
              this.alignCursor()
          },
        },
        {
          key: "selectionStart",
          get: function () {
            return this._cursorChanging
              ? this._changingCursorPos
              : this.el.selectionStart
          },
        },
        {
          key: "cursorPos",
          get: function () {
            return this._cursorChanging
              ? this._changingCursorPos
              : this.el.selectionEnd
          },
          set: function (t) {
            this.el &&
              this.el.isActive &&
              (this.el.select(t, t), this._saveSelection())
          },
        },
      ]),
      t
    )
  })()
  he.InputMask = Se
  var De = (function (t) {
    function e() {
      return Nt(this, e), Kt(this, Yt(e).apply(this, arguments))
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function (t) {
            t.enum && (t.mask = "*".repeat(t.enum[0].length)),
              Wt(Yt(e.prototype), "_update", this).call(this, t)
          },
        },
        {
          key: "doValidate",
          value: function () {
            for (
              var t, n = this, u = arguments.length, i = new Array(u), r = 0;
              r < u;
              r++
            )
              i[r] = arguments[r]
            return (
              this.enum.some(function (t) {
                return t.indexOf(n.unmaskedValue) >= 0
              }) &&
              (t = Wt(Yt(e.prototype), "doValidate", this)).call.apply(
                t,
                [this].concat(i)
              )
            )
          },
        },
      ]),
      e
    )
  })(ye)
  he.MaskedEnum = De
  var we = (function (t) {
    function e(t) {
      return (
        Nt(this, e),
        Kt(this, Yt(e).call(this, Object.assign({}, e.DEFAULTS, {}, t)))
      )
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function (t) {
            Wt(Yt(e.prototype), "_update", this).call(this, t),
              this._updateRegExps()
          },
        },
        {
          key: "_updateRegExps",
          value: function () {
            var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
              e =
                (this.scale
                  ? "(" + ae(this.radix) + "\\d{0," + this.scale + "})?"
                  : "") + "$"
            ;(this._numberRegExpInput = new RegExp(
              t + "(0|([1-9]+\\d*))?" + e
            )),
              (this._numberRegExp = new RegExp(t + "\\d*" + e)),
              (this._mapToRadixRegExp = new RegExp(
                "[" + this.mapToRadix.map(ae).join("") + "]",
                "g"
              )),
              (this._thousandsSeparatorRegExp = new RegExp(
                ae(this.thousandsSeparator),
                "g"
              ))
          },
        },
        {
          key: "_removeThousandsSeparators",
          value: function (t) {
            return t.replace(this._thousandsSeparatorRegExp, "")
          },
        },
        {
          key: "_insertThousandsSeparators",
          value: function (t) {
            var e = t.split(this.radix)
            return (
              (e[0] = e[0].replace(
                /\B(?=(\d{3})+(?!\d))/g,
                this.thousandsSeparator
              )),
              e.join(this.radix)
            )
          },
        },
        {
          key: "doPrepare",
          value: function (t) {
            for (
              var n,
                u = arguments.length,
                i = new Array(u > 1 ? u - 1 : 0),
                r = 1;
              r < u;
              r++
            )
              i[r - 1] = arguments[r]
            return (n = Wt(Yt(e.prototype), "doPrepare", this)).call.apply(
              n,
              [
                this,
                this._removeThousandsSeparators(
                  t.replace(this._mapToRadixRegExp, this.radix)
                ),
              ].concat(i)
            )
          },
        },
        {
          key: "_separatorsCount",
          value: function (t) {
            for (
              var e =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = 0,
                u = 0;
              u < t;
              ++u
            )
              this._value.indexOf(this.thousandsSeparator, u) === u &&
                (++n, e && (t += this.thousandsSeparator.length))
            return n
          },
        },
        {
          key: "_separatorsCountFromSlice",
          value: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this._value
            return this._separatorsCount(
              this._removeThousandsSeparators(t).length,
              !0
            )
          },
        },
        {
          key: "extractInput",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length,
              u = arguments.length > 2 ? arguments[2] : void 0,
              i = this._adjustRangeWithSeparators(t, n),
              r = Jt(i, 2)
            return (
              (t = r[0]),
              (n = r[1]),
              this._removeThousandsSeparators(
                Wt(Yt(e.prototype), "extractInput", this).call(this, t, n, u)
              )
            )
          },
        },
        {
          key: "_appendCharRaw",
          value: function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            if (!this.thousandsSeparator)
              return Wt(Yt(e.prototype), "_appendCharRaw", this).call(
                this,
                t,
                n
              )
            var u =
                n.tail && n._beforeTailState
                  ? n._beforeTailState._value
                  : this._value,
              i = this._separatorsCountFromSlice(u)
            this._value = this._removeThousandsSeparators(this.value)
            var r = Wt(Yt(e.prototype), "_appendCharRaw", this).call(this, t, n)
            this._value = this._insertThousandsSeparators(this._value)
            var a =
                n.tail && n._beforeTailState
                  ? n._beforeTailState._value
                  : this._value,
              s = this._separatorsCountFromSlice(a)
            return (
              (r.tailShift += (s - i) * this.thousandsSeparator.length),
              (r.skip = !r.rawInserted && t === this.thousandsSeparator),
              r
            )
          },
        },
        {
          key: "_findSeparatorAround",
          value: function (t) {
            if (this.thousandsSeparator) {
              var e = t - this.thousandsSeparator.length + 1,
                n = this.value.indexOf(this.thousandsSeparator, e)
              if (n <= t) return n
            }
            return -1
          },
        },
        {
          key: "_adjustRangeWithSeparators",
          value: function (t, e) {
            var n = this._findSeparatorAround(t)
            n >= 0 && (t = n)
            var u = this._findSeparatorAround(e)
            return u >= 0 && (e = u + this.thousandsSeparator.length), [t, e]
          },
        },
        {
          key: "remove",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.value.length,
              n = this._adjustRangeWithSeparators(t, e),
              u = Jt(n, 2)
            ;(t = u[0]), (e = u[1])
            var i = this.value.slice(0, t),
              r = this.value.slice(e),
              a = this._separatorsCount(i.length)
            this._value = this._insertThousandsSeparators(
              this._removeThousandsSeparators(i + r)
            )
            var s = this._separatorsCountFromSlice(i)
            return new oe({
              tailShift: (s - a) * this.thousandsSeparator.length,
            })
          },
        },
        {
          key: "nearestInputPos",
          value: function (t, e) {
            if (!this.thousandsSeparator) return t
            switch (e) {
              case te:
              case ee:
              case ne:
                var n = this._findSeparatorAround(t - 1)
                if (n >= 0) {
                  var u = n + this.thousandsSeparator.length
                  if (t < u || this.value.length <= u || e === ne) return n
                }
                break
              case ue:
              case ie:
                var i = this._findSeparatorAround(t)
                if (i >= 0) return i + this.thousandsSeparator.length
            }
            return t
          },
        },
        {
          key: "doValidate",
          value: function (t) {
            var n = (
              t.input ? this._numberRegExpInput : this._numberRegExp
            ).test(this._removeThousandsSeparators(this.value))
            if (n) {
              var u = this.number
              n =
                n &&
                !isNaN(u) &&
                (null == this.min ||
                  this.min >= 0 ||
                  this.min <= this.number) &&
                (null == this.max || this.max <= 0 || this.number <= this.max)
            }
            return n && Wt(Yt(e.prototype), "doValidate", this).call(this, t)
          },
        },
        {
          key: "doCommit",
          value: function () {
            if (this.value) {
              var t = this.number,
                n = t
              null != this.min && (n = Math.max(n, this.min)),
                null != this.max && (n = Math.min(n, this.max)),
                n !== t && (this.unmaskedValue = String(n))
              var u = this.value
              this.normalizeZeros && (u = this._normalizeZeros(u)),
                this.padFractionalZeros && (u = this._padFractionalZeros(u)),
                (this._value = u)
            }
            Wt(Yt(e.prototype), "doCommit", this).call(this)
          },
        },
        {
          key: "_normalizeZeros",
          value: function (t) {
            var e = this._removeThousandsSeparators(t).split(this.radix)
            return (
              (e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, u) {
                return e + u
              })),
              t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"),
              e.length > 1 &&
                ((e[1] = e[1].replace(/0*$/, "")),
                e[1].length || (e.length = 1)),
              this._insertThousandsSeparators(e.join(this.radix))
            )
          },
        },
        {
          key: "_padFractionalZeros",
          value: function (t) {
            if (!t) return t
            var e = t.split(this.radix)
            return (
              e.length < 2 && e.push(""),
              (e[1] = e[1].padEnd(this.scale, "0")),
              e.join(this.radix)
            )
          },
        },
        {
          key: "unmaskedValue",
          get: function () {
            return this._removeThousandsSeparators(
              this._normalizeZeros(this.value)
            ).replace(this.radix, ".")
          },
          set: function (t) {
            Xt(
              Yt(e.prototype),
              "unmaskedValue",
              t.replace(".", this.radix),
              this,
              !0
            )
          },
        },
        {
          key: "typedValue",
          get: function () {
            return Number(this.unmaskedValue)
          },
          set: function (t) {
            Xt(Yt(e.prototype), "unmaskedValue", String(t), this, !0)
          },
        },
        {
          key: "number",
          get: function () {
            return this.typedValue
          },
          set: function (t) {
            this.typedValue = t
          },
        },
        {
          key: "allowNegative",
          get: function () {
            return (
              this.signed ||
              (null != this.min && this.min < 0) ||
              (null != this.max && this.max < 0)
            )
          },
        },
      ]),
      e
    )
  })(ce)
  ;(we.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: ["."],
    scale: 2,
    signed: !1,
    normalizeZeros: !0,
    padFractionalZeros: !1,
  }),
    (he.MaskedNumber = we)
  var Be = (function (t) {
    function e() {
      return Nt(this, e), Kt(this, Yt(e).apply(this, arguments))
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function (t) {
            t.mask && (t.validate = t.mask),
              Wt(Yt(e.prototype), "_update", this).call(this, t)
          },
        },
      ]),
      e
    )
  })(ce)
  he.MaskedFunction = Be
  var xe = (function (t) {
    function e(t) {
      var n
      return (
        Nt(this, e),
        ((n = Kt(
          this,
          Yt(e).call(this, Object.assign({}, e.DEFAULTS, {}, t))
        )).currentMask = null),
        n
      )
    }
    return (
      Ht(e, t),
      zt(e, [
        {
          key: "_update",
          value: function (t) {
            Wt(Yt(e.prototype), "_update", this).call(this, t),
              "mask" in t &&
                (this.compiledMasks = Array.isArray(t.mask)
                  ? t.mask.map(function (t) {
                      return pe(t)
                    })
                  : [])
          },
        },
        {
          key: "_appendCharRaw",
          value: function () {
            var t,
              e = this._applyDispatch.apply(this, arguments)
            this.currentMask &&
              e.aggregate(
                (t = this.currentMask)._appendChar.apply(t, arguments)
              )
            return e
          },
        },
        {
          key: "_applyDispatch",
          value: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                e.tail && null != e._beforeTailState
                  ? e._beforeTailState._value
                  : this.value,
              u = this.rawInputValue,
              i =
                e.tail && null != e._beforeTailState
                  ? e._beforeTailState._rawInputValue
                  : u,
              r = u.slice(i.length),
              a = this.currentMask,
              s = new oe(),
              o = a && a.state
            if (
              ((this.currentMask = this.doDispatch(t, Object.assign({}, e))),
              this.currentMask)
            )
              if (this.currentMask !== a) {
                this.currentMask.reset()
                var l = this.currentMask.append(i, { raw: !0 })
                ;(s.tailShift = l.inserted.length - n.length),
                  r &&
                    (s.tailShift += this.currentMask.append(r, {
                      raw: !0,
                      tail: !0,
                    }).tailShift)
              } else this.currentMask.state = o
            return s
          },
        },
        {
          key: "_appendPlaceholder",
          value: function () {
            var t = this._applyDispatch.apply(this, arguments)
            return (
              this.currentMask &&
                t.aggregate(this.currentMask._appendPlaceholder()),
              t
            )
          },
        },
        {
          key: "doDispatch",
          value: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            return this.dispatch(t, this, e)
          },
        },
        {
          key: "doValidate",
          value: function () {
            for (
              var t, n, u = arguments.length, i = new Array(u), r = 0;
              r < u;
              r++
            )
              i[r] = arguments[r]
            return (
              (t = Wt(Yt(e.prototype), "doValidate", this)).call.apply(
                t,
                [this].concat(i)
              ) &&
              (!this.currentMask ||
                (n = this.currentMask).doValidate.apply(n, i))
            )
          },
        },
        {
          key: "reset",
          value: function () {
            this.currentMask && this.currentMask.reset(),
              this.compiledMasks.forEach(function (t) {
                return t.reset()
              })
          },
        },
        {
          key: "remove",
          value: function () {
            var t,
              e = new oe()
            this.currentMask &&
              e
                .aggregate((t = this.currentMask).remove.apply(t, arguments))
                .aggregate(this._applyDispatch())
            return e
          },
        },
        {
          key: "extractInput",
          value: function () {
            var t
            return this.currentMask
              ? (t = this.currentMask).extractInput.apply(t, arguments)
              : ""
          },
        },
        {
          key: "extractTail",
          value: function () {
            for (
              var t, n, u = arguments.length, i = new Array(u), r = 0;
              r < u;
              r++
            )
              i[r] = arguments[r]
            return this.currentMask
              ? (t = this.currentMask).extractTail.apply(t, i)
              : (n = Wt(Yt(e.prototype), "extractTail", this)).call.apply(
                  n,
                  [this].concat(i)
                )
          },
        },
        {
          key: "doCommit",
          value: function () {
            this.currentMask && this.currentMask.doCommit(),
              Wt(Yt(e.prototype), "doCommit", this).call(this)
          },
        },
        {
          key: "nearestInputPos",
          value: function () {
            for (
              var t, n, u = arguments.length, i = new Array(u), r = 0;
              r < u;
              r++
            )
              i[r] = arguments[r]
            return this.currentMask
              ? (t = this.currentMask).nearestInputPos.apply(t, i)
              : (n = Wt(Yt(e.prototype), "nearestInputPos", this)).call.apply(
                  n,
                  [this].concat(i)
                )
          },
        },
        {
          key: "value",
          get: function () {
            return this.currentMask ? this.currentMask.value : ""
          },
          set: function (t) {
            Xt(Yt(e.prototype), "value", t, this, !0)
          },
        },
        {
          key: "unmaskedValue",
          get: function () {
            return this.currentMask ? this.currentMask.unmaskedValue : ""
          },
          set: function (t) {
            Xt(Yt(e.prototype), "unmaskedValue", t, this, !0)
          },
        },
        {
          key: "typedValue",
          get: function () {
            return this.currentMask ? this.currentMask.typedValue : ""
          },
          set: function (t) {
            var e = String(t)
            this.currentMask &&
              ((this.currentMask.typedValue = t),
              (e = this.currentMask.unmaskedValue)),
              (this.unmaskedValue = e)
          },
        },
        {
          key: "isComplete",
          get: function () {
            return !!this.currentMask && this.currentMask.isComplete
          },
        },
        {
          key: "state",
          get: function () {
            return Object.assign({}, Wt(Yt(e.prototype), "state", this), {
              _rawInputValue: this.rawInputValue,
              compiledMasks: this.compiledMasks.map(function (t) {
                return t.state
              }),
              currentMaskRef: this.currentMask,
              currentMask: this.currentMask && this.currentMask.state,
            })
          },
          set: function (t) {
            var n = t.compiledMasks,
              u = t.currentMaskRef,
              i = t.currentMask,
              r = Zt(t, ["compiledMasks", "currentMaskRef", "currentMask"])
            this.compiledMasks.forEach(function (t, e) {
              return (t.state = n[e])
            }),
              null != u &&
                ((this.currentMask = u), (this.currentMask.state = i)),
              Xt(Yt(e.prototype), "state", r, this, !0)
          },
        },
        {
          key: "overwrite",
          get: function () {
            return this.currentMask
              ? this.currentMask.overwrite
              : Wt(Yt(e.prototype), "overwrite", this)
          },
          set: function (t) {
            console.warn(
              '"overwrite" option is not available in dynamic mask, use this option in siblings'
            )
          },
        },
      ]),
      e
    )
  })(ce)
  ;(xe.DEFAULTS = {
    dispatch: function (t, e, n) {
      if (e.compiledMasks.length) {
        var u = e.rawInputValue,
          i = e.compiledMasks.map(function (e, i) {
            return (
              e.reset(),
              e.append(u, { raw: !0 }),
              e.append(t, n),
              { weight: e.rawInputValue.length, index: i }
            )
          })
        return (
          i.sort(function (t, e) {
            return e.weight - t.weight
          }),
          e.compiledMasks[i[0].index]
        )
      }
    },
  }),
    (he.MaskedDynamic = xe)
  var Me = { MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue" }
  function Pe(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Me.MASKED,
      n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : Me.MASKED,
      u = pe(t)
    return function (t) {
      return u.runIsolated(function (u) {
        return (u[e] = t), u[n]
      })
    }
  }
  function Oe(t) {
    for (
      var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1;
      u < e;
      u++
    )
      n[u - 1] = arguments[u]
    return Pe.apply(void 0, n)(t)
  }
  ;(he.PIPE_TYPE = Me), (he.createPipe = Pe), (he.pipe = Oe)
  try {
    globalThis.IMask = he
  } catch (t) {}
  ;(t.HTMLContenteditableMaskElement = Fe),
    (t.HTMLMaskElement = Ee),
    (t.InputMask = Se),
    (t.MaskElement = Ce),
    (t.Masked = ce),
    (t.MaskedDate = be),
    (t.MaskedDynamic = xe),
    (t.MaskedEnum = De),
    (t.MaskedFunction = Be),
    (t.MaskedNumber = we),
    (t.MaskedPattern = ye),
    (t.MaskedRange = Ae),
    (t.MaskedRegExp = me),
    (t.PIPE_TYPE = Me),
    (t.createMask = pe),
    (t.createPipe = Pe),
    (t.default = he),
    (t.pipe = Oe),
    Object.defineProperty(t, "__esModule", { value: !0 })
})
