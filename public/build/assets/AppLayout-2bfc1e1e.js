import {
    G as ce,
    o as E,
    d as S,
    b as p,
    w as _,
    a as i,
    e as z,
    T as he,
    F as ue,
    r as g,
    D as F,
    H as N,
    k as m,
    m as G,
    I as De,
    u as $,
    s as W,
    x as q,
    n as Y,
    c as Se,
    i as re,
    f as I,
    t as x,
    g as Tt,
    h as Qe,
    O as Je,
    K as Lt,
    L as C,
    M as V,
    N as X,
    B,
    P as A,
    q as me,
    Q as Ot,
    p as Ct,
    R as Ft,
    j as Pt,
    X as At,
} from "./app-3090723e.js";
import {
    X as jt,
    c as Dt,
    E as Mt,
    I as It,
    d as Bt,
    B as Nt,
    e as Rt,
    U as Ht,
    K as Vt,
    S as Ut,
    f as Wt,
} from "./index-edb1a843.js";
import { _ as lt } from "./_plugin-vue_export-helper-c27b6911.js";
import { _ as qt, a as zt } from "./SwitchLocale-1a49d4b0.js";
import { A as Gt } from "./ApplicationLogo-a2a7c677.js";
const Xt = {
        components: {
            XMarkIcon: jt,
            CheckCircleIcon: Dt,
            ExclamationCircleIcon: Mt,
            InformationCircleIcon: It,
            ExclamationTriangleIcon: Bt,
        },
        props: { flash: Object },
        data() {
            return { isVisible: !1, isErrorVisible: !1, timeout: null };
        },
        methods: {
            toggle() {
                (this.isVisible = !1), (this.isErrorVisible = !1);
            },
        },
        watch: {
            flash: {
                deep: !0,
                handler(e) {
                    (this.isVisible = !0),
                        (this.isErrorVisible = !0),
                        this.timeout && clearTimeout(this.timeout),
                        (this.timeout = setTimeout(() => {
                            this.isVisible = !1;
                        }, 3e3));
                },
            },
        },
    },
    Yt = {
        key: 0,
        class: "absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]",
    },
    Kt = {
        class: "flex p-4 justify-between items-center bg-green-600 rounded shadow-md",
    },
    Qt = ["innerHTML"],
    Jt = i("span", { class: "sr-only" }, "Close", -1),
    Zt = {
        key: 0,
        class: "absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]",
    },
    en = {
        class: "flex p-4 justify-between items-center bg-primary shadow-md rounded",
    },
    tn = ["innerHTML"],
    nn = i("span", { class: "sr-only" }, "Close", -1),
    rn = {
        key: 0,
        class: "absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]",
    },
    ln = {
        class: "flex p-4 justify-between items-center bg-amber-600 rounded shadow-md",
    },
    an = ["innerHTML"],
    on = i("span", { class: "sr-only" }, "Close", -1),
    sn = {
        key: 0,
        class: "absolute top-4 right-4 w-8/12 md:w-6/12 lg:w-3/12 z-[100]",
    },
    un = {
        class: "flex p-4 justify-between items-center bg-rose-600 rounded shadow-md",
    },
    dn = ["innerHTML"];
