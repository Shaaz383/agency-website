(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/SetJets/agency/src/components/HeroOrb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroOrb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroOrb() {
    _s();
    const hostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroOrb.useEffect": ()=>{
            if (!hostRef.current) return;
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, 1, 0.1, 100);
            camera.position.z = 4.2;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);
            hostRef.current.appendChild(renderer.domElement);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1.6, 48, 48);
            const material = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x111111,
                wireframe: true
            });
            const orb = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
            scene.add(orb);
            const ambient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.4);
            scene.add(ambient);
            let frameId = 0;
            const render = {
                "HeroOrb.useEffect.render": ()=>{
                    if (!prefersReduced) {
                        orb.rotation.y += 0.0025;
                        orb.rotation.x += 0.001;
                    }
                    renderer.render(scene, camera);
                    frameId = requestAnimationFrame(render);
                }
            }["HeroOrb.useEffect.render"];
            const handleResize = {
                "HeroOrb.useEffect.handleResize": ()=>{
                    if (!hostRef.current) return;
                    const { width, height } = hostRef.current.getBoundingClientRect();
                    renderer.setSize(width, height);
                    camera.aspect = width / height || 1;
                    camera.updateProjectionMatrix();
                }
            }["HeroOrb.useEffect.handleResize"];
            handleResize();
            frameId = requestAnimationFrame(render);
            window.addEventListener("resize", handleResize);
            return ({
                "HeroOrb.useEffect": ()=>{
                    cancelAnimationFrame(frameId);
                    window.removeEventListener("resize", handleResize);
                    geometry.dispose();
                    material.dispose();
                    renderer.dispose();
                    if (renderer.domElement && renderer.domElement.parentNode) {
                        renderer.domElement.parentNode.removeChild(renderer.domElement);
                    }
                }
            })["HeroOrb.useEffect"];
        }
    }["HeroOrb.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hostRef,
        className: "h-full w-full",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/Desktop/SetJets/agency/src/components/HeroOrb.tsx",
        lineNumber: 74,
        columnNumber: 10
    }, this);
}
_s(HeroOrb, "dNFxtM1c0E9MyhgCkG6AqZWcZlM=");
_c = HeroOrb;
var _c;
__turbopack_context__.k.register(_c, "HeroOrb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/SetJets/agency/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$src$2f$components$2f$HeroOrb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/src/components/HeroOrb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/SetJets/agency/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const industries = [
    "D2C",
    "SaaS",
    "AI-focused",
    "Technology"
];
const heroLines = [
    "Helping our partners",
    "build original brands",
    "that shine."
];
const projects = [
    {
        title: "Northline Commerce",
        category: "E-commerce Rebrand",
        year: "2025",
        image: "/web-design.png",
        href: "#",
        summary: "Reframed a crowded catalog into a sharp storytelling storefront with a 41% uplift in product discovery."
    },
    {
        title: "Pulseboard SaaS",
        category: "Product Experience",
        year: "2025",
        image: "/ui-design.png",
        href: "#",
        summary: "Designed a dashboard system that reduced onboarding friction and turned complex workflows into clear moments."
    },
    {
        title: "Atlas Launch Site",
        category: "Web Development",
        year: "2024",
        image: "/web-development.jpg",
        href: "#",
        summary: "Built a fast, motion-led marketing site with CMS flexibility and production-grade performance from day one."
    },
    {
        title: "Orbit Mobile Suite",
        category: "App Product Design",
        year: "2024",
        image: "/mobile-app-development.png",
        href: "#",
        summary: "Designed and shipped a modular mobile experience with clearer navigation and significantly faster task completion."
    }
];
const testimonials = [
    {
        quote: "SetZet brought clarity to our product story and translated it into a design system that felt premium from day one.",
        name: "Aastha Sharma",
        role: "Head of Marketing, Yastudy"
    },
    {
        quote: "The team thinks in systems, not screens. Every interaction felt intentional and directly improved how users navigate.",
        name: "Rajdeep Singh",
        role: "Founder, Zenfora Pvt Ltd."
    },
    {
        quote: "Fast, sharp, and deeply collaborative. The new site finally matches the quality of our product and sales narrative.",
        name: "Mikael Ross",
        role: "VP Growth, Atlas"
    }
];
const testimonialVideoSrc = "/testimonial-video.mp4";
const testimonialVideoPoster = "/testimonial-video-photo.png";
function Home() {
    _s();
    const [industryIndex, setIndustryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const interval = setInterval({
                "Home.useEffect.interval": ()=>{
                    setIndustryIndex({
                        "Home.useEffect.interval": (prev)=>(prev + 1) % industries.length
                    }["Home.useEffect.interval"]);
                }
            }["Home.useEffect.interval"], 2000);
            return ({
                "Home.useEffect": ()=>clearInterval(interval)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "top",
        className: "noise-bg min-h-screen overflow-x-clip bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 z-30 w-full border-b border-black/5 bg-white/90 text-[10px] uppercase tracking-[0.35em] text-black/60 backdrop-blur sm:text-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black",
                            children: "SetZet"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-8 text-[11px] font-semibold text-black/70 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-black",
                                    href: "#about",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-black",
                                    href: "#services",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-black",
                                    href: "#work",
                                    children: "Work"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-black",
                                    href: "#testimonials",
                                    children: "Testimonials"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition hover:text-black",
                                    href: "#contact",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "hidden rounded-full border border-black/20 px-4 py-2 text-[11px] font-semibold text-black transition hover:border-black md:inline-flex",
                                    href: "#contact",
                                    children: "Start a Project"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "inline-flex h-10 items-center justify-center rounded-full border border-black/20 px-4 text-[11px] font-semibold text-black transition hover:border-black md:hidden",
                                    "aria-expanded": menuOpen,
                                    "aria-controls": "mobile-menu",
                                    onClick: ()=>setMenuOpen((prev)=>!prev),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2",
                                            children: menuOpen ? "Close" : "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative block h-3 w-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-0 top-0 h-[2px] w-full bg-black transition-transform duration-300 ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-0 top-[5px] h-[2px] w-full bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute left-0 top-[10px] h-[2px] w-full bg-black transition-transform duration-300 ${menuOpen ? "-translate-y-[5px] -rotate-45" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-menu",
                className: `fixed right-4 top-16 z-40 w-[min(240px,calc(100vw-2rem))] origin-top-right rounded-2xl border border-black/10 bg-white p-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-black/70 shadow-lg transition-all duration-300 md:hidden ${menuOpen ? "scale-100 translate-y-0 opacity-100" : "pointer-events-none scale-95 -translate-y-2 opacity-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "block py-2 transition hover:text-black",
                        href: "#about",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "block py-2 transition hover:text-black",
                        href: "#services",
                        children: "Services"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "block py-2 transition hover:text-black",
                        href: "#work",
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "block py-2 transition hover:text-black",
                        href: "#testimonials",
                        children: "Testimonials"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "block py-2 transition hover:text-black",
                        href: "#contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative mx-auto flex min-h-[calc(100dvh-4.5rem)] w-full max-w-6xl flex-col justify-center overflow-hidden px-4 pb-12 pt-24 sm:min-h-[calc(100dvh-5rem)] sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pt-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square w-[min(74vw,620px)] opacity-[0.14] sm:w-[min(58vw,620px)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$src$2f$components$2f$HeroOrb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-center text-[clamp(2.1rem,9vw,4.5rem)] font-semibold leading-[0.98] tracking-tight sm:text-left",
                                            children: heroLines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: line
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                }, line, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mx-auto mt-6 max-w-xl text-center text-base leading-7 text-black/70 sm:mx-0 sm:text-left sm:text-lg",
                                            "data-animate": "hero",
                                            children: [
                                                "A strategy-led design studio specializing in laying down the awesome sauce for",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rotate-word font-semibold text-black",
                                                    "aria-live": "polite",
                                                    children: industries[industryIndex]
                                                }, industries[industryIndex], false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 15
                                                }, this),
                                                " ",
                                                "brands."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium sm:justify-start",
                                            "data-animate": "hero",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-full bg-black px-6 py-3 text-white transition hover:bg-black/85",
                                                children: "Start a Project"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 183,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 173,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "relative mx-auto w-full max-w-6xl px-4 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-16 lg:px-10 lg:pb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 -z-10 hidden md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-8 h-40 w-40 rounded-full border border-black/10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-10 left-12 h-24 w-24 rounded-full border border-black/10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 229,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-10 md:grid-cols-[0.55fr_1fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:self-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.35em] text-black/60",
                                                "data-animate": "about",
                                                children: "About SetZet"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                                                "data-animate": "about",
                                                children: [
                                                    "A story-first studio",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 15
                                                    }, this),
                                                    "for brands that need",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 15
                                                    }, this),
                                                    "to be remembered."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 242,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-6 max-w-sm text-base leading-7 text-black/70",
                                                "data-animate": "about",
                                                children: "We don't chase trends. We craft the narrative, then design the interface that makes it feel inevitable."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 overflow-hidden rounded-2xl border border-black/10",
                                                "data-animate": "about",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/about_photo.png",
                                                        alt: "SetZet team",
                                                        fill: true,
                                                        sizes: "(max-width: 768px) 100vw, 40vw",
                                                        className: "object-cover object-top"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 md:space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-black/10 p-6",
                                                "data-animate": "about",
                                                "data-about-row": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Chapter 01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-2xl font-semibold",
                                                        children: "Strategy First"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-base leading-7 text-black/70",
                                                        children: "We clarify your positioning, audience, and goals so the website has a sharp point of view."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-black/10 p-6",
                                                "data-animate": "about",
                                                "data-about-row": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Chapter 02"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-2xl font-semibold",
                                                        children: "Design With Intent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-base leading-7 text-black/70",
                                                        children: "Visual language, hierarchy, and interaction are crafted to earn trust and keep attention."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-black/10 p-6",
                                                "data-animate": "about",
                                                "data-about-row": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Chapter 03"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-2xl font-semibold",
                                                        children: "Build for Momentum"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-base leading-7 text-black/70",
                                                        children: "We ship fast, optimize performance, and set you up for easy updates and growth."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 310,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-black/10 p-6",
                                                "data-animate": "about",
                                                "data-about-row": "true",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Chapter 04"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-2xl font-semibold",
                                                        children: "Refine and Evolve"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-base leading-7 text-black/70",
                                                        children: "We measure, iterate, and improve so your site keeps getting sharper as your product grows."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 234,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 225,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "services",
                        className: "mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.35em] text-black/60",
                                                "data-animate": "services",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                                                "data-animate": "services",
                                                children: [
                                                    "A lean stack for",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 15
                                                    }, this),
                                                    "modern brands."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-xl text-base leading-7 text-black/70 sm:text-lg",
                                        "data-animate": "services",
                                        children: "We build distinctive digital identities that feel effortless to use and hard to forget. Strategy, design, and engineering in one tight loop."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 352,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 divide-y divide-black/10 border-y border-black/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center",
                                        "data-animate": "services",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/ui-design.png",
                                                        alt: "UI UX visual",
                                                        fill: true,
                                                        sizes: "224px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                children: "01"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold",
                                                children: "UI/UX"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 text-base leading-7 text-black/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "User journeys, wireframes, and interfaces that feel effortless and convert with clarity."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Research - Flows - Prototypes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 404,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 399,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 380,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center",
                                        "data-animate": "services",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/web-design.png",
                                                        alt: "Web design visual",
                                                        fill: true,
                                                        sizes: "224px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                children: "02"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 425,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold",
                                                children: "Web Design"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 428,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 text-base leading-7 text-black/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "High-end layouts, typography, and motion that communicate brand and build trust."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Art Direction - UI - Motion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center",
                                        "data-animate": "services",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/web-development.jpg",
                                                        alt: "Web development visual",
                                                        fill: true,
                                                        sizes: "224px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 444,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                children: "03"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold",
                                                children: "Web Development"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 458,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 text-base leading-7 text-black/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Fast, modern builds with clean code, SEO, and performance baked in."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Next.js - SEO - CMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 459,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 440,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center",
                                        "data-animate": "services",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/mobile-app-development.png",
                                                        alt: "App development visual",
                                                        fill: true,
                                                        sizes: "224px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                children: "04"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 485,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold",
                                                children: "App Development"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 text-base leading-7 text-black/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Cross-platform apps built for speed, reliability, and a polished user experience."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "iOS - Android - QA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative grid gap-6 py-8 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-center",
                                        "data-animate": "services",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute right-6 top-1/2 hidden w-56 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 lg:block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] w-full rounded-2xl border border-black/10 bg-white p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/crm.png",
                                                        alt: "CRM ERP visual",
                                                        fill: true,
                                                        sizes: "224px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                children: "05"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold",
                                                children: "CRM/ERP"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 518,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 text-base leading-7 text-black/70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Custom systems that connect teams, automate workflows, and keep data organized."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase tracking-[0.3em] text-black/50",
                                                        children: "Dashboards - Automation - Integrations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 524,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 379,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 348,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "work",
                        className: "mx-auto w-full max-w-6xl px-4 pb-12 pt-10 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex flex-wrap items-end justify-between gap-6",
                                "data-animate": "work",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.35em] text-black/60",
                                                children: "Selected Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 539,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                                                children: [
                                                    "Experimental builds",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 15
                                                    }, this),
                                                    "with editorial rhythm."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 538,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-md text-sm leading-7 text-black/65 sm:text-base",
                                        children: "A staggered portfolio layout where each case study has its own composition, pacing, and visual weight."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 548,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 537,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "group relative overflow-hidden rounded-[28px] border border-black/10 bg-white/80 p-4 backdrop-blur-sm sm:p-6",
                                            "data-animate": "work",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pointer-events-none absolute -right-3 -top-10 text-[6rem] font-semibold leading-none tracking-tight text-black/[0.06] sm:text-[8rem]",
                                                    children: String(index + 1).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-6 md:grid-cols-12 md:items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: project.image,
                                                                    alt: project.title,
                                                                    fill: true,
                                                                    sizes: "(max-width: 768px) 100vw, 60vw",
                                                                    className: "object-cover transition duration-700 ease-out group-hover:scale-105"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 578,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `relative md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] uppercase tracking-[0.34em] text-black/50",
                                                                    children: [
                                                                        project.category,
                                                                        " - ",
                                                                        project.year
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 586,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl",
                                                                    children: project.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-4 text-base leading-7 text-black/70",
                                                                    children: project.summary
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "mt-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-black/60 transition hover:text-black",
                                                                    href: project.href,
                                                                    children: [
                                                                        "View Project",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "inline-block h-px w-10 bg-black/30 transition-all duration-300 group-hover:w-14"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, project.title, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 13
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-1 pt-2 text-[11px] uppercase tracking-[0.28em] text-black/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "More projects on request"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block h-px w-12 bg-black/30"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 609,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 607,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 554,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 533,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "testimonials",
                        className: "mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 flex flex-wrap items-end justify-between gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.35em] text-black/60",
                                                children: "Testimonials"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                                                children: [
                                                    "Partner feedback,",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 15
                                                    }, this),
                                                    "framed with clarity."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 624,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-md text-sm leading-7 text-black/65 sm:text-base",
                                        children: "A spotlight composition with one flagship quote and supporting voices placed as side notes."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 630,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 619,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-6 lg:grid-cols-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "relative overflow-hidden rounded-[30px] border border-black/10 bg-white/85 px-6 py-8 sm:px-8 sm:py-10 lg:col-span-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "pointer-events-none absolute -left-3 -top-6 text-[8rem] leading-none text-black/[0.06] sm:text-[10rem]",
                                                children: "“"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 638,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/25 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mb-6 overflow-hidden rounded-2xl border border-black/10 bg-black",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aspect-video w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        className: "h-full w-full object-cover",
                                                        controls: true,
                                                        playsInline: true,
                                                        preload: "metadata",
                                                        poster: testimonialVideoPoster,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                                                src: testimonialVideoSrc,
                                                                type: "video/mp4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 19
                                                            }, this),
                                                            "Your browser does not support the video tag."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 643,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "relative max-w-3xl text-lg leading-9 text-black/80 sm:text-[1.45rem] sm:leading-10",
                                                children: testimonials[0].quote
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 658,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base font-semibold text-black",
                                                                children: testimonials[0].name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 664,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs uppercase tracking-[0.22em] text-black/50",
                                                                children: testimonials[0].role
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 663,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-black/55",
                                                        children: "Featured Voice"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 662,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 637,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 lg:col-span-4",
                                        children: testimonials.slice(1).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "relative overflow-hidden rounded-2xl border border-black/10 bg-white/75 p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm leading-7 text-black/75",
                                                        children: item.quote
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 border-t border-black/10 pt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold text-black",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] uppercase tracking-[0.2em] text-black/50",
                                                                children: item.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, item.name, true, {
                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                lineNumber: 679,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                lineNumber: 636,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 615,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        className: "mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 lg:grid-cols-[0.95fr_1.05fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-[30px] border border-black/10 bg-white/85 p-7 sm:p-9",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full border border-black/10"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-[0.35em] text-black/60",
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 705,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
                                            children: [
                                                "Let's build",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 710,
                                                    columnNumber: 15
                                                }, this),
                                                "your next",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 15
                                                }, this),
                                                "signature launch."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 max-w-md text-base leading-7 text-black/70",
                                            children: "Share your vision, timeline, and goals. We'll map a focused strategy and ship a brand experience that feels unmistakably yours."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 715,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 space-y-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "border-t border-black/10 pt-4 text-black/75",
                                                    children: "hello@setzet.studio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 721,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "border-t border-black/10 pt-4 text-black/75",
                                                    children: "+91-9128376231"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "border-t border-black/10 pt-4 text-black/75",
                                                    children: "Noida, India."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "relative overflow-hidden rounded-[30px] border border-black/10 bg-white/80 p-6 sm:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] uppercase tracking-[0.25em] text-black/55",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35",
                                                            placeholder: "Your full name",
                                                            type: "text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] uppercase tracking-[0.25em] text-black/55",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35",
                                                            placeholder: "you@company.com",
                                                            type: "email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 734,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mt-4 flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.25em] text-black/55",
                                                    children: "Project Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: "h-12 rounded-xl border border-black/15 bg-white px-4 text-sm text-black outline-none transition focus:border-black/35",
                                                    placeholder: "Brand site, app, redesign...",
                                                    type: "text"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mt-4 flex flex-col gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] uppercase tracking-[0.25em] text-black/55",
                                                    children: "Project Brief"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    className: "min-h-[150px] rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-black/35",
                                                    placeholder: "Tell us about your goals, timeline, and expectations."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 772,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 768,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] uppercase tracking-[0.2em] text-black/50",
                                                    children: "Response within 24 hours"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85",
                                                    type: "submit",
                                                    children: "Send Inquiry"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 782,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 778,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 733,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                            lineNumber: 702,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 698,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mx-auto w-full max-w-6xl px-4 pb-10 pt-4 sm:px-8 lg:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-[32px] border border-black/10 bg-white/95",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-8 border-b border-black/10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] uppercase tracking-[0.32em] text-black/45",
                                                    children: "SetZet Studio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-4 text-[clamp(2rem,6vw,4.6rem)] font-semibold leading-[0.9] tracking-tight",
                                                    children: [
                                                        "A DIGITAL",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 17
                                                        }, this),
                                                        "MANIFESTO"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-5 max-w-xl text-sm leading-7 text-black/70 sm:text-base",
                                                    children: "We design and build expressive digital systems for brands that choose clarity over noise."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 797,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-8 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] uppercase tracking-[0.26em] text-black/45",
                                                            children: "Navigate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 814,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex flex-col gap-2 text-sm text-black/75",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "#about",
                                                                    children: "About"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 816,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "#services",
                                                                    children: "Services"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 817,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "#work",
                                                                    children: "Work"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 818,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "#testimonials",
                                                                    children: "Testimonials"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 819,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "#contact",
                                                                    children: "Contact"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 820,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] uppercase tracking-[0.26em] text-black/45",
                                                            children: "Reach"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex flex-col gap-2 text-sm text-black/75",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "mailto:hello@setzet.studio",
                                                                    children: "hello@setzet.studio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 826,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    className: "transition hover:text-black",
                                                                    href: "tel:+14155550128",
                                                                    children: "+91-9128376231"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 827,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "Noida, India"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                    lineNumber: 828,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 796,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 px-6 py-5 sm:px-8 md:grid-cols-[1fr_auto_auto] md:items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] uppercase tracking-[0.24em] text-black/45",
                                            children: "(c) 2026 SetZet Studio"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 835,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "aria-label": "Instagram",
                                                    href: "#",
                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-4 w-4 fill-none stroke-current",
                                                        strokeWidth: "1.8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "3.5",
                                                                y: "3.5",
                                                                width: "17",
                                                                height: "17",
                                                                rx: "5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 105
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 159
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "17.5",
                                                                cy: "6.5",
                                                                r: "1",
                                                                fill: "currentColor",
                                                                stroke: "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 839,
                                                                columnNumber: 191
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "aria-label": "LinkedIn",
                                                    href: "#",
                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-4 w-4 fill-current",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6.8 8.9h3.1V20H6.8zM8.3 3.9a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM12.3 8.9h3v1.5h.1c.4-.8 1.4-1.8 3-1.8 3.2 0 3.8 2.1 3.8 4.9V20h-3.1v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3.1z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 842,
                                                            columnNumber: 75
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "aria-label": "X",
                                                    href: "#",
                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-4 w-4 fill-current",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M18.2 3h2.9l-6.4 7.3L22 21h-5.7l-4.5-5.9L6.6 21H3.7l6.8-7.8L2 3h5.8l4 5.3zM17.2 19.3h1.6L5.9 4.6H4.2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                            lineNumber: 845,
                                                            columnNumber: 75
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "aria-label": "Dribbble",
                                                    href: "#",
                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/70 transition hover:border-black/35 hover:text-black",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        className: "h-4 w-4 fill-none stroke-current",
                                                        strokeWidth: "1.8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "9"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 105
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6 7.6c2.6 1.5 7.8 2 11.9 1.1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 137
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8.2 18.7c1.4-2.5 4-6 8.8-7.8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 179
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M10.2 4.1c2 2.7 4.6 7.7 5.7 13.6"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 221
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-[10px] uppercase tracking-[0.24em] text-black/45",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "transition hover:text-black",
                                                    href: "#",
                                                    children: "Privacy"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 853,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "transition hover:text-black",
                                                    href: "#",
                                                    children: "Terms"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$SetJets$2f$agency$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "transition hover:text-black",
                                                    href: "#top",
                                                    children: "Top"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                                    lineNumber: 855,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                            lineNumber: 852,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                                    lineNumber: 834,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                            lineNumber: 795,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                        lineNumber: 794,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/SetJets/agency/src/app/page.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(Home, "jZp3iQYKbe+4ubex7Rj6aFON41M=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_SetJets_agency_src_0c79057a._.js.map