import {
    p as $,
    q as I,
    O as S,
    c as C,
    w as i,
    o as u,
    a as e,
    t as n,
    b as o,
    s as p,
    x as d,
    u as f,
    d as g,
    g as O,
    F as V,
    y as j,
} from "./app-da72e2c5.js";
import { _ as B } from "./AppLayout-8ade04b8.js";
import { p as P, _ as U, T as D } from "./TablePagination-61fa65e8.js";
import { _ as N } from "./Breadcrumb-cee7ec99.js";
import { _ as A } from "./SelectInput-9d8ca249.js";
import { _ as E } from "./TextInput-d3c8e09a.js";
import F from "./Create-731ff853.js";
import T from "./Edit-7a345087.js";
import q from "./Delete-be987981.js";
import { C as h } from "./index-075021ca.js";
import { _ as G } from "./Checkbox-ec48beca.js";
import L from "./DeleteBulk-36b537d0.js";
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
const M = { class: "py-6" },
    z = { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4" },
    H = {
        class: "bg-white dark:bg-slate-800 overflow-hidden shadow-md sm:rounded",
    },
    J = { class: "flex rounded overflow-hidden" },
    K = { class: "flex justify-end items-center gap-2" },
    Q = { class: "flex space-x-2" },
    R = { class: "px-2 py-4 text-center" },
    W = e("th", { class: "px-2 py-4 text-center" }, "#", -1),
    X = { class: "flex justify-between items-center" },
    Y = { class: "flex justify-between items-center" },
    Z = e("span", null, "Guard", -1),
    ee = { class: "flex justify-between items-center" },
    se = e("th", { class: "px-2 py-4 text-center sr-only" }, "Action", -1),
    te = { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" },
    ae = ["value"],
    re = { class: "whitespace-nowrap py-4 px-2 sm:py-3 text-center" },
    le = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    oe = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    ie = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    ne = { class: "whitespace-nowrap py-4 px-2 sm:py-3" },
    pe = { class: "flex w-fit rounded overflow-hidden" },
    Ue = {
        __name: "Index",
        props: {
            title: String,
            filters: Object,
            permissions: Object,
            breadcrumbs: Object,
            perPage: Number,
        },
        setup(_) {
            const l = _,
                { _: b, debounce: w, pickBy: x } = P,
                s = $({
                    params: {
                        search: l.filters.search,
                        field: l.filters.field,
                        order: l.filters.order,
                        perPage: l.perPage,
                    },
                    selectedId: [],
                    multipleSelect: !1,
                    permission: null,
                }),
                c = (r) => {
                    (s.params.field = r),
                        (s.params.order =
                            s.params.order === "asc" ? "desc" : "asc");
                };
            I(
                () => b.cloneDeep(s.params),
                w(() => {
                    let r = x(s.params);
                    S.get(route("permission.index"), r, {
                        replace: !0,
                        preserveState: !0,
                        preserveScroll: !0,
                    });
                }, 150)
            );
            const k = (r) => {
                    var t;
                    r.target.checked === !1
                        ? (s.selectedId = [])
                        : (t = l.permissions) == null ||
                          t.data.forEach((a) => {
                              s.selectedId.push(a.id);
                          });
                },
                v = () => {
                    var r;
                    ((r = l.permissions) == null ? void 0 : r.data.length) ==
                    s.selectedId.length
                        ? (s.multipleSelect = !0)
                        : (s.multipleSelect = !1);
                };
            return (r, t) => (
                u(),
                C(
                    B,
                    { title: l.title },
                    {
                        title: i(() => [e("span", null, n(l.title), 1)]),
                        breadcrumb: i(() => [o(N)]),
                        default: i(() => [
                            e("div", M, [
                                e("div", z, [
                                    e("div", H, [
                                        o(D, null, {
                                            "table-action": i(() => [
                                                e("div", J, [
                                                    p(
                                                        o(
                                                            F,
                                                            { title: l.title },
                                                            null,
                                                            8,
                                                            ["title"]
                                                        ),
                                                        [
                                                            [
                                                                d,
                                                                r.can([
                                                                    "create permission",
                                                                ]),
                                                            ],
                                                        ]
                                                    ),
                                                    p(
                                                        o(
                                                            L,
                                                            {
                                                                selectedId:
                                                                    s.selectedId,
                                                                title: l.title,
                                                                onClose:
                                                                    t[0] ||
                                                                    (t[0] = (
                                                                        a
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
                                                                d,
                                                                s.selectedId
                                                                    .length !=
                                                                    0 &&
                                                                    r.can([
                                                                        "delete permission",
                                                                    ]),
                                                            ],
                                                        ]
                                                    ),
                                                ]),
                                                e("div", K, [
                                                    e("div", Q, [
                                                        o(
                                                            A,
                                                            {
                                                                class: "h-9 text-sm",
                                                                modelValue:
                                                                    s.params
                                                                        .perPage,
                                                                "onUpdate:modelValue":
                                                                    t[1] ||
                                                                    (t[1] = (
                                                                        a
                                                                    ) =>
                                                                        (s.params.perPage =
                                                                            a)),
                                                                dataSet:
                                                                    r.$page
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
                                                        E,
                                                        {
                                                            modelValue:
                                                                s.params.search,
                                                            "onUpdate:modelValue":
                                                                t[2] ||
                                                                (t[2] = (a) =>
                                                                    (s.params.search =
                                                                        a)),
                                                            type: "text",
                                                            class: "block h-9",
                                                            placeholder:
                                                                r.lang()
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
                                            "table-head": i(() => [
                                                e("tr", null, [
                                                    e("th", R, [
                                                        o(
                                                            G,
                                                            {
                                                                checked:
                                                                    s.multipleSelect,
                                                                "onUpdate:checked":
                                                                    t[3] ||
                                                                    (t[3] = (
                                                                        a
                                                                    ) =>
                                                                        (s.multipleSelect =
                                                                            a)),
                                                                onChange: k,
                                                            },
                                                            null,
                                                            8,
                                                            ["checked"]
                                                        ),
                                                    ]),
                                                    W,
                                                    e(
                                                        "th",
                                                        {
                                                            class: "px-2 py-4 cursor-pointer",
                                                            onClick:
                                                                t[4] ||
                                                                (t[4] = (a) =>
                                                                    c("name")),
                                                        },
                                                        [
                                                            e("div", X, [
                                                                e(
                                                                    "span",
                                                                    null,
                                                                    n(
                                                                        r.lang()
                                                                            .label
                                                                            .name
                                                                    ),
                                                                    1
                                                                ),
                                                                o(f(h), {
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
                                                                t[5] ||
                                                                (t[5] = (a) =>
                                                                    c(
                                                                        "guard_name"
                                                                    )),
                                                        },
                                                        [
                                                            e("div", Y, [
                                                                Z,
                                                                o(f(h), {
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
                                                                t[6] ||
                                                                (t[6] = (a) =>
                                                                    c(
                                                                        "created_at"
                                                                    )),
                                                        },
                                                        [
                                                            e("div", ee, [
                                                                e(
                                                                    "span",
                                                                    null,
                                                                    n(
                                                                        r.lang()
                                                                            .label
                                                                            .created
                                                                    ),
                                                                    1
                                                                ),
                                                                o(f(h), {
                                                                    class: "w-4 h-4",
                                                                }),
                                                            ]),
                                                        ]
                                                    ),
                                                    se,
                                                ]),
                                            ]),
                                            "table-body": i(() => [
                                                (u(!0),
                                                g(
                                                    V,
                                                    null,
                                                    O(
                                                        _.permissions.data,
                                                        (a, y) => (
                                                            u(),
                                                            g(
                                                                "tr",
                                                                {
                                                                    key: y,
                                                                    class: "border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20",
                                                                },
                                                                [
                                                                    e(
                                                                        "td",
                                                                        te,
                                                                        [
                                                                            p(
                                                                                e(
                                                                                    "input",
                                                                                    {
                                                                                        class: "rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",
                                                                                        type: "checkbox",
                                                                                        onChange:
                                                                                            v,
                                                                                        value: a.id,
                                                                                        "onUpdate:modelValue":
                                                                                            t[7] ||
                                                                                            (t[7] =
                                                                                                (
                                                                                                    m
                                                                                                ) =>
                                                                                                    (s.selectedId =
                                                                                                        m)),
                                                                                    },
                                                                                    null,
                                                                                    40,
                                                                                    ae
                                                                                ),
                                                                                [
                                                                                    [
                                                                                        j,
                                                                                        s.selectedId,
                                                                                    ],
                                                                                ]
                                                                            ),
                                                                        ]
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        re,
                                                                        n(++y),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        le,
                                                                        n(
                                                                            a.name
                                                                        ),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        oe,
                                                                        n(
                                                                            a.guard_name
                                                                        ),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        ie,
                                                                        n(
                                                                            a.created_at
                                                                        ),
                                                                        1
                                                                    ),
                                                                    e(
                                                                        "td",
                                                                        ne,
                                                                        [
                                                                            e(
                                                                                "div",
                                                                                pe,
                                                                                [
                                                                                    p(
                                                                                        o(
                                                                                            T,
                                                                                            {
                                                                                                title: l.title,
                                                                                                permission:
                                                                                                    s.permission,
                                                                                                onOpen: (
                                                                                                    m
                                                                                                ) =>
                                                                                                    (s.permission =
                                                                                                        a),
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            [
                                                                                                "title",
                                                                                                "permission",
                                                                                                "onOpen",
                                                                                            ]
                                                                                        ),
                                                                                        [
                                                                                            [
                                                                                                d,
                                                                                                r.can(
                                                                                                    [
                                                                                                        "update permission",
                                                                                                    ]
                                                                                                ),
                                                                                            ],
                                                                                        ]
                                                                                    ),
                                                                                    p(
                                                                                        o(
                                                                                            q,
                                                                                            {
                                                                                                title: l.title,
                                                                                                permission:
                                                                                                    s.permission,
                                                                                                onOpen: (
                                                                                                    m
                                                                                                ) =>
                                                                                                    (s.permission =
                                                                                                        a),
                                                                                            },
                                                                                            null,
                                                                                            8,
                                                                                            [
                                                                                                "title",
                                                                                                "permission",
                                                                                                "onOpen",
                                                                                            ]
                                                                                        ),
                                                                                        [
                                                                                            [
                                                                                                d,
                                                                                                r.can(
                                                                                                    [
                                                                                                        "delete permission",
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
                                            "table-pagination": i(() => [
                                                o(
                                                    U,
                                                    {
                                                        links: l.permissions,
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
export { Ue as default };
