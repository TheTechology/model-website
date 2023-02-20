/*! For license information please see main.d0984d3f.js.LICENSE.txt */
!(function () {
  var e = {
      843: function (e) {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (a) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (var i, l, s = a(e), u = 1; u < arguments.length; u++) {
                for (var c in (i = Object(arguments[u])))
                  n.call(i, c) && (s[c] = i[c]);
                if (t) {
                  l = t(i);
                  for (var f = 0; f < l.length; f++)
                    r.call(i, l[f]) && (s[l[f]] = i[l[f]]);
                }
              }
              return s;
            };
      },
      729: function (e, t, n) {
        "use strict";
        var r = n(165);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      192: function (e, t, n) {
        e.exports = n(729)();
      },
      165: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      534: function (e, t, n) {
        "use strict";
        var r = n(313),
          a = n(224);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          T = Symbol.for("react.profiler"),
          j = Symbol.for("react.provider"),
          A = Symbol.for("react.context"),
          O = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          C = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function I(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          J = Object.assign;
        function V(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var U = !1;
        function z(e, t) {
          if (!e || U) return "";
          U = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? V(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V("Lazy");
            case 13:
              return V("Suspense");
            case 19:
              return V("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function F(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case T:
              return "Profiler";
            case E:
              return "StrictMode";
            case P:
              return "Suspense";
            case C:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case A:
                return (e.displayName || "Context") + ".Consumer";
              case j:
                return (e._context.displayName || "Context") + ".Provider";
              case O:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : F(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return F(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return F(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function _(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function H(e, t) {
          var n = t.checked;
          return J({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          K(e, t);
          var n = q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + q(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return J({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: q(n) };
        }
        function oe(e, t) {
          var n = q(t.value),
            r = q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = J(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Te(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function je(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ae() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Te(e), t))
              for (e = 0; e < t.length; e++) Te(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Pe() {}
        var Ce = !1;
        function Ne(e, t, n) {
          if (Ce) return e(t, n);
          Ce = !0;
          try {
            return Oe(e, t, n);
          } finally {
            (Ce = !1), (null !== Se || null !== Ee) && (Pe(), Ae());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (c)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ce) {
            Me = !1;
          }
        function Ie(e, t, n, r, a, o, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Je = null,
          Ve = !1,
          Ue = null,
          ze = {
            onError: function (e) {
              (De = !0), (Je = e);
            },
          };
        function Be(e, t, n, r, a, o, i, l, s) {
          (De = !1), (Je = null), Ie.apply(ze, arguments);
        }
        function Fe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function qe(e) {
          if (Fe(e) !== e) throw Error(o(188));
        }
        function Ge(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Fe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return qe(a), e;
                    if (i === r) return qe(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? _e(e)
            : null;
        }
        function _e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = _e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ze = a.unstable_cancelCallback,
          He = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          kt,
          St,
          Et,
          Tt,
          jt = !1,
          At = [],
          Ot = null,
          Pt = null,
          Ct = null,
          Nt = new Map(),
          Rt = new Map(),
          Mt = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ot = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ct = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Jt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Fe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Tt(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Vt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ht(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ut(e, t, n) {
          Vt(e) && n.delete(t);
        }
        function zt() {
          (jt = !1),
            null !== Ot && Vt(Ot) && (Ot = null),
            null !== Pt && Vt(Pt) && (Pt = null),
            null !== Ct && Vt(Ct) && (Ct = null),
            Nt.forEach(Ut),
            Rt.forEach(Ut);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            jt ||
              ((jt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Ft(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < At.length) {
            Bt(At[0], e);
            for (var n = 1; n < At.length; n++) {
              var r = At[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Ot && Bt(Ot, e),
              null !== Pt && Bt(Pt, e),
              null !== Ct && Bt(Ct, e),
              Nt.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Jt(n), null === n.blockedOn && Mt.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          qt = !0;
        function Gt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function _t(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (qt) {
            var a = Ht(e, t, n, r);
            if (null === a) qr(e, t, r, Zt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Ot = Dt(Ot, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ct = Dt(Ct, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Nt.set(o, Dt(Nt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Rt.set(o, Dt(Rt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Ht(e, t, n, r)) && qr(e, t, r, Zt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else qr(e, t, r, null, n);
          }
        }
        var Zt = null;
        function Ht(e, t, n, r) {
          if (((Zt = null), null !== (e = ga((e = we(r))))))
            if (null === (t = Fe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Zt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Xt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            J(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = J({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = J({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Tn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(J({}, pn, { dataTransfer: 0 })),
          mn = an(J({}, fn, { relatedTarget: 0 })),
          yn = an(
            J({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = J({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          xn = an(J({}, un, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Tn() {
          return En;
        }
        var jn = J({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Tn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          An = an(jn),
          On = an(
            J({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = an(
            J({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Tn,
            })
          ),
          Cn = an(
            J({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = J({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(Nn),
          Mn = [9, 13, 27, 32],
          Ln = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var Dn = c && "TextEvent" in window && !In,
          Jn = c && (!Ln || (In && 8 < In && 11 >= In)),
          Vn = String.fromCharCode(32),
          Un = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Fn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function qn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Gn(e, t, n, r) {
          je(r),
            0 < (t = _r(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var _n = null,
          Qn = null;
        function Zn(e) {
          Vr(e, 0);
        }
        function Hn(e) {
          if (Q(xa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Xn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Xn = $n;
          } else Xn = !1;
          Kn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          _n && (_n.detachEvent("onpropertychange", nr), (Qn = _n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Hn(Qn)) {
            var t = [];
            Gn(t, Qn, e, we(e)), Ne(Zn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (_n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Hn(Qn);
        }
        function or(e, t) {
          if ("click" === e) return Hn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Hn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== Z(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && sr(gr, r)) ||
              ((gr = r),
              0 < (r = _r(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Tr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var jr = Tr("animationend"),
          Ar = Tr("animationiteration"),
          Or = Tr("animationstart"),
          Pr = Tr("transitionend"),
          Cr = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Cr.set(e, t), s(t, [e]);
        }
        for (var Mr = 0; Mr < Nr.length; Mr++) {
          var Lr = Nr[Mr];
          Rr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Rr(jr, "onAnimationEnd"),
          Rr(Ar, "onAnimationIteration"),
          Rr(Or, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ir)
          );
        function Jr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, s, u) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(o(198));
                var c = Je;
                (De = !1), (Je = null), Ve || ((Ve = !0), (Ue = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Vr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && a.isPropagationStopped()))
                    break e;
                  Jr(a, l, u), (o = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && a.isPropagationStopped())
                  )
                    break e;
                  Jr(a, l, u), (o = s);
                }
            }
          }
          if (Ve) throw ((e = Ue), (Ve = !1), (Ue = null), e);
        }
        function Ur(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Fr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), zr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = Gt;
              break;
            case 4:
              a = _t;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function qr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ga(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = o,
              a = we(n),
              i = [];
            e: {
              var l = Cr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = An;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case jr:
                  case Ar:
                  case Or:
                    s = yn;
                    break;
                  case Pr:
                    s = Cn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = On;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Re(h, d)) &&
                        c.push(Gr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ga(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ga(u)
                          : null) &&
                        (u !== (f = Fe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = On),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : xa(s)),
                  (p = null == u ? l : xa(u)),
                  ((l = new c(v, h + "leave", s, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, v = d; v; v = Qr(v)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Qr(c)), (d = Qr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Zr(i, l, s, c, !1),
                  null !== u && null !== f && Zr(i, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? xa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Yn;
              else if (qn(l))
                if (Kn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? Gn(i, m, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (qn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, a);
              }
              var g;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Fn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Jn &&
                  "ko" !== n.locale &&
                  (Fn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Fn && (g = en())
                    : ((Xt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Fn = !0))),
                0 < (y = _r(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Bn(n)) && (b.data = g))),
                (g = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Un = !0), Vn);
                        case "textInput":
                          return (e = t.data) === Vn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Fn)
                        return "compositionend" === e || (!Ln && zn(e, t))
                          ? ((e = en()), ($t = Xt = Kt = null), (Fn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Jn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = _r(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Vr(i, t);
          });
        }
        function Gr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function _r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Re(e, n)) && r.unshift(Gr(e, o, a)),
              null != (o = Re(e, t)) && r.push(Gr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Zr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Re(n, o)) && i.unshift(Gr(n, s, l))
                : a || (null != (s = Re(n, o)) && i.push(Gr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Hr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Hr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(o(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ft(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ft(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ta(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function ja(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Aa = {},
          Oa = Ea(Aa),
          Pa = Ea(!1),
          Ca = Aa;
        function Na(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Aa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ma() {
          Ta(Pa), Ta(Oa);
        }
        function La(e, t, n) {
          if (Oa.current !== Aa) throw Error(o(168));
          ja(Oa, t), ja(Pa, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return J({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Aa),
            (Ca = Oa.current),
            ja(Oa, e),
            ja(Pa, Pa.current),
            !0
          );
        }
        function Ja(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ia(e, t, Ca)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ta(Pa),
              Ta(Oa),
              ja(Oa, e))
            : Ta(Pa),
            ja(Pa, n);
        }
        var Va = null,
          Ua = !1,
          za = !1;
        function Ba(e) {
          null === Va ? (Va = [e]) : Va.push(e);
        }
        function Fa() {
          if (!za && null !== Va) {
            za = !0;
            var e = 0,
              t = bt;
            try {
              var n = Va;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Va = null), (Ua = !1);
            } catch (a) {
              throw (null !== Va && (Va = Va.slice(e + 1)), Qe($e, Fa), a);
            } finally {
              (bt = t), (za = !1);
            }
          }
          return null;
        }
        var Wa = [],
          qa = 0,
          Ga = null,
          _a = 0,
          Qa = [],
          Za = 0,
          Ha = null,
          Ya = 1,
          Ka = "";
        function Xa(e, t) {
          (Wa[qa++] = _a), (Wa[qa++] = Ga), (Ga = e), (_a = t);
        }
        function $a(e, t, n) {
          (Qa[Za++] = Ya), (Qa[Za++] = Ka), (Qa[Za++] = Ha), (Ha = e);
          var r = Ya;
          e = Ka;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ka = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Ka = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), $a(e, 1, 0));
        }
        function to(e) {
          for (; e === Ga; )
            (Ga = Wa[--qa]), (Wa[qa] = null), (_a = Wa[--qa]), (Wa[qa] = null);
          for (; e === Ha; )
            (Ha = Qa[--Za]),
              (Qa[Za] = null),
              (Ka = Qa[--Za]),
              (Qa[Za] = null),
              (Ya = Qa[--Za]),
              (Qa[Za] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Nu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ha ? { id: Ya, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Nu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ua(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ua(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ua(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = x.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = J({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          xo = null,
          wo = null;
        function ko() {
          wo = xo = bo = null;
        }
        function So(e) {
          var t = go.current;
          Ta(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function To(e, t) {
          (bo = e),
            (wo = xo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function jo(e) {
          var t = e._currentValue;
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === xo)
            ) {
              if (null === bo) throw Error(o(308));
              (xo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else xo = xo.next = e;
          return t;
        }
        var Ao = null;
        function Oo(e) {
          null === Ao ? (Ao = [e]) : Ao.push(e);
        }
        function Po(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Oo(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Co(e, r)
          );
        }
        function Co(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var No = !1;
        function Ro(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Lo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Io(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Os))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Co(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Oo(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Co(e, n)
          );
        }
        function Do(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Jo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vo(e, t, n, r) {
          var a = e.updateQueue;
          No = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = u = s = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = J({}, f, d);
                      break e;
                    case 2:
                      No = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Ds |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Uo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var zo = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : J({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Fo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Fe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Lo(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Io(e, o, a)) && (nu(t, e, a, r), Do(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              o = Lo(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Io(e, o, a)) && (nu(t, e, a, r), Do(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Lo(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Io(e, a, r)) && (nu(t, e, r, n), Do(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, o);
        }
        function qo(e, t, n) {
          var r = !1,
            a = Aa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = jo(o))
              : ((a = Ra(t) ? Ca : Oa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Na(e, a)
                  : Aa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Fo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Go(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Fo.enqueueReplaceState(t, t.state, null);
        }
        function _o(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = zo), Ro(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = jo(o))
            : ((o = Ra(t) ? Ca : Oa.current), (a.context = Na(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Fo.enqueueReplaceState(a, a.state, null),
              Vo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === zo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Zo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ho(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ju(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === R &&
                    Ho(o) === t.type))
              ? (((r = a(t, n.props)).ref = Qo(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = Qo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Vu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ju("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = Qo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Vu(t, e.mode, n)).return = e), t;
                case R:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              Zo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : f(e, t, n, r, null);
              Zo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Zo(t, r);
            }
            return null;
          }
          function v(a, o, l, s) {
            for (
              var u = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, l[v], s);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === l.length) return n(a, f), ao && Xa(a, v), u;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], s)) &&
                  ((o = i(f, o, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, v), u;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              u
            );
          }
          function m(a, l, s, u) {
            var c = I(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var f = (c = null), v = l, m = (l = 0), y = null, g = s.next();
              null !== v && !g.done;
              m++, g = s.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, u);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = i(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Xa(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = s.next())
                null !== (g = d(a, g.value, u)) &&
                  ((l = i(g, l, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Xa(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = s.next())
              null !== (g = h(v, a, m, g.value, u)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              c
            );
          }
          return function e(r, o, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === R &&
                            Ho(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Qo(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((o = Iu(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = o))
                      : (((s = Lu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = Qo(r, o, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Vu(i, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case R:
                  return e(r, o, (c = i._init)(i._payload), s);
              }
              if (te(i)) return v(r, o, i, s);
              if (I(i)) return m(r, o, i, s);
              Zo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Ju(i, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Ko = Yo(!0),
          Xo = Yo(!1),
          $o = {},
          ei = Ea($o),
          ti = Ea($o),
          ni = Ea($o);
        function ri(e) {
          if (e === $o) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((ja(ni, t), ja(ti, e), ja(ei, $o), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ta(ei), ja(ei, t);
        }
        function oi() {
          Ta(ei), Ta(ti), Ta(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = se(t, e.type);
          t !== n && (ja(ti, e), ja(ei, n));
        }
        function li(e) {
          ti.current === e && (Ta(ei), Ta(ti));
        }
        var si = Ea(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = x.ReactCurrentDispatcher,
          pi = x.ReactCurrentBatchConfig,
          hi = 0,
          vi = null,
          mi = null,
          yi = null,
          gi = !1,
          bi = !1,
          xi = 0,
          wi = 0;
        function ki() {
          throw Error(o(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (xi = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = ul),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Ti() {
          var e = 0 !== xi;
          return (xi = 0), e;
        }
        function ji() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ai() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Oi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Pi(e) {
          var t = Ai(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (vi.lanes |= f),
                  (Ds |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (Ds |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ci(e) {
          var t = Ai(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (xl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ni() {}
        function Ri(e, t) {
          var n = vi,
            r = Ai(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (xl = !0)),
            (r = r.queue),
            qi(Ii.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ui(9, Li.bind(null, n, r, a, t), void 0, null),
              null === Ps)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Mi(n, t, a);
          }
          return a;
        }
        function Mi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Li(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Di(t) && Ji(e);
        }
        function Ii(e, t, n) {
          return n(function () {
            Di(t) && Ji(e);
          });
        }
        function Di(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ji(e) {
          var t = Co(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Vi(e) {
          var t = ji();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Oi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Ui(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zi() {
          return Ai().memoizedState;
        }
        function Bi(e, t, n, r) {
          var a = ji();
          (vi.flags |= e),
            (a.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Fi(e, t, n, r) {
          var a = Ai();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && Si(r, i.deps)))
              return void (a.memoizedState = Ui(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Ui(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function qi(e, t) {
          return Fi(2048, 8, e, t);
        }
        function Gi(e, t) {
          return Fi(4, 2, e, t);
        }
        function _i(e, t) {
          return Fi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Zi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Fi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function Hi() {}
        function Yi(e, t) {
          var n = Ai();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ki(e, t) {
          var n = Ai();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vi.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t);
        }
        function $i(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ai().memoizedState;
        }
        function tl(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Po(e, t, n, r))) {
            nu(n, e, r, eu()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Oo(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Po(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function al(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: jo,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: jo,
            useCallback: function (e, t) {
              return (ji().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: jo,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bi(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ji();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ji();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (ji().memoizedState = e);
            },
            useState: Vi,
            useDebugValue: Hi,
            useDeferredValue: function (e) {
              return (ji().memoizedState = e);
            },
            useTransition: function () {
              var e = Vi(!1),
                t = e[0];
              return (
                (e = $i.bind(null, e[1])), (ji().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = ji();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Ps)) throw Error(o(349));
                0 !== (30 & hi) || Mi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Ii.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ui(9, Li.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = ji(),
                t = Ps.identifierPrefix;
              if (ao) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = xi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: jo,
            useCallback: Yi,
            useContext: jo,
            useEffect: qi,
            useImperativeHandle: Zi,
            useInsertionEffect: Gi,
            useLayoutEffect: _i,
            useMemo: Ki,
            useReducer: Pi,
            useRef: zi,
            useState: function () {
              return Pi(Oi);
            },
            useDebugValue: Hi,
            useDeferredValue: function (e) {
              return Xi(Ai(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Oi)[0], Ai().memoizedState];
            },
            useMutableSource: Ni,
            useSyncExternalStore: Ri,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: jo,
            useCallback: Yi,
            useContext: jo,
            useEffect: qi,
            useImperativeHandle: Zi,
            useInsertionEffect: Gi,
            useLayoutEffect: _i,
            useMemo: Ki,
            useReducer: Ci,
            useRef: zi,
            useState: function () {
              return Ci(Oi);
            },
            useDebugValue: Hi,
            useDeferredValue: function (e) {
              var t = Ai();
              return null === mi
                ? (t.memoizedState = e)
                : Xi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ci(Oi)[0], Ai().memoizedState];
            },
            useMutableSource: Ni,
            useSyncExternalStore: Ri,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Lo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              qs || ((qs = !0), (Gs = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Lo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === _s ? (_s = new Set([this])) : _s.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Tu.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Lo(-1, 1)).tag = 2), Io(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Ko(t, e.child, n, r);
        }
        function kl(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            To(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = Ti()),
            null === e || xl
              ? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                ql(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Ru(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return ql(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), ql(e, t, a);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return Al(e, t, n, r, a);
        }
        function Tl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                ja(Ms, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  ja(Ms, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                ja(Ms, Rs),
                (Rs |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              ja(Ms, Rs),
              (Rs |= r);
          return wl(e, t, a, n), t.child;
        }
        function jl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Al(e, t, n, r, a) {
          var o = Ra(n) ? Ca : Oa.current;
          return (
            (o = Na(t, o)),
            To(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = Ti()),
            null === e || xl
              ? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                ql(e, t, a))
          );
        }
        function Ol(e, t, n, r, a) {
          if (Ra(n)) {
            var o = !0;
            Da(t);
          } else o = !1;
          if ((To(t, a), null === t.stateNode))
            Wl(e, t), qo(t, n, r), _o(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = jo(u))
              : (u = Na(t, (u = Ra(n) ? Ca : Oa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Go(t, i, r, u)),
              (No = !1);
            var d = t.memoizedState;
            (i.state = d),
              Vo(t, r, i, a),
              (s = t.memoizedState),
              l !== r || d !== s || Pa.current || No
                ? ("function" === typeof c &&
                    (Bo(t, n, c, r), (s = t.memoizedState)),
                  (l = No || Wo(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Mo(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = u),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = jo(s))
                : (s = Na(t, (s = Ra(n) ? Ca : Oa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== s) && Go(t, i, r, s)),
              (No = !1),
              (d = t.memoizedState),
              (i.state = d),
              Vo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Pa.current || No
              ? ("function" === typeof p &&
                  (Bo(t, n, p, r), (h = t.memoizedState)),
                (u = No || Wo(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, o, a);
        }
        function Pl(e, t, n, r, a, o) {
          jl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Ja(t, n, !1), ql(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ko(t, e.child, null, o)),
                (t.child = Ko(t, null, l, o)))
              : wl(e, t, l, o),
            (t.memoizedState = r.state),
            a && Ja(t, n, !0),
            t.child
          );
        }
        function Cl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Nl(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Rl,
          Ml,
          Ll,
          Il = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Jl(e, t, n) {
          var r,
            a = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            ja(si, 1 & i),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Du(s, a, 0, null)),
                      (e = Iu(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Il),
                      e)
                    : Vl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ul(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Iu(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ko(t, e.child, null, l),
                    (t.child.memoizedState = Dl(l)),
                    (t.memoizedState = Il),
                    i);
              if (0 === (1 & t.mode)) return Ul(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Ul(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Ps)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Co(e, a), nu(r, e, a, -1));
                }
                return vu(), Ul(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Au.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ua(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Za++] = Ya),
                    (Qa[Za++] = Ka),
                    (Qa[Za++] = Ha),
                    (Ya = e.id),
                    (Ka = e.overflow),
                    (Ha = t)),
                  ((t = Vl(t, r.children)).flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Mu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Mu(r, l))
                : ((l = Iu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Il),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Mu(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Vl(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ul(e, t, n, r) {
          return (
            null !== r && vo(r),
            Ko(t, e.child, null, n),
            ((e = Vl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function zl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Fl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = si.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
                else if (19 === e.tag) zl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ja(si, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ui(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, o);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function ql(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Gl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function _l(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return _l(t), null;
            case 1:
            case 17:
              return Ra(t.type) && Ma(), _l(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                Ta(Pa),
                Ta(Oa),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (iu(oo), (oo = null)))),
                _l(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ml(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return _l(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ur("cancel", r), Ur("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ur("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ir.length; a++) Ur(Ir[a], r);
                      break;
                    case "source":
                      Ur("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ur("error", r), Ur("load", r);
                      break;
                    case "details":
                      Ur("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Ur("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ur("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ur("invalid", r);
                  }
                  for (var s in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Ur("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      _(r), $(r, i, !0);
                      break;
                    case "textarea":
                      _(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Rl(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Ur("cancel", e), Ur("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ur("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ir.length; a++) Ur(Ir[a], e);
                        a = r;
                        break;
                      case "source":
                        Ur("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ur("error", e), Ur("load", e), (a = r);
                        break;
                      case "details":
                        Ur("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = H(e, r)), Ur("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = J({}, r, { value: void 0 })),
                          Ur("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ur("invalid", e);
                    }
                    for (i in (ge(n, a), (u = a)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ur("scroll", e)
                              : null != c && b(e, i, c, s));
                      }
                    switch (n) {
                      case "input":
                        _(e), $(e, r, !1);
                        break;
                      case "textarea":
                        _(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + q(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return _l(t), null;
            case 6:
              if (e && null != t.stateNode) Ll(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return _l(t), null;
            case 13:
              if (
                (Ta(si),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  _l(t), (i = !1);
                } else null !== oo && (iu(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current)
                        ? 0 === Ls && (Ls = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  _l(t),
                  null);
            case 4:
              return (
                oi(), null === e && Fr(t.stateNode.containerInfo), _l(t), null
              );
            case 10:
              return So(t.type._context), _l(t), null;
            case 19:
              if ((Ta(si), null === (i = t.memoizedState))) return _l(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Gl(i, !1);
                else {
                  if (0 !== Ls || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            Gl(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ja(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ke() > Fs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Gl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Gl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !ao)
                    )
                      return _l(t), null;
                  } else
                    2 * Ke() - i.renderingStartTime > Fs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Gl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = si.current),
                  ja(si, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (_l(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) &&
                    (_l(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : _l(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Zl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                Ta(Pa),
                Ta(Oa),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Ta(si),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ta(si), null;
            case 4:
              return oi(), null;
            case 10:
              return So(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Rl = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ml = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = H(e, a)), (r = H(e, r)), (i = []);
                  break;
                case "select":
                  (a = J({}, a, { value: void 0 })),
                    (r = J({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Ur("scroll", e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ll = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Hl = !1,
          Yl = !1,
          Kl = "function" === typeof WeakSet ? WeakSet : Set,
          Xl = null;
        function $l(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && es(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function os(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), os(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || $l(n, t);
            case 6:
              var r = cs,
                a = fs;
              (cs = null),
                ds(e, t, n),
                (fs = a),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ft(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Yl &&
                ($l(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Yl = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Kl()),
              t.forEach(function (t) {
                var r = Ou.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(o(160));
                ps(i, l, a), (cs = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ms(t, e), (t = t.sibling);
        }
        function ms(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(t, e), ys(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (m) {
                  Eu(e, e.return, m);
                }
                try {
                  ns(5, e, e.return);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 1:
              vs(t, e), ys(e), 512 & r && null !== n && $l(n, n.return);
              break;
            case 5:
              if (
                (vs(t, e),
                ys(e),
                512 & r && null !== n && $l(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      K(a, i),
                      be(s, l);
                    var c = be(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (m) {
                    Eu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vs(t, e), ys(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vs(t, e),
                ys(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ft(t.containerInfo);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              break;
            case 4:
            default:
              vs(t, e), ys(e);
              break;
            case 13:
              vs(t, e),
                ys(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Ke())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yl = (c = Yl) || f), vs(t, e), (Yl = c))
                  : vs(t, e),
                ys(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Xl = e, f = e.child; null !== f; ) {
                    for (d = Xl = f; null !== Xl; ) {
                      switch (((h = (p = Xl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          $l(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Eu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          $l(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Xl = h)) : ws(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ve("display", l)));
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vs(t, e), ys(e), 4 & r && hs(e);
            case 21:
          }
        }
        function ys(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    us(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, ls(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gs(e, t, n) {
          (Xl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xl; ) {
            var a = Xl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Hl;
              if (!i) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Yl;
                l = Hl;
                var u = Yl;
                if (((Hl = i), (Yl = s) && !u))
                  for (Xl = a; null !== Xl; )
                    (s = (i = Xl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(a)
                        : null !== s
                        ? ((s.return = i), (Xl = s))
                        : ks(a);
                for (; null !== o; ) (Xl = o), bs(o, t, n), (o = o.sibling);
                (Xl = a), (Hl = l), (Yl = u);
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Xl = o))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Xl; ) {
            var t = Xl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Uo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Uo(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ft(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Yl || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Xl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Xl = n);
              break;
            }
            Xl = t.return;
          }
        }
        function ws(e) {
          for (; null !== Xl; ) {
            var t = Xl;
            if (t === e) {
              Xl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Xl = n);
              break;
            }
            Xl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Xl; ) {
            var t = Xl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, o, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Xl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Xl = l);
              break;
            }
            Xl = t.return;
          }
        }
        var Ss,
          Es = Math.ceil,
          Ts = x.ReactCurrentDispatcher,
          js = x.ReactCurrentOwner,
          As = x.ReactCurrentBatchConfig,
          Os = 0,
          Ps = null,
          Cs = null,
          Ns = 0,
          Rs = 0,
          Ms = Ea(0),
          Ls = 0,
          Is = null,
          Ds = 0,
          Js = 0,
          Vs = 0,
          Us = null,
          zs = null,
          Bs = 0,
          Fs = 1 / 0,
          Ws = null,
          qs = !1,
          Gs = null,
          _s = null,
          Qs = !1,
          Zs = null,
          Hs = 0,
          Ys = 0,
          Ks = null,
          Xs = -1,
          $s = 0;
        function eu() {
          return 0 !== (6 & Os) ? Ke() : -1 !== Xs ? Xs : (Xs = Ke());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Os) && 0 !== Ns
            ? Ns & -Ns
            : null !== mo.transition
            ? (0 === $s && ($s = vt()), $s)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ys) throw ((Ys = 0), (Ks = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Os) && e === Ps) ||
              (e === Ps && (0 === (2 & Os) && (Js |= n), 4 === Ls && lu(e, Ns)),
              ru(e, r),
              1 === n &&
                0 === Os &&
                0 === (1 & t.mode) &&
                ((Fs = Ke() + 500), Ua && Fa()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ps ? Ns : 0);
          if (0 === r)
            null !== n && Ze(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ze(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ua = !0), Ba(e);
                  })(su.bind(null, e))
                : Ba(su.bind(null, e)),
                ia(function () {
                  0 === (6 & Os) && Fa();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Pu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Xs = -1), ($s = 0), 0 !== (6 & Os))) throw Error(o(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ps ? Ns : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var a = Os;
            Os |= 2;
            var i = hu();
            for (
              (Ps === e && Ns === t) ||
              ((Ws = null), (Fs = Ke() + 500), du(e, t));
              ;

            )
              try {
                gu();
                break;
              } catch (s) {
                pu(e, s);
              }
            ko(),
              (Ts.current = i),
              (Os = a),
              null !== Cs ? (t = 0) : ((Ps = null), (Ns = 0), (t = Ls));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = Is), du(e, 0), lu(e, r), ru(e, Ke()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = ou(e, i))),
                  1 === t))
              )
                throw ((n = Is), du(e, 0), lu(e, r), ru(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(e, zs, Ws);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, zs, Ws), t);
                    break;
                  }
                  wu(e, zs, Ws);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, zs, Ws), r);
                    break;
                  }
                  wu(e, zs, Ws);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ru(e, Ke()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = Us;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = zs), (zs = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === zs ? (zs = e) : zs.push.apply(zs, e);
        }
        function lu(e, t) {
          for (
            t &= ~Vs,
              t &= ~Js,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Os)) throw Error(o(327));
          ku();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Ke()), null;
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Is), du(e, 0), lu(e, t), ru(e, Ke()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, zs, Ws),
            ru(e, Ke()),
            null
          );
        }
        function uu(e, t) {
          var n = Os;
          Os |= 1;
          try {
            return e(t);
          } finally {
            0 === (Os = n) && ((Fs = Ke() + 500), Ua && Fa());
          }
        }
        function cu(e) {
          null !== Zs && 0 === Zs.tag && 0 === (6 & Os) && ku();
          var t = Os;
          Os |= 1;
          var n = As.transition,
            r = bt;
          try {
            if (((As.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (As.transition = n), 0 === (6 & (Os = t)) && Fa();
          }
        }
        function fu() {
          (Rs = Ms.current), Ta(Ms);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Cs))
            for (n = Cs.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ma();
                  break;
                case 3:
                  oi(), Ta(Pa), Ta(Oa), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  Ta(si);
                  break;
                case 10:
                  So(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ps = e),
            (Cs = e = Mu(e.current, null)),
            (Ns = Rs = t),
            (Ls = 0),
            (Is = null),
            (Vs = Js = Ds = 0),
            (zs = Us = null),
            null !== Ao)
          ) {
            for (t = 0; t < Ao.length; t++)
              if (null !== (r = (n = Ao[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Ao = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Cs;
            try {
              if ((ko(), (di.current = il), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (xi = 0),
                (js.current = null),
                null === n || null === n.return)
              ) {
                (Ls = 1), (Is = t), (Cs = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ns),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, s, 0, t),
                      1 & h.mode && ml(i, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), vu();
                    break e;
                  }
                  u = Error(o(426));
                } else if (ao && 1 & s.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, s, 0, t),
                      vo(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Ls && (Ls = 2),
                  null === Us ? (Us = [i]) : Us.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Jo(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === _s || !_s.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Jo(i, vl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (x) {
              (t = x), Cs === n && null !== n && (Cs = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Ts.current;
          return (Ts.current = il), null === e ? il : e;
        }
        function vu() {
          (0 !== Ls && 3 !== Ls && 2 !== Ls) || (Ls = 4),
            null === Ps ||
              (0 === (268435455 & Ds) && 0 === (268435455 & Js)) ||
              lu(Ps, Ns);
        }
        function mu(e, t) {
          var n = Os;
          Os |= 2;
          var r = hu();
          for ((Ps === e && Ns === t) || ((Ws = null), du(e, t)); ; )
            try {
              yu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((ko(), (Os = n), (Ts.current = r), null !== Cs))
            throw Error(o(261));
          return (Ps = null), (Ns = 0), Ls;
        }
        function yu() {
          for (; null !== Cs; ) bu(Cs);
        }
        function gu() {
          for (; null !== Cs && !He(); ) bu(Cs);
        }
        function bu(e) {
          var t = Ss(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Cs = t),
            (js.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, Rs))) return void (Cs = n);
            } else {
              if (null !== (n = Zl(n, t)))
                return (n.flags &= 32767), void (Cs = n);
              if (null === e) return (Ls = 6), void (Cs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Cs = t);
            Cs = t = e;
          } while (null !== t);
          0 === Ls && (Ls = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = As.transition;
          try {
            (As.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Zs);
                if (0 !== (6 & Os)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Ps && ((Cs = Ps = null), (Ns = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Pu(tt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = As.transition), (As.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Os;
                  (Os |= 4),
                    (js.current = null),
                    (function (e, t) {
                      if (((ea = qt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === i && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          qt = !1,
                          Xl = t;
                        null !== Xl;

                      )
                        if (
                          ((e = (t = Xl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xl = e);
                        else
                          for (; null !== Xl; ) {
                            t = Xl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              Eu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Xl = e);
                              break;
                            }
                            Xl = t.return;
                          }
                      (v = ts), (ts = !1);
                    })(e, n),
                    ms(n, e),
                    hr(ta),
                    (qt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    gs(n, e, a),
                    Ye(),
                    (Os = s),
                    (bt = l),
                    (As.transition = i);
                } else e.current = n;
                if (
                  (Qs && ((Qs = !1), (Zs = e), (Hs = a)),
                  0 === (i = e.pendingLanes) && (_s = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (qs) throw ((qs = !1), (e = Gs), (Gs = null), e);
                0 !== (1 & Hs) && 0 !== e.tag && ku(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Ks
                      ? Ys++
                      : ((Ys = 0), (Ks = e))
                    : (Ys = 0),
                  Fa();
              })(e, t, n, r);
          } finally {
            (As.transition = a), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Zs) {
            var e = xt(Hs),
              t = As.transition,
              n = bt;
            try {
              if (((As.transition = null), (bt = 16 > e ? 16 : e), null === Zs))
                var r = !1;
              else {
                if (((e = Zs), (Zs = null), (Hs = 0), 0 !== (6 & Os)))
                  throw Error(o(331));
                var a = Os;
                for (Os |= 4, Xl = e.current; null !== Xl; ) {
                  var i = Xl,
                    l = i.child;
                  if (0 !== (16 & Xl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Xl = c; null !== Xl; ) {
                          var f = Xl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Xl = d);
                          else
                            for (; null !== Xl; ) {
                              var p = (f = Xl).sibling,
                                h = f.return;
                              if ((os(f), f === c)) {
                                Xl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Xl = p);
                                break;
                              }
                              Xl = h;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Xl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Xl = l);
                  else
                    e: for (; null !== Xl; ) {
                      if (0 !== (2048 & (i = Xl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Xl = g);
                        break e;
                      }
                      Xl = i.return;
                    }
                }
                var b = e.current;
                for (Xl = b; null !== Xl; ) {
                  var x = (l = Xl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Xl = x);
                  else
                    e: for (l = b; null !== Xl; ) {
                      if (0 !== (2048 & (s = Xl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (k) {
                          Eu(s, s.return, k);
                        }
                      if (s === l) {
                        Xl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Xl = w);
                        break e;
                      }
                      Xl = s.return;
                    }
                }
                if (
                  ((Os = a),
                  Fa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (As.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Io(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (yt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === _s || !_s.has(r)))
                ) {
                  (t = Io(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (yt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Tu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ps === e &&
              (Ns & n) === n &&
              (4 === Ls ||
              (3 === Ls && (130023424 & Ns) === Ns && 500 > Ke() - Bs)
                ? du(e, 0)
                : (Vs |= n)),
            ru(e, t);
        }
        function ju(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Co(e, t)) && (yt(e, t, n), ru(e, n));
        }
        function Au(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), ju(e, n);
        }
        function Ou(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), ju(e, n);
        }
        function Pu(e, t) {
          return Qe(e, t);
        }
        function Cu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nu(e, t, n, r) {
          return new Cu(e, t, n, r);
        }
        function Ru(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Ru(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Iu(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case T:
                return (
                  ((e = Nu(12, n, t, 2 | a)).elementType = T), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Nu(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case C:
                return (
                  ((e = Nu(19, n, t, a)).elementType = C), (e.lanes = i), e
                );
              case M:
                return Du(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case j:
                      l = 10;
                      break e;
                    case A:
                      l = 9;
                      break e;
                    case O:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Nu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Nu(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = Nu(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Ju(e, t, n) {
          return ((e = Nu(6, e, null, t)).lanes = n), e;
        }
        function Vu(e, t, n) {
          return (
            ((t = Nu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function zu(e, t, n, r, a, o, i, l, s) {
          return (
            (e = new Uu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Nu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ro(o),
            e
          );
        }
        function Bu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Fu(e) {
          if (!e) return Aa;
          e: {
            if (Fe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return Ia(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, a, o, i, l, s) {
          return (
            ((e = zu(n, r, !0, e, 0, o, 0, l, s)).context = Fu(null)),
            (n = e.current),
            ((o = Lo((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Io(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            ru(e, r),
            e
          );
        }
        function qu(e, t, n, r) {
          var a = t.current,
            o = eu(),
            i = tu(a);
          return (
            (n = Fu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Lo(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Io(a, t, i)) && (nu(e, a, i, o), Do(e, a, i)),
            i
          );
        }
        function Gu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function _u(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          _u(e, t), (e = e.alternate) && _u(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Cl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Ra(t.type) && Da(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        ja(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (ja(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Jl(e, t, n)
                            : (ja(si, 1 & si.current),
                              null !== (e = ql(e, t, n)) ? e.sibling : null);
                        ja(si, 1 & si.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Fl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          ja(si, si.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Tl(e, t, n);
                    }
                    return ql(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ao && 0 !== (1048576 & t.flags) && $a(t, _a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = Na(t, Oa.current);
              To(t, n), (a = Ei(null, t, r, e, a, n));
              var i = Ti();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((i = !0), Da(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ro(t),
                    (a.updater = Fo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    _o(t, r, e, n),
                    (t = Pl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ru(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === O) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Al(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ol(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Al(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ol(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Cl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Mo(e, t),
                  Vo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Nl(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Nl(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ua(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = ql(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && uo(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                jl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Jl(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ko(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                kl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  ja(go, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Pa.current) {
                      t = ql(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Lo(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Eo(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                To(t, n),
                (r = r((a = jo(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Wl(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Da(t)) : (e = !1),
                To(t, n),
                qo(t, r, a),
                _o(t, r, a, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return Fl(e, t, n);
            case 22:
              return Tl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Zu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Hu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = Gu(i);
                l.call(e);
              };
            }
            qu(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Gu(i);
                    o.call(e);
                  };
                }
                var i = Wu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Fr(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Gu(s);
                  l.call(e);
                };
              }
              var s = zu(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Fr(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  qu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Gu(i);
        }
        (Yu.prototype.render = Hu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            qu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Hu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  qu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Jt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    ru(t, Ke()),
                    0 === (6 & Os) && ((Fs = Ke() + 500), Fa()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Co(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Qu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Co(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Qu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Co(e, t);
              if (null !== n) nu(n, e, t, eu());
              Qu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Tt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      Q(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = uu),
          (Pe = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, je, Ae, uu],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ge(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(o(200));
            return Bu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Zu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = zu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Fr(8 === e.nodeType ? e.parentNode : e),
              new Hu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ge(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = Zu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Fr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      168: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(534));
      },
      939: function (e) {
        var t = "undefined" !== typeof Element,
          n = "function" === typeof Map,
          r = "function" === typeof Set,
          a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
        function o(e, i) {
          if (e === i) return !0;
          if (e && i && "object" == typeof e && "object" == typeof i) {
            if (e.constructor !== i.constructor) return !1;
            var l, s, u, c;
            if (Array.isArray(e)) {
              if ((l = e.length) != i.length) return !1;
              for (s = l; 0 !== s--; ) if (!o(e[s], i[s])) return !1;
              return !0;
            }
            if (n && e instanceof Map && i instanceof Map) {
              if (e.size !== i.size) return !1;
              for (c = e.entries(); !(s = c.next()).done; )
                if (!i.has(s.value[0])) return !1;
              for (c = e.entries(); !(s = c.next()).done; )
                if (!o(s.value[1], i.get(s.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && i instanceof Set) {
              if (e.size !== i.size) return !1;
              for (c = e.entries(); !(s = c.next()).done; )
                if (!i.has(s.value[0])) return !1;
              return !0;
            }
            if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
              if ((l = e.length) != i.length) return !1;
              for (s = l; 0 !== s--; ) if (e[s] !== i[s]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === i.source && e.flags === i.flags;
            if (e.valueOf !== Object.prototype.valueOf)
              return e.valueOf() === i.valueOf();
            if (e.toString !== Object.prototype.toString)
              return e.toString() === i.toString();
            if ((l = (u = Object.keys(e)).length) !== Object.keys(i).length)
              return !1;
            for (s = l; 0 !== s--; )
              if (!Object.prototype.hasOwnProperty.call(i, u[s])) return !1;
            if (t && e instanceof Element) return !1;
            for (s = l; 0 !== s--; )
              if (
                (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s]) ||
                  !e.$$typeof) &&
                !o(e[u[s]], i[u[s]])
              )
                return !1;
            return !0;
          }
          return e !== e && i !== i;
        }
        e.exports = function (e, t) {
          try {
            return o(e, t);
          } catch (n) {
            if ((n.message || "").match(/stack|recursion/i))
              return (
                console.warn("react-fast-compare cannot handle circular refs"),
                !1
              );
            throw n;
          }
        };
      },
      377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              o = e || "";
            t && (o = r(e));
            n && (o = a(o));
            return o;
          });
        var n =
          /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
        function r(e) {
          return e
            .toString()
            .trim()
            .replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (e, t, r) {
              return t > 0 &&
                t + e.length !== r.length &&
                e.search(n) > -1 &&
                ":" !== r.charAt(t - 2) &&
                ("-" !== r.charAt(t + e.length) || "-" === r.charAt(t - 1)) &&
                r.charAt(t - 1).search(/[^\s-]/) < 0
                ? e.toLowerCase()
                : e.substr(1).search(/[A-Z]|\../) > -1
                ? e
                : e.charAt(0).toUpperCase() + e.substr(1);
            });
        }
        function a(e) {
          return "string" === typeof (t = e) && -1 !== t.indexOf("@")
            ? (console.warn("This arg looks like an email address, redacting."),
              "REDACTED (Potential Email Address)")
            : e;
          var t;
        }
      },
      318: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = t.GA4 = void 0);
        var r = u(n(171)),
          a = u(n(377)),
          o = [
            "eventCategory",
            "eventAction",
            "eventLabel",
            "eventValue",
            "hitType",
          ],
          i = ["title", "location"],
          l = ["page", "hitType"],
          s = [
            "action",
            "category",
            "label",
            "value",
            "nonInteraction",
            "transport",
          ];
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(e, t) {
          if (null == e) return {};
          var n,
            r,
            a = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                a = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
              return a;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (a[n] = e[n]));
          }
          return a;
        }
        function f(e) {
          return (
            (f =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            f(e)
          );
        }
        function d(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return y(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            m(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function p(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? p(Object(n), !0).forEach(function (t) {
                  b(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : p(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function v(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null == n) return;
              var r,
                a,
                o = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (s) {
                (l = !0), (a = s);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            })(e, t) ||
            m(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function m(e, t) {
          if (e) {
            if ("string" === typeof e) return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? y(e, t)
                : void 0
            );
          }
        }
        function y(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function g(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function b(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var x = (function () {
          function e() {
            var t = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              b(this, "reset", function () {
                (t.isInitialized = !1),
                  (t._testMode = !1),
                  t._currentMeasurementId,
                  (t._hasLoadedGA = !1),
                  (t._isQueuing = !1),
                  (t._queueGtag = []);
              }),
              b(this, "_gtag", function () {
                for (
                  var e = arguments.length, n = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  n[a] = arguments[a];
                t._testMode || t._isQueuing
                  ? t._queueGtag.push(n)
                  : r.default.apply(void 0, n);
              }),
              b(this, "_loadGA", function (e, n) {
                if (
                  "undefined" !== typeof window &&
                  "undefined" !== typeof document &&
                  !t._hasLoadedGA
                ) {
                  var r = document.createElement("script");
                  (r.async = !0),
                    (r.src =
                      "https://www.googletagmanager.com/gtag/js?id=".concat(e)),
                    n && r.setAttribute("nonce", n),
                    document.body.appendChild(r),
                    (window.dataLayer = window.dataLayer || []),
                    (window.gtag = function () {
                      window.dataLayer.push(arguments);
                    }),
                    (t._hasLoadedGA = !0);
                }
              }),
              b(this, "_toGtagOptions", function (e) {
                if (e) {
                  var t = {
                    cookieUpdate: "cookie_update",
                    cookieExpires: "cookie_expires",
                    cookieDomain: "cookie_domain",
                    cookieFlags: "cookie_flags",
                    userId: "user_id",
                    clientId: "client_id",
                    anonymizeIp: "anonymize_ip",
                    contentGroup1: "content_group1",
                    contentGroup2: "content_group2",
                    contentGroup3: "content_group3",
                    contentGroup4: "content_group4",
                    contentGroup5: "content_group5",
                    allowAdFeatures: "allow_google_signals",
                    allowAdPersonalizationSignals:
                      "allow_ad_personalization_signals",
                    nonInteraction: "non_interaction",
                    page: "page_path",
                    hitCallback: "event_callback",
                  };
                  return Object.entries(e).reduce(function (e, n) {
                    var r = v(n, 2),
                      a = r[0],
                      o = r[1];
                    return t[a] ? (e[t[a]] = o) : (e[a] = o), e;
                  }, {});
                }
              }),
              b(this, "initialize", function (e) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (!e) throw new Error("Require GA_MEASUREMENT_ID");
                var r = "string" === typeof e ? [{ trackingId: e }] : e;
                t._currentMeasurementId = r[0].trackingId;
                var a = n.gaOptions,
                  o = n.gtagOptions,
                  i = n.legacyDimensionMetric,
                  l = void 0 === i || i,
                  s = n.nonce,
                  u = n.testMode,
                  c = void 0 !== u && u;
                if (
                  ((t._testMode = c),
                  c || t._loadGA(t._currentMeasurementId, s),
                  t.isInitialized ||
                    (t._gtag("js", new Date()),
                    r.forEach(function (e) {
                      var n = t._appendCustomMap(
                        h(
                          h(
                            h(
                              { send_page_view: !1 },
                              t._toGtagOptions(h(h({}, a), e.gaOptions))
                            ),
                            o
                          ),
                          e.gtagOptions
                        ),
                        l
                      );
                      t._gtag("config", e.trackingId, n);
                    })),
                  (t.isInitialized = !0),
                  !c)
                ) {
                  var f = d(t._queueGtag);
                  for (t._queueGtag = [], t._isQueuing = !1; f.length; ) {
                    var p = f.shift();
                    t._gtag.apply(t, d(p)),
                      "get" === p[0] && (t._isQueuing = !0);
                  }
                }
              }),
              b(this, "set", function (e) {
                e
                  ? "object" === f(e)
                    ? (0 === Object.keys(e).length &&
                        console.warn("empty `fieldsObject` given to .set()"),
                      t._gaCommand("set", e))
                    : console.warn(
                        "Expected `fieldsObject` arg to be an Object"
                      )
                  : console.warn("`fieldsObject` is required in .set()");
              }),
              b(this, "_gaCommandSendEvent", function (e, n, r, a, o) {
                t._gtag(
                  "event",
                  n,
                  h(
                    h(
                      { event_category: e, event_label: r, value: a },
                      o && { non_interaction: o.nonInteraction }
                    ),
                    t._toGtagOptions(o)
                  )
                );
              }),
              b(this, "_gaCommandSendEventParameters", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                if ("string" === typeof n[0])
                  t._gaCommandSendEvent.apply(t, d(n.slice(1)));
                else {
                  var a = n[0],
                    i = a.eventCategory,
                    l = a.eventAction,
                    s = a.eventLabel,
                    u = a.eventValue,
                    f = (a.hitType, c(a, o));
                  t._gaCommandSendEvent(i, l, s, u, f);
                }
              }),
              b(this, "_gaCommandSendTiming", function (e, n, r, a) {
                t._gtag("event", "timing_complete", {
                  name: n,
                  value: r,
                  event_category: e,
                  event_label: a,
                });
              }),
              b(this, "_gaCommandSendPageview", function (e, n) {
                if (n && Object.keys(n).length) {
                  var r = t._toGtagOptions(n),
                    a = r.title,
                    o = r.location,
                    l = c(r, i);
                  t._gtag(
                    "event",
                    "page_view",
                    h(
                      h(
                        h(h({}, e && { page_path: e }), a && { page_title: a }),
                        o && { page_location: o }
                      ),
                      l
                    )
                  );
                } else e ? t._gtag("event", "page_view", { page_path: e }) : t._gtag("event", "page_view");
              }),
              b(this, "_gaCommandSendPageviewParameters", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                if ("string" === typeof n[0])
                  t._gaCommandSendPageview.apply(t, d(n.slice(1)));
                else {
                  var a = n[0],
                    o = a.page,
                    i = (a.hitType, c(a, l));
                  t._gaCommandSendPageview(o, i);
                }
              }),
              b(this, "_gaCommandSend", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                var a = "string" === typeof n[0] ? n[0] : n[0].hitType;
                switch (a) {
                  case "event":
                    t._gaCommandSendEventParameters.apply(t, n);
                    break;
                  case "pageview":
                    t._gaCommandSendPageviewParameters.apply(t, n);
                    break;
                  case "timing":
                    t._gaCommandSendTiming.apply(t, d(n.slice(1)));
                    break;
                  case "screenview":
                  case "transaction":
                  case "item":
                  case "social":
                  case "exception":
                    console.warn("Unsupported send command: ".concat(a));
                    break;
                  default:
                    console.warn("Send command doesn't exist: ".concat(a));
                }
              }),
              b(this, "_gaCommandSet", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                "string" === typeof n[0] && (n[0] = b({}, n[0], n[1])),
                  t._gtag("set", t._toGtagOptions(n[0]));
              }),
              b(this, "_gaCommand", function (e) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    a = 1;
                  a < n;
                  a++
                )
                  r[a - 1] = arguments[a];
                switch (e) {
                  case "send":
                    t._gaCommandSend.apply(t, r);
                    break;
                  case "set":
                    t._gaCommandSet.apply(t, r);
                    break;
                  default:
                    console.warn("Command doesn't exist: ".concat(e));
                }
              }),
              b(this, "ga", function () {
                for (
                  var e = arguments.length, n = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  n[r] = arguments[r];
                if ("string" === typeof n[0]) t._gaCommand.apply(t, n);
                else {
                  var a = n[0];
                  t._gtag(
                    "get",
                    t._currentMeasurementId,
                    "client_id",
                    function (e) {
                      t._isQueuing = !1;
                      var n = t._queueGtag;
                      for (
                        a({
                          get: function (n) {
                            return "clientId" === n
                              ? e
                              : "trackingId" === n
                              ? t._currentMeasurementId
                              : "apiVersion" === n
                              ? "1"
                              : void 0;
                          },
                        });
                        n.length;

                      ) {
                        var r = n.shift();
                        t._gtag.apply(t, d(r));
                      }
                    }
                  ),
                    (t._isQueuing = !0);
                }
                return t.ga;
              }),
              b(this, "event", function (e, n) {
                if ("string" === typeof e)
                  t._gtag("event", e, t._toGtagOptions(n));
                else {
                  var r = e.action,
                    o = e.category,
                    i = e.label,
                    l = e.value,
                    u = e.nonInteraction,
                    f = e.transport,
                    d = c(e, s);
                  if (!o || !r)
                    return void console.warn(
                      "args.category AND args.action are required in event()"
                    );
                  var p = {
                    hitType: "event",
                    eventCategory: (0, a.default)(o),
                    eventAction: (0, a.default)(r),
                  };
                  i && (p.eventLabel = (0, a.default)(i)),
                    "undefined" !== typeof l &&
                      ("number" !== typeof l
                        ? console.warn(
                            "Expected `args.value` arg to be a Number."
                          )
                        : (p.eventValue = l)),
                    "undefined" !== typeof u &&
                      ("boolean" !== typeof u
                        ? console.warn(
                            "`args.nonInteraction` must be a boolean."
                          )
                        : (p.nonInteraction = u)),
                    "undefined" !== typeof f &&
                      ("string" !== typeof f
                        ? console.warn("`args.transport` must be a string.")
                        : (-1 === ["beacon", "xhr", "image"].indexOf(f) &&
                            console.warn(
                              "`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"
                            ),
                          (p.transport = f))),
                    Object.keys(d)
                      .filter(function (e) {
                        return "dimension" === e.substr(0, "dimension".length);
                      })
                      .forEach(function (e) {
                        p[e] = d[e];
                      }),
                    Object.keys(d)
                      .filter(function (e) {
                        return "metric" === e.substr(0, "metric".length);
                      })
                      .forEach(function (e) {
                        p[e] = d[e];
                      }),
                    t._gaCommand("send", p);
                }
              }),
              b(this, "send", function (e) {
                t._gaCommand("send", e);
              }),
              b(this, "pageview", function (e, n, r) {
                var a = null === e || void 0 === e ? void 0 : e.trim();
                "" !== a
                  ? t._gaCommand("send", "pageview", a, { title: r })
                  : console.warn(
                      "path cannot be an empty string in .pageview()"
                    );
              }),
              this.reset();
          }
          var t, n, u;
          return (
            (t = e),
            (n = [
              {
                key: "gtag",
                value: function () {
                  this._gtag.apply(this, arguments);
                },
              },
              {
                key: "_appendCustomMap",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  if (!t) return e;
                  e.custom_map || (e.custom_map = {});
                  for (var n = 1; n <= 200; n++)
                    e.custom_map["dimension".concat(n)] ||
                      (e.custom_map["dimension".concat(n)] = "dimension".concat(
                        n
                      )),
                      e.custom_map["metric".concat(n)] ||
                        (e.custom_map["metric".concat(n)] = "metric".concat(n));
                  return e;
                },
              },
              {
                key: "outboundLink",
                value: function (e, t) {
                  var n = e.label;
                  if ("function" === typeof t)
                    if (n) {
                      var r = {
                          hitType: "event",
                          eventCategory: "Outbound",
                          eventAction: "Click",
                          eventLabel: (0, a.default)(n),
                        },
                        o = !1,
                        i = setTimeout(function () {
                          (o = !0), t();
                        }, 250);
                      (r.hitCallback = function () {
                        clearTimeout(i), o || t();
                      }),
                        this._gaCommand("send", r);
                    } else
                      console.warn("args.label is required in outboundLink()");
                  else console.warn("hitCallback function is required");
                },
              },
            ]),
            n && g(t.prototype, n),
            u && g(t, u),
            e
          );
        })();
        t.GA4 = x;
        var w = new x();
        t.default = w;
      },
      171: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var n = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r;
          "undefined" !== typeof window &&
            ("undefined" === typeof window.gtag &&
              ((window.dataLayer = window.dataLayer || []),
              (window.gtag = function () {
                window.dataLayer.push(arguments);
              })),
            (r = window).gtag.apply(r, t));
        };
        t.default = n;
      },
      786: function (e, t, n) {
        "use strict";
        function r(e) {
          return (
            (r =
              "function" === typeof Symbol &&
              "symbol" === typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" === typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        t.ZP = void 0;
        var a = (function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" !== r(e) && "function" !== typeof e))
            return { default: e };
          var n = o(t);
          if (n && n.has(e)) return n.get(e);
          var a = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var l in e)
            if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
              var s = i ? Object.getOwnPropertyDescriptor(e, l) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(a, l, s)
                : (a[l] = e[l]);
            }
          (a.default = e), n && n.set(e, a);
          return a;
        })(n(318));
        function o(e) {
          if ("function" !== typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (o = function (e) {
            return e ? n : t;
          })(e);
        }
        a.GA4;
        var i = a.default;
        t.ZP = i;
      },
      831: function (e, t, n) {
        !(function () {
          var t = {
              296: function (e, t, n) {
                var r = /^\s+|\s+$/g,
                  a = /^[-+]0x[0-9a-f]+$/i,
                  o = /^0b[01]+$/i,
                  i = /^0o[0-7]+$/i,
                  l = parseInt,
                  s =
                    "object" == typeof n.g &&
                    n.g &&
                    n.g.Object === Object &&
                    n.g,
                  u =
                    "object" == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                  c = s || u || Function("return this")(),
                  f = Object.prototype.toString,
                  d = Math.max,
                  p = Math.min,
                  h = function () {
                    return c.Date.now();
                  };
                function v(e) {
                  var t = typeof e;
                  return !!e && ("object" == t || "function" == t);
                }
                function m(e) {
                  if ("number" == typeof e) return e;
                  if (
                    (function (e) {
                      return (
                        "symbol" == typeof e ||
                        ((function (e) {
                          return !!e && "object" == typeof e;
                        })(e) &&
                          "[object Symbol]" == f.call(e))
                      );
                    })(e)
                  )
                    return NaN;
                  if (v(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = v(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(r, "");
                  var n = o.test(e);
                  return n || i.test(e)
                    ? l(e.slice(2), n ? 2 : 8)
                    : a.test(e)
                    ? NaN
                    : +e;
                }
                e.exports = function (e, t, n) {
                  var r,
                    a,
                    o,
                    i,
                    l,
                    s,
                    u = 0,
                    c = !1,
                    f = !1,
                    y = !0;
                  if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                  function g(t) {
                    var n = r,
                      o = a;
                    return (r = a = void 0), (u = t), (i = e.apply(o, n));
                  }
                  function b(e) {
                    return (u = e), (l = setTimeout(w, t)), c ? g(e) : i;
                  }
                  function x(e) {
                    var n = e - s;
                    return void 0 === s || n >= t || n < 0 || (f && e - u >= o);
                  }
                  function w() {
                    var e = h();
                    if (x(e)) return k(e);
                    l = setTimeout(
                      w,
                      (function (e) {
                        var n = t - (e - s);
                        return f ? p(n, o - (e - u)) : n;
                      })(e)
                    );
                  }
                  function k(e) {
                    return (l = void 0), y && r ? g(e) : ((r = a = void 0), i);
                  }
                  function S() {
                    var e = h(),
                      n = x(e);
                    if (((r = arguments), (a = this), (s = e), n)) {
                      if (void 0 === l) return b(s);
                      if (f) return (l = setTimeout(w, t)), g(s);
                    }
                    return void 0 === l && (l = setTimeout(w, t)), i;
                  }
                  return (
                    (t = m(t) || 0),
                    v(n) &&
                      ((c = !!n.leading),
                      (o = (f = "maxWait" in n) ? d(m(n.maxWait) || 0, t) : o),
                      (y = "trailing" in n ? !!n.trailing : y)),
                    (S.cancel = function () {
                      void 0 !== l && clearTimeout(l),
                        (u = 0),
                        (r = s = a = l = void 0);
                    }),
                    (S.flush = function () {
                      return void 0 === l ? i : k(h());
                    }),
                    S
                  );
                };
              },
              96: function (e, t, n) {
                var r = "Expected a function",
                  a = /^\s+|\s+$/g,
                  o = /^[-+]0x[0-9a-f]+$/i,
                  i = /^0b[01]+$/i,
                  l = /^0o[0-7]+$/i,
                  s = parseInt,
                  u =
                    "object" == typeof n.g &&
                    n.g &&
                    n.g.Object === Object &&
                    n.g,
                  c =
                    "object" == typeof self &&
                    self &&
                    self.Object === Object &&
                    self,
                  f = u || c || Function("return this")(),
                  d = Object.prototype.toString,
                  p = Math.max,
                  h = Math.min,
                  v = function () {
                    return f.Date.now();
                  };
                function m(e) {
                  var t = typeof e;
                  return !!e && ("object" == t || "function" == t);
                }
                function y(e) {
                  if ("number" == typeof e) return e;
                  if (
                    (function (e) {
                      return (
                        "symbol" == typeof e ||
                        ((function (e) {
                          return !!e && "object" == typeof e;
                        })(e) &&
                          "[object Symbol]" == d.call(e))
                      );
                    })(e)
                  )
                    return NaN;
                  if (m(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = m(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = e.replace(a, "");
                  var n = i.test(e);
                  return n || l.test(e)
                    ? s(e.slice(2), n ? 2 : 8)
                    : o.test(e)
                    ? NaN
                    : +e;
                }
                e.exports = function (e, t, n) {
                  var a = !0,
                    o = !0;
                  if ("function" != typeof e) throw new TypeError(r);
                  return (
                    m(n) &&
                      ((a = "leading" in n ? !!n.leading : a),
                      (o = "trailing" in n ? !!n.trailing : o)),
                    (function (e, t, n) {
                      var a,
                        o,
                        i,
                        l,
                        s,
                        u,
                        c = 0,
                        f = !1,
                        d = !1,
                        g = !0;
                      if ("function" != typeof e) throw new TypeError(r);
                      function b(t) {
                        var n = a,
                          r = o;
                        return (a = o = void 0), (c = t), (l = e.apply(r, n));
                      }
                      function x(e) {
                        return (c = e), (s = setTimeout(k, t)), f ? b(e) : l;
                      }
                      function w(e) {
                        var n = e - u;
                        return (
                          void 0 === u || n >= t || n < 0 || (d && e - c >= i)
                        );
                      }
                      function k() {
                        var e = v();
                        if (w(e)) return S(e);
                        s = setTimeout(
                          k,
                          (function (e) {
                            var n = t - (e - u);
                            return d ? h(n, i - (e - c)) : n;
                          })(e)
                        );
                      }
                      function S(e) {
                        return (
                          (s = void 0), g && a ? b(e) : ((a = o = void 0), l)
                        );
                      }
                      function E() {
                        var e = v(),
                          n = w(e);
                        if (((a = arguments), (o = this), (u = e), n)) {
                          if (void 0 === s) return x(u);
                          if (d) return (s = setTimeout(k, t)), b(u);
                        }
                        return void 0 === s && (s = setTimeout(k, t)), l;
                      }
                      return (
                        (t = y(t) || 0),
                        m(n) &&
                          ((f = !!n.leading),
                          (i = (d = "maxWait" in n)
                            ? p(y(n.maxWait) || 0, t)
                            : i),
                          (g = "trailing" in n ? !!n.trailing : g)),
                        (E.cancel = function () {
                          void 0 !== s && clearTimeout(s),
                            (c = 0),
                            (a = u = o = s = void 0);
                        }),
                        (E.flush = function () {
                          return void 0 === s ? l : S(v());
                        }),
                        E
                      );
                    })(e, t, { leading: a, maxWait: t, trailing: o })
                  );
                };
              },
              703: function (e, t, n) {
                "use strict";
                var r = n(414);
                function a() {}
                function o() {}
                (o.resetWarningCache = a),
                  (e.exports = function () {
                    function e(e, t, n, a, o, i) {
                      if (i !== r) {
                        var l = new Error(
                          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                        );
                        throw ((l.name = "Invariant Violation"), l);
                      }
                    }
                    function t() {
                      return e;
                    }
                    e.isRequired = e;
                    var n = {
                      array: e,
                      bool: e,
                      func: e,
                      number: e,
                      object: e,
                      string: e,
                      symbol: e,
                      any: e,
                      arrayOf: t,
                      element: e,
                      elementType: e,
                      instanceOf: t,
                      node: e,
                      objectOf: t,
                      oneOf: t,
                      oneOfType: t,
                      shape: t,
                      exact: t,
                      checkPropTypes: o,
                      resetWarningCache: a,
                    };
                    return (n.PropTypes = n), n;
                  });
              },
              697: function (e, t, n) {
                e.exports = n(703)();
              },
              414: function (e) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
              },
            },
            r = {};
          function a(e) {
            var n = r[e];
            if (void 0 !== n) return n.exports;
            var o = (r[e] = { exports: {} });
            return t[e](o, o.exports, a), o.exports;
          }
          (a.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return a.d(t, { a: t }), t;
          }),
            (a.d = function (e, t) {
              for (var n in t)
                a.o(t, n) &&
                  !a.o(e, n) &&
                  Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
            (a.g = (function () {
              if ("object" == typeof globalThis) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (t) {
                if ("object" == typeof window) return window;
              }
            })()),
            (a.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (a.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            });
          var o = {};
          (function () {
            "use strict";
            a.r(o),
              a.d(o, {
                LazyLoadComponent: function () {
                  return Q;
                },
                LazyLoadImage: function () {
                  return ae;
                },
                trackWindowScroll: function () {
                  return L;
                },
              });
            var e = n(313),
              t = a.n(e),
              r = a(697),
              i = n(168),
              l = a.n(i);
            function s() {
              return (
                "undefined" != typeof window &&
                "IntersectionObserver" in window &&
                "isIntersecting" in window.IntersectionObserverEntry.prototype
              );
            }
            function u(e) {
              return (u =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function c(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function f(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function d(e, t) {
              return (d =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function p(e, t) {
              if (t && ("object" === u(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            }
            function h(e) {
              return (h = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            var v = function (e) {
                e.forEach(function (e) {
                  e.isIntersecting && e.target.onVisible();
                });
              },
              m = {},
              y = (function (e) {
                !(function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && d(e, t);
                })(i, e);
                var n,
                  r,
                  a,
                  o =
                    ((r = i),
                    (a = (function () {
                      if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        t = h(r);
                      if (a) {
                        var n = h(this).constructor;
                        e = Reflect.construct(t, arguments, n);
                      } else e = t.apply(this, arguments);
                      return p(this, e);
                    });
                function i(e) {
                  var t;
                  if (
                    ((function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, i),
                    ((t = o.call(this, e)).supportsObserver =
                      !e.scrollPosition && e.useIntersectionObserver && s()),
                    t.supportsObserver)
                  ) {
                    var n = e.threshold;
                    t.observer = (function (e) {
                      return (
                        (m[e] =
                          m[e] ||
                          new IntersectionObserver(v, {
                            rootMargin: e + "px",
                          })),
                        m[e]
                      );
                    })(n);
                  }
                  return t;
                }
                return (
                  (n = [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.placeholder &&
                          this.observer &&
                          ((this.placeholder.onVisible = this.props.onVisible),
                          this.observer.observe(this.placeholder)),
                          this.supportsObserver || this.updateVisibility();
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.observer &&
                          this.observer.unobserve(this.placeholder);
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function () {
                        this.supportsObserver || this.updateVisibility();
                      },
                    },
                    {
                      key: "getPlaceholderBoundingBox",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : this.props.scrollPosition,
                          t = this.placeholder.getBoundingClientRect(),
                          n = l().findDOMNode(this.placeholder).style,
                          r = {
                            left:
                              parseInt(n.getPropertyValue("margin-left"), 10) ||
                              0,
                            top:
                              parseInt(n.getPropertyValue("margin-top"), 10) ||
                              0,
                          };
                        return {
                          bottom: e.y + t.bottom + r.top,
                          left: e.x + t.left + r.left,
                          right: e.x + t.right + r.left,
                          top: e.y + t.top + r.top,
                        };
                      },
                    },
                    {
                      key: "isPlaceholderInViewport",
                      value: function () {
                        if ("undefined" == typeof window || !this.placeholder)
                          return !1;
                        var e = this.props,
                          t = e.scrollPosition,
                          n = e.threshold,
                          r = this.getPlaceholderBoundingBox(t),
                          a = t.y + window.innerHeight,
                          o = t.x,
                          i = t.x + window.innerWidth,
                          l = t.y;
                        return Boolean(
                          l - n <= r.bottom &&
                            a + n >= r.top &&
                            o - n <= r.right &&
                            i + n >= r.left
                        );
                      },
                    },
                    {
                      key: "updateVisibility",
                      value: function () {
                        this.isPlaceholderInViewport() &&
                          this.props.onVisible();
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          n = this.props,
                          r = n.className,
                          a = n.height,
                          o = n.placeholder,
                          i = n.style,
                          l = n.width;
                        if (o && "function" != typeof o.type)
                          return t().cloneElement(o, {
                            ref: function (t) {
                              return (e.placeholder = t);
                            },
                          });
                        var s = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? c(Object(n), !0).forEach(function (t) {
                                  f(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n)
                                )
                              : c(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t)
                                  );
                                });
                          }
                          return e;
                        })({ display: "inline-block" }, i);
                        return (
                          void 0 !== l && (s.width = l),
                          void 0 !== a && (s.height = a),
                          t().createElement(
                            "span",
                            {
                              className: r,
                              ref: function (t) {
                                return (e.placeholder = t);
                              },
                              style: s,
                            },
                            o
                          )
                        );
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    })(i.prototype, n),
                  i
                );
              })(t().Component);
            (y.propTypes = {
              onVisible: r.PropTypes.func.isRequired,
              className: r.PropTypes.string,
              height: r.PropTypes.oneOfType([
                r.PropTypes.number,
                r.PropTypes.string,
              ]),
              placeholder: r.PropTypes.element,
              threshold: r.PropTypes.number,
              useIntersectionObserver: r.PropTypes.bool,
              scrollPosition: r.PropTypes.shape({
                x: r.PropTypes.number.isRequired,
                y: r.PropTypes.number.isRequired,
              }),
              width: r.PropTypes.oneOfType([
                r.PropTypes.number,
                r.PropTypes.string,
              ]),
            }),
              (y.defaultProps = {
                className: "",
                placeholder: null,
                threshold: 100,
                useIntersectionObserver: !0,
              });
            var g = y,
              b = a(296),
              x = a.n(b),
              w = a(96),
              k = a.n(w),
              S = function (e) {
                var t = getComputedStyle(e, null);
                return (
                  t.getPropertyValue("overflow") +
                  t.getPropertyValue("overflow-y") +
                  t.getPropertyValue("overflow-x")
                );
              },
              E = function (e) {
                if (!(e instanceof HTMLElement)) return window;
                for (var t = e; t && t instanceof HTMLElement; ) {
                  if (/(scroll|auto)/.test(S(t))) return t;
                  t = t.parentNode;
                }
                return window;
              };
            function T(e) {
              return (T =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            var j = ["delayMethod", "delayTime"];
            function A() {
              return (A =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            function O(e, t) {
              return (O =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function P(e, t) {
              if (t && ("object" === T(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return C(e);
            }
            function C(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function N(e) {
              return (N = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            var R = function () {
                return "undefined" == typeof window
                  ? 0
                  : window.scrollX || window.pageXOffset;
              },
              M = function () {
                return "undefined" == typeof window
                  ? 0
                  : window.scrollY || window.pageYOffset;
              },
              L = function (e) {
                var n = (function (n) {
                  !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                      t && O(e, t);
                  })(u, n);
                  var r,
                    a,
                    o,
                    i =
                      ((a = u),
                      (o = (function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct)
                          return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {})
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          t = N(a);
                        if (o) {
                          var n = N(this).constructor;
                          e = Reflect.construct(t, arguments, n);
                        } else e = t.apply(this, arguments);
                        return P(this, e);
                      });
                  function u(e) {
                    var n;
                    if (
                      ((function (e, t) {
                        if (!(e instanceof t))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, u),
                      ((n = i.call(this, e)).useIntersectionObserver =
                        e.useIntersectionObserver && s()),
                      n.useIntersectionObserver)
                    )
                      return P(n);
                    var r = n.onChangeScroll.bind(C(n));
                    return (
                      "debounce" === e.delayMethod
                        ? (n.delayedScroll = x()(r, e.delayTime))
                        : "throttle" === e.delayMethod &&
                          (n.delayedScroll = k()(r, e.delayTime)),
                      (n.state = { scrollPosition: { x: R(), y: M() } }),
                      (n.baseComponentRef = t().createRef()),
                      n
                    );
                  }
                  return (
                    (r = [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.addListeners();
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.removeListeners();
                        },
                      },
                      {
                        key: "componentDidUpdate",
                        value: function () {
                          "undefined" == typeof window ||
                            this.useIntersectionObserver ||
                            (E(
                              l().findDOMNode(this.baseComponentRef.current)
                            ) !== this.scrollElement &&
                              (this.removeListeners(), this.addListeners()));
                        },
                      },
                      {
                        key: "addListeners",
                        value: function () {
                          "undefined" == typeof window ||
                            this.useIntersectionObserver ||
                            ((this.scrollElement = E(
                              l().findDOMNode(this.baseComponentRef.current)
                            )),
                            this.scrollElement.addEventListener(
                              "scroll",
                              this.delayedScroll,
                              { passive: !0 }
                            ),
                            window.addEventListener(
                              "resize",
                              this.delayedScroll,
                              { passive: !0 }
                            ),
                            this.scrollElement !== window &&
                              window.addEventListener(
                                "scroll",
                                this.delayedScroll,
                                { passive: !0 }
                              ));
                        },
                      },
                      {
                        key: "removeListeners",
                        value: function () {
                          "undefined" == typeof window ||
                            this.useIntersectionObserver ||
                            (this.scrollElement.removeEventListener(
                              "scroll",
                              this.delayedScroll
                            ),
                            window.removeEventListener(
                              "resize",
                              this.delayedScroll
                            ),
                            this.scrollElement !== window &&
                              window.removeEventListener(
                                "scroll",
                                this.delayedScroll
                              ));
                        },
                      },
                      {
                        key: "onChangeScroll",
                        value: function () {
                          this.useIntersectionObserver ||
                            this.setState({
                              scrollPosition: { x: R(), y: M() },
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var n = this.props,
                            r =
                              (n.delayMethod,
                              n.delayTime,
                              (function (e, t) {
                                if (null == e) return {};
                                var n,
                                  r,
                                  a = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                      r,
                                      a = {},
                                      o = Object.keys(e);
                                    for (r = 0; r < o.length; r++)
                                      (n = o[r]),
                                        t.indexOf(n) >= 0 || (a[n] = e[n]);
                                    return a;
                                  })(e, t);
                                if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  for (r = 0; r < o.length; r++)
                                    (n = o[r]),
                                      t.indexOf(n) >= 0 ||
                                        (Object.prototype.propertyIsEnumerable.call(
                                          e,
                                          n
                                        ) &&
                                          (a[n] = e[n]));
                                }
                                return a;
                              })(n, j)),
                            a = this.useIntersectionObserver
                              ? null
                              : this.state.scrollPosition;
                          return t().createElement(
                            e,
                            A(
                              {
                                forwardRef: this.baseComponentRef,
                                scrollPosition: a,
                              },
                              r
                            )
                          );
                        },
                      },
                    ]) &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                        }
                      })(u.prototype, r),
                    u
                  );
                })(t().Component);
                return (
                  (n.propTypes = {
                    delayMethod: r.PropTypes.oneOf(["debounce", "throttle"]),
                    delayTime: r.PropTypes.number,
                    useIntersectionObserver: r.PropTypes.bool,
                  }),
                  (n.defaultProps = {
                    delayMethod: "throttle",
                    delayTime: 300,
                    useIntersectionObserver: !0,
                  }),
                  n
                );
              };
            function I(e) {
              return (I =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function D(e, t) {
              return (D =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function J(e, t) {
              if (t && ("object" === I(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            }
            function V(e) {
              return (V = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            var U = (function (e) {
                !(function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && D(e, t);
                })(i, e);
                var n,
                  r,
                  a,
                  o =
                    ((r = i),
                    (a = (function () {
                      if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                      if (Reflect.construct.sham) return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        t = V(r);
                      if (a) {
                        var n = V(this).constructor;
                        e = Reflect.construct(t, arguments, n);
                      } else e = t.apply(this, arguments);
                      return J(this, e);
                    });
                function i(e) {
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, i),
                    o.call(this, e)
                  );
                }
                return (
                  (n = [
                    {
                      key: "render",
                      value: function () {
                        return t().createElement(g, this.props);
                      },
                    },
                  ]) &&
                    (function (e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    })(i.prototype, n),
                  i
                );
              })(t().Component),
              z = L(U);
            function B(e) {
              return (B =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function F(e, t) {
              return (F =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function W(e, t) {
              if (t && ("object" === B(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return q(e);
            }
            function q(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function G(e) {
              return (G = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            var _ = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && F(e, t);
              })(i, e);
              var n,
                r,
                a,
                o =
                  ((r = i),
                  (a = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t = G(r);
                    if (a) {
                      var n = G(this).constructor;
                      e = Reflect.construct(t, arguments, n);
                    } else e = t.apply(this, arguments);
                    return W(this, e);
                  });
              function i(e) {
                var t;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, i),
                  (t = o.call(this, e));
                var n = e.afterLoad,
                  r = e.beforeLoad,
                  a = e.scrollPosition,
                  l = e.visibleByDefault;
                return (
                  (t.state = { visible: l }),
                  l && (r(), n()),
                  (t.onVisible = t.onVisible.bind(q(t))),
                  (t.isScrollTracked = Boolean(
                    a &&
                      Number.isFinite(a.x) &&
                      a.x >= 0 &&
                      Number.isFinite(a.y) &&
                      a.y >= 0
                  )),
                  t
                );
              }
              return (
                (n = [
                  {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                      t.visible !== this.state.visible &&
                        this.props.afterLoad();
                    },
                  },
                  {
                    key: "onVisible",
                    value: function () {
                      this.props.beforeLoad(), this.setState({ visible: !0 });
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      if (this.state.visible) return this.props.children;
                      var e = this.props,
                        n = e.className,
                        r = e.delayMethod,
                        a = e.delayTime,
                        o = e.height,
                        i = e.placeholder,
                        l = e.scrollPosition,
                        u = e.style,
                        c = e.threshold,
                        f = e.useIntersectionObserver,
                        d = e.width;
                      return this.isScrollTracked || (f && s())
                        ? t().createElement(g, {
                            className: n,
                            height: o,
                            onVisible: this.onVisible,
                            placeholder: i,
                            scrollPosition: l,
                            style: u,
                            threshold: c,
                            useIntersectionObserver: f,
                            width: d,
                          })
                        : t().createElement(z, {
                            className: n,
                            delayMethod: r,
                            delayTime: a,
                            height: o,
                            onVisible: this.onVisible,
                            placeholder: i,
                            style: u,
                            threshold: c,
                            width: d,
                          });
                    },
                  },
                ]) &&
                  (function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  })(i.prototype, n),
                i
              );
            })(t().Component);
            (_.propTypes = {
              afterLoad: r.PropTypes.func,
              beforeLoad: r.PropTypes.func,
              useIntersectionObserver: r.PropTypes.bool,
              visibleByDefault: r.PropTypes.bool,
            }),
              (_.defaultProps = {
                afterLoad: function () {
                  return {};
                },
                beforeLoad: function () {
                  return {};
                },
                useIntersectionObserver: !0,
                visibleByDefault: !1,
              });
            var Q = _;
            function Z(e) {
              return (Z =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            var H = [
              "afterLoad",
              "beforeLoad",
              "delayMethod",
              "delayTime",
              "effect",
              "placeholder",
              "placeholderSrc",
              "scrollPosition",
              "threshold",
              "useIntersectionObserver",
              "visibleByDefault",
              "wrapperClassName",
              "wrapperProps",
            ];
            function Y(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function K(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? Y(Object(n), !0).forEach(function (t) {
                      X(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : Y(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function X(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n),
                e
              );
            }
            function $() {
              return ($ =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            function ee(e, t) {
              return (ee =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function te(e, t) {
              if (t && ("object" === Z(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e);
            }
            function ne(e) {
              return (ne = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            var re = (function (e) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && ee(e, t);
              })(i, e);
              var n,
                r,
                a,
                o =
                  ((r = i),
                  (a = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t = ne(r);
                    if (a) {
                      var n = ne(this).constructor;
                      e = Reflect.construct(t, arguments, n);
                    } else e = t.apply(this, arguments);
                    return te(this, e);
                  });
              function i(e) {
                var t;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, i),
                  ((t = o.call(this, e)).state = { loaded: !1 }),
                  t
                );
              }
              return (
                (n = [
                  {
                    key: "onImageLoad",
                    value: function () {
                      var e = this;
                      return this.state.loaded
                        ? null
                        : function () {
                            e.props.afterLoad(), e.setState({ loaded: !0 });
                          };
                    },
                  },
                  {
                    key: "getImg",
                    value: function () {
                      var e = this.props,
                        n =
                          (e.afterLoad,
                          e.beforeLoad,
                          e.delayMethod,
                          e.delayTime,
                          e.effect,
                          e.placeholder,
                          e.placeholderSrc,
                          e.scrollPosition,
                          e.threshold,
                          e.useIntersectionObserver,
                          e.visibleByDefault,
                          e.wrapperClassName,
                          e.wrapperProps,
                          (function (e, t) {
                            if (null == e) return {};
                            var n,
                              r,
                              a = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                  r,
                                  a = {},
                                  o = Object.keys(e);
                                for (r = 0; r < o.length; r++)
                                  (n = o[r]),
                                    t.indexOf(n) >= 0 || (a[n] = e[n]);
                                return a;
                              })(e, t);
                            if (Object.getOwnPropertySymbols) {
                              var o = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < o.length; r++)
                                (n = o[r]),
                                  t.indexOf(n) >= 0 ||
                                    (Object.prototype.propertyIsEnumerable.call(
                                      e,
                                      n
                                    ) &&
                                      (a[n] = e[n]));
                            }
                            return a;
                          })(e, H));
                      return t().createElement(
                        "img",
                        $({ onLoad: this.onImageLoad() }, n)
                      );
                    },
                  },
                  {
                    key: "getLazyLoadImage",
                    value: function () {
                      var e = this.props,
                        n = e.beforeLoad,
                        r = e.className,
                        a = e.delayMethod,
                        o = e.delayTime,
                        i = e.height,
                        l = e.placeholder,
                        s = e.scrollPosition,
                        u = e.style,
                        c = e.threshold,
                        f = e.useIntersectionObserver,
                        d = e.visibleByDefault,
                        p = e.width;
                      return t().createElement(
                        Q,
                        {
                          beforeLoad: n,
                          className: r,
                          delayMethod: a,
                          delayTime: o,
                          height: i,
                          placeholder: l,
                          scrollPosition: s,
                          style: u,
                          threshold: c,
                          useIntersectionObserver: f,
                          visibleByDefault: d,
                          width: p,
                        },
                        this.getImg()
                      );
                    },
                  },
                  {
                    key: "getWrappedLazyLoadImage",
                    value: function (e) {
                      var n = this.props,
                        r = n.effect,
                        a = n.height,
                        o = n.placeholderSrc,
                        i = n.width,
                        l = n.wrapperClassName,
                        s = n.wrapperProps,
                        u = this.state.loaded,
                        c = u ? " lazy-load-image-loaded" : "",
                        f =
                          u || !o
                            ? {}
                            : {
                                backgroundImage: "url(".concat(o, ")"),
                                backgroundSize: "100% 100%",
                              };
                      return t().createElement(
                        "span",
                        $(
                          {
                            className:
                              l + " lazy-load-image-background " + r + c,
                            style: K(
                              K({}, f),
                              {},
                              {
                                color: "transparent",
                                display: "inline-block",
                                height: a,
                                width: i,
                              }
                            ),
                          },
                          s
                        ),
                        e
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.effect,
                        n = e.placeholderSrc,
                        r = e.visibleByDefault,
                        a = e.wrapperClassName,
                        o = e.wrapperProps,
                        i = this.getLazyLoadImage();
                      return ((t || n) && !r) || a || o
                        ? this.getWrappedLazyLoadImage(i)
                        : i;
                    },
                  },
                ]) &&
                  (function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  })(i.prototype, n),
                i
              );
            })(t().Component);
            (re.propTypes = {
              afterLoad: r.PropTypes.func,
              beforeLoad: r.PropTypes.func,
              delayMethod: r.PropTypes.string,
              delayTime: r.PropTypes.number,
              effect: r.PropTypes.string,
              placeholderSrc: r.PropTypes.string,
              threshold: r.PropTypes.number,
              useIntersectionObserver: r.PropTypes.bool,
              visibleByDefault: r.PropTypes.bool,
              wrapperClassName: r.PropTypes.string,
              wrapperProps: r.PropTypes.object,
            }),
              (re.defaultProps = {
                afterLoad: function () {
                  return {};
                },
                beforeLoad: function () {
                  return {};
                },
                delayMethod: "throttle",
                delayTime: 300,
                effect: "",
                placeholderSrc: null,
                threshold: 100,
                useIntersectionObserver: !0,
                visibleByDefault: !1,
                wrapperClassName: "",
              });
            var ae = re;
          })(),
            (e.exports = o);
        })();
      },
      63: function (e, t, n) {
        "use strict";
        var r,
          a = n(313),
          o =
            (r = a) && "object" === typeof r && "default" in r ? r.default : r;
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var l = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = function (e, t, n) {
          if ("function" !== typeof e)
            throw new Error("Expected reducePropsToState to be a function.");
          if ("function" !== typeof t)
            throw new Error(
              "Expected handleStateChangeOnClient to be a function."
            );
          if ("undefined" !== typeof n && "function" !== typeof n)
            throw new Error(
              "Expected mapStateOnServer to either be undefined or a function."
            );
          return function (r) {
            if ("function" !== typeof r)
              throw new Error(
                "Expected WrappedComponent to be a React component."
              );
            var s,
              u = [];
            function c() {
              (s = e(
                u.map(function (e) {
                  return e.props;
                })
              )),
                f.canUseDOM ? t(s) : n && (s = n(s));
            }
            var f = (function (e) {
              var t, n;
              function a() {
                return e.apply(this, arguments) || this;
              }
              (n = e),
                ((t = a).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (a.peek = function () {
                  return s;
                }),
                (a.rewind = function () {
                  if (a.canUseDOM)
                    throw new Error(
                      "You may only call rewind() on the server. Call peek() to read the current state."
                    );
                  var e = s;
                  return (s = void 0), (u = []), e;
                });
              var i = a.prototype;
              return (
                (i.UNSAFE_componentWillMount = function () {
                  u.push(this), c();
                }),
                (i.componentDidUpdate = function () {
                  c();
                }),
                (i.componentWillUnmount = function () {
                  var e = u.indexOf(this);
                  u.splice(e, 1), c();
                }),
                (i.render = function () {
                  return o.createElement(r, this.props);
                }),
                a
              );
            })(a.PureComponent);
            return (
              i(
                f,
                "displayName",
                "SideEffect(" +
                  (function (e) {
                    return e.displayName || e.name || "Component";
                  })(r) +
                  ")"
              ),
              i(f, "canUseDOM", l),
              f
            );
          };
        };
      },
      918: function (e, t, n) {
        "use strict";
        var r = n(313),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      306: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var x = (b.prototype = new g());
        (x.constructor = b), v(x, y.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function T(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === o[a] && (o[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: S.current,
          };
        }
        function j(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var A = /\/+/g;
        function O(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === o ? "." + O(s, 0) : o),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(A, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (j(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(A, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + O((l = e[u]), u);
              s += P(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += P((l = l.value), t, a, (c = o + O(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function C(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          M = { transition: null },
          L = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: C,
          forEach: function (e, t, n) {
            C(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              C(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              C(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!j(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = T),
          (t.createFactory = function (e) {
            var t = T.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = j),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      313: function (e, t, n) {
        "use strict";
        e.exports = n(306);
      },
      417: function (e, t, n) {
        "use strict";
        e.exports = n(918);
      },
      95: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < a && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(u)) (v = !0), M(k);
            else {
              var t = r(c);
              null !== t && L(w, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), g(j), (j = -1)), (h = !0);
          var o = p;
          try {
            for (
              x(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && a(u),
                  x(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && L(w, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          T = null,
          j = -1,
          A = 5,
          O = -1;
        function P() {
          return !(t.unstable_now() - O < A);
        }
        function C() {
          if (null !== T) {
            var e = t.unstable_now();
            O = e;
            var n = !0;
            try {
              n = T(!0, e);
            } finally {
              n ? S() : ((E = !1), (T = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(C);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            R = N.port2;
          (N.port1.onmessage = C),
            (S = function () {
              R.postMessage(null);
            });
        } else
          S = function () {
            y(C, 0);
          };
        function M(e) {
          (T = e), E || ((E = !0), S());
        }
        function L(e, n) {
          j = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), M(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (A = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (g(j), (j = -1)) : (m = !0), L(w, o - i)))
                : ((e.sortIndex = l), n(u, e), v || h || ((v = !0), M(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      224: function (e, t, n) {
        "use strict";
        e.exports = n(95);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e,
        t = n(313),
        r = n.t(t, 2),
        a = n(168);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o = [],
                i = !0,
                l = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  i = !0
                );
              } catch (s) {
                (l = !0), (a = s);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (l) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          i(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          i(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function f(e, t, n) {
        return (
          t && c(e.prototype, t),
          n && c(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function d(e, t) {
        return (
          (d = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          d(e, t)
        );
      }
      function p(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && d(e, t);
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function v() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function m(e) {
        return (
          (m =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          m(e)
        );
      }
      function y(e, t) {
        if (t && ("object" === m(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function g(e) {
        var t = v();
        return function () {
          var n,
            r = h(e);
          if (t) {
            var a = h(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return y(this, n);
        };
      }
      function b(e, t, n) {
        return (
          (b = v()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && d(a, n.prototype), a;
              }),
          b.apply(null, arguments)
        );
      }
      function x(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (x = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return b(e, arguments, h(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              d(r, e)
            );
          }),
          x(e)
        );
      }
      function w() {
        return (
          (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          w.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var k,
        S = "popstate";
      function E(e) {
        return { usr: e.state, key: e.key };
      }
      function T(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          w(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? A(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function j(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function A(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function O(e) {
        var t =
            "undefined" !== typeof window &&
            "undefined" !== typeof window.location &&
            "null" !== window.location.origin
              ? window.location.origin
              : "unknown://unknown",
          n = "string" === typeof e ? e : j(e);
        return new URL(n, t);
      }
      function P(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          s = o.v5Compat,
          u = void 0 !== s && s,
          c = l.history,
          f = e.Pop,
          d = null;
        function p() {
          (f = e.Pop), d && d({ action: f, location: h.location });
        }
        var h = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(S, p),
              (d = e),
              function () {
                l.removeEventListener(S, p), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          encodeLocation: function (e) {
            var t = O(j(e));
            return w({}, e, {
              pathname: t.pathname,
              search: t.search,
              hash: t.hash,
            });
          },
          push: function (t, n) {
            f = e.Push;
            var a = T(h.location, t, n);
            r && r(a, t);
            var o = E(a),
              i = h.createHref(a);
            try {
              c.pushState(o, "", i);
            } catch (s) {
              l.location.assign(i);
            }
            u && d && d({ action: f, location: h.location });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = T(h.location, t, n);
            r && r(a, t);
            var o = E(a),
              i = h.createHref(a);
            c.replaceState(o, "", i),
              u && d && d({ action: f, location: h.location });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return h;
      }
      function C(e, t, n) {
        void 0 === n && (n = "/");
        var r = V(("string" === typeof t ? A(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = N(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = I(a[i], J(r));
        return o;
      }
      function N(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach(function (e, a) {
            var o = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            o.relativePath.startsWith("/") &&
              (U(
                o.relativePath.startsWith(r),
                'Absolute route path "' +
                  o.relativePath +
                  '" nested under path "' +
                  r +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (o.relativePath = o.relativePath.slice(r.length)));
            var i = B([r, o.relativePath]),
              l = n.concat(o);
            e.children &&
              e.children.length > 0 &&
              (U(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' +
                  i +
                  '".'
              ),
              N(e.children, t, l, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: L(i, e.index), routesMeta: l });
          }),
          t
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(k || (k = {}));
      var R = /^:\w+$/,
        M = function (e) {
          return "*" === e;
        };
      function L(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(M) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !M(e);
            })
            .reduce(function (e, t) {
              return e + (R.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function I(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            s = i === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = D(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: B([a, c.pathname]),
            pathnameBase: F(B([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = B([a, c.pathnameBase]));
        }
        return o;
      }
      function D(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            z(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return r.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            return [new RegExp(a, t ? void 0 : "i"), r];
          })(e.path, e.caseSensitive, e.end),
          r = l(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var s = i[0],
          u = s.replace(/(.)\/+$/, "$1"),
          c = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    z(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: s,
          pathnameBase: u,
          pattern: e,
        };
      }
      function J(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            z(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function V(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function U(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function z(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      var B = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        F = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        W = (function (e) {
          p(n, e);
          var t = g(n);
          function n() {
            return u(this, n), t.apply(this, arguments);
          }
          return f(n);
        })(x(Error));
      var q = f(function e(t, n, r) {
        u(this, e),
          (this.status = t),
          (this.statusText = n || ""),
          (this.data = r);
      });
      function G(e) {
        return e instanceof q;
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var _ = new Set(["POST", "PUT", "PATCH", "DELETE"]);
      new Set(["GET", "HEAD"].concat(s(_)));
      function Q() {
        return (
          (Q = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Q.apply(this, arguments)
        );
      }
      var Z =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        H = t.useState,
        Y = t.useEffect,
        K = t.useLayoutEffect,
        X = t.useDebugValue;
      function $(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !Z(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var ee = t.createContext(null);
      var te = t.createContext(null);
      var ne = t.createContext(null);
      var re = t.createContext(null);
      var ae = t.createContext(null);
      var oe = t.createContext(null);
      var ie = t.createContext({ outlet: null, matches: [] });
      var le = t.createContext(null);
      function se() {
        return null != t.useContext(oe);
      }
      function ue() {
        return se() || U(!1), t.useContext(oe).location;
      }
      function ce() {
        var e = (function () {
            var e,
              n = t.useContext(le),
              r = me(de.UseRouteError),
              a = t.useContext(ie),
              o = a.matches[a.matches.length - 1];
            if (n) return n;
            return (
              a || U(!1),
              !o.route.id && U(!1),
              null == (e = r.errors) ? void 0 : e[o.route.id]
            );
          })(),
          n = G(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a },
          i = { padding: "2px 4px", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: i }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: i }, "<Route>")
          )
        );
      }
      var fe,
        de,
        pe = (function (e) {
          p(r, e);
          var n = g(r);
          function r(e) {
            var t;
            return (
              u(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            f(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(le.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                        })
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function he(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(ee);
        return (
          o &&
            r.route.errorElement &&
            (o._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ie.Provider, { value: n }, a)
        );
      }
      function ve(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          o = null == r ? void 0 : r.errors;
        if (null != o) {
          var i = a.findIndex(function (e) {
            return e.route.id && (null == o ? void 0 : o[e.route.id]);
          });
          i >= 0 || U(!1), (a = a.slice(0, Math.min(a.length, i + 1)));
        }
        return a.reduceRight(function (e, i, l) {
          var s = i.route.id ? (null == o ? void 0 : o[i.route.id]) : null,
            u = r ? i.route.errorElement || t.createElement(ce, null) : null,
            c = function () {
              return t.createElement(
                he,
                {
                  match: i,
                  routeContext: {
                    outlet: e,
                    matches: n.concat(a.slice(0, l + 1)),
                  },
                },
                s ? u : void 0 !== i.route.element ? i.route.element : e
              );
            };
          return r && (i.route.errorElement || 0 === l)
            ? t.createElement(pe, {
                location: r.location,
                component: u,
                error: s,
                children: c(),
              })
            : c();
        }, null);
      }
      function me(e) {
        var n = t.useContext(ne);
        return n || U(!1), n;
      }
      !(function (e) {
        e.UseRevalidator = "useRevalidator";
      })(fe || (fe = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(de || (de = {}));
      var ye;
      function ge(e) {
        U(!1);
      }
      function be(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          s = n.navigationType,
          u = void 0 === s ? e.Pop : s,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        se() && U(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof l && (l = A(l));
        var v = l,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          x = v.hash,
          w = void 0 === x ? "" : x,
          k = v.state,
          S = void 0 === k ? null : k,
          E = v.key,
          T = void 0 === E ? "default" : E,
          j = t.useMemo(
            function () {
              var e = V(y, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: w, state: S, key: T };
            },
            [p, y, b, w, S, T]
          );
        return null == j
          ? null
          : t.createElement(
              ae.Provider,
              { value: h },
              t.createElement(oe.Provider, {
                children: i,
                value: { location: j, navigationType: u },
              })
            );
      }
      function xe(n) {
        var r = n.children,
          a = n.location,
          o = t.useContext(te);
        return (function (n, r) {
          se() || U(!1);
          var a,
            o = t.useContext(ne),
            i = t.useContext(ie).matches,
            l = i[i.length - 1],
            s = l ? l.params : {},
            u = (l && l.pathname, l ? l.pathnameBase : "/"),
            c = (l && l.route, ue());
          if (r) {
            var f,
              d = "string" === typeof r ? A(r) : r;
            "/" === u ||
              (null == (f = d.pathname) ? void 0 : f.startsWith(u)) ||
              U(!1),
              (a = d);
          } else a = c;
          var p = a.pathname || "/",
            h = C(n, { pathname: "/" === u ? p : p.slice(u.length) || "/" }),
            v = ve(
              h &&
                h.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: B([u, e.pathname]),
                    pathnameBase:
                      "/" === e.pathnameBase ? u : B([u, e.pathnameBase]),
                  });
                }),
              i,
              o || void 0
            );
          return r && v
            ? t.createElement(
                oe.Provider,
                {
                  value: {
                    location: Q(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                v
              )
            : v;
        })(o && !r ? o.router.routes : ke(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(ye || (ye = {}));
      var we = new Promise(function () {});
      t.Component;
      function ke(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== ge && U(!1),
                  e.props.index && e.props.children && U(!1);
                var o = [].concat(s(n), [a]),
                  i = {
                    id: e.props.id || o.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (i.children = ke(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, ke(e.props.children, n));
          }),
          r
        );
      }
      function Se(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.window,
          i = t.useRef();
        null == i.current &&
          (i.current =
            (void 0 === (n = { window: o, v5Compat: !0 }) && (n = {}),
            P(
              function (e, t) {
                var n = e.location;
                return T(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : j(t);
              },
              null,
              n
            )));
        var s = i.current,
          u = l(t.useState({ action: s.action, location: s.location }), 2),
          c = u[0],
          f = u[1];
        return (
          t.useLayoutEffect(
            function () {
              return s.listen(f);
            },
            [s]
          ),
          t.createElement(be, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: s,
          })
        );
      }
      var Ee, Te;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(Ee || (Ee = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Te || (Te = {}));
      var je = n(786);
      var Ae = function () {
          return (
            (0, t.useEffect)(function () {
              je.ZP.send({
                hitType: "pageview",
                page: window.location.pathname + window.location.search,
              });
            }, []),
            function () {}
          );
        },
        Oe = n(417);
      var Pe = function () {
        return (0, Oe.jsxs)("div", {
          id: "drawer-navigation",
          className:
            "fixed z-[1000] h-screen p-4 overflow-y-auto bg-[#222429] w-80 dark:bg-[#222429] dark",
          tabindex: "-1",
          "aria-labelledby": "drawer-navigation-label",
          "aria-hidden": "true",
          backdropClases: "backdrop",
          children: [
            (0, Oe.jsx)("h5", {
              id: "drawer-navigation-label",
              className:
                "text-base font-semibold text-gray-500 uppercase dark:text-gray-400",
              children: "Menu",
            }),
            (0, Oe.jsxs)("button", {
              type: "button",
              "data-drawer-dismiss": "drawer-navigation",
              "aria-controls": "drawer-navigation",
              className:
                "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
              children: [
                (0, Oe.jsx)("svg", {
                  "aria-hidden": "true",
                  className: "w-5 h-5",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: (0, Oe.jsx)("path", {
                    "fill-rule": "evenodd",
                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                    "clip-rule": "evenodd",
                  }),
                }),
                (0, Oe.jsx)("span", {
                  className: "sr-only",
                  children: "Close menu",
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              className: "py-4 overflow-y-auto",
              children: (0, Oe.jsxs)("ul", {
                className: "space-y-2",
                "data-drawer-dismiss": "drawer-navigation",
                "aria-controls": "drawer-navigation",
                children: [
                  (0, Oe.jsx)("li", {
                    children: (0, Oe.jsxs)("a", {
                      href: "/#home",
                      className:
                        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                      children: [
                        (0, Oe.jsxs)("svg", {
                          width: 19,
                          height: 19,
                          fill: "none",
                          stroke: "#9ca3af",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2.5,
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, Oe.jsx)("path", {
                              d: "M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937",
                            }),
                            (0, Oe.jsx)("path", {
                              d: "m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999",
                            }),
                            (0, Oe.jsx)("path", {
                              d: "M18.75 8.39V3H16.5v3.234",
                            }),
                          ],
                        }),
                        (0, Oe.jsx)("span", {
                          className: "ml-3",
                          children: "Acas\u0103",
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsx)("li", {
                    children: (0, Oe.jsxs)("a", {
                      href: "#serviciile-noastre",
                      className:
                        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                      children: [
                        (0, Oe.jsxs)("svg", {
                          width: 19,
                          height: 19,
                          fill: "none",
                          stroke: "#9ca3af",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2.5,
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, Oe.jsx)("path", {
                              d: "m20.381 6.452-7-3.192c-.76-.347-2.002-.347-2.76 0L3.623 6.452c-.825.375-.825.989 0 1.364l6.937 3.164c.792.36 2.095.36 2.887 0l6.937-3.164c.821-.375.821-.99-.004-1.364Z",
                            }),
                            (0, Oe.jsx)("path", {
                              d: "m7.5 14.462-3.876 1.74c-.825.375-.825.989 0 1.364l6.937 3.164c.792.36 2.095.36 2.887 0l6.937-3.164c.825-.375.825-.99 0-1.364l-3.747-1.804",
                            }),
                            (0, Oe.jsx)("path", {
                              d: "m7.5 9.586-3.881 1.742c-.825.375-.825.989 0 1.364l6.937 3.163c.792.361 2.095.361 2.887 0l6.937-3.163c.83-.375.83-.99.005-1.364L16.5 9.586",
                            }),
                          ],
                        }),
                        (0, Oe.jsx)("span", {
                          className: "flex-1 ml-3 whitespace-nowrap",
                          children: "Serviciile noastre",
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsx)("li", {
                    children: (0, Oe.jsxs)("a", {
                      href: "/#cum-te-putem-ajuta-noi",
                      className:
                        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                      children: [
                        (0, Oe.jsxs)("svg", {
                          width: 19,
                          height: 19,
                          fill: "none",
                          stroke: "#9ca3af",
                          strokeLinecap: "round",
                          strokeWidth: 2.5,
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, Oe.jsx)("path", {
                              d: "M7.5 7.688s.067-1.547 1.572-2.787c.894-.737 1.967-.95 2.928-.963.878-.01 1.663.138 2.132.367.802.392 2.368 1.349 2.368 3.383 0 2.14-1.368 3.111-2.923 4.18-1.554 1.07-1.952 2.118-1.952 3.32",
                            }),
                            (0, Oe.jsx)("path", {
                              fill: "#9ca3af",
                              stroke: "none",
                              d: "M11.625 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
                            }),
                          ],
                        }),
                        (0, Oe.jsx)("span", {
                          className: "flex-1 ml-3 whitespace-nowrap",
                          children: "Cum te putem ajuta noi?",
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsx)("li", {
                    children: (0, Oe.jsxs)("a", {
                      href: "/#de-ce-sa-ne-alegi-pe-noi",
                      className:
                        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                      children: [
                        (0, Oe.jsxs)("svg", {
                          width: 19,
                          height: 19,
                          fill: "none",
                          stroke: "#9ca3af",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2.5,
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, Oe.jsx)("path", {
                              d: "M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z",
                            }),
                            (0, Oe.jsx)("path", {
                              d: "M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z",
                            }),
                          ],
                        }),
                        (0, Oe.jsx)("span", {
                          className: "flex-1 ml-3 whitespace-nowrap",
                          children: "De ce sa ne alegi pe noi?",
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsx)("li", {
                    children: (0, Oe.jsxs)("a", {
                      href: "/#cum-lucram-noi",
                      className:
                        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                      children: [
                        (0, Oe.jsxs)("svg", {
                          width: 19,
                          height: 19,
                          fill: "none",
                          stroke: "#9ca3af",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2.5,
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, Oe.jsx)("path", {
                              d: "M20.25 6H3.75A2.25 2.25 0 0 0 1.5 8.25v10.5A2.25 2.25 0 0 0 3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V8.25A2.25 2.25 0 0 0 20.25 6Z",
                            }),
                            (0, Oe.jsx)("path", {
                              d: "M6.75 6V4.5A1.5 1.5 0 0 1 8.25 3h7.5a1.5 1.5 0 0 1 1.5 1.5V6",
                            }),
                            (0, Oe.jsx)("path", { d: "M22.5 11.25h-21" }),
                            (0, Oe.jsx)("path", {
                              d: "M15 11.25v1.125a.375.375 0 0 1-.375.375h-5.25A.375.375 0 0 1 9 12.375V11.25",
                            }),
                          ],
                        }),
                        (0, Oe.jsx)("span", {
                          className: "flex-1 ml-3 whitespace-nowrap",
                          children: "Cum lucram noi?",
                        }),
                      ],
                    }),
                  }),
                  (0, Oe.jsx)("li", {
                    children: (0, Oe.jsxs)("a", {
                      href: "/#contact",
                      className:
                        "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
                      children: [
                        (0, Oe.jsx)("svg", {
                          width: 19,
                          height: 19,
                          fill: "none",
                          stroke: "#9ca3af",
                          strokeWidth: 2.5,
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: (0, Oe.jsx)("path", {
                            d: "M21.14 17.53c-.744-.75-2.546-1.844-3.421-2.285-1.139-.574-1.233-.62-2.128.045-.597.444-.994.84-1.693.691-.7-.149-2.218-.99-3.548-2.315-1.33-1.326-2.219-2.889-2.368-3.585-.15-.697.253-1.09.693-1.688.62-.843.573-.984.043-2.123-.413-.886-1.54-2.672-2.292-3.413-.805-.795-.805-.654-1.324-.439a7.508 7.508 0 0 0-1.211.646c-.75.498-1.166.912-1.457 1.534-.292.622-.422 2.08 1.081 4.811s2.558 4.127 4.74 6.304c2.184 2.177 3.862 3.348 6.316 4.724 3.036 1.7 4.2 1.369 4.824 1.078.624-.29 1.04-.703 1.54-1.453a7.43 7.43 0 0 0 .646-1.21c.216-.516.357-.516-.44-1.321Z",
                          }),
                        }),
                        (0, Oe.jsx)("span", {
                          className: "flex-1 ml-3 whitespace-nowrap",
                          children: "Contact",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function Ce(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ne(Object(n), !0).forEach(function (t) {
                Ce(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ne(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Me = (0, t.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        Le = (0, t.createContext)({});
      var Ie = (0, t.createContext)(null),
        De = "undefined" !== typeof document,
        Je = De ? t.useLayoutEffect : t.useEffect,
        Ve = (0, t.createContext)({ strict: !1 });
      function Ue(e, n, r, a) {
        var o = (0, t.useContext)(Le).visualElement,
          i = (0, t.useContext)(Ve),
          l = (0, t.useContext)(Ie),
          s = (0, t.useContext)(Me).reducedMotion,
          u = (0, t.useRef)(void 0);
        (a = a || i.renderer),
          !u.current &&
            a &&
            (u.current = a(e, {
              visualState: n,
              parent: o,
              props: r,
              presenceId: l ? l.id : void 0,
              blockInitialAnimation: !!l && !1 === l.initial,
              reducedMotionConfig: s,
            }));
        var c = u.current;
        return (
          Je(function () {
            c && c.syncRender();
          }),
          (0, t.useEffect)(function () {
            c && c.animationState && c.animationState.animateChanges();
          }),
          Je(function () {
            return function () {
              return c && c.notifyUnmount();
            };
          }, []),
          c
        );
      }
      function ze(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function Be(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function Fe(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var We = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function qe(e) {
        return (
          Fe(e.animate) ||
          We.some(function (t) {
            return Be(e[t]);
          })
        );
      }
      function Ge(e) {
        return Boolean(qe(e) || e.variants);
      }
      function _e(e) {
        var n = (function (e, t) {
            if (qe(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || Be(n) ? n : void 0,
                animate: Be(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, t.useContext)(Le)),
          r = n.initial,
          a = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [Qe(r), Qe(a)]
        );
      }
      function Qe(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var Ze = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        He = {
          measureLayout: Ze(["layout", "layoutId", "drag"]),
          animation: Ze([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: Ze(["exit"]),
          drag: Ze(["drag", "dragControls"]),
          focus: Ze(["whileFocus"]),
          hover: Ze(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: Ze(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: Ze(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: Ze(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      function Ye(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var Ke = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        Xe = 1;
      var $e = (0, t.createContext)({}),
        et = (function (e) {
          p(n, e);
          var t = g(n);
          function n() {
            return u(this, n), t.apply(this, arguments);
          }
          return (
            f(n, [
              {
                key: "getSnapshotBeforeUpdate",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.props;
                  return t && t.setProps(n), null;
                },
              },
              { key: "componentDidUpdate", value: function () {} },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(t.Component),
        tt = (0, t.createContext)({}),
        nt = Symbol.for("motionComponentSymbol");
      function rt(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          a = e.projectionNodeConstructor,
          o = e.useRender,
          i = e.useVisualState,
          l = e.Component;
        n &&
          (function (e) {
            for (var t in e)
              "projectionNodeConstructor" === t
                ? (He.projectionNodeConstructor = e[t])
                : (He[t].Component = e[t]);
          })(n);
        var s = (0, t.forwardRef)(function (e, s) {
          var u = Re(
              Re(Re({}, (0, t.useContext)(Me)), e),
              {},
              { layoutId: at(e) }
            ),
            c = u.isStatic,
            f = null,
            d = _e(e),
            p = c
              ? void 0
              : Ye(function () {
                  if (Ke.hasEverUpdated) return Xe++;
                }),
            h = i(e, c);
          if (!c && De) {
            d.visualElement = Ue(l, h, u, r);
            var v = (0, t.useContext)(Ve).strict,
              m = (0, t.useContext)(tt);
            d.visualElement &&
              (f = d.visualElement.loadFeatures(
                u,
                v,
                n,
                p,
                a || He.projectionNodeConstructor,
                m
              ));
          }
          return t.createElement(
            et,
            { visualElement: d.visualElement, props: u },
            f,
            t.createElement(
              Le.Provider,
              { value: d },
              o(
                l,
                e,
                p,
                (function (e, n, r) {
                  return (0, t.useCallback)(
                    function (t) {
                      t && e.mount && e.mount(t),
                        n && (t ? n.mount(t) : n.unmount()),
                        r &&
                          ("function" === typeof r
                            ? r(t)
                            : ze(r) && (r.current = t));
                    },
                    [n]
                  );
                })(h, d.visualElement, s),
                h,
                c,
                d.visualElement
              )
            )
          );
        });
        return (s[nt] = l), s;
      }
      function at(e) {
        var n = e.layoutId,
          r = (0, t.useContext)($e).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function ot(e) {
        function t(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return rt(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var it = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function lt(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(it.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var st = {};
      var ut = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        ct = new Set(ut);
      function ft(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          ct.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!st[e] || "opacity" === e))
        );
      }
      var dt = function (e) {
        return !!(null === e || void 0 === e ? void 0 : e.getVelocity);
      };
      var pt = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ht = function (e, t) {
          return ut.indexOf(e) - ut.indexOf(t);
        };
      function vt(e, t, n, r) {
        var a = e.transform,
          o = e.transformKeys,
          l = t.enableHardwareAcceleration,
          s = void 0 === l || l,
          u = t.allowTransformNone,
          c = void 0 === u || u,
          f = "";
        o.sort(ht);
        var d,
          p = (function (e, t) {
            var n =
              ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = i(e)) ||
                (t && e && "number" === typeof e.length)
              ) {
                n && (e = n);
                var r = 0,
                  a = function () {};
                return {
                  s: a,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: a,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var o,
              l = !0,
              s = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (l = e.done), e;
              },
              e: function (e) {
                (s = !0), (o = e);
              },
              f: function () {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (s) throw o;
                }
              },
            };
          })(o);
        try {
          for (p.s(); !(d = p.n()).done; ) {
            var h = d.value;
            f += "".concat(pt[h] || h, "(").concat(a[h], ") ");
          }
        } catch (v) {
          p.e(v);
        } finally {
          p.f();
        }
        return (
          s && !a.z && (f += "translateZ(0)"),
          (f = f.trim()),
          r ? (f = r(a, n ? "" : f)) : c && n && (f = "none"),
          f
        );
      }
      function mt(e) {
        return e.startsWith("--");
      }
      var yt = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        gt = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e);
          };
        },
        bt = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e;
        },
        xt = /(-)?([\d]*\.?[\d])+/g,
        wt =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        kt =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function St(e) {
        return "string" === typeof e;
      }
      var Et = function (e) {
          return {
            test: function (t) {
              return St(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        Tt = Et("deg"),
        jt = Et("%"),
        At = Et("px"),
        Ot = Et("vh"),
        Pt = Et("vw"),
        Ct = Object.assign(Object.assign({}, jt), {
          parse: function (e) {
            return jt.parse(e) / 100;
          },
          transform: function (e) {
            return jt.transform(100 * e);
          },
        }),
        Nt = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Rt = Object.assign(Object.assign({}, Nt), { transform: gt(0, 1) }),
        Mt = Object.assign(Object.assign({}, Nt), { default: 1 }),
        Lt = Re(Re({}, Nt), {}, { transform: Math.round }),
        It = {
          borderWidth: At,
          borderTopWidth: At,
          borderRightWidth: At,
          borderBottomWidth: At,
          borderLeftWidth: At,
          borderRadius: At,
          radius: At,
          borderTopLeftRadius: At,
          borderTopRightRadius: At,
          borderBottomRightRadius: At,
          borderBottomLeftRadius: At,
          width: At,
          maxWidth: At,
          height: At,
          maxHeight: At,
          size: At,
          top: At,
          right: At,
          bottom: At,
          left: At,
          padding: At,
          paddingTop: At,
          paddingRight: At,
          paddingBottom: At,
          paddingLeft: At,
          margin: At,
          marginTop: At,
          marginRight: At,
          marginBottom: At,
          marginLeft: At,
          rotate: Tt,
          rotateX: Tt,
          rotateY: Tt,
          rotateZ: Tt,
          scale: Mt,
          scaleX: Mt,
          scaleY: Mt,
          scaleZ: Mt,
          skew: Tt,
          skewX: Tt,
          skewY: Tt,
          distance: At,
          translateX: At,
          translateY: At,
          translateZ: At,
          x: At,
          y: At,
          z: At,
          perspective: At,
          transformPerspective: At,
          opacity: Rt,
          originX: Ct,
          originY: Ct,
          originZ: At,
          zIndex: Lt,
          fillOpacity: Rt,
          strokeOpacity: Rt,
          numOctaves: Lt,
        };
      function Dt(e, t, n, r) {
        var a = e.style,
          o = e.vars,
          i = e.transform,
          l = e.transformKeys,
          s = e.transformOrigin;
        l.length = 0;
        var u = !1,
          c = !1,
          f = !0;
        for (var d in t) {
          var p = t[d];
          if (mt(d)) o[d] = p;
          else {
            var h = It[d],
              v = yt(p, h);
            if (ct.has(d)) {
              if (((u = !0), (i[d] = v), l.push(d), !f)) continue;
              p !== (h.default || 0) && (f = !1);
            } else d.startsWith("origin") ? ((c = !0), (s[d] = v)) : (a[d] = v);
          }
        }
        if (
          (t.transform ||
            (u || r
              ? (a.transform = vt(e, n, f, r))
              : a.transform && (a.transform = "none")),
          c)
        ) {
          var m = s.originX,
            y = void 0 === m ? "50%" : m,
            g = s.originY,
            b = void 0 === g ? "50%" : g,
            x = s.originZ,
            w = void 0 === x ? 0 : x;
          a.transformOrigin = "".concat(y, " ").concat(b, " ").concat(w);
        }
      }
      var Jt = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Vt(e, t, n) {
        for (var r in t) dt(t[r]) || ft(r, n) || (e[r] = t[r]);
      }
      function Ut(e, n, r) {
        var a = {};
        return (
          Vt(a, e.style || {}, e),
          Object.assign(
            a,
            (function (e, n, r) {
              var a = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  return (
                    Dt(e, n, { enableHardwareAcceleration: !r }, a),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues ? e.transformValues(a) : a
        );
      }
      function zt(e, t, n) {
        var r = {},
          a = Ut(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          (r.style = a),
          r
        );
      }
      var Bt = new Set(
        [
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "transformValues",
          "custom",
          "inherit",
          "layout",
          "layoutId",
          "layoutDependency",
          "onLayoutAnimationStart",
          "onLayoutAnimationComplete",
          "onLayoutMeasure",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "drag",
          "dragControls",
          "dragListener",
          "dragConstraints",
          "dragDirectionLock",
          "dragSnapToOrigin",
          "_dragX",
          "_dragY",
          "dragElastic",
          "dragMomentum",
          "dragPropagation",
          "dragTransition",
          "onHoverStart",
          "onHoverEnd",
          "layoutScroll",
        ].concat(
          ["whileInView", "onViewportEnter", "onViewportLeave", "viewport"],
          ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          [
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ],
          ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]
        )
      );
      function Ft(e) {
        return Bt.has(e);
      }
      var Wt,
        qt = function (e) {
          return !Ft(e);
        };
      try {
        (Wt = require("@emotion/is-prop-valid").default) &&
          (qt = function (e) {
            return e.startsWith("on") ? !Ft(e) : Wt(e);
          });
      } catch (xc) {}
      function Gt(e, t, n) {
        var r = {};
        for (var a in e)
          (qt(a) ||
            (!0 === n && Ft(a)) ||
            (!t && !Ft(a)) ||
            (e.draggable && a.startsWith("onDrag"))) &&
            (r[a] = e[a]);
        return r;
      }
      function _t(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Qt(e, t, n) {
        return "string" === typeof e ? e : At.transform(t + n * e);
      }
      var Zt = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Ht = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var Yt = [
        "attrX",
        "attrY",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function Kt(e, t, n, r) {
        var a = t.attrX,
          o = t.attrY,
          i = t.originX,
          l = t.originY,
          s = t.pathLength,
          u = t.pathSpacing,
          c = void 0 === u ? 1 : u,
          f = t.pathOffset,
          d = void 0 === f ? 0 : f;
        Dt(e, _t(t, Yt), n, r), (e.attrs = e.style), (e.style = {});
        var p = e.attrs,
          h = e.style,
          v = e.dimensions;
        p.transform && (v && (h.transform = p.transform), delete p.transform),
          v &&
            (void 0 !== i || void 0 !== l || h.transform) &&
            (h.transformOrigin = (function (e, t, n) {
              var r = Qt(t, e.x, e.width),
                a = Qt(n, e.y, e.height);
              return "".concat(r, " ").concat(a);
            })(v, void 0 !== i ? i : 0.5, void 0 !== l ? l : 0.5)),
          void 0 !== a && (p.x = a),
          void 0 !== o && (p.y = o),
          void 0 !== s &&
            (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                a =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4];
              e.pathLength = 1;
              var o = a ? Zt : Ht;
              e[o.offset] = At.transform(-r);
              var i = At.transform(t),
                l = At.transform(n);
              e[o.array] = "".concat(i, " ").concat(l);
            })(p, s, c, d, !1);
      }
      var Xt = function () {
        return Re(
          Re(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          {},
          { attrs: {} }
        );
      };
      function $t(e, n) {
        var r = (0, t.useMemo)(
          function () {
            var t = Xt();
            return (
              Kt(t, n, { enableHardwareAcceleration: !1 }, e.transformTemplate),
              Re(Re({}, t.attrs), {}, { style: Re({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var a = {};
          Vt(a, e.style, e), (r.style = Re(Re({}, a), r.style));
        }
        return r;
      }
      function en() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = function (n, r, a, o, i, l) {
            var s = i.latestValues,
              u = (lt(n) ? $t : zt)(r, s, l),
              c = Re(
                Re(Re({}, Gt(r, "string" === typeof n, e)), u),
                {},
                { ref: o }
              );
            return (
              a && (c["data-projection-id"] = a), (0, t.createElement)(n, c)
            );
          };
        return n;
      }
      var tn = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function nn(e, t, n, r) {
        var a = t.style,
          o = t.vars;
        for (var i in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        o))
          e.style.setProperty(i, o[i]);
      }
      var rn = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function an(e, t, n, r) {
        for (var a in (nn(e, t, void 0, r), t.attrs))
          e.setAttribute(rn.has(a) ? a : tn(a), t.attrs[a]);
      }
      function on(e) {
        var t = e.style,
          n = {};
        for (var r in t) (dt(t[r]) || ft(r, e)) && (n[r] = t[r]);
        return n;
      }
      function ln(e) {
        var t = on(e);
        for (var n in e) {
          if (dt(e[n]))
            t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n];
        }
        return t;
      }
      function sn(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var un = function (e) {
          return Array.isArray(e);
        },
        cn = function (e) {
          return un(e) ? e[e.length - 1] || 0 : e;
        };
      function fn(e) {
        var t,
          n = dt(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var dn = ["transitionEnd", "transition"];
      var pn = function (e) {
        return function (n, r) {
          var a = (0, t.useContext)(Le),
            o = (0, t.useContext)(Ie),
            i = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  o = e.createRenderState,
                  i = e.onMount,
                  l = { latestValues: hn(t, n, r, a), renderState: o() };
                return (
                  i &&
                    (l.mount = function (e) {
                      return i(t, e, l);
                    }),
                  l
                );
              })(e, n, a, o);
            };
          return r ? i() : Ye(i);
        };
      };
      function hn(e, t, n, r) {
        var a = {},
          o = r(e);
        for (var i in o) a[i] = fn(o[i]);
        var l = e.initial,
          s = e.animate,
          u = qe(e),
          c = Ge(e);
        t &&
          c &&
          !u &&
          !1 !== e.inherit &&
          (void 0 === l && (l = t.initial), void 0 === s && (s = t.animate));
        var f = !!n && !1 === n.initial,
          d = (f = f || !1 === l) ? s : l;
        d &&
          "boolean" !== typeof d &&
          !Fe(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (t) {
            var n = sn(e, t);
            if (n) {
              var r = n.transitionEnd,
                o = (n.transition, _t(n, dn));
              for (var i in o) {
                var l = o[i];
                if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
                null !== l && (a[i] = l);
              }
              for (var s in r) a[s] = r[s];
            }
          });
        return a;
      }
      var vn,
        mn = {
          useVisualState: pn({
            scrapeMotionValuesFromProps: ln,
            createRenderState: Xt,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Kt(r, a, { enableHardwareAcceleration: !1 }, e.transformTemplate),
                an(t, r);
            },
          }),
        },
        yn = {
          useVisualState: pn({
            scrapeMotionValuesFromProps: on,
            createRenderState: Jt,
          }),
        };
      function gn(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      function bn(e, n, r, a) {
        (0, t.useEffect)(
          function () {
            var t = e.current;
            if (r && t) return gn(t, n, r, a);
          },
          [e, n, r, a]
        );
      }
      function xn(e) {
        return "undefined" !== typeof PointerEvent && e instanceof PointerEvent
          ? !("mouse" !== e.pointerType)
          : e instanceof MouseEvent;
      }
      function wn(e) {
        return !!e.touches;
      }
      function kn(e) {
        return function (t) {
          var n = t instanceof MouseEvent;
          (!n || (n && 0 === t.button)) && e(t);
        };
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(vn || (vn = {}));
      var Sn = { pageX: 0, pageY: 0 };
      function En(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "page",
          n = e.touches[0] || e.changedTouches[0],
          r = n || Sn;
        return { x: r[t + "X"], y: r[t + "Y"] };
      }
      function Tn(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { x: e[t + "X"], y: e[t + "Y"] };
      }
      function jn(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: wn(e) ? En(e, t) : Tn(e, t) };
      }
      var An = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = function (t) {
              return e(t, jn(t));
            };
          return t ? kn(n) : n;
        },
        On = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        Pn = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function Cn(e) {
        return De && null === window.onpointerdown
          ? e
          : De && null === window.ontouchstart
          ? Pn[e]
          : De && null === window.onmousedown
          ? On[e]
          : e;
      }
      function Nn(e, t, n, r) {
        return gn(e, Cn(t), An(n, "pointerdown" === t), r);
      }
      function Rn(e, t, n, r) {
        return bn(e, Cn(t), n && An(n, "pointerdown" === t), r);
      }
      function Mn(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var Ln = Mn("dragHorizontal"),
        In = Mn("dragVertical");
      function Dn(e) {
        var t = !1;
        if ("y" === e) t = In();
        else if ("x" === e) t = Ln();
        else {
          var n = Ln(),
            r = In();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function Jn() {
        var e = Dn(!0);
        return !e || (e(), !1);
      }
      function Vn(e, t, n) {
        return function (r, a) {
          xn(r) &&
            !Jn() &&
            (e.animationState && e.animationState.setActive(vn.Hover, t),
            n && n(r, a));
        };
      }
      var Un = function e(t, n) {
        return !!n && (t === n || e(t, n.parentElement));
      };
      function zn(e) {
        return (0, t.useEffect)(function () {
          return function () {
            return e();
          };
        }, []);
      }
      var Bn = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        Fn = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(Bn);
        };
      new Set();
      var Wn = ["root"],
        qn = new WeakMap(),
        Gn = new WeakMap(),
        _n = function (e) {
          var t = qn.get(e.target);
          t && t(e);
        },
        Qn = function (e) {
          e.forEach(_n);
        };
      function Zn(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = _t(e, Wn),
            r = t || document;
          Gn.has(r) || Gn.set(r, {});
          var a = Gn.get(r),
            o = JSON.stringify(n);
          return (
            a[o] || (a[o] = new IntersectionObserver(Qn, Re({ root: t }, n))),
            a[o]
          );
        })(t);
        return (
          qn.set(e, n),
          r.observe(e),
          function () {
            qn.delete(e), r.unobserve(e);
          }
        );
      }
      var Hn = { some: 0, all: 1 };
      function Yn(e, n, r, a) {
        var o = a.root,
          i = a.margin,
          l = a.amount,
          s = void 0 === l ? "some" : l,
          u = a.once;
        (0, t.useEffect)(
          function () {
            if (e) {
              var t = {
                root: null === o || void 0 === o ? void 0 : o.current,
                rootMargin: i,
                threshold: "number" === typeof s ? s : Hn[s],
              };
              return Zn(r.getInstance(), t, function (e) {
                var t = e.isIntersecting;
                if (
                  n.isInView !== t &&
                  ((n.isInView = t), !u || t || !n.hasEnteredView)
                ) {
                  t && (n.hasEnteredView = !0),
                    r.animationState &&
                      r.animationState.setActive(vn.InView, t);
                  var a = r.getProps(),
                    o = t ? a.onViewportEnter : a.onViewportLeave;
                  o && o(e);
                }
              });
            }
          },
          [e, o, i, s]
        );
      }
      function Kn(e, n, r, a) {
        var o = a.fallback,
          i = void 0 === o || o;
        (0, t.useEffect)(
          function () {
            e &&
              i &&
              requestAnimationFrame(function () {
                n.hasEnteredView = !0;
                var e = r.getProps().onViewportEnter;
                e && e(null),
                  r.animationState && r.animationState.setActive(vn.InView, !0);
              });
          },
          [e]
        );
      }
      var Xn = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        $n = {
          inView: Xn(function (e) {
            var n = e.visualElement,
              r = e.whileInView,
              a = e.onViewportEnter,
              o = e.onViewportLeave,
              i = e.viewport,
              l = void 0 === i ? {} : i,
              s = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = Boolean(r || a || o);
            l.once && s.current.hasEnteredView && (u = !1),
              ("undefined" === typeof IntersectionObserver ? Kn : Yn)(
                u,
                s.current,
                n,
                l
              );
          }),
          tap: Xn(function (e) {
            var n = e.onTap,
              r = e.onTapStart,
              a = e.onTapCancel,
              o = e.whileTap,
              i = e.visualElement,
              l = n || r || a || o,
              s = (0, t.useRef)(!1),
              u = (0, t.useRef)(null),
              c = { passive: !(r || n || a || v) };
            function f() {
              u.current && u.current(), (u.current = null);
            }
            function d() {
              return (
                f(),
                (s.current = !1),
                i.animationState && i.animationState.setActive(vn.Tap, !1),
                !Jn()
              );
            }
            function p(e, t) {
              d() &&
                (Un(i.getInstance(), e.target) ? n && n(e, t) : a && a(e, t));
            }
            function h(e, t) {
              d() && a && a(e, t);
            }
            function v(e, t) {
              f(),
                s.current ||
                  ((s.current = !0),
                  (u.current = Fn(
                    Nn(window, "pointerup", p, c),
                    Nn(window, "pointercancel", h, c)
                  )),
                  i.animationState && i.animationState.setActive(vn.Tap, !0),
                  r && r(e, t));
            }
            Rn(i, "pointerdown", l ? v : void 0, c), zn(f);
          }),
          focus: Xn(function (e) {
            var t = e.whileFocus,
              n = e.visualElement,
              r = n.animationState;
            bn(
              n,
              "focus",
              t
                ? function () {
                    r && r.setActive(vn.Focus, !0);
                  }
                : void 0
            ),
              bn(
                n,
                "blur",
                t
                  ? function () {
                      r && r.setActive(vn.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Xn(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              a = e.visualElement;
            Rn(a, "pointerenter", t || r ? Vn(a, !0, t) : void 0, {
              passive: !t,
            }),
              Rn(a, "pointerleave", n || r ? Vn(a, !1, n) : void 0, {
                passive: !n,
              });
          }),
        };
      function er() {
        var e = (0, t.useContext)(Ie);
        if (null === e) return [!0, null];
        var n = e.isPresent,
          r = e.onExitComplete,
          a = e.register,
          o = (0, t.useId)();
        (0, t.useEffect)(function () {
          return a(o);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return r && r(o);
              },
            ]
          : [!0];
      }
      function tr(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function nr(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      Object.create;
      Object.create;
      var rr = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        ar = 0.001;
      function or(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          o = e.bounce,
          i = void 0 === o ? 0.25 : o,
          l = e.velocity,
          s = void 0 === l ? 0 : l,
          u = e.mass,
          c = void 0 === u ? 1 : u,
          f = 1 - i;
        (f = rr(0.05, 1, f)),
          (a = rr(0.01, 10, a / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - s,
                  o = ir(e, f),
                  i = Math.exp(-n);
                return ar - (r / o) * i;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * s + s,
                  o = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  i = Math.exp(-n),
                  l = ir(Math.pow(e, 2), f);
                return ((-t(e) + ar > 0 ? -1 : 1) * ((r - o) * i)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - s) * a + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (s - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
      }
      function ir(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var lr = ["duration", "bounce"],
        sr = ["stiffness", "damping", "mass"];
      function ur(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function cr(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          a = void 0 === r ? 1 : r,
          o = e.restSpeed,
          i = void 0 === o ? 2 : o,
          l = e.restDelta,
          s = nr(e, ["from", "to", "restSpeed", "restDelta"]),
          u = { done: !1, value: n },
          c = (function (e) {
            var t = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!ur(e, sr) && ur(e, lr)) {
              var n = or(e);
              (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(s),
          f = c.stiffness,
          d = c.damping,
          p = c.mass,
          h = c.velocity,
          v = c.duration,
          m = c.isResolvedFromDuration,
          y = fr,
          g = fr;
        function b() {
          var e = h ? -h / 1e3 : 0,
            t = a - n,
            r = d / (2 * Math.sqrt(f * p)),
            o = Math.sqrt(f / p) / 1e3;
          if (
            (void 0 === l && (l = Math.min(Math.abs(a - n) / 100, 0.4)), r < 1)
          ) {
            var i = ir(o, r);
            (y = function (n) {
              var l = Math.exp(-r * o * n);
              return (
                a -
                l *
                  (((e + r * o * t) / i) * Math.sin(i * n) +
                    t * Math.cos(i * n))
              );
            }),
              (g = function (n) {
                var a = Math.exp(-r * o * n);
                return (
                  r *
                    o *
                    a *
                    ((Math.sin(i * n) * (e + r * o * t)) / i +
                      t * Math.cos(i * n)) -
                  a *
                    (Math.cos(i * n) * (e + r * o * t) -
                      i * t * Math.sin(i * n))
                );
              });
          } else if (1 === r)
            y = function (n) {
              return a - Math.exp(-o * n) * (t + (e + o * t) * n);
            };
          else {
            var s = o * Math.sqrt(r * r - 1);
            y = function (n) {
              var i = Math.exp(-r * o * n),
                l = Math.min(s * n, 300);
              return (
                a -
                (i * ((e + r * o * t) * Math.sinh(l) + s * t * Math.cosh(l))) /
                  s
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (e) {
              var t = y(e);
              if (m) u.done = e >= v;
              else {
                var n = 1e3 * g(e),
                  r = Math.abs(n) <= i,
                  o = Math.abs(a - t) <= l;
                u.done = r && o;
              }
              return (u.value = u.done ? a : t), u;
            },
            flipTarget: function () {
              h = -h;
              var e = [a, n];
              (n = e[0]), (a = e[1]), b();
            },
          }
        );
      }
      cr.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var fr = function (e) {
          return 0;
        },
        dr = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        pr = function (e, t, n) {
          return -n * e + n * t + e;
        },
        hr = function (e, t) {
          return function (n) {
            return Boolean(
              (St(n) && kt.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        vr = function (e, t, n) {
          return function (r) {
            var a;
            if (!St(r)) return r;
            var o = l(r.match(xt), 4),
              i = o[0],
              s = o[1],
              u = o[2],
              c = o[3];
            return (
              Ce((a = {}), e, parseFloat(i)),
              Ce(a, t, parseFloat(s)),
              Ce(a, n, parseFloat(u)),
              Ce(a, "alpha", void 0 !== c ? parseFloat(c) : 1),
              a
            );
          };
        },
        mr = gt(0, 255),
        yr = Object.assign(Object.assign({}, Nt), {
          transform: function (e) {
            return Math.round(mr(e));
          },
        }),
        gr = {
          test: hr("rgb", "red"),
          parse: vr("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              o = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              yr.transform(t) +
              ", " +
              yr.transform(n) +
              ", " +
              yr.transform(r) +
              ", " +
              bt(Rt.transform(o)) +
              ")"
            );
          },
        };
      var br = {
          test: hr("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substr(1, 2)),
                  (n = e.substr(3, 2)),
                  (r = e.substr(5, 2)),
                  (a = e.substr(7, 2)))
                : ((t = e.substr(1, 1)),
                  (n = e.substr(2, 1)),
                  (r = e.substr(3, 1)),
                  (a = e.substr(4, 1)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: gr.transform,
        },
        xr = {
          test: hr("hsl", "hue"),
          parse: vr("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              o = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              jt.transform(bt(n)) +
              ", " +
              jt.transform(bt(r)) +
              ", " +
              bt(Rt.transform(o)) +
              ")"
            );
          },
        };
      function wr(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function kr(e) {
        var t = e.hue,
          n = e.saturation,
          r = e.lightness,
          a = e.alpha;
        (t /= 360), (r /= 100);
        var o = 0,
          i = 0,
          l = 0;
        if ((n /= 100)) {
          var s = r < 0.5 ? r * (1 + n) : r + n - r * n,
            u = 2 * r - s;
          (o = wr(u, s, t + 1 / 3)),
            (i = wr(u, s, t)),
            (l = wr(u, s, t - 1 / 3));
        } else o = i = l = r;
        return {
          red: Math.round(255 * o),
          green: Math.round(255 * i),
          blue: Math.round(255 * l),
          alpha: a,
        };
      }
      var Sr = function (e, t, n) {
          var r = e * e,
            a = t * t;
          return Math.sqrt(Math.max(0, n * (a - r) + r));
        },
        Er = [br, gr, xr],
        Tr = function (e) {
          return Er.find(function (t) {
            return t.test(e);
          });
        },
        jr = function (e) {
          return "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Ar = function (e, t) {
          var n = Tr(e),
            r = Tr(t);
          jr(e), jr(t);
          var a = n.parse(e),
            o = r.parse(t);
          n === xr && ((a = kr(a)), (n = gr)),
            r === xr && ((o = kr(o)), (r = gr));
          var i = Object.assign({}, a);
          return function (e) {
            for (var t in i) "alpha" !== t && (i[t] = Sr(a[t], o[t], e));
            return (i.alpha = pr(a.alpha, o.alpha, e)), n.transform(i);
          };
        },
        Or = {
          test: function (e) {
            return gr.test(e) || br.test(e) || xr.test(e);
          },
          parse: function (e) {
            return gr.test(e)
              ? gr.parse(e)
              : xr.test(e)
              ? xr.parse(e)
              : br.parse(e);
          },
          transform: function (e) {
            return St(e)
              ? e
              : e.hasOwnProperty("red")
              ? gr.transform(e)
              : xr.transform(e);
          },
        },
        Pr = "${c}",
        Cr = "${n}";
      function Nr(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = e.match(wt);
        r &&
          ((n = r.length),
          (e = e.replace(wt, Pr)),
          t.push.apply(t, s(r.map(Or.parse))));
        var a = e.match(xt);
        return (
          a && ((e = e.replace(xt, Cr)), t.push.apply(t, s(a.map(Nt.parse)))),
          { values: t, numColors: n, tokenised: e }
        );
      }
      function Rr(e) {
        return Nr(e).values;
      }
      function Mr(e) {
        var t = Nr(e),
          n = t.values,
          r = t.numColors,
          a = t.tokenised,
          o = n.length;
        return function (e) {
          for (var t = a, n = 0; n < o; n++)
            t = t.replace(
              n < r ? Pr : Cr,
              n < r ? Or.transform(e[n]) : bt(e[n])
            );
          return t;
        };
      }
      var Lr = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var Ir = {
          test: function (e) {
            var t, n, r, a;
            return (
              isNaN(e) &&
              St(e) &&
              (null !==
                (n =
                  null === (t = e.match(xt)) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (a =
                    null === (r = e.match(wt)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== a
                  ? a
                  : 0) >
                0
            );
          },
          parse: Rr,
          createTransformer: Mr,
          getAnimatableNone: function (e) {
            var t = Rr(e);
            return Mr(e)(t.map(Lr));
          },
        },
        Dr = function (e) {
          return "number" === typeof e;
        };
      function Jr(e, t) {
        return Dr(e)
          ? function (n) {
              return pr(e, t, n);
            }
          : Or.test(e)
          ? Ar(e, t)
          : Br(e, t);
      }
      var Vr = function (e, t) {
          var n = s(e),
            r = n.length,
            a = e.map(function (e, n) {
              return Jr(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        Ur = function (e, t) {
          var n = Object.assign(Object.assign({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = Jr(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        };
      function zr(e) {
        for (
          var t = Ir.parse(e), n = t.length, r = 0, a = 0, o = 0, i = 0;
          i < n;
          i++
        )
          r || "number" === typeof t[i] ? r++ : void 0 !== t[i].hue ? o++ : a++;
        return { parsed: t, numNumbers: r, numRGB: a, numHSL: o };
      }
      var Br = function (e, t) {
          var n = Ir.createTransformer(t),
            r = zr(e),
            a = zr(t);
          return r.numHSL === a.numHSL &&
            r.numRGB === a.numRGB &&
            r.numNumbers >= a.numNumbers
            ? Fn(Vr(r.parsed, a.parsed), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        Fr = function (e, t) {
          return function (n) {
            return pr(e, t, n);
          };
        };
      function Wr(e, t, n) {
        for (
          var r,
            a = [],
            o =
              n ||
              ("number" === typeof (r = e[0])
                ? Fr
                : "string" === typeof r
                ? Or.test(r)
                  ? Ar
                  : Br
                : Array.isArray(r)
                ? Vr
                : "object" === typeof r
                ? Ur
                : void 0),
            i = e.length - 1,
            l = 0;
          l < i;
          l++
        ) {
          var s = o(e[l], e[l + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[l] : t;
            s = Fn(u, s);
          }
          a.push(s);
        }
        return a;
      }
      function qr(e, t) {
        var n = l(e, 2),
          r = n[0],
          a = n[1],
          o = l(t, 1)[0];
        return function (e) {
          return o(dr(r, a, e));
        };
      }
      function Gr(e, t) {
        var n = e.length,
          r = n - 1;
        return function (a) {
          var o = 0,
            i = !1;
          if (
            (a <= e[0] ? (i = !0) : a >= e[r] && ((o = r - 1), (i = !0)), !i)
          ) {
            for (var l = 1; l < n && !(e[l] > a || l === r); l++);
            o = l - 1;
          }
          var s = dr(e[o], e[o + 1], a);
          return t[o](s);
        };
      }
      function _r(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          o = n.ease,
          i = n.mixer,
          l = e.length;
        t.length,
          !o || !Array.isArray(o) || o.length,
          e[0] > e[l - 1] &&
            ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        var s = Wr(t, o, i),
          u = 2 === l ? qr(e, s) : Gr(e, s);
        return a
          ? function (t) {
              return u(rr(e[0], e[l - 1], t));
            }
          : u;
      }
      var Qr,
        Zr = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Hr = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Yr = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e);
          };
        },
        Kr = function (e) {
          return e;
        },
        Xr =
          ((Qr = 2),
          function (e) {
            return Math.pow(e, Qr);
          }),
        $r = Zr(Xr),
        ea = Hr(Xr),
        ta = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        na = Zr(ta),
        ra = Hr(na),
        aa = Yr(1.525),
        oa = Zr(aa),
        ia = Hr(aa),
        la = (function (e) {
          var t = Yr(e);
          return function (e) {
            return (e *= 2) < 1
              ? 0.5 * t(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          };
        })(1.525),
        sa = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < 0.36363636363636365
            ? 7.5625 * t
            : e < 0.7272727272727273
            ? 9.075 * t - 9.9 * e + 3.4
            : e < 0.9
            ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
            : 10.8 * e * e - 20.52 * e + 10.72;
        },
        ua = Zr(sa);
      function ca(e, t) {
        return e
          .map(function () {
            return t || ea;
          })
          .splice(0, e.length - 1);
      }
      function fa(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          a = void 0 === r ? 1 : r,
          o = e.ease,
          i = e.offset,
          l = e.duration,
          s = void 0 === l ? 300 : l,
          u = { done: !1, value: n },
          c = Array.isArray(a) ? a : [n, a],
          f = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            i && i.length === c.length
              ? i
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(c),
            s
          );
        function d() {
          return _r(f, c, { ease: Array.isArray(o) ? o : ca(c, o) });
        }
        var p = d();
        return {
          next: function (e) {
            return (u.value = p(e)), (u.done = e >= s), u;
          },
          flipTarget: function () {
            c.reverse(), (p = d());
          },
        };
      }
      var da = {
        keyframes: fa,
        spring: cr,
        decay: function (e) {
          var t = e.velocity,
            n = void 0 === t ? 0 : t,
            r = e.from,
            a = void 0 === r ? 0 : r,
            o = e.power,
            i = void 0 === o ? 0.8 : o,
            l = e.timeConstant,
            s = void 0 === l ? 350 : l,
            u = e.restDelta,
            c = void 0 === u ? 0.5 : u,
            f = e.modifyTarget,
            d = { done: !1, value: a },
            p = i * n,
            h = a + p,
            v = void 0 === f ? h : f(h);
          return (
            v !== h && (p = v - a),
            {
              next: function (e) {
                var t = -p * Math.exp(-e / s);
                return (
                  (d.done = !(t > c || t < -c)),
                  (d.value = d.done ? v : v + t),
                  d
                );
              },
              flipTarget: function () {},
            }
          );
        },
      };
      var pa = (1 / 60) * 1e3,
        ha =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        va =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(ha());
                }, pa);
              };
      var ma = !0,
        ya = !1,
        ga = !1,
        ba = { delta: 0, timestamp: 0 },
        xa = ["read", "update", "preRender", "render", "postRender"],
        wa = xa.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                o = !1,
                i = new WeakSet(),
                l = {
                  schedule: function (e) {
                    var o =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        a,
                      l = o ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        i.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), o && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), i.delete(e);
                  },
                  process: function (s) {
                    if (a) o = !0;
                    else {
                      a = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(s), i.has(f) && (l.schedule(f), e());
                        }
                      (a = !1), o && ((o = !1), l.process(s));
                    }
                  },
                };
              return l;
            })(function () {
              return (ya = !0);
            })),
            e
          );
        }, {}),
        ka = xa.reduce(function (e, t) {
          var n = wa[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return ya || Aa(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        Sa = xa.reduce(function (e, t) {
          return (e[t] = wa[t].cancel), e;
        }, {}),
        Ea = xa.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return wa[t].process(ba);
            }),
            e
          );
        }, {}),
        Ta = function (e) {
          return wa[e].process(ba);
        },
        ja = function e(t) {
          (ya = !1),
            (ba.delta = ma ? pa : Math.max(Math.min(t - ba.timestamp, 40), 1)),
            (ba.timestamp = t),
            (ga = !0),
            xa.forEach(Ta),
            (ga = !1),
            ya && ((ma = !1), va(e));
        },
        Aa = function () {
          (ya = !0), (ma = !0), ga || va(ja);
        },
        Oa = function () {
          return ba;
        },
        Pa = ka;
      function Ca(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var Na = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return Pa.update(t, !0);
          },
          stop: function () {
            return Sa.update(t);
          },
        };
      };
      function Ra(e) {
        var t,
          n,
          r,
          a,
          o,
          i = e.from,
          l = e.autoplay,
          s = void 0 === l || l,
          u = e.driver,
          c = void 0 === u ? Na : u,
          f = e.elapsed,
          d = void 0 === f ? 0 : f,
          p = e.repeat,
          h = void 0 === p ? 0 : p,
          v = e.repeatType,
          m = void 0 === v ? "loop" : v,
          y = e.repeatDelay,
          g = void 0 === y ? 0 : y,
          b = e.onPlay,
          x = e.onStop,
          w = e.onComplete,
          k = e.onRepeat,
          S = e.onUpdate,
          E = nr(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          T = E.to,
          j = 0,
          A = E.duration,
          O = !1,
          P = !0,
          C = (function (e) {
            if (Array.isArray(e.to)) return fa;
            if (da[e.type]) return da[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") ||
              (t.has("duration") && !t.has("dampingRatio"))
              ? fa
              : t.has("dampingRatio") ||
                t.has("stiffness") ||
                t.has("mass") ||
                t.has("damping") ||
                t.has("restSpeed") ||
                t.has("restDelta")
              ? cr
              : fa;
          })(E);
        (null === (n = (t = C).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, i, T)) &&
          ((o = _r([0, 100], [i, T], { clamp: !1 })), (i = 0), (T = 100));
        var N = C(Object.assign(Object.assign({}, E), { from: i, to: T }));
        function R() {
          j++,
            "reverse" === m
              ? (d = (function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                  return arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                    ? t - (e - t) + n
                    : Ca(t + -e, t, n);
                })(d, A, g, (P = j % 2 === 0)))
              : ((d = Ca(d, A, g)), "mirror" === m && N.flipTarget()),
            (O = !1),
            k && k();
        }
        function M(e) {
          if ((P || (e = -e), (d += e), !O)) {
            var t = N.next(Math.max(0, d));
            (a = t.value), o && (a = o(a)), (O = P ? t.done : d <= 0);
          }
          null === S || void 0 === S || S(a),
            O &&
              (0 === j && ((null !== A && void 0 !== A) || (A = d)),
              j < h
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(d, A, g, P) && R()
                : (r.stop(), w && w()));
        }
        return (
          s && (null === b || void 0 === b || b(), (r = c(M)).start()),
          {
            stop: function () {
              null === x || void 0 === x || x(), r.stop();
            },
          }
        );
      }
      function Ma(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var La = function (e) {
          return 1e3 * e;
        },
        Ia = function (e, t) {
          return 1 - 3 * t + 3 * e;
        },
        Da = function (e, t) {
          return 3 * t - 6 * e;
        },
        Ja = function (e) {
          return 3 * e;
        },
        Va = function (e, t, n) {
          return ((Ia(t, n) * e + Da(t, n)) * e + Ja(t)) * e;
        },
        Ua = function (e, t, n) {
          return 3 * Ia(t, n) * e * e + 2 * Da(t, n) * e + Ja(t);
        };
      var za = 0.1;
      function Ba(e, t, n, r) {
        if (e === t && n === r) return Kr;
        for (var a = new Float32Array(11), o = 0; o < 11; ++o)
          a[o] = Va(o * za, e, n);
        function i(t) {
          for (var r = 0, o = 1; 10 !== o && a[o] <= t; ++o) r += za;
          --o;
          var i = r + ((t - a[o]) / (a[o + 1] - a[o])) * za,
            l = Ua(i, e, n);
          return l >= 0.001
            ? (function (e, t, n, r) {
                for (var a = 0; a < 8; ++a) {
                  var o = Ua(t, n, r);
                  if (0 === o) return t;
                  t -= (Va(t, n, r) - e) / o;
                }
                return t;
              })(t, i, e, n)
            : 0 === l
            ? i
            : (function (e, t, n, r, a) {
                var o,
                  i,
                  l = 0;
                do {
                  (o = Va((i = t + (n - t) / 2), r, a) - e) > 0
                    ? (n = i)
                    : (t = i);
                } while (Math.abs(o) > 1e-7 && ++l < 10);
                return i;
              })(t, r, r + za, e, n);
        }
        return function (e) {
          return 0 === e || 1 === e ? e : Va(i(e), t, r);
        };
      }
      var Fa = {
          linear: Kr,
          easeIn: Xr,
          easeInOut: ea,
          easeOut: $r,
          circIn: ta,
          circInOut: ra,
          circOut: na,
          backIn: aa,
          backInOut: ia,
          backOut: oa,
          anticipate: la,
          bounceIn: ua,
          bounceInOut: function (e) {
            return e < 0.5
              ? 0.5 * (1 - sa(1 - 2 * e))
              : 0.5 * sa(2 * e - 1) + 0.5;
          },
          bounceOut: sa,
        },
        Wa = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = l(e, 4);
            return Ba(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), Fa[e])
            : e;
        },
        qa = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !Ir.test(t) || t.startsWith("url(")))
          );
        },
        Ga = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        _a = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Qa = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Za = function (e) {
          return { type: "keyframes", duration: 0.8, values: e };
        },
        Ha = {
          x: Ga,
          y: Ga,
          z: Ga,
          rotate: Ga,
          rotateX: Ga,
          rotateY: Ga,
          rotateZ: Ga,
          scaleX: _a,
          scaleY: _a,
          scale: _a,
          opacity: Qa,
          backgroundColor: Qa,
          color: Qa,
          default: _a,
        },
        Ya = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Ka(e) {
        var t = l(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = l(r.match(xt) || [], 1)[0];
        if (!a) return e;
        var o = r.replace(a, ""),
          i = Ya.has(n) ? 1 : 0;
        return a !== r && (i *= 100), n + "(" + i + o + ")";
      }
      var Xa = /([a-z-]*)\(.*?\)/g,
        $a = Object.assign(Object.assign({}, Ir), {
          getAnimatableNone: function (e) {
            var t = e.match(Xa);
            return t ? t.map(Ka).join(" ") : e;
          },
        }),
        eo = Re(
          Re({}, It),
          {},
          {
            color: Or,
            backgroundColor: Or,
            outlineColor: Or,
            fill: Or,
            stroke: Or,
            borderColor: Or,
            borderTopColor: Or,
            borderRightColor: Or,
            borderBottomColor: Or,
            borderLeftColor: Or,
            filter: $a,
            WebkitFilter: $a,
          }
        ),
        to = function (e) {
          return eo[e];
        };
      function no(e, t) {
        var n,
          r = to(e);
        return (
          r !== $a && (r = Ir),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var ro = !1;
      function ao(e, t) {
        var n = performance.now(),
          r = function r(a) {
            var o = a.timestamp - n;
            o >= t && (Sa.read(r), e(o - t));
          };
        return (
          Pa.read(r, !0),
          function () {
            return Sa.read(r);
          }
        );
      }
      var oo = [
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
        ],
        io = ["ease", "times", "yoyo", "flip", "loop"];
      function lo(e) {
        var t = e.ease,
          n = e.times,
          r = e.yoyo,
          a = e.flip,
          o = e.loop,
          i = _t(e, io),
          l = Re({}, i);
        return (
          n && (l.offset = n),
          i.duration && (l.duration = La(i.duration)),
          i.repeatDelay && (l.repeatDelay = La(i.repeatDelay)),
          t &&
            (l.ease = (function (e) {
              return Array.isArray(e) && "number" !== typeof e[0];
            })(t)
              ? t.map(Wa)
              : Wa(t)),
          "tween" === i.type && (l.type = "keyframes"),
          (r || o || a) &&
            (!0,
            r
              ? (l.repeatType = "reverse")
              : o
              ? (l.repeatType = "loop")
              : a && (l.repeatType = "mirror"),
            (l.repeat = o || r || a || i.repeat)),
          "spring" !== i.type && (l.type = "keyframes"),
          l
        );
      }
      function so(e, t) {
        var n, r;
        return null !==
          (r =
            null !== (n = (ho(e, t) || {}).delay) && void 0 !== n
              ? n
              : e.delay) && void 0 !== r
          ? r
          : 0;
      }
      function uo(e, t, n) {
        var r, a;
        return (
          Array.isArray(t.to) && void 0 === e.duration && (e.duration = 0.8),
          (function (e) {
            Array.isArray(e.to) &&
              null === e.to[0] &&
              ((e.to = s(e.to)), (e.to[0] = e.from));
          })(t),
          (function (e) {
            e.when,
              e.delay,
              e.delayChildren,
              e.staggerChildren,
              e.staggerDirection,
              e.repeat,
              e.repeatType,
              e.repeatDelay,
              e.from;
            var t = _t(e, oo);
            return !!Object.keys(t).length;
          })(e) ||
            (e = Re(
              Re({}, e),
              ((r = n),
              Re({ to: (a = t.to) }, (un(a) ? Za : Ha[r] || Ha.default)(a)))
            )),
          Re(Re({}, t), lo(e))
        );
      }
      function co(e, t, n, r, a) {
        var o = ho(r, e) || {},
          i = void 0 !== o.from ? o.from : t.get(),
          l = qa(e, n);
        "none" === i && l && "string" === typeof n
          ? (i = no(e, n))
          : fo(i) && "string" === typeof n
          ? (i = po(n))
          : !Array.isArray(n) && fo(n) && "string" === typeof i && (n = po(i));
        var s = qa(e, i);
        return (
          "You are trying to animate "
            .concat(e, ' from "')
            .concat(i, '" to "')
            .concat(n, '". ')
            .concat(
              i,
              " is not an animatable value - to enable this animation set "
            )
            .concat(i, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          s && l && !1 !== o.type
            ? function () {
                var r = {
                  from: i,
                  to: n,
                  velocity: t.getVelocity(),
                  onComplete: a,
                  onUpdate: function (e) {
                    return t.set(e);
                  },
                };
                return "inertia" === o.type || "decay" === o.type
                  ? (function (e) {
                      var t,
                        n = e.from,
                        r = void 0 === n ? 0 : n,
                        a = e.velocity,
                        o = void 0 === a ? 0 : a,
                        i = e.min,
                        l = e.max,
                        s = e.power,
                        u = void 0 === s ? 0.8 : s,
                        c = e.timeConstant,
                        f = void 0 === c ? 750 : c,
                        d = e.bounceStiffness,
                        p = void 0 === d ? 500 : d,
                        h = e.bounceDamping,
                        v = void 0 === h ? 10 : h,
                        m = e.restDelta,
                        y = void 0 === m ? 1 : m,
                        g = e.modifyTarget,
                        b = e.driver,
                        x = e.onUpdate,
                        w = e.onComplete,
                        k = e.onStop;
                      function S(e) {
                        return (
                          (void 0 !== i && e < i) || (void 0 !== l && e > l)
                        );
                      }
                      function E(e) {
                        return void 0 === i
                          ? l
                          : void 0 === l || Math.abs(i - e) < Math.abs(l - e)
                          ? i
                          : l;
                      }
                      function T(e) {
                        null === t || void 0 === t || t.stop(),
                          (t = Ra(
                            Object.assign(Object.assign({}, e), {
                              driver: b,
                              onUpdate: function (t) {
                                var n;
                                null === x || void 0 === x || x(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: w,
                              onStop: k,
                            })
                          ));
                      }
                      function j(e) {
                        T(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: p,
                              damping: v,
                              restDelta: y,
                            },
                            e
                          )
                        );
                      }
                      if (S(r)) j({ from: r, velocity: o, to: E(r) });
                      else {
                        var A = u * o + r;
                        "undefined" !== typeof g && (A = g(A));
                        var O,
                          P,
                          C = E(A),
                          N = C === i ? -1 : 1;
                        T({
                          type: "decay",
                          from: r,
                          velocity: o,
                          timeConstant: f,
                          power: u,
                          restDelta: y,
                          modifyTarget: g,
                          onUpdate: S(A)
                            ? function (e) {
                                (O = P),
                                  (P = e),
                                  (o = Ma(e - O, Oa().delta)),
                                  ((1 === N && e > C) || (-1 === N && e < C)) &&
                                    j({ from: e, to: C, velocity: o });
                              }
                            : void 0,
                        });
                      }
                      return {
                        stop: function () {
                          return null === t || void 0 === t ? void 0 : t.stop();
                        },
                      };
                    })(Re(Re({}, r), o))
                  : Ra(
                      Re(
                        Re({}, uo(o, r, e)),
                        {},
                        {
                          onUpdate: function (e) {
                            r.onUpdate(e), o.onUpdate && o.onUpdate(e);
                          },
                          onComplete: function () {
                            r.onComplete(), o.onComplete && o.onComplete();
                          },
                        }
                      )
                    );
              }
            : function () {
                var e = cn(n);
                return (
                  t.set(e),
                  a(),
                  o.onUpdate && o.onUpdate(e),
                  o.onComplete && o.onComplete(),
                  { stop: function () {} }
                );
              }
        );
      }
      function fo(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function po(e) {
        return "number" === typeof e ? 0 : no("", e);
      }
      function ho(e, t) {
        return e[t] || e.default || e;
      }
      function vo(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (
          ro && (r = { type: !1 }),
          t.start(function (a) {
            var o,
              i,
              l = co(e, t, n, r, a),
              s = so(r, e),
              u = function () {
                return (o = l());
              };
            return (
              s ? (i = ao(u, La(s))) : u(),
              function () {
                i && i(), o && o.stop();
              }
            );
          })
        );
      }
      var mo = function (e) {
        return /^0[^.\s]+$/.test(e);
      };
      function yo(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function go(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var bo = (function () {
          function e() {
            u(this, e), (this.subscriptions = []);
          }
          return (
            f(e, [
              {
                key: "add",
                value: function (e) {
                  var t = this;
                  return (
                    yo(this.subscriptions, e),
                    function () {
                      return go(t.subscriptions, e);
                    }
                  );
                },
              },
              {
                key: "notify",
                value: function (e, t, n) {
                  var r = this.subscriptions.length;
                  if (r)
                    if (1 === r) this.subscriptions[0](e, t, n);
                    else
                      for (var a = 0; a < r; a++) {
                        var o = this.subscriptions[a];
                        o && o(e, t, n);
                      }
                },
              },
              {
                key: "getSize",
                value: function () {
                  return this.subscriptions.length;
                },
              },
              {
                key: "clear",
                value: function () {
                  this.subscriptions.length = 0;
                },
              },
            ]),
            e
          );
        })(),
        xo = (function () {
          function e(t) {
            var n,
              r = this;
            u(this, e),
              (this.version = "7.6.2"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new bo()),
              (this.velocityUpdateSubscribers = new bo()),
              (this.renderSubscribers = new bo()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (r.prev = r.current), (r.current = e);
                var n = Oa(),
                  a = n.delta,
                  o = n.timestamp;
                r.lastUpdated !== o &&
                  ((r.timeDelta = a),
                  (r.lastUpdated = o),
                  Pa.postRender(r.scheduleVelocityCheck)),
                  r.prev !== r.current && r.updateSubscribers.notify(r.current),
                  r.velocityUpdateSubscribers.getSize() &&
                    r.velocityUpdateSubscribers.notify(r.getVelocity()),
                  t && r.renderSubscribers.notify(r.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Pa.postRender(r.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== r.lastUpdated &&
                  ((r.prev = r.current),
                  r.velocityUpdateSubscribers.notify(r.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((n = this.current), !isNaN(parseFloat(n))));
          }
          return (
            f(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.updateSubscribers.add(e);
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  this.updateSubscribers.clear();
                },
              },
              {
                key: "onRenderRequest",
                value: function (e) {
                  return e(this.get()), this.renderSubscribers.add(e);
                },
              },
              {
                key: "attach",
                value: function (e) {
                  this.passiveEffect = e;
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? Ma(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0), (t.stopAnimation = e(n));
                    }).then(function () {
                      return t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.stopAnimation && this.stopAnimation(),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.stopAnimation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.stopAnimation = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.updateSubscribers.clear(),
                    this.renderSubscribers.clear(),
                    this.stop();
                },
              },
            ]),
            e
          );
        })();
      function wo(e) {
        return new xo(e);
      }
      var ko = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        So = [
          Nt,
          At,
          jt,
          Tt,
          Pt,
          Ot,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        Eo = function (e) {
          return So.find(ko(e));
        },
        To = [].concat(s(So), [Or, Ir]),
        jo = function (e) {
          return To.find(ko(e));
        };
      function Ao(e, t, n) {
        var r = e.getProps();
        return sn(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var Oo = ["transitionEnd", "transition"];
      function Po(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, wo(n));
      }
      function Co(e, t) {
        var n = Ao(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          a = r.transitionEnd,
          o = void 0 === a ? {} : a,
          i = (r.transition, _t(r, Oo));
        for (var l in (i = Re(Re({}, i), o))) {
          Po(e, l, cn(i[l]));
        }
      }
      function No(e, t, n) {
        var r,
          a,
          o = Object.keys(t).filter(function (t) {
            return !e.hasValue(t);
          }),
          i = o.length;
        if (i)
          for (var l = 0; l < i; l++) {
            var s = o[l],
              u = t[s],
              c = null;
            Array.isArray(u) && (c = u[0]),
              null === c &&
                (c =
                  null !==
                    (a =
                      null !== (r = n[s]) && void 0 !== r
                        ? r
                        : e.readValue(s)) && void 0 !== a
                    ? a
                    : t[s]),
              void 0 !== c &&
                null !== c &&
                ("string" === typeof c && (/^\-?\d*\.?\d+$/.test(c) || mo(c))
                  ? (c = parseFloat(c))
                  : !jo(c) && Ir.test(u) && (c = no(s, u)),
                e.addValue(s, wo(c)),
                void 0 === n[s] && (n[s] = c),
                e.setBaseTarget(s, c));
          }
      }
      function Ro(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Mo(e, t, n) {
        var r,
          a = {};
        for (var o in e) {
          var i = Ro(o, t);
          a[o] =
            void 0 !== i
              ? i
              : null === (r = n.getValue(o)) || void 0 === r
              ? void 0
              : r.get();
        }
        return a;
      }
      function Lo(e) {
        return Boolean(dt(e) && e.add);
      }
      var Io = ["transition", "transitionEnd"];
      function Do(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = Ao(e, t, r.custom),
          o = a || {},
          i = o.transition,
          s = void 0 === i ? e.getDefaultTransition() || {} : i;
        r.transitionOverride && (s = r.transitionOverride);
        var u = a
            ? function () {
                return Jo(e, a, r);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  a = s,
                  o = a.delayChildren,
                  i = void 0 === o ? 0 : o,
                  l = a.staggerChildren,
                  u = a.staggerDirection;
                return Vo(e, t, i + n, l, u, r);
              }
            : function () {
                return Promise.resolve();
              },
          f = s,
          d = f.when;
        if (d) {
          var p = "beforeChildren" === d ? [u, c] : [c, u],
            h = l(p, 2),
            v = h[0],
            m = h[1];
          return v().then(m);
        }
        return Promise.all([u(), c(r.delay)]);
      }
      function Jo(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = r.delay,
          o = void 0 === a ? 0 : a,
          i = r.transitionOverride,
          l = r.type,
          s = e.makeTargetAnimatable(t),
          u = s.transition,
          c = void 0 === u ? e.getDefaultTransition() : u,
          f = s.transitionEnd,
          d = _t(s, Io),
          p = e.getValue("willChange");
        i && (c = i);
        var h = [],
          v =
            l &&
            (null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.getState()[l]),
          m = function (t) {
            var n = e.getValue(t),
              r = d[t];
            if (!n || void 0 === r || (v && zo(v, t))) return "continue";
            var a = Re({ delay: o }, c);
            e.shouldReduceMotion &&
              ct.has(t) &&
              (a = Re(Re({}, a), {}, { type: !1, delay: 0 }));
            var i = vo(t, n, r, a);
            Lo(p) &&
              (p.add(t),
              (i = i.then(function () {
                return p.remove(t);
              }))),
              h.push(i);
          };
        for (var y in d) m(y);
        return Promise.all(h).then(function () {
          f && Co(e, f);
        });
      }
      function Vo(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          o = arguments.length > 5 ? arguments[5] : void 0,
          i = [],
          l = (e.variantChildren.size - 1) * r,
          s =
            1 === a
              ? function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return e * r;
                }
              : function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return l - e * r;
                };
        return (
          Array.from(e.variantChildren)
            .sort(Uo)
            .forEach(function (e, r) {
              i.push(
                Do(e, t, Re(Re({}, o), {}, { delay: n + s(r) })).then(
                  function () {
                    return e.notifyAnimationComplete(t);
                  }
                )
              );
            }),
          Promise.all(i)
        );
      }
      function Uo(e, t) {
        return e.sortNodePosition(t);
      }
      function zo(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          a = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), a;
      }
      var Bo = ["transition", "transitionEnd"],
        Fo = [
          vn.Animate,
          vn.InView,
          vn.Focus,
          vn.Hover,
          vn.Tap,
          vn.Drag,
          vn.Exit,
        ],
        Wo = [].concat(Fo).reverse(),
        qo = Fo.length;
      function Go(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notifyAnimationStart(t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return Do(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = Do(e, t, r);
                else {
                  var o = "function" === typeof t ? Ao(e, t, r.custom) : t;
                  n = Jo(e, o, r);
                }
                return n.then(function () {
                  return e.notifyAnimationComplete(t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function _o(e) {
        var t = Go(e),
          n = (function () {
            var e;
            return (
              Ce((e = {}), vn.Animate, Qo(!0)),
              Ce(e, vn.InView, Qo()),
              Ce(e, vn.Hover, Qo()),
              Ce(e, vn.Tap, Qo()),
              Ce(e, vn.Drag, Qo()),
              Ce(e, vn.Focus, Qo()),
              Ce(e, vn.Exit, Qo()),
              e
            );
          })(),
          r = !0,
          a = function (t, n) {
            var r = Ao(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                o = _t(r, Bo);
              t = Re(Re(Re({}, t), o), a);
            }
            return t;
          };
        function o(o, i) {
          for (
            var l,
              u = e.getProps(),
              c = e.getVariantContext(!0) || {},
              f = [],
              d = new Set(),
              p = {},
              h = 1 / 0,
              v = function (t) {
                var v = Wo[t],
                  m = n[v],
                  y = null !== (l = u[v]) && void 0 !== l ? l : c[v],
                  g = Be(y),
                  b = v === i ? m.isActive : null;
                !1 === b && (h = t);
                var x = y === c[v] && y !== u[v] && g;
                if (
                  (x && r && e.manuallyAnimateOnMount && (x = !1),
                  (m.protectedKeys = Re({}, p)),
                  (!m.isActive && null === b) ||
                    (!y && !m.prevProp) ||
                    Fe(y) ||
                    "boolean" === typeof y)
                )
                  return "continue";
                var w = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !tr(t, e);
                    return !1;
                  })(m.prevProp, y),
                  k = w || (v === i && m.isActive && !x && g) || (t > h && g),
                  S = Array.isArray(y) ? y : [y],
                  E = S.reduce(a, {});
                !1 === b && (E = {});
                var T = m.prevResolvedValues,
                  j = void 0 === T ? {} : T,
                  A = Re(Re({}, j), E),
                  O = function (e) {
                    (k = !0), d.delete(e), (m.needsAnimating[e] = !0);
                  };
                for (var P in A) {
                  var C = E[P],
                    N = j[P];
                  p.hasOwnProperty(P) ||
                    (C !== N
                      ? un(C) && un(N)
                        ? !tr(C, N) || w
                          ? O(P)
                          : (m.protectedKeys[P] = !0)
                        : void 0 !== C
                        ? O(P)
                        : d.add(P)
                      : void 0 !== C && d.has(P)
                      ? O(P)
                      : (m.protectedKeys[P] = !0));
                }
                (m.prevProp = y),
                  (m.prevResolvedValues = E),
                  m.isActive && (p = Re(Re({}, p), E)),
                  r && e.blockInitialAnimation && (k = !1),
                  k &&
                    !x &&
                    f.push.apply(
                      f,
                      s(
                        S.map(function (e) {
                          return { animation: e, options: Re({ type: v }, o) };
                        })
                      )
                    );
              },
              m = 0;
            m < qo;
            m++
          )
            v(m);
          if (d.size) {
            var y = {};
            d.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (y[t] = n);
            }),
              f.push({ animation: y });
          }
          var g = Boolean(f.length);
          return (
            r && !1 === u.initial && !e.manuallyAnimateOnMount && (g = !1),
            (r = !1),
            g ? t(f) : Promise.resolve()
          );
        }
        return {
          animateChanges: o,
          setActive: function (t, r, a) {
            var i;
            if (n[t].isActive === r) return Promise.resolve();
            null === (i = e.variantChildren) ||
              void 0 === i ||
              i.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var l = o(a, t);
            for (var s in n) n[s].protectedKeys = {};
            return l;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Qo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var Zo = {
          animation: Xn(function (e) {
            var n = e.visualElement,
              r = e.animate;
            n.animationState || (n.animationState = _o(n)),
              Fe(r) &&
                (0, t.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: Xn(function (e) {
            var n = e.custom,
              r = e.visualElement,
              a = l(er(), 2),
              o = a[0],
              i = a[1],
              s = (0, t.useContext)(Ie);
            (0, t.useEffect)(
              function () {
                r.isPresent = o;
                var e =
                  r.animationState &&
                  r.animationState.setActive(vn.Exit, !o, {
                    custom: (s && s.custom) || n,
                  });
                e && !o && e.then(i);
              },
              [o]
            );
          }),
        },
        Ho = function (e) {
          return e.hasOwnProperty("x") && e.hasOwnProperty("y");
        },
        Yo = function (e) {
          return Ho(e) && e.hasOwnProperty("z");
        },
        Ko = function (e, t) {
          return Math.abs(e - t);
        };
      function Xo(e, t) {
        if (Dr(e) && Dr(t)) return Ko(e, t);
        if (Ho(e) && Ho(t)) {
          var n = Ko(e.x, t.x),
            r = Ko(e.y, t.y),
            a = Yo(e) && Yo(t) ? Ko(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2));
        }
      }
      var $o = (function () {
        function e(t, n) {
          var r = this,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            o = a.transformPagePoint;
          if (
            (u(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = ni(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n = Xo(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    o = Oa().timestamp;
                  r.history.push(Re(Re({}, a), {}, { timestamp: o }));
                  var i = r.handlers,
                    l = i.onStart,
                    s = i.onMove;
                  t ||
                    (l && l(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    s && s(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = ei(t, r.transformPagePoint)),
                xn(e) && 0 === e.buttons
                  ? r.handlePointerUp(e, t)
                  : Pa.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              r.end();
              var n = r.handlers,
                a = n.onEnd,
                o = n.onSessionEnd,
                i = ni(ei(t, r.transformPagePoint), r.history);
              r.startEvent && a && a(e, i), o && o(e, i);
            }),
            !(wn(t) && t.touches.length > 1))
          ) {
            (this.handlers = n), (this.transformPagePoint = o);
            var i = jn(t),
              l = ei(i, this.transformPagePoint),
              s = l.point,
              c = Oa(),
              f = c.timestamp;
            this.history = [Re(Re({}, s), {}, { timestamp: f })];
            var d = n.onSessionStart;
            d && d(t, ni(l, this.history)),
              (this.removeListeners = Fn(
                Nn(window, "pointermove", this.handlePointerMove),
                Nn(window, "pointerup", this.handlePointerUp),
                Nn(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          f(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  Sa.update(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function ei(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function ti(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function ni(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: ti(n, ai(t)),
          offset: ti(n, ri(t)),
          velocity: oi(t, 0.1),
        };
      }
      function ri(e) {
        return e[0];
      }
      function ai(e) {
        return e[e.length - 1];
      }
      function oi(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = ai(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > La(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (a.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var i = { x: (a.x - r.x) / o, y: (a.y - r.y) / o };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
      }
      function ii(e) {
        return e.max - e.min;
      }
      function li(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Xo(e, t) < n;
      }
      function si(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = pr(t.min, t.max, e.origin)),
          (e.scale = ii(n) / ii(t)),
          (li(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = pr(n.min, n.max, e.origin) - e.originPoint),
          (li(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function ui(e, t, n, r) {
        si(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          si(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function ci(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + ii(t));
      }
      function fi(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + ii(t));
      }
      function di(e, t, n) {
        fi(e.x, t.x, n.x), fi(e.y, t.y, n.y);
      }
      function pi(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function hi(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var vi = 0.35;
      function mi(e, t, n) {
        return { min: yi(e, t), max: yi(e, n) };
      }
      function yi(e, t) {
        var n;
        return "number" === typeof e
          ? e
          : null !== (n = e[t]) && void 0 !== n
          ? n
          : 0;
      }
      function gi(e) {
        return [e("x"), e("y")];
      }
      function bi(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function xi(e) {
        return void 0 === e || 1 === e;
      }
      function wi(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !xi(t) || !xi(n) || !xi(r);
      }
      function ki(e) {
        return wi(e) || Si(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function Si(e) {
        return Ei(e.x) || Ei(e.y);
      }
      function Ei(e) {
        return e && "0%" !== e;
      }
      function Ti(e, t, n) {
        return n + t * (e - n);
      }
      function ji(e, t, n, r, a) {
        return void 0 !== a && (e = Ti(e, a, r)), Ti(e, n, r) + t;
      }
      function Ai(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = ji(e.min, t, n, r, a)), (e.max = ji(e.max, t, n, r, a));
      }
      function Oi(e, t) {
        var n = t.x,
          r = t.y;
        Ai(e.x, n.translate, n.scale, n.originPoint),
          Ai(e.y, r.translate, r.scale, r.originPoint);
      }
      function Pi(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function Ci(e, t, n) {
        var r = l(n, 3),
          a = r[0],
          o = r[1],
          i = r[2],
          s = void 0 !== t[i] ? t[i] : 0.5,
          u = pr(e.min, e.max, s);
        Ai(e, t[a], t[o], u, t.scale);
      }
      var Ni = ["x", "scaleX", "originX"],
        Ri = ["y", "scaleY", "originY"];
      function Mi(e, t) {
        Ci(e.x, t, Ni), Ci(e.y, t, Ri);
      }
      function Li(e, t) {
        return bi(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Ii = new WeakMap(),
        Di = (function () {
          function e(t) {
            u(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            f(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.snapToCursor,
                    a = void 0 !== r && r;
                  if (!1 !== this.visualElement.isPresent) {
                    var o = function (e) {
                        t.stopAnimation(),
                          a && t.snapToCursor(jn(e, "page").point);
                      },
                      i = function (e, n) {
                        var r,
                          a = t.getProps(),
                          o = a.drag,
                          i = a.dragPropagation,
                          l = a.onDragStart;
                        (!o ||
                          i ||
                          (t.openGlobalLock && t.openGlobalLock(),
                          (t.openGlobalLock = Dn(o)),
                          t.openGlobalLock)) &&
                          ((t.isDragging = !0),
                          (t.currentDirection = null),
                          t.resolveConstraints(),
                          t.visualElement.projection &&
                            ((t.visualElement.projection.isAnimationBlocked =
                              !0),
                            (t.visualElement.projection.target = void 0)),
                          gi(function (e) {
                            var n,
                              r,
                              a = t.getAxisMotionValue(e).get() || 0;
                            if (jt.test(a)) {
                              var o =
                                null ===
                                  (r =
                                    null === (n = t.visualElement.projection) ||
                                    void 0 === n
                                      ? void 0
                                      : n.layout) || void 0 === r
                                  ? void 0
                                  : r.actual[e];
                              if (o) a = ii(o) * (parseFloat(a) / 100);
                            }
                            t.originPoint[e] = a;
                          }),
                          null === l || void 0 === l || l(e, n),
                          null === (r = t.visualElement.animationState) ||
                            void 0 === r ||
                            r.setActive(vn.Drag, !0));
                      },
                      l = function (e, n) {
                        var r = t.getProps(),
                          a = r.dragPropagation,
                          o = r.dragDirectionLock,
                          i = r.onDirectionLock,
                          l = r.onDrag;
                        if (a || t.openGlobalLock) {
                          var s = n.offset;
                          if (o && null === t.currentDirection)
                            return (
                              (t.currentDirection = Vi(s)),
                              void (
                                null !== t.currentDirection &&
                                (null === i ||
                                  void 0 === i ||
                                  i(t.currentDirection))
                              )
                            );
                          t.updateAxis("x", n.point, s),
                            t.updateAxis("y", n.point, s),
                            t.visualElement.syncRender(),
                            null === l || void 0 === l || l(e, n);
                        }
                      },
                      s = function (e, n) {
                        return t.stop(e, n);
                      };
                    this.panSession = new $o(
                      e,
                      {
                        onSessionStart: o,
                        onStart: i,
                        onMove: l,
                        onSessionEnd: s,
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    null === a || void 0 === a || a(e, t);
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  var e, t;
                  (this.isDragging = !1),
                    this.visualElement.projection &&
                      (this.visualElement.projection.isAnimationBlocked = !1),
                    null === (e = this.panSession) || void 0 === e || e.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    null === (t = this.visualElement.animationState) ||
                      void 0 === t ||
                      t.setActive(vn.Drag, !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && Ji(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      o = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (o = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? pr(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? pr(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(o, this.constraints[e], this.elastic[e])),
                      a.set(o);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    o = this.constraints;
                  n && ze(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            o = t.right;
                          return { x: pi(e.x, r, o), y: pi(e.y, n, a) };
                        })(a.actual, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : vi;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = vi),
                        { x: mi(e, "left", "right"), y: mi(e, "top", "bottom") }
                      );
                    })(r)),
                    o !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      gi(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.actual[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !ze(t)) return !1;
                  var r = t.current,
                    a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var o = (function (e, t, n) {
                      var r = Li(e, n),
                        a = t.scroll;
                      return a && (Pi(r.x, a.x), Pi(r.y, a.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    i = (function (e, t) {
                      return { x: hi(e.x, t.x), y: hi(e.y, t.y) };
                    })(a.layout.actual, o);
                  if (n) {
                    var l = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(i)
                    );
                    (this.hasMutatedConstraints = !!l), l && (i = bi(l));
                  }
                  return i;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    o = n.dragElastic,
                    i = n.dragTransition,
                    l = n.dragSnapToOrigin,
                    s = n.onDragTransitionEnd,
                    u = this.constraints || {},
                    c = gi(function (n) {
                      var s;
                      if (Ji(n, r, t.currentDirection)) {
                        var c =
                          null !==
                            (s = null === u || void 0 === u ? void 0 : u[n]) &&
                          void 0 !== s
                            ? s
                            : {};
                        l && (c = { min: 0, max: 0 });
                        var f = o ? 200 : 1e6,
                          d = o ? 40 : 1e7,
                          p = Re(
                            Re(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: f,
                                bounceDamping: d,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              i
                            ),
                            c
                          );
                        return t.startAxisValueAnimation(n, p);
                      }
                    });
                  return Promise.all(c).then(s);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  return vo(e, this.getAxisMotionValue(e), 0, t);
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  gi(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t,
                    n,
                    r = "_drag" + e.toUpperCase(),
                    a = this.visualElement.getProps()[r];
                  return (
                    a ||
                    this.visualElement.getValue(
                      e,
                      null !==
                        (n =
                          null ===
                            (t = this.visualElement.getProps().initial) ||
                          void 0 === t
                            ? void 0
                            : t[e]) && void 0 !== n
                        ? n
                        : 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  gi(function (n) {
                    if (Ji(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var o = r.layout.actual[n],
                          i = o.min,
                          l = o.max;
                        a.set(e[n] - pr(i, l, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e,
                    t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragConstraints,
                    o = this.visualElement.projection;
                  if (ze(a) && o && this.constraints) {
                    this.stopAnimation();
                    var i = { x: 0, y: 0 };
                    gi(function (e) {
                      var n = t.getAxisMotionValue(e);
                      if (n) {
                        var r = n.get();
                        i[e] = (function (e, t) {
                          var n = 0.5,
                            r = ii(e),
                            a = ii(t);
                          return (
                            a > r
                              ? (n = dr(t.min, t.max - r, e.min))
                              : r > a && (n = dr(e.min, e.max - a, t.min)),
                            rr(0, 1, n)
                          );
                        })({ min: r, max: r }, t.constraints[e]);
                      }
                    });
                    var l = this.visualElement.getProps().transformTemplate;
                    (this.visualElement.getInstance().style.transform = l
                      ? l({}, "")
                      : "none"),
                      null === (e = o.root) || void 0 === e || e.updateScroll(),
                      o.updateLayout(),
                      this.resolveConstraints(),
                      gi(function (e) {
                        if (Ji(e, r, null)) {
                          var n = t.getAxisMotionValue(e),
                            a = t.constraints[e],
                            o = a.min,
                            l = a.max;
                          n.set(pr(o, l, i[e]));
                        }
                      });
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e,
                    t = this;
                  Ii.set(this.visualElement, this);
                  var n = Nn(
                      this.visualElement.getInstance(),
                      "pointerdown",
                      function (e) {
                        var n = t.getProps(),
                          r = n.drag,
                          a = n.dragListener;
                        r && (void 0 === a || a) && t.start(e);
                      }
                    ),
                    r = function () {
                      ze(t.getProps().dragConstraints) &&
                        (t.constraints = t.resolveRefConstraints());
                    },
                    a = this.visualElement.projection,
                    o = a.addEventListener("measure", r);
                  a &&
                    !a.layout &&
                    (null === (e = a.root) || void 0 === e || e.updateScroll(),
                    a.updateLayout()),
                    r();
                  var i = gn(window, "resize", function () {
                      return t.scalePositionWithinConstraints();
                    }),
                    l = a.addEventListener("didUpdate", function (e) {
                      var n = e.delta,
                        r = e.hasLayoutChanged;
                      t.isDragging &&
                        r &&
                        (gi(function (e) {
                          var r = t.getAxisMotionValue(e);
                          r &&
                            ((t.originPoint[e] += n[e].translate),
                            r.set(r.get() + n[e].translate));
                        }),
                        t.visualElement.syncRender());
                    });
                  return function () {
                    i(), n(), o(), null === l || void 0 === l || l();
                  };
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    o = e.dragPropagation,
                    i = void 0 !== o && o,
                    l = e.dragConstraints,
                    s = void 0 !== l && l,
                    u = e.dragElastic,
                    c = void 0 === u ? vi : u,
                    f = e.dragMomentum,
                    d = void 0 === f || f;
                  return Re(
                    Re({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: i,
                      dragConstraints: s,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Ji(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      function Vi(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          n = null;
        return (
          Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n
        );
      }
      var Ui = {
          pan: Xn(function (e) {
            var n = e.onPan,
              r = e.onPanStart,
              a = e.onPanEnd,
              o = e.onPanSessionStart,
              i = e.visualElement,
              l = n || r || a || o,
              s = (0, t.useRef)(null),
              u = (0, t.useContext)(Me).transformPagePoint,
              c = {
                onSessionStart: o,
                onStart: r,
                onMove: n,
                onEnd: function (e, t) {
                  (s.current = null), a && a(e, t);
                },
              };
            (0, t.useEffect)(function () {
              null !== s.current && s.current.updateHandlers(c);
            }),
              Rn(
                i,
                "pointerdown",
                l &&
                  function (e) {
                    s.current = new $o(e, c, { transformPagePoint: u });
                  }
              ),
              zn(function () {
                return s.current && s.current.end();
              });
          }),
          drag: Xn(function (e) {
            var n = e.dragControls,
              r = e.visualElement,
              a = Ye(function () {
                return new Di(r);
              });
            (0, t.useEffect)(
              function () {
                return n && n.subscribe(a);
              },
              [a, n]
            ),
              (0, t.useEffect)(
                function () {
                  return a.addListeners();
                },
                [a]
              );
          }),
        },
        zi = { current: null },
        Bi = { current: !1 };
      function Fi() {
        if (((Bi.current = !0), De))
          if (window.matchMedia) {
            var e = window.matchMedia("(prefers-reduced-motion)"),
              t = function () {
                return (zi.current = e.matches);
              };
            e.addListener(t), t();
          } else zi.current = !1;
      }
      var Wi = [
        "LayoutMeasure",
        "BeforeLayoutMeasure",
        "LayoutUpdate",
        "ViewportBoxUpdate",
        "Update",
        "Render",
        "AnimationComplete",
        "LayoutAnimationComplete",
        "AnimationStart",
        "LayoutAnimationStart",
        "SetAxisTarget",
        "Unmount",
      ];
      function qi() {
        var e = Wi.map(function () {
            return new bo();
          }),
          t = {},
          n = {
            clearAllListeners: function () {
              return e.forEach(function (e) {
                return e.clear();
              });
            },
            updatePropListeners: function (e) {
              Wi.forEach(function (r) {
                var a,
                  o = "on" + r,
                  i = e[o];
                null === (a = t[r]) || void 0 === a || a.call(t),
                  i && (t[r] = n[o](i));
              });
            },
          };
        return (
          e.forEach(function (e, t) {
            (n["on" + Wi[t]] = function (t) {
              return e.add(t);
            }),
              (n["notify" + Wi[t]] = function () {
                return e.notify.apply(e, arguments);
              });
          }),
          n
        );
      }
      function Gi(e, t, n) {
        var r = t.willChange;
        for (var a in t) {
          var o = t[a],
            i = n[a];
          if (dt(o)) e.addValue(a, o), Lo(r) && r.add(a);
          else if (dt(i)) e.addValue(a, wo(o)), Lo(r) && r.remove(a);
          else if (i !== o)
            if (e.hasValue(a)) {
              var l = e.getValue(a);
              !l.hasAnimated && l.set(o);
            } else {
              var s = e.getStaticValue(a);
              e.addValue(a, wo(void 0 !== s ? s : o));
            }
        }
        for (var u in n) void 0 === t[u] && e.removeValue(u);
        return t;
      }
      var _i = ["willChange"],
        Qi = Object.keys(He),
        Zi = Qi.length,
        Hi = function (e) {
          var n = e.treeType,
            r = void 0 === n ? "" : n,
            a = e.build,
            o = e.getBaseTarget,
            i = e.makeTargetAnimatable,
            l = e.measureViewportBox,
            s = e.render,
            u = e.readValueFromInstance,
            c = e.removeValueFromRenderState,
            f = e.sortNodePosition,
            d = e.scrapeMotionValuesFromProps;
          return function (e) {
            var n,
              p,
              h = e.parent,
              v = e.props,
              m = e.presenceId,
              y = e.blockInitialAnimation,
              g = e.visualState,
              b = e.reducedMotionConfig,
              x =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              w = !1,
              k = g.latestValues,
              S = g.renderState,
              E = qi(),
              T = new Map(),
              j = new Map(),
              A = {},
              O = Re({}, k),
              P = v.initial ? Re({}, k) : {};
            function C() {
              n && w && (N(), s(n, S, v.style, W.projection));
            }
            function N() {
              a(W, S, k, x, v);
            }
            function R() {
              E.notifyUpdate(k);
            }
            function M(e, t) {
              var n = t.onChange(function (t) {
                  (k[e] = t), v.onUpdate && Pa.update(R, !1, !0);
                }),
                r = t.onRenderRequest(W.scheduleRender);
              j.set(e, function () {
                n(), r();
              });
            }
            var L = d(v),
              I = L.willChange,
              D = _t(L, _i);
            for (var J in D) {
              var V = D[J];
              void 0 !== k[J] && dt(V) && (V.set(k[J], !1), Lo(I) && I.add(J));
            }
            if (v.values)
              for (var U in v.values) {
                var z = v.values[U];
                void 0 !== k[U] && dt(z) && z.set(k[U]);
              }
            var B = qe(v),
              F = Ge(v),
              W = Re(
                Re(
                  {
                    treeType: r,
                    current: null,
                    depth: h ? h.depth + 1 : 0,
                    parent: h,
                    children: new Set(),
                    presenceId: m,
                    shouldReduceMotion: null,
                    variantChildren: F ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === h || void 0 === h ? void 0 : h.isMounted()
                    ),
                    blockInitialAnimation: y,
                    isMounted: function () {
                      return Boolean(n);
                    },
                    mount: function (e) {
                      (w = !0),
                        (n = W.current = e),
                        W.projection && W.projection.mount(e),
                        F &&
                          h &&
                          !B &&
                          (p =
                            null === h || void 0 === h
                              ? void 0
                              : h.addVariantChild(W)),
                        T.forEach(function (e, t) {
                          return M(t, e);
                        }),
                        Bi.current || Fi(),
                        (W.shouldReduceMotion =
                          "never" !== b && ("always" === b || zi.current)),
                        null === h || void 0 === h || h.children.add(W),
                        W.setProps(v);
                    },
                    unmount: function () {
                      var e;
                      null === (e = W.projection) ||
                        void 0 === e ||
                        e.unmount(),
                        Sa.update(R),
                        Sa.render(C),
                        j.forEach(function (e) {
                          return e();
                        }),
                        null === p || void 0 === p || p(),
                        null === h || void 0 === h || h.children.delete(W),
                        E.clearAllListeners(),
                        (n = void 0),
                        (w = !1);
                    },
                    loadFeatures: function (e, n, r, a, o, i) {
                      var l = [];
                      for (var s = 0; s < Zi; s++) {
                        var u = Qi[s],
                          c = He[u],
                          f = c.isEnabled,
                          d = c.Component;
                        f(e) &&
                          d &&
                          l.push(
                            (0, t.createElement)(
                              d,
                              Re(Re({ key: u }, e), {}, { visualElement: W })
                            )
                          );
                      }
                      if (!W.projection && o) {
                        W.projection = new o(
                          a,
                          W.getLatestValues(),
                          h && h.projection
                        );
                        var p = e.layoutId,
                          v = e.layout,
                          m = e.drag,
                          y = e.dragConstraints,
                          g = e.layoutScroll;
                        W.projection.setOptions({
                          layoutId: p,
                          layout: v,
                          alwaysMeasureLayout: Boolean(m) || (y && ze(y)),
                          visualElement: W,
                          scheduleRender: function () {
                            return W.scheduleRender();
                          },
                          animationType: "string" === typeof v ? v : "both",
                          initialPromotionConfig: i,
                          layoutScroll: g,
                        });
                      }
                      return l;
                    },
                    addVariantChild: function (e) {
                      var t,
                        n = W.getClosestVariantNode();
                      if (n)
                        return (
                          null === (t = n.variantChildren) ||
                            void 0 === t ||
                            t.add(e),
                          function () {
                            return n.variantChildren.delete(e);
                          }
                        );
                    },
                    sortNodePosition: function (e) {
                      return f && r === e.treeType
                        ? f(W.getInstance(), e.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return F
                        ? W
                        : null === h || void 0 === h
                        ? void 0
                        : h.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return v.layoutId;
                    },
                    getInstance: function () {
                      return n;
                    },
                    getStaticValue: function (e) {
                      return k[e];
                    },
                    setStaticValue: function (e, t) {
                      return (k[e] = t);
                    },
                    getLatestValues: function () {
                      return k;
                    },
                    setVisibility: function (e) {
                      W.isVisible !== e &&
                        ((W.isVisible = e), W.scheduleRender());
                    },
                    makeTargetAnimatable: function (e) {
                      var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      return i(W, e, v, t);
                    },
                    measureViewportBox: function () {
                      return l(n, v);
                    },
                    addValue: function (e, t) {
                      W.hasValue(e) && W.removeValue(e),
                        T.set(e, t),
                        (k[e] = t.get()),
                        M(e, t);
                    },
                    removeValue: function (e) {
                      var t;
                      T.delete(e),
                        null === (t = j.get(e)) || void 0 === t || t(),
                        j.delete(e),
                        delete k[e],
                        c(e, S);
                    },
                    hasValue: function (e) {
                      return T.has(e);
                    },
                    getValue: function (e, t) {
                      if (v.values && v.values[e]) return v.values[e];
                      var n = T.get(e);
                      return (
                        void 0 === n &&
                          void 0 !== t &&
                          ((n = wo(t)), W.addValue(e, n)),
                        n
                      );
                    },
                    forEachValue: function (e) {
                      return T.forEach(e);
                    },
                    readValue: function (e) {
                      return void 0 !== k[e] ? k[e] : u(n, e, x);
                    },
                    setBaseTarget: function (e, t) {
                      O[e] = t;
                    },
                    getBaseTarget: function (e) {
                      var t,
                        n = v.initial,
                        r =
                          "string" === typeof n || "object" === typeof n
                            ? null === (t = sn(v, n)) || void 0 === t
                              ? void 0
                              : t[e]
                            : void 0;
                      if (n && void 0 !== r) return r;
                      if (o) {
                        var a = o(v, e);
                        if (void 0 !== a && !dt(a)) return a;
                      }
                      return void 0 !== P[e] && void 0 === r ? void 0 : O[e];
                    },
                  },
                  E
                ),
                {},
                {
                  build: function () {
                    return N(), S;
                  },
                  scheduleRender: function () {
                    Pa.render(C, !1, !0);
                  },
                  syncRender: C,
                  setProps: function (e) {
                    (e.transformTemplate || v.transformTemplate) &&
                      W.scheduleRender(),
                      (v = e),
                      E.updatePropListeners(e),
                      (A = Gi(W, d(v), A));
                  },
                  getProps: function () {
                    return v;
                  },
                  getVariant: function (e) {
                    var t;
                    return null === (t = v.variants) || void 0 === t
                      ? void 0
                      : t[e];
                  },
                  getDefaultTransition: function () {
                    return v.transition;
                  },
                  getTransformPagePoint: function () {
                    return v.transformPagePoint;
                  },
                  getVariantContext: function () {
                    var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                    if (e)
                      return null === h || void 0 === h
                        ? void 0
                        : h.getVariantContext();
                    if (!B) {
                      var t =
                        (null === h || void 0 === h
                          ? void 0
                          : h.getVariantContext()) || {};
                      return void 0 !== v.initial && (t.initial = v.initial), t;
                    }
                    for (var n = {}, r = 0; r < Ki; r++) {
                      var a = Yi[r],
                        o = v[a];
                      (Be(o) || !1 === o) && (n[a] = o);
                    }
                    return n;
                  },
                }
              );
            return W;
          };
        },
        Yi = ["initial"].concat(s(Fo)),
        Ki = Yi.length;
      function Xi(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var $i = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function el(e) {
        var t = $i.exec(e);
        if (!t) return [,];
        var n = l(t, 3);
        return [n[1], n[2]];
      }
      function tl(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        'Max CSS variable fallback depth detected in property "'.concat(
          e,
          '". This may indicate a circular fallback dependency.'
        );
        var r = el(e),
          a = l(r, 2),
          o = a[0],
          i = a[1];
        if (o) {
          var s = window.getComputedStyle(t).getPropertyValue(o);
          return s ? s.trim() : Xi(i) ? tl(i, t, n + 1) : i;
        }
      }
      function nl(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          a = e.getInstance();
        if (!(a instanceof Element)) return { target: r, transitionEnd: n };
        for (var o in (n && (n = Re({}, n)),
        e.forEachValue(function (e) {
          var t = e.get();
          if (Xi(t)) {
            var n = tl(t, a);
            n && e.set(n);
          }
        }),
        r)) {
          var i = r[o];
          if (Xi(i)) {
            var l = tl(i, a);
            l && ((r[o] = l), n && void 0 === n[o] && (n[o] = i));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var rl,
        al = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        ol = function (e) {
          return al.has(e);
        },
        il = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        ll = function (e) {
          return e === Nt || e === At;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(rl || (rl = {}));
      var sl = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        ul = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var o = a.match(/^matrix3d\((.+)\)$/);
            if (o) return sl(o[1], t);
            var i = a.match(/^matrix\((.+)\)$/);
            return i ? sl(i[1], e) : 0;
          };
        },
        cl = new Set(["x", "y", "z"]),
        fl = ut.filter(function (e) {
          return !cl.has(e);
        });
      function dl(e) {
        var t = [];
        return (
          fl.forEach(function (n) {
            var r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
          }),
          t.length && e.syncRender(),
          t
        );
      }
      var pl = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              a = void 0 === r ? "0" : r,
              o = t.paddingRight,
              i = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(a) - parseFloat(i);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              a = void 0 === r ? "0" : r,
              o = t.paddingBottom,
              i = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(a) - parseFloat(i);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: ul(4, 13),
          y: ul(5, 14),
        },
        hl = function (e, t, n) {
          var r = t.measureViewportBox(),
            a = t.getInstance(),
            o = getComputedStyle(a),
            i = o.display,
            l = {};
          "none" === i && t.setStaticValue("display", e.display || "block"),
            n.forEach(function (e) {
              l[e] = pl[e](r, o);
            }),
            t.syncRender();
          var s = t.measureViewportBox();
          return (
            n.forEach(function (n) {
              var r = t.getValue(n);
              il(r, l[n]), (e[n] = pl[n](s, o));
            }),
            e
          );
        };
      function vl(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(ol);
        })(t)
          ? (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
              (t = Re({}, t)), (r = Re({}, r));
              var a = Object.keys(t).filter(ol),
                o = [],
                i = !1,
                s = [];
              if (
                (a.forEach(function (a) {
                  var l = e.getValue(a);
                  if (e.hasValue(a)) {
                    var u,
                      c = n[a],
                      f = Eo(c),
                      d = t[a];
                    if (un(d)) {
                      var p = d.length,
                        h = null === d[0] ? 1 : 0;
                      (c = d[h]), (f = Eo(c));
                      for (var v = h; v < p; v++)
                        u ? Eo(d[v]) : (u = Eo(d[v])) === f || (ll(f) && ll(u));
                    } else u = Eo(d);
                    if (f !== u)
                      if (ll(f) && ll(u)) {
                        var m = l.get();
                        "string" === typeof m && l.set(parseFloat(m)),
                          "string" === typeof d
                            ? (t[a] = parseFloat(d))
                            : Array.isArray(d) &&
                              u === At &&
                              (t[a] = d.map(parseFloat));
                      } else
                        (null === f || void 0 === f ? void 0 : f.transform) &&
                        (null === u || void 0 === u ? void 0 : u.transform) &&
                        (0 === c || 0 === d)
                          ? 0 === c
                            ? l.set(u.transform(c))
                            : (t[a] = f.transform(d))
                          : (i || ((o = dl(e)), (i = !0)),
                            s.push(a),
                            (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                            il(l, d));
                  }
                }),
                s.length)
              ) {
                var u = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                  c = hl(t, e, s);
                return (
                  o.length &&
                    o.forEach(function (t) {
                      var n = l(t, 2),
                        r = n[0],
                        a = n[1];
                      e.getValue(r).set(a);
                    }),
                  e.syncRender(),
                  De && null !== u && window.scrollTo({ top: u }),
                  { target: c, transitionEnd: r }
                );
              }
              return { target: t, transitionEnd: r };
            })(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var ml = function (e, t, n, r) {
          var a = nl(e, t, r);
          return vl(e, (t = a.target), n, (r = a.transitionEnd));
        },
        yl = ["transition", "transitionEnd"];
      var gl = {
          treeType: "dom",
          readValueFromInstance: function (e, t) {
            if (ct.has(t)) {
              var n = to(t);
              return (n && n.default) || 0;
            }
            var r,
              a = ((r = e), window.getComputedStyle(r)),
              o = (mt(t) ? a.getPropertyValue(t) : a[t]) || 0;
            return "string" === typeof o ? o.trim() : o;
          },
          sortNodePosition: function (e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
          },
          getBaseTarget: function (e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t];
          },
          measureViewportBox: function (e, t) {
            return Li(e, t.transformPagePoint);
          },
          resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
          },
          restoreTransform: function (e, t) {
            e.style.transform = t.style.transform;
          },
          removeValueFromRenderState: function (e, t) {
            var n = t.vars,
              r = t.style;
            delete n[e], delete r[e];
          },
          makeTargetAnimatable: function (e, t, n) {
            var r = t.transition,
              a = t.transitionEnd,
              o = _t(t, yl),
              i = n.transformValues,
              l =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              s = Mo(o, r || {}, e);
            if ((i && (a && (a = i(a)), o && (o = i(o)), s && (s = i(s))), l)) {
              No(e, o, s);
              var u = ml(e, o, s, a);
              (a = u.transitionEnd), (o = u.target);
            }
            return Re({ transition: r, transitionEnd: a }, o);
          },
          scrapeMotionValuesFromProps: on,
          build: function (e, t, n, r, a) {
            void 0 !== e.isVisible &&
              (t.style.visibility = e.isVisible ? "visible" : "hidden"),
              Dt(t, n, r, a.transformTemplate);
          },
          render: nn,
        },
        bl = Hi(gl),
        xl = Hi(
          Re(
            Re({}, gl),
            {},
            {
              getBaseTarget: function (e, t) {
                return e[t];
              },
              readValueFromInstance: function (e, t) {
                var n;
                return ct.has(t)
                  ? (null === (n = to(t)) || void 0 === n
                      ? void 0
                      : n.default) || 0
                  : ((t = rn.has(t) ? t : tn(t)), e.getAttribute(t));
              },
              scrapeMotionValuesFromProps: ln,
              build: function (e, t, n, r, a) {
                Kt(t, n, r, a.transformTemplate);
              },
              render: an,
            }
          )
        ),
        wl = function (e, t) {
          return lt(e)
            ? xl(t, { enableHardwareAcceleration: !1 })
            : bl(t, { enableHardwareAcceleration: !0 });
        };
      function kl(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Sl = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!At.test(e)) return e;
              e = parseFloat(e);
            }
            var n = kl(e, t.target.x),
              r = kl(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        El = "_$css",
        Tl = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              o = e.includes("var("),
              i = [];
            o &&
              (e = e.replace($i, function (e) {
                return i.push(e), El;
              }));
            var l = Ir.parse(e);
            if (l.length > 5) return a;
            var s = Ir.createTransformer(e),
              u = "number" !== typeof l[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (l[0 + u] /= c), (l[1 + u] /= f);
            var d = pr(c, f, 0.5);
            "number" === typeof l[2 + u] && (l[2 + u] /= d),
              "number" === typeof l[3 + u] && (l[3 + u] /= d);
            var p = s(l);
            if (o) {
              var h = 0;
              p = p.replace(El, function () {
                var e = i[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        jl = (function (e) {
          p(n, e);
          var t = g(n);
          function n() {
            return u(this, n), t.apply(this, arguments);
          }
          return (
            f(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    o = n.switchLayoutGroup,
                    i = n.layoutId,
                    l = r.projection;
                  (e = Al),
                    Object.assign(st, e),
                    l &&
                      (a.group && a.group.add(l),
                      o && o.register && i && o.register(l),
                      l.root.didUpdate(),
                      l.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      l.setOptions(
                        Re(
                          Re({}, l.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Ke.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    o = n.drag,
                    i = n.isPresent,
                    l = a.projection;
                  return l
                    ? ((l.isPresent = i),
                      o || e.layoutDependency !== r || void 0 === r
                        ? l.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== i &&
                        (i
                          ? l.promote()
                          : l.relegate() ||
                            Pa.postRender(function () {
                              var e;
                              (null === (e = l.getStack()) || void 0 === e
                                ? void 0
                                : e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this.props.visualElement.projection;
                  e &&
                    (e.root.didUpdate(),
                    !e.currentAnimation && e.isLead() && this.safeToRemove());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    (null === n || void 0 === n ? void 0 : n.group) &&
                      n.group.remove(a),
                    (null === r || void 0 === r ? void 0 : r.deregister) &&
                      r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  null === e || void 0 === e || e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(t.Component);
      var Al = {
          borderRadius: Re(
            Re({}, Sl),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Sl,
          borderTopRightRadius: Sl,
          borderBottomLeftRadius: Sl,
          borderBottomRightRadius: Sl,
          boxShadow: Tl,
        },
        Ol = {
          measureLayout: function (e) {
            var n = l(er(), 2),
              r = n[0],
              a = n[1],
              o = (0, t.useContext)($e);
            return t.createElement(
              jl,
              Re(
                Re({}, e),
                {},
                {
                  layoutGroup: o,
                  switchLayoutGroup: (0, t.useContext)(tt),
                  isPresent: r,
                  safeToRemove: a,
                }
              )
            );
          },
        };
      function Pl(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = dt(e) ? e : wo(e);
        return (
          vo("", r, t, n),
          {
            stop: function () {
              return r.stop();
            },
            isAnimating: function () {
              return r.isAnimating();
            },
          }
        );
      }
      var Cl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Nl = Cl.length,
        Rl = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        Ml = function (e) {
          return "number" === typeof e || At.test(e);
        };
      function Ll(e, t, n, r, a, o) {
        var i, l, s, u;
        a
          ? ((e.opacity = pr(
              0,
              null !== (i = n.opacity) && void 0 !== i ? i : 1,
              Dl(r)
            )),
            (e.opacityExit = pr(
              null !== (l = t.opacity) && void 0 !== l ? l : 1,
              0,
              Jl(r)
            )))
          : o &&
            (e.opacity = pr(
              null !== (s = t.opacity) && void 0 !== s ? s : 1,
              null !== (u = n.opacity) && void 0 !== u ? u : 1,
              r
            ));
        for (var c = 0; c < Nl; c++) {
          var f = "border".concat(Cl[c], "Radius"),
            d = Il(t, f),
            p = Il(n, f);
          if (void 0 !== d || void 0 !== p)
            d || (d = 0),
              p || (p = 0),
              0 === d || 0 === p || Ml(d) === Ml(p)
                ? ((e[f] = Math.max(pr(Rl(d), Rl(p), r), 0)),
                  (jt.test(p) || jt.test(d)) && (e[f] += "%"))
                : (e[f] = p);
        }
        (t.rotate || n.rotate) &&
          (e.rotate = pr(t.rotate || 0, n.rotate || 0, r));
      }
      function Il(e, t) {
        var n;
        return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
      }
      var Dl = Vl(0, 0.5, na),
        Jl = Vl(0.5, 0.95, Kr);
      function Vl(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(dr(e, t, r));
        };
      }
      function Ul(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function zl(e, t) {
        Ul(e.x, t.x), Ul(e.y, t.y);
      }
      function Bl(e, t, n, r, a) {
        return (
          (e = Ti((e -= t), 1 / n, r)), void 0 !== a && (e = Ti(e, 1 / a, r)), e
        );
      }
      function Fl(e, t, n, r, a) {
        var o = l(n, 3),
          i = o[0],
          s = o[1],
          u = o[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            o =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            i =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (jt.test(t)) {
            (t = parseFloat(t)), (t = pr(i.min, i.max, t / 100) - i.min);
          }
          if ("number" === typeof t) {
            var l = pr(o.min, o.max, r);
            e === o && (l -= t),
              (e.min = Bl(e.min, t, n, l, a)),
              (e.max = Bl(e.max, t, n, l, a));
          }
        })(e, t[i], t[s], t[u], t.scale, r, a);
      }
      var Wl = ["x", "scaleX", "originX"],
        ql = ["y", "scaleY", "originY"];
      function Gl(e, t, n, r) {
        Fl(
          e.x,
          t,
          Wl,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Fl(
            e.y,
            t,
            ql,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function _l(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function Ql(e) {
        return _l(e.x) && _l(e.y);
      }
      function Zl(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function Hl(e) {
        return ii(e.x) / ii(e.y);
      }
      var Yl = (function () {
        function e() {
          u(this, e), (this.members = []);
        }
        return (
          f(e, [
            {
              key: "add",
              value: function (e) {
                yo(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (go(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n,
                  r = this.lead;
                e !== r &&
                  ((this.prevLead = r),
                  (this.lead = e),
                  e.show(),
                  r &&
                    (r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = r),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot &&
                      ((e.snapshot = r.snapshot),
                      (e.snapshot.latestValues =
                        r.animationValues || r.latestValues),
                      (e.snapshot.isShared = !0)),
                    (null === (n = e.root) || void 0 === n
                      ? void 0
                      : n.isUpdating) && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && r.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t, n, r, a, o;
                  null === (n = (t = e.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(t),
                    null ===
                      (o =
                        null === (r = e.resumingFrom) || void 0 === r
                          ? void 0
                          : (a = r.options).onExitComplete) ||
                      void 0 === o ||
                      o.call(a);
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function Kl(e, t, n) {
        var r = e.x.translate / t.x,
          a = e.y.translate / t.y,
          o = "translate3d(".concat(r, "px, ").concat(a, "px, 0) ");
        if (((o += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n)) {
          var i = n.rotate,
            l = n.rotateX,
            s = n.rotateY;
          i && (o += "rotate(".concat(i, "deg) ")),
            l && (o += "rotateX(".concat(l, "deg) ")),
            s && (o += "rotateY(".concat(s, "deg) "));
        }
        var u = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" ===
          (o += "scale(".concat(u, ", ").concat(c, ")"))
          ? "none"
          : o;
      }
      var Xl = function (e, t) {
          return e.depth - t.depth;
        },
        $l = (function () {
          function e() {
            u(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            f(e, [
              {
                key: "add",
                value: function (e) {
                  yo(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  go(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(Xl),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })(),
        es = ["", "X", "Y", "Z"];
      function ts(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          o = e.resetTransform;
        return (function () {
          function e(t) {
            var r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            u(this, e),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                r.nodes.forEach(ss), r.nodes.forEach(us);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = a),
              (this.root = o ? o.root || o : this),
              (this.path = o ? [].concat(s(o.path), [o]) : []),
              (this.parent = o),
              (this.depth = o ? o.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var i = 0; i < this.path.length; i++)
              this.path[i].shouldResetTransform = !0;
            this.root === this && (this.nodes = new $l());
          }
          return (
            f(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new bo()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  null === t || void 0 === t || t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "registerPotentialNode",
                value: function (e, t) {
                  this.potentialNodes.set(e, t);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!this.instance) {
                    (this.isSVG =
                      e instanceof SVGElement && "svg" !== e.tagName),
                      (this.instance = e);
                    var o = this.options,
                      i = o.layoutId,
                      l = o.layout,
                      s = o.visualElement;
                    if (
                      (s && !s.getInstance() && s.mount(e),
                      this.root.nodes.add(this),
                      null === (n = this.parent) ||
                        void 0 === n ||
                        n.children.add(this),
                      this.id && this.root.potentialNodes.delete(this.id),
                      a && (l || i) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var u,
                        c = function () {
                          return (r.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (r.root.updateBlockedByResize = !0),
                          u && u(),
                          (u = ao(c, 250)),
                          Ke.hasAnimatedSinceResize &&
                            ((Ke.hasAnimatedSinceResize = !1),
                            r.nodes.forEach(ls));
                      });
                    }
                    i && this.root.registerSharedNode(i, this),
                      !1 !== this.options.animate &&
                        s &&
                        (i || l) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t,
                            n,
                            a,
                            o,
                            i,
                            l = e.delta,
                            u = e.hasLayoutChanged,
                            c = e.hasRelativeTargetChanged,
                            f = e.layout;
                          if (r.isTreeAnimationBlocked())
                            return (
                              (r.target = void 0),
                              void (r.relativeTarget = void 0)
                            );
                          var d =
                              null !==
                                (n =
                                  null !== (t = r.options.transition) &&
                                  void 0 !== t
                                    ? t
                                    : s.getDefaultTransition()) && void 0 !== n
                                ? n
                                : ms,
                            p = s.getProps(),
                            h = p.onLayoutAnimationStart,
                            v = p.onLayoutAnimationComplete,
                            m = !r.targetLayout || !Zl(r.targetLayout, f) || c,
                            y = !u && c;
                          if (
                            (null === (a = r.resumeFrom) || void 0 === a
                              ? void 0
                              : a.instance) ||
                            y ||
                            (u && (m || !r.currentAnimation))
                          ) {
                            r.resumeFrom &&
                              ((r.resumingFrom = r.resumeFrom),
                              (r.resumingFrom.resumingFrom = void 0)),
                              r.setAnimationOrigin(l, y);
                            var g = Re(
                              Re({}, ho(d, "layout")),
                              {},
                              { onPlay: h, onComplete: v }
                            );
                            s.shouldReduceMotion &&
                              ((g.delay = 0), (g.type = !1)),
                              r.startAnimation(g);
                          } else u || 0 !== r.animationProgress || ls(r), r.isLead() && (null === (i = (o = r.options).onExitComplete) || void 0 === i || i.call(o));
                          r.targetLayout = f;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t;
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.remove(this),
                    null === (t = this.parent) ||
                      void 0 === t ||
                      t.children.delete(this),
                    (this.instance = void 0),
                    Sa.preRender(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  var e;
                  return (
                    this.isAnimationBlocked ||
                    (null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  var e;
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    null === (e = this.nodes) || void 0 === e || e.forEach(cs));
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  if (this.root.isUpdateBlocked())
                    null === (t = (e = this.options).onExitComplete) ||
                      void 0 === t ||
                      t.call(e);
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var a = 0; a < this.path.length; a++) {
                      var o = this.path[a];
                      (o.shouldResetTransform = !0), o.updateScroll();
                    }
                    var i = this.options,
                      l = i.layoutId,
                      s = i.layout;
                    if (void 0 !== l || s) {
                      var u =
                        null === (n = this.options.visualElement) ||
                        void 0 === n
                          ? void 0
                          : n.getProps().transformTemplate;
                      (this.prevTransformTemplateValue =
                        null === u || void 0 === u
                          ? void 0
                          : u(this.latestValues, "")),
                        this.updateSnapshot(),
                        r && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  if (this.isUpdateBlocked())
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(os)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.potentialNodes.size &&
                      (this.potentialNodes.forEach(ys),
                      this.potentialNodes.clear()),
                    this.nodes.forEach(is),
                    this.nodes.forEach(ns),
                    this.nodes.forEach(rs),
                    this.clearAllSnapshots(),
                    Ea.update(),
                    Ea.preRender(),
                    Ea.render());
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(as), this.sharedNodes.forEach(fs);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  Pa.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  Pa.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  if (!this.snapshot && this.instance) {
                    var e = this.measure(),
                      t = this.removeTransform(this.removeElementScroll(e));
                    bs(t),
                      (this.snapshot = {
                        measured: e,
                        layout: t,
                        latestValues: {},
                      });
                  }
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  var e;
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll();
                      }
                    var n = this.measure();
                    bs(n);
                    var r = this.layout;
                    (this.layout = {
                      measured: n,
                      actual: this.removeElementScroll(n),
                    }),
                      (this.layoutCorrected = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.actual),
                      null === (e = this.options.visualElement) ||
                        void 0 === e ||
                        e.notifyLayoutMeasure(
                          this.layout.actual,
                          null === r || void 0 === r ? void 0 : r.actual
                        );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  this.options.layoutScroll &&
                    this.instance &&
                    ((this.isScrollRoot = a(this.instance)),
                    (this.scroll = r(this.instance)));
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  var e;
                  if (o) {
                    var t = this.isLayoutDirty || this.shouldResetTransform,
                      n = this.projectionDelta && !Ql(this.projectionDelta),
                      r =
                        null === (e = this.options.visualElement) ||
                        void 0 === e
                          ? void 0
                          : e.getProps().transformTemplate,
                      a =
                        null === r || void 0 === r
                          ? void 0
                          : r(this.latestValues, ""),
                      i = a !== this.prevTransformTemplateValue;
                    t &&
                      (n || ki(this.latestValues) || i) &&
                      (o(this.instance, a),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e)
                    return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (Pi(t.x, n.x), Pi(t.y, n.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  zl(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      o = r.options,
                      i = r.isScrollRoot;
                    if (r !== this.root && a && o.layoutScroll) {
                      if (i) {
                        zl(t, e);
                        var l = this.root.scroll;
                        l && (Pi(t.x, -l.x), Pi(t.y, -l.y));
                      }
                      Pi(t.x, a.x), Pi(t.y, a.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  zl(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      Mi(n, { x: -a.scroll.x, y: -a.scroll.y }),
                      ki(a.latestValues) && Mi(n, a.latestValues);
                  }
                  return ki(this.latestValues) && Mi(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t,
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  zl(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    if (a.instance && ki(a.latestValues)) {
                      wi(a.latestValues) && a.updateSnapshot();
                      var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                      zl(o, a.measure()),
                        Gl(
                          n,
                          a.latestValues,
                          null === (t = a.snapshot) || void 0 === t
                            ? void 0
                            : t.layout,
                          o
                        );
                    }
                  }
                  return ki(this.latestValues) && Gl(n, this.latestValues), n;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e), this.root.scheduleUpdateProjection();
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = Re(
                    Re(Re({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t,
                    n,
                    r,
                    a = this.options,
                    o = a.layout,
                    i = a.layoutId;
                  this.layout &&
                    (o || i) &&
                    (this.targetDelta ||
                      this.relativeTarget ||
                      ((this.relativeParent =
                        this.getClosestProjectingParent()),
                      this.relativeParent &&
                        this.relativeParent.layout &&
                        ((this.relativeTarget = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        (this.relativeTargetOrigin = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        di(
                          this.relativeTargetOrigin,
                          this.layout.actual,
                          this.relativeParent.layout.actual
                        ),
                        zl(this.relativeTarget, this.relativeTargetOrigin))),
                    (this.relativeTarget || this.targetDelta) &&
                      (this.target ||
                        ((this.target = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        (this.targetWithTransforms = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        })),
                      this.relativeTarget &&
                      this.relativeTargetOrigin &&
                      (null === (e = this.relativeParent) || void 0 === e
                        ? void 0
                        : e.target)
                        ? ((t = this.target),
                          (n = this.relativeTarget),
                          (r = this.relativeParent.target),
                          ci(t.x, n.x, r.x),
                          ci(t.y, n.y, r.y))
                        : this.targetDelta
                        ? (Boolean(this.resumingFrom)
                            ? (this.target = this.applyTransform(
                                this.layout.actual
                              ))
                            : zl(this.target, this.layout.actual),
                          Oi(this.target, this.targetDelta))
                        : zl(this.target, this.layout.actual),
                      this.attemptToResolveRelativeTarget &&
                        ((this.attemptToResolveRelativeTarget = !1),
                        (this.relativeParent =
                          this.getClosestProjectingParent()),
                        this.relativeParent &&
                          Boolean(this.relativeParent.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !this.relativeParent.options.layoutScroll &&
                          this.relativeParent.target &&
                          ((this.relativeTarget = {
                            x: { min: 0, max: 0 },
                            y: { min: 0, max: 0 },
                          }),
                          (this.relativeTargetOrigin = {
                            x: { min: 0, max: 0 },
                            y: { min: 0, max: 0 },
                          }),
                          di(
                            this.relativeTargetOrigin,
                            this.target,
                            this.relativeParent.target
                          ),
                          zl(
                            this.relativeTarget,
                            this.relativeTargetOrigin
                          )))));
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !wi(this.parent.latestValues) &&
                    !Si(this.parent.latestValues)
                  )
                    return (this.parent.relativeTarget ||
                      this.parent.targetDelta) &&
                      this.parent.layout
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.options,
                    n = t.layout,
                    r = t.layoutId;
                  if (
                    ((this.isTreeAnimating = Boolean(
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isTreeAnimating) ||
                        this.currentAnimation ||
                        this.pendingAnimation
                    )),
                    this.isTreeAnimating ||
                      (this.targetDelta = this.relativeTarget = void 0),
                    this.layout && (n || r))
                  ) {
                    var a = this.getLead();
                    zl(this.layoutCorrected, this.layout.actual),
                      (function (e, t, n) {
                        var r,
                          a,
                          o =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          i = n.length;
                        if (i) {
                          var l, s;
                          t.x = t.y = 1;
                          for (var u = 0; u < i; u++)
                            (s = (l = n[u]).projectionDelta),
                              "contents" !==
                                (null ===
                                  (a =
                                    null === (r = l.instance) || void 0 === r
                                      ? void 0
                                      : r.style) || void 0 === a
                                  ? void 0
                                  : a.display) &&
                                (o &&
                                  l.options.layoutScroll &&
                                  l.scroll &&
                                  l !== l.root &&
                                  Mi(e, { x: -l.scroll.x, y: -l.scroll.y }),
                                s &&
                                  ((t.x *= s.x.scale),
                                  (t.y *= s.y.scale),
                                  Oi(e, s)),
                                o &&
                                  ki(l.latestValues) &&
                                  Mi(e, l.latestValues));
                        }
                      })(
                        this.layoutCorrected,
                        this.treeScale,
                        this.path,
                        Boolean(this.resumingFrom) || this !== a
                      );
                    var o = a.target;
                    if (o) {
                      this.projectionDelta ||
                        ((this.projectionDelta = {
                          x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                          y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                        }),
                        (this.projectionDeltaWithTransform = {
                          x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                          y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0,
                          },
                        }));
                      var i = this.treeScale.x,
                        l = this.treeScale.y,
                        s = this.projectionTransform;
                      ui(
                        this.projectionDelta,
                        this.layoutCorrected,
                        o,
                        this.latestValues
                      ),
                        (this.projectionTransform = Kl(
                          this.projectionDelta,
                          this.treeScale
                        )),
                        (this.projectionTransform === s &&
                          this.treeScale.x === i &&
                          this.treeScale.y === l) ||
                          ((this.hasProjected = !0),
                          this.scheduleRender(),
                          this.notifyListeners("projectionUpdate", o));
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  null === (t = (e = this.options).scheduleRender) ||
                    void 0 === t ||
                    t.call(e),
                    r &&
                      (null === (n = this.getStack()) ||
                        void 0 === n ||
                        n.scheduleRender()),
                    this.resumingFrom &&
                      !this.resumingFrom.instance &&
                      (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t,
                    n = this,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    a = this.snapshot,
                    o =
                      (null === a || void 0 === a ? void 0 : a.latestValues) ||
                      {},
                    i = Re({}, this.latestValues),
                    l = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    };
                  (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !r);
                  var s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                    u = null === a || void 0 === a ? void 0 : a.isShared,
                    c =
                      ((null === (t = this.getStack()) || void 0 === t
                        ? void 0
                        : t.members.length) || 0) <= 1,
                    f = Boolean(
                      u &&
                        !c &&
                        !0 === this.options.crossfade &&
                        !this.path.some(vs)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (t) {
                      var r,
                        a = t / 1e3;
                      ds(l.x, e.x, a),
                        ds(l.y, e.y, a),
                        n.setTargetDelta(l),
                        n.relativeTarget &&
                          n.relativeTargetOrigin &&
                          n.layout &&
                          (null === (r = n.relativeParent) || void 0 === r
                            ? void 0
                            : r.layout) &&
                          (di(
                            s,
                            n.layout.actual,
                            n.relativeParent.layout.actual
                          ),
                          hs(n.relativeTarget, n.relativeTargetOrigin, s, a)),
                        u &&
                          ((n.animationValues = i),
                          Ll(i, o, n.latestValues, a, f, c)),
                        n.root.scheduleUpdateProjection(),
                        n.scheduleRender(),
                        (n.animationProgress = a);
                    }),
                    this.mixTargetDelta(0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t,
                    n,
                    r = this;
                  this.notifyListeners("animationStart"),
                    null === (t = this.currentAnimation) ||
                      void 0 === t ||
                      t.stop(),
                    this.resumingFrom &&
                      (null === (n = this.resumingFrom.currentAnimation) ||
                        void 0 === n ||
                        n.stop()),
                    this.pendingAnimation &&
                      (Sa.update(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = Pa.update(function () {
                      (Ke.hasAnimatedSinceResize = !0),
                        (r.currentAnimation = Pl(
                          0,
                          1e3,
                          Re(
                            Re({}, e),
                            {},
                            {
                              onUpdate: function (t) {
                                var n;
                                r.mixTargetDelta(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: function () {
                                var t;
                                null === (t = e.onComplete) ||
                                  void 0 === t ||
                                  t.call(e),
                                  r.completeAnimation();
                              },
                            }
                          )
                        )),
                        r.resumingFrom &&
                          (r.resumingFrom.currentAnimation =
                            r.currentAnimation),
                        (r.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  var e;
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0)),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  var e;
                  this.currentAnimation &&
                    (null === (e = this.mixTargetDelta) ||
                      void 0 === e ||
                      e.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      xs(
                        this.options.animationType,
                        this.layout.actual,
                        r.actual
                      )
                    ) {
                      n = this.target || {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      };
                      var o = ii(this.layout.actual.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + o);
                      var i = ii(this.layout.actual.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + i);
                    }
                    zl(t, n),
                      Mi(t, a),
                      ui(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  var n, r, a;
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new Yl()),
                    this.sharedNodes.get(e).add(t),
                    t.promote({
                      transition:
                        null === (n = t.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.transition,
                      preserveFollowOpacity:
                        null ===
                          (a =
                            null === (r = t.options.initialPromotionConfig) ||
                            void 0 === r
                              ? void 0
                              : r.shouldPreserveFollowOpacity) || void 0 === a
                          ? void 0
                          : a.call(r, t),
                    });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    for (var t = !1, n = {}, r = 0; r < es.length; r++) {
                      var a = "rotate" + es[r];
                      e.getStaticValue(a) &&
                        ((t = !0),
                        (n[a] = e.getStaticValue(a)),
                        e.setStaticValue(a, 0));
                    }
                    if (t) {
                      for (var o in (null === e ||
                        void 0 === e ||
                        e.syncRender(),
                      n))
                        e.setStaticValue(o, n[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    a = {};
                  if (!this.instance || this.isSVG) return a;
                  if (!this.isVisible) return { visibility: "hidden" };
                  a.visibility = "";
                  var o =
                    null === (e = this.options.visualElement) || void 0 === e
                      ? void 0
                      : e.getProps().transformTemplate;
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (a.opacity = ""),
                      (a.pointerEvents = fn(r.pointerEvents) || ""),
                      (a.transform = o ? o(this.latestValues, "") : "none"),
                      a
                    );
                  var i = this.getLead();
                  if (!this.projectionDelta || !this.layout || !i.target) {
                    var l = {};
                    return (
                      this.options.layoutId &&
                        ((l.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (l.pointerEvents = fn(r.pointerEvents) || "")),
                      this.hasProjected &&
                        !ki(this.latestValues) &&
                        ((l.transform = o ? o({}, "") : "none"),
                        (this.hasProjected = !1)),
                      l
                    );
                  }
                  var s = i.animationValues || i.latestValues;
                  this.applyTransformsToTarget(),
                    (a.transform = Kl(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      s
                    )),
                    o && (a.transform = o(s, a.transform));
                  var u = this.projectionDelta,
                    c = u.x,
                    f = u.y;
                  for (var d in ((a.transformOrigin = ""
                    .concat(100 * c.origin, "% ")
                    .concat(100 * f.origin, "% 0")),
                  i.animationValues
                    ? (a.opacity =
                        i === this
                          ? null !==
                              (n =
                                null !== (t = s.opacity) && void 0 !== t
                                  ? t
                                  : this.latestValues.opacity) && void 0 !== n
                            ? n
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : s.opacityExit)
                    : (a.opacity =
                        i === this
                          ? void 0 !== s.opacity
                            ? s.opacity
                            : ""
                          : void 0 !== s.opacityExit
                          ? s.opacityExit
                          : 0),
                  st))
                    if (void 0 !== s[d]) {
                      var p = st[d],
                        h = p.correct,
                        v = p.applyTo,
                        m = h(s[d], i);
                      if (v)
                        for (var y = v.length, g = 0; g < y; g++) a[v[g]] = m;
                      else a[d] = m;
                    }
                  return (
                    this.options.layoutId &&
                      (a.pointerEvents =
                        i === this ? fn(r.pointerEvents) || "" : "none"),
                    a
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(os),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function ns(e) {
        e.updateLayout();
      }
      function rs(e) {
        var t,
          n,
          r,
          a =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var o = e.layout,
            i = o.actual,
            l = o.measured,
            s = e.options.animationType;
          "size" === s
            ? gi(function (e) {
                var t = a.isShared ? a.measured[e] : a.layout[e],
                  n = ii(t);
                (t.min = i[e].min), (t.max = t.min + n);
              })
            : xs(s, a.layout, i) &&
              gi(function (e) {
                var t = a.isShared ? a.measured[e] : a.layout[e],
                  n = ii(i[e]);
                t.max = t.min + n;
              });
          var u = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          ui(u, i, a.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          a.isShared
            ? ui(c, e.applyTransform(l, !0), a.measured)
            : ui(c, i, a.layout);
          var f = !Ql(u),
            d = !1;
          if (
            !e.resumeFrom &&
            ((e.relativeParent = e.getClosestProjectingParent()),
            e.relativeParent && !e.relativeParent.resumeFrom)
          ) {
            var p = e.relativeParent,
              h = p.snapshot,
              v = p.layout;
            if (h && v) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              di(m, a.layout, h.layout);
              var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              di(y, i, v.actual), Zl(m, y) || (d = !0);
            }
          }
          e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: a,
            delta: c,
            layoutDelta: u,
            hasLayoutChanged: f,
            hasRelativeTargetChanged: d,
          });
        } else
          e.isLead() &&
            (null === (r = (n = e.options).onExitComplete) ||
              void 0 === r ||
              r.call(n));
        e.options.transition = void 0;
      }
      function as(e) {
        e.clearSnapshot();
      }
      function os(e) {
        e.clearMeasurements();
      }
      function is(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notifyBeforeLayoutMeasure(),
          e.resetTransform();
      }
      function ls(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function ss(e) {
        e.resolveTargetDelta();
      }
      function us(e) {
        e.calcProjection();
      }
      function cs(e) {
        e.resetRotation();
      }
      function fs(e) {
        e.removeLeadSnapshot();
      }
      function ds(e, t, n) {
        (e.translate = pr(t.translate, 0, n)),
          (e.scale = pr(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function ps(e, t, n, r) {
        (e.min = pr(t.min, n.min, r)), (e.max = pr(t.max, n.max, r));
      }
      function hs(e, t, n, r) {
        ps(e.x, t.x, n.x, r), ps(e.y, t.y, n.y, r);
      }
      function vs(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var ms = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ys(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var a = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        a && e.mount(a, !0);
      }
      function gs(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function bs(e) {
        gs(e.x), gs(e.y);
      }
      function xs(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e &&
            !(function (e, t) {
              var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0.1;
              return Xo(e, t) <= n;
            })(Hl(t), Hl(n), 0.2))
        );
      }
      var ws = ts({
          attachResizeListener: function (e, t) {
            return gn(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        ks = { current: void 0 },
        Ss = ts({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!ks.current) {
              var e = new ws(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (ks.current = e);
            }
            return ks.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        Es = Re(Re(Re(Re({}, Zo), $n), Ui), Ol),
        Ts = ot(function (e, t) {
          return (function (e, t, n, r, a) {
            var o = t.forwardMotionProps,
              i = void 0 !== o && o;
            return Re(
              Re({}, lt(e) ? mn : yn),
              {},
              {
                preloadedFeatures: n,
                useRender: en(i),
                createVisualElement: r,
                projectionNodeConstructor: a,
                Component: e,
              }
            );
          })(e, t, Es, wl, Ss);
        });
      var js = function (e) {
          var t = e.category,
            n = void 0 === t ? "err" : t,
            r = e.label,
            a = void 0 === r ? "Buttons" : r;
          je.ZP.event({ category: n, action: n, label: a }, { debug: !0 });
        },
        As =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABE0AAAEPCAMAAACA6crTAAAAYFBMVEUAAAD/qxWfn5//qhf/qhafn5//qhf/qhGfn5+enp7/qhb/qRf/qhWenp7/qRf/qhf/rBeenp6enp7/qhf/qRb/qxb/qhefn5+goKCfn5+fn5+enp6fn5+fn5//qhefn59OvX6eAAAAHnRSTlMAYcrUopD1Hk3fvN+E8k3qNxWuk69zyHA7KLxfgJ+As+C+AAAbNUlEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD27gRpTSAIoHCzi4Bg3Pm15/63DFZlqVRkH8xE3ncEl8fM0CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/O8C7SYAQE0AtKMmABxFTQBQEwAuoSbAbJ4XhtsgCGL9pQwaYRh6XiJrQU2AGXb5MYi1RxaEuSefj5r8G7sfFzN98uS1yEyU+o0oijabvWAxXhjEOly2zXfy0VZdE//nNy+KLu/73nnhudTf5takvyzRnahYl+TnWMeLt/kHb3yoyS+FH33tZVnV4axPI2syX1rfNwJ7KdHpskMln4ma/Cl9XGUpSZ5pY2pN5vOjq2A2b6tzHeQjUZMXQbnJApIwVp1Zk/mKb1/sembJS50vlI9ETV6pNyILtMSBmjx9+xLMeBupCTUZUZNGfRObvFLVmZoYUzxugmktoSbUZGRNGpHYc1R1qiaNmkPZsfJYlZpQkyk1MelN7EgCda8mxvj0ZAwvU6Um1GRiTUxxtROTTJ2sCT0ZITmqUhNq0lmTd+QkU1drYkzN+cnQcy9qQk16avKGnGzV4ZoYEwmGLEyoCTWZWROT7mWmk7pdE5My0dZjlyk1oSbza2JqmSeJXa8Jy5Mep1iVmlATCzUxl7n7HPdrYnzGY9uF2qAm1MRGTYq9zFDp/1ATdjutkq0+URNq0sdffB+w/T9qYgqG7Tvv7lMTatJfk4UXJ5X+JzUx5iJojwk1oSZWamLuMtlBe5VBEOwcqAk56YgJNaEmvR6+PyAoqUxWaqf4eErkyYWakJOOmFATajLI9d5XlKtMtOtuSS4Nd2pCTtpjQk2oyVC32nR5LLLROSfiWE0Mj+20xYSaUJPhvgrTLl3ixd2KOFeTghvFLY9XURNqMsK1Kyd7mUbbncXBmpiUMbbX9/apCTUZ42rafVk/NikTJ2tiasGrCVhqQk1GuVsfYMu1VS5u1sTcBY2TThb8ElOT1dZEUtPGt319K8VKTdLNC5coqv3CTFTwgyeNKtbxsu3Bq/7+f+JjQE1WWJOLaZPafm0PM2vSX7n9JqonJcUXSKYjlUevK075tqQm66qJFKaN7c9kZasm3a5Ryl5n+UOTMqykV5WfqYmsyDfL82sdG5331KRxe4wNSrH6+zqejhGcZKAkD6jJalwsj3Vpm/P7atK4jOzJQ9YtKce0xJMxqmNMTdbhanfmvNI24Ttr0tiM68nKD2JDHSzzxrcqL6nJKpg2kd0F8+m9NWncCzPcN1mzSoeKDzJJXlKTFUjfVBPv7TWRfc3iZJhAB8oqmepwkI9ETb6zd55bb4MwABUxhnhvx1ny+79l23O62xRLCJe0vr/7BZNxC5IQ33H6d20CcKmOxYlk3doIB4dN/lebwJKtW/mP0zoNbqOEg8Mm/69NoMuOOzFclLgJU8PBYROeTfp/wibbdZLB/0pzyOSwSWCbnP4Nm2zXyf/awr48ZHLY5LCJsE564NOdL+ntW8Pd7HR6pvc36cPUvIFMaqX1nCTN96eWR10qCyFRg06S4uuIuZ7anW2iJp1/O5jdfHqGUoEwVpV6TJJvEymSZNZaqcMmv6GrgsZhr5c+e/Wwz3v0wd0JtzDB30Lp+Q++M4meLMhjp7H47Xh5aVk24T/BrxR52YII7aQT86d3dxzUYZMfWcJ1nF6cZ4KyxxVcXCTb1/arg4VeazLAX6HWm56uGJWsSsoZ/8CsgtukHQrnCe7aW5h5gw6+yuuwyTceYbY63SNbt5BdOscLSR4kqlxPQy+DneEvUI8NbsbkYkJpc4MOiimoTcqEcI6bSTkjhSYv28MmpBsOgcS1XzdTpX/2yU0u47TQ2i+M6MZY2Bs7NEikGayEw2bcQtKGsonVBjeTtzxhjgbpHDb5zLVaN3Amu0TKJ3e5yv+UFh5qYgyatDlyMHm738ADwSZkl1B8wpvkYRO+TSCVLWDr+pVMdYHXVGJBnYzUVHuKcJ/T5sgmt+DBYEhDydtEGySjLc1XOeJhE8JjcdPEJ8LxZA6nKz90ets6UZqWcnTTwp7YEX0wmm+xAkkUVtgmqkEOjaIJ87CJr03gsm4ANnE9rUyqO3urUxHmSXgdE9vNFaVBT4oaWEyGPJJl2UReo3qzMBPEwyb+NoGMEDhh35HIz81kQkGdnpS4UpGFYAnfdmn/jUgnEbRJXSCfxG4V5mETEZs8hLpNP1cv+o75silsoiIVm4xxLU0c33baomGPaMLItgl/TcZvPDMgHjaRsUknUnHSnQLdVLrI5IgX2qsUUUVNRpTC1Dtd5z4J2WTcYcY5HjaRsgn0AmHYaxbs4mPnK3cSb9+DWrqWw17YBAUpd5EJGithE5vvINAcD5vI2eS+uiHfAy93GdhDJEeckcpWyohqTWyBopT7DD1ybMIfnx/gGvCwiaBNYIMKrv4y4W6oroS/Ym/nbtT1dQM7URvEQDoJuwVwPTdLJvLRogkPm4japPdM6ixV0HvUM4Ec8YW2vimi6QRLkIm4TkYMiaRM+GWGrTlsImuTi1817LVaxVg4W52FKEy3kKLZ6FiDBGR1UmJQJC+A5h/1TvCwiaxNOi+bdNkqR9YxHi/13sz11OtCDbwi6pjJF2rGqmhvm+R7THjAwybCNgG3D06kN0q4iu3mnSNeaBu5IZYjOgmGwbT0e/h3tolGSYpXS7/DJuI26T1skq6ynBk7sQ4cpDQdjZGUro0YigJcaAwM/QcjXwas8bCJuE1SfuP68ypMxug4efdcfKXkJYGCHZiQjbcOawzNzvGiNtwo4Oa5k00gAptsUIJXa9lTejl/5J7eKlZep/fMEXfE/LdBjKDhusB3ne/DAkPjv8UrxkF9QucNOpn5ceYi0Z/Jk4L3ZUhFf7Zl1Da5sm3SU9s1Lk+XUKqOXF+XuZJWxLcujmqTGX3hT6HE4HgOb3T7Q7/YhqHPGZ00v7TWbZWezd+1iY7aJrA64S5qqgf8RPd0pWj4R/Z4zruQ9+wJ/Ja32ee49jrWYHD8hh8ttUFJ8uswSOhz+yNtOZsIbdJEYZOKWb6WsfognStqNVrvd8a5oi2GVBRB2Aa3koyDUjVYx6KfkNfRuJViLJWyoNSkEyThkxxuFKOpU0329fBn3X95TJ9YQiaa6kuisMmJZ5MLs+j9mhEP3ixek1+IDznEYBON25hL++KSCBe599Kk+GnsaRaxScsslbc5bb7at8jPlo2vTVZgULyc4hvbpKu40dGlIoZBMp8ccUqcmo4gpWONRy9lleAWWj+TNcqrqxM/BFtYXrGfpY2jYQMqQYQNeHRJJ+zQ9BvbJOWnWu7EMMiTkCMmqiiDGG2iCb0Zue2Vcq9NlnaMzLaJcsqEeepmoE3TwiZU4lUgepeMqKkobPJk2STzyLTcaAWxi8clXR31T+e/bxNr0M3oW5Pf8hM6Rvn2pIZX5B51vAOlZG/PSPuJ/s1lvEE2CpukAUpUq46dlM5EzXWhNltI/n65Sel/di9nLy9mvxZEtvCySetl8oZgzz1tkgqGYc1rXb6vTTKvAtWettV58Buw9A4PxWiTQuAgcMKsOWkpMuHrhHmcYPTQ8EDYUQnb5Ez5ZXGnOL6vTRa/5znTMr5XV46Ymx++xGiTWqLJtW14fRUGb5NZ42ET42qkxh96ptikAFEI0UX2xzq9r02enjd6ZrTJnAjN0yjW62K0yShyiLkmxGFlW0Upvk0mt8f4GzzSQ7YgyU1qcaJfmxbe1yaZO5/D3+rQa1uYc+shRps06MBYESkZ1kansQI6RFa4p/GLOCmKTWaQ5EGN+dFtm0dikxvdJotvP7QLTV4dIUdMsN49RpvU6KIUygwpTgB4khgZWRudAf6AW4aapM0BBOlWkb2OMviSOhKbMOpNnoTYJj2r8yAb78nKD2cQo000OiikXmhkZHQSkZGRtdGx4KTZvNzYt+T5JqGT4Y+fy/vaJPO+HJC4AbnQc8TuP3tGaZNCqiutZWiJtp7hL044W6TZs19dQ7MJzlYyq/OaWwdbKAv8AyoWm2TkM8QdMwbLD8NCxRqyp/9REuqePykHNHJdDSx5l9UI3Z7BEWnpGyyipuGNpviE/192lbp8osrcOJaMsdhkdUIrjc+8F0TMvgK/suVEUGSt15Tchr4kz6QUGnxCBxyRWt89liJ8ztI+OTuyko/z1eOchWnf2CYpcQNBtUNHvpPwxsgPP6K0iZZbGllyaCCXGtzgn2GItPAW6MQ5pp1PUpETN2ybDBCLTc6rixMt0nL3ntGZ3qaE8bZ1TJsMEJKZF4NlzWUmH+CVGpnxsxm9V3aa18naiAilq8LZJIdobHKn26Ri54f5NnkyWrBkjJK35C/3N2kE7xnU1AQNcer8kRkiHWRtAuhAWijnYDYpbDw2SVcXPa3Q3X/UlF7V+iTnh+/cU28zhISwzxIPX7TEwfkjM0SqvG2SUD5oeaFcAtmksBCPTW7ku/7Oa2BSRqMS6sdXsWNeCQSkRgc24IspseS44rwQBibx7KVtxhp8eAaxSW4hIptkq4u7o054H5uk5Bxxz4kVa3pZ+J4pnSbkQmcQ82jLeAtrDEziWAoR2lfyuMjbxAwAEdnkSr+BL10DkzIe9EIM3C78y2lrkIT4gxYNwiiaSXMxj9FFKm8TjRxM3gKbcyVsk6SFqGxypweHbqsvhOnwTxourKIYJZmPk08Qa9GrjEtazEgHtcmAoXlxup/KrIBL10vaZFYAcdmkX11khARxSJs8iDnilFX9X9Naqr63TTTtn09BbaIxNGKXFiV8n5xPYjZpSojNJtnq4haJTa7Eg8sZr/ofpS/7E15NUBhlbaL+LZvAjGzmlr88kdvpNGVcNlkYdwOvoTlxsk8pJT9848Ya5AMn7B+0/ErH4J9pg9okwdA4OpmRMJrnkrQSjcImbUw2ea5OzrHY5AN7Z7rYuAkE4EEg0Ilu+ZCD3v8te7fbbmKYYSTLqb7fGxM71rfMwXBBBWQXT872KyRqXvy3sonzAN/MJmC1o1NaQLPU3BViPR3IJvnqBY5ikw41lrH3JFm+YsSFOqdN3tgmcTrRFSHI4e9eqw5jk2X1khzGJnDH1Ihr4qjJymFCndMmb20Tgk7oOfEu36azvjqKTe6rl/Q4NlkQNeIr9SiRRV2Ud9rkvW0CtnERFHiZ8NvEVcewyW31cz2OTaAOrxGn5AkszjnEnOfTJu9tEzCSVSd0mdBtou0hbNKvXmo4kE36cO/l5FGTErPFPW3y7jYBGPQewc59w/km5RFsclv99EeySRZcyu7ooyZHzObk2DYpTpsE3Vcas7RAXIJBskkrlJo9wlMHsMl99bMcySaQh/7YxdNs8oQJ81/SsW2CeDVem7RvZRMAQV9cG45hSclHesngCbZ4/ku83CbZ6qeGQ9nkI7RG3HuKP08wfN8h/tFr6j1sIt7MJgBV44gU0TmF/NKBB98OSr3aJl2++umPZZNr6D4qfyLIDp4jcd+hA5/T0bw2Ed/YJhH7ExuXU6gXhi+HNi+2yccawBURbrDbBLt2H2SdHjwMbPEyv01m1vkmQLcJ/yTH0W0NeLCFdgTmqK1J3rHMq6h4bUKPc3y11IOc+vMns/Kgf5Yhgn7ihbx0Ks75Jhb5eJVsoxjGtzj19zOmKh2eNiJrknc8gXD5Upt09RrAhWCTRxbLlVqGugb8ijniur3958MKzsFvE1JNku18kuS3SSGiCVPw2DgkI33oWn0DDEbjlEa3CX/SZK07wm+TwZbkITXiDtHbS5/bMwA/bXyQTp+lJtk2Ro5/9pqC3ZgKnFAaevH0wjabb3ihTfo1hJTy21xgSy4hgwaWuHtNWxfGBPw4DxXnsCRs5mLTHZbwqW9PrCoZ87CIjTJ5czK/zib9GkRHybikwAPlILH/7SX0x5De0cxogGLD2zQU+alh0VLUxoifdggWykBNUV4AS+G+QPPahF8mPamFNoFNuQfUiPPInVPlXqaTwrck43U6BvsDA9N0a0f5KdifdtQcLScpopuL/kdt+WxClwmhMQPR8MbPxX+vxdXznvw0L9PJwJc4KbDhvmA6D2Jp1RX5qjEQ0V1tkniF/x3QGETcTbUJMQFLDFkSvjQsczEq99WHewhCISbm8GL52uY0+pUcz63mBc0m6jBp2H9RaefiNow1Z4qxjPh8+G1yDZVJ3RH73j4AB2eY1nmCoSUm2cX/JR8GtAO0YWpdcRN+SzYyfXiUyKyEF2Fm54OYhL1ynr2YGW1Cfym8OJeXhjqLN3FSx+fQlQtmNhG7aIW/CFkx5XOd8axNVZmiThpxRwx1gsJPYhKWtVta7m6TLOdoSO0wHuKn9kRnV4Ztk9EuGD3RI3KF31Jow1OllRQPKJ76OnxKeaQaMUInVJvkrDZpdrbJrV89BDbp5YR+/H1CneR52uRG/6Px3kNgquaLp7NlGplfEgo0wm/OlqW8Tisst7At9DdFe3oT3rMXvDbxuwTBI+bAYApbcvVEWXcOzRntMOBup7V/Vx4Vpa9fsNiwJU2xnFkaib+qfh6s5eQfqsPYRBzBJst9xZDE3el1hS3Jn69cs4RglcNRWEpXlPIsTI11LE0LMrpTy8acv9OItfelPW3yN9lHvqKob7jnmX4yknuWwvKsua7DleKQlJVBd2wr0rSm0sTvrCbqxkLAE6yOsUmx29UjYjSAIsIm/U42ETvYJHvc6xXLQn6e6TrJeo55tumTmk+P7PzAUyoBXyLUrEOymkW0TozfhA35PWvrkQndJtMG3YKt/PyZ1NVee5Pk7W3SZVm2pGmSrxRS6vNM10mWrAlHqHOHlOJIxvE9chyEhR8RYlCyCa6R2NhrK21DDliaqI49qyMnjTTcOmmLr48YNoLrlIL8VjZh5g5eEn+wlKFcgvpwH8/qSXeuPhhTuhjk7zSEiqtE3KpNvNFBmxiDjsaTgPURUUkbUC55fmBZCp5TCvNpk6htxbL6+eggiO6Sez5czNYIcrYeXesYINhEuBCaCj5DlDEdvK0jry2ki7aJ4SzHT7N//EFZcTTvqNMmCJkQh8PWaYiX+trz4eK2Rh1joWlwW6OiJiKM9qd6URM5hjJUCc3Qwo9UkmWmYsFVjrdjEzZMpVG+V/NHcOK0yRfUV8RRXh91//TVbpe+9ny46NUvnD11s9sYFbkp0lJVQlgAIYQKHxlWcRTGy3EQogUrJiUdjthBVfMETzDT2GBGM82eYpw3dITTJiiZ0CfX1/3ls5fssvSeez5cUm9/6unH2zF1Qo84CrcpEjeMgR9vgsLPPAj4BDEUJWHQ2zy0T7qWPcynTSJlAhkqekrSNF2y33ik6UeSxH649xVNBwRa7TZFIfpF+LC4rj1+mHqQGzkqVYnfqJRSUuqIsZHNPAgD/8YOs3ZeqtMmZJnQH2jGuQoXpkIVLmTmR+ErkvyL7r852TVXhXkmtZzVn4yydEFoOG3yGfkNwrnVL7QJoBdfgMbktkS9IGMjsUcK+EH3IPPbhA912oSh4+zySpv0K46a78DXLjYxjdsIbbBHCvjx7QbfySbanDb5hB6Q3F9ok2XF8QGH1InaP8Sy6O8rP766/DvZRMFpE46aR5e/ziaAXPvKMRmUH8UmMWJx+Ig3AhfvZJMSTpv8RH4FPNf6dTb5wL09+IOjpWLV3r1zao+6eNNE2cSUb2QTe9rkJ+4dULi+ziZX9o1X5Dk6/oe7cOwUu9hTyCibgGnexiYDnDb5D/UCRC672oQe6twgDiPdJijYVSfFLqmiESJtAla/iU0KOG3yycbkADpJAEXK32yyfzJB7bqoglBUVCYh2iZg9VvYpDSnTf5NngHAEXSSAIrbGs4F4pm040ftWU+qIJwiomLKYBOw+g1sUho4bfIj9QMiudbMNuEPdWquW5rYUfs5TAuAHXSiLXDYBEx5eJuUBk6beGYGoLnlr7HJA9dJc8jtiQIfbelYKFvAUVBlwmMTMMXBbVIYOG3yD3naAQdd/xKbdNRmEzpmZLeJn5FnITQjTSYIm3gYDm2TAeC0yd/kF2Bjqflswt+LmwMfrdzdJiAaF0lpgUBFkQmjTcCWh7VJaeG0ySdjjA6zPUm3SgA/gBPB5RPEoGOlXQR62KnNpjSAsAnqjdORG9hEK4DTJn+pZAF2rskaRX/DKwzRbMKJLRwLsgIPHEkErcxOkZ0CiLQJf/ZECuC3SdECh03S97dJ/rHANmRJRAbnBgR6RATFSqsaF4keLW7JQtNdQkeULpBSAMEmftoIkRYWPsdGuuS0ybrm/eUGG5L1+26VFkSzCTdToSNUUkyAxgwN/fpBOlWDjqb8NkHRjtrh8I97NdXsKDTKAPzfbVIn/SOD7eke+Z5RVx2yQgcbMRWNIyCVBSICo7BmtMBCVSKfMb9NsFQzQSUeDPrvpwsBAEe1SbWxTfIkSfo0zTLYkVvwVaX1/XGFKHpiswkdz+BQD3pWAuIQYxmkrMGyZor00ycXe48G4DFV8LMvwz/kFvOqFkjkO9lEwTcle9zz5567p8sNvgftpGTj9YgslDDAgpmU1O5LGo+yaAglP12sqAzsha0K6Rk7rSoLSIxQnpeVxSCAzMpqE3hyAvE7k2VpmiRJ/UO4lST3NF2y7+KRH7FiUON/rgqVvzIqNQkL7Bgx/b6e/udJklIpIWA7RKV+ae9ecNSGoQCKOg4NNBC+HShDCfvfZSVU9adJkEKMNM45O4iRrsDBz8dy+fvh6lmxDYn0L/Txn3Uu70++KtbPrufsWP41Wrq6f3qrZ5/xPPKGXs9pSyBrl1uXRRiiarvMA5Cz68gHPsq2y1sActa9gRgGqSe6cQKTdx57Tsas7bQNQL72Y/9Hu2h9OYEpOo9+xdO87VYEIFdx/BMfm96JEECe9gmOttdtt8p7HcjS7j3FDK+3ts/RVixkZ3dq0pwfq9pey4PfO5CR3WXf3HpdwlB1+9CyLEtNgc/uGmNsUt7KUrR/eMEDGYvJb2XZqAlMQkw+rHilJjAJMf2w4o2awBTE9BfGFWoCUxBfMF70m5rABMQXTD6fL9UE8hdvDy3Cs9aVmkD24oA7cofkRE0gd/E1d7KsKzWBzD2qyTWMY16qCeStvybNKYzmUKkJ5Ky3JvEcRrSt1QQy1lOTr6cwsm2tJpCt2NOSBLaHjZpAnjpq8n4JqaxnSzWBDH1Qk2Z/2oWk5sWs3KgJ5OW/msT96Xt4kV83s5dqAlm416SJMV6//FicAwAAAAAAAAAAAAAAAAAAAAAAAAAASf0EQWpk+W+VKoIAAAAASUVORK5CYII=",
        Os =
          "data:image/png;base64,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";
      var Ps = function () {
          var e = l((0, t.useState)(0), 2),
            n = e[0],
            r = e[1],
            a = l((0, t.useState)(""), 2),
            o = a[0],
            i = a[1];
          return (
            (0, t.useEffect)(function () {
              i(0 === parseInt(Math.floor(2 * Math.random())) ? As : Os);
            }, []),
            (window.onscroll = function (e) {
              r(window.scrollY);
            }),
            (0, Oe.jsxs)(Ts.div, {
              className: "fixed top-0 ".concat(
                n >= 180 ? "backdrop-blur h-20" : "backdrop-blur-sm h-28",
                " ease-in-out duration-500 w-full border-neutral-500 border-b flex justify-between items-center px-[6%] lg:px-20 z-[999]"
              ),
              initial: { top: "-150px" },
              animate: { top: "0px" },
              transition: { duration: 1 },
              children: [
                (0, Oe.jsx)("a", {
                  href: "/",
                  children: (0, Oe.jsx)("img", {
                    className: "w-32 lg:w-60",
                    src: o,
                    alt: "wda",
                  }),
                }),
                (0, Oe.jsx)("div", {
                  className: "cursor-pointer",
                  onClick: function () {
                    js({ category: "menu" });
                  },
                  type: "button",
                  "data-drawer-target": "drawer-navigation",
                  "data-drawer-show": "drawer-navigation",
                  "aria-controls": "drawer-navigation-label",
                  "data-drawer-backdrop": "true",
                  children: (0, Oe.jsxs)("svg", {
                    width: 24,
                    height: 24,
                    fill: "none",
                    stroke: "#ffffff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      (0, Oe.jsx)("path", { d: "M3 12h18" }),
                      (0, Oe.jsx)("path", { d: "M3 6h18" }),
                      (0, Oe.jsx)("path", { d: "M3 18h18" }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        Cs = n.p + "static/media/main.dc4a4bfd69efeefd2d9b.webp";
      var Ns = function () {
        return (0, Oe.jsx)(Ts.div, {
          className: "absolute w-full h-full",
          initial: { scale: "100%" },
          whileInView: { scale: "110%" },
          transition: { delay: 0.5, duration: 7, type: "spring" },
          children: (0, Oe.jsx)("div", {
            className:
              "w-full h-full bg-cover bg-center grayscale before:content-['*'] before:bg-gray-900/50 before:block before:w-full before:h-full",
            style: { backgroundImage: "url(".concat(Cs) },
          }),
        });
      };
      var Rs = function (e) {
        var t = e.title,
          n = e.href;
        return (0, Oe.jsx)("button", {
          onClick: function () {
            js({ category: t });
          },
          children: (0, Oe.jsxs)("a", {
            className: "buttonStyle cursor-pointer",
            href: n,
            children: [
              (0, Oe.jsx)("span", { children: t }),
              (0, Oe.jsx)("div", { className: "liquid" }),
            ],
          }),
        });
      };
      var Ms = function () {
        var e = function (e) {
          for (var n = [], r = 0; r < e.length; r++) {
            var a = e[r];
            n.push(
              (0, Oe.jsx)("span", {
                className:
                  "hover:text-yellow-400 cursor-pointer hover:animate-pulse hover:-translate-y-6 ease-in-out duration-100",
                children: a,
              })
            );
          }
          return (0, Oe.jsx)("div", {
            children: n.map(function (e, n) {
              return (0, Oe.jsx)(t.Fragment, { children: e }, n);
            }),
          });
        };
        return (0, Oe.jsxs)(Ts.div, {
          className:
            "absolute flex flex-col justify-center gap-14 w-full h-full p-[6%] lg:p-[17rem] z-10",
          initial: { top: "100px", opacity: 0 },
          animate: { top: "0px", opacity: 1 },
          transition: { duration: 1.5 },
          children: [
            (0, Oe.jsxs)("div", {
              className: "flex",
              children: [
                (0, Oe.jsxs)("h1", {
                  className:
                    "text-4xl text-mainPage md:text-7xl lg:text-9xl flex flex-col font-bold text-white uppercase",
                  children: [e("Servicii"), e("Web"), e("Development")],
                }),
                (0, Oe.jsxs)("span", {
                  className: "relative p-1 items-end flex",
                  children: [
                    (0, Oe.jsx)("span", {
                      class:
                        "animate-ping absolute inline-flex rounded-full bg-yellow-400 opacity-75 h-5 w-5",
                    }),
                    (0, Oe.jsx)("span", {
                      class:
                        "absolute inline-flex rounded-full h-5 w-5 bg-yellow-500",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              className: "relative z-[29]",
              children: (0, Oe.jsx)(Rs, {
                title: "VEZI SERVICII",
                href: "#serviciile-noastre",
              }),
            }),
          ],
        });
      };
      var Ls = function () {
        return (0, Oe.jsxs)("div", {
          className: "absolute w-full h-full",
          children: [
            (0, Oe.jsx)(
              Ts.div,
              {
                className: "absolute z-10",
                initial: { bottom: "-300px", right: "-300px" },
                animate: { bottom: "0px", right: "0px" },
                transition: { delay: 1, duration: 2 },
                children: (0, Oe.jsx)("img", {
                  src: "data:image/png;base64,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",
                  alt: "right",
                }),
              },
              1
            ),
            (0, Oe.jsx)(
              Ts.div,
              {
                className: "absolute z-10",
                initial: { top: "-300px", right: "-300px" },
                animate: { top: "0px", right: "0px" },
                transition: { delay: 1, duration: 2 },
                children: (0, Oe.jsx)("img", {
                  src: "data:image/png;base64,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",
                  alt: "right",
                }),
              },
              0
            ),
          ],
        });
      };
      var Is = function () {
        return (0, Oe.jsxs)("div", {
          id: "home",
          className: "relative w-full h-screen overflow-hidden",
          children: [
            (0, Oe.jsx)(Ns, {}),
            (0, Oe.jsx)(Ps, {}),
            (0, Oe.jsx)(Ms, {}),
            (0, Oe.jsx)(Ls, {}),
          ],
        });
      };
      function Ds() {
        return (0, Oe.jsxs)("div", {
          className: "absolute p-5  lg:block hidden",
          children: [
            (0, Oe.jsx)("span", {
              className:
                "absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17]",
            }),
            (0, Oe.jsx)("span", {
              className:
                "absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17] rotate-90 top-[3.8rem] left-[-1.2rem]",
            }),
          ],
        });
      }
      function Js() {
        return (0, Oe.jsxs)("div", {
          className: "absolute mb-5 p-5 bottom-0 right-[6rem] lg:block hidden",
          children: [
            (0, Oe.jsx)("span", {
              className:
                "absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17] -rotate-90 top-[-1.2rem] right-[-7.2rem]",
            }),
            (0, Oe.jsx)("span", {
              className:
                "absolute w-[6rem] h-[1.2rem] rounded-full bg-[#ffaa17]",
            }),
          ],
        });
      }
      var Vs = function (e) {
        var n = e.number,
          r = e.icon,
          a = e.title;
        return (0, Oe.jsxs)("div", {
          className:
            "bg-[#1c1e22] rounded-md flex flex-col justify-between p-3 lg:p-8 ease-in-out duration-300 hover:bg-[#ffaa17] lg:w-[15rem] lg:h-[13rem] w-[10rem] h-[12rem] shadow-md group",
          children: [
            (0, Oe.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [
                (0, Oe.jsx)("span", {
                  className: "text-[#2b2d30] font-bold text-5xl",
                  children: n,
                }),
                (0, Oe.jsx)("svg", {
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                  viewBox: "0 0 24 24",
                  xmlns: "http://www.w3.org/2000/svg",
                  className:
                    "stroke-[#ffaa17] group-hover:stroke-[#2b2d30] group-hover:ease-in-out group-hover:duration-300 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]",
                  children: r.map(function (e, n) {
                    return (0, Oe.jsx)(t.Fragment, { children: e }, n);
                  }),
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              children: (0, Oe.jsx)("span", {
                className:
                  "text-white group-hover:text-[#2b2d30] font-bold text-xl uppercase",
                children: a,
              }),
            }),
          ],
        });
      };
      var Us = function () {
        return (0, Oe.jsxs)("div", {
          className: "flex gap-10 flex-col",
          children: [
            (0, Oe.jsxs)("div", {
              className:
                "flex flex-col uppercase font-semibold text-5xl lg:text-6xl text-white tracking-wide text-start",
              children: [
                (0, Oe.jsx)("h1", { children: "Serviciile" }),
                (0, Oe.jsxs)("h1", {
                  children: [
                    "Noastre ",
                    (0, Oe.jsx)("span", {
                      className: "text-yellow-400",
                      children: ".",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              className: "lg:w-[90%]",
              children: (0, Oe.jsxs)("h2", {
                className: "text-[#999b9f]",
                children: [
                  "Servicii de",
                  " ",
                  (0, Oe.jsx)("span", {
                    className: "text-white font-semibold",
                    children: "web development",
                  }),
                  ", seo optimization, creare site,",
                  " ",
                  (0, Oe.jsx)("span", {
                    className: "text-white font-semibold",
                    children: "creare magazin online",
                  }),
                  ". Asisten\u021b\u0103",
                  (0, Oe.jsxs)("span", {
                    className: "",
                    children: [
                      "\xa0gratuit\u0103 30",
                      (0, Oe.jsx)("span", {
                        className: "text-yellow-400 font-semibold",
                        children: " *",
                      }),
                    ],
                  }),
                  " ",
                  "de zile",
                  (0, Oe.jsx)("span", {
                    className: "text-yellow-400 font-semibold",
                    children: ".",
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var zs = function () {
          var e = [
            {
              title: "web design",
              icon: [
                (0, Oe.jsx)("path", {
                  d: "M20 4H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z",
                }),
                (0, Oe.jsx)("path", { d: "M7 20h10" }),
                (0, Oe.jsx)("path", { d: "M9 16v4" }),
                (0, Oe.jsx)("path", { d: "M15 16v4" }),
                (0, Oe.jsx)("path", { d: "M9 12V8" }),
                (0, Oe.jsx)("path", { d: "M12 12v-1" }),
                (0, Oe.jsx)("path", { d: "M15 12v-2" }),
                (0, Oe.jsx)("path", { d: "M12 12v-1" }),
              ],
            },
            {
              title: "web applications",
              icon: [
                (0, Oe.jsx)("path", {
                  d: "M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",
                }),
                (0, Oe.jsx)("path", { d: "M6 8h.01" }),
                (0, Oe.jsx)("path", { d: "M9 8h.01" }),
              ],
            },
            {
              title: "Landing page",
              icon: [
                (0, Oe.jsx)("path", {
                  d: "M7 15H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z",
                }),
                (0, Oe.jsx)("path", {
                  d: "M19 15h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z",
                }),
                (0, Oe.jsx)("path", {
                  d: "M13 3h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z",
                }),
                (0, Oe.jsx)("path", {
                  d: "M6 15v-1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1",
                }),
                (0, Oe.jsx)("path", { d: "M12 9v3" }),
              ],
            },
            {
              title: "online shop",
              icon: [
                (0, Oe.jsx)("path", { d: "m7 10 5-6 5 6" }),
                (0, Oe.jsx)("path", {
                  d: "m21 10-2 8c-.093.573-.345 1.087-.71 1.453-.366.365-.822.559-1.29.547H7c-.468.012-.924-.182-1.29-.547-.365-.366-.617-.88-.71-1.453l-2-8h18Z",
                }),
                (0, Oe.jsx)("path", {
                  d: "M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                }),
              ],
            },
            {
              title: "seo optimization",
              icon: [
                (0, Oe.jsx)("path", {
                  d: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                }),
                (0, Oe.jsx)("path", { d: "M6 21v-2a4 4 0 0 1 4-4h1" }),
                (0, Oe.jsx)("path", {
                  d: "M16.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                }),
                (0, Oe.jsx)("path", { d: "M18.5 19.5 21 22" }),
              ],
            },
            {
              title: "Responsive design",
              icon: [
                (0, Oe.jsx)("path", { d: "M3 12h7" }),
                (0, Oe.jsx)("path", { d: "M21 12h-7" }),
                (0, Oe.jsx)("path", { d: "m18 15 3-3-3-3" }),
                (0, Oe.jsx)("path", { d: "M3 6V3h18v3" }),
                (0, Oe.jsx)("path", { d: "M3 18v3h18v-3" }),
                (0, Oe.jsx)("path", { d: "m6 15-3-3 3-3" }),
              ],
            },
          ];
          return (0, Oe.jsxs)("div", {
            id: "serviciile-noastre",
            className:
              "px-[6%] md:px-[12%] 2xl:px-[17rem] py-[5rem] grid md:grid-cols-3 lg:grid-cols-4 relative justify-items-center lg:justify-items-start",
            children: [
              (0, Oe.jsx)(Ds, {}),
              (0, Oe.jsx)(Js, {}),
              (0, Oe.jsx)("div", {
                className: "col-span-2 pb-10",
                children: (0, Oe.jsx)(Us, {}),
              }),
              e.map(function (e, t) {
                return (0,
                Oe.jsx)("div", { className: "pb-10 row-auto", children: (0, Oe.jsx)(Vs, { title: e.title, icon: e.icon, number: "0" + (t + 1) }, t) });
              }),
            ],
          });
        },
        Bs =
          n.p +
          "static/media/pexels-rodnae-productions-7888768.bb1471bdabf3148318dd.webp",
        Fs = n(831);
      var Ws = function () {
        return (0, Oe.jsxs)("div", {
          className:
            "relative w-full h-full grayscale justify-center flex items-center lg:justify-start lg:items-start",
          children: [
            (0, Oe.jsx)("div", {
              className: "w-[80%] lg:w-[73%]",
              children: (0, Oe.jsx)(Fs.LazyLoadImage, {
                className: "rounded-md shadow-xl",
                src: Bs,
                alt: "img",
                effect: "blur",
              }),
            }),
            (0, Oe.jsx)("span", {
              className:
                "absolute w-[80%] lg:w-[73%] h-full animate-pulse bg-gray-700 z-[-10] rounded-md",
            }),
          ],
        });
      };
      var qs = function () {
        return (0, Oe.jsxs)("div", {
          className: "flex flex-col gap-7 lg:gap-10",
          children: [
            (0, Oe.jsxs)("h1", {
              className:
                "text-white uppercase font-semibold text-5xl lg:text-7xl flex flex-col tracking-wide",
              children: [
                (0, Oe.jsx)("span", { children: "cum\xa0" }),
                (0, Oe.jsx)("span", { children: "te putem\xa0" }),
                (0, Oe.jsxs)("span", {
                  children: [
                    "ajuta ",
                    (0, Oe.jsx)("span", {
                      className: "border-b-4 border-yellow-400",
                      children: "noi",
                    }),
                    " ",
                    (0, Oe.jsx)("span", {
                      className: "text-yellow-400",
                      children: "?",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              children: (0, Oe.jsxs)("h2", {
                className: "text-2xl text-white uppercase",
                children: [
                  "Suntem o agentie de ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "Web Development",
                  }),
                  " cu servicii complete ",
                  (0, Oe.jsx)("span", { className: "", children: "!" }),
                ],
              }),
            }),
            (0, Oe.jsx)("div", {
              children: (0, Oe.jsxs)("p", {
                className: "text-[#999b9f]",
                children: [
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "V\u0103 oferim servicii de web development",
                  }),
                  " care s\u0103 v\u0103 ajute s\u0103 v\u0103 creati un",
                  " ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "site web de calitate superioar\u0103",
                  }),
                  ". Noi ne asigur\u0103m c\u0103 ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "to\u021bi clien\u021bii",
                  }),
                  " no\u0219tri beneficiaz\u0103 de cele mai bune servicii \u0219i c\u0103 pia\u021ba online le ofer\u0103 o amplasare solid\u0103. Ne lu\u0103m timpul necesar pentru a \xeen\u021belege nevoile",
                  " ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "fiec\u0103ruia",
                  }),
                  " dintre clien\u021bii no\u0219tri \u0219i astfel putem oferi solu\u021bii creative \u0219i personalizate pentru fiecare proiect \xeen parte. De la ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "designul\xa0",
                  }),
                  "site-ului p\xe2n\u0103 la ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "funcionalit\u0103\u021bile",
                  }),
                  " acestuia, noi vis\u0103m s\u0103 depa\u015fim a\u0219tept\u0103rile",
                  " ",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "Dumneavoastr\u0103",
                  }),
                  ".",
                ],
              }),
            }),
            (0, Oe.jsx)("div", {
              className: "flex justify-center lg:justify-start",
              children: (0, Oe.jsx)(Rs, { title: "Contact", href: "#contact" }),
            }),
          ],
        });
      };
      var Gs =
        n.p +
        "static/media/swirly-scribbled-arrow-svgrepo-com.a3da13cd5a48ed2a35aeab8f5bdbc060.svg";
      var _s = function () {
        return (0, Oe.jsx)("div", {
          className: "absolute z-[-2] -top-[7rem] w-44 right-[12%]",
          children: (0, Oe.jsx)("img", {
            src: Gs,
            alt: "icon",
            className: "icon-color",
          }),
        });
      };
      var Qs = function () {
          return (0, Oe.jsxs)("div", {
            id: "cum-te-putem-ajuta-noi",
            className:
              "px-[6%] md:px-[12%] 2xl:px-[17rem] py-[5rem] bg-[#222429] relative",
            children: [
              (0, Oe.jsx)("div", {
                className: "h-full w-1/3 bg-[#1c1e22] absolute top-0 left-0",
              }),
              (0, Oe.jsxs)("div", {
                className:
                  "w-full h-full relative z-10 flex flex-col-reverse lg:flex-row",
                children: [
                  (0, Oe.jsxs)(Ts.div, {
                    className: "w-full lg:w-1/2 relative lg:block hidden",
                    initial: { x: -100, opacity: 0 },
                    whileInView: { x: 0, opacity: 1 },
                    transition: { duration: 0.6, delay: 0.05 },
                    viewport: { once: !0 },
                    children: [(0, Oe.jsx)(Ws, {}), (0, Oe.jsx)(_s, {})],
                  }),
                  (0, Oe.jsx)(Ts.div, {
                    className: "w-full lg:w-1/2",
                    initial: { x: 100, opacity: 0 },
                    whileInView: { x: 0, opacity: 1 },
                    transition: { duration: 0.6, delay: 0.1 },
                    viewport: { once: !0 },
                    children: (0, Oe.jsx)(qs, {}),
                  }),
                ],
              }),
            ],
          });
        },
        Zs =
          n.p +
          "static/media/2560px-Node.js_logo_2015.svg.62fce3a59fe69ded8fbd.png",
        Hs = n.p + "static/media/React_logo_wordmark.4feb3bb9c88aae49a7d4.png",
        Ys = n.p + "static/media/linux-logo.ea1882c0c8e6fb3481cb.png";
      var Ks = function () {
        return (0, Oe.jsxs)("div", {
          className: "flex gap-10 flex-col",
          children: [
            (0, Oe.jsxs)("div", {
              className:
                "flex flex-col uppercase font-semibold text-6xl text-white tracking-wide",
              children: [
                (0, Oe.jsx)("h1", { children: "De ce sa ne" }),
                (0, Oe.jsxs)("h1", {
                  children: [
                    "alegi pe noi ",
                    (0, Oe.jsx)("span", {
                      className: "text-yellow-400",
                      children: "?",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              className: "w-[90%]",
              children: (0, Oe.jsxs)("p", {
                className: "text-[#999b9f]",
                children: [
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "V\u0103 putem oferii",
                  }),
                  " servicii de",
                  " ",
                  (0, Oe.jsx)("span", { className: "", children: "calitate" }),
                  " \u0219i solu\u021bii pentru\xa0",
                  (0, Oe.jsx)("span", {
                    className: "",
                    children: "imaginea ta online",
                  }),
                  (0, Oe.jsx)("span", { className: "", children: "\xa0!" }),
                ],
              }),
            }),
            (0, Oe.jsx)("div", {
              className: "flex flex-col gap-4",
              children: [
                {
                  name: "Back-end",
                  src: Zs,
                  alt: "node.js",
                  percentage: "90%",
                  width: { width: "90%" },
                  transition: { duration: 1, delay: 0.1 },
                },
                {
                  name: "Front-end",
                  src: Hs,
                  alt: "react.js",
                  percentage: "85%",
                  width: { width: "85%" },
                  transition: { duration: 1 },
                },
                {
                  name: "Security",
                  src: Ys,
                  alt: "linux-security",
                  percentage: "96%",
                  width: { width: "96%" },
                  transition: { duration: 1, delay: 0.2 },
                },
              ].map(function (e, t) {
                return (0,
                Oe.jsxs)("div", { children: [(0, Oe.jsxs)("div", { class: "flex justify-between mb-1", children: [(0, Oe.jsxs)("span", { class: "text-base font-medium text-[#e3a008] dark:text-white flex items-center justify-center gap-3", children: [e.name, " ", (0, Oe.jsx)("img", { className: "w-14", src: e.src, alt: e.alt })] }), (0, Oe.jsx)("span", { class: "text-sm font-medium text-[#e3a008] dark:text-white", children: e.percentage })] }), (0, Oe.jsx)("div", { class: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700", children: (0, Oe.jsx)(Ts.div, { class: "bg-[#e3a008] h-2.5 rounded-full", initial: { width: 0 }, whileInView: e.width, transition: e.transition }) })] }, t);
              }),
            }),
          ],
        });
      };
      var Xs = function () {
        return (0, Oe.jsx)("p", {
          className:
            "absolute text-[#2b2d31]/40 text-6xl right-0 -top-[4.5rem] font-bold",
          children: "because..",
        });
      };
      var $s = function () {
        return (0, Oe.jsxs)("div", {
          className: "relative flex flex-col gap-10",
          children: [
            (0, Oe.jsx)(Xs, {}),
            (0, Oe.jsxs)("p", {
              className: "text-[#999b9f]",
              children: [
                (0, Oe.jsx)("span", { className: "", children: "Noi" }),
                ", la echipa de dezvoltare web,",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "ne concentr\u0103m pe creearea\xa0",
                }),
                "unei experien\u021bei excelente pentru vizitatorii site-ului",
                " ",
                (0, Oe.jsx)("span", { className: "", children: "t\u0103u" }),
                ". Ace\u0219tia sunt",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "cei mai importan\u021bi",
                }),
                " pentru \xeendeplinirea",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "scopului propus",
                }),
                " \u0219i \xeencercam s\u0103 le oferim",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "cele mai bune",
                }),
                " instrumente pentru a analiza datele \u0219i informa\u021biile despre produsele \u0219i serviciile",
                (0, Oe.jsx)("span", { className: "", children: " tale" }),
                ". Este important ca vizitatorii t\u0103i s\u0103 poata gasi ",
                (0, Oe.jsx)("span", { className: "", children: "usor" }),
                " informa\u021biile pe care le caut\u0103 \u0219i sa \xeenteleag\u0103 facil cum ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "func\u021bioneaz\u0103 acestea",
                }),
                ". A\u0219adar, de la bun \xeenceput construim website-ul \xeentr-un mod c\xe2t mai",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "eficient pentru clientul final",
                }),
                ".",
              ],
            }),
            (0, Oe.jsx)("ul", {
              class:
                "space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400 flex flex-col gap-2",
              children: [
                "Experient\u0103",
                "Performant\u0103",
                "Seriozitate",
                "Profesionalism",
                "Eficien\u021b\u0103",
              ].map(function (e, t) {
                return (0,
                Oe.jsxs)("li", { class: "flex items-center", children: [(0, Oe.jsx)("svg", { class: "w-4 h-4 mr-1.5 text-yellow-400 dark:text-yellow-400 flex-shrink-0", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: (0, Oe.jsx)("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule": "evenodd" }) }), e] }, t);
              }),
            }),
          ],
        });
      };
      var eu = function () {
        return (0, Oe.jsxs)("div", {
          id: "de-ce-sa-ne-alegi-pe-noi",
          className:
            "px-[6%] md:px-[12%] 2xl:px-[17rem] py-[5rem] grid grid-cols-4 relative gap-16 lg:gap-10",
          children: [
            (0, Oe.jsx)(Ts.div, {
              className: "col-span-4 lg:col-span-2 pb-10",
              initial: { x: -100, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 0.05 },
              viewport: { once: !0 },
              children: (0, Oe.jsx)(Ks, {}),
            }),
            (0, Oe.jsx)(Ts.div, {
              className: "col-span-4 lg:col-span-2 pb-10",
              initial: { x: 100, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: !0 },
              children: (0, Oe.jsx)($s, {}),
            }),
          ],
        });
      };
      var tu = function () {
        var e = l((0, t.useState)(0), 2),
          n = e[0],
          r = e[1];
        return (0, Oe.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            (0, Oe.jsxs)("h1", {
              className:
                "font-semibold text-6xl text-white tracking-wide uppercase",
              children: [
                "Cum lucram noi ",
                (0, Oe.jsx)("span", {
                  className: "text-yellow-400",
                  children: "?",
                }),
              ],
            }),
            (0, Oe.jsxs)("div", {
              className:
                "grid place-items-center grid-cols-2 lg:grid-cols-3 gap-y-5 lg:gap-2 cursor-pointer text-white",
              children: [
                (0, Oe.jsx)("div", {
                  onClick: function () {
                    r(0), js({ category: "Analiza" });
                  },
                  className:
                    "ease-in-out duration-300 py-3 px-5 whitespace-nowrap answers-animation relative rounded-md col-span-1 lg:col-span-1 w-full mr-[0.65rem] lg:mr-0 ".concat(
                      0 === n && "answers-animation-on text-black"
                    ),
                  children: (0, Oe.jsx)("p", {
                    className: "relative z-10",
                    children: "Analiz\u0103",
                  }),
                }),
                (0, Oe.jsx)("div", {
                  onClick: function () {
                    r(1), js({ category: "Dezvoltare Web" });
                  },
                  className:
                    "ease-in-out duration-300 py-3 px-5 whitespace-nowrap answers-animation relative rounded-md col-span-1 lg:col-span-1 w-full ml-[0.65rem] lg:ml-0 ".concat(
                      1 === n && "answers-animation-on text-black"
                    ),
                  children: (0, Oe.jsx)("p", {
                    className: "relative z-10",
                    children: "Dezvoltare Web",
                  }),
                }),
                (0, Oe.jsx)("div", {
                  onClick: function () {
                    r(2), js({ category: "SEO si lansare" });
                  },
                  className:
                    "ease-in-out duration-300 py-3 px-5 whitespace-nowrap answers-animation relative rounded-md col-span-3 lg:col-span-1 w-full ".concat(
                      2 === n && "answers-animation-on text-black"
                    ),
                  children: (0, Oe.jsx)("p", {
                    className: "relative z-10",
                    children: "SEO si lansare",
                  }),
                }),
              ],
            }),
            (0, Oe.jsxs)("div", {
              className: "text-[#999b9f] ",
              children: [
                0 === n &&
                  (0, Oe.jsxs)(Ts.div, {
                    initial: { y: "55px", opacity: 0 },
                    animate: { y: "0px", opacity: 1 },
                    transition: { duration: 0.35 },
                    children: [
                      "\xcencerc\u0103m s\u0103 ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "\xeentelegem \u0219i s\u0103 analiz\u0103m",
                      }),
                      " ",
                      "\xeempreun\u0103 cu echipa ta cele mai",
                      " ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "eficiente solu\u021bii de dezvoltare",
                      }),
                      " pentru viitorul ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "t\u0103u",
                      }),
                      " website. Stabilim",
                      " ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "\xeempreun\u0103",
                      }),
                      " cum va arata viitorul t\u0103u website \u0219i ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "func\u021bionalit\u0103\u021bile acestuia",
                      }),
                      ".",
                    ],
                  }),
                1 === n &&
                  (0, Oe.jsxs)(Ts.div, {
                    initial: { y: "55px", opacity: 0 },
                    animate: { y: "0px", opacity: 1 },
                    transition: { duration: 0.35 },
                    children: [
                      "Ne apuc\u0103m de partea ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "tehnic\u0103",
                      }),
                      " a website-ului, ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "programarea lui",
                      }),
                      ", \u0219i dezvoltarea noilor func\u021bii pe care acesta le va avea. Dup\u0103 terminarea lui, \xeencep ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "verific\u0103rile",
                      }),
                      " pentru a nu exista ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "bug-uri sau alte erori",
                      }),
                      ".",
                    ],
                  }),
                2 === n &&
                  (0, Oe.jsxs)(Ts.div, {
                    initial: { y: "55px", opacity: 0 },
                    animate: { y: "0px", opacity: 1 },
                    transition: { duration: 0.35 },
                    children: [
                      "Dup\u0103 ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "finalizarea",
                      }),
                      " tuturor etapelor",
                      " ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "tehnice",
                      }),
                      ", \xeencepem s\u0103 facem",
                      " ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "research",
                      }),
                      " pentru cuvintele tale cheie, ceea ce te va amplasa cat mai sus \xeen",
                      " ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "c\u0103utarile de pe Google",
                      }),
                      ". Iar ultimul pas este cel \xeen care",
                      " ",
                      (0, Oe.jsx)("span", {
                        className: "",
                        children: "website-ul t\u0103u este lansat",
                      }),
                      ".",
                    ],
                  }),
              ],
            }),
          ],
        });
      };
      var nu = function () {
          return (0, Oe.jsx)("div", {
            className: "w-1/3 h-2.5 animate-pulse rounded-full bg-yellow-400",
          });
        },
        ru =
          n.p + "static/media/pexels-photo-4342498.e8a5d19eb8e242db8946.webp";
      var au = function () {
        return (0, Oe.jsxs)("div", {
          className: "flex flex-col gap-10",
          children: [
            (0, Oe.jsx)(nu, {}),
            (0, Oe.jsxs)("p", {
              className: "text-[#999b9f] w-[95%]",
              children: [
                "Dac\u0103 cu toate ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "informa\u021biile",
                }),
                " de mai sus nu te-au convins, cel mai ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "u\u0219or mod",
                }),
                " este s\u0103 ne",
                " ",
                (0, Oe.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    return js({ category: "CUM LUCRAM NOI? -- Contact me" });
                  },
                  children: (0, Oe.jsx)("a", {
                    href: "#contact",
                    className:
                      "text-yellow-400 cursor-pointer font-semibold underline",
                    children: "contacta\u021bi",
                  }),
                }),
                " ",
                "\u0219i s\u0103 facem",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "cuno\u0219tin\u021b\u0103",
                }),
                ". Rela\u021bia cu clien\u021bii no\u0219tri este",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "foarte important\u0103",
                }),
                " \u0219i \xeencerc\u0103m foarte mult s\u0103 avem o rela\u021bie bun\u0103,",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "cu respect \u0219i de lung\u0103 durat\u0103",
                }),
                ", a\u0219adar te a\u0219tept\u0103m cu un",
                " ",
                (0, Oe.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    return js({ category: "CUM LUCRAM NOI? -- Tel" });
                  },
                  children: (0, Oe.jsx)("a", {
                    href: "tel:0765865718",
                    className:
                      "text-yellow-400 cursor-pointer font-semibold underline",
                    children: "telefon",
                  }),
                }),
                " ",
                "\u0219i vom raspunde ",
                (0, Oe.jsx)("span", { className: "", children: "rapid" }),
                " solicit\u0103rilor \u0219i",
                " ",
                (0, Oe.jsx)("span", {
                  className: "",
                  children: "nevoile Dumneavoastr\u0103",
                }),
                ".",
              ],
            }),
            (0, Oe.jsxs)("div", {
              className: "flex gap-10",
              children: [
                (0, Oe.jsx)("img", {
                  src: ru,
                  alt: "",
                  className:
                    "w-32 h-32 lg:w-44 lg:h-44 inline-block ring-2 p-1 rounded-full grayscale object-cover",
                }),
                (0, Oe.jsx)("div", {
                  className: "flex  flex-col gap-5",
                  children: [
                    "High Performance",
                    "Good Agency",
                    "High Performance Service",
                    "SEO Optimization",
                    "Mobile friendly",
                  ].map(function (e, t) {
                    return (0,
                    Oe.jsxs)("div", { class: "flex space-x-3", children: [(0, Oe.jsxs)("svg", { "aria-hidden": "true", class: "flex-shrink-0 w-5 h-5 text-blue-600 dark:text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: [(0, Oe.jsx)("title", { children: e }), (0, Oe.jsx)("path", { "fill-rule": "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule": "evenodd" })] }), (0, Oe.jsx)("span", { class: "text-base font-normal leading-tight text-gray-500 dark:text-gray-400", children: e })] }, t);
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var ou = function () {
        return (0, Oe.jsxs)("div", {
          id: "cum-lucram-noi",
          className:
            "px-[6%] md:px-[12%] 2xl:px-[17rem] py-[5rem] grid grid-cols-4 relative gap-10 bg-[#222429]",
          children: [
            (0, Oe.jsx)("div", {
              className: "h-full w-[20%] bg-[#1c1e22] absolute top-0 left-0",
            }),
            (0, Oe.jsx)(Ts.div, {
              className:
                "row-start-2 lg:row-start-auto col-span-4 lg:col-span-2 z-10",
              initial: { x: -100, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 0.05 },
              viewport: { once: !0 },
              children: (0, Oe.jsx)(au, {}),
            }),
            (0, Oe.jsx)(Ts.div, {
              className:
                "row-start-1 lg:row-start-auto col-span-4 lg:col-span-2 z-10",
              initial: { x: 100, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: !0 },
              children: (0, Oe.jsx)(tu, {}),
            }),
          ],
        });
      };
      var iu = function () {
        return (0, Oe.jsxs)("div", {
          className: "flex flex-col gap-8",
          children: [
            (0, Oe.jsxs)("h1", {
              className:
                "flex uppercase font-semibold text-4xl lg:text-6xl text-white tracking-wide",
              children: [
                (0, Oe.jsx)("span", { children: "Te-am" }),
                "\xa0",
                (0, Oe.jsxs)("span", {
                  children: [
                    "Convins ",
                    (0, Oe.jsx)("span", {
                      className: "text-yellow-400",
                      children: "?",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsxs)("div", {
              className: "text-[#999b9f] text-lg",
              children: [
                (0, Oe.jsx)("button", {
                  type: "button",
                  onClick: function () {
                    return js({ category: "Contact me Section" });
                  },
                  children: (0, Oe.jsxs)("a", {
                    className: "text-yellow-400 underline font-semibold",
                    href: "/contact",
                    children: [" ", "Contacteaz\u0103-ne"],
                  }),
                }),
                "\xa0\u0219i poveste\u0219te-ne despre\xa0",
                (0, Oe.jsxs)("span", {
                  className: "",
                  children: [
                    "proiectul t\u0103u",
                    (0, Oe.jsx)("span", {
                      className: "text-yellow-400",
                      children: "\xa0!",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                (0, Oe.jsxs)("div", {
                  className: "text-white font-semibold text-lg",
                  children: [
                    "Telefon:\xa0",
                    " ",
                    (0, Oe.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        return js({ category: "Telefon Section" });
                      },
                      children: (0, Oe.jsx)("a", {
                        className: "underline text-yellow-400 font-bold",
                        href: "tel:0765865718",
                        children: "+40 765 865 718",
                      }),
                    }),
                  ],
                }),
                (0, Oe.jsxs)("div", {
                  className: "text-white font-semibold text-lg",
                  children: [
                    "Email:\xa0",
                    " ",
                    (0, Oe.jsx)("button", {
                      type: "button",
                      onClick: function () {
                        return js({ category: "Email Section" });
                      },
                      children: (0, Oe.jsx)("a", {
                        className: "underline text-yellow-400 font-bold",
                        href: "mailto:office@devcodes.ro",
                        children: "office@devcodes.ro",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var lu = function () {
        return (0, Oe.jsxs)("div", {
          className: "flex flex-col gap-6",
          children: [
            (0, Oe.jsxs)("div", {
              role: "status",
              class: "space-y-2.5 animate-pulse max-w-lg",
              children: [
                (0, Oe.jsxs)("div", {
                  class: "flex items-center space-x-2 w-full",
                  children: [
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-gray-200 rounded-full dark:bg-neutral-700 w-32",
                    }),
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-300 rounded-full dark:bg-neutral-700 w-24",
                    }),
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full",
                    }),
                  ],
                }),
                (0, Oe.jsxs)("div", {
                  class: "flex items-center w-full space-x-2 max-w-[480px]",
                  children: [
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full",
                    }),
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full",
                    }),
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24",
                    }),
                  ],
                }),
                (0, Oe.jsxs)("div", {
                  class: "flex items-center w-full space-x-2 max-w-[400px]",
                  children: [
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full",
                    }),
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-200 rounded-full dark:bg-neutral-700 w-80",
                    }),
                    (0, Oe.jsx)("div", {
                      class:
                        "h-4 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full",
                    }),
                  ],
                }),
                (0, Oe.jsx)("span", {
                  class: "sr-only",
                  children: "Loading...",
                }),
              ],
            }),
            (0, Oe.jsxs)("div", {
              className: "text-[#999b9f] text-lg",
              children: [
                (0, Oe.jsx)("a", {
                  href: "tel:0765865718",
                  className: "",
                  children: "Scrie-ne tu",
                }),
                "\xa0despre proiectul\xa0",
                (0, Oe.jsxs)("span", {
                  className: "",
                  children: [
                    "t\u0103u \u0219i te contact\u0103m noi",
                    (0, Oe.jsx)("span", {
                      className: "text-yellow-400",
                      children: "\xa0!",
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsx)("div", {
              className: "pt-2",
              children: (0, Oe.jsx)(Rs, {
                title: "Vreau Ofert\u0103!",
                href: "/contact",
              }),
            }),
          ],
        });
      };
      var su = function () {
        return (0, Oe.jsxs)("div", {
          id: "contact",
          className:
            "px-[6%] md:px-[12%] 2xl:px-[17rem] py-[5rem] gap-10 grid grid-cols-4",
          children: [
            (0, Oe.jsx)(Ts.div, {
              className: "col-span-4 lg:col-span-2 z-10",
              initial: { x: -100, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 0.05 },
              viewport: { once: !0 },
              children: (0, Oe.jsx)(iu, {}),
            }),
            (0, Oe.jsx)(Ts.div, {
              className: "col-span-4 lg:col-span-2 z-10",
              initial: { x: 100, opacity: 0 },
              whileInView: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 0.1 },
              viewport: { once: !0 },
              children: (0, Oe.jsx)(lu, {}),
            }),
          ],
        });
      };
      var uu = n(192),
        cu = n.n(uu),
        fu = n(63),
        du = n.n(fu),
        pu = n(939),
        hu = n.n(pu),
        vu = n(843),
        mu = n.n(vu),
        yu = "bodyAttributes",
        gu = "htmlAttributes",
        bu = "titleAttributes",
        xu = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        wu =
          (Object.keys(xu).map(function (e) {
            return xu[e];
          }),
          "charset"),
        ku = "cssText",
        Su = "href",
        Eu = "http-equiv",
        Tu = "innerHTML",
        ju = "itemprop",
        Au = "name",
        Ou = "property",
        Pu = "rel",
        Cu = "src",
        Nu = "target",
        Ru = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        Mu = "defaultTitle",
        Lu = "defer",
        Iu = "encodeSpecialCharacters",
        Du = "onChangeClientState",
        Ju = "titleTemplate",
        Vu = Object.keys(Ru).reduce(function (e, t) {
          return (e[Ru[t]] = t), e;
        }, {}),
        Uu = [xu.NOSCRIPT, xu.SCRIPT, xu.STYLE],
        zu = "data-react-helmet",
        Bu =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        Fu = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        Wu = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        qu =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        Gu = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        _u = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" !== typeof t && "function" !== typeof t)
            ? e
            : t;
        },
        Qu = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        Zu = function (e) {
          var t = $u(e, xu.TITLE),
            n = $u(e, Ju);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = $u(e, Mu);
          return t || r || void 0;
        },
        Hu = function (e) {
          return $u(e, Du) || function () {};
        },
        Yu = function (e, t) {
          return t
            .filter(function (t) {
              return "undefined" !== typeof t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return qu({}, e, t);
            }, {});
        },
        Ku = function (e, t) {
          return t
            .filter(function (e) {
              return "undefined" !== typeof e[xu.BASE];
            })
            .map(function (e) {
              return e[xu.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var o = r[a].toLowerCase();
                  if (-1 !== e.indexOf(o) && n[o]) return t.concat(n);
                }
              return t;
            }, []);
        },
        Xu = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                ("undefined" !== typeof t[e] &&
                  ac(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      Bu(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (
                  var n = void 0, o = Object.keys(e), i = 0;
                  i < o.length;
                  i++
                ) {
                  var l = o[i],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === Pu && "canonical" === e[n].toLowerCase()) ||
                    (s === Pu && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) ||
                      (l !== Tu && l !== ku && l !== ju) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][u] && ((a[n][u] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var o = Object.keys(a), i = 0; i < o.length; i++) {
                var l = o[i],
                  s = mu()({}, r[l], a[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        $u = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        ec = (function () {
          var e = Date.now();
          return function (t) {
            var n = Date.now();
            n - e > 16
              ? ((e = n), t(n))
              : setTimeout(function () {
                  ec(t);
                }, 0);
          };
        })(),
        tc = function (e) {
          return clearTimeout(e);
        },
        nc =
          "undefined" !== typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              ec
            : n.g.requestAnimationFrame || ec,
        rc =
          "undefined" !== typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              tc
            : n.g.cancelAnimationFrame || tc,
        ac = function (e) {
          return (
            console && "function" === typeof console.warn && console.warn(e)
          );
        },
        oc = null,
        ic = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            o = e.linkTags,
            i = e.metaTags,
            l = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            f = e.title,
            d = e.titleAttributes;
          uc(xu.BODY, r), uc(xu.HTML, a), sc(f, d);
          var p = {
              baseTag: cc(xu.BASE, n),
              linkTags: cc(xu.LINK, o),
              metaTags: cc(xu.META, i),
              noscriptTags: cc(xu.NOSCRIPT, l),
              scriptTags: cc(xu.SCRIPT, u),
              styleTags: cc(xu.STYLE, c),
            },
            h = {},
            v = {};
          Object.keys(p).forEach(function (e) {
            var t = p[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (h[e] = n), r.length && (v[e] = p[e].oldTags);
          }),
            t && t(),
            s(e, h, v);
        },
        lc = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        sc = function (e, t) {
          "undefined" !== typeof e &&
            document.title !== e &&
            (document.title = lc(e)),
            uc(xu.TITLE, t);
        },
        uc = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(zu),
                a = r ? r.split(",") : [],
                o = [].concat(a),
                i = Object.keys(t),
                l = 0;
              l < i.length;
              l++
            ) {
              var s = i[l],
                u = t[s] || "";
              n.getAttribute(s) !== u && n.setAttribute(s, u),
                -1 === a.indexOf(s) && a.push(s);
              var c = o.indexOf(s);
              -1 !== c && o.splice(c, 1);
            }
            for (var f = o.length - 1; f >= 0; f--) n.removeAttribute(o[f]);
            a.length === o.length
              ? n.removeAttribute(zu)
              : n.getAttribute(zu) !== i.join(",") &&
                n.setAttribute(zu, i.join(","));
          }
        },
        cc = function (e, t) {
          var n = document.head || document.querySelector(xu.HEAD),
            r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
            a = Array.prototype.slice.call(r),
            o = [],
            i = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === Tu) n.innerHTML = t.innerHTML;
                    else if (r === ku)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var l = "undefined" === typeof t[r] ? "" : t[r];
                      n.setAttribute(r, l);
                    }
                n.setAttribute(zu, "true"),
                  a.some(function (e, t) {
                    return (i = t), n.isEqualNode(e);
                  })
                    ? a.splice(i, 1)
                    : o.push(n);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            o.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: o }
          );
        },
        fc = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r =
              "undefined" !== typeof e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        dc = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[Ru[n] || n] = e[n]), t;
          }, t);
        },
        pc = function (e, n, r) {
          switch (e) {
            case xu.TITLE:
              return {
                toComponent: function () {
                  return (function (e, n, r) {
                    var a,
                      o = (((a = { key: n })[zu] = !0), a),
                      i = dc(r, o);
                    return [t.createElement(xu.TITLE, i, n)];
                  })(0, n.title, n.titleAttributes);
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = fc(n),
                      o = lc(t);
                    return a
                      ? "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          a +
                          ">" +
                          Qu(o, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          ' data-react-helmet="true">' +
                          Qu(o, r) +
                          "</" +
                          e +
                          ">";
                  })(e, n.title, n.titleAttributes, r);
                },
              };
            case yu:
            case gu:
              return {
                toComponent: function () {
                  return dc(n);
                },
                toString: function () {
                  return fc(n);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, n) {
                    return n.map(function (n, r) {
                      var a,
                        o = (((a = { key: r })[zu] = !0), a);
                      return (
                        Object.keys(n).forEach(function (e) {
                          var t = Ru[e] || e;
                          if (t === Tu || t === ku) {
                            var r = n.innerHTML || n.cssText;
                            o.dangerouslySetInnerHTML = { __html: r };
                          } else o[t] = n[e];
                        }),
                        t.createElement(e, o)
                      );
                    });
                  })(e, n);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === Tu || e === ku);
                          })
                          .reduce(function (e, t) {
                            var a =
                              "undefined" === typeof r[t]
                                ? t
                                : t + '="' + Qu(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        o = r.innerHTML || r.cssText || "",
                        i = -1 === Uu.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        a +
                        (i ? "/>" : ">" + o + "</" + e + ">")
                      );
                    }, "");
                  })(e, n, r);
                },
              };
          }
        },
        hc = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            o = e.linkTags,
            i = e.metaTags,
            l = e.noscriptTags,
            s = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            f = void 0 === c ? "" : c,
            d = e.titleAttributes;
          return {
            base: pc(xu.BASE, t, r),
            bodyAttributes: pc(yu, n, r),
            htmlAttributes: pc(gu, a, r),
            link: pc(xu.LINK, o, r),
            meta: pc(xu.META, i, r),
            noscript: pc(xu.NOSCRIPT, l, r),
            script: pc(xu.SCRIPT, s, r),
            style: pc(xu.STYLE, u, r),
            title: pc(xu.TITLE, { title: f, titleAttributes: d }, r),
          };
        },
        vc = (function (e) {
          var n, r;
          return (
            (r = n =
              (function (n) {
                function r() {
                  return Fu(this, r), _u(this, n.apply(this, arguments));
                }
                return (
                  (function (e, t) {
                    if ("function" !== typeof t && null !== t)
                      throw new TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(r, n),
                  (r.prototype.shouldComponentUpdate = function (e) {
                    return !hu()(this.props, e);
                  }),
                  (r.prototype.mapNestedChildrenToProps = function (e, t) {
                    if (!t) return null;
                    switch (e.type) {
                      case xu.SCRIPT:
                      case xu.NOSCRIPT:
                        return { innerHTML: t };
                      case xu.STYLE:
                        return { cssText: t };
                    }
                    throw new Error(
                      "<" +
                        e.type +
                        " /> elements are self-closing and can not contain children. Refer to our API for more information."
                    );
                  }),
                  (r.prototype.flattenArrayTypeChildren = function (e) {
                    var t,
                      n = e.child,
                      r = e.arrayTypeChildren,
                      a = e.newChildProps,
                      o = e.nestedChildren;
                    return qu(
                      {},
                      r,
                      (((t = {})[n.type] = [].concat(r[n.type] || [], [
                        qu({}, a, this.mapNestedChildrenToProps(n, o)),
                      ])),
                      t)
                    );
                  }),
                  (r.prototype.mapObjectTypeChildren = function (e) {
                    var t,
                      n,
                      r = e.child,
                      a = e.newProps,
                      o = e.newChildProps,
                      i = e.nestedChildren;
                    switch (r.type) {
                      case xu.TITLE:
                        return qu(
                          {},
                          a,
                          (((t = {})[r.type] = i),
                          (t.titleAttributes = qu({}, o)),
                          t)
                        );
                      case xu.BODY:
                        return qu({}, a, { bodyAttributes: qu({}, o) });
                      case xu.HTML:
                        return qu({}, a, { htmlAttributes: qu({}, o) });
                    }
                    return qu({}, a, (((n = {})[r.type] = qu({}, o)), n));
                  }),
                  (r.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                    var n = qu({}, t);
                    return (
                      Object.keys(e).forEach(function (t) {
                        var r;
                        n = qu({}, n, (((r = {})[t] = e[t]), r));
                      }),
                      n
                    );
                  }),
                  (r.prototype.warnOnInvalidChildren = function (e, t) {
                    return !0;
                  }),
                  (r.prototype.mapChildrenToProps = function (e, n) {
                    var r = this,
                      a = {};
                    return (
                      t.Children.forEach(e, function (e) {
                        if (e && e.props) {
                          var t = e.props,
                            o = t.children,
                            i = (function (e) {
                              var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {};
                              return Object.keys(e).reduce(function (t, n) {
                                return (t[Vu[n] || n] = e[n]), t;
                              }, t);
                            })(Gu(t, ["children"]));
                          switch ((r.warnOnInvalidChildren(e, o), e.type)) {
                            case xu.LINK:
                            case xu.META:
                            case xu.NOSCRIPT:
                            case xu.SCRIPT:
                            case xu.STYLE:
                              a = r.flattenArrayTypeChildren({
                                child: e,
                                arrayTypeChildren: a,
                                newChildProps: i,
                                nestedChildren: o,
                              });
                              break;
                            default:
                              n = r.mapObjectTypeChildren({
                                child: e,
                                newProps: n,
                                newChildProps: i,
                                nestedChildren: o,
                              });
                          }
                        }
                      }),
                      (n = this.mapArrayTypeChildrenToProps(a, n))
                    );
                  }),
                  (r.prototype.render = function () {
                    var n = this.props,
                      r = n.children,
                      a = Gu(n, ["children"]),
                      o = qu({}, a);
                    return (
                      r && (o = this.mapChildrenToProps(r, o)),
                      t.createElement(e, o)
                    );
                  }),
                  Wu(r, null, [
                    {
                      key: "canUseDOM",
                      set: function (t) {
                        e.canUseDOM = t;
                      },
                    },
                  ]),
                  r
                );
              })(t.Component)),
            (n.propTypes = {
              base: cu().object,
              bodyAttributes: cu().object,
              children: cu().oneOfType([cu().arrayOf(cu().node), cu().node]),
              defaultTitle: cu().string,
              defer: cu().bool,
              encodeSpecialCharacters: cu().bool,
              htmlAttributes: cu().object,
              link: cu().arrayOf(cu().object),
              meta: cu().arrayOf(cu().object),
              noscript: cu().arrayOf(cu().object),
              onChangeClientState: cu().func,
              script: cu().arrayOf(cu().object),
              style: cu().arrayOf(cu().object),
              title: cu().string,
              titleAttributes: cu().object,
              titleTemplate: cu().string,
            }),
            (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
            (n.peek = e.peek),
            (n.rewind = function () {
              var t = e.rewind();
              return (
                t ||
                  (t = hc({
                    baseTag: [],
                    bodyAttributes: {},
                    encodeSpecialCharacters: !0,
                    htmlAttributes: {},
                    linkTags: [],
                    metaTags: [],
                    noscriptTags: [],
                    scriptTags: [],
                    styleTags: [],
                    title: "",
                    titleAttributes: {},
                  })),
                t
              );
            }),
            r
          );
        })(
          du()(
            function (e) {
              return {
                baseTag: Ku([Su, Nu], e),
                bodyAttributes: Yu(yu, e),
                defer: $u(e, Lu),
                encode: $u(e, Iu),
                htmlAttributes: Yu(gu, e),
                linkTags: Xu(xu.LINK, [Pu, Su], e),
                metaTags: Xu(xu.META, [Au, wu, Eu, Ou, ju], e),
                noscriptTags: Xu(xu.NOSCRIPT, [Tu], e),
                onChangeClientState: Hu(e),
                scriptTags: Xu(xu.SCRIPT, [Cu, Tu], e),
                styleTags: Xu(xu.STYLE, [ku], e),
                title: Zu(e),
                titleAttributes: Yu(bu, e),
              };
            },
            function (e) {
              oc && rc(oc),
                e.defer
                  ? (oc = nc(function () {
                      ic(e, function () {
                        oc = null;
                      });
                    }))
                  : (ic(e), (oc = null));
            },
            hc
          )(function () {
            return null;
          })
        );
      vc.renderStatic = vc.rewind;
      var mc = function (e) {
        var t = e.name,
          n = e.id,
          r = e.placeholder;
        return (0, Oe.jsxs)("div", {
          children: [
            (0, Oe.jsx)("label", {
              for: n,
              class:
                "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300",
              children: t,
            }),
            (0, Oe.jsx)("input", {
              name: t,
              type: "text",
              id: n,
              class:
                "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:yellow-blue-500 block w-full p-2.5 dark:bg-[#222429] dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500",
              placeholder: r,
              required: !0,
            }),
          ],
        });
      };
      var yc = function () {
        var e = l((0, t.useState)(!1), 2),
          n = e[0];
        return (
          e[1],
          (0, Oe.jsxs)("div", {
            children: [
              (0, Oe.jsx)(Ps, {}),
              (0, Oe.jsx)("div", {
                className:
                  "bg-[#222429] w-full h-[20rem] flex justify-center items-center",
                children: (0, Oe.jsxs)("h1", {
                  className:
                    "text-6xl text-white uppercase tracking-wider pt-28",
                  children: ["Contact ", n && "este bai"],
                }),
              }),
              (0, Oe.jsx)("div", {
                className:
                  "px-[6%] lg:px-[17rem] py-[5rem] flex flex-col relative gap-16",
                children: (0, Oe.jsxs)("form", {
                  name: "offers",
                  method: "post",
                  action: "/contact/",
                  children: [
                    (0, Oe.jsx)("input", {
                      type: "hidden",
                      name: "form-name",
                      value: "offers",
                    }),
                    (0, Oe.jsxs)("div", {
                      class:
                        "grid gap-6 mb-6 grid-cols-3 md:grid-cols-3 w-full",
                      children: [
                        (0, Oe.jsx)("div", {
                          className: "col-span-1 lg:col-span-1",
                          children: (0, Oe.jsx)(mc, {
                            type: "text",
                            name: "Nume",
                            id: "name",
                            placeholder: "Ionut Daniel",
                          }),
                        }),
                        (0, Oe.jsx)("div", {
                          className: "col-span-2 lg:col-span-1",
                          children: (0, Oe.jsx)(mc, {
                            type: "email",
                            name: "Email",
                            id: "email",
                            placeholder: "office@exemple.com",
                          }),
                        }),
                        (0, Oe.jsx)("div", {
                          className: "col-span-3 lg:col-span-1",
                          children: (0, Oe.jsx)(mc, {
                            type: "text",
                            name: "Numar de telefon",
                            id: "phone",
                            placeholder: "076 123 xx xx",
                          }),
                        }),
                        (0, Oe.jsxs)("div", {
                          className: "col-span-3",
                          children: [
                            (0, Oe.jsx)("label", {
                              for: "message",
                              class:
                                "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                              children: "Scrie mesaj",
                            }),
                            (0, Oe.jsx)("textarea", {
                              id: "message",
                              rows: "4",
                              name: "Message",
                              class:
                                "text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:yellow-blue-500 block w-full p-2.5 dark:bg-[#222429] dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500",
                              placeholder: "Mesajul t\u0103u...",
                            }),
                          ],
                        }),
                        (0, Oe.jsxs)("div", {
                          class: "flex items-start mb-6 col-span-3",
                          children: [
                            (0, Oe.jsx)("div", {
                              class: "flex items-center h-5",
                              children: (0, Oe.jsx)("input", {
                                id: "remember",
                                type: "checkbox",
                                name: "Checkbox",
                                class:
                                  "w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                                required: !0,
                              }),
                            }),
                            (0, Oe.jsxs)("label", {
                              for: "remember",
                              class:
                                "ml-2 text-sm font-medium text-gray-900 dark:text-gray-400",
                              children: [
                                "Sunt de acord cu",
                                " ",
                                (0, Oe.jsx)("a", {
                                  href: "#",
                                  class:
                                    "text-yellow-400 hover:underline dark:text-4ellow-500",
                                  children: "termenii \u0219i condi\u021biile",
                                }),
                                ".",
                              ],
                            }),
                          ],
                        }),
                        (0, Oe.jsx)("button", {
                          type: "submit",
                          class:
                            "col-span-3 px-5 py-2.5 lg:col-span-1 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500",
                          children: "Trimite mesajul",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var gc = function () {
        return (0, Oe.jsxs)("div", {
          children: [
            (0, Oe.jsxs)(vc, {
              children: [
                (0, Oe.jsx)("title", { children: "DevCodes - Contact" }),
                (0, Oe.jsx)("link", {
                  rel: "canonical",
                  href: "https://devcodes.ro/contact",
                }),
                (0, Oe.jsx)("meta", {
                  name: "description",
                  content:
                    "Contacteaz\u0103-ne \u0219i poveste\u0219te-ne despre proiectul t\u0103u.",
                }),
                (0, Oe.jsx)("meta", {
                  property: "og:title",
                  content: "DevCodes - Contact",
                }),
                (0, Oe.jsx)("meta", {
                  property: "og:description",
                  content:
                    "Contacteaz\u0103-ne \u0219i poveste\u0219te-ne despre proiectul t\u0103u.",
                }),
                (0, Oe.jsx)("meta", {
                  property: "og:image",
                  content: "https://devcodes.ro/logo-min.ico",
                }),
                (0, Oe.jsx)("meta", {
                  property: "og:url",
                  content: "https://devcodes.ro",
                }),
                (0, Oe.jsx)("meta", {
                  name: "twitter:title",
                  content: "DevCodes - Contact",
                }),
              ],
            }),
            (0, Oe.jsx)(yc, {}),
          ],
        });
      };
      var bc = function () {
        return (0, Oe.jsxs)("footer", {
          class: "p-4 bg-white sm:p-6 dark:bg-[#222429] shadow-lg",
          style: {
            backgroundImage: "url(".concat(
              "data:image/png;base64,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",
              ")"
            ),
          },
          children: [
            (0, Oe.jsxs)("div", {
              class: "md:flex md:justify-between",
              children: [
                (0, Oe.jsx)("div", {
                  class: "mb-6 md:mb-0",
                  children: (0, Oe.jsx)("a", {
                    href: "https://devcodes.ro/",
                    class: "flex items-center",
                    children: (0, Oe.jsx)("img", {
                      src:
                        0 === parseInt(Math.floor(2 * Math.random())) ? As : Os,
                      class: "mr-3 w-36",
                      alt: "DevCodes Logo",
                    }),
                  }),
                }),
                (0, Oe.jsxs)("div", {
                  class: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
                  children: [
                    (0, Oe.jsxs)("div", {
                      children: [
                        (0, Oe.jsx)("h2", {
                          class:
                            "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                          children: "Resources",
                        }),
                        (0, Oe.jsxs)("ul", {
                          class: "text-gray-600 dark:text-gray-400",
                          children: [
                            (0, Oe.jsx)("li", {
                              class: "mb-4",
                              children: (0, Oe.jsx)("a", {
                                href: "#serviciile-noastre",
                                class: "hover:underline",
                                children: "Serviciile noastre",
                              }),
                            }),
                            (0, Oe.jsx)("li", {
                              children: (0, Oe.jsx)("a", {
                                href: "#cum-te-putem-ajuta-noi",
                                class: "hover:underline",
                                children: "Cum te putem ajuta noi ?",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Oe.jsxs)("div", {
                      children: [
                        (0, Oe.jsx)("h2", {
                          class:
                            "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                          children: "Contact",
                        }),
                        (0, Oe.jsxs)("ul", {
                          class: "text-gray-600 dark:text-gray-400",
                          children: [
                            (0, Oe.jsx)("li", {
                              class: "mb-4",
                              children: (0, Oe.jsx)("button", {
                                type: "button",
                                onClick: function () {
                                  return js({ category: "Telefon Footer" });
                                },
                                children: (0, Oe.jsxs)("a", {
                                  href: "tel:0765865718",
                                  class:
                                    "hover:underline flex gap-2 items-center",
                                  children: [
                                    (0, Oe.jsx)("svg", {
                                      width: 18,
                                      height: 18,
                                      fill: "none",
                                      stroke: "#ffae00",
                                      strokeWidth: 2,
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, Oe.jsx)("path", {
                                        d: "M21.14 17.53c-.744-.75-2.546-1.844-3.421-2.285-1.139-.574-1.233-.62-2.128.045-.597.444-.994.84-1.693.691-.7-.149-2.218-.99-3.548-2.315-1.33-1.326-2.219-2.889-2.368-3.585-.15-.697.253-1.09.693-1.688.62-.843.573-.984.043-2.123-.413-.886-1.54-2.672-2.292-3.413-.805-.795-.805-.654-1.324-.439a7.508 7.508 0 0 0-1.211.646c-.75.498-1.166.912-1.457 1.534-.292.622-.422 2.08 1.081 4.811s2.558 4.127 4.74 6.304c2.184 2.177 3.862 3.348 6.316 4.724 3.036 1.7 4.2 1.369 4.824 1.078.624-.29 1.04-.703 1.54-1.453a7.43 7.43 0 0 0 .646-1.21c.216-.516.357-.516-.44-1.321Z",
                                      }),
                                    }),
                                    "+40 765 865 718",
                                  ],
                                }),
                              }),
                            }),
                            (0, Oe.jsx)("li", {
                              children: (0, Oe.jsx)("button", {
                                type: "button",
                                onClick: function () {
                                  return js({ category: "Email Footer" });
                                },
                                children: (0, Oe.jsxs)("a", {
                                  href: "mailto:office@devcodes.ro",
                                  class:
                                    "hover:underline flex gap-2 items-center",
                                  children: [
                                    (0, Oe.jsxs)("svg", {
                                      width: 18,
                                      height: 18,
                                      fill: "none",
                                      stroke: "#ffae00",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      viewBox: "0 0 24 24",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: [
                                        (0, Oe.jsx)("path", {
                                          d: "M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875Z",
                                        }),
                                        (0, Oe.jsx)("path", {
                                          d: "M5.25 7.5 12 12.75l6.75-5.25",
                                        }),
                                      ],
                                    }),
                                    "office@devcodes.ro",
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Oe.jsxs)("div", {
                      children: [
                        (0, Oe.jsx)("h2", {
                          class:
                            "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white",
                          children: "Legal",
                        }),
                        (0, Oe.jsxs)("ul", {
                          class: "text-gray-600 dark:text-gray-400",
                          children: [
                            (0, Oe.jsx)("li", {
                              class: "mb-4",
                              children: (0, Oe.jsx)("a", {
                                href: "#",
                                class: "hover:underline",
                                children: "Privacy Policy",
                              }),
                            }),
                            (0, Oe.jsx)("li", {
                              children: (0, Oe.jsx)("a", {
                                href: "#",
                                class: "hover:underline",
                                children: "Terms & Conditions",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, Oe.jsx)("hr", {
              class:
                "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
            }),
            (0, Oe.jsx)("div", {
              class: "sm:flex sm:items-center sm:justify-between",
              children: (0, Oe.jsxs)("span", {
                class:
                  "text-sm text-gray-500 sm:text-center dark:text-gray-400",
                children: [
                  "\xa9 ",
                  new Date().getFullYear(),
                  " ",
                  (0, Oe.jsx)("a", {
                    href: "https://devcodes.ro/",
                    class: "hover:underline",
                    children: "DevCodes",
                  }),
                  ". All Rights Reserved.",
                ],
              }),
            }),
          ],
        });
      };
      je.ZP.initialize("G-PBW2Z87P8Z"),
        console.log({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
          REACT_APP_TRACKING_ID: "G-PBW2Z87P8Z",
        }),
        console.log(
          {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_TRACKING_ID: "G-PBW2Z87P8Z",
          }.REACT_APP_TEST,
          {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_TRACKING_ID: "G-PBW2Z87P8Z",
          }.REACT_APP_TEST_2
        ),
        a.render(
          (0, Oe.jsx)(t.StrictMode, {
            children: (0, Oe.jsx)("div", {
              className: "overflow-x-hidden",
              children: (0, Oe.jsx)(Se, {
                children: (0, Oe.jsxs)(xe, {
                  basename: "",
                  children: [
                    (0, Oe.jsx)(ge, {
                      path: "/contact",
                      element: (0, Oe.jsxs)(Oe.Fragment, {
                        children: [
                          (0, Oe.jsx)(Pe, {}),
                          (0, Oe.jsx)(gc, {}),
                          (0, Oe.jsx)(bc, {}),
                          (0, Oe.jsx)(Ae, {}),
                        ],
                      }),
                    }),
                    (0, Oe.jsx)(ge, {
                      path: "*",
                      element: (0, Oe.jsxs)(Oe.Fragment, {
                        children: [
                          (0, Oe.jsx)(Pe, {}),
                          (0, Oe.jsx)(Is, {}),
                          (0, Oe.jsx)(zs, {}),
                          (0, Oe.jsx)(Qs, {}),
                          (0, Oe.jsx)(eu, {}),
                          (0, Oe.jsx)(ou, {}),
                          (0, Oe.jsx)(su, {}),
                          (0, Oe.jsx)(bc, {}),
                          (0, Oe.jsx)(Ae, {}),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
          document.getElementById("root")
        );
    })();
})();
