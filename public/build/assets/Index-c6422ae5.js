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
} from "./app-3090723e.js";
import { _ as B } from "./AppLayout-2bfc1e1e.js";
import { p as U, _ as D, T as N } from "./TablePagination-c661b029.js";
import { _ as A } from "./Breadcrumb-a3a59f77.js";
import { _ as E } from "./SelectInput-280ac7a8.js";
import { _ as F } from "./TextInput-996d0443.js";
import T from "./Create-5f6344cb.js";
import q from "./Edit-31e1a5e2.js";
import G from "./Delete-bff4ecca.js";
import k from "./Permission-5a239ba0.js";
import { C as y } from "./index-edb1a843.js";
import { _ as L } from "./Checkbox-06f3fb41.js";
import M from "./DeleteBulk-7d0085cd.js";
import "./_plugin-vue_export-helper-c27b6911.js";
import "./SwitchLocale-1a49d4b0.js";
import "./ApplicationLogo-a2a7c677.js";
import "./DialogModal-3b600741.js";
import "./Modal-27113ebd.js";
import "./InputLabel-4e68c593.js";
import "./PrimaryButton-8e2ff8b6.js";
import "./SecondaryButton-1cbb1913.js";
import "./ActionButton-0bf3748b.js";
import "./ConfirmationModal-07a47079.js";
import "./DangerButton-641f8c18.js";
const z = { class: "py-6" },
    H = { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4" },
    J = {
        class: "bg-white dark:bg-slate-800 overflow-hidden shadow-md sm:rounded",
    },
    K = { class: "flex shrink-0 rounded overflow-hidden" },
    Q = { class: "flex justify-end items-center gap-2" },
    R = { class: "flex space-x-2" },
    W = { class: "px-2 py-4 text-center" },
    X = e("th", { class: "px-2 py-4 text-center" }, "#", -1),
    Y = { class: "flex justify-between items-center" },
    Z = { class: "flex justify-between items-center" },
    ee = e("span", null, "Guard", -1),
    se = { class: "px-2 py-4t text-left" },
    te = { class: "flex justify-between items-center" },
    ae = e("th", { class: "px-2 py-4 text-center sr-only" }, " Action ", -1),
    le = { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" },
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
                { _: w, debounce: x, pickBy: v } = U,
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
                u = (a) => {
                    (s.params.field = a),
                        (s.params.order =
                            s.params.order === "asc" ? "desc" : "asc");
                };
            C(
                () => w.cloneDeep(s.params),
                x(() => {
                    let a = v(s.params);
                    O.get(route("role.index"), a, {
                        replace: !0,
                        preserveState: !0,
                        preserveScroll: !0,
                    });
                }, 150)
            );
            const $ = (a) => {
                    var l;
                    a.target.checked === !1
                        ? (s.selectedId = [])
                        : (l = r.roles) == null ||
                          l.data.forEach((t) => {
                              s.selectedId.push(t.id);
                          });
                },
                I = () => {
                    var a;
                    ((a = r.roles) == null ? void 0 : a.data.length) ==
                    s.selectedId.length
                        ? (s.multipleSelect = !0)
                        : (s.multipleSelect = !1);
                };
            return (a, l) => (
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
                                                                a.can([
                                                                    "role create",
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
                                                                    l[0] ||
                                                                    (l[0] = (
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
                                                                    a.can([
                                                                        "role delete",
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
                                                                    l[1] ||
                                                                    (l[1] = (
                                                                        t
                                                                    ) =>
                                                                        (s.params.perPage =
                                                                            t)),
                                                                dataSet:
                                                                    a.$page
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
                                                                l[2] ||
                                                                (l[2] = (t) =>
                                                                    (s.params.search =
                                                                        t)),
                                                            type: "text",
                                                            class: "block h-9",
                                                            placeholder:
                                                                a.lang()
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
                                                                    l[3] ||
                                                                    (l[3] = (
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
                                                                l[4] ||
                                                                (l[4] = (t) =>
                                                                    u("name")),
                                                        },
                                                        [
                                                            e("div", Y, [
                                                                e(
                                                                    "span",
                                                                    null,
                                                                    i(
                                                                        a.lang()
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
                                                                l[5] ||
                                                                (l[5] = (t) =>
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
                                                            a.lang().label
                                                                .permission
                                                        ),
                                                        1
                                                    ),
                                                    e(
                                                        "th",
                                                        {
                                                            class: "px-2 py-4 cursor-pointer",
                                                            onClick:
                                                                l[6] ||
                                                                (l[6] = (t) =>
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
                                                                        a.lang()
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
                                                    ae,
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
                                                                        le,
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
                                                                                            l[7] ||
                                                                                            (l[7] =
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
                                                                                                    k,
                                                                                                    {
                                                                                                        key: 0,
                                                                                                        permissions:
                                                                                                            t.permissions,
                                                                                                        title: a.lang()
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
                                                                                                    k,
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
                                                                                          a.lang()
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
                                                                                                a.can(
                                                                                                    [
                                                                                                        "role update",
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
                                                                                                a.can(
                                                                                                    [
                                                                                                        "role delete",
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
