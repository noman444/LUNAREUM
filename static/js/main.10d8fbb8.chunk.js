(this["webpackJsonpkrystal-wallet"] = this["webpackJsonpkrystal-wallet"] || []).push([
    [0], { 1080: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[{"name":"x","type":"bytes14"},{"name":"byteInd","type":"uint256"}],"name":"getInt8FromByte","outputs":[{"name":"","type":"int8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"reserve","type":"address"},{"name":"tokens","type":"address[]"}],"name":"getBalances","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ratesContract","type":"address"},{"name":"tokenList","type":"address[]"}],"name":"getTokenIndicies","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"reserve","type":"address"},{"name":"srcs","type":"address[]"},{"name":"dests","type":"address[]"}],"name":"getReserveRate","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes14"},{"name":"byteInd","type":"uint256"}],"name":"getByteFromBytes14","outputs":[{"name":"","type":"bytes1"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"network","type":"address"},{"name":"srcs","type":"address[]"},{"name":"dests","type":"address[]"},{"name":"qty","type":"uint256[]"}],"name":"getExpectedRates","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ratesContract","type":"address"},{"name":"tokenList","type":"address[]"}],"name":"getTokenRates","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"int8[]"},{"name":"","type":"int8[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"}]') }, 1239: function(e, t, a) { e.exports = a.p + "static/media/AaveV1.1b20e4bd.svg" }, 1240: function(e, t, a) { e.exports = a.p + "static/media/AaveV2.1b20e4bd.svg" }, 1241: function(e, t, a) { e.exports = a.p + "static/media/Compound.5ab46fcd.svg" }, 1242: function(e, t, a) { e.exports = a.p + "static/media/Venus.060b3335.svg" }, 1247: function(e, t, a) {}, 1251: function(e, t, a) { "use strict";
            a.r(t); var n = a(43),
                r = a(0),
                c = a.n(r),
                l = a(54),
                s = a.n(l),
                o = a(116),
                i = a(8),
                u = a(641),
                m = a(158),
                d = a(569),
                f = a(88),
                p = a(570),
                b = a(642),
                v = a(11),
                E = a(14),
                h = a(16),
                g = a(17),
                O = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a(e) { var n; return Object(v.a)(this, a), (n = t.call(this, e)).state = { hasError: !1 }, n } return Object(E.a)(a, [{ key: "componentDidCatch", value: function(e, t) { console.log(e), console.log(t) } }, { key: "render", value: function() { return this.state.hasError ? c.a.createElement("h1", null, "Something went wrong.") : this.props.children } }], [{ key: "getDerivedStateFromError", value: function() { return { hasError: !0 } } }]), a }(r.Component);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); var y = a(1),
                j = a.n(y),
                k = a(12),
                w = a(9),
                x = "TX.APPEND_TRACKING_TX",
                N = "TX.SET_TRACKING_TXS",
                _ = "TX.APPROVE",
                T = "TX.TRANSFER_ETH",
                A = "TX.TRANSFER_TOKEN",
                S = "TX.TRANSFER_NFT",
                C = "TX.SWAP",
                R = "TX.SWAP_AND_DEPOSIT",
                P = "TX.WITHDRAW_FUND",
                L = "TX.CLAIM_REWARD",
                I = "TX.SET_ERROR",
                M = "TX.SET_TX_CONFIRMING",
                D = "TX.SET_LAST_NONCE",
                F = "TX.INCREASE_APPROVAL_COUNT";

            function B(e) { return { type: x, payload: e } }

            function K(e, t, a) { return { type: _, payload: { tokenAddress: e, estimatedGas: t, isApproveToMax: a } } }

            function W(e, t) { return { type: T, payload: { recipient: e, amount: t } } }

            function G(e, t, a) { return { type: A, payload: { srcToken: e, recipient: t, amount: a } } }

            function H(e, t) { return { type: C, payload: { txObject: e, txData: t } } }

            function V(e, t) { return { type: R, payload: { txObject: e, txData: t } } }

            function z(e, t) { return { type: P, payload: { txObject: e, txData: t } } }

            function U(e, t) { return { type: L, payload: { txObject: e, txData: t } } }

            function Y(e) { return { type: M, payload: e } }

            function q(e) { return { type: D, payload: e } } var Q, X = a(2),
                J = a(77),
                Z = a(13),
                $ = ["svgRef", "title"];

            function ee() { return (ee = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function te(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var ae = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = te(e, $); return c.a.createElement("svg", ee({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Q || (Q = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-507.000000, -66.000000) translate(51.000000, 45.000000) translate(456.000000, 21.000000)" }), c.a.createElement("path", { stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M5 5L19 19M19 5L5 19", transform: "translate(-507.000000, -66.000000) translate(51.000000, 45.000000) translate(456.000000, 21.000000)" }))))))) },
                ne = c.a.forwardRef((function(e, t) { return c.a.createElement(ae, ee({ svgRef: t }, e)) })),
                re = (a.p, function(e) {
                    function t(t) { t.target === t.currentTarget && e.onClose() } return Object(r.useEffect)((function() { return e.isActive && document.querySelector("body").classList.add("modal-open"),
                            function() { document.querySelector("body").classList.remove("modal-open") } }), [e.isActive]), c.a.createElement("div", { className: "modal-overlay" + (e.isActive ? " modal-overlay--active" : ""), onClick: e.noClickOutside ? function() { return !1 } : t, style: e.style || {} }, c.a.createElement("div", { className: "modal ".concat(e.isActive ? "modal--active" : "") }, c.a.createElement("div", { className: "modal__content" }, !e.hideCloseBtn && c.a.createElement("button", { className: "modal__close-btn", onClick: t }, c.a.createElement(ne, null)), e.title && c.a.createElement("div", { className: "modal__title" }, e.title), e.children))) }),
                ce = { currentHandler: Function, closeFn: Function, register: function(e, t) { this.currentHandler = e, this.closeFn = t }, show: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = arguments.length > 2 ? arguments[2] : void 0;
                        this.currentHandler((function(a) { return c.a.createElement(e, Object.assign({ close: a }, t)) }), a, t) }, close: function() { null !== this.closeFn && this.closeFn() } },
                le = function() { var e = Object(r.useState)(""),
                        t = Object(Z.a)(e, 2),
                        a = t[0],
                        n = t[1],
                        l = Object(r.useState)(!1),
                        s = Object(Z.a)(l, 2),
                        o = s[0],
                        i = s[1],
                        u = Object(r.useState)(null),
                        m = Object(Z.a)(u, 2),
                        d = m[0],
                        f = m[1],
                        p = Object(r.useState)({}),
                        b = Object(Z.a)(p, 2),
                        v = b[0],
                        E = b[1],
                        h = Object(r.useCallback)((function() { i(!1), E({}), null != d && d(), setTimeout((function() { n("") })), f(null) }), [d]); return Object(r.useEffect)((function() { ce.register((function(e, t, a) { f((function() { return t })), E(a), n(e(h)), i(!0) }), h) }), [h]), c.a.createElement(re, Object.assign({ isActive: o }, v, { onClose: h }), a) };

            function se(e) { var t; return c.a.createElement("div", { className: "basic-modal ".concat(e.className ? e.className : "") }, e.customTitle && c.a.createElement("div", { className: "basic-modal__title" }, e.customTitle), c.a.createElement("div", { className: "basic-modal__content" }, e.content || e.children), !e.noPanel && c.a.createElement("div", { className: "basic-modal__panel" }, c.a.createElement("div", { className: "btn btn--cancel", onClick: e.close }, "Cancel"), !!e.onSubmit && c.a.createElement("div", { className: "btn btn--gradient ml-5 ".concat(e.isLoading ? "gray-disabled" : ""), onClick: e.onSubmit }, null !== (t = e.submitText) && void 0 !== t ? t : "Confirm"))) } var oe = a(4),
                ie = a(68),
                ue = a.n(ie),
                me = a(32),
                de = a.n(me),
                fe = a(47),
                pe = j.a.mark(Ne),
                be = j.a.mark(_e),
                ve = j.a.mark(Te),
                Ee = j.a.mark(Ae),
                he = j.a.mark(Se),
                ge = j.a.mark(Ce),
                Oe = j.a.mark(Re),
                ye = j.a.mark(Pe),
                je = j.a.mark(Le),
                ke = function(e) { return e.account },
                we = function(e) { return e.global },
                xe = function(e) { return e.tx };

            function Ne(e) { var t, a, n, r, c, l, s, o, i, u, m, d, f, p, b, v, E, h, g, O, y; return j.a.wrap((function(j) { for (;;) switch (j.prev = j.next) {
                        case 0:
                            return j.next = 2, Object(k.f)(we);
                        case 2:
                            return t = j.sent, a = t.gasPrices, n = t.selectedGasPrice, r = t.chainId, j.next = 8, Object(k.f)(ke);
                        case 8:
                            return c = j.sent, l = c.address, s = c.wallet, o = c.privateKey, i = c.devicePath, u = e.payload, m = u.tokenAddress, d = u.estimatedGas, f = u.isApproveToMax, j.next = 16, Object(k.f)(xe);
                        case 16:
                            return p = j.sent, b = p.lastNonce, j.next = 20, Object(k.e)(Y(!0));
                        case 20:
                            return j.prev = 20, v = X.L[r], E = a[n], h = new de.a(new de.a.providers.HttpProvider(X.F[r].url)), j.next = 26, Object(k.b)(fe.h, h, l, b);
                        case 26:
                            return g = j.sent, O = Object(J.d)(h, X.a.APPROVE, { params: { tokenAddress: m, spender: v, isApproveToMax: f }, txParams: { address: l, gasPrice: E, gas: d, nonce: g } }), j.next = 30, Object(k.b)(s.makeTransaction, O, o, i);
                        case 30:
                            return y = j.sent, j.next = 33, Object(k.e)(B({ action: X.a.APPROVE, from: l, to: m, timeStamp: ue()().unix(), hash: y, gas: d, gasPrice: E, status: X.S.PENDING, data: { tokenAddress: m, spender: v } }));
                        case 33:
                            j.next = 38; break;
                        case 35:
                            j.prev = 35, j.t0 = j.catch(20), ce.show(se, { title: "Error", content: "string" === typeof j.t0 ? j.t0 : j.t0.message });
                        case 38:
                            return j.next = 40, Object(k.e)(Y(!1));
                        case 40:
                        case "end":
                            return j.stop() } }), pe, null, [
                    [20, 35]
                ]) }

            function _e(e) { var t, a, n, r, c, l, s, o, i, u, m, d, f, p, b, v, E, h, g, O; return j.a.wrap((function(y) { for (;;) switch (y.prev = y.next) {
                        case 0:
                            return y.next = 2, Object(k.f)(we);
                        case 2:
                            return t = y.sent, a = t.gasPrices, n = t.selectedGasPrice, r = t.chainId, y.next = 8, Object(k.f)(ke);
                        case 8:
                            return c = y.sent, l = c.address, s = c.wallet, o = c.privateKey, i = c.devicePath, y.next = 15, Object(k.f)(xe);
                        case 15:
                            return u = y.sent, m = u.lastNonce, d = e.payload, f = d.recipient, p = d.amount, y.next = 20, Object(k.e)(Y(!0));
                        case 20:
                            return y.prev = 20, b = a[n], v = X.g.TRANSFER_ETH, E = new de.a(new de.a.providers.HttpProvider(X.F[r].url)), y.next = 26, Object(k.b)(fe.h, E, l, m);
                        case 26:
                            return h = y.sent, g = Object(J.d)(E, X.a.TRANSFER_ETH, { recipient: f, txParams: { address: l, gasPrice: b, value: Object(oe.D)(p), gas: v, nonce: h } }), y.next = 30, Object(k.b)(s.makeTransaction, g, o, i);
                        case 30:
                            return O = y.sent, y.next = 33, Object(k.e)(B({ action: X.a.TRANSFER_ETH, from: l, to: f, timeStamp: ue()().unix(), hash: O, gas: v, gasPrice: b, status: X.S.PENDING, data: { to: f, value: p, tokenSymbol: "ETH" } }));
                        case 33:
                            y.next = 39; break;
                        case 35:
                            y.prev = 35, y.t0 = y.catch(20), console.log(y.t0), ce.show(se, { title: "Error", content: "string" === typeof y.t0 ? y.t0 : y.t0.message });
                        case 39:
                            return y.next = 41, Object(k.e)(Y(!1));
                        case 41:
                        case "end":
                            return y.stop() } }), be, null, [
                    [20, 35]
                ]) }

            function Te(e) { var t, a, n, r, c, l, s, o, i, u, m, d, f, p, b, v, E, h, g, O, y; return j.a.wrap((function(j) { for (;;) switch (j.prev = j.next) {
                        case 0:
                            return j.next = 2, Object(k.f)(we);
                        case 2:
                            return t = j.sent, a = t.gasPrices, n = t.selectedGasPrice, r = t.chainId, j.next = 8, Object(k.f)(ke);
                        case 8:
                            return c = j.sent, l = c.address, s = c.wallet, o = c.privateKey, i = c.devicePath, u = e.payload, m = u.srcToken, d = u.recipient, f = u.amount, p = u.estimatedGas, j.next = 16, Object(k.f)(xe);
                        case 16:
                            return b = j.sent, v = b.lastNonce, j.next = 20, Object(k.e)(Y(!0));
                        case 20:
                            return j.prev = 20, E = a[n], h = new de.a(new de.a.providers.HttpProvider(X.F[r].url)), j.next = 25, Object(k.b)(fe.h, h, l, v);
                        case 25:
                            return g = j.sent, O = Object(J.d)(h, X.a.TRANSFER_TOKEN, { params: { tokenAddr: m.address, amount: Object(oe.D)(f, m.decimals), recipient: d }, txParams: { address: l, gasPrice: E, gas: p, nonce: g } }), j.next = 29, Object(k.b)(s.makeTransaction, O, o, i);
                        case 29:
                            return y = j.sent, j.next = 32, Object(k.e)(B({ action: X.a.TRANSFER_TOKEN, from: l, to: d, timeStamp: ue()().unix(), hash: y, gas: p, gasPrice: E, status: X.S.PENDING, data: { to: d, value: f, tokenSymbol: m.symbol } }));
                        case 32:
                            j.next = 37; break;
                        case 34:
                            j.prev = 34, j.t0 = j.catch(20), ce.show(se, { title: "Error", content: "string" === typeof j.t0 ? j.t0 : j.t0.message });
                        case 37:
                            return j.next = 39, Object(k.e)(Y(!1));
                        case 39:
                        case "end":
                            return j.stop() } }), ve, null, [
                    [20, 34]
                ]) }

            function Ae(e) { var t, a, n, r, c, l, s, o; return j.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, Object(k.f)(ke);
                        case 2:
                            return t = i.sent, a = t.wallet, n = t.privateKey, r = t.devicePath, c = e.payload, l = c.txObject, s = c.txData, i.next = 9, Object(k.e)(Y(!0));
                        case 9:
                            return i.prev = 9, i.next = 12, Object(k.b)(a.makeTransaction, l, n, r);
                        case 12:
                            return o = i.sent, i.next = 15, Object(k.e)(q(Object(oe.w)(l.nonce)));
                        case 15:
                            return i.next = 17, Object(k.e)(B({ action: X.a.SWAP, from: l.from, to: l.to, timeStamp: ue()().unix(), hash: o, gas: l.gas, gasPrice: +Object(oe.m)(Object(oe.E)(l.gasPrice)), status: X.S.PENDING, data: Object(w.a)(Object(w.a)({}, s), {}, { to: l.to }) }));
                        case 17:
                            i.next = 23; break;
                        case 19:
                            i.prev = 19, i.t0 = i.catch(9), console.log(i.t0), ce.show(se, { title: "Error", content: "string" === typeof i.t0 ? i.t0 : i.t0.message });
                        case 23:
                            return i.next = 25, Object(k.e)(Y(!1));
                        case 25:
                        case "end":
                            return i.stop() } }), Ee, null, [
                    [9, 19]
                ]) }

            function Se(e) { var t, a, n, r, c, l, s, o; return j.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, Object(k.f)(ke);
                        case 2:
                            return t = i.sent, a = t.wallet, n = t.privateKey, r = t.devicePath, c = e.payload, l = c.txObject, s = c.txData, i.next = 9, Object(k.e)(Y(!0));
                        case 9:
                            return i.prev = 9, i.next = 12, Object(k.b)(a.makeTransaction, l, n, r);
                        case 12:
                            return o = i.sent, i.next = 15, Object(k.e)(q(Object(oe.w)(l.nonce)));
                        case 15:
                            return i.next = 17, Object(k.e)(B({ action: X.a.SWAP_AND_DEPOSIT, from: l.from, to: l.to, timeStamp: ue()().unix(), hash: o, gas: l.gas, gasPrice: +Object(oe.m)(Object(oe.E)(l.gasPrice)), status: X.S.PENDING, data: Object(w.a)(Object(w.a)({}, s), {}, { to: l.to }) }));
                        case 17:
                            i.next = 23; break;
                        case 19:
                            i.prev = 19, i.t0 = i.catch(9), console.log(i.t0), ce.show(se, { title: "Error", content: "string" === typeof i.t0 ? i.t0 : i.t0.message });
                        case 23:
                            return i.next = 25, Object(k.e)(Y(!1));
                        case 25:
                        case "end":
                            return i.stop() } }), he, null, [
                    [9, 19]
                ]) }

            function Ce(e) { var t, a, n, r, c, l, s, o; return j.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, Object(k.f)(ke);
                        case 2:
                            return t = i.sent, a = t.wallet, n = t.privateKey, r = t.devicePath, c = e.payload, l = c.txObject, s = c.txData, i.next = 9, Object(k.e)(Y(!0));
                        case 9:
                            return i.prev = 9, i.next = 12, Object(k.b)(a.makeTransaction, l, n, r);
                        case 12:
                            return o = i.sent, i.next = 15, Object(k.e)(q(Object(oe.w)(l.nonce)));
                        case 15:
                            return i.next = 17, Object(k.e)(B({ action: X.a.WITHDRAW_FUND, from: l.from, to: l.to, timeStamp: ue()().unix(), hash: o, gas: l.gas, gasPrice: +Object(oe.m)(Object(oe.E)(l.gasPrice)), status: X.S.PENDING, data: Object(w.a)(Object(w.a)({}, s), {}, { to: l.to }) }));
                        case 17:
                            i.next = 23; break;
                        case 19:
                            i.prev = 19, i.t0 = i.catch(9), console.log(i.t0), ce.show(se, { title: "Error", content: "string" === typeof i.t0 ? i.t0 : i.t0.message });
                        case 23:
                            return i.next = 25, Object(k.e)(Y(!1));
                        case 25:
                        case "end":
                            return i.stop() } }), ge, null, [
                    [9, 19]
                ]) }

            function Re(e) { var t, a, n, r, c, l, s, o; return j.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, Object(k.f)(ke);
                        case 2:
                            return t = i.sent, a = t.wallet, n = t.privateKey, r = t.devicePath, c = e.payload, l = c.txObject, s = c.txData, i.next = 9, Object(k.e)(Y(!0));
                        case 9:
                            return i.prev = 9, i.next = 12, Object(k.b)(a.makeTransaction, l, n, r);
                        case 12:
                            return o = i.sent, i.next = 15, Object(k.e)(q(Object(oe.w)(l.nonce)));
                        case 15:
                            return i.next = 17, Object(k.e)(B({ action: X.a.CLAIM_REWARD, from: l.from, to: l.to, timeStamp: ue()().unix(), hash: o, gas: l.gas, gasPrice: +Object(oe.m)(Object(oe.E)(l.gasPrice)), status: X.S.PENDING, data: Object(w.a)(Object(w.a)({}, s), {}, { to: l.to }) }));
                        case 17:
                            i.next = 23; break;
                        case 19:
                            i.prev = 19, i.t0 = i.catch(9), console.log(i.t0), ce.show(se, { title: "Error", content: "string" === typeof i.t0 ? i.t0 : i.t0.message });
                        case 23:
                            return i.next = 25, Object(k.e)(Y(!1));
                        case 25:
                        case "end":
                            return i.stop() } }), Oe, null, [
                    [9, 19]
                ]) }

            function Pe(e) { var t, a, n, r, c, l, s, o, i, u, m, d, f, p, b, v, E, h, g, O, y, w, x; return j.a.wrap((function(j) { for (;;) switch (j.prev = j.next) {
                        case 0:
                            return j.next = 2, Object(k.f)(we);
                        case 2:
                            return t = j.sent, a = t.gasPrices, n = t.selectedGasPrice, r = t.chainId, j.next = 8, Object(k.f)(ke);
                        case 8:
                            return c = j.sent, l = c.address, s = c.wallet, o = c.privateKey, i = c.devicePath, u = e.payload, m = u.contractAddress, d = u.estimatedGas, f = u.toAddress, p = u.tokenID, b = u.amount, j.next = 16, Object(k.f)(xe);
                        case 16:
                            return v = j.sent, E = v.lastNonce, j.next = 20, Object(k.e)(Y(!0));
                        case 20:
                            return j.prev = 20, h = a[n], g = new de.a(new de.a.providers.HttpProvider(X.F[r].url)), j.next = 25, Object(k.b)(fe.h, g, l, E);
                        case 25:
                            return O = j.sent, j.next = 28, Object(k.b)(J.a, g, m);
                        case 28:
                            return y = j.sent, w = Object(J.d)(g, X.a.TRANSFER_NFT, { params: { contractAddress: m, fromAddress: l, toAddress: f, tokenID: p, amount: b }, txParams: { address: l, gasPrice: h, gas: d, nonce: O } }, y), j.next = 32, Object(k.b)(s.makeTransaction, w, o, i);
                        case 32:
                            return x = j.sent, j.next = 35, Object(k.e)(B({ action: X.a.TRANSFER_NFT, from: l, to: f, timeStamp: ue()().unix(), hash: x, gas: d, gasPrice: h, status: X.S.PENDING, data: { to: f, tokenID: p, contractAddress: m } }));
                        case 35:
                            j.next = 40; break;
                        case 37:
                            j.prev = 37, j.t0 = j.catch(20), ce.show(se, { title: "Error", content: "string" === typeof j.t0 ? j.t0 : j.t0.message });
                        case 40:
                            return j.next = 42, Object(k.e)(Y(!1));
                        case 42:
                        case "end":
                            return j.stop() } }), ye, null, [
                    [20, 37]
                ]) }

            function Le() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.g)(_, Ne);
                        case 2:
                            return e.next = 4, Object(k.g)(T, _e);
                        case 4:
                            return e.next = 6, Object(k.g)(A, Te);
                        case 6:
                            return e.next = 8, Object(k.g)(S, Pe);
                        case 8:
                            return e.next = 10, Object(k.g)(C, Ae);
                        case 10:
                            return e.next = 12, Object(k.g)(R, Se);
                        case 12:
                            return e.next = 14, Object(k.g)(P, Ce);
                        case 14:
                            return e.next = 16, Object(k.g)(L, Re);
                        case 16:
                        case "end":
                            return e.stop() } }), je) } var Ie = a(67),
                Me = "ACCOUNT.IMPORT_ACCOUNT",
                De = "ACCOUNT.CLEAR_ACCOUNT",
                Fe = "ACCOUNT.SET_API_TOKEN",
                Be = "ACCOUNT.ADD_WATCH_WALLET",
                Ke = "ACCOUNT.REMOVE_WATCH_WALLET",
                We = "ACCOUNT.SET_WATCH_ADDRESS",
                Ge = "ACCOUNT.UPDATE_CURRENT_LOGGEDIN_KP",
                He = "ACCOUNT.SET_DEPOSITING_TOKENS",
                Ve = "ACCOUNT.SET_DISTRIBUTION_TOKENS",
                ze = "ACCOUNT.FETCH_DEPOSITED_TOKENS",
                Ue = "ACCOUNT.FETCH_DISTRIBUTION_TOKENS",
                Ye = "ACCOUNT.FETCH_BALANCE",
                qe = "ACCOUNT.CLEAR_INDIVIDUAL_ASSETS",
                Qe = "ACCOUNT.SET_BALANCES",
                Xe = "ACCOUNT.SET_NFT_BALANCES",
                Je = "ACCOUNT.SET_FAVORITE_NFT",
                Ze = "ACCOUNT.SET_CUSTOM_NFTS";

            function $e(e, t, a, n) { return { type: Me, payload: { address: e, wallet: t, type: a, devicePath: n } } }

            function et() { return { type: De } }

            function tt(e) { return { type: Fe, payload: e } }

            function at(e) { return { type: Ke, payload: e } }

            function nt(e) { return { type: We, payload: e } }

            function rt(e) { return { type: Ge, payload: e } }

            function ct() { return { type: ze, payload: null } }

            function lt(e) { return { type: He, payload: e } }

            function st() { return { type: Ue, payload: null } }

            function ot(e) { return { type: Ve, payload: e } }

            function it() { return { type: Ye, payload: null } }

            function ut(e) { return { type: Qe, payload: e } }

            function mt(e) { return { type: Xe, payload: e } }

            function dt() { return { type: qe, payload: null } } var ft = a(10),
                pt = a(145),
                bt = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a(e) { var n; if (Object(v.a)(this, a), (n = t.call(this, e)).subscribeToDisconnect = function(e, t, a, r) { n.getDisconnected(e, t, a, r) }, n.addNewChain = function() { var e = Object(ft.a)(j.a.mark((function e(t) { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, n.ethereum.request({ method: "wallet_addEthereumChain", params: [{ chainId: de.a.utils.numberToHex(t), rpcUrls: [X.F[t].url], chainName: X.F[t].name, blockExplorerUrls: [X.k[t]], nativeCurrency: { name: X.F[t].name, symbol: X.F[t].currencySymbol, decimals: 18 } }] });
                                            case 2:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(), n.switchChain = function() { var e = Object(ft.a)(j.a.mark((function e(t) { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, n.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: de.a.utils.numberToHex(t) }] });
                                            case 3:
                                                e.next = 10; break;
                                            case 5:
                                                if (e.prev = 5, e.t0 = e.catch(0), 4902 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) { e.next = 10; break } return e.next = 10, n.addNewChain(t);
                                            case 10:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 5]
                                    ]) }))); return function(t) { return e.apply(this, arguments) } }(), n.signMessage = function() { var e = Object(ft.a)(j.a.mark((function e(t, a, r) { var c, l; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (a = a || (n.address ? n.address : ""), e.prev = 1, a) { e.next = 4; break } return e.abrupt("return", "");
                                            case 4:
                                                return e.next = 6, n.web3.eth.personal.sign(t, a, r);
                                            case 6:
                                                return c = e.sent, (l = n.web3.utils.hexToBytes(c))[64] < 2 && (l[64] += 27), e.abrupt("return", n.web3.utils.bytesToHex(l));
                                            case 12:
                                                return e.prev = 12, e.t0 = e.catch(1), console.log(e.t0), e.abrupt("return", "");
                                            case 16:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [1, 12]
                                    ]) }))); return function(t, a, n) { return e.apply(this, arguments) } }(), n.getWalletType = function() { return X.V.METAMASK }, window.ethereum) { if (window.ethereum.providers) { var r = window.ethereum.providers.find((function(e) { return e.isMetaMask }));
                                n.ethereum = r } else window.ethereum.isMetaMask && (n.ethereum = window.ethereum);
                            n.web3 = new de.a(n.ethereum) } return n } return a }(pt.a),
                vt = a(578),
                Et = a.n(vt),
                ht = a(294),
                gt = a.n(ht),
                Ot = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a(e) { var n; return Object(v.a)(this, a), (n = t.call(this, e)).walletConnector = void 0, n.initiateWalletConnector = function() { n.walletConnector = new Et.a({ bridge: "https://bridge.walletconnect.org" }) }, n.openQRCodeModal = Object(ft.a)(j.a.mark((function e() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!n.walletConnector.connected) { e.next = 4; break } return e.next = 3, n.clearSession();
                                    case 3:
                                        n.initiateWalletConnector();
                                    case 4:
                                        n.walletConnector.createSession().then((function() { var e = n.walletConnector.uri;
                                            gt.a.open(e, null) }));
                                    case 5:
                                    case "end":
                                        return e.stop() } }), e) }))), n.getConnected = function(e, t) { n.walletConnector.on("connect", (function(a, r) { if (a) t(a.message);
                                else { gt.a.close(); var c = r.params[0],
                                        l = c.accounts; if (c.chainId !== n.networkId) { var s = Object(oe.o)(n.networkId); return n.clearSession(), void t("Please make sure that your network is on ".concat(s)) }
                                    e(l[0]) } })) }, n.getDisconnected = function(e) { n.walletConnector.on("disconnect", (function() { n.handleClearAccount(e) })), n.walletConnector.on("session_update", (function() { n.handleClearAccount(e) })) }, n.handleClearAccount = function(e) { gt.a.close(), n.walletConnector = null, e() }, n.clearSession = Object(ft.a)(j.a.mark((function e() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.walletConnector.killSession();
                                    case 2:
                                    case "end":
                                        return e.stop() } }), e) }))), n.subscribeToDisconnect = function(e) { n.getDisconnected(e) }, n.sendTransaction = function(e) { return new Promise((function(t, a) { n.walletConnector.sendTransaction(e).then((function(e) { t(e) })).catch((function(e) { a(e.message) })) })) }, n.signMessage = function() { var e = Object(ft.a)(j.a.mark((function e(t, a) { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a = a || (n.address ? n.address : ""), e.prev = 1, a) { e.next = 4; break } return e.abrupt("return", "");
                                        case 4:
                                            return e.next = 6, n.walletConnector.signPersonalMessage([t, a]);
                                        case 6:
                                            return e.abrupt("return", e.sent);
                                        case 9:
                                            return e.prev = 9, e.t0 = e.catch(1), console.log(e.t0), e.abrupt("return", "");
                                        case 13:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [1, 9]
                                ]) }))); return function(t, a) { return e.apply(this, arguments) } }(), n.getWalletType = function() { return X.V.WALLET_CONNECT }, n.initiateWalletConnector(), n } return a }(pt.a),
                yt = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a(e) { var n; if (Object(v.a)(this, a), (n = t.call(this, e)).subscribeToDisconnect = function(e, t, a, r) { n.getDisconnected(e, t, a, r) }, n.switchChain = function() { var e = Object(ft.a)(j.a.mark((function e(t) { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, n.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: de.a.utils.numberToHex(t) }] });
                                            case 3:
                                                e.next = 8; break;
                                            case 5:
                                                e.prev = 5, e.t0 = e.catch(0), console.log(e.t0);
                                            case 8:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [0, 5]
                                    ]) }))); return function(t) { return e.apply(this, arguments) } }(), n.signMessage = function() { var e = Object(ft.a)(j.a.mark((function e(t, a, r) { var c, l; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (a = a || (n.address ? n.address : ""), e.prev = 1, a) { e.next = 4; break } return e.abrupt("return", "");
                                            case 4:
                                                return e.next = 6, n.web3.eth.personal.sign(t, a, r);
                                            case 6:
                                                return c = e.sent, (l = n.web3.utils.hexToBytes(c))[64] < 2 && (l[64] += 27), e.abrupt("return", n.web3.utils.bytesToHex(l));
                                            case 12:
                                                return e.prev = 12, e.t0 = e.catch(1), console.log(e.t0), e.abrupt("return", "");
                                            case 16:
                                            case "end":
                                                return e.stop() } }), e, null, [
                                        [1, 12]
                                    ]) }))); return function(t, a, n) { return e.apply(this, arguments) } }(), n.getWalletType = function() { return X.V.COINBASE }, window.ethereum) { if (window.ethereum.providers) { var r = window.ethereum.providers.find((function(e) { return e.isWalletLink }));
                                n.ethereum = r } else window.ethereum.isWalletLink && (n.ethereum = window.ethereum);
                            n.web3 = new de.a(n.ethereum) } return n } return a }(pt.a),
                jt = a(246),
                kt = a.n(jt),
                wt = a(177),
                xt = a(278),
                Nt = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a(e) { var n; return Object(v.a)(this, a), (n = t.call(this, e)).setConnection = function() { var e = Object(ft.a)(j.a.mark((function e(t) { var a, r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, kt.a.getPublicKey({ path: t });
                                        case 2:
                                            if (a = e.sent, r = a.success, c = a.payload, r) { e.next = 7; break } throw new Error(c.error);
                                        case 7:
                                            n.setHdKey(c.publicKey, c.chainCode);
                                        case 8:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(), n.signTransaction = function() { var e = Object(ft.a)(j.a.mark((function e(t, a) { var r, c, l; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.gasLimit = t.gas, t.chainID = n.networkId, e.next = 4, kt.a.ethereumSignTransaction({ path: a, transaction: t });
                                        case 4:
                                            if (r = e.sent, c = r.success, l = r.payload, c) { e.next = 9; break } throw new Error(l.error);
                                        case 9:
                                            return e.abrupt("return", Object(wt.c)({ chainId: n.networkId, name: n.chainName }, t, l));
                                        case 10:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t, a) { return e.apply(this, arguments) } }(), n.signMessage = function() { var e = Object(ft.a)(j.a.mark((function e(t, a) { var n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a) { e.next = 2; break } return e.abrupt("return", "");
                                        case 2:
                                            return e.prev = 2, e.next = 5, kt.a.ethereumSignMessage({ path: a, message: t, hex: !0 });
                                        case 5:
                                            if ((n = e.sent).success) { e.next = 8; break } return e.abrupt("return", "");
                                        case 8:
                                            return e.abrupt("return", "0x".concat(n.payload.signature));
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(2), console.log(e.t0), e.abrupt("return", "");
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [2, 11]
                                ]) }))); return function(t, a) { return e.apply(this, arguments) } }(), n.getWalletType = function() { return X.V.TREZOR }, kt.a.manifest({ email: "support@krystal.app", appUrl: "https://defi.krystal.app" }), n } return a }(xt.a),
                _t = a(580),
                Tt = a(582),
                At = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a(e) { var n; return Object(v.a)(this, a), (n = t.call(this, e)).setConnection = function() { var e = Object(ft.a)(j.a.mark((function e(t, a) { var r, c, l, s; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, _t.a.create();
                                        case 2:
                                            return r = e.sent, n.ethereum = new Tt.a(r), a && (t = "".concat(t, "/0'")), e.next = 7, n.ethereum.getAddress(t, !1, !0);
                                        case 7:
                                            c = e.sent, l = c.publicKey, s = c.chainCode, n.setHdKey(l, s);
                                        case 11:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t, a) { return e.apply(this, arguments) } }(), n.signTransaction = function() { var e = Object(ft.a)(j.a.mark((function e(t, a) { var r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.gasLimit = t.gas, r = Object(wt.b)({ chainId: n.networkId, name: n.chainName }, t), e.next = 4, n.ethereum.signTransaction(a, r);
                                        case 4:
                                            return c = e.sent, e.abrupt("return", Object(wt.c)({ chainId: n.networkId, name: n.chainName }, t, c, !0));
                                        case 6:
                                        case "end":
                                            return e.stop() } }), e) }))); return function(t, a) { return e.apply(this, arguments) } }(), n.signMessage = function() { var e = Object(ft.a)(j.a.mark((function e(t, a) { var r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (a) { e.next = 2; break } return e.abrupt("return", "");
                                        case 2:
                                            return e.prev = 2, e.next = 5, n.ethereum.signPersonalMessage(a, t.substring(2));
                                        case 5:
                                            return r = e.sent, (c = r.v.toString()).length < 2 && (c = "0".concat(c)), e.abrupt("return", "0x".concat(r.r).concat(r.s).concat(c));
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(2), console.log(e.t0), e.abrupt("return", "");
                                        case 15:
                                        case "end":
                                            return e.stop() } }), e, null, [
                                    [2, 11]
                                ]) }))); return function(t, a) { return e.apply(this, arguments) } }(), n.getWalletType = function() { return X.V.LEDGER }, n.ethereum = null, n.needTobeInitiated = !0, n } return a }(xt.a),
                St = function(e) { Object(h.a)(a, e); var t = Object(g.a)(a);

                    function a() { var e;
                        Object(v.a)(this, a); for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]; return (e = t.call.apply(t, [this].concat(r))).subscribeToDisconnect = function() { return !1 }, e.getWalletType = function() { return X.V.DAPP }, e } return a }(bt),
                Ct = a(23);

            function Rt(e) { return { address: e.address, symbol: e.symbol, name: e.name, decimals: e.decimals, logo: e.logo, chartData: e.sparkline, overview: [], quotes: e.quotes } }

            function Pt(e) { return e.map((function(e) { var t, a = 0,
                        n = e.overview.map((function(e) { return e.supplyRate > a && (t = e, a = e.supplyRate), { name: e.name, supplyRate: e.supplyRate, stableBorrowRate: e.stableBorrowRate, variableBorrowRate: e.variableBorrowRate, distributionSupplyRate: e.distributionSupplyRate, distributionBorrowRate: e.distributionBorrowRate, totalSupply: e.totalSupply, liquidity: e.liquidity } })); return { name: e.name, symbol: e.symbol, decimals: e.decimals, logo: e.logo, balance: 0, address: e.address, bestAPY: 100 * a, overview: n, bestPlatform: t, price: 0 } })) }
            a(338);

            function Lt(e) { return { from: e.from, to: e.to, value: e.value, data: e.data, gasPrice: e.gasPrice, gas: e.gasLimit, nonce: e.nonce } }

            function It(e) { return { claimablePoint: e.claimablePoint, cashbackPendingVol: e.cashbackPendingVol, cashbackRealizedVol: e.cashbackRealizedVol, minTier: e.minTier, maxTier: e.maxTier, realizedReward: e.realizedReward, codes: (t = e.codes, Object.keys(t).map((function(e) { return { code: e, totalRefer: t[e].totalRefer, pendingVol: t[e].pendingVol, realizedVol: t[e].realizedVol, ratio: t[e].ratio } }))) }; var t }

            function Mt(e) { return e.map((function(e) { return { id: e.id, url: e.url, imageUrl: e.imageUrl, type: e.type } })) }

            function Dt(e) { return e.map((function(e) { return { id: e.id, createdAt: e.createdAt, updatedAt: e.updatedAt, title: e.title, content: e.content, image: "null" !== e.image && e.image ? e.image : "", link: e.link } })) }

            function Ft(e) { return { name: e.name, symbol: e.symbol, address: e.address, decimals: e.decimals, unclaimed: +Object(oe.j)(e.unclaimed, e.decimals), value: 0, logo: "" } }

            function Bt(e) { return e.map((function(e) { var t = e.balances.map((function(t) { return function(e, t) { return { name: t, symbol: e.symbol, address: e.address, decimals: e.decimals, supplyBalance: +Object(oe.j)(e.supplyBalance, e.decimals), supplyRate: 100 * e.supplyRate, logo: e.logo, value: 0, stableBorrowRate: e.stableBorrowRate, variableBorrowRate: e.variableBorrowRate, stableBorrowBalance: e.stableBorrowBalance, variableBorrowBalance: e.variableBorrowBalance, interestBearingTokenSymbol: e.interestBearingTokenSymbol, interestBearingTokenAddress: e.interestBearingTokenAddress, interestBearingTokenDecimals: e.interestBearingTokenDecimals, interestBearingTokenBalance: e.interestBearingTokenBalance, requiresApproval: e.requiresApproval } }(t, e.name) })); return { name: e.name, balances: t } })) }

            function Kt(e) { return { rate: +Object(oe.j)(e.rate), platform: e.platform, platformShort: e.platformShort, platformIcon: e.platformIcon, hint: e.hint, tradePath: e.tradePath, estimatedGas: +e.estimatedGas } }

            function Wt(e) { return { "Super Fast": 2 * e.fast, Fast: +e.fast, Standard: +e.standard, Low: +e.low } } var Gt = a(1281);

            function Ht() { return (Ht = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/notification/list"));
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
                            case 6:
                                return n = e.sent, e.abrupt("return", Dt(n.notifications));
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", []);
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Vt(e, t, a, n) { return zt.apply(this, arguments) }

            function zt() { return (zt = Object(ft.a)(j.a.mark((function e(t, a, n, r) { var c, l; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/login"), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ address: a, timestamp: n, signature: r }) });
                            case 3:
                                return c = e.sent, e.next = 6, c.json();
                            case 6:
                                return l = e.sent, e.abrupt("return", l.token);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", "");
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Ut(e, t, a, n) { return Yt.apply(this, arguments) }

            function Yt() { return (Yt = Object(ft.a)(j.a.mark((function e(t, a, n, r) { var c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/account/registerReferrer"), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ address: a, referralCode: n, signature: r }) });
                            case 3:
                                return c = e.sent, e.next = 6, c.json();
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", { success: !1, error: "Something went wrong registering your referral code." });
                            case 12:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 9]
                    ]) })))).apply(this, arguments) }

            function qt(e, t, a) { return Qt.apply(this, arguments) }

            function Qt() { return (Qt = Object(ft.a)(j.a.mark((function e(t, a, n) { var r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/account/referralOverview?address=").concat(a), { method: "GET", headers: { Accept: "application/json", Authorization: "Bearer " + n } });
                            case 3:
                                return r = e.sent, e.next = 6, r.json();
                            case 6:
                                return c = e.sent, e.abrupt("return", It(c.overview));
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", !1);
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Xt(e, t) { return Jt.apply(this, arguments) }

            function Jt() { return (Jt = Object(ft.a)(j.a.mark((function e(t, a) { var n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/account/balances?address=").concat(a));
                            case 3:
                                return n = e.sent, e.next = 6, n.json();
                            case 6:
                                if (!(null === (r = e.sent) || void 0 === r ? void 0 : r.balances)) { e.next = 9; break } return e.abrupt("return", r.balances.map((function(e) { return Object(w.a)(Object(w.a)({}, e), {}, { balance: +Object(oe.j)(e.balance, e.token.decimals) }) })));
                            case 9:
                                return e.abrupt("return", !1);
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", !1);
                            case 16:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 12]
                    ]) })))).apply(this, arguments) }

            function Zt(e, t) { return $t.apply(this, arguments) }

            function $t() { return ($t = Object(ft.a)(j.a.mark((function e(t, a) { var n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/account/nftBalances?address=").concat(a));
                            case 3:
                                return n = e.sent, e.next = 6, n.json();
                            case 6:
                                return r = e.sent, e.abrupt("return", r);
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", !1);
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function ea(e, t, a) { return ta.apply(this, arguments) }

            function ta() { return (ta = Object(ft.a)(j.a.mark((function e(t, a, n) { var r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/lending/distributionBalance?lendingPlatform=").concat(n, "&address=").concat(a));
                            case 3:
                                return r = e.sent, e.next = 6, r.json();
                            case 6:
                                if (!(c = e.sent).error) { e.next = 9; break } throw new Error(c.error);
                            case 9:
                                return e.abrupt("return", Ft(c.balance));
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(0), e.abrupt("return", !1);
                            case 15:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 12]
                    ]) })))).apply(this, arguments) }

            function aa() { return (aa = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/mkt/assets"));
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
                            case 6:
                                return n = e.sent, e.abrupt("return", Mt(n.assets));
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", []);
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function na(e, t) { return ra.apply(this, arguments) }

            function ra() { return (ra = Object(ft.a)(j.a.mark((function e(t, a) { var n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a.hint ? a.hint : "0x", r = "".concat(t, "/v2/swap/buildTx?userAddress=").concat(a.userAddress, "&dest=").concat(a.dest, "&src=").concat(a.src, "&platformWallet=").concat(a.platformWallet, "&srcAmount=").concat(a.srcAmount, "&minDestAmount=").concat(a.minDestAmount, "&gasPrice=").concat(a.gasPrice, "&hint=").concat(n, "&nonce=").concat(a.nonce, "&useGasToken=").concat(a.useGasToken), e.next = 4, wa(r);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function ca(e, t) { return la.apply(this, arguments) }

            function la() { return (la = Object(ft.a)(j.a.mark((function e(t, a) { var n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = a.hint ? a.hint : "", r = "".concat(t, "/v2/swap/buildSwapAndDepositTx?lendingPlatform=").concat(a.lendingPlatform, "&userAddress=").concat(a.userAddress, "&src=").concat(a.src, "&dest=").concat(a.dest, "&platformWallet=").concat(a.platformWallet, "&srcAmount=").concat(a.srcAmount, "&minDestAmount=").concat(a.minDestAmount, "&gasPrice=").concat(a.gasPrice, "&hint=").concat(n, "&nonce=").concat(a.nonce, "&useGasToken=").concat(a.useGasToken), e.next = 4, wa(r);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function sa(e, t) { return oa.apply(this, arguments) }

            function oa() { return (oa = Object(ft.a)(j.a.mark((function e(t, a) { var n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = "".concat(t, "/v1/lending/buildWithdrawTx?lendingPlatform=").concat(a.platform, "&userAddress=").concat(a.userAddress, "&token=").concat(a.tokenAddress, "&amount=").concat(a.amount, "&gasPrice=").concat(a.gasPrice, "&nonce=").concat(a.nonce), e.next = 3, Na(n);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function ia(e, t) { return ua.apply(this, arguments) }

            function ua() { return (ua = Object(ft.a)(j.a.mark((function e(t, a) { var n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = "".concat(t, "/v1/lending/buildClaimTx?lendingPlatform=").concat(a.platform, "&address=").concat(a.userAddress, "&gasPrice=").concat(a.gasPrice, "&nonce=").concat(a.nonce), e.next = 3, Na(n);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function ma(e, t) { return da.apply(this, arguments) }

            function da() { return (da = Object(ft.a)(j.a.mark((function e(t, a) { var n, r, c, l, s, o; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, n = "".concat(t, "/v1/market/overview?quoteCurrencies=btc,usd,matic,bnb,eth"), a && a.length && (n = "".concat(t, "/v1/market/overview?quoteCurrencies=btc,usd,matic,bnb,eth&tokenAddresses=").concat(a.join(","))), e.next = 5, fetch(n);
                            case 5:
                                return r = e.sent, e.next = 8, r.json();
                            case 8:
                                for (c = e.sent, l = c.data, s = [], o = 0; o < l.length; o++) s[o] = Rt(l[o]); return e.abrupt("return", s);
                            case 15:
                                return e.prev = 15, e.t0 = e.catch(0), e.abrupt("return", []);
                            case 18:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 15]
                    ]) })))).apply(this, arguments) }

            function fa(e) { return pa.apply(this, arguments) }

            function pa() { return (pa = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("".concat(t, "/v1/lending/overview"));
                            case 2:
                                return a = e.sent, e.next = 5, a.json();
                            case 5:
                                return n = e.sent, e.abrupt("return", Pt(n.result));
                            case 7:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function ba(e, t) { return va.apply(this, arguments) }

            function va() { return (va = Object(ft.a)(j.a.mark((function e(t, a) { var n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/lending/balance?address=").concat(a));
                            case 3:
                                return n = e.sent, e.next = 6, n.json();
                            case 6:
                                return r = e.sent, e.abrupt("return", Bt(r.result));
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", []);
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Ea(e, t, a) { return ha.apply(this, arguments) }

            function ha() { return (ha = Object(ft.a)(j.a.mark((function e(t, a, n) { var r, c, l; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = 0, e.prev = 1, e.next = 4, fetch("".concat(t, "/v1/market/refPrice?src=").concat(a, "&dest=").concat(n));
                            case 4:
                                return c = e.sent, e.next = 7, c.json();
                            case 7:
                                l = e.sent, r = l.refPrice ? l.refPrice : 0, e.next = 14; break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(1), console.log(e.t0);
                            case 14:
                                return e.abrupt("return", r);
                            case 15:
                            case "end":
                                return e.stop() } }), e, null, [
                        [1, 11]
                    ]) })))).apply(this, arguments) } var ga = new AbortController;

            function Oa(e, t, a, n, r, c, l) { return ya.apply(this, arguments) }

            function ya() { return (ya = Object(ft.a)(j.a.mark((function e(t, a, n, r, c, l, s) { var o, i, u, m; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, ga.abort(), ga = new AbortController, o = ga.signal, i = c ? "destAmount" : "srcAmount", e.next = 7, fetch("".concat(t, "/v2/swap/allRates?src=").concat(a, "&").concat(i, "=").concat(r, "&dest=").concat(n).concat(l ? "&userAddress=".concat(l) : "").concat(s ? "&platformWallet=".concat(s) : ""), { signal: o });
                            case 7:
                                return u = e.sent, e.next = 10, u.json();
                            case 10:
                                if ((m = e.sent).rates) { e.next = 13; break } return e.abrupt("return", []);
                            case 13:
                                return e.abrupt("return", m.rates.map((function(e) { return Kt(e) })));
                            case 16:
                                return e.prev = 16, e.t0 = e.catch(0), console.log("abort", e.t0), e.abrupt("return", []);
                            case 20:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 16]
                    ]) })))).apply(this, arguments) }

            function ja() { return (ja = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v2/swap/gasPrice"));
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
                            case 6:
                                if ((n = e.sent).gasPrice) { e.next = 9; break } return e.abrupt("return", X.p);
                            case 9:
                                return e.abrupt("return", Wt(n.gasPrice));
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", X.p);
                            case 16:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 12]
                    ]) })))).apply(this, arguments) } var ka = new AbortController;

            function wa(e) { return xa.apply(this, arguments) }

            function xa() { return (xa = Object(ft.a)(j.a.mark((function e(t) { var a, n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, ka.abort(), ka = new AbortController, a = ka.signal, e.next = 6, fetch(t, { signal: a });
                            case 6:
                                return n = e.sent, e.next = 9, n.json();
                            case 9:
                                if (!(r = e.sent).error && r.txObject) { e.next = 12; break } return e.abrupt("return", { error: r.error });
                            case 12:
                                return e.abrupt("return", { error: "", tx: Lt(r.txObject) });
                            case 15:
                                if (e.prev = 15, e.t0 = e.catch(0), console.log(e.t0), 20 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) { e.next = 20; break } return e.abrupt("return", { error: "CANCEL" });
                            case 20:
                                return e.abrupt("return", { error: "Something went wrong with building transaction object" });
                            case 21:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 15]
                    ]) })))).apply(this, arguments) }

            function Na(e) { return _a.apply(this, arguments) }

            function _a() { return (_a = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch(t);
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
                            case 6:
                                if (!(n = e.sent).error && n.txObject) { e.next = 9; break } return e.abrupt("return", { error: n.error });
                            case 9:
                                return e.abrupt("return", { error: "", tx: Lt(n.txObject) });
                            case 12:
                                return e.prev = 12, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", { error: "Something went wrong with building transaction object" });
                            case 16:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 12]
                    ]) })))).apply(this, arguments) }

            function Ta(e) { return Aa.apply(this, arguments) }

            function Aa() { return (Aa = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/api/campaigns/current_active"));
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
                            case 6:
                                return n = e.sent, e.abrupt("return", n);
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Sa(e) { return Ca.apply(this, arguments) }

            function Ca() { return (Ca = Object(ft.a)(j.a.mark((function e(t) { var a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/mkt/banners"));
                            case 3:
                                return a = e.sent, e.next = 6, a.json();
                            case 6:
                                return n = e.sent, e.abrupt("return", n.banners);
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Ra(e, t) { return Pa.apply(this, arguments) }

            function Pa() { return (Pa = Object(ft.a)(j.a.mark((function e(t, a) { var n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/token/tokenDetails?address=").concat(a));
                            case 3:
                                return n = e.sent, e.next = 6, n.json();
                            case 6:
                                return r = e.sent, e.abrupt("return", r.result);
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function La(e, t, a) { return Ia.apply(this, arguments) }

            function Ia() { return (Ia = Object(ft.a)(j.a.mark((function e(t, a, n) { var r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/account/nftDetail?collectibleAddress=").concat(a, "&tokenID=").concat(n));
                            case 3:
                                return r = e.sent, e.next = 6, r.json();
                            case 6:
                                return c = e.sent, e.abrupt("return", c.detail);
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                            case 13:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 10]
                    ]) })))).apply(this, arguments) }

            function Ma(e, t, a, n, r, c) { return Da.apply(this, arguments) }

            function Da() { return (Da = Object(ft.a)(j.a.mark((function e(t, a, n, r, c, l) { var s; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(t, "/v1/account/registerFavoriteNft"), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ address: a, collectibleAddress: n, tokenID: r, signature: l, favorite: c ? "1" : "0" }) });
                            case 3:
                                return s = e.sent, e.next = 6, s.json();
                            case 6:
                                return e.abrupt("return", e.sent);
                            case 9:
                                return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", { success: !1, error: "Something went wrong." });
                            case 12:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 9]
                    ]) })))).apply(this, arguments) }

            function Fa(e, t, a, n) { return Ba.apply(this, arguments) }

            function Ba() { return (Ba = Object(ft.a)(j.a.mark((function e(t, a, n, r) { var c, l, s; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, c = Math.round(Object(Gt.a)(new Date, n).getTime() / 1e3), e.next = 4, fetch("".concat(t, "/v1/market/priceSeries?token=").concat(a, "&from=").concat(c, "&quoteCurrency=").concat(r));
                            case 4:
                                return l = e.sent, e.next = 7, l.json();
                            case 7:
                                return s = e.sent, e.abrupt("return", s.prices.map((function(e) { return { date: e[0], price: e[1] } })));
                            case 11:
                                e.prev = 11, e.t0 = e.catch(0), console.log(e.t0);
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 11]
                    ]) })))).apply(this, arguments) } var Ka = "TOKEN.INITIAL_TOKEN",
                Wa = "TOKEN.SET_CUSTOM_TOKENS",
                Ga = "TOKEN.FETCHING_TOKENS",
                Ha = "TOKEN.SET_FETCHING_STAKED_TOKENS",
                Va = "TOKEN.ADD_CUSTOM_TOKEN",
                za = "TOKEN.ADD_FAVORITE_TOKEN",
                Ua = "TOKEN.REMOVE_FAVORITE_TOKEN",
                Ya = "TOKEN.SET_STAKED_TOKENS",
                qa = "TOKEN.FETCH_MARKET",
                Qa = "TOKEN.FETCH_STAKED_TOKENS",
                Xa = "TOKEN.SET_SUPPORTED_TOKENS",
                Ja = "TOKEN.SET_ADDING_CUSTOM_TOKENS",
                Za = "TOKEN.SET_TOKEN_HIDE";

            function $a(e, t) { return { type: Va, payload: { addresses: e, isAutomated: t } } }

            function en(e) { return { type: za, payload: e } }

            function tn(e) { return { type: Ua, payload: e } }

            function an(e) { return { type: Ga, payload: e } }

            function nn(e) { return { type: Ha, payload: e } }

            function rn(e) { return { type: Wa, payload: e } }

            function cn(e) { return { type: Ja, payload: e } } var ln = a(1080);

            function sn(e, t) { return on.apply(this, arguments) }

            function on() { return (on = Object(ft.a)(j.a.mark((function e(t, a) { var n, r, c, l, s, o, i, u, m, d, f, p; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, n = X.l[t], r = X.m[t], c = Object(oe.d)(t).web3, l = "".concat(n, "?module=account&action=tokentx&address=").concat(a, "&startblock=0&endblock=99999999&sort=desc&apikey=").concat(r), e.next = 7, fetch(l);
                            case 7:
                                return s = e.sent, e.next = 10, s.json();
                            case 10:
                                if (o = e.sent, s.ok) { e.next = 13; break } return e.abrupt("return", []);
                            case 13:
                                return i = o.result, u = [], i.forEach((function(e) {-1 === u.findIndex((function(t) { return t.address === e.contractAddress })) && u.push({ address: e.contractAddress, symbol: e.tokenSymbol, name: e.tokenName, decimals: +e.tokenDecimal, logo: "", balance: 0, overview: [] }) })), e.next = 18, Object(fe.c)(c, a);
                            case 18:
                                return m = e.sent, u.unshift({ address: X.n, symbol: "ETH", name: "Ethereum", decimals: 18, logo: "", balance: +m, overview: [] }), d = new c.eth.Contract(ln, X.v[t]), e.next = 23, Object(fe.e)(a, u.map((function(e) { return e.address })), d);
                            case 23:
                                for (p in f = e.sent, u) u[p].balance = +Object(oe.j)(f[p], u[p].decimals); return e.abrupt("return", u.filter((function(e) { return e.balance > 0 })));
                            case 28:
                                return e.prev = 28, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", []);
                            case 32:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 28]
                    ]) })))).apply(this, arguments) } var un = j.a.mark(jn),
                mn = j.a.mark(kn),
                dn = j.a.mark(wn),
                fn = j.a.mark(xn),
                pn = j.a.mark(Nn),
                bn = j.a.mark(_n),
                vn = j.a.mark(Tn),
                En = j.a.mark(An),
                hn = j.a.mark(Sn),
                gn = function(e) { return e.global },
                On = function(e) { return e.account },
                yn = function(e) { return e.token };

            function jn(e) { var t, a, n, r, c, l, s, o; return j.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            return i.next = 2, Object(k.f)(gn);
                        case 2:
                            return t = i.sent, a = t.chainId, i.next = 6, Object(k.f)(On);
                        case 6:
                            if (n = i.sent, r = n.address, c = n.devicePath, l = e.payload, "account" !== e.key || !l || !l.type) { i.next = 44; break } if (s = null, o = { nodeUrl: X.F[a].url, networkId: a, chainName: X.F[a].name, address: r }, l.type !== X.V.METAMASK) { i.next = 17; break }
                            s = new bt(o), i.next = 41; break;
                        case 17:
                            if (l.type !== X.V.WALLET_CONNECT) { i.next = 21; break }
                            s = new Ot(o), i.next = 41; break;
                        case 21:
                            if (l.type !== X.V.COINBASE) { i.next = 26; break } return i.next = 24, setTimeout((function() { s = new yt(o) }), 0);
                        case 24:
                            i.next = 41; break;
                        case 26:
                            if (l.type !== X.V.TREZOR) { i.next = 40; break } return s = new Nt(o), i.prev = 28, i.next = 31, Object(k.b)(s.setConnection, c);
                        case 31:
                            i.next = 38; break;
                        case 33:
                            return i.prev = 33, i.t0 = i.catch(28), s = null, i.next = 38, Object(k.e)(et());
                        case 38:
                            i.next = 41; break;
                        case 40:
                            l.type === X.V.LEDGER ? s = new At(o) : l.type === X.V.DAPP && (s = new St(o));
                        case 41:
                            if (!s) { i.next = 44; break } return i.next = 44, Object(k.e)($e(r, s, l.type, c));
                        case 44:
                        case "end":
                            return i.stop() } }), un, null, [
                    [28, 33]
                ]) }

            function kn(e, t) { var a, r, c, l, s, o, i, u, m, d, f, p; return j.a.wrap((function(b) { for (;;) switch (b.prev = b.next) {
                        case 0:
                            if (t) { b.next = 2; break } return b.abrupt("return");
                        case 2:
                            return b.next = 4, Object(k.f)(gn);
                        case 4:
                            return a = b.sent, r = a.chainId, b.next = 8, Object(k.f)(yn);
                        case 8:
                            return c = b.sent, l = c.customTokens, s = c.supportedTokens, o = [].concat(Object(n.a)(s), Object(n.a)(l)), b.next = 14, Object(k.b)(Xt, e, t);
                        case 14:
                            if ((i = b.sent) && 0 !== i.length) { b.next = 25; break } return b.next = 18, sn(r, t);
                        case 18:
                            return u = b.sent, m = o.map((function(e) { return e.address })), d = Object(Ct.uniqBy)(u.filter((function(e) { return e.address === X.n || m.includes(e.address) })), "address"), f = d.map((function(e) { e.address === X.n && (e.address = X.C[r]); var t = o.find((function(t) { return t.address === e.address })); return Object.keys(null === t || void 0 === t ? void 0 : t.quotes).forEach((function(a) { t.quotes[a].rate = null === t || void 0 === t ? void 0 : t.quotes[a].price, t.quotes[a].value = e.balance * (null === t || void 0 === t ? void 0 : t.quotes[a].price) })), { token: Object(w.a)(Object(w.a)({}, e), {}, { market: t.quotes, chartData: t.chartData, logo: t.logo }), quotes: t.quotes, balance: e.balance } })), b.next = 24, Object(k.e)(ut(f));
                        case 24:
                            return b.abrupt("return", b.sent);
                        case 25:
                            return p = i.filter((function(e) { return !!e.balance && !!Object(Ct.get)(e, "quotes.usd.value", 0) })), b.next = 28, Object(k.e)($a(p.map((function(e) { var t; return null === e || void 0 === e || null === (t = e.token) || void 0 === t ? void 0 : t.address })), !0));
                        case 28:
                            return p = p.map((function(e) { var t = o.find((function(t) { return t.address === e.token.address })); return t ? Object(w.a)(Object(w.a)({}, e), {}, { token: Object(w.a)(Object(w.a)({}, e.token), {}, { market: t.quotes, chartData: t.chartData }) }) : e })).filter((function(e) { return !!e })), b.next = 31, Object(k.e)(ut(p));
                        case 31:
                        case "end":
                            return b.stop() } }), mn) }

            function wn(e, t) { var a, n; return j.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, Object(k.b)(Zt, e, t);
                        case 2:
                            if ((a = r.sent) && 0 !== a.length) { r.next = 7; break } return r.next = 6, Object(k.e)(mt([]));
                        case 6:
                            return r.abrupt("return");
                        case 7:
                            return n = a.balances.filter((function(e) { return e.items.find((function(e) { return +e.tokenBalance > 0 })) })), r.next = 10, Object(k.e)(mt(n));
                        case 10:
                        case "end":
                            return r.stop() } }), dn) }

            function xn(e) { var t, a, n, r, c, l, s, o, i, u, m, d, p; return j.a.wrap((function(b) { for (;;) switch (b.prev = b.next) {
                        case 0:
                            return t = e.payload, a = t.collectibleAddress, n = t.tokenID, r = t.favorite, b.next = 3, Object(k.f)(On);
                        case 3:
                            return c = b.sent, l = c.wallet, s = c.address, o = c.balanceNFTs, b.next = 9, Object(k.f)(gn);
                        case 9:
                            return i = b.sent, u = i.chainId, b.next = 13, Object(k.b)(l.signMessage, n, s);
                        case 13:
                            if (m = b.sent) { b.next = 17; break } return f.b.dark("Attempt to sign message failed"), b.abrupt("return");
                        case 17:
                            return b.next = 19, Object(k.b)(Ma, X.t[u], s, a, n, r, m);
                        case 19:
                            if (!(d = b.sent) || !0 !== d.success) { b.next = 25; break } return p = o.map((function(e) { return e.collectibleAddress !== a ? e : Object(w.a)(Object(w.a)({}, e), {}, { items: e.items.map((function(e) { return e.tokenID === n ? Object(w.a)(Object(w.a)({}, e), {}, { favorite: r }) : e })) }) })), b.next = 24, Object(k.e)(mt(p));
                        case 24:
                            return b.abrupt("return");
                        case 25:
                            f.b.dark("Something went wrong.");
                        case 26:
                        case "end":
                            return b.stop() } }), fn) }

            function Nn() { var e, t, a, n, r; return j.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                        case 0:
                            return c.next = 2, Object(k.f)(On);
                        case 2:
                            if (e = c.sent, t = e.watchAddress) { c.next = 6; break } return c.abrupt("return");
                        case 6:
                            return c.next = 8, Object(k.f)(gn);
                        case 8:
                            return a = c.sent, n = a.chainId, r = X.t[n], c.next = 13, Object(k.a)([Object(k.b)(kn, r, t), Object(k.b)(wn, r, t)]);
                        case 13:
                        case "end":
                            return c.stop() } }), pn) }

            function _n() { var e, t, a, n, r, c, l; return j.a.wrap((function(s) { for (;;) switch (s.prev = s.next) {
                        case 0:
                            return s.next = 2, Object(k.f)(On);
                        case 2:
                            if (e = s.sent, t = e.watchAddress) { s.next = 6; break } return s.abrupt("return");
                        case 6:
                            return s.next = 8, Object(k.f)(yn);
                        case 8:
                            return a = s.sent, n = a.supportedTokens, s.next = 12, Object(k.f)(gn);
                        case 12:
                            return r = s.sent, c = r.chainId, s.next = 16, Object(k.b)(ba, X.t[c], t);
                        case 16:
                            return (l = s.sent).forEach((function(e) { e.balances.map((function(e) { var t = Object(oe.g)(n, "address", e.address.toLocaleLowerCase()),
                                        a = t ? t.quotes.usd.price : 0; return e.value = a * e.supplyBalance, e })) })), s.next = 20, Object(k.e)(lt(l));
                        case 20:
                        case "end":
                            return s.stop() } }), bn) }

            function Tn() { var e, t, a, n, r, c, l, s, o, i; return j.a.wrap((function(u) { for (;;) switch (u.prev = u.next) {
                        case 0:
                            return u.next = 2, Object(k.f)(On);
                        case 2:
                            return e = u.sent, t = e.watchAddress, u.next = 6, Object(k.f)(gn);
                        case 6:
                            if (a = u.sent, n = a.chainId, t) { u.next = 10; break } return u.abrupt("return");
                        case 10:
                            if (n !== X.d.POLYGON && n !== X.d.AVALANCHE) { u.next = 14; break } return u.next = 13, Object(k.e)(ot([]));
                        case 13:
                            return u.abrupt("return");
                        case 14:
                            return u.next = 16, Object(k.f)(yn);
                        case 16:
                            return r = u.sent, c = r.supportedTokens, u.next = 20, Object(k.b)(ea, X.t[n], t, X.x[n]);
                        case 20:
                            if (!1 !== (l = u.sent)) { u.next = 23; break } return u.abrupt("return");
                        case 23:
                            return s = l, o = Object(oe.g)(c, "address", s.address.toLocaleLowerCase()), i = o ? o.quotes.usd.price : 0, s.value = i * s.unclaimed, s.logo = o ? o.logo : "", u.next = 30, Object(k.e)(ot([s]));
                        case 30:
                        case "end":
                            return u.stop() } }), vn) }

            function An() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.a)([Object(k.e)(lt([])), Object(k.e)(ot([])), Object(k.e)(ut([])), Object(k.e)(mt([]))]);
                        case 2:
                        case "end":
                            return e.stop() } }), En) }

            function Sn() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.g)(Ie.h, jn);
                        case 2:
                            return e.next = 4, Object(k.g)(ze, _n);
                        case 4:
                            return e.next = 6, Object(k.g)(Ue, Tn);
                        case 6:
                            return e.next = 8, Object(k.g)(Ye, Nn);
                        case 8:
                            return e.next = 10, Object(k.g)(qe, An);
                        case 10:
                            return e.next = 12, Object(k.g)(Je, xn);
                        case 12:
                        case "end":
                            return e.stop() } }), hn) } var Cn = "GLOBAL.SET_CHAIN_ID",
                Rn = "GLOBAL.SET_MESSAGE",
                Pn = "GLOBAL.SET_EXPLORE_DATA",
                Ln = "GLOBAL.SET_NOTIFICATIONS",
                In = "GLOBAL.SET_HIDE_BALANCE",
                Mn = "GLOBAL.SET_GAS_PRICES",
                Dn = "GLOBAL.SET_SELECTED_GAS_PRICE",
                Fn = "GLOBAL.SET_SLIPPAGE_RATE",
                Bn = "GLOBAL.SET_USE_GAS_TOKEN",
                Kn = "GLOBAL.SET_MODAL_STATE",
                Wn = "GLOBAL.CLOSE_ALL_MODALS",
                Gn = "GLOBAL.SET_MARKET_BASE",
                Hn = "GLOBAL.SET_LEFT_SIDE_BAR_COLLAPSE_STATE",
                Vn = "GLOBAL.SET_CURRENCY_RATE",
                zn = "GLOBAL.SET_SHOW_WELCOME_EARN",
                Un = "GLOBAL.SET_PAGE_SETTINGS",
                Yn = "GLOBAL.FETCH_PAGE_SETTINGS";

            function qn(e) { return { type: Cn, payload: { chainId: e } } }

            function Qn(e, t, a) { return { type: Rn, payload: { isOpen: e, message: t, type: a } } }

            function Xn(e) { return { type: Dn, payload: e } }

            function Jn(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return { type: Kn, payload: { key: e, data: t } } }

            function Zn(e) { return { type: Hn, payload: e } }

            function $n(e) { return { type: Vn, payload: e } }

            function er(e) { return { type: Un, payload: e } } var tr = j.a.mark(rr),
                ar = j.a.mark(cr),
                nr = function(e) { return e.global };

            function rr(e) { var t, a, n, r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.f)(nr);
                        case 2:
                            return t = e.sent, a = t.chainId, n = X.t[a], e.next = 7, Object(k.b)(Sa, n);
                        case 7:
                            if (!(r = e.sent)) { e.next = 11; break } return e.next = 11, Object(k.e)(er(r));
                        case 11:
                        case "end":
                            return e.stop() } }), tr) }

            function cr() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.g)(Yn, rr);
                        case 2:
                        case "end":
                            return e.stop() } }), ar) } var lr = j.a.mark(fr),
                sr = j.a.mark(pr),
                or = j.a.mark(br),
                ir = j.a.mark(vr),
                ur = j.a.mark(Er),
                mr = function(e) { return e.global },
                dr = function(e) { return e.token };

            function fr(e) { var t, a, r, c, l, s, o, i, u, m, d; return j.a.wrap((function(f) { for (;;) switch (f.prev = f.next) {
                        case 0:
                            return f.next = 2, Object(k.f)(mr);
                        case 2:
                            return a = f.sent, r = a.chainId, f.next = 6, Object(k.f)(dr);
                        case 6:
                            return c = f.sent, l = c.customTokens, s = (null === e || void 0 === e || null === (t = e.payload) || void 0 === t ? void 0 : t.chainId) || r, o = X.t[s], f.next = 12, Object(k.b)(ma, o);
                        case 12:
                            return i = (i = f.sent).map((function(e) { return Object(w.a)(Object(w.a)({}, e), {}, { chainId: r, isVerified: !0 }) })), f.next = 16, Object(k.e)({ type: Xa, payload: i });
                        case 16:
                            if (!(u = l.filter((function(e) { return e.chainId === r }))).length) { f.next = 24; break } return f.next = 20, Object(k.b)(ma, o, Object(n.a)(u.map((function(e) { return e.address }))));
                        case 20:
                            return m = f.sent, d = l.map((function(e) { var t = m.find((function(t) { return t.address === e.address })); return t ? Object(w.a)(Object(w.a)({}, t), {}, { chainId: r }) : e })), f.next = 24, Object(k.e)(rn(d));
                        case 24:
                        case "end":
                            return f.stop() } }), lr) }

            function pr(e) { var t, a, r, c, l, s, o, i, u, m; return j.a.wrap((function(d) { for (;;) switch (d.prev = d.next) {
                        case 0:
                            return d.next = 2, Object(k.e)(cn(!0));
                        case 2:
                            return d.next = 4, Object(k.f)(mr);
                        case 4:
                            return t = d.sent, a = t.chainId, d.next = 8, Object(k.f)(dr);
                        case 8:
                            if (r = d.sent, c = r.supportedTokens, l = r.customTokens, s = [].concat(Object(n.a)(c.map((function(e) { return e.address }))), Object(n.a)(l.map((function(e) { return e.address })))), o = e.payload.addresses, (i = o.filter((function(e) { return !s.includes(e) }))).length) { d.next = 18; break } return d.next = 17, Object(k.e)(cn(!1));
                        case 17:
                            return d.abrupt("return");
                        case 18:
                            return u = X.t[a], d.next = 21, Object(k.b)(ma, u, i);
                        case 21:
                            if (!(m = d.sent) || !m.length) { d.next = 27; break } return d.next = 25, Object(k.e)(rn([].concat(Object(n.a)(l), Object(n.a)(m.map((function(e) { return Object(w.a)(Object(w.a)({}, e), {}, { chainId: a }) }))))));
                        case 25:
                            d.next = 28; break;
                        case 27:
                            !e.payload.isAutomated && f.b.dark("Token is not supported!");
                        case 28:
                            return d.next = 30, Object(k.e)(cn(!1));
                        case 30:
                        case "end":
                            return d.stop() } }), sr) }

            function br() { var e, t, a, n; return j.a.wrap((function(r) { for (;;) switch (r.prev = r.next) {
                        case 0:
                            return r.next = 2, Object(k.e)(nn(!0));
                        case 2:
                            return r.next = 4, Object(k.f)(mr);
                        case 4:
                            return e = r.sent, t = e.chainId, a = X.t[t], r.next = 9, Object(k.b)(fa, a);
                        case 9:
                            return n = (n = r.sent).map((function(e) { return Object(w.a)(Object(w.a)({}, e), {}, { chainId: t }) })), r.next = 13, Object(k.e)({ type: Ya, payload: n });
                        case 13:
                            return r.next = 15, Object(k.e)(nn(!1));
                        case 15:
                        case "end":
                            return r.stop() } }), or) }

            function vr(e) { return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, Object(k.a)([Object(k.e)(dt()), Object(k.e)(an(!0))]);
                        case 2:
                            return t.next = 4, Object(k.a)([Object(k.b)(fr, e), Object(k.b)(br)]);
                        case 4:
                            return t.next = 6, Object(k.a)([Object(k.e)(ct()), Object(k.e)(st())]);
                        case 6:
                            return t.next = 8, Object(k.e)(it());
                        case 8:
                            return t.next = 10, Object(k.e)(an(!1));
                        case 10:
                        case "end":
                            return t.stop() } }), ir) }

            function Er() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.g)(Ka, vr);
                        case 2:
                            return e.next = 4, Object(k.g)(Qa, br);
                        case 4:
                            return e.next = 6, Object(k.g)(qa, fr);
                        case 6:
                            return e.next = 8, Object(k.g)(Va, pr);
                        case 8:
                        case "end":
                            return e.stop() } }), ur) } var hr = "SUPPLY.CLEAR_SOURCE_DATA",
                gr = "SUPPLY.SET_DEST_AMOUNT",
                Or = "SUPPLY.SET_DEST_BALANCE",
                yr = "SUPPLY.SET_DEST_TOKEN",
                jr = "SUPPLY.SET_ERROR",
                kr = "SUPPLY.SET_FETCHING_RATE",
                wr = "SUPPLY.SET_FETCHING_TX",
                xr = "SUPPLY.SET_PLATFORM",
                Nr = "SUPPLY.SET_SOURCE_TOKEN",
                _r = "SUPPLY.SET_SRC_AMOUNT",
                Tr = "SUPPLY.SET_SRC_BALANCE",
                Ar = "SUPPLY.SET_SWAP_PLATFORM_LIST",
                Sr = "SUPPLY.SET_SWAP_PLATFORM",
                Cr = "SUPPLY.SET_TX";

            function Rr(e) { return { type: kr, payload: e } }

            function Pr(e) { return { type: wr, payload: e } }

            function Lr(e) { return { type: Cr, payload: e } }

            function Ir(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return { type: gr, payload: { destAmount: e, isDirect: t } } }

            function Mr(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return { type: _r, payload: { srcAmount: e, isDirect: t } } }

            function Dr(e) { return { type: jr, payload: e } }

            function Fr(e) { return { type: Or, payload: e } }

            function Br(e) { return { type: Tr, payload: e } }

            function Kr(e) { return { type: Sr, payload: e } }

            function Wr(e) { return { type: Ar, payload: e } }

            function Gr() { return { type: hr, payload: null } } var Hr = j.a.mark($r),
                Vr = j.a.mark(ec),
                zr = j.a.mark(tc),
                Ur = j.a.mark(ac),
                Yr = j.a.mark(nc),
                qr = j.a.mark(rc),
                Qr = function(e) { return e.global },
                Xr = function(e) { return e.supply },
                Jr = function(e) { return e.tx },
                Zr = function(e) { return e.account };

            function $r(e) { var t, a, n, r, c, l, s, o; return j.a.wrap((function(i) { for (;;) switch (i.prev = i.next) {
                        case 0:
                            if (e.payload.isDirect) { i.next = 2; break } return i.abrupt("return");
                        case 2:
                            return i.next = 4, Object(k.f)(Xr);
                        case 4:
                            if (t = i.sent, a = t.srcToken, n = t.isEditing, r = t.destAmount, c = t.srcAmount, !a) { i.next = 28; break } return i.next = 12, Object(k.a)([tc(), nc()]);
                        case 12:
                            if (l = i.sent, s = Object(Z.a)(l, 1), !(o = s[0])) { i.next = 27; break } if (n !== X.q.DEST) { i.next = 22; break } if (i.t0 = r > 0, !i.t0) { i.next = 21; break } return i.next = 21, Object(k.e)(Mr(r / o.rate, !1));
                        case 21:
                            return i.abrupt("return");
                        case 22:
                            if (n !== X.q.SRC) { i.next = 27; break } if (i.t1 = c > 0, !i.t1) { i.next = 27; break } return i.next = 27, Object(k.e)(Ir(c * o.rate, !1));
                        case 27:
                            return i.abrupt("return");
                        case 28:
                            return i.next = 30, nc();
                        case 30:
                        case "end":
                            return i.stop() } }), Hr) }

            function ec(e) { return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (e.payload) { t.next = 2; break } return t.abrupt("return");
                        case 2:
                            return t.next = 4, ac();
                        case 4:
                        case "end":
                            return t.stop() } }), Vr) }

            function tc() { var e, t, a, n, r, c, l, s, o, i, u, m, d, f, p, b, v; return j.a.wrap((function(E) { for (;;) switch (E.prev = E.next) {
                        case 0:
                            return E.next = 2, Object(k.f)(Xr);
                        case 2:
                            if (e = E.sent, t = e.destToken, a = e.srcToken, n = e.destAmount, r = e.srcAmount, c = e.selectedSwapPlatform, l = e.isEditing, t && a) { E.next = 11; break } return E.abrupt("return");
                        case 11:
                            if (!a || !t || a.address !== t.address) { E.next = 13; break } return E.abrupt("return");
                        case 13:
                            return E.next = 15, Object(k.e)(Rr(!0));
                        case 15:
                            return E.next = 17, Object(k.f)(Zr);
                        case 17:
                            return s = E.sent, o = s.address, E.next = 21, Object(k.f)(Qr);
                        case 21:
                            return i = E.sent, u = i.chainId, m = l === X.q.DEST, d = m ? t.decimals : a.decimals, (f = m ? n : r) || (f = 1), E.next = 29, Object(k.b)(Oa, X.t[u], a.address, t.address, Object(oe.D)(f, d), m, o || X.e, X.H[u]);
                        case 29:
                            if ((p = E.sent) && 0 !== p.length) { E.next = 32; break } return E.abrupt("return");
                        case 32:
                            return E.next = 34, Object(k.e)(Wr(p));
                        case 34:
                            if (b = Object(oe.r)(p), !c || c.platform === (null === b || void 0 === b ? void 0 : b.platform)) { E.next = 43; break } if (!(v = p.find((function(e) { return e.platform === c.platform && e.rate !== c.rate })))) { E.next = 43; break } return E.next = 40, Object(k.e)(Kr(v));
                        case 40:
                            return E.next = 42, Object(k.e)(Rr(!1));
                        case 42:
                            return E.abrupt("return", v);
                        case 43:
                            return E.next = 45, Object(k.e)(Kr(b));
                        case 45:
                            return E.next = 47, Object(k.e)(Rr(!1));
                        case 47:
                            return E.abrupt("return", b);
                        case 48:
                        case "end":
                            return E.stop() } }), zr) }

            function ac() { var e, t, a, n, r; return j.a.wrap((function(c) { for (;;) switch (c.prev = c.next) {
                        case 0:
                            return c.next = 2, Object(k.f)(Xr);
                        case 2:
                            if (e = c.sent, t = e.destAmount, a = e.srcAmount, n = e.isEditing, !(r = e.setSelectSwapPlatform) || !r.rate) { c.next = 19; break } if (n !== X.q.DEST) { c.next = 14; break } if (c.t0 = t > 0, !c.t0) { c.next = 13; break } return c.next = 13, Object(k.e)(Mr(t / r.rate, !1));
                        case 13:
                            return c.abrupt("return");
                        case 14:
                            if (n !== X.q.SRC) { c.next = 19; break } if (c.t1 = a > 0, !c.t1) { c.next = 19; break } return c.next = 19, Object(k.e)(Ir(a * r.rate, !1));
                        case 19:
                        case "end":
                            return c.stop() } }), Ur) }

            function nc() { var e, t, a, n, r, c, l, s, o, i, u, m, d, f, p, b, v, E, h, g, O, y; return j.a.wrap((function(j) { for (;;) switch (j.prev = j.next) {
                        case 0:
                            return j.next = 2, Object(k.e)(Pr(!0));
                        case 2:
                            return j.next = 4, Object(k.f)(Zr);
                        case 4:
                            return e = j.sent, t = e.watchAddress, j.next = 8, Object(k.f)(Qr);
                        case 8:
                            return a = j.sent, n = a.chainId, r = a.gasPrices, c = a.selectedGasPrice, l = a.useGasToken, j.next = 15, Object(k.f)(Jr);
                        case 15:
                            return s = j.sent, o = s.lastNonce, j.next = 19, Object(k.f)(Xr);
                        case 19:
                            if (i = j.sent, u = i.destToken, m = i.platform, d = i.destAmount, f = new de.a(new de.a.providers.HttpProvider(X.F[n].url)), t) { j.next = 26; break } return j.abrupt("return");
                        case 26:
                            return j.next = 28, Object(k.b)(fe.h, f, t, o);
                        case 28:
                            if (p = j.sent, b = u.decimals, v = d || Object(J.b)(b), E = u.address, "0", !(v > 0)) { j.next = 50; break } return h = { src: E, minDestAmount: "0", srcAmount: Object(oe.D)(v, b), dest: u.address, lendingPlatform: m.name, userAddress: t, platformWallet: X.H[n], gasPrice: Object(oe.H)(r[c]), useGasToken: l, nonce: p || 1 }, j.next = 37, Object(k.b)(ca, X.t[n], h);
                        case 37:
                            if (g = j.sent, O = g.tx, !(y = g.error) || "CANCEL" === y) { j.next = 45; break } return j.next = 43, Object(k.e)(Dr(y));
                        case 43:
                            j.next = 50; break;
                        case 45:
                            return j.next = 47, Object(k.e)(Dr(null));
                        case 47:
                            if (!O) { j.next = 50; break } return j.next = 50, Object(k.e)(Lr(O));
                        case 50:
                            return j.next = 52, Object(k.e)(Pr(!1));
                        case 52:
                        case "end":
                            return j.stop() } }), Yr) }

            function rc() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.c)(400, gr, $r);
                        case 2:
                            return e.next = 4, Object(k.g)(yr, nc);
                        case 4:
                            return e.next = 6, Object(k.g)(xr, nc);
                        case 6:
                            return e.next = 8, Object(k.g)(Nr, tc);
                        case 8:
                            return e.next = 10, Object(k.c)(400, _r, $r);
                        case 10:
                            return e.next = 12, Object(k.g)(Sr, ec);
                        case 12:
                        case "end":
                            return e.stop() } }), qr) } var cc = j.a.mark(lc);

            function lc() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(k.a)([Object(k.d)(cr), Object(k.d)(Le), Object(k.d)(Sn), Object(k.d)(Er), Object(k.d)(rc)]);
                        case 2:
                        case "end":
                            return e.stop() } }), cc) } var sc = a(212),
                oc = a.n(sc),
                ic = a(21),
                uc = { chainId: X.d.MAINNET, isHideBalance: !1, isCollapsedSideBar: !1, gasPrices: X.p, selectedGasPrice: X.h, slippageRate: X.i, useGasToken: !1, isShowWelcomeEarn: !0, message: { isOpen: !1, value: "", type: "" }, modals: { account: { isOpened: !1 }, contacts: { isOpened: !1 }, addContact: { isOpened: !1 }, manageTokens: { isOpened: !1 }, switchChain: { isOpened: !1 }, previewNFT: { isOpened: !1, data: null, collection: null } }, exploreData: { banners: [], partners: [], ads: [] }, marketBase: "usd", currencyRate: { usd: 1 }, notifications: [], pageSettings: {}, isFetchingPageSettings: !1 }; var mc = { isFetchingTokens: !1, favoriteTokens: [], customTokens: [], stakedTokens: [], isFetchingStakedToken: !1, isAddingCustomTokens: !1, supportedTokens: [], hiddenList: [] }; var dc = { txError: "", txConfirming: !1, trackingTxs: [], approvalCount: 0, lastNonce: !1 }; var fc = { address: "", wallet: null, type: "", devicePath: "", apiToken: "", watchAddress: "", watchWallets: [], currentAddressLogedInKP: "", balances: [], balanceNFTs: [], depositingTokens: [], distributionTokens: [], customNFTs: [] }; var pc = { destToken: null, destAmount: null, destBalance: null, platform: null, isFetchingTx: !1, tx: null, error: null, srcToken: null, srcAmount: null, srcBalance: null, swapPlatforms: [], selectedSwapPlatform: null, isFetchingRate: !1, isEditing: null }; var bc = Object(o.b)({ global: Object(m.a)({ key: "global", storage: oc.a, whitelist: ["isHideBalance", "slippageRate", "useGasToken", "selectedGasPrice", "isCollapsedSideBar", "marketBase", "chainId", "isShowWelcomeEarn"] }, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uc,
                            t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                            case Cn:
                                var a = t.payload.chainId; return Object(w.a)(Object(w.a)({}, e), {}, { chainId: a });
                            case Rn:
                                var n = t.payload,
                                    r = n.isOpen,
                                    c = n.message,
                                    l = n.type; return Object(w.a)(Object(w.a)({}, e), {}, { message: { isOpen: r, value: c || e.message.value, type: l || e.message.type } });
                            case In:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isHideBalance: t.payload });
                            case Mn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { gasPrices: t.payload });
                            case Dn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { selectedGasPrice: t.payload });
                            case Fn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { slippageRate: t.payload });
                            case Bn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { useGasToken: t.payload });
                            case Kn:
                                var s = t.payload,
                                    o = s.key,
                                    i = s.data; return Object(w.a)(Object(w.a)({}, e), {}, { modals: Object(w.a)(Object(w.a)({}, e.modals), {}, Object(ic.a)({}, o, i)) });
                            case Wn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { modals: uc.modals });
                            case Pn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { exploreData: t.payload });
                            case Ln:
                                return Object(w.a)(Object(w.a)({}, e), {}, { notifications: t.payload });
                            case Hn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isCollapsedSideBar: t.payload });
                            case Gn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { marketBase: t.payload });
                            case Vn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { currencyRate: Object(w.a)(Object(w.a)({}, e.currencyRate), t.payload) });
                            case zn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isShowWelcomeEarn: t.payload });
                            case Un:
                                return Object(w.a)(Object(w.a)({}, e), {}, { pageSettings: t.payload, isFetchingPageSettings: !1 });
                            case Yn:
                                return Object(w.a)(Object(w.a)({}, e), {}, { pageSettings: {}, isFetchingPageSettings: !0 });
                            default:
                                return e } })), account: Object(m.a)({ key: "account", storage: oc.a, whitelist: ["address", "watchAddress", "type", "apiToken", "watchWallets", "currentAddressLogedInKP", "devicePath", "customNFTs"] }, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fc,
                            t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                            case Me:
                                var a = t.payload,
                                    r = a.address,
                                    c = a.wallet,
                                    l = a.type,
                                    s = a.devicePath,
                                    o = Object(Ct.uniq)([r].concat(Object(n.a)(e.watchWallets.map((function(e) { return e.address }))))).filter((function(e) { return !!e })),
                                    i = e.watchAddress; return o.includes(e.watchAddress) && e.address || (i = o.length ? o[0] : ""), Object(w.a)(Object(w.a)({}, e), {}, { address: r, watchAddress: i, wallet: c, type: l, devicePath: s });
                            case We:
                                return Object(w.a)(Object(w.a)({}, e), {}, { watchAddress: t.payload });
                            case Fe:
                                return Object(w.a)(Object(w.a)({}, e), {}, { apiToken: t.payload });
                            case Be:
                                var u = t.payload,
                                    m = Object(oe.g)(e.watchWallets, "address", u.address),
                                    d = e.watchAddress || u.address; return m ? Object(w.a)(Object(w.a)({}, e), {}, { watchWallets: e.watchWallets.map((function(e) { return e.address === u.address && (e.name = u.name), e })), watchAddress: d }) : Object(w.a)(Object(w.a)({}, e), {}, { watchWallets: [].concat(Object(n.a)(e.watchWallets), [u]), watchAddress: d });
                            case Ke:
                                var f = Object(Ct.uniq)([e.address].concat(Object(n.a)(e.watchWallets.filter((function(e) { return e.address !== t.payload })).map((function(e) { return e.address }))))).filter((function(e) { return !!e })); return Object(w.a)(Object(w.a)({}, e), {}, { watchWallets: e.watchWallets.filter((function(e) { return e.address !== t.payload })), watchAddress: e.watchAddress === t.payload ? f[0] : e.watchAddress });
                            case De:
                                return e.watchAddress === e.address ? Object(w.a)(Object(w.a)({}, fc), {}, { watchWallets: e.watchWallets }) : Object(w.a)(Object(w.a)({}, e), {}, { address: "", wallet: null, type: "", devicePath: "", apiToken: "", currentAddressLogedInKP: "" });
                            case Ge:
                                return Object(w.a)(Object(w.a)({}, e), {}, { currentAddressLogedInKP: e.currentAddressLogedInKP });
                            case He:
                                return Object(w.a)(Object(w.a)({}, e), {}, { depositingTokens: t.payload });
                            case Ve:
                                return Object(w.a)(Object(w.a)({}, e), {}, { distributionTokens: t.payload });
                            case Qe:
                                return Object(w.a)(Object(w.a)({}, e), {}, { balances: t.payload });
                            case Xe:
                                return Object(w.a)(Object(w.a)({}, e), {}, { balanceNFTs: t.payload });
                            case Ze:
                                return console.log(Object(Ct.uniqBy)([{ collectibleAddress: "1", tokenID: "1" }, { collectibleAddress: "1", tokenID: "1" }], (function(e) { return "".concat(e.collectibleAddress, "_").concat(e.tokenID) }))), Object(w.a)(Object(w.a)({}, e), {}, { customNFTs: Object(Ct.uniqBy)(t.payload.nfts, (function(e) { return "".concat(e.collectibleAddress, "_").concat(e.tokenID) })) });
                            default:
                                return e } })), token: Object(m.a)({ key: "token", storage: oc.a, whitelist: ["customTokens", "favoriteTokens", "supportedTokens", "hiddenList"] }, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mc,
                            t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                            case Wa:
                                return Object(w.a)(Object(w.a)({}, e), {}, { customTokens: t.payload });
                            case za:
                                return Object(w.a)(Object(w.a)({}, e), {}, { favoriteTokens: [].concat(Object(n.a)(e.favoriteTokens), [t.payload]) });
                            case Ua:
                                return Object(w.a)(Object(w.a)({}, e), {}, { favoriteTokens: e.favoriteTokens.filter((function(e) { return e !== t.payload })) });
                            case Za:
                                if (t.payload.isHidden) { var a = Object(Ct.uniq)([].concat(Object(n.a)(e.hiddenList), [t.payload.address])); return Object(w.a)(Object(w.a)({}, e), {}, { hiddenList: a }) } return Object(w.a)(Object(w.a)({}, e), {}, { hiddenList: e.hiddenList.filter((function(e) { return e !== t.payload.address })) });
                            case Ga:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isFetchingTokens: t.payload });
                            case Ja:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isAddingCustomTokens: t.payload });
                            case Ha:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isFetchingStakedToken: t.payload });
                            case Ya:
                                return Object(w.a)(Object(w.a)({}, e), {}, { stakedTokens: t.payload });
                            case Xa:
                                return Object(w.a)(Object(w.a)({}, e), {}, { supportedTokens: t.payload });
                            default:
                                return e } })), tx: Object(m.a)({ key: "tx", storage: oc.a, whitelist: ["filters"] }, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc,
                            t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                            case x:
                                return Object(w.a)(Object(w.a)({}, e), {}, { trackingTxs: [t.payload].concat(Object(n.a)(e.trackingTxs)) });
                            case N:
                                return Object(w.a)(Object(w.a)({}, e), {}, { trackingTxs: t.payload });
                            case I:
                                return Object(w.a)(Object(w.a)({}, e), {}, { txError: t.payload });
                            case M:
                                return Object(w.a)(Object(w.a)({}, e), {}, { txConfirming: t.payload });
                            case D:
                                return Object(w.a)(Object(w.a)({}, e), {}, { lastNonce: t.payload });
                            case F:
                                return Object(w.a)(Object(w.a)({}, e), {}, { approvalCount: e.approvalCount + 1 });
                            default:
                                return e } })), supply: Object(m.a)({ key: "supply", storage: oc.a, whitelist: [] }, (function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pc,
                            t = arguments.length > 1 ? arguments[1] : void 0; switch (t.type) {
                            case Nr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { srcToken: t.payload, srcAmount: 0 });
                            case yr:
                                var a, n = t.payload,
                                    r = null === (a = n.overview[0]) || void 0 === a ? void 0 : a.supplyRate,
                                    c = n.overview[0]; return n.overview.forEach((function(e) { e.supplyRate > r && (r = e.supplyRate, c = e) })), Object(w.a)(Object(w.a)({}, e), {}, { destToken: t.payload, destAmount: 0, platform: c });
                            case kr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isFetchingRate: t.payload });
                            case xr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { platform: t.payload });
                            case Sr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { selectedSwapPlatform: t.payload });
                            case Ar:
                                return Object(w.a)(Object(w.a)({}, e), {}, { swapPlatforms: t.payload });
                            case wr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { isFetchingTx: t.payload });
                            case gr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { destAmount: t.payload.destAmount, isEditing: t.payload.isDirect ? X.q.DEST : e.isEditing });
                            case _r:
                                return Object(w.a)(Object(w.a)({}, e), {}, { srcAmount: t.payload.srcAmount, isEditing: t.payload.isDirect ? X.q.SRC : e.isEditing });
                            case Cr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { tx: t.payload });
                            case jr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { error: t.payload });
                            case Or:
                                return Object(w.a)(Object(w.a)({}, e), {}, { destBalance: t.payload });
                            case Tr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { srcBalance: t.payload });
                            case hr:
                                return Object(w.a)(Object(w.a)({}, e), {}, { srcAmount: null, srcBalance: null, srcToken: null, swapPlatforms: [], selectedSwapPlatform: null, isFetchingRate: !1 });
                            default:
                                return e } })) }),
                vc = a(63),
                Ec = a(38);

            function hc() { var e = Object(i.c)((function(e) { return e.global })).chainId; return { nodeUrl: X.F[e].url, networkId: e, chainName: X.F[e].name } }

            function gc() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.account })),
                    a = t.address,
                    n = t.wallet,
                    c = Object(i.c)((function(e) { return e.global })).chainId,
                    l = hc(),
                    s = l.networkId,
                    o = l.chainName,
                    u = l.nodeUrl;

                function m() { return (m = Object(ft.a)(j.a.mark((function t() { var r, c, l, i, m; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = Object(oe.c)(), c = window.innerWidth < X.B, l = window.ethereum, !a || !n) { t.next = 8; break } return t.next = 6, n.connect(b, v);
                                case 6:
                                    t.sent !== a && f();
                                case 8:
                                    if (!l || r && !c) { t.next = 16; break } return i = new St({ networkId: s, nodeUrl: u, chainName: o }), t.next = 12, i.connect(b, v);
                                case 12:
                                    if (m = t.sent) { t.next = 15; break } return t.abrupt("return");
                                case 15:
                                    e($e(m, i, X.V.DAPP));
                                case 16:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function d(t, a, n) { e($e(t, a, n)) }

                function f() { e(et()) }

                function p(t) { e(qn(t)) }

                function b() { e(Qn(!0, "Error: Something went wrong connecting with your Metamask", "error")) }

                function v() { e(Qn(!0, "Please make sure that your network is on ".concat(Object(oe.o)(c)), "error")) }
                Object(r.useEffect)((function() {! function() { m.apply(this, arguments) }(), n && "function" === typeof n.subscribeToDisconnect && n.subscribeToDisconnect(f, d, n, p) }), []) } var Oc = a(587),
                yc = a.n(Oc),
                jc = a(588),
                kc = a.n(jc),
                wc = a(589),
                xc = a.n(wc),
                Nc = a(590),
                _c = a.n(Nc);

            function Tc() { return c.a.createElement("div", { className: "mt-8" }, c.a.createElement("a", { href: "https://apps.apple.com/vn/app/krystal-one-platform-all-defi/id1558105691", target: "_blank", rel: "noreferrer noopener" }, c.a.createElement("img", { className: "summary__store", src: yc.a, alt: "appleStoreLogo" })), c.a.createElement("a", { href: "https://testflight.apple.com/join/KVYcKb68", target: "_blank", rel: "noreferrer noopener" }, c.a.createElement("img", { className: "summary__store", src: kc.a, alt: "appleTestFlightLogo" })), c.a.createElement("a", { href: "https://play.google.com/store/apps/details?id=com.kyrd.krystal", target: "_blank", rel: "noreferrer noopener" }, c.a.createElement("img", { className: "summary__store", src: xc.a, alt: "googlePlayLogo", style: { padding: 2 } })), c.a.createElement("a", { href: "https://files.krystal.app/Krystal.apk", target: "_blank", rel: "noreferrer noopener" }, c.a.createElement("img", { className: "summary__store", src: _c.a, alt: "googleAPKLogo" }))) } var Ac, Sc = function() { var e = Object(i.b)();

                    function t() { e(Jn("account", { isOpened: !0 })) } return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "summary__title" }, "Krystal ", c.a.createElement("span", null, "One Platform, All DeFi")), c.a.createElement("div", { className: "summary__buttons" }, c.a.createElement("div", { className: "btn btn--gradient mr-5", onClick: t }, "Connect Wallet")), c.a.createElement("div", { className: "summary__content" }, c.a.createElement(Ec.b, { className: "summary__item summary__item--swap", to: X.K.SWAP }, c.a.createElement("h3", null, "Swap"), c.a.createElement("p", null, "Swap any token to any token at the best rates")), c.a.createElement(Ec.b, { className: "summary__item summary__item--earn", to: X.K.EARN }, c.a.createElement("h3", null, "Earn"), c.a.createElement("p", null, "Earn interest from idle assets in real time")), c.a.createElement("div", { className: "summary__item summary__item--portfolio", onClick: t }, c.a.createElement("h3", null, "Manage your PortFolio"), c.a.createElement("p", null, "Track & manage your digital assets")), c.a.createElement(Ec.b, { className: "summary__item summary__item--reward", to: X.K.KRYSTAL_POINTS }, c.a.createElement("h3", null, "Get Rewards"), c.a.createElement("p", null, "Enjoy bonus rewards by participating in Krystal activities"))), c.a.createElement(Tc, null)) },
                Cc = a(81),
                Rc = a.n(Cc),
                Pc = ["svgRef", "title"];

            function Lc() { return (Lc = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Ic(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Mc = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Ic(e, Pc); return c.a.createElement("svg", Lc({ width: 90, height: 107, viewBox: "0 0 90 107", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ac || (Ac = c.a.createElement("g", { fill: "none", fillRule: "evenodd", opacity: .4 }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "#1DE9B6", strokeLinecap: "round", strokeWidth: 5, d: "M27 112.5L72 112.5", opacity: .5, transform: "translate(-1089.000000, -221.000000) translate(1085.000000, 213.000000)" }), c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L100 0 100 100 0 100z", transform: "translate(-1089.000000, -221.000000) translate(1085.000000, 213.000000)" }), c.a.createElement("path", { stroke: "#1DE9B6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, d: "M70.967 51.946c.075.075.075.196 0 .27-.075.076-.196.076-.271 0-.075-.074-.075-.195 0-.27.075-.075.2-.071.27 0", transform: "translate(-1089.000000, -221.000000) translate(1085.000000, 213.000000)" }), c.a.createElement("path", { stroke: "#FF6E40", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, d: "M61.092 31.158C61.97 29.28 62.5 27.208 62.5 25c0-8.054-6.53-14.583-14.583-14.583-8.054 0-14.584 6.529-14.584 14.583 0 2.596.734 5 1.925 7.108", transform: "translate(-1089.000000, -221.000000) translate(1085.000000, 213.000000)" }), c.a.createElement("path", { stroke: "#1DE9B6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, d: "M9.533 43.75C7.58 44.888 6.25 46.983 6.25 49.408c0 3.63 2.942 6.571 6.57 6.571h3.847M77.083 27.083v10.642c2.992 2.7 5.367 6.067 6.775 9.92H87.5c2.3 0 4.167 1.868 4.167 4.168v12.77c0 2.3-1.867 4.167-4.167 4.167h-5.462c-2.188 3.783-5.346 6.933-9.121 9.13v7.537c0 2.3-1.867 4.166-4.167 4.166h-8.333c-2.3 0-4.167-1.866-4.167-4.166V81.25H41.667v3.617c0 2.3-1.867 4.166-4.167 4.166h-8.333c-2.3 0-4.167-1.866-4.167-4.166V74.846c-5.104-4.58-8.333-11.2-8.333-18.596 0-13.808 11.191-25 25-25h18.858c1.788 0 3.52-.587 4.946-1.662 2.079-1.567 4.646-2.505 7.446-2.505h4.166z", transform: "translate(-1089.000000, -221.000000) translate(1085.000000, 213.000000)" }))))))) },
                Dc = c.a.forwardRef((function(e, t) { return c.a.createElement(Mc, Lc({ svgRef: t }, e)) })),
                Fc = (a.p, a(73)),
                Bc = a.n(Fc),
                Kc = a(1311),
                Wc = function(e) { var t = Object(oe.b)(e.estimatedGas, e.gasPrice),
                        a = Object(i.c)((function(e) { return e.global })).chainId; return c.a.createElement("div", { className: e.onlyGasText ? "dark-container" : "" }, c.a.createElement("div", { className: "flex-between-start mb-1" }, c.a.createElement("div", null, c.a.createElement("span", { className: "fs-3 mr-1" }, "Maximum gas fee"), c.a.createElement(Kc.a, { title: "The actual cost of the transaction is generally lower than the maximum estimated cost", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer top-2", src: Bc.a, alt: "Info" }))), c.a.createElement("div", { className: "align-right" }, c.a.createElement("div", { className: "mb-1" }, Object(oe.m)(t, 6), " ", X.F[a].currencySymbol), c.a.createElement("span", { className: "fs-3" }, "\u2248 ", Object(oe.m)(Object(oe.z)(t, e.ethPrice), 6), " USD"))), c.a.createElement("div", { className: "align-right fs-3" }, c.a.createElement("span", null, e.gasPrice, " (Gas Price) * ", Object(oe.m)(e.estimatedGas), " (Gas Limit)"))) },
                Gc = a(293),
                Hc = ["hiddenList"];

            function Vc(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    a = Object(i.c)((function(e) { return e.token })),
                    c = a.hiddenList,
                    l = Object(Gc.a)(a, Hc),
                    s = Object(r.useCallback)((function(a) { return (!t || !c.includes(a.address)) && a.chainId === e }), [e, t, c]),
                    o = Object(r.useMemo)((function() { return Object(Ct.uniqBy)(l.supportedTokens.filter((function(e) { return s(e) })), "address") }), [s, l.supportedTokens]),
                    u = Object(r.useMemo)((function() { return Object(Ct.uniqBy)(l.customTokens.filter((function(e) { return s(e) })), "address") }), [s, l.customTokens]),
                    m = Object(r.useMemo)((function() { return { allTokens: Object(Ct.uniqBy)([].concat(Object(n.a)(o), Object(n.a)(u)), "address"), customTokens: u, favoriteTokens: l.favoriteTokens, isFetchingTokens: l.isFetchingTokens, isFetchingStakedToken: l.isFetchingStakedToken, isAddingCustomTokens: l.isAddingCustomTokens, hiddenList: l.hiddenList, stakedTokens: Object(Ct.uniqBy)(l.stakedTokens.filter((function(e) { return s(e) })), "address"), supportedTokens: o, allContractAddressSupported: Object(Ct.uniq)([].concat(Object(n.a)(l.supportedTokens.map((function(e) { return e.address }))), Object(n.a)(l.customTokens.map((function(e) { return e.address }))))) } }), [o, u, l.favoriteTokens, l.isFetchingTokens, l.isFetchingStakedToken, l.isAddingCustomTokens, l.stakedTokens, l.supportedTokens, l.customTokens, l.hiddenList, s]); return m }

            function zc(e) { var t = e.estimatedGasLimit,
                    a = Object(i.b)(),
                    n = Object(i.c)((function(e) { return e.global })),
                    r = n.gasPrices,
                    l = n.selectedGasPrice,
                    s = n.chainId; return c.a.createElement("div", null, Object.keys(r).map((function(e) { var n = r[e]; return c.a.createElement("label", { key: e, className: "option" }, c.a.createElement("span", { className: "option__text" }, c.a.createElement("span", null, n), c.a.createElement("span", null, e)), c.a.createElement("input", { className: "option__radio", type: "radio", onChange: function() { a(Xn(e)) }, checked: e === l }), c.a.createElement("span", { className: "option__check" }), c.a.createElement("div", { className: "font-small" }, "~ ", Object(oe.b)(n, t), " ", X.F[s].currencySymbol)) }))) }

            function Uc(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.account })).address,
                    n = Object(i.c)((function(e) { return e.global })),
                    l = n.gasPrices,
                    s = n.selectedGasPrice,
                    o = n.chainId,
                    u = Vc(o).supportedTokens,
                    m = Object(i.c)((function(e) { return e.tx })),
                    d = m.lastNonce,
                    f = m.txConfirming,
                    p = Object(r.useState)(""),
                    b = Object(Z.a)(p, 2),
                    v = b[0],
                    E = b[1],
                    h = Object(r.useState)(X.g.WITHDRAW_FUND),
                    g = Object(Z.a)(h, 2),
                    O = g[0],
                    y = g[1],
                    k = Object(r.useState)(""),
                    w = Object(Z.a)(k, 2),
                    x = w[0],
                    N = w[1],
                    _ = Object(r.useState)(!1),
                    T = Object(Z.a)(_, 2),
                    A = T[0],
                    S = T[1],
                    C = l[s],
                    R = Object(oe.v)(u, X.C[o]),
                    P = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[o].url)) }), [o]);

                function L() { return I.apply(this, arguments) }

                function I() { return (I = Object(ft.a)(j.a.mark((function t() { var n, r, c, i, u; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return S(!0), t.next = 3, Object(fe.h)(P, a, d);
                                case 3:
                                    return n = t.sent, r = v || Object(J.b)(e.data.decimals), t.next = 7, sa(X.t[o], { platform: e.data.name, amount: Object(oe.D)(r, e.data.decimals), tokenAddress: e.data.address, userAddress: a, gasPrice: Object(oe.H)(l[s]), nonce: n || 1 });
                                case 7:
                                    if (c = t.sent, i = c.tx, u = c.error, S(!1), !u && i) { t.next = 14; break } return N(u), t.abrupt("return", !1);
                                case 14:
                                    return y(Object(oe.w)(i.gas)), t.abrupt("return", i);
                                case 16:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function M() { return (M = Object(ft.a)(j.a.mark((function a() { var n; return j.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (v) { a.next = 5; break } return N("Invalid amount to withdraw"), a.abrupt("return");
                                case 5:
                                    if (!(e.data.supplyBalance < v)) { a.next = 8; break } return N("Insufficient balance for the withdrawal"), a.abrupt("return");
                                case 8:
                                    return a.next = 10, L();
                                case 10:
                                    if (n = a.sent) { a.next = 13; break } return a.abrupt("return");
                                case 13:
                                    t(z(n, { amount: v, symbol: e.data.symbol }));
                                case 14:
                                case "end":
                                    return a.stop() } }), a) })))).apply(this, arguments) } return Object(r.useEffect)((function() { L() }), [o]), Object(r.useEffect)((function() { N("") }), [v]), c.a.createElement(se, { customTitle: "Withdraw ".concat(e.data.symbol), className: "small ".concat(A || f ? "disabled-btn" : ""), close: e.close, onSubmit: function() { return M.apply(this, arguments) }, submitText: "Withdraw", content: c.a.createElement("div", null, c.a.createElement("div", { className: "mb-2" }, c.a.createElement("div", { className: "mb-2" }, "Amount"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input", type: "text", placeholder: "0", value: v, onChange: function(e) { Object(oe.f)(e, e.target.value, v) && E(e.target.value) } }), c.a.createElement("div", { className: "swap__input-tool" }, c.a.createElement("div", { className: "swap__input-max", onClick: function() { E(e.data.supplyBalance) } }, "Max"), c.a.createElement("div", { className: "swap__input-select" }, c.a.createElement("span", null, e.data.symbol)))), c.a.createElement("div", { className: "swap__balance slide-up" }, Object(oe.m)(e.data.supplyBalance, 4), " ", e.data.symbol)), c.a.createElement("div", { className: "mb-5" }, c.a.createElement(zc, { estimatedGasLimit: O })), c.a.createElement(Wc, { gasPrice: C, ethPrice: R, estimatedGas: O, onlyGasText: !0 }), "" !== x && c.a.createElement("div", { className: "input-error mt-2 slide-up align-center" }, x)) }) }

            function Yc(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.account })).address,
                    n = Object(i.c)((function(e) { return e.global })),
                    l = n.gasPrices,
                    s = n.selectedGasPrice,
                    o = n.chainId,
                    u = Object(i.c)((function(e) { return e.tx })),
                    m = u.lastNonce,
                    d = u.txConfirming,
                    f = Object(r.useState)(!1),
                    p = Object(Z.a)(f, 2),
                    b = p[0],
                    v = p[1],
                    E = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[o].url)) }), [o]);

                function h() { return g.apply(this, arguments) }

                function g() { return (g = Object(ft.a)(j.a.mark((function t() { var n, r, c, i; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return v(!0), t.next = 3, Object(fe.h)(E, a, m);
                                case 3:
                                    return n = t.sent, t.next = 6, ia(X.t[o], { platform: e.data.name, userAddress: a, gasPrice: Object(oe.H)(l[s]), nonce: n || 1 });
                                case 6:
                                    if (r = t.sent, c = r.tx, i = r.error, v(!1), !i && c) { t.next = 12; break } return t.abrupt("return", !1);
                                case 12:
                                    return t.abrupt("return", c);
                                case 13:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function O() { return (O = Object(ft.a)(j.a.mark((function a() { var n; return j.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, h();
                                case 2:
                                    if (n = a.sent) { a.next = 5; break } return a.abrupt("return");
                                case 5:
                                    t(U(n, { amount: e.data.unclaimed, symbol: e.data.symbol }));
                                case 6:
                                case "end":
                                    return a.stop() } }), a) })))).apply(this, arguments) } return c.a.createElement(se, { className: "btn-full md-small ".concat(b || d ? "disabled-btn" : ""), hideCloseBtn: !0, close: e.close, onSubmit: function() { return O.apply(this, arguments) }, submitText: "Claim Reward", content: e.content }) }

            function qc(e) { var t, a = Object(i.c)((function(e) { return e.global })),
                    n = a.isHideBalance,
                    r = a.marketBase,
                    l = a.currencyRate; return 0 === (null === e || void 0 === e || null === (t = e.data) || void 0 === t ? void 0 : t.supplyBalance) ? null : c.a.createElement("div", { className: "row ".concat(e.isWatchAddress && "disabled"), onClick: e.onClick }, c.a.createElement("div", { className: "flex-start", style: { alignItems: "center", width: "64%" } }, c.a.createElement("img", { className: "token-icon mr-1", src: e.data.logo ? e.data.logo : Rc.a, alt: "Icon" }), c.a.createElement("div", { className: "flex-center" }, c.a.createElement("div", { className: "mr-1 inline-block" }, Object(oe.m)(e.data.supplyBalance, 4)), c.a.createElement("div", { className: "mr-1 inline-block" }, e.data.symbol), c.a.createElement("div", { className: "mr-1 inline-block token-apy-percent fs-2" }, Object(oe.m)(e.data.supplyRate, 2), "%"))), c.a.createElement("div", { className: "align-right", style: { width: "36%" } }, n ? "******" : "".concat(Object(oe.k)(Object(oe.m)(e.data.value / l[r], 2), r)))) }

            function Qc() { var e = Object(vc.g)(),
                    t = Object(i.c)((function(e) { return e.global })),
                    a = t.isHideBalance,
                    n = t.marketBase,
                    l = t.currencyRate,
                    s = Object(i.c)((function(e) { return e.account })),
                    o = s.address,
                    u = s.watchAddress,
                    m = s.depositingTokens,
                    d = s.distributionTokens,
                    f = u && u !== o,
                    p = Object(r.useMemo)((function() { var e = d.reduce((function(e, t) { return l[n] ? e + t.value / l[n] : e }), 0),
                            t = 0; return m.forEach((function(e) { t += e.balances.reduce((function(e, t) { return l[n] ? e + t.value / l[n] : e }), 0) })), { distribution: e, depositing: t } }), [l, m, d, n]);

                function b(e) { return 0 === e.supplyBalance ? null : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "flex-start w-70", style: { alignItems: "center" } }, c.a.createElement("img", { className: "token-icon mr-1", src: e.logo ? e.logo : Rc.a, alt: "Icon" }), c.a.createElement("div", { className: "flex-center" }, c.a.createElement("div", { className: "mr-1 inline-block" }, Object(oe.m)(e.supplyBalance, 4)), c.a.createElement("div", { className: "mr-1 inline-block" }, e.symbol), c.a.createElement("div", { className: "mr-1 inline-block token-apy-percent fs-2" }, Object(oe.m)(e.supplyRate, 2), "%"))), c.a.createElement("div", { className: "w-30 align-right" }, a ? "******" : "".concat(Object(oe.k)(Object(oe.m)(e.value / l[n], 2), n)))) }

                function v(e) { return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "flex-start", style: { width: "64%" } }, c.a.createElement("img", { className: "token-icon mr-1 top-2", src: e.logo ? e.logo : Rc.a, alt: "Icon" }), c.a.createElement("div", null, c.a.createElement("div", { className: "mr-1 inline-block" }, Object(oe.m)(e.unclaimed, 4)), c.a.createElement("div", { className: "mr-1 inline-block" }, e.symbol))), c.a.createElement("div", { className: "align-right", style: { width: "36%" } }, a ? "******" : "".concat(Object(oe.k)(Object(oe.m)(e.value / l[n], 2), n)))) }

                function E(e) { ce.show(se, { className: "small", hideCloseBtn: !0, noPanel: !0, content: c.a.createElement("div", null, c.a.createElement("div", { className: "flex-between-start" }, b(e)), c.a.createElement("div", { className: "flex-between-center mt-7" }, c.a.createElement("div", { className: "btn fs-3 mr-4", onClick: function() { return function(e) { ce.show(Uc, { data: e }) }(e) } }, "Withdraw"), c.a.createElement("a", { className: "btn fs-3", href: "/supply/".concat(e.address) }, "Supply More"))) }) } var h = Object(r.useMemo)((function() { if ((m.length || d.length) && !!m.find((function(e) { var t; return !!(null === (t = e.balances) || void 0 === t ? void 0 : t.length) }))) return; return c.a.createElement("div", { className: "overview__content-body--not-found flex-center" }, c.a.createElement(Dc, null), c.a.createElement("p", { style: { width: 250 } }, "You\u2019ve not supplied any token to earn interest."), c.a.createElement("button", { className: "btn btn--no-bg mt-4", style: { width: 300 }, onClick: function() { e.push("/earn") } }, "Supply tokens to earn interest")) }), [m, d, e]); return c.a.createElement("div", null, c.a.createElement("div", { className: "overview__content-header" }, c.a.createElement("div", { className: "mr-8" }, "Supply"), c.a.createElement("div", { className: "text-white" }, a ? "******" : "".concat(Object(oe.k)(Object(oe.m)(p.depositing + p.distribution, 2), n)))), c.a.createElement("div", { className: "overview__content-body pb-7" }, h, !h && 0 !== m.length && c.a.createElement(c.a.Fragment, null, m.map((function(e, t) { var r = e.balances.reduce((function(e, t) { return e + t.value / l[n] }), 0); return c.a.createElement("div", { className: "overview__item", key: t }, c.a.createElement("div", { className: "overview__item-header" }, c.a.createElement("div", null, e.name), c.a.createElement("div", null, a ? "******" : "".concat(Object(oe.k)(Object(oe.m)(r, 2), n)))), c.a.createElement("div", null, e.balances.map((function(e, t) { return e.supplyBalance ? c.a.createElement(qc, { key: t, data: e, onClick: function() { f || E(e) }, isWatchAddress: f }) : null })))) })), c.a.createElement("div", { className: "overview__item" }, c.a.createElement("div", { className: "overview__item-header" }, c.a.createElement("div", null, "Other"), c.a.createElement("div", null, a ? "******" : "".concat(Object(oe.k)(Object(oe.m)(p.distribution, 2), n)))), c.a.createElement("div", null, d.map((function(e, t) { return e.unclaimed ? c.a.createElement("div", { className: "row ".concat(f ? "disabled" : ""), onClick: function() { return function(e) { ce.show(Yc, { data: e, content: c.a.createElement("div", { className: "flex-between-start" }, v(e)) }) }(e) }, key: t }, v(e)) : null }))))))) } var Xc = a(595),
                Jc = a.n(Xc);

            function Zc() { return c.a.createElement("img", { className: "align-middle loading-image", src: Jc.a, alt: "Loading..." }) } var $c, el = a(1294),
                tl = a(1313),
                al = a(1296),
                nl = a(1297),
                rl = a(1293),
                cl = a(1295),
                ll = a(1291),
                sl = a(1292),
                ol = a(1312),
                il = ["svgRef", "title"];

            function ul() { return (ul = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function ml(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var dl, fl = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = ml(e, il); return c.a.createElement("svg", ul({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, $c || ($c = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#EEE", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 14L12 18 16 14", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#EEE", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 6L12 10 16 6", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000) translate(12.000000, 8.000000) scale(1, -1) translate(-12.000000, -8.000000)" }))))))) },
                pl = c.a.forwardRef((function(e, t) { return c.a.createElement(fl, ul({ svgRef: t }, e)) })),
                bl = (a.p, ["svgRef", "title"]);

            function vl() { return (vl = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function El(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var hl, gl = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = El(e, bl); return c.a.createElement("svg", vl({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, dl || (dl = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#EEE", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 14L12 18 16 14", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#1de9b6", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 6L12 10 16 6", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000) translate(12.000000, 8.000000) scale(1, -1) translate(-12.000000, -8.000000)" }))))))) },
                Ol = c.a.forwardRef((function(e, t) { return c.a.createElement(gl, vl({ svgRef: t }, e)) })),
                yl = (a.p, ["svgRef", "title"]);

            function jl() { return (jl = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function kl(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var wl = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = kl(e, yl); return c.a.createElement("svg", jl({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, hl || (hl = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#1de9b6", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 14L12 18 16 14", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#EEE", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 6L12 10 16 6", transform: "translate(-662.000000, -182.000000) translate(369.000000, 182.000000) translate(293.000000, 0.000000) translate(12.000000, 8.000000) scale(1, -1) translate(-12.000000, -8.000000)" }))))))) },
                xl = c.a.forwardRef((function(e, t) { return c.a.createElement(wl, jl({ svgRef: t }, e)) }));
            a.p;

            function Nl(e) { var t = e.tokenURL; return c.a.createElement("img", { className: "mr-2 token-icon", src: t || Rc.a, alt: "Token-icon", onError: function(e) { e.target.src = Rc.a } }) } var _l = a(1287),
                Tl = a(612),
                Al = a(643);

            function Sl(e) { var t = e.data.map((function(e) { return { v: e } })); return c.a.createElement(_l.a, { width: 100, height: 50, data: t, style: { margin: "0 auto" } }, c.a.createElement(Tl.a, { hide: !0, domain: ["auto", "auto"] }), c.a.createElement(Al.a, { dataKey: "v", stroke: e.color || "#13beff", dot: !1 })) }

            function Cl(e) { var t = e.order,
                    a = e.orderBy,
                    n = e.onRequestSort; return c.a.createElement(ll.a, null, c.a.createElement(sl.a, null, [{ id: "balance", label: "Balance", align: "left" }, { id: "price", label: "Price", align: "right" }, { id: "value", label: "Value", align: "right" }].map((function(e) { return c.a.createElement(rl.a, { key: e.id, align: e.align, sortDirection: a === e.id && t }, c.a.createElement(ol.a, { active: a === e.id, direction: a === e.id ? t : "asc", onClick: function() { return t = e.id, void n(t); var t } }, e.label, a !== e.id && c.a.createElement(pl, null), a === e.id && "asc" === t && c.a.createElement(Ol, null), a === e.id && "desc" === t && c.a.createElement(xl, null))) })), c.a.createElement(rl.a, { key: "chart", align: "right" }, c.a.createElement("span", { className: "table__heading" }, "Chart (7d)")))) } var Rl = Object(el.a)((function(e) { return Object(tl.a)({ root: { width: "100%" }, paper: { width: "100%", marginBottom: e.spacing(2) }, table: { minWidth: 540 }, visuallyHidden: { border: 0, clip: "rect(0 0 0 0)", height: 1, margin: -1, overflow: "hidden", padding: 0, position: "absolute", top: 20, width: 1 } }) }));

            function Pl(e) { var t, a = Rl(),
                    n = Object(vc.g)(),
                    r = Object(i.c)((function(e) { return e.global })).marketBase; return (null === (t = e.filteredTokens) || void 0 === t ? void 0 : t.length) ? c.a.createElement("div", { className: a.root }, c.a.createElement(cl.a, null, c.a.createElement(al.a, { className: a.table, "aria-labelledby": "tableTitle", size: "medium", "aria-label": "enhanced table" }, c.a.createElement(Cl, { classes: a, order: e.order, orderBy: e.orderBy, onRequestSort: e.handleRequestSort }), c.a.createElement(nl.a, null, e.filteredTokens.map((function(t) { var a = Object(Ct.get)(t, "quotes.".concat(r, ".rate"), 0),
                        l = Object(Ct.get)(t, "token.market.".concat(r, ".price24hChangePercentage")),
                        s = Object(Ct.get)(t, "quotes.".concat(r, ".value"), 0); return c.a.createElement(sl.a, { hover: !0, role: "checkbox", tabIndex: -1, key: t.token.address, onClick: function() { return e = t.token.address, void n.push("/token/summary/".concat(e)); var e } }, c.a.createElement(rl.a, { align: "left" }, c.a.createElement("div", { className: "flex-start" }, c.a.createElement(Nl, { tokenURL: Object(oe.n)(t.token.logo) }), c.a.createElement("div", { className: "align-left" }, c.a.createElement("div", null, t.token.symbol), c.a.createElement("div", { className: "fw-300 text-grey" }, e.isHideBalance ? "******" : Object(oe.m)(t.balance, 4))))), c.a.createElement(rl.a, { align: "right" }, c.a.createElement("div", { className: "align-right fw-300" }, !isNaN(a) && c.a.createElement("div", null, Object(oe.k)(Object(oe.m)(a, 4), r)), c.a.createElement("div", { className: l > 0 ? "text-green" : l < 0 ? "text-red" : "text-grey" }, Object(Ct.isNumber)(l) ? "".concat(Object(oe.B)(l, 1), "%") : "--"))), c.a.createElement(rl.a, { align: "right" }, c.a.createElement("span", { className: "fw-300 text-white" }, e.isHideBalance ? "******" : "".concat(Object(oe.k)(Object(oe.m)(s, 2), r)))), c.a.createElement(rl.a, { align: "center" }, "usd" === r && t.token.chartData && c.a.createElement(Sl, { data: t.token.chartData, color: l > 0 ? "#1de9b6" : l < 0 ? "#fe6d40" : "#fff" }))) })))))) : null } var Ll, Il = a(287),
                Ml = a.n(Il),
                Dl = ["svgRef", "title"];

            function Fl() { return (Fl = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Bl(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Kl = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Bl(e, Dl); return c.a.createElement("svg", Fl({ width: 91, height: 105, viewBox: "0 0 91 105", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ll || (Ll = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L96 0 96 96 0 96z", transform: "translate(-573.000000, -215.000000) translate(549.430781, 191.430780) translate(65.569220, 65.569220) rotate(-30.000000) translate(-65.569220, -65.569220) translate(17.569219, 17.569219)" }), c.a.createElement("path", { stroke: "#1DE9B6", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, d: "M12.156 31.66H76c4.42 0 8 3.58 8 8V76c0 4.4-3.6 8-8 8H20c-4.42 0-8-3.58-8-8V33.164c0-3.328 2.06-6.308 5.176-7.484l41.412-15.636c2.616-.988 5.412.944 5.412 3.74v17.872", opacity: .3, transform: "translate(-573.000000, -215.000000) translate(549.430781, 191.430780) translate(65.569220, 65.569220) rotate(-30.000000) translate(-65.569220, -65.569220) translate(17.569219, 17.569219)" }), c.a.createElement("path", { stroke: "#FF6E40", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4, d: "M63.996 56.5c-.828.004-1.496.676-1.496 1.504s.672 1.5 1.5 1.496c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.504-1.5", opacity: .4, transform: "translate(-573.000000, -215.000000) translate(549.430781, 191.430780) translate(65.569220, 65.569220) rotate(-30.000000) translate(-65.569220, -65.569220) translate(17.569219, 17.569219)" })), c.a.createElement("path", { stroke: "#1DE9B6", strokeLinecap: "round", strokeWidth: 5, d: "M42.569 126.069L87.569 126.069", opacity: .1, transform: "translate(-573.000000, -215.000000) translate(549.430781, 191.430780)" })))))) },
                Wl = c.a.forwardRef((function(e, t) { return c.a.createElement(Kl, Fl({ svgRef: t }, e)) }));
            a.p;

            function Gl(e) { var t = Object(i.c)((function(e) { return e.global })),
                    a = t.isHideBalance,
                    n = t.marketBase,
                    l = t.chainId,
                    s = Object(i.c)((function(e) { return e.account })).balances,
                    o = Vc(l),
                    u = o.isFetchingTokens,
                    m = o.hiddenList,
                    d = Object(r.useMemo)((function() { if (!s.length) return []; var t = s.filter((function(e) { var t = Object(Ct.get)(e, "token.address", ""); return !!t && ((!m || !m.includes(t)) && Object(Ct.get)(e, "quotes.usd.value", 0) >= X.y) })),
                            a = e.orderBy; switch (e.orderBy) {
                            case "price":
                                a = function(e) { return e.quotes[n].rate }; break;
                            case "value":
                                a = function(e) { return e.quotes[n].value } } return Ml()(t, [a], [e.order]).filter((function(t) { return !e.searchKeyWord || (-1 !== t.token.name.toLowerCase().indexOf(e.searchKeyWord) || -1 !== t.token.symbol.toLowerCase().indexOf(e.searchKeyWord) || -1 !== t.token.address.toLowerCase().indexOf(e.searchKeyWord)) })) }), [s, m, n, e.order, e.orderBy, e.searchKeyWord]); return c.a.createElement("div", null, u && c.a.createElement("div", { className: "align-center mt-5 mb-5" }, c.a.createElement(Zc, null)), !u && d.length > 0 && c.a.createElement(Pl, { filteredTokens: d, isHideBalance: a, handleRequestSort: e.handleRequestSort, order: e.order, orderBy: e.orderBy }), !u && 0 === d.length && c.a.createElement("div", { className: "overview__content-body--not-found flex-center" }, c.a.createElement(Wl, null), c.a.createElement("p", null, "Your balance is empty"), c.a.createElement("button", { className: "btn btn--no-bg mt-4", style: { width: 200 }, onClick: function() { window.open("https://www.kyberswap.com/fiat") } }, "+ Buy ", X.F[l].currencySymbol))) } var Hl = a(288),
                Vl = a.n(Hl);

            function zl() { var e = Object(i.c)((function(e) { return e.account })).watchAddress,
                    t = Object(i.c)((function(e) { return e.global })).chainId,
                    a = Object(r.useCallback)((function() { navigator.clipboard.writeText(e), ce.close() }), [e]); return c.a.createElement(se, { customTitle: "Receive", className: "small", onSubmit: a, close: function() { ce.close() }, submitText: "Copy" }, c.a.createElement("div", { className: "mt-4 align-center break-word" }, c.a.createElement("p", { className: "receive-modal__title" }, X.F[t].standard, " Address"), c.a.createElement("div", { className: "receive-modal__qr-code" }, c.a.createElement(Vl.a, { value: e || "" })), c.a.createElement("div", { className: "mt-5" }, e), c.a.createElement("div", { className: "receive-modal__description mt-5 fs-3 align-left" }, c.a.createElement("div", { className: "mb-1" }, "Only transfer ", X.F[t].currencySymbol, " or any", " ", X.F[t].standard, " token to this address"), c.a.createElement("div", null, "*Transferring any other tokens may result in loss of your funds")))) } var Ul = a(87),
                Yl = a.n(Ul);

            function ql(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.global })).chainId,
                    n = Vc(a).allContractAddressSupported,
                    l = Object(r.useState)(e.contract || ""),
                    s = Object(Z.a)(l, 2),
                    o = s[0],
                    u = s[1],
                    m = Object(r.useState)(""),
                    d = Object(Z.a)(m, 2),
                    f = d[0],
                    p = d[1],
                    b = Object(r.useState)(""),
                    v = Object(Z.a)(b, 2),
                    E = v[0],
                    h = v[1],
                    g = Object(r.useState)(!1),
                    O = Object(Z.a)(g, 2),
                    y = O[0],
                    k = O[1],
                    w = Object(r.useState)(""),
                    x = Object(Z.a)(w, 2),
                    N = x[0],
                    _ = x[1],
                    T = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[a].url)) }), [a]);

                function A() { return (A = Object(ft.a)(j.a.mark((function e(t) { var a; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a = t.target.value, u(a);
                                case 2:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function S() { return C.apply(this, arguments) }

                function C() { return (C = Object(ft.a)(j.a.mark((function e() { var t; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, navigator.clipboard.readText();
                                case 2:
                                    if (t = e.sent) { e.next = 5; break } return e.abrupt("return");
                                case 5:
                                    u(t);
                                case 6:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function R() { return (R = Object(ft.a)(j.a.mark((function e() { var t, r, c, l, s; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (_(""), p(""), h(""), t = o && o.toLowerCase(), Object(oe.x)(t)) { e.next = 7; break } return _("Your custom token contract seems not to be a valid address"), e.abrupt("return");
                                case 7:
                                    if (!n.includes(t)) { e.next = 10; break } return _("Token already added"), e.abrupt("return");
                                case 10:
                                    return k(!0), e.next = 13, Object(fe.f)(T, t);
                                case 13:
                                    if (r = e.sent, c = r.symbol, l = r.decimals, !1 !== c || !1 !== l) { e.next = 20; break } return _("Cannot read symbol and decimals from your custom contract"), k(!1), e.abrupt("return");
                                case 20:
                                    return s = X.t[a], e.next = 23, ma(s, [t]);
                                case 23:
                                    if (!e.sent.length) { e.next = 29; break } return p(c), h(l), k(!1), e.abrupt("return");
                                case 29:
                                    _("Token is not supported"), k(!1);
                                case 31:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function P() { return (P = Object(ft.a)(j.a.mark((function e() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("" !== o && "" !== f && "" !== E) { e.next = 3; break } return _("Invalid ".concat(X.F[a].standard, " contract address")), e.abrupt("return");
                                case 3:
                                    t($a([o])), ce.close();
                                case 5:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) } return Object(r.useEffect)((function() { o && function() { R.apply(this, arguments) }() }), [o]), c.a.createElement(se, { customTitle: "Add Custom Token", className: "small", submitText: "Done", noPanel: !0, close: e.close, isLoading: y, content: c.a.createElement("div", null, c.a.createElement("div", { className: "mb-4" }, c.a.createElement("div", { className: "mb-2" }, "Token Contract Address"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-medium", type: "text", placeholder: "".concat(X.F[a].standard, " Contract Address"), value: o, onChange: function(e) { return A.apply(this, arguments) }, onPaste: S }), c.a.createElement("div", { className: "swap__input-tool" }, c.a.createElement("div", { className: "swap__input-max no-margin", onClick: S }, "Paste"))), "" !== N && c.a.createElement("div", { className: "input-error mt-1 slide-up" }, N)), c.a.createElement("div", { className: "mb-4" }, c.a.createElement("div", { className: "mb-2" }, "Token Symbol"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-none input-disabled", type: "text", placeholder: "Token symbol", value: f, disabled: !0 }))), c.a.createElement("div", null, c.a.createElement("div", { className: "mb-2" }, "Decimals or Precision"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-none input-disabled", type: "text", placeholder: "Decimals", value: E, disabled: !0 }))), c.a.createElement("div", { className: "basic-modal__panel" }, c.a.createElement("button", { className: "btn btn--gradient", onClick: function() { return P.apply(this, arguments) }, style: { width: "100%" }, disabled: y || !f || !E }, y && c.a.createElement(c.a.Fragment, null, c.a.createElement("img", { className: "mr-1", style: { width: 20 }, src: Yl.a, alt: "Loading..." }), "Loading"), !y && "Done"))) }) } var Ql, Xl = a(613),
                Jl = a.n(Xl),
                Zl = a(614),
                $l = a.n(Zl),
                es = ["svgRef", "title"];

            function ts() { return (ts = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function as(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var ns, rs = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = as(e, es); return c.a.createElement("svg", ts({ width: 16, height: 16, viewBox: "0 0 16 16", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ql || (Ql = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-871 -41) translate(867 37)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.714 6.838c2.45 2.451 2.45 6.425 0 8.876-2.451 2.45-6.425 2.45-8.876 0-2.45-2.451-2.45-6.425 0-8.876 2.451-2.45 6.425-2.45 8.876 0M19 19L15.71 15.71", transform: "translate(-871 -41) translate(867 37)" }))))))) },
                cs = c.a.forwardRef((function(e, t) { return c.a.createElement(rs, ts({ svgRef: t }, e)) })),
                ls = (a.p, a(147)),
                ss = a.n(ls),
                os = ["nft"];

            function is(e) { var t = e.nft,
                    a = Object(Gc.a)(e, os),
                    n = Object(r.useRef)(); return c.a.createElement("video", Object.assign({}, a, { poster: (null === t || void 0 === t ? void 0 : t.externalData.image) || ss.a, controls: !0, ref: n, onError: function(e) { n.current && (n.current.controls = !1) } }), c.a.createElement("source", { src: (null === t || void 0 === t ? void 0 : t.externalData.animation_url) || "" })) }

            function us(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.global })).chainId,
                    l = Object(i.c)((function(e) { return e.account })),
                    s = l.watchAddress,
                    o = l.balanceNFTs,
                    u = l.customNFTs,
                    m = Object(r.useState)(""),
                    d = Object(Z.a)(m, 2),
                    p = d[0],
                    b = d[1],
                    v = Object(r.useState)(""),
                    E = Object(Z.a)(v, 2),
                    h = E[0],
                    g = E[1],
                    O = Object(r.useState)(!1),
                    y = Object(Z.a)(O, 2),
                    k = y[0],
                    x = y[1],
                    N = Object(r.useState)(!1),
                    _ = Object(Z.a)(N, 2),
                    T = _[0],
                    A = _[1],
                    S = Object(r.useState)(),
                    C = Object(Z.a)(S, 2),
                    R = C[0],
                    P = C[1],
                    L = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[a].url)) }), [a]),
                    I = Object(r.useCallback)(Object(ft.a)(j.a.mark((function e() { var t, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (x(!0), !(!!o.find((function(e) { return e.collectibleAddress === p && e.items.find((function(e) { return e.tokenID === h })) })) || !!u.find((function(e) { return e.collectibleAddress === p && e.tokenID === h })))) { e.next = 6; break } return f.b.dark("Token already exist"), x(!1), e.abrupt("return");
                                case 6:
                                    return e.next = 8, Object(fe.g)(L, p, h, a);
                                case 8:
                                    if (t = e.sent) { e.next = 13; break } return f.b.dark("Can't get token uri"), x(!1), e.abrupt("return");
                                case 13:
                                    return e.next = 15, Object(fe.a)(L, s, t.collectibleAddress, t.tokenID);
                                case 15:
                                    n = e.sent, A(n), n || f.b.dark("You are not the owner of this collectible, so you can't add it"), t && P(Object(w.a)(Object(w.a)({}, t), {}, { ownerAddress: s || "" })), x(!1);
                                case 20:
                                case "end":
                                    return e.stop() } }), e) }))), [o, a, p, u, h, s, L]),
                    M = Object(r.useCallback)((function() { var e;
                        t((e = [].concat(Object(n.a)(u), [R]), { type: Ze, payload: { nfts: e } })), f.b.dark("the NFT is added!"), ce.close() }), [R, u, t]); return c.a.createElement(se, { customTitle: "Add Custom NFT", className: "small modal-custom-nft", submitText: "Done", noPanel: !0, content: c.a.createElement("div", null, c.a.createElement("div", { className: "mt-4" }, c.a.createElement("div", { className: "mb-2" }, "Token Address"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-none input-dest-address", type: "text", placeholder: "Token Address", value: p, onChange: function(e) { b(e.target.value), P(null) } }))), c.a.createElement("div", { className: "mt-4" }, c.a.createElement("div", { className: "mb-2" }, "ID"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-none input-dest-address", type: "text", placeholder: "Token ID", value: h, onChange: function(e) { g(e.target.value), P(null) } }))), !k && R && c.a.createElement(is, { nft: R, className: "modal-custom-nft__preview-image mt-2" }), k && c.a.createElement("div", { className: "modal-custom-nft__preview-image" }, c.a.createElement(Zc, null)), !R && c.a.createElement("div", { className: "mt-6" }, c.a.createElement("button", { className: "btn btn--gradient ".concat(k && "disabled"), onClick: I, disabled: k }, "Load Data")), R && !k && c.a.createElement("div", { className: "mt-4" }, c.a.createElement("button", { className: "btn btn--gradient ".concat(!T && "disabled"), onClick: M, disabled: !T }, "Done"))) }) }

            function ms(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.global })),
                    n = a.isHideBalance,
                    l = a.marketBase,
                    s = a.currencyRate,
                    o = Object(i.c)((function(e) { return e.account })),
                    u = o.depositingTokens,
                    m = o.distributionTokens,
                    d = Object(r.useMemo)((function() { var t = m.reduce((function(e, t) { return s[l] ? e + t.value / s[l] : e }), 0); return u.forEach((function(e) { t += e.balances.reduce((function(e, t) { return s[l] ? e + t.value / s[l] : e }), 0) })), (e.assets ? e.assets.totalAsset : 0) + t }), [e.assets, s, u, m, l]),
                    f = Object(r.useCallback)((function() { ce.show(zl) }), []),
                    p = Object(r.useCallback)((function() { e.tab !== X.M.ASSET ? e.tab !== X.M.NFT || ce.show(us) : ce.show(ql) }), [e.tab]),
                    b = Object(r.useCallback)((function() { t(function(e) { return { type: In, payload: e } }(!n)) }), [t, n]); return c.a.createElement("div", null, c.a.createElement("div", { className: "overview__header grid" }, c.a.createElement("div", { className: "overview__header-content overview__header-content-left" }, c.a.createElement("div", { className: "overview__balance ".concat(n ? "hide" : "") }, c.a.createElement("span", { className: "mr-2" }, n ? "******" : "".concat(Object(oe.k)(Object(oe.m)(d, 4), l))), c.a.createElement("img", { src: n ? Jl.a : $l.a, alt: "Hide", className: "pointer", onClick: b })), c.a.createElement("div", { className: "input-container" }, c.a.createElement("input", { onChange: e.onChangeSearchInput, className: "input", type: "text", placeholder: "Search" }), c.a.createElement("div", { className: "input-tool" }, c.a.createElement(cs, { stroke: "#fff" })))), c.a.createElement("div", { className: "overview__header-content overview__header-content-right" }, c.a.createElement(Ec.b, { to: "/transfer" }, c.a.createElement("div", { className: "btn btn--small" }, "Transfer")), c.a.createElement("div", { className: "btn btn--small", onClick: f }, "Receive"), c.a.createElement("div", { className: "btn btn--small", onClick: p }, e.tab === X.M.ASSET && "Add Token", e.tab === X.M.NFT && "Add NFT")))) } var ds = ["svgRef", "title"];

            function fs() { return (fs = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function ps(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var bs = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = ps(e, ds); return c.a.createElement("svg", fs({ width: 100, height: 100, ref: t }, n), a ? c.a.createElement("title", null, a) : null, ns || (ns = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("path", { opacity: .3, d: "M0 36.603 63.397 0 100 63.397 36.603 100z" }), c.a.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 4 }, c.a.createElement("path", { stroke: "#1DE9B6", opacity: .3, d: "m25.737 28.717 1.464 2.536M18.346 56.3l10.672-6.162M13 40.086l7.917 2.121M74.263 71.283l-1.464-2.536M81.654 43.7l-7.924 4.575M87.042 59.925l-7.791-2.087M28.717 74.263l2.536-1.464M56.3 81.654l-6.1-10.567M40.101 87.027l2.084-7.86M71.283 25.737 68.747 27.2M43.7 18.346l6.161 10.672M59.94 12.984l-2.124 7.85" }), c.a.createElement("path", { stroke: "#FF6E40", opacity: .4, d: "m42.453 36.822 20.833 5.582-5.582 20.833-20.833-5.582z" }))))) },
                vs = c.a.forwardRef((function(e, t) { return c.a.createElement(bs, fs({ svgRef: t }, e)) }));
            a.p;

            function Es(e) { var t = Object(vc.g)(),
                    a = Object(vc.h)(),
                    n = Object(i.c)((function(e) { return e.global })).chainId,
                    l = Object(r.useCallback)((function() { t.push(Object(oe.u)(e.collection.collectibleAddress, e.data.tokenID, n), { background: a }) }), [n, t, a, e.collection.collectibleAddress, e.data.tokenID]); return c.a.createElement("div", { className: "nft-asset__collapse-item__list--wrapper" }, c.a.createElement("div", { className: "nft-asset__collapse-item__list__item", onClick: function() { l() } }, c.a.createElement("div", { className: "nft-asset__collapse-item__list__item--image", style: { backgroundImage: "url('".concat(e.data.externalData.image || ss.a, "')") } }), c.a.createElement("div", { className: "nft-asset__collapse-item__list__item--label" }, e.data.externalData.name), c.a.createElement("div", { className: "nft-asset__collapse-item__list__item--id" }, "#", e.data.tokenID))) } var hs = a(615),
                gs = a.n(hs);

            function Os(e) { var t = Object(r.useState)(!0),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1],
                    s = e.collection.items.length,
                    o = Object(r.useMemo)((function() { if (!n) return 50; var e = window.innerWidth < 600 ? 2 : 3,
                            t = window.innerWidth < 400 ? 174 : 232; if (s > e) { var a = s % e === 0 ? 0 : 1; return 60 + (a += (s - a) / e) * t } return 60 + t }), [n, s]); return s <= 0 ? null : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "nft-asset__collapse-item mb-2 ".concat(n && "collapsed"), style: { height: o } }, c.a.createElement("div", { className: "nft-asset__collapse-item__header", onClick: function() { l(!n) } }, c.a.createElement("div", { className: "nft-asset__collapse-item__header--avatar mr-2", style: { backgroundImage: "url('".concat(e.collection.collectibleLogo || gs.a, "')") } }), c.a.createElement("div", { className: "nft-asset__collapse-item__header--name" }, e.collection.collectibleName)), n && c.a.createElement("div", { className: "nft-asset__collapse-item__list" }, e.collection.items.map((function(t) { return c.a.createElement(Es, { key: t.tokenID, data: t, collection: e.collection }) }))))) }

            function ys(e) { var t = e.items,
                    a = Object(r.useState)(!0),
                    n = Object(Z.a)(a, 2),
                    l = n[0],
                    s = n[1],
                    o = t.length,
                    i = Object(r.useMemo)((function() { if (!l || 0 === o) return 50; var e = window.innerWidth < 600 ? 2 : 3,
                            t = window.innerWidth < 400 ? 174 : 232; if (o > e) { var a = o % e === 0 ? 0 : 1; return 60 + (a += (o - a) / e) * t } return 60 + t }), [l, o]); return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "nft-asset__collapse-item ".concat(l && "collapsed"), style: { height: i } }, c.a.createElement("div", { className: "nft-asset__collapse-item__header", onClick: function() { s(!l) } }, c.a.createElement("div", { className: "nft-asset__collapse-item__header--avatar mr-2", style: { background: "#333", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px", lineHeight: "0px", paddingBottom: "5px" } }, "+"), c.a.createElement("div", { className: "nft-asset__collapse-item__header--name" }, "Custom NFTs")), l && c.a.createElement("div", { className: "nft-asset__collapse-item__list" }, t.map((function(e) { return c.a.createElement(Es, { key: e.tokenID, data: e, collection: { collectibleAddress: e.collectibleAddress || "" } }) }))))) } var js = a(616),
                ks = a.n(js);

            function ws(e) { var t = Object(r.useState)(!0),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1],
                    s = e.collections.reduce((function(e, t) { return e + t.items.length }), 0),
                    o = Object(r.useMemo)((function() { if (!n || 0 === s) return 50; var e = window.innerWidth < 600 ? 2 : 3,
                            t = window.innerWidth < 400 ? 174 : 232; if (s > e) { var a = s % e === 0 ? 0 : 1; return 60 + (a += (s - a) / e) * t } return 60 + t }), [n, s]); return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "nft-asset__collapse-item ".concat(n && "collapsed"), style: { height: o } }, c.a.createElement("div", { className: "nft-asset__collapse-item__header", onClick: function() { l(!n) } }, c.a.createElement("div", { className: "nft-asset__collapse-item__header--avatar mr-2", style: { backgroundImage: "url('".concat(ks.a, "')"), backgroundSize: "inherit", backgroundColor: "#4b4f4e", backgroundPosition: "7px 9px" } }), c.a.createElement("div", { className: "nft-asset__collapse-item__header--name" }, "Favorite NFT")), n && c.a.createElement("div", { className: "nft-asset__collapse-item__list" }, e.collections.map((function(e) { return e.items.map((function(t) { return c.a.createElement(Es, { key: t.tokenID, data: t, collection: e }) })) }))))) }

            function xs(e) { var t = Object(i.c)((function(e) { return e.global })).chainId,
                    a = Object(i.c)((function(e) { return e.account })),
                    n = a.balanceNFTs,
                    l = a.customNFTs,
                    s = a.watchAddress,
                    o = Vc(t).isFetchingTokens,
                    u = e.searchKeyWord.toString(),
                    m = Object(r.useMemo)((function() { return n.length ? u ? n.map((function(e) { var t = Object(w.a)(Object(w.a)({}, e), {}, { items: e.items.filter((function(e) { return -1 !== e.tokenID.toLowerCase().indexOf(u) || -1 !== e.tokenUrl.toLowerCase().indexOf(u) || -1 !== e.tokenBalance.toLowerCase().indexOf(u) || -1 !== e.externalData.description.toLowerCase().indexOf(u) || -1 !== e.externalData.name.toLowerCase().indexOf(u) })) }); return t.items.length ? t : null })).filter((function(e) { return !!e })) : n : [] }), [n, u]),
                    d = Object(r.useMemo)((function() { if (!n.length) return []; var t = e.searchKeyWord.toString(); return n.map((function(e) { var a = Object(w.a)(Object(w.a)({}, e), {}, { items: e.items.filter((function(e) { return !!e.favorite && (-1 !== e.tokenID.toLowerCase().indexOf(t) || -1 !== e.tokenUrl.toLowerCase().indexOf(t) || -1 !== e.tokenBalance.toLowerCase().indexOf(t) || -1 !== e.externalData.description.toLowerCase().indexOf(t) || -1 !== e.externalData.name.toLowerCase().indexOf(t)) })) }); return 0 === a.items.length ? null : a })).filter((function(e) { return !!e })) }), [n, e.searchKeyWord]),
                    f = Object(r.useMemo)((function() { return l.filter((function(e) { return e.chainId === t && e.ownerAddress === s && (-1 !== e.tokenID.toLowerCase().indexOf(u) || -1 !== e.externalData.description.toLowerCase().indexOf(u) || -1 !== e.externalData.name.toLowerCase().indexOf(u)) })) }), [t, l, u, s]),
                    p = Object(r.useMemo)((function() { return m.length + f.length === 0 }), [f.length, m.length]); return c.a.createElement("div", null, o && c.a.createElement("div", { className: "align-center mt-5 mb-5" }, c.a.createElement(Zc, null)), !o && !p && c.a.createElement("div", { className: "nft-asset" }, c.a.createElement(ws, { collections: d, key: "favorite" }), c.a.createElement("div", { className: "mb-2" }), c.a.createElement(ys, { items: f }), m.map((function(e) { return c.a.createElement(Os, { collection: e, key: e.collectibleAddress }) }))), !o && p && c.a.createElement("div", { className: "overview__content-body--not-found flex-center" }, c.a.createElement(vs, null), c.a.createElement("p", null, "No NFT found"), c.a.createElement("button", { className: "btn btn--no-bg mt-4", style: { width: 200 }, onClick: function() { ce.show(us) } }, "+ Add NFT"))) } var Ns = function() { var e = Object(i.c)((function(e) { return e.global })),
                        t = e.marketBase,
                        a = e.isHideBalance,
                        n = Object(i.c)((function(e) { return e.account })).balances,
                        l = Object(i.c)((function(e) { return e.token })).hiddenList,
                        s = Object(r.useState)(X.M.ASSET),
                        o = Object(Z.a)(s, 2),
                        u = o[0],
                        m = o[1],
                        d = Object(r.useState)(""),
                        f = Object(Z.a)(d, 2),
                        p = f[0],
                        b = f[1],
                        v = c.a.useState("desc"),
                        E = Object(Z.a)(v, 2),
                        h = E[0],
                        g = E[1],
                        O = c.a.useState("value"),
                        y = Object(Z.a)(O, 2),
                        j = y[0],
                        k = y[1],
                        w = Object(r.useCallback)((function(e) { g(j === e && "asc" === h ? "desc" : "asc"), k(e) }), [h, j]),
                        x = Object(r.useCallback)((function(e) { b(e.target.value.toLowerCase()) }), []),
                        N = Object(r.useMemo)((function() { if (!n.length) return { balances: [], totalAsset: 0, totalChange: 0, value24hBefore: 0, totalAssetChangePercentage: 0 }; var e = n.filter((function(e) { return !l.includes(e.token.address) })),
                                a = e.reduce((function(e, a) { return e + a.quotes[t].value || 0 }), 0),
                                r = e.reduce((function(e, a) { var n = a.quotes[t].value; return e + (n - n * Object(Ct.get)(a, "token.market.".concat(t, ".price24hChangePercentage"), 0) / 100) }), 0); return { totalAsset: a, totalChange: a - r, value24hBefore: r, totalAssetChangePercentage: (a - r) / r * 100 } }), [l, n, t]); return c.a.createElement("div", { className: "overview slide-up" }, c.a.createElement(ms, { onChangeSearchInput: x, assets: N, tab: u }), c.a.createElement("div", { className: "overview__body grid" }, c.a.createElement("div", { className: "overview__content left card" }, c.a.createElement("div", { className: "overview__content-header" }, c.a.createElement("button", { className: "switch ".concat(u === X.M.ASSET && "active"), onClick: function() { return m(X.M.ASSET) } }, "Assets"), c.a.createElement("button", { className: "switch ".concat(u === X.M.NFT && "active"), onClick: function() { return m(X.M.NFT) } }, "NFT"), u === X.M.ASSET && window.innerWidth >= 600 && c.a.createElement("div", { className: "asset-value" }, c.a.createElement("span", null, a ? "******" : "".concat(Object(oe.k)(Object(oe.m)(N.totalAsset, 4), t))), !a && c.a.createElement("div", { className: "overview__change mr-5 ".concat(Object(oe.A)(N.totalChange, "positive", "negative")) }, Object(oe.A)(N.totalChange, "", "-"), Object(oe.k)(Object(oe.m)(Math.abs(N.totalChange), 2), t), " ", "(", Object(oe.m)(N.totalAssetChangePercentage, 2), "%)"))), c.a.createElement("div", { className: "overview__content-body pt-4" }, u === X.M.ASSET && c.a.createElement(Gl, { order: h, orderBy: j, handleRequestSort: w, searchKeyWord: p }), u === X.M.NFT && c.a.createElement(xs, { handleRequestSort: w, searchKeyWord: p }))), c.a.createElement("div", { className: "overview__content right card" }, c.a.createElement(Qc, null)))) },
                _s = function() { var e = Object(i.b)(),
                        t = Object(vc.g)(),
                        a = Object(i.c)((function(e) { return e.global })).chainId,
                        n = Object(i.c)((function(e) { return e.account })),
                        l = n.address,
                        s = n.watchAddress,
                        o = n.wallet,
                        u = Object(vc.i)().referralCode,
                        m = Object(r.useState)(!1),
                        d = Object(Z.a)(m, 2),
                        f = d[0],
                        p = d[1],
                        b = Object(r.useState)(""),
                        v = Object(Z.a)(b, 2),
                        E = v[0],
                        h = v[1];

                    function g() { return (g = Object(ft.a)(j.a.mark((function n() { var r, c; return j.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o) { n.next = 5; break } return e(Jn("account", { isOpened: !0 })), n.abrupt("return");
                                    case 5:
                                        if (u) { n.next = 7; break } return n.abrupt("return");
                                    case 7:
                                        return n.next = 9, o.signMessage(u);
                                    case 9:
                                        if (r = n.sent) { n.next = 13; break } return ce.show(se, { title: "Error", content: "Attempt to sign message failed" }), n.abrupt("return");
                                    case 13:
                                        return n.next = 15, Ut(X.t[a], l, u, r);
                                    case 15:
                                        (c = n.sent).success ? (t.push(X.K.SUMMARY), O()) : h(c.error);
                                    case 17:
                                    case "end":
                                        return n.stop() } }), n) })))).apply(this, arguments) }

                    function O() { p(!1) } return Object(r.useEffect)((function() { u && p(!0) }), [u]), c.a.createElement("div", { className: "summary" }, !l && !s && c.a.createElement(Sc, null), (l || s) && c.a.createElement(Ns, null), c.a.createElement(re, { isActive: f, onClose: O, noClickOutside: !0 }, c.a.createElement(se, { customTitle: "Welcome to Krystal", className: "small align-center", noPanel: !0, content: c.a.createElement("div", { className: "align-center" }, c.a.createElement("div", null, "You can earn rewards by accepting the referral code below", c.a.createElement("br", null), c.a.createElement("strong", { className: "mt-2 mb-2", style: { display: "block" } }, u)), c.a.createElement("div", { className: "fs-3 mt-1 text-grey" }, "You need to sign the code to accept it (It's secure & doesn't cost any gas fee)"), c.a.createElement("div", { className: "btn btn--full btn--gradient mt-4", onClick: function() { return g.apply(this, arguments) } }, l ? "Sign & Accept" : "Connect Wallet"), "" !== E && c.a.createElement("div", { className: "input-error mt-2 slide-up align-center" }, E)) }))) };

            function Ts(e, t) { if (!t) return { priceDifference: 0, priceDifferentDOM: "--" }; var a = e ? Object(oe.a)(t.rate, e) : 0; return { priceDifference: a, priceDifferentDOM: c.a.createElement("div", { className: "".concat(Object(oe.A)(a, "price-change price-change--different  text-green", "price-change price-change--different  text-red")) }, Object(oe.B)(Math.abs(a), 2), "%") } } var As = a(241),
                Ss = a.n(As),
                Cs = a(617),
                Rs = a.n(Cs),
                Ps = a(618),
                Ls = a.n(Ps);

            function Is(e) { var t, a, n, l, s = Object(i.b)(),
                    o = Object(r.useState)(!1),
                    u = Object(Z.a)(o, 2),
                    m = u[0],
                    d = u[1],
                    f = Object(i.c)((function(e) { return e.tx })).txConfirming,
                    p = Object(i.c)((function(e) { return e.global })).chainId;

                function b() { return (b = Object(ft.a)(j.a.mark((function t() { return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    s(H(e.txObject, { srcSymbol: e.srcToken.symbol, srcAmount: +e.srcAmount, destSymbol: e.destToken.symbol, destAmount: +e.destAmount }));
                                case 1:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) } return Object(r.useEffect)((function() { if (!m) { var t = setInterval(Object(ft.a)(j.a.mark((function t() { var a; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Oa(X.t[p], e.srcToken.address, e.destToken.address, Object(oe.D)(e.srcAmount, e.srcToken.decimals), !1);
                                    case 2:
                                        a = t.sent, a.find((function(t) { return t.platform === e.platform.platform && t.rate !== e.platform.rate })) && d(!0);
                                    case 5:
                                    case "end":
                                        return t.stop() } }), t) }))), X.r.SWAP_RATE); return function() { clearInterval(t) } } }), [p, e.destToken.address, e.platform.platform, e.platform.rate, e.srcAmount, e.srcToken.address, e.srcToken.decimals, m]), c.a.createElement(se, { customTitle: "Swap Confirm", className: "small ".concat(f ? "disabled-btn" : ""), onSubmit: function() { return b.apply(this, arguments) }, submitText: "Confirm", close: e.close, content: c.a.createElement("div", null, c.a.createElement("div", { className: "swap__confirm-header" }, c.a.createElement("div", { className: "swap__confirm-header--left" }, Object(oe.m)(e.srcAmount, 6), " ", e.srcToken.symbol), c.a.createElement("img", { className: "top-4", src: Ss.a, alt: "arrow" }), c.a.createElement("div", { className: "swap__confirm-header--right" }, c.a.createElement("div", null, Object(oe.m)(Object(oe.z)(e.srcAmount, e.platform.rate), 6), " ", e.destToken.symbol), e.destToken && void 0 !== (null === (t = e.destToken.quotes) || void 0 === t ? void 0 : t.usd.price) && (null === (a = e.destToken.quotes) || void 0 === a ? void 0 : a.usd.price) > 0 && c.a.createElement("span", { className: "fs-3 mt-1" }, "\u2248", " ", Object(oe.m)(Object(oe.z)(e.destAmount, null === (n = e.destToken.quotes) || void 0 === n ? void 0 : n.usd.price), 4), " ", "USD"))), c.a.createElement("div", { className: "mb-3 swap__confirm-body" }, m && c.a.createElement("div", { className: "notification green notification--no-bg flex-between-center" }, c.a.createElement("div", { className: "notification__icon" }, c.a.createElement("img", { src: Rs.a, alt: "Rate has been changed!", width: "20px" })), c.a.createElement("div", { className: "notification__content" }, "Rate has been changed!")), c.a.createElement("div", { className: m ? "align-center swap__confirm-body-title mb-4" : "align-center swap__confirm-body-title mt-4 mb-4" }, "1 ", e.srcToken.symbol, " = ", Object(oe.m)(e.platform.rate, 4), " ", e.destToken.symbol, " =", " ", Object(oe.m)(null === (l = e.srcToken.quotes) || void 0 === l ? void 0 : l.usd.price, 2), " USD"), c.a.createElement("div", { className: "dark-container" }, e.inputFocused === X.q.SRC && c.a.createElement("div", { className: "flex-between-start mb-2" }, c.a.createElement("div", null, c.a.createElement("span", { className: "fs-3 mr-1" }, "Minimum received"), c.a.createElement(Kc.a, { title: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, Object(oe.m)(e.minDestAmount, 4), " ", e.destToken.symbol)), e.inputFocused === X.q.DEST && c.a.createElement("div", { className: "flex-between-start mb-2" }, c.a.createElement("div", null, c.a.createElement("span", { className: "fs-3 mr-1" }, "Maximum sent"), c.a.createElement(Kc.a, { title: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, Object(oe.m)(e.maxSrcAmount, 4), " ", e.srcToken.symbol)), Math.abs(e.priceDifference) >= 5 && c.a.createElement("div", { className: "flex-between-start mb-2" }, c.a.createElement("div", null, c.a.createElement("span", { className: "fs-3 mr-1" }, "Price difference")), e.priceDifferentDOM), c.a.createElement(Wc, { gasPrice: e.gasPrice, ethPrice: e.ethPrice, estimatedGas: e.estimatedGas, onlyGasText: !1 }))), e.isBestRate && c.a.createElement("div", { className: "notification green flex-between-center" }, c.a.createElement("div", { className: "notification__icon" }, c.a.createElement("img", { src: Ls.a, alt: "saving" })), c.a.createElement("div", { className: "notification__content" }, "Your transaction will be routed to", " ", c.a.createElement("span", { className: "capitalize" }, e.platform.platform), " ", "for better rate."))) }) }

            function Ms(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.tx })).txConfirming,
                    n = Object(i.c)((function(e) { return e.account })).address,
                    l = Object(i.c)((function(e) { return e.global })).chainId,
                    s = Object(r.useState)(0),
                    o = Object(Z.a)(s, 2),
                    u = o[0],
                    m = o[1],
                    d = Object(r.useState)(!1),
                    f = Object(Z.a)(d, 2),
                    p = f[0],
                    b = f[1],
                    v = Object(oe.b)(u, e.gasPrice),
                    E = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[l].url)) }), [l]);

                function h() { return (h = Object(ft.a)(j.a.mark((function a() { return j.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                case 0:
                                    t(K(e.srcToken.address, u, !0));
                                case 1:
                                case "end":
                                    return a.stop() } }), a) })))).apply(this, arguments) } return Object(r.useEffect)((function() {
                    function t() { return (t = Object(ft.a)(j.a.mark((function t() { var a; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return b(!0), t.next = 3, Object(fe.b)(E, X.a.APPROVE, { params: { tokenAddress: e.srcToken.address, spender: X.L[l], isApproveToMax: !0 }, txParams: { address: n } });
                                    case 3:
                                        a = t.sent, m(a), b(!1);
                                    case 6:
                                    case "end":
                                        return t.stop() } }), t) })))).apply(this, arguments) }! function() { t.apply(this, arguments) }() }), [e.srcToken.address, n, l, E]), c.a.createElement(se, { customTitle: "Approve Token", className: "small ".concat(a || p ? "disabled-btn" : ""), onSubmit: function() { return h.apply(this, arguments) }, submitText: "Confirm", close: e.close, content: c.a.createElement("div", { className: "approve-modal" }, c.a.createElement("div", null, "You need to approve Krystal to spend ", e.srcToken.symbol, ":"), c.a.createElement("div", { className: "approve-modal__addr" }, X.L[l]), c.a.createElement("div", { className: "approve-modal__gas pl-2 pr-2" }, c.a.createElement("div", null, "Gas fee"), c.a.createElement("div", null, c.a.createElement("span", { className: "mr-1 approve-modal__gas--fee" }, p ? "Loading..." : "".concat(Object(oe.m)(v, 6), " ").concat(X.F[l].currencySymbol)), c.a.createElement("span", null, "(", Object(oe.m)(Object(oe.z)(v, e.ethPrice), 6), " ", "USD)")))) }) }

            function Ds(e) { var t = Object(i.c)((function(e) { return e.account })).address,
                    a = Object(i.c)((function(e) { return e.tx })).approvalCount,
                    n = Object(i.c)((function(e) { return e.global })).chainId,
                    c = Object(r.useState)(!1),
                    l = Object(Z.a)(c, 2),
                    s = l[0],
                    o = l[1],
                    u = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[n].url)) }), [n]); return Object(r.useEffect)((function() {
                    function a() { return (a = Object(ft.a)(j.a.mark((function e(a) { var r; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Object(fe.d)(u, t, a.address, X.L[n]);
                                    case 2:
                                        r = e.sent, o(0 === r);
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) })))).apply(this, arguments) }
                    e && e.address !== X.C[n] && t ? function(e) { a.apply(this, arguments) }(e) : o(!1) }), [null === e || void 0 === e ? void 0 : e.address, t, a, n]), s } var Fs = a(619),
                Bs = a.n(Fs),
                Ks = a(242),
                Ws = a.n(Ks),
                Gs = a(1298),
                Hs = a(204),
                Vs = a.n(Hs),
                zs = a(289),
                Us = a.n(zs);

            function Ys(e) { var t = Object(i.b)(),
                    a = Object(r.useState)(""),
                    n = Object(Z.a)(a, 2),
                    l = n[0],
                    s = n[1],
                    o = Object(i.c)((function(e) { return e.global })).chainId,
                    u = Object(i.c)((function(e) { return e.account })).balances,
                    m = Vc(o),
                    d = m.allTokens,
                    f = m.stakedTokens,
                    p = Object(r.useState)(),
                    b = Object(Z.a)(p, 2),
                    v = b[0],
                    E = b[1],
                    h = Object(r.useState)(),
                    g = Object(Z.a)(h, 2),
                    O = g[0],
                    y = g[1],
                    j = Object(r.useState)(!1),
                    k = Object(Z.a)(j, 2),
                    x = k[0],
                    N = k[1],
                    _ = Object(r.useRef)(null);
                Object(r.useEffect)((function() { setTimeout((function() { _.current && _.current.focus() }), 500) }), []); var T = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[o].url)) }), [o]),
                    A = Object(r.useMemo)((function() { var t = e.isStakedTokens ? f : d; return Object(Ct.uniqBy)(t, "address").filter((function(e) { return Object(oe.y)(e, l) })).map((function(e) { var t = u.find((function(t) { return t.token.address === e.address })); return t ? Object(w.a)(Object(w.a)({}, e), {}, { balance: t.balance }) : Object(w.a)(Object(w.a)({}, e), {}, { balance: 0 }) })).sort((function(e, t) { return t.balance - e.balance })) }), [u, l, e.isStakedTokens, f, d]);
                Object(r.useEffect)((function() { l && 0 === A.length && (y(!1), E(void 0), N(!0), Object(fe.f)(T, l.toLocaleLowerCase()).then((function(e) { if (e.symbol) { var t = X.t[o]; return E(Rt({ symbol: e.symbol, decimals: e.decimals, address: l })), void ma(t, [l.toLocaleLowerCase()]).then((function(e) { e.length && (E(e[0]), y(!0)), N(!1) })) }
                        N(!1) }))) }), [o, l, A.length, T]); var S = Object(r.useCallback)((function(a) { t($a([a.address])), e.onSelect(a) }), [t, e]); return c.a.createElement(se, { customTitle: "Search Token", className: "small", close: e.close, noPanel: !0, content: c.a.createElement("div", null, c.a.createElement("div", { className: "input-container mb-5" }, c.a.createElement("input", { onChange: function(e) { s(e.target.value.toLowerCase()) }, className: "input input--full", type: "text", value: l, style: { paddingRight: 32 }, placeholder: "Search Name or Symbol", ref: _ }), c.a.createElement("div", { className: "input-tool", style: { top: 12 } }, c.a.createElement("img", { src: Us.a, alt: "Search" }))), c.a.createElement("div", { className: "limit-content nice-scroll search-token" }, c.a.createElement("div", null, A.map((function(t) { return c.a.createElement("div", { className: "search-token__item flex-between-center mb-4 pointer ".concat(e.disableToken === t.address ? "disabled" : ""), key: t.address, onClick: function() { return e.onSelect(t) } }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement(Nl, { tokenURL: Object(oe.n)(t.logo) }), c.a.createElement("div", { className: "ml-1" }, t.symbol)), c.a.createElement("div", null, Object(oe.m)(t.balance, 4))) })), x && c.a.createElement("div", { className: "flex-all-center" }, c.a.createElement("img", { src: Yl.a, alt: "Loading...", width: 24 })), !x && v && c.a.createElement("div", { className: "search-token__item flex-between-center mb-4 pointer", key: v.address }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement(Nl, { tokenURL: v.logo }), c.a.createElement("div", { className: "ml-1" }, v.symbol)), c.a.createElement("button", { className: "btn btn--xs", onClick: function() { return S(v) }, disabled: !O }, O ? "Import" : "not supported"))))) }) }

            function qs() { return c.a.createElement("img", { className: "swap__setting-loading", src: Yl.a, alt: "Loading..." }) } var Qs = a(78),
                Xs = a.n(Qs);

            function Js(e) { var t, a, n = e.state,
                    r = e.setState,
                    l = Object(i.c)((function(e) { return e.global })).chainId;

                function s(e) { return o.apply(this, arguments) }

                function o() { return (o = Object(ft.a)(j.a.mark((function e(t) { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r.setSrcToken(t), ce.close();
                                case 2:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) } return c.a.createElement("div", null, c.a.createElement("div", { className: "mb-3 pl-2" }, e.title ? e.title : "Enter the amount"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input", type: "text", placeholder: "0", value: n.srcAmount, onChange: function(t) { if (Object(oe.f)(t, t.target.value, n.srcAmount)) { var a = t.target.value;
                            r.setSrcAmount(a), r.setInputFocused(X.q.SRC), e.srcInputDebounced && e.srcInputDebounced(a) } } }), c.a.createElement("div", { className: "swap__input-tool" }, c.a.createElement("div", { className: "swap__input-max", onClick: function() { if (n.srcToken) { var t = new Xs.a(n.srcToken.balance);
                            n.srcToken.symbol === X.F[l].currencySymbol && t.isGreaterThanOrEqualTo(1.005 * Number(n.gasFee)) && (t = t.minus(1.005 * Number(n.gasFee)), f.b.dark("A small amount of ".concat(n.srcToken.symbol, " will be used for transaction fee"))); var a = t.toFixed(8, Xs.a.ROUND_DOWN);
                            r.setSrcAmount(a), e.srcInputDebounced && e.srcInputDebounced(a) } } }, "Max"), c.a.createElement("div", { className: "swap__input-select", onClick: function() { var t;
                        ce.show(Ys, { onSelect: s, isStakedTokens: e.isStakedTokens, disableToken: null === (t = n.destToken) || void 0 === t ? void 0 : t.address }) } }, c.a.createElement("span", null, n.srcToken ? n.srcToken.symbol : "Choose"), c.a.createElement("img", { src: Vs.a, alt: "Select" })))), c.a.createElement("div", { className: "swap__balance slide-up" }, n.srcToken && c.a.createElement(c.a.Fragment, null, n.isBalanceLoading && c.a.createElement(qs, null), !n.isBalanceLoading && "".concat(Object(oe.m)(null === (t = n.srcToken) || void 0 === t ? void 0 : t.balance, 4), " ").concat(null === (a = n.srcToken) || void 0 === a ? void 0 : a.symbol)))) } var Zs = a(290),
                $s = a.n(Zs);

            function eo(e) { var t = e.allRates,
                    a = e.srcToken,
                    n = e.destToken,
                    l = e.srcAmount,
                    s = e.destAmount,
                    o = e.onSelect,
                    u = e.close,
                    m = Object(i.c)((function(e) { return e.global })),
                    d = m.slippageRate,
                    f = m.gasPrices,
                    p = m.selectedGasPrice,
                    b = m.useGasToken,
                    v = m.chainId,
                    E = Object(i.c)((function(e) { return e.account })).watchAddress,
                    h = Object(r.useState)([]),
                    g = Object(Z.a)(h, 2),
                    O = g[0],
                    y = g[1];
                Object(r.useEffect)((function() { y(t), Promise.all(t.map(function() { var e = Object(ft.a)(j.a.mark((function e(t) { var r, c, o; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = +s - d / 100 * +s, e.next = 3, na(X.t[v], { src: a.address, dest: n.address, srcAmount: Object(oe.D)(l || Object(J.b)(a.decimals), a.decimals), minDestAmount: Object(oe.D)(r, n.decimals), userAddress: E || X.e, platformWallet: X.H[v], gasPrice: Object(oe.H)(f[p]), useGasToken: b, nonce: 1, hint: t.hint });
                                    case 3:
                                        return c = e.sent, (o = c.tx) && (t.estimatedGas = Object(oe.w)(o.gas)), e.abrupt("return", t);
                                    case 7:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }())).then((function(e) { e && y(e) })) }), [t.length, b, p, l, s, y]); var k = Vc(v).supportedTokens,
                    w = Object(oe.v)(k, X.C[v]),
                    x = Object(r.useCallback)((function(e) { return Object(oe.b)(f[p], e) }), [f, p]); return c.a.createElement(se, { customTitle: "Choose Rate and Gas fee", className: "small", close: u, noPanel: !0, content: c.a.createElement("div", null, O.map((function(e, t) { return c.a.createElement("div", { className: "row font-small choose-rate-modal", onClick: function() { return o(e) }, key: t }, c.a.createElement("div", { className: "flex-center w-100 choose-rate-modal__header" }, c.a.createElement("img", { className: "mr-2 token-logo", src: e.platformIcon, alt: "Route" }), c.a.createElement("span", { className: "uppercase token-symbol" }, e.platform || "Unknown Platform")), c.a.createElement("br", null), c.a.createElement("div", { className: "choose-rate-modal__body w-100" }, c.a.createElement("div", { className: "choose-rate-modal__body--rate w-100 flex-between" }, c.a.createElement("label", null, "Rate:"), c.a.createElement("div", null, "1 ", a.symbol, " = ", Object(oe.B)(e.rate, 4), " ", n.symbol)), c.a.createElement("div", { className: "choose-rate-modal__body--gas-fee" }, c.a.createElement("label", null, "Max gas fee: "), c.a.createElement("div", null, x(e.estimatedGas), " ", X.F[v].currencySymbol, " ~ $", Object(oe.m)(Object(oe.z)(x(e.estimatedGas), w), 2))))) }))) }) }

            function to(e) { var t, a, n, l, s, o = e.state,
                    u = e.setState,
                    m = Object(i.c)((function(e) { return e.global })).chainId,
                    d = o.isRateLoading ? c.a.createElement("img", { className: "top-2", style: { width: 12 }, src: Yl.a, alt: "Loading..." }) : Object(oe.G)(e.platformRate),
                    p = !o.isDeposit || o.isDeposit && o.isSwapAndDeposit;

                function b(e) { return v.apply(this, arguments) }

                function v() { return (v = Object(ft.a)(j.a.mark((function e(t) { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    u.setDestToken(t), ce.close();
                                case 2:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function E(e) { u.setSelectedPlatform(e), ce.close() } var h = Object(r.useCallback)((function() { if (o.destToken) { var t = new Xs.a(o.destToken.balance);
                        o.destToken.symbol === X.F[m].currencySymbol && t.isGreaterThanOrEqualTo(1.005 * Number(o.gasFee)) && (t = t.minus(1.005 * Number(o.gasFee)), f.b.dark("A small amount of ".concat(o.destToken.symbol, " will be used for transaction fee"))); var a = t.toFixed(8, Xs.a.ROUND_DOWN);
                        u.setDestAmount(a), u.setInputFocused(X.q.DEST), e.destInputDebounced && e.destInputDebounced(a) } }), [m, e, u, o.destToken, o.gasFee]); return c.a.createElement("div", null, c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input", type: "text", placeholder: "0", value: o.destAmount, onChange: function(t) { if (Object(oe.f)(t, t.target.value, o.destAmount)) { var a = t.target.value;
                            u.setDestAmount(a), u.setInputFocused(X.q.DEST), e.destInputDebounced && e.destInputDebounced(a) } } }), c.a.createElement("div", { className: "swap__input-tool" }, o.isDeposit && !o.isSwapAndDeposit && c.a.createElement("div", { className: "swap__input-max", onClick: h }, "Max"), c.a.createElement("div", { className: "swap__input-select", onClick: function() { var e;
                        ce.show(Ys, { onSelect: b, isStakedTokens: o.isDeposit, disableToken: null === (e = o.srcToken) || void 0 === e ? void 0 : e.address }) } }, c.a.createElement("span", null, o.destToken ? o.destToken.symbol : "Choose"), c.a.createElement("img", { src: Vs.a, alt: "Select" })))), p && o.destToken && o.srcToken && c.a.createElement("div", { className: "swap__path" }, c.a.createElement("div", { className: "swap__rate" }, !e.swapRate && c.a.createElement("span", null, "Rate: 1 ", null === (t = o.srcToken) || void 0 === t ? void 0 : t.symbol, " = ", d, " ", null === (a = o.destToken) || void 0 === a ? void 0 : a.symbol), e.swapRate && c.a.createElement("span", null, "Rate: 1 ", null === (n = o.destToken) || void 0 === n ? void 0 : n.symbol, " = ", d, " ", null === (l = o.srcToken) || void 0 === l ? void 0 : l.symbol), c.a.createElement("img", { src: $s.a, onClick: function() { return e.setSwapRate(!e.swapRate) }, alt: "Swap rate" })), e.platforms.length > 0 && c.a.createElement("div", { className: "swap__route", onClick: function() { o.srcToken && o.destToken && ce.show(eo, { onSelect: E, allRates: e.platforms, srcToken: o.srcToken, destToken: o.destToken, srcAmount: o.srcAmount, destAmount: o.destAmount }) } }, e.selectedPlatform ? c.a.createElement("img", { src: e.selectedPlatform.platformIcon, width: "20", alt: "Platform" }) : c.a.createElement("img", { className: "loading-circle", src: Yl.a, alt: "Loading..." }), c.a.createElement("span", { className: "text-green" }, null === (s = e.selectedPlatform) || void 0 === s ? void 0 : s.platformShort)))) } var ao, no = function(e, t) { var a = Object(r.useRef)(e);
                Object(r.useEffect)((function() { a.current = e }), [e]), Object(r.useEffect)((function() { if (null !== t) { var e = setInterval((function() { return a.current() }), t); return function() { return clearInterval(e) } } }), [t]) };

            function ro(e) { var t, a, n, l, s, o, u, m, d = e.state,
                    f = e.setState,
                    p = Object(i.c)((function(e) { return e.global })).chainId,
                    b = Object(r.useState)(!1),
                    v = Object(Z.a)(b, 2),
                    E = v[0],
                    h = v[1],
                    g = Object(r.useState)([]),
                    O = Object(Z.a)(g, 2),
                    y = O[0],
                    k = O[1],
                    w = Object(r.useMemo)((function() { return d.selectedPlatform ? d.selectedPlatform : d.bestPlatform }), [d]),
                    x = Object(r.useMemo)((function() { return w ? E ? 1 / w.rate : w.rate : 0 }), [w, E]),
                    N = d.srcToken ? Object(J.b)(d.srcToken.decimals) : 1,
                    _ = Object(r.useCallback)(Object(Ct.debounce)((function() { if (d.srcToken && d.destToken) { var e = d.inputFocused !== X.q.SRC;
                            C(e ? +d.destAmount : +d.srcAmount, e, !0) } }), 400), [C, d.destAmount, d.destToken, d.inputFocused, d.srcAmount, d.srcToken]);
                no(_, X.r.SWAP_RATE); var T = Object(r.useRef)(!1);
                Object(r.useEffect)((function() {
                    function e() { return (e = Object(ft.a)(j.a.mark((function e() { var t; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (d.srcToken && d.destToken && d.destToken.address !== d.srcToken.address) { e.next = 2; break } return e.abrupt("return", 0);
                                    case 2:
                                        return e.next = 4, Ea(X.t[p], d.srcToken.address, d.destToken.address);
                                    case 4:
                                        t = e.sent, f.setRefRate(t);
                                    case 6:
                                    case "end":
                                        return e.stop() } }), e) })))).apply(this, arguments) }
                    A(d.srcAmount),
                        function() { e.apply(this, arguments) }() }), [p, null === (t = d.srcToken) || void 0 === t ? void 0 : t.symbol, null === (a = d.destToken) || void 0 === a ? void 0 : a.symbol]), Object(r.useEffect)((function() { if (w && w.rate > 0) { if (d.inputFocused === X.q.SRC && d.destToken && d.srcAmount > 0) { var e = +Object(oe.z)(d.srcAmount, w.rate); if (isNaN(e)) return; return void f.setDestAmount(e) } if (d.inputFocused === X.q.DEST && d.srcToken && d.destAmount > 0) { var t = +Object(oe.e)(d.destAmount, w.rate); if (isNaN(t)) return;
                            f.setSrcAmount(t) } } }), [w]), Object(r.useEffect)((function() { f.setFormError("") }), [d.srcAmount, d.destAmount, w]); var A = Object(Gs.a)(function() { var t = Object(ft.a)(j.a.mark((function t(a) { var n, r; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = "" !== a ? +a : 0, t.next = 3, C(n, !1, !0);
                                    case 3:
                                        r = t.sent, f.setDestAmount(+Object(oe.z)(n, r)), e.onInputChanged && e.onInputChanged(n, d.destAmount);
                                    case 6:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(), 400),
                    S = Object(Gs.a)(function() { var t = Object(ft.a)(j.a.mark((function t(a) { var n, r; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = "" !== a ? +a : 0, t.next = 3, C(n, !0, !0);
                                    case 3:
                                        r = t.sent, f.setSrcAmount(+Object(oe.e)(n, r)), e.onInputChanged && e.onInputChanged(d.srcAmount, n);
                                    case 6:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(), 400);

                function C(e, t) { return R.apply(this, arguments) }

                function R() { return (R = Object(ft.a)(j.a.mark((function e(t, a) { var n, r, c, l, s, o = arguments; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = !(o.length > 2 && void 0 !== o[2]) || o[2], f.setRateLoading(n), e.next = 4, P(t || N, a);
                                case 4:
                                    if (0 !== (c = e.sent).length) { e.next = 8; break } return !T.current && f.setRateLoading(!1), e.abrupt("return", 0);
                                case 8:
                                    return l = I(c), r = l ? l.rate : 0, k(c), f.setBestPlatform && f.setBestPlatform(l), (s = c.find((function(e) { var t, a; return e.platform === (null === d || void 0 === d || null === (t = d.selectedPlatform) || void 0 === t ? void 0 : t.platform) && e.rate !== (null === d || void 0 === d || null === (a = d.selectedPlatform) || void 0 === a ? void 0 : a.rate) }))) && f.setSelectedPlatform(s), f.setRateLoading(!1), T.current = !1, e.abrupt("return", r);
                                case 17:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function P(e, t) { return L.apply(this, arguments) }

                function L() { return (L = Object(ft.a)(j.a.mark((function t(a, n) { var r; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (d.srcToken && d.destToken) { t.next = 2; break } return t.abrupt("return", []);
                                case 2:
                                    return r = n ? d.destToken.decimals : d.srcToken.decimals, T.current = !0, t.next = 6, Oa(X.t[p], d.srcToken.address, d.destToken.address, Object(oe.D)(a, r), n, e.address || X.e, X.H[p]);
                                case 6:
                                    return t.abrupt("return", t.sent);
                                case 7:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function I(e) { for (var t = e[0], a = 0, n = 0; n < e.length; n++) e[n].rate > a && (t = e[n], a = e[n].rate); return t } return Object(r.useEffect)((function() { f.setSelectedPlatform(void 0) }), [null === (n = d.destToken) || void 0 === n ? void 0 : n.address, null === (l = d.srcToken) || void 0 === l ? void 0 : l.address, d.srcAmount]), c.a.createElement("div", null, (!d.isDeposit || d.isSwapAndDeposit) && c.a.createElement(c.a.Fragment, null, c.a.createElement(Js, { state: d, setState: f, srcInputDebounced: A }), c.a.createElement("img", { onClick: d.isDeposit ? function() {} : function() { h(!1), f.setSrcToken(d.destToken), f.setDestToken(d.srcToken) }, className: "swap__exchange-icon", src: d.isDeposit ? Ws.a : Bs.a, alt: "arrow" })), c.a.createElement(to, { state: d, setState: f, swapRate: E, setSwapRate: h, platforms: y, platformRate: x, selectedPlatform: w, destInputDebounced: S }), d.isDeposit && !d.isSwapAndDeposit && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "swap__balance slide-up" }, d.isBalanceLoading && c.a.createElement(qs, null), !d.isBalanceLoading && "".concat(Object(oe.m)(null === (s = d.destToken) || void 0 === s ? void 0 : s.balance, 4), " ").concat(null === (o = d.destToken) || void 0 === o ? void 0 : o.symbol)), c.a.createElement("div", { className: "pl-2 pr-2 mt-2 fs-2 text-white-70" }, c.a.createElement("span", null, "If you don\u2019t have ", null === (u = d.destToken) || void 0 === u ? void 0 : u.symbol, ", you can "), c.a.createElement("span", { className: "text-green hover-underline", onClick: function() { return f.setIsSwapAndDeposit(!0) } }, "Swap Now"))), d.isDeposit && d.isSwapAndDeposit && c.a.createElement("div", { className: "pl-2 pr-3 mt-2 fs-2 text-white-70" }, c.a.createElement("span", null, "If you already have ", null === (m = d.destToken) || void 0 === m ? void 0 : m.symbol, ", you can "), c.a.createElement("span", { className: "text-green hover-underline", onClick: function() { return f.setIsSwapAndDeposit(!1) } }, "Go Back"))) } var co = ["svgRef", "title"];

            function lo() { return (lo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function so(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var oo = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = so(e, co); return c.a.createElement("svg", lo({ width: 14, height: 14, viewBox: "0 0 14 14", ref: t }, n), a ? c.a.createElement("title", null, a) : null, ao || (ao = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.414 6.586c.781.78.781 2.047 0 2.828-.78.781-2.047.781-2.828 0-.781-.78-.781-2.047 0-2.828.78-.781 2.047-.781 2.828 0", transform: "translate(-617 -380) translate(608 158) translate(0 213) translate(8 8)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.787 12.483h0c.335.336.88.336 1.215 0l.481-.481c.336-.335.336-.88 0-1.215h0c-.254-.255-.329-.637-.189-.969.015-.035.03-.07.043-.107.122-.31.425-.51.758-.51h.045c.475 0 .86-.385.86-.86v-.68c0-.475-.385-.86-.86-.86h-.045c-.333 0-.636-.2-.758-.51l-.043-.107c-.14-.332-.065-.714.19-.969h0c.335-.335.335-.88 0-1.215l-.482-.481c-.335-.336-.88-.336-1.215 0h0c-.255.254-.637.329-.969.189-.035-.015-.07-.03-.107-.043-.31-.124-.511-.428-.511-.761v-.045C9.2 2.385 8.815 2 8.34 2h-.68c-.475 0-.86.385-.86.86v.044c0 .333-.2.636-.51.758l-.107.044c-.332.14-.714.065-.969-.19h0c-.335-.335-.88-.335-1.215 0l-.482.482c-.336.335-.336.88 0 1.215h0c.254.255.329.637.189.969-.015.036-.03.071-.043.107-.122.31-.426.511-.759.511h-.045c-.474 0-.859.385-.859.86v.68c0 .475.385.86.86.86h.044c.333 0 .636.2.758.51l.043.107c.14.332.066.714-.189.969h0c-.335.335-.335.88 0 1.215l.481.482c.336.335.88.335 1.216 0h0c.254-.255.636-.33.968-.19l.107.044c.31.122.51.424.51.758v.044c0 .475.385.86.86.86h.68c.475 0 .86-.385.86-.86v-.044c0-.334.2-.636.51-.758.037-.014.072-.029.107-.044.334-.139.716-.064.972.19h0z", transform: "translate(-617 -380) translate(608 158) translate(0 213) translate(8 8)" })))))))))) },
                io = c.a.forwardRef((function(e, t) { return c.a.createElement(oo, lo({ svgRef: t }, e)) }));
            a.p;

            function uo(e) { var t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.global })),
                    n = a.gasPrices,
                    l = a.selectedGasPrice,
                    s = a.slippageRate,
                    o = a.chainId,
                    u = Object(r.useState)(!1),
                    m = Object(Z.a)(u, 2),
                    d = m[0],
                    f = m[1];

                function p(e) { e < 0 ? e = 0 : e > 100 && (e = 100), t(function(e) { return { type: Fn, payload: e } }(e)) } return c.a.createElement(se, { customTitle: "Transaction/Gas", className: "small tx-setting", close: e.close, noPanel: !0, content: c.a.createElement("div", null, c.a.createElement("div", { className: "tx-setting__block" }, c.a.createElement("div", null, c.a.createElement("span", { className: "mr-1" }, "GAS fee (Gwei)"), c.a.createElement(Kc.a, { title: "Gas fee is the fee you pay to the miner (not to Krystal) to mine your transaction on blockchain. The price of gas generally reflect how fast you want a transaction mined.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "top-1 pointer", src: Bc.a, alt: "Gas info" }))), c.a.createElement("div", null, Object.keys(n).map((function(a) { var r = n[a]; return c.a.createElement("label", { key: a, className: "option" }, c.a.createElement("span", { className: "option__text" }, c.a.createElement("span", null, r), c.a.createElement("span", null, a)), c.a.createElement("input", { className: "option__radio", type: "radio", onChange: function() { t(Xn(a)) }, checked: a === l }), c.a.createElement("span", { className: "option__check" }), c.a.createElement("div", { className: "font-small" }, "~ ", Object(oe.b)(r, e.estimatedGasLimit), " ", X.F[o].currencySymbol)) }))), c.a.createElement("div", { className: "tx-setting__text" }, "Select higher gas price to accelerate your transaction processing time")), c.a.createElement("div", null, e.slippageOption && c.a.createElement("div", { className: "tx-setting__block" }, c.a.createElement("div", null, "Slippage tolerance"), c.a.createElement("div", { className: "flex-center" }, c.a.createElement("label", { className: "option", onClick: function() { return f(!1) } }, c.a.createElement("span", { className: "option__text" }, X.i, "%"), c.a.createElement("input", { className: "option__radio", type: "radio", onChange: function() { return p(X.i) }, checked: !d && s === X.i }), c.a.createElement("span", { className: "option__check" })), c.a.createElement("label", { className: "flex-center option", onClick: function() { return f(!0) }, style: { display: "flex" } }, c.a.createElement("span", { className: "option__text" }, "Custom"), c.a.createElement("input", { type: "number", className: "option__input", value: s, onChange: function(e) { return p(+e.target.value) } }), c.a.createElement("input", { className: "option__radio", type: "radio", checked: d || s !== X.i, onChange: function() { return !1 } }), c.a.createElement("span", { className: "option__check option__check--input" }))), c.a.createElement("div", { className: "tx-setting__text" }, "Your transaction will revert if the price changes unfavorably by more than this percentage.")))) }) } var mo = a(198),
                fo = a.n(mo);

            function po(e) { var t = Object(r.useState)(),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    c = a[1],
                    l = Object(r.useState)(),
                    s = Object(Z.a)(l, 2),
                    o = s[0],
                    u = s[1],
                    m = Object(r.useState)(""),
                    d = Object(Z.a)(m, 2),
                    f = d[0],
                    p = d[1],
                    b = Object(r.useState)(""),
                    v = Object(Z.a)(b, 2),
                    E = v[0],
                    h = v[1],
                    g = Object(r.useState)(!1),
                    O = Object(Z.a)(g, 2),
                    y = O[0],
                    j = O[1],
                    k = Object(r.useState)(""),
                    x = Object(Z.a)(k, 2),
                    N = x[0],
                    _ = x[1],
                    T = Object(r.useState)(""),
                    A = Object(Z.a)(T, 2),
                    S = A[0],
                    C = A[1],
                    R = Object(r.useState)(!1),
                    P = Object(Z.a)(R, 2),
                    L = P[0],
                    I = P[1],
                    M = Object(r.useState)(!1),
                    D = Object(Z.a)(M, 2),
                    F = D[0],
                    B = D[1],
                    K = Object(r.useState)(0),
                    W = Object(Z.a)(K, 2),
                    G = W[0],
                    H = W[1],
                    V = Object(r.useState)(""),
                    z = Object(Z.a)(V, 2),
                    U = z[0],
                    Y = z[1],
                    q = Object(r.useState)(),
                    Q = Object(Z.a)(q, 2),
                    J = Q[0],
                    $ = Q[1],
                    ee = Object(r.useState)(!1),
                    te = Object(Z.a)(ee, 2),
                    ae = te[0],
                    ne = te[1],
                    re = Object(r.useState)(),
                    ce = Object(Z.a)(re, 2),
                    le = ce[0],
                    se = ce[1],
                    ie = Object(r.useState)(X.q.SRC),
                    ue = Object(Z.a)(ie, 2),
                    me = ue[0],
                    de = ue[1],
                    fe = Object(i.c)((function(e) { return e.account })),
                    pe = fe.balances,
                    be = fe.watchAddress,
                    ve = Object(i.c)((function(e) { return e.global })).chainId,
                    Ee = Object(vc.g)(),
                    he = Object(r.useCallback)((function(e, t) { var a = fo.a.parse(Ee.location.search.substring(1));
                        a[e] !== t && (a[e] = t || ""), !a.chainId && (a.chainId = ve), Ee.replace(Object(oe.p)(X.K.SWAP, a)) }), [Ee, ve]),
                    ge = Object(r.useCallback)((function(e) { if (!e) return u(void 0);
                        Ee.location.pathname === X.K.SWAP && he("destAddress", (null === e || void 0 === e ? void 0 : e.address) || ""); var t = 0;
                        pe.forEach((function(a) { e && a.token.address === e.address && (t = a.balance) })), (null === o || void 0 === o ? void 0 : o.address) !== e.address && h(0), u(Object(w.a)(Object(w.a)({}, e), {}, { balance: t })) }), [pe, Ee.location.pathname, he, o]),
                    Oe = Object(r.useCallback)((function(e) { if (!e) return c(void 0);
                        Ee.location.pathname === X.K.SWAP && he("srcAddress", (null === e || void 0 === e ? void 0 : e.address) || ""); var t = 0;
                        pe.forEach((function(a) { e && a.token.address === e.address && (t = a.balance) })), (null === n || void 0 === n ? void 0 : n.address) !== e.address && p(0), c(Object(w.a)(Object(w.a)({}, e), {}, { balance: t })) }), [pe, Ee.location.pathname, he, n]),
                    ye = Object(r.useMemo)((function() { return { srcToken: n, destToken: o, srcAmount: f, destAmount: E, isGasLoading: y, isRateLoading: L, isBalanceLoading: F, refRate: G, formError: U, isSwapAndDeposit: ae, selectedPlatform: J, bestPlatform: le, isDeposit: e, inputFocused: me, gasFee: N, gasLimit: S } }), [le, E, o, U, N, S, me, F, e, y, L, ae, G, J, f, n]);
                Object(r.useEffect)((function() { if (!be || 0 === pe.length) return n && 0 !== n.balance && Oe(Object(w.a)(Object(w.a)({}, n), {}, { balance: 0 })), void(o && 0 !== o.balance && ge(Object(w.a)(Object(w.a)({}, o), {}, { balance: 0 })));
                    B(!0); var e = 0,
                        t = 0;
                    pe.forEach((function(a) { n && a.token.address === n.address && (e = a.balance), o && a.token.address === o.address && (t = a.balance) })), n && n.balance !== e && Oe(Object(w.a)(Object(w.a)({}, n), {}, { balance: e })), o && o.balance !== t && ge(Object(w.a)(Object(w.a)({}, o), {}, { balance: t })), B(!1) }), [pe, ge, Oe, o, n, be]); var je = Object(r.useCallback)((function() { c(void 0), u(void 0) }), []); return { state: ye, setState: Object(r.useMemo)((function() { return { setSrcToken: Oe, setDestToken: ge, setSrcAmount: p, setDestAmount: h, setGasLoading: j, setRateLoading: I, setBalanceLoading: B, setRefRate: H, setFormError: Y, setIsSwapAndDeposit: ne, setSelectedPlatform: $, setBestPlatform: se, isDeposit: e, setInputFocused: de, setGasFee: _, setGasLimit: C, clear: je } }), [Oe, ge, e, je]) } }

            function bo(e) { var t = Object(r.useRef)(e); return Object(r.useEffect)((function() { t.current = e }), [e]), t.current }

            function vo() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })),
                    a = t.slippageRate,
                    n = t.gasPrices,
                    l = t.selectedGasPrice,
                    s = t.useGasToken,
                    o = t.chainId,
                    u = t.pageSettings,
                    m = Object(i.c)((function(e) { return e.account })),
                    d = m.address,
                    f = m.watchAddress,
                    p = Vc(o),
                    b = p.allTokens,
                    v = p.isFetchingTokens,
                    E = Object(i.c)((function(e) { return e.tx })).lastNonce,
                    h = po(!1),
                    g = h.state,
                    O = h.setState,
                    y = function(e) { var t = e.setState,
                            a = Object(vc.g)(),
                            n = Object(i.b)(),
                            c = Object(i.c)((function(e) { return e.account })).wallet,
                            l = Object(i.c)((function(e) { return e.global })).chainId,
                            s = Vc(l),
                            o = s.allTokens,
                            u = s.isFetchingTokens,
                            m = s.isAddingCustomTokens,
                            d = bo(l),
                            f = Object(r.useMemo)((function() { var e = fo.a.parse(a.location.search.substring(1)); return { srcAddress: e.srcAddress, destAddress: e.destAddress, chainId: e.chainId || l } }), [l, a.location.search]),
                            p = Object(r.useRef)(null); return Object(r.useEffect)((function() { if (f.chainId && +f.chainId !== l) return d !== l ? (t.clear(), void a.replace(X.K.SWAP, Object(w.a)(Object(w.a)({}, f), {}, { chainId: l }))) : void(c && c.getWalletType() === X.V.METAMASK ? c.switchChain(+f.chainId) : n(qn(+f.chainId))) }), [l, n, a, f, d, t, c]), Object(r.useEffect)((function() { if (l === +f.chainId && !u && !m && o.length && p.current !== o.length) { p.current = o.length; var e, a, n = { srcAddress: "".concat(f.srcAddress || X.j[l]), destAddress: "".concat(f.destAddress || X.f[l]) };
                                o.forEach((function(r) { r.address === n.srcAddress.toLowerCase() && (e = r, t.setSrcToken(r)), r.address === n.destAddress.toLowerCase() && n.srcAddress.toLowerCase() !== n.destAddress.toLowerCase() && (a = r, t.setDestToken(r)) })), !e && t.setSrcToken(void 0), n.srcAddress.toLowerCase() !== n.destAddress.toLowerCase() && n.destAddress && !a && ce.show(ql, { contract: n.destAddress.toLowerCase() }) } }), [o, l, m, u, f.chainId, f.destAddress, f.srcAddress, t]), { isCorrectChain: d === l } }({ setState: O }).isCorrectChain,
                    k = Ds(g.srcToken),
                    x = Object(r.useState)(!1),
                    N = Object(Z.a)(x, 2),
                    _ = N[0],
                    T = N[1],
                    A = +g.destAmount - +g.destAmount * (a / 100),
                    S = Object(r.useMemo)((function() { return +g.srcAmount * (1 + a / 100) }), [a, g.srcAmount]),
                    C = Object(r.useMemo)((function() { return g.selectedPlatform ? g.selectedPlatform : g.bestPlatform }), [g]),
                    R = Ts(g.refRate, C),
                    P = R.priceDifference,
                    L = R.priceDifferentDOM,
                    I = f && f !== d,
                    M = Object(r.useMemo)((function() { return Object(oe.d)(o).web3 }), [o]);
                Object(r.useEffect)((function() { O.setBalanceLoading(v) }), [v, O]); var D = Object(r.useCallback)(function() { var e = Object(ft.a)(j.a.mark((function e(t) { var r, c, i, u, m, d, p; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (C && !v) { e.next = 2; break } return e.abrupt("return");
                                case 2:
                                    if (g.srcToken && g.destToken) { e.next = 4; break } return e.abrupt("return");
                                case 4:
                                    return O.setGasLoading(!0), e.next = 7, Object(fe.h)(M, f || X.e, E);
                                case 7:
                                    if (r = e.sent, c = t || (g.srcAmount ? g.srcAmount : Object(J.b)(g.srcToken.decimals)), i = +g.destAmount - +g.destAmount * (a / 100), 0 !== +c && 0 !== i) { e.next = 12; break } return e.abrupt("return");
                                case 12:
                                    return e.next = 14, na(X.t[o], { src: g.srcToken.address, dest: g.destToken.address, srcAmount: Object(oe.D)(c, g.srcToken.decimals), minDestAmount: Object(oe.D)(i, g.destToken.decimals), userAddress: f || X.e, platformWallet: X.H[o], gasPrice: Object(oe.H)(n[l]), useGasToken: s, nonce: r || 1, hint: null === C || void 0 === C ? void 0 : C.hint });
                                case 14:
                                    if (u = e.sent, m = u.tx, d = u.error, O.setGasLoading(!1), "" === d && m) { e.next = 21; break } return "CANCEL" !== d && O.setFormError(d), e.abrupt("return");
                                case 21:
                                    return p = Object(oe.w)(m.gas), O.setGasFee(Object(oe.b)(n[l], p)), O.setGasLimit(p), e.abrupt("return", { txObject: m, minDestAmount: i, estimatedGas: p });
                                case 25:
                                case "end":
                                    return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(), [o, n, v, E, l, C, O, a, g.destAmount, g.destToken, g.srcAmount, g.srcToken, s, f, M]);

                function F() { return (F = Object(ft.a)(j.a.mark((function e() { var t, a, r, c, s, i, u, m; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (d) { e.next = 2; break } return e.abrupt("return");
                                case 2:
                                    if (!I) { e.next = 4; break } return e.abrupt("return");
                                case 4:
                                    if (g.srcToken && g.destToken) { e.next = 6; break } return e.abrupt("return");
                                case 6:
                                    if (T(!0), t = Object(oe.g)(b, "symbol", X.F[o].currencySymbol), a = n[l], r = Object(Ct.get)(t, "quotes.usd.price", 0), c = void 0 !== C, !k) { e.next = 17; break } return ce.show(Ms, { srcToken: g.srcToken, gasPrice: a, ethPrice: r }), T(!1), e.abrupt("return");
                                case 17:
                                    if (g.srcAmount) { e.next = 23; break } return O.setFormError("Invalid source amount to swap"), T(!1), e.abrupt("return");
                                case 23:
                                    if (!(g.srcToken && g.srcToken.balance < g.srcAmount)) { e.next = 29; break } return O.setFormError("Insufficient balance for the swap"), T(!1), e.abrupt("return");
                                case 29:
                                    if (C) { e.next = 33; break } return O.setFormError("Cannot find a pool with enough liquidity"), T(!1), e.abrupt("return");
                                case 33:
                                    return e.next = 35, D();
                                case 35:
                                    if (s = e.sent) { e.next = 40; break } return O.setFormError("something went wrong when building transaction. please try again!"), T(!1), e.abrupt("return");
                                case 40:
                                    i = s.minDestAmount, u = s.estimatedGas, m = s.txObject, T(!1), ce.show(Is, { srcToken: g.srcToken, destToken: g.destToken, srcAmount: g.srcAmount, destAmount: g.destAmount, platform: C, priceDifferentDOM: L, priceDifference: P, gasPrice: a, ethPrice: r, isBestRate: c, txObject: m, estimatedGas: u, minDestAmount: i, inputFocused: g.inputFocused, maxSrcAmount: S });
                                case 43:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) } return c.a.createElement("div", { className: "swap container" }, c.a.createElement("div", { className: "block" }, c.a.createElement("div", { className: "block__title" }, "Swap"), (v || !y) && c.a.createElement("div", { className: "align-center" }, c.a.createElement(Zc, null)), !v && b.length > 0 && c.a.createElement("div", { className: "block__content slide-up" }, c.a.createElement("button", { className: "btn btn--tx", onClick: function() { return ce.show(uo, { estimatedGasLimit: g.gasLimit ? g.gasLimit : C ? C.estimatedGas : 0, slippageOption: !0 }) } }, c.a.createElement(io, { stroke: "#fff" })), c.a.createElement(ro, { state: g, setState: O, onInputChanged: D, address: f }), f ? c.a.createElement("button", { className: "mt-8 btn d-flex align-items-center", disabled: g.isRateLoading || "" !== g.formError || 0 === +g.srcAmount || 0 === +g.destAmount || _ || I, onClick: function() { return F.apply(this, arguments) } }, !_ && (k ? "Approve" : "Swap Now"), _ && c.a.createElement(c.a.Fragment, null, c.a.createElement("img", { className: "mr-1", style: { width: 20 }, src: Yl.a, alt: "Loading..." }), "Loading")) : c.a.createElement("div", { className: "mt-8 btn btn--gradient", onClick: function() { return e(Jn("account", { isOpened: !0 })) } }, c.a.createElement("div", null, "Connect Wallet")), "" !== g.formError && c.a.createElement("div", { className: "input-error mt-2 slide-up align-center" }, g.formError), g.srcToken && g.destToken && c.a.createElement("div", { className: "mt-5" }, c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Gas fee")), c.a.createElement("div", null, g.gasFee || 0, " ", X.F[o].currencySymbol, " ", c.a.createElement("span", { className: "gas-type" }, "(", l.toUpperCase(), ")"))), c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Slippage")), c.a.createElement("div", null, a, " %")), g.inputFocused === X.q.SRC && c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Minimum received"), c.a.createElement(Kc.a, { title: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, Object(oe.m)(A, 4), " ", g.destToken.symbol)), g.inputFocused === X.q.DEST && c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Maximum sent"), c.a.createElement(Kc.a, { title: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, Object(oe.m)(S, 4), " ", g.srcToken.symbol)), +g.srcAmount > 0 && +g.destAmount > 0 && Math.abs(P) > 5 && c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Price difference"), c.a.createElement(Kc.a, { title: "The difference between the market price and estimated price due to trade size.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), L))), Object(Ct.get)(u, "APP_SWAP_BOX.content") && c.a.createElement("div", { className: "notification green flex-between-start mt-4" }, c.a.createElement("div", { className: "notification__content", dangerouslySetInnerHTML: { __html: Object(Ct.get)(u, "APP_SWAP_BOX.content") } })))) } var Eo = a(205),
                ho = a.n(Eo);

            function go(e) { var t, a, n = Object(i.b)(),
                    r = Object(i.c)((function(e) { return e.tx })).txConfirming,
                    l = Object(i.c)((function(e) { return e.global })).chainId;

                function s() { return (s = Object(ft.a)(j.a.mark((function t() { return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e.srcToken.address !== X.C[l]) { t.next = 3; break } return n(W(e.recipient, +e.srcAmount)), t.abrupt("return");
                                case 3:
                                    n(G(e.srcToken, e.recipient, +e.srcAmount));
                                case 4:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) } return c.a.createElement(se, { customTitle: "Transfer Confirm", className: "md-small transfer-confirm ".concat(r ? "disabled-btn" : ""), onSubmit: function() { return s.apply(this, arguments) }, submitText: "Confirm", close: e.close, content: c.a.createElement("div", { className: "transfer-confirm" }, c.a.createElement("div", { className: "transfer-confirm__header" }, c.a.createElement("div", { className: "transfer-confirm__name" }, c.a.createElement(ho.a, { md5: e.recipient, className: "circle-radius mr-2", size: 40 })), c.a.createElement("div", { className: "fs-3 transfer-confirm__wallet" }, c.a.createElement("div", null, null === (t = e.destWallet) || void 0 === t ? void 0 : t.name), c.a.createElement("div", null, e.recipient))), c.a.createElement("div", { className: "transfer-confirm__info flex-between-start mb-3" }, c.a.createElement("div", { className: "transfer-confirm__info--title" }, "Amount to Transfer"), c.a.createElement("div", { className: "align-right" }, c.a.createElement("div", null, e.srcAmount, " ", e.srcToken.symbol), (null === (a = e.srcToken) || void 0 === a ? void 0 : a.price) && c.a.createElement("div", { className: "text-gray-4 fs-3 mt-1" }, "\u2248", " ", Object(oe.m)(Object(oe.z)(e.srcAmount, e.srcToken.price), 6), " ", "USD"))), c.a.createElement(Wc, { gasPrice: e.gasPrice, ethPrice: e.ethPrice, estimatedGas: e.estimatedGas, onlyGasText: !0 })) }) } var Oo, yo, jo = function() { var e = Object(i.b)(),
                    t = Object(vc.i)(),
                    a = t.tokenAddr,
                    n = t.recipientAddr,
                    l = Object(i.c)((function(e) { return e.account })),
                    s = l.address,
                    o = l.watchAddress,
                    u = l.watchWallets,
                    m = Object(i.c)((function(e) { return e.global })),
                    d = m.gasPrices,
                    f = m.selectedGasPrice,
                    p = m.chainId,
                    b = Vc(p),
                    v = b.allTokens,
                    E = b.isFetchingTokens,
                    h = Object(r.useState)(n),
                    g = Object(Z.a)(h, 2),
                    O = g[0],
                    y = g[1],
                    k = Object(r.useState)(X.g.TRANSFER_ETH),
                    w = Object(Z.a)(k, 2),
                    x = w[0],
                    N = w[1],
                    _ = po(!0),
                    T = _.state,
                    A = _.setState,
                    S = Object(oe.b)(d[f], x),
                    C = o && o !== s,
                    R = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[p].url)) }), [p]);
                Object(r.useEffect)((function() { A.setBalanceLoading(E) }), [E, A]), Object(r.useEffect)((function() { A.setGasFee(S) }), [S, A]), Object(r.useEffect)((function() { y(n) }), [n]), Object(r.useEffect)((function() { if (0 !== v.length) { var e = a || (T.srcToken ? T.srcToken.address : X.C[p]),
                            t = v.find((function(t) { return t.address === e }));
                        A.setSrcToken(t) } }), [v, p]), Object(r.useEffect)((function() { L() }), [T.srcToken, o, O, p]), Object(r.useEffect)((function() { A.setFormError("") }), [O, T.srcAmount]); var P = Object(Gs.a)((function(e) { L(e) }), 400);

                function L(e) { return I.apply(this, arguments) }

                function I() { return (I = Object(ft.a)(j.a.mark((function e(t) { var a; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (o && T.srcToken) { e.next = 2; break } return e.abrupt("return");
                                case 2:
                                    if (a = X.g.TRANSFER_ETH, T.srcToken.address === X.C[p]) { e.next = 9; break } return A.setGasLoading(!0), e.next = 7, Object(fe.b)(R, X.a.TRANSFER_TOKEN, { params: { tokenAddr: T.srcToken.address, recipient: O, amount: Object(oe.D)(t || T.srcAmount, T.srcToken.decimals) }, txParams: { address: o } });
                                case 7:
                                    a = e.sent, A.setGasLoading(!1);
                                case 9:
                                    N(a);
                                case 10:
                                case "end":
                                    return e.stop() } }), e) })))).apply(this, arguments) }

                function M() { return (M = Object(ft.a)(j.a.mark((function t() { var a, n, r, c, l; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (a = "", s) { t.next = 4; break } return e(Jn("account", { isOpened: !0 })), t.abrupt("return");
                                case 4:
                                    if (!C) { t.next = 6; break } return t.abrupt("return");
                                case 6:
                                    if (T.srcToken ? T.srcToken.balance < T.srcAmount ? a = "Insufficient balance for the transfer" : T.srcAmount ? O && (Object(oe.x)(O) && (n = O), n || (a = "Invalid address")) : a = "Please enter a valid amount to transfer" : a = "Please select token to transfer", "" === a) { t.next = 10; break } return A.setFormError(a), t.abrupt("return");
                                case 10:
                                    r = Object(oe.g)(v, "address", X.C[p]), c = d[f], l = Object(Ct.get)(r, "quotes.usd.price", 0), ce.show(go, { srcToken: T.srcToken, srcAmount: T.srcAmount, recipient: n, destWallet: u.find((function(e) { return e.address === n })), estimatedGas: x, gasPrice: c, ethPrice: l });
                                case 14:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) } return c.a.createElement("div", { className: "swap container" }, c.a.createElement("div", { className: "block slide-up" }, c.a.createElement("div", { className: "block__title" }, "Transfer"), !T.srcToken && c.a.createElement("div", { className: "align-center" }, c.a.createElement(Zc, null)), T.srcToken && c.a.createElement("div", { className: "block__content" }, c.a.createElement("button", { className: "btn btn--tx", onClick: function() { return ce.show(uo, { estimatedGasLimit: x, slippageOption: !1 }) } }, c.a.createElement(io, { stroke: "#fff" })), c.a.createElement(Js, { state: T, setState: A, srcInputDebounced: P }), c.a.createElement("div", { className: "mt-6" }, c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-none input-dest-address", type: "text", placeholder: "Recipient Address/ENS", value: O, onChange: function(e) { y(e.target.value) } }))), c.a.createElement("button", { className: "btn btn--gradient mt-8", disabled: T.isGasLoading || "" !== T.formError || C, onClick: function() { return M.apply(this, arguments) } }, T.isGasLoading && c.a.createElement(c.a.Fragment, null, c.a.createElement("img", { className: "mr-1", style: { width: 20 }, src: Yl.a, alt: "Loading..." }), "Loading"), !T.isGasLoading && (o ? "Transfer" : "Connect Wallet")), "" !== T.formError && c.a.createElement("div", { className: "input-error mt-2 slide-up align-center" }, T.formError), o && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "swap__info mb-3 mt-7 mr-2" }, c.a.createElement("div", null, "Recent Contacts"), c.a.createElement("div", { className: "swap__info-more", onClick: function() { e(Jn("contacts", { isOpened: !0, onlyContact: !0 })) } }, "MORE")), c.a.createElement("div", null, u.slice(0, X.G.MAX_RECENT_CONTACTS).map((function(e) { return c.a.createElement("div", { className: "flex-center swap__address ".concat(e.address === o === s && "disabled"), key: e.address, onClick: function() { return y(e.address) } }, c.a.createElement(ho.a, { email: e.address, className: "circle-radius mr-3", size: 40 }), c.a.createElement("div", null, c.a.createElement("div", { className: "mb-1 fs-3" }, e.name), c.a.createElement("div", { className: "text-grey fs-2 address" }, Object(oe.h)(e.address, 20, -10)))) }))))))) };

            function ko(e) { return c.a.createElement("div", { className: "earn__welcome" }, c.a.createElement("div", { className: "block" }, c.a.createElement("div", { className: "block__title flex-center", style: { display: "block" } }, c.a.createElement("span", null, "Earn interest on stable coins")), c.a.createElement("div", { className: "earn__welcome" }, c.a.createElement("div", { className: "earn__welcome__item earn__welcome__item--illus-1" }, c.a.createElement("p", null, "Supply tokens to earn interest (APY). Withdraw anytime.")), c.a.createElement("div", { className: "earn__welcome__item earn__welcome__item--illus-2 custom-position-200" }, c.a.createElement("p", null, "Earn bonus rewards with auto-farming of governance tokens on top of interest from supplying.")), c.a.createElement("div", { className: "earn__welcome__item earn__welcome__item--illus-3 custom-position-220" }, c.a.createElement("p", null, "Don\u2019t worry if you don\u2019t have the required token. Easily swap from any token to the required token before supplying.")), c.a.createElement("div", { className: "earn__welcome__item earn__welcome__item--illus-4" }, c.a.createElement("p", null, "Swap and supply in a single transaction to save on gas fees."))), c.a.createElement("div", null, c.a.createElement("button", { className: "btn", style: { width: 300, margin: "40px auto" }, onClick: e.onClose }, "Explore")))) } var wo = ["svgRef", "title"];

            function xo() { return (xo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function No(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var _o = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = No(e, wo); return c.a.createElement("svg", xo({ id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 254 254", style: { enableBackground: "new 0 0 254 254" }, xmlSpace: "preserve", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Oo || (Oo = c.a.createElement("style", { type: "text/css" }, "\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#E84142;}\n\t.st1{fill:#FFFFFF;}\n")), yo || (yo = c.a.createElement("g", null, c.a.createElement("circle", { className: "st0", cx: 127, cy: 127, r: 127 }), c.a.createElement("path", { className: "st1", d: "M171.8,130.3c4.4-7.6,11.5-7.6,15.9,0l27.4,48.1c4.4,7.6,0.8,13.8-8,13.8h-55.2c-8.7,0-12.3-6.2-8-13.8 L171.8,130.3z M118.8,37.7c4.4-7.6,11.4-7.6,15.8,0l6.1,11L155.1,74c3.5,7.2,3.5,15.7,0,22.9l-48.3,83.7 c-4.4,6.8-11.7,11.1-19.8,11.6H46.9c-8.8,0-12.4-6.1-8-13.8L118.8,37.7z" })))) },
                To = c.a.forwardRef((function(e, t) { return c.a.createElement(_o, xo({ svgRef: t }, e)) }));
            a.p;

            function Ao() { var e = Object(i.b)(),
                    t = Object(r.useState)(!0),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1],
                    s = Object(i.c)((function(e) { return e.global })),
                    o = s.chainId,
                    u = s.isShowWelcomeEarn,
                    m = s.marketBase,
                    d = s.currencyRate;
                Object(r.useEffect)((function() { l(!0) }), [o]); var f = Object(i.c)((function(e) { return e.account })).depositingTokens,
                    p = Object(r.useMemo)((function() { var e = {}; return f.length ? (f.forEach((function(t) { t.balances.forEach((function(t) { e[t.address] ? e[t.address].totalSupply += t.value : e[t.address] = { totalSupply: t.value || 0 } })) })), e) : e }), [f]),
                    b = Vc(o).stakedTokens,
                    v = Object(r.useState)(""),
                    E = Object(Z.a)(v, 2),
                    h = E[0],
                    g = E[1],
                    O = Object(r.useMemo)((function() { if (!b.length) return []; var e = b.filter((function(e) { return Object(oe.y)(e, h) })); return e = e.sort((function(e, t) { return t.bestAPY - e.bestAPY })), n && e.length > 10 ? e.slice(0, 10) : (n && l(!1), e) }), [n, h, b]); return u ? c.a.createElement(ko, { onClose: function() { e({ type: zn, payload: !1 }) } }) : c.a.createElement("div", { className: "earn" }, c.a.createElement("div", { className: "block" }, c.a.createElement("div", { className: "block__title" }, "Earn", c.a.createElement("div", { className: "input-container" }, c.a.createElement("input", { onChange: function(e) { g(e.target.value.toLowerCase()) }, className: "input", type: "text", placeholder: "Search" }), c.a.createElement("div", { className: "input-tool" }, c.a.createElement(cs, { stroke: "#fff" })))), c.a.createElement("div", { className: "block__content slide-up" }, o === X.d.AVALANCHE ? c.a.createElement("div", { className: "mt-10 d-flex align-items-center" }, c.a.createElement(To, { width: "100", opacity: "0.5" }), c.a.createElement("div", { className: "ml-10 font-nm opacity-1" }, c.a.createElement("p", null, "Coming soon"))) : c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "overflow-auto" }, c.a.createElement("div", { className: "earn__description mb-3 fw-3" }, "Select the token you wish to ", c.a.createElement("strong", null, "supply"), " to", " ", c.a.createElement("strong", null, "earn interest"), ". Interest rate may change as per market dynamics."), c.a.createElement("div", { className: "mt-2 earn__item--label" }, c.a.createElement("div", { className: "earn__item-token label mb-3" }, c.a.createElement("div", { className: "earn__item-token__field", style: { width: "13%", paddingLeft: 50 } }, "TOKEN"), c.a.createElement("div", { className: "earn__item-token__field justify-end", style: { width: "14%" } }, "INTEREST"), c.a.createElement("div", { className: "earn__item-token__field justify-end" }, "TOTAL SUPPLY"), c.a.createElement("div", { className: "earn__item-token__field justify-end" }, "LIQUIDITY", " ", c.a.createElement(Kc.a, { title: c.a.createElement("p", null, c.a.createElement("strong", { style: { color: "#fe6d40" } }, "WARNING"), " ", "- Low liquidity indicates not enough supply for users to immediately withdraw funds. You may have to wait till liquidity is restored."), arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer ml-1", src: Bc.a, alt: "Info" }))), c.a.createElement("div", { className: "earn__item-token__field justify-end" }, "YOUR", c.a.createElement("br", null), "SUPPLY")), O.map((function(e, t) { var a = Object(Ct.get)(p, "".concat(e.address, ".totalSupply"), "-"),
                        n = +Object(oe.j)(Object(Ct.get)(e, "bestPlatform.liquidity", 0), e.decimals) < X.z; return c.a.createElement(Ec.b, { className: "earn__item-token mb-3", key: e.address, to: "/supply/".concat(e.address) }, c.a.createElement("div", { className: "earn__item-token__field", style: { width: "13%" } }, c.a.createElement(Nl, { tokenURL: e.logo }), c.a.createElement("div", { className: "earn__item-token--info-name ml-2" }, e.symbol)), c.a.createElement("div", { className: "earn__item-token__field justify-end", style: { width: "14%" } }, c.a.createElement("div", null, Object(oe.m)(e.bestAPY, 2), "%")), c.a.createElement("div", { className: "earn__item-token__field justify-end" }, c.a.createElement("div", null, Object(oe.k)(Object(oe.C)(+Object(oe.j)(Object(Ct.get)(e, "bestPlatform.totalSupply", 0), e.decimals) / d[m]), m))), c.a.createElement("div", { className: "earn__item-token__field justify-end" }, c.a.createElement("div", { className: n ? "text-red" : "" }, Object(oe.k)(Object(oe.C)(+Object(oe.j)(Object(Ct.get)(e, "bestPlatform.liquidity", 0), e.decimals) / d[m]), m))), c.a.createElement("div", { className: "earn__item-token__field justify-end" }, c.a.createElement("div", null, Object(Ct.isNumber)(a) ? Object(oe.k)(Object(oe.m)(a / d[m], 2), m) : a))) })), n && O.length >= 0 && c.a.createElement("button", { onClick: function() { l(!1) }, className: "btn btn--show-all" }, "LOAD MORE"))), c.a.createElement("div", { className: "notification green mt-5 w-100" }, "Don\u2019t worry if you don\u2019t have an eligible token. You can swap to the required token on the next screen."))))) } var So, Co = a(620),
                Ro = a.n(Co),
                Po = ["svgRef", "title"];

            function Lo() { return (Lo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Io(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Mo, Do = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Io(e, Po); return c.a.createElement("svg", Lo({ width: 56, height: 56, viewBox: "0 0 56 56", ref: t }, n), a ? c.a.createElement("title", null, a) : null, So || (So = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M42.85 13.15c8.201 8.202 8.201 21.498 0 29.7-8.202 8.201-21.498 8.201-29.7 0-8.201-8.202-8.201-21.498 0-29.7 8.202-8.201 21.498-8.201 29.7 0M16.45 29.65L29.65 16.45", transform: "translate(-342.000000, -453.000000) translate(328.000000, 439.000000) translate(14.000000, 14.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M26.35 32.949L26.35 39.548 32.949 39.548M39.55 26.35L26.35 39.55M23.051 16.45L29.65 16.45 29.65 23.049", transform: "translate(-342.000000, -453.000000) translate(328.000000, 439.000000) translate(14.000000, 14.000000)" }))))))) },
                Fo = c.a.forwardRef((function(e, t) { return c.a.createElement(Do, Lo({ svgRef: t }, e)) })),
                Bo = (a.p, ["svgRef", "title"]);

            function Ko() { return (Ko = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Wo(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Go, Ho = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Wo(e, Bo); return c.a.createElement("svg", Ko({ width: 48, height: 28, viewBox: "0 0 48 28", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Mo || (Mo = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M18.667 18.667L9.333 18.667M18.923 37.287L9.333 37.333M18.923 28L4.667 28M30.604 29.734l-3.061 7.655c-.815 2.04 1.379 3.974 3.299 2.908l19.693-10.941c1.062-.59 1.062-2.117 0-2.707L30.842 15.708c-1.92-1.066-4.116.868-3.3 2.907l3.062 7.656c.446 1.108.446 2.35 0 3.463z", transform: "translate(-505.000000, -467.000000) translate(488.000000, 439.000000) translate(13.000000, 14.000000)" }))))))) },
                Vo = c.a.forwardRef((function(e, t) { return c.a.createElement(Ho, Ko({ svgRef: t }, e)) })),
                zo = (a.p, ["svgRef", "title"]);

            function Uo() { return (Uo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Yo(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var qo, Qo = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Yo(e, zo); return c.a.createElement("svg", Uo({ width: 56, height: 56, viewBox: "0 0 56 56", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Go || (Go = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M40.25 20.125h0c0 11.116-9.01 20.125-20.125 20.125h0C9.009 40.25 0 31.24 0 20.125h0C0 9.009 9.01 0 20.125 0h0C31.241 0 40.25 9.01 40.25 20.125zM14.535 8.944L14.535 31.306", transform: "translate(-661.000000, -453.000000) translate(648.000000, 439.000000) translate(13.000000, 14.000000) translate(7.666667, 7.666667)" }), c.a.createElement("path", { d: "M8.944 15.653L14.535 8.944 20.125 15.653M25.715 21.243L25.715 31.306M20.125 26.833L25.715 20.125 31.306 26.833", transform: "translate(-661.000000, -453.000000) translate(648.000000, 439.000000) translate(13.000000, 14.000000) translate(7.666667, 7.666667)" })))))))) },
                Xo = c.a.forwardRef((function(e, t) { return c.a.createElement(Qo, Uo({ svgRef: t }, e)) })),
                Jo = (a.p, ["svgRef", "title"]);

            function Zo() { return (Zo = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function $o(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var ei = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = $o(e, Jo); return c.a.createElement("svg", Zo({ width: 56, height: 56, viewBox: "0 0 56 56", ref: t }, n), a ? c.a.createElement("title", null, a) : null, qo || (qo = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeOpacity: .95, transform: "translate(-815.000000, -453.000000) translate(802.000000, 439.000000) translate(13.000000, 14.000000) translate(10.541667, 10.541667)" }, c.a.createElement("path", { strokeLinecap: "round", d: "M35.458 6.648V28.81c0 3.672-2.976 6.648-6.648 6.648H6.648C2.977 35.458 0 32.482 0 28.81V6.648" }), c.a.createElement("circle", { cx: 12.189, cy: 27.702, r: 5.04 }), c.a.createElement("circle", { cx: 23.27, cy: 23.27, r: 5.04 }), c.a.createElement("circle", { cx: 7.757, cy: 14.405, r: 5.04 }), c.a.createElement("circle", { cx: 27.702, cy: 12.189, r: 5.04 }), c.a.createElement("circle", { cx: 16.621, cy: 5.54, r: 5.04 })))))))) },
                ti = c.a.forwardRef((function(e, t) { return c.a.createElement(ei, Zo({ svgRef: t }, e)) })),
                ai = (a.p, { dots: !0, infinite: !0, speed: 500, autoplay: !0, autoplaySpeed: 3e3, pauseOnHover: !0, slidesToShow: 1, slidesToScroll: 1 });

            function ni() { var e = Object(i.c)((function(e) { return e.global })).exploreData; return c.a.createElement("div", { className: "explore" }, c.a.createElement("div", { className: "explore__title" }, "Explore"), c.a.createElement("div", { className: "explore__blocks" }, c.a.createElement("div", { className: "explore__block left" }, e.banners.length > 0 && c.a.createElement("div", { className: "explore__banner slide-up" }, c.a.createElement(Ro.a, ai, e.banners.map((function(e, t) { return c.a.createElement("div", { key: t }, c.a.createElement("div", { className: "explore__banner--item", onClick: function() { window.open(e.url) }, style: { backgroundImage: 'url("'.concat(e.imageUrl, '")'), cursor: "pointer" } }, c.a.createElement("span", null))) })))), c.a.createElement("div", { className: "explore__actions mt-8" }, c.a.createElement(Ec.b, { className: "explore__action", to: X.K.SWAP }, c.a.createElement("div", { className: "explore__action--item" }, c.a.createElement(Fo, null)), c.a.createElement("div", null, "Swap")), c.a.createElement(Ec.b, { className: "explore__action", to: "/transfer" }, c.a.createElement("div", { className: "explore__action--item" }, c.a.createElement(Vo, null)), c.a.createElement("div", null, "Transfer")), c.a.createElement(Ec.b, { className: "explore__action", to: X.K.EARN }, c.a.createElement("div", { className: "explore__action--item" }, c.a.createElement(Xo, null)), c.a.createElement("div", null, "Earn")), c.a.createElement(Ec.b, { className: "explore__action", to: X.K.KRYSTAL_POINTS }, c.a.createElement("div", { className: "explore__action--item" }, c.a.createElement(ti, null)), c.a.createElement("div", null, "Krystal Points"))), e.partners.length > 0 && c.a.createElement("div", { className: "explore__partner slide-up" }, c.a.createElement("div", { className: "explore__partner-title" }, "Supported Platforms"), c.a.createElement("div", { className: "explore__partner-content" }, e.partners.map((function(e, t) { return c.a.createElement("a", { className: "explore__partner-img", href: e.url, rel: "noopener noreferrer", target: "_blank", key: t }, c.a.createElement("img", { src: e.imageUrl, alt: "partner" })) }))))))) } var ri = a(376),
                ci = a.n(ri),
                li = a(377),
                si = a.n(li),
                oi = a(1299);

            function ii() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })),
                    a = t.marketBase,
                    n = t.chainId,
                    c = Object(r.useMemo)((function() { return X.b[n] }), [n]),
                    l = Object(r.useCallback)((function(t) { e({ type: Gn, payload: t }) }), [e]); return Object(r.useEffect)((function() { if (!c.includes(a)) { var e = "usd"; switch (n) {
                            case X.d.BSC:
                                e = "bnb"; break;
                            case X.d.MAINNET:
                                e = "eth"; break;
                            case X.d.POLYGON:
                                e = "matic"; break;
                            default:
                                e = "eth" }
                        l(e) } }), [n, c, l, a]), { currencies: X.b[n], switchCurrency: l } }

            function ui(e) { var t = e.order,
                    a = e.orderBy,
                    n = e.onRequestSort; return c.a.createElement(ll.a, null, c.a.createElement(sl.a, null, [{ id: "tokenSymbol", label: "Token", align: "left" }, { id: "price", label: "Price", align: "right" }, { id: "priceChange", label: "24h Change", align: "right" }].map((function(e) { return c.a.createElement(rl.a, { key: e.id, align: e.align, style: { paddingLeft: "balance" === e.id ? 35 : "" }, sortDirection: a === e.id && t }, c.a.createElement(ol.a, { active: a === e.id, direction: a === e.id ? t : "asc", onClick: function() { return t = e.id, void n(t); var t } }, e.label, a !== e.id && c.a.createElement(pl, null), a === e.id && "asc" === t && c.a.createElement(Ol, null), a === e.id && "desc" === t && c.a.createElement(xl, null))) })), c.a.createElement(rl.a, { key: "chart", align: "center" }, "Chart (7d)"), c.a.createElement(rl.a, { key: "favorite", align: "center", className: "th-favourite" }, c.a.createElement("img", { className: "pointer", src: e.favoriteSort ? si.a : ci.a, alt: "Favorite", onClick: e.toggleFavoriteSort })))) } var mi = Object(el.a)((function(e) { return Object(tl.a)({ root: { width: "100%" }, paper: { width: "100%", marginBottom: e.spacing(2) }, table: { minWidth: 540 }, visuallyHidden: { border: 0, clip: "rect(0 0 0 0)", height: 1, margin: -1, overflow: "hidden", padding: 0, position: "absolute", top: 20, width: 1 } }) }));

            function di(e) { var t = mi(),
                    a = Object(vc.g)(),
                    n = ii(),
                    r = n.currencies,
                    l = n.switchCurrency; return c.a.createElement("div", { className: t.root }, c.a.createElement("div", { className: "market-currency" }, c.a.createElement("div", null, "Market"), c.a.createElement("div", { className: "currency" }, r && r.map((function(t) { return c.a.createElement(oi.a, { key: t, className: e.marketBase === t ? "active" : "", onClick: function() { l(t) } }, t.toUpperCase()) })))), c.a.createElement(cl.a, null, c.a.createElement(al.a, { className: t.table, "aria-labelledby": "tableTitle", size: "medium", "aria-label": "enhanced table" }, c.a.createElement(ui, { classes: t, order: e.order, orderBy: e.orderBy, onRequestSort: e.handleRequestSort, favoriteSort: e.favoriteSort, toggleFavoriteSort: e.toggleFavoriteSort }), c.a.createElement(nl.a, null, !e.isLoading && e.filteredTokens.map((function(t, n) { var r = e.favoriteTokens.includes(t.address),
                        l = 0; try { l = Object(oe.B)(t.quotes[e.marketBase].price24hChangePercentage, 2) } catch (s) { console.log(s, t) } return c.a.createElement(sl.a, { hover: !0, role: "checkbox", tabIndex: -1, key: t.address, onClick: function() { return e = t.address, void a.push("/token/market/".concat(e)); var e } }, c.a.createElement(rl.a, { align: "left" }, c.a.createElement("div", { className: "flex-start" }, c.a.createElement(Nl, { tokenURL: Object(oe.n)(t.logo) }), c.a.createElement("div", { className: "ml-2 align-left token-name" }, t.symbol))), c.a.createElement(rl.a, { align: "right" }, c.a.createElement("div", { className: "align-right" }, c.a.createElement("div", null, Object(oe.k)(Object(oe.m)(t.quotes[e.marketBase].price, 2), e.marketBase)))), c.a.createElement(rl.a, { align: "right" }, c.a.createElement("div", { className: l > 0 ? "price-up" : l < 0 ? "price-down" : "price-no-change" }, l > 0 ? "+" : "", l, "%")), c.a.createElement(rl.a, { align: "center" }, "usd" === e.marketBase && t.chartData && c.a.createElement(Sl, { data: t.chartData, color: Object(oe.t)(Number(l)) })), c.a.createElement(rl.a, { align: "center", onClick: function(a) { return e.handleFavorite(a, t.address, r) } }, c.a.createElement("img", { className: "pointer", src: r ? si.a : ci.a, alt: "Favorite" }))) })))))) }

            function fi() { var e = Object(i.b)(),
                    t = Object(vc.g)(),
                    a = Object(i.c)((function(e) { return e.account })),
                    n = a.address,
                    l = a.watchAddress,
                    s = Object(i.c)((function(e) { return e.global })),
                    o = s.isHideBalance,
                    u = s.marketBase,
                    m = Vc(s.chainId),
                    d = m.favoriteTokens,
                    f = m.isFetchingTokens,
                    p = m.allTokens,
                    b = Object(r.useState)(""),
                    v = Object(Z.a)(b, 2),
                    E = v[0],
                    h = v[1],
                    g = Object(r.useState)(!1),
                    O = Object(Z.a)(g, 2),
                    y = O[0],
                    j = O[1],
                    k = Object(r.useState)(!1),
                    w = Object(Z.a)(k, 2),
                    x = w[0],
                    N = w[1],
                    _ = Object(r.useState)(!0),
                    T = Object(Z.a)(_, 2),
                    A = T[0],
                    S = T[1],
                    C = Object(r.useState)("desc"),
                    R = Object(Z.a)(C, 2),
                    P = R[0],
                    L = R[1],
                    I = Object(r.useState)("value"),
                    M = Object(Z.a)(I, 2),
                    D = M[0],
                    F = M[1],
                    B = new URLSearchParams(t.location.search),
                    K = Object(r.useMemo)((function() { return B.get("chartType") }), [B]),
                    W = Object(r.useMemo)((function() { var e = p.filter((function(e) { return Object(oe.y)(e, E) && (!y || d.includes(e.address)) })),
                            t = D; switch (D) {
                            case "priceChange":
                                t = "quotes.".concat(u, ".price24hChangePercentage"); break;
                            case "price":
                                t = "quotes.".concat(u, ".price") } return Ml()(e, (function(e) { return Object(Ct.get)(e, t, 0) }), [P]) }), [y, d, u, P, D, E, p]); return c.a.createElement("div", { className: "market-screen grid" }, c.a.createElement("div", { className: "market" }, c.a.createElement("div", { className: "market__header" }, c.a.createElement("div", { className: "page-title" }, "Market"), c.a.createElement("div", { className: "market__header-content" }, c.a.createElement("div", { className: "input-container", onClick: function() { N(!0) } }, c.a.createElement("input", { onChange: function(e) { h(e.target.value.toLowerCase()) }, className: "input ".concat(x && "input--expanded"), type: "text", disabled: !!K, placeholder: "Search" }), c.a.createElement("div", { className: "input-tool" }, c.a.createElement(cs, { stroke: "#fff" }))))), c.a.createElement("div", { className: "market__content-body card" }, c.a.createElement(c.a.Fragment, null, c.a.createElement(di, { filteredTokens: A && W.length >= 10 ? W.slice(0, 10) : W, chartData: [], isLoading: f, marketBase: u, isHideBalance: o, handleFavorite: function(t, a, n) { t.stopPropagation(), e(n ? tn(a) : en(a)) }, favoriteTokens: d, favoriteSort: y, toggleFavoriteSort: function() { j(!y) }, handleRequestSort: function(e) { var t;
                        K || (L(D === (t = e) && "asc" === P ? "desc" : "asc"), F(t)) }, order: P, orderBy: D }), !f && !K && A && W.length >= 10 && c.a.createElement("button", { onClick: function() { S(!1) }, className: "btn btn--show-all" }, "Show All")), f && c.a.createElement("div", { className: "align-center mt-5 mb-5" }, c.a.createElement(Zc, null)))), c.a.createElement("div", { className: "market-screen__right" }, c.a.createElement("div", { className: "market-screen__right--header" }, (n || l) && c.a.createElement(c.a.Fragment, null, c.a.createElement(Ec.b, { to: "/transfer", className: "btn btn--small" }, "Transfer"), c.a.createElement("button", { className: "btn btn--small", onClick: function() { ce.show(zl, { close: ce.close }) } }, "Receive"), c.a.createElement("button", { className: "btn btn--small", onClick: function() { ce.show(ql) } }, "Add Token"))), c.a.createElement("div", { className: "market-screen__right--content" }, c.a.createElement("button", { className: "btn btn--filter__top-gainers ".concat(K === X.N && "active"), onClick: function() { K !== X.N ? t.push(X.K.MARKET + "?chartType=" + X.N) : t.push(X.K.MARKET) } }, "Top Gainers"), c.a.createElement("button", { className: "btn btn--filter__top-losers ".concat(K === X.O && "active"), onClick: function() { K !== X.O ? t.push(X.K.MARKET + "?chartType=" + X.O) : t.push(X.K.MARKET) } }, "Top Losers"), c.a.createElement("button", { className: "btn btn--filter__trending ".concat(K === X.Q && "active"), onClick: function() { K !== X.Q ? t.push(X.K.MARKET + "?chartType=" + X.Q) : t.push(X.K.MARKET) } }, "Trending")))) } var pi, bi = function() { return c.a.createElement("div", { className: "tracker" }, "Tracker") },
                vi = ["svgRef", "title"];

            function Ei() { return (Ei = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function hi(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var gi, Oi = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = hi(e, vi); return c.a.createElement("svg", Ei({ width: 18, height: 18, viewBox: "0 0 18 18", ref: t }, n), a ? c.a.createElement("title", null, a) : null, pi || (pi = c.a.createElement("g", { fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("g", { stroke: "current" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-21.000000, -442.000000) translate(18.000000, 110.000000) translate(0.000000, 329.000000) translate(4.000000, 4.000000)" }, c.a.createElement("path", { d: "M16 3v10c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V3" }), c.a.createElement("circle", { cx: 5.5, cy: 12.5, r: 2.5 }), c.a.createElement("circle", { cx: 10.5, cy: 10.5, r: 2.5 }), c.a.createElement("circle", { cx: 3.5, cy: 6.5, r: 2.5 }), c.a.createElement("circle", { cx: 12.5, cy: 5.5, r: 2.5 }), c.a.createElement("circle", { cx: 7.5, cy: 2.5, r: 2.5 })))))))) },
                yi = c.a.forwardRef((function(e, t) { return c.a.createElement(Oi, Ei({ svgRef: t }, e)) })),
                ji = (a.p, ["svgRef", "title"]);

            function ki() { return (ki = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function wi(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var xi, Ni = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = wi(e, ji); return c.a.createElement("svg", ki({ width: 13, height: 13, viewBox: "0 0 13 13", ref: t }, n), a ? c.a.createElement("title", null, a) : null, gi || (gi = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-166 -147) translate(17 61) translate(148 85)" }, c.a.createElement("rect", { width: 8.964, height: 8.964, x: 4.482, y: 4.482, stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: .96, rx: 1.28 }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: .96, d: "M4.482 10.885h-1.28c-.708 0-1.281-.574-1.281-1.281V3.201c0-.707.573-1.28 1.28-1.28h6.403c.707 0 1.28.573 1.28 1.28v1.28" }), c.a.createElement("path", { d: "M0 0H15.366V15.366H0z" }))))))) },
                _i = c.a.forwardRef((function(e, t) { return c.a.createElement(Ni, ki({ svgRef: t }, e)) })),
                Ti = (a.p, ["svgRef", "title"]);

            function Ai() { return (Ai = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Si(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ci, Ri = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Si(e, Ti); return c.a.createElement("svg", Ai({ width: 12, height: 12, viewBox: "0 0 12 12", ref: t }, n), a ? c.a.createElement("title", null, a) : null, xi || (xi = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M5.702 6.743c.694.694.694 1.82 0 2.514-.694.695-1.82.695-2.515 0-.694-.694-.694-1.82 0-2.514.695-.695 1.82-.695 2.515 0M12.813 3.187c.694.695.694 1.82 0 2.515-.695.694-1.82.694-2.515 0-.694-.694-.694-1.82 0-2.515.694-.694 1.82-.694 2.515 0M12.813 10.298c.694.694.694 1.82 0 2.515-.695.694-1.82.694-2.515 0-.694-.695-.694-1.82 0-2.515.694-.694 1.82-.694 2.515 0M6.027 7.207L9.973 5.233M6.027 8.793L9.973 10.767", transform: "translate(-114 -349) translate(112 347)" })))))) },
                Pi = c.a.forwardRef((function(e, t) { return c.a.createElement(Ri, Ai({ svgRef: t }, e)) })),
                Li = (a.p, a(1300)),
                Ii = a(1301),
                Mi = a(1302),
                Di = a(1303);

            function Fi(e) { var t = Object(r.useState)("Click to Copy"),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1]; return c.a.createElement(se, { customTitle: "SHARE YOUR REFFERAL", noPanel: !0, className: "share-social-modal", content: c.a.createElement("div", null, c.a.createElement("h5", { className: "share-social-modal__title" }, "Share this link via"), c.a.createElement(Li.a, { url: e.url, title: e.content, className: "share-social-modal__btn-social share-social-modal__btn-social--telegram" }, c.a.createElement("span", null)), c.a.createElement(Ii.a, { url: e.url, title: e.content, className: "share-social-modal__btn-social share-social-modal__btn-social--twitter" }, c.a.createElement("span", null)), c.a.createElement(Mi.a, { url: e.url, title: e.content, separator: ":: ", className: "share-social-modal__btn-social share-social-modal__btn-social--whatsapp" }, c.a.createElement("span", null)), c.a.createElement(Di.a, { url: e.url, quote: e.content, className: "share-social-modal__btn-social share-social-modal__btn-social--facebook" }, c.a.createElement("span", null)), c.a.createElement("h5", { className: "share-social-modal__title share-social-modal__title--secondary" }, "Or copy Link"), c.a.createElement("div", { className: "share-social-modal__input-container" }, c.a.createElement("input", { className: "share-social-modal__input", type: "text", placeholder: "0", value: e.url }), c.a.createElement("div", { className: "share-social-modal__input-tool" }, c.a.createElement(Kc.a, { title: n, arrow: !0, placement: "top" }, c.a.createElement("div", { className: "share-social-modal__input-copy", onClick: function() { navigator.clipboard.writeText(e.url), l("Copied!"), setTimeout((function() { l("Click to Copy") }), 2e3) } }, "Copy"))))) }) }

            function Bi() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.account })),
                    a = t.apiToken,
                    n = t.wallet,
                    l = t.address,
                    s = t.devicePath,
                    o = t.type,
                    u = t.currentAddressLogedInKP,
                    m = Object(i.c)((function(e) { return e.global })).chainId,
                    d = Object(r.useState)(),
                    f = Object(Z.a)(d, 2),
                    p = f[0],
                    b = f[1],
                    v = Object(r.useState)(!1),
                    E = Object(Z.a)(v, 2),
                    h = E[0],
                    g = E[1];

                function O() { return (O = Object(ft.a)(j.a.mark((function t() { var a, r, c, i; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n) { t.next = 3; break } return e(Jn("account", { isOpened: !0 })), t.abrupt("return");
                                case 3:
                                    return a = Math.floor(Date.now() / 1e3), r = "".concat(l, "_").concat(a), t.next = 7, n.signMessage(r, "trezor" === o ? s : l);
                                case 7:
                                    if (c = t.sent) { t.next = 11; break } return ce.show(se, { title: "Error", content: "Attempt to sign message failed" }), t.abrupt("return");
                                case 11:
                                    return t.next = 13, Vt(X.t[m], l, a, c);
                                case 13:
                                    if (i = t.sent) { t.next = 17; break } return ce.show(se, { title: "Error", content: "Attempt to login failed" }), t.abrupt("return");
                                case 17:
                                    e(tt(i));
                                case 18:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }
                Object(r.useEffect)((function() {
                    function t() { return (t = Object(ft.a)(j.a.mark((function t() { var n, r, c; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return g(!0), t.next = 3, qt(X.t[m], l, a);
                                    case 3:
                                        (n = t.sent) ? (r = n.cashbackPendingVol, c = n.cashbackRealizedVol, n.codes.forEach((function(e) { r += e.pendingVol, c += e.realizedVol })), n.totalPendingVol = r, n.totalConfirmedVol = c, b(n), e(rt(l))) : (u === l && ce.show(se, { title: "Error", content: "Something went wrong loading referral data" }), e(tt("")), b(null)), g(!1);
                                    case 6:
                                    case "end":
                                        return t.stop() } }), t) })))).apply(this, arguments) }
                    a && function() { t.apply(this, arguments) }() }), [l, a, u, e, m]); var y = Object(r.useCallback)((function(e) { return "".concat(X.u[m], "/r/").concat(e) }), [m]); return c.a.createElement("div", { className: "reward" }, c.a.createElement("div", { className: "page-title" }, "Krystal Points"), "" === a && c.a.createElement("div", { className: "reward__header card mb-2" }, c.a.createElement("div", { className: "reward__header-point" }, c.a.createElement("div", { className: "btn btn--med btn--gradient mr-2", onClick: function() { return O.apply(this, arguments) } }, l ? "Login" : "Connect Wallet"), c.a.createElement("div", null, "To proceed with referral program, you need to verify the ownership of your wallet by signing the message."))), h && c.a.createElement("div", { className: "align-center" }, c.a.createElement(Zc, null)), !!p && !h && !!a && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "reward__container slide-up" }, c.a.createElement("div", { className: "reward__header" }, c.a.createElement("div", { className: "reward__header-container" }, c.a.createElement("div", { className: "reward__header-point" }, c.a.createElement(yi, { stroke: "#fff", width: "20" }), c.a.createElement("div", null, c.a.createElement("span", { className: "reward__header-text small" }, Object(oe.m)(p.claimablePoint), " KP ~", " ", Object(oe.m)(Object(oe.e)(p.claimablePoint, 1e4), 6), " ", X.F[m].currencySymbol))), c.a.createElement("div", { className: "reward__header-btn gray-disabled" }, "Claim KP")), c.a.createElement("span", { className: "reward__header--desc" }, "Copy below given Ref Code to share with your friends & start earning", " ", c.a.createElement(Kc.a, { title: c.a.createElement("div", null, c.a.createElement("span", null, "Ask your friend to download Krystal app using your Referral Code. If they start using Krystal, We will automatically map the referral to you. You will earn rewards every time your friends transact via Krystal app.", " "), c.a.createElement("a", { className: "hover-underline", href: "https://support.krystal.app/support/solutions/articles/47001181546-referral-program", target: "_blank", rel: "noopener noreferrer" }, "Learn more.(!)")), arrow: !0, placement: "top", interactive: !0 }, c.a.createElement("img", { src: Bc.a, alt: "Info" })))), c.a.createElement("div", { className: "reward__body" }, c.a.createElement("div", { className: "reward__table" }, c.a.createElement("div", { className: "reward__table-title" }, "This Month\u2019s Performance"), c.a.createElement("div", { className: "reward__table-header" }, c.a.createElement("div", null, "Referral Code"), c.a.createElement("div", null, "Share (%) ", c.a.createElement("br", null), "You-Friends"), c.a.createElement("div", null, "Friends"), c.a.createElement("div", null, "Pending", c.a.createElement("br", null), "Vol. (", X.F[m].currencySymbol, ")"), c.a.createElement("div", null, "Confirmed", c.a.createElement("br", null), "Vol. (", X.F[m].currencySymbol, ")")), c.a.createElement("div", { className: "reward__table-body" }, p.codes.map((function(e, t) { var a = e.ratio / 100,
                        n = 100 - a,
                        r = y(e.code); return c.a.createElement("div", { className: "reward__table-row", key: t }, c.a.createElement("div", { className: "reward__table--code-item" }, c.a.createElement("span", { className: "mr-1" }, e.code), c.a.createElement("span", null, c.a.createElement(Kc.a, { title: "Click to Copy", arrow: !0, placement: "top" }, c.a.createElement(_i, { stroke: "#fff", onClick: function() { return function(e) { navigator.clipboard.writeText(e) }(r) }, style: { cursor: "pointer" } })), c.a.createElement(Kc.a, { className: "ml-1", title: "Share", arrow: !0, placement: "top" }, c.a.createElement(Pi, { stroke: "#fff", onClick: function() { ce.show(Fi, { url: r, content: "Here's my referral code ".concat(e.code, " to earn bonus rewards on the Krystal app! Use the code when connecting your wallet in the app. Details: https://krystal.app") }) } })))), c.a.createElement("div", null, a, "-", n), c.a.createElement("div", null, e.totalRefer), c.a.createElement("div", { className: "fw-700" }, Object(oe.m)(e.pendingVol, 4)), c.a.createElement("div", { className: "fw-700" }, Object(oe.m)(e.realizedVol, 4))) }))), c.a.createElement("div", { className: "mt-1" }, c.a.createElement("div", { className: "reward__table-row reward__table-border" }, c.a.createElement("div", null, "Earn from Referrer"), c.a.createElement("div", null), c.a.createElement("div", null), c.a.createElement("div", { className: "fw-700" }, Object(oe.m)(p.cashbackPendingVol, 4)), c.a.createElement("div", { className: "fw-700" }, Object(oe.m)(p.cashbackRealizedVol, 4))), c.a.createElement("div", { className: "reward__table-row pt-3" }, c.a.createElement("div", { className: "fw-700 fs-4" }, "TOTAL"), c.a.createElement("div", null), c.a.createElement("div", null), c.a.createElement("div", { className: "fw-700" }, Object(oe.m)(p.totalPendingVol, 4)), c.a.createElement("div", { className: "fw-700" }, Object(oe.m)(p.totalConfirmedVol, 4)))))), c.a.createElement("div", { className: "reward__footer" }, c.a.createElement("div", { className: "reward__body-data mb-3" }, c.a.createElement("div", null, "Your tier"), c.a.createElement("div", null, p.minTier, " ", X.F[m].currencySymbol, " -", " ", p.maxTier, " ", X.F[m].currencySymbol)), c.a.createElement("div", { className: "reward__body-data" }, c.a.createElement("div", null, "Your realized Krystal Points"), c.a.createElement("div", null, Object(oe.m)(p.realizedReward), " KP")))))) } var Ki = ["svgRef", "title"];

            function Wi() { return (Wi = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Gi(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Hi, Vi = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Gi(e, Ki); return c.a.createElement("svg", Wi({ width: 20, height: 18, viewBox: "0 0 20 18", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ci || (Ci = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-363.000000, -147.000000) translate(328.000000, 90.000000) translate(33.000000, 54.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M20 15.5h-2c-1.105 0-2-.895-2-2h0c0-1.105.895-2 2-2h2c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1zM20 11.5v-3c0-1.105-.895-2-2-2H4.5C3.672 6.5 3 5.828 3 5h0c0-.828.672-1.5 1.5-1.5H17", transform: "translate(-363.000000, -147.000000) translate(328.000000, 90.000000) translate(33.000000, 54.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M20 15.5v3c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5", transform: "translate(-363.000000, -147.000000) translate(328.000000, 90.000000) translate(33.000000, 54.000000)" }))))))) },
                zi = c.a.forwardRef((function(e, t) { return c.a.createElement(Vi, Wi({ svgRef: t }, e)) })),
                Ui = (a.p, ["svgRef", "title"]);

            function Yi() { return (Yi = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function qi(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Qi, Xi = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = qi(e, Ui); return c.a.createElement("svg", Yi({ width: 22, height: 18, viewBox: "0 0 22 18", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Hi || (Hi = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M8.091 4.659c.879.879.879 2.303 0 3.182s-2.303.879-3.182 0-.879-2.303 0-3.182 2.303-.879 3.182 0", transform: "translate(-362.000000, -182.000000) translate(328.000000, 90.000000) translate(33.000000, 89.000000) translate(2.000000, 3.500000)" }), c.a.createElement("path", { d: "M0 15V2.041C0 .914.914 0 2.041 0H18c1.105 0 2 .895 2 2v13c0 1.105-.895 2-2 2H2c-1.105 0-2-.895-2-2zM13 6L17 6M15.4 10L13 10", transform: "translate(-362.000000, -182.000000) translate(328.000000, 90.000000) translate(33.000000, 89.000000) translate(2.000000, 3.500000)" }), c.a.createElement("path", { d: "M10.095 13c-.175-.439-.445-.833-.792-1.154h0C8.716 11.302 7.946 11 7.146 11H5.854c-.8 0-1.57.302-2.157.846h0c-.347.321-.617.715-.792 1.154", transform: "translate(-362.000000, -182.000000) translate(328.000000, 90.000000) translate(33.000000, 89.000000) translate(2.000000, 3.500000)" })))))))) },
                Ji = c.a.forwardRef((function(e, t) { return c.a.createElement(Xi, Yi({ svgRef: t }, e)) })),
                Zi = (a.p, ["svgRef", "title"]);

            function $i() { return ($i = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function eu(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var tu, au = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = eu(e, Zi); return c.a.createElement("svg", $i({ width: 19, height: 19, viewBox: "0 0 19 19", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Qi || (Qi = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-364.000000, -300.000000) translate(328.000000, 242.000000) translate(34.000000, 56.000000)" }, c.a.createElement("path", { d: "M0 0H22.588V22.588H0z" }), c.a.createElement("circle", { cx: 9.065, cy: 13.523, r: 6.242, stroke: "#current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }), c.a.createElement("path", { stroke: "#current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M5.647 13.647c1.82 0 3.294 1.475 3.294 3.294 0-1.82 1.475-3.294 3.294-3.294-1.819 0-3.294-1.475-3.294-3.294 0 1.82-1.475 3.294-3.294 3.294zM9.11 4.652c2.437-2.437 6.39-2.436 8.827 0 2.438 2.437 2.438 6.389 0 8.827" }))))))) },
                nu = c.a.forwardRef((function(e, t) { return c.a.createElement(au, $i({ svgRef: t }, e)) })),
                ru = (a.p, ["svgRef", "title"]);

            function cu() { return (cu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function lu(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var su, ou = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = lu(e, ru); return c.a.createElement("svg", cu({ width: 18, height: 19, viewBox: "0 0 18 19", ref: t }, n), a ? c.a.createElement("title", null, a) : null, tu || (tu = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L22.588 0 22.588 22.588 0 22.588z", transform: "translate(-366.000000, -334.000000) translate(328.000000, 242.000000) translate(35.000000, 90.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M13.176 4.706c0-1.04-2.108-1.882-4.705-1.882-2.598 0-4.704.843-4.706 1.882 0 1.04 2.106 1.882 4.706 1.882 2.6 0 4.705-.842 4.705-1.882M13.176 4.706L13.176 12.009M3.766 8.47c0 1.04 2.106 1.883 4.706 1.883 2.6 0 4.705-.842 4.705-1.882M18.524 12.535c1.654 1.653 1.654 4.336 0 5.99-1.653 1.653-4.336 1.653-5.99 0-1.653-1.654-1.653-4.337 0-5.99 1.654-1.654 4.337-1.654 5.99 0", transform: "translate(-366.000000, -334.000000) translate(328.000000, 242.000000) translate(35.000000, 90.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M11.77 13.576c-.85.335-2.014.542-3.3.542-2.598 0-4.704-.843-4.704-1.883", transform: "translate(-366.000000, -334.000000) translate(328.000000, 242.000000) translate(35.000000, 90.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M11.713 17.36c-.844.322-1.982.522-3.242.522-2.599 0-4.705-.842-4.706-1.882V4.706", transform: "translate(-366.000000, -334.000000) translate(328.000000, 242.000000) translate(35.000000, 90.000000)" }))))))) },
                iu = c.a.forwardRef((function(e, t) { return c.a.createElement(ou, cu({ svgRef: t }, e)) })),
                uu = (a.p, ["svgRef", "title"]);

            function mu() { return (mu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function du(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var fu, pu = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = du(e, uu); return c.a.createElement("svg", mu({ width: 20, height: 20, viewBox: "0 0 20 20", ref: t }, n), a ? c.a.createElement("title", null, a) : null, su || (su = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M0 8.182c0 2.683 1.42 5.045 3.599 6.534-.001.855.001 2.007.001 3.216l3.531-1.747c.604.116 1.228.179 1.869.179 4.952 0 9-3.643 9-8.182C18 3.643 13.952 0 9 0S0 3.643 0 8.182z", transform: "translate(-363.000000, -450.000000) translate(328.000000, 394.000000) translate(33.000000, 54.000000) translate(3.000000, 3.109000)" }), c.a.createElement("path", { d: "M8.899 9.219v-.207c0-.678.419-1.045.839-1.327.41-.276.821-.636.821-1.3 0-.917-.743-1.659-1.659-1.659s-1.66.741-1.66 1.658M8.898 11.558c-.083 0-.15.067-.149.15 0 .083.067.15.15.15.083 0 .15-.067.15-.15 0-.083-.066-.15-.151-.15", transform: "translate(-363.000000, -450.000000) translate(328.000000, 394.000000) translate(33.000000, 54.000000) translate(3.000000, 3.109000)" })))))))) },
                bu = c.a.forwardRef((function(e, t) { return c.a.createElement(pu, mu({ svgRef: t }, e)) })),
                vu = (a.p, ["svgRef", "title"]);

            function Eu() { return (Eu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function hu(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var gu, Ou = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = hu(e, vu); return c.a.createElement("svg", Eu({ width: 20, height: 16, viewBox: "0 0 20 16", ref: t }, n), a ? c.a.createElement("title", null, a) : null, fu || (fu = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M16 13.962H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0h14c1.105 0 2 .895 2 2v9.963c0 1.104-.895 1.999-2 1.999h0z", transform: "translate(-363.000000, -489.000000) translate(328.000000, 394.000000) translate(33.000000, 91.000000) translate(3.000000, 5.019000)" }), c.a.createElement("path", { d: "M14 3.981L9 6.981 4 3.981", transform: "translate(-363.000000, -489.000000) translate(328.000000, 394.000000) translate(33.000000, 91.000000) translate(3.000000, 5.019000)" })))))))) },
                yu = c.a.forwardRef((function(e, t) { return c.a.createElement(Ou, Eu({ svgRef: t }, e)) })),
                ju = (a.p, ["svgRef", "title"]);

            function ku() { return (ku = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function wu(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var xu, Nu = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = wu(e, ju); return c.a.createElement("svg", ku({ width: 20, height: 19, viewBox: "0 0 20 19", ref: t }, n), a ? c.a.createElement("title", null, a) : null, gu || (gu = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M14.133 19.879c-.18.18-.424.281-.679.281H11.52v-1.934c0-.255.101-.5.281-.68l6.499-6.502c.31-.31.73-.484 1.168-.484.438 0 .858.174 1.168.484h0c.31.31.485.73.485 1.168 0 .438-.175.859-.485 1.168l-6.503 6.499zM15.901 13.449L18.234 15.781M19.89 14.126l.863.864h0c.455.456.455 1.194 0 1.65l-1.575 1.575M6.72 2.64L12.48 2.64M6.72 12.48L10.56 12.48M8.64 20.16H5.76c-1.59 0-2.88-1.29-2.88-2.88V5.76c0-1.59 1.29-2.88 2.88-2.88h11.52c1.59 0 2.88 1.29 2.88 2.88v1.92", transform: "translate(-781.000000, -150.000000) translate(746.000000, 90.000000) translate(33.000000, 57.930240)" }), c.a.createElement("path", { d: "M0 23.04L0 0 23.04 0 23.04 23.04z", transform: "translate(-781.000000, -150.000000) translate(746.000000, 90.000000) translate(33.000000, 57.930240)" }))))))) },
                _u = c.a.forwardRef((function(e, t) { return c.a.createElement(Nu, ku({ svgRef: t }, e)) })),
                Tu = (a.p, ["svgRef", "title"]);

            function Au() { return (Au = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Su(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Cu, Ru = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Su(e, Tu); return c.a.createElement("svg", Au({ width: 20, height: 20, viewBox: "0 0 20 20", ref: t }, n), a ? c.a.createElement("title", null, a) : null, xu || (xu = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24.01 0 24.01 24.01 0 24.01z", transform: "translate(-781.000000, -184.000000) translate(746.000000, 90.000000) translate(33.000000, 92.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M8.003 21.009h-3C3.896 21.009 3 20.113 3 19.008V5.002c0-1.105.896-2 2.001-2h11.005c1.105 0 2 .895 2 2v3.001M16.778 15.166l3.684 3.118c.441.371.64.958.513 1.522-.127.563-.557 1.009-1.116 1.156-.559.146-1.152-.03-1.54-.46l-3.265-3.595M7.003 8.003L13.005 8.003M7.003 12.005L9.004 12.005", transform: "translate(-781.000000, -184.000000) translate(746.000000, 90.000000) translate(33.000000, 92.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M12.93 13.867l-1.466 1.167c-.27.217-.436.54-.455.886-.02.346.11.684.355.93l1.115 1.12c.243.245.579.373.923.354.344-.019.663-.184.878-.454l1.176-1.463c.28-.348.598-.664.947-.942l1.465-1.168c.271-.217.437-.539.456-.885.019-.346-.11-.684-.356-.93l-1.111-1.121c-.243-.244-.579-.373-.923-.354-.344.019-.663.184-.878.454l-1.18 1.464c-.28.348-.598.664-.947.942h0zM13.929 20.989L11.928 20.989", transform: "translate(-781.000000, -184.000000) translate(746.000000, 90.000000) translate(33.000000, 92.000000)" }))))))) },
                Pu = c.a.forwardRef((function(e, t) { return c.a.createElement(Ru, Au({ svgRef: t }, e)) })),
                Lu = (a.p, ["svgRef", "title"]);

            function Iu() { return (Iu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Mu(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Du, Fu = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Mu(e, Lu); return c.a.createElement("svg", Iu({ width: 16, height: 20, viewBox: "0 0 16 20", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Cu || (Cu = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L23.99 0 23.99 23.99 0 23.99z", transform: "translate(-783.000000, -255.000000) translate(746.000000, 90.000000) translate(33.000000, 163.000000)" }), c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M4.956 15.338v.364c0 1.265 1.026 2.29 2.291 2.29h0c1.265 0 2.291-1.025 2.291-2.29v-.365M9.08 2.75v-.918C9.08.821 8.26 0 7.246 0h0C6.234 0 5.415.82 5.415 1.832v.918", transform: "translate(-783.000000, -255.000000) translate(746.000000, 90.000000) translate(33.000000, 163.000000) translate(4.748022, 2.998751)" }), c.a.createElement("path", { d: "M1.812 7.185h0c0-2.502 2.028-4.53 4.53-4.53h1.812c2.502 0 4.529 2.029 4.529 4.53h0v2.796c0 .53.21 1.038.585 1.413l.641.641c.375.375.586.884.586 1.413h0c0 1.044-.846 1.89-1.89 1.89H1.89C.846 15.338 0 14.492 0 13.448h0c0-.53.21-1.038.586-1.413l.64-.64c.375-.376.586-.884.586-1.414V7.185z", transform: "translate(-783.000000, -255.000000) translate(746.000000, 90.000000) translate(33.000000, 163.000000) translate(4.748022, 2.998751)" })))))))) },
                Bu = c.a.forwardRef((function(e, t) { return c.a.createElement(Fu, Iu({ svgRef: t }, e)) })),
                Ku = (a.p, ["svgRef", "title"]);

            function Wu() { return (Wu = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Gu(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Hu = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Gu(e, Ku); return c.a.createElement("svg", Wu({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Du || (Du = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M14 9V4.828c0-.53-.211-1.039-.586-1.414L10.586.586C10.211.211 9.702 0 9.172 0H2C.895 0 0 .895 0 2v14c0 1.105.895 2 2 2h5M3 6L11 6M3 9L11 9M3 12L5 12", transform: "translate(-779.000000, -217.000000) translate(746.000000, 90.000000) translate(33.000000, 127.000000) translate(5.000000, 3.000000)" }), c.a.createElement("path", { d: "M12.5 18s2.5-1.2 2.5-3v-2.1l-1.823-.656c-.438-.158-.917-.158-1.355 0L10 12.9V15c0 1.8 2.5 3 2.5 3z", transform: "translate(-779.000000, -217.000000) translate(746.000000, 90.000000) translate(33.000000, 127.000000) translate(5.000000, 3.000000)" })))))))) },
                Vu = c.a.forwardRef((function(e, t) { return c.a.createElement(Hu, Wu({ svgRef: t }, e)) }));
            a.p;

            function zu() { var e = Object(i.b)(); return c.a.createElement("div", { className: "setting" }, c.a.createElement("div", { className: "page-title" }, "Settings"), c.a.createElement("div", { className: "setting__content grid" }, c.a.createElement("div", { className: "setting__content--left" }, c.a.createElement("div", { className: "setting__item card" }, c.a.createElement("div", { className: "setting__item-title" }, "Account"), c.a.createElement("div", { className: "setting__item-content", onClick: function() { e(Jn("contacts", { isOpened: !0 })) } }, c.a.createElement(zi, { stroke: "#fff" }), c.a.createElement("span", null, "Manage Wallets")), c.a.createElement("div", { className: "setting__item-content", onClick: function() { e(Jn("contacts", { isOpened: !0, onlyContact: !0 })) } }, c.a.createElement(Ji, { stroke: "#fff" }), c.a.createElement("span", null, "Contacts"))), c.a.createElement("div", { className: "setting__item card" }, c.a.createElement("div", { className: "setting__item-title" }, "Custom Tokens"), c.a.createElement("div", { className: "setting__item-content", onClick: function() { ce.show(ql) } }, c.a.createElement(nu, { stroke: "#fff" }), c.a.createElement("span", null, "Add Custom Token")), c.a.createElement("div", { className: "setting__item-content", onClick: function() { e(Jn("manageTokens", { isOpened: !0 })) } }, c.a.createElement(iu, { stroke: "#fff" }), c.a.createElement("span", null, "Manage Tokens"))), c.a.createElement("div", { className: "setting__item card" }, c.a.createElement("div", { className: "setting__item-title" }, "Support"), c.a.createElement("a", { className: "setting__item-content", href: "https://support.krystal.app", target: "_blank", rel: "noopener noreferrer" }, c.a.createElement(bu, { stroke: "#fff" }), c.a.createElement("span", null, "Help Center")), c.a.createElement("a", { className: "setting__item-content", href: "mailto:support@krystal.app" }, c.a.createElement(yu, { stroke: "#fff" }), c.a.createElement("span", null, "Email")))), c.a.createElement("div", { className: "setting__content--right" }, c.a.createElement("div", { className: "setting__item card" }, c.a.createElement("div", { className: "setting__item-title" }, "Others"), c.a.createElement("a", { className: "setting__item-content", href: "https://files.krystal.app/terms.pdf", target: "_blank", rel: "noopener noreferrer" }, c.a.createElement(_u, { stroke: "#fff" }), c.a.createElement("span", null, "Terms of Use")), c.a.createElement("a", { className: "setting__item-content", href: "https://files.krystal.app/privacy.pdf", target: "_blank", rel: "noopener noreferrer" }, c.a.createElement(Pu, { stroke: "#fff" }), c.a.createElement("span", null, "Privacy Policy")), c.a.createElement("a", { className: "setting__item-content", href: "https://files.krystal.app/referral.pdf", target: "_blank", rel: "noopener noreferrer", style: { marginLeft: -3 } }, c.a.createElement(Vu, { stroke: "#fff" }), c.a.createElement("span", null, "Referral Policy")), c.a.createElement(Ec.b, { className: "setting__item-content bell", to: X.K.NOTIFICATION }, c.a.createElement(Bu, { stroke: "#fff" }), c.a.createElement("span", null, "Notifications")))))) } var Uu, Yu = a(621),
                qu = a.n(Yu),
                Qu = a(622),
                Xu = a.n(Qu),
                Ju = a(623),
                Zu = a.n(Ju),
                $u = a(624),
                em = a.n($u);

            function tm(e) { var t = Object(i.c)((function(e) { return e.tx })).trackingTxs,
                    a = Object(i.c)((function(e) { return e.global })),
                    n = a.chainId,
                    r = a.pageSettings,
                    l = t[0],
                    s = function() { var e;
                        e = l.status === X.S.SUCCESS ? { icon: Xu.a, content: u(l.action, l.data) } : l.status === X.S.FAILED ? { icon: Zu.a, content: c.a.createElement("div", { className: "flex-all-center mb-3" }, "Transaction error") } : { icon: qu.a, content: c.a.createElement("div", { className: "flex-all-center mb-7" }, c.a.createElement("img", { className: "top-1 mr-1", style: { width: 18 }, src: Yl.a, alt: "loading" }), c.a.createElement("div", null, "Waiting for the transaction to be mined")) }; return e }(),
                    o = Object(vc.g)();

                function u(e, t) { var a; return e === X.a.TRANSFER_ETH || e === X.a.TRANSFER_TOKEN ? a = c.a.createElement("div", { className: "tx-tracking__content" }, c.a.createElement("div", null, "Successfully Transferred"), c.a.createElement("div", null, Object(oe.m)(t.value, 4), " ", t.tokenSymbol, " to", " ", Object(oe.h)(t.to))) : e === X.a.SWAP ? a = c.a.createElement("div", { className: "tx-tracking__content" }, c.a.createElement("div", null, "Successfully Swapped"), c.a.createElement("div", null, Object(oe.m)(t.srcAmount, 4), " ", t.srcSymbol, " to", " ", Object(oe.m)(t.destAmount, 4), " ", t.destSymbol)) : e === X.a.SWAP_AND_DEPOSIT ? a = c.a.createElement("div", { className: "tx-tracking__content" }, c.a.createElement("div", null, "Successfully earned"), c.a.createElement("div", null, Object(oe.m)(t.destAmount, 4), " ", t.destSymbol, " with", " ", Object(oe.m)(t.APY, 2), "% APY")) : e === X.a.WITHDRAW_FUND ? a = c.a.createElement("div", { className: "tx-tracking__content" }, c.a.createElement("div", null, "Successfully Withdrawn"), c.a.createElement("div", null, Object(oe.m)(t.amount, 4), " ", t.symbol)) : e === X.a.CLAIM_REWARD && (a = c.a.createElement("div", { className: "tx-tracking__content" }, c.a.createElement("div", null, "Successfully Claimed"), c.a.createElement("div", null, Object(oe.m)(t.amount, 4), " ", t.symbol))), a } return c.a.createElement("div", { className: "basic-modal small tx-tracking" }, c.a.createElement("div", { className: "flex-all-center mb-5" }, c.a.createElement("img", { className: "mr-1", src: s.icon, alt: l.status }), c.a.createElement("div", { className: "capitalize" }, l.status, "!")), c.a.createElement("div", { className: "basic-modal__content" }, c.a.createElement("div", null, s.content), c.a.createElement("div", { className: "tx-tracking__hash" }, c.a.createElement("div", null, "TxHash:"), c.a.createElement("div", { className: "flex-center" }, c.a.createElement("div", { className: "mr-2" }, Object(oe.h)(l.hash, 20, -5)), c.a.createElement("a", { href: "".concat(X.k[n], "/tx/").concat(l.hash), target: "_blank", rel: "noopener noreferrer" }, c.a.createElement("img", { className: "top-1", src: em.a, alt: "Show tx" }))))), l.action === X.a.SWAP && l.status === X.S.SUCCESS && Object(Ct.get)(r, "APP_SWAP_SUCCESS.content") && c.a.createElement("div", { className: "notification green flex-between-start mt-4" }, c.a.createElement("div", { className: "notification__content", dangerouslySetInnerHTML: { __html: Object(Ct.get)(r, "APP_SWAP_SUCCESS.content") } })), c.a.createElement("div", { className: "basic-modal__panel" }, l.status === X.S.SUCCESS && c.a.createElement(c.a.Fragment, null, l.action === X.a.SWAP_AND_DEPOSIT && c.a.createElement("div", { className: "btn w-100", onClick: function() { e.close(), o.push("/earn") } }, "Back to Earn"), l.action !== X.a.SWAP_AND_DEPOSIT && c.a.createElement("div", { className: "btn", onClick: function() { e.close() } }, "Done")), l.status === X.S.PENDING && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "btn mr-5", style: { visibility: "hidden" }, onClick: e.close }, "Speed Up"), c.a.createElement("div", { className: "btn btn-cancel", style: { visibility: "hidden" }, onClick: e.close }, "Cancel")), l.status === X.S.FAILED && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "btn btn-cancel mr-5", onClick: e.close }, "Cancel"), c.a.createElement("div", { className: "btn", onClick: function() { e.close(), window.open("https://support.krystal.app/") } }, "Go to Support")))) }

            function am() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })).chainId;
                Object(r.useEffect)((function() {
                    (function(e) { return Ht.apply(this, arguments) })(X.t[t]).then((function(t) { e({ type: Ln, payload: t }) })) }), [t, e]) }

            function nm() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })).chainId;
                Object(r.useEffect)((function() {
                    (function(e) { return aa.apply(this, arguments) })(X.t[t]).then((function(t) { var a = [],
                            n = [],
                            r = [];
                        t.forEach((function(e) { "banner" === e.type && a.push(e), "partner" === e.type && n.push(e), "ads" === e.type && r.push(e) })), e(function(e) { return { type: Pn, payload: e } }({ banners: a, partners: n, ads: r })) })) }), [t, e]) }

            function rm() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })).chainId;
                Object(r.useEffect)((function() {
                    function a() {
                        (function(e) { return ja.apply(this, arguments) })(X.t[t]).then((function(t) { e({ type: Mn, payload: t }) })) }
                    a(); var n = setInterval(Object(ft.a)(j.a.mark((function e() { return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    a();
                                case 1:
                                case "end":
                                    return e.stop() } }), e) }))), X.r.GAS_PRICE); return function() { clearInterval(n) } }), [t, e]) }

            function cm() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.account })).watchAddress,
                    a = Object(i.c)((function(e) { return e.global })).chainId,
                    n = Object(i.c)((function(e) { return e.tx })).trackingTxs,
                    c = bo(t);
                Object(r.useEffect)((function() { e({ type: Ka, payload: null }), e({ type: Yn, payload: null }) }), [e, a]), am(), nm(), rm(); var l = Object(r.useMemo)((function() { return Object(oe.d)(a).web3 }), [a]);
                Object(r.useEffect)((function() { c !== t && (t ? (e(it()), e(ct()), e(st())) : e(dt())) }), [e, c, t]), no((function() { e({ type: qa, payload: null }) }), X.r.MARKET_REFRESH), no((function() { e(it()), e({ type: Qa, payload: null }), e(ct()), e(st()) }), X.r.DEPOSITING_TOKENS), Object(r.useEffect)((function() { 0 !== n.length && (n[0].status === X.S.PENDING && ce.show(tm)) }), [n]); var s = Object(r.useCallback)(Object(ft.a)(j.a.mark((function t() { var a, r; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (0 !== n.length) { t.next = 2; break } return t.abrupt("return");
                            case 2:
                                return a = n[0], t.next = 5, Object(fe.i)(l, [a]);
                            case 5:
                                (r = t.sent)[0].status !== X.S.PENDING && (e({ type: N, payload: r }), r[0].action === X.a.APPROVE && e({ type: F }));
                            case 7:
                            case "end":
                                return t.stop() } }), t) }))), [e, n, l]);
                no(s, X.r.TX_MINED) } var lm = ["svgRef", "title"];

            function sm() { return (sm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function om(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var im, um = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = om(e, lm); return c.a.createElement("svg", sm({ width: 32, height: 32, viewBox: "0 0 32 32", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Uu || (Uu = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L32 0 32 32 0 32z", transform: "translate(-328.000000, -39.000000) translate(328.000000, 39.000000)" }), c.a.createElement("path", { stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M5.347 15.973L25.333 15.973M13.351 7.984L5.336 16 13.351 24.016", transform: "translate(-328.000000, -39.000000) translate(328.000000, 39.000000)" })))))) },
                mm = c.a.forwardRef((function(e, t) { return c.a.createElement(um, sm({ svgRef: t }, e)) })),
                dm = (a.p, ["svgRef", "title"]);

            function fm() { return (fm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function pm(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var bm, vm = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = pm(e, dm); return c.a.createElement("svg", fm({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, im || (im = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", d: "M11.736 5.572c.36-.075.45-.048.528 0 .077.049.142.118.185.205h0l1.54 3.073 3.414.488c.095.014.182.053.252.113.07.06.125.138.154.23.03.09.032.186.009.276-.023.09-.07.172-.14.24h0l-2.463 2.36.585 3.356c.017.094.006.188-.028.273-.034.085-.092.161-.169.218-.077.056-.166.088-.258.095-.091.007-.185-.011-.27-.056h0L12 14.854l-3.076 1.589c-.084.044-.178.062-.27.055-.09-.007-.18-.039-.257-.095-.077-.056-.135-.132-.169-.217-.034-.086-.045-.18-.028-.275h0l.585-3.354-2.463-2.361c-.07-.067-.117-.15-.14-.24-.023-.089-.02-.184.009-.276.029-.09.083-.17.154-.23.07-.059.157-.098.254-.112h0l3.411-.488 1.542-3.075c.042-.085.107-.154.184-.203z", transform: "translate(-826 -113) translate(826 113)" })))))) },
                Em = c.a.forwardRef((function(e, t) { return c.a.createElement(vm, fm({ svgRef: t }, e)) })),
                hm = (a.p, ["svgRef", "title"]);

            function gm() { return (gm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Om(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var ym, jm = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Om(e, hm); return c.a.createElement("svg", gm({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, bm || (bm = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { fill: "#1DE9B6", d: "M9.489 16.889c-.338.176-.747.145-1.055-.08-.307-.226-.46-.606-.393-.982l.54-3.091L6.31 10.56c-.278-.265-.38-.665-.262-1.03s.433-.63.813-.684l3.153-.45 1.423-2.84c.169-.34.516-.556.896-.556s.727.215.896.556l1.424 2.84 3.152.45c.38.053.696.319.813.684.118.365.016.765-.261 1.03l-2.271 2.176.54 3.092c.066.375-.087.756-.394.981-.307.226-.716.257-1.054.08l-2.845-1.47-2.844 1.47z", transform: "translate(-826.000000, -275.000000) translate(368.000000, 275.000000) translate(458.000000, 0.000000)" }))))))) },
                km = c.a.forwardRef((function(e, t) { return c.a.createElement(jm, gm({ svgRef: t }, e)) })),
                wm = (a.p, a(1304)),
                xm = a(603),
                Nm = a(611),
                _m = a(251);

            function Tm(e) { var t = Object(r.useState)("HH:mm"),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1],
                    s = Object(i.c)((function(e) { return e.global })).marketBase;
                Object(r.useEffect)((function() { 7 === e.chartDays ? l("ddd DD") : 30 === e.chartDays || 90 === e.chartDays ? l("DD/MM") : 365 === e.chartDays && l("M/YYYY") }), [e.chartDays]); var o = Object(r.useMemo)((function() { var t = e.data[0].price || 0,
                        a = e.data[0].price || 0; return e.data.forEach((function(e) { e.price > t && (t = e.price), e.price < a && (a = e.price) })), { max: t, min: a } }), [e.data]); return c.a.createElement("div", null, c.a.createElement(wm.a, { width: "100%", height: 250 }, c.a.createElement(_l.a, { width: 1e3, height: 250, data: e.data, margin: { right: 0, left: 0 } }, c.a.createElement(xm.a, { y: o.max, label: { value: Object(oe.m)(o.max, 5), fontSize: 12, fill: "#ffffff50", position: "insideBottomLeft" }, stroke: "#3b3e3c", strokeDasharray: "3 3" }), c.a.createElement(xm.a, { y: o.min, label: { value: Object(oe.m)(o.min, 5), fontSize: 12, fill: "#ffffff50", position: "insideTopLeft" }, stroke: "#3b3e3c", strokeDasharray: "3 3" }), c.a.createElement(Tl.a, { hide: !0, mirror: !0, domain: ["bottom", "top"], padding: { top: 20, bottom: 20 } }), c.a.createElement(Nm.a, { dataKey: "date", interval: "preserveStartEnd", tickLine: !1, tickMargin: 7, minTickGap: 50, tick: { fill: "#a4abbb", fontSize: 12 }, tickFormatter: function(e) { return "".concat(ue()(e).format(n)) } }), c.a.createElement(_m.a, { content: function(e) { return function(e) { return e.active && e.payload && e.payload.length ? c.a.createElement("div", { className: "chart-tooltip" }, c.a.createElement("p", { className: "fs-4 fw-700" }, "".concat(ue()(e.payload[0].payload.date).format("ddd DD MMM YYYY H:m:s"))), c.a.createElement("p", { className: "mt-2 mb-1" }, c.a.createElement("span", { className: "fw-700 mr-1" }, "Price: "), c.a.createElement("span", null, "".concat(Object(oe.k)(Object(oe.m)(e.payload[0].payload.price, 4), s))))) : null }(e) } }), c.a.createElement(Al.a, { type: "monotone", dataKey: "price", stroke: e.color, dot: c.a.createElement(c.a.Fragment, null) })))) }

            function Am(e) { var t = Object(r.useState)(!0),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1]; return e.text.length < e.limit ? c.a.createElement("div", { className: e.className }, e.text) : c.a.createElement("div", { className: e.className }, c.a.createElement("span", { dangerouslySetInnerHTML: { __html: n ? "".concat(e.text.slice(0, e.limit), "...") : e.text } }), c.a.createElement("span", { className: "pointer text-green", onClick: function() { return l(!n) } }, "\xa0View ", n ? "More" : "Less")) } var Sm = ["svgRef", "title"];

            function Cm() { return (Cm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Rm(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Pm, Lm = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Rm(e, Sm); return c.a.createElement("svg", Cm({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, ym || (ym = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.2 9.35c0 6.3-3.6 10.8-9.9 10.8-3.6 0-5.043-1.879-6.3-3.6m0 0c.029-.005 2.7-.9 2.7-.9-3.006-3.039-3.234-7.54-.9-10.8 1.107 2.059 3.174 3.959 5.4 4.5.086-2.6 1.849-4.5 4.5-4.5 1.805 0 2.867.688 3.6 1.8H21l-1.8 2.7", transform: "translate(-1066.000000, -203.000000) translate(1066.000000, 203.000000)" })))))) },
                Im = c.a.forwardRef((function(e, t) { return c.a.createElement(Lm, Cm({ svgRef: t }, e)) })),
                Mm = (a.p, ["svgRef", "title"]);

            function Dm() { return (Dm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Fm(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Bm, Km = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Fm(e, Mm); return c.a.createElement("svg", Dm({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Pm || (Pm = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round" }, c.a.createElement("path", { d: "M9 0c4.982 0 9 4.018 9 9s-4.018 9-9 9M9 18c-4.982 0-9-4.018-9-9s4.018-9 9-9", transform: "translate(-1085.000000, -565.000000) translate(1079.000000, 559.000000) translate(6.000000, 6.000000) translate(3.000000, 3.000000)" }), c.a.createElement("path", { d: "M7.168 1.06c-2.89 4.825-2.89 11.056 0 15.881.846 1.413 2.819 1.413 3.665 0 2.89-4.825 2.89-11.056 0-15.881-.847-1.413-2.819-1.413-3.665 0zM0 9L18 9", transform: "translate(-1085.000000, -565.000000) translate(1079.000000, 559.000000) translate(6.000000, 6.000000) translate(3.000000, 3.000000)" })))))))) },
                Wm = c.a.forwardRef((function(e, t) { return c.a.createElement(Km, Dm({ svgRef: t }, e)) })),
                Gm = (a.p, ["svgRef", "title"]);

            function Hm() { return (Hm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Vm(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var zm, Um = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Vm(e, Gm); return c.a.createElement("svg", Hm({ width: 22, height: 22, viewBox: "0 0 22 22", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Bm || (Bm = c.a.createElement("g", { fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, c.a.createElement("g", { stroke: "current" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M4.156 9.506c0-.226.09-.442.25-.602.16-.159.376-.248.602-.247l1.411.005c.47 0 .85.38.85.85v5.349c.158-.047.362-.098.586-.15.319-.076.545-.361.545-.69V7.387c0-.47.38-.85.849-.85h1.416c.468 0 .848.38.848.85v6.157s.355-.143.7-.29c.261-.11.432-.368.432-.653v-7.34c0-.47.38-.85.849-.85h1.414c.469 0 .848.38.848.85v6.045c1.227-.89 2.47-1.962 3.456-3.25.29-.38.372-.88.217-1.332C18.183 3.134 15.017.56 11.255.08 7.492-.4 3.783 1.295 1.679 4.457-.426 7.618-.561 11.7 1.327 14.996c.247.425.717.67 1.206.625.267-.023.6-.057.997-.103.357-.04.626-.343.627-.703V9.506M4.126 18.084c3.04 2.216 7.065 2.535 10.415.826 3.35-1.71 5.46-5.158 5.459-8.925 0-.231-.01-.459-.026-.686-3.652 5.457-10.395 8.008-15.848 8.785", transform: "translate(-1035.000000, -665.000000) translate(1028.000000, 658.000000) translate(8.000000, 8.000000)" }))))))) },
                Ym = c.a.forwardRef((function(e, t) { return c.a.createElement(Um, Hm({ svgRef: t }, e)) })),
                qm = (a.p, ["svgRef", "title"]);

            function Qm() { return (Qm = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Xm(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Jm, Zm = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Xm(e, qm); return c.a.createElement("svg", Qm({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, zm || (zm = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round" }, c.a.createElement("path", { d: "M8.984 11.09L6.919 13.1c-.358.347-.957.193-1.102-.285L4.44 8.285", transform: "translate(-1012.000000, -203.000000) translate(1012.000000, 203.000000) translate(2.811204, 5.815929)" }), c.a.createElement("path", { d: "M11.293 5.111s-2.59 2.336-3.917 3.535c-.397.358-.364.988.066 1.305l5.378 3.973c.529.391 1.285.104 1.422-.54L16.882.937c.129-.602-.462-1.105-1.036-.884L.33 6.037c-.457.176-.435.83.032.975L4.44 8.284", transform: "translate(-1012.000000, -203.000000) translate(1012.000000, 203.000000) translate(2.811204, 5.815929)" }))))))) },
                $m = c.a.forwardRef((function(e, t) { return c.a.createElement(Zm, Qm({ svgRef: t }, e)) })),
                ed = (a.p, ["svgRef", "title"]);

            function td() { return (td = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function ad(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var nd = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = ad(e, ed); return c.a.createElement("svg", td({ width: 23, height: 16, viewBox: "0 0 23 16", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Jm || (Jm = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.154-.5c.68.006 3.063.107 5.541 1.838.143.154.28.384.495.808.88 1.801 2.31 5.28 2.31 9.316h0l-.593.492c.323.046-1.326 2.409-5.38 2.529-.388-.166-.886-.722-1.374-1.28h0l-.428-.49-.36.078h0l-.376.071c-1.792.314-3.434.228-4.836-.017-.265-.048-.521-.1-.768-.156l-.08-.02-.23.276c-.51.603-1.132 1.297-1.207 1.381l-.008.009c-4.69.037-6.284-2.608-6.284-2.608C-.5 7.427.93 3.947 1.693 2.383c.331-.66.469-.89.469-.89C4.8-.395 7.169-.495 7.567-.5h0l1.105.808.044-.005C9.78.2 10.753.178 11.741.25l.495.044h0l.157.018z", transform: "translate(-1188.000000, -569.000000) translate(1181.000000, 559.000000) translate(8.000000, 11.000000)" }), c.a.createElement("path", { fill: "current", fillRule: "nonzero", d: "M13.712 6.202c-1.026 0-1.835.823-1.835 1.848 0 1.026.827 1.85 1.835 1.85 1.026 0 1.836-.824 1.836-1.85 0-1.025-.828-1.848-1.836-1.848zm-6.568 0c-1.026 0-1.836.823-1.836 1.848 0 1.026.828 1.85 1.836 1.85 1.026 0 1.835-.824 1.835-1.85.018-1.025-.81-1.848-1.835-1.848z", transform: "translate(-1188.000000, -569.000000) translate(1181.000000, 559.000000) translate(8.000000, 11.000000)" }))))))) },
                rd = c.a.forwardRef((function(e, t) { return c.a.createElement(nd, td({ svgRef: t }, e)) }));
            a.p;

            function cd(e) { var t = Object(i.c)((function(e) { return e.global })).chainId; return c.a.createElement("div", { className: "social-link flex-all-center" }, c.a.createElement("a", { href: "".concat(X.k[t], "/address/").concat(e.tokenAddr), target: "_blank", rel: "noreferrer noopener", className: "btn__link" }, c.a.createElement(Ym, { stroke: "#fff" })), !!e.links.homepage && c.a.createElement("a", { href: e.links.homepage, target: "_blank", rel: "noreferrer noopener", className: "btn__link" }, c.a.createElement(Wm, { stroke: "#fff" })), !!e.links.twitterScreenName && c.a.createElement("a", { href: e.links.twitterScreenName, target: "_blank", rel: "noreferrer noopener", className: "btn__link" }, c.a.createElement(Im, { stroke: "#fff" })), !!e.links.telegram && c.a.createElement("a", { href: e.links.telegram, target: "_blank", rel: "noreferrer noopener", className: "btn__link" }, c.a.createElement($m, { stroke: "#fff" })), !!e.links.discord && c.a.createElement("a", { href: e.links.discord, target: "_blank", rel: "noreferrer noopener", className: "btn__link" }, c.a.createElement(rd, { stroke: "#fff" }))) }

            function ld() { var e = Object(i.b)(),
                    t = Object(vc.i)(),
                    a = t.origin,
                    n = t.tokenAddr,
                    l = Object(i.c)((function(e) { return e.global })),
                    s = l.marketBase,
                    o = l.chainId,
                    u = Object(i.c)((function(e) { return e.account })).balances,
                    m = Vc(o),
                    d = m.favoriteTokens,
                    f = m.allTokens,
                    p = m.stakedTokens,
                    b = m.isFetchingTokens,
                    v = Object(r.useState)(),
                    E = Object(Z.a)(v, 2),
                    h = E[0],
                    g = E[1],
                    O = Object(r.useState)([]),
                    y = Object(Z.a)(O, 2),
                    k = y[0],
                    x = y[1],
                    N = Object(r.useState)(1),
                    _ = Object(Z.a)(N, 2),
                    T = _[0],
                    A = _[1],
                    S = Object(r.useState)(!0),
                    C = Object(Z.a)(S, 2),
                    R = C[0],
                    P = C[1],
                    L = Object(r.useState)(!1),
                    I = Object(Z.a)(L, 2),
                    M = I[0],
                    D = I[1],
                    F = Object(r.useState)(!1),
                    B = Object(Z.a)(F, 2),
                    K = B[0],
                    W = B[1],
                    G = Object(vc.g)(),
                    H = Object(r.useMemo)((function() { return d.includes(n) }), [d, n]),
                    V = Object(r.useMemo)((function() { return u.find((function(e) { return e.token.address === n })) }), [u, n]),
                    z = Object(r.useCallback)((function(t) { t.stopPropagation(), n && e(H ? tn(n) : en(n)) }), [e, H, n]);
                Object(r.useEffect)((function() {
                    function e() { return (e = Object(ft.a)(j.a.mark((function e() { var t; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n) { e.next = 2; break } return e.abrupt("return");
                                    case 2:
                                        return P(!0), e.next = 5, Ra(X.t[o], n);
                                    case 5:
                                        if (t = e.sent) { e.next = 9; break } return G.push("/"), e.abrupt("return");
                                    case 9:
                                        g(t), P(!1);
                                    case 11:
                                    case "end":
                                        return e.stop() } }), e) })))).apply(this, arguments) }! function() { e.apply(this, arguments) }() }), [o, G, n]), Object(r.useEffect)((function() {
                    function e() { return (e = Object(ft.a)(j.a.mark((function e() { var t, a, r, c; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n) { e.next = 2; break } return e.abrupt("return");
                                    case 2:
                                        return D(!0), e.next = 5, Fa(X.t[o], n, T, s);
                                    case 5:
                                        t = e.sent, a = NaN, t && t.length && (r = t[0].price, c = t[t.length - 1].price, r && c && (a = 100 * (c - r) / r), x(t)), g((function(e) { return e ? Object(w.a)(Object(w.a)({}, e), {}, { priceChange: a }) : { priceChange: a } })), D(!1);
                                    case 10:
                                    case "end":
                                        return e.stop() } }), e) })))).apply(this, arguments) }! function() { e.apply(this, arguments) }() }), [n, T, s, o]), Object(r.useEffect)((function() { Object(oe.g)(p, "address", null !== n && void 0 !== n ? n : "") && W(!0) }), [n, p]); var U = Object(r.useMemo)((function() { var e = Object(Ct.get)(h, "markets.".concat(s, ".priceChange24hPercentage"), 0); return e > 0 ? "text-green" : e < 0 ? "text-red" : "white" }), [h, s]),
                    Y = Object(r.useMemo)((function() { return Object(Ct.get)(h, "markets.".concat(s, ".priceChange24hPercentage"), 0) }), [h, s]),
                    q = Object(r.useMemo)((function() { return null === h || void 0 === h ? void 0 : h.symbol }), [h]); return c.a.createElement("div", { className: "token-details" }, (R || b) && c.a.createElement("div", { className: "align-center" }, c.a.createElement(Zc, null)), !R && !b && c.a.createElement("div", null, c.a.createElement("div", { className: "mb-3 fs-5 token-details__navigator" }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement(Ec.b, { to: "summary" === a ? X.K.SUMMARY : X.K.MARKET }, c.a.createElement(mm, null)), c.a.createElement("span", null, q || "--", "/", s.toUpperCase())), c.a.createElement("button", { className: "btn btn--favorite ", onClick: z }, H ? c.a.createElement(km, null) : c.a.createElement(Em, { stroke: "#fff" }))), c.a.createElement("div", { className: "column-container grid" }, c.a.createElement("div", { className: "column-container__item left" }, !q && c.a.createElement("div", null, c.a.createElement("div", null, "Info cannot be found")), !!q && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "flex-between-start mb-6" }, c.a.createElement("div", null, c.a.createElement("div", { className: "text-grey mb-1 fs-4" }, "Price"), c.a.createElement("div", { className: "mb-2" }, c.a.createElement("span", { className: "mr-2 fs-5 fw-400" }, Object(oe.k)(Object(oe.m)(Object(Ct.get)(h, "markets.".concat(s, ".price"), 0), 2), s)), c.a.createElement("span", { className: "fs-3 price-change ".concat(U) }, Object(oe.B)(Y, 2), "%")), c.a.createElement("div", null, c.a.createElement("div", { className: "text-grey mb-1 fs-4" }, "24h vol"), c.a.createElement("div", { className: "fw-500" }, Object(oe.k)(Object(oe.m)(Object(Ct.get)(h, "markets.".concat(s, ".volume24h"), 0), 2), s)))), c.a.createElement("div", { className: "align-right" }, c.a.createElement("div", { className: "text-grey mb-1 fs-4" }, "Balance"), c.a.createElement("div", { className: "mt-1 mb-1 fs-5 fw-400" }, Object(oe.m)(Object(Ct.get)(V, "balance", 0), 4), " ", null === h || void 0 === h ? void 0 : h.symbol), c.a.createElement("div", { className: "text-grey" }, Object(oe.k)(Object(oe.m)(Object(Ct.get)(V, "quotes.".concat(s, ".value"), 0), 4), s)))), c.a.createElement("div", { className: "token-details__time-range ".concat(Y > 0 ? "token-details__time-range--price-up" : Y < 0 ? "token-details__time-range--price-down" : "text-grey") }, c.a.createElement("div", { className: 1 === T ? "active" : "", onClick: function() { return A(1) } }, "24H"), c.a.createElement("div", { className: 7 === T ? "active" : "", onClick: function() { return A(7) } }, "7D"), c.a.createElement("div", { className: 30 === T ? "active" : "", onClick: function() { return A(30) } }, "1M"), c.a.createElement("div", { className: 90 === T ? "active" : "", onClick: function() { return A(90) } }, "3M"), c.a.createElement("div", { className: 365 === T ? "active" : "", onClick: function() { return A(365) } }, "1Y")), c.a.createElement("div", { className: "token-details__chart-container" }, M && c.a.createElement("div", { className: "align-center" }, c.a.createElement(Zc, null)), !M && !!k.length && c.a.createElement(Tm, { data: k, chartDays: T, color: Object(oe.t)(Y) }), !M && !k.length && c.a.createElement("div", { className: "not-supported-currency" }, "Somethings went wrong!")), c.a.createElement("div", { className: "flex-all-center" }, c.a.createElement(Ec.b, { className: "btn btn--small ".concat(U), to: "/transfer/".concat(n) }, "Transfer"), c.a.createElement("div", { className: "btn btn--small ".concat(U, " ml-4"), onClick: Object(ft.a)(j.a.mark((function e() { var t; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    h && (t = f.find((function(e) { return e.address === h.address }))), t && G.push(Object(oe.q)(X.C[o], t && t.address));
                                case 2:
                                case "end":
                                    return e.stop() } }), e) }))) }, "Swap"), K && c.a.createElement(Ec.b, { className: "btn btn--small ".concat(U, " ml-4"), to: "/supply/".concat(n) }, "Earn")))), !R && void 0 !== h && c.a.createElement("div", { className: "column-container__item right" }, c.a.createElement("div", { className: "statistic" }, c.a.createElement("div", { className: "token-details__header fs-5 fw-300" }, "Stats"), c.a.createElement("div", { className: "flex-between-start mt-3" }, c.a.createElement("div", null, c.a.createElement("div", { className: "title mb-2" }, "Market Cap"), c.a.createElement("div", { className: "fw-400" }, Object(oe.k)(Object(oe.C)(Object(Ct.get)(h, "markets.".concat(s, ".marketCap"), 0)), s))), c.a.createElement("div", null, c.a.createElement("div", { className: "title mb-2" }, "All Time Low"), c.a.createElement("div", { className: "fw-400" }, Object(oe.k)(Object(oe.m)(Object(Ct.get)(h, "markets.".concat(s, ".atl"), 0), 2), s))), c.a.createElement("div", null, c.a.createElement("div", { className: "title mb-2" }, "All Time High"), c.a.createElement("div", { className: "fw-400" }, Object(oe.k)(Object(oe.m)(Object(Ct.get)(h, "markets.".concat(s, ".ath"), 0), 2), s)))), c.a.createElement(Am, { text: (null === h || void 0 === h ? void 0 : h.description) || "", className: "token-details__desc", limit: 400 }), c.a.createElement(cd, { tokenAddr: n || "", links: (null === h || void 0 === h ? void 0 : h.links) || {} })))))) } var sd = a(626),
                od = a.n(sd),
                id = a(627),
                ud = a.n(id);

            function md() { var e = Object(i.c)((function(e) { return e.global })).notifications; return c.a.createElement("div", { className: "container notifications" }, c.a.createElement("div", { className: "notifications__header" }, "Notifications"), c.a.createElement("div", { className: "notifications__wrapper" }, 0 === e.length && c.a.createElement("div", { className: "align-center pt-8 pb-8" }, c.a.createElement("img", { src: ud.a, alt: "" }), c.a.createElement("br", null), c.a.createElement("div", { className: "text-white-70 fs-3 mt-4" }, "No Transactions yet!")), e.map((function(e, t) { return c.a.createElement("div", { className: "notifications__item", key: t, onClick: function() { e.link && window.open(e.link, "_blank") } }, c.a.createElement("img", { className: "notifications__image", src: "" !== e.image ? e.image : od.a, alt: "" }), c.a.createElement("div", null, c.a.createElement("div", { className: "mb-1" }, c.a.createElement("span", { className: "notifications__title" }, e.title), c.a.createElement("span", { className: "notifications__time" }, ue()(e.createdAt).fromNow())), c.a.createElement("div", { className: "notifications__content" }, e.content))) })))) } var dd, fd = function(e) { var t = X.s,
                        a = e.currentCampaign ? window.innerWidth < X.B ? t + e.currentCampaign.banner_mobile : t + e.currentCampaign.banner : ""; return c.a.createElement("div", { className: "campaign__banner w-100", style: { backgroundImage: 'url("'.concat(a, '")') } }) },
                pd = ["svgRef", "title"];

            function bd() { return (bd = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function vd(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ed, hd = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = vd(e, pd); return c.a.createElement("svg", bd({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, dd || (dd = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-937.000000, -417.000000) translate(937.000000, 417.000000) translate(-0.000000, 0.000000)" }), c.a.createElement("path", { stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M14.817 4.167c1.556 1.556 1.556 4.078 0 5.634s-4.078 1.556-5.634 0-1.556-4.078 0-5.634 4.078-1.556 5.634 0M12 14.008c4.554 0 9 1.967 9 4.992v1c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-1c0-3.026 4.446-4.992 9-4.992", transform: "translate(-937.000000, -417.000000) translate(937.000000, 417.000000) translate(-0.000000, 0.000000)" }), c.a.createElement("path", { d: "M0 0L24 0 24 24 0 24z", transform: "translate(-937.000000, -417.000000) translate(937.000000, 417.000000) translate(-0.000000, 0.000000)" }))))))) },
                gd = c.a.forwardRef((function(e, t) { return c.a.createElement(hd, bd({ svgRef: t }, e)) })),
                Od = (a.p, function(e) { return "0".concat(e).slice(-2) }),
                yd = function(e) { var t = Object(r.useState)(""),
                        a = Object(Z.a)(t, 2),
                        n = a[0],
                        l = a[1],
                        s = Object(i.c)((function(e) { return e.global })).chainId,
                        o = Object(vc.g)(),
                        u = Object(r.useState)({ days: NaN, hours: NaN, minutes: NaN, seconds: NaN }),
                        m = Object(Z.a)(u, 2),
                        d = m[0],
                        f = m[1],
                        p = Object(r.useCallback)((function() { var t = new Date(e.startTime).getTime(),
                                a = new Date(e.endTime).getTime(),
                                n = (new Date).getTime(),
                                r = -1; if (n < t ? (l("Start in"), r = t - n) : n < a && (l("Ends in"), r = a - n), r < 0) f({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                            else { var c = Math.floor(r / 864e5),
                                    s = Math.floor((r - 864e5 * c) / 36e5),
                                    o = Math.floor((r - 864e5 * c - 36e5 * s) / 6e4),
                                    i = Math.floor((r - 864e5 * c - 36e5 * s - 6e4 * o) / 1e3);
                                f({ days: c, hours: s, minutes: o, seconds: i }) } }), [e.endTime, e.startTime]),
                        b = Object(r.useMemo)((function() { return X.d.BSC, "/swap" }), [s]); return no(p, 1e3), c.a.createElement("div", { className: "campaign__counter w-100" }, c.a.createElement("div", { className: "campaign__counter__item" }, c.a.createElement("button", { className: "btn", onClick: function() { o.push(b) } }, "Enter Now")), c.a.createElement("div", { className: "campaign__counter__item campaign__counter__timer" }, c.a.createElement("div", { className: "campaign__counter__timer__status" }, n), c.a.createElement("div", { className: "campaign__counter__timer--item" }, c.a.createElement("div", { className: "value" }, isNaN(null === d || void 0 === d ? void 0 : d.days) ? "--" : Od(d.days)), c.a.createElement("div", { className: "label" }, "Days")), c.a.createElement("div", { className: "campaign__counter__timer--item" }, c.a.createElement("div", { className: "value" }, isNaN(null === d || void 0 === d ? void 0 : d.hours) ? "--" : Od(d.hours)), c.a.createElement("div", { className: "label" }, "Hours")), c.a.createElement("div", { className: "campaign__counter__timer--item" }, c.a.createElement("div", { className: "value" }, isNaN(null === d || void 0 === d ? void 0 : d.minutes) ? "--" : Od(d.minutes)), c.a.createElement("div", { className: "label" }, "Minutes")), c.a.createElement("div", { className: "campaign__counter__timer--item" }, c.a.createElement("div", { className: "value" }, isNaN(null === d || void 0 === d ? void 0 : d.seconds) ? "--" : Od(d.seconds)), c.a.createElement("div", { className: "label" }, "Seconds"))), c.a.createElement("div", { className: "campaign__counter__item fs-4 fw-300" }, c.a.createElement(gd, { width: "24", className: "mr-2" }), " ", e.userCount, " Participants")) },
                jd = function(e) { return c.a.createElement("div", { className: "campaign__tabs" }, e.tabs.map((function(t) { var a = t.name,
                            n = t.key; return c.a.createElement("div", { className: "campaign__tabs__item ".concat(e.activeIndex === n && "active"), key: n, onClick: function() { return e.activeIndex !== n && e.onChangeTabIndex(n) } }, c.a.createElement("div", { className: "label" }, a)) }))) },
                kd = function(e) { return c.a.createElement("div", { className: "campaign__tab-content w-100" }, c.a.createElement("h2", null, "About Company"), c.a.createElement("img", { src: e.baseUrl + e.campaign.company_image, alt: "", style: { maxWidth: "100%" } }), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.about_company } }), c.a.createElement("h2", null, "About Token"), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.about_token } }), c.a.createElement("h2", null, "More Information"), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.more_information } })) },
                wd = function(e) { return c.a.createElement("div", { className: "campaign__tab-content w-100" }, c.a.createElement("h2", null, "How to Start"), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.how_to_start } }), c.a.createElement("h2", null, "Video Guide"), c.a.createElement("div", { className: "video" }, c.a.createElement("iframe", { width: "560", height: "315", src: e.campaign.video_url, title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: !0 }))) },
                xd = a(628),
                Nd = a.n(xd),
                _d = a(629),
                Td = function(e) { var t = Object(i.c)((function(e) { return e.account })).address,
                        a = Object(r.useState)(0),
                        l = Object(Z.a)(a, 2),
                        s = l[0],
                        o = l[1],
                        u = Object(r.useState)(""),
                        m = Object(Z.a)(u, 2),
                        d = m[0],
                        f = m[1],
                        p = Object(r.useState)(e.tradingScores),
                        b = Object(Z.a)(p, 2),
                        v = b[0],
                        E = b[1];
                    Object(r.useEffect)((function() { o(0); var t = e.tradingScores.filter((function(e) { var t = e.index,
                                a = e.trader,
                                n = e.score,
                                r = e.reward; return "".concat(t).includes(d) || a.toLowerCase().includes(d.toLowerCase()) || "".concat(n).includes(d) || "".concat(r).includes(d) }));
                        E(t) }), [e.tradingScores, d]); var h = Object(r.useMemo)((function() { return v.length ? Object(Ct.chunk)(v, 10) : [
                                []
                            ] }), [v]),
                        g = Object(r.useMemo)((function() { return h[s].length ? Object(n.a)(Array(10 - h[s].length)).map((function() { return c.a.createElement(sl.a, null, c.a.createElement(rl.a, null, " ")) })) : "" }), [s, h]); return c.a.createElement("div", { className: "campaign__tab-content w-100" }, c.a.createElement("div", { className: "input-container" }, c.a.createElement("input", { onChange: function(e) { f(e.target.value) }, className: "input", type: "text", placeholder: "Search" }), c.a.createElement("div", { className: "input-tool" }, c.a.createElement(cs, { stroke: "#fff" }))), !e.loading && !!t && X.A.includes(t.toLowerCase()) && c.a.createElement(_d.CSVLink, { data: e.tradingScores }, "Download Campaign Reward List"), c.a.createElement(cl.a, null, c.a.createElement(al.a, null, c.a.createElement(ll.a, null, c.a.createElement(sl.a, null, c.a.createElement(rl.a, { className: "rank" }, "Rank"), c.a.createElement(rl.a, { className: "address" }, "Wallet"), c.a.createElement(rl.a, { className: "points" }, "Points"), c.a.createElement(rl.a, { className: "reward" }, "Reward"))), c.a.createElement(nl.a, null, !e.loading && !!h[s] && c.a.createElement(c.a.Fragment, null, h[s].map((function(t) { var a = t.index,
                            n = t.trader,
                            r = t.score,
                            l = t.reward; return c.a.createElement(sl.a, { key: n }, c.a.createElement(rl.a, { className: "rank ".concat(1 === a && "active") }, a), c.a.createElement(rl.a, { className: "address ".concat(1 === a && "active") }, "0x####" + n.slice(6, 38) + "####"), c.a.createElement(rl.a, { className: "points ".concat(1 === a && "active") }, r), c.a.createElement(rl.a, { className: "reward ".concat(1 === a && "active") }, l ? "".concat(l, " ").concat(e.rewardIn) : "")) })), g)))), !e.loading && !h[s].length && c.a.createElement("div", { className: "not-found" }, c.a.createElement("p", null, "No matching records found")), e.loading && c.a.createElement("div", { className: "not-found" }, c.a.createElement("p", null, c.a.createElement(Zc, null))), !!h.length && c.a.createElement(Nd.a, { previousLabel: "<", nextLabel: ">", breakLabel: "...", breakClassName: "break-me", initialPage: s, forcePage: s, pageCount: h.length, marginPagesDisplayed: 2, pageRangeDisplayed: 6, onPageChange: function(e) { var t = e.selected;
                            o(t) }, containerClassName: "pagination", activeClassName: "active" })) },
                Ad = ["svgRef", "title"];

            function Sd() { return (Sd = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Cd(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Rd, Pd = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Cd(e, Ad); return c.a.createElement("svg", Sd({ width: 64, height: 54, ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ed || (Ed = c.a.createElement("g", { fillRule: "nonzero", fill: "none" }, c.a.createElement("ellipse", { fill: "#F2BE37", cx: 32.233, cy: 22.178, rx: 22.342, ry: 22.178 }), c.a.createElement("g", { fill: "#0F0F0F" }, c.a.createElement("path", { d: "M24.896 24V13.768h-1.184c-.32.245-.644.433-.972.564-.328.13-.665.217-1.012.26v1.472c.277-.01.555-.057.832-.14.277-.083.55-.201.816-.356V24h1.52zm6.52.208c.827 0 1.528-.127 2.104-.38.576-.253 1.013-.601 1.312-1.044.299-.443.448-.952.448-1.528 0-.683-.208-1.245-.624-1.688-.416-.443-.995-.795-1.736-1.056l-2.16-.792c-.459-.16-.796-.339-1.012-.536-.216-.197-.324-.461-.324-.792 0-.4.17-.732.512-.996.341-.264.816-.396 1.424-.396.63 0 1.11.128 1.444.384a1.6 1.6 0 0 1 .612 1.04h1.496c-.085-.864-.428-1.547-1.028-2.048-.6-.501-1.441-.752-2.524-.752-1.141 0-2.027.252-2.656.756-.63.504-.944 1.159-.944 1.964 0 .71.213 1.263.64 1.66.427.397 1.048.748 1.864 1.052l1.896.704c.49.165.856.367 1.096.604.24.237.36.55.36.94 0 .288-.092.544-.276.768-.184.224-.444.403-.78.536s-.723.2-1.16.2c-.432 0-.827-.068-1.184-.204a1.91 1.91 0 0 1-.86-.628c-.216-.283-.324-.645-.324-1.088h-1.488c.016.736.201 1.35.556 1.84.355.49.823.86 1.404 1.108a4.823 4.823 0 0 0 1.912.372zM41.232 24v-8.88h3.256v-1.312h-8.032v1.312h3.256V24h1.52zM23.672 33v-1.888h.88c.584 0 1.04-.144 1.366-.432.327-.288.49-.693.49-1.216 0-.528-.163-.936-.49-1.224-.327-.288-.782-.432-1.366-.432H22.72V33h.952zm.88-2.712h-.88v-1.664h.88c.293 0 .515.079.664.236.15.157.224.359.224.604 0 .24-.075.437-.224.592-.15.155-.37.232-.664.232zM28.332 33v-2.024h.719L30.196 33h1.232l-1.386-2.107c.225-.059.418-.146.58-.26l.116-.091c.332-.29.498-.67.498-1.142 0-.48-.166-.865-.498-1.156-.332-.29-.809-.436-1.43-.436h-1.92V33h.944zm.88-2.656h-.88v-1.72h.976c.315 0 .553.08.716.238.163.159.244.367.244.626 0 .253-.09.46-.268.618-.179.159-.441.238-.788.238zM33.48 33v-5.192h-.944V33h.944zm5.26 0v-.864l-2.739-.008 2.739-3.512v-.808h-3.928v.864l2.747.007-2.747 3.505V33h3.928zm4.588 0v-.824h-2.392v-1.368h2.248v-.816h-2.248v-1.368h2.392v-.816h-3.336V33h3.336z" })), c.a.createElement("path", { d: "m32 47.07 1.079 2.28 2.412.367-1.746 1.775.413 2.508L32 52.818 29.843 54l.412-2.508-1.746-1.775 2.412-.367L32 47.07zm7.564.577.899 1.71 2.01.276-1.455 1.331.343 1.88-1.797-.887-1.798.888.344-1.88-1.455-1.332 2.01-.276.899-1.71zm-15.128 0 .9 1.71 2.01.276-1.456 1.331.344 1.88-1.798-.887-1.797.888.343-1.88-1.455-1.332 2.01-.276.9-1.71zm35.032-26.5s.402.28.847.814c.42.534.996 1.322 1.016 2.272a4.422 4.422 0 0 1-.312 1.894 5.284 5.284 0 0 1-.771 1.192l-.036.867c-.01.215-.018.431-.027.593-.01.163-.032.27-.032.27.21-.517.435-1.06.842-1.5.572-.634 1.322-.946 1.932-1.089a4.36 4.36 0 0 1 .93-.116h.106l.038.002v.033a9.098 9.098 0 0 1-.141 1.4c-.074.4-.185.843-.346 1.264-.185.42-.46.814-.777 1.128-1.016.986-2.35.863-2.874.79l-.095.596-.346 1.279c-.127.466-.254.931-.348 1.282-.082.352-.185.571-.185.571.376-.551.772-1.145 1.373-1.562.792-.571 1.704-.744 2.415-.764.712-.02 1.222.12 1.222.12s-.156.709-.521 1.577a8.026 8.026 0 0 1-.707 1.34c-.29.435-.717.805-1.149 1.08-1.414.869-2.882.354-3.419.144 0 0-.088.215-.218.54-.156.314-.393.718-.617 1.128l-.62 1.125a47.23 47.23 0 0 1-.206.373l-.096.128c.548-.545 1.185-1.123 1.991-1.458a4.707 4.707 0 0 1 1.517-.352c.465-.043.91-.009 1.296.056.77.132 1.297.404 1.297.404s-.07.196-.212.507c-.146.305-.413.704-.728 1.144-.644.871-1.517 1.883-2.676 2.236-1.812.612-3.28-.37-3.786-.726 0 0-.127.189-.339.453-.23.253-.535.587-.844.922l-.841.92c-.222.26-.408.395-.408.395.765-.46 1.628-.967 2.636-1.138a6.387 6.387 0 0 1 1.702-.046c.519.064.995.202 1.397.364.807.319 1.309.735 1.309.735s-.13.197-.367.501c-.118.152-.26.334-.43.529-.19.183-.4.377-.635.578-.938.794-2.164 1.69-3.517 1.786-2.155.22-3.457-1.263-3.886-1.763 0 0-.066.066-.194.159l-.547.368-1.656 1.118c-1.284.69-2.587 1.345-2.587 1.345l-.191-.416 1.817-.933c.225-.119.452-.236.666-.346l.54-.367c.316-.216.527-.357.527-.357-.388-.54-1.324-2.255-1.106-3.93a4.34 4.34 0 0 1 .372-1.45c.183-.433.453-.767.637-1.13.403-.68.833-1.087.833-1.087s.528.386 1.073 1.03c.542.647 1.092 1.566 1.075 2.708.02.967-.514 1.756-1.021 2.476 0 0 .676-.584 1.354-1.167.619-.638 1.212-1.303 1.212-1.303-.486-.415-1.646-1.673-1.828-3.212-.163-.983.129-1.843.387-2.523a5.428 5.428 0 0 1 .498-1.135l.02-.033s.542.238 1.152.709c.609.472 1.282 1.185 1.504 2.204.19.804-.075 1.58-.35 2.295 0 0 .534-.75 1.07-1.496l.886-1.608c-.526-.268-1.776-1.105-2.253-2.409-.33-.83-.291-1.677-.154-2.325.079-.668.223-1.155.223-1.155s.517.108 1.143.408c.625.305 1.36.812 1.762 1.664.241.613.246 1.322.157 1.966 0 0 .356-.878.709-1.759l.494-1.828c-.517-.134-1.763-.601-2.385-1.622-.454-.66-.591-1.417-.605-2.02.004-.298-.014-.563-.016-.753-.002-.188.01-.303.01-.303h.037c.123.004.53.024 1.028.15.582.152 1.358.465 1.807 1.123.314.458.463 1.026.527 1.569l.248-1.637c.069-.822.088-1.646.088-1.646a7.026 7.026 0 0 1-.687-1.155c-.274-.489-.505-1.06-.543-1.683-.011-.844.118-1.633.389-2.264.247-.621.524-1.057.524-1.057zm-54.936 0s.277.437.524 1.058c.27.63.4 1.42.389 2.264-.038.622-.269 1.194-.543 1.683-.233.49-.494.898-.687 1.155 0 0 .02.824.088 1.646l.248 1.637c.064-.543.213-1.11.527-1.569.45-.658 1.225-.971 1.807-1.123a4.953 4.953 0 0 1 1.028-.15h.037s.012.115.01.303c-.002.19-.02.455-.016.754-.014.602-.151 1.358-.605 2.02-.622 1.02-1.868 1.487-2.385 1.62l.494 1.83c.353.88.71 1.758.71 1.758-.09-.644-.085-1.353.156-1.966.403-.852 1.137-1.359 1.762-1.664.626-.3 1.143-.408 1.143-.408s.144.487.223 1.155c.137.648.177 1.494-.154 2.325-.477 1.304-1.727 2.14-2.253 2.409l.886 1.608c.536.746 1.07 1.496 1.07 1.496-.275-.715-.54-1.49-.35-2.295.222-1.019.895-1.732 1.504-2.204.61-.47 1.152-.709 1.152-.709l.02.033c.07.116.313.54.498 1.135.258.68.55 1.54.387 2.523-.182 1.539-1.342 2.797-1.828 3.212 0 0 .593.665 1.212 1.303.678.583 1.354 1.167 1.354 1.167-.507-.72-1.041-1.51-1.02-2.476-.018-1.142.532-2.06 1.074-2.707.545-.645 1.073-1.03 1.073-1.03s.43.407.833 1.086c.184.363.454.697.637 1.13.191.424.33.912.372 1.45.218 1.675-.718 3.39-1.106 3.93 0 0 .21.141.527.357l.54.367c.214.11.44.227.666.346l1.817.933-.191.416s-1.303-.656-2.587-1.345l-1.656-1.118-.547-.368c-.128-.093-.194-.159-.194-.159-.43.5-1.731 1.982-3.886 1.763-1.353-.097-2.579-.992-3.517-1.786-.234-.2-.446-.395-.635-.578-.17-.195-.312-.377-.43-.529-.238-.304-.367-.501-.367-.501s.502-.416 1.31-.735c.4-.162.877-.3 1.396-.364a6.387 6.387 0 0 1 1.702.046c1.008.171 1.87.678 2.636 1.138 0 0-.186-.134-.408-.395l-.841-.92c-.309-.335-.615-.669-.844-.922-.212-.264-.34-.453-.34-.453-.505.356-1.973 1.338-3.785.726-1.16-.353-2.032-1.365-2.676-2.236-.315-.44-.582-.839-.728-1.144a7.58 7.58 0 0 1-.212-.507s.528-.272 1.297-.404c.385-.065.83-.1 1.296-.056a4.707 4.707 0 0 1 1.517.352c.806.335 1.443.913 1.991 1.458l-.096-.128a47.23 47.23 0 0 1-.206-.373l-.62-1.125c-.224-.41-.46-.814-.617-1.127-.13-.326-.218-.541-.218-.541-.537.21-2.005.725-3.419-.144-.432-.275-.859-.645-1.15-1.08a8.026 8.026 0 0 1-.706-1.34 10.205 10.205 0 0 1-.52-1.576s.51-.142 1.221-.121c.711.02 1.623.193 2.415.764.6.417.997 1.01 1.373 1.562 0 0-.103-.22-.185-.571-.094-.351-.221-.816-.348-1.282l-.346-1.279-.095-.596c-.523.073-1.858.196-2.874-.79a3.757 3.757 0 0 1-.777-1.128A7.257 7.257 0 0 1 .14 27.78 9.18 9.18 0 0 1 0 26.418v-.072s.467-.03 1.073.113c.61.143 1.36.455 1.932 1.09.408.44.633.983.843 1.499 0 0-.022-.107-.032-.27-.01-.161-.018-.378-.027-.593l-.036-.866a5.284 5.284 0 0 1-.772-1.192 4.422 4.422 0 0 1-.311-1.895c.02-.95.596-1.738 1.016-2.272.444-.532.846-.812.846-.812z", fill: "#F2BE37" })))) },
                Ld = c.a.forwardRef((function(e, t) { return c.a.createElement(Pd, Sd({ svgRef: t }, e)) })),
                Id = (a.p, ["svgRef", "title"]);

            function Md() { return (Md = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Dd(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Fd, Bd = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Dd(e, Id); return c.a.createElement("svg", Md({ width: 48, height: 41, viewBox: "0 0 48 41", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Rd || (Rd = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-769.000000, -768.000000) translate(328.000000, 555.000000) translate(157.000000, 124.000000) translate(284.000000, 89.000000)" }, c.a.createElement("ellipse", { cx: 24.174, cy: 16.428, fill: "#A9AEAD", fillRule: "nonzero", rx: 16.756, ry: 16.428 }), c.a.createElement("g", { fill: "#0F0F0F" }, c.a.createElement("text", { fontFamily: "Karla-Medium, Karla", fontSize: 10, fontWeight: 400, transform: "translate(14.749858, 8.074129)" }, c.a.createElement("tspan", { x: 0, y: 9 }, "2ND")), c.a.createElement("text", { fontFamily: "Karla-Bold, Karla", fontSize: 6, fontWeight: "bold", transform: "translate(14.749858, 8.074129)" }, c.a.createElement("tspan", { x: 1.75, y: 15.127 }, "PRIZE"))), c.a.createElement("path", { fill: "#A9AEAD", fillRule: "nonzero", d: "M24 35.302l.809 1.71 1.809.275-1.31 1.332.31 1.88L24 39.614l-1.618.887.31-1.881-1.31-1.332 1.809-.275.809-1.71zm5.672.433l.675 1.282 1.507.208-1.091.998.257 1.41-1.348-.666-1.348.666.258-1.41-1.091-.998 1.507-.208.674-1.282zm-11.345 0l.674 1.282 1.508.208-1.091.998.257 1.41-1.348-.666-1.348.666.258-1.41-1.092-.998 1.508-.208.674-1.282zM44.6 15.861l.029.02c.082.062.334.262.607.59.315.4.747.991.762 1.704.035.524-.076 1.02-.234 1.42-.184.403-.424.71-.579.894l-.027.65c-.007.161-.013.324-.02.445-.008.122-.024.202-.024.202.157-.387.326-.794.632-1.125.429-.475.992-.71 1.449-.816.455-.107.805-.086.805-.086v.038c-.002.123-.016.535-.106 1.037-.055.3-.138.632-.26.948-.138.314-.344.61-.581.846-.763.74-1.764.647-2.156.592l-.072.448-.26.959c-.094.349-.19.698-.26.961-.061.264-.139.429-.139.429.282-.414.58-.86 1.03-1.172.594-.428 1.278-.558 1.811-.573.534-.016.917.09.917.09s-.117.532-.39 1.183c-.138.325-.313.68-.531 1.005-.218.326-.538.603-.862.81-1.06.651-2.162.265-2.564.107l-.164.406c-.117.235-.294.538-.462.846l-.466.844-.154.279-.072.097c.411-.41.89-.843 1.493-1.094.385-.163.774-.24 1.138-.264.35-.033.683-.007.972.042.48.082.836.238.94.287l.032.016s-.052.147-.158.38c-.11.229-.31.528-.546.858-.483.653-1.138 1.412-2.007 1.677-1.359.459-2.46-.278-2.84-.545 0 0-.095.142-.254.34-.172.19-.401.44-.633.692l-.631.69c-.118.14-.224.23-.274.271l-.031.025c.573-.345 1.22-.725 1.976-.854.467-.073.896-.077 1.277-.034.389.048.746.152 1.047.273.42.166.729.366.88.474l.096.072c.006.005-.09.153-.269.381-.088.114-.195.25-.323.397-.141.137-.3.283-.475.433-.704.596-1.624 1.267-2.639 1.34-1.615.164-2.592-.948-2.914-1.322 0 0-.05.049-.145.118l-.41.277-1.243.838c-.802.43-1.614.844-1.863.97l-.068.034-.009.005-.143-.312 1.363-.7.499-.26c.148-.1.288-.194.405-.275l.395-.267c-.29-.405-.992-1.691-.83-2.947.032-.404.136-.77.28-1.088.137-.325.34-.575.478-.847.251-.425.518-.708.6-.79l.025-.026s.395.29.804.773c.407.485.82 1.174.806 2.03.016.725-.385 1.317-.766 1.858l1.016-.876c.464-.478.909-.977.909-.977-.364-.311-1.234-1.255-1.371-2.409-.122-.737.097-1.382.29-1.892.164-.527.389-.876.389-.876s.406.178.864.531c.457.354.961.89 1.128 1.654.142.603-.056 1.184-.263 1.72l.803-1.121.665-1.206c-.395-.201-1.333-.829-1.69-1.807-.248-.623-.219-1.258-.116-1.744.06-.5.167-.866.167-.866l.037.008c.107.026.436.114.82.298.47.23 1.02.61 1.322 1.248.18.46.184.991.118 1.475 0 0 .267-.66.531-1.32l.371-1.371c-.388-.1-1.322-.45-1.789-1.216-.34-.496-.443-1.063-.453-1.515.003-.224-.011-.422-.013-.565 0-.14.008-.227.008-.227h.04l.112.007c.145.01.378.038.647.105.436.114 1.018.35 1.355.843.236.343.347.769.395 1.176l.187-1.227c.05-.617.065-1.235.065-1.235-.144-.193-.34-.498-.515-.866-.206-.367-.379-.796-.407-1.262-.009-.634.089-1.225.292-1.698.185-.466.392-.793.392-.793zm-41.2 0s.207.327.392.793c.203.473.3 1.064.291 1.698-.028.466-.2.895-.406 1.262-.175.368-.371.673-.516.866 0 0 .015.618.066 1.235l.186 1.227c.048-.407.16-.833.396-1.176.336-.494.918-.729 1.355-.843.268-.067.502-.094.646-.105l.112-.006.04-.001s.01.086.008.227c-.001.143-.015.341-.012.565-.01.452-.113 1.02-.454 1.515-.467.766-1.4 1.116-1.789 1.216l.371 1.371.532 1.32c-.067-.484-.063-1.015.117-1.475.302-.639.853-1.019 1.322-1.248.47-.225.858-.306.858-.306s.107.365.167.866c.102.486.132 1.121-.116 1.744-.358.978-1.296 1.606-1.69 1.807l.665 1.206.17.238c.338.47.632.884.632.884-.206-.537-.404-1.118-.262-1.721.167-.765.67-1.3 1.128-1.654.458-.353.864-.531.864-.531s.224.35.388.876c.194.51.413 1.155.29 1.892-.136 1.154-1.006 2.098-1.37 2.409 0 0 .444.499.908.977l1.016.876c-.38-.54-.781-1.133-.766-1.858-.013-.856.4-1.545.806-2.03.41-.484.805-.773.805-.773s.323.306.625.816c.138.272.34.522.478.847.143.318.247.684.279 1.088.163 1.256-.54 2.542-.83 2.947l.395.267.406.275.499.26 1.363.7-.144.312-.008-.005-.068-.034c-.216-.11-.855-.434-1.544-.8l-.32-.17-1.242-.838-.41-.277c-.096-.069-.146-.118-.146-.118-.321.374-1.298 1.486-2.914 1.322-1.014-.073-1.934-.744-2.638-1.34-.176-.15-.334-.296-.476-.433-.128-.147-.234-.283-.323-.397-.178-.228-.275-.376-.275-.376s.377-.312.982-.551c.301-.121.659-.225 1.048-.273.38-.043.81-.04 1.276.034.756.129 1.403.509 1.977.854 0 0-.14-.1-.305-.296l-.632-.69c-.139-.15-.277-.301-.402-.439l-.23-.253c-.16-.198-.255-.34-.255-.34-.38.267-1.48 1.004-2.84.545-.869-.265-1.523-1.024-2.007-1.677-.235-.33-.436-.63-.546-.858-.105-.233-.158-.38-.158-.38l.032-.016c.105-.05.46-.205.94-.287.29-.049.623-.075.973-.042.363.025.753.101 1.137.264.604.251 1.082.684 1.494 1.094l-.072-.097-.155-.28-.465-.843c-.168-.308-.345-.611-.463-.846l-.163-.406c-.403.158-1.504.544-2.565-.107-.323-.207-.644-.484-.861-.81-.219-.325-.393-.68-.53-1.005-.274-.651-.391-1.182-.391-1.182s.383-.107.916-.09c.534.014 1.218.144 1.811.572.45.312.748.758 1.03 1.172 0 0-.077-.165-.138-.429l-.261-.961-.26-.96-.071-.447c-.393.055-1.394.148-2.156-.592-.237-.236-.443-.532-.582-.846-.122-.316-.204-.648-.26-.948-.09-.502-.103-.914-.105-1.037v-.038s.35-.022.805.085c.457.107 1.02.341 1.449.817.306.33.475.738.632 1.125 0 0-.016-.08-.024-.202-.007-.122-.013-.284-.02-.445l-.027-.65c-.155-.184-.395-.492-.58-.894-.157-.4-.268-.897-.233-1.42.015-.713.447-1.305.762-1.705.333-.4.635-.61.635-.61z" })))))))) },
                Kd = c.a.forwardRef((function(e, t) { return c.a.createElement(Bd, Md({ svgRef: t }, e)) })),
                Wd = (a.p, ["svgRef", "title"]);

            function Gd() { return (Gd = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Hd(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Vd = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Hd(e, Wd); return c.a.createElement("svg", Gd({ width: 48, height: 41, viewBox: "0 0 48 41", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Fd || (Fd = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-769.000000, -820.000000) translate(328.000000, 555.000000) translate(157.000000, 124.000000) translate(284.000000, 141.499628)" }, c.a.createElement("ellipse", { cx: 24.174, cy: 16.428, fill: "#A9AEAD", fillRule: "nonzero", rx: 16.756, ry: 16.428 }), c.a.createElement("g", { fill: "#0F0F0F" }, c.a.createElement("text", { fontFamily: "Karla-Medium, Karla", fontSize: 10, fontWeight: 400, transform: "translate(14.749858, 8.074129)" }, c.a.createElement("tspan", { x: 0, y: 9 }, "3RD")), c.a.createElement("text", { fontFamily: "Karla-Bold, Karla", fontSize: 6, fontWeight: "bold", transform: "translate(14.749858, 8.074129)" }, c.a.createElement("tspan", { x: 1.75, y: 15.127 }, "PRIZE"))), c.a.createElement("path", { fill: "#A9AEAD", fillRule: "nonzero", d: "M24 35.302l.809 1.71 1.809.275-1.31 1.332.31 1.88L24 39.614l-1.618.887.31-1.881-1.31-1.332 1.809-.275.809-1.71zm5.672.433l.675 1.282 1.507.208-1.091.998.257 1.41-1.348-.666-1.348.666.258-1.41-1.091-.998 1.507-.208.674-1.282zm-11.345 0l.674 1.282 1.508.208-1.091.998.257 1.41-1.348-.666-1.348.666.258-1.41-1.092-.998 1.508-.208.674-1.282zM44.6 15.861l.029.02c.082.062.334.262.607.59.315.4.747.991.762 1.704.035.524-.076 1.02-.234 1.42-.184.403-.424.71-.579.894l-.027.65c-.007.161-.013.324-.02.445-.008.122-.024.202-.024.202.157-.387.326-.794.632-1.125.429-.475.992-.71 1.449-.816.455-.107.805-.086.805-.086v.038c-.002.123-.016.535-.106 1.037-.055.3-.138.632-.26.948-.138.314-.344.61-.581.846-.763.74-1.764.647-2.156.592l-.072.448-.26.959c-.094.349-.19.698-.26.961-.061.264-.139.429-.139.429.282-.414.58-.86 1.03-1.172.594-.428 1.278-.558 1.811-.573.534-.016.917.09.917.09s-.117.532-.39 1.183c-.138.325-.313.68-.531 1.005-.218.326-.538.603-.862.81-1.06.651-2.162.265-2.564.107l-.164.406c-.117.235-.294.538-.462.846l-.466.844-.154.279-.072.097c.411-.41.89-.843 1.493-1.094.385-.163.774-.24 1.138-.264.35-.033.683-.007.972.042.48.082.836.238.94.287l.032.016s-.052.147-.158.38c-.11.229-.31.528-.546.858-.483.653-1.138 1.412-2.007 1.677-1.359.459-2.46-.278-2.84-.545 0 0-.095.142-.254.34-.172.19-.401.44-.633.692l-.631.69c-.118.14-.224.23-.274.271l-.031.025c.573-.345 1.22-.725 1.976-.854.467-.073.896-.077 1.277-.034.389.048.746.152 1.047.273.42.166.729.366.88.474l.096.072c.006.005-.09.153-.269.381-.088.114-.195.25-.323.397-.141.137-.3.283-.475.433-.704.596-1.624 1.267-2.639 1.34-1.615.164-2.592-.948-2.914-1.322 0 0-.05.049-.145.118l-.41.277-1.243.838c-.802.43-1.614.844-1.863.97l-.068.034-.009.005-.143-.312 1.363-.7.499-.26c.148-.1.288-.194.405-.275l.395-.267c-.29-.405-.992-1.691-.83-2.947.032-.404.136-.77.28-1.088.137-.325.34-.575.478-.847.251-.425.518-.708.6-.79l.025-.026s.395.29.804.773c.407.485.82 1.174.806 2.03.016.725-.385 1.317-.766 1.858l1.016-.876c.464-.478.909-.977.909-.977-.364-.311-1.234-1.255-1.371-2.409-.122-.737.097-1.382.29-1.892.164-.527.389-.876.389-.876s.406.178.864.531c.457.354.961.89 1.128 1.654.142.603-.056 1.184-.263 1.72l.803-1.121.665-1.206c-.395-.201-1.333-.829-1.69-1.807-.248-.623-.219-1.258-.116-1.744.06-.5.167-.866.167-.866l.037.008c.107.026.436.114.82.298.47.23 1.02.61 1.322 1.248.18.46.184.991.118 1.475 0 0 .267-.66.531-1.32l.371-1.371c-.388-.1-1.322-.45-1.789-1.216-.34-.496-.443-1.063-.453-1.515.003-.224-.011-.422-.013-.565 0-.14.008-.227.008-.227h.04l.112.007c.145.01.378.038.647.105.436.114 1.018.35 1.355.843.236.343.347.769.395 1.176l.187-1.227c.05-.617.065-1.235.065-1.235-.144-.193-.34-.498-.515-.866-.206-.367-.379-.796-.407-1.262-.009-.634.089-1.225.292-1.698.185-.466.392-.793.392-.793zm-41.2 0s.207.327.392.793c.203.473.3 1.064.291 1.698-.028.466-.2.895-.406 1.262-.175.368-.371.673-.516.866 0 0 .015.618.066 1.235l.186 1.227c.048-.407.16-.833.396-1.176.336-.494.918-.729 1.355-.843.268-.067.502-.094.646-.105l.112-.006.04-.001s.01.086.008.227c-.001.143-.015.341-.012.565-.01.452-.113 1.02-.454 1.515-.467.766-1.4 1.116-1.789 1.216l.371 1.371.532 1.32c-.067-.484-.063-1.015.117-1.475.302-.639.853-1.019 1.322-1.248.47-.225.858-.306.858-.306s.107.365.167.866c.102.486.132 1.121-.116 1.744-.358.978-1.296 1.606-1.69 1.807l.665 1.206.17.238c.338.47.632.884.632.884-.206-.537-.404-1.118-.262-1.721.167-.765.67-1.3 1.128-1.654.458-.353.864-.531.864-.531s.224.35.388.876c.194.51.413 1.155.29 1.892-.136 1.154-1.006 2.098-1.37 2.409 0 0 .444.499.908.977l1.016.876c-.38-.54-.781-1.133-.766-1.858-.013-.856.4-1.545.806-2.03.41-.484.805-.773.805-.773s.323.306.625.816c.138.272.34.522.478.847.143.318.247.684.279 1.088.163 1.256-.54 2.542-.83 2.947l.395.267.406.275.499.26 1.363.7-.144.312-.008-.005-.068-.034c-.216-.11-.855-.434-1.544-.8l-.32-.17-1.242-.838-.41-.277c-.096-.069-.146-.118-.146-.118-.321.374-1.298 1.486-2.914 1.322-1.014-.073-1.934-.744-2.638-1.34-.176-.15-.334-.296-.476-.433-.128-.147-.234-.283-.323-.397-.178-.228-.275-.376-.275-.376s.377-.312.982-.551c.301-.121.659-.225 1.048-.273.38-.043.81-.04 1.276.034.756.129 1.403.509 1.977.854 0 0-.14-.1-.305-.296l-.632-.69c-.139-.15-.277-.301-.402-.439l-.23-.253c-.16-.198-.255-.34-.255-.34-.38.267-1.48 1.004-2.84.545-.869-.265-1.523-1.024-2.007-1.677-.235-.33-.436-.63-.546-.858-.105-.233-.158-.38-.158-.38l.032-.016c.105-.05.46-.205.94-.287.29-.049.623-.075.973-.042.363.025.753.101 1.137.264.604.251 1.082.684 1.494 1.094l-.072-.097-.155-.28-.465-.843c-.168-.308-.345-.611-.463-.846l-.163-.406c-.403.158-1.504.544-2.565-.107-.323-.207-.644-.484-.861-.81-.219-.325-.393-.68-.53-1.005-.274-.651-.391-1.182-.391-1.182s.383-.107.916-.09c.534.014 1.218.144 1.811.572.45.312.748.758 1.03 1.172 0 0-.077-.165-.138-.429l-.261-.961-.26-.96-.071-.447c-.393.055-1.394.148-2.156-.592-.237-.236-.443-.532-.582-.846-.122-.316-.204-.648-.26-.948-.09-.502-.103-.914-.105-1.037v-.038s.35-.022.805.085c.457.107 1.02.341 1.449.817.306.33.475.738.632 1.125 0 0-.016-.08-.024-.202-.007-.122-.013-.284-.02-.445l-.027-.65c-.155-.184-.395-.492-.58-.894-.157-.4-.268-.897-.233-1.42.015-.713.447-1.305.762-1.705.333-.4.635-.61.635-.61z" })))))))) },
                zd = c.a.forwardRef((function(e, t) { return c.a.createElement(Vd, Gd({ svgRef: t }, e)) })),
                Ud = (a.p, function(e) { return c.a.createElement("div", { className: "campaign__tab-content w-100" }, c.a.createElement("h2", null, "Reward"), c.a.createElement("div", { className: "campaign__reward" }, c.a.createElement("div", { className: "campaign__reward__left" }, c.a.createElement("img", { alt: "", src: e.baseUrl + e.campaign.token_logo })), c.a.createElement("div", { className: "campaign__reward__right" }, c.a.createElement("div", { className: "campaign__reward__right__item" }, c.a.createElement(Ld, null), c.a.createElement("div", null, e.campaign.rewards[0].reward, " ", e.campaign.token_symbol)), c.a.createElement("div", { className: "campaign__reward__right__item" }, c.a.createElement(Kd, null), c.a.createElement("div", null, e.campaign.rewards[1].reward, " ", e.campaign.token_symbol)), c.a.createElement("div", { className: "campaign__reward__right__item" }, c.a.createElement(zd, null), c.a.createElement("div", null, e.campaign.rewards[2].reward, " ", e.campaign.token_symbol)))), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.prize } }), c.a.createElement("h2", null, "Term & Conditions"), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.term_and_condition } }), c.a.createElement("h2", null, "Rule"), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.rule } }), c.a.createElement("h2", null, "Other Conditions"), c.a.createElement("div", { dangerouslySetInnerHTML: { __html: e.campaign.other_conditions } })) }); var Yd = function() { var e = Object(vc.h)(); return Object(r.useMemo)((function() { return new URLSearchParams(e.search) }), [e.search]) },
                qd = ["introduction", "how_to_start", "ranking", "reward"];

            function Qd() { var e = Object(i.c)((function(e) { return e.global })).chainId,
                    t = Object(r.useState)(),
                    a = Object(Z.a)(t, 2),
                    l = a[0],
                    s = a[1],
                    o = Object(vc.g)(),
                    u = Yd(),
                    m = Object(r.useMemo)((function() { var e = u.get("tab"); return e && qd.includes(e) ? e : "introduction" }), [u]),
                    d = Object(r.useState)(!0),
                    f = Object(Z.a)(d, 2),
                    p = f[0],
                    b = f[1],
                    v = Object(r.useCallback)(Object(ft.a)(j.a.mark((function e() { var t; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return b(!0), e.next = 3, Ta(X.s);
                                case 3:
                                    t = e.sent, s(t), b(!1);
                                case 6:
                                case "end":
                                    return e.stop() } }), e) }))), []);
                Object(r.useEffect)((function() { v() }), [v, e]); var E = Object(r.useMemo)((function() { if (!l || !l.trading_scores || 0 === l.trading_scores.length) return []; var e = Object(n.a)(l.rewards),
                        t = e.shift(),
                        a = 1; return l.trading_scores.map((function(n, r) { var c = n.score >= 1e-5 ? n.score : 0,
                            l = Object(w.a)(Object(w.a)({}, n), {}, { index: r + 1, score: c, reward: 0 }); return t ? (l.reward = t ? +t.reward : 0, ++a > +t.end_rank && (t = e.shift()), l) : l })) }), [l]); return c.a.createElement("div", { className: "campaign" }, c.a.createElement("div", { className: "row w-100" }, c.a.createElement(fd, { currentCampaign: l, chainId: e })), c.a.createElement("div", { className: "row" }, c.a.createElement(yd, { startTime: l ? null === l || void 0 === l ? void 0 : l.start_time : "", endTime: l ? null === l || void 0 === l ? void 0 : l.end_time : "", userCount: E.length })), c.a.createElement("div", { className: "row w-100", style: { flexDirection: "column" } }, c.a.createElement(jd, { tabs: [{ name: "Introduction", key: "introduction" }, { name: "How to Start", key: "how_to_start" }, { name: "Ranking", key: "ranking" }, { name: "T&C and Reward", key: "reward" }], activeIndex: m, onChangeTabIndex: function(e) { o.push("".concat(X.K.CAMPAIGN, "?tab=").concat(e)) } }), "introduction" === m && l && c.a.createElement(kd, { campaign: l, baseUrl: X.s }), "how_to_start" === m && l && c.a.createElement(wd, { campaign: l, baseUrl: X.s }), "ranking" === m && c.a.createElement(Td, { rewardIn: (null === l || void 0 === l ? void 0 : l.token_symbol) || "", tradingScores: E, loading: p }), "reward" === m && l && c.a.createElement(Ud, { campaign: l, baseUrl: X.s }))) }

            function Xd(e) { var t = hc(),
                    a = t.networkId,
                    n = t.nodeUrl,
                    r = t.chainName,
                    l = Object(i.c)((function(e) { return e.account })).wallet,
                    s = Object(i.b)();

                function o() { return (o = Object(ft.a)(j.a.mark((function t() { var c, o; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isDisabled) { t.next = 2; break } return t.abrupt("return");
                                case 2:
                                    return (c = l) || (c = new bt({ networkId: a, nodeUrl: n, chainName: r })), t.next = 6, c._getCurrentNetworkId();
                                case 6:
                                    if (t.sent === a) { t.next = 10; break } return t.next = 10, c.switchChain(a);
                                case 10:
                                    return t.next = 12, c.connect(u, m);
                                case 12:
                                    if (o = t.sent) { t.next = 15; break } return t.abrupt("return");
                                case 15:
                                    c.getDisconnected((function() { return s(et()) }), (function(e, t, a) { return s($e(e, t, a)) }), c, (function(e) { s(qn(e)) })), s($e(o, c, X.V.METAMASK)), ce.close(), e.close();
                                case 19:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function u() { ce.show(se, { title: "Error", content: c.a.createElement("div", null, "Cannot connect to Metamask. Please make sure you have Metamask installed.") }) }

                function m(e) { ce.show(se, { title: "Error", content: c.a.createElement("div", { className: "text-center" }, c.a.createElement("p", { className: "mb-2" }, "Metamask should be on ", c.a.createElement("b", null, Object(oe.o)(a)), "."), c.a.createElement("p", null, "Currently it is on ", c.a.createElement("b", null, Object(oe.o)(e)), " ", "instead.")) }) } return c.a.createElement("div", { className: "account__item ".concat(e.isDisabled && "account__item--disabled"), onClick: function() { return o.apply(this, arguments) } }, c.a.createElement("div", { className: "account__icon metamask" }), c.a.createElement("div", { className: "account__name" }, "Metamask")) } var Jd = function(e) { return c.a.createElement("div", { className: "slide-down__trigger ".concat(e.className ? e.className : ""), onClick: e.toggleContent }, e.children, c.a.createElement("div", { className: "slide-down__arrow" })) };

            function Zd(e) { var t = Object(r.useRef)(null);

                function a(a) { e.status && t.current && !t.current.contains(a.target) && e.close() } return Object(r.useEffect)((function() { if (!e.persistOnClickOutside) return document.addEventListener("click", a, !1),
                        function() { document.removeEventListener("click", a, !1) } }), [e.status]), c.a.createElement("div", { className: "slide-down__content ".concat(e.className ? e.className : ""), ref: t }, c.a.createElement("div", { className: "slide-down__fade-in" }, e.children)) }

            function $d(e) { return c.a.createElement("div", { className: "slide-down ".concat(e.active ? "slide-down--active" : "", " ").concat(e.className ? e.className : "") }, e.children) }

            function ef(e) { var t = Object(r.useState)(0),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1],
                    s = Object(r.useState)([]),
                    o = Object(Z.a)(s, 2),
                    u = o[0],
                    m = o[1],
                    d = Object(r.useState)(!1),
                    f = Object(Z.a)(d, 2),
                    p = f[0],
                    b = f[1],
                    v = Object(r.useState)(!1),
                    E = Object(Z.a)(v, 2),
                    h = E[0],
                    g = E[1],
                    O = Object(r.useState)(""),
                    y = Object(Z.a)(O, 2),
                    k = y[0],
                    x = y[1],
                    N = 0 === u.length || h,
                    _ = Object(i.c)((function(e) { return e.global })).chainId;

                function T(e) { return A.apply(this, arguments) }

                function A() { return (A = Object(ft.a)(j.a.mark((function t(a) { var n; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return g(!0), t.next = 3, e.wallet.getBalances(a);
                                case 3:
                                    n = t.sent, m(n), g(!1);
                                case 6:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function S(t) { var a = n; "next" === t ? a += X.G.DEVICE_ADDRESS : a -= X.G.DEVICE_ADDRESS, e.selectedPath.bip44 && m([]), l(a) }

                function C() { b(!1) }

                function R(t) { e.onSelectPath(t), C() } return Object(r.useEffect)((function() {
                    function t() { return (t = Object(ft.a)(j.a.mark((function t() { var a; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.wallet.getAddresses(n, e.selectedPath);
                                    case 2:
                                        a = t.sent, m(a), T(a);
                                    case 5:
                                    case "end":
                                        return t.stop() } }), t) })))).apply(this, arguments) }! function() { t.apply(this, arguments) }() }), [n]), c.a.createElement("div", { className: "device-modal" }, c.a.createElement("div", { className: "device-modal__content" }, c.a.createElement("div", { className: "device-modal__title" }, "Select ", e.deviceType, " Address"), c.a.createElement("div", { className: "device-modal__sub-title pl-2" }, "Select HD derivation path"), c.a.createElement($d, { active: p }, c.a.createElement(Jd, { toggleContent: function() { b(!p) } }, c.a.createElement("div", { className: "device-modal__dropdown-trigger" }, e.selectedPath.value, " - ", e.selectedPath.desc)), c.a.createElement(Zd, { className: "device-modal__dropdown-content", status: p, close: C }, e.paths.map((function(t, a) { var n = e.selectedPath.value === t.value ? "selected" : ""; return c.a.createElement(r.Fragment, { key: a }, !t.custom && c.a.createElement("div", { className: "device-modal__dropdown-item ".concat(n), onClick: function() { return R(t) } }, c.a.createElement("span", null, t.value, " - "), c.a.createElement("span", null, " ", t.desc)), t.custom && c.a.createElement("div", { className: "device-modal__dropdown-item" }, c.a.createElement("input", { type: "text", value: k, placeholder: t.defaultValue, onChange: function(e) { return x(e.target.value) } }), c.a.createElement("div", { className: "device-modal__dropdown-button", onClick: function() { return R(Object(w.a)(Object(w.a)({}, t), {}, { value: k || t.defaultValue })) } }))) })))), 0 === u.length && c.a.createElement("div", { className: "align-center mt-2" }, c.a.createElement(Zc, null)), u.length > 0 && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "device-modal__select pl-2" }, "Import the address you would like to use"), c.a.createElement("div", { className: "device-modal__item-container" }, u.map((function(t, a) { return c.a.createElement("div", { key: a, className: "device-modal__item ".concat(h ? "disabled" : ""), onClick: function() { return e.onSelectAddress(t, e.wallet) } }, c.a.createElement("div", { className: "device-modal__item-address" }, Object(oe.h)(t.address)), c.a.createElement("div", { className: "device-modal__item-value" }, t.balance ? "".concat(Object(oe.m)(t.balance, 4), " ").concat(X.F[_].currencySymbol) : "Loading...")) }))))), c.a.createElement("div", { className: "device-modal__panel" }, c.a.createElement("div", { className: "device-modal__panel-button back ".concat(N || 0 === n ? "disabled" : ""), onClick: function() { return S("back") } }), c.a.createElement("div", { className: "device-modal__panel-button next ".concat(N ? "disabled" : ""), onClick: function() { return S("next") } }))) }

            function tf(e) { var t = Object(r.useState)(!1),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1]; return Object(r.useEffect)((function() { if (e.loadingContent) { var t = setTimeout((function() { l(!0) }), 6e3); return function() { clearTimeout(t) } } }), [e.loadingContent]), c.a.createElement("div", { className: "loading-modal" }, c.a.createElement(Zc, null), c.a.createElement("div", null, "Processing"), e.loadingContent && n && c.a.createElement("div", { className: "loading-modal__info common__fade-in" }, e.loadingContent)) }

            function af(e) { var t = Object(i.b)(),
                    a = hc(),
                    n = a.networkId,
                    l = a.chainName,
                    s = a.nodeUrl,
                    o = Object(r.useState)(!1),
                    u = Object(Z.a)(o, 2),
                    m = u[0],
                    d = u[1],
                    f = Object(r.useState)(X.w[0]),
                    p = Object(Z.a)(f, 2),
                    b = p[0],
                    v = p[1];

                function E() { return h.apply(this, arguments) }

                function h() { return (h = Object(ft.a)(j.a.mark((function e() { var t, a; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return y(), e.prev = 1, t = new At({ networkId: n, nodeUrl: s, chainName: l }), e.next = 5, t.setConnection(b.value, b.bip44);
                                case 5:
                                    O(t, b), e.next = 12; break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(1), a = e.t0.id ? e.t0.id : e.t0.statusCode, k(e.t0.message, a);
                                case 12:
                                case "end":
                                    return e.stop() } }), e, null, [
                            [1, 8]
                        ]) })))).apply(this, arguments) }

                function g(a, n) { var r = "".concat(b.value, "/").concat(a.index);
                    b.bip44 && (r = "".concat(b.value, "/").concat(a.index, "'/0/0")), t($e(a.address, n, X.V.LEDGER, r)), ce.close(), e.close() }

                function O(e, t) { ce.show(ef, { deviceType: "Ledger", selectedPath: t, wallet: e, onSelectAddress: g, onSelectPath: v, paths: X.w }) }

                function y() { ce.show(tf, { loadingContent: c.a.createElement(r.Fragment, null, c.a.createElement("div", null, "Please make sure:"), c.a.createElement("div", null, "- Your Ledger is properly plugged in."), c.a.createElement("div", null, "- You have logged into your Ledger.")), hideCloseButton: !0 }) }

                function k(e, t) { ce.show(se, { title: "Error", content: c.a.createElement(c.a.Fragment, null, e && c.a.createElement("div", null, e), (!e || "U2F_1" === t || 26628 === t) && c.a.createElement("div", { className: "mt-2 common__lh-5" }, c.a.createElement("p", null, "Cannot connect to your Ledger. Please check if:"), c.a.createElement("p", null, "- Your Ledger is properly plugged in."), c.a.createElement("p", null, "- You have logged into your Ledger."), c.a.createElement("p", null, "- You have launched Ethereum Application on your Ledger."), c.a.createElement("p", null, "- Your selected path is supported by Ledger."), c.a.createElement("p", null, '- "Browser Support" has been enabled in your Ledger. Learn to enable "Browser Support"', " ", c.a.createElement("a", { href: "https://support.ledgerwallet.com/hc/en-us", className: "text-yellow hover-underline", target: "_blank", rel: "noreferrer noopener" }, "here")))) }, w) }

                function w() { v(X.w[0]) } return Object(r.useEffect)((function() { m && E() }), [b.value]), c.a.createElement("div", { className: "account__item ".concat(e.isDisabled && "account__item--disabled"), onClick: function() { e.isDisabled || (d(!0), E()) } }, c.a.createElement("div", { className: "account__icon ledger" }), c.a.createElement("div", { className: "account__name" }, "Ledger")) }

            function nf(e) { var t = Object(i.b)(),
                    a = hc(),
                    n = a.networkId,
                    r = a.chainName,
                    l = a.nodeUrl;

                function s() { return (s = Object(ft.a)(j.a.mark((function a() { var c; return j.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!e.isDisabled) { a.next = 2; break } return a.abrupt("return");
                                case 2:
                                    return c = new Ot({ networkId: n, nodeUrl: l, chainName: r }), a.next = 5, c.openQRCodeModal();
                                case 5:
                                    c.getConnected((function(a) { t($e(a, c, X.V.WALLET_CONNECT)), ce.close(), e.close() }), (function(e) { return o(e) })), c.getDisconnected((function() { return t(et()) }));
                                case 7:
                                case "end":
                                    return a.stop() } }), a) })))).apply(this, arguments) }

                function o(e) { ce.show(se, { title: "Error", content: c.a.createElement("div", null, e) }) } return c.a.createElement("div", { className: "account__item ".concat(e.isDisabled && "account__item--disabled"), onClick: function() { return s.apply(this, arguments) } }, c.a.createElement("div", { className: "account__icon wallet-connect" }), c.a.createElement("div", { className: "account__name" }, "Connect")) }

            function rf(e) { var t = Object(i.b)(),
                    a = hc(),
                    n = a.networkId,
                    l = a.chainName,
                    s = a.nodeUrl,
                    o = Object(r.useState)(!1),
                    u = Object(Z.a)(o, 2),
                    m = u[0],
                    d = u[1],
                    f = Object(r.useState)(X.R[0]),
                    p = Object(Z.a)(f, 2),
                    b = p[0],
                    v = p[1];

                function E() { e.isDisabled || (d(!0), function() { h.apply(this, arguments) }()) }

                function h() { return (h = Object(ft.a)(j.a.mark((function e() { var t; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (b.value) { e.next = 2; break } return e.abrupt("return");
                                case 2:
                                    return y(), e.prev = 3, t = new Nt({ networkId: n, nodeUrl: s, chainName: l }), e.next = 7, t.setConnection(b.value);
                                case 7:
                                    O(t, b), e.next = 13; break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(3), k(e.t0.message);
                                case 13:
                                case "end":
                                    return e.stop() } }), e, null, [
                            [3, 10]
                        ]) })))).apply(this, arguments) }

                function g(a, n) { var r = "".concat(b.value, "/").concat(a.index);
                    t($e(a.address, n, X.V.TREZOR, r)), ce.close(), e.close() }

                function O(e, t) { ce.show(ef, { deviceType: "Trezor", selectedPath: t, wallet: e, onSelectAddress: g, onSelectPath: v, paths: X.R }) }

                function y() { ce.show(tf, { hideCloseButton: !0 }) }

                function k(e) { ce.show(se, { title: "Error", content: c.a.createElement(r.Fragment, null, e && c.a.createElement("div", null, e), !e && c.a.createElement("div", null, "Cannot detect Trezor device. Please plug in your Trezor.")) }) } return Object(r.useEffect)((function() { m && E() }), [b.value]), c.a.createElement("div", { className: "account__item ".concat(e.isDisabled && "account__item--disabled"), onClick: E }, c.a.createElement("div", { className: "account__icon trezor" }), c.a.createElement("div", { className: "account__name" }, "Trezor")) } var cf, lf = a(1310),
                sf = a(1305);

            function of(e) { var t = hc(),
                    a = t.networkId,
                    n = t.nodeUrl,
                    r = t.chainName,
                    l = Object(i.c)((function(e) { return e.account })).wallet,
                    s = Object(i.b)();

                function o() { return (o = Object(ft.a)(j.a.mark((function t() { var c, o; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e.isDisabled) { t.next = 2; break } return t.abrupt("return");
                                case 2:
                                    return (c = l) || (c = new yt({ networkId: a, nodeUrl: n, chainName: r })), t.next = 6, c._getCurrentNetworkId();
                                case 6:
                                    if (t.sent === a) { t.next = 10; break } return t.next = 10, c.switchChain(a);
                                case 10:
                                    return t.next = 12, c.connect(u);
                                case 12:
                                    if (o = t.sent) { t.next = 15; break } return t.abrupt("return");
                                case 15:
                                    c.getDisconnected((function() { return s(et()) }), (function(e, t, a) { return s($e(e, t, a)) }), c, (function(e) { s(qn(e)) })), s($e(o, c, X.V.COINBASE)), ce.close(), e.close();
                                case 19:
                                case "end":
                                    return t.stop() } }), t) })))).apply(this, arguments) }

                function u() { ce.show(se, { title: "Error", content: c.a.createElement("div", null, "Cannot connect to CoinBase. Please make sure you have CoinBase installed.") }) } return c.a.createElement("div", { className: "account__item ".concat(e.isDisabled && "account__item--disabled"), onClick: function() { return o.apply(this, arguments) } }, c.a.createElement("div", { className: "account__icon coinbase-wallet" }), c.a.createElement("div", { className: "account__name" }, "Coinbase")) }

            function uf() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })),
                    a = t.modals,
                    n = t.chainId,
                    l = Object(r.useState)(!1),
                    s = Object(Z.a)(l, 2),
                    o = s[0],
                    u = s[1];

                function m() { e(Jn("account", { isOpened: !1 })) } return Object(r.useEffect)((function() { u(!1) }), [a.account.isOpened]), c.a.createElement(re, { isActive: a.account.isOpened, onClose: m }, c.a.createElement(se, { customTitle: "Import your Wallet", noPanel: !0, content: c.a.createElement("div", { className: "account" }, c.a.createElement("div", null, c.a.createElement(sf.a, { control: c.a.createElement(lf.a, { checked: o, onChange: function() { u(!o) }, name: "checkedB", color: "default" }), label: c.a.createElement("p", null, "I accept", " ", c.a.createElement("a", { className: "account--link", href: "https://files.krystal.app/terms.pdf", target: "_blank", rel: "noopener noreferrer" }, c.a.createElement("span", null, "Terms of Use")), " ", "and", " ", c.a.createElement("a", { className: "account--link", href: "https://files.krystal.app/privacy.pdf", target: "_blank", rel: "noopener noreferrer" }, c.a.createElement("span", null, "Privacy Policy")), ".") })), c.a.createElement("br", null), c.a.createElement("h5", { className: "account__titleWalletList" }, "Choose Wallet"), c.a.createElement("br", null), c.a.createElement(Xd, { isDisabled: !o, close: m }), n !== X.d.BSC && n !== X.d.POLYGON && c.a.createElement(af, { isDisabled: !o, close: m }), n !== X.d.BSC && c.a.createElement(of, { isDisabled: !o, close: m }), c.a.createElement(nf, { isDisabled: !o, close: m }), n !== X.d.BSC && n !== X.d.POLYGON && n !== X.d.AVALANCHE && c.a.createElement(rf, { isDisabled: !o, close: m })) })) } var mf = ["svgRef", "title"];

            function df() { return (df = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function ff(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var pf, bf = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = ff(e, mf); return c.a.createElement("svg", df({ width: 84, height: 84, viewBox: "0 0 84 84", ref: t }, n), a ? c.a.createElement("title", null, a) : null, cf || (cf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-126.000000, -161.000000) translate(126.000000, 161.000000)" }, c.a.createElement("circle", { cx: 42, cy: 42, r: 42, fill: "#627EEB" }), c.a.createElement("g", { fillRule: "nonzero" }, c.a.createElement("path", { fill: "#BFCDFA", d: "M17.495 0L17.113 1.253 17.113 37.62 17.495 37.988 34.99 28.01z", transform: "translate(24.000000, 14.000000)" }), c.a.createElement("path", { fill: "#FFFFFD", d: "M17.495 0L0 28.01 17.495 37.989z", transform: "translate(24.000000, 14.000000)" }), c.a.createElement("path", { fill: "#BFCDFA", d: "M17.495 41.185L17.279 41.439 17.279 54.395 17.495 55 35 31.212z", transform: "translate(24.000000, 14.000000)" }), c.a.createElement("path", { fill: "#FFFFFD", d: "M17.495 55L17.495 41.185 0 31.212z", transform: "translate(24.000000, 14.000000)" }), c.a.createElement("path", { fill: "#8199EF", d: "M17.495 37.989L34.989 28.01 17.495 20.338 17.495 37.989", transform: "translate(24.000000, 14.000000)" }), c.a.createElement("path", { fill: "#C5CAF4", d: "M0 28.01L17.494 37.989 17.494 20.337", transform: "translate(24.000000, 14.000000)" }))))))) },
                vf = c.a.forwardRef((function(e, t) { return c.a.createElement(bf, df({ svgRef: t }, e)) })),
                Ef = (a.p, ["svgRef", "title"]);

            function hf() { return (hf = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function gf(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Of, yf = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = gf(e, Ef); return c.a.createElement("svg", hf({ width: 84, height: 84, viewBox: "0 0 84 84", ref: t }, n), a ? c.a.createElement("title", null, a) : null, pf || (pf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-317.000000, -161.000000) translate(317.000000, 161.000000)" }, c.a.createElement("circle", { cx: 42, cy: 42, r: 42, fill: "#8247E5" }), c.a.createElement("g", { fill: "#FFF", fillRule: "nonzero" }, c.a.createElement("path", { d: "M37.859 13.448c-.914-.522-2.089-.522-3.133 0l-7.31 4.309-4.962 2.742-7.18 4.308c-.914.522-2.089.522-3.133 0l-5.614-3.395c-.913-.522-1.566-1.566-1.566-2.741v-6.529c0-1.044.522-2.089 1.566-2.741l5.614-3.265c.914-.522 2.089-.522 3.133 0l5.614 3.395c.914.522 1.566 1.567 1.566 2.742v4.309l4.961-2.873V9.27c0-1.044-.522-2.089-1.566-2.742L15.405.392c-.914-.523-2.09-.523-3.133 0L1.567 6.659C.522 7.18 0 8.226 0 9.27v12.273c0 1.045.522 2.089 1.567 2.742L12.14 30.42c.914.523 2.089.523 3.133 0l7.18-4.178 4.961-2.872 7.18-4.178c.914-.522 2.09-.522 3.133 0l5.614 3.264c.914.522 1.567 1.567 1.567 2.742v6.528c0 1.045-.523 2.089-1.567 2.742l-5.483 3.264c-.914.522-2.089.522-3.133 0l-5.614-3.264c-.914-.522-1.566-1.567-1.566-2.742v-4.178l-4.961 2.872v4.309c0 1.044.522 2.089 1.566 2.742l10.575 6.136c.914.523 2.089.523 3.133 0l10.574-6.136C49.347 36.95 50 35.905 50 34.73V22.326c0-1.044-.522-2.089-1.567-2.741L37.86 13.448z", transform: "translate(17.000000, 22.000000)" }))))))) },
                jf = c.a.forwardRef((function(e, t) { return c.a.createElement(yf, hf({ svgRef: t }, e)) })),
                kf = (a.p, ["svgRef", "title"]);

            function wf() { return (wf = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function xf(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Nf, _f = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = xf(e, kf); return c.a.createElement("svg", wf({ width: 84, height: 84, viewBox: "0 0 84 84", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Of || (Of = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-727.000000, -161.000000) translate(727.000000, 161.000000)" }, c.a.createElement("circle", { cx: 42, cy: 42, r: 42, fill: "#F8B900" }), c.a.createElement("path", { fill: "#FFF", d: "M47.008 59.997v5.295L42.395 68l-4.613-2.708v-5.295l4.613 2.46 4.613-2.46zM64 40.378v15.371l-12.834 7.547v-5.963l8.151-4.731v-9.933L64 40.378zm-43 0l4.683 2.291v9.933l8.15 4.73v5.964L21 55.749V40.378zm29.733-7.82l4.93 3.254v5.305l-8.434 4.85v9.67l-4.883 2.73-4.742-2.73v-9.67l-8.381-4.85v-5.305l5.194-3.254 8.026 4.845 8.29-4.845zm5.044 12.904v5.282l-4.61 2.626v-5.413l4.61-2.495zm-26.554 0l4.61 2.495v5.413l-4.61-2.626v-5.282zm-3.531-17.767l4.674 2.821-4.683 2.821v5.805L21 36.262v-5.746l4.692-2.821zm33.616 0L64 30.516v5.746l-4.683 2.88v-5.805l-4.683-2.821 4.674-2.821zm-16.865 0l4.565 2.966-4.565 2.676-4.661-2.676 4.661-2.966zm0-9.695l13.22 7.842-4.856 2.794-8.412-4.66-8.133 4.66-5.04-2.794L42.444 18z" })))))) },
                Tf = c.a.forwardRef((function(e, t) { return c.a.createElement(_f, wf({ svgRef: t }, e)) }));
            a.p;

            function Af() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })),
                    a = t.modals,
                    n = t.chainId,
                    l = Object(i.c)((function(e) { return e.account })).wallet,
                    s = Object(r.useCallback)((function() { e(Jn("switchChain", { isOpened: !1 })) }), [e]),
                    o = Object(r.useCallback)(function() { var t = Object(ft.a)(j.a.mark((function t(a) { return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n !== a) { t.next = 2; break } return t.abrupt("return");
                                    case 2:
                                        !l || l.getWalletType() !== X.V.METAMASK && l.getWalletType() !== X.V.COINBASE ? e(qn(a)) : l.switchChain(a), s();
                                    case 4:
                                    case "end":
                                        return t.stop() } }), t) }))); return function(e) { return t.apply(this, arguments) } }(), [n, e, s, l]); return c.a.createElement(re, { isActive: a.switchChain.isOpened, onClose: s }, c.a.createElement(se, { customTitle: "Switch Chain", className: "medium", noPanel: !0, content: c.a.createElement("div", { className: "switch-chain" }, c.a.createElement("button", { onClick: function() { return o(X.d.MAINNET) }, className: "".concat(n === X.d.MAINNET && "switch-chain--selected") }, c.a.createElement(vf, null), c.a.createElement("p", null, "Ethereum")), c.a.createElement("button", { onClick: function() { return o(X.d.BSC) }, className: "".concat(n === X.d.BSC && "switch-chain--selected") }, c.a.createElement(Tf, null), c.a.createElement("p", null, "Binance Smart Chain (BSC)")), c.a.createElement("button", { onClick: function() { return o(X.d.POLYGON) }, className: "".concat(n === X.d.POLYGON && "switch-chain--selected") }, c.a.createElement(jf, null), c.a.createElement("p", null, "Polygon (MATIC)")), c.a.createElement("button", { onClick: function() { return o(X.d.AVALANCHE) }, className: "".concat(n === X.d.AVALANCHE && "switch-chain--selected") }, c.a.createElement(To, null), c.a.createElement("p", null, "Avalanche (AVAX)"))) })) } var Sf = ["svgRef", "title"];

            function Cf() { return (Cf = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Rf(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Pf, Lf = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Rf(e, Sf); return c.a.createElement("svg", Cf({ width: 16, height: 16, viewBox: "0 0 16 16", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Nf || (Nf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M11.693 6.747L9.253 4.307M4.167 14H2v-2.167c0-.177.07-.347.195-.472l8.89-8.89c.26-.26.682-.26.942 0l1.501 1.501c.26.26.26.683 0 .943l-8.89 8.89c-.124.125-.294.195-.47.195h0z", transform: "translate(-385 -188) translate(77 44) translate(308 144)" }))))))) },
                If = c.a.forwardRef((function(e, t) { return c.a.createElement(Lf, Cf({ svgRef: t }, e)) })),
                Mf = (a.p, ["svgRef", "title"]);

            function Df() { return (Df = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Ff(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Bf, Kf = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Ff(e, Mf); return c.a.createElement("svg", Df({ width: 16, height: 16, viewBox: "0 0 16 16", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Pf || (Pf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M3.333 4.667L12.667 4.667M12 4.667V12c0 .737-.597 1.333-1.333 1.333H5.333C4.597 13.333 4 12.737 4 12V4.667M10 2.5L6 2.5M6.667 7.333L6.667 10.667M9.333 7.333L9.333 10.667", transform: "translate(-392 -156) translate(392 156)" })))))) },
                Wf = c.a.forwardRef((function(e, t) { return c.a.createElement(Kf, Df({ svgRef: t }, e)) })),
                Gf = (a.p, ["svgRef", "title"]);

            function Hf() { return (Hf = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Vf(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var zf, Uf = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Vf(e, Gf); return c.a.createElement("svg", Hf({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Bf || (Bf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 12L7 12M12 7L12 17", transform: "translate(-589 -337) translate(465 60) translate(111 271) translate(13 6)" })))))))) },
                Yf = c.a.forwardRef((function(e, t) { return c.a.createElement(Uf, Hf({ svgRef: t }, e)) })),
                qf = (a.p, ["svgRef", "title"]);

            function Qf() { return (Qf = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Xf(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Jf, Zf = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Xf(e, qf); return c.a.createElement("svg", Qf({ width: 22, height: 12, viewBox: "0 0 22 12", ref: t }, n), a ? c.a.createElement("title", null, a) : null, zf || (zf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M8 8L4 8M8.11 15.98L4 16M8.11 12L2 12M13.116 12.743l-1.312 3.281c-.349.874.591 1.703 1.414 1.246l8.44-4.689c.455-.253.455-.907 0-1.16l-8.44-4.689c-.823-.457-1.764.372-1.414 1.246l1.312 3.281c.191.475.191 1.007 0 1.484z", transform: "translate(-1005.000000, -381.000000) translate(1004.000000, 375.000000)" })))))) },
                $f = c.a.forwardRef((function(e, t) { return c.a.createElement(Zf, Qf({ svgRef: t }, e)) })),
                ep = (a.p, a(378)),
                tp = a.n(ep);

            function ap() { var e = Object(i.b)(),
                    t = Object(vc.g)(),
                    a = Object(i.c)((function(e) { return e.global })),
                    n = a.modals,
                    r = a.chainId,
                    l = Object(i.c)((function(e) { return e.account })).watchWallets,
                    s = 0 === l.length,
                    o = n.contacts.onlyContact;

                function u() { e(Jn("contacts", Object(w.a)(Object(w.a)({}, n.contacts), {}, { isOpened: !1 }))) }

                function m(t) { e(Jn("addContact", { isOpened: !0, type: t })) }

                function d(a) { return l.map((function(n, l) { return c.a.createElement("div", { className: "wallet-management__item flex-between-center mb-5", key: l }, c.a.createElement("div", { className: "flex-center", style: { wordBreak: "break-word" } }, c.a.createElement("div", null, c.a.createElement("div", { className: "mb-1 fw-300" }, n.name), c.a.createElement("div", { className: "fs-3 text-gray-5" }, Object(oe.h)(n.address, 18, -8)))), c.a.createElement("div", { className: "wallet-management__item__actions" }, o && c.a.createElement(Kc.a, { title: "Click to Transfer", arrow: !0, placement: "top" }, c.a.createElement($f, { onClick: function() { return e = n.address, u(), void t.push("/transfer/".concat(X.C[r], "/").concat(e)); var e } })), !o && c.a.createElement(Kc.a, { title: "Click to Copy", arrow: !0, placement: "top" }, c.a.createElement(_i, { stroke: "#f3f8f7", onClick: function() { return function(e) { navigator.clipboard.writeText(e.address) }(n) }, style: { cursor: "pointer" } })), c.a.createElement(Kc.a, { title: "Click to Edit", arrow: !0, placement: "top" }, c.a.createElement(If, { stroke: "#f3f8f7", onClick: function() { return function(t, a) { e(Jn("addContact", { isOpened: !0, wallet: t, type: a })) }(n, a) }, style: { cursor: "pointer" } })), c.a.createElement(Kc.a, { title: "Click to Delete", arrow: !0, placement: "top" }, c.a.createElement(Wf, { stroke: "#f3f8f7", onClick: function() { return function(t) { e(at(t.address)) }(n) }, style: { cursor: "pointer" } })))) })) } return o ? c.a.createElement(re, { isActive: n.contacts.isOpened, onClose: u, hideCloseBtn: !0 }, c.a.createElement(se, { customTitle: "Manage Contacts", className: "small", noPanel: !0, content: c.a.createElement(c.a.Fragment, null, s && c.a.createElement("div", { className: "align-center" }, c.a.createElement("img", { src: tp.a, alt: "noAddressFoundImage" }), c.a.createElement("div", { className: "text-grey mt-3 mb-8" }, "Your list of ".concat(o ? "contacts" : "watched wallets", " is empty"))), !s && c.a.createElement("div", { className: "wallet-management__list mb-5 nice-scroll" }, d("CONTACT")), c.a.createElement("div", { className: "btn btn--no-bg", onClick: function() { return m("CONTACT") } }, c.a.createElement(Yf, { stroke: "#a9aead" }), c.a.createElement("span", null, "Add New Contact"))) })) : c.a.createElement(re, { isActive: n.contacts.isOpened, onClose: u }, c.a.createElement(se, { customTitle: "Manage Wallets", className: "small", noPanel: !0, content: c.a.createElement("div", { className: "wallet-management" }, s && c.a.createElement("div", { className: "align-center" }, c.a.createElement("img", { src: tp.a, alt: "noAddressFoundImage" }), c.a.createElement("div", { className: "text-grey mt-3 mb-8" }, "Your list of ".concat(o ? "contacts" : "watched wallets", " is empty"))), !s && c.a.createElement("div", { className: "wallet-management__list mb-5 nice-scroll" }, d("WATCH_WALLET")), c.a.createElement("div", { className: "btn btn--no-bg", onClick: function() { return m("WATCH_WALLET") } }, c.a.createElement(Yf, { stroke: "#a9aead" }), c.a.createElement("span", null, "Add Watched Wallet"))) })) }

            function np() { var e, t = Object(i.b)(),
                    a = Object(vc.g)(),
                    n = Object(i.c)((function(e) { return e.global })),
                    l = n.modals,
                    s = n.chainId,
                    o = Object(i.c)((function(e) { return e.account })).watchWallets,
                    u = Object(r.useState)(""),
                    m = Object(Z.a)(u, 2),
                    d = m[0],
                    f = m[1],
                    p = Object(r.useState)(""),
                    b = Object(Z.a)(p, 2),
                    v = b[0],
                    E = b[1],
                    h = Object(r.useState)(""),
                    g = Object(Z.a)(h, 2),
                    O = g[0],
                    y = g[1],
                    j = !!l.addContact.wallet && l.addContact.wallet,
                    k = Object(r.useMemo)((function() { return "CONTACT" === l.addContact.type }), [l.addContact.type]),
                    x = Object(r.useMemo)((function() { return j ? (E(j.name), f(j.address), k ? "Edit Contact" : "Edit Watched Wallet") : k ? "Add Contact" : "Add Watched Wallet" }), [k, j]),
                    N = Object(r.useCallback)((function() { E(""), f(""), y(""), t(Jn("addContact", { isOpened: !1 })) }), [t]); var _ = Object(r.useCallback)((function() { a.push("/transfer/".concat(X.C[s], "/").concat(d)), N(), t(Jn("contacts", Object(w.a)(Object(w.a)({}, l.contacts), {}, { isOpened: !1 }))) }), [d, s, t, N, a, l.contacts]); return c.a.createElement(re, { isActive: null === (e = l.addContact) || void 0 === e ? void 0 : e.isOpened, onClose: N }, c.a.createElement(se, { customTitle: x, className: "small manage-wallet", onSubmit: function() { var e = d.toLowerCase();
                        Object(oe.x)(e) ? !j && Object(oe.g)(o, "address", e) ? y("Address is existed") : (t(function(e) { return { type: Be, payload: e } }(function(e, t) { return { name: e, address: t } }(v, e))), N()) : y("Invalid address") }, close: N, content: c.a.createElement("div", { className: "pt-2" }, c.a.createElement("div", { className: "mb-4" }, c.a.createElement("div", { className: "mb-2" }, "Label of ", k ? "Contact" : "Wallet"), c.a.createElement("input", { className: "input", type: "text", value: v, placeholder: "Eg. John\u2019s wallet", onChange: function(e) { E(e.target.value) } })), c.a.createElement("div", null, c.a.createElement("div", { className: "mb-2" }, "ENS domain or valid ", X.F[s].name, " address"), c.a.createElement("input", { className: "input", type: "text", value: d, placeholder: "Add ENS domain or valid ".concat(X.F[s].name, " address"), onChange: function(e) { y(""), f(e.target.value) }, disabled: !!j }), "" !== O && c.a.createElement("div", { className: "input-error mt-2 slide-up" }, O)), j && c.a.createElement("div", { className: "manage-wallet__actions" }, c.a.createElement("button", { className: "btn btn--transfer", onClick: _ }, c.a.createElement($f, null), "Transfer"), c.a.createElement("button", { className: "btn btn--delete", onClick: function() { t(at(j.address)), N() } }, c.a.createElement(Wf, null), "Delete ", k ? "contact" : "watched wallet"))) })) } var rp = ["svgRef", "title"];

            function cp() { return (cp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function lp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var sp, op = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = lp(e, rp); return c.a.createElement("svg", cp({ width: 24, height: 24, ref: t }, n), a ? c.a.createElement("title", null, a) : null, Jf || (Jf = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("path", { d: "M0 0h24v24H0z" }), c.a.createElement("g", { strokeLinecap: "round", strokeLinejoin: "round" }, c.a.createElement("path", { d: "M8.827 18.657H6.346a1.003 1.003 0 0 1-1.003-1.003v-2.482c0-.266-.106-.521-.294-.709l-1.755-1.755a1.002 1.002 0 0 1 0-1.418l1.773-1.773a.94.94 0 0 0 .276-.666V6.346c0-.554.449-1.003 1.003-1.003h2.482c.266 0 .521-.106.709-.294l1.755-1.755a1.002 1.002 0 0 1 1.418 0l1.755 1.755c.188.188.443.294.709.294h2.482c.554 0 1.003.449 1.003 1.003v2.482c0 .266.106.521.294.709l1.755 1.755a1.002 1.002 0 0 1 0 1.418l-1.755 1.755a1.003 1.003 0 0 0-.294.709v2.482c0 .554-.449 1.003-1.003 1.003h-2.482c-.266 0-.521.106-.709.294l-1.755 1.755a1.002 1.002 0 0 1-1.418 0l-1.755-1.755a.996.996 0 0 0-.71-.296z", fill: "#0095F0" }), c.a.createElement("path", { stroke: "#FFF", strokeWidth: 1.5, d: "m15 10.5-3.75 3.75L9 12" }))))) },
                ip = c.a.forwardRef((function(e, t) { return c.a.createElement(op, cp({ svgRef: t }, e)) })),
                up = (a.p, a(630)),
                mp = a.n(up);

            function dp() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.global })).modals,
                    a = Object(i.c)((function(e) { return e.account })).balances,
                    l = Object(i.c)((function(e) { return e.token })),
                    s = l.customTokens,
                    o = l.supportedTokens,
                    u = l.hiddenList,
                    m = Object(r.useState)(""),
                    d = Object(Z.a)(m, 2),
                    f = d[0],
                    p = d[1]; var b = Object(r.useMemo)((function() { return [].concat(Object(n.a)(o), Object(n.a)(s)).filter((function(e) { return Object(oe.y)(e, f) })) }), [s, f, o]); var v = Object(r.useCallback)((function(e) { var t = a.find((function(t) { return t.token.address === e })); return t ? Object(oe.m)(t.balance, 4) : 0 }), [a]),
                    E = Object(r.useCallback)((function(t, a) { e(function(e, t) { return { type: Za, payload: { address: e, isHidden: t } } }(t, a)) }), [e]); return t.manageTokens.isOpened ? c.a.createElement(re, { isActive: !0, onClose: function() { e(Jn("manageTokens", { isOpened: !1 })) }, hideCloseBtn: !0, style: { overflow: "unset" } }, c.a.createElement(se, { customTitle: "Manage Tokens", className: "small", noPanel: !0, content: c.a.createElement("div", null, c.a.createElement("div", { className: "input-container mb-5" }, c.a.createElement("input", { onChange: function(e) { p(e.target.value.toLowerCase()) }, className: "input input--full", type: "text", value: f, style: { paddingRight: 32 }, placeholder: "Search Name or Symbol" }), c.a.createElement("div", { className: "input-tool", style: { top: 12 } }, c.a.createElement("img", { src: Us.a, alt: "Search" }))), 0 === b.length && c.a.createElement("div", { className: "align-center" }, c.a.createElement("img", { src: mp.a, alt: "noAddressFoundImage" }), c.a.createElement("div", { className: "text-white-70 fs-3 mt-3 mb-8" }, "Your custom token list is empty")), b.length > 0 && c.a.createElement("div", { className: "custom-token__list nice-scroll" }, b.map((function(e) { var t = u.includes(e.address); return c.a.createElement("div", { className: "flex-between-center mb-2 custom-token__list__item ".concat(t && "deleted"), key: e.address }, c.a.createElement("div", { className: "flex-center", style: { width: "100%", wordBreak: "break-word" } }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement("img", { className: "mr-2 token-icon", src: e.logo ? Object(oe.n)(e.logo) : Rc.a, alt: "Token" }), c.a.createElement("div", { className: "align-left" }, c.a.createElement("div", { className: "d-flex align-items-center" }, c.a.createElement("span", { className: "truncate", style: { maxWidth: 100 }, title: e.symbol }, e.symbol), " ", e.isVerified && c.a.createElement(ip, { title: "verified" })), c.a.createElement("div", { className: "fw-300 text-grey" }, v(e.address))))), c.a.createElement("div", null, c.a.createElement("div", { className: "toggle" }, c.a.createElement("input", { type: "checkbox", id: e.address, readOnly: !0, checked: !t, onClick: function(e) { e.stopPropagation() }, onChange: function(a) { a.stopPropagation(), E(e.address, !t) } }), c.a.createElement("label", { htmlFor: e.address })))) }))), c.a.createElement("div", { className: "btn btn--no-bg", onClick: function() { ce.show(ql) } }, c.a.createElement(Yf, { stroke: "#a9aead" }), c.a.createElement("span", null, "Add Token"))) })) : null }

            function fp() { return c.a.createElement("div", null, c.a.createElement(ap, null), c.a.createElement(dp, null), c.a.createElement(np, null), c.a.createElement(uf, null), c.a.createElement(Af, null)) } var pp = ["svgRef", "title"];

            function bp() { return (bp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function vp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ep, hp = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = vp(e, pp); return c.a.createElement("svg", bp({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, sp || (sp = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: 1, d: "M18.364 5.636c3.515 3.515 3.515 9.213 0 12.728-3.515 3.515-9.213 3.515-12.728 0-3.515-3.515-3.515-9.213 0-12.728 3.515-3.515 9.213-3.515 12.728 0M7.05 12.707L12.707 7.05", transform: "translate(-18.000000, -157.000000) translate(18.000000, 110.000000) translate(0.000000, 47.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: 1, d: "M11.293 14.121L11.293 16.949 14.121 16.949M16.95 11.293L11.293 16.95M9.879 7.05L12.707 7.05 12.707 9.878", transform: "translate(-18.000000, -157.000000) translate(18.000000, 110.000000) translate(0.000000, 47.000000)" }))))))) },
                gp = c.a.forwardRef((function(e, t) { return c.a.createElement(hp, bp({ svgRef: t }, e)) })),
                Op = (a.p, ["svgRef", "title"]);

            function yp() { return (yp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function jp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var kp, wp = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = jp(e, Op); return c.a.createElement("svg", yp({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ep || (Ep = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.5 20v-4.5c0-1.38 1.119-2.5 2.5-2.5h0c1.381 0 2.5 1.12 2.5 2.5V20H20v-8.586c0-.53-.211-1.039-.586-1.414l-6.707-6.707c-.391-.39-1.024-.39-1.414 0L4.586 10c-.375.375-.586.884-.586 1.414V20h5.5z", transform: "translate(-18.000000, -110.000000) translate(18.000000, 110.000000)" })))))) },
                xp = c.a.forwardRef((function(e, t) { return c.a.createElement(wp, yp({ svgRef: t }, e)) })),
                Np = (a.p, ["svgRef", "title"]);

            function _p() { return (_p = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Tp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ap, Sp = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Tp(e, Np); return c.a.createElement("svg", _p({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, kp || (kp = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M5 15.889l5.071-5.071c.391-.391 1.024-.391 1.414 0l2.141 2.141c.391.391 1.024.391 1.414 0L21 7", transform: "translate(-18.000000, -298.000000) translate(18.000000, 110.000000) translate(0.000000, 188.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M18.333 7L21 7 21 9.667M21 20.929L1.925 20.929 1.925 3.221", transform: "translate(-18.000000, -298.000000) translate(18.000000, 110.000000) translate(0.000000, 188.000000)" }))))))) },
                Cp = c.a.forwardRef((function(e, t) { return c.a.createElement(Sp, _p({ svgRef: t }, e)) })),
                Rp = (a.p, ["svgRef", "title"]);

            function Pp() { return (Pp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Lp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ip, Mp = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Lp(e, Rp); return c.a.createElement("svg", Pp({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ap || (Ap = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M12 15.9H3.9C2.85 15.9 2 15.05 2 14V4.9C2 3.85 2.85 3 3.9 3h15.2c1.05 0 1.9.85 1.9 1.9V10", transform: "translate(-18.000000, -204.000000) translate(18.000000, 110.000000) translate(0.000000, 94.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M13.179 7.971c.927.927.927 2.431 0 3.359-.927.927-2.431.927-3.359 0-.927-.927-.927-2.431 0-3.359.928-.928 2.432-.928 3.359 0M22 16.8V14c0-.774-1.568-1.4-3.5-1.4s-3.499.627-3.5 1.4v5.6c.001.773 1.567 1.4 3.5 1.4s3.499-.627 3.5-1.4V14", transform: "translate(-18.000000, -204.000000) translate(18.000000, 110.000000) translate(0.000000, 94.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M15.001 14c0 .773 1.567 1.4 3.5 1.4S22 14.773 22 14M15.001 16.8c0 .773 1.567 1.4 3.5 1.4s3.5-.627 3.5-1.4M6 13L5 13M18 6L17 6", transform: "translate(-18.000000, -204.000000) translate(18.000000, 110.000000) translate(0.000000, 94.000000)" }))))))) },
                Dp = c.a.forwardRef((function(e, t) { return c.a.createElement(Mp, Pp({ svgRef: t }, e)) })),
                Fp = (a.p, ["svgRef", "title"]);

            function Bp() { return (Bp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Kp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Wp, Gp = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Kp(e, Fp); return c.a.createElement("svg", Bp({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ip || (Ip = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { transform: "translate(-18.000000, -251.000000) translate(18.000000, 110.000000) translate(0.000000, 141.000000)" }, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M7.903 15.513l1.14-5.684c.08-.396.39-.705.786-.784l5.684-1.137c.164-.032.334.019.452.137.118.118.17.288.137.452l-1.137 5.684c-.08.396-.388.705-.784.784l-5.684 1.142c-.166.035-.338-.016-.458-.136-.12-.12-.17-.292-.136-.458z" }), c.a.createElement("circle", { cx: 12.005, cy: 12.005, r: 9.004, stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }))))))) },
                Hp = c.a.forwardRef((function(e, t) { return c.a.createElement(Gp, Bp({ svgRef: t }, e)) })),
                Vp = (a.p, ["svgRef", "title"]);

            function zp() { return (zp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Up(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Yp, qp = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Up(e, Vp); return c.a.createElement("svg", zp({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Wp || (Wp = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M14.121 9.879c1.172 1.171 1.172 3.07 0 4.242-1.171 1.172-3.07 1.172-4.242 0-1.172-1.171-1.172-3.07 0-4.242 1.171-1.172 3.07-1.172 4.242 0", transform: "translate(-18.000000, -530.000000) translate(18.000000, 110.000000) translate(0.000000, 420.000000) translate(0.000000, -0.000000)" }), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M16.18 18.725h0c.503.503 1.32.503 1.823 0l.722-.722c.503-.503.503-1.32 0-1.823h0c-.382-.382-.494-.955-.284-1.453l.065-.16c.183-.466.637-.766 1.137-.766h.067c.712 0 1.289-.577 1.289-1.289v-1.021c0-.712-.577-1.289-1.289-1.289h-.067c-.5 0-.954-.301-1.137-.766l-.065-.16c-.21-.498-.098-1.071.284-1.453h0c.503-.503.503-1.32 0-1.823l-.722-.722c-.503-.503-1.32-.503-1.823 0h0c-.382.382-.955.494-1.453.284l-.16-.065c-.466-.186-.767-.641-.767-1.141v-.067C13.8 3.577 13.223 3 12.511 3H11.49c-.713 0-1.29.577-1.29 1.289v.067c0 .5-.301.954-.766 1.137-.054.022-.107.043-.16.066-.498.21-1.071.098-1.453-.284h0c-.503-.503-1.32-.503-1.823 0l-.723.722c-.503.503-.503 1.32 0 1.823h0c.382.382.494.955.284 1.453-.023.054-.044.107-.065.161-.183.465-.638.766-1.138.766h-.067C3.577 10.2 3 10.777 3 11.489v1.021c0 .713.577 1.29 1.289 1.29h.067c.5 0 .954.301 1.137.766l.065.16c.21.498.098 1.071-.284 1.453h0c-.503.503-.503 1.32 0 1.823l.722.722c.503.503 1.32.503 1.823 0h0c.382-.382.955-.494 1.453-.284l.16.065c.466.183.766.637.766 1.137v.067c0 .712.577 1.289 1.289 1.289h1.021c.712 0 1.289-.577 1.289-1.289v-.067c0-.5.301-.954.766-1.137l.16-.065c.501-.209 1.074-.097 1.457.285h0z", transform: "translate(-18.000000, -530.000000) translate(18.000000, 110.000000) translate(0.000000, 420.000000) translate(0.000000, -0.000000)" })))))))) },
                Qp = c.a.forwardRef((function(e, t) { return c.a.createElement(qp, zp({ svgRef: t }, e)) })),
                Xp = (a.p, ["svgRef", "title"]);

            function Jp() { return (Jp = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Zp(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var $p, eb = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Zp(e, Xp); return c.a.createElement("svg", Jp({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Yp || (Yp = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 21L5 3.93M19 14.02L19 4M5 14s.875-.727 3.5-.727S12.875 15 15.5 15s3.5-.977 3.5-.977M5 3.932S5.875 3 8.5 3s4.375 1.727 7 1.727S19 4 19 4", transform: "translate(-18.000000, -541.000000) translate(18.000000, 541.000000) translate(0.000000, 0.000000)" }))))))) },
                tb = c.a.forwardRef((function(e, t) { return c.a.createElement(eb, Jp({ svgRef: t }, e)) })),
                ab = (a.p, ["svgRef", "title"]);

            function nb() { return (nb = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function rb(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var cb, lb = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = rb(e, ab); return c.a.createElement("svg", nb({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, $p || ($p = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95 }, c.a.createElement("path", { d: "M4.5 9L2.25 11.25 0 9M2.25 9c0 .694.086 1.366.235 2.015M20.25 9c0-4.971-4.029-9-9-9s-9 4.029-9 9M11.25 18c4.971 0 9-4.029 9-9M3.879 14.155C5.506 16.478 8.198 18 11.25 18", transform: "translate(-18.000000, -345.000000) translate(18.000000, 110.000000) translate(0.000000, 235.000000) translate(1.875000, 3.000000)" }), c.a.createElement("path", { d: "M14.621 11.871L10.969 9.698 10.969 4.985", transform: "translate(-18.000000, -345.000000) translate(18.000000, 110.000000) translate(0.000000, 235.000000) translate(1.875000, 3.000000)" })))))))) },
                sb = c.a.forwardRef((function(e, t) { return c.a.createElement(lb, nb({ svgRef: t }, e)) })),
                ob = (a.p, ["svgRef", "title"]);

            function ib() { return (ib = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function ub(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var mb, db = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = ub(e, ob); return c.a.createElement("svg", ib({ width: 32, height: 32, viewBox: "0 0 32 32", ref: t }, n), a ? c.a.createElement("title", null, a) : null, cb || (cb = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", d: "M23.542 8.46c4.166 4.165 4.166 10.918 0 15.083-4.165 4.165-10.918 4.165-15.083 0-4.165-4.165-4.165-10.918 0-15.083 4.165-4.166 10.918-4.166 15.083 0M16 12L16 20M20 16L12 16", transform: "translate(-1253.000000, -84.000000) translate(1004.000000, 62.000000) translate(249.000000, 22.000000)" }))))))) },
                fb = c.a.forwardRef((function(e, t) { return c.a.createElement(db, ib({ svgRef: t }, e)) })),
                pb = (a.p, a(1282)),
                bb = a(1307),
                vb = ["svgRef", "title"];

            function Eb() { return (Eb = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function hb(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var gb, Ob = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = hb(e, vb); return c.a.createElement("svg", Eb({ width: 18, height: 17, viewBox: "0 0 18 17", ref: t }, n), a ? c.a.createElement("title", null, a) : null, mb || (mb = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", { stroke: "#FFF", strokeWidth: 2 }, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 .5h17.857M0 7.256h17.857M0 14.256h17.857", transform: "translate(-344 -16) translate(344 17)" })))))) },
                yb = c.a.forwardRef((function(e, t) { return c.a.createElement(Ob, Eb({ svgRef: t }, e)) })),
                jb = (a.p, function() { var e = Object(i.b)(),
                        t = Object(i.c)((function(e) { return e.account })),
                        a = t.address,
                        n = t.watchAddress,
                        l = t.wallet,
                        s = t.watchWallets,
                        o = Object(i.c)((function(e) { return e.global })),
                        u = o.isCollapsedSideBar,
                        m = o.marketBase,
                        d = o.chainId,
                        f = Object(r.useState)(!1),
                        p = Object(Z.a)(f, 2),
                        b = p[0],
                        v = p[1],
                        E = Object(r.useState)(!1),
                        h = Object(Z.a)(E, 1)[0],
                        g = Object(r.useState)(!1),
                        O = Object(Z.a)(g, 2),
                        y = O[0],
                        j = O[1],
                        k = ii(),
                        w = k.currencies,
                        x = k.switchCurrency,
                        N = Object(r.useRef)(null),
                        _ = Object(r.useCallback)((function() { e(Zn(!u)) }), [e, u]);

                    function T(e, t) { e.stopPropagation(), navigator.clipboard.writeText(t.address) }

                    function A() { e(Jn("addContact", { isOpened: !0 })) }

                    function S(t) { e(nt(t)), v(!1) } var C = Object(r.useMemo)((function() { return n ? u ? Object(oe.i)(n) : Object(oe.h)(n, 4, -3) : window.innerWidth > 500 && u ? c.a.createElement(fb, { stroke: "#1de9b6", width: "16px" }) : c.a.createElement("span", null, "Add wallet") }), [n, u]); return Object(r.useLayoutEffect)((function() {
                        function t() { window.innerWidth < 1188 ? e(Zn(!0)) : e(Zn(!1)) } return window.addEventListener("resize", t), t(),
                            function() { return window.removeEventListener("resize", t) } }), [e]), c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "sidebar__bars", onClick: function() { return j(!0) } }, c.a.createElement(yb, null)), c.a.createElement("div", { className: "sidebar ".concat(u ? "collapsed" : "", " ").concat(y ? "active" : "") }, c.a.createElement(Ec.b, { className: "sidebar__footer-logo", to: "/summary", onClick: function() { return j(!1) } }), c.a.createElement("button", { className: "sidebar__expander", onClick: _ }), c.a.createElement("button", { className: "sidebar__chain-selector sidebar__chain-selector--".concat(X.F[d].name.toLocaleLowerCase()), onClick: function(t) { e(Jn("switchChain", { isOpened: !0 })) } }, c.a.createElement("span", null, X.F[d].name)), c.a.createElement("div", { className: "sidebar__header" }, c.a.createElement("button", { className: "sidebar__header-address", onClick: function() { v(!b) }, ref: N, title: "Manage Wallets" }, C), c.a.createElement(pb.a, { className: "sidebar__popper slide-up", style: { top: 70 }, open: b, anchorEl: N.current }, c.a.createElement(bb.a, { onClickAway: function(e) { N.current && N.current.contains(e.target) || v(!1) } }, c.a.createElement("div", { className: "sidebar__wallet" }, c.a.createElement("div", { className: "sidebar__wallet-block", onClick: a ? function() {} : function() { e(Jn("account", { isOpened: !0 })) } }, c.a.createElement("div", { className: "sidebar__wallet-title" }, c.a.createElement("span", null, "Imported Wallet"), !a && c.a.createElement(fb, { stroke: "#1de9b6" })), c.a.createElement("div", { className: "sidebar__wallet-content" }, a && c.a.createElement("div", { className: "sidebar__wallet-item ".concat(n === a ? "active" : "clickable"), onClick: function() { return S(a) } }, c.a.createElement("div", { className: "sidebar__wallet-name" }, "My Wallet"), c.a.createElement("div", { className: "sidebar__wallet-address" }, c.a.createElement("span", null, Object(oe.h)(a, 10, -5)), c.a.createElement(Kc.a, { title: h ? "Copied" : "Copy to Clipboard", arrow: !0, placement: "top" }, c.a.createElement(_i, { stroke: "#898f9f", style: { cursor: "pointer" }, onClick: function(e) { T(e, l) } })))), !a && c.a.createElement("div", { className: "sidebar__wallet-text no-text" }, "No wallet connected"))), c.a.createElement("hr", { style: { margin: "20px 0" } }), c.a.createElement("div", { className: "sidebar__wallet-block" }, c.a.createElement("div", { className: "sidebar__wallet-title", onClick: A }, c.a.createElement("span", null, "Watch Wallets"), c.a.createElement(Kc.a, { title: "Click to Add", arrow: !0, placement: "top" }, c.a.createElement(fb, { stroke: "#1de9b6", onClick: A }))), c.a.createElement("div", { className: "sidebar__wallet-content" }, s.map((function(e, t) { return c.a.createElement("div", { className: "sidebar__wallet-item ".concat(n === e.address ? "active" : "clickable"), onClick: function() { return S(e.address) }, key: t }, c.a.createElement("div", { className: "sidebar__wallet-name" }, e.name), c.a.createElement("div", { className: "sidebar__wallet-address" }, c.a.createElement("span", null, Object(oe.h)(e.address)), c.a.createElement(Kc.a, { title: "Click to Copy", arrow: !0, placement: "top" }, c.a.createElement(_i, { stroke: "#898f9f", style: { cursor: "pointer" }, onClick: function(t) { return T(t, e) } })))) })), 0 === s.length && c.a.createElement("div", { className: "sidebar__wallet-text no-text" }, "No wallet added"))), c.a.createElement("hr", null), c.a.createElement("div", { className: "sidebar__wallet-block clickable", onClick: function() { e(Jn("contacts", { isOpened: !0 })) } }, c.a.createElement("span", { className: "menu" }, "Manage Wallets")), a && c.a.createElement(c.a.Fragment, null, c.a.createElement("hr", null), c.a.createElement("div", { className: "sidebar__wallet-block clickable", onClick: function() { e(et()), l && l.disconnect(), l && "function" === typeof l.clearSession && l.clearSession(), n === a && (null === s || void 0 === s ? void 0 : s.length) && e(nt(s[0].address)), ce.close(), v(!1) } }, c.a.createElement("span", { className: "menu" }, "Disconnect")))))), c.a.createElement(Ec.b, { to: X.K.NOTIFICATION, title: "Notifications" }, c.a.createElement("div", { className: "sidebar__header-notification" }))), c.a.createElement("div", { className: "sidebar__menu" }, c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--summary", to: X.K.SUMMARY, title: "Summary" }, c.a.createElement(xp, { stroke: "#fff" }), "Summary"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--swap", to: X.K.SWAP, title: "Swap" }, c.a.createElement(gp, { stroke: "#fff" }), "Swap"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--earn", to: X.K.EARN, isActive: function(e, t) { if (e) return !0; var a = t.pathname; return "/supply" === a || "/deposit-and-earn" === a }, title: "Earn" }, c.a.createElement(Dp, { stroke: "#fff" }), "Earn"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--explore", to: X.K.EXPLORE, title: "Explore" }, c.a.createElement(Hp, { stroke: "#fff" }), "Explore"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--market", to: X.K.MARKET, title: "Market" }, c.a.createElement(Cp, { stroke: "#fff" }), "Market"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--history", to: X.K.HISTORY, title: "History" }, c.a.createElement(sb, { stroke: "#fff" }), "History"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--kp", to: X.K.KRYSTAL_POINTS, title: "Krystal Points" }, c.a.createElement(yi, { stroke: "#fff" }), "Krystal Points"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--kp", to: X.K.CAMPAIGN, title: "Campaign" }, c.a.createElement(tb, { stroke: "#fff" }), "Campaign"), c.a.createElement(Ec.c, { onClick: function() { return j(!1) }, className: "sidebar__item sidebar__item--setting", to: X.K.SETTINGS, title: "Settings" }, c.a.createElement(Qp, { stroke: "#fff" }), "Settings")), c.a.createElement("div", { className: "sidebar__footer" }, c.a.createElement("div", { className: "sidebar__footer-base-market" }, !!w && c.a.createElement("select", { onChange: function(e) { var t = e.target.value;
                            x(t) }, value: m }, w.map((function(e) { return c.a.createElement("option", { value: e, key: e }, e.toUpperCase()) })))), c.a.createElement("div", { className: "sidebar__social" }, c.a.createElement("a", { className: "sidebar__social-icon telegram", href: "https://t.me/KrystalDefi", target: "_blank", rel: "noopener noreferrer" }), c.a.createElement("a", { className: "sidebar__social-icon twitter", href: "https://twitter.com/KrystalDefi", target: "_blank", rel: "noopener noreferrer" }), c.a.createElement("a", { className: "sidebar__social-icon medium", href: "https://medium.com/krystaldefi", target: "_blank", rel: "noopener noreferrer" })))), c.a.createElement("div", { className: "sidebar__backdrop", onClick: function() { return j(!1) } })) });

            function kb() { return wb.apply(this, arguments) }

            function wb() { return (wb = Object(ft.a)(j.a.mark((function e() { var t, a, n; return j.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, t = "".concat(X.U.COINGECKO_API, "/simple/price?ids=ethereum,bitcoin,matic-network,binancecoin&vs_currencies=eth,btc,usd,bnb"), e.next = 4, fetch(t);
                            case 4:
                                return a = e.sent, e.next = 7, a.json();
                            case 7:
                                return n = e.sent, e.abrupt("return", n);
                            case 11:
                                return e.prev = 11, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", void 0);
                            case 15:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 11]
                    ]) })))).apply(this, arguments) }

            function xb() { var e = Object(i.c)((function(e) { return e.global })).pageSettings,
                    t = Object(Ct.get)(e, "APP_HEADER_BAR.content"); return t ? c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "alert", dangerouslySetInnerHTML: { __html: t } }), c.a.createElement("div", { className: "mb-8" })) : c.a.createElement("div", { style: { height: 40 } }) } var Nb = ["svgRef", "title"];

            function _b() { return (_b = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Tb(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ab, Sb = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Tb(e, Nb); return c.a.createElement("svg", _b({ width: 24, height: 24, ref: t }, n), a ? c.a.createElement("title", null, a) : null, gb || (gb = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("path", { strokeOpacity: .95, stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 8H4M8.11 15.98 4 16M8.11 12H2M13.116 12.743l-1.312 3.281c-.349.874.591 1.703 1.414 1.246l8.44-4.689a.664.664 0 0 0 0-1.16l-8.44-4.689c-.823-.457-1.764.372-1.414 1.246l1.312 3.281a1.993 1.993 0 0 1 0 1.484z" })))) },
                Cb = c.a.forwardRef((function(e, t) { return c.a.createElement(Sb, _b({ svgRef: t }, e)) })),
                Rb = (a.p, ["svgRef", "title"]);

            function Pb() { return (Pb = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Lb(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Ib, Mb = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Lb(e, Rb); return c.a.createElement("svg", Pb({ width: 26, height: 24, viewBox: "0 0 26 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ab || (Ab = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L32 0 32 32 0 32z", transform: "translate(-325.000000, -63.000000) translate(322.000000, 59.000000)" }), c.a.createElement("path", { stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M20.933 5.333c4.227 0 7.067 3.974 7.067 7.68 0 7.507-11.787 13.654-12 13.654-.213 0-12-6.147-12-13.654 0-3.706 2.84-7.68 7.067-7.68 2.426 0 4.013 1.214 4.933 2.28.92-1.066 2.507-2.28 4.933-2.28z", transform: "translate(-325.000000, -63.000000) translate(322.000000, 59.000000)" })))))) },
                Db = c.a.forwardRef((function(e, t) { return c.a.createElement(Mb, Pb({ svgRef: t }, e)) })),
                Fb = (a.p, ["svgRef", "title"]);

            function Bb() { return (Bb = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Kb(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Wb = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Kb(e, Fb); return c.a.createElement("svg", Bb({ width: 26, height: 24, viewBox: "0 0 26 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Ib || (Ib = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L32 0 32 32 0 32z", transform: "translate(-325.000000, -63.000000) translate(322.000000, 59.000000)" }), c.a.createElement("path", { fill: "#1de9b6", stroke: "#1de9b6", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M20.933 5.333c4.227 0 7.067 3.974 7.067 7.68 0 7.507-11.787 13.654-12 13.654-.213 0-12-6.147-12-13.654 0-3.706 2.84-7.68 7.067-7.68 2.426 0 4.013 1.214 4.933 2.28.92-1.066 2.507-2.28 4.933-2.28z", transform: "translate(-325.000000, -63.000000) translate(322.000000, 59.000000)" })))))) },
                Gb = c.a.forwardRef((function(e, t) { return c.a.createElement(Wb, Bb({ svgRef: t }, e)) }));
            a.p;

            function Hb(e) { var t = e.collectibleAddress,
                    a = e.tokenID,
                    n = e.favorite,
                    l = Object(i.b)(),
                    s = Object(r.useState)(n),
                    o = Object(Z.a)(s, 2),
                    u = o[0],
                    m = o[1],
                    d = Object(r.useCallback)((function() { m(!u), l(function(e, t, a) { return { type: Je, payload: { collectibleAddress: e, tokenID: t, favorite: a } } }(t, a, !u)) }), [t, l, u, a]); return c.a.createElement("div", null, c.a.createElement("button", { onClick: d }, !u && c.a.createElement(Db, { stroke: "#fff" }), u && c.a.createElement(Gb, null))) } var Vb, zb = a(640),
                Ub = ["svgRef", "title"];

            function Yb() { return (Yb = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function qb(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Qb, Xb = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = qb(e, Ub); return c.a.createElement("svg", Yb({ width: 120, height: 36, ref: t }, n), a ? c.a.createElement("title", null, a) : null, Vb || (Vb = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", { fill: "#FFF", fillRule: "nonzero" }, c.a.createElement("path", { d: "M45.001 29.189v-7.075h.057l4.61 7.075h5.345l-5.542-7.563 4.826-6.247 1.607-2.095h-5.287l-1.549 2.087-4.01 6.144H45V2.399l-4.456 1.135v25.655z" }), c.a.createElement("path", { d: "M60.136 29.189v-6.83c0-1.21.271-2.168.814-2.87.542-.704 1.295-1.055 2.259-1.055h5.582v-3.548H64.01c-1.824 0-3.117.717-3.818 2.654h-.056v-2.654H55.7v14.303h4.435z" }), c.a.createElement("path", { d: "M68.773 36c2.827 0 4.943-1.866 6.347-5.598l5.842-15.516h-4.396l-2.71 8.768c-.225.72-.38 1.352-.463 1.894h-.057a11.349 11.349 0 0 0-.393-1.922l-2.582-8.416a.46.46 0 0 0-.44-.324h-4.575l5.842 14.338-.758 1.782c-.45 1.075-1.245 1.613-2.388 1.613a3.735 3.735 0 0 1-1.923-.52v3.536c.692.243 1.577.365 2.654.365zM84.294 30.097c.878 0 1.725-.087 2.541-.262.816-.175 1.537-.453 2.162-.836a4.503 4.503 0 0 0 1.503-1.487c.377-.609.566-1.343.566-2.202 0-.614-.093-1.143-.28-1.586a3.392 3.392 0 0 0-.801-1.162 5.22 5.22 0 0 0-1.253-.864 13.2 13.2 0 0 0-1.632-.68c-.334-.113-.67-.224-1.01-.332a6.684 6.684 0 0 1-.922-.369 2.237 2.237 0 0 1-.673-.488c-.172-.19-.264-.302-.264-.567 0-.198.063-.347.178-.503.114-.156.272-.283.472-.383.2-.099.432-.174.695-.226a4.31 4.31 0 0 1 .837-.078h3.765v-3.186h-3.951c-.83 0-1.63.087-2.398.262a6.581 6.581 0 0 0-2.047.821 4.36 4.36 0 0 0-1.432 1.438c-.358.585-.537 1.284-.537 2.096 0 .595.08 1.11.237 1.544.157.434.386.817.687 1.147.3.33.673.62 1.116.871.444.25.957.484 1.54.701.362.142.739.27 1.13.383.392.113.752.24 1.081.382.33.142.599.307.809.496.21.188.315.425.315.708 0 .444-.231.774-.694.991-.463.217-1.096.326-1.897.326a7.454 7.454 0 0 1-2.097-.326 9.683 9.683 0 0 1-2.227-.991v3.626c1.375.49 2.868.736 4.481.736z" }), c.a.createElement("path", { d: "M96.564 29.643c1.336 0 2.335-.173 2.998-.519v-3.281c-.502.271-.99.407-1.463.407-1.204 0-1.805-.748-1.805-2.244V18.07h3.268v-3.184h-3.268v-4.314l-4.477 1.262v3.052h-2.359v3.184h2.36v6.707c0 3.244 1.581 4.866 4.746 4.866zM106.933 14.432c4.119 0 6.178 2.032 6.178 6.097v8.538h-4.217v-2.05h-.057l-.135.212c-.965 1.458-2.354 2.187-4.167 2.187-1.401 0-2.504-.393-3.308-1.179-.803-.786-1.205-1.835-1.205-3.146 0-2.772 1.66-4.372 4.979-4.8l3.92-.516-.003-.184c-.066-1.44-.92-2.16-2.563-2.16-1.721 0-3.357.507-4.909 1.521v-3.32l.215-.105c.597-.273 1.374-.518 2.331-.733 1.077-.241 2.057-.362 2.94-.362zm1.989 7.869-2.624.334-.212.032c-1.306.22-1.96.856-1.96 1.908 0 .502.176.914.529 1.234.353.321.83.482 1.432.482.837 0 1.518-.286 2.045-.858.526-.572.79-1.295.79-2.17v-.962zM118.09 29.643c.77 0 1.315-.049 1.91-.22v-3.635h-.124c-.57.073-.794.073-1.265.073-.273 0-.446-.268-.446-.586V7.621H113.8v18.142c0 2.538 1.364 3.88 4.29 3.88z" })), c.a.createElement("path", { d: "M18.524 20.89a.792.792 0 0 1 .806.777l.205 10.967a.792.792 0 0 1-.638.792l-4.469.887a.792.792 0 0 1-.9-1.045l4.266-11.855a.792.792 0 0 1 .73-.523zm2.581.299a.792.792 0 0 1 1.12.04l7.104 7.637a.792.792 0 0 1-.438 1.319l-6.938 1.26a.792.792 0 0 1-.933-.764l-.167-8.898a.792.792 0 0 1 .252-.594zm-4.257-1.473a.792.792 0 0 1-.021.465l-3.457 9.652a.792.792 0 0 1-1.294.304L4.893 23.23a.792.792 0 0 1 .351-1.338l10.64-2.745a.792.792 0 0 1 .964.569zm6.761-1.696 10.86 2.212c.41.084.684.471.626.885l-1.158 8.322a.792.792 0 0 1-1.367.427L22.87 19.332a.792.792 0 0 1 .74-1.312zM.847 10.534a.792.792 0 0 1 1.02-.46l15.023 5.678a.792.792 0 0 1-.083 1.508L.989 21.323a.792.792 0 0 1-.986-.831l.796-9.742a.792.792 0 0 1 .048-.216zM30.83 5.56a.792.792 0 0 1 .278.458l2.26 11.165a.792.792 0 0 1-.934.933l-9.707-1.97a.792.792 0 0 1-.458-1.274l7.448-9.195a.792.792 0 0 1 1.113-.117zM19.337 3.546c.069.12.105.256.105.394v10.166a.792.792 0 0 1-1.072.74l-10.664-4.04a.792.792 0 0 1-.114-1.426l10.664-6.126a.792.792 0 0 1 1.08.292zM20.859.529a.792.792 0 0 1 1.01-.484l7.07 2.485a.792.792 0 0 1 .352 1.246l-7.07 8.722a.792.792 0 0 1-1.407-.499V.792c0-.09.015-.178.045-.263z", fill: "#1DE9B6" })))) },
                Jb = c.a.forwardRef((function(e, t) { return c.a.createElement(Xb, Yb({ svgRef: t }, e)) })),
                Zb = (a.p, ["svgRef", "title"]);

            function $b() { return ($b = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function ev(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var tv, av = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = ev(e, Zb); return c.a.createElement("svg", $b({ width: 24, height: 24, ref: t }, n), a ? c.a.createElement("title", null, a) : null, Qb || (Qb = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("path", { strokeOpacity: .95, stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.556 11.111 12 14.667l-3.556-3.556M12 4v10.667M20 16.444h0A3.556 3.556 0 0 1 16.444 20H7.556A3.556 3.556 0 0 1 4 16.444h0" })))) },
                nv = c.a.forwardRef((function(e, t) { return c.a.createElement(av, $b({ svgRef: t }, e)) }));
            a.p;

            function rv(e) { var t = Object(r.useRef)(null),
                    a = Object(i.c)((function(e) { return e.global })).chainId,
                    n = Object(r.useMemo)((function() { var t; return Object(oe.u)(e.collectibleAddress, (null === e || void 0 === e || null === (t = e.nft) || void 0 === t ? void 0 : t.tokenID) || "", a, !1) }), [a, e]),
                    l = Object(r.useState)("Click to Copy"),
                    s = Object(Z.a)(l, 2),
                    o = s[0],
                    u = s[1],
                    m = Object(r.useMemo)((function() { return n.length < 40 ? n : "".concat(n.slice(0, 40), "...") }), [n]),
                    d = Object(r.useCallback)((function() { t.current && zb.a(t.current).then((function(t) { var a, n = document.createElement("a");
                            n.download = "nft_".concat(e.collectibleAddress, "_").concat(null === e || void 0 === e || null === (a = e.nft) || void 0 === a ? void 0 : a.tokenID, ".png"), n.href = t, n.click() })) }), [e]); return c.a.createElement(se, { noPanel: !0, className: "share-social-modal preview-nft-image small", content: c.a.createElement("div", null, c.a.createElement("div", { className: "pt-4" }), c.a.createElement("div", { className: "preview-nft-image__card", ref: t }, c.a.createElement(Jb, { className: "preview-nft-image__card--logo" }), c.a.createElement("div", { className: "preview-nft-image__card--qr-code" }, c.a.createElement(Vl.a, { value: n, size: 70, bgColor: "#ffffff", fgColor: "#000000", level: "M", renderAs: "svg" })), c.a.createElement("div", { className: "preview-nft-image__card--image", style: { backgroundImage: "url('".concat(X.I + e.nft.externalData.image || ss.a, "')") } }), c.a.createElement("div", { className: "preview-nft-image__card__info" }, c.a.createElement("div", { className: "preview-nft-image__card__info--name" }, c.a.createElement("h2", null, e.nft.externalData.name), c.a.createElement("span", null, "#", e.nft.tokenID)))), c.a.createElement("div", { className: "preview-nft-image__actions mt-4" }, c.a.createElement("div", { className: "share-social-modal__input-container", style: { width: 270 } }, c.a.createElement("input", { className: "share-social-modal__input", type: "text", placeholder: "0", defaultValue: m, style: { fontSize: 11 } }), c.a.createElement("div", { className: "share-social-modal__input-tool" }, c.a.createElement(Kc.a, { title: o, arrow: !0, placement: "top" }, c.a.createElement("div", { className: "share-social-modal__input-copy", onClick: function() { navigator.clipboard.writeText(n), u("Copied!"), setTimeout((function() { u("Click to Copy") }), 2e3) } }, "Copy")))), c.a.createElement("button", { className: "btn btn--link", style: { margin: "0", marginLeft: 8 }, onClick: d }, c.a.createElement(nv, null)))) }) }

            function cv(e) { var t = Object(i.b)(),
                    a = Object(vc.g)(),
                    n = Object(i.c)((function(e) { return e.global })),
                    l = n.selectedGasPrice,
                    s = n.gasPrices,
                    o = n.chainId,
                    u = Object(i.c)((function(e) { return e.account })),
                    m = u.address,
                    d = u.watchAddress,
                    f = u.watchWallets,
                    p = d && d !== m,
                    b = Object(r.useState)(X.g.TRANSFER_ETH),
                    v = Object(Z.a)(b, 2),
                    E = v[0],
                    h = v[1],
                    g = Object(r.useState)(""),
                    O = Object(Z.a)(g, 2),
                    y = O[0],
                    k = O[1],
                    w = Object(r.useState)("1"),
                    x = Object(Z.a)(w, 2),
                    N = x[0],
                    _ = x[1],
                    T = Object(r.useState)(X.E.ERC721),
                    A = Object(Z.a)(T, 2),
                    C = A[0],
                    R = A[1],
                    P = Object(r.useState)(!1),
                    L = Object(Z.a)(P, 2),
                    I = L[0],
                    M = L[1],
                    D = po(!0),
                    F = D.state,
                    B = D.setState,
                    K = Object(r.useMemo)((function() { return Object(oe.b)(s[l], E) }), [E, s, l]),
                    W = Object(r.useMemo)((function() { return new de.a(new de.a.providers.HttpProvider(X.F[o].url)) }), [o]);
                Object(r.useEffect)((function() { Object(ft.a)(j.a.mark((function t() { var a; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Object(J.a)(W, e.collectibleAddress);
                                case 2:
                                    a = t.sent, R(a);
                                case 4:
                                case "end":
                                    return t.stop() } }), t) })))() }), [e.collectibleAddress, W]); var G = Object(r.useCallback)(Object(ft.a)(j.a.mark((function t() { var a; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (d && y) { t.next = 2; break } return t.abrupt("return");
                            case 2:
                                return B.setGasLoading(!0), a = X.g.TRANSFER_TOKEN, t.next = 6, Object(fe.b)(W, X.a.TRANSFER_NFT, { params: { contractAddress: e.collectibleAddress, fromAddress: m, toAddress: y, tokenID: e.nft.tokenID, amount: +N }, txParams: { address: m } }, C);
                            case 6:
                                a = t.sent, h(a), B.setGasLoading(!1);
                            case 9:
                            case "end":
                                return t.stop() } }), t) }))), [m, e.collectibleAddress, e.nft.tokenID, y, B, d, W, C, N]);
                Object(r.useEffect)((function() { G() }), [G]), Object(r.useEffect)((function() {
                    (function() { var t = Object(ft.a)(j.a.mark((function t() { return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(fe.a)(W, d, e.collectibleAddress, e.nft.tokenID);
                                    case 2:
                                        t.sent || (a.push("/"), ce.close());
                                    case 4:
                                    case "end":
                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } })()() }), [a, e.collectibleAddress, e.nft.tokenID, d, W]), no(G, 15e3); var H = Object(r.useCallback)((function(e) { k(e.target.value) }), []),
                    V = Object(r.useCallback)((function(t) { B.setFormError(""); var a = t.target.value;
                        Object(oe.f)(t, a, N) && (+a > +e.nft.tokenBalance && B.setFormError("Insufficient balance for the transfer"), 0 === +a && B.setFormError("Invalid amount"), _(a)) }), [N, e.nft.tokenBalance, B]),
                    z = Object(r.useCallback)((function() { t(function(e, t, a, n, r) { return { type: S, payload: { contractAddress: e, estimatedGas: t, toAddress: a, tokenID: n, amount: r } } }(e.collectibleAddress, E, y, e.nft.tokenID, +N)) }), [t, E, e.collectibleAddress, e.nft.tokenID, y, N]); return c.a.createElement(se, { customTitle: "Transfer NFT", className: "small", submitText: "Done", noPanel: !0, content: c.a.createElement("div", null, c.a.createElement("div", { className: "nft-asset__collapse-item__list--wrapper", style: { width: 194, margin: "0 auto", marginBottom: 32 } }, c.a.createElement("div", { className: "nft-asset__collapse-item__list__item without-hover", style: { backgroundColor: "#3b3e3c" } }, c.a.createElement("div", { className: "nft-asset__collapse-item__list__item--image", style: { backgroundImage: "url('".concat(e.nft.externalData.image || ss.a, "')") } }), c.a.createElement("div", { className: "nft-asset__collapse-item__list__item--label" }, e.nft.externalData.name), c.a.createElement("div", { className: "nft-asset__collapse-item__list__item--id" }, "#", e.nft.tokenID))), c.a.createElement("div", { className: "mt-6" }, c.a.createElement("div", { className: "mb-2" }, "Recipient Address"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("button", { className: "btn btn--tx", style: { top: -33, right: 0 }, onClick: function() { M(!0) } }, c.a.createElement(io, { stroke: "#fff" })), c.a.createElement("input", { className: "swap__input pd-none input-dest-address", type: "text", placeholder: "Recipient Address/ENS", value: y, onChange: H }))), C === X.E.ERC1155 && c.a.createElement("div", { className: "mt-2" }, c.a.createElement("div", { className: "mb-2" }, "Amount"), c.a.createElement("div", { className: "swap__input-container" }, c.a.createElement("input", { className: "swap__input pd-none input-dest-address", type: "text", placeholder: "Amount", value: N, onChange: V })), c.a.createElement("div", { className: "mt-2" }, "Balance: ", e.nft.tokenBalance)), F.formError && c.a.createElement("div", { className: "input-error mt-2 slide-up" }, F.formError), c.a.createElement("div", { className: "btn btn--gradient mt-4 ".concat(F.isGasLoading || "" !== F.formError || p ? "gray-disabled" : ""), onClick: z }, F.isGasLoading && "Loading...", !F.isGasLoading && (d ? "Transfer" : "Connect Wallet")), c.a.createElement("div", { className: "swap__info pr-2" }, !!y && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", null, c.a.createElement("span", null, "Gas fee")), c.a.createElement("div", null, K, " ", X.F[o].currencySymbol, " ", c.a.createElement("span", { className: "gas-type" }, "(", l.toUpperCase(), ")")))), d && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "swap__info mb-3 mt-7 mr-2" }, c.a.createElement("div", null, "Contacts")), c.a.createElement("div", { style: { maxHeight: 143, overflowY: "auto" } }, f.map((function(e) { return c.a.createElement("div", { className: "flex-center swap__address ".concat(e.address === d === m && "disabled"), key: e.address, onClick: function() { return k(e.address) } }, c.a.createElement(ho.a, { email: e.address, className: "circle-radius mr-3", size: 40 }), c.a.createElement("div", null, c.a.createElement("div", { className: "mb-1 fs-3" }, e.name), c.a.createElement("div", { className: "text-grey fs-2 address" }, Object(oe.h)(e.address, 20, -10)))) })))), I && c.a.createElement(re, { isActive: I, onClose: function() { M(!1) } }, c.a.createElement(uo, { estimatedGasLimit: E, slippageOption: F.isSwapAndDeposit, close: function() { M(!1) } }))) }) }

            function lv() { var e = Object(vc.g)(),
                    t = Object(i.b)(),
                    a = Object(i.c)((function(e) { return e.global })).chainId,
                    n = Object(i.c)((function(e) { return e.account })),
                    l = n.address,
                    s = n.watchAddress,
                    o = n.balanceNFTs,
                    u = n.wallet,
                    m = !!s && s === l,
                    d = Object(r.useState)(!1),
                    f = Object(Z.a)(d, 2),
                    p = f[0],
                    b = f[1],
                    v = Object(r.useState)(),
                    E = Object(Z.a)(v, 2),
                    h = E[0],
                    g = E[1],
                    O = Object(r.useState)(!1),
                    y = Object(Z.a)(O, 2),
                    k = y[0],
                    w = y[1],
                    x = Object(vc.i)(),
                    N = x.collectibleAddress,
                    _ = x.tokenID,
                    T = new URLSearchParams(e.location.search),
                    A = Number(T.get("chainId"));
                Object(r.useEffect)((function() {
                    (null === h || void 0 === h ? void 0 : h.tokenID) || (N && _ && [X.d.BSC, X.d.MAINNET, X.d.POLYGON, X.d.ROPSTEN].includes(Number(A)) || e.push("/"), a === A ? (w(!0), function() { var t = Object(ft.a)(j.a.mark((function t() { var n, r, c, l; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (N && _) { t.next = 2; break } return t.abrupt("return");
                                    case 2:
                                        return t.next = 4, La(X.t[a], N, _);
                                    case 4:
                                        if (n = t.sent, r = new de.a(new de.a.providers.HttpProvider(X.F[a].url)), n && n.tokenID) { t.next = 11; break } return t.next = 9, Object(fe.g)(r, N, _, a);
                                    case 9:
                                        (n = t.sent) && n.tokenID || e.push("/");
                                    case 11:
                                        if (c = "1", o.find((function(e) { return e.items.find((function(e) { return e.tokenID === (null === h || void 0 === h ? void 0 : h.tokenID) && (c = "" + e.tokenBalance, !0) })) })), n && (n.tokenBalance = c), g(n), !m) { t.next = 20; break } return t.next = 18, Object(fe.a)(r, s, N, _);
                                    case 18:
                                        l = t.sent, b(l);
                                    case 20:
                                        w(!1);
                                    case 21:
                                    case "end":
                                        return t.stop() } }), t) }))); return function() { return t.apply(this, arguments) } }()()) : u && u.getWalletType() === X.V.METAMASK ? u.switchChain(A) : t(qn(A))) }), [o, a, A, N, t, e, m, h, _, u, s]); var S = Object(r.useMemo)((function() { return !!o.find((function(e) { return e.items.find((function(e) { return e.tokenID === (null === h || void 0 === h ? void 0 : h.tokenID) && !!e.favorite })) })) }), [o, null === h || void 0 === h ? void 0 : h.tokenID]),
                    C = Object(r.useCallback)((function() { k || ce.show(rv, { nft: h, collectibleAddress: N }) }), [N, k, h]),
                    R = Object(r.useCallback)((function() { k || ce.show(cv, { nft: h, collectibleAddress: N }) }), [k, N, h]); return c.a.createElement("div", null, c.a.createElement("div", { className: "preview-nft" }, k && c.a.createElement("div", { className: "show-loading" }, c.a.createElement(Zc, null)), !k && h && c.a.createElement(c.a.Fragment, null, c.a.createElement(is, { nft: h, className: "preview-nft__avatar" }), c.a.createElement("div", { className: "preview-nft__title" }, c.a.createElement("div", { className: "preview-nft__title--content" }, c.a.createElement("h2", null, null === h || void 0 === h ? void 0 : h.externalData.name), c.a.createElement("span", null, null === h || void 0 === h ? void 0 : h.collectibleName)), p && c.a.createElement(Hb, { collectibleAddress: N || "", tokenID: (null === h || void 0 === h ? void 0 : h.tokenID) || "", favorite: S })), c.a.createElement("h5", { className: "preview-nft__tags" }, c.a.createElement("div", { className: "preview-nft__tags__item" }, "#", null === h || void 0 === h ? void 0 : h.tokenID)), c.a.createElement(Am, { text: (null === h || void 0 === h ? void 0 : h.externalData.description) || "", className: "preview-nft__description", limit: 295 }), c.a.createElement("div", { className: "preview-nft__actions" }, p && c.a.createElement("button", { className: "btn btn--link", onClick: R }, c.a.createElement(Cb, { stroke: "#fff" })), c.a.createElement("button", { className: "btn btn--link", onClick: C }, c.a.createElement(Pi, { stroke: "#fff" })), c.a.createElement("a", { className: "btn btn--link", href: "".concat(X.k[a], "/token/").concat(N, "?a=").concat(null === h || void 0 === h ? void 0 : h.tokenID), target: "_blank", rel: "noopener noreferrer" }, c.a.createElement(Ym, { stroke: "#fff" })))))) }

            function sv() { var e = Object(vc.g)(),
                    t = Object(vc.h)(); return Object(Ct.get)(t, "state.background") ? c.a.createElement(re, { isActive: !0, onClose: function() { e.goBack() } }, c.a.createElement(se, { noPanel: !0, className: "preview-nft small", content: c.a.createElement(lv, null) })) : null }

            function ov() { return c.a.createElement("div", { className: "container" }, c.a.createElement("div", { className: "block" }, c.a.createElement("div", { className: "block__title" }, "NFT Preview"), c.a.createElement("div", { className: "block__content slide-up", style: { padding: 40 } }, c.a.createElement(lv, null)))) } var iv = ["svgRef", "title"];

            function uv() { return (uv = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function mv(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var dv, fv = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = mv(e, iv); return c.a.createElement("svg", uv({ width: 22, height: 17, viewBox: "0 0 22 17", ref: t }, n), a ? c.a.createElement("title", null, a) : null, tv || (tv = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("path", { d: "M0 0L32 0 32 32.286 0 32.286z", transform: "translate(-591.000000, -47.000000) translate(587.000000, 39.000000)" }), c.a.createElement("path", { stroke: "#FFF", strokeLinecap: "round", strokeLinejoin: "round", strokeOpacity: .95, d: "M5.347 16.116L25.333 16.116M13.351 8.055L5.336 16.143 13.351 24.23", transform: "translate(-591.000000, -47.000000) translate(587.000000, 39.000000)" })))))) },
                pv = c.a.forwardRef((function(e, t) { return c.a.createElement(fv, uv({ svgRef: t }, e)) })),
                bv = (a.p, a(243)),
                vv = a.n(bv);

            function Ev(e) { var t = Object(i.b)(),
                    n = Object(i.c)((function(e) { return e.account })).distributionTokens,
                    l = 100 * e.depositPlatform.supplyRate,
                    s = e.depositPlatform.distributionSupplyRate ? 100 * e.depositPlatform.distributionSupplyRate : 0,
                    o = Object(i.c)((function(e) { return e.tx })).txConfirming;

                function u() { return (u = Object(ft.a)(j.a.mark((function a() { return j.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                case 0:
                                    t(V(e.txObject, { destSymbol: e.destToken.symbol, destAmount: e.destAmount, APY: l + s }));
                                case 1:
                                case "end":
                                    return a.stop() } }), a) })))).apply(this, arguments) } var m = Object(r.useMemo)((function() { var t = e.depositPlatform.name; if (!t) return ""; if (!(null === n || void 0 === n ? void 0 : n.length)) return t; var a = n.find((function(e) { return e.name === t })); return a ? a.symbol : t }), [n, e.depositPlatform]); return c.a.createElement(se, { customTitle: "Earning Confirm", className: "deposit-confirm md-small ".concat(o ? "disabled-btn" : ""), onSubmit: function() { return u.apply(this, arguments) }, submitText: "Confirm", close: e.close, content: c.a.createElement("div", null, c.a.createElement("div", { className: "align-center ".concat(e.isSwapAndDeposit ? "deposit-confirm__content" : "") }, e.isSwapAndDeposit && c.a.createElement("div", null, c.a.createElement("div", { className: "mb-1" }, Object(oe.m)(e.srcAmount, 4), " ", e.srcToken.symbol), c.a.createElement("div", { className: "align-center mt-2 mb-3" }, c.a.createElement("img", { className: "arrow-down", src: Ss.a, alt: "arrowRightIcon" }))), c.a.createElement("div", { className: "mb-1" }, Object(oe.m)(e.destAmount, 4), " ", e.destToken.symbol), 0 !== e.tokenPrice && c.a.createElement("div", { className: "text-gray-4 fs-3" }, "\u2248 ", Object(oe.m)(e.destAmount * e.tokenPrice, 2), " USD")), c.a.createElement("div", { className: "align-center mt-2 mb-3" }, c.a.createElement("img", { className: "arrow-down", src: Ss.a, alt: "arrowRightIcon" })), c.a.createElement("div", { className: "deposit-confirm__content" }, c.a.createElement("div", { className: "flex-all-center top-1 mb-3" }, c.a.createElement("div", { className: "mr-1" }, e.depositPlatform.name), e.depositPlatform.distributionSupplyRate && c.a.createElement("img", { className: "token-circle", src: vv.a, alt: "arrowRightIcon" })), c.a.createElement("div", { className: "flex-between-center mb-2" }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement("img", { className: "mr-1 top-2 token-icon", src: e.destToken.logo ? e.destToken.logo : Rc.a, alt: "Token" }), c.a.createElement("div", null, "Supply APY")), c.a.createElement("div", null, Object(oe.m)(l, 2), "%")), e.depositPlatform.distributionSupplyRate && c.a.createElement("div", { className: "flex-between-center" }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement("img", { className: "token-icon mr-1 top-2", src: a(567)("./".concat(e.depositPlatform.name, ".svg")), alt: "token" }), c.a.createElement("div", null, "Distribution APY")), c.a.createElement("div", null, Object(oe.m)(s, 2), "%"))), c.a.createElement("div", { className: "dark-container" }, c.a.createElement("div", { className: "flex-between-center mb-2" }, c.a.createElement("div", null, c.a.createElement("span", { className: "text-gray-4 fs-3 mr-1" }, "Net APY"), c.a.createElement(Kc.a, { title: "Positive APY means you will receive interest and negative means you will pay interest.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer top-2", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, "+ ", Object(oe.m)(l + s, 2), "%")), c.a.createElement(Wc, { gasPrice: e.gasPrice, ethPrice: e.ethPrice, estimatedGas: e.estimatedGas, onlyGasText: !1 })), s > 0 && c.a.createElement("div", { className: "notification green flex-between-start mt-4" }, c.a.createElement("div", { className: "notification__icon top-2" }, c.a.createElement("img", { src: vv.a, alt: "saving" })), c.a.createElement("div", { className: "notification__content" }, "You will automatically earn ", m, " token (", Object(oe.m)(s, 2), "% APY) for interacting with ", e.depositPlatform.name, " (supply or borrow). Once redeemed, ", m, " token can be swapped to any token."))) }) }

            function hv(e) { var t = Object(r.useCallback)((function(t) { e.onChangeDestToken(t), ce.close() }), [e]),
                    a = Object(r.useCallback)((function() { ce.show(Ys, { onSelect: t, isStakedTokens: "staked" === e.tokenType }) }), [t, e.tokenType]),
                    n = Object(r.useMemo)((function() { return c.a.createElement("input", { className: "swap__input", type: "text", placeholder: "0", onKeyPress: function(t) { "".concat(e.amount).concat(t.key).match(/^([0-9]*[.])?[0-9]*$/) || t.preventDefault() }, value: e.amount || "", autoComplete: "off", onChange: function(t) { e.onChange(t.target.value) } }) }), [e]); return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "mb-3 pl-2" }, e.label || ""), c.a.createElement("div", { className: "swap__input-container" }, n, c.a.createElement("div", { className: "swap__input-tool" }, e.onChangeMaxAmout && c.a.createElement("div", { className: "swap__input-max", onClick: e.onChangeMaxAmout }, "Max"), c.a.createElement("div", { className: "swap__input-select", onClick: a }, c.a.createElement("span", null, e.token ? e.token.symbol : "Choose"), c.a.createElement("img", { src: Vs.a, alt: "Select" }))))) }

            function gv() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.supply })),
                    n = t.platform,
                    l = t.destToken,
                    s = Object(i.c)((function(e) { return e.account })).distributionTokens,
                    o = Object(r.useCallback)((function(t) { e(function(e) { return { type: xr, payload: e } }(t)) }), [e]),
                    u = Object(r.useMemo)((function() { return l && l.overview || [] }), [l]),
                    m = Object(r.useMemo)((function() { return n && n.distributionSupplyRate ? 100 * n.distributionSupplyRate : 0 }), [n]),
                    d = Object(r.useMemo)((function() { if (!n) return ""; if (!n.name) return ""; if (!(null === s || void 0 === s ? void 0 : s.length)) return n.name; var e = s.find((function(e) { return e.name === n.name })); return e ? e.symbol : n.name }), [s, n]); return c.a.createElement("div", null, c.a.createElement("div", { className: "block__wrapper mb-4" }, c.a.createElement("div", { className: "mb-4" }, "Select the platform to supply ", l.symbol), c.a.createElement("div", { className: "deposit-platform" }, u.map((function(e, t) { var r = n ? e.name === n.name : 0 === t; return c.a.createElement("label", { key: t, className: "option row deposit-platform__item ".concat(r && "active") }, c.a.createElement("div", { className: "pl-5 deposit-platform__item--token-info" }, c.a.createElement("object", { className: "option__icon", data: a(567)("./".concat(e.name, ".svg")), type: "image/svg+xml" }, c.a.createElement("img", { className: "deposit-platform__item--icon", src: Rc.a, alt: "Token" })), c.a.createElement("span", { className: "option__label ml-2 mr-1" }, e.name), c.a.createElement("input", { className: "option__radio", type: "radio", onChange: function() { return o(e) }, checked: n ? e.name === n.name : 0 === t }), c.a.createElement("span", { className: "option__check" }), e.distributionSupplyRate && c.a.createElement("span", { className: "option__supply-rate", title: "".concat(Object(oe.m)(100 * e.distributionSupplyRate, 2), "%") }, Object(oe.m)(100 * e.distributionSupplyRate, 2), "%")), c.a.createElement("div", null, Object(oe.m)(100 * e.supplyRate, 2), "%")) })))), m > 0 && n && c.a.createElement("div", { className: "notification green flex-between-start mt-4" }, c.a.createElement("div", { className: "notification__icon top-2" }, c.a.createElement("img", { src: vv.a, alt: "saving" })), c.a.createElement("div", { className: "notification__content" }, "You will automatically earn ", d, " token (", Object(oe.m)(m, 2), "% APY) for interacting with", " ", n.name, " (supply or borrow). Once redeemed,", " ", d, " token can be swapped to any token."))) }

            function Ov(e) { var t = e.isEnabledSwapAndSupply,
                    a = Object(i.c)((function(e) { return e.global })),
                    n = a.chainId,
                    l = a.selectedGasPrice,
                    s = a.gasPrices,
                    o = a.slippageRate,
                    u = Object(i.c)((function(e) { return e.supply })),
                    m = u.destAmount,
                    d = u.destToken,
                    f = u.isEditing,
                    p = u.selectedSwapPlatform,
                    b = u.srcAmount,
                    v = u.srcToken,
                    E = u.tx,
                    h = m - m * (o / 100),
                    g = (b || 0) * (1 + o / 100),
                    O = Ts(null === p || void 0 === p ? void 0 : p.rate, p),
                    y = O.priceDifference,
                    j = O.priceDifferentDOM,
                    k = Object(r.useMemo)((function() { var e = (null === E || void 0 === E ? void 0 : E.gas) ? Object(oe.w)(E.gas) : X.g.SWAP_AND_DEPOSIT; return +Object(oe.b)(s[l], e) }), [s, l, E]); return c.a.createElement("div", null, c.a.createElement("div", { className: "mt-5" }, c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Gas fee")), c.a.createElement("div", null, k, " ", X.F[n].currencySymbol, " ", c.a.createElement("span", { className: "gas-type" }, "(", l.toUpperCase(), ")"))), t && c.a.createElement(c.a.Fragment, null, c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Slippage")), c.a.createElement("div", null, o, " %")), f === X.q.SRC && c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Minimum received"), c.a.createElement(Kc.a, { title: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, Object(oe.m)(h, 4), " ", d.symbol)), f === X.q.DEST && v && c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Maximum sent"), c.a.createElement(Kc.a, { title: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), c.a.createElement("div", null, Object(oe.m)(g, 4), " ", v.symbol)), b > 0 && m > 0 && Math.abs(y) > 5 && c.a.createElement("div", { className: "swap__info" }, c.a.createElement("div", null, c.a.createElement("span", null, "Price difference"), c.a.createElement(Kc.a, { title: "The difference between the market price and estimated price due to trade size.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "pointer", src: Bc.a, alt: "Info" }))), j)))) }

            function yv() { var e = Object(i.b)(),
                    t = Object(i.c)((function(e) { return e.supply })),
                    a = t.swapPlatforms,
                    n = t.srcAmount,
                    l = t.srcToken,
                    s = t.destToken,
                    o = t.destAmount,
                    u = t.selectedSwapPlatform,
                    m = t.isFetchingRate,
                    d = Object(r.useState)(!1),
                    f = Object(Z.a)(d, 2),
                    p = f[0],
                    b = f[1],
                    v = Object(r.useCallback)((function(t) { e(Kr(t)), ce.close() }), [e]),
                    E = Object(r.useCallback)((function() { l && s && ce.show(eo, { onSelect: v, allRates: a, srcToken: l, destToken: s, srcAmount: n, destAmount: o }) }), [o, s, v, a, n, l]),
                    h = Object(r.useMemo)((function() { return m ? c.a.createElement("img", { className: "top-2", style: { width: 12 }, src: Yl.a, alt: "Loading..." }) : u ? p ? Object(oe.G)(1 / u.rate) : Object(oe.G)(u.rate) : 0 }), [m, u, p]); return c.a.createElement("div", null, c.a.createElement("div", { className: "swap__path" }, c.a.createElement("div", { className: "swap__rate" }, !p && c.a.createElement("span", null, "Rate: 1 ", null === l || void 0 === l ? void 0 : l.symbol, " = ", h, " ", null === s || void 0 === s ? void 0 : s.symbol), p && c.a.createElement("span", null, "Rate: 1 ", null === s || void 0 === s ? void 0 : s.symbol, " = ", h, " ", null === l || void 0 === l ? void 0 : l.symbol), c.a.createElement("img", { src: $s.a, onClick: function() { return b(!p) }, alt: "Swap rate" })), a.length > 0 && c.a.createElement("div", { className: "swap__route", onClick: E }, u ? c.a.createElement("img", { src: u.platformIcon, width: "20", alt: "Platform" }) : c.a.createElement("img", { className: "loading-circle", src: Yl.a, alt: "Loading..." }), c.a.createElement("span", { className: "text-green" }, null === u || void 0 === u ? void 0 : u.platformShort)))) }

            function jv() { var e = Object(i.b)(),
                    t = Object(vc.g)(),
                    a = Object(i.c)((function(e) { return e.account })),
                    n = a.watchAddress,
                    l = a.address,
                    s = a.balances,
                    o = Object(i.c)((function(e) { return e.global })),
                    u = o.chainId,
                    m = o.gasPrices,
                    d = o.selectedGasPrice,
                    p = Object(i.c)((function(e) { return e.token })),
                    b = p.stakedTokens,
                    v = p.supportedTokens,
                    E = Object(i.c)((function(e) { return e.supply })),
                    h = E.destAmount,
                    g = E.srcAmount,
                    O = E.srcToken,
                    y = E.destToken,
                    j = E.tx,
                    k = E.platform,
                    w = E.error,
                    x = E.destBalance,
                    N = E.srcBalance,
                    _ = Object(r.useState)(!1),
                    T = Object(Z.a)(_, 2),
                    A = T[0],
                    S = T[1],
                    C = Ds(A ? O : y);
                Object(r.useEffect)((function() { A || e(Gr()) }), [e, A]); var R = bo(u);
                Object(r.useEffect)((function() { R !== u && t.replace("/") }), [u, t, R]); var P = Object(vc.i)().defaultTokenAddr;
                Object(r.useEffect)((function() { if (b.length && P && P !== (null === y || void 0 === y ? void 0 : y.address)) { var t = b.find((function(e) { return e.address === P.toLowerCase() }));
                        t && e({ type: yr, payload: t }) } }), [s, P, y, e, b]), Object(r.useEffect)((function() { if (y) { var t = s.find((function(e) { return e.token.address === y.address }));
                        e(Fr(t && t.balance || 0)) } }), [s, y, e]), Object(r.useEffect)((function() { if (O) { var t = s.find((function(e) { return e.token.address === O.address }));
                        e(Br(t && t.balance || 0)) } }), [s, O, e]); var L = Object(r.useCallback)((function(t) { e(Ir(t)) }), [e]),
                    I = Object(r.useCallback)((function(t) { e(Mr(t)) }), [e]),
                    M = Object(r.useCallback)((function(t) { var a = new Xs.a("src" === t ? N : x),
                            n = "src" === t ? O : y; if (n) { var r = +Object(oe.b)(m[d], (null === j || void 0 === j ? void 0 : j.gas) ? Object(oe.w)(j.gas) : X.g.SWAP_AND_DEPOSIT);
                            n.symbol === X.F[u].currencySymbol && a.isGreaterThanOrEqualTo(1.005 * Number(r)) && (a = a.minus(1.005 * Number(r)), f.b.dark("A small amount of ".concat(n.symbol, " will be used for transaction fee"))); var c = a.toFixed(8, Xs.a.ROUND_DOWN);
                            e("src" !== t ? Ir(+c) : Mr(+c)) } }), [u, x, y, e, m, d, N, O, j]),
                    D = Object(r.useCallback)((function(e) { t.replace("".concat(X.K.SUPPLY, "/").concat(e.address.toLowerCase())) }), [t]),
                    F = Object(r.useCallback)((function(t) { e(function(e) { return { type: Nr, payload: e } }(t)) }), [e]),
                    B = n && n === l,
                    K = Object(r.useCallback)((function() { if (l) { if (B) { if (A) { if (!O || !y) return; if (N < g) return void e(Dr("Insufficient balance for the supply")) } if (!A) { if (!y) return; if (x < h) return void e(Dr("Insufficient balance for the supply")) } if (!h || h <= 0) e(Dr("Invalid amount to supply"));
                                else { var t = m[d],
                                        a = Object(oe.v)(v, X.C[u]); if (C) ce.show(Ms, { srcToken: A ? O : y, gasPrice: t, ethPrice: a });
                                    else { e(Dr(null)); var n = Object(oe.v)(v, y.address);
                                        ce.show(Ev, { srcToken: O, destToken: y, srcAmount: g, destAmount: h, isSwapAndDeposit: A, depositPlatform: k, gasPrice: t, ethPrice: a, tokenPrice: n, estimatedGas: Object(oe.w)(j.gas), txObject: j }) } } } } else e(Jn("account", { isOpened: !0 })) }), [l, u, h, x, y, e, m, A, B, C, k, d, g, O, N, v, j]),
                    W = Object(r.useMemo)((function() { return (null === j || void 0 === j ? void 0 : j.gas) ? Object(oe.w)(j.gas) : X.g.SWAP_AND_DEPOSIT }), [j]); return c.a.createElement("div", { className: "deposit container" }, c.a.createElement("div", { className: "block slide-up" }, c.a.createElement("div", { className: "back-btn" }, c.a.createElement(Ec.b, { to: X.K.EARN }, c.a.createElement("span", { className: "mr-2" }, c.a.createElement(pv, null)), c.a.createElement("span", null, "Setup"))), c.a.createElement("div", { className: "block__content" }, c.a.createElement("button", { className: "btn btn--tx", onClick: function() { return ce.show(uo, { estimatedGasLimit: W, slippageOption: !1 }) } }, c.a.createElement(io, { stroke: "#fff" })), A && c.a.createElement(c.a.Fragment, null, c.a.createElement(hv, { label: "Enter the amount", onChange: I, onChangeDestToken: F, tokenType: "staked", onChangeMaxAmout: function() { return M("src") }, token: O, amount: g }), O && c.a.createElement("div", { className: "ml-2 mt-2", style: { color: "#ffffffb3" } }, N, " ", null === O || void 0 === O ? void 0 : O.symbol), c.a.createElement("img", { className: "swap__exchange-icon mt-2", src: Ws.a, alt: "arrow" })), c.a.createElement(hv, { label: A ? "" : "Enter the amount", onChange: L, onChangeDestToken: D, tokenType: "staked", onChangeMaxAmout: !A && function() { return M("dest") }, token: y, amount: h }), y && !A && c.a.createElement("div", { className: "ml-2 mt-2", style: { color: "#ffffffb3" } }, x, " ", null === y || void 0 === y ? void 0 : y.symbol), O && y && O.address !== y.address && c.a.createElement(yv, null), !A && c.a.createElement("div", { className: "pl-2 pr-2 mt-2 fs-2 text-white-70" }, c.a.createElement("span", null, "If you don\u2019t have ", null === y || void 0 === y ? void 0 : y.symbol, ", you can "), c.a.createElement("span", { className: "text-green hover-underline", onClick: function() { return S(!0) } }, "Swap Now")), A && c.a.createElement("div", { className: "pl-2 pr-3 mt-2 fs-2 text-white-70" }, c.a.createElement("span", null, "If you already have ", null === y || void 0 === y ? void 0 : y.symbol, ", you can "), c.a.createElement("span", { className: "text-green hover-underline", onClick: function() { S(!1), e(Gr()) } }, "Go Back")), c.a.createElement("div", { className: "mt-4 mb-4 align-center" }, c.a.createElement("img", { src: Ws.a, alt: "Arrow down", height: 20 })), y && c.a.createElement(gv, null), c.a.createElement("button", { className: "btn btn--gradient btn--full mt-5", onClick: K }, c.a.createElement("span", null, B ? C ? "Approve" : "Supply" : "Connect Wallet")), !!w && c.a.createElement("div", { className: "input-error mt-2 slide-up align-center" }, w), c.a.createElement(Ov, { isEnabledSwapAndSupply: A })))) } var kv = ["svgRef", "title"];

            function wv() { return (wv = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function xv(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Nv = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = xv(e, kv); return c.a.createElement("svg", wv({ width: 24, height: 24, viewBox: "0 0 24 24", ref: t }, n), a ? c.a.createElement("title", null, a) : null, dv || (dv = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, c.a.createElement("path", { d: "M5.25 4l2.604-2.192C7.947 1.728 8 1.62 8 1.51V.42C8 .19 7.776 0 7.5 0h-7C.224 0 0 .189 0 .421V1.51c0 .111.052.219.146.298L2.75 4M3 4v3.333c0 .433.306.752.621.647l1-.334C4.844 7.572 5 7.306 5 7V4", transform: "translate(-728 -47) translate(728 47) translate(8 9)" })), c.a.createElement("path", { stroke: "current", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 21h0c-4.971 0-9-4.029-9-9h0c0-4.971 4.029-9 9-9h0c4.971 0 9 4.029 9 9h0c0 4.971-4.029 9-9 9z", transform: "translate(-728 -47) translate(728 47)" })))))) },
                _v = c.a.forwardRef((function(e, t) { return c.a.createElement(Nv, wv({ svgRef: t }, e)) })),
                Tv = (a.p, a(631)),
                Av = a.n(Tv);

            function Sv(e) { var t = Object(r.useState)(!0),
                    a = Object(Z.a)(t, 2),
                    n = a[0],
                    l = a[1]; return c.a.createElement("div", { className: "text-toggle", onClick: function() { l(!n), e.onToggle() } }, c.a.createElement("div", { className: "text-toggle__item ".concat(n && "text-toggle__item--active") }, e.leftText), c.a.createElement("div", { className: "text-toggle__item ".concat(!n && "text-toggle__item--active") }, e.rightText)) } var Cv, Rv = a(94),
                Pv = a(1308),
                Lv = a(638),
                Iv = { from: null, to: null, types: [X.P.APPROVAL, X.P.RECEIVED, X.P.SUPPLY, X.P.SWAP, X.P.TRANSFER, X.P.WITHDRAW, X.P.UNKNOWN], exceptedTokens: [], status: "complete" };

            function Mv(e) { var t = e.filter,
                    a = e.onFilter,
                    l = Object(i.c)((function(e) { return e.global })).chainId,
                    s = Object(r.useState)(""),
                    o = Object(Z.a)(s, 2),
                    u = o[0],
                    m = o[1],
                    d = Vc(l).allTokens,
                    f = Object(r.useMemo)((function() { return Object(Ct.uniq)(d.filter((function(e) { return e.symbol.toLowerCase().includes(u.toLowerCase()) })).map((function(e) { return e.symbol }))) }), [d, u]); return c.a.createElement("div", { className: "basic-modal small filter-modal" }, c.a.createElement("div", { className: "basic-modal__content" }, c.a.createElement("div", { className: "filter-modal__title" }, "History Filter"), c.a.createElement("div", null, c.a.createElement("div", { className: "filter-modal__block" }, c.a.createElement("div", { className: "filter-modal__subtitle ml-2 mb-2" }, "Time"), c.a.createElement("div", null, c.a.createElement(Rv.a, { utils: Lv.a }, c.a.createElement("div", { className: "flex-between-center" }, c.a.createElement(Pv.a, { className: "filter-modal__date", disableToolbar: !0, disableFuture: !0, variant: "inline", inputVariant: "outlined", format: "MM/dd/yyyy", label: "From", value: e.filter.from, onChange: function(e) { a({ from: ue()(e).startOf("day") }) } }), c.a.createElement(Pv.a, { className: "filter-modal__date", disableToolbar: !0, disableFuture: !0, variant: "inline", inputVariant: "outlined", format: "MM/dd/yyyy", label: "To", value: e.filter.to, onChange: function(e) { a({ to: ue()(e).endOf("day") }) } }))))), c.a.createElement("div", { className: "filter-modal__block" }, c.a.createElement("div", { className: "filter-modal__subtitle ml-2 mb-2" }, "Transaction Type"), c.a.createElement("div", { className: "selectable-tag" }, [X.P.APPROVAL, X.P.RECEIVED, X.P.SUPPLY, X.P.SWAP, X.P.TRANSFER, X.P.WITHDRAW, X.P.UNKNOWN].map((function(e, r) { var l = t.types.includes(e); return c.a.createElement("div", { className: "selectable-tag__item ".concat(l ? "selected" : ""), onClick: function() { a(l ? { types: t.types.filter((function(t) { return e !== t })) } : { types: Object(Ct.uniq)([].concat(Object(n.a)(t.types), [e])) }) }, key: r }, e ? e.toUpperCase() : "UNKNOWN") })))), d.length > 0 && c.a.createElement("div", { className: "filter-modal__block" }, c.a.createElement("div", { className: "filter-modal__subtitle" }, "Token"), c.a.createElement("div", { className: "input-container mb-4" }, c.a.createElement("input", { onChange: function(e) { m(e.target.value) }, className: "input", type: "text", placeholder: "Search" }), c.a.createElement("div", { className: "input-tool" }, c.a.createElement(cs, { stroke: "#fff" }))), c.a.createElement("div", { className: "selectable-tag token nice-scroll", style: { overflow: "auto", maxHeight: 210 } }, f.map((function(e, r) { var l = !t.exceptedTokens.includes(e); return c.a.createElement("div", { className: "selectable-tag__item truncate ".concat(l ? "selected" : ""), key: r, title: e, onClick: function() { a(l ? { exceptedTokens: Object(Ct.uniq)([].concat(Object(n.a)(t.exceptedTokens), [e])) } : { exceptedTokens: t.exceptedTokens.filter((function(t) { return t !== e })) }) } }, e) })))))), c.a.createElement("div", { className: "basic-modal__panel pt-5" }, c.a.createElement("button", { className: "btn btn--cancel", onClick: function() { a(Object(w.a)(Object(w.a)({}, Iv), {}, { status: t.status })) } }, "Reset"))) } var Dv = ["svgRef", "title"];

            function Fv() { return (Fv = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function Bv(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var Kv = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = Bv(e, Dv); return c.a.createElement("svg", Fv({ width: 14, height: 14, viewBox: "0 0 14 14", ref: t }, n), a ? c.a.createElement("title", null, a) : null, Cv || (Cv = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", null, c.a.createElement("g", { stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, c.a.createElement("path", { d: "M8.667 0L12 0 12 3.333M7.333 4.667L12 0M10.667 7.333v3.334c0 .736-.597 1.333-1.334 1.333h-8C.597 12 0 11.403 0 10.667v-8c0-.737.597-1.334 1.333-1.334h3.334", transform: "translate(-353 -817) translate(48 663) translate(38 138) translate(18 15) translate(248) translate(2 2)" })), c.a.createElement("path", { d: "M0 0H16V16H0z", transform: "translate(-353 -817) translate(48 663) translate(38 138) translate(18 15) translate(248)" }))))))))) },
                Wv = c.a.forwardRef((function(e, t) { return c.a.createElement(Kv, Fv({ svgRef: t }, e)) })),
                Gv = (a.p, a(291)),
                Hv = a.n(Gv),
                Vv = a(632),
                zv = a.n(Vv);

            function Uv(e) { var t = e.transaction,
                    a = Object(i.c)((function(e) { return e.global })).chainId; return console.log(t), c.a.createElement(se, { customTitle: "Transaction Details", className: "small history__modal", noPanel: !0, close: e.close, content: c.a.createElement("div", null, c.a.createElement("div", { className: "flex mb-3" }, c.a.createElement("div", { className: "history__modal-images mr-2 ".concat(t.type === X.P.SWAP ? "double" : "") }, e.icons), c.a.createElement("div", { className: "history__modal-header" }, c.a.createElement("div", { className: "history__modal-header-title" }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement("span", { className: "mr-2 capitalize" }, e.action.toLowerCase()), "success" === t.status && c.a.createElement("div", { className: "success-tag" }, c.a.createElement("img", { src: zv.a, alt: "" }), c.a.createElement("span", null, "Success")), "fail" === t.status && c.a.createElement("div", { className: "failed-tag" }, c.a.createElement("img", { src: Hv.a, alt: "" }), c.a.createElement("span", null, "Failed")))), c.a.createElement("div", { className: "text-gray-4 fs-2 mb-2" }, ue.a.unix(t.timestamp).format("MMM DD, YYYY hh:mm A")), c.a.createElement("div", { className: "fs-4 fw-300" }, e.textMain))), c.a.createElement("div", { className: "grid flex-between-start mb-6" }, c.a.createElement("div", { className: "history__modal-box mr-2" }, c.a.createElement("div", null, t.type === X.P.TRANSFER || t.type === X.P.RECEIVED ? "From Wallet" : "Wallet"), c.a.createElement("div", { className: "d-flex" }, c.a.createElement("span", null, Object(oe.h)(t.from)), c.a.createElement(Kc.a, { title: "View on Etherscan", arrow: !0, placement: "top" }, c.a.createElement("a", { href: "".concat(X.k[a], "/address/").concat(t.from), target: "_blank", rel: "noreferrer noopener" }, c.a.createElement(Wv, { width: "12px", height: "12px" }))))), c.a.createElement("div", { className: "history__modal-box" }, c.a.createElement("div", null, t.type === X.P.TRANSFER || t.type === X.P.RECEIVED ? "To Wallet" : "Application"), c.a.createElement("div", { className: "d-flex" }, c.a.createElement("span", null, Object(oe.h)(t.to)), c.a.createElement(Kc.a, { title: "View on Etherscan", arrow: !0, placement: "top" }, c.a.createElement("a", { href: "".concat(X.k[a], "/address/").concat(t.to), target: "_blank", rel: "noreferrer noopener" }, c.a.createElement(Wv, { width: "12px", height: "12px" })))))), c.a.createElement("div", null, t.type === X.P.SWAP && c.a.createElement("div", { className: "flex-between-center mb-3" }, c.a.createElement("div", { className: "text-white-70" }, "Rate ", Object(Ct.get)(t, "extraData.sendToken.symbol", ""), "/", Object(Ct.get)(t, "extraData.receiveToken.symbol", "")), c.a.createElement("div", null, Object(oe.m)(Object(Ct.get)(t, "extraData.receiveValue", 0) / Object(Ct.get)(t, "extraData.sendValue", 1), 4))), c.a.createElement("div", { className: "flex-between-center mb-3" }, c.a.createElement("div", null, c.a.createElement("span", { className: "mr-1 text-white-70" }, "Gas Fee"), c.a.createElement(Kc.a, { title: "Gas fee is the fee you pay to the miner (not to Krystal) to mine your transaction on blockchain. The price of gas generally reflect how fast you want a transaction mined.", arrow: !0, placement: "top" }, c.a.createElement("img", { className: "top-2 pointer", src: Bc.a, alt: "" }))), c.a.createElement("div", null, Object(oe.m)(+Object(oe.E)(+t.gasPrice) * +Object(oe.E)(t.gasUsed)), " ", X.F[a].currencySymbol, " (", Object(oe.m)(Object(oe.E)(t.gasPrice)), " Gwei)")), c.a.createElement("div", { className: "flex-between-center" }, c.a.createElement("div", { className: "text-white-70" }, "TxHash"), c.a.createElement("div", null, c.a.createElement("span", { className: "mr-2" }, Object(oe.h)(t.hash)), c.a.createElement(Kc.a, { title: "View on Etherscan", arrow: !0, placement: "top" }, c.a.createElement("a", { href: "".concat(X.k[a], "/tx/").concat(t.hash), target: "_blank", rel: "noreferrer noopener" }, c.a.createElement(Wv, { width: "12px", height: "12px" }))))))) }) } var Yv, qv = a(633),
                Qv = a.n(qv),
                Xv = a(634),
                Jv = a.n(Xv),
                Zv = a(635),
                $v = a.n(Zv),
                eE = ["svgRef", "title"];

            function tE() { return (tE = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function aE(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var nE, rE = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = aE(e, eE); return c.a.createElement("svg", tE({ width: 24, height: 24, ref: t }, n), a ? c.a.createElement("title", null, a) : null, Yv || (Yv = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("path", { d: "M0 24V0h24v24z" }), c.a.createElement("path", { stroke: "#888988", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14.14V4M19.981 13.136 20 17.304a2.146 2.146 0 0 1-2.135 2.167H6.135A2.146 2.146 0 0 1 4 17.314V13M16 8l-4-4-4 4" })))) },
                cE = c.a.forwardRef((function(e, t) { return c.a.createElement(rE, tE({ svgRef: t }, e)) })),
                lE = (a.p, ["svgRef", "title"]);

            function sE() { return (sE = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var a = arguments[t]; for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]) } return e }).apply(this, arguments) }

            function oE(e, t) { if (null == e) return {}; var a, n, r = function(e, t) { if (null == e) return {}; var a, n, r = {},
                        c = Object.keys(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || (r[a] = e[a]); return r }(e, t); if (Object.getOwnPropertySymbols) { var c = Object.getOwnPropertySymbols(e); for (n = 0; n < c.length; n++) a = c[n], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]) } return r } var iE = function(e) { var t = e.svgRef,
                        a = e.title,
                        n = oE(e, lE); return c.a.createElement("svg", sE({ width: 24, height: 24, ref: t }, n), a ? c.a.createElement("title", null, a) : null, nE || (nE = c.a.createElement("g", { fill: "none", fillRule: "evenodd" }, c.a.createElement("path", { d: "M0 24V0h24v24z" }), c.a.createElement("path", { stroke: "#888988", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14.14V4M19.981 13.136 20 17.304a2.146 2.146 0 0 1-2.135 2.167H6.135A2.146 2.146 0 0 1 4 17.314V13" }), c.a.createElement("path", { stroke: "#888988", strokeLinecap: "round", strokeLinejoin: "round", d: "m8 11 4 4 4-4" })))) },
                uE = c.a.forwardRef((function(e, t) { return c.a.createElement(iE, sE({ svgRef: t }, e)) })),
                mE = (a.p, a(636)),
                dE = a.n(mE);

            function fE(e) { var t = e.transaction,
                    a = Object(r.useCallback)((function(e, t, a, n) { ce.show(Uv, { transaction: e, textMain: t, action: a, icons: n }) }), []),
                    n = Object(r.useMemo)((function() { switch (t.type) {
                            case X.P.RECEIVED:
                                return { icons: c.a.createElement("img", { src: Qv.a, alt: "" }), textMain: "+ ".concat(Object(oe.m)(Object(oe.j)(+Object(Ct.get)(t, "extraData.receiveValue"), +Object(Ct.get)(t, "extraData.receiveToken.decimals") || 18), 4), " ").concat(Object(Ct.get)(t, "extraData.receiveToken.symbol") || Object(Ct.get)(t, "extraData.receiveToken.name", "(unknown)")), textSub: "From: ".concat(Object(oe.h)(t.from)), action: "RECEIVED", className: "receive" };
                            case X.P.APPROVAL:
                                return { icons: c.a.createElement("img", { src: Jv.a, alt: "" }), textMain: "Token", textSub: "Spender: ".concat(Object(oe.h)(Object(Ct.get)(t, "extraData.spender"))), action: "APPROVAL", className: "approve" };
                            case X.P.TRANSFER:
                                return { icons: c.a.createElement("img", { src: $v.a, alt: "" }), textMain: "- ".concat(Object(oe.m)(Object(oe.j)(Object(Ct.get)(t, "extraData.sendValue"), Object(Ct.get)(t, "extraData.sendToken.decimals") || 18), 4), " ").concat(Object(Ct.get)(t, "extraData.sendToken.symbol") || Object(Ct.get)(t, "extraData.sendToken.name", "(unknown)")), textSub: "To: ".concat(Object(oe.h)(t.to)), action: "TRANSFER", className: "send" };
                            case X.P.SWAP:
                                var e = Object(Ct.get)(t, "extraData.sendToken", {}),
                                    a = Object(Ct.get)(t, "extraData.receiveToken", {}); return { icons: c.a.createElement(c.a.Fragment, null, c.a.createElement("img", { src: (null === e || void 0 === e ? void 0 : e.logo) ? Object(oe.n)(e.logo) : Rc.a, alt: "" }), c.a.createElement("img", { src: (null === a || void 0 === a ? void 0 : a.logo) ? Object(oe.n)(a.logo) : Rc.a, alt: "" })), textMain: "".concat(Object(oe.m)(Object(oe.j)(Object(Ct.get)(t, "extraData.sendValue", 0), Object(Ct.get)(t, "extraData.sendToken.decimals") || 18), 4), " ").concat(Object(Ct.get)(t, "extraData.sendToken.symbol") || Object(Ct.get)(t, "extraData.sendToken.name", "(unknown)"), " \u2192 ").concat(Object(oe.m)(Object(oe.j)(Object(Ct.get)(t, "extraData.receiveValue", 0), Object(Ct.get)(t, "extraData.receiveToken.decimals") || 18), 4), " ").concat(Object(Ct.get)(t, "extraData.receiveToken.symbol") || Object(Ct.get)(t, "extraData.receiveToken.name", "(unknown)")), textSub: Object(oe.h)(t.to), action: "SWAP", className: "swap" };
                            case X.P.SUPPLY:
                                return { icons: c.a.createElement(cE, null), textMain: "- ".concat(Object(oe.m)(Object(oe.j)(Object(Ct.get)(t, "extraData.sendValue", 0), Object(Ct.get)(t, "extraData.sendToken.decimals") || 18), 4), " ").concat(Object(Ct.get)(t, "extraData.sendToken.symbol") || Object(Ct.get)(t, "extraData.sendToken.name", "(unknown)")), textSub: Object(oe.h)(t.to), action: "SUPPLY", className: "supply" };
                            case X.P.WITHDRAW:
                                return { icons: c.a.createElement(uE, null), textMain: "+ ".concat(Object(oe.m)(Object(oe.j)(Object(Ct.get)(t, "extraData.receiveValue", 0), Object(Ct.get)(t, "extraData.receiveToken.decimals") || 18), 4), " ").concat(Object(Ct.get)(t, "extraData.receiveToken.symbol") || Object(Ct.get)(t, "extraData.receiveToken.name", "(unknown)")), textSub: Object(oe.h)(t.to), action: "WITHDRAW", className: "withdraw" };
                            default:
                                return { icons: c.a.createElement("img", { src: dE.a, alt: "" }), textMain: "\u2014/\u2014", textSub: Object(oe.h)(t.to), action: "CONTRACT EXECUTION", className: "interaction" } } }), [t]); return c.a.createElement("div", { className: "history__tx history__tx--".concat(n.className), key: t.hash, onClick: function() { return a(t, n.textMain, n.action, n.icons) } }, c.a.createElement("div", { className: "flex-center" }, c.a.createElement("div", { className: "history__tx-images" }, n.icons), c.a.createElement("div", null, c.a.createElement("div", { className: "history__tx-main" }, n.textMain), c.a.createElement("div", { className: "history__tx-sub" }, n.textSub))), c.a.createElement("div", { className: "align-right flex-start" }, "success" !== t.status && c.a.createElement("div", { className: "failed-tag mr-2 bot-1" }, c.a.createElement("img", { src: Hv.a, alt: "" }), c.a.createElement("span", null, "Failed")), c.a.createElement("div", null, c.a.createElement("div", { className: "history__tx-main history__tx-main--type history__tx-main--type-".concat(n.className, " fs-2") }, n.action), c.a.createElement("div", { className: "history__tx-sub" }, ue.a.unix(t.timestamp).format("hh:mm A"))))) }

            function pE() { var e = Object(vc.g)(),
                    t = function() { var e = Object(i.c)((function(e) { return e.global })).chainId,
                            t = Object(i.c)((function(e) { return e.account })).watchAddress,
                            a = Object(r.useState)(!1),
                            n = Object(Z.a)(a, 2),
                            c = n[0],
                            l = n[1],
                            s = Object(r.useState)(),
                            o = Object(Z.a)(s, 2),
                            u = o[0],
                            m = o[1],
                            d = Object(r.useState)([]),
                            f = Object(Z.a)(d, 2),
                            p = f[0],
                            b = f[1],
                            v = Object(r.useState)(Iv),
                            E = Object(Z.a)(v, 2),
                            h = E[0],
                            g = E[1],
                            O = Object(r.useCallback)(Object(ft.a)(j.a.mark((function a() { var n, r, c, s; return j.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return l(!0), a.prev = 1, n = X.t[e], a.next = 5, fetch("".concat(n, "/v1/account/transactions?address=").concat(t));
                                        case 5:
                                            return r = a.sent, a.next = 8, r.json();
                                        case 8:
                                            (c = a.sent).transactions && (s = Object(Ct.orderBy)(c.transactions, ["timestamp"], ["desc"]), b(s)), l(!1), a.next = 17; break;
                                        case 13:
                                            a.prev = 13, a.t0 = a.catch(1), m(a.t0), l(!1);
                                        case 17:
                                        case "end":
                                            return a.stop() } }), a, null, [
                                    [1, 13]
                                ]) }))), [e, t]);
                        Object(r.useEffect)((function() { O() }), [O]); var y = Object(r.useMemo)((function() { return c ? [] : p.filter((function(e) { var t; if ("complete" === h.status && "pending" === e.status) return !1; if ("pending" === h.status && "pending" !== e.status) return !1; if (h.from && ue.a.unix(e.timestamp).isSameOrBefore(h.from)) return !1; if (h.to && ue.a.unix(e.timestamp).isSameOrAfter(h.to)) return !1; if (!(null === (t = h.types) || void 0 === t ? void 0 : t.includes(e.type))) return !1; if (h.exceptedTokens && h.exceptedTokens.length > 0) { var a = Object(Ct.get)(e, "extraData.sendToken.symbol", ""),
                                            n = Object(Ct.get)(e, "extraData.receiveToken.symbol", ""),
                                            r = Object(Ct.get)(e, "extraData.token.symbol", ""); if (a && h.exceptedTokens.includes(a) || n && h.exceptedTokens.includes(n) || r && h.exceptedTokens.includes(r)) return !1 } return !0 })) }), [h.exceptedTokens, h.from, h.status, h.to, h.types, c, p]),
                            k = Object(r.useCallback)((function(e) { g(Object(w.a)(Object(w.a)({}, h), e)) }), [h]); return { loading: c, transactions: y, filter: h, onFilter: k, error: u } }(),
                    a = t.loading,
                    n = t.filter,
                    l = t.onFilter,
                    s = t.transactions,
                    o = Object(r.useState)(!1),
                    u = Object(Z.a)(o, 2),
                    m = u[0],
                    d = u[1],
                    f = Object(r.useState)(1),
                    p = Object(Z.a)(f, 2),
                    b = p[0],
                    v = p[1],
                    E = Object(r.useCallback)((function() { d(!1) }), []); return Object(r.useEffect)((function() { v(1) }), [s.length]), c.a.createElement("div", { className: "history-container" }, c.a.createElement("div", { className: "page-title" }, "History"), c.a.createElement("div", { className: "filter flex-end-center mb-3" }, c.a.createElement("button", { onClick: function() { return d(!0) } }, c.a.createElement(_v, { stroke: "#fff" })), c.a.createElement(Sv, { leftText: "Complete", rightText: "Pending", onToggle: function() { l({ status: "complete" === n.status ? "pending" : "complete" }) } })), c.a.createElement("div", { className: "history" }, !a && s.slice(0, b * X.G.TX_HISTORY).map((function(e, t) { var a = ue.a.unix(e.timestamp).format("ll"),
                        n = t >= 1 && ue.a.unix(s[t - 1].timestamp).format("ll"); return c.a.createElement("div", { key: e.hash, className: "slide-up" }, n !== a && c.a.createElement("div", { className: "history__date" }, a), c.a.createElement("div", { className: "history__txs" }, c.a.createElement(fE, { transaction: e }))) })), !a && 0 === s.length && c.a.createElement("div", { className: "align-center pt-8 pb-8" }, c.a.createElement("img", { src: Av.a, alt: "" }), c.a.createElement("br", null), c.a.createElement("div", { className: "text-white-70 fs-3 mt-4" }, "No Transactions yet!"), c.a.createElement("button", { className: "btn btn--no-bg mt-8", style: { width: 200, margin: "0 auto" }, onClick: function() { e.push("/swap") } }, "Swap now")), !a && s.length - b * X.G.TX_HISTORY > 0 && c.a.createElement("div", { className: "flex-all-center mt-1 mb-1" }, c.a.createElement("div", { className: "btn btn--show-all", onClick: function() { return v(b + 1) } }, "Show More")), a && c.a.createElement("div", { className: "align-center pt-8 pb-8" }, c.a.createElement(Zc, null))), c.a.createElement(re, { isActive: m, onClose: E }, c.a.createElement(Mv, { filter: n, onFilter: l }))) } var bE = function() { var e = Object(vc.h)(),
                        t = Object(Ct.get)(e, "state.background"); return c.a.createElement(c.a.Fragment, null, c.a.createElement(vc.d, { location: t || e }, c.a.createElement(vc.b, { path: X.K.SUMMARY, component: _s, exact: !1 }), c.a.createElement(vc.b, { path: X.K.REFERRAL, component: _s, exact: !0 }), c.a.createElement(vc.b, { path: X.K.SWAP, component: vo, exact: !0 }), c.a.createElement(vc.b, { path: X.K.TRANSFER, component: jo, exact: !0 }), c.a.createElement(vc.b, { path: X.K.EARN, component: Ao, exact: !0 }), c.a.createElement(vc.b, { path: "".concat(X.K.SUPPLY, "/:defaultTokenAddr"), component: jv, exact: !0 }), c.a.createElement(vc.b, { path: X.K.EXPLORE, component: ni, exact: !0 }), c.a.createElement(vc.b, { path: X.K.MARKET, component: fi, exact: !0 }), c.a.createElement(vc.b, { path: X.K.HISTORY, component: pE, exact: !0 }), c.a.createElement(vc.b, { path: X.K.TRACKER, component: bi, exact: !0 }), c.a.createElement(vc.b, { path: X.K.KRYSTAL_POINTS, component: Bi, exact: !0 }), c.a.createElement(vc.b, { path: X.K.SETTINGS, component: zu, exact: !0 }), c.a.createElement(vc.b, { path: X.K.TOKEN_DETAILS, component: ld, exact: !0 }), c.a.createElement(vc.b, { path: X.K.NOTIFICATION, component: md, exact: !0 }), c.a.createElement(vc.b, { path: X.K.CAMPAIGN, component: Qd, exact: !0 }), c.a.createElement(vc.b, { path: X.K.NFT, component: ov }), c.a.createElement(vc.a, { to: X.K.SUMMARY })), t && c.a.createElement(vc.b, { path: X.K.NFT, children: c.a.createElement(sv, null) })) },
                vE = function() { return function() { var e = Object(i.b)(),
                            t = Object(r.useCallback)(Object(ft.a)(j.a.mark((function t() { var a; return j.a.wrap((function(t) { for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, kb();
                                        case 2:
                                            (a = t.sent) && e($n({ usd: 1, eth: a.ethereum.usd, btc: a.bitcoin.usd, bnb: a.binancecoin.usd, matic: a["matic-network"].usd }));
                                        case 4:
                                        case "end":
                                            return t.stop() } }), t) }))), [e]);
                        Object(r.useEffect)((function() { t() }), [t]), no(t, X.r.MARKET_REFRESH) }(), cm(), gc(), c.a.createElement("div", { className: "app" }, c.a.createElement(O, null, c.a.createElement(Ec.a, null, c.a.createElement("div", { className: "layout" }, c.a.createElement(jb, null), c.a.createElement("div", { className: "layout__content nice-scroll" }, c.a.createElement(xb, null), c.a.createElement("div", { className: "container" }, c.a.createElement(bE, null)))), c.a.createElement(fp, null), c.a.createElement(le, null)))) },
                EE = (a(1244), a(1245), a(1246), a(1247), a(637)),
                hE = a.n(EE),
                gE = Object(p.a)(X.o);
            Object(b.a)(gE), hE.a.initialize({ gtmId: "GTM-MX4HJZ6" }); var OE = Object(u.a)(),
                yE = [OE]; var jE = Object(o.d)(bc, o.a.apply(void 0, Object(n.a)(yE)));
            OE.run(lc); var kE = Object(m.b)(jE),
                wE = c.a.createElement(O, null, c.a.createElement(i.a, { store: jE }, c.a.createElement(d.a, { persistor: kE }, c.a.createElement(vE, null), c.a.createElement(f.a, { position: "top-right", autoClose: 5e3, hideProgressBar: !0, newestOnTop: !0, closeOnClick: !0, rtl: !1, pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !0 }))));
            s.a.render(wE, document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) { e.unregister() })) }, 145: function(e, t, a) { "use strict";
            a.d(t, "a", (function() { return m })); var n = a(1),
                r = a.n(n),
                c = a(10),
                l = a(11),
                s = a(2),
                o = a(32),
                i = a.n(o),
                u = a(4),
                m = function e(t) { var a = this;
                    Object(l.a)(this, e), this.ethereum = void 0, this.address = void 0, this.nodeUrl = void 0, this.networkId = void 0, this.chainName = void 0, this.web3 = void 0, this.needTobeInitiated = void 0, this.isDisconnected = void 0, this.connect = Object(c.a)(r.a.mark((function e() { var t, n, c, l = arguments; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = l.length > 0 && void 0 !== l[0] ? l[0] : null, n = l.length > 1 && void 0 !== l[1] ? l[1] : null, a.web3 || a.ethereum) { e.next = 5; break } return a._returnEthereumError(t, "Error: Something went wrong connecting with your Metamask"), e.abrupt("return", !1);
                                case 5:
                                    return e.next = 7, a._getCurrentNetworkId();
                                case 7:
                                    if (c = e.sent) { e.next = 13; break } return a._returnEthereumError(t, "Error: Cannot find current network ID"), e.abrupt("return", !1);
                                case 13:
                                    if (c === a.networkId) { e.next = 16; break } return "function" === typeof n && n(c), e.abrupt("return", !1);
                                case 16:
                                    return e.next = 18, a._requestAccounts();
                                case 18:
                                    if (a.address = e.sent, a.address) { e.next = 22; break } return a._returnEthereumError(t, "Error: Cannot find any available addresses"), e.abrupt("return", !1);
                                case 22:
                                    return e.abrupt("return", a.address);
                                case 23:
                                case "end":
                                    return e.stop() } }), e) }))), this.getDisconnected = function(e, t, n, l) { a._throwErrorOnNetworkError(e); var o = a;
                        a.ethereum.on("accountsChanged", function() { var a = Object(c.a)(r.a.mark((function a(c) { return r.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (!o.isDisconnected) { a.next = 2; break } return a.abrupt("return");
                                        case 2:
                                            if (0 !== c.length) { a.next = 5; break } return e(), a.abrupt("return");
                                        case 5:
                                            if (c[0] !== o.address) { a.next = 7; break } return a.abrupt("return");
                                        case 7:
                                            return a.next = 9, o._requestAccounts();
                                        case 9:
                                            o.address = a.sent, n && (n.address = o.address, t(o.address, n, n.getWalletType()));
                                        case 11:
                                        case "end":
                                            return a.stop() } }), a) }))); return function(e) { return a.apply(this, arguments) } }()), a.ethereum.on("chainChanged", function() { var a = Object(c.a)(r.a.mark((function a(c) { var i; return r.a.wrap((function(a) { for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (!o.isDisconnected) { a.next = 2; break } return a.abrupt("return");
                                        case 2:
                                            if (i = +c, !Object.values(s.d).includes(+c)) { a.next = 15; break } if (a.t0 = l, !a.t0) { a.next = 8; break } return a.next = 8, l(i);
                                        case 8:
                                            return o.nodeUrl = s.F[i].url, o.networkId = i, o.chainName = s.F[i].name, a.next = 13, t(o.address, n, n.getWalletType());
                                        case 13:
                                            a.next = 16; break;
                                        case 15:
                                            e();
                                        case 16:
                                        case "end":
                                            return a.stop() } }), a) }))); return function(e) { return a.apply(this, arguments) } }()) }, this.makeTransaction = function() { var e = Object(c.a)(r.a.mark((function e(t, n, c) { var l, s, o; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, a._throwErrorOnNetworkError(null);
                                    case 3:
                                        if (!n) { e.next = 12; break } return e.next = 6, a.signTransaction(t, n);
                                    case 6:
                                        return s = e.sent, e.next = 9, a.sendSignedTransaction(s.rawTransaction);
                                    case 9:
                                        l = e.sent, e.next = 24; break;
                                    case 12:
                                        if (!c) { e.next = 21; break } return e.next = 15, a.signTransaction(t, c);
                                    case 15:
                                        return o = e.sent, e.next = 18, a.sendSignedTransaction(o);
                                    case 18:
                                        l = e.sent, e.next = 24; break;
                                    case 21:
                                        return e.next = 23, a.sendTransaction(t);
                                    case 23:
                                        l = e.sent;
                                    case 24:
                                        return e.abrupt("return", l);
                                    case 27:
                                        throw e.prev = 27, e.t0 = e.catch(0), Error(e.t0);
                                    case 30:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [0, 27]
                            ]) }))); return function(t, a, n) { return e.apply(this, arguments) } }(), this.sendTransaction = function(e) { return new Promise((function(t, n) { a.web3.eth.sendTransaction(e, (function(e, a) { if (e) { var r = e.message; - 32602 === e.code ? r = "Your current address is different from your previously imported one. Please re-import your address to make the transaction." : 4100 === e.code && (r = "You are not authorized to interact with this address. Please re-import your address to make the transaction."), n(r) } else t(a) })) })) }, this.signTransaction = function(e, t) { return new Promise((function(n, r) { a.web3.eth.accounts.signTransaction(e, t, (function(e, t) { e ? r(e.message) : n(t) })) })) }, this.sendSignedTransaction = function(e) { return new Promise((function(t, n) { a.web3.eth.sendSignedTransaction(e, (function(e, a) { e ? n(e.message) : t(a) })) })) }, this.signMessage = function() { var e = Object(c.a)(r.a.mark((function e(t, n, c) { return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = n || (a.address ? a.address : ""), e.prev = 1, n) { e.next = 4; break } return e.abrupt("return", "");
                                    case 4:
                                        return e.abrupt("return", a.web3.eth.personal.sign(t, n, c));
                                    case 7:
                                        return e.prev = 7, e.t0 = e.catch(1), console.log(e.t0), e.abrupt("return", "");
                                    case 11:
                                    case "end":
                                        return e.stop() } }), e, null, [
                                [1, 7]
                            ]) }))); return function(t, a, n) { return e.apply(this, arguments) } }(), this._throwErrorOnNetworkError = function() { var e = Object(c.a)(r.a.mark((function e(t) { var n; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, a._getCurrentNetworkId();
                                    case 2:
                                        if ((n = e.sent) && +n === a.networkId) { e.next = 9; break } if (!t) { e.next = 8; break }
                                        t(), e.next = 9; break;
                                    case 8:
                                        throw Error("Please make sure your network is on ".concat(Object(u.o)(a.networkId)));
                                    case 9:
                                    case "end":
                                        return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(), this._getCurrentNetworkId = Object(c.a)(r.a.mark((function e() { var t; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!a.ethereum || !a.web3) { e.next = 4; break } return e.next = 3, a.web3.eth.getChainId();
                                case 3:
                                    t = e.sent;
                                case 4:
                                    return e.abrupt("return", t);
                                case 5:
                                case "end":
                                    return e.stop() } }), e) }))), this._requestAccounts = Object(c.a)(r.a.mark((function e() { var t, n, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!a.ethereum) { e.next = 6; break } return e.next = 3, a.ethereum.request({ method: "eth_requestAccounts" });
                                case 3:
                                    t = e.sent, e.next = 9; break;
                                case 6:
                                    return e.next = 8, a.web3.eth.getAccounts();
                                case 8:
                                    t = e.sent;
                                case 9:
                                    return n = t[0], c = t.result ? t.result[0] : null, e.abrupt("return", n || c);
                                case 12:
                                case "end":
                                    return e.stop() } }), e) }))), this._returnEthereumError = function(e, t) { "function" === typeof e && e(t) }, this.disconnect = function() { a.isDisconnected = !0 }, this.ethereum = null, this.address = null === t || void 0 === t ? void 0 : t.address, this.nodeUrl = null === t || void 0 === t ? void 0 : t.nodeUrl, this.networkId = null === t || void 0 === t ? void 0 : t.networkId, this.chainName = null === t || void 0 === t ? void 0 : t.chainName, this.web3 = new i.a(new i.a.providers.HttpProvider(this.nodeUrl)), this.isDisconnected = !1 } }, 147: function(e, t, a) { e.exports = a.p + "static/media/default_image_nft.224fc248.svg" }, 177: function(e, t, a) { "use strict";
            (function(e) { a.d(t, "b", (function() { return s })), a.d(t, "c", (function() { return o })), a.d(t, "a", (function() { return u })); var n = a(9),
                    r = a(368),
                    c = a(369),
                    l = a.n(c);

                function s(t, a) { var n = new r.Transaction(a, { chain: t.name }); return n.raw[6] = t.chainId, n.raw[7] = e.from([]), n.raw[8] = e.from([]), n.serialize().toString("hex") }

                function o(e, t, a) { var c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        l = a.v,
                        s = a.r,
                        o = a.s;
                    c && (l = "0x".concat(i(e.chainId, l)), s = "0x".concat(s), o = "0x".concat(o)); var u = Object(n.a)(Object(n.a)({}, t), {}, { v: l, r: s, s: o }),
                        m = new r.Transaction(u, { chain: e.chainId }); return "0x".concat(m.serialize().toString("hex")) }

                function i(e, t) { var a = parseInt(t, 16),
                        n = 2 * e + 35; return a !== n && (a & n) !== a && (n += 1), n.toString(16) }

                function u(e, t) { return l.a.addABI(t), l.a.decodeMethod(e) } }).call(this, a(26).Buffer) }, 2: function(e, t, a) { "use strict";
            a.d(t, "d", (function() { return h })), a.d(t, "v", (function() { return O })), a.d(t, "L", (function() { return y })), a.d(t, "f", (function() { return j })), a.d(t, "j", (function() { return k })), a.d(t, "H", (function() { return w })), a.d(t, "u", (function() { return x })), a.d(t, "k", (function() { return N })), a.d(t, "l", (function() { return _ })), a.d(t, "m", (function() { return T })), a.d(t, "t", (function() { return A })), a.d(t, "s", (function() { return S })), a.d(t, "F", (function() { return C })), a.d(t, "C", (function() { return R })), a.d(t, "x", (function() { return P })), a.d(t, "a", (function() { return L })), a.d(t, "T", (function() { return I })), a.d(t, "g", (function() { return M })), a.d(t, "K", (function() { return D })), a.d(t, "U", (function() { return F })), a.d(t, "V", (function() { return B })), a.d(t, "S", (function() { return K })), a.d(t, "q", (function() { return W })), a.d(t, "r", (function() { return G })), a.d(t, "p", (function() { return H })), a.d(t, "n", (function() { return V })), a.d(t, "h", (function() { return z })), a.d(t, "e", (function() { return U })), a.d(t, "G", (function() { return Y })), a.d(t, "w", (function() { return q })), a.d(t, "R", (function() { return Q })), a.d(t, "B", (function() { return X })), a.d(t, "i", (function() { return J })), a.d(t, "c", (function() { return Z })), a.d(t, "N", (function() { return $ })), a.d(t, "O", (function() { return ee })), a.d(t, "Q", (function() { return te })), a.d(t, "b", (function() { return ae })), a.d(t, "z", (function() { return ne })), a.d(t, "D", (function() { return re })), a.d(t, "E", (function() { return ce })), a.d(t, "M", (function() { return le })), a.d(t, "y", (function() { return se })), a.d(t, "J", (function() { return oe })), a.d(t, "o", (function() { return ie })), a.d(t, "I", (function() { return ue })), a.d(t, "A", (function() { return me })), a.d(t, "P", (function() { return de })); var n, r, c, l, s, o, i, u, m, d, f, p, b, v, E, h, g = a(21);! function(e) { e[e.MAINNET = 1] = "MAINNET", e[e.ROPSTEN = 3] = "ROPSTEN", e[e.BSC = 56] = "BSC", e[e.POLYGON = 137] = "POLYGON", e[e.AVALANCHE = 43114] = "AVALANCHE" }(h || (h = {})); var O = (n = {}, Object(g.a)(n, h.MAINNET, "0xA526388721De4cB8206ff4D0b1A1948696b5d073"), Object(g.a)(n, h.ROPSTEN, "0xA526388721De4cB8206ff4D0b1A1948696b5d073"), Object(g.a)(n, h.BSC, "0xB8C6Ed80688a2674623D89A0AaBD3a87507B1868"), Object(g.a)(n, h.POLYGON, "0xf351Dd5EC89e5ac6c9125262853c74E714C1d56a"), Object(g.a)(n, h.AVALANCHE, "0x465661625B3B96b102a49e07E2Eb31cC9F5cE58B"), n),
                y = (r = {}, Object(g.a)(r, h.MAINNET, "0x70270C228c5B4279d1578799926873aa72446CcD"), Object(g.a)(r, h.ROPSTEN, "0xf351Dd5EC89e5ac6c9125262853c74E714C1d56a"), Object(g.a)(r, h.BSC, "0x051DC16b2ECB366984d1074dCC07c342a9463999"), Object(g.a)(r, h.POLYGON, "0x70270c228c5b4279d1578799926873aa72446ccd"), Object(g.a)(r, h.AVALANCHE, "0x8C27aBf05DE1d4847c3924566C3cBAFec6eFb42A"), r),
                j = (c = {}, Object(g.a)(c, h.MAINNET, ""), Object(g.a)(c, h.ROPSTEN, ""), Object(g.a)(c, h.BSC, ""), Object(g.a)(c, h.POLYGON, ""), Object(g.a)(c, h.AVALANCHE, ""), c),
                k = (l = {}, Object(g.a)(l, h.MAINNET, "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), Object(g.a)(l, h.ROPSTEN, "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), Object(g.a)(l, h.BSC, "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), Object(g.a)(l, h.POLYGON, "0xcccccccccccccccccccccccccccccccccccccccc"), Object(g.a)(l, h.AVALANCHE, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), l),
                w = (s = {}, Object(g.a)(s, h.MAINNET, "0x168E4c3AC8d89B00958B6bE6400B066f0347DDc9"), Object(g.a)(s, h.ROPSTEN, "0x168E4c3AC8d89B00958B6bE6400B066f0347DDc9"), Object(g.a)(s, h.BSC, "0x168E4c3AC8d89B00958B6bE6400B066f0347DDc9"), Object(g.a)(s, h.POLYGON, "0x168E4c3AC8d89B00958B6bE6400B066f0347DDc9"), Object(g.a)(s, h.AVALANCHE, "0x168E4c3AC8d89B00958B6bE6400B066f0347DDc9"), s),
                x = (o = {}, Object(g.a)(o, h.MAINNET, "https://defi.krystal.app"), Object(g.a)(o, h.ROPSTEN, "https://dev-krystal.knstats.com"), Object(g.a)(o, h.BSC, "https://defi.krystal.app"), Object(g.a)(o, h.POLYGON, "https://defi.krystal.app"), Object(g.a)(o, h.AVALANCHE, "https://defi.krystal.app"), o),
                N = (i = {}, Object(g.a)(i, h.MAINNET, "https://etherscan.io"), Object(g.a)(i, h.ROPSTEN, "https://ropsten.etherscan.io"), Object(g.a)(i, h.BSC, "https://bscscan.com"), Object(g.a)(i, h.POLYGON, "https://polygonscan.com"), Object(g.a)(i, h.AVALANCHE, "https://cchain.explorer.avax.network"), i),
                _ = (u = {}, Object(g.a)(u, h.MAINNET, "https://api.etherscan.io/api"), Object(g.a)(u, h.ROPSTEN, "https://api-ropsten.etherscan.io/api"), Object(g.a)(u, h.BSC, "https://api.bscscan.com/api"), Object(g.a)(u, h.POLYGON, "https://api.polygonscan.com/api"), Object(g.a)(u, h.AVALANCHE, ""), u),
                T = (m = {}, Object(g.a)(m, h.MAINNET, "Z4PIDJWZJ4N3TM124ZG2V22ATWPQGSX6B2"), Object(g.a)(m, h.ROPSTEN, "ESP4NCWFSIBGYAXMRXGKS6HC29P62S6VSE"), Object(g.a)(m, h.BSC, "C65KNM5RDGXMBPK1JVKVCT89N14UEVIVWQ"), Object(g.a)(m, h.POLYGON, "AIS4XGCHX84UEJY8W27M181J62H73YQHZA"), Object(g.a)(m, h.AVALANCHE, ""), m),
                A = (d = {}, Object(g.a)(d, h.MAINNET, "".concat("https://api.krystal.app", "/ethereum")), Object(g.a)(d, h.ROPSTEN, "".concat("https://api.krystal.app", "/ropsten")), Object(g.a)(d, h.BSC, "".concat("https://api.krystal.app", "/bsc")), Object(g.a)(d, h.POLYGON, "".concat("https://api.krystal.app", "/polygon")), Object(g.a)(d, h.AVALANCHE, "".concat("https://api.krystal.app", "/avalanche")), d),
                S = "https://prod-krystal-admin.knstats.com",
                C = (f = {}, Object(g.a)(f, h.MAINNET, { url: "https://mainnet.infura.io/v3/b14b5f54206846dcac9d091556a2a063", name: "Ethereum", platform: "ethereum", standard: "ERC-20", currencySymbol: "ETH", isAllowedCHIGas: !0, idCoingecko: "ethereum" }), Object(g.a)(f, h.ROPSTEN, { url: "https://ropsten.infura.io/v3/b14b5f54206846dcac9d091556a2a063", name: "Ropsten", platform: "ethereum", standard: "ERC-20", currencySymbol: "ETH", isAllowedCHIGas: !0, idCoingecko: "ethereum" }), Object(g.a)(f, h.BSC, { url: "https://bsc-dataseed.binance.org/", name: "BSC", platform: "binance-smart-chain", standard: "BEP-20", currencySymbol: "BNB", isAllowedCHIGas: !1, idCoingecko: "binancecoin" }), Object(g.a)(f, h.POLYGON, { url: "https://polygon-mainnet.infura.io/v3/2343217699c44b45851935789f1f89e6", name: "Polygon", platform: "polygon-pos", standard: "MATIC", currencySymbol: "MATIC", isAllowedCHIGas: !1, idCoingecko: "matic-network" }), Object(g.a)(f, h.AVALANCHE, { url: "https://api.avax.network/ext/bc/C/rpc", name: "Avalanche", platform: "avalanche", standard: "AVAX", currencySymbol: "AVAX", isAllowedCHIGas: !1, idCoingecko: "avalanche" }), f),
                R = (p = {}, Object(g.a)(p, h.MAINNET, { symbol: "GST2", name: "Gastoken", address: "0x0000000000b3F879cb30FE243b4Dfee438691c04", decimals: 2 }), Object(g.a)(p, h.ROPSTEN, { symbol: "CHI", name: "Chi Gastoken", address: "0x0000000000004946c0e9f43f4dee607b0ef1fa1c", decimals: 0 }), Object(g.a)(p, h.BSC, ""), Object(g.a)(p, h.POLYGON, ""), Object(g.a)(p, h.AVALANCHE, ""), b = {}, Object(g.a)(b, h.MAINNET, "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), Object(g.a)(b, h.ROPSTEN, "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), Object(g.a)(b, h.BSC, "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), Object(g.a)(b, h.POLYGON, "0xcccccccccccccccccccccccccccccccccccccccc"), Object(g.a)(b, h.AVALANCHE, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), b),
                P = (v = {}, Object(g.a)(v, h.MAINNET, "Compound"), Object(g.a)(v, h.ROPSTEN, "Compound"), Object(g.a)(v, h.BSC, "Venus"), Object(g.a)(v, h.POLYGON, "AaveV2"), Object(g.a)(v, h.AVALANCHE, ""), v),
                L = { APPROVE: 1, SWAP: 2, SWAP_AND_DEPOSIT: 3, TRANSFER_ETH: 4, TRANSFER_TOKEN: 5, WITHDRAW_FUND: 6, CLAIM_REWARD: 7, INTERACTION: 8, RECEIVE: 9, SEND: 10, TRANSFER_NFT: 11 },
                I = { NORMAL: "normal", INTERNAL: "internal", TOKEN: "token" },
                M = { APPROVE: 1e5, APPROVE_MAX: 7e4, SWAP: 3e5, SWAP_AND_DEPOSIT: 3e5, TRANSFER_ETH: 21e3, TRANSFER_TOKEN: 1e5, WITHDRAW_FUND: 3e5, CLAIM_REWARD: 3e5 },
                D = { SUMMARY: "/summary", SWAP: "/swap", TRANSFER: "/transfer/:tokenAddr?/:recipientAddr?", EARN: "/earn", SUPPLY: "/supply", EXPLORE: "/explore", MARKET: "/market", HISTORY: "/history", TRACKER: "/tracker", KRYSTAL_POINTS: "/krystal-points", SETTINGS: "/settings", REFERRAL: "/r/:referralCode", TOKEN_DETAILS: "/token/:origin/:tokenAddr", NOTIFICATION: "/notifications", CAMPAIGN: "/campaign", NFT: "/nft/:collectibleAddress/:tokenID" },
                F = { LANDING_PAGE: "https://krystal.app/", COINGECKO_API: "https://api.coingecko.com/api/v3" },
                B = { METAMASK: "metamask", WALLET_CONNECT: "wallet connect", WALLET_LINK: "wallet link", COINBASE: "coin base", TREZOR: "trezor", LEDGER: "ledger", DAPP: "dapp" },
                K = { PENDING: "broadcasted", SUCCESS: "done", FAILED: "failed" },
                W = { SRC: 0, DEST: 1 },
                G = { TX_MINED: 3e3, GAS_PRICE: 2e4, SWAP_RATE: 2e4, SUPPORTED_TOKENS: 1e4, DEPOSITING_TOKENS: 2e4, MARKET_REFRESH: 6e4 },
                H = { "Super Fast": 60, Fast: 30, Standard: 20, Low: 15 },
                V = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                z = "Standard",
                U = "0x7a618b048F61A3DCf8a1B9bc04A5384f6DCd5964",
                Y = { DEVICE_ADDRESS: 3, TX_HISTORY: 10, MAX_RECENT_CONTACTS: 3, FILTER_TOKENS: 25 },
                q = [{ value: "m/44'/60'", desc: "Ledger Live", bip44: !0 }, { value: "m/44'/60'/0'", desc: "Ledger Legacy" }, { defaultValue: "m/44'/60'/1'/0", desc: "Your Custom Path", custom: !0 }],
                Q = [{ value: "m/44'/60'/0'/0", desc: "Trezor (ETH)" }, { value: "m/44'/61'/0'/0", desc: "Trezor (ETC)" }, { defaultValue: "m/44'/60'/1'/0", desc: "Your Custom Path", custom: !0 }],
                X = 700,
                J = 1,
                Z = { usd: "$", eth: "\u039e", btc: "\u20bf" },
                $ = "TOP_GAINERS",
                ee = "TOP_LOSERS",
                te = "TRENDING",
                ae = (E = {}, Object(g.a)(E, h.BSC, ["usd", "btc", "bnb"]), Object(g.a)(E, h.MAINNET, ["usd", "btc", "eth"]), Object(g.a)(E, h.POLYGON, ["usd", "btc", "matic"]), Object(g.a)(E, h.ROPSTEN, ["usd", "btc", "eth"]), Object(g.a)(E, h.AVALANCHE, ["usd", "btc", "eth"]), E),
                ne = 1e5,
                re = { ERC721: "0x5b5e139f", ERC1155: "0xd9b67a26" },
                ce = { ERC721: "ERC721", ERC1155: "ERC1155", UNKNOWN: "UNKNOWN" },
                le = { ASSET: "ASSET", NFT: "NFT" },
                se = .01,
                oe = "https://ipfs.io/ipfs/",
                ie = { apiKey: "AIzaSyDHwLMdj7WNd_PyBdcddNNuTocroRmvfQ8", authDomain: "krystal---production.firebaseapp.com", databaseURL: "https://krystal---production-default-rtdb.asia-southeast1.firebasedatabase.app", projectId: "krystal---production", storageBucket: "krystal---production.appspot.com", messagingSenderId: "833276258103", appId: "1:833276258103:web:4cb08406e429bb6a23dcb2", measurementId: "G-EQ5PQ94CSP" },
                ue = "https://dev-krystal-proxy.knstats.com/",
                me = ["0x1fabb8cf927df47e3707cfe4ab847112e08e9057"],
                de = { UNKNOWN: "", SWAP: "Swap", RECEIVED: "Received", TRANSFER: "Transfer", APPROVAL: "Approval", SUPPLY: "Supply", WITHDRAW: "Withdraw" } }, 204: function(e, t, a) { e.exports = a.p + "static/media/arrow-down.6e20321c.svg" }, 241: function(e, t, a) { e.exports = a.p + "static/media/arrow-right.bf7fe3d0.svg" }, 242: function(e, t, a) { e.exports = a.p + "static/media/arrow-down-circle.b2ece380.svg" }, 243: function(e, t, a) { e.exports = a.p + "static/media/tractor.e38e74fd.svg" }, 278: function(e, t, a) { "use strict";
            (function(e) { a.d(t, "a", (function() { return E })); var n = a(9),
                    r = a(1),
                    c = a.n(r),
                    l = a(10),
                    s = a(11),
                    o = a(16),
                    i = a(17),
                    u = a(579),
                    m = a.n(u),
                    d = a(145),
                    f = a(121),
                    p = a(2),
                    b = a(47),
                    v = a(4),
                    E = function(t) { Object(o.a)(r, t); var a = Object(i.a)(r);

                        function r(t) { var o; return Object(s.a)(this, r), (o = a.call(this, t)).hdKey = void 0, o.getAddresses = function() { var e = Object(l.a)(c.a.mark((function e(t, a) { var n, r, l, s, i, u, m, d; return c.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                n = [], r = t;
                                            case 2:
                                                if (!(r < t + p.G.DEVICE_ADDRESS)) { e.next = 18; break } if (l = "m/".concat(r), !a.bip44 || !o.ethereum) { e.next = 13; break } return l = "m/0/0", s = "".concat(a.value, "/").concat(r, "'"), e.next = 9, o.ethereum.getAddress(s, !1, !0);
                                            case 9:
                                                i = e.sent, u = i.publicKey, m = i.chainCode, o.setHdKey(u, m);
                                            case 13:
                                                d = o.generateAddress(l), n.push({ index: r, address: d });
                                            case 15:
                                                r++, e.next = 2; break;
                                            case 18:
                                                return e.abrupt("return", n);
                                            case 19:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t, a) { return e.apply(this, arguments) } }(), o.getBalances = function() { var e = Object(l.a)(c.a.mark((function e(t) { var a, r, l; return c.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                a = [], r = 0;
                                            case 2:
                                                if (!(r < t.length)) { e.next = 10; break } return e.next = 5, Object(b.c)(o.web3, t[r].address);
                                            case 5:
                                                l = e.sent, a.push(Object(n.a)(Object(n.a)({}, t[r]), {}, { balance: Object(v.j)(l) }));
                                            case 7:
                                                r++, e.next = 2; break;
                                            case 10:
                                                return e.abrupt("return", a);
                                            case 11:
                                            case "end":
                                                return e.stop() } }), e) }))); return function(t) { return e.apply(this, arguments) } }(), o.setHdKey = function(t, a) { o.hdKey = new m.a, o.hdKey.publicKey = new e(t, "hex"), o.hdKey.chainCode = new e(a, "hex") }, o.generateAddress = function(e) { var t = o.hdKey.derive(e); return "0x" + Object(f.publicToAddress)(t.publicKey, !0).toString("hex") }, o.hdKey = null, o } return r }(d.a) }).call(this, a(26).Buffer) }, 289: function(e, t, a) { e.exports = a.p + "static/media/search.18a3e113.svg" }, 290: function(e, t, a) { e.exports = a.p + "static/media/swap-rate.3c2ce0c5.svg" }, 291: function(e, t, a) { e.exports = a.p + "static/media/failed.1289a23d.svg" }, 338: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minter","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_value","type":"uint256"}],"name":"createIlliquidToken","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endMintingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_value","type":"uint256"}],"name":"createToken","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"illiquidBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"o_success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"LOCKOUT_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"o_remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"makeLiquid","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_minter","type":"address"},{"name":"_endMintingTime","type":"uint256"}],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_recipient","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]') }, 367: function(e, t, a) { e.exports = a.p + "static/media/pancake.1a179907.png" }, 376: function(e, t, a) { e.exports = a.p + "static/media/star-new-design.3878cffc.svg" }, 377: function(e, t, a) { e.exports = a.p + "static/media/favorite-active-new-design.4189b1f8.svg" }, 378: function(e, t, a) { e.exports = a.p + "static/media/watch-wallet.ec4c0b22.svg" }, 4: function(e, t, a) { "use strict";
            a.d(t, "d", (function() { return m })), a.d(t, "o", (function() { return d })), a.d(t, "s", (function() { return f })), a.d(t, "c", (function() { return p })), a.d(t, "j", (function() { return b })), a.d(t, "B", (function() { return v })), a.d(t, "m", (function() { return E })), a.d(t, "h", (function() { return h })), a.d(t, "i", (function() { return g })), a.d(t, "x", (function() { return O })), a.d(t, "w", (function() { return y })), a.d(t, "y", (function() { return j })), a.d(t, "E", (function() { return k })), a.d(t, "H", (function() { return w })), a.d(t, "D", (function() { return x })), a.d(t, "z", (function() { return N })), a.d(t, "b", (function() { return _ })), a.d(t, "e", (function() { return T })), a.d(t, "a", (function() { return A })), a.d(t, "F", (function() { return S })), a.d(t, "g", (function() { return C })), a.d(t, "f", (function() { return R })), a.d(t, "A", (function() { return P })), a.d(t, "v", (function() { return L })), a.d(t, "G", (function() { return I })), a.d(t, "C", (function() { return M })), a.d(t, "q", (function() { return D })), a.d(t, "t", (function() { return F })), a.d(t, "k", (function() { return B })), a.d(t, "u", (function() { return K })), a.d(t, "l", (function() { return W })), a.d(t, "n", (function() { return G })), a.d(t, "p", (function() { return H })), a.d(t, "r", (function() { return z }));
            a(1), a(10); var n = a(2),
                r = a(32),
                c = a.n(r),
                l = a(23),
                s = a(198),
                o = a.n(s),
                i = a(78),
                u = a.n(i);
            a(575), a(576), a(577), a(367), a(81);

            function m(e) { var t, a = window.ethereum; if (a && Number(a.chainId) === e) t = new c.a(a);
                else { var r = new c.a.providers.HttpProvider(n.F[e].url);
                    t = new c.a(r) } return { web3: t, ethereum: a } }

            function d(e) { var t = "Unknown Network"; return 1 === e ? t = "Mainnet" : 3 === e ? t = "Ropsten" : 4 === e ? t = "Rinkeby" : 5 === e ? t = "Goerli Test" : 42 === e ? t = "Kovan" : 56 === e ? t = "Binance Smart Chain" : 137 === e ? t = "Polygon" : 43114 === e && (t = "Avalanche"), t }

            function f() { return "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" }

            function p() { var e = !1; return window.ethereum && window.ethereum.isMetaMask && (e = !0), e }

            function b(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18; if (!e) return 0; var a = new u.a(e.toString()),
                    n = a.div(Math.pow(10, t)); return n.toString() }

            function v(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; if (!e) return 0; var n = new u.a(e),
                    r = n.toFixed().toString(),
                    c = r.indexOf("."),
                    l = -1 !== c ? r.slice(0, c + (t + 1)) : r; return a ? E(l, t) : l }

            function E(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; if (!e) return 0; if (e > 0 && e < 1) return I(+e); var a = new u.a(e),
                    n = a.toFormat(t),
                    r = n.split("."); return 2 !== r.length || +r[1] || (n = r[0]), n }

            function h(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -4; return e ? "".concat(e.slice(0, t), "...").concat(e.slice(a)) : "" }

            function g(e) { return e ? "".concat(e.slice(0, 3), "..") : "" }

            function O(e) { return c.a.utils.isAddress(e.toLowerCase()) }

            function y(e) { return c.a.utils.hexToNumber(e) }

            function j(e, t) { return "" === t || (-1 !== e.name.toLowerCase().indexOf(t) || -1 !== e.symbol.toLowerCase().indexOf(t) || -1 !== e.address.toLowerCase().indexOf(t)) }

            function k(e) { return new u.a(e.toString()).div(1e9).toString() }

            function w(e) { return x(e, 9) }

            function x(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18,
                    a = new u.a(e.toString()); return a.times(Math.pow(10, t)).toFixed(0) }

            function N(e, t) { var a = new u.a(e),
                    n = new u.a(t); return a.multipliedBy(n).toString() }

            function _(e, t) { var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7; return v(N(k(e), t), a) }

            function T(e, t) { if (!+e || !+t) return 0; var a = new u.a(e),
                    n = new u.a(t); return a.div(n).toString() }

            function A(e, t) { return (e - t) / t * 100 }

            function S(e) { return "0x" + new u.a(e).toString(16) }

            function C(e, t, a) { return e.find((function(e) { return "".concat(e[t]).toLocaleLowerCase() === "".concat(a).toLocaleLowerCase() })) }

            function R(e, t, a) { var n = t.replace(/[^0-9.]/g, ""),
                    r = n.replace(/\./g, (function(e, t) { return n.indexOf(".") !== t && (e = ""), e })); return "." === r && (r = "0."), e.target.value = r, a !== r }

            function P(e, t, a) { return e < 0 ? a : 0 === e ? "" : t }

            function L(e, t) { try { var a = C(e, "address", t); return Object(l.get)(a, "quotes.usd.price") } catch (n) { return console.log(n), 0 } }

            function I(e) { var t = e.toFixed(20).match(/^-?\d*\.?0*\d{0,4}/); return t ? +t[0] : 0 }

            function M(e) { var t = Math.log10(Math.abs(e)) / 3 | 0; if (0 === t) return e.toFixed(1); var a = ["", "K", "M", "B", "T", "P", "E"][t]; return (e / Math.pow(10, 3 * t)).toFixed(1) + a }

            function D(e, t) { var a = e || n.n,
                    r = t || ""; return "".concat(n.K.SWAP, "?srcAddress=").concat(a, "&destAddress=").concat(r) }

            function F(e) { return isNaN(e) || !e ? "#fff" : e > 0 ? "#1de9b6" : 0 === e ? "#fff" : "#fe6d40" } var B = function(e, t) { var a = n.c[t]; return a ? "".concat(a).concat(e) : "".concat(e, " ").concat(t.toUpperCase()) },
                K = function(e, t, a) { var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        c = "/nft/".concat(e, "/").concat(t, "?chainId=").concat(a); return r ? c : "".concat(n.u[a]).concat(c) },
                W = function(e, t, a, n, r) { return { tokenID: t, collectibleAddress: e, chainId: n, ownerAddress: r || "", externalData: { name: a.name || "", description: a.name || "", image: G(a.image), animation_url: G(a.animation_url) } } },
                G = function(e) { return e && e.match(/^ipfs:\/\/.+/) ? n.J + e.split("ipfs://")[1] : e || "" },
                H = function(e, t) { var a = Object(l.pickBy)(t, l.identity); return 0 === Object.keys(a).length ? e : "".concat(e, "?").concat(o.a.stringify(V(a))) },
                V = function(e) { return Object.keys(e).sort().reduce((function(t, a) { return t[a] = e[a], t }), {}) },
                z = function(e) { for (var t = e[0], a = 0, n = 0; n < e.length; n++) e[n].rate > a && (t = e[n], a = e[n].rate); return t } }, 47: function(e, t, a) { "use strict";
            a.d(t, "c", (function() { return d })), a.d(t, "e", (function() { return p })), a.d(t, "f", (function() { return v })), a.d(t, "b", (function() { return h })), a.d(t, "d", (function() { return j })), a.d(t, "a", (function() { return w })), a.d(t, "g", (function() { return N })), a.d(t, "i", (function() { return T })), a.d(t, "h", (function() { return R })); var n = a(1),
                r = a.n(n),
                c = a(10),
                l = a(2),
                s = a(77),
                o = a(4),
                i = a(338),
                u = a(480),
                m = a(481);

            function d(e, t) { return f.apply(this, arguments) }

            function f() { return (f = Object(c.a)(r.a.mark((function e(t, a) { return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.eth.getBalance(a);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function p(e, t, a) { return b.apply(this, arguments) }

            function b() { return (b = Object(c.a)(r.a.mark((function e(t, a, n) { return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(a.length > 0)) { e.next = 4; break } return e.next = 3, n.methods.getBalances(t, a).call();
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                                return e.abrupt("return", []);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function v(e, t) { return E.apply(this, arguments) }

            function E() { return (E = Object(c.a)(r.a.mark((function e(t, a) { var n, c, l; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, n = new t.eth.Contract(i, a), e.next = 4, n.methods.symbol().call();
                            case 4:
                                return c = e.sent, e.next = 7, n.methods.decimals().call();
                            case 7:
                                return l = e.sent, e.abrupt("return", { symbol: c, decimals: l });
                            case 11:
                                return e.prev = 11, e.t0 = e.catch(0), e.abrupt("return", { symbol: !1, decimals: !1 });
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 11]
                    ]) })))).apply(this, arguments) }

            function h(e, t, a, n) { return g.apply(this, arguments) }

            function g() { return (g = Object(c.a)(r.a.mark((function e(t, a, n, c) { var o, i; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, i = Object(s.d)(t, a, n, c), e.next = 4, O(t, i);
                            case 4:
                                o = e.sent, o = Math.round(1.3 * o), a === l.a.APPROVE && n.params.isApproveToMax && o < l.g.APPROVE_MAX && (o = l.g.APPROVE_MAX), e.next = 13; break;
                            case 9:
                                e.prev = 9, e.t0 = e.catch(0), console.log(e.t0), o = Object(s.c)(a);
                            case 13:
                                return e.abrupt("return", o);
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 9]
                    ]) })))).apply(this, arguments) }

            function O(e, t) { return y.apply(this, arguments) }

            function y() { return (y = Object(c.a)(r.a.mark((function e(t, a) { return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.eth.estimateGas(a);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function j(e, t, a, n) { return k.apply(this, arguments) }

            function k() { return (k = Object(c.a)(r.a.mark((function e(t, a, n, c) { var l, s; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return l = new t.eth.Contract(i, n), e.next = 3, l.methods.allowance(a, c).call();
                            case 3:
                                return s = e.sent, e.abrupt("return", +s);
                            case 5:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function w(e, t, a, n) { return x.apply(this, arguments) }

            function x() { return (x = Object(c.a)(r.a.mark((function e(t, a, n, c) { var s, o, i, d; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return s = new t.eth.Contract(u, n), e.next = 3, s.methods.supportsInterface(l.D.ERC721).call();
                            case 3:
                                if (!e.sent) { e.next = 9; break } return e.next = 7, s.methods.ownerOf(c).call();
                            case 7:
                                return o = e.sent, e.abrupt("return", o && o.toLowerCase() === a);
                            case 9:
                                return e.next = 11, s.methods.supportsInterface(l.D.ERC1155).call();
                            case 11:
                                if (!e.sent) { e.next = 18; break } return i = new t.eth.Contract(m, n), e.next = 16, i.methods.balanceOf(a, c).call();
                            case 16:
                                return d = e.sent, e.abrupt("return", d > 0);
                            case 18:
                                return e.abrupt("return", !1);
                            case 19:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function N(e, t, a, n) { return _.apply(this, arguments) }

            function _() { return (_ = Object(c.a)(r.a.mark((function e(t, a, n, c) { var s, i, d, f, p, b, v, E, h, g, O, y; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, s = new t.eth.Contract(u, a), e.next = 4, s.methods.supportsInterface(l.D.ERC721).call();
                            case 4:
                                if (!e.sent) { e.next = 18; break } return e.next = 8, s.methods.tokenURI(n).call();
                            case 8:
                                return i = e.sent, d = Object(o.n)(i), e.next = 12, fetch(d);
                            case 12:
                                return f = e.sent, e.next = 15, f.json();
                            case 15:
                                return p = e.sent, b = Object(o.l)(a, n, p, c), e.abrupt("return", b);
                            case 18:
                                return e.next = 20, s.methods.supportsInterface(l.D.ERC1155).call();
                            case 20:
                                if (!e.sent) { e.next = 35; break } return v = new t.eth.Contract(m, a), e.next = 25, v.methods.uri(a, n).call();
                            case 25:
                                return E = e.sent, h = Object(o.n)(E), e.next = 29, fetch(h);
                            case 29:
                                return g = e.sent, e.next = 32, g.json();
                            case 32:
                                return O = e.sent, y = Object(o.l)(a, n, O, c), e.abrupt("return", y);
                            case 35:
                                return e.abrupt("return", null);
                            case 38:
                                return e.prev = 38, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", null);
                            case 42:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 38]
                    ]) })))).apply(this, arguments) }

            function T(e, t) { return A.apply(this, arguments) }

            function A() { return (A = Object(c.a)(r.a.mark((function e(t, a) { var n, c, s; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                e.prev = 0, n = 0;
                            case 2:
                                if (!(n < a.length)) { e.next = 23; break } if ((c = a[n]).status !== l.S.PENDING) { e.next = 20; break } return e.next = 7, L(t, c.hash, "");
                            case 7:
                                s = e.sent, e.t0 = s, e.next = !0 === e.t0 ? 11 : !1 === e.t0 ? 14 : 17; break;
                            case 11:
                                return c.status = l.S.SUCCESS, c.onSuccess && c.onSuccess(), e.abrupt("break", 19);
                            case 14:
                                return c.status = l.S.FAILED, c.onFailed && c.onFailed(), e.abrupt("break", 19);
                            case 17:
                                return c.status = l.S.PENDING, e.abrupt("break", 19);
                            case 19:
                                c.status !== l.S.PENDING && c.onDone && c.onDone();
                            case 20:
                                n++, e.next = 2; break;
                            case 23:
                                e.next = 28; break;
                            case 25:
                                e.prev = 25, e.t1 = e.catch(0), console.log(e.t1);
                            case 28:
                                return e.abrupt("return", a);
                            case 29:
                            case "end":
                                return e.stop() } }), e, null, [
                        [0, 25]
                    ]) })))).apply(this, arguments) }

            function S(e, t) { return C.apply(this, arguments) }

            function C() { return (C = Object(c.a)(r.a.mark((function e(t, a) { return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.eth.getTransactionCount(a);
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) }

            function R(e, t, a) { return P.apply(this, arguments) }

            function P() { return (P = Object(c.a)(r.a.mark((function e(t, a, n) { var c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return c = 0, e.prev = 1, e.next = 4, S(t, a);
                            case 4:
                                c = e.sent, !1 !== n && c <= n && (c = n + 1), e.next = 11; break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), console.log(e.t0);
                            case 11:
                                return e.abrupt("return", c);
                            case 12:
                            case "end":
                                return e.stop() } }), e, null, [
                        [1, 8]
                    ]) })))).apply(this, arguments) }

            function L(e, t, a) { return I.apply(this, arguments) }

            function I() { return (I = Object(c.a)(r.a.mark((function e(t, a, n) { var c, l, s; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, t.eth.getTransactionReceipt(a);
                            case 2:
                                if (null === (c = e.sent)) { e.next = 19; break } if ("" !== n) { e.next = 6; break } return e.abrupt("return", c.status);
                            case 6:
                                if (l = c.logs, c.blockNumber) { e.next = 10; break } return e.abrupt("return", null);
                            case 10:
                                if (l.length) { e.next = 12; break } return e.abrupt("return", !1);
                            case 12:
                                s = 0;
                            case 13:
                                if (!(s < l.length)) { e.next = 19; break } if (l[s].topics[0].toLowerCase() !== n.toLowerCase()) { e.next = 16; break } return e.abrupt("return", !0);
                            case 16:
                                ++s, e.next = 13; break;
                            case 19:
                                return e.abrupt("return", null);
                            case 20:
                            case "end":
                                return e.stop() } }), e) })))).apply(this, arguments) } }, 480: function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"_mintFeeAddr","type":"address"},{"internalType":"uint256","name":"_mintFeeAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"MintFeeAddressTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"oldMintFeeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newMintFeeAmount","type":"uint256"}],"name":"SetMintFeeAmount","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSED_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATE_TOKEN_URI_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"mint","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintFeeAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintFeeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintFeeAmount","type":"uint256"}],"name":"setMintFeeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"setTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_mintFeeAddr","type":"address"}],"name":"transferMintFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]') }, 481: function(e) { e.exports = JSON.parse('[{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"uri","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_ids","type":"uint256[]"},{"name":"_values","type":"uint256[]"},{"name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owners","type":"address[]"},{"name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_update","type":"string"},{"name":"_id","type":"uint256"}],"name":"update","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"uri","type":"string"}],"name":"setBaseURI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_initialSupplies","type":"uint256[]"},{"name":"_to","type":"address[]"},{"name":"_name","type":"string"}],"name":"batchCreate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalTokenTypes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nonce","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_to","type":"address"},{"name":"_name","type":"string"}],"name":"create","outputs":[{"name":"_id","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"baseTokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_id","type":"uint256"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"string"},{"indexed":true,"name":"_id","type":"uint256"}],"name":"CreationName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"string"},{"indexed":true,"name":"_id","type":"uint256"}],"name":"Update","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_operator","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_id","type":"uint256"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_operator","type":"address"},{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_ids","type":"uint256[]"},{"indexed":false,"name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"string"},{"indexed":true,"name":"_id","type":"uint256"}],"name":"URI","type":"event"}]') }, 567: function(e, t, a) { var n = { "./AaveV1.svg": 1239, "./AaveV2.svg": 1240, "./Compound.svg": 1241, "./Venus.svg": 1242 };

            function r(e) { var t = c(e); return a(t) }

            function c(e) { if (!a.o(n, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return n[e] }
            r.keys = function() { return Object.keys(n) }, r.resolve = c, e.exports = r, r.id = 567 }, 575: function(e, t, a) { e.exports = a.p + "static/media/knc.17d0fe98.svg" }, 576: function(e, t, a) { e.exports = a.p + "static/media/uniswap.cb84ecfc.svg" }, 577: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAJktJREFUeAG9fAdgHNW57qftK61W0qp3S5Ysy7Lcu2XZYBvjggGbDiZAwoWEUB4QLgnvJpCXyw0luaGEx4MQErghYJtmMKa4Y9wlW1axem+rXlbSauv7/lFBNpJtGZNjn53ZnZkz53zz9/8f+eBf2Lxer4q3m8k+nT1lsCdwa2b3H+zcoHuwd3FbwV402HO4PeHj4+Ph9l/SfH7ouxCUKN5jI/ty9qX8Hvh97klwOnj9PvZd7O/ze/33Ge981/4gABEEA28soNzOvoLfhXIueRukpJ0c+C12Act+yW9yKQckECb2R9kbPB6Pd2R3ewf+eTxur9fl8bp53OU985yR5493X+45eG/TpVzTJRmLE9OwP8zeMtrC+Dubi53gDDb5dikBGrovh21hl7loLsXivjeLcSIZnMgr3KYPTYikruzyN8i+bKuamlFTWw+n04mAQH8kT4iH2WAcuoRbr3Ie8L2npIzJ++Zy52fcHhhxk3HvXvRsuGgd7/Y8+8+5PzyOlz843G7U1NcjISYadQ2teOWdLcg5WQBf/l7c1oKgkCC89dxvEB0RgT6nA3q1BgatDCfNCw+HI6wDX7/HJ8GRQV5mf5T7josZanhh47mYgCTy/M3czh55HSfBxbnw9Ct/R2ldHe7eeA1++fyrmO7ri1tnpKJOpcHj23Zi9vR0RAcaUVFdA5u9F1qtEeHhYVi6YAbWXrYQIX6mQWoaGF3G5b1G3mpc+7w+ixfcwG35uC7kyeMGiBO9nNd9wG2AcjNOXgbxej1kJxV2H8/Go4//AUlpiehub8dCXyPuJHV4YiLw+JGTaGpsQ2Z0JGLMBug1etjJZoVc+8HyKmRXVmPJoll4/alHMSEylGBzTKEm1cA0vydInZzmBoK0W5n3BX6MCyBO8HqO+z/c6hTiJTjtXR1wudwIDbbAw3//66k/IarPhY+KShDG4//tGwBPWzvqkuJQ/8V+zNLq4evjImv5oDo8ALZpyXBEh6OH3w9V1WHzsZMEaSbe/v0TCAjwQ2enDc+/+S5WL52PxTOn8UEo0mr8T5YTJzjCZrdxu+UC8cEF2ycE5W4O+q6AMzw44RWE3978MYprrLATqLqqWsyyBELX78BCmkOq4znQeQng/mws7/YiqNUGj0xzegoip6Zhhl2FRQVVWFdfi6eT4/Dizetw9MQRvPrBJ7D19SO7uAxvbN2B+5/6Iw7nFXKRRMjHPTyF8ewMzl3WIGu5oHZBFMQBhXJk4GFAFQqSW5D8X3xrCz7ffwiP/ewuvPTMq/i53oh3W9sxv6ENV7Q2wqMxQEMTzqvyQs21eUMD4DBQXjW1Q0eA3Fyw1+uE21cH0xVLsDfGgheycxEaGgZrSz1unDIVp6qq0RsciP959tdQach2ihYfkEsDIl32L2g5Qkniqtx0IZR03hEJisicHdx+Szn8YajxJrCSha7+6S/g1Rpgr2nCn3rcqDTpoaEmW9nnVrSSGloC5KRu0qKRd9V4nAjmNx8frfAMl0aQPB44oIZqYRq6501Baa8TfgRjlh7I0unx8I6v8e7LT2NKUrxyjeDhIc/Z+vpgNuoJspoDDYA2NL+xtpy30PFqbs8pk85pTBGURA4iAnlUcOTmPIZwSxBuWnUFThSX4kRzB7KrG3B1pxZtDg08pA4VJ93F1RxTG3DCT4tDbgdu8Priph4XXGQ/ZRyipCbY0GlRQHZ11tUj1mKBqt2Gcj5w1zUr0Esg8isrMSkxFh63Cw1tnXjtn1s5sge/e+g+gi0jKR/KvJSBx/iQNREcWdssbsfUbgOjjTLIICgHuT1DlY9yqpAscgpL8PLbmxEdGY9972zDg42dWOTykC7sqCKL/T+jF44li1Dp7Ecn2e82nn9nnw9cHhWvd0PtdSgU0E9ToHtSPIpSY5FHw7K9qx0+JrJkWAROkSV9/LwICQqAvR+oqmlAGCnLEGLAnbduRBLtrpDAAAQHB8FPS8pk8wh5UhuKbFCsNeXj22Vz7mICLOJ2VDvp2zNltBGNwLzIfv+In8bcFRng8Ljx1Mt/QURgEHLKKlH5xTf4txYblrg1eN7ghf6nt8BgNKCjvQ0VNc3wfPk1niCA8S4vegmwiyswcwwXIfVwTaoZKehfMB19AQao+51QdfbBqwtAhdqL460NaKX9lBRowfLUSXjisz3YU1IPE9lM56tFTFggFlEJXLU8A7OnpECn0REmoVSKHmHDQSobWhDBeYn9gaHvI7ejAkRgxH3Yz+2ox0cOMLAvskRsoBP425ZteOQnm/DbV/+Ghr0nkNnpQsviVPz4Vw9h+7ZPodIb8Pm+I4iiwPU9egKP2Vzo5KQ3w8nHqEKmm2DSHaHRjX4jOdukg4+TdECN5tKqoJ8YC7/JE6H31aCvpw+2ycm464uDmL38coRZdCitrEVJVSOKSsvRY+vEmqULce9tG5AxPY2wcNBBCiIgytS5RuEAEVyZ3H7HLRE4z2i8QOTSNm7Dzzhwji8e3ouMgt5+F5574z2kJsZhwaQkVHnU2NFjxX0P3IXEEAttHy+2fbkT82em4O5bbkJ+bw9ai6oQQcG9OT4CRUlhyG22IYzUFO2mWHeTNXr7YSAF+ehN0CWEoUNnwPGTpTh9+BQ8Zgs+pJ20z9aLtddtRDLNhswFc3Hd6suxbmUGgkPCsOXz/Xj3gy+hN6gxb2qKKF1FJDS1d6KtqwtmGrLUHoLX3CeffPL1p556SjTccPsOQDzpIYKzafiMC9lRnoYP3vtsJz6ipmEoA9OmJODIsWO4Y9MNdB8yoOKTs1L2hFF133n9NfTDQhWf7MA32VB3dKCFrPKb559APQXze+VlaCcLxfnoQfsRzTo1Ap0u2J12aENDEJQxB63pk/BeWxPeKKlC6oqr0KENRF5lM/KqW1Bh7YLJZMYVZNHMjHkoKGvAG5s/4hy8yJg7kyCpsG3fNziYdQqLZ09TrHW6yuFEqZMAHRq55DMAIjASS3mf3XfkSefbF3xqm9vwzJ//irWrlqC2oRl1jV3YsGYFVi9eREvbRXdBTWs7EFNTkul7aZSnKIblR5/vRhGpYPJVl2FNxhLMpuzxiw3Hp60tqKZQjuV1X1H5m+iWmHroetQ2wbe8GpOpydKWzEQnWa/I2gEntVpPVyfsDlr3TsZoqSRqSI1psZFYPH8mjldZsX3HLkyMi8bkhBi89PYHyC2uwo1rlkM16MoQoDkkkFcI0rDAPgMgHnyAIF19PkDOPi70+eHug/jmeD7uu2U9YuitP3D37UiMDoaKE1dxcb0usgoXq9NRS3W0o7+/D+0dnejUuDH/uvW4/uqV0FLbeChvkuOjEMF+sK8LHbWN1IJ6FKu16FK7EES/ztJtQ09OIfzNeqxdnYnC4gJ8tGsXastKUFVSAGt1Ge0sD3oMYchraEEwBf2cGenILqzEwb174E9F8pcPPkVntx03ESCTrwRAlebLtbQToINDPwwDRGDkrPfYxx2RE4DySipQWFmPy+dPR1hQEAKpbt188j5ePf7x4TYKz1IkxSdAo9fDRtlzIi8XSYkTsXLpMkymn6alFBOHlwIBKrUa/kY/eLRqHK2oRJddjSoK5Q6XCG83pvjQmFR5YCdVBERbMH/JLDTTXqqytsHhtKG/tx3V5aWw93bCHBmLuvYexAf7Qm0ORVZWNr4+eBgtNhIJQbzmskWIDLUM4SGUPY2E8meC5JIfxTwYahsJUsTQl/FuZ0+ZxMnTluETjomJ4WJBw8+AV95+HQW5W9Df08H50C6i4HVBg5y8YhzhZLu7Wmj0iR9CvqCg76Lg7OrshJ/JD7ERUfBGR6E2UANTYgKyCdrhADOa1SqcNGpJhT5o2rIf/qU1eGHDMrx713q8edta3Dg9lZTrg8qC48j/ejv6aTccru5EAEMqsVMJZq+LWjAYfY5+VNXWKksVNSZtEAOJpyttJEC3D/043q0899iIEIQFmtBQ34jwYDNCGe/Zvm8f6mv24rbL4lGQX4S80yXQ8I79vV1obuuhcVmKmsoa+LgoxDhDoQq9QYMKWsvNVivMehWcGidmzZ+C8EQL/Gk8qtJikaXx4l3etE6vhtFKbfTmdrRv/hKzaHBmTEpBq62HiskDrUqP2tOn0cDe5/JFW7cTccmTEWQJR0oaM08+OjR39ijL5QxGtmEsFICIWhSPrhh5xnj2ZXAv2Uwlyp4CWVphWRW27ficbBaG13b00PgzUmaQe0la1bSQW3v60dLejbq6BlitzQpbUZNQ+5gQHR2NivJyWOnLLZtNTTQrFZOjgnDjstnwCzJjO/23rKAwZNFa9iHiuj4HWdcAr8EXz368HbuKy6FW6wi4WrgINUUFUDn6aLV74R8cjPSFmYhOIsXzWGeXTZnvWR+SiRFMhlnsOv4wkprOOv/cXyU82tzWgdbOLqRNToKNoY5dhxneyFyBq9f/BJmXr8XtP9qE1NTJqK2uRQ213OmaGmi5CBeFeFlFOZwOygRhS8qf8PBwTEhIpJvRjRD/AJ7jRpQlBLEEx67R4FR0IJZeuxJHTVoKcCgazElNaOvtQ2r8RMQHhtG7kAgB5Rk1VEdzHfo6m5R9J1V85JQZ8FAWchd9/fRZzmqDWChsJkahtOUDm4v99KGAroGGnncM+VxNGZNJe8OP1BDg50fqYqCLFNbSZEVFVQUaGBOyttkQH05/nuTX0d2J+kYrJsTFESg3jTdfxJCKTtEabqTTGmrxp1NLAU0NNzUhAtOTY2gERuCfNByz2rqxzkOpxri2lYbp+0eyUEs5Bi3Jg4MLCA6CYOPD0wSHwtrUgcgwneJ4iNwREMdogslLtJ0Uyskc46QL/vnIsWwkTYiBmcI1lwsroHwxMHooflU949PFp3JRmF+CuuYe7DmahW6q+QornyopRkKrVsociUy66Wq43U6OY8DCWTPQ0NKCDlrTPj6MDHAxEWGhBCwIeprvYUkTkK0X+mXk4FgxokrrsJIWPKHhwhkj4RE+F+470W3rQm0towROOsakKjcpV5SCgc7uGG2pYCNsNZM7F50OFvnTS9f6ZP5pZM6bzRBpF7ZS9oSSTYx6LRfeiJKSElTU1+BoYRH+7+YPoQ0KweTpM3Aop4CaqJ+splG0l91uVwzIXsoLUNclhIdi7tw5OM5IoghUcYpFzXskSkD3KSk8GlZqtmqtL0oJbNe+o9g0IRoL4sLgHJSFyuIZLvEQ9H66Qv5MCHTbbKQqMUG8MJv9lFPO/hjEZKYAJIUE427y3ORJySM6cOIUbHQFzEYjfvXcS8yBdSA40Ix933yNd7Z9hgP5pThaUoN/fL4PE6amYt6qqxGXugiNNg+qyVoajuF00K5RACJL0MO3O5xkG/L+vJlQ8ylXWVug14ngJUxqgcqFYEYgHWTHg3odThs1jB11wMF7LZoQC7VIZ56lsBGpTXjNYNBSxvmgu8dO55emBc2S4KBzOg3TBaAUWed4m0RY6OKhhdHEF/62FetocJ0sKKH6nIYNl2fiZFYudh/K4aR8cTS3BH/9YBeuv+5aZK7biGYHHVFqnz7aKiW1zVQVaoUVJKkoTZbfTweVTxGWAH8K+wXIL61ULPKoyChSg1AE2ZEAtpBD3tYzScAQbo3BH58cOIHT1nb4knVFKw6Mp1KEvx/B7OpxUJ5xfLKcQaNFYny8cs4YHykXDRDXIP+x9+hJxbe6evlS1FEt2zta6IW7cCTnFI4WlaOtrRUzJyUiJjIcwRPTUNzYh34K0WO7t8PZ04Vy+lEeinWzP4X5gPRQ5iqay07AtHziYoT22hlBbG5FGFk3Po72EMGr4P3KGVALmZqIvkmxeIZ2U45Xiz2Uf2JaCdCCkYqaT5xXcXM6enopd7TUbFZEMLAWExE2BjbKzwpACec6Y+xjA0+nos4KS2Ag/Hz9sXjOdBqIfqhoaEIv/aZH7txAbRSDpvYuaBncKupyKmr15P69aKmv4+IBK12E/n4PIiKCuQhfrsdNapLsKmPNVP1yl7gQCuYAE+rJZiLj0uj5S6JRxeuuv2IFbrlqBdYunotDAWp8rPeih5ThoSaV4JiHEUsNQyXGgGDaPF387oKR7NlYW4WZU+IQQQrtIbsJtY7SEoSCpHhp3G1ouJhQf+TkFqGdmiZFPHW1EcWVFVg8axqCfE2koC5UNDdBbaHjSrIvzjqCqiJSHcHx4feeHjqe7IEE2d9sPmOiwnIilI2MFAaHBKOXPpycK/yYPGkSMmhELk5LgYYsM2lCJBaR0rqYDBDaIS5KE1Y0BQSil7Golo4e+Bl0sHe3M6nZhJXLFuHgiTx89tVexQ0Sn/KsZpZh/M/68YK+DgzlxarMxZhIofjr51/Ejm8OYytlwPHCWpwursX7e79BHSdVVd+JyLhJaCwsRtGxw1TKAwKUtII+WsF2UopGYshnPUVR/w6CJO6JhVa4juzmoSngpdA1mfyRlDoRbmZKPHIO2XrlvFlkm0B4KfAZmVWoT81Uk9bXjBZGABh2gz/NEGtNJePaJtTw4d37H8/CQy2qIRuOQkX+Fw+QTIBd2OuV//MIYilj/vTa+/hkz2GYgyxMxTiRV1qNz46cQNLcJTD5+yNr/y64GPTy0oKWYLo/tU8QF6qhdjL5m0gY1DqDIMm+IqwdzHxQrSfGMF1Nte/LnJuKNpEAFxYarkQEhC1F9UdaTFhDVuPwcDJbIlQucSiVnwX9ZFstQTBQCzZWl8LBh/J71hC0E8y50yePRRT+Q5b0WCec93dZUAif7jOP3Yf1y5fgP197Gwfzcxl+CMGElFQsnLMaIbRXju3Zho6WRqgpH6SJb7R+5WLGZGwIofyRhfdz0Wc2H9ip6VS0lRIIkKOnExF8EMO5L1qhE6iF2tra0NzcrCx6QVoCqbYV2w+doiBnwtIUDH1oFGgmIYgx7q7GCnQzmUlVRpDdWDE3mcCPHV0WCuo+c1Lj/yY5eTWf0OLZ6QihMAwJsOC5/3oSK9fdgMCwSNSUFqLsVA7ljpr6imezAiSU6elNG1azSCEEU5OSyD50PIVqRsgB2WVFGsMSDhp2NiTRcrbQinZT0IrGc1PeaKmZEhMTFRYRq92HbHktQ62Xp08hGTlgDonhOSZFswYYVagqPEnZp+NDiaadpcYqnqsjew9R7lmr774kAMmg4stnMaTx+d6juPmqK6HxC8apyla47H04nXWYNhmpQ1k8n5zDjssWzUU6w6bTmZWIIljiNku86LuNqSAK2uiYaExg0RWL93gKk4yUR+2dbWhjGikkJETpHIALpXyiYamob7o6ARH078iCRgpnJymLV2LJqqsouAMQFqDHCsa3z9EUgKTU9ns1EdgSd966fRdMNN1XXbYM+wtqYeeBpopKtNSWKguSm7jp+mkYVFuzbB6C/X1x2fy5CDBT8dIVkGD/d9sAVRmZUxvZ5Imb/c2oZs6+nWU28XR01TS96X2hqdtB7XQKhnAG3Jh0lAhBKEE0k/oyrrwWRkYWK+n+LGepzUQCPyj2Rg4/tN8lFFQx9O1it0I9hZXVzGrswXXrlqPb44vi5k5qFxdKcrP5YAecRqnKcDI2HRsegtm0ZdTUHqEWMeCYvaAw9iF4PnzCamZXNUz2MfhBLdcviVF2TlX86sEumkxPuRUaFoaTJ8k2dCstZgp8uhQHc0vpmnQhOjkNoZRvk2JDCaYJ/VozhbUGBdkHGf924K6rV/NeAoGI81FbhQhpKdL+3u2TXd8wHuNE5pJM7K2ooUxSw1pVDGtdJZ8s/QGCIxPxklKSKXAjWU8k33V6DXrpG7Uxz27w9VOednNLB46cyGUCsB6zWYi1mE6wJCa/lRNCs5RClLyiyWpr6pCXl0e/KoipHyv2ZuchOjUdU2el0x5iaJYatZ5xKI1KB6O3F+V5WVg7fzbmT0s937qLLhqgIczFH+vq7cUHXx7A7DlzYKMqreuwcTEqlHEiGsabPaz6kCYLlOc1JT5G8fS9lA69fR7k5ufTQu5GYlIyysvL8Y+PPqd7oMXdt9+I6WmT4LA7aG3T++a9xHCUJmwjIMl24sSJyM46jtqmFuw4lIUmWtgzk9LRyEKKXhZIdJM6DToVkiItOLRjJyysanvo9msol6QiZGglyrBnfxTJfKW8f9yNspCVGwOXHaMHXV7bgNmzpzAfZaN61aOzqR4tjTWscxG2kdgL2Yxr8+FFsVHh/I2xabsXJaUV7OWkJB0qKkrwDtm0hab/vz/0M1aU8QnT43bQduKFiicvADU0NCgZUh7kqP1K5CCCVWon6dCeKKxA+ITJ6IMBza3drIGk3cV7xUVFoLmmCA3F+fjxhitwGeshpdzmPC1HAJJ3H6S8f1yNBqpCDXLRftYlGk1GhMTGopZBcBET9RTOLj51iSQKOKJddLxoTloSZYVRkUvtLEiopOySTEc7MxnZheU4wGznXbdeh8nxYYox2U/tJ09ZhhHjUEejsqKqkjGifKgk2EXA1YxH+/ha8OnXWVAFssIjdhK1HQEldcl1MSGBUNk6kLX7C2RMS8CDd1w/ALBMbYw2iMkJSUoLjPvHOG/MnyXYJLQhbsLhk6cQFRdFB9WXuStZiAMtjCIKMANNxUyGnc7sNDxyzyaWqJjotDrQzJhzX18v7RD6ZHQ59hzJRXhEJIP0U+hfMYvKfwKIioJUhGkvWbm1tRV6oy+2bP+CodoeHjcy5+/G6+98gPKmXkSmzoGHYQ+xh0Q5iAkQTs167KtPEcAKl2ceuxdRTGyKtpN+jrZPsBEKkrZrYHPhnx6mVQSAptYOVFU1IzQqBg02CWeyyozWsa29nk9JTdcCsNvsSIwIx4ObbsT8KclU6wE4zghkwWkG2vqYRCyrw0vvfqawx83XrGKgnu4hhbKaDyGAciKUoRALPX2ZbGMjrXGShc3mRHVFFYwsPnj7w0/w4c6DiJw8nU5xELMXdiWDYaYPFkOfK//wHnQ0FOOZR+/GomlTKM/6WIYjRa/nbAomQ67GVqL13yTlIcDOeaUcFJUs9FvX1Eq7w45kcwR6+t3wYza1prYM3d000EldMeEWrL9yLTatWYkQZkcLi0tRVlOLwgr28hoWFtTRnQAyZk7Crx++CyvocIo1M9Q4L8abtBzKyYhjP0O4TTQB1HAT+UYG7D/cdYAVJe/AnJgGSwJTOQRVWNLPV48JMUEoPHwAFScP48kH7qBGTMELf99CjUc2vnkDY94zRxXSQjm8v9QoSNBE1ulTz0F3cvcK+X5hbQDLmuYW9IqdYwxECwPvpw/sRXN1DdIYB1q9fCFWLZmDWBY01VFlv7n9KA4xNFLF5GK3g6V7kdG4bcOVWJs5G+nJCQggNbjoPtgpk9R0PsW2ESYQVrGRvawtTbSXROjqWUDVh6+OZeFoTj7svmFInDyTSUY6si4HNZYRsRTaFflZKDj6NaJDTAzgFeIv//wClbW1+I97b8SsqVMppPkgRueynYKJ4DBEQbL/Fvs4ABKQVWhqaVOkdSNz70VHv0EC64Duu+82hkHmQk82rK+px5e7D+E9lsXkkmoSJ0RgzaplWLFoDmaR3UJo8os2sTPEWtfSScqzKUH1ALKZRACEglwUzjWUabXWenr+KmZDe1FZ30KhXg0VhfOEGYspsEm7tIuMtHuiQ/xRk3MIpxg9YG4WjSw//mBfLnndjnuvX4PHfnIr49uSTREp9y21CgiDTbBQ2kiA5H2r50lJEUMHL2TbwyfrZM8nKd+ychF+cc8dVOcelJcWMfdlRTftnDc/2sGtA2/8/jEsmZnGsIOBzierwxjhO13fqgjfHmYaenootLkICUUYmNiTvJrEaUSQd1Ggq0n5Xmqur45noV4My6BIRE+dD01gsJI305L1YiMjoO61or+zHalzlypFFDUVtKwp79YvnYHfPfxvtMD1EiBRlMzZayQGdPUH2EuODQPEA3aC8wf+9pwcOF8T7KWJxvL0UwZNnIBH7r4VPZ1WnGIOTArVGmj8HTp1GqUNVrz2n4/jOvpfQtV5pVXIz8thzJmuB406FV0Lsfs06gHNI7Ktj2PKexxiM8id9JRDWv6+PzsfX5/Ih4ZRg5j0OVAFRTD2I2YArXKOYSOYXpcBUdOXwBLsj8qTjGCW5WHprCT86Vf30f+jiaGcL6MK9XyHx/4gWPCA0oYBGvz+Kg8+TqCCB7+PuREVKUNrGG6QmxjoMmh1PgooTsZadhzJpslfQFXczYBUOpYvEHBo1bKusI3FUZWNLdi66xDVO2PETBdZGG6NY2p56qQJiAgx0y6UuDTB48LdzMXXUyDvPnYcB04WQR0Qhbhpc6Ch08lIKk0CSnnSg4NyrYHWsx9dG1+LATn7d6Lo4G5cNi8Vb/zu35EQGTkAjsx8FM7i2ls50Kvsw+0MgHiCjeA8zaNCSRfURM1KAquk2kqBeRqzGLM5TYs2u6gSbUyxaA1+aGAaprSqDv4psYrN4qbn38fq14K6NtpRAxlOmpYUvV5E5uRiOseIY3rHQAOwz92HsrpG5BRXop4mha8lBrFp8xlJtygyhyJc+cd50yhVsTbJjBBWfRQc2Yey7AOk2rl45vH7CU4ER6dDTB15jva0YDDy+BkADR54kSfdwRumjzzxu/sD5CnFUmqGLzpsfdjOcrp5j96j1DFHcqJ1zd2kAA1L6Zrxx1f/ilf/65fEkoEx1veEMmE3OTYYeRUNlEm0eLlAD9mptqsPdcfIQj6nSZj0vUhFko6W3FlA/FRETU6H12jmbypOiaDIsnmdkfwVwbIbdLXi0M5dsFmr8eDtG/DEvTRMaSgKjD5KCfB3VyK/cM2U4njx7KNylzMaT5RHKm/qjUKE354qC5KWHB2BABYz+RoMrAVcwCekoyzQISI8kMFwYUTKBlrDn359hAWee7gQHdO/RoZY1Vg4YzInRg3Gt1ucBEFwkLv6UDB7pYurQPdEw5hORDorwdLnAQaW0NAf01DMirVtpCkQRc0ZT81VR+d479a3EKWz4e+/fwTP/oIPi+DwVVCO+x1ZM7yYwbXKmmXtZ7TRKEjQPEAKepln3n/G2SO+iI8li58QFYL4CAuqGjqROjGBZW+ijXppqDEIz3/SxON3ELg/v/MJMubNYSW8ha6kFukx8bg+cz7f4uGrU6zWaG1r5AssIWSpZpbo9tIqJ9zB9K2Sp0FvYWCLoVaJMcmweiYJQ/3MCKBWa64vxt5D+6Dua8f9N16J+zdtYChXlLFEGMWhHRD0ymRG/3hZ1jzaoVEBGjxRXmNcRKBmj3ahMktOIIQstmDaVDS3HGYIQ4UOlvQ66YHHUoOYWA7DwlSqZze9dS3Tx+XMehzAjzdewSqNYGha2rF6frrifsTExlPOnEZ9czvC+arBJ3x9yn9iKkKTZ7KUxch8PYtBSS1+LLgMIgXqWWXW3VjHAogstFnLsJRvND5w20+xhoAzcsToJKlG8vgEU7F1xqAgrjGL63t09DVSvI51gBc6CI68xpjN7cDbhWecLCa9TECDtUsX4Mv9R8gqICWEwFNaipT4SKxcMBPbmCfzqCQDxtJfsswHO/dh45qlSJmcgmAWG6gpWPVMBYtRGMPKjGdffh0zkhNxkBpQ7RvAog5/ZcFSme9nUMHFpF9t/nHUMREAFmvOnzYR9zz8GIPvc/kqwlDcSaiW0kORAmMLZa5NHDJZI6u3Rm9jAiSn88JygiOvMY75OpSct5BPL5gp3Hc+/gK/pZBOYgBLAl/zp0/hG0AVqGltYySR9T2M6OWVVWIvX81ct3QJggioL1W8Eqzn05Zwho0GY3RoKCbSuc2j5Zw8bT5MpMzG8nzkl+Sii79FMw19/bw03LD+CmTMSac8Y9iDTbFvlL3zfwyCImsrP9fZ5wRILuQAuwmSvMZ4xgt1Q4PyGCswAvGrn/0ID/7uBSwh1axbTIeTwnTvm5uRwYjgYSliYHWxMSCIQasy/OaPb+IfH+9l1VcnA+dz8JObr+FLMCaU0XmVPL0fBfm0lATkfZ2NnppTyDmdCxWrZFewFOYKVrJmsjo+mQXhShMZIyp+aEIXsOVa+GiUVzN3n+/08wIkA3DALZxEILevcvsdzccZMmmYgQMsiNq5ew/SkxLx5tZPKay7sGzJPBw8XcbkXRyC4hO5jUZzFeuFmlkb6NTgxNvbsP9oNn60cQ1DpK2sRO2nW+JWoo4qbz/yD+1kiCIV//ue+7GQsk7YcagJMGIgShtbRymHhz8GwblX1jT84zl2LnRcZQhOaPil3pFjivwTPbHjwGH88o9vUJD6MUhlxPrLF7C4sx1/2LoT4dNW8+WTQKryfsZ5uCheoxROtVrRUp5Hu6USgXzZrsOhYuwoTMmnFVfV4/F7b2CVyM0UzKxi5UUKpRCYcU18cLIERWTNuF7qvSAKGgJDUCdIrdzKm3rDglslFaU05NJTWeFq76ExqGIR1WXMpGpQ09RF/8iNeFUvc/Emhkf5TjzhFLnjpMPq4qubLsqcDjq29axHlAigkXGjCIJ0x4bLce9N18JMrTVQhT9EKQLT+CDinEUgi8w5L1sNrVe24wJILpAbEJxZ3I74wwJ8MZfHooNDcE3GfJwoYKqHFnMfYzM5lD8mrqX04Jd8X4OygoKa2lqJxYhdY6KDGhzkjxUzJmHZnA1YvnAWJk2Mg4HgEme5oyJjzgRk3OCIKhdtdU6BLHc7u43vTiOuJkg6fn2e/ec0aBVDVeyPIvpcmx7+LVNAaWhi+ufIsTy8+fQvWNrLOkN69VI8LiV08vZhEOsYo4MDEMWqjfBQC22bQfnCAaVdHCMplyofBERITQzei/7TFN+OdpF7BCqD/RRZRvlzONz3frRzvzdp5a1e49SV3keekb97cmFtaIxLseUdT7FnXOSyLu1lnMi3fx7Hy+gM256j2d7X3vvIa+2y8Y/isOSAHuelWPj5xuCtL+mfx7mkSHFyJgbNHyVE8seOBptbgUz+oNL5Fvd9jvNmP8gfWLpoGXQuZDlZsfk3st/OLi+GDBgr57roIo5Rxoiw2sn+FruEjIcjgRcx3KiX/CAAjbwTwYni9+vYl7Nn8vtFV/XLuARBssD72QUYAUXJPnD/B2k/OEAjZ01wxHOcwS7V/SmDPYFbqbT1H+zcKFVv3dxK7VIFu1SgSM9h/5f+mcD/D4i63GarvWcaAAAAAElFTkSuQmCC" }, 587: function(e, t, a) { e.exports = a.p + "static/media/ios-store.908a61fe.svg" }, 588: function(e, t, a) { e.exports = a.p + "static/media/ios-testflight.341b5864.svg" }, 589: function(e, t, a) { e.exports = a.p + "static/media/android-store.7dbafc39.svg" }, 590: function(e, t, a) { e.exports = a.p + "static/media/android-apk.18dcd058.svg" }, 595: function(e, t, a) { e.exports = a.p + "static/media/logo-loading.60013c30.gif" }, 613: function(e, t, a) { e.exports = a.p + "static/media/eye-close.dd0a0b88.svg" }, 614: function(e, t, a) { e.exports = a.p + "static/media/eye-open.74c31b69.svg" }, 615: function(e, t, a) { e.exports = a.p + "static/media/default_nft.711deca0.svg" }, 616: function(e, t, a) { e.exports = a.p + "static/media/favorite_nft.6aea7db9.svg" }, 617: function(e, t, a) { e.exports = a.p + "static/media/info_notice.bc52810f.svg" }, 618: function(e, t, a) { e.exports = a.p + "static/media/pig.6e2c0b38.svg" }, 619: function(e, t, a) { e.exports = a.p + "static/media/exchange-token.a810ebde.svg" }, 621: function(e, t, a) { e.exports = a.p + "static/media/status-broadcasted.62ca9883.svg" }, 622: function(e, t, a) { e.exports = a.p + "static/media/status-done.fea71289.svg" }, 623: function(e, t, a) { e.exports = a.p + "static/media/status-failed.1924df87.svg" }, 624: function(e, t, a) { e.exports = a.p + "static/media/external-link.ec5c458a.svg" }, 626: function(e, t, a) { e.exports = a.p + "static/media/other.2b14520e.svg" }, 627: function(e, t, a) { e.exports = a.p + "static/media/no-notification.10b2ba17.svg" }, 630: function(e, t, a) { e.exports = a.p + "static/media/no-token.0f27fd60.svg" }, 631: function(e, t, a) { e.exports = a.p + "static/media/no-history.afd98d94.svg" }, 632: function(e, t, a) { e.exports = a.p + "static/media/success.dde56265.svg" }, 633: function(e, t, a) { e.exports = a.p + "static/media/receive.7cce18e2.svg" }, 634: function(e, t, a) { e.exports = a.p + "static/media/approve.505dc0e0.svg" }, 635: function(e, t, a) { e.exports = a.p + "static/media/send.df099ed5.svg" }, 636: function(e, t, a) { e.exports = a.p + "static/media/interaction.3ce5984b.svg" }, 681: function(e, t, a) { e.exports = a(1251) }, 701: function(e, t) {}, 723: function(e, t) {}, 725: function(e, t) {}, 73: function(e, t, a) { e.exports = a.p + "static/media/info.47cf19a2.svg" }, 77: function(e, t, a) { "use strict";
            a.d(t, "c", (function() { return m })), a.d(t, "d", (function() { return d })), a.d(t, "b", (function() { return f })), a.d(t, "a", (function() { return p })); var n = a(1),
                r = a.n(n),
                c = a(10),
                l = a(2),
                s = a(4),
                o = a(338),
                i = a(480),
                u = a(481);

            function m(e) { var t = 0; return e === l.a.APPROVE ? t = l.g.APPROVE : e === l.a.TRANSFER_ETH ? t = l.g.TRANSFER_ETH : e === l.a.TRANSFER_TOKEN ? t = l.g.TRANSFER_TOKEN : e === l.a.SWAP ? t = l.g.SWAP : e === l.a.SWAP_AND_DEPOSIT && (t = l.g.SWAP_AND_DEPOSIT), t }

            function d(e, t, a, n) { var r, c, i = null; return t === l.a.APPROVE ? i = function(e, t, a) { var n = t.isApproveToMax ? Object(s.s)() : 0,
                        r = new e.eth.Contract(o, t.tokenAddress).methods.approve(t.spender, n).encodeABI(); return v(t.tokenAddress, r, a) }(e, a.params, a.txParams) : t === l.a.TRANSFER_ETH ? (r = a.recipient, c = a.txParams, i = v(r, "0x", c)) : t === l.a.TRANSFER_TOKEN ? i = function(e, t, a) { var n = new e.eth.Contract(o, t.tokenAddr).methods.transfer(t.recipient, t.amount).encodeABI(); return v(t.tokenAddr, n, a) }(e, a.params, a.txParams) : t === l.a.TRANSFER_NFT && (i = b(e, a.params, a.txParams, n)), i }

            function f(e) { return .1 } var p = function() { var e = Object(c.a)(r.a.mark((function e(t, a) { var n, c; return r.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = new t.eth.Contract(i, a), e.next = 4, n.methods.supportsInterface(l.D.ERC721).call();
                                case 4:
                                    return c = e.sent, e.abrupt("return", c ? l.E.ERC721 : l.E.ERC1155);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(0), console.log(e.t0), e.abrupt("return", l.E.UNKNOWN);
                                case 12:
                                case "end":
                                    return e.stop() } }), e, null, [
                            [0, 8]
                        ]) }))); return function(t, a) { return e.apply(this, arguments) } }(),
                b = function(e, t, a, n) { var r, c = n === l.E.ERC721 ? i : u,
                        s = new e.eth.Contract(c, t.contractAddress); if (n === l.E.ERC721 && (r = s.methods.safeTransferFrom(t.fromAddress, t.toAddress, t.tokenID).encodeABI()), n === l.E.ERC1155) { var o = t.amount ? t.amount : 1;
                        r = s.methods.safeTransferFrom(t.fromAddress, t.toAddress, t.tokenID, o, "0x").encodeABI() } return v(t.contractAddress, r, a) };

            function v(e, t, a) { var n = { from: a.address, to: e, value: void 0 !== a.value ? Object(s.F)(a.value) : "0x0", data: t }; return void 0 !== a.nonce && (n.nonce = Object(s.F)(a.nonce)), void 0 !== a.gasPrice && (n.gasPrice = Object(s.F)(Object(s.H)(a.gasPrice))), void 0 !== a.gas && (n.gas = Object(s.F)(a.gas)), n } }, 800: function(e, t) {}, 802: function(e, t) {}, 81: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAOP0lEQVR4Ae1cC1hVxRZe+4AohCiY+UwepmilIkgmmZpyfaEgEj6vxTUNH1ndxKtm3s+++/VSQYtMK1PSvKaEKEZlaiIpgijSZyqoV3wiarx8gPI4+641nHPawD5nz94HCPqa74O9z8yaNTP/WbNmrTUzR4AGTMuWLdOlZ2b2BUHfRxDBUwTwxKe7KAhOAkBL7Ar9UbqDZXcEUbwtCpCDZdn4zAZR94uvl9cJ5KOvIqv//9h2/abASYEdxfu6ED3ohwkgDBZFsbU1LQqCUCSCeFAHuv1CC31cwtcJudbwU6pbLwCFhYW1+K24IARE4QXsgD+ColPqiJZyBIskaR8I4qaHW7nExcTE3NfCx1KdOgUoNDTU8X5Z2Sw9iPOx0faWGq6HsjwdCJEt7OzWxcbG3q0r/jZ1wQh1gq2js9PrFZX6OBT/IOTpWBd8VfJwRL01vEKvD+/e07NiyqTJ6UlJSVbrKqslaGxw8EC9qP8ERLGXygHVL7kgnNQJujm74+MPWdOQZoBwOtmVlJetRGBewQ5o5mNN5znqiiAIHzs0s4vAaVfGQV+LRNPAAkJCPKCyYjuC41OLY2PMEITjYGM7ITEu7oLa7qkGCKfUUJxSOxCcVmob+0PpBaEYp9x4nHI/qemHquU3IDgwVBT13zc5cAgR/EKp7zQGNQBxr2JjggNnCqIQgzaNrZoGGhmtDRqrIbjKXT+blZ3B0zcugAh1AziqJI6nA38AjYAgBXTr6XnmXFb2aaX2FXUQ6RwSTZQcOyVmTakcrfAyQdCNUtJJFgEyrFYZTVLn8HxbqLhxdfO2tLqZnTJk5xiW8qa1WvEAY6ShlRjNFTZWY16Np1mFazACG9zOebTzo/CUbz/o3as3tHFxAWf8c7C3h6KiIijEv9zcXDiWcRyOZ2TAnTt3agxHw0e05dhYAV6Vqy07xZj7oK9Mxgqy5XKMrMlDfQCDBw2CyRMmQqdOnXBGi5CTkwN5N25AQWEBlJaWQqtWrcC5tTN4eLgjcG1Ar9fDsePHYfOWryDn4kVrmqe6ok5nM0jOLakFADme6ZknSO80iG/V68knIXzmy+Dm6grnzp+D7374gQ28sLDQ7KC7enjA0/37Q8Co0dCyZUtIPvQzfLZ+PRQXF5uto1iAvpuvV19vHH+FlLbWMk9eOYgwTUpUX+9jA8ZAxBtvQGlJCXy89hNYv2EDXLhwAe7ftxzWIfBO/vorA7OyshL8h/nDc4OHsLzCIvPAKoyj3fWb14vRPjoipasmQRTPKS0vu4gi3kZKVB/v4TNmwtgxY+BwSgpEfbgaHjx4oLkZdzc3WPrmEnDCabhi5UpISz+qiRdO9Xz7ZnZu0nhStVWMgl0NAQ713tnFGTZ9tRneW/6BVeAQL9JBr0fMh4v4XBARAR7uHpStOtHYCQNpRZMEUZj0VmFBDhY2dCRQ2h+r3p1QH62OjMKlRYB/ImAadVJeW2cXd2P41iRBLIbchMEhZG/jsv+fd98BJycneHnGDK1gtzdgweqbADIE2LUybTT1aLrF74yHQQOfBXd3d239qtps+B0g2prBT/7auDW+Wjt27mRG5AtTp2rtnL8BE2CWtPhAeB4V1O/SpJWtQj1bW1twdnZmFnLr1q2hBJf3goICyMc/MgbrKhGvb79LhEloeJJeoqmnJhEWtJeHdaKrANLDMDUM1NCSBTwAjbr+T/UHrz59oFmzZrLVaWqkpqVCSmoqs6JliVRkpqYdBdzZAB8fHziQlKSiZhUpbXTiW7SAlqPuWOaJfETNqh3Pmj1wcHCA0JAQCBwzFpo3bw7X0IdKS0uDS1cuM6kh34poXNDXeqRtW/Dx9oYnHn8CbGxsmJ+18csYuHjpUk22qj7HfLEBTp06BSuiIlXVI2K0iYr6efVtg24F7pXXMTgD/Z6BubNnw0MPPQQ/4bcXt2MHXLl6xWIn4+LjwdHREYY9NxQmhobCR6tWw/d79sDnX6yHiopq1r9FPtLCnJwL0LFjB2kW9zsJDGFjSwcJ0LWoszR18mQ2989kZcGadWvhkgopuHv3LuzanQB79+9jPIKDgpiP9s7778Ht27dV97GwsAjc3TSuZNQaYqOjUxaqWzZTYd6cuTB54iT4ce9eWPzWElXgSFmS8t4Qs5FZ2V27doWo5SuYbSOl4XkvQueVdKDWRNjoUHjqBKCgsYEwYvhw2LptG0R/sgbIibQ2pRw5AouXvAmtceVbsmgx0CqoJjk42EOJFasjYUMSZIUMVnW315O9YHpYGPx86BBs2fpfNWNQpD13/jxErV4Fj/fsCTNfmqFILyWg+JGlsImUVu6dsNHR4SW5Qt48CnaFo1lPwa3VH33IVY1WK1ph7FvYc9GTJMXv2gWjRoxgOomrEhJ1aN8e8vPzeclr0RE2OuH3U121CHgyhg4ZAm5ubvDl5k3woIxv+7t7t8fg4TZtMHpIBjxf+nr7NiAl/o8Xw7gqkCFKrsbJX09y0csRETZkPbeUK+TNC33+ecg+mw30LfMm1y6ujLTLo114qzCre1tsLLOXeHws3379yJaBo+np3G3IEDKAZPL5sjp37gydO3WGvfv28VVAKrKkfX19Gf2zA5/hrkeE+w/8xJS/39NPK9YbPXIkXLt2DS5fsWx/KTEiCVLnqEg4kguBBhWkHuWP4I0LDIRWGI5IRavat58v9OjRQ8LR8itNsVOnT2E82jJAAxDAbo91g604La1Md2iZ1wwQKdsLaK2S28CTaLWbOnkKHDp8GFZEroQbqNgXzo9gDixPfaKh7R4KsdrjVpBcIrfmxWnTmJtyMDlZjoQ7j7DBZV5Ub6IamiA/6ubNW1wN/s3fH97+97/hKor9h9HRTKFTcIvcCzIEeSXp5q2q9mjPTC698drruHp1gE8//4xJtxwNbx5hY0vnkNHV6M1bSUpHnTxz5ow0y/ROq0j7du3As7sn+lfP4X6WB2T+8gu8v2I5lN6vCm2QM7pg0UIWcF/5/geQfiwdbanDqDcuo/7INdGZmOILhUco0ZdDYEsTOcfP+PmxLSDa9bA2ETa2uJRloyhpSuSNl5SW1KrbsWNHWPfxGtDpSMVVJTIDYuPijB9NTwJpzrxXYAFONdrrIr1E6Te0X8Jemm6iM76QG0KJ2q6Zunp0hd2JiZDw7e6aRZo+EzYkQXiCXVN9thVMklIz5eXlwXLcfunQoT14enqCt1dfFpuhUMbX27dXIydj8bV58xg4xeiQHsUtm8uXL8PZc+er0Rk/GNuT03sknXWZCBtbOt4PoO20LIm7i3NtXUDbwodSDpv6SlHE6Wjg/X3KVLa1HLlqFSsj/fPBu+9BJ5Q4krCdCQlQXl5uqif3QlOLEkUh6z0hNjq6+0DBIS2N3bh5A1y7KBt75A9Foj8Vs2kT2wGdNGECa27Rgn8xd2DpsmVs+imBQ5Vc0bgkOmt8LJ6xEiaEjQ0etha7e/bww0qqvXpaUv2HDoM0tIN4OnwaFTqtMKNHjsLDB5UwcvgItuV8BMOsvGlWeDju4Z/XFEblbYPRCbDn83WfbmVaVNDBflWVDcTpx44xy1bJcJPy3oChVDIuX5z2AtuHV2OF09EYmo5pR9OkLOvlnS7LEOMqgJqL36BIqVZEZNlmnDiBEjGS2zMnSTuRmckGtf/AAVWDCxk/nm1TH0ErvD4TYUE3iagNBpDhShG/QyXp3eYtW1i0L2R8sCTX8mtWdhYjICeXN7ni8RiKHNASrnFLmbcpottnvGbFAGI18UqRGg5GWnI1kpIPwrigcVwKm+pdv57HDkBRDIknkXkwd9ZsuHfvnqwtxcNDFY0ECxNAdN8KmeSpYmQg/mLjRriLm3NLl7zFNuqUeKSkHoFZr8zl9uHmhM+CnujUrlm7loU9lPhbWZ5nwIKxsTEyy8zMrEB/CKOMMNyYx/ukA09k2gfieZ8+vfuwDUBLwTNS0rznC8m5HYe7GxQwS/z+O94uaabDO2dvb9+2LdnIwCRBlEGX0VBB5RsL1Tz/hyfDyHomTztqZST3dDPXRnM7O1gYsQB3SSbCnh9/xFj3VnOkdZZPYycMpAxNEkSZp0+fLqPLaOh6jJAS8b5fy72Gq1oGDBk0GE+PjQU7u2ZwDl0GtRt/fgMGwOKFi9i0oum7CQ9qNkRCc2fpzrj4g9K2qgFEBXRTL/dGHi1J7aSEvO8FuIwnYRymbduHYczoALYVRLGbkpJ7Fo1J8rGG4EnX2WgIBqPCL0BndUVUFDugydu2VXTsEKf39Jq3FNFhrZ3q6hgwHYWbhkdQvPv2ZXvutzCWQyFQOtrL9ubtDXvzj7Rlx+ZQxDGEcRViv/mGbVmTrmqgxH8M2NihgHFBH6HJO8/42ZonOaVPYRjDx8ebxYic0cF1Romh0AU5neT0UiiVDMCrV69a05S2uoIQnbhz16tylWUliAgNVy5TECQfuYp/mjy8jYhXNv3MXdk0CxAB8NdlFoOrYU4a6BYMXWNE3cC3I2iOUSPMpzHR2Czd9KFu11rFao7lbFZWDl4+y6abelhmUeJq1m2snxEcvSiIU76N35Wo1EdFgIgB3cyja4x0Uw8/NmmQCBz8KYtZifEJm5XAoXIugIiQ7njSNUYEKUhNParbWBJNK5IcXnCo36ql4a9r4QpfN7vjidcY8WTAcQXSxlNc9cMC3kr3U+U6XM1ZlSOQyyPNT7YDghSN5Q1m7sr1RSGPfpoimvqqtFqZ46N6itVkxNySP/GPm2iSIClIdI2RbuqhJzwflaCmUImUn7Xv1AfqC/VJ7oqlWv5WS5C0QbqQ92f7gaU6BcgIVthfP9FlhEL5yX7kjS7L0H0QAQZhCKP2Zr4yGxMFTqEiXBaS8bmvyf7Im2k0NV5wCtqUlJd7NaWfCfw/MdDDidOa+xEAAAAASUVORK5CYII=" }, 834: function(e, t) {}, 839: function(e, t) {}, 841: function(e, t) {}, 848: function(e, t) {}, 861: function(e, t) {}, 87: function(e, t, a) { e.exports = a.p + "static/media/loading-circle.f94d3991.svg" }, 883: function(e, t) {}, 965: function(e, t) {}, 976: function(e, t) {} },
    [
        [681, 1, 2]
    ]
]);