function cn(e, t, n, l, r, a) {
    const o = ce("CheckCircleIcon"),
        s = ce("XMarkIcon"),
        d = ce("InformationCircleIcon"),
        u = ce("ExclamationTriangleIcon"),
        c = ce("ExclamationCircleIcon");
    return (
        E(),
        S(
            ue,
            null,
            [
                p(
                    he,
                    { name: "slide-fade" },
                    {
                        default: _(() => [
                            n.flash.success && r.isVisible
                                ? (E(),
                                  S("div", Yt, [
                                      i("div", Kt, [
                                          i("div", null, [
                                              p(o, {
                                                  class: "h-8 w-8 text-white",
                                                  fill: "currentColor",
                                              }),
                                          ]),
                                          i(
                                              "div",
                                              {
                                                  class: "mx-3 text-sm font-medium text-white",
                                                  innerHTML: n.flash.success,
                                              },
                                              null,
                                              8,
                                              Qt
                                          ),
                                          i(
                                              "button",
                                              {
                                                  onClick:
                                                      t[0] ||
                                                      (t[0] = (...f) =>
                                                          a.toggle &&
                                                          a.toggle(...f)),
                                                  type: "button",
                                                  class: "ml-auto bg-white/20 text-white rounded focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8",
                                              },
                                              [Jt, p(s, { class: "w-5 h-5" })]
                                          ),
                                      ]),
                                  ]))
                                : z("", !0),
                        ]),
                        _: 1,
                    }
                ),
                p(
                    he,
                    { name: "slide-fade" },
                    {
                        default: _(() => [
                            n.flash.info && r.isVisible
                                ? (E(),
                                  S("div", Zt, [
                                      i("div", en, [
                                          i("div", null, [
                                              p(d, {
                                                  class: "h-8 w-8 text-white",
                                                  fill: "currentColor",
                                              }),
                                          ]),
                                          i(
                                              "div",
                                              {
                                                  class: "mx-3 text-sm font-medium text-white",
                                                  innerHTML: n.flash.info,
                                              },
                                              null,
                                              8,
                                              tn
                                          ),
                                          i(
                                              "button",
                                              {
                                                  onClick:
                                                      t[1] ||
                                                      (t[1] = (...f) =>
                                                          a.toggle &&
                                                          a.toggle(...f)),
                                                  type: "button",
                                                  class: "ml-auto bg-white/20 text-white rounded focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8",
                                              },
                                              [nn, p(s, { class: "w-5 h-5" })]
                                          ),
                                      ]),
                                  ]))
                                : z("", !0),
                        ]),
                        _: 1,
                    }
                ),
                p(
                    he,
                    { name: "slide-fade" },
                    {
                        default: _(() => [
                            n.flash.warning && r.isVisible
                                ? (E(),
                                  S("div", rn, [
                                      i("div", ln, [
                                          i("div", null, [
                                              p(u, {
                                                  class: "h-8 w-8 text-white",
                                                  fill: "currentColor",
                                              }),
                                          ]),
                                          i(
                                              "div",
                                              {
                                                  class: "mx-3 text-sm font-medium text-white",
                                                  innerHTML: n.flash.warning,
                                              },
                                              null,
                                              8,
                                              an
                                          ),
                                          i(
                                              "button",
                                              {
                                                  onClick:
                                                      t[2] ||
                                                      (t[2] = (...f) =>
                                                          a.toggle &&
                                                          a.toggle(...f)),
                                                  type: "button",
                                                  class: "ml-auto bg-white/20 text-white rounded focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8",
                                              },
                                              [on, p(s, { class: "w-5 h-5" })]
                                          ),
                                      ]),
                                  ]))
                                : z("", !0),
                        ]),
                        _: 1,
                    }
                ),
                p(
                    he,
                    { name: "slide-fade" },
                    {
                        default: _(() => [
                            n.flash.error && r.isErrorVisible
                                ? (E(),
                                  S("div", sn, [
                                      i("div", un, [
                                          i("div", null, [
                                              p(c, {
                                                  class: "h-8 w-8 text-white",
                                                  fill: "currentColor",
                                              }),
                                          ]),
                                          i(
                                              "div",
                                              {
                                                  class: "mx-3 text-sm font-medium text-white",
                                                  innerHTML: n.flash.error,
                                              },
                                              null,
                                              8,
                                              dn
                                          ),
                                          i(
                                              "button",
                                              {
                                                  onClick:
                                                      t[3] ||
                                                      (t[3] = (...f) =>
                                                          a.toggle &&
                                                          a.toggle(...f)),
                                                  type: "button",
                                                  class: "ml-auto bg-white/20 text-white rounded focus:ring-2 focus:ring-white/50 p-1.5 hover:bg-white/30 h-8 w-8",
                                              },
                                              [p(s, { class: "w-5 h-5" })]
                                          ),
                                      ]),
                                  ]))
                                : z("", !0),
                        ]),
                        _: 1,
                    }
                ),
            ],
            64
        )
    );
}
const fn = lt(Xt, [["render", cn]]),
    pn = { class: "relative" },
    Ze = {
        __name: "Dropdown",
        props: {
            align: { type: String, default: "right" },
            width: { type: String, default: "48" },
            contentClasses: {
                type: Array,
                default: () => ["py-1", "bg-white dark:bg-slate-700"],
            },
        },
        setup(e) {
            const t = e;
            let n = g(!1);
            const l = (o) => {
                n.value && o.key === "Escape" && (n.value = !1);
            };
            F(() => document.addEventListener("keydown", l)),
                N(() => document.removeEventListener("keydown", l));
            const r = m(() => ({ 48: "w-48" }[t.width.toString()])),
                a = m(() =>
                    t.align === "left"
                        ? "origin-top-left left-0"
                        : t.align === "right"
                        ? "origin-top-right right-0"
                        : "origin-top"
                );
            return (o, s) => (
                E(),
                S("div", pn, [
                    i(
                        "div",
                        {
                            onClick:
                                s[0] ||
                                (s[0] = (d) =>
                                    De(n) ? (n.value = !$(n)) : (n = !$(n))),
                        },
                        [G(o.$slots, "trigger")]
                    ),
                    W(
                        i(
                            "div",
                            {
                                class: "fixed inset-0 z-40",
                                onClick:
                                    s[1] ||
                                    (s[1] = (d) =>
                                        De(n) ? (n.value = !1) : (n = !1)),
                            },
                            null,
                            512
                        ),
                        [[q, $(n)]]
                    ),
                    p(
                        he,
                        {
                            "enter-active-class":
                                "transition ease-out duration-200",
                            "enter-from-class": "transform opacity-0 scale-95",
                            "enter-to-class": "transform opacity-100 scale-100",
                            "leave-active-class":
                                "transition ease-in duration-75",
                            "leave-from-class":
                                "transform opacity-100 scale-100",
                            "leave-to-class": "transform opacity-0 scale-95",
                        },
                        {
                            default: _(() => [
                                W(
                                    i(
                                        "div",
                                        {
                                            class: Y([
                                                "absolute z-50 mt-2 rounded shadow-lg",
                                                [$(r), $(a)],
                                            ]),
                                            style: { display: "none" },
                                            onClick:
                                                s[2] ||
                                                (s[2] = (d) =>
                                                    De(n)
                                                        ? (n.value = !1)
                                                        : (n = !1)),
                                        },
                                        [
                                            i(
                                                "div",
                                                {
                                                    class: Y([
                                                        "rounded ring-1 ring-black ring-opacity-5",
                                                        e.contentClasses,
                                                    ]),
                                                },
                                                [G(o.$slots, "content")],
                                                2
                                            ),
                                        ],
                                        2
                                    ),
                                    [[q, $(n)]]
                                ),
                            ]),
                            _: 3,
                        }
                    ),
                ])
            );
        },
    },
    hn = {
        key: 0,
        type: "submit",
        class: "block w-full px-4 py-2 text-left text-sm leading-5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800 transition duration-150 ease-in-out",
    },
    vn = ["href"],
    te = {
        __name: "DropdownLink",
        props: { href: String, as: String },
        setup(e) {
            return (t, n) => (
                E(),
                S("div", null, [
                    e.as == "button"
                        ? (E(), S("button", hn, [G(t.$slots, "default")]))
                        : e.as == "a"
                        ? (E(),
                          S(
                              "a",
                              {
                                  key: 1,
                                  href: e.href,
                                  class: "block px-4 py-2 text-sm leading-5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800 transition duration-150 ease-in-out",
                              },
                              [G(t.$slots, "default")],
                              8,
                              vn
                          ))
                        : (E(),
                          Se(
                              $(re),
                              {
                                  key: 2,
                                  href: e.href,
                                  class: "block px-4 py-2 text-sm leading-5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800 transition duration-150 ease-in-out",
                              },
                              {
                                  default: _(() => [G(t.$slots, "default")]),
                                  _: 3,
                              },
                              8,
                              ["href"]
                          )),
                ])
            );
        },
    },
    mn = {
        class: "bg-white fixed w-full md:pr-64 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700",
    },
    gn = { class: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
    bn = { class: "flex justify-between h-16" },
    wn = { class: "flex" },
    yn = { class: "shrink-0 flex items-center" },
    _n = {
        class: "flex space-x-2 text-lg font-semibold text-slate-600 dark:text-white",
    },
    kn = { class: "flex items-center space-x-1" },
    xn = { class: "relative" },
    $n = { class: "inline-flex rounded" },
    En = {
        type: "button",
        class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition ease-in-out duration-150",
    },
    Sn = i(
        "svg",
        {
            class: "ml-2 -mr-0.5 h-4 w-4",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
        },
        [
            i("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9",
            }),
        ],
        -1
    ),
    Tn = { class: "w-60" },
    Ln = { class: "block px-4 py-2 text-xs text-slate-400" },
    On = i(
        "div",
        { class: "border-t border-slate-200 dark:border-slate-600" },
        null,
        -1
    ),
    Cn = { class: "block px-4 py-2 text-xs text-slate-400" },
    Fn = ["onSubmit"],
    Pn = { class: "flex items-center" },
    An = {
        key: 0,
        class: "mr-2 h-5 w-5 text-green-400",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
    },
    jn = i(
        "path",
        {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        },
        null,
        -1
    ),
    Dn = [jn],
    Mn = { class: "relative" },
    In = {
        key: 0,
        class: "flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-slate-300 transition",
    },
    Bn = ["src", "alt"],
    Nn = { key: 1, class: "inline-flex rounded" },
    Rn = {
        type: "button",
        class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition ease-in-out duration-150",
    },
    Hn = i(
        "svg",
        {
            class: "ml-2 -mr-0.5 h-4 w-4",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
        },
        [
            i("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
            }),
        ],
        -1
    ),
    Vn = {
        class: "block px-4 py-2 truncate border-b border-slate-200 dark:border-slate-600",
    },
    Un = { class: "block text-xs truncate" },
    Wn = { class: "block px-4 py-2 text-xs text-slate-400" },
    qn = i(
        "div",
        { class: "border-t border-slate-200 dark:border-slate-600" },
        null,
        -1
    ),
    zn = ["onSubmit"],
    Gn = {
        __name: "Navbar",
        emits: ["open"],
        setup(e, { emit: t }) {
            const n = (r) => {
                    Je.put(
                        route("current-team.update"),
                        { team_id: r.id },
                        { preserveState: !1 }
                    );
                },
                l = () => {
                    Je.post(route("logout"));
                };
            return (r, a) => (
                E(),
                S("nav", mn, [
                    i("div", gn, [
                        i("div", bn, [
                            i("div", wn, [
                                i("div", yn, [
                                    i(
                                        "button",
                                        {
                                            onClick:
                                                a[0] ||
                                                (a[0] = (o) => t("open")),
                                            class: "inline-flex md:hidden items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out mr-4",
                                        },
                                        [p($(Nt), { class: "w-6 h-auto" })]
                                    ),
                                    i("p", _n, [G(r.$slots, "default")]),
                                ]),
                            ]),
                            i("div", kn, [
                                p(qt),
                                p(zt),
                                i("div", xn, [
                                    r.$page.props.jetstream.hasTeamFeatures
                                        ? (E(),
                                          Se(
                                              Ze,
                                              {
                                                  key: 0,
                                                  align: "right",
                                                  width: "60",
                                              },
                                              {
                                                  trigger: _(() => [
                                                      i("span", $n, [
                                                          i("button", En, [
                                                              I(
                                                                  x(
                                                                      r.$page
                                                                          .props
                                                                          .auth
                                                                          .user
                                                                          .current_team
                                                                          .name
                                                                  ) + " ",
                                                                  1
                                                              ),
                                                              Sn,
                                                          ]),
                                                      ]),
                                                  ]),
                                                  content: _(() => [
                                                      i("div", Tn, [
                                                          r.$page.props
                                                              .jetstream
                                                              .hasTeamFeatures
                                                              ? (E(),
                                                                S(
                                                                    ue,
                                                                    { key: 0 },
                                                                    [
                                                                        i(
                                                                            "div",
                                                                            Ln,
                                                                            x(
                                                                                r.lang()
                                                                                    .label
                                                                                    .manage_team
                                                                            ),
                                                                            1
                                                                        ),
                                                                        p(
                                                                            te,
                                                                            {
                                                                                href: r.route(
                                                                                    "teams.show",
                                                                                    r
                                                                                        .$page
                                                                                        .props
                                                                                        .auth
                                                                                        .user
                                                                                        .current_team
                                                                                ),
                                                                            },
                                                                            {
                                                                                default:
                                                                                    _(
                                                                                        () => [
                                                                                            I(
                                                                                                x(
                                                                                                    r.lang()
                                                                                                        .label
                                                                                                        .team_settings
                                                                                                ),
                                                                                                1
                                                                                            ),
                                                                                        ]
                                                                                    ),
                                                                                _: 1,
                                                                            },
                                                                            8,
                                                                            [
                                                                                "href",
                                                                            ]
                                                                        ),
                                                                        r.$page
                                                                            .props
                                                                            .jetstream
                                                                            .canCreateTeams
                                                                            ? (E(),
                                                                              Se(
                                                                                  te,
                                                                                  {
                                                                                      key: 0,
                                                                                      href: r.route(
                                                                                          "teams.create"
                                                                                      ),
                                                                                  },
                                                                                  {
                                                                                      default:
                                                                                          _(
                                                                                              () => [
                                                                                                  I(
                                                                                                      x(
                                                                                                          r.lang()
                                                                                                              .label
                                                                                                              .create_new_team
                                                                                                      ),
                                                                                                      1
                                                                                                  ),
                                                                                              ]
                                                                                          ),
                                                                                      _: 1,
                                                                                  },
                                                                                  8,
                                                                                  [
                                                                                      "href",
                                                                                  ]
                                                                              ))
                                                                            : z(
                                                                                  "",
                                                                                  !0
                                                                              ),
                                                                        On,
                                                                        i(
                                                                            "div",
                                                                            Cn,
                                                                            x(
                                                                                r.lang()
                                                                                    .label
                                                                                    .switch_teams
                                                                            ),
                                                                            1
                                                                        ),
                                                                        (E(!0),
                                                                        S(
                                                                            ue,
                                                                            null,
                                                                            Tt(
                                                                                r
                                                                                    .$page
                                                                                    .props
                                                                                    .auth
                                                                                    .user
                                                                                    .all_teams,
                                                                                (
                                                                                    o
                                                                                ) => (
                                                                                    E(),
                                                                                    S(
                                                                                        "form",
                                                                                        {
                                                                                            key: o.id,
                                                                                            onSubmit:
                                                                                                Qe(
                                                                                                    (
                                                                                                        s
                                                                                                    ) =>
                                                                                                        n(
                                                                                                            o
                                                                                                        ),
                                                                                                    [
                                                                                                        "prevent",
                                                                                                    ]
                                                                                                ),
                                                                                        },
                                                                                        [
                                                                                            p(
                                                                                                te,
                                                                                                {
                                                                                                    as: "button",
                                                                                                },
                                                                                                {
                                                                                                    default:
                                                                                                        _(
                                                                                                            () => [
                                                                                                                i(
                                                                                                                    "div",
                                                                                                                    Pn,
                                                                                                                    [
                                                                                                                        o.id ==
                                                                                                                        r
                                                                                                                            .$page
                                                                                                                            .props
                                                                                                                            .auth
                                                                                                                            .user
                                                                                                                            .current_team_id
                                                                                                                            ? (E(),
                                                                                                                              S(
                                                                                                                                  "svg",
                                                                                                                                  An,
                                                                                                                                  Dn
                                                                                                                              ))
                                                                                                                            : z(
                                                                                                                                  "",
                                                                                                                                  !0
                                                                                                                              ),
                                                                                                                        i(
                                                                                                                            "div",
                                                                                                                            null,
                                                                                                                            x(
                                                                                                                                o.name
                                                                                                                            ),
                                                                                                                            1
                                                                                                                        ),
                                                                                                                    ]
                                                                                                                ),
                                                                                                            ]
                                                                                                        ),
                                                                                                    _: 2,
                                                                                                },
                                                                                                1024
                                                                                            ),
                                                                                        ],
                                                                                        40,
                                                                                        Fn
                                                                                    )
                                                                                )
                                                                            ),
                                                                            128
                                                                        )),
                                                                    ],
                                                                    64
                                                                ))
                                                              : z("", !0),
                                                      ]),
                                                  ]),
                                                  _: 1,
                                              }
                                          ))
                                        : z("", !0),
                                ]),
                                i("div", Mn, [
                                    p(
                                        Ze,
                                        { align: "right", width: "48" },
                                        {
                                            trigger: _(() => [
                                                r.$page.props.jetstream
                                                    .managesProfilePhotos
                                                    ? (E(),
                                                      S("button", In, [
                                                          i(
                                                              "img",
                                                              {
                                                                  class: "h-8 w-8 rounded object-cover",
                                                                  src: r.$page
                                                                      .props
                                                                      .auth.user
                                                                      .profile_photo_url,
                                                                  alt: r.$page
                                                                      .props
                                                                      .auth.user
                                                                      .name,
                                                              },
                                                              null,
                                                              8,
                                                              Bn
                                                          ),
                                                      ]))
                                                    : (E(),
                                                      S("span", Nn, [
                                                          i("button", Rn, [
                                                              I(
                                                                  x(
                                                                      r.$page
                                                                          .props
                                                                          .auth
                                                                          .user
                                                                          .name
                                                                  ) + " ",
                                                                  1
                                                              ),
                                                              Hn,
                                                          ]),
                                                      ])),
                                            ]),
                                            content: _(() => [
                                                i("div", Vn, [
                                                    I(
                                                        x(
                                                            r.$page.props.auth
                                                                .user.name
                                                        ) + " ",
                                                        1
                                                    ),
                                                    i(
                                                        "div",
                                                        Un,
                                                        x(
                                                            r.$page.props.auth
                                                                .user.email
                                                        ),
                                                        1
                                                    ),
                                                ]),
                                                i(
                                                    "div",
                                                    Wn,
                                                    x(
                                                        r.lang().label
                                                            .manage_account
                                                    ),
                                                    1
                                                ),
                                                p(
                                                    te,
                                                    {
                                                        href: r.route(
                                                            "profile.show"
                                                        ),
                                                    },
                                                    {
                                                        default: _(() => [
                                                            I(
                                                                x(
                                                                    r.lang()
                                                                        .label
                                                                        .profile
                                                                ),
                                                                1
                                                            ),
                                                        ]),
                                                        _: 1,
                                                    },
                                                    8,
                                                    ["href"]
                                                ),
                                                W(
                                                    p(
                                                        te,
                                                        {
                                                            href: r.route(
                                                                "setting.index"
                                                            ),
                                                        },
                                                        {
                                                            default: _(() => [
                                                                I(
                                                                    x(
                                                                        r.lang()
                                                                            .label
                                                                            .setting
                                                                    ),
                                                                    1
                                                                ),
                                                            ]),
                                                            _: 1,
                                                        },
                                                        8,
                                                        ["href"]
                                                    ),
                                                    [
                                                        [
                                                            q,
                                                            r.can([
                                                                "setting read",
                                                            ]),
                                                        ],
                                                    ]
                                                ),
                                                r.$page.props.jetstream
                                                    .hasApiFeatures
                                                    ? (E(),
                                                      Se(
                                                          te,
                                                          {
                                                              key: 0,
                                                              href: r.route(
                                                                  "api-tokens.index"
                                                              ),
                                                          },
                                                          {
                                                              default: _(() => [
                                                                  I(
                                                                      x(
                                                                          r.lang()
                                                                              .label
                                                                              .api_tokens
                                                                      ),
                                                                      1
                                                                  ),
                                                              ]),
                                                              _: 1,
                                                          },
                                                          8,
                                                          ["href"]
                                                      ))
                                                    : z("", !0),
                                                qn,
                                                i(
                                                    "form",
                                                    {
                                                        onSubmit: Qe(l, [
                                                            "prevent",
                                                        ]),
                                                    },
                                                    [
                                                        p(
                                                            te,
                                                            { as: "button" },
                                                            {
                                                                default: _(
                                                                    () => [
                                                                        I(
                                                                            x(
                                                                                r.lang()
                                                                                    .label
                                                                                    .logout
                                                                            ),
                                                                            1
                                                                        ),
                                                                    ]
                                                                ),
                                                                _: 1,
                                                            }
                                                        ),
                                                    ],
                                                    40,
                                                    zn
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                            ]),
                        ]),
                    ]),
                ])
            );
        },
    },
    Xn = {},
    Yn = { class: "sticky top-[100vh]" },
    Kn = {
        class: "bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800",
    },
    Qn = { class: "flex justify-end items-center px-4 sm:px-6 lg:px-8 py-4" },
    Jn = { class: "text-slate-600 dark:text-slate-400" },
    Zn = i("span", { class: "text-rose-500" }, "♥️", -1),
    er = i(
        "a",
        {
            class: "text-primary font-semibold",
            target: "_blank",
            href: "https://erikwibowo.com",
        },
        "Erik Wibowo",
        -1
    );
function tr(e, t) {
    return (
        E(),
        S("footer", Yn, [
            i("div", Kn, [
                i("div", Qn, [
                    i("p", Jn, [
                        I(
                            x(
                                e.$page.props.app.setting.name +
                                    " v." +
                                    e.$page.props.app.version
                            ) +
                                " © 2023-" +
                                x(new Date().getFullYear()) +
                                ". " +
                                x(e.lang().label.build_with) +
                                " ",
                            1
                        ),
                        Zn,
                        I(" " + x(e.lang().label.by) + " ", 1),
                        er,
                    ]),
                ]),
            ]),
        ])
    );
}
const nr = lt(Xn, [["render", tr]]);
function H(e, t, ...n) {
    if (e in t) {
        let r = t[e];
        return typeof r == "function" ? r(...n) : r;
    }
    let l = new Error(
        `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
        )
            .map((r) => `"${r}"`)
            .join(", ")}.`
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(l, H), l);
}
var Le = ((e) => (
        (e[(e.None = 0)] = "None"),
        (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
        (e[(e.Static = 2)] = "Static"),
        e
    ))(Le || {}),
    Q = ((e) => (
        (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
    ))(Q || {});
function j({
    visible: e = !0,
    features: t = 0,
    ourProps: n,
    theirProps: l,
    ...r
}) {
    var a;
    let o = ot(l, n),
        s = Object.assign(r, { props: o });
    if (e || (t & 2 && o.static)) return Me(s);
    if (t & 1) {
        let d = (a = o.unmount) == null || a ? 0 : 1;
        return H(d, {
            [0]() {
                return null;
            },
            [1]() {
                return Me({
                    ...r,
                    props: { ...o, hidden: !0, style: { display: "none" } },
                });
            },
        });
    }
    return Me(s);
}
function Me({ props: e, attrs: t, slots: n, slot: l, name: r }) {
    var a, o;
    let { as: s, ...d } = st(e, ["unmount", "static"]),
        u = (a = n.default) == null ? void 0 : a.call(n, l),
        c = {};
    if (l) {
        let f = !1,
            k = [];
        for (let [h, v] of Object.entries(l))
            typeof v == "boolean" && (f = !0), v === !0 && k.push(h);
        f && (c["data-headlessui-state"] = k.join(" "));
    }
    if (s === "template") {
        if (
            ((u = at(u ?? [])),
            Object.keys(d).length > 0 || Object.keys(t).length > 0)
        ) {
            let [f, ...k] = u ?? [];
            if (!rr(f) || k.length > 0)
                throw new Error(
                    [
                        'Passing props on "template"!',
                        "",
                        `The current component <${r} /> is rendering a "template".`,
                        "However we need to passthrough the following props:",
                        Object.keys(d)
                            .concat(Object.keys(t))
                            .map((b) => b.trim())
                            .filter((b, D, J) => J.indexOf(b) === D)
                            .sort((b, D) => b.localeCompare(D))
                            .map((b) => `  - ${b}`).join(`
`),
                        "",
                        "You can apply a few solutions:",
                        [
                            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
                            "Render a single element as the child so that we can forward the props onto that element.",
                        ].map((b) => `  - ${b}`).join(`
`),
                    ].join(`
`)
                );
            let h = ot((o = f.props) != null ? o : {}, d),
                v = Lt(f, h);
            for (let b in h)
                b.startsWith("on") &&
                    (v.props || (v.props = {}), (v.props[b] = h[b]));
            return v;
        }
        return Array.isArray(u) && u.length === 1 ? u[0] : u;
    }
    return C(s, Object.assign({}, d, c), { default: () => u });
}
function at(e) {
    return e.flatMap((t) => (t.type === ue ? at(t.children) : [t]));
}
function ot(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let l of e)
        for (let r in l)
            r.startsWith("on") && typeof l[r] == "function"
                ? (n[r] != null || (n[r] = []), n[r].push(l[r]))
                : (t[r] = l[r]);
    if (t.disabled || t["aria-disabled"])
        return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((l) => [l, void 0]))
        );
    for (let l in n)
        Object.assign(t, {
            [l](r, ...a) {
                let o = n[l];
                for (let s of o) {
                    if (r instanceof Event && r.defaultPrevented) return;
                    s(r, ...a);
                }
            },
        });
    return t;
}
function st(e, t = []) {
    let n = Object.assign({}, e);
    for (let l of t) l in n && delete n[l];
    return n;
}
function rr(e) {
    return e == null
        ? !1
        : typeof e.type == "string" ||
              typeof e.type == "object" ||
              typeof e.type == "function";
}
let lr = 0;
function ar() {
    return ++lr;
}
function se() {
    return ar();
}
var it = ((e) => (
    (e.Space = " "),
    (e.Enter = "Enter"),
    (e.Escape = "Escape"),
    (e.Backspace = "Backspace"),
    (e.Delete = "Delete"),
    (e.ArrowLeft = "ArrowLeft"),
    (e.ArrowUp = "ArrowUp"),
    (e.ArrowRight = "ArrowRight"),
    (e.ArrowDown = "ArrowDown"),
    (e.Home = "Home"),
    (e.End = "End"),
    (e.PageUp = "PageUp"),
    (e.PageDown = "PageDown"),
    (e.Tab = "Tab"),
    e
))(it || {});
function L(e) {
    var t;
    return e == null || e.value == null
        ? null
        : (t = e.value.$el) != null
        ? t
        : e.value;
}
let ut = Symbol("Context");
var P = ((e) => (
    (e[(e.Open = 1)] = "Open"),
    (e[(e.Closed = 2)] = "Closed"),
    (e[(e.Closing = 4)] = "Closing"),
    (e[(e.Opening = 8)] = "Opening"),
    e
))(P || {});
function or() {
    return Ge() !== null;
}
function Ge() {
    return V(ut, null);
}
function sr(e) {
    X(ut, e);
}
var ir = Object.defineProperty,
    ur = (e, t, n) =>
        t in e
            ? ir(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    et = (e, t, n) => (ur(e, typeof t != "symbol" ? t + "" : t, n), n);
class dr {
    constructor() {
        et(this, "current", this.detect()), et(this, "currentId", 0);
    }
    set(t) {
        this.current !== t && ((this.currentId = 0), (this.current = t));
    }
    reset() {
        this.set(this.detect());
    }
    nextId() {
        return ++this.currentId;
    }
    get isServer() {
        return this.current === "server";
    }
    get isClient() {
        return this.current === "client";
    }
    detect() {
        return typeof window > "u" || typeof document > "u"
            ? "server"
            : "client";
    }
}
let ge = new dr();
function be(e) {
    if (ge.isServer) return null;
    if (e instanceof Node) return e.ownerDocument;
    if (e != null && e.hasOwnProperty("value")) {
        let t = L(e);
        if (t) return t.ownerDocument;
    }
    return document;
}
let Re = [
    "[contentEditable=true]",
    "[tabindex]",
    "a[href]",
    "area[href]",
    "button:not([disabled])",
    "iframe",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(",");
var K = ((e) => (
        (e[(e.First = 1)] = "First"),
        (e[(e.Previous = 2)] = "Previous"),
        (e[(e.Next = 4)] = "Next"),
        (e[(e.Last = 8)] = "Last"),
        (e[(e.WrapAround = 16)] = "WrapAround"),
        (e[(e.NoScroll = 32)] = "NoScroll"),
        e
    ))(K || {}),
    dt = ((e) => (
        (e[(e.Error = 0)] = "Error"),
        (e[(e.Overflow = 1)] = "Overflow"),
        (e[(e.Success = 2)] = "Success"),
        (e[(e.Underflow = 3)] = "Underflow"),
        e
    ))(dt || {}),
    cr = ((e) => (
        (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
    ))(cr || {});
function fr(e = document.body) {
    return e == null
        ? []
        : Array.from(e.querySelectorAll(Re)).sort((t, n) =>
              Math.sign(
                  (t.tabIndex || Number.MAX_SAFE_INTEGER) -
                      (n.tabIndex || Number.MAX_SAFE_INTEGER)
              )
          );
}
var ct = ((e) => (
    (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(ct || {});
function pr(e, t = 0) {
    var n;
    return e === ((n = be(e)) == null ? void 0 : n.body)
        ? !1
        : H(t, {
              [0]() {
                  return e.matches(Re);
              },
              [1]() {
                  let l = e;
                  for (; l !== null; ) {
                      if (l.matches(Re)) return !0;
                      l = l.parentElement;
                  }
                  return !1;
              },
          });
}
function oe(e) {
    e == null || e.focus({ preventScroll: !0 });
}
let hr = ["textarea", "input"].join(",");
function vr(e) {
    var t, n;
    return (n =
        (t = e == null ? void 0 : e.matches) == null
            ? void 0
            : t.call(e, hr)) != null
        ? n
        : !1;
}
function mr(e, t = (n) => n) {
    return e.slice().sort((n, l) => {
        let r = t(n),
            a = t(l);
        if (r === null || a === null) return 0;
        let o = r.compareDocumentPosition(a);
        return o & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : o & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
    });
}
function Te(
    e,
    t,
    { sorted: n = !0, relativeTo: l = null, skipElements: r = [] } = {}
) {
    var a;
    let o =
            (a = Array.isArray(e)
                ? e.length > 0
                    ? e[0].ownerDocument
                    : document
                : e == null
                ? void 0
                : e.ownerDocument) != null
                ? a
                : document,
        s = Array.isArray(e) ? (n ? mr(e) : e) : fr(e);
    r.length > 0 && s.length > 1 && (s = s.filter((v) => !r.includes(v))),
        (l = l ?? o.activeElement);
    let d = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        u = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, s.indexOf(l)) - 1;
            if (t & 4) return Math.max(0, s.indexOf(l)) + 1;
            if (t & 8) return s.length - 1;
            throw new Error(
                "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
        })(),
        c = t & 32 ? { preventScroll: !0 } : {},
        f = 0,
        k = s.length,
        h;
    do {
        if (f >= k || f + k <= 0) return 0;
        let v = u + f;
        if (t & 16) v = (v + k) % k;
        else {
            if (v < 0) return 3;
            if (v >= k) return 1;
        }
        (h = s[v]), h == null || h.focus(c), (f += d);
    } while (h !== o.activeElement);
    return (
        t & 6 && vr(h) && h.select(),
        h.hasAttribute("tabindex") || h.setAttribute("tabindex", "0"),
        2
    );
}
function Ie(e, t, n) {
    ge.isServer ||
        B((l) => {
            document.addEventListener(e, t, n),
                l(() => document.removeEventListener(e, t, n));
        });
}
function gr(e, t, n = m(() => !0)) {
    function l(a, o) {
        if (!n.value || a.defaultPrevented) return;
        let s = o(a);
        if (s === null || !s.getRootNode().contains(s)) return;
        let d = (function u(c) {
            return typeof c == "function"
                ? u(c())
                : Array.isArray(c) || c instanceof Set
                ? c
                : [c];
        })(e);
        for (let u of d) {
            if (u === null) continue;
            let c = u instanceof HTMLElement ? u : L(u);
            if (
                (c != null && c.contains(s)) ||
                (a.composed && a.composedPath().includes(c))
            )
                return;
        }
        return (
            !pr(s, ct.Loose) && s.tabIndex !== -1 && a.preventDefault(), t(a, s)
        );
    }
    let r = g(null);
    Ie(
        "mousedown",
        (a) => {
            var o, s;
            n.value &&
                (r.value =
                    ((s = (o = a.composedPath) == null ? void 0 : o.call(a)) ==
                    null
                        ? void 0
                        : s[0]) || a.target);
        },
        !0
    ),
        Ie(
            "click",
            (a) => {
                r.value && (l(a, () => r.value), (r.value = null));
            },
            !0
        ),
        Ie(
            "blur",
            (a) =>
                l(a, () =>
                    window.document.activeElement instanceof HTMLIFrameElement
                        ? window.document.activeElement
                        : null
                ),
            !0
        );
}
var Oe = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.Focusable = 2)] = "Focusable"),
    (e[(e.Hidden = 4)] = "Hidden"),
    e
))(Oe || {});
let He = A({
    name: "Hidden",
    props: {
        as: { type: [Object, String], default: "div" },
        features: { type: Number, default: 1 },
    },
    setup(e, { slots: t, attrs: n }) {
        return () => {
            let { features: l, ...r } = e,
                a = {
                    "aria-hidden": (l & 2) === 2 ? !0 : void 0,
                    style: {
                        position: "fixed",
                        top: 1,
                        left: 1,
                        width: 1,
                        height: 0,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: "0",
                        ...((l & 4) === 4 &&
                            (l & 2) !== 2 && { display: "none" }),
                    },
                };
            return j({
                ourProps: a,
                theirProps: r,
                slot: {},
                attrs: n,
                slots: t,
                name: "Hidden",
            });
        };
    },
});
function br() {
    return (
        /iPhone/gi.test(window.navigator.platform) ||
        (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
    );
}
function wr(e, t, n) {
    ge.isServer ||
        B((l) => {
            window.addEventListener(e, t, n),
                l(() => window.removeEventListener(e, t, n));
        });
}
var ve = ((e) => (
    (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(ve || {});
function yr() {
    let e = g(0);
    return (
        wr("keydown", (t) => {
            t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
        }),
        e
    );
}
function ft(e, t, n, l) {
    ge.isServer ||
        B((r) => {
            (e = e ?? window),
                e.addEventListener(t, n, l),
                r(() => e.removeEventListener(t, n, l));
        });
}
function pt(e) {
    typeof queueMicrotask == "function"
        ? queueMicrotask(e)
        : Promise.resolve()
              .then(e)
              .catch((t) =>
                  setTimeout(() => {
                      throw t;
                  })
              );
}
function ht(e) {
    if (!e) return new Set();
    if (typeof e == "function") return new Set(e());
    let t = new Set();
    for (let n of e.value) {
        let l = L(n);
        l instanceof HTMLElement && t.add(l);
    }
    return t;
}
var vt = ((e) => (
    (e[(e.None = 1)] = "None"),
    (e[(e.InitialFocus = 2)] = "InitialFocus"),
    (e[(e.TabLock = 4)] = "TabLock"),
    (e[(e.FocusLock = 8)] = "FocusLock"),
    (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
    (e[(e.All = 30)] = "All"),
    e
))(vt || {});
let fe = Object.assign(
        A({
            name: "FocusTrap",
            props: {
                as: { type: [Object, String], default: "div" },
                initialFocus: { type: Object, default: null },
                features: { type: Number, default: 30 },
                containers: { type: [Object, Function], default: g(new Set()) },
            },
            inheritAttrs: !1,
            setup(e, { attrs: t, slots: n, expose: l }) {
                let r = g(null);
                l({ el: r, $el: r });
                let a = m(() => be(r)),
                    o = g(!1);
                F(() => (o.value = !0)),
                    N(() => (o.value = !1)),
                    kr(
                        { ownerDocument: a },
                        m(() => o.value && !!(e.features & 16))
                    );
                let s = xr(
                    {
                        ownerDocument: a,
                        container: r,
                        initialFocus: m(() => e.initialFocus),
                    },
                    m(() => o.value && !!(e.features & 2))
                );
                $r(
                    {
                        ownerDocument: a,
                        container: r,
                        containers: e.containers,
                        previousActiveElement: s,
                    },
                    m(() => o.value && !!(e.features & 8))
                );
                let d = yr();
                function u(h) {
                    let v = L(r);
                    v &&
                        ((b) => b())(() => {
                            H(d.value, {
                                [ve.Forwards]: () => {
                                    Te(v, K.First, {
                                        skipElements: [h.relatedTarget],
                                    });
                                },
                                [ve.Backwards]: () => {
                                    Te(v, K.Last, {
                                        skipElements: [h.relatedTarget],
                                    });
                                },
                            });
                        });
                }
                let c = g(!1);
                function f(h) {
                    h.key === "Tab" &&
                        ((c.value = !0),
                        requestAnimationFrame(() => {
                            c.value = !1;
                        }));
                }
                function k(h) {
                    if (!o.value) return;
                    let v = ht(e.containers);
                    L(r) instanceof HTMLElement && v.add(L(r));
                    let b = h.relatedTarget;
                    b instanceof HTMLElement &&
                        b.dataset.headlessuiFocusGuard !== "true" &&
                        (mt(v, b) ||
                            (c.value
                                ? Te(
                                      L(r),
                                      H(d.value, {
                                          [ve.Forwards]: () => K.Next,
                                          [ve.Backwards]: () => K.Previous,
                                      }) | K.WrapAround,
                                      { relativeTo: h.target }
                                  )
                                : h.target instanceof HTMLElement &&
                                  oe(h.target)));
                }
                return () => {
                    let h = {},
                        v = { ref: r, onKeydown: f, onFocusout: k },
                        {
                            features: b,
                            initialFocus: D,
                            containers: J,
                            ...M
                        } = e;
                    return C(ue, [
                        !!(b & 4) &&
                            C(He, {
                                as: "button",
                                type: "button",
                                "data-headlessui-focus-guard": !0,
                                onFocus: u,
                                features: Oe.Focusable,
                            }),
                        j({
                            ourProps: v,
                            theirProps: { ...t, ...M },
                            slot: h,
                            attrs: t,
                            slots: n,
                            name: "FocusTrap",
                        }),
                        !!(b & 4) &&
                            C(He, {
                                as: "button",
                                type: "button",
                                "data-headlessui-focus-guard": !0,
                                onFocus: u,
                                features: Oe.Focusable,
                            }),
                    ]);
                };
            },
        }),
        { features: vt }
    ),
    le = [];
if (typeof window < "u" && typeof document < "u") {
    let e = function (t) {
        t.target instanceof HTMLElement &&
            t.target !== document.body &&
            le[0] !== t.target &&
            (le.unshift(t.target),
            (le = le.filter((n) => n != null && n.isConnected)),
            le.splice(10));
    };
    window.addEventListener("click", e, { capture: !0 }),
        window.addEventListener("mousedown", e, { capture: !0 }),
        window.addEventListener("focus", e, { capture: !0 }),
        document.body.addEventListener("click", e, { capture: !0 }),
        document.body.addEventListener("mousedown", e, { capture: !0 }),
        document.body.addEventListener("focus", e, { capture: !0 });
}
function _r(e) {
    let t = g(le.slice());
    return (
        me(
            [e],
            ([n], [l]) => {
                l === !0 && n === !1
                    ? pt(() => {
                          t.value.splice(0);
                      })
                    : l === !1 && n === !0 && (t.value = le.slice());
            },
            { flush: "post" }
        ),
        () => {
            var n;
            return (n = t.value.find((l) => l != null && l.isConnected)) != null
                ? n
                : null;
        }
    );
}
function kr({ ownerDocument: e }, t) {
    let n = _r(t);
    F(() => {
        B(
            () => {
                var l, r;
                t.value ||
                    (((l = e.value) == null ? void 0 : l.activeElement) ===
                        ((r = e.value) == null ? void 0 : r.body) &&
                        oe(n()));
            },
            { flush: "post" }
        );
    }),
        N(() => {
            oe(n());
        });
}
function xr({ ownerDocument: e, container: t, initialFocus: n }, l) {
    let r = g(null),
        a = g(!1);
    return (
        F(() => (a.value = !0)),
        N(() => (a.value = !1)),
        F(() => {
            me(
                [t, n, l],
                (o, s) => {
                    if (
                        o.every((u, c) => (s == null ? void 0 : s[c]) === u) ||
                        !l.value
                    )
                        return;
                    let d = L(t);
                    d &&
                        pt(() => {
                            var u, c;
                            if (!a.value) return;
                            let f = L(n),
                                k =
                                    (u = e.value) == null
                                        ? void 0
                                        : u.activeElement;
                            if (f) {
                                if (f === k) {
                                    r.value = k;
                                    return;
                                }
                            } else if (d.contains(k)) {
                                r.value = k;
                                return;
                            }
                            f
                                ? oe(f)
                                : Te(d, K.First | K.NoScroll) === dt.Error &&
                                  console.warn(
                                      "There are no focusable elements inside the <FocusTrap />"
                                  ),
                                (r.value =
                                    (c = e.value) == null
                                        ? void 0
                                        : c.activeElement);
                        });
                },
                { immediate: !0, flush: "post" }
            );
        }),
        r
    );
}
function $r(
    { ownerDocument: e, container: t, containers: n, previousActiveElement: l },
    r
) {
    var a;
    ft(
        (a = e.value) == null ? void 0 : a.defaultView,
        "focus",
        (o) => {
            if (!r.value) return;
            let s = ht(n);
            L(t) instanceof HTMLElement && s.add(L(t));
            let d = l.value;
            if (!d) return;
            let u = o.target;
            u && u instanceof HTMLElement
                ? mt(s, u)
                    ? ((l.value = u), oe(u))
                    : (o.preventDefault(), o.stopPropagation(), oe(d))
                : oe(l.value);
        },
        !0
    );
}
function mt(e, t) {
    for (let n of e) if (n.contains(t)) return !0;
    return !1;
}
let Be = new Map(),
    pe = new Map();
function tt(e, t = g(!0)) {
    B((n) => {
        var l;
        if (!t.value) return;
        let r = L(e);
        if (!r) return;
        n(function () {
            var o;
            if (!r) return;
            let s = (o = pe.get(r)) != null ? o : 1;
            if ((s === 1 ? pe.delete(r) : pe.set(r, s - 1), s !== 1)) return;
            let d = Be.get(r);
            d &&
                (d["aria-hidden"] === null
                    ? r.removeAttribute("aria-hidden")
                    : r.setAttribute("aria-hidden", d["aria-hidden"]),
                (r.inert = d.inert),
                Be.delete(r));
        });
        let a = (l = pe.get(r)) != null ? l : 0;
        pe.set(r, a + 1),
            a === 0 &&
                (Be.set(r, {
                    "aria-hidden": r.getAttribute("aria-hidden"),
                    inert: r.inert,
                }),
                r.setAttribute("aria-hidden", "true"),
                (r.inert = !0));
    });
}
let gt = Symbol("ForcePortalRootContext");
function Er() {
    return V(gt, !1);
}
let Ve = A({
    name: "ForcePortalRoot",
    props: {
        as: { type: [Object, String], default: "template" },
        force: { type: Boolean, default: !1 },
    },
    setup(e, { slots: t, attrs: n }) {
        return (
            X(gt, e.force),
            () => {
                let { force: l, ...r } = e;
                return j({
                    theirProps: r,
                    ourProps: {},
                    slot: {},
                    slots: t,
                    attrs: n,
                    name: "ForcePortalRoot",
                });
            }
        );
    },
});
function Sr(e) {
    let t = be(e);
    if (!t) {
        if (e === null) return null;
        throw new Error(
            `[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`
        );
    }
    let n = t.getElementById("headlessui-portal-root");
    if (n) return n;
    let l = t.createElement("div");
    return (
        l.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(l)
    );
}
let bt = A({
        name: "Portal",
        props: { as: { type: [Object, String], default: "div" } },
        setup(e, { slots: t, attrs: n }) {
            let l = g(null),
                r = m(() => be(l)),
                a = Er(),
                o = V(wt, null),
                s = g(a === !0 || o == null ? Sr(l.value) : o.resolveTarget());
            return (
                B(() => {
                    a || (o != null && (s.value = o.resolveTarget()));
                }),
                N(() => {
                    var d, u;
                    let c =
                        (d = r.value) == null
                            ? void 0
                            : d.getElementById("headlessui-portal-root");
                    c &&
                        s.value === c &&
                        s.value.children.length <= 0 &&
                        ((u = s.value.parentElement) == null ||
                            u.removeChild(s.value));
                }),
                () => {
                    if (s.value === null) return null;
                    let d = { ref: l, "data-headlessui-portal": "" };
                    return C(
                        Ot,
                        { to: s.value },
                        j({
                            ourProps: d,
                            theirProps: e,
                            slot: {},
                            attrs: n,
                            slots: t,
                            name: "Portal",
                        })
                    );
                }
            );
        },
    }),
    wt = Symbol("PortalGroupContext"),
    Tr = A({
        name: "PortalGroup",
        props: {
            as: { type: [Object, String], default: "template" },
            target: { type: Object, default: null },
        },
        setup(e, { attrs: t, slots: n }) {
            let l = Ct({
                resolveTarget() {
                    return e.target;
                },
            });
            return (
                X(wt, l),
                () => {
                    let { target: r, ...a } = e;
                    return j({
                        theirProps: a,
                        ourProps: {},
                        slot: {},
                        attrs: t,
                        slots: n,
                        name: "PortalGroup",
                    });
                }
            );
        },
    }),
    yt = Symbol("StackContext");
var Ue = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
    Ue || {}
);
function Lr() {
    return V(yt, () => {});
}
function Or({ type: e, enabled: t, element: n, onUpdate: l }) {
    let r = Lr();
    function a(...o) {
        l == null || l(...o), r(...o);
    }
    F(() => {
        me(
            t,
            (o, s) => {
                o ? a(0, e, n) : s === !0 && a(1, e, n);
            },
            { immediate: !0, flush: "sync" }
        );
    }),
        N(() => {
            t.value && a(1, e, n);
        }),
        X(yt, a);
}
let _t = Symbol("DescriptionContext");
function Cr() {
    let e = V(_t, null);
    if (e === null) throw new Error("Missing parent");
    return e;
}
function Fr({ slot: e = g({}), name: t = "Description", props: n = {} } = {}) {
    let l = g([]);
    function r(a) {
        return (
            l.value.push(a),
            () => {
                let o = l.value.indexOf(a);
                o !== -1 && l.value.splice(o, 1);
            }
        );
    }
    return (
        X(_t, { register: r, slot: e, name: t, props: n }),
        m(() => (l.value.length > 0 ? l.value.join(" ") : void 0))
    );
}
A({
    name: "Description",
    props: {
        as: { type: [Object, String], default: "p" },
        id: { type: String, default: () => `headlessui-description-${se()}` },
    },
    setup(e, { attrs: t, slots: n }) {
        let l = Cr();
        return (
            F(() => N(l.register(e.id))),
            () => {
                let {
                        name: r = "Description",
                        slot: a = g({}),
                        props: o = {},
                    } = l,
                    { id: s, ...d } = e,
                    u = {
                        ...Object.entries(o).reduce(
                            (c, [f, k]) => Object.assign(c, { [f]: $(k) }),
                            {}
                        ),
                        id: s,
                    };
                return j({
                    ourProps: u,
                    theirProps: d,
                    slot: a.value,
                    attrs: t,
                    slots: n,
                    name: r,
                });
            }
        );
    },
});
function Pr(e) {
    let t = Ft(e.getSnapshot());
    return (
        N(
            e.subscribe(() => {
                t.value = e.getSnapshot();
            })
        ),
        t
    );
}
function Ce() {
    let e = [],
        t = {
            addEventListener(n, l, r, a) {
                return (
                    n.addEventListener(l, r, a),
                    t.add(() => n.removeEventListener(l, r, a))
                );
            },
            requestAnimationFrame(...n) {
                let l = requestAnimationFrame(...n);
                t.add(() => cancelAnimationFrame(l));
            },
            nextFrame(...n) {
                t.requestAnimationFrame(() => {
                    t.requestAnimationFrame(...n);
                });
            },
            setTimeout(...n) {
                let l = setTimeout(...n);
                t.add(() => clearTimeout(l));
            },
            style(n, l, r) {
                let a = n.style.getPropertyValue(l);
                return (
                    Object.assign(n.style, { [l]: r }),
                    this.add(() => {
                        Object.assign(n.style, { [l]: a });
                    })
                );
            },
            group(n) {
                let l = Ce();
                return n(l), this.add(() => l.dispose());
            },
            add(n) {
                return (
                    e.push(n),
                    () => {
                        let l = e.indexOf(n);
                        if (l >= 0) for (let r of e.splice(l, 1)) r();
                    }
                );
            },
            dispose() {
                for (let n of e.splice(0)) n();
            },
        };
    return t;
}
function Ar(e, t) {
    let n = e(),
        l = new Set();
    return {
        getSnapshot() {
            return n;
        },
        subscribe(r) {
            return l.add(r), () => l.delete(r);
        },
        dispatch(r, ...a) {
            let o = t[r].call(n, ...a);
            o && ((n = o), l.forEach((s) => s()));
        },
    };
}
function jr() {
    let e;
    return {
        before({ doc: t }) {
            var n;
            let l = t.documentElement;
            e =
                ((n = t.defaultView) != null ? n : window).innerWidth -
                l.clientWidth;
        },
        after({ doc: t, d: n }) {
            let l = t.documentElement,
                r = l.clientWidth - l.offsetWidth,
                a = e - r;
            n.style(l, "paddingRight", `${a}px`);
        },
    };
}
function Dr() {
    if (!br()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset;
        },
        after({ doc: t, d: n, meta: l }) {
            function r(o) {
                return l.containers
                    .flatMap((s) => s())
                    .some((s) => s.contains(o));
            }
            n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
            let a = null;
            n.addEventListener(
                t,
                "click",
                (o) => {
                    if (o.target instanceof HTMLElement)
                        try {
                            let s = o.target.closest("a");
                            if (!s) return;
                            let { hash: d } = new URL(s.href),
                                u = t.querySelector(d);
                            u && !r(u) && (a = u);
                        } catch {}
                },
                !0
            ),
                n.addEventListener(
                    t,
                    "touchmove",
                    (o) => {
                        o.target instanceof HTMLElement &&
                            !r(o.target) &&
                            o.preventDefault();
                    },
                    { passive: !1 }
                ),
                n.add(() => {
                    window.scrollTo(0, window.pageYOffset + e),
                        a &&
                            a.isConnected &&
                            (a.scrollIntoView({ block: "nearest" }),
                            (a = null));
                });
        },
    };
}
function Mr() {
    return {
        before({ doc: e, d: t }) {
            t.style(e.documentElement, "overflow", "hidden");
        },
    };
}
function Ir(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t;
}
let ae = Ar(() => new Map(), {
    PUSH(e, t) {
        var n;
        let l =
            (n = this.get(e)) != null
                ? n
                : { doc: e, count: 0, d: Ce(), meta: new Set() };
        return l.count++, l.meta.add(t), this.set(e, l), this;
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this;
    },
    SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
        let l = { doc: e, d: t, meta: Ir(n) },
            r = [Dr(), jr(), Mr()];
        r.forEach(({ before: a }) => (a == null ? void 0 : a(l))),
            r.forEach(({ after: a }) => (a == null ? void 0 : a(l)));
    },
    SCROLL_ALLOW({ d: e }) {
        e.dispose();
    },
    TEARDOWN({ doc: e }) {
        this.delete(e);
    },
});
ae.subscribe(() => {
    let e = ae.getSnapshot(),
        t = new Map();
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let l = t.get(n.doc) === "hidden",
            r = n.count !== 0;
        ((r && !l) || (!r && l)) &&
            ae.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
            n.count === 0 && ae.dispatch("TEARDOWN", n);
    }
});
function Br(e, t, n) {
    let l = Pr(ae),
        r = m(() => {
            let a = e.value ? l.value.get(e.value) : void 0;
            return a ? a.count > 0 : !1;
        });
    return (
        me(
            [e, t],
            ([a, o], [s], d) => {
                if (!a || !o) return;
                ae.dispatch("PUSH", a, n);
                let u = !1;
                d(() => {
                    u || (ae.dispatch("POP", s ?? a, n), (u = !0));
                });
            },
            { immediate: !0 }
        ),
        r
    );
}
var Nr = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
))(Nr || {});
let We = Symbol("DialogContext");
function we(e) {
    let t = V(We, null);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw (Error.captureStackTrace && Error.captureStackTrace(n, we), n);
    }
    return t;
}
let $e = "DC8F892D-2EBD-447C-A4C8-A03058436FF4",
    Rr = A({
        name: "Dialog",
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: "div" },
            static: { type: Boolean, default: !1 },
            unmount: { type: Boolean, default: !0 },
            open: { type: [Boolean, String], default: $e },
            initialFocus: { type: Object, default: null },
            id: { type: String, default: () => `headlessui-dialog-${se()}` },
        },
        emits: { close: (e) => !0 },
        setup(e, { emit: t, attrs: n, slots: l, expose: r }) {
            var a;
            let o = g(!1);
            F(() => {
                o.value = !0;
            });
            let s = g(0),
                d = Ge(),
                u = m(() =>
                    e.open === $e && d !== null
                        ? (d.value & P.Open) === P.Open
                        : e.open
                ),
                c = g(null),
                f = g(null),
                k = m(() => be(c));
            if ((r({ el: c, $el: c }), !(e.open !== $e || d !== null)))
                throw new Error(
                    "You forgot to provide an `open` prop to the `Dialog`."
                );
            if (typeof u.value != "boolean")
                throw new Error(
                    `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${
                        u.value === $e ? void 0 : e.open
                    }`
                );
            let h = m(() => (o.value && u.value ? 0 : 1)),
                v = m(() => h.value === 0),
                b = m(() => s.value > 1),
                D = V(We, null) !== null,
                J = m(() => (b.value ? "parent" : "leaf")),
                M = m(() =>
                    d !== null ? (d.value & P.Closing) === P.Closing : !1
                ),
                ie = m(() => (D || M.value ? !1 : v.value)),
                ye = m(() => {
                    var w, y, T;
                    return (T = Array.from(
                        (y =
                            (w = k.value) == null
                                ? void 0
                                : w.querySelectorAll("body > *")) != null
                            ? y
                            : []
                    ).find((O) =>
                        O.id === "headlessui-portal-root"
                            ? !1
                            : O.contains(L(f)) && O instanceof HTMLElement
                    )) != null
                        ? T
                        : null;
                });
            tt(ye, ie);
            let _e = m(() => (b.value ? !0 : v.value)),
                ke = m(() => {
                    var w, y, T;
                    return (T = Array.from(
                        (y =
                            (w = k.value) == null
                                ? void 0
                                : w.querySelectorAll(
                                      "[data-headlessui-portal]"
                                  )) != null
                            ? y
                            : []
                    ).find(
                        (O) => O.contains(L(f)) && O instanceof HTMLElement
                    )) != null
                        ? T
                        : null;
                });
            tt(ke, _e),
                Or({
                    type: "Dialog",
                    enabled: m(() => h.value === 0),
                    element: c,
                    onUpdate: (w, y) => {
                        if (y === "Dialog")
                            return H(w, {
                                [Ue.Add]: () => (s.value += 1),
                                [Ue.Remove]: () => (s.value -= 1),
                            });
                    },
                });
            let Pe = Fr({
                    name: "DialogDescription",
                    slot: m(() => ({ open: u.value })),
                }),
                Z = g(null),
                U = {
                    titleId: Z,
                    panelRef: g(null),
                    dialogState: h,
                    setTitleId(w) {
                        Z.value !== w && (Z.value = w);
                    },
                    close() {
                        t("close", !1);
                    },
                };
            X(We, U);
            function de() {
                var w, y, T;
                return [
                    ...Array.from(
                        (y =
                            (w = k.value) == null
                                ? void 0
                                : w.querySelectorAll(
                                      "html > *, body > *, [data-headlessui-portal]"
                                  )) != null
                            ? y
                            : []
                    ).filter(
                        (O) =>
                            !(
                                O === document.body ||
                                O === document.head ||
                                !(O instanceof HTMLElement) ||
                                O.contains(L(f)) ||
                                (U.panelRef.value &&
                                    O.contains(U.panelRef.value))
                            )
                    ),
                    (T = U.panelRef.value) != null ? T : c.value,
                ];
            }
            let Ae = m(() => !(!v.value || b.value));
            gr(
                () => de(),
                (w, y) => {
                    U.close(), Pt(() => (y == null ? void 0 : y.focus()));
                },
                Ae
            );
            let je = m(() => !(b.value || h.value !== 0));
            ft(
                (a = k.value) == null ? void 0 : a.defaultView,
                "keydown",
                (w) => {
                    je.value &&
                        (w.defaultPrevented ||
                            (w.key === it.Escape &&
                                (w.preventDefault(),
                                w.stopPropagation(),
                                U.close())));
                }
            );
            let R = m(() => !(M.value || h.value !== 0 || D));
            return (
                Br(k, R, (w) => {
                    var y;
                    return {
                        containers: [
                            ...((y = w.containers) != null ? y : []),
                            de,
                        ],
                    };
                }),
                B((w) => {
                    if (h.value !== 0) return;
                    let y = L(c);
                    if (!y) return;
                    let T = new ResizeObserver((O) => {
                        for (let xe of O) {
                            let ee = xe.target.getBoundingClientRect();
                            ee.x === 0 &&
                                ee.y === 0 &&
                                ee.width === 0 &&
                                ee.height === 0 &&
                                U.close();
                        }
                    });
                    T.observe(y), w(() => T.disconnect());
                }),
                () => {
                    let { id: w, open: y, initialFocus: T, ...O } = e,
                        xe = {
                            ...n,
                            ref: c,
                            id: w,
                            role: "dialog",
                            "aria-modal": h.value === 0 ? !0 : void 0,
                            "aria-labelledby": Z.value,
                            "aria-describedby": Pe.value,
                        },
                        ee = { open: h.value === 0 };
                    return C(Ve, { force: !0 }, () => [
                        C(bt, () =>
                            C(Tr, { target: c.value }, () =>
                                C(Ve, { force: !1 }, () =>
                                    C(
                                        fe,
                                        {
                                            initialFocus: T,
                                            containers: de,
                                            features: v.value
                                                ? H(J.value, {
                                                      parent: fe.features
                                                          .RestoreFocus,
                                                      leaf:
                                                          fe.features.All &
                                                          ~fe.features
                                                              .FocusLock,
                                                  })
                                                : fe.features.None,
                                        },
                                        () =>
                                            j({
                                                ourProps: xe,
                                                theirProps: O,
                                                slot: ee,
                                                attrs: n,
                                                slots: l,
                                                visible: h.value === 0,
                                                features:
                                                    Le.RenderStrategy |
                                                    Le.Static,
                                                name: "Dialog",
                                            })
                                    )
                                )
                            )
                        ),
                        C(He, { features: Oe.Hidden, ref: f }),
                    ]);
                }
            );
        },
    }),
    Hr = A({
        name: "DialogOverlay",
        props: {
            as: { type: [Object, String], default: "div" },
            id: {
                type: String,
                default: () => `headlessui-dialog-overlay-${se()}`,
            },
        },
        setup(e, { attrs: t, slots: n }) {
            let l = we("DialogOverlay");
            function r(a) {
                a.target === a.currentTarget &&
                    (a.preventDefault(), a.stopPropagation(), l.close());
            }
            return () => {
                let { id: a, ...o } = e;
                return j({
                    ourProps: { id: a, "aria-hidden": !0, onClick: r },
                    theirProps: o,
                    slot: { open: l.dialogState.value === 0 },
                    attrs: t,
                    slots: n,
                    name: "DialogOverlay",
                });
            };
        },
    });
A({
    name: "DialogBackdrop",
    props: {
        as: { type: [Object, String], default: "div" },
        id: {
            type: String,
            default: () => `headlessui-dialog-backdrop-${se()}`,
        },
    },
    inheritAttrs: !1,
    setup(e, { attrs: t, slots: n, expose: l }) {
        let r = we("DialogBackdrop"),
            a = g(null);
        return (
            l({ el: a, $el: a }),
            F(() => {
                if (r.panelRef.value === null)
                    throw new Error(
                        "A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing."
                    );
            }),
            () => {
                let { id: o, ...s } = e,
                    d = { id: o, ref: a, "aria-hidden": !0 };
                return C(Ve, { force: !0 }, () =>
                    C(bt, () =>
                        j({
                            ourProps: d,
                            theirProps: { ...t, ...s },
                            slot: { open: r.dialogState.value === 0 },
                            attrs: t,
                            slots: n,
                            name: "DialogBackdrop",
                        })
                    )
                );
            }
        );
    },
});
A({
    name: "DialogPanel",
    props: {
        as: { type: [Object, String], default: "div" },
        id: { type: String, default: () => `headlessui-dialog-panel-${se()}` },
    },
    setup(e, { attrs: t, slots: n, expose: l }) {
        let r = we("DialogPanel");
        l({ el: r.panelRef, $el: r.panelRef });
        function a(o) {
            o.stopPropagation();
        }
        return () => {
            let { id: o, ...s } = e,
                d = { id: o, ref: r.panelRef, onClick: a };
            return j({
                ourProps: d,
                theirProps: s,
                slot: { open: r.dialogState.value === 0 },
                attrs: t,
                slots: n,
                name: "DialogPanel",
            });
        };
    },
});
A({
    name: "DialogTitle",
    props: {
        as: { type: [Object, String], default: "h2" },
        id: { type: String, default: () => `headlessui-dialog-title-${se()}` },
    },
    setup(e, { attrs: t, slots: n }) {
        let l = we("DialogTitle");
        return (
            F(() => {
                l.setTitleId(e.id), N(() => l.setTitleId(null));
            }),
            () => {
                let { id: r, ...a } = e;
                return j({
                    ourProps: { id: r },
                    theirProps: a,
                    slot: { open: l.dialogState.value === 0 },
                    attrs: t,
                    slots: n,
                    name: "DialogTitle",
                });
            }
        );
    },
});
function Vr(e) {
    let t = { called: !1 };
    return (...n) => {
        if (!t.called) return (t.called = !0), e(...n);
    };
}
function Ne(e, ...t) {
    e && t.length > 0 && e.classList.add(...t);
}
function Ee(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t);
}
var qe = ((e) => ((e.Finished = "finished"), (e.Cancelled = "cancelled"), e))(
    qe || {}
);
function Ur(e, t) {
    let n = Ce();
    if (!e) return n.dispose;
    let { transitionDuration: l, transitionDelay: r } = getComputedStyle(e),
        [a, o] = [l, r].map((s) => {
            let [d = 0] = s
                .split(",")
                .filter(Boolean)
                .map((u) =>
                    u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3
                )
                .sort((u, c) => c - u);
            return d;
        });
    return (
        a !== 0 ? n.setTimeout(() => t("finished"), a + o) : t("finished"),
        n.add(() => t("cancelled")),
        n.dispose
    );
}
function nt(e, t, n, l, r, a) {
    let o = Ce(),
        s = a !== void 0 ? Vr(a) : () => {};
    return (
        Ee(e, ...r),
        Ne(e, ...t, ...n),
        o.nextFrame(() => {
            Ee(e, ...n),
                Ne(e, ...l),
                o.add(Ur(e, (d) => (Ee(e, ...l, ...t), Ne(e, ...r), s(d))));
        }),
        o.add(() => Ee(e, ...t, ...n, ...l, ...r)),
        o.add(() => s("cancelled")),
        o.dispose
    );
}
function ne(e = "") {
    return e.split(" ").filter((t) => t.trim().length > 1);
}
let Xe = Symbol("TransitionContext");
var Wr = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Wr || {});
function qr() {
    return V(Xe, null) !== null;
}
function zr() {
    let e = V(Xe, null);
    if (e === null)
        throw new Error(
            "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
        );
    return e;
}
function Gr() {
    let e = V(Ye, null);
    if (e === null)
        throw new Error(
            "A <TransitionChild /> is used but it is missing a parent <TransitionRoot />."
        );
    return e;
}
let Ye = Symbol("NestingContext");
function Fe(e) {
    return "children" in e
        ? Fe(e.children)
        : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function kt(e) {
    let t = g([]),
        n = g(!1);
    F(() => (n.value = !0)), N(() => (n.value = !1));
    function l(a, o = Q.Hidden) {
        let s = t.value.findIndex(({ id: d }) => d === a);
        s !== -1 &&
            (H(o, {
                [Q.Unmount]() {
                    t.value.splice(s, 1);
                },
                [Q.Hidden]() {
                    t.value[s].state = "hidden";
                },
            }),
            !Fe(t) && n.value && (e == null || e()));
    }
    function r(a) {
        let o = t.value.find(({ id: s }) => s === a);
        return (
            o
                ? o.state !== "visible" && (o.state = "visible")
                : t.value.push({ id: a, state: "visible" }),
            () => l(a, Q.Unmount)
        );
    }
    return { children: t, register: r, unregister: l };
}
let xt = Le.RenderStrategy,
    ze = A({
        props: {
            as: { type: [Object, String], default: "div" },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: "" },
            enterFrom: { type: [String], default: "" },
            enterTo: { type: [String], default: "" },
            entered: { type: [String], default: "" },
            leave: { type: [String], default: "" },
            leaveFrom: { type: [String], default: "" },
            leaveTo: { type: [String], default: "" },
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0,
        },
        setup(e, { emit: t, attrs: n, slots: l, expose: r }) {
            let a = g(0);
            function o() {
                (a.value |= P.Opening), t("beforeEnter");
            }
            function s() {
                (a.value &= ~P.Opening), t("afterEnter");
            }
            function d() {
                (a.value |= P.Closing), t("beforeLeave");
            }
            function u() {
                (a.value &= ~P.Closing), t("afterLeave");
            }
            if (!qr() && or())
                return () =>
                    C(
                        $t,
                        {
                            ...e,
                            onBeforeEnter: o,
                            onAfterEnter: s,
                            onBeforeLeave: d,
                            onAfterLeave: u,
                        },
                        l
                    );
            let c = g(null),
                f = g("visible"),
                k = m(() => (e.unmount ? Q.Unmount : Q.Hidden));
            r({ el: c, $el: c });
            let { show: h, appear: v } = zr(),
                { register: b, unregister: D } = Gr(),
                J = { value: !0 },
                M = se(),
                ie = { value: !1 },
                ye = kt(() => {
                    !ie.value &&
                        f.value !== "hidden" &&
                        ((f.value = "hidden"), D(M), u());
                });
            F(() => {
                let R = b(M);
                N(R);
            }),
                B(() => {
                    if (k.value === Q.Hidden && M) {
                        if (h && f.value !== "visible") {
                            f.value = "visible";
                            return;
                        }
                        H(f.value, { hidden: () => D(M), visible: () => b(M) });
                    }
                });
            let _e = ne(e.enter),
                ke = ne(e.enterFrom),
                Pe = ne(e.enterTo),
                Z = ne(e.entered),
                U = ne(e.leave),
                de = ne(e.leaveFrom),
                Ae = ne(e.leaveTo);
            F(() => {
                B(() => {
                    if (f.value === "visible") {
                        let R = L(c);
                        if (R instanceof Comment && R.data === "")
                            throw new Error(
                                "Did you forget to passthrough the `ref` to the actual DOM node?"
                            );
                    }
                });
            });
            function je(R) {
                let w = J.value && !v.value,
                    y = L(c);
                !y ||
                    !(y instanceof HTMLElement) ||
                    w ||
                    ((ie.value = !0),
                    h.value && o(),
                    h.value || d(),
                    R(
                        h.value
                            ? nt(y, _e, ke, Pe, Z, (T) => {
                                  (ie.value = !1), T === qe.Finished && s();
                              })
                            : nt(y, U, de, Ae, Z, (T) => {
                                  (ie.value = !1),
                                      T === qe.Finished &&
                                          (Fe(ye) ||
                                              ((f.value = "hidden"),
                                              D(M),
                                              u()));
                              })
                    ));
            }
            return (
                F(() => {
                    me(
                        [h],
                        (R, w, y) => {
                            je(y), (J.value = !1);
                        },
                        { immediate: !0 }
                    );
                }),
                X(Ye, ye),
                sr(
                    m(
                        () =>
                            H(f.value, { visible: P.Open, hidden: P.Closed }) |
                            a.value
                    )
                ),
                () => {
                    let {
                            appear: R,
                            show: w,
                            enter: y,
                            enterFrom: T,
                            enterTo: O,
                            entered: xe,
                            leave: ee,
                            leaveFrom: pl,
                            leaveTo: hl,
                            ...Ke
                        } = e,
                        Et = { ref: c },
                        St = {
                            ...Ke,
                            ...(v && h && ge.isServer
                                ? {
                                      class: Y([
                                          n.class,
                                          Ke.class,
                                          ..._e,
                                          ...ke,
                                      ]),
                                  }
                                : {}),
                        };
                    return j({
                        theirProps: St,
                        ourProps: Et,
                        slot: {},
                        slots: l,
                        attrs: n,
                        features: xt,
                        visible: f.value === "visible",
                        name: "TransitionChild",
                    });
                }
            );
        },
    }),
    Xr = ze,
    $t = A({
        inheritAttrs: !1,
        props: {
            as: { type: [Object, String], default: "div" },
            show: { type: [Boolean], default: null },
            unmount: { type: [Boolean], default: !0 },
            appear: { type: [Boolean], default: !1 },
            enter: { type: [String], default: "" },
            enterFrom: { type: [String], default: "" },
            enterTo: { type: [String], default: "" },
            entered: { type: [String], default: "" },
            leave: { type: [String], default: "" },
            leaveFrom: { type: [String], default: "" },
            leaveTo: { type: [String], default: "" },
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0,
        },
        setup(e, { emit: t, attrs: n, slots: l }) {
            let r = Ge(),
                a = m(() =>
                    e.show === null && r !== null
                        ? (r.value & P.Open) === P.Open
                        : e.show
                );
            B(() => {
                if (![!0, !1].includes(a.value))
                    throw new Error(
                        'A <Transition /> is used but it is missing a `:show="true | false"` prop.'
                    );
            });
            let o = g(a.value ? "visible" : "hidden"),
                s = kt(() => {
                    o.value = "hidden";
                }),
                d = g(!0),
                u = { show: a, appear: m(() => e.appear || !d.value) };
            return (
                F(() => {
                    B(() => {
                        (d.value = !1),
                            a.value
                                ? (o.value = "visible")
                                : Fe(s) || (o.value = "hidden");
                    });
                }),
                X(Ye, s),
                X(Xe, u),
                () => {
                    let c = st(e, [
                            "show",
                            "appear",
                            "unmount",
                            "onBeforeEnter",
                            "onBeforeLeave",
                            "onAfterEnter",
                            "onAfterLeave",
                        ]),
                        f = { unmount: e.unmount };
                    return j({
                        ourProps: { ...f, as: "template" },
                        theirProps: {},
                        slot: {},
                        slots: {
                            ...l,
                            default: () => [
                                C(
                                    Xr,
                                    {
                                        onBeforeEnter: () => t("beforeEnter"),
                                        onAfterEnter: () => t("afterEnter"),
                                        onBeforeLeave: () => t("beforeLeave"),
                                        onAfterLeave: () => t("afterLeave"),
                                        ...n,
                                        ...f,
                                        ...c,
                                    },
                                    l.default
                                ),
                            ],
                        },
                        attrs: {},
                        features: xt,
                        visible: o.value === "visible",
                        name: "Transition",
                    });
                }
            );
        },
    });
