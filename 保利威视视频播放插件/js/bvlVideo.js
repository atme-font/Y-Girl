(function (e, t) {
    function n(e) {
        return D.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }

    function i(e) {
        if (!ft[e]) {
            var t = F.body, n = D("<" + e + ">").appendTo(t), i = n.css("display");
            n.remove();
            if (i === "none" || i === "") {
                dt || (dt = F.createElement("iframe"), dt.frameBorder = dt.width = dt.height = 0), t.appendChild(dt);
                if (!pt || !dt.createElement)pt = (dt.contentWindow || dt.contentDocument).document, pt.write((F.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), pt.close();
                n = pt.createElement(e), pt.body.appendChild(n), i = D.css(n, "display"), t.removeChild(dt)
            }
            ft[e] = i
        }
        return ft[e]
    }

    function r(e, t) {
        var n = {};
        D.each(gt.concat.apply([], gt.slice(0, t)), function () {
            n[this] = e
        });
        return n
    }

    function a() {
        yt = t
    }

    function s() {
        setTimeout(a, 0);
        return yt = D.now()
    }

    function o() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function l() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function u(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var i = e.dataTypes, r = {}, a, s, o = i.length, l, u = i[0], c, f, d, p, h;
        for (a = 1; a < o; a++) {
            if (a === 1)for (s in e.converters)typeof s == "string" && (r[s.toLowerCase()] = e.converters[s]);
            c = u, u = i[a];
            if (u === "*")u = c; else if (c !== "*" && c !== u) {
                f = c + " " + u, d = r[f] || r["* " + u];
                if (!d) {
                    h = t;
                    for (p in r) {
                        l = p.split(" ");
                        if (l[0] === c || l[0] === "*") {
                            h = r[l[1] + " " + u];
                            if (h) {
                                p = r[p], p === !0 ? d = h : h === !0 && (d = p);
                                break
                            }
                        }
                    }
                }
                !d && !h && D.error("No conversion from " + f.replace(" ", " to ")), d !== !0 && (n = d ? d(n) : h(p(n)))
            }
        }
        return n
    }

    function c(e, n, i) {
        var r = e.contents, a = e.dataTypes, s = e.responseFields, o, l, u, c;
        for (l in s)l in i && (n[s[l]] = i[l]);
        while (a[0] === "*")a.shift(), o === t && (o = e.mimeType || n.getResponseHeader("content-type"));
        if (o)for (l in r)if (r[l] && r[l].test(o)) {
            a.unshift(l);
            break
        }
        if (a[0]in i)u = a[0]; else {
            for (l in i) {
                if (!a[0] || e.converters[l + " " + a[0]]) {
                    u = l;
                    break
                }
                c || (c = l)
            }
            u = u || c
        }
        if (u) {
            u !== a[0] && a.unshift(u);
            return i[u]
        }
    }

    function f(e, t, n, i) {
        if (D.isArray(t))D.each(t, function (t, r) {
            n || Ve.test(e) ? i(e, r) : f(e + "[" + (typeof r == "object" || D.isArray(r) ? t : "") + "]", r, n, i)
        }); else if (!n && t != null && typeof t == "object")for (var r in t)f(e + "[" + r + "]", t[r], n, i); else i(e, t)
    }

    function d(e, n, i, r, a, s) {
        a = a || n.dataTypes[0], s = s || {}, s[a] = !0;
        var o = e[a], l = 0, u = o ? o.length : 0, c = e === tt, f;
        for (; l < u && (c || !f); l++)f = o[l](n, i, r), typeof f == "string" && (!c || s[f] ? f = t : (n.dataTypes.unshift(f), f = d(e, n, i, r, f, s)));
        (c || !f) && !s["*"] && (f = d(e, n, i, r, "*", s));
        return f
    }

    function p(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (D.isFunction(n)) {
                var i = t.toLowerCase().split(Ke), r = 0, a = i.length, s, o, l;
                for (; r < a; r++)s = i[r], l = /^\+/.test(s), l && (s = s.substr(1) || "*"), o = e[s] = e[s] || [], o[l ? "unshift" : "push"](n)
            }
        }
    }

    function h(e, t, n) {
        var i = t === "width" ? e.offsetWidth : e.offsetHeight, r = t === "width" ? Oe : De;
        if (i > 0) {
            n !== "border" && D.each(r, function () {
                n || (i -= parseFloat(D.css(e, "padding" + this)) || 0), n === "margin" ? i += parseFloat(D.css(e, n + this)) || 0 : i -= parseFloat(D.css(e, "border" + this + "Width")) || 0
            });
            return i + "px"
        }
        i = Ie(e, t, t);
        if (i < 0 || i == null)i = e.style[t] || 0;
        i = parseFloat(i) || 0, n && D.each(r, function () {
            i += parseFloat(D.css(e, "padding" + this)) || 0, n !== "padding" && (i += parseFloat(D.css(e, "border" + this + "Width")) || 0), n === "margin" && (i += parseFloat(D.css(e, n + this)) || 0)
        });
        return i + "px"
    }

    function v(e, t) {
        t.src ? D.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : D.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Se, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function m(e) {
        D.nodeName(e, "input") ? g(e) : "getElementsByTagName"in e && D.grep(e.getElementsByTagName("input"), g)
    }

    function g(e) {
        if (e.type === "checkbox" || e.type === "radio")e.defaultChecked = e.checked
    }

    function y(e) {
        return "getElementsByTagName"in e ? e.getElementsByTagName("*") : "querySelectorAll"in e ? e.querySelectorAll("*") : []
    }

    function b(e, t) {
        var n;
        if (t.nodeType === 1) {
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase();
            if (n === "object")t.outerHTML = e.outerHTML; else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                if (n === "option")t.selected = e.defaultSelected; else if (n === "input" || n === "textarea")t.defaultValue = e.defaultValue
            } else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
            t.removeAttribute(D.expando)
        }
    }

    function w(e, t) {
        if (t.nodeType === 1 && !!D.hasData(e)) {
            var n = D.expando, i = D.data(e), r = D.data(t, i);
            if (i = i[n]) {
                var a = i.events;
                r = r[n] = D.extend({}, i);
                if (a) {
                    delete r.handle, r.events = {};
                    for (var s in a)for (var o = 0, l = a[s].length; o < l; o++)D.event.add(t, s + (a[s][o].namespace ? "." : "") + a[s][o].namespace, a[s][o], a[s][o].data)
                }
            }
        }
    }

    function T(e, t) {
        return D.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function _(e, t, n) {
        t = t || 0;
        if (D.isFunction(t))return D.grep(e, function (e, i) {
            var r = !!t.call(e, i, e);
            return r === n
        });
        if (t.nodeType)return D.grep(e, function (e, i) {
            return e === t === n
        });
        if (typeof t == "string") {
            var i = D.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (fe.test(t))return D.filter(t, i, !n);
            t = D.filter(t, i)
        }
        return D.grep(e, function (e, i) {
            return D.inArray(e, t) >= 0 === n
        })
    }

    function x(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function S(e, t) {
        return (e && e !== "*" ? e + "." : "") + t.replace(Z, "`").replace(Q, "&")
    }

    function j(e) {
        var t, n, i, r, a, s, o, l, u, c, f, d, p, h = [], v = [], m = D._data(this, "events");
        if (!(e.liveFired === this || !m || !m.live || e.target.disabled || e.button && e.type === "click")) {
            e.namespace && (d = new RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), e.liveFired = this;
            var g = m.live.slice(0);
            for (o = 0; o < g.length; o++)a = g[o], a.origType.replace(Y, "") === e.type ? v.push(a.selector) : g.splice(o--, 1);
            r = D(e.target).closest(v, e.currentTarget);
            for (l = 0, u = r.length; l < u; l++) {
                f = r[l];
                for (o = 0; o < g.length; o++) {
                    a = g[o];
                    if (f.selector === a.selector && (!d || d.test(a.namespace)) && !f.elem.disabled) {
                        s = f.elem, i = null;
                        if (a.preType === "mouseenter" || a.preType === "mouseleave")e.type = a.preType, i = D(e.relatedTarget).closest(a.selector)[0], i && D.contains(s, i) && (i = s);
                        (!i || i !== s) && h.push({elem: s, handleObj: a, level: f.level})
                    }
                }
            }
            for (l = 0, u = h.length; l < u; l++) {
                r = h[l];
                if (n && r.level > n)break;
                e.currentTarget = r.elem, e.data = r.handleObj.data, e.handleObj = r.handleObj, p = r.handleObj.origHandler.apply(r.elem, arguments);
                if (p === !1 || e.isPropagationStopped()) {
                    n = r.level, p === !1 && (t = !1);
                    if (e.isImmediatePropagationStopped())break
                }
            }
            return t
        }
    }

    function k(e, n, i) {
        var r = D.extend({}, i[0]);
        r.type = e, r.originalEvent = {}, r.liveFired = t, D.event.handle.call(n, r), r.isDefaultPrevented() && i[0].preventDefault()
    }

    function A() {
        return !0
    }

    function N() {
        return !1
    }

    function C(e, n, i) {
        var r = n + "defer", a = n + "queue", s = n + "mark", o = D.data(e, r, t, !0);
        o && (i === "queue" || !D.data(e, a, t, !0)) && (i === "mark" || !D.data(e, s, t, !0)) && setTimeout(function () {
            !D.data(e, a, t, !0) && !D.data(e, s, t, !0) && (D.removeData(e, r, !0), o.resolve())
        }, 0)
    }

    function E(e) {
        for (var t in e)if (t !== "toJSON")return !1;
        return !0
    }

    function L(e, n, i) {
        if (i === t && e.nodeType === 1) {
            var r = "data-" + n.replace(B, "$1-$2").toLowerCase();
            i = e.getAttribute(r);
            if (typeof i == "string") {
                try {
                    i = i === "true" ? !0 : i === "false" ? !1 : i === "null" ? null : D.isNaN(i) ? H.test(i) ? D.parseJSON(i) : i : parseFloat(i)
                } catch (a) {
                }
                D.data(e, n, i)
            } else i = t
        }
        return i
    }

    var F = e.document, P = e.navigator, O = e.location, D = function () {
        function n() {
            if (!i.isReady) {
                try {
                    F.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(n, 1);
                    return
                }
                i.ready()
            }
        }

        var i = function (e, t) {
            return new i.fn.init(e, t, s)
        }, r = e.polyvObject, a = e.$, s, o = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, l = /\S/, u = /^\s+/, c = /\s+$/, f = /\d/, d = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, p = /^[\],:{}\s]*$/, h = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, m = /(?:^|:|,)(?:\s*\[)+/g, g = /(webkit)[ \/]([\w.]+)/, y = /(opera)(?:.*version)?[ \/]([\w.]+)/, b = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, T = /-([a-z])/gi, _ = function (e, t) {
            return t.toUpperCase()
        }, x = P.userAgent, S, j, k, A = Object.prototype.toString, N = Object.prototype.hasOwnProperty, C = Array.prototype.push, E = Array.prototype.slice, L = String.prototype.trim, O = Array.prototype.indexOf, D = {};
        i.fn = i.prototype = {
            constructor: i, init: function (e, n, r) {
                var a, s, l, u;
                if (!e)return this;
                if (e.nodeType) {
                    this.context = this[0] = e, this.length = 1;
                    return this
                }
                if (e === "body" && !n && F.body) {
                    this.context = F, this[0] = F.body, this.selector = e, this.length = 1;
                    return this
                }
                if (typeof e == "string") {
                    e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? a = o.exec(e) : a = [null, e, null];
                    if (a && (a[1] || !n)) {
                        if (a[1]) {
                            n = n instanceof i ? n[0] : n, u = n ? n.ownerDocument || n : F, l = d.exec(e), l ? i.isPlainObject(n) ? (e = [F.createElement(l[1])], i.fn.attr.call(e, n, !0)) : e = [u.createElement(l[1])] : (l = i.buildFragment([a[1]], [u]), e = (l.cacheable ? i.clone(l.fragment) : l.fragment).childNodes);
                            return i.merge(this, e)
                        }
                        s = F.getElementById(a[2]);
                        if (s && s.parentNode) {
                            if (s.id !== a[2])return r.find(e);
                            this.length = 1, this[0] = s
                        }
                        this.context = F, this.selector = e;
                        return this
                    }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i.isFunction(e))return r.ready(e);
                e.selector !== t && (this.selector = e.selector, this.context = e.context);
                return i.makeArray(e, this)
            }, selector: "", jquery: "1.6.2", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return E.call(this, 0)
            }, get: function (e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            }, pushStack: function (e, t, n) {
                var r = this.constructor();
                i.isArray(e) ? C.apply(r, e) : i.merge(r, e), r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")");
                return r
            }, each: function (e, t) {
                return i.each(this, e, t)
            }, ready: function (e) {
                i.bindReady(), j.done(e);
                return this
            }, eq: function (e) {
                return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
            }, map: function (e) {
                return this.pushStack(i.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: C, sort: [].sort, splice: [].splice
        }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
            var e, n, r, a, s, o, l = arguments[0] || {}, u = 1, c = arguments.length, f = !1;
            typeof l == "boolean" && (f = l, l = arguments[1] || {}, u = 2), typeof l != "object" && !i.isFunction(l) && (l = {}), c === u && (l = this, --u);
            for (; u < c; u++)if ((e = arguments[u]) != null)for (n in e) {
                r = l[n], a = e[n];
                if (l === a)continue;
                f && a && (i.isPlainObject(a) || (s = i.isArray(a))) ? (s ? (s = !1, o = r && i.isArray(r) ? r : []) : o = r && i.isPlainObject(r) ? r : {}, l[n] = i.extend(f, o, a)) : a !== t && (l[n] = a)
            }
            return l
        }, i.extend({
            noConflict: function (t) {
                e.$ === i && (e.$ = a), t && e.polyvObject === i && (e.polyvObject = r);
                return i
            }, isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? i.readyWait++ : i.ready(!0)
            }, ready: function (e) {
                if (e === !0 && !--i.readyWait || e !== !0 && !i.isReady) {
                    if (!F.body)return setTimeout(i.ready, 1);
                    i.isReady = !0;
                    if (e !== !0 && --i.readyWait > 0)return;
                    j.resolveWith(F, [i]), i.fn.trigger && i(F).trigger("ready").unbind("ready")
                }
            }, bindReady: function () {
                if (!j) {
                    j = i._Deferred();
                    if (F.readyState === "complete")return setTimeout(i.ready, 1);
                    if (F.addEventListener)F.addEventListener("DOMContentLoaded", k, !1), e.addEventListener("load", i.ready, !1); else if (F.attachEvent) {
                        F.attachEvent("onreadystatechange", k), e.attachEvent("onload", i.ready);
                        var t = !1;
                        try {
                            t = e.frameElement == null
                        } catch (r) {
                        }
                        F.documentElement.doScroll && t && n()
                    }
                }
            }, isFunction: function (e) {
                return i.type(e) === "function"
            }, isArray: Array.isArray || function (e) {
                return i.type(e) === "array"
            }, isWindow: function (e) {
                return e && typeof e == "object" && "setInterval"in e
            }, isNaN: function (e) {
                return e == null || !f.test(e) || isNaN(e)
            }, type: function (e) {
                return e == null ? String(e) : D[A.call(e)] || "object"
            }, isPlainObject: function (e) {
                if (!e || i.type(e) !== "object" || e.nodeType || i.isWindow(e))return !1;
                if (e.constructor && !N.call(e, "constructor") && !N.call(e.constructor.prototype, "isPrototypeOf"))return !1;
                var n;
                for (n in e);
                return n === t || N.call(e, n)
            }, isEmptyObject: function (e) {
                for (var t in e)return !1;
                return !0
            }, error: function (e) {
                throw e
            }, parseJSON: function (t) {
                if (typeof t != "string" || !t)return null;
                t = i.trim(t);
                if (e.JSON && e.JSON.parse)return e.JSON.parse(t);
                if (p.test(t.replace(h, "@").replace(v, "]").replace(m, "")))return new Function("return " + t)();
                i.error("Invalid JSON: " + t)
            }, parseXML: function (t, n, r) {
                e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t)), r = n.documentElement, (!r || !r.nodeName || r.nodeName === "parsererror") && i.error("Invalid XML: " + t);
                return n
            }, noop: function () {
            }, globalEval: function (t) {
                t && l.test(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(T, _)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            }, each: function (e, n, r) {
                var a, s = 0, o = e.length, l = o === t || i.isFunction(e);
                if (r) {
                    if (l) {
                        for (a in e)if (n.apply(e[a], r) === !1)break
                    } else for (; s < o;)if (n.apply(e[s++], r) === !1)break
                } else if (l) {
                    for (a in e)if (n.call(e[a], a, e[a]) === !1)break
                } else for (; s < o;)if (n.call(e[s], s, e[s++]) === !1)break;
                return e
            }, trim: L ? function (e) {
                return e == null ? "" : L.call(e)
            } : function (e) {
                return e == null ? "" : (e + "").replace(u, "").replace(c, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                if (e != null) {
                    var r = i.type(e);
                    e.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(e) ? C.call(n, e) : i.merge(n, e)
                }
                return n
            }, inArray: function (e, t) {
                if (O)return O.call(t, e);
                for (var n = 0, i = t.length; n < i; n++)if (t[n] === e)return n;
                return -1
            }, merge: function (e, n) {
                var i = e.length, r = 0;
                if (typeof n.length == "number")for (var a = n.length; r < a; r++)e[i++] = n[r]; else while (n[r] !== t)e[i++] = n[r++];
                e.length = i;
                return e
            }, grep: function (e, t, n) {
                var i = [], r;
                n = !!n;
                for (var a = 0, s = e.length; a < s; a++)r = !!t(e[a], a), n !== r && i.push(e[a]);
                return i
            }, map: function (e, n, r) {
                var a, s, o = [], l = 0, u = e.length, c = e instanceof i || u !== t && typeof u == "number" && (u > 0 && e[0] && e[u - 1] || u === 0 || i.isArray(e));
                if (c)for (; l < u; l++)a = n(e[l], l, r), a != null && (o[o.length] = a); else for (s in e)a = n(e[s], s, r), a != null && (o[o.length] = a);
                return o.concat.apply([], o)
            }, guid: 1, proxy: function (e, n) {
                if (typeof n == "string") {
                    var r = e[n];
                    n = e, e = r
                }
                if (!i.isFunction(e))return t;
                var a = E.call(arguments, 2), s = function () {
                    return e.apply(n, a.concat(E.call(arguments)))
                };
                s.guid = e.guid = e.guid || s.guid || i.guid++;
                return s
            }, access: function (e, n, r, a, s, o) {
                var l = e.length;
                if (typeof n == "object") {
                    for (var u in n)i.access(e, u, n[u], a, s, r);
                    return e
                }
                if (r !== t) {
                    a = !o && a && i.isFunction(r);
                    for (var c = 0; c < l; c++)s(e[c], n, a ? r.call(e[c], c, s(e[c], n)) : r, o);
                    return e
                }
                return l ? s(e[0], n) : t
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (e) {
                e = e.toLowerCase();
                var t = g.exec(e) || y.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, sub: function () {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }

                i.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, r) {
                    r && r instanceof i && !(r instanceof e) && (r = e(r));
                    return i.fn.init.call(this, n, r, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(F);
                return e
            }, browser: {}
        }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            D["[object " + t + "]"] = t.toLowerCase()
        }), S = i.uaMatch(x), S.browser && (i.browser[S.browser] = !0, i.browser.version = S.version), i.browser.webkit && (i.browser.safari = !0), l.test(" ") && (u = /^[\s\xA0]+/, c = /[\s\xA0]+$/), s = i(F), F.addEventListener ? k = function () {
            F.removeEventListener("DOMContentLoaded", k, !1), i.ready()
        } : F.attachEvent && (k = function () {
            F.readyState === "complete" && (F.detachEvent("onreadystatechange", k), i.ready())
        });
        return i
    }(), I = "done fail isResolved isRejected promise then always pipe".split(" "), M = [].slice;
    D.extend({
        _Deferred: function () {
            var e = [], t, n, i, r = {
                done: function () {
                    if (!i) {
                        var n = arguments, a, s, o, l, u;
                        t && (u = t, t = 0);
                        for (a = 0, s = n.length; a < s; a++)o = n[a], l = D.type(o), l === "array" ? r.done.apply(r, o) : l === "function" && e.push(o);
                        u && r.resolveWith(u[0], u[1])
                    }
                    return this
                }, resolveWith: function (r, a) {
                    if (!i && !t && !n) {
                        a = a || [], n = 1;
                        try {
                            while (e[0])e.shift().apply(r, a)
                        } finally {
                            t = [r, a], n = 0
                        }
                    }
                    return this
                }, resolve: function () {
                    r.resolveWith(this, arguments);
                    return this
                }, isResolved: function () {
                    return !!n || !!t
                }, cancel: function () {
                    i = 1, e = [];
                    return this
                }
            };
            return r
        }, Deferred: function (e) {
            var t = D._Deferred(), n = D._Deferred(), i;
            D.extend(t, {
                then: function (e, n) {
                    t.done(e).fail(n);
                    return this
                },
                always: function () {
                    return t.done.apply(t, arguments).fail.apply(this, arguments)
                },
                fail: n.done,
                rejectWith: n.resolveWith,
                reject: n.resolve,
                isRejected: n.isResolved,
                pipe: function (e, n) {
                    return D.Deferred(function (i) {
                        D.each({done: [e, "resolve"], fail: [n, "reject"]}, function (e, n) {
                            var r = n[0], a = n[1], s;
                            D.isFunction(r) ? t[e](function () {
                                s = r.apply(this, arguments), s && D.isFunction(s.promise) ? s.promise().then(i.resolve, i.reject) : i[a](s)
                            }) : t[e](i[a])
                        })
                    }).promise()
                },
                promise: function (e) {
                    if (e == null) {
                        if (i)return i;
                        i = e = {}
                    }
                    var n = I.length;
                    while (n--)e[I[n]] = t[I[n]];
                    return e
                }
            }), t.done(n.cancel).fail(t.cancel), delete t.cancel, e && e.call(t, t);
            return t
        }, when: function (e) {
            function t(e) {
                return function (t) {
                    n[e] = arguments.length > 1 ? M.call(arguments, 0) : t, --a || s.resolveWith(s, M.call(n, 0))
                }
            }

            var n = arguments, i = 0, r = n.length, a = r, s = r <= 1 && e && D.isFunction(e.promise) ? e : D.Deferred();
            if (r > 1) {
                for (; i < r; i++)n[i] && D.isFunction(n[i].promise) ? n[i].promise().then(t(i), s.reject) : --a;
                a || s.resolveWith(s, n)
            } else s !== e && s.resolveWith(s, r ? [e] : []);
            return s.promise()
        }
    }), D.support = function () {
        var e = F.createElement("div"), t = F.documentElement, n, i, r, a, s, o, l, u, c, f, d, p, h, v, m, g, y;
        e.setAttribute("className", "t"), e.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("*"), i = e.getElementsByTagName("a")[0];
        if (!n || !n.length || !i)return {};
        r = F.createElement("select"), a = r.appendChild(F.createElement("option")), s = e.getElementsByTagName("input")[0], l = {
            leadingWhitespace: e.firstChild.nodeType === 3,
            tbody: !e.getElementsByTagName("tbody").length,
            htmlSerialize: !!e.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: i.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: s.value === "on",
            optSelected: a.selected,
            getSetAttribute: e.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, s.checked = !0, l.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, l.optDisabled = !a.disabled;
        try {
            delete e.test
        } catch (b) {
            l.deleteExpando = !1
        }
        !e.addEventListener && e.attachEvent && e.fireEvent && (e.attachEvent("onclick", function () {
            l.noCloneEvent = !1
        }), e.cloneNode(!0).fireEvent("onclick")), s = F.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), l.radioValue = s.value === "t", s.setAttribute("checked", "checked"), e.appendChild(s), u = F.createDocumentFragment(), u.appendChild(e.firstChild), l.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "", e.style.width = e.style.paddingLeft = "1px", c = F.getElementsByTagName("body")[0], d = F.createElement(c ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0
        }, c && D.extend(p, {position: "absolute", left: -1e3, top: -1e3});
        for (g in p)d.style[g] = p[g];
        d.appendChild(e), f = c || t, f.insertBefore(d, f.firstChild), l.appendChecked = s.checked, l.boxModel = e.offsetWidth === 2, "zoom"in e.style && (e.style.display = "inline", e.style.zoom = 1, l.inlineBlockNeedsLayout = e.offsetWidth === 2, e.style.display = "", e.innerHTML = "<div style='width:4px;'></div>", l.shrinkWrapBlocks = e.offsetWidth !== 2), e.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", h = e.getElementsByTagName("td"), y = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", l.reliableHiddenOffsets = y && h[0].offsetHeight === 0, e.innerHTML = "", F.defaultView && F.defaultView.getComputedStyle && (o = F.createElement("div"), o.style.width = "0", o.style.marginRight = "0", e.appendChild(o), l.reliableMarginRight = (parseInt((F.defaultView.getComputedStyle(o, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), d.innerHTML = "", f.removeChild(d);
        if (e.attachEvent)for (g in{
            submit: 1,
            change: 1,
            focusin: 1
        })m = "on" + g, y = m in e, y || (e.setAttribute(m, "return;"), y = typeof e[m] == "function"), l[g + "Bubbles"] = y;
        d = u = r = a = c = o = e = s = null;
        return l
    }(), D.boxModel = D.support.boxModel;
    var H = /^(?:\{.*\}|\[.*\])$/, B = /([a-z])([A-Z])/g;
    D.extend({
        cache: {},
        uuid: 0,
        expando: "polyvObject" + (D.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            e = e.nodeType ? D.cache[e[D.expando]] : e[D.expando];
            return !!e && !E(e)
        },
        data: function (e, n, i, r) {
            if (!!D.acceptData(e)) {
                var a = D.expando, s = typeof n == "string", o, l = e.nodeType, u = l ? D.cache : e, c = l ? e[D.expando] : e[D.expando] && D.expando;
                if ((!c || r && c && !u[c][a]) && s && i === t)return;
                c || (l ? e[D.expando] = c = ++D.uuid : c = D.expando), u[c] || (u[c] = {}, l || (u[c].toJSON = D.noop));
                if (typeof n == "object" || typeof n == "function")r ? u[c][a] = D.extend(u[c][a], n) : u[c] = D.extend(u[c], n);
                o = u[c], r && (o[a] || (o[a] = {}), o = o[a]), i !== t && (o[D.camelCase(n)] = i);
                if (n === "events" && !o[n])return o[a] && o[a].events;
                return s ? o[D.camelCase(n)] || o[n] : o
            }
        },
        removeData: function (t, n, i) {
            if (!!D.acceptData(t)) {
                var r = D.expando, a = t.nodeType, s = a ? D.cache : t, o = a ? t[D.expando] : D.expando;
                if (!s[o])return;
                if (n) {
                    var l = i ? s[o][r] : s[o];
                    if (l) {
                        delete l[n];
                        if (!E(l))return
                    }
                }
                if (i) {
                    delete s[o][r];
                    if (!E(s[o]))return
                }
                var u = s[o][r];
                D.support.deleteExpando || s != e ? delete s[o] : s[o] = null, u ? (s[o] = {}, a || (s[o].toJSON = D.noop), s[o][r] = u) : a && (D.support.deleteExpando ? delete t[D.expando] : t.removeAttribute ? t.removeAttribute(D.expando) : t[D.expando] = null)
            }
        },
        _data: function (e, t, n) {
            return D.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = D.noData[e.nodeName.toLowerCase()];
                if (t)return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), D.fn.extend({
        data: function (e, n) {
            var i = null;
            if (typeof e == "undefined") {
                if (this.length) {
                    i = D.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var r = this[0].attributes, a;
                        for (var s = 0, o = r.length; s < o; s++)a = r[s].name, a.indexOf("data-") === 0 && (a = D.camelCase(a.substring(5)), L(this[0], a, i[a]))
                    }
                }
                return i
            }
            if (typeof e == "object")return this.each(function () {
                D.data(this, e)
            });
            var l = e.split(".");
            l[1] = l[1] ? "." + l[1] : "";
            if (n === t) {
                i = this.triggerHandler("getData" + l[1] + "!", [l[0]]), i === t && this.length && (i = D.data(this[0], e), i = L(this[0], e, i));
                return i === t && l[1] ? this.data(l[0]) : i
            }
            return this.each(function () {
                var t = D(this), i = [l[0], n];
                t.triggerHandler("setData" + l[1] + "!", i), D.data(this, e, n), t.triggerHandler("changeData" + l[1] + "!", i)
            })
        }, removeData: function (e) {
            return this.each(function () {
                D.removeData(this, e)
            })
        }
    }), D.extend({
        _mark: function (e, n) {
            e && (n = (n || "fx") + "mark", D.data(e, n, (D.data(e, n, t, !0) || 0) + 1, !0))
        }, _unmark: function (e, n, i) {
            e !== !0 && (i = n, n = e, e = !1);
            if (n) {
                i = i || "fx";
                var r = i + "mark", a = e ? 0 : (D.data(n, r, t, !0) || 1) - 1;
                a ? D.data(n, r, a, !0) : (D.removeData(n, r, !0), C(n, i, "mark"))
            }
        }, queue: function (e, n, i) {
            if (e) {
                n = (n || "fx") + "queue";
                var r = D.data(e, n, t, !0);
                i && (!r || D.isArray(i) ? r = D.data(e, n, D.makeArray(i), !0) : r.push(i));
                return r || []
            }
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = D.queue(e, t), i = n.shift(), r;
            i === "inprogress" && (i = n.shift()), i && (t === "fx" && n.unshift("inprogress"), i.call(e, function () {
                D.dequeue(e, t)
            })), n.length || (D.removeData(e, t + "queue", !0), C(e, t, "queue"))
        }
    }), D.fn.extend({
        queue: function (e, n) {
            typeof e != "string" && (n = e, e = "fx");
            if (n === t)return D.queue(this[0], e);
            return this.each(function () {
                var t = D.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && D.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                D.dequeue(this, e)
            })
        }, delay: function (e, t) {
            e = D.fx ? D.fx.speeds[e] || e : e, t = t || "fx";
            return this.queue(t, function () {
                var n = this;
                setTimeout(function () {
                    D.dequeue(n, t)
                }, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            function i() {
                --o || r.resolveWith(a, [a])
            }

            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var r = D.Deferred(), a = this, s = a.length, o = 1, l = e + "defer", u = e + "queue", c = e + "mark", f;
            while (s--)if (f = D.data(a[s], l, t, !0) || (D.data(a[s], u, t, !0) || D.data(a[s], c, t, !0)) && D.data(a[s], l, D._Deferred(), !0))o++, f.done(i);
            i();
            return r.promise()
        }
    });
    var V = /[\n\t\r]/g, R = /\s+/, W = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, q = /^a(?:rea)?$/i, $ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, X = /\:|^on/, G, J;
    D.fn.extend({
        attr: function (e, t) {
            return D.access(this, e, t, !0, D.attr)
        }, removeAttr: function (e) {
            return this.each(function () {
                D.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return D.access(this, e, t, !0, D.prop)
        }, removeProp: function (e) {
            e = D.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, i, r, a, s, o;
            if (D.isFunction(e))return this.each(function (t) {
                D(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(R);
                for (n = 0, i = this.length; n < i; n++) {
                    r = this[n];
                    if (r.nodeType === 1)if (!r.className && t.length === 1)r.className = e; else {
                        a = " " + r.className + " ";
                        for (s = 0, o = t.length; s < o; s++)~a.indexOf(" " + t[s] + " ") || (a += t[s] + " ");
                        r.className = D.trim(a)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var n, i, r, a, s, o, l;
            if (D.isFunction(e))return this.each(function (t) {
                D(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(R);
                for (i = 0, r = this.length; i < r; i++) {
                    a = this[i];
                    if (a.nodeType === 1 && a.className)if (e) {
                        s = (" " + a.className + " ").replace(V, " ");
                        for (o = 0, l = n.length; o < l; o++)s = s.replace(" " + n[o] + " ", " ");
                        a.className = D.trim(s)
                    } else a.className = ""
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = typeof t == "boolean";
            if (D.isFunction(e))return this.each(function (n) {
                D(this).toggleClass(e.call(this, n, this.className, t), t)
            });
            return this.each(function () {
                if (n === "string") {
                    var r, a = 0, s = D(this), o = t, l = e.split(R);
                    while (r = l[a++])o = i ? o : !s.hasClass(r), s[o ? "addClass" : "removeClass"](r)
                } else if (n === "undefined" || n === "boolean")this.className && D._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : D._data(this, "__className__") || ""
            })
        }, hasClass: function (e) {
            var t = " " + e + " ";
            for (var n = 0, i = this.length; n < i; n++)if ((" " + this[n].className + " ").replace(V, " ").indexOf(t) > -1)return !0;
            return !1
        }, val: function (e) {
            var n, i, r = this[0];
            if (!arguments.length) {
                if (r) {
                    n = D.valHooks[r.nodeName.toLowerCase()] || D.valHooks[r.type];
                    if (n && "get"in n && (i = n.get(r, "value")) !== t)return i;
                    i = r.value;
                    return typeof i == "string" ? i.replace(W, "") : i == null ? "" : i
                }
                return t
            }
            var a = D.isFunction(e);
            return this.each(function (i) {
                var r = D(this), s;
                if (this.nodeType === 1) {
                    a ? s = e.call(this, i, r.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : D.isArray(s) && (s = D.map(s, function (e) {
                        return e == null ? "" : e + ""
                    })), n = D.valHooks[this.nodeName.toLowerCase()] || D.valHooks[this.type];
                    if (!n || !("set"in n) || n.set(this, s, "value") === t)this.value = s
                }
            })
        }
    }), D.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n = e.selectedIndex, i = [], r = e.options, a = e.type === "select-one";
                    if (n < 0)return null;
                    for (var s = a ? n : 0, o = a ? n + 1 : r.length; s < o; s++) {
                        var l = r[s];
                        if (l.selected && (D.support.optDisabled ? !l.disabled : l.getAttribute("disabled") === null) && (!l.parentNode.disabled || !D.nodeName(l.parentNode, "optgroup"))) {
                            t = D(l).val();
                            if (a)return t;
                            i.push(t)
                        }
                    }
                    if (a && !i.length && r.length)return D(r[n]).val();
                    return i
                }, set: function (e, t) {
                    var n = D.makeArray(t);
                    D(e).find("option").each(function () {
                        this.selected = D.inArray(D(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1);
                    return n
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attrFix: {tabindex: "tabIndex"},
        attr: function (e, n, i, r) {
            var a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2)return t;
            if (r && n in D.attrFn)return D(e)[n](i);
            if (!("getAttribute"in e))return D.prop(e, n, i);
            var s, o, l = a !== 1 || !D.isXMLDoc(e);
            l && (n = D.attrFix[n] || n, o = D.attrHooks[n], o || ($.test(n) ? o = J : G && n !== "className" && (D.nodeName(e, "form") || X.test(n)) && (o = G)));
            if (i !== t) {
                if (i === null) {
                    D.removeAttr(e, n);
                    return t
                }
                if (o && "set"in o && l && (s = o.set(e, i, n)) !== t)return s;
                e.setAttribute(n, "" + i);
                return i
            }
            if (o && "get"in o && l && (s = o.get(e, n)) !== null)return s;
            s = e.getAttribute(n);
            return s === null ? t : s
        },
        removeAttr: function (e, t) {
            var n;
            e.nodeType === 1 && (t = D.attrFix[t] || t, D.support.getSetAttribute ? e.removeAttribute(t) : (D.attr(e, t, ""), e.removeAttributeNode(e.getAttributeNode(t))), $.test(t) && (n = D.propFix[t] || t)in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (U.test(e.nodeName) && e.parentNode)D.error("type property can't be changed"); else if (!D.support.radioValue && t === "radio" && D.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t), n && (e.value = n);
                        return t
                    }
                }
            }, tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabIndex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || q.test(e.nodeName) && e.href ? 0 : t
                }
            }, value: {
                get: function (e, t) {
                    if (G && D.nodeName(e, "button"))return G.get(e, t);
                    return t in e ? e.value : null
                }, set: function (e, t, n) {
                    if (G && D.nodeName(e, "button"))return G.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, i) {
            var r = e.nodeType;
            if (!e || r === 3 || r === 8 || r === 2)return t;
            var a, s, o = r !== 1 || !D.isXMLDoc(e);
            o && (n = D.propFix[n] || n, s = D.propHooks[n]);
            return i !== t ? s && "set"in s && (a = s.set(e, i, n)) !== t ? a : e[n] = i : s && "get"in s && (a = s.get(e, n)) !== t ? a : e[n]
        },
        propHooks: {}
    }), J = {
        get: function (e, n) {
            return D.prop(e, n) ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            var i;
            t === !1 ? D.removeAttr(e, n) : (i = D.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase()));
            return n
        }
    }, D.support.getSetAttribute || (D.attrFix = D.propFix, G = D.attrHooks.name = D.attrHooks.title = D.valHooks.button = {
        get: function (e, n) {
            var i;
            i = e.getAttributeNode(n);
            return i && i.nodeValue !== "" ? i.nodeValue : t
        }, set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            if (i) {
                i.nodeValue = t;
                return t
            }
        }
    }, D.each(["width", "height"], function (e, t) {
        D.attrHooks[t] = D.extend(D.attrHooks[t], {
            set: function (e, n) {
                if (n === "") {
                    e.setAttribute(t, "auto");
                    return n
                }
            }
        })
    })), D.support.hrefNormalized || D.each(["href", "src", "width", "height"], function (e, n) {
        D.attrHooks[n] = D.extend(D.attrHooks[n], {
            get: function (e) {
                var i = e.getAttribute(n, 2);
                return i === null ? t : i
            }
        })
    }), D.support.style || (D.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        }, set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), D.support.optSelected || (D.propHooks.selected = D.extend(D.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    })), D.support.checkOn || D.each(["radio", "checkbox"], function () {
        D.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), D.each(["radio", "checkbox"], function () {
        D.valHooks[this] = D.extend(D.valHooks[this], {
            set: function (e, t) {
                if (D.isArray(t))return e.checked = D.inArray(D(e).val(), t) >= 0
            }
        })
    });
    var Y = /\.(.*)$/, K = /^(?:textarea|input|select)$/i, Z = /\./g, Q = / /g, ee = /[^\w\s.|`]/g, te = function (e) {
        return e.replace(ee, "\\$&")
    };
    D.event = {
        add: function (e, n, i, r) {
            if (e.nodeType !== 3 && e.nodeType !== 8) {
                if (i === !1)i = N; else if (!i)return;
                var a, s;
                i.handler && (a = i, i = a.handler), i.guid || (i.guid = D.guid++);
                var o = D._data(e);
                if (!o)return;
                var l = o.events, u = o.handle;
                l || (o.events = l = {}), u || (o.handle = u = function (e) {
                    return typeof D != "undefined" && (!e || D.event.triggered !== e.type) ? D.event.handle.apply(u.elem, arguments) : t
                }), u.elem = e, n = n.split(" ");
                var c, f = 0, d;
                while (c = n[f++]) {
                    s = a ? D.extend({}, a) : {
                        handler: i,
                        data: r
                    }, c.indexOf(".") > -1 ? (d = c.split("."), c = d.shift(), s.namespace = d.slice(0).sort().join(".")) : (d = [], s.namespace = ""), s.type = c, s.guid || (s.guid = i.guid);
                    var p = l[c], h = D.event.special[c] || {};
                    if (!p) {
                        p = l[c] = [];
                        if (!h.setup || h.setup.call(e, r, d, u) === !1)e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    h.add && (h.add.call(e, s), s.handler.guid || (s.handler.guid = i.guid)), p.push(s), D.event.global[c] = !0
                }
                e = null
            }
        },
        global: {},
        remove: function (e, n, i, r) {
            if (e.nodeType !== 3 && e.nodeType !== 8) {
                i === !1 && (i = N);
                var a, s, o, l, u = 0, c, f, d, p, h, v, m, g = D.hasData(e) && D._data(e), y = g && g.events;
                if (!g || !y)return;
                n && n.type && (i = n.handler, n = n.type);
                if (!n || typeof n == "string" && n.charAt(0) === ".") {
                    n = n || "";
                    for (s in y)D.event.remove(e, s + n);
                    return
                }
                n = n.split(" ");
                while (s = n[u++]) {
                    m = s, v = null, c = s.indexOf(".") < 0, f = [], c || (f = s.split("."), s = f.shift(), d = new RegExp("(^|\\.)" + D.map(f.slice(0).sort(), te).join("\\.(?:.*\\.)?") + "(\\.|$)")), h = y[s];
                    if (!h)continue;
                    if (!i) {
                        for (l = 0; l < h.length; l++) {
                            v = h[l];
                            if (c || d.test(v.namespace))D.event.remove(e, m, v.handler, l), h.splice(l--, 1)
                        }
                        continue
                    }
                    p = D.event.special[s] || {};
                    for (l = r || 0; l < h.length; l++) {
                        v = h[l];
                        if (i.guid === v.guid) {
                            if (c || d.test(v.namespace))r == null && h.splice(l--, 1), p.remove && p.remove.call(e, v);
                            if (r != null)break
                        }
                    }
                    if (h.length === 0 || r != null && h.length === 1)(!p.teardown || p.teardown.call(e, f) === !1) && D.removeEvent(e, s, g.handle),
                        a = null, delete y[s]
                }
                if (D.isEmptyObject(y)) {
                    var b = g.handle;
                    b && (b.elem = null), delete g.events, delete g.handle, D.isEmptyObject(g) && D.removeData(e, t, !0)
                }
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (n, i, r, a) {
            var s = n.type || n, o = [], l;
            s.indexOf("!") >= 0 && (s = s.slice(0, -1), l = !0), s.indexOf(".") >= 0 && (o = s.split("."), s = o.shift(), o.sort());
            if (!!r && !D.event.customEvent[s] || !!D.event.global[s]) {
                n = typeof n == "object" ? n[D.expando] ? n : new D.Event(s, n) : new D.Event(s), n.type = s, n.exclusive = l, n.namespace = o.join("."), n.namespace_re = new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (a || !r)n.preventDefault(), n.stopPropagation();
                if (!r) {
                    D.each(D.cache, function () {
                        var e = D.expando, t = this[e];
                        t && t.events && t.events[s] && D.event.trigger(n, i, t.handle.elem)
                    });
                    return
                }
                if (r.nodeType === 3 || r.nodeType === 8)return;
                n.result = t, n.target = r, i = i != null ? D.makeArray(i) : [], i.unshift(n);
                var u = r, c = s.indexOf(":") < 0 ? "on" + s : "";
                do {
                    var f = D._data(u, "handle");
                    n.currentTarget = u, f && f.apply(u, i), c && D.acceptData(u) && u[c] && u[c].apply(u, i) === !1 && (n.result = !1, n.preventDefault()), u = u.parentNode || u.ownerDocument || u === n.target.ownerDocument && e
                } while (u && !n.isPropagationStopped());
                if (!n.isDefaultPrevented()) {
                    var d, p = D.event.special[s] || {};
                    if ((!p._default || p._default.call(r.ownerDocument, n) === !1) && (s !== "click" || !D.nodeName(r, "a")) && D.acceptData(r)) {
                        try {
                            c && r[s] && (d = r[c], d && (r[c] = null), D.event.triggered = s, r[s]())
                        } catch (h) {
                        }
                        d && (r[c] = d), D.event.triggered = t
                    }
                }
                return n.result
            }
        },
        handle: function (n) {
            n = D.event.fix(n || e.event);
            var i = ((D._data(this, "events") || {})[n.type] || []).slice(0), r = !n.exclusive && !n.namespace, a = Array.prototype.slice.call(arguments, 0);
            a[0] = n, n.currentTarget = this;
            for (var s = 0, o = i.length; s < o; s++) {
                var l = i[s];
                if (r || n.namespace_re.test(l.namespace)) {
                    n.handler = l.handler, n.data = l.data, n.handleObj = l;
                    var u = l.handler.apply(this, a);
                    u !== t && (n.result = u, u === !1 && (n.preventDefault(), n.stopPropagation()));
                    if (n.isImmediatePropagationStopped())break
                }
            }
            return n.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (e) {
            if (e[D.expando])return e;
            var n = e;
            e = D.Event(n);
            for (var i = this.props.length, r; i;)r = this.props[--i], e[r] = n[r];
            e.target || (e.target = e.srcElement || F), e.target.nodeType === 3 && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement);
            if (e.pageX == null && e.clientX != null) {
                var a = e.target.ownerDocument || F, s = a.documentElement, o = a.body;
                e.pageX = e.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = e.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)
            }
            e.which == null && (e.charCode != null || e.keyCode != null) && (e.which = e.charCode != null ? e.charCode : e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), !e.which && e.button !== t && (e.which = e.button & 1 ? 1 : e.button & 2 ? 3 : e.button & 4 ? 2 : 0);
            return e
        },
        guid: 1e8,
        proxy: D.proxy,
        special: {
            ready: {setup: D.bindReady, teardown: D.noop}, live: {
                add: function (e) {
                    D.event.add(this, S(e.origType, e.selector), D.extend({}, e, {handler: j, guid: e.handler.guid}))
                }, remove: function (e) {
                    D.event.remove(this, S(e.origType, e.selector), e)
                }
            }, beforeunload: {
                setup: function (e, t, n) {
                    D.isWindow(this) && (this.onbeforeunload = n)
                }, teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        }
    }, D.removeEvent = F.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, D.Event = function (e, t) {
        if (!this.preventDefault)return new D.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? A : N) : this.type = e, t && D.extend(this, t), this.timeStamp = D.now(), this[D.expando] = !0
    }, D.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = A;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = A;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = A, this.stopPropagation()
        }, isDefaultPrevented: N, isPropagationStopped: N, isImmediatePropagationStopped: N
    };
    var ne = function (e) {
        var t = e.relatedTarget, n = !1, i = e.type;
        e.type = e.data, t !== this && (t && (n = D.contains(this, t)), n || (D.event.handle.apply(this, arguments), e.type = i))
    }, ie = function (e) {
        e.type = e.data, D.event.handle.apply(this, arguments)
    };
    D.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        D.event.special[e] = {
            setup: function (n) {
                D.event.add(this, t, n && n.selector ? ie : ne, e)
            }, teardown: function (e) {
                D.event.remove(this, t, e && e.selector ? ie : ne)
            }
        }
    }), D.support.submitBubbles || (D.event.special.submit = {
        setup: function (e, t) {
            if (!D.nodeName(this, "form"))D.event.add(this, "click.specialSubmit", function (e) {
                var t = e.target, n = t.type;
                (n === "submit" || n === "image") && D(t).closest("form").length && k("submit", this, arguments)
            }), D.event.add(this, "keypress.specialSubmit", function (e) {
                var t = e.target, n = t.type;
                (n === "text" || n === "password") && D(t).closest("form").length && e.keyCode === 13 && k("submit", this, arguments)
            }); else return !1
        }, teardown: function (e) {
            D.event.remove(this, ".specialSubmit")
        }
    });
    if (!D.support.changeBubbles) {
        var re, ae = function (e) {
            var t = e.type, n = e.value;
            t === "radio" || t === "checkbox" ? n = e.checked : t === "select-multiple" ? n = e.selectedIndex > -1 ? D.map(e.options, function (e) {
                return e.selected
            }).join("-") : "" : D.nodeName(e, "select") && (n = e.selectedIndex);
            return n
        }, se = function (e) {
            var n = e.target, i, r;
            if (!!K.test(n.nodeName) && !n.readOnly) {
                i = D._data(n, "_change_data"), r = ae(n), (e.type !== "focusout" || n.type !== "radio") && D._data(n, "_change_data", r);
                if (i === t || r === i)return;
                if (i != null || r)e.type = "change", e.liveFired = t, D.event.trigger(e, arguments[1], n)
            }
        };
        D.event.special.change = {
            filters: {
                focusout: se, beforedeactivate: se, click: function (e) {
                    var t = e.target, n = D.nodeName(t, "input") ? t.type : "";
                    (n === "radio" || n === "checkbox" || D.nodeName(t, "select")) && se.call(this, e)
                }, keydown: function (e) {
                    var t = e.target, n = D.nodeName(t, "input") ? t.type : "";
                    (e.keyCode === 13 && !D.nodeName(t, "textarea") || e.keyCode === 32 && (n === "checkbox" || n === "radio") || n === "select-multiple") && se.call(this, e)
                }, beforeactivate: function (e) {
                    var t = e.target;
                    D._data(t, "_change_data", ae(t))
                }
            }, setup: function (e, t) {
                if (this.type === "file")return !1;
                for (var n in re)D.event.add(this, n + ".specialChange", re[n]);
                return K.test(this.nodeName)
            }, teardown: function (e) {
                D.event.remove(this, ".specialChange");
                return K.test(this.nodeName)
            }
        }, re = D.event.special.change.filters, re.focus = re.beforeactivate
    }
    D.support.focusinBubbles || D.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        function n(e) {
            var n = D.event.fix(e);
            n.type = t, n.originalEvent = {}, D.event.trigger(n, null, n.target), n.isDefaultPrevented() && e.preventDefault()
        }

        var i = 0;
        D.event.special[t] = {
            setup: function () {
                i++ === 0 && F.addEventListener(e, n, !0)
            }, teardown: function () {
                --i === 0 && F.removeEventListener(e, n, !0)
            }
        }
    }), D.each(["bind", "one"], function (e, n) {
        D.fn[n] = function (e, i, r) {
            var a;
            if (typeof e == "object") {
                for (var s in e)this[n](s, i, e[s], r);
                return this
            }
            if (arguments.length === 2 || i === !1)r = i, i = t;
            n === "one" ? (a = function (e) {
                D(this).unbind(e, a);
                return r.apply(this, arguments)
            }, a.guid = r.guid || D.guid++) : a = r;
            if (e === "unload" && n !== "one")this.one(e, i, r); else for (var o = 0, l = this.length; o < l; o++)D.event.add(this[o], e, a, i);
            return this
        }
    }), D.fn.extend({
        unbind: function (e, t) {
            if (typeof e == "object" && !e.preventDefault)for (var n in e)this.unbind(n, e[n]); else for (var i = 0, r = this.length; i < r; i++)D.event.remove(this[i], e, t);
            return this
        }, delegate: function (e, t, n, i) {
            return this.live(t, n, i, e)
        }, undelegate: function (e, t, n) {
            return arguments.length === 0 ? this.unbind("live") : this.die(t, null, n, e)
        }, trigger: function (e, t) {
            return this.each(function () {
                D.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            if (this[0])return D.event.trigger(e, t, this[0], !0)
        }, toggle: function (e) {
            var t = arguments, n = e.guid || D.guid++, i = 0, r = function (n) {
                var r = (D.data(this, "lastToggle" + e.guid) || 0) % i;
                D.data(this, "lastToggle" + e.guid, r + 1), n.preventDefault();
                return t[r].apply(this, arguments) || !1
            };
            r.guid = n;
            while (i < t.length)t[i++].guid = n;
            return this.click(r)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var oe = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    D.each(["live", "die"], function (e, n) {
        D.fn[n] = function (e, i, r, a) {
            var s, o = 0, l, u, c, f = a || this.selector, d = a ? this : D(this.context);
            if (typeof e == "object" && !e.preventDefault) {
                for (var p in e)d[n](p, i, e[p], f);
                return this
            }
            if (n === "die" && !e && a && a.charAt(0) === ".") {
                d.unbind(a);
                return this
            }
            if (i === !1 || D.isFunction(i))r = i || N, i = t;
            e = (e || "").split(" ");
            while ((s = e[o++]) != null) {
                l = Y.exec(s), u = "", l && (u = l[0], s = s.replace(Y, ""));
                if (s === "hover") {
                    e.push("mouseenter" + u, "mouseleave" + u);
                    continue
                }
                c = s, oe[s] ? (e.push(oe[s] + u), s = s + u) : s = (oe[s] || s) + u;
                if (n === "live")for (var h = 0, v = d.length; h < v; h++)D.event.add(d[h], "live." + S(s, f), {
                    data: i,
                    selector: f,
                    handler: r,
                    origType: s,
                    origHandler: r,
                    preType: c
                }); else d.unbind("live." + S(s, f), r)
            }
            return this
        }
    }), D.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (e, t) {
        D.fn[t] = function (e, n) {
            n == null && (n = e, e = null);
            return arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
        }, D.attrFn && (D.attrFn[t] = !0)
    }), function () {
        function e(e, t, n, i, r, a) {
            for (var s = 0, o = i.length; s < o; s++) {
                var l = i[s];
                if (l) {
                    var u = !1;
                    l = l[e];
                    while (l) {
                        if (l.sizcache === n) {
                            u = i[l.sizset];
                            break
                        }
                        if (l.nodeType === 1) {
                            a || (l.sizcache = n, l.sizset = s);
                            if (typeof t != "string") {
                                if (l === t) {
                                    u = !0;
                                    break
                                }
                            } else if (c.filter(t, [l]).length > 0) {
                                u = l;
                                break
                            }
                        }
                        l = l[e]
                    }
                    i[s] = u
                }
            }
        }

        function n(e, t, n, i, r, a) {
            for (var s = 0, o = i.length; s < o; s++) {
                var l = i[s];
                if (l) {
                    var u = !1;
                    l = l[e];
                    while (l) {
                        if (l.sizcache === n) {
                            u = i[l.sizset];
                            break
                        }
                        l.nodeType === 1 && !a && (l.sizcache = n, l.sizset = s);
                        if (l.nodeName.toLowerCase() === t) {
                            u = l;
                            break
                        }
                        l = l[e]
                    }
                    i[s] = u
                }
            }
        }

        var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, r = 0, a = Object.prototype.toString, s = !1, o = !0, l = /\\/g, u = /\W/;
        [0, 0].sort(function () {
            o = !1;
            return 0
        });
        var c = function (e, t, n, r) {
            n = n || [], t = t || F;
            var s = t;
            if (t.nodeType !== 1 && t.nodeType !== 9)return [];
            if (!e || typeof e != "string")return n;
            var o, l, u, p, h, m, g, y, w = !0, T = c.isXML(t), _ = [], x = e;
            do {
                i.exec(""), o = i.exec(x);
                if (o) {
                    x = o[3], _.push(o[1]);
                    if (o[2]) {
                        p = o[3];
                        break
                    }
                }
            } while (o);
            if (_.length > 1 && d.exec(e))if (_.length === 2 && f.relative[_[0]])l = b(_[0] + _[1], t); else {
                l = f.relative[_[0]] ? [t] : c(_.shift(), t);
                while (_.length)e = _.shift(), f.relative[e] && (e += _.shift()), l = b(e, l)
            } else {
                !r && _.length > 1 && t.nodeType === 9 && !T && f.match.ID.test(_[0]) && !f.match.ID.test(_[_.length - 1]) && (h = c.find(_.shift(), t, T), t = h.expr ? c.filter(h.expr, h.set)[0] : h.set[0]);
                if (t) {
                    h = r ? {
                        expr: _.pop(),
                        set: v(r)
                    } : c.find(_.pop(), _.length === 1 && (_[0] === "~" || _[0] === "+") && t.parentNode ? t.parentNode : t, T), l = h.expr ? c.filter(h.expr, h.set) : h.set, _.length > 0 ? u = v(l) : w = !1;
                    while (_.length)m = _.pop(), g = m, f.relative[m] ? g = _.pop() : m = "", g == null && (g = t), f.relative[m](u, g, T)
                } else u = _ = []
            }
            u || (u = l), u || c.error(m || e);
            if (a.call(u) === "[object Array]")if (!w)n.push.apply(n, u); else if (t && t.nodeType === 1)for (y = 0; u[y] != null; y++)u[y] && (u[y] === !0 || u[y].nodeType === 1 && c.contains(t, u[y])) && n.push(l[y]); else for (y = 0; u[y] != null; y++)u[y] && u[y].nodeType === 1 && n.push(l[y]); else v(u, n);
            p && (c(p, s, n, r), c.uniqueSort(n));
            return n
        };
        c.uniqueSort = function (e) {
            if (g) {
                s = o, e.sort(g);
                if (s)for (var t = 1; t < e.length; t++)e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, c.matches = function (e, t) {
            return c(e, null, null, t)
        }, c.matchesSelector = function (e, t) {
            return c(t, null, null, [e]).length > 0
        }, c.find = function (e, t, n) {
            var i;
            if (!e)return [];
            for (var r = 0, a = f.order.length; r < a; r++) {
                var s, o = f.order[r];
                if (s = f.leftMatch[o].exec(e)) {
                    var u = s[1];
                    s.splice(1, 1);
                    if (u.substr(u.length - 1) !== "\\") {
                        s[1] = (s[1] || "").replace(l, ""), i = f.find[o](s, t, n);
                        if (i != null) {
                            e = e.replace(f.match[o], "");
                            break
                        }
                    }
                }
            }
            i || (i = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []);
            return {set: i, expr: e}
        }, c.filter = function (e, n, i, r) {
            var a, s, o = e, l = [], u = n, d = n && n[0] && c.isXML(n[0]);
            while (e && n.length) {
                for (var p in f.filter)if ((a = f.leftMatch[p].exec(e)) != null && a[2]) {
                    var h, v, m = f.filter[p], g = a[1];
                    s = !1, a.splice(1, 1);
                    if (g.substr(g.length - 1) === "\\")continue;
                    u === l && (l = []);
                    if (f.preFilter[p]) {
                        a = f.preFilter[p](a, u, i, l, r, d);
                        if (!a)s = h = !0; else if (a === !0)continue
                    }
                    if (a)for (var y = 0; (v = u[y]) != null; y++)if (v) {
                        h = m(v, a, y, u);
                        var b = r ^ !!h;
                        i && h != null ? b ? s = !0 : u[y] = !1 : b && (l.push(v), s = !0)
                    }
                    if (h !== t) {
                        i || (u = l), e = e.replace(f.match[p], "");
                        if (!s)return [];
                        break
                    }
                }
                if (e === o)if (s == null)c.error(e); else break;
                o = e
            }
            return u
        }, c.error = function (e) {
            throw"Syntax error, unrecognized expression: " + e
        };
        var f = c.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var n = typeof t == "string", i = n && !u.test(t), r = n && !i;
                    i && (t = t.toLowerCase());
                    for (var a = 0, s = e.length, o; a < s; a++)if (o = e[a]) {
                        while ((o = o.previousSibling) && o.nodeType !== 1);
                        e[a] = r || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                    }
                    r && c.filter(t, e, !0)
                }, ">": function (e, t) {
                    var n, i = typeof t == "string", r = 0, a = e.length;
                    if (i && !u.test(t)) {
                        t = t.toLowerCase();
                        for (; r < a; r++) {
                            n = e[r];
                            if (n) {
                                var s = n.parentNode;
                                e[r] = s.nodeName.toLowerCase() === t ? s : !1
                            }
                        }
                    } else {
                        for (; r < a; r++)n = e[r], n && (e[r] = i ? n.parentNode : n.parentNode === t);
                        i && c.filter(t, e, !0)
                    }
                }, "": function (t, i, a) {
                    var s, o = r++, l = e;
                    typeof i == "string" && !u.test(i) && (i = i.toLowerCase(), s = i, l = n), l("parentNode", i, o, t, s, a)
                }, "~": function (t, i, a) {
                    var s, o = r++, l = e;
                    typeof i == "string" && !u.test(i) && (i = i.toLowerCase(), s = i, l = n), l("previousSibling", i, o, t, s, a)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if (typeof t.getElementById != "undefined" && !n) {
                        var i = t.getElementById(e[1]);
                        return i && i.parentNode ? [i] : []
                    }
                }, NAME: function (e, t) {
                    if (typeof t.getElementsByName != "undefined") {
                        var n = [], i = t.getElementsByName(e[1]);
                        for (var r = 0, a = i.length; r < a; r++)i[r].getAttribute("name") === e[1] && n.push(i[r]);
                        return n.length === 0 ? null : n
                    }
                }, TAG: function (e, t) {
                    if (typeof t.getElementsByTagName != "undefined")return t.getElementsByTagName(e[1])
                }
            },
            preFilter: {
                CLASS: function (e, t, n, i, r, a) {
                    e = " " + e[1].replace(l, "") + " ";
                    if (a)return e;
                    for (var s = 0, o; (o = t[s]) != null; s++)o && (r ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(o) : n && (t[s] = !1));
                    return !1
                }, ID: function (e) {
                    return e[1].replace(l, "")
                }, TAG: function (e, t) {
                    return e[1].replace(l, "").toLowerCase()
                }, CHILD: function (e) {
                    if (e[1] === "nth") {
                        e[2] || c.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else e[2] && c.error(e[0]);
                    e[0] = r++;
                    return e
                }, ATTR: function (e, t, n, i, r, a) {
                    var s = e[1] = e[1].replace(l, "");
                    !a && f.attrMap[s] && (e[1] = f.attrMap[s]), e[4] = (e[4] || e[5] || "").replace(l, ""), e[2] === "~=" && (e[4] = " " + e[4] + " ");
                    return e
                }, PSEUDO: function (e, t, n, r, a) {
                    if (e[1] === "not")if ((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))e[3] = c(e[3], null, null, t); else {
                        var s = c.filter(e[3], t, n, !0 ^ a);
                        n || r.push.apply(r, s);
                        return !1
                    } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0]))return !0;
                    return e
                }, POS: function (e) {
                    e.unshift(!0);
                    return e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && e.type !== "hidden"
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    return e.checked === !0
                }, selected: function (e) {
                    e.parentNode && e.parentNode.selectedIndex;
                    return e.selected === !0
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (e, t, n) {
                    return !!c(n[3], e).length
                }, header: function (e) {
                    return /h\d/i.test(e.nodeName)
                }, text: function (e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                }, radio: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                }, checkbox: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                }, file: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                }, password: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                }, submit: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === e.type
                }, image: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                }, reset: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === e.type
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && "button" === e.type || t === "button"
                }, input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }, focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (e, t) {
                    return t === 0
                }, last: function (e, t, n, i) {
                    return t === i.length - 1
                }, even: function (e, t) {
                    return t % 2 === 0
                }, odd: function (e, t) {
                    return t % 2 === 1
                }, lt: function (e, t, n) {
                    return t < n[3] - 0
                }, gt: function (e, t, n) {
                    return t > n[3] - 0
                }, nth: function (e, t, n) {
                    return n[3] - 0 === t
                }, eq: function (e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, i) {
                    var r = t[1], a = f.filters[r];
                    if (a)return a(e, n, t, i);
                    if (r === "contains")return (e.textContent || e.innerText || c.getText([e]) || "").indexOf(t[3]) >= 0;
                    if (r === "not") {
                        var s = t[3];
                        for (var o = 0, l = s.length; o < l; o++)if (s[o] === e)return !1;
                        return !0
                    }
                    c.error(r)
                }, CHILD: function (e, t) {
                    var n = t[1], i = e;
                    switch (n) {
                        case"only":
                        case"first":
                            while (i = i.previousSibling)if (i.nodeType === 1)return !1;
                            if (n === "first")return !0;
                            i = e;
                        case"last":
                            while (i = i.nextSibling)if (i.nodeType === 1)return !1;
                            return !0;
                        case"nth":
                            var r = t[2], a = t[3];
                            if (r === 1 && a === 0)return !0;
                            var s = t[0], o = e.parentNode;
                            if (o && (o.sizcache !== s || !e.nodeIndex)) {
                                var l = 0;
                                for (i = o.firstChild; i; i = i.nextSibling)i.nodeType === 1 && (i.nodeIndex = ++l);
                                o.sizcache = s
                            }
                            var u = e.nodeIndex - a;
                            return r === 0 ? u === 0 : u % r === 0 && u / r >= 0
                    }
                }, ID: function (e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t
                }, TAG: function (e, t) {
                    return t === "*" && e.nodeType === 1 || e.nodeName.toLowerCase() === t
                }, CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                }, ATTR: function (e, t) {
                    var n = t[1], i = f.attrHandle[n] ? f.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n), r = i + "", a = t[2], s = t[4];
                    return i == null ? a === "!=" : a === "=" ? r === s : a === "*=" ? r.indexOf(s) >= 0 : a === "~=" ? (" " + r + " ").indexOf(s) >= 0 : s ? a === "!=" ? r !== s : a === "^=" ? r.indexOf(s) === 0 : a === "$=" ? r.substr(r.length - s.length) === s : a === "|=" ? r === s || r.substr(0, s.length + 1) === s + "-" : !1 : r && i !== !1
                }, POS: function (e, t, n, i) {
                    var r = t[2], a = f.setFilters[r];
                    if (a)return a(e, n, t, i)
                }
            }
        }, d = f.match.POS, p = function (e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var h in f.match)f.match[h] = new RegExp(f.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), f.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[h].source.replace(/\\(\d+)/g, p));
        var v = function (e, t) {
            e = Array.prototype.slice.call(e, 0);
            if (t) {
                t.push.apply(t, e);
                return t
            }
            return e
        };
        try {
            Array.prototype.slice.call(F.documentElement.childNodes, 0)[0].nodeType
        } catch (m) {
            v = function (e, t) {
                var n = 0, i = t || [];
                if (a.call(e) === "[object Array]")Array.prototype.push.apply(i, e); else if (typeof e.length == "number")for (var r = e.length; n < r; n++)i.push(e[n]); else for (; e[n]; n++)i.push(e[n]);
                return i
            }
        }
        var g, y;
        F.documentElement.compareDocumentPosition ? g = function (e, t) {
            if (e === t) {
                s = !0;
                return 0
            }
            if (!e.compareDocumentPosition || !t.compareDocumentPosition)return e.compareDocumentPosition ? -1 : 1;
            return e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (g = function (e, t) {
            if (e === t) {
                s = !0;
                return 0
            }
            if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
            var n, i, r = [], a = [], o = e.parentNode, l = t.parentNode, u = o;
            if (o === l)return y(e, t);
            if (!o)return -1;
            if (!l)return 1;
            while (u)r.unshift(u), u = u.parentNode;
            u = l;
            while (u)a.unshift(u), u = u.parentNode;
            n = r.length, i = a.length;
            for (var c = 0; c < n && c < i; c++)if (r[c] !== a[c])return y(r[c], a[c]);
            return c === n ? y(e, a[c], -1) : y(r[c], t, 1)
        }, y = function (e, t, n) {
            if (e === t)return n;
            var i = e.nextSibling;
            while (i) {
                if (i === t)return -1;
                i = i.nextSibling
            }
            return 1
        }), c.getText = function (e) {
            var t = "", n;
            for (var i = 0; e[i]; i++)n = e[i], n.nodeType === 3 || n.nodeType === 4 ? t += n.nodeValue : n.nodeType !== 8 && (t += c.getText(n.childNodes));
            return t
        }, function () {
            var e = F.createElement("div"), n = "script" + (new Date).getTime(), i = F.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), F.getElementById(n) && (f.find.ID = function (e, n, i) {
                if (typeof n.getElementById != "undefined" && !i) {
                    var r = n.getElementById(e[1]);
                    return r ? r.id === e[1] || typeof r.getAttributeNode != "undefined" && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                }
            }, f.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), i.removeChild(e), i = e = null
        }(), function () {
            var e = F.createElement("div");
            e.appendChild(F.createComment("")), e.getElementsByTagName("*").length > 0 && (f.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var i = [];
                    for (var r = 0; n[r]; r++)n[r].nodeType === 1 && i.push(n[r]);
                    n = i
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (f.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), F.querySelectorAll && function () {
            var e = c, t = F.createElement("div"), n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                c = function (t, i, r, a) {
                    i = i || F;
                    if (!a && !c.isXML(i)) {
                        var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (s && (i.nodeType === 1 || i.nodeType === 9)) {
                            if (s[1])return v(i.getElementsByTagName(t), r);
                            if (s[2] && f.find.CLASS && i.getElementsByClassName)return v(i.getElementsByClassName(s[2]), r)
                        }
                        if (i.nodeType === 9) {
                            if (t === "body" && i.body)return v([i.body], r);
                            if (s && s[3]) {
                                var o = i.getElementById(s[3]);
                                if (!o || !o.parentNode)return v([], r);
                                if (o.id === s[3])return v([o], r)
                            }
                            try {
                                return v(i.querySelectorAll(t), r)
                            } catch (l) {
                            }
                        } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            var u = i, d = i.getAttribute("id"), p = d || n, h = i.parentNode, m = /^\s*[+~]/.test(t);
                            d ? p = p.replace(/'/g, "\\$&") : i.setAttribute("id", p), m && h && (i = i.parentNode);
                            try {
                                if (!m || h)return v(i.querySelectorAll("[id='" + p + "'] " + t), r)
                            } catch (g) {
                            } finally {
                                d || u.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, i, r, a)
                };
                for (var i in e)c[i] = e[i];
                t = null
            }
        }(), function () {
            var e = F.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(F.createElement("div"), "div"), i = !1;
                try {
                    t.call(F.documentElement, "[test!='']:sizzle")
                } catch (r) {
                    i = !0
                }
                c.matchesSelector = function (e, r) {
                    r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!c.isXML(e))try {
                        if (i || !f.match.PSEUDO.test(r) && !/!=/.test(r)) {
                            var a = t.call(e, r);
                            if (a || !n || e.document && e.document.nodeType !== 11)return a
                        }
                    } catch (s) {
                    }
                    return c(r, null, null, [e]).length > 0
                }
            }
        }(), function () {
            var e = F.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1)return;
                f.order.splice(1, 0, "CLASS"), f.find.CLASS = function (e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n)return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), F.documentElement.contains ? c.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : F.documentElement.compareDocumentPosition ? c.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : c.contains = function () {
            return !1
        }, c.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var b = function (e, t) {
            var n, i = [], r = "", a = t.nodeType ? [t] : t;
            while (n = f.match.PSEUDO.exec(e))r += n[0], e = e.replace(f.match.PSEUDO, "");
            e = f.relative[e] ? e + "*" : e;
            for (var s = 0, o = a.length; s < o; s++)c(e, a[s], i);
            return c.filter(r, i)
        };
        D.find = c, D.expr = c.selectors, D.expr[":"] = D.expr.filters, D.unique = c.uniqueSort, D.text = c.getText, D.isXMLDoc = c.isXML, D.contains = c.contains
    }();
    var le = /Until$/, ue = /^(?:parents|prevUntil|prevAll)/, ce = /,/, fe = /^.[^:#\[\.,]*$/, de = Array.prototype.slice, pe = D.expr.match.POS, he = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    D.fn.extend({
        find: function (e) {
            var t = this, n, i;
            if (typeof e != "string")return D(e).filter(function () {
                for (n = 0, i = t.length; n < i; n++)if (D.contains(t[n], this))return !0
            });
            var r = this.pushStack("", "find", e), a, s, o;
            for (n = 0, i = this.length; n < i; n++) {
                a = r.length, D.find(e, this[n], r);
                if (n > 0)for (s = a; s < r.length; s++)for (o = 0; o < a; o++)if (r[o] === r[s]) {
                    r.splice(s--, 1);
                    break
                }
            }
            return r
        }, has: function (e) {
            var t = D(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++)if (D.contains(this, t[e]))return !0
            })
        }, not: function (e) {
            return this.pushStack(_(this, e, !1), "not", e)
        }, filter: function (e) {
            return this.pushStack(_(this, e, !0), "filter", e)
        }, is: function (e) {
            return !!e && (typeof e == "string" ? D.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var n = [], i, r, a = this[0];
            if (D.isArray(e)) {
                var s, o, l = {}, u = 1;
                if (a && e.length) {
                    for (i = 0, r = e.length; i < r; i++)o = e[i], l[o] || (l[o] = pe.test(o) ? D(o, t || this.context) : o);
                    while (a && a.ownerDocument && a !== t) {
                        for (o in l)s = l[o], (s.jquery ? s.index(a) > -1 : D(a).is(s)) && n.push({
                            selector: o,
                            elem: a,
                            level: u
                        });
                        a = a.parentNode, u++
                    }
                }
                return n
            }
            var c = pe.test(e) || typeof e != "string" ? D(e, t || this.context) : 0;
            for (i = 0, r = this.length; i < r; i++) {
                a = this[i];
                while (a) {
                    if (c ? c.index(a) > -1 : D.find.matchesSelector(a, e)) {
                        n.push(a);
                        break
                    }
                    a = a.parentNode;
                    if (!a || !a.ownerDocument || a === t || a.nodeType === 11)break
                }
            }
            n = n.length > 1 ? D.unique(n) : n;
            return this.pushStack(n, "closest", e)
        }, index: function (e) {
            if (!e || typeof e == "string")return D.inArray(this[0], e ? D(e) : this.parent().children());
            return D.inArray(e.jquery ? e[0] : e, this)
        }, add: function (e, t) {
            var n = typeof e == "string" ? D(e, t) : D.makeArray(e && e.nodeType ? [e] : e), i = D.merge(this.get(), n);
            return this.pushStack(x(n[0]) || x(i[0]) ? i : D.unique(i))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), D.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return D.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return D.dir(e, "parentNode", n)
        }, next: function (e) {
            return D.nth(e, 2, "nextSibling")
        }, prev: function (e) {
            return D.nth(e, 2, "previousSibling")
        }, nextAll: function (e) {
            return D.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return D.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return D.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return D.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return D.sibling(e.parentNode.firstChild, e)
        }, children: function (e) {
            return D.sibling(e.firstChild)
        }, contents: function (e) {
            return D.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : D.makeArray(e.childNodes)
        }
    }, function (e, t) {
        D.fn[e] = function (n, i) {
            var r = D.map(this, t, n), a = de.call(arguments);
            le.test(e) || (i = n), i && typeof i == "string" && (r = D.filter(i, r)), r = this.length > 1 && !he[e] ? D.unique(r) : r, (this.length > 1 || ce.test(i)) && ue.test(e) && (r = r.reverse());
            return this.pushStack(r, e, a.join(","))
        }
    }), D.extend({
        filter: function (e, t, n) {
            n && (e = ":not(" + e + ")");
            return t.length === 1 ? D.find.matchesSelector(t[0], e) ? [t[0]] : [] : D.find.matches(e, t)
        }, dir: function (e, n, i) {
            var r = [], a = e[n];
            while (a && a.nodeType !== 9 && (i === t || a.nodeType !== 1 || !D(a).is(i)))a.nodeType === 1 && r.push(a), a = a[n];
            return r
        }, nth: function (e, t, n, i) {
            t = t || 1;
            var r = 0;
            for (; e; e = e[n])if (e.nodeType === 1 && ++r === t)break;
            return e
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ve = / polyvObject\d+="(?:\d+|null)"/g, me = /^\s+/, ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ye = /<([\w:]+)/, be = /<tbody/i, we = /<|&#?\w+;/, Te = /<(?:script|object|embed|option|style)/i, _e = /checked\s*(?:[^=]|=\s*.checked.)/i, xe = /\/(java|ecma)script/i, Se = /^\s*<!(?:\[CDATA\[|\-\-)/, je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    je.optgroup = je.option, je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td, D.support.htmlSerialize || (je._default = [1, "div<div>", "</div>"]), D.fn.extend({
        text: function (e) {
            if (D.isFunction(e))return this.each(function (t) {
                var n = D(this);
                n.text(e.call(this, t, n.text()))
            });
            if (typeof e != "object" && e !== t)return this.empty().append((this[0] && this[0].ownerDocument || F).createTextNode(e));
            return D.text(this)
        }, wrapAll: function (e) {
            if (D.isFunction(e))return this.each(function (t) {
                D(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = D(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            if (D.isFunction(e))return this.each(function (t) {
                D(this).wrapInner(e.call(this, t))
            });
            return this.each(function () {
                var t = D(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            return this.each(function () {
                D(this).wrapAll(e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                D.nodeName(this, "body") || D(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = D(arguments[0]);
                e.push.apply(e, this.toArray());
                return this.pushStack(e, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                e.push.apply(e, D(arguments[0]).toArray());
                return e
            }
        }, remove: function (e, t) {
            for (var n = 0, i; (i = this[n]) != null; n++)if (!e || D.filter(e, [i]).length)!t && i.nodeType === 1 && (D.cleanData(i.getElementsByTagName("*")), D.cleanData([i])), i.parentNode && i.parentNode.removeChild(i);
            return this
        }, empty: function () {
            for (var e = 0, t; (t = this[e]) != null; e++) {
                t.nodeType === 1 && D.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild)t.removeChild(t.firstChild)
            }
            return this
        }, clone: function (e, t) {
            e = e == null ? !1 : e, t = t == null ? e : t;
            return this.map(function () {
                return D.clone(this, e, t)
            })
        }, html: function (e) {
            if (e === t)return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ve, "") : null;
            if (typeof e == "string" && !Te.test(e) && (D.support.leadingWhitespace || !me.test(e)) && !je[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(ge, "<$1></$2>");
                try {
                    for (var n = 0, i = this.length; n < i; n++)this[n].nodeType === 1 && (D.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (r) {
                    this.empty().append(e)
                }
            } else D.isFunction(e) ? this.each(function (t) {
                var n = D(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            return this
        }, replaceWith: function (e) {
            if (this[0] && this[0].parentNode) {
                if (D.isFunction(e))return this.each(function (t) {
                    var n = D(this), i = n.html();
                    n.replaceWith(e.call(this, t, i))
                });
                typeof e != "string" && (e = D(e).detach());
                return this.each(function () {
                    var t = this.nextSibling, n = this.parentNode;
                    D(this).remove(), t ? D(t).before(e) : D(n).append(e)
                })
            }
            return this.length ? this.pushStack(D(D.isFunction(e) ? e() : e), "replaceWith", e) : this
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, i) {
            var r, a, s, o, l = e[0], u = [];
            if (!D.support.checkClone && arguments.length === 3 && typeof l == "string" && _e.test(l))return this.each(function () {
                D(this).domManip(e, n, i, !0)
            });
            if (D.isFunction(l))return this.each(function (r) {
                var a = D(this);
                e[0] = l.call(this, r, n ? a.html() : t), a.domManip(e, n, i)
            });
            if (this[0]) {
                o = l && l.parentNode, D.support.parentNode && o && o.nodeType === 11 && o.childNodes.length === this.length ? r = {
                    fragment: o
                } : r = D.buildFragment(e, this, u), s = r.fragment, s.childNodes.length === 1 ? a = s = s.firstChild : a = s.firstChild;
                if (a) {
                    n = n && D.nodeName(a, "tr");
                    for (var c = 0, f = this.length, d = f - 1; c < f; c++)i.call(n ? T(this[c], a) : this[c], r.cacheable || f > 1 && c < d ? D.clone(s, !0, !0) : s)
                }
                u.length && D.each(u, v)
            }
            return this
        }
    }), D.buildFragment = function (e, t, n) {
        var i, r, a, s;
        t && t[0] && (s = t[0].ownerDocument || t[0]), s.createDocumentFragment || (s = F), e.length === 1 && typeof e[0] == "string" && e[0].length < 512 && s === F && e[0].charAt(0) === "<" && !Te.test(e[0]) && (D.support.checkClone || !_e.test(e[0])) && (r = !0, a = D.fragments[e[0]], a && a !== 1 && (i = a)), i || (i = s.createDocumentFragment(), D.clean(e, s, i, n)), r && (D.fragments[e[0]] = a ? i : 1);
        return {fragment: i, cacheable: r}
    }, D.fragments = {}, D.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        D.fn[e] = function (n) {
            var i = [], r = D(n), a = this.length === 1 && this[0].parentNode;
            if (a && a.nodeType === 11 && a.childNodes.length === 1 && r.length === 1) {
                r[t](this[0]);
                return this
            }
            for (var s = 0, o = r.length; s < o; s++) {
                var l = (s > 0 ? this.clone(!0) : this).get();
                D(r[s])[t](l), i = i.concat(l)
            }
            return this.pushStack(i, e, r.selector)
        }
    }), D.extend({
        clone: function (e, t, n) {
            var i = e.cloneNode(!0), r, a, s;
            if ((!D.support.noCloneEvent || !D.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !D.isXMLDoc(e)) {
                b(e, i), r = y(e), a = y(i);
                for (s = 0; r[s]; ++s)b(r[s], a[s])
            }
            if (t) {
                w(e, i);
                if (n) {
                    r = y(e), a = y(i);
                    for (s = 0; r[s]; ++s)w(r[s], a[s])
                }
            }
            r = a = null;
            return i
        }, clean: function (e, t, n, i) {
            var r;
            t = t || F, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || F);
            var a = [], s;
            for (var o = 0, l; (l = e[o]) != null; o++) {
                typeof l == "number" && (l += "");
                if (!l)continue;
                if (typeof l == "string")if (!we.test(l))l = t.createTextNode(l); else {
                    l = l.replace(ge, "<$1></$2>");
                    var u = (ye.exec(l) || ["", ""])[1].toLowerCase(), c = je[u] || je._default, f = c[0], d = t.createElement("div");
                    d.innerHTML = c[1] + l + c[2];
                    while (f--)d = d.lastChild;
                    if (!D.support.tbody) {
                        var p = be.test(l), h = u === "table" && !p ? d.firstChild && d.firstChild.childNodes : c[1] === "<table>" && !p ? d.childNodes : [];
                        for (s = h.length - 1; s >= 0; --s)D.nodeName(h[s], "tbody") && !h[s].childNodes.length && h[s].parentNode.removeChild(h[s])
                    }
                    !D.support.leadingWhitespace && me.test(l) && d.insertBefore(t.createTextNode(me.exec(l)[0]), d.firstChild), l = d.childNodes
                }
                var v;
                if (!D.support.appendChecked)if (l[0] && typeof(v = l.length) == "number")for (s = 0; s < v; s++)m(l[s]); else m(l);
                l.nodeType ? a.push(l) : a = D.merge(a, l)
            }
            if (n) {
                r = function (e) {
                    return !e.type || xe.test(e.type)
                };
                for (o = 0; a[o]; o++)if (i && D.nodeName(a[o], "script") && (!a[o].type || a[o].type.toLowerCase() === "text/javascript"))i.push(a[o].parentNode ? a[o].parentNode.removeChild(a[o]) : a[o]); else {
                    if (a[o].nodeType === 1) {
                        var g = D.grep(a[o].getElementsByTagName("script"), r);
                        a.splice.apply(a, [o + 1, 0].concat(g))
                    }
                    n.appendChild(a[o])
                }
            }
            return a
        }, cleanData: function (e) {
            var t, n, i = D.cache, r = D.expando, a = D.event.special, s = D.support.deleteExpando;
            for (var o = 0, l; (l = e[o]) != null; o++) {
                if (l.nodeName && D.noData[l.nodeName.toLowerCase()])continue;
                n = l[D.expando];
                if (n) {
                    t = i[n] && i[n][r];
                    if (t && t.events) {
                        for (var u in t.events)a[u] ? D.event.remove(l, u) : D.removeEvent(l, u, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete l[D.expando] : l.removeAttribute && l.removeAttribute(D.expando), delete i[n]
                }
            }
        }
    });
    var ke = /alpha\([^)]*\)/i, Ae = /opacity=([^)]*)/, Ne = /([A-Z]|^ms)/g, Ce = /^-?\d+(?:px)?$/i, Ee = /^-?\d/, Le = /^[+\-]=/, Fe = /[^+\-\.\de]+/g, Pe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Oe = ["Left", "Right"], De = ["Top", "Bottom"], Ie, Me, He;
    D.fn.css = function (e, n) {
        if (arguments.length === 2 && n === t)return this;
        return D.access(this, e, n, !0, function (e, n, i) {
            return i !== t ? D.style(e, n, i) : D.css(e, n)
        })
    }, D.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Ie(e, "opacity", "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": D.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, i, r) {
            if (!!e && e.nodeType !== 3 && e.nodeType !== 8 && !!e.style) {
                var a, s, o = D.camelCase(n), l = e.style, u = D.cssHooks[o];
                n = D.cssProps[o] || o;
                if (i === t) {
                    if (u && "get"in u && (a = u.get(e, !1, r)) !== t)return a;
                    return l[n]
                }
                s = typeof i;
                if (s === "number" && isNaN(i) || i == null)return;
                s === "string" && Le.test(i) && (i = +i.replace(Fe, "") + parseFloat(D.css(e, n)), s = "number"), s === "number" && !D.cssNumber[o] && (i += "px");
                if (!u || !("set"in u) || (i = u.set(e, i)) !== t)try {
                    l[n] = i
                } catch (c) {
                }
            }
        },
        css: function (e, n, i) {
            var r, a;
            n = D.camelCase(n), a = D.cssHooks[n], n = D.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (a && "get"in a && (r = a.get(e, !0, i)) !== t)return r;
            if (Ie)return Ie(e, n)
        },
        swap: function (e, t, n) {
            var i = {};
            for (var r in t)i[r] = e.style[r], e.style[r] = t[r];
            n.call(e);
            for (r in t)e.style[r] = i[r]
        }
    }), D.curCSS = D.css, D.each(["height", "width"], function (e, t) {
        D.cssHooks[t] = {
            get: function (e, n, i) {
                var r;
                if (n) {
                    if (e.offsetWidth !== 0)return h(e, t, i);
                    D.swap(e, Pe, function () {
                        r = h(e, t, i)
                    });
                    return r
                }
            }, set: function (e, t) {
                if (!Ce.test(t))return t;
                t = parseFloat(t);
                if (t >= 0)return t + "px"
            }
        }
    }), D.support.opacity || (D.cssHooks.opacity = {
        get: function (e, t) {
            return Ae.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, i = e.currentStyle;
            n.zoom = 1;
            var r = D.isNaN(t) ? "" : "alpha(opacity=" + t * 100 + ")", a = i && i.filter || n.filter || "";
            n.filter = ke.test(a) ? a.replace(ke, r) : a + " " + r
        }
    }), D(function () {
        D.support.reliableMarginRight || (D.cssHooks.marginRight = {
            get: function (e, t) {
                var n;
                D.swap(e, {display: "inline-block"}, function () {
                    t ? n = Ie(e, "margin-right", "marginRight") : n = e.style.marginRight
                });
                return n
            }
        })
    }), F.defaultView && F.defaultView.getComputedStyle && (Me = function (e, n) {
        var i, r, a;
        n = n.replace(Ne, "-$1").toLowerCase();
        if (!(r = e.ownerDocument.defaultView))return t;
        if (a = r.getComputedStyle(e, null))i = a.getPropertyValue(n), i === "" && !D.contains(e.ownerDocument.documentElement, e) && (i = D.style(e, n));
        return i
    }), F.documentElement.currentStyle && (He = function (e, t) {
        var n, i = e.currentStyle && e.currentStyle[t], r = e.runtimeStyle && e.runtimeStyle[t], a = e.style;
        !Ce.test(i) && Ee.test(i) && (n = a.left, r && (e.runtimeStyle.left = e.currentStyle.left), a.left = t === "fontSize" ? "1em" : i || 0, i = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r));
        return i === "" ? "auto" : i
    }), Ie = Me || He, D.expr && D.expr.filters && (D.expr.filters.hidden = function (e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return t === 0 && n === 0 || !D.support.reliableHiddenOffsets && (e.style.display || D.css(e, "display")) === "none"
    }, D.expr.filters.visible = function (e) {
        return !D.expr.filters.hidden(e)
    });
    var Be = /%20/g, Ve = /\[\]$/, Re = /\r?\n/g, We = /#.*$/, Ue = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, ze = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, qe = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/, $e = /^(?:GET|HEAD)$/, Xe = /^\/\//, Ge = /\?/, Je = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Ye = /^(?:select|textarea)/i, Ke = /\s+/, Ze = /([?&])_=[^&]*/, Qe = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, et = D.fn.load, tt = {}, nt = {}, it, rt;
    try {
        it = O.href
    } catch (at) {
        it = F.createElement("a"), it.href = "", it = it.href
    }
    rt = Qe.exec(it.toLowerCase()) || [], D.fn.extend({
        load: function (e, n, i) {
            if (typeof e != "string" && et)return et.apply(this, arguments);
            if (!this.length)return this;
            var r = e.indexOf(" ");
            if (r >= 0) {
                var a = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var s = "GET";
            n && (D.isFunction(n) ? (i = n, n = t) : typeof n == "object" && (n = D.param(n, D.ajaxSettings.traditional), s = "POST"));
            var o = this;
            D.ajax({
                url: e, type: s, dataType: "html", data: n, complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), o.html(a ? D("<div>").append(n.replace(Je, "")).find(a) : n)), i && o.each(i, [n, t, e])
                }
            });
            return this
        }, serialize: function () {
            return D.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? D.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Ye.test(this.nodeName) || ze.test(this.type))
            }).map(function (e, t) {
                var n = D(this).val();
                return n == null ? null : D.isArray(n) ? D.map(n, function (e, n) {
                    return {name: t.name, value: e.replace(Re, "\r\n")}
                }) : {name: t.name, value: n.replace(Re, "\r\n")}
            }).get()
        }
    }), D.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        D.fn[t] = function (e) {
            return this.bind(t, e)
        }
    }), D.each(["get", "post"], function (e, n) {
        D[n] = function (e, i, r, a) {
            D.isFunction(i) && (a = a || r, r = i, i = t);
            return D.ajax({type: n, url: e, data: i, success: r, dataType: a})
        }
    }), D.extend({
        getScript: function (e, n) {
            return D.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return D.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            t ? D.extend(!0, e, D.ajaxSettings, t) : (t = e, e = D.extend(!0, D.ajaxSettings, t));
            for (var n in{context: 1, url: 1})n in t ? e[n] = t[n] : n in D.ajaxSettings && (e[n] = D.ajaxSettings[n]);
            return e
        },
        ajaxSettings: {
            url: it,
            isLocal: qe.test(rt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": D.parseJSON, "text xml": D.parseXML}
        },
        ajaxPrefilter: p(tt),
        ajaxTransport: p(nt),
        ajax: function (e, n) {
            function i(e, n, i, d) {
                if (T !== 2) {
                    T = 2, b && clearTimeout(b), y = t, m = d || "", S.readyState = e ? 4 : 0;
                    var h, v, g, w = i ? c(r, S, i) : t, x, j;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (r.ifModified) {
                            if (x = S.getResponseHeader("Last-Modified"))D.lastModified[p] = x;
                            if (j = S.getResponseHeader("Etag"))D.etag[p] = j
                        }
                        if (e === 304)n = "notmodified", h = !0; else try {
                            v = u(r, w), n = "success", h = !0
                        } catch (k) {
                            n = "parsererror", g = k
                        }
                    } else {
                        g = n;
                        if (!n || e)n = "error", e < 0 && (e = 0)
                    }
                    S.status = e, S.statusText = n, h ? o.resolveWith(a, [v, n, S]) : o.rejectWith(a, [S, n, g]), S.statusCode(f), f = t, _ && s.trigger("ajax" + (h ? "Success" : "Error"), [S, r, h ? v : g]), l.resolveWith(a, [S, n]), _ && (s.trigger("ajaxComplete", [S, r]), --D.active || D.event.trigger("ajaxStop"))
                }
            }

            typeof e == "object" && (n = e, e = t), n = n || {};
            var r = D.ajaxSetup({}, n), a = r.context || r, s = a !== r && (a.nodeType || a instanceof D) ? D(a) : D.event, o = D.Deferred(), l = D._Deferred(), f = r.statusCode || {}, p, h = {}, v = {}, m, g, y, b, w, T = 0, _, x, S = {
                readyState: 0,
                setRequestHeader: function (e, t) {
                    if (!T) {
                        var n = e.toLowerCase();
                        e = v[n] = v[n] || e, h[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return T === 2 ? m : null
                },
                getResponseHeader: function (e) {
                    var n;
                    if (T === 2) {
                        if (!g) {
                            g = {};
                            while (n = Ue.exec(m))g[n[1].toLowerCase()] = n[2]
                        }
                        n = g[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function (e) {
                    T || (r.mimeType = e);
                    return this
                },
                abort: function (e) {
                    e = e || "abort", y && y.abort(e), i(0, e);
                    return this
                }
            };
            o.promise(S), S.success = S.done, S.error = S.fail, S.complete = l.done, S.statusCode = function (e) {
                if (e) {
                    var t;
                    if (T < 2)for (t in e)f[t] = [f[t], e[t]]; else t = e[S.status], S.then(t, t)
                }
                return this
            }, r.url = ((e || r.url) + "").replace(We, "").replace(Xe, rt[1] + "//"), r.dataTypes = D.trim(r.dataType || "*").toLowerCase().split(Ke), r.crossDomain == null && (w = Qe.exec(r.url.toLowerCase()), r.crossDomain = !(!w || w[1] == rt[1] && w[2] == rt[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (rt[3] || (rt[1] === "http:" ? 80 : 443)))), r.data && r.processData && typeof r.data != "string" && (r.data = D.param(r.data, r.traditional)), d(tt, r, n, S);
            if (T === 2)return !1;
            _ = r.global, r.type = r.type.toUpperCase(), r.hasContent = !$e.test(r.type), _ && D.active++ === 0 && D.event.trigger("ajaxStart");
            if (!r.hasContent) {
                r.data && (r.url += (Ge.test(r.url) ? "&" : "?") + r.data), p = r.url;
                if (r.cache === !1) {
                    var j = D.now(), k = r.url.replace(Ze, "$1_=" + j);
                    r.url = k + (k === r.url ? (Ge.test(r.url) ? "&" : "?") + "_=" + j : "")
                }
            }
            (r.data && r.hasContent && r.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", r.contentType), r.ifModified && (p = p || r.url, D.lastModified[p] && S.setRequestHeader("If-Modified-Since", D.lastModified[p]), D.etag[p] && S.setRequestHeader("If-None-Match", D.etag[p])), S.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + (r.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : r.accepts["*"]);
            for (x in r.headers)S.setRequestHeader(x, r.headers[x]);
            if (r.beforeSend && (r.beforeSend.call(a, S, r) === !1 || T === 2)) {
                S.abort();
                return !1
            }
            for (x in{success: 1, error: 1, complete: 1})S[x](r[x]);
            y = d(nt, r, n, S);
            if (!y)i(-1, "No Transport"); else {
                S.readyState = 1, _ && s.trigger("ajaxSend", [S, r]), r.async && r.timeout > 0 && (b = setTimeout(function () {
                    S.abort("timeout")
                }, r.timeout));
                try {
                    T = 1, y.send(h, i)
                } catch (A) {
                    status < 2 ? i(-1, A) : D.error(A)
                }
            }
            return S
        },
        param: function (e, n) {
            var i = [], r = function (e, t) {
                t = D.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            n === t && (n = D.ajaxSettings.traditional);
            if (D.isArray(e) || e.jquery && !D.isPlainObject(e))D.each(e, function () {
                r(this.name, this.value)
            }); else for (var a in e)f(a, e[a], n, r);
            return i.join("&").replace(Be, "+")
        }
    }), D.extend({active: 0, lastModified: {}, etag: {}});
    var st = D.now(), ot = /(\=)\?(&|$)|\?\?/i;
    D.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return D.expando + "_" + st++
        }
    }), D.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (ot.test(t.url) || r && ot.test(t.data))) {
            var a, s = t.jsonpCallback = D.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o = e[s], l = t.url, u = t.data, c = "$1" + s + "$2";
            t.jsonp !== !1 && (l = l.replace(ot, c), t.url === l && (r && (u = u.replace(ot, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + s))), t.url = l, t.data = u, e[s] = function (e) {
                a = [e]
            }, i.always(function () {
                e[s] = o, a && D.isFunction(o) && e[s](a[0])
            }), t.converters["script json"] = function () {
                a || D.error(s + " was not called");
                return a[0]
            }, t.dataTypes[0] = "json";
            return "script"
        }
    }), D.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                D.globalEval(e);
                return e
            }
        }
    }), D.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), D.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
            return {
                send: function (r, a) {
                    n = F.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, r) {
                        if (r || !n.readyState || /loaded|complete/.test(n.readyState))n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || a(200, "success")
                    }, i.insertBefore(n, i.firstChild)
                }, abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var lt = e.ActiveXObject ? function () {
        for (var e in ct)ct[e](0, 1)
    } : !1, ut = 0, ct;
    D.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && l() || o()
    } : l, function (e) {
        D.extend(D.support, {ajax: !!e, cors: !!e && "withCredentials"in e})
    }(D.ajaxSettings.xhr()), D.support.ajax && D.ajaxTransport(function (n) {
        if (!n.crossDomain || D.support.cors) {
            var i;
            return {
                send: function (r, a) {
                    var s = n.xhr(), o, l;
                    n.username ? s.open(n.type, n.url, n.async, n.username, n.password) : s.open(n.type, n.url, n.async);
                    if (n.xhrFields)for (l in n.xhrFields)s[l] = n.xhrFields[l];
                    n.mimeType && s.overrideMimeType && s.overrideMimeType(n.mimeType), !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (l in r)s.setRequestHeader(l, r[l])
                    } catch (u) {
                    }
                    s.send(n.hasContent && n.data || null), i = function (e, r) {
                        var l, u, c, f, d;
                        try {
                            if (i && (r || s.readyState === 4)) {
                                i = t, o && (s.onreadystatechange = D.noop, lt && delete ct[o]);
                                if (r)s.readyState !== 4 && s.abort(); else {
                                    l = s.status, c = s.getAllResponseHeaders(), f = {}, d = s.responseXML, d && d.documentElement && (f.xml = d), f.text = s.responseText;
                                    try {
                                        u = s.statusText
                                    } catch (p) {
                                        u = ""
                                    }
                                    !l && n.isLocal && !n.crossDomain ? l = f.text ? 200 : 404 : l === 1223 && (l = 204)
                                }
                            }
                        } catch (h) {
                            r || a(-1, h)
                        }
                        f && a(l, u, f, c)
                    }, !n.async || s.readyState === 4 ? i() : (o = ++ut, lt && (ct || (ct = {}, D(e).unload(lt)), ct[o] = i), s.onreadystatechange = i)
                }, abort: function () {
                    i && i(0, 1)
                }
            }
        }
    });
    var ft = {}, dt, pt, ht = /^(?:toggle|show|hide)$/, vt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, mt, gt = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], yt, bt = e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame;
    D.fn.extend({
        show: function (e, t, n) {
            var a, s;
            if (e || e === 0)return this.animate(r("show", 3), e, t, n);
            for (var o = 0, l = this.length; o < l; o++)a = this[o], a.style && (s = a.style.display, !D._data(a, "olddisplay") && s === "none" && (s = a.style.display = ""), s === "" && D.css(a, "display") === "none" && D._data(a, "olddisplay", i(a.nodeName)));
            for (o = 0; o < l; o++) {
                a = this[o];
                if (a.style) {
                    s = a.style.display;
                    if (s === "" || s === "none")a.style.display = D._data(a, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (e, t, n) {
            if (e || e === 0)return this.animate(r("hide", 3), e, t, n);
            for (var i = 0, a = this.length; i < a; i++)if (this[i].style) {
                var s = D.css(this[i], "display");
                s !== "none" && !D._data(this[i], "olddisplay") && D._data(this[i], "olddisplay", s)
            }
            for (i = 0; i < a; i++)this[i].style && (this[i].style.display = "none");
            return this
        }, _toggle: D.fn.toggle, toggle: function (e, t, n) {
            var i = typeof e == "boolean";
            D.isFunction(e) && D.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || i ? this.each(function () {
                var t = i ? e : D(this).is(":hidden");
                D(this)[t ? "show" : "hide"]()
            }) : this.animate(r("toggle", 3), e, t, n);
            return this
        }, fadeTo: function (e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, r) {
            var a = D.speed(t, n, r);
            if (D.isEmptyObject(e))return this.each(a.complete, [!1]);
            e = D.extend({}, e);
            return this[a.queue === !1 ? "each" : "queue"](function () {
                a.queue === !1 && D._mark(this);
                var t = D.extend({}, a), n = this.nodeType === 1, r = n && D(this).is(":hidden"), s, o, l, u, c, f, d, p, h;
                t.animatedProperties = {};
                for (l in e) {
                    s = D.camelCase(l), l !== s && (e[s] = e[l], delete e[l]), o = e[s], D.isArray(o) ? (t.animatedProperties[s] = o[1], o = e[s] = o[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
                    if (o === "hide" && r || o === "show" && !r)return t.complete.call(this);
                    n && (s === "height" || s === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], D.css(this, "display") === "inline" && D.css(this, "float") === "none" && (D.support.inlineBlockNeedsLayout ? (u = i(this.nodeName), u === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (l in e)c = new D.fx(this, t, l), o = e[l], ht.test(o) ? c[o === "toggle" ? r ? "show" : "hide" : o]() : (f = vt.exec(o), d = c.cur(), f ? (p = parseFloat(f[2]), h = f[3] || (D.cssNumber[l] ? "" : "px"), h !== "px" && (D.style(this, l, (p || 1) + h), d = (p || 1) / c.cur() * d, D.style(this, l, d + h)), f[1] && (p = (f[1] === "-=" ? -1 : 1) * p + d), c.custom(d, p, h)) : c.custom(d, o, ""));
                return !0
            })
        }, stop: function (e, t) {
            e && this.queue([]), this.each(function () {
                var e = D.timers, n = e.length;
                t || D._unmark(!0, this);
                while (n--)e[n].elem === this && (t && e[n](!0), e.splice(n, 1))
            }), t || this.dequeue();
            return this
        }
    }), D.each({
        slideDown: r("show", 1),
        slideUp: r("hide", 1),
        slideToggle: r("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        D.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), D.extend({
        speed: function (e, t, n) {
            var i = e && typeof e == "object" ? D.extend({}, e) : {
                complete: n || !n && t || D.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !D.isFunction(t) && t
            };
            i.duration = D.fx.off ? 0 : typeof i.duration == "number" ? i.duration : i.duration in D.fx.speeds ? D.fx.speeds[i.duration] : D.fx.speeds._default, i.old = i.complete, i.complete = function (e) {
                D.isFunction(i.old) && i.old.call(this), i.queue !== !1 ? D.dequeue(this) : e !== !1 && D._unmark(this)
            };
            return i
        }, easing: {
            linear: function (e, t, n, i) {
                return n + i * e
            }, swing: function (e, t, n, i) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * i + n
            }
        }, timers: [], fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), D.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (D.fx.step[this.prop] || D.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
            var e, t = D.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
        }, custom: function (e, t, n) {
            function i(e) {
                return r.step(e)
            }

            var r = this, a = D.fx, o;
            this.startTime = yt || s(), this.start = e, this.end = t, this.unit = n || this.unit || (D.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, i.elem = this.elem, i() && D.timers.push(i) && !mt && (bt ? (mt = !0, o = function () {
                mt && (bt(o), a.tick())
            }, bt(o)) : mt = setInterval(a.tick, a.interval))
        }, show: function () {
            this.options.orig[this.prop] = D.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), D(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = D.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (e) {
            var t = yt || s(), n = !0, i = this.elem, r = this.options, a, o;
            if (e || t >= r.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), r.animatedProperties[this.prop] = !0;
                for (a in r.animatedProperties)r.animatedProperties[a] !== !0 && (n = !1);
                if (n) {
                    r.overflow != null && !D.support.shrinkWrapBlocks && D.each(["", "X", "Y"], function (e, t) {
                        i.style["overflow" + t] = r.overflow[e]
                    }), r.hide && D(i).hide();
                    if (r.hide || r.show)for (var l in r.animatedProperties)D.style(i, l, r.orig[l]);
                    r.complete.call(i)
                }
                return !1
            }
            r.duration == Infinity ? this.now = t : (o = t - this.startTime, this.state = o / r.duration, this.pos = D.easing[r.animatedProperties[this.prop]](this.state, o, 0, 1, r.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, D.extend(D.fx, {
        tick: function () {
            for (var e = D.timers, t = 0; t < e.length; ++t)e[t]() || e.splice(t--, 1);
            e.length || D.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(mt), mt = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (e) {
                D.style(e.elem, "opacity", e.now)
            }, _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = (e.prop === "width" || e.prop === "height" ? Math.max(0, e.now) : e.now) + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), D.expr && D.expr.filters && (D.expr.filters.animated = function (e) {
        return D.grep(D.timers, function (t) {
            return e === t.elem
        }).length
    });
    var wt = /^t(?:able|d|h)$/i, Tt = /^(?:body|html)$/i;
    "getBoundingClientRect"in F.documentElement ? D.fn.offset = function (e) {
        var t = this[0], i;
        if (e)return this.each(function (t) {
            D.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument)return null;
        if (t === t.ownerDocument.body)return D.offset.bodyOffset(t);
        try {
            i = t.getBoundingClientRect()
        } catch (r) {
        }
        var a = t.ownerDocument, s = a.documentElement;
        if (!i || !D.contains(s, t))return i ? {top: i.top, left: i.left} : {top: 0, left: 0};
        var o = a.body, l = n(a), u = s.clientTop || o.clientTop || 0, c = s.clientLeft || o.clientLeft || 0, f = l.pageYOffset || D.support.boxModel && s.scrollTop || o.scrollTop, d = l.pageXOffset || D.support.boxModel && s.scrollLeft || o.scrollLeft, p = i.top + f - u, h = i.left + d - c;
        return {top: p, left: h}
    } : D.fn.offset = function (e) {
        var t = this[0];
        if (e)return this.each(function (t) {
            D.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument)return null;
        if (t === t.ownerDocument.body)return D.offset.bodyOffset(t);
        D.offset.initialize();
        var n, i = t.offsetParent, r = t, a = t.ownerDocument, s = a.documentElement, o = a.body, l = a.defaultView, u = l ? l.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, f = t.offsetLeft;
        while ((t = t.parentNode) && t !== o && t !== s) {
            if (D.offset.supportsFixedPosition && u.position === "fixed")break;
            n = l ? l.getComputedStyle(t, null) : t.currentStyle, c -= t.scrollTop, f -= t.scrollLeft, t === i && (c += t.offsetTop, f += t.offsetLeft, D.offset.doesNotAddBorder && (!D.offset.doesAddBorderForTableAndCells || !wt.test(t.nodeName)) && (c += parseFloat(n.borderTopWidth) || 0, f += parseFloat(n.borderLeftWidth) || 0), r = i, i = t.offsetParent), D.offset.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (c += parseFloat(n.borderTopWidth) || 0, f += parseFloat(n.borderLeftWidth) || 0), u = n
        }
        if (u.position === "relative" || u.position === "static")c += o.offsetTop, f += o.offsetLeft;
        D.offset.supportsFixedPosition && u.position === "fixed" && (c += Math.max(s.scrollTop, o.scrollTop), f += Math.max(s.scrollLeft, o.scrollLeft));
        return {top: c, left: f}
    }, D.offset = {
        initialize: function () {
            var e = F.body, t = F.createElement("div"), n, i, r, a, s = parseFloat(D.css(e, "marginTop")) || 0, o = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            D.extend(t.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), t.innerHTML = o, e.insertBefore(t, e.firstChild), n = t.firstChild, i = n.firstChild, a = n.nextSibling.firstChild.firstChild, this.doesNotAddBorder = i.offsetTop !== 5, this.doesAddBorderForTableAndCells = a.offsetTop === 5, i.style.position = "fixed", i.style.top = "20px", this.supportsFixedPosition = i.offsetTop === 20 || i.offsetTop === 15, i.style.position = i.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", this.subtractsBorderForOverflowNotVisible = i.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = e.offsetTop !== s, e.removeChild(t), D.offset.initialize = D.noop
        }, bodyOffset: function (e) {
            var t = e.offsetTop, n = e.offsetLeft;
            D.offset.initialize(), D.offset.doesNotIncludeMarginInBodyOffset && (t += parseFloat(D.css(e, "marginTop")) || 0, n += parseFloat(D.css(e, "marginLeft")) || 0);
            return {top: t, left: n}
        }, setOffset: function (e, t, n) {
            var i = D.css(e, "position");
            i === "static" && (e.style.position = "relative");
            var r = D(e), a = r.offset(), s = D.css(e, "top"), o = D.css(e, "left"), l = (i === "absolute" || i === "fixed") && D.inArray("auto", [s, o]) > -1, u = {}, c = {}, f, d;
            l ? (c = r.position(), f = c.top, d = c.left) : (f = parseFloat(s) || 0, d = parseFloat(o) || 0), D.isFunction(t) && (t = t.call(e, n, a)), t.top != null && (u.top = t.top - a.top + f), t.left != null && (u.left = t.left - a.left + d), "using"in t ? t.using.call(e, u) : r.css(u)
        }
    }, D.fn.extend({
        position: function () {
            if (!this[0])return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), i = Tt.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            n.top -= parseFloat(D.css(e, "marginTop")) || 0, n.left -= parseFloat(D.css(e, "marginLeft")) || 0, i.top += parseFloat(D.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(D.css(t[0], "borderLeftWidth")) || 0;
            return {top: n.top - i.top, left: n.left - i.left}
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || F.body;
                while (e && !Tt.test(e.nodeName) && D.css(e, "position") === "static")e = e.offsetParent;
                return e
            })
        }
    }), D.each(["Left", "Top"], function (e, i) {
        var r = "scroll" + i;
        D.fn[r] = function (i) {
            var a, s;
            if (i === t) {
                a = this[0];
                if (!a)return null;
                s = n(a);
                return s ? "pageXOffset"in s ? s[e ? "pageYOffset" : "pageXOffset"] : D.support.boxModel && s.document.documentElement[r] || s.document.body[r] : a[r]
            }
            return this.each(function () {
                s = n(this), s ? s.scrollTo(e ? D(s).scrollLeft() : i, e ? i : D(s).scrollTop()) : this[r] = i
            })
        }
    }), D.each(["Height", "Width"], function (e, n) {
        var i = n.toLowerCase();
        D.fn["inner" + n] = function () {
            var e = this[0];
            return e && e.style ? parseFloat(D.css(e, i, "padding")) : null
        }, D.fn["outer" + n] = function (e) {
            var t = this[0];
            return t && t.style ? parseFloat(D.css(t, i, e ? "margin" : "border")) : null
        }, D.fn[i] = function (e) {
            var r = this[0];
            if (!r)return e == null ? null : this;
            if (D.isFunction(e))return this.each(function (t) {
                var n = D(this);
                n[i](e.call(this, t, n[i]()))
            });
            if (D.isWindow(r)) {
                var a = r.document.documentElement["client" + n];
                return r.document.compatMode === "CSS1Compat" && a || r.document.body["client" + n] || a
            }
            if (r.nodeType === 9)return Math.max(r.documentElement["client" + n], r.body["scroll" + n], r.documentElement["scroll" + n], r.body["offset" + n], r.documentElement["offset" + n]);
            if (e === t) {
                var s = D.css(r, i), o = parseFloat(s);
                return D.isNaN(o) ? s : o
            }
            return this.css(i, typeof e == "string" ? e : e + "px")
        }
    }), e.polyvObject = D
})(window);
!function (e, t) {
    "object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Spinner = t()
}(this, function () {
    "use strict";
    function e(e, t) {
        var n, i = document.createElement(e || "div");
        for (n in t)i[n] = t[n];
        return i
    }

    function t(e) {
        for (var t = 1, n = arguments.length; n > t; t++)e.appendChild(arguments[t]);
        return e
    }

    function n(e, t, n, i) {
        var r = ["opacity", t, ~~(100 * e), n, i].join("-"), a = .01 + n / i * 100, s = Math.max(1 - (1 - e) / t * (100 - a), e), o = u.substring(0, u.indexOf("Animation")).toLowerCase(), l = o && "-" + o + "-" || "";
        return f[r] || (d.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + s + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + s + "}}", d.cssRules.length), f[r] = 1), r
    }

    function i(e, t) {
        var n, i, r = e.style;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < c.length; i++)if (n = c[i] + t, void 0 !== r[n])return n;
        return void 0 !== r[t] ? t : void 0
    }

    function r(e, t) {
        for (var n in t)e.style[i(e, n) || n] = t[n];
        return e
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)void 0 === e[i] && (e[i] = n[i])
        }
        return e
    }

    function s(e, t) {
        return "string" == typeof e ? e : e[t % e.length]
    }

    function o(e) {
        this.opts = a(e || {}, o.defaults, p)
    }

    function l() {
        function n(t, n) {
            return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
        }

        d.addRule(".spin-vml", "behavior:url(#default#VML)"), o.prototype.lines = function (e, i) {
            function a() {
                return r(n("group", {coordsize: c + " " + c, coordorigin: -u + " " + -u}), {width: c, height: c})
            }

            function o(e, o, l) {
                t(d, t(r(a(), {
                    rotation: 360 / i.lines * e + "deg",
                    left: ~~o
                }), t(r(n("roundrect", {arcsize: i.corners}), {
                    width: u,
                    height: i.width,
                    left: i.radius,
                    top: -i.width >> 1,
                    filter: l
                }), n("fill", {color: s(i.color, e), opacity: i.opacity}), n("stroke", {opacity: 0}))))
            }

            var l, u = i.length + i.width, c = 2 * u, f = 2 * -(i.width + i.length) + "px", d = r(a(), {
                position: "absolute",
                top: f,
                left: f
            });
            if (i.shadow)for (l = 1; l <= i.lines; l++)o(l, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (l = 1; l <= i.lines; l++)o(l);
            return t(e, d)
        }, o.prototype.opacity = function (e, t, n, i) {
            var r = e.firstChild;
            i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = r.childNodes[t + i], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = n))
        }
    }

    var u, c = ["webkit", "Moz", "ms", "O"], f = {}, d = function () {
        var n = e("style", {type: "text/css"});
        return t(document.getElementsByTagName("head")[0], n), n.sheet || n.styleSheet
    }(), p = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: .25,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "50%",
        left: "50%",
        position: "absolute"
    };
    o.defaults = {}, a(o.prototype, {
        spin: function (t) {
            this.stop();
            {
                var n = this, i = n.opts, a = n.el = r(e(0, {className: i.className}), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                });
                i.radius + i.length + i.width
            }
            if (r(a, {
                    left: i.left,
                    top: i.top
                }), t && t.insertBefore(a, t.firstChild || null), a.setAttribute("role", "progressbar"), n.lines(a, n.opts), !u) {
                var s, o = 0, l = (i.lines - 1) * (1 - i.direction) / 2, c = i.fps, f = c / i.speed, d = (1 - i.opacity) / (f * i.trail / 100), p = f / i.lines;
                !function h() {
                    o++;
                    for (var e = 0; e < i.lines; e++)s = Math.max(1 - (o + (i.lines - e) * p) % f * d, i.opacity), n.opacity(a, e * i.direction + l, s, i);
                    n.timeout = n.el && setTimeout(h, ~~(1e3 / c))
                }()
            }
            return n
        }, stop: function () {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = void 0), this
        }, lines: function (i, a) {
            function o(t, n) {
                return r(e(), {
                    position: "absolute",
                    width: a.length + a.width + "px",
                    height: a.width + "px",
                    background: t,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / a.lines * c + a.rotate) + "deg) translate(" + a.radius + "px,0)",
                    borderRadius: (a.corners * a.width >> 1) + "px"
                })
            }

            for (var l, c = 0, f = (a.lines - 1) * (1 - a.direction) / 2; c < a.lines; c++)l = r(e(), {
                position: "absolute",
                top: 1 + ~(a.width / 2) + "px",
                transform: a.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: a.opacity,
                animation: u && n(a.opacity, a.trail, f + c * a.direction, a.lines) + " " + 1 / a.speed + "s linear infinite"
            }), a.shadow && t(l, r(o("#000", "0 0 4px #000"), {top: "2px"})), t(i, t(l, o(s(a.color, c), "0 0 1px rgba(0,0,0,.1)")));
            return i
        }, opacity: function (e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    });
    var h = r(e("group"), {behavior: "url(#default#VML)"});
    return !i(h, "transform") && h.adj ? l() : u = i(h, "animation"), o
});
var CryptoJS = CryptoJS || function (e, t) {
        var n = {}, i = n.lib = {}, r = i.Base = function () {
            function e() {
            }

            return {
                extend: function (t) {
                    e.prototype = this;
                    var n = new e;
                    t && n.mixIn(t);
                    n.$super = this;
                    return n
                }, create: function () {
                    var e = this.extend();
                    e.init.apply(e, arguments);
                    return e
                }, init: function () {
                }, mixIn: function (e) {
                    for (var t in e)e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                }, clone: function () {
                    return this.$super.extend(this)
                }
            }
        }(), a = i.WordArray = r.extend({
            init: function (e, n) {
                e = this.words = e || [];
                this.sigBytes = n != t ? n : 4 * e.length
            }, toString: function (e) {
                return (e || o).stringify(this)
            }, concat: function (e) {
                var t = this.words, n = e.words, i = this.sigBytes, e = e.sigBytes;
                this.clamp();
                if (i % 4)for (var r = 0; r < e; r++)t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 24 - 8 * ((i + r) % 4); else if (65535 < n.length)for (r = 0; r < e; r += 4)t[i + r >>> 2] = n[r >>> 2]; else t.push.apply(t, n);
                this.sigBytes += e;
                return this
            }, clamp: function () {
                var t = this.words, n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
                t.length = e.ceil(n / 4)
            }, clone: function () {
                var e = r.clone.call(this);
                e.words = this.words.slice(0);
                return e
            }, random: function (t) {
                for (var n = [], i = 0; i < t; i += 4)n.push(4294967296 * e.random() | 0);
                return a.create(n, t)
            }
        }), s = n.enc = {}, o = s.Hex = {
            stringify: function (e) {
                for (var t = e.words, e = e.sigBytes, n = [], i = 0; i < e; i++) {
                    var r = t[i >>> 2] >>> 24 - 8 * (i % 4) & 255;
                    n.push((r >>> 4).toString(16));
                    n.push((r & 15).toString(16))
                }
                return n.join("")
            }, parse: function (e) {
                for (var t = e.length, n = [], i = 0; i < t; i += 2)n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - 4 * (i % 8);
                return a.create(n, t / 2)
            }
        }, l = s.Latin1 = {
            stringify: function (e) {
                for (var t = e.words, e = e.sigBytes, n = [], i = 0; i < e; i++)n.push(String.fromCharCode(t[i >>> 2] >>> 24 - 8 * (i % 4) & 255));
                return n.join("")
            }, parse: function (e) {
                for (var t = e.length, n = [], i = 0; i < t; i++)n[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - 8 * (i % 4);
                return a.create(n, t)
            }
        }, u = s.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(l.stringify(e)))
                } catch (t) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (e) {
                return l.parse(unescape(encodeURIComponent(e)))
            }
        }, c = i.BufferedBlockAlgorithm = r.extend({
            reset: function () {
                this._data = a.create();
                this._nDataBytes = 0
            }, _append: function (e) {
                "string" == typeof e && (e = u.parse(e));
                this._data.concat(e);
                this._nDataBytes += e.sigBytes
            }, _process: function (t) {
                var n = this._data, i = n.words, r = n.sigBytes, s = this.blockSize, o = r / (4 * s), o = t ? e.ceil(o) : e.max((o | 0) - this._minBufferSize, 0), t = o * s, r = e.min(4 * t, r);
                if (t) {
                    for (var l = 0; l < t; l += s)this._doProcessBlock(i, l);
                    l = i.splice(0, t);
                    n.sigBytes -= r
                }
                return a.create(l, r)
            }, clone: function () {
                var e = r.clone.call(this);
                e._data = this._data.clone();
                return e
            }, _minBufferSize: 0
        });
        i.Hasher = c.extend({
            init: function () {
                this.reset()
            }, reset: function () {
                c.reset.call(this);
                this._doReset()
            }, update: function (e) {
                this._append(e);
                this._process();
                return this
            }, finalize: function (e) {
                e && this._append(e);
                this._doFinalize();
                return this._hash
            }, clone: function () {
                var e = c.clone.call(this);
                e._hash = this._hash.clone();
                return e
            }, blockSize: 16, _createHelper: function (e) {
                return function (t, n) {
                    return e.create(n).finalize(t)
                }
            }, _createHmacHelper: function (e) {
                return function (t, n) {
                    return f.HMAC.create(e, n).finalize(t)
                }
            }
        });
        var f = n.algo = {};
        return n
    }(Math);
(function (e) {
    function t(e, t, n, i, r, a, s) {
        e = e + (t & n | ~t & i) + r + s;
        return (e << a | e >>> 32 - a) + t
    }

    function n(e, t, n, i, r, a, s) {
        e = e + (t & i | n & ~i) + r + s;
        return (e << a | e >>> 32 - a) + t
    }

    function i(e, t, n, i, r, a, s) {
        e = e + (t ^ n ^ i) + r + s;
        return (e << a | e >>> 32 - a) + t
    }

    function r(e, t, n, i, r, a, s) {
        e = e + (n ^ (t | ~i)) + r + s;
        return (e << a | e >>> 32 - a) + t
    }

    var a = CryptoJS, s = a.lib, o = s.WordArray, s = s.Hasher, l = a.algo, u = [];
    (function () {
        for (var t = 0; 64 > t; t++)u[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
    })();
    l = l.MD5 = s.extend({
        _doReset: function () {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (e, a) {
            for (var s = 0; 16 > s; s++) {
                var o = a + s, l = e[o];
                e[o] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360
            }
            for (var o = this._hash.words, l = o[0], c = o[1], f = o[2], d = o[3], s = 0; 64 > s; s += 4)16 > s ? (l = t(l, c, f, d, e[a + s], 7, u[s]), d = t(d, l, c, f, e[a + s + 1], 12, u[s + 1]), f = t(f, d, l, c, e[a + s + 2], 17, u[s + 2]), c = t(c, f, d, l, e[a + s + 3], 22, u[s + 3])) : 32 > s ? (l = n(l, c, f, d, e[a + (s + 1) % 16], 5, u[s]), d = n(d, l, c, f, e[a + (s + 6) % 16], 9, u[s + 1]), f = n(f, d, l, c, e[a + (s + 11) % 16], 14, u[s + 2]), c = n(c, f, d, l, e[a + s % 16], 20, u[s + 3])) : 48 > s ? (l = i(l, c, f, d, e[a + (3 * s + 5) % 16], 4, u[s]), d = i(d, l, c, f, e[a + (3 * s + 8) % 16], 11, u[s + 1]), f = i(f, d, l, c, e[a + (3 * s + 11) % 16], 16, u[s + 2]), c = i(c, f, d, l, e[a + (3 * s + 14) % 16], 23, u[s + 3])) : (l = r(l, c, f, d, e[a + 3 * s % 16], 6, u[s]), d = r(d, l, c, f, e[a + (3 * s + 7) % 16], 10, u[s + 1]), f = r(f, d, l, c, e[a + (3 * s + 14) % 16], 15, u[s + 2]), c = r(c, f, d, l, e[a + (3 * s + 5) % 16], 21, u[s + 3]));
            o[0] = o[0] + l | 0;
            o[1] = o[1] + c | 0;
            o[2] = o[2] + f | 0;
            o[3] = o[3] + d | 0
        }, _doFinalize: function () {
            var e = this._data, t = e.words, n = 8 * this._nDataBytes, i = 8 * e.sigBytes;
            t[i >>> 5] |= 128 << 24 - i % 32;
            t[(i + 64 >>> 9 << 4) + 14] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360;
            e.sigBytes = 4 * (t.length + 1);
            this._process();
            e = this._hash.words;
            for (t = 0; 4 > t; t++)n = e[t], e[t] = (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360
        }
    });
    a.MD5 = s._createHelper(l);
    a.HmacMD5 = s._createHmacHelper(l)
})(Math);
var swfobject = function () {
    var e = "undefined", t = "object", n = "Shockwave Flash", i = "ShockwaveFlash.ShockwaveFlash", r = "application/x-shockwave-flash", a = "SWFObjectExprInst", s = "onreadystatechange", o = window, l = document, u = navigator, c = false, f = [C], d = [], p = [], h = [], v, m, g, y, b = false, w = false, T, _, x = true, S = function () {
        var a = typeof l.getElementById != e && typeof l.getElementsByTagName != e && typeof l.createElement != e, s = u.userAgent.toLowerCase(), f = u.platform.toLowerCase(), d = f ? /win/.test(f) : /win/.test(s), p = f ? /mac/.test(f) : /mac/.test(s), h = /webkit/.test(s) ? parseFloat(s.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, v = !+"1", m = [0, 0, 0], g = null;
        if (typeof u.plugins != e && typeof u.plugins[n] == t) {
            g = u.plugins[n].description;
            if (g && !(typeof u.mimeTypes != e && u.mimeTypes[r] && !u.mimeTypes[r].enabledPlugin)) {
                c = true;
                v = false;
                g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10);
                m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof o.ActiveXObject != e) {
                try {
                    var y = new ActiveXObject(i);
                    if (y) {
                        g = y.GetVariable("$version");
                        if (g) {
                            v = true;
                            g = g.split(" ")[1].split(",");
                            m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]
                        }
                    }
                } catch (b) {
                }
            }
        }
        return {w3: a, pv: m, wk: h, ie: v, win: d, mac: p}
    }(), j = function () {
        if (!S.w3) {
            return
        }
        if (typeof l.readyState != e && l.readyState == "complete" || typeof l.readyState == e && (l.getElementsByTagName("body")[0] || l.body)) {
            k()
        }
        if (!b) {
            if (typeof l.addEventListener != e) {
                l.addEventListener("DOMContentLoaded", k, false)
            }
            if (S.ie && S.win) {
                l.attachEvent(s, function () {
                    if (l.readyState == "complete") {
                        l.detachEvent(s, arguments.callee);
                        k()
                    }
                });
                if (o == top) {
                    (function () {
                        if (b) {
                            return
                        }
                        try {
                            l.documentElement.doScroll("left")
                        } catch (e) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        k()
                    })()
                }
            }
            if (S.wk) {
                (function () {
                    if (b) {
                        return
                    }
                    if (!/loaded|complete/.test(l.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    k()
                })()
            }
            N(k)
        }
    }();

    function k() {
        if (b) {
            return
        }
        try {
            var e = l.getElementsByTagName("body")[0].appendChild(W("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = true;
        var n = f.length;
        for (var i = 0; i < n; i++) {
            f[i]()
        }
    }

    function A(e) {
        if (b) {
            e()
        } else {
            f[f.length] = e
        }
    }

    function N(t) {
        if (typeof o.addEventListener != e) {
            o.addEventListener("load", t, false)
        } else {
            if (typeof l.addEventListener != e) {
                l.addEventListener("load", t, false)
            } else {
                if (typeof o.attachEvent != e) {
                    U(o, "onload", t)
                } else {
                    if (typeof o.onload == "function") {
                        var n = o.onload;
                        o.onload = function () {
                            n();
                            t()
                        }
                    } else {
                        o.onload = t
                    }
                }
            }
        }
    }

    function C() {
        if (c) {
            E()
        } else {
            L()
        }
    }

    function E() {
        var n = l.getElementsByTagName("body")[0];
        var i = W(t);
        i.setAttribute("type", r);
        var a = n.appendChild(i);
        if (a) {
            var s = 0;
            (function () {
                if (typeof a.GetVariable != e) {
                    var t = a.GetVariable("$version");
                    if (t) {
                        t = t.split(" ")[1].split(",");
                        S.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]
                    }
                } else {
                    if (s < 10) {
                        s++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                n.removeChild(i);
                a = null;
                L()
            })()
        } else {
            L()
        }
    }

    function L() {
        var t = d.length;
        if (t > 0) {
            for (var n = 0; n < t; n++) {
                var i = d[n].id;
                var r = d[n].callbackFn;
                var a = {success: false, id: i};
                if (S.pv[0] > 0) {
                    var s = R(i);
                    if (s) {
                        if (z(d[n].swfVersion) && !(S.wk && S.wk < 312)) {
                            $(i, true);
                            if (r) {
                                a.success = true;
                                a.ref = F(i);
                                r(a)
                            }
                        } else {
                            if (d[n].expressInstall && P()) {
                                var o = {};
                                o.data = d[n].expressInstall;
                                o.width = s.getAttribute("width") || "0";
                                o.height = s.getAttribute("height") || "0";
                                if (s.getAttribute("class")) {
                                    o.styleclass = s.getAttribute("class")
                                }
                                if (s.getAttribute("align")) {
                                    o.align = s.getAttribute("align")
                                }
                                var l = {};
                                var u = s.getElementsByTagName("param");
                                var c = u.length;
                                for (var f = 0; f < c; f++) {
                                    if (u[f].getAttribute("name").toLowerCase() != "movie") {
                                        l[u[f].getAttribute("name")] = u[f].getAttribute("value")
                                    }
                                }
                                O(o, l, i, r)
                            } else {
                                D(s);
                                if (r) {
                                    r(a)
                                }
                            }
                        }
                    }
                } else {
                    $(i, true);
                    if (r) {
                        var p = F(i);
                        if (p && typeof p.SetVariable != e) {
                            a.success = true;
                            a.ref = p
                        }
                        r(a)
                    }
                }
            }
        }
    }

    function F(n) {
        var i = null;
        var r = R(n);
        if (r && r.nodeName == "OBJECT") {
            if (typeof r.SetVariable != e) {
                i = r
            } else {
                var a = r.getElementsByTagName(t)[0];
                if (a) {
                    i = a
                }
            }
        }
        return i
    }

    function P() {
        return !w && z("6.0.65") && (S.win || S.mac) && !(S.wk && S.wk < 312)
    }

    function O(t, n, i, r) {
        w = true;
        g = r || null;
        y = {success: false, id: i};
        var s = R(i);
        if (s) {
            if (s.nodeName == "OBJECT") {
                v = I(s);
                m = null
            } else {
                v = s;
                m = i
            }
            t.id = a;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) {
                t.width = "310"
            }
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) {
                t.height = "137"
            }
            l.title = l.title.slice(0, 47) + " - Flash Player Installation";
            var u = S.ie && S.win ? "ActiveX" : "PlugIn", c = "MMredirectURL=" + o.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + u + "&MMdoctitle=" + l.title;
            if (typeof n.flashvars != e) {
                n.flashvars += "&" + c
            } else {
                n.flashvars = c
            }
            if (S.ie && S.win && s.readyState != 4) {
                var f = W("div");
                i += "SWFObjectNew";
                f.setAttribute("id", i);
                s.parentNode.insertBefore(f, s);
                s.style.display = "none";
                (function () {
                    if (s.readyState == 4) {
                        s.parentNode.removeChild(s)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            M(t, n, i)
        }
    }

    function D(e) {
        if (S.ie && S.win && e.readyState != 4) {
            var t = W("div");
            e.parentNode.insertBefore(t, e);
            t.parentNode.replaceChild(I(e), t);
            e.style.display = "none";
            (function () {
                if (e.readyState == 4) {
                    e.parentNode.removeChild(e)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            e.parentNode.replaceChild(I(e), e)
        }
    }

    function I(e) {
        var n = W("div");
        if (S.win && S.ie) {
            n.innerHTML = e.innerHTML
        } else {
            var i = e.getElementsByTagName(t)[0];
            if (i) {
                var r = i.childNodes;
                if (r) {
                    var a = r.length;
                    for (var s = 0; s < a; s++) {
                        if (!(r[s].nodeType == 1 && r[s].nodeName == "PARAM") && !(r[s].nodeType == 8)) {
                            n.appendChild(r[s].cloneNode(true))
                        }
                    }
                }
            }
        }
        return n
    }

    function M(n, i, a) {
        var s, o = R(a);
        if (S.wk && S.wk < 312) {
            return s
        }
        if (o) {
            if (typeof n.id == e) {
                n.id = a
            }
            if (S.ie && S.win) {
                var l = "";
                for (var u in n) {
                    if (n[u] != Object.prototype[u]) {
                        if (u.toLowerCase() == "data") {
                            i.movie = n[u]
                        } else {
                            if (u.toLowerCase() == "styleclass") {
                                l += ' class="' + n[u] + '"'
                            } else {
                                if (u.toLowerCase() != "classid") {
                                    l += " " + u + '="' + n[u] + '"'
                                }
                            }
                        }
                    }
                }
                var c = "";
                for (var f in i) {
                    if (i[f] != Object.prototype[f]) {
                        c += '<param name="' + f + '" value="' + i[f] + '" />'
                    }
                }
                o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + l + ">" + c + "</object>";
                p[p.length] = n.id;
                s = R(n.id)
            } else {
                var d = W(t);
                d.setAttribute("type", r);
                for (var h in n) {
                    if (n[h] != Object.prototype[h]) {
                        if (h.toLowerCase() == "styleclass") {
                            d.setAttribute("class", n[h])
                        } else {
                            if (h.toLowerCase() != "classid") {
                                d.setAttribute(h, n[h])
                            }
                        }
                    }
                }
                for (var v in i) {
                    if (i[v] != Object.prototype[v] && v.toLowerCase() != "movie") {
                        H(d, v, i[v])
                    }
                }
                o.parentNode.replaceChild(d, o);
                s = d
            }
        }
        return s
    }

    function H(e, t, n) {
        var i = W("param");
        i.setAttribute("name", t);
        i.setAttribute("value", n);
        e.appendChild(i)
    }

    function B(e) {
        var t = R(e);
        if (t && t.nodeName == "OBJECT") {
            if (S.ie && S.win) {
                t.style.display = "none";
                (function () {
                    if (t.readyState == 4) {
                        V(e)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                t.parentNode.removeChild(t)
            }
        }
    }

    function V(e) {
        var t = R(e);
        if (t) {
            for (var n in t) {
                if (typeof t[n] == "function") {
                    t[n] = null
                }
            }
            t.parentNode.removeChild(t)
        }
    }

    function R(e) {
        var t = null;
        try {
            t = l.getElementById(e)
        } catch (n) {
        }
        return t
    }

    function W(e) {
        return l.createElement(e)
    }

    function U(e, t, n) {
        e.attachEvent(t, n);
        h[h.length] = [e, t, n]
    }

    function z(e) {
        var t = S.pv, n = e.split(".");
        n[0] = parseInt(n[0], 10);
        n[1] = parseInt(n[1], 10) || 0;
        n[2] = parseInt(n[2], 10) || 0;
        return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? true : false
    }

    function q(n, i, r, a) {
        if (S.ie && S.mac) {
            return
        }
        var s = l.getElementsByTagName("head")[0];
        if (!s) {
            return
        }
        var o = r && typeof r == "string" ? r : "screen";
        if (a) {
            T = null;
            _ = null
        }
        if (!T || _ != o) {
            var u = W("style");
            u.setAttribute("type", "text/css");
            u.setAttribute("media", o);
            T = s.appendChild(u);
            if (S.ie && S.win && typeof l.styleSheets != e && l.styleSheets.length > 0) {
                T = l.styleSheets[l.styleSheets.length - 1]
            }
            _ = o
        }
        if (S.ie && S.win) {
            if (T && typeof T.addRule == t) {
                T.addRule(n, i)
            }
        } else {
            if (T && typeof l.createTextNode != e) {
                T.appendChild(l.createTextNode(n + " {" + i + "}"))
            }
        }
    }

    function $(e, t) {
        if (!x) {
            return
        }
        var n = t ? "visible" : "hidden";
        if (b && R(e)) {
            R(e).style.visibility = n
        } else {
            q("#" + e, "visibility:" + n)
        }
    }

    function X(t) {
        var n = /[\\\"<>\.;]/;
        var i = n.exec(t) != null;
        return i && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }

    var G = function () {
        if (S.ie && S.win) {
            window.attachEvent("onunload", function () {
                var e = h.length;
                for (var t = 0; t < e; t++) {
                    h[t][0].detachEvent(h[t][1], h[t][2])
                }
                var n = p.length;
                for (var i = 0; i < n; i++) {
                    B(p[i])
                }
                for (var r in S) {
                    S[r] = null
                }
                S = null;
                for (var a in swfobject) {
                    swfobject[a] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function (e, t, n, i) {
            if (S.w3 && e && t) {
                var r = {};
                r.id = e;
                r.swfVersion = t;
                r.expressInstall = n;
                r.callbackFn = i;
                d[d.length] = r;
                $(e, false)
            } else {
                if (i) {
                    i({success: false, id: e})
                }
            }
        }, getObjectById: function (e) {
            if (S.w3) {
                return F(e)
            }
        }, embedSWF: function (n, i, r, a, s, o, l, u, c, f) {
            var d = {success: false, id: i};
            if (S.w3 && !(S.wk && S.wk < 312) && n && i && r && a && s) {
                $(i, false);
                A(function () {
                    r += "";
                    a += "";
                    var p = {};
                    if (c && typeof c === t) {
                        for (var h in c) {
                            p[h] = c[h]
                        }
                    }
                    p.data = n;
                    p.width = r;
                    p.height = a;
                    var v = {};
                    if (u && typeof u === t) {
                        for (var m in u) {
                            v[m] = u[m]
                        }
                    }
                    if (l && typeof l === t) {
                        for (var g in l) {
                            if (typeof v.flashvars != e) {
                                v.flashvars += "&" + g + "=" + l[g]
                            } else {
                                v.flashvars = g + "=" + l[g]
                            }
                        }
                    }
                    if (z(s)) {
                        var y = M(p, v, i);
                        if (p.id == i) {
                            $(i, true)
                        }
                        d.success = true;
                        d.ref = y
                    } else {
                        if (o && P()) {
                            p.data = o;
                            O(p, v, i, f);
                            return
                        } else {
                            $(i, true)
                        }
                    }
                    if (f) {
                        f(d)
                    }
                })
            } else {
                if (f) {
                    f(d)
                }
            }
        }, switchOffAutoHideShow: function () {
            x = false
        }, ua: S, getFlashPlayerVersion: function () {
            return {major: S.pv[0], minor: S.pv[1], release: S.pv[2]}
        }, hasFlashPlayerVersion: z, createSWF: function (e, t, n) {
            if (S.w3) {
                return M(e, t, n)
            } else {
                return undefined
            }
        }, showExpressInstall: function (e, t, n, i) {
            if (S.w3 && P()) {
                O(e, t, n, i)
            }
        }, removeSWF: function (e) {
            if (S.w3) {
                B(e)
            }
        }, createCSS: function (e, t, n, i) {
            if (S.w3) {
                q(e, t, n, i)
            }
        }, addDomLoadEvent: A, addLoadEvent: N, getQueryParamValue: function (e) {
            var t = l.location.search || l.location.hash;
            if (t) {
                if (/\?/.test(t)) {
                    t = t.split("?")[1]
                }
                if (e == null) {
                    return X(t)
                }
                var n = t.split("&");
                for (var i = 0; i < n.length; i++) {
                    if (n[i].substring(0, n[i].indexOf("=")) == e) {
                        return X(n[i].substring(n[i].indexOf("=") + 1))
                    }
                }
            }
            return ""
        }, expressInstallCallback: function () {
            if (w) {
                var e = R(a);
                if (e && v) {
                    e.parentNode.replaceChild(v, e);
                    if (m) {
                        $(m, true);
                        if (S.ie && S.win) {
                            v.style.display = "block"
                        }
                    }
                    if (g) {
                        g(y)
                    }
                }
                w = false
            }
        }
    }
}();
(function (e) {
    e.version = 2016032201;
    e.majorVersion = 10;
    e.majorRevision = 3;
    createPreviewPlayer = function (e) {
        e.previewMode = true;
        return createShowPlayer(e, this)
    };
    createShowPlayer = function (t, n) {
        var i;

        function r(n) {
            var r = [];
            var a = e(n).parents();
            for (var s = 0; s < a.length; s++) {
                r.push(e(a[s]).css("position"));
                if (e(a[s]).parent()[0].tagName === "BODY") {
                    if (e(a[s]).attr("id") == undefined) {
                        e(a[s]).attr("id", "polyvContainer" + t.vid)
                    }
                    i = e(a[s]).attr("id")
                }
            }
            return r
        }

        function a(t, n) {
            var i = e(t).parents();
            for (var r = 0; r < i.length; r++) {
                e(i[r]).css("position", n[r])
            }
        }

        function s() {
            var t = [];
            var n = e("body").children();
            for (var i = 0; i < n.length; i++) {
                t.push(e(n[i]).css("display"));
                e(n[i]).css("display", "none")
            }
            return t
        }

        function o(t) {
            var n = e("body").children();
            for (var i = 0; i < n.length; i++) {
                e(n[i]).css("display", t[i])
            }
        }

        if (!arguments[1]) {
            n = this
        }
        if (t.forceFlash) {
            if (t.vid && t.previewMode) {
                t.vid = e.decode(t.vid)
            }
            return privateCreate(n, t)
        }
        if (e.isSupportedHTMLDevice() || t.forceHTML5) {
            var l = JSON.stringify(t);
            var u = "http://";
            if (window.location.protocol == "https:") {
                u = "https://"
            }
            var c = u + "v3.polyv.net";
            var f = u + "player.polyv.net";
            var d = t;
            var p = window.location.href;
            var h = document.domain;
            var v = t.vid;
            var m = "polyvPlayer" + v;
            var g = false;
            var y = false;
            var b = d.width;
            var w = 1;
            var T = 0;
            var _ = 0;
            var x = 0;
            var S = false;
            var j = "";
            var k = 3;
            if (t.slot) {
                k = t.slot
            }
            if (typeof s2j_callOnBarrageUrl == "function") {
                j = s2j_callOnBarrageUrl()
            }
            var A = e('<div id="container' + t.vid + '"></div>');
            e(n).append(A);
            e(A).css("height", d.height);
            e(A).css("width", d.width);
            e(A).css("position", "relative");
            var N = "href=" + p + "&settings=" + l;
            var C = u + "player.polyv.net/script/view" + k + ".html" + "?" + encodeURIComponent(N);
            if (t.beta_test == "on") {
                f = u + "beta.polyv.net";
                C = u + "beta.polyv.net/file/player/trunk/view" + k + ".html" + "?" + encodeURIComponent(N)
            }
            e("<iframe />", {
                name: "polyvPlayer",
                id: m,
                frameborder: "0",
                height: "100%",
                width: "100%",
                style: "overflow:hidden;height:100%;width:100%;left:0;position:absolute;z-index:999",
                src: C,
                allowfullscreen: "",
                mozallowfullscreen: "",
                webkitallowfullscreen: ""
            }).appendTo(A);
            if (d.height == 0) {
                y = true;
                e.ajax({
                    url: c + "/videojson/" + v + ".js",
                    type: "GET",
                    dataType: "jsonp",
                    async: false,
                    success: function (t) {
                        d.ratio = t.ratio;
                        w = d.ratio;
                        var n = parseInt(e(A).css("width")) / d.ratio;
                        d.height = n;
                        e(A).css("height", n);
                        F = e(A).css("height")
                    }
                })
            }
            if (t.vid && d.previewMode) {
                v = t.vid = e.decode(t.vid)
            }
            d.j2s_getDuration = function () {
                return T
            };
            d.j2s_getCurrentTime = function () {
                return _
            };
            d.j2s_resumeVideo = function () {
                B("j2s_resumeVideo", v)
            };
            d.j2s_pauseVideo = function () {
                B("j2s_pauseVideo", v)
            };
            d.j2s_seekVideo = function (e) {
                B("j2s_seekVideo", v, e)
            };
            d.j2s_stopVideo = function () {
                B("j2s_stopVideo", v)
            };
            d.j2s_stayInVideoTime = function () {
                return x
            };
            d.j2s_switch = function (e) {
                B("j2s_switch", v, e)
            };
            d.j2s_showBarrage = function () {
                B("j2s_showBarrage", v)
            };
            d.j2s_hideBarrage = function () {
                B("j2s_hideBarrage", v)
            };
            d.j2s_addBarrageMessage = function (e) {
                B("j2s_addBarrageMessage", v, e)
            };
            d.j2s_reloadBarrageData = function () {
                B("j2s_reloadBarrageData", v)
            };
            d.changeVid = function (e, t) {
                if (!arguments[1]) {
                    t = 0
                }
                var n = '{"vid":"' + e + '","watchStartTime":"' + t + '"}';
                B("changeVid", v, n);
                if (e != v) {
                    v = e
                }
            };
            d.j2s_setVolume = function (e) {
                B("j2s_setVolume", v, e)
            };
            d.j2s_removeVideo = function () {
                e(n).empty()
            };
            var E = e(A).css("position");
            var L = d.width;
            var F = d.height;
            var P = r("#" + m);
            var O = document.body.style.overflow;
            var D = document.body.style.width;
            var I = document.body.style.height;
            var M = [];
            window.addEventListener("message", function (t) {
                if (t.data.vid == v) {
                    switch (t.data.message) {
                        case"fullScreen":
                            S = true;
                            e("#" + m).css({position: "fixed", "z-index": 1001, top: 0, left: 0});
                            e("body").css({overflow: "hidden", width: "100%", height: "100%"});
                            e("html, body").scrollTop(0);
                            M = s();
                            e("#" + i).css("display", "block");
                            B("adjust", v);
                            if (d.s2j_onFullScreen) {
                                d.s2j_onFullScreen(v)
                            }
                            break;
                        case"normalScreen":
                            S = false;
                            e("#" + m).css({position: "absolute", top: "auto", left: 0, right: "auto", "z-index": 999});
                            e("body").css({overflow: O, width: D, height: I});
                            e("html, body").scrollTop(e("#" + m).offset().top - 100);
                            o(M);
                            B("adjust", v);
                            if (d.s2j_onNormalScreen) {
                                d.s2j_onNormalScreen(v)
                            }
                            break;
                        case"s2j_onPlayerInitOver":
                            if (d.s2j_onPlayerInitOver) {
                                d.s2j_onPlayerInitOver()
                            }
                            if (typeof s2j_onPlayerInitOver == "function") {
                                s2j_onPlayerInitOver(v)
                            }
                            break;
                        case"s2j_onPlayStart":
                            T = t.data.duration;
                            if (d.s2j_onPlayStart) {
                                g = true;
                                d.s2j_onPlayStart()
                            }
                            if (typeof s2j_onPlayStart == "function") {
                                s2j_onPlayStart(v)
                            }
                            break;
                        case"s2j_onVideoPlay":
                            if (d.s2j_onVideoPlay) {
                                d.s2j_onVideoPlay()
                            }
                            if (typeof s2j_onVideoPlay == "function") {
                                s2j_onVideoPlay(v)
                            }
                            break;
                        case"s2j_onVideoPause":
                            if (d.s2j_onVideoPause) {
                                d.s2j_onVideoPause()
                            }
                            if (typeof s2j_onVideoPause == "function") {
                                s2j_onVideoPause(v)
                            }
                            break;
                        case"s2j_onPlayOver":
                            if (d.s2j_onPlayOver) {
                                d.s2j_onPlayOver()
                            }
                            if (typeof s2j_onPlayOver == "function") {
                                s2j_onPlayOver(v)
                            }
                            break;
                        case"s2j_onSwitchHd":
                            if (d.s2j_onSwitchHd) {
                                d.s2j_onSwitchHd()
                            }
                            if (typeof s2j_onSwitchHd == "function") {
                                var n = t.data.hdNum + 1;
                                s2j_onSwitchHd(v, n)
                            }
                            break;
                        case"renderParam":
                            _ = t.data.cur;
                            x = t.data.stay;
                            break;
                        case"documentReady":
                            document.getElementById(m).addEventListener("touchend", function (e) {
                                B("touchEnd", v)
                            }, false);
                            if (j != "") {
                                B("j2s_openDanmu", v, j)
                            }
                            break
                    }
                }
            }, false);
            window.addEventListener("onorientationchange"in window ? "orientationchange" : "resize", function () {
                setTimeout(function () {
                    if (y) {
                        if (b.indexOf("%") != -1) {
                            L = parseInt(b) / 100 * e(window).width();
                            F = L / w;
                            L = b
                        } else {
                            F = parseInt(L) / w
                        }
                        if (!S) {
                            e("#" + m).css({position: "relative"});
                            e(A).css({position: E, width: L, height: F})
                        }
                    }
                    setTimeout(function () {
                        B("adjust", v)
                    }, 50)
                }, 300)
            }, false);
            var H = document.getElementById(m);

            function B(e, t, n) {
                if (!arguments[2])n = 0;
                H.contentWindow.postMessage({value: e, vid: t, param1: n}, f)
            }

            return d
        } else {
            if (t.vid && t.previewMode) {
                t.vid = e.decode(t.vid)
            }
            return privateCreate(n, t)
        }
    };
    createPlayer = function (e) {
        if (e.ban_ui == true || e.ban_ui == "on") {
            e.hidecontrol = "true";
            return privateCreate(this, e)
        } else {
            return createShowPlayer(e, this)
        }
    };
    privateCreate = function (t, n) {
        var i;
        var r = "http://";
        if (window.location.protocol == "https:") {
            r = "https://"
        }
        var a = r + "v3.polyv.net";
        var s = r + "v.polyv.net";
        var o = r + "playertest.polyv.net";
        setCookie = function (e, t, n) {
            var i = new Date;
            i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
            var r = "expires=" + i.toGMTString();
            document.cookie = e + "=" + t + "; " + r + ";domain=.polyv.net;path=/"
        };
        e.renderInstallGif = function (t, n) {
            if (t.css("height").charAt(t.css("height").length - 1) == "%") {
                t.css("display", "block")
            } else {
                t.css("display", "inline-block")
            }
            var i = "";
            if (n == e.playerType.INSTALLER) {
                i = "http://player.polyv.net/script/images/install_flash_player.gif"
            } else {
                i = "http://player.polyv.net/script/images/upgrade_flash_player.gif"
            }
            var r = "<a href='http://www.adobe.com/go/getflash/' target='_blank'><img src='" + i + "' alt='Get Flash Player' width='314' height='200' border='0'></a>";
            if (window.location.protocol == "https:") {
                r = "<a href='https://www.adobe.com/go/getflash/' target='_blank'><img src='" + i + "' alt='Get Flash Player' width='314' height='200' border='0'></a>"
            }
            t.html(r)
        };
        e.launchFullScreen = function (e) {
            if (e.requestFullScreen) {
                e.requestFullScreen()
            } else if (e.mozRequestFullScreen) {
                e.mozRequestFullScreen()
            } else if (e.webkitRequestFullScreen) {
                e.webkitRequestFullScreen()
            }
        };
        e.makeFlashPlayer = function (t, n) {
            var i = e.isSupportedHTMLDevice();
            n.swf_link = r + n.domain + "/videos/player.swf";
            if (!n.flashvars) {
                n.flashvars = {}
            }
            n.flashvars.vid = n.vid;
            if (n.df) {
                n.flashvars.df = n.df
            }
            if (n.show_rate) {
                n.flashvars.show_rate = n.show_rate
            }
            if (n.teaser_time) {
                n.flashvars.teaser_time = n.teaser_time
            }
            if (n.code) {
                n.flashvars.code = n.code
            }
            if (n.ban_ad) {
                if (n.ban_ad == true) {
                    n.ban_ad = "on"
                }
                n.flashvars.ban_ad = n.ban_ad
            }
            if (n.ban_ad_time) {
                if (n.ban_ad_time == true) {
                    n.ban_ad_time = "on"
                }
                n.flashvars.ban_ad_time = n.ban_ad_time
            }
            if (n.showHd == "off") {
                n.flashvars.showHd = n.showHd
            }
            if (n.ban_skin_progress) {
                n.flashvars.ban_skin_progress = n.ban_skin_progress
            }
            if (n.teaserSkip) {
                n.flashvars.teaserSkip = n.teaserSkip
            }
            if (n.ban_skin_leftright_keyboard) {
                n.flashvars.ban_skin_leftright_keyboard = n.ban_skin_leftright_keyboard
            }
            if (n.loading_bg_img) {
                n.flashvars.cover_img = n.loading_bg_img
            }
            if (n.previewMode == true) {
                n.flashvars.watchEndTime = n.previewlong
            }
            if (n.is_access_validurl) {
                n.flashvars.is_access_validurl = n.is_access_validurl
            }
            if (n.verification_data) {
                n.flashvars.verification_data = n.verification_data
            }
            if (n.showSrt) {
                n.flashvars.showSrt = n.showSrt
            }
            if (n.ban_ui) {
                if (n.ban_ui == true) {
                    n.ban_ui = "on"
                }
                n.flashvars.ban_ui = n.ban_ui
            }
            if (i) {
                n.flashvars.banSaveSegData = "on"
            }
            for (var a in n.params) {
                n.flashvars[a] = n.params[a]
            }
            var s = "";
            for (var o in n.flashvars) {
                s = s + o + "=" + n.flashvars[o] + "&"
            }
            for (var a in n.params) {
                n.flashvars[a] = n.params[a]
            }
            if (e.isIE()) {
                n.flashParams.movie = n.swf_link;
                var l = "";
                l += '<param name="flashvars" value="' + s + '" />';
                for (var u in n.flashParams) {
                    l += '<param name="' + u + '" value="' + n.flashParams[u] + '" />'
                }
                var c = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + n.vid + '"' + ' width="' + n.width + '"' + ' height="' + n.height + '"' + ' type="application/x-shockwave-flash"' + ' class="polyvFlashObject">' + l + "</object>";
                t.html(c)
            } else {
                var f = document.createElement("object");
                f.type = "application/x-shockwave-flash";
                f.data = n.swf_link;
                f.id = n.vid;
                f.width = n.width;
                f.height = n.height;
                f.className = "polyvFlashObject";
                n.flashParams.flashvars = s;
                var d;
                for (var p in n.flashParams) {
                    d = document.createElement("param");
                    d.name = p;
                    d.value = n.flashParams[p];
                    f.appendChild(d)
                }
                t.html(f)
            }
        };
        e.renderFlash = function (t, n) {
            if (n.height == 0) {
                e.ajax({
                    url: a + "/videojson/" + n.vid + ".js",
                    type: "GET",
                    dataType: "jsonp",
                    async: false,
                    success: function (i) {
                        n.ratio = i.ratio;
                        if (n.width.charAt(n.width.length - 1) == "%") {
                            var r = window.innerWidth > 0 ? window.innerWidth : screen.width;
                            n.height = r * (parseInt(n.width) / 100) / i.ratio
                        } else {
                            n.height = n.width / i.ratio
                        }
                        e.makeFlashPlayer(t, n)
                    }
                })
            } else {
                e.makeFlashPlayer(t, n)
            }
        };
        containInHost = function (t) {
            var n = t.split(",");
            for (var i = 0; i < n.length; i++) {
                if (n[i].length > 0 && e.domain.indexOf(n[i]) != -1) {
                    return true
                }
            }
            return false
        };
        var l = a + "/uc/video/settings";
        var u = {
            flashParams: {
                allowScriptAccess: "always",
                allowFullScreen: "true",
                quality: "high",
                bgcolor: "#ffffff",
                allowFullScreen: "true",
                wmode: "transparent"
            },
            playerWidth: "1.0",
            allowfullscreen: "true",
            domain: "player.polyv.net",
            allowscriptaccess: "always",
            wmode: "Transparent",
            loading_bg_img: "",
            df: 0,
            flashvars: {},
            params: {},
            watch_start_time: "0",
            autoplay: false,
            is_auto_replay: "off",
            width: 600,
            height: 480,
            stay_duration: 0,
            ts: "",
            sign: "",
            j2s_getCurrentTime: function () {
                return 0
            },
            j2s_getDuration: function () {
                return 0
            },
            j2s_resumeVideo: function () {
            },
            j2s_pauseVideo: function () {
            },
            j2s_stopVideo: function () {
            },
            j2s_seekVideo: function () {
            },
            j2s_getVideo: function () {
            },
            videoClass: "plvideo"
        };
        u.previewlong = 180;
        u.showHd = "on";
        if (n) {
            e.extend(u, n)
        }
        if (!u.vid) {
            return
        }
        var c = e.checkLowerDevice();
        var f = e.checkFlashSupport();
        var d = e.checkHtmlSupport();
        var p = e.determinePlayerType(u, f, d);
        var h = u.vid.substring(0, 10);
        if (p == e.playerType.NO_SUPPORT || p == e.playerType.INSTALLER) {
            e.renderInstallGif(t, p);
            return
        }
        if (p == e.playerType.FLASH) {
            e.renderFlash(t, u);
            if (u.s2j_onPlayStart) {
                s2j_onPlayStart = u.s2j_onPlayStart
            }
            if (u.s2j_onPlayOver) {
                s2j_onPlayOver = u.s2j_onPlayOver
            }
            if (u.s2j_onVideoPlay) {
                s2j_onVideoPlay = u.s2j_onVideoPlay
            }
            if (u.s2j_onVideoPause) {
                s2j_onVideoPause = u.s2j_onVideoPause
            }
            if (u.s2j_onPlayerInitOver) {
                s2j_onPlayerInitOver = u.s2j_onPlayerInitOver
            }
            if (u.s2j_focusComment) {
                s2j_focusComment = u.s2j_focusComment
            }
            if (u.s2j_onSwitchHd) {
                s2j_onSwitchHd = u.s2j_onSwitchHd
            }
            s2j_getPreviewMode = function () {
                if (u.previewMode == true) {
                    return 1
                }
            };
            return e.getPlayer(u.vid)
        }
        var v = "";
        var m = a + "/videojson/" + u.vid + ".js";
        u.uid = u.vid.substr(0, 10);
        if (!u.code) {
            u.code = ""
        }
        u.isClickPlayButton = "off";
        if (u.beta_test == "on") {
            if (u.jsonUrl) {
                m = u.jsonUrl
            }
        }
        if (u.teaser_time) {
            u.teaser_time_set = u.teaser_time
        } else {
            u.teaser_time = u.teaser_time_set = -1
        }
        g(m, u);
        function g(n, i) {
            e.ajax({
                url: m, type: "GET", dataType: "jsonp", async: false, success: function (n) {
                    var i = true;
                    if (n.outflow == "false" && n.timeoutflow == "false") {
                        i = false
                    }
                    v = n.hash;
                    if (n.setting_type == 1 && containInHost(n.disable_host)) {
                        i = true
                    }
                    if (n.setting_type == 2 && !containInHost(n.enable_host) && window.location.href.indexOf("polyv.net") == -1) {
                        i = true
                    }
                    u.outdate = i;
                    u.zColor = n.player.zColor;
                    u.skincolor = n.player.skincolor;
                    u.pColor = n.player.pColor;
                    u.videolink = n.videolink;
                    u.my_br = n.my_br;
                    u.flv = n.flv;
                    u.mp4 = n.mp4;
                    u.hls = n.hls;
                    u.df_num = n.df_num;
                    u.hlsIndex = n.hlsIndex;
                    u.duration = n.duration;
                    u.teaser_url = n.teaser_url;
                    u.teaser_show = n.teaser_show;
                    u.adList = n.adMatter;
                    u.cataid = n.cataid;
                    u.adsetting = n.adsetting == "true" ? "true" : "false";
                    u.weburl = n.weburl;
                    u.fileSize = n.filesize;
                    u.validUrl2 = n.validUrl2;
                    if (u.verification_data) {
                        u.validUrl2 = u.verification_data
                    }
                    u.srt_list = [];
                    for (var r in n.video_srt) {
                        var a = [];
                        a.push(r);
                        a.push(n.video_srt[r]);
                        u.srt_list.push(a)
                    }
                    u.srt_list.reverse();
                    u.srt_index = 0;
                    u.show_srt = true;
                    if (u.showSrt == "off") {
                        u.show_srt = false
                    }
                    if (u.teaser_time == -1) {
                        u.teaser_time = n.teaser_time != "" ? n.teaser_time : 1;
                        if (n.teaser_time == "") {
                            u.teaserShowAll = true
                        } else {
                            u.teaserShowAll = false
                        }
                    } else {
                        u.teaser_time = u.teaser_time_set > 0 ? u.teaser_time_set : 1;
                        u.teaserShowAll = false
                    }
                    if (!!u.isChangeVid) {
                        u.taser_show = 0;
                        u.adList = []
                    }
                    if (u.skinColor) {
                        if (typeof changeSkinColor == "function") {
                            changeSkinColor(u.skinColor)
                        }
                    }
                    if (u.is_access_validurl != "on") {
                        u.is_access_validurl = "off"
                    } else {
                        u.is_access_validurl = "on"
                    }
                    if (u.uid == "05714ecace") {
                        u.is_access_validurl = "on"
                    }
                    u.j2s_getDuration = function () {
                        return u.duration
                    };
                    u.j2s_getJsonDuration = function () {
                        return n.duration
                    };
                    u.first_image = n.first_image;
                    u.seed = n.seed;
                    u.ratio = n.ratio;
                    u.swf_link = n.swf_link;
                    u.status = n.status;
                    u.changeBrowser = u.seed == 1 && e.isFirefox() ? true : false;
                    if (u.forceHLS && e.isFirefox()) {
                        u.changeBrowser = true
                    }
                    if (n.status < 60) {
                        u.outdate = true
                    }
                    if (!!u.isChangeVid) {
                        var s;
                        if (u.validUrl2.length > 0 && u.is_access_validurl == "on") {
                            O()
                        } else {
                            A(s, e("video")[0])
                        }
                    } else {
                        P(t)
                    }
                }, error: function (t) {
                    console.debug(" VIDEO JSON FAIL ");
                    var n = {};
                    n.pid = u.pid;
                    n.uid = u.uid;
                    n.vid = u.vid;
                    n.error = "load_videojson_failure";
                    n.type = "error";
                    n.href = e.href;
                    n.request_uri = m;
                    n.response_code = 0;
                    F(n)
                }
            })
        }

        function y(t, n, i, r) {
            if (u.teaser_url != "" && u.teaser_show == 1) {
                if (u.teaserSkip) {
                    if (typeof addTeaserSkip == "function") {
                        addTeaserSkip()
                    }
                }
                var a = /\.[^\.]+$/.exec(u.teaser_url);
                if (a == ".png" || a == ".jpg" || a == ".gif") {
                    var s = false;
                    var o = new Image;
                    e(o).attr("src", u.teaser_url);
                    e(o).error(function () {
                        if (l) {
                            clearTimeout(l)
                        }
                        if (!s) {
                            s = true;
                            x(t, r, "pre")
                        }
                    });
                    e.updateFlowStatus(e.FLOW_STATUS.TEASER);
                    n.css("background-image", "url(" + u.teaser_url + ")");
                    var l = setTimeout(function () {
                        if (u.teaser_show == 1) {
                            if (!s) {
                                s = true;
                                x(t, r, "pre")
                            }
                        }
                        clearTimeout(l)
                    }, u.teaser_time * 1e3)
                } else if (a == ".mp4") {
                    var c = false;
                    e.updateFlowStatus(e.FLOW_STATUS.TEASER);
                    n.css("background-image", 'url("")');
                    i.attr("src", u.teaser_url);
                    i.css({width: "100%", display: "block"});
                    i[0].play();
                    var f = setTimeout(function (n) {
                        if (i[0].error != null) {
                            if (e.flowStatus != e.FLOW_STATUS.PLAY) {
                                if (!c) {
                                    c = true;
                                    x(t, r, "pre")
                                }
                            }
                        }
                        clearTimeout(f)
                    }, 500);
                    if (!u.teaserShowAll) {
                        var d = setTimeout(function (e) {
                            if (u.teaser_show == 1) {
                                if (!c) {
                                    c = true;
                                    x(t, r, "pre")
                                }
                            }
                            clearTimeout(d)
                        }, u.teaser_time * 1e3)
                    }
                } else {
                    x(t, r, "pre")
                }
            } else {
                x(t, r, "pre")
            }
        }

        var b = [];
        var w = [];
        var T = [];
        var _ = [];
        e.hasADInfo = false;
        function x(t, n, i) {
            e(t).css("background-image", 'url("")');
            e(n).css("display", "none");
            if (!e.hasADInfo) {
                e.hasADInfo = true;
                u.preAd = [];
                u.endAd = [];
                if (u.adList.length > 0) {
                    for (var r = 0; r < u.adList.length; r++) {
                        var a = /\.[^\.]+$/.exec(u.adList[r].matterurl);
                        if (u.adList[r].cataid == u.cataid && u.adList[r].cataid != 1) {
                            if (u.adList[r].adtype != 3) {
                                if (u.adList[r].location == 1) {
                                    if (u.adList[r].adtype == 2) {
                                        if (a == ".mp4" || a == ".m3u8") {
                                            T.push(u.adList[r])
                                        }
                                    } else {
                                        T.push(u.adList[r])
                                    }
                                }
                                if (u.adList[r].location == 3) {
                                    if (u.adList[r].adtype == 2) {
                                        if (a == ".mp4" || a == ".m3u8") {
                                            _.push(u.adList[r])
                                        }
                                    } else {
                                        _.push(u.adList[r])
                                    }
                                }
                            }
                        } else if (u.adList[r].cataid == 1) {
                            if (u.adList[r].adtype != 3) {
                                if (u.adList[r].location == 1) {
                                    if (u.adList[r].adtype == 2) {
                                        if (a == ".mp4" || a == ".m3u8") {
                                            b.push(u.adList[r])
                                        }
                                    } else {
                                        b.push(u.adList[r])
                                    }
                                }
                                if (u.adList[r].location == 3) {
                                    if (u.adList[r].adtype == 2) {
                                        if (a == ".mp4" || a == ".m3u8") {
                                            w.push(u.adList[r])
                                        }
                                    } else {
                                        w.push(u.adList[r])
                                    }
                                }
                            }
                        }
                    }
                    if (u.cataid == 1) {
                        u.preAd = b;
                        u.endAd = w
                    } else {
                        if (T.length == 0) {
                            if (b.length > 0) {
                                u.preAd = b
                            }
                        } else {
                            u.preAd = T
                        }
                        if (_.length == 0) {
                            if (w.length > 0) {
                                u.endAd = w
                            }
                        } else {
                            u.endAd = _
                        }
                    }
                }
            }
            if (u.adsetting == "true") {
                if (e.domain.indexOf(u.weburl) != -1) {
                    u.ban_ad = "on"
                }
            }
            u.adIndex = 0;
            if (i == "pre") {
                e.updateFlowStatus(e.FLOW_STATUS.PREAD);
                if (u.ban_ad_time == "on" || u.ban_ad_time == true) {
                    if (u.banAdTime) {
                        u.banAdTime()
                    }
                }
                if (u.ban_ad == "on" || u.ban_ad == true || u.preAd.length == 0) {
                    A(t, n)
                } else {
                    if (u.preAd.length > 0) {
                        var s = 0;
                        for (var o = 0; o < u.preAd.length; o++) {
                            s += parseInt(u.preAd[o].timesize)
                        }
                        u.preAdTotalTime = s;
                        S(u.preAd, t, n, "pre");
                        if (u.showAdTotalTime) {
                            u.showAdTotalTime(u.preAdTotalTime)
                        }
                    } else {
                        A(t, n)
                    }
                }
            } else {
                e.updateFlowStatus(e.FLOW_STATUS.ENDAD);
                if (!!e.isEndOnce) {
                    e(t).css("background-image", "");
                    e.updateFlowStatus(e.FLOW_STATUS.OVER);
                    return
                }
                if ((u.ban_ad != "on" || u.ban_ad != true) && u.endAd.length > 0) {
                    u.endAdTotalTime = 0;
                    for (var l = 0; l < u.endAd.length; l++) {
                        u.endAdTotalTime += u.endAd[l].timesize
                    }
                    if (u.showAdTotalTime) {
                        u.showAdTotalTime(u.endAdTotalTime)
                    }
                    S(u.endAd, t, n, "end")
                } else {
                    e(t).css("background-image", "");
                    e.isEndOnce = true;
                    e.updateFlowStatus(e.FLOW_STATUS.OVER)
                }
            }
        }

        function S(t, n, i, r) {
            switch (t[u.adIndex].adtype) {
                case 1:
                    e(n).css("background-image", "url(" + t[u.adIndex].matterurl + ")");
                    e(i).css("display", "none");
                    var a = 0;
                    var s;
                    var o = false;
                    var l = new Image;
                    e(l).attr("src", t[u.adIndex].matterurl);
                    e(l).error(function () {
                        if (!o) {
                            clearInterval(s);
                            u.adIndex = 0;
                            if (r == "pre") {
                                e(n).css("background-image", 'url("")');
                                e(i).css("display", "block");
                                A(n, i)
                            } else {
                                e(n).css("background-image", "");
                                e.isEndOnce = true;
                                e.updateFlowStatus(e.FLOW_STATUS.OVER)
                            }
                        }
                    });
                    s = setInterval(function () {
                        a++;
                        if (r == "pre") {
                            u.preAdTotalTime--;
                            if (u.showAdTotalTime) {
                                u.showAdTotalTime(u.preAdTotalTime)
                            }
                        } else {
                            u.endAdTotalTime--;
                            if (u.showAdTotalTime) {
                                u.showAdTotalTime(u.endAdTotalTime)
                            }
                        }
                        if (a == t[u.adIndex].timesize) {
                            o = true;
                            if (u.adIndex == t.length - 1) {
                                u.adIndex = 0;
                                if (r == "pre") {
                                    e(n).css("background-image", 'url("")');
                                    e(i).css("display", "block");
                                    A(n, i)
                                } else {
                                    e(n).css("background-image", "");
                                    e.isEndOnce = true;
                                    e.updateFlowStatus(e.FLOW_STATUS.OVER)
                                }
                            } else {
                                u.adIndex++;
                                S(t, n, i, r)
                            }
                            clearInterval(s)
                        }
                    }, 1e3);
                    break;
                case 2:
                    e(n).css("background-image", 'url("")');
                    e(i).css({display: "block", width: "100%"});
                    i.src = t[u.adIndex].matterurl;
                    i.play();
                    var c = false;
                    setTimeout(function (t) {
                        if (e(i)[0].error != null) {
                            clearInterval(d);
                            u.adIndex = 0;
                            if (r == "pre") {
                                e(n).css("background-image", 'url("")');
                                e(i).css("display", "block");
                                A(n, i)
                            } else {
                                i.pause();
                                e(i).css("display", "none");
                                e(n).css("background-image", "");
                                e.isEndOnce = true;
                                e.updateFlowStatus(e.FLOW_STATUS.OVER)
                            }
                        }
                    }, 500);
                    var f = 0;
                    var d;
                    d = setInterval(function () {
                        f++;
                        if (r == "pre") {
                            u.preAdTotalTime--;
                            if (u.showAdTotalTime) {
                                u.showAdTotalTime(u.preAdTotalTime)
                            }
                        } else {
                            u.endAdTotalTime--;
                            if (u.showAdTotalTime) {
                                u.showAdTotalTime(u.endAdTotalTime)
                            }
                        }
                        if (f == t[u.adIndex].timesize) {
                            c = true;
                            if (u.adIndex == t.length - 1) {
                                u.adIndex = 0;
                                if (r == "pre") {
                                    e(n).css("background-image", 'url("")');
                                    e(i).css("display", "block");
                                    A(n, i)
                                } else {
                                    i.pause();
                                    e(i).css("display", "none");
                                    e(n).css("background-image", "");
                                    e.isEndOnce = true;
                                    e.updateFlowStatus(e.FLOW_STATUS.OVER)
                                }
                            } else {
                                i.pause();
                                u.adIndex++;
                                S(t, n, i, r)
                            }
                            clearInterval(d)
                        }
                    }, 1e3);
                    break
            }
        }

        function j() {
            var t = "js/CommentCoreLibrary.min.js";
            e.getScript(t, function () {
                var t = e("<div " + 'id="CmContainer"' + ">" + "<div" + ">");
                e("#container").append(t);
                e(t).css("top", 0);
                e(t).css("position", "absolute");
                e(t).css("overflow", "hidden");
                e(t).css("width", "100%");
                e(t).css("height", "100%");
                e.cmManager = new CommentManager(t[0]);
                e.ajax({
                    url: e.danmuUrl, type: "GET", dataType: "text", success: function (t) {
                        e.cmManager.init();
                        e.cmManager.load(PolyvParser(t));
                        e.cmManager.startTimer();
                        e.startDanmu = true
                    }, error: function (e, t, n) {
                        console.log(">> comment error" + e.readyState + " / " + e.status)
                    }
                })
            })
        }

        u.j2s_initSrt = function (t, n) {
            if (!arguments[1]) {
                n = false
            }
            if (u.srt_index === t && !n) {
                return
            }
            if (u.srt_list[t][1].indexOf("http://") != -1) {
                u.srt_index = t;
                var i = e("#srtContainer");
                i.html("");
                if (u.srt) {
                    u.srt.stopTimer()
                }
                u.srt = new Srt(u.srt_list[u.srt_index][1]);
                u.srt.setContainer(i);
                u.srt.startTimer()
            }
        };
        function k() {
            var t = "js/srtParser.js";
            if (!!u.isChangeVid) {
                if (u.srt_list.length == 0) {
                    if (typeof addSrt == "function") {
                        u.srt_list.push(["不显示", ""]);
                        addSrt("on", u.srt_list, u.srt_index)
                    }
                }
            } else {
                if (u.srt_list.length == 0) {
                    return
                }
            }
            if (u.srt_list[u.srt_index][1].indexOf("http://") != -1) {
                if (!!u.hasSrtParser) {
                    if (!!u.isChangeVid) {
                        u.j2s_initSrt(u.srt_index, true);
                        if (typeof addSrt == "function") {
                            u.srt_list.push(["不显示", ""]);
                            if (!u.show_srt) {
                                addSrt("off", u.srt_list, u.srt_list.length - 1)
                            } else {
                                addSrt("on", u.srt_list, u.srt_index)
                            }
                        }
                    }
                } else {
                    e.getScript(t, function () {
                        u.hasSrtParser = true;
                        var t = e("<div " + 'id="srtContainer"' + ">");
                        e("#container").append(t);
                        u.j2s_initSrt(u.srt_index, true);
                        if (typeof addSrt == "function") {
                            u.srt_list.push(["不显示", ""]);
                            if (!u.show_srt) {
                                addSrt("off", u.srt_list, u.srt_list.length - 1)
                            } else {
                                addSrt("on", u.srt_list, u.srt_index)
                            }
                        }
                    })
                }
            }
        }

        function A(t, n) {
            e.updateFlowStatus(e.FLOW_STATUS.PLAY);
            e.isStartPlay = true;
            var i = new Date;
            u.firstToPlayTime = i.getTime();
            var r = e(n);
            var a = u.first_image;
            if (u.flashvars["loading_bg_img"]) {
                a = u.flashvars["loading_bg_img"]
            }
            if (u.loading_bg_img.length > 0) {
                a = u.loading_bg_img
            }
            if (u.show_rate != null) {
                switch (String(u.show_rate)) {
                    case"1":
                        u.fileSize[1] = 0;
                        u.fileSize[2] = 0;
                        u.df_num = 1;
                        break;
                    case"2":
                        u.fileSize[2] = 0;
                        u.df_num = 2;
                        break
                }
            }
            u.enable_switch = {hlsIndex: [], hls: [], mp4: []};
            var s = [u.hlsIndex, true];
            u.enable_switch.hlsIndex = s;
            for (var o = 0; o < u.fileSize.length; o++) {
                if (u.fileSize[o] != 0) {
                    u.enable_switch.hls.push([u.hls[o], true]);
                    u.enable_switch.mp4.push([u.mp4[o], true])
                }
            }
            n.src = N();
            n.preload = "auto";
            if (u.hidecontrol != "true" || u.hidecontrol == undefined) {
                n.controls = "controls"
            }
            var l = u.flashvars["ban_seek_by_limit_time"];
            if (l && l == "on") {
                if (n.hasAttribute("controls")) {
                    n.removeAttribute("controls")
                }
            }
            n.id = u.vid;
            u.stay_duration = 0;
            n.poster = a;
            r.css("background-size", u.playerWidth * 100 + "%");
            r.css("background-repeat", "no-repeat");
            r.css("background-position", "center");
            r.css("width", u.width);
            r.css("height", u.height);
            e(t).css("background-image", "");
            r.css("display", "block");
            n.play();
            clearInterval(u.videoErrorTimer);
            u.videoErrorTimer = setInterval(function (t) {
                if (r[0].error != null) {
                    switch (u.sourceType) {
                        case"hlsIndex":
                            u.enable_switch.hlsIndex[1] = false;
                            break;
                        case"hls":
                            for (var i = 0; i < u.enable_switch.hls.length; i++) {
                                if (n.src.indexOf(u.enable_switch.hls[i][0]) != -1) {
                                    u.enable_switch.hls[i][1] = false
                                }
                            }
                            break;
                        case"mp4":
                            for (var a = 0; a < u.enable_switch.mp4.length; a++) {
                                if (n.src.indexOf(u.enable_switch.mp4[a][0]) != -1) {
                                    u.enable_switch.mp4[a][1] = false
                                }
                            }
                            break
                    }
                    var s = N();
                    if (u.previewMode == true) {
                        s = ""
                    }
                    if (s == "") {
                        if (!u.hasSendError) {
                            if (r[0].error != null) {
                                u.hasSendError = true;
                                var o = {};
                                o.pid = u.pid;
                                o.uid = u.uid;
                                o.vid = u.vid;
                                o.error = "load_video_failure";
                                o.type = "error";
                                o.errorType = r[0].error.code;
                                o.href = e.href;
                                F(o);
                                clearInterval(u.videoErrorTimer)
                            }
                        }
                    } else {
                        n.src = s;
                        n.play();
                        if (typeof showHD == "function") {
                            if (u.showHd == "on") {
                                showHD(u.playNum, u.fileSize)
                            }
                        }
                    }
                }
            }, 4e3);
            if (typeof showHD == "function") {
                if (u.showHd == "on") {
                    showHD(u.playNum, u.fileSize)
                }
            }
            if (u.ban_ui == "on" || u.ban_ui == true) {
                if (typeof hideUI == "function") {
                    hideUI()
                }
            }
            u.isWaiting = false;
            u.seeking = false;
            k();
            if (!!u.isChangeVid) {
                u.isChangeVid = false;
                u.hasSendLoadingStat = false;
                u.hasSendError = false;
                if (typeof initChangeVid == "function") {
                    initChangeVid(u.vid)
                }
            }
        }

        function N() {
            var e = "";
            u.playNum = 0;
            u.df = u.df > u.df_num ? u.df_num : u.df;
            if (u.seed == 1 || u.forceHLS) {
                if (u.df == 0 && u.enable_switch.hlsIndex[1]) {
                    e = u.enable_switch.hlsIndex[0];
                    u.sourceType = "hlsIndex"
                } else {
                    u.df = u.df == 0 ? 1 : u.df;
                    if (u.enable_switch.hls[u.df - 1][1]) {
                        e = u.enable_switch.hls[u.df - 1][0];
                        u.sourceType = "hls";
                        u.playNum = u.df - 1
                    } else {
                        for (var t = 0; t < u.df_num; t++) {
                            if (u.enable_switch.hls[t][1]) {
                                e = u.enable_switch.hls[t][0];
                                u.sourceType = "hls";
                                u.playNum = t;
                                break
                            }
                        }
                    }
                }
                if (e != "") {
                    if (u.previewMode == true) {
                        var n = u.vid.substring(0, 32);
                        e = e.replace(n, "p_" + n)
                    }
                    if (u.ts != "" && u.sign != "") {
                        e = e + "?ts=" + u.ts + "&sign=" + u.sign
                    }
                    if (u.ts != "" && u.sign != "") {
                        e = e + "&pid=" + u.pid
                    } else {
                        e = e + "?pid=" + u.pid
                    }
                }
            }
            if (u.seed == 0 && e == "") {
                u.sourceType = "mp4";
                u.df = u.df == 0 ? u.my_br : u.df;
                if (u.enable_switch.mp4[u.df - 1] != undefined && u.enable_switch.mp4[u.df - 1][1]) {
                    e = u.enable_switch.mp4[u.df - 1][0];
                    u.playNum = u.df - 1
                } else {
                    for (var i = 0; i < u.df_num; i++) {
                        if (u.enable_switch.mp4[i][1]) {
                            e = u.enable_switch.mp4[i][0];
                            u.playNum = i;
                            break
                        }
                    }
                }
                if (c) {
                    if (u.enable_switch.mp4[0][1]) {
                        e = u.enable_switch.mp4[0][0];
                        u.playNum = 0
                    } else {
                        e = ""
                    }
                }
            }
            return e
        }

        function C(t, n) {
            e("video").removeAttr("poster");
            e.recordTime = t.currentTime;
            if (u.sourceType == "hls" || u.sourceType == "hlsIndex") {
                t.src = u.hls[n];
                t.play()
            } else {
                t.src = u.mp4[n];
                t.play()
            }
            if (typeof highLightHd == "function") {
                highLightHd(n)
            }
        }

        function E() {
            if (u.stay_duration >= u.duration * 2) {
                return
            }
            u.stay_duration++
        }

        function L() {
            var t = (new Date).getTime();
            var n = Math.floor(e("video")[0].currentTime);
            var i = u.pid;
            var a = u.stay_duration;
            var s = "rtas.net" + i + u.vid + "0" + a + n;
            var o = CryptoJS.MD5(s) + "";
            var l = {
                pid: i,
                uid: u.vid.substring(0, 10),
                vid: u.vid,
                flow: 0,
                pd: a,
                sd: a,
                cts: n,
                ts: t,
                sign: o,
                duration: u.duration,
                href: e.href
            };
            for (var c in u.params) {
                l[c] = u.params[c]
            }
            e.ajax({
                type: "GET", url: r + "prtas.videocc.net/v1/view", data: l, success: function (e) {
                }
            })
        }

        function F(t) {
            e.ajax({
                type: "GET", url: r + "prtas.videocc.net/qos", data: t, success: function () {
                }
            })
        }

        function P(t) {
            return t.each(function () {
                u.pid = e.getPid();
                var t;
                var n = e(this);
                var i = u;
                var r = u.first_image;
                if (u.loading_bg_img.length > 0) {
                    r = u.loading_bg_img
                }
                var a = document.createElement("div");
                a.setAttribute("id", "plv_container");
                var s = e(a);
                s.css("background-size", u.playerWidth * 100 + "%");
                s.css("background-repeat", "no-repeat");
                s.css("background-position", "center");
                s.css("text-align", "left");
                s.css("width", u.width);
                s.css("height", u.height);
                this.appendChild(a);
                u.polyvObjectdiv = s;
                u.div = a;
                u.polyvObjectthis = n;
                if (u.outdate) {
                    switch (u.status) {
                        case 50:
                            r = "/script/images/invalid_sh.jpg";
                            break;
                        case 10:
                            r = "/script/images/invalid_bm.jpg";
                            break;
                        case 20:
                            r = "/script/images/invalid_bm.jpg";
                            break;
                        default:
                            r = "/script/images/invalid.jpg"
                    }
                    H(n, s, r)
                } else {
                    if (!u.changeBrowser) {
                        if (u.validUrl2.length > 0 && u.is_access_validurl == "on") {
                            u.imageUrl = r;
                            O()
                        } else {
                            I(s, a);
                            H(n, s, r)
                        }
                    } else {
                        r = "/script/images/changeBrowser.jpg";
                        H(n, s, r)
                    }
                }
            })
        }

        function O() {
            if (u.isFirstSwitch) {
                D()
            } else {
                e.ajax({
                    url: "./js/base64.js", dataType: "script", success: function () {
                        D()
                    }, error: function () {
                        B()
                    }
                })
            }
        }

        function D() {
            if (u.validUrl2.indexOf(r) == -1) {
                var t = /^(?:(\w+):\/\/)?(?:(\w+):?(\w+)?@)?([^:\/\?#]+)(?::(\d+))?(\/[^\?#]+)?(?:\?([^#]+))?(?:#(\w+))?/;
                var n = t.exec(u.validUrl2)[4];
                u.validUrl2 = r + n + u.validUrl2
            }
            u.validMessage = "系统错误，请稍后再试！<br/>Try again later!";
            var i = new Date;
            u.validUrl2Time = i.getTime() + +Math.floor(Math.random() * 1e5);
            var a = {};
            a.vid = u.vid;
            a.code = u.code;
            a.t = u.validUrl2Time;
            u.validUrl2 = u.validUrl2 + "?" + "vid=" + u.vid + "&code=" + u.code + "&t=" + u.validUrl2Time;
            e.ajax({
                url: u.validUrl2, dataType: "jsonp", callback: "?", success: function (t) {
                    var n = t;
                    a.status = n.status;
                    a.username = n.username;
                    var i = r + "v3.polyv.net/uc/services/get/player/sign";
                    e.ajax({
                        url: i, dataType: "jsonp", data: a, success: function (t) {
                            if (!t.sign) {
                                B()
                            } else {
                                var i = e.decode(Base64.decode(t.sign));
                                if (i == n.sign) {
                                    if (n.msg) {
                                        u.validMessage = n.msg
                                    }
                                    if (!u.isFirstSwitch) {
                                        if (String(n.status) == "1" || String(n.status) == "4") {
                                            if (String(n.status) == "4") {
                                                u.df = 1;
                                                u.banHdSelect = true
                                            }
                                            if (!!u.isChangeVid) {
                                                var r;
                                                A(r, e("video")[0])
                                            } else {
                                                I(u.polyvObjectdiv, u.div);
                                                H(u.polyvObjectthis, u.polyvObjectdiv, u.imageUrl)
                                            }
                                        } else {
                                            B()
                                        }
                                    } else {
                                        switch (String(n.status)) {
                                            case"1":
                                                u.banHdSelect = false;
                                                C(video, u.playNum);
                                                if (typeof showLoading == "function") {
                                                    showLoading()
                                                }
                                                break;
                                            case"4":
                                                if (u.s2j_onSwitchHd) {
                                                    u.s2j_onSwitchHd(u.playNum)
                                                }
                                                if (typeof s2j_onSwitchHd == "function") {
                                                    s2j_onSwitchHd(u.playNum)
                                                }
                                                break;
                                            default:
                                                B()
                                        }
                                        u.isSwitching = false
                                    }
                                } else {
                                    B()
                                }
                            }
                        }, error: function () {
                            B()
                        }
                    })
                }, error: function () {
                    B()
                }
            })
        }

        function I(n, r) {
            var s = document.createElement("video");
            var o = e(s);
            o.attr("webkit-playsinline", "");
            o.css("display", "none");
            o.css("width", "0");
            o.css("height", "0");
            r.appendChild(s);
            if (!u.autoplay) {
                var l = "http://player.polyv.net/script/images/video-play.png";
                var c = e('<img id="playbutton">');
                c.attr("src", l);
                c.css("display", "none");
                c.appendTo(n);
                c.one("load", function () {
                    if (parseInt(u.height) == 0) {
                        var t = parseInt(n.css("width")) / u.ratio;
                        u.height = t;
                        polyvObjectthis.css("height", t);
                        n.css("height", t)
                    }
                    var i = parseInt(n.css("width")) / 3;
                    c.css("left", "50%");
                    c.css("top", "50%");
                    c.css("width", "72px");
                    c.css("height", "72px");
                    c.css("margin-left", "-32px");
                    c.css("margin-top", "-32px");
                    c.css("position", "absolute");
                    c.css("opacity", ".8");
                    c.css("display", "block");
                    if (u.ban_ui == true || u.ban_ui == "on") {
                        var a = (parseInt(n.css("height")) - 72) / 2;
                        c.css("position", "relative");
                        c.css("top", a + "px");
                        c.css("margin-top", 0)
                    }
                    if (typeof s2j_onPlayerInitOver == "function") {
                        s2j_onPlayerInitOver()
                    }
                    n.bind("click", function () {
                        c.remove();
                        s.play();
                        s.pause();
                        u.firstToPlayTime = 0;
                        u.isClickPlayButton = "on";
                        e.isEndOnce = false;
                        y(r, n, o, s);
                        n.unbind("click");
                        if (typeof s2j_onPlayBtnClick == "function") {
                            s2j_onPlayBtnClick()
                        }
                    });
                    if (typeof s2j_initVideoPlayer == "function") {
                        s2j_initVideoPlayer()
                    }
                })
            } else {
                o.attr("autoplay", "autoplay");
                u.firstToPlayTime = 0;
                e.isEndOnce = false;
                y(r, n, o, s);
                if (typeof s2j_onPlayerInitOver == "function") {
                    s2j_onPlayerInitOver()
                }
                if (typeof s2j_initVideoPlayer == "function") {
                    s2j_initVideoPlayer()
                }
            }
            u.j2s_pauseVideo = function () {
                s.pause();
                e.updateFlowStatus(e.FLOW_STATUS.PAUSE)
            };
            u.j2s_resumeVideo = function () {
                if (s.src) {
                    s.play()
                } else {
                    n.click()
                }
                o.css("display", "block");
                e.updateFlowStatus(e.FLOW_STATUS.PLAY)
            };
            u.j2s_seekVideo = function (e) {
                if (s.src) {
                    s.currentTime = e
                }
            };
            u.j2s_stopVideo = function () {
                clearInterval(f);
                u.isCounting = false;
                s.pause();
                s.currentTime = 0;
                if (u.s2j_onPlayOver) {
                    u.s2j_onPlayOver()
                }
                if (typeof s2j_onPlayOver == "function") {
                    s2j_onPlayOver()
                }
                x(r, s, "end")
            };
            u.j2s_setVolume = function (e) {
                e = parseFloat(e);
                e = e < 0 ? 0 : e;
                e = e > 1 ? 1 : e;
                s.volume = e
            };
            u.j2s_skipTeaser = function () {
                u.teaser_show = 0;
                x(r, s, "pre")
            };
            u.j2s_switchHd = function (e) {
                if (!u.isSwitching) {
                    u.playNum = e;
                    if (u.banHdSelect) {
                        if (!u.isFirstSwitch) {
                            u.isFirstSwitch = true;
                            if (u.s2j_onSwitchHd) {
                                u.s2j_onSwitchHd(u.playNum)
                            }
                            if (typeof s2j_onSwitchHd == "function") {
                                s2j_onSwitchHd(u.playNum)
                            }
                        } else {
                            u.isSwitching = true;
                            O()
                        }
                        if (typeof hideLoading == "function") {
                            hideLoading()
                        }
                    } else {
                        C(s, e)
                    }
                }
            };
            u.j2s_removeVideo = function () {
                e(t).empty()
            };
            u.j2s_switch = function (e) {
                e = e - 1;
                u.j2s_switchHd(e)
            };
            u.changeVid = function (t, n) {
                if (t == u.vid || t.substr(0, 10) != u.uid) {
                    return
                }
                m = a + "/videojson/" + t + ".js";
                u.isChangeVid = true;
                u.vid = t;
                u.uid = t.substr(0, 10);
                u.watch_start_time = n;
                g(m, u);
                if (u.isClickPlayButton == "off") {
                    e("#playbutton").remove()
                }
            };
            u.j2s_showBarrage = function () {
                if (e.startDanmu) {
                    e.cmManager.startTimer()
                }
            };
            u.j2s_hideBarrage = function () {
                if (e.startDanmu) {
                    e.cmManager.stopTimer()
                }
            };
            u.j2s_addBarrageMessage = function (t) {
                var n = e.parseJSON(t);
                for (var i in n) {
                    var r = {};
                    r.text = n[i].msg;
                    r.stime = 0;
                    r.mode = 1;
                    r.size = 14;
                    r.color = 255;
                    r.data = n[i].timestamp;
                    e.cmManager.insert(r)
                }
            };
            u.j2s_reloadBarrageData = function () {
                if (e.startDanmu) {
                    e.ajax({
                        url: e.danmuUrl, type: "GET", dataType: "text", success: function (t) {
                            e.cmManager.load(PolyvParser(t))
                        }, error: function (e, t, n) {
                            console.log(">> comment error" + e.readyState + " / " + e.status)
                        }
                    })
                }
            };
            u.j2s_hideSrt = function () {
                if (u.srt) {
                    u.srt.hide()
                }
            };
            u.j2s_showSrt = function () {
                if (u.srt) {
                    u.srt.show()
                }
            };
            u.j2s_setTimeSrt = function (e) {
                if (u.srt) {
                    u.srt.time(e)
                }
            };
            e.cmManager;
            e.startDanmu = false;
            e.haveDanmu = false;
            e.danmuUrl = "";
            u.j2s_openDanmu = function (t) {
                e.haveDanmu = true;
                e.danmuUrl = t
            };
            u.j2s_getVideo = function () {
                return s
            };
            var f;
            s.addEventListener("playing", function () {
                if (e.flowStatus == e.FLOW_STATUS.PLAY) {
                    if (f) {
                        clearInterval(f)
                    }
                    f = setInterval(function () {
                        E()
                    }, 1e3);
                    if (i) {
                        clearInterval(i)
                    }
                    i = setInterval(function () {
                        L()
                    }, 6e3);
                    u.isCounting = true;
                    if (u.firstToPlayTime > 0 && !u.hasSendLoadingStat) {
                        var t = new Date;
                        u.hasSendLoadingStat = true;
                        var r = {};
                        r.pid = u.pid;
                        r.uid = u.uid;
                        r.vid = u.vid;
                        r.time = t.getTime() - u.firstToPlayTime;
                        r.type = "loading";
                        r.href = e.href;
                        F(r);
                        u.j2s_getCurrentTime = function () {
                            return s.currentTime
                        };
                        u.j2s_stayInVideoTime = function () {
                            return u.stay_duration
                        };
                        u.j2s_getDuration = function () {
                            return s.duration
                        };
                        if (typeof s2j_onPlayStart == "function") {
                            s2j_onPlayStart()
                        }
                        if (typeof s2j_onVideoPlay == "function") {
                            s2j_onVideoPlay()
                        }
                        if (u.s2j_onPlayStart) {
                            u.s2j_onPlayStart()
                        }
                    }
                }
                n.css({"background-image": "", "background-color": "black"});
                if (u.s2j_onVideoPlay) {
                    u.s2j_onVideoPlay()
                }
                if (typeof s2j_onVideoPlay == "function") {
                    s2j_onVideoPlay()
                }
                u.j2s_getVideo = function () {
                    return s
                };
                if (e.haveDanmu) {
                    e.haveDanmu = false;
                    j()
                }
                if (e.startDanmu) {
                    e.cmManager.startTimer()
                }
                if (e.recordTime > 0) {
                    s.currentTime = e.recordTime;
                    e.recordTime = 0
                }
            });
            s.addEventListener("pause", function () {
                clearInterval(f);
                clearInterval(i);
                u.isCounting = false;
                if (u.s2j_onVideoPause) {
                    u.s2j_onVideoPause()
                }
                if (typeof s2j_onVideoPause == "function") {
                    s2j_onVideoPause()
                }
                if (e.startDanmu) {
                    e.cmManager.stopTimer()
                }
            });
            var d = 0;
            var p = u.flashvars["watchStartTime"];
            if (!p) {
                p = u.watch_start_time
            }
            s.addEventListener("ended", function () {
                clearInterval(f);
                clearInterval(i);
                u.isCounting = false;
                if (u.s2j_onPlayOver) {
                    u.s2j_onPlayOver()
                }
                if (typeof s2j_onPlayOver == "function") {
                    s2j_onPlayOver()
                }
                if (e.flowStatus == e.FLOW_STATUS.PLAY || e.flowStatus == e.FLOW_STATUS.PAUSE) {
                    x(r, s, "end")
                } else if (e.flowStatus == e.FLOW_STATUS.TEASER && u.teaserShowAll) {
                    if (u.teaser_show == 1) {
                        x(r, s, "pre")
                    }
                }
                if (e.startDanmu) {
                    e.cmManager.clear()
                }
            });
            s.addEventListener("loadedmetadata", function () {
            });
            var h = u.flashvars["watchEndTime"];
            if (u.previewMode) {
                h = u.previewlong
            }
            timeUpdate = function () {
                d = s.currentTime;
                if (h && s.currentTime > h) {
                    u.j2s_stopVideo()
                }
                if (u.s2j_onTimeUpdate) {
                    u.s2j_onTimeUpdate()
                }
                if (e.startDanmu) {
                    e.cmManager.time(Math.floor(1e3 * o[0].currentTime))
                }
                if (p && p != 0) {
                    if (s.currentTime >= .2) {
                        s.currentTime = p;
                        p = 0
                    }
                }
                if (p == 0 && u.watch_start_time > 0) {
                    if (s.currentTime >= .1) {
                        s.currentTime = u.watch_start_time;
                        u.watch_start_time = 0
                    }
                }
                if (u.srt) {
                    u.srt.time(o[0].currentTime)
                }
            };
            s.addEventListener("timeupdate", timeUpdate);
            s.addEventListener("seeking", function () {
                u.seeking = true;
                if (u.s2j_onVideoSeeking) {
                    u.s2j_onVideoSeeking()
                }
                if (e.startDanmu) {
                    e.cmManager.clear()
                }
            });
            s.addEventListener("seeked", function () {
                u.seeking = false;
                if (u.s2j_onVideoSeeked) {
                    u.s2j_onVideoSeeked()
                }
            });
            s.addEventListener("progress", function () {
                if (u.s2j_onProgressUpdate) {
                    u.s2j_onProgressUpdate()
                }
            });
            s.addEventListener("waiting", function () {
                u.recordWaitingTime = s.currentTime;
                var e = new Date;
                u.recordWaitingMTime = e.getTime();
                if (!u.isWaiting && !u.seeking && s.currentTime > 0) {
                    if (u.waitingTimer) {
                        clearInterval(u.waitingTimer)
                    }
                    u.waitingTimer = setInterval(function () {
                        M(s)
                    }, 500)
                }
                if (typeof onbuffer == "function") {
                    onbuffer()
                }
            });
            var v = 0;
            u.isCounting = false;
            var b = setInterval(function () {
                if (e.flowStatus == e.FLOW_STATUS.PLAY) {
                    if (!s.paused) {
                        if (s.currentTime != v) {
                            if (!u.isCounting) {
                                if (f) {
                                    clearInterval(f)
                                }
                                f = setInterval(function () {
                                    E()
                                }, 1e3);
                                if (i) {
                                    clearInterval(i)
                                }
                                i = setInterval(function () {
                                    L()
                                }, 6e3);
                                u.isCounting = true
                            }
                        } else {
                            clearInterval(f);
                            clearInterval(i);
                            u.isCounting = false
                        }
                        v = s.currentTime
                    }
                }
            }, 500)
        }

        function M(t) {
            if (t.currentTime > u.recordWaitingTime) {
                var n = new Date;
                var i = n.getTime() - u.recordWaitingMTime;
                u.isWaiting = true;
                var r = {};
                r.pid = u.pid;
                r.uid = u.uid;
                r.vid = u.vid;
                r.time = i * 1e3;
                r.type = "buffer";
                r.href = e.href;
                r.domain = e.domain;
                F(r);
                clearInterval(u.waitingTimer)
            }
        }

        function H(e, t, n) {
            if (!u.autoplay) {
                t.css("background-image", "url(" + n + ")")
            }
            if (u.width.charAt(u.width.length - 1) == "%") {
                e.width(u.width);
                e.height(u.height)
            }
            if (u.ban_skin_progress == "on") {
                if (typeof banSkinProgress == "function") {
                    banSkinProgress()
                }
            }
        }

        function B() {
            var t = e("<div/>", {"class": "error"});
            t.appendTo(e("#container"));
            t.html(u.validMessage);
            t.css("margin-top", -(t.height() / 2) + "px");
            e("video").attr("poster", "");
            e.updateFlowStatus(e.FLOW_STATUS.ERROR)
        }

        return u
    };
    e.fn.previewPlayer = createPreviewPlayer;
    e.fn.videoPlayer = createPlayer;
    e.fn.showPlayer = createShowPlayer;
    e.fn.createPurePlayer = function (t) {
        if (t.vid.length > 34) {
            t.vid = e.decode(t.vid)
        }
        return privateCreate(this, t)
    };
    e.getPid = function t() {
        var e = new Date;
        var t = e.getTime() + "";
        var n = parseInt(Math.random() * 1e6 + 1e6) + "";
        return t + "X" + n
    };
    e.getPlayer = function n(e) {
        if (navigator.appName.indexOf("Microsoft") != -1) {
            var t = window[e];
            try {
                if (t.length > 0) {
                    return t[0]
                } else {
                    return t
                }
            } catch (n) {
            }
            return document[e]
        } else {
            return document[e]
        }
    };
    e.playerType = {FLASH: "flash", HTML: "html", INSTALLER: "installer", NO_SUPPORT: "nosupport"};
    e.determinePlayerType = function (t, n, i) {
        if (t.forceHTML5) {
            return e.playerType.HTML
        }
        if (t.forceFlash) {
            return e.playerType.FLASH
        }
        if (e.isSupportedHTMLDevice()) {
            if (i) {
                return e.playerType.HTML
            }
        }
        if (e.isFirefox() == true) {
            return e.playerType.FLASH
        }
        if (n == null && i == false) {
            return e.playerType.NO_SUPPORT
        }
        if (n != null) {
            if (e.isFlashVersionSufficient(n)) {
                return e.playerType.FLASH
            } else {
                return e.playerType.INSTALLER
            }
        }
        if (i) {
            return e.playerType.HTML
        }
        return e.playerType.NO_SUPPORT
    };
    e.isFlashVersionSufficient = function (t) {
        if (t == null)return false;
        if (t.majorVersion > e.majorVersion || t.majorVersion == e.majorVersion && t.majorRevision > e.majorRevision) {
            return true
        }
        return false
    };
    e.isFirefox = function () {
        if (navigator.userAgent.match(new RegExp("Firefox", "i"))) {
            return true
        } else {
            return false
        }
    };
    e.isIphone = function () {
        if (navigator.userAgent.indexOf("iPhone") > -1) {
            return true
        } else {
            return false
        }
    };
    e.checkHtmlSupport = function () {
        var t = document.createElement("video");
        var n = document.createElement("canvas");
        var i = true;
        if (!navigator.userAgent.match(new RegExp("android", "i"))) {
            i = !!(t.canPlayType && t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""))
        }
        var r = !!document.createElement("canvas").getContext;
        return i && r && e.isSupportedHTMLDevice()
    };
    e.checkLowerDevice = function () {
        var e = window.screen.height == 960 / 2;
        if (window.devicePixelRatio == 1) {
            e = true
        }
        return e
    };
    e.isIOS = function (e) {
        var t = ["iPad", "iPhone", "iPod"];
        var n = t.length;
        var i = e || navigator.userAgent;
        for (var r = 0; r < n; r++) {
            if (i.match(new RegExp(t[r], "i"))) {
                return true
            }
        }
        return false
    };
    e.isSupportedHTMLDevice = function (e) {
        var t = ["iPad", "iPhone", "iPod", "android"];
        var n = t.length;
        var i = e || navigator.userAgent;
        for (var r = 0; r < n; r++) {
            if (i.match(new RegExp(t[r], "i"))) {
                return true
            }
        }
        return false
    };
    e.isAndroid = function () {
        if (navigator.userAgent.match(new RegExp("android", "i"))) {
            return true
        }
        return false
    };
    e.isIE = function () {
        if (!!window.ActiveXObject || "ActiveXObject"in window)return true; else return false
    };
    e.checkFlashSupport = function () {
        var t = e.isIE() ? e.checkFlashSupportIE() : e.checkFlashSupportStandard();
        return t
    };
    e.checkFlashSupportIE = function () {
        var e;
        try {
            var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            var n = t.GetVariable("$version");
            e = / ([0-9]+),([0-9]+),([0-9]+),/.exec(n)
        } catch (i) {
            return null
        }
        return {majorVersion: e[1], majorRevision: e[2], minorRevision: e[3]}
    };
    e.checkFlashSupportStandard = function () {
        var e;
        var t;
        var n;
        var i;
        try {
            if (typeof navigator.plugins != "undefined" && navigator.plugins.length > 0) {
                if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                    var r = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
                    var a = navigator.plugins["Shockwave Flash" + r].description;
                    var s = navigator.plugins["Shockwave Flash" + r].filename;
                    if (s.match) {
                        if (s.toLowerCase().match(/lite/)) {
                            throw new Error
                        }
                    }
                    e = a.split(" ");
                    t = e[2].split(".")[0];
                    n = e[2].split(".")[1];
                    i = e[3];
                    if (i == "") {
                        i = e[4]
                    }
                    if (i[0] == "d") {
                        i = i.substring(1)
                    } else if (i[0] == "r") {
                        i = i.substring(1);
                        if (i.indexOf("d") > 0) {
                            i = i.substring(0, i.indexOf("d"))
                        }
                    }
                } else {
                    throw new Error
                }
            } else {
                return null
            }
        } catch (o) {
            return null
        }
        return {majorVersion: t, majorRevision: n, minorRevision: i}
    };
    e.decode = function (e) {
        var t, n, i, r, a, s;
        t = "abcdofghijklnmepqrstuvwxyz0123456789";
        s = "lpmkenjibhuvgycftxdrzsoawq0126783459";
        if (e.length == 34) {
            n = e
        } else {
            e = e.substr(1);
            n = "";
            for (i = 0; i < e.length; i++) {
                r = e.charAt(i);
                a = s.indexOf(r);
                if (a == -1) {
                    n = n + r
                } else {
                    n = n + t.charAt(a)
                }
            }
        }
        return n
    };
    e.FLOW_STATUS = {
        LOADING: "loading",
        TEASER: "teaser",
        PREAD: "preAd",
        PLAY: "play",
        PAUSE: "pause",
        ENDAD: "endAd",
        OVER: "over",
        ERROR: "error"
    };
    e.updateFlowStatus = function (t) {
        e.flowStatus = t;
        if (typeof updateFlow == "function") {
            updateFlow(t)
        }
    }
})(polyvObject);