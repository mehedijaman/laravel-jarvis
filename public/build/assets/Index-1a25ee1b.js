import {
    p as S,
    q as C,
    O,
    c as f,
    w as n,
    o as p,
    a as e,
    t as i,
    b as o,
    s as d,
    x as c,
    u as _,
    d as m,
    g as V,
    F as j,
    y as P,
} from "./app-da72e2c5.js";
import { _ as B } from "./AppLayout-8ade04b8.js";
import { p as U, _ as D, T as N } from "./TablePagination-61fa65e8.js";
import { _ as A } from "./Breadcrumb-cee7ec99.js";
import { _ as E } from "./SelectInput-9d8ca249.js";
import { _ as F } from "./TextInput-d3c8e09a.js";
import T from "./Create-1e661b36.js";
import q from "./Edit-b71224cc.js";
import G from "./Delete-a8152001.js";
import w from "./Permission-590dd45d.js";
import { C as y } from "./index-075021ca.js";
import { _ as L } from "./Checkbox-ec48beca.js";
import M from "./DeleteBulk-7e106942.js";
import "./_plugin-vue_export-helper-c27b6911.js";
import "./SwitchLocale-5c87b8c4.js";
import "./ApplicationLogo-be8e7620.js";
import "./DialogModal-a9296744.js";
import "./Modal-ab842a41.js";
import "./InputLabel-17c69ed5.js";
import "./PrimaryButton-d514179f.js";
import "./SecondaryButton-d412c3be.js";
import "./ActionButton-6c6c1abb.js";
import "./ConfirmationModal-c92abf05.js";
import "./DangerButton-05b0ea1e.js";
const z = { class: "py-6" },
    H = { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4" },
    J = {
        class: "bg-white dark:bg-slate-800 overflow-hidden shadow-md sm:rounded",
    },
    K = { class: "flex rounded overflow-hidden" },
    Q = { class: "flex justify-end items-center gap-2" },
    R = { class: "flex space-x-2" },
    W = { class: "px-2 py-4 text-center" },
    X = e("th", { class: "px-2 py-4 text-center" }, "#", -1),
    Y = { class: "flex justify-between items-center" },
    Z = { class: "flex justify-between items-center" },
    ee = e("span", null, "Guard", -1),
    se = { class: "px-2 py-4t text-left" },
    te = { class: "flex justify-between items-center" },
    le = e("th", { class: "px-2 py-4 text-center sr-only" }, "Action", -1),
    ae = { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" },
    re = ["value"],
    oe = { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" },
    ie = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    ne = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    pe = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    de = { key: 0 },
    ce = { key: 1 },
    me = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    ue = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    he = { class: "flex w-fit rounded overflow-hidden" },
    Te = {
        __name: "Index",
        props: {
            title: String,
            filters: Object,
            roles: Object,
            permissions: Object,
            breadcrumbs: Object,
            perPage: Number,
        },
        setup(g) {
            const r = g,
                { _: k, debounce: x, pickBy: v } = U,
                s = S({
                    params: {
                        search: r.filters.search,
                        field: r.filters.field,
                        order: r.filters.order,
                        perPage: r.perPage,
                    },
                    selectedId: [],
                    multipleSelect: !1,
                    role: null,
                }),
                u = (l) => {
                    (s.params.field = l),
                        (s.params.order =
                            s.params.order === "asc" ? "desc" : "asc");
                };
            C(
                () => k.cloneDeep(s.params),
                x(() => {
                    let l = v(s.params);
                    O.get(route("role.index"), l, {
                        replace: !0,
                        preserveState: !0,
                        preserveScroll: !0,
                    });
                }, 150)
            );
            const $ = (l) => {
                    var a;
                    l.target.checked === !1
                        ? (s.selectedId = [])
                        : (a = r.roles) == null ||
                          a.data.forEach((t) => {
                              s.selectedId.push(t.id);
                          });
                },
                I = () => {
                    var l;
                    ((l = r.roles) == null ? void 0 : l.data.length) ==
                    s.selectedId.length
                        ? (s.multipleSelect = !0)
                        : (s.multipleSelect = !1);
                };
            return (l, a) => (
                p(),
                f(
                    B,
                    { title: r.title },
                    {
                        title: n(() => [e("span", null, i(r.title), 1)]),
                        breadcrumb: n(() => [o(A)]),
                        default: n(() => [
                            e("div", z, [
                                e("div", H, [
                                    e("div", J, [
                                        o(N, null, {
                                            "table-action": n(() => [
                                                e("div", K, [
                                                    d(
                                                        o(
                                                            T,
                                                            {
                                                                title: r.title,
                                                                permissions:
                                                                    r.permissions,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                                "title",
                                                                "permissions",
                                                            ]
                                                        ),
                                                        [
                                                            [
                                                                c,
                                                                l.can([
                                                                    "create role",
                                                                ]),
                                                            ],
                                                        ]
                                                    ),
                                                    d(
                                                        o(
                                                            M,
                                                            {
                                                                selectedId:
                                                                    s.selectedId,
                                                                title: r.title,
                                                                onClose:
                                                                    a[0] ||
                                                                    (a[0] = (
                                                                        t
                                                                    ) => (
                                                                        (s.selectedId =
                                                                            []),
                                                                        (s.multipleSelect =
                                                                            !1)
                                                                    )),
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                                "selectedId",
                                                                "title",
                                                            ]
                                                        ),
                                                        [
                                                            [
                                                                c,
                                                                s.selectedId
                                                                    .length !=
                                                                    0 &&
                                                                    l.can([
                                                                        "delete role",
                                                                    ]),
                                                            ],
                                                        ]
                                                    ),
                                                ]),
                                                e("div", Q, [
                                                    e("div", R, [
                                                        o(
                                                            E,
                                                            {
                                                                class: "h-9 text-sm",
                                                                modelValue:
                                                                    s.params
                                                                        .perPage,
                                                                "onUpdate:modelValue":
                                                                    a[1] ||
                                                                    (a[1] = (
                                                                        t
                                                                    ) =>
                                                                        (s.params.perPage =
                                                                            t)),
                                                                dataSet:
                                                                    l.$page
                                                                        .props
                                                                        .app
                                                                        .perpage,
                                                            },
                                                            null,
                                                            8,
                                                            [
                                                                "modelValue",
                                                                "dataSet",
                                                            ]
                                                        ),
                                                    ]),
                                                    o(
                                                        F,
                                                        {
                                                            modelValue:
                                                                s.params.search,
                                                            "onUpdate:modelValue":
                                                                a[2] ||
                                                                (a[2] = (t) =>
                                                                    (s.params.search =
                                                                        t)),
                                                            type: "text",
                                                            class: "block h-9",
                                                            placeholder:
                                                                l.lang()
                                                                    .placeholder
                                                                    .search,
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                            "modelValue",
                                                            "placeholder",
                                                        ]
                                                    ),
                                                ]),
                                            ]),
                                            "table-head": n(() => [
                                                e("tr", null, [
                                                    e("th", W, [
                                                        o(
                                                            L,
                                                            {
                                                                checked:
                                                                    s.multipleSelect,
                                                                "onUpdate:checked":
                                                                    a[3] ||
                                                                    (a[3] = (
                                                                        t
                                                                    ) =>
                                                                        (s.multipleSelect =
                                                                            t)),
                                                                onChange: $,
                                                            },
                                                            null,
                                                            8,
                                                            ["checked"]
                                                        ),
                                                    ]),
                                                    X,
                                                    e(
                                                        "th",
                                                        {
                                                            class: "px-2 py-4 cursor-pointer",
                                                            onClick:
                                                                a[4] ||
                                                                (a[4] = (t) =>
                                                                    u("name")),
                                                        },
                                                        [
                                                            e("div", Y, [
                                                                e(
                                                                    "span",
                                                                    null,
                                                                    i(
                                                                        l.lang()
                                                                            .label
                                                                            .name
                                                                    ),
                                                                    1
                                                                ),
                                                                o(_(y), {
                                                                    class: "w-4 h-4",
                                                                }),
                                                            ]),
                                                        ]
                                                    ),
                                                    e(
                                                        "th",
                                                        {
                                                            class: "px-2 py-4 cursor-pointer",
                                                            onClick:
                                                                a[5] ||
                                                                (a[5] = (t) =>
                                                                    u(
                                                                        "guard_name"
                                                                    )),
                                                        },
                                                        [
                                                            e("div", Z, [
                                                                ee,
                                                                o(_(y), {
                                                                    class: "w-4 h-4",
                                                                }),
                                                            ]),
                                                        ]
                                                    ),
                                                    e(
                                                        "th",
                                                        se,
                                                        i(
                                                            l.lang().label
                                                                .permission
                                                        ),
                                                        1
                                                    ),
                                                    e(
                                                        "th",
                                                        {
                                                            class: "px-2 py-4 cursor-pointer",
                                                            onClick:
                                                                a[6] ||
                                                                (a[6] = (t) =>
                                                                    u(
                                                                        "created_at"
                                                                    )),
                                                        },
                                                        [
                                                            e("div", te, [
                                                                e(
                                                                    "span",
                                                                    null,
                                                                    i(
                                                                        l.lang()
                                                                            .label
                                                                            .created
                                                                    ),
                                                                    1
                                                                ),
                                                                o(_(y), {
                                                                    class: "w-4 h-4",
                                                                }),
                                                            ]),
                                                        ]
                                                    ),
                                                    le,
                                                ]),
                                            ]),
                                            "table-body": n(() => [
                                                (p(!0),
                                                m(
                                                    j,
                                                    null,
                                                    V(
                                                        g.roles.data,
                                                        (t, b) => (
                                                            p(),
                                                            m(
                                                                "tr",
                                                                {
                                                                    key: b,
                                                                    class: "border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20",
                                                                },
                                                                [
                                                                    e(
                                                                        "td",
                                                                        ae,
                                                                        [
                                                                            d(
                                                                                e(
                                                                                    "input",
                                                                                    {
                                                                                        class: "rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",
                                                                                        type: "checkbox",
                                                                                        onChange:
                                                                                            I,
                                                                                        value: t.id,
                                                                                        "onUpdate:modelValue":
                                                                                            a[7] ||
                                                                                            (a[7] =
                                                                                                (
                                                                                                    h
                                                                                                ) =>
                                                                                                    (s.selectedId =
                                                                                                        h)),
                                                                                    },
                                                                                    null,
                                                                                    40,
                                                                                    re
                                                                                ),
                                                                                [
                                                                                    [
                                                                                        P,
                                                                                        s.selectedId,
                                                                                    ],
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        oe,
                                                                        i(++b),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        ie,
                                                                        i(
                                                                            t.name
                                                                        ),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        ne,
                                                                        i(
                                                                            t.guard_name
                                                                        ),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        pe,
                                                                        [
                                                                            t
                                                                                .permissions
                                                                                .length !=
                                                                            0
                                                                                ? (p(),
                                                                                  m(
                                                                                      "div",
                                                                                      de,
                                                                                      [
                                                                                          t
                                                                                              .permissions
                                                                                              .length ==
                                                                                          r
                                                                                              .permissions
                                                                                              .length
                                                                                              ? (p(),
                                                                                                f(
                                                                                                    w,
                                                                                                    {
                                                                                                        key: 0,
                                                                                                        permissions:
                                                                                                            t.permissions,
                                                                                                        title: l.lang()
                                                                                                            .label
                                                                                                            .all_permission,
                                                                                                        caption:
                                                                                                            t.name,
                                                                                                    },
                                                                                                    null,
                                                                                                    8,
                                                                                                    [
                                                                                                        "permissions",
                                                                                                        "title",
                                                                                                        "caption",
                                                                                                    ]
                                                                                                ))
                                                                                              : (p(),
                                                                                                f(
                                                                                                    w,
                                                                                                    {
                                                                                                        key: 1,
                                                                                                        permissions:
                                                                                                            t.permissions,
                                                                                                        title:
                                                                                                            t
                                                                                                                .permissions
                                                                                                                .length +
                                                                                                            " Permissions",
                                                                                                        caption:
                                                                                                            t.name,
                                                                                                    },
                                                                                                    null,
                                                                                                    8,
                                                                                                    [
                                                                                                        "permissions",
                                                                                                        "title",
                                                                                                        "caption",
                                                                                                    ]
                                                                                                )),
                                                                                      ]
                                                                                  ))
                                                                                : (p(),
                                                                                  m(
                                                                                      "p",
                                                                                      ce,
                                                                                      i(
                                                                                          l.lang()
                                                                                              .label
                                                                                              .no_permission
                                                                                      ),
                                                                                      1
                                                                                  )),
                                                                        ]
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        me,
                                                                        i(
                                                                            t.created_at
                                                                        ),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        ue,
                                                                        [
                                                                            e(
                                                                                "div",
                                                                                he,
                                                                                [
                                                                                    d(
                                                                                        o(
                                                                                            q,
                                                                                            {
                                                                                                title: r.title,
                                                                                                role: s.role,
                                                                                                onOpen: (
                                                                                                    h
                                                                                                ) =>
                                                                                                    (s.role =
                                                                                                        t),
                                                                                                permissions:
                                                                                                    r.permissions,
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            [
                                                                                                "title",
                                                                                                "role",
                                                                                                "onOpen",
                                                                                                "permissions",
                                                                                            ]
                                                                                        ),
                                                                                        [
                                                                                            [
                                                                                                c,
                                                                                                l.can(
                                                                                                    [
                                                                                                        "update role",
                                                                                                    ]
                                                                                                ),
                                                                                            ],
                                                                                        ]
                                                                                    ),
                                                                                    d(
                                                                                        o(
                                                                                            G,
                                                                                            {
                                                                                                title: r.title,
                                                                                                role: s.role,
                                                                                                onOpen: (
                                                                                                    h
                                                                                                ) =>
                                                                                                    (s.role =
                                                                                                        t),
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            [
                                                                                                "title",
                                                                                                "role",
                                                                                                "onOpen",
                                                                                            ]
                                                                                        ),
                                                                                        [
                                                                                            [
                                                                                                c,
                                                                                                l.can(
                                                                                                    [
                                                                                                        "delete role",
                                                                                                    ]
                                                                                                ),
                                                                                            ],
                                                                                        ]
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                ]
                                                            )
                                                        )
                                                    ),
                                                    128
                                                )),
                                            ]),
                                            "table-pagination": n(() => [
                                                o(
                                                    D,
                                                    {
                                                        links: r.roles,
                                                        filters: s.params,
                                                    },
                                                    null,
                                                    8,
                                                    ["links", "filters"]
                                                ),
                                            ]),
                                            _: 1,
                                        }),
                                    ]),
                                ]),
                            ]),
                        ]),
                        _: 1,
                    },
                    8,
                    ["title"]
                )
            );
        },
    };
export { Te as default };