const Yr = { class: "text-white" },
    Kr = {
        class: "flex justify-center items-center border-b border-white/10 h-16 max-w-full px-3",
    },
    Qr = { class: "block text-lg font-semibold truncate" },
    Jr = { class: "pb-24 pt-6 space-y-2 px-3" },
    Zr = { class: "font-md uppercase font-semibold" },
    el = { class: "font-md uppercase font-semibold" },
    tl = i("span", { class: "font-md uppercase font-semibold" }, "Setting", -1),
    nl = [tl],
    rt = {
        __name: "SidebarMenu",
        setup(e) {
            return (t, n) => (
                E(),
                S("div", Yr, [
                    i("div", Kr, [
                        p(
                            $(re),
                            {
                                href: t.route("dashboard"),
                                class: "flex w-full justify-start items-center space-x-4",
                            },
                            {
                                default: _(() => [
                                    p(Gt, { class: "block h-8 w-auto" }),
                                    i(
                                        "p",
                                        Qr,
                                        x(t.$page.props.app.setting.name),
                                        1
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ["href"]
                        ),
                    ]),
                    i("ol", Jr, [
                        i("li", null, [
                            i("span", Zr, x(t.lang().label.main_menu), 1),
                        ]),
                        i(
                            "li",
                            {
                                class: Y([
                                    t.route().current("dashboard")
                                        ? "border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30"
                                        : "",
                                    "hover:bg-white/20 rounded dark:hover:bg-primary/30",
                                ]),
                            },
                            [
                                p(
                                    $(re),
                                    {
                                        href: t.route("dashboard"),
                                        class: "flex items-center py-1.5 px-3 space-x-2",
                                    },
                                    {
                                        default: _(() => [
                                            p($(Rt), { class: "w-5 h-auto" }),
                                            i(
                                                "span",
                                                null,
                                                x(t.lang().label.dashboard),
                                                1
                                            ),
                                        ]),
                                        _: 1,
                                    },
                                    8,
                                    ["href"]
                                ),
                            ],
                            2
                        ),
                        W(
                            i(
                                "li",
                                null,
                                [i("span", el, x(t.lang().label.data), 1)],
                                512
                            ),
                            [
                                [
                                    q,
                                    t.can([
                                        "user read",
                                        "role read",
                                        "permission read",
                                    ]),
                                ],
                            ]
                        ),
                        W(
                            i(
                                "li",
                                {
                                    class: Y([
                                        t.route().current("user.index")
                                            ? "border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30"
                                            : "",
                                        "hover:bg-white/20 rounded dark:hover:bg-primary/30",
                                    ]),
                                },
                                [
                                    p(
                                        $(re),
                                        {
                                            href: t.route("user.index"),
                                            class: "flex items-center py-1.5 px-3 space-x-2",
                                        },
                                        {
                                            default: _(() => [
                                                p($(Ht), {
                                                    class: "w-5 h-auto",
                                                }),
                                                i(
                                                    "span",
                                                    null,
                                                    x(t.lang().label.user),
                                                    1
                                                ),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ["href"]
                                    ),
                                ],
                                2
                            ),
                            [[q, t.can(["user read"])]]
                        ),
                        W(
                            i(
                                "li",
                                {
                                    class: Y([
                                        t.route().current("role.index")
                                            ? "border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30"
                                            : "",
                                        "hover:bg-white/20 rounded dark:hover:bg-primary/30",
                                    ]),
                                },
                                [
                                    p(
                                        $(re),
                                        {
                                            href: t.route("role.index"),
                                            class: "flex items-center py-1.5 px-3 space-x-2",
                                        },
                                        {
                                            default: _(() => [
                                                p($(Vt), {
                                                    class: "w-5 h-auto",
                                                }),
                                                i(
                                                    "span",
                                                    null,
                                                    x(t.lang().label.role),
                                                    1
                                                ),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ["href"]
                                    ),
                                ],
                                2
                            ),
                            [[q, t.can(["role read"])]]
                        ),
                        W(
                            i(
                                "li",
                                {
                                    class: Y([
                                        t.route().current("permission.index")
                                            ? "border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30"
                                            : "",
                                        "hover:bg-white/20 rounded dark:hover:bg-primary/30",
                                    ]),
                                },
                                [
                                    p(
                                        $(re),
                                        {
                                            href: t.route("permission.index"),
                                            class: "flex items-center py-1.5 px-3 space-x-2",
                                        },
                                        {
                                            default: _(() => [
                                                p($(Ut), {
                                                    class: "w-5 h-auto",
                                                }),
                                                i(
                                                    "span",
                                                    null,
                                                    x(
                                                        t.lang().label
                                                            .permission
                                                    ),
                                                    1
                                                ),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ["href"]
                                    ),
                                ],
                                2
                            ),
                            [[q, t.can(["permission read"])]]
                        ),
                        W(i("li", null, nl, 512), [
                            [q, t.can(["setting read"])],
                        ]),
                        W(
                            i(
                                "li",
                                {
                                    class: Y([
                                        t.route().current("setting.index")
                                            ? "border-l-4 border-white font-semibold bg-white/20 dark:bg-primary/30"
                                            : "",
                                        "hover:bg-white/20 rounded dark:hover:bg-primary/30",
                                    ]),
                                },
                                [
                                    p(
                                        $(re),
                                        {
                                            href: t.route("setting.index"),
                                            class: "flex items-center py-1.5 px-3 space-x-2",
                                        },
                                        {
                                            default: _(() => [
                                                p($(Wt), {
                                                    class: "w-5 h-auto",
                                                }),
                                                i(
                                                    "span",
                                                    null,
                                                    x(t.lang().label.setting),
                                                    1
                                                ),
                                            ]),
                                            _: 1,
                                        },
                                        8,
                                        ["href"]
                                    ),
                                ],
                                2
                            ),
                            [[q, t.can(["setting read"])]]
                        ),
                    ]),
                ])
            );
        },
    },
    rl = { class: "hidden md:flex" },
    ll = {
        class: "fixed md:flex flex-col h-screen overflow-hidden w-64 bg-white dark:bg-slate-900 dark:border-r dark:border-slate-700",
    },
    al = {
        class: "flex-1 h-screen overflow-y-auto scrollbar-sidebar bg-primary dark:bg-primary/60",
    },
    ol = {
        class: "flex flex-col relative z-10 w-64 bg-white dark:bg-slate-900 dark:border-r dark:border-slate-700",
    },
    sl = { class: "flex flex-col relative h-screen min-h-screen" },
    il = {
        class: "overflow-y-auto flex-1 scrollbar-sidebar bg-primary dark:bg-primary/60",
    },
    ul = {
        __name: "Sidebar",
        props: { open: Boolean },
        emits: ["close"],
        setup(e, { emit: t }) {
            return (n, l) => (
                E(),
                S(
                    ue,
                    null,
                    [
                        i("div", rl, [i("aside", ll, [i("div", al, [p(rt)])])]),
                        p(
                            $($t),
                            { show: e.open },
                            {
                                default: _(() => [
                                    p(
                                        $(Rr),
                                        {
                                            as: "div",
                                            onClose:
                                                l[0] ||
                                                (l[0] = (r) => t("close")),
                                            class: "fixed inset-0 z-10 flex md:hidden",
                                        },
                                        {
                                            default: _(() => [
                                                p(
                                                    $(ze),
                                                    {
                                                        enter: "transition ease-in-out duration-200 transform",
                                                        "enter-from":
                                                            "-translate-x-full",
                                                        "enter-to":
                                                            "translate-x-0",
                                                        leave: "transition ease-in-out duration-200 transform",
                                                        "leave-from":
                                                            "translate-x-0",
                                                        "leave-to":
                                                            "-translate-x-full",
                                                        as: "template",
                                                    },
                                                    {
                                                        default: _(() => [
                                                            i("aside", ol, [
                                                                i("div", sl, [
                                                                    i(
                                                                        "div",
                                                                        il,
                                                                        [p(rt)]
                                                                    ),
                                                                ]),
                                                            ]),
                                                        ]),
                                                        _: 1,
                                                    }
                                                ),
                                                p(
                                                    $(ze),
                                                    {
                                                        enter: "transition-opacity ease-linear duration-200",
                                                        "enter-from":
                                                            "opacity-0",
                                                        "enter-to":
                                                            "opacity-100",
                                                        leave: "transition-opacity ease-linear duration-200",
                                                        "leave-from":
                                                            "opacity-100",
                                                        "leave-to": "opacity-0",
                                                        as: "template",
                                                    },
                                                    {
                                                        default: _(() => [
                                                            p($(Hr), {
                                                                class: "fixed inset-0 bg-slate-500 dark:bg-slate-800 opacity-75 md:hidden",
                                                            }),
                                                        ]),
                                                        _: 1,
                                                    }
                                                ),
                                            ]),
                                            _: 1,
                                        }
                                    ),
                                ]),
                                _: 1,
                            },
                            8,
                            ["show"]
                        ),
                    ],
                    64
                )
            );
        },
    },
    dl = {
        class: "flex relative w-full min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-hidden",
    },
    cl = { class: "pl-0 md:pl-64 w-full" },
    fl = { class: "pt-16" },
    yl = {
        __name: "AppLayout",
        props: { title: String },
        setup(e) {
            const t = g(!1);
            return (n, l) => (
                E(),
                S("div", null, [
                    p($(At), { title: e.title }, null, 8, ["title"]),
                    p(fn, { flash: n.$page.props.flash }, null, 8, ["flash"]),
                    i("div", dl, [
                        p(
                            ul,
                            {
                                open: t.value,
                                onClose: l[0] || (l[0] = (r) => (t.value = !1)),
                            },
                            null,
                            8,
                            ["open"]
                        ),
                        i("div", cl, [
                            p(
                                Gn,
                                {
                                    sidebarShow: t.value,
                                    onOpen:
                                        l[1] || (l[1] = (r) => (t.value = !0)),
                                },
                                {
                                    default: _(() => [
                                        G(n.$slots, "title"),
                                        G(n.$slots, "breadcrumb"),
                                    ]),
                                    _: 3,
                                },
                                8,
                                ["sidebarShow"]
                            ),
                            i("main", fl, [G(n.$slots, "default")]),
                            p(nr),
                        ]),
                    ]),
                ])
            );
        },
    };
export { yl as _ };
