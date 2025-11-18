export const CoursesData = {
    courses: [
        {
            id: 'web-development',
            title: 'Web Development',
            color: 'rgba(54, 63, 70, 0.5)',
            modules: {
                highlights: {
                    title: 'Course Highlights',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Week 1 - Introduction to Web Development',
                            content: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript basics. Understand how the web works, client-server architecture, and development tools setup.',
                            link: 'https://example.com/week1',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1 - HTML Basics',
                                    content: 'Introduction to HTML structure and basic tags...',
                                    link: 'https://example.com/day1',
                                },
                                {
                                    day: 2,
                                    title: 'Day 2 - CSS Fundamentals',
                                    content: 'Learning about selectors, properties, and basic styling...',
                                    link: 'https://example.com/day2',
                                },
                            ],
                        },
                        {
                            week: 2,
                            title: 'Week 2 - Advanced HTML & CSS',
                            content: 'Deep dive into semantic HTML, CSS Grid, Flexbox, and responsive design principles. Learn to create modern, accessible web layouts.',
                            link: 'https://example.com/week2',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1 - Semantic HTML',
                                    content: 'Understanding semantic elements and accessibility...',
                                    link: 'https://example.com/day1',
                                },
                            ],
                        },
                    ],
                },
                module1: {
                    title: 'Junior Front-End Developer: CSS &amp; Sass Specialist: 100+ Projects in 10 Weeks',
                    description: "This Module 1, spanning Weeks 1-10, offers an intensive curriculum focused on building practical skills in web development through hands-on projects. A detailed project calculation yields a total of 105 distinct projects and components. Capstones and integrations (e.g., responsive dashboards or landing pages) are not counted as separate projects, as they combine existing elements. The technology stack is foundational yet modern, emphasizing HTML for structure (using divs, classes, and semantic elements where applicable) and CSS3 for styling, including box model properties (width, height, margin, padding, border, box-sizing, overflow), positioning (relative, absolute, fixed, sticky, z-index), Flexbox (flex-direction, justify-content, align-items, flex-wrap, grow/shrink), and CSS Grid (template-columns/rows, fr, minmax, auto-fit, grid-areas). Sass is introduced in Weeks 9-10 as a preprocessor, incorporating variables, nesting, partials, mixins, extends, loops, conditionals, and the 7-1 architecture for modular, scalable code. Tools include code editors (e.g., VS Code), browsers with dev tools, NPM for Sass compilation, and basic JavaScript for interactions like toggles or carousels. No advanced frameworks like React are used, keeping the focus on pure front-end mastery. Upon completion, the student's worth is significant for entry-level roles, based on proficiency in converting UX/UI designs to pixel-perfect, responsive web pages. They would be about 85% ready as a UX/UI Design to HTML/CSS3 with Sass Developer, capable of handling static sites, layouts, and preprocessors independently, but may need 15% more real-world experience in accessibility, performance optimization, or team collaboration tools like Git. A fitting professional heading for them is 'Junior Front-End Developer: CSS & Sass Specialist.' Practice strength is rated at 90%, derived from the program's daily 4-hour (On Campus) + (4 hours Online) structure (theory, guided builds, independent challenges) across 54+ training days, emphasizing debugging, responsive testing (320px-1440px), and iterative reviews. This high percentage reflects deep repetition in layouts and components, fostering muscle memory for production-ready code, though supplementing with live client projects could push it to 100%.",
                    content: [
                        {
                            week: 1,
                            title: 'Week 1: Foundations of Box Model and Relative Positioning',
                            content: "Focus on box model basics (width, height, margin, padding, border, box-sizing: border-box) and relative positioning for abstract box arrangements. All 13 layouts are geometric designs using colored/bordered divs to visualize concepts. Theory covers calculating element sizes, content-box vs. border-box, overflow handling, margin collapsing, relative offsets, z-index, and hover transitions. Practice builds centered squares, nested boxes, scrollable overflows, side-by-side adjacencies, shifted/aligned stacks, hover effects, overlapped layers, and grid-like rows/columns via percentages and margins. Guided sessions construct layouts step-by-step; independent challenges modify prior work, debug issues like collapses or flow disruptions, and combine into a 2x3 grid or full page. Review emphasizes browser dev tools inspection, cross-browser testing, and integrating all layouts into one cohesive abstract website. Mastery goal: Precise spacing and subtle adjustments without disrupting document flow.",
                            link: 'https://example.com/module1-week1',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Intro to Box Model',
                                    content: [
                                        "Topics: width, height, margin, padding, border, box-sizing. Calculating total element size (e.g., width + padding + border).",
                                        "Layouts: 1. Basic box (centered square). 2. Nested boxes.",
                                        "Hour 1: Theory and Concepts – Explain box model components with diagrams (sketch on paper or use browser dev tools). Discuss content-box vs. border-box. Example: How padding affects inner space.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 1 (center with margin: 0 auto;, add padding/border). Hour 3: Build Layout 2 (outer box with width/height, inner with margins to space inside).",
                                        "Hour 4: Independent Challenge + Review – Compare rendered output to expected; note how margins collapse."
                                    ],
                                    link: 'https://example.com/day1',
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Overflow and Spacing',
                                    content: [
                                        "Topics: overflow: hidden/auto/scroll. Combining margins/paddings for consistent spacing.",
                                        "Layouts: 3. Overflow box (scrollable). 4. Adjacent boxes (side-by-side).",
                                        "Hour 1: Theory and Concepts – Discuss overflow scenarios (e.g., text exceeding height). Explain margin collapsing and how to prevent it (e.g., with padding). Example: Vertical margins between blocks.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 3 (fixed height, long content with overflow: auto;). Hour 3: Build Layout.",
                                        "Hour 4: Independent Challenge + Review – Tune Layout"
                                    ],
                                    link: 'https://example.com/day2',
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Intro to Relative Positioning',
                                    content: [
                                        "Topics: position: relative; Offsets (top/left/bottom/right) from normal position.",
                                        "Layouts: 5. Shifted box. 6. Aligned boxes (stack with tweaks).",
                                        "Hour 1: Theory and Concepts – Explain how relative keeps flow but allows shifts. Discuss when to use (subtle adjustments). Example: Nudging an element without affecting siblings.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 5 (base box, apply relative offsets). Hour 3: Build Layout 6 (vertical stack, use relative to fine-tune spacing/overlap).",
                                        "Hour 4: Independent Challenge + Review – Apply relative shift to Layout 4's boxes. Debug flow disruptions. Review: Inspect elements in browser to see offset effects."
                                    ],
                                    link: 'https://example.com/day3',
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Relative for Shifts (e.g., Hover)',
                                    content: [
                                        "Topics: Relative positioning for animations/transitions (e.g., shift on hover).",
                                        "Layouts: 7. Hover shift box. 8. Overlapped boxes (minor z-index).",
                                        "Hour 1: Theory and Concepts – Cover transitions with relative (e.g., transition: left 0.3s;). Introduce z-index basics for stacking. Example: Hover effects without JS.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 7 (add :hover for shift). Hour 3: Build Layout 8 (two relative boxes, overlap with offsets and z-index).",
                                        "Hour 4: Independent Challenge + Review – Add hover to Layout 5. Debug z-index issues. Review: Animate and test cross-browser."
                                    ],
                                    link: 'https://example.com/day4',
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Box Model for Grid-Like Patterns',
                                    content: [
                                        "Topics: Creating grid-like structures via margins and widths.",
                                        "Layouts: 9. Row of boxes. 10. Column of boxes.",
                                        "Hour 1: Theory and Concepts – Discuss simulating rows/columns with percentages and margins. Pitfalls: Floating vs. inline-block. Example: Equal-width boxes in a row.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 9 (three boxes, 33% width each, margins). Hour 3: Build Layout 10 (stacked, relative offsets for custom spacing).",
                                        "Hour 4: Independent Challenge + Review – Combine Layouts 9 and 10 into a 2x3 grid. Debug alignment."
                                    ],
                                    link: 'https://example.com/day5',
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review Week 1',
                                    content: [
                                        "Topics: Debugging box model issues (e.g., collapsing margins).",
                                        "Layouts: 11. Full-width box strip. 12. Corner box overlay. 13. Footer-like box row.",
                                        "Hour 1: Theory and Concepts – Recap all Week 1 topics. Common errors: Unexpected overflows, margin collapses. Tools: Browser dev console.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 11 (wide box with inner padded boxes). Hour 3: Build Layouts 12 (small relative in corner) and 13 (bottom row with margins).",
                                        "Hour 4: Independent Challenge + Review – Integrate Layouts 1-13 into one website page. Debug interactions. Review: Self-assess mastery; note areas for improvement."
                                    ],
                                    link: 'https://example.com/day6',
                                },
                            ],
                        },
                        {
                            week: 2,
                            title: 'Week 2: Absolute and Fixed Positioning',
                            content: "Shift to absolute (removed from flow, parent-relative) and fixed (viewport-relative, non-scrolling) positioning. Layout 14 remains abstract; 15–26 introduce CV/profile themes like headers, skills, tooltips, navs, and modals, using only box model properties. Theory explores containing absolutes with relative parents, centering techniques, z-index stacking contexts, hover-triggered visibility, fixed overlays, and scroll/resize pitfalls. Practice builds centered absolutes, profile headers with photo overlays, dropdowns, tooltips, layered cards, captions, fixed navs/sidebars, modals, download buttons, footers, endorsements, and timelines. Guided work focuses on precise placement; challenges add custom elements like dropdowns or modals to earlier layouts, debugging visibility, overlaps, and responsiveness. Review integrates themed components, tests interactions across viewports/zooms, and checks progress in building modular CV sections. Goal: Overlays and fixed elements enhancing profiles without flex/grid.",
                            link: 'https://example.com/module1-week2',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Intro to Absolute Positioning',
                                    content: [
                                        "Topics: position: absolute; Offsets relative to positioned parent.",
                                        "Layouts: 14. Centered absolute box (abstract). 15. Profile header (CV: absolute photo over banner).",
                                        "Hour 1: Theory and Concepts – Explain removal from flow, need for relative parent. Centering techniques (offsets + transform). Example: Overlays.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 14 (absolute center in relative container). Hour 3: Build Layout 15 (apply to CV: banner as relative, photo absolute).",
                                        "Hour 4: Independent Challenge + Review – Add absolute to Layout 8. Debug positioning. Review: Check in different zooms."
                                    ],
                                    link: 'https://example.com/day1',
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Absolute in Containers',
                                    content: [
                                        "Topics: \"Relatively absolute\" for contained layouts.",
                                        "Layouts: 16. Skills dropdown (CV: absolute sub-list). 17. Experience tooltip.",
                                        "Hour 1: Theory and Concepts – Discuss hover-triggered absolutes (e.g., display: block). Pitfalls: Overflowing parents. Example: Menus.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 16 (relative section, absolute dropdown on hover). Hour 3: Build Layout 17 (tooltip absolute on experience box).",
                                        "Hour 4: Independent Challenge + Review – Create a custom dropdown for Layout 15. Debug visibility. Review: Test hover interactions."
                                    ],
                                    link: 'https://example.com/day2',
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Z-Index for Stacking',
                                    content: [
                                        "Topics: z-index for absolute elements; Overlapping designs.",
                                        "Layouts: 18. Layered profile cards (CV). 19. Photo caption.",
                                        "Hour 1: Theory and Concepts – Stacking contexts (new with positioned elements). Higher z-index on top. Example: Layered cards.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 18 (absolutes with varying z-index). Hour 3: Build Layout 19 (text absolute over image box).",
                                        "Hour 4: Independent Challenge + Review – Stack elements in Layout 16. Debug order. Review: Use dev tools to inspect layers."
                                    ],
                                    link: 'https://example.com/day3',
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Intro to Fixed Positioning',
                                    content: [
                                        "Topics: position: fixed; Viewport-relative, non-scrolling.",
                                        "Layouts: 20. Fixed nav bar (CV). 21. Fixed contact sidebar.",
                                        "Hour 1: Theory and Concepts – Differences from absolute (viewport vs. parent). Issues with scrolling. Example: Sticky headers.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 20 (fixed top nav). Hour 3: Build Layout 21 (fixed left sidebar).",
                                        "Hour 4: Independent Challenge + Review – Add fixed to Layout 15 header. Debug overlap with content. Review: Scroll test."
                                    ],
                                    link: 'https://example.com/day4',
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Combining with Box Model',
                                    content: [
                                        "Topics: Full-screen modals, etc.",
                                        "Layouts: 22. Profile modal. 23. Fixed download button.",
                                        "Hour 1: Theory and Concepts – Fixed overlays with absolute content. Sizing for full viewport. Example: Modals.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 22 (fixed backdrop, absolute center). Hour 3: Build Layout 23 (fixed bottom-right).",
                                        "Hour 4: Independent Challenge + Review – Modal for Layout 17 tooltip. Debug centering. Review: Accessibility considerations."
                                    ],
                                    link: 'https://example.com/day5',
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review Week 2',
                                    content: [
                                        "Topics: Handling scroll/resize with fixed/absolute.",
                                        "Layouts: 24. Fixed footer. 25. Absolute endorsements. 26. Overlapping timeline.",
                                        "Hour 1: Theory and Concepts – Pitfalls: Fixed pushing content.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 24 (fixed bottom). Hour 3: Build Layouts 25 (overlays) and 26 (timeline absolutes).",
                                        "Hour 4: Independent Challenge + Review – Integrate Week 2 layouts. Debug resize. Review: Weekly progress check."
                                    ],
                                    link: 'https://example.com/day6',
                                }
                            ]
                        },
                        {
                            week: 3,
                            title: 'Week 3: Advanced Combinations and Projects',
                            content: "Integrate sticky (scroll-dependent within parent), absolute, fixed, and relative for complex CV/profile sites. All 14 layouts (27–40) are themed: sticky headers/sidebars, sliders, galleries, panels, full pages, cards, badges, modals, résumés, dashboards, and landings. Theory recaps stacking conflicts, performance (minimize absolutes), sticky browser support, off-screen slides, holistic design, and optimizations like Google Fonts. Practice constructs sticky sections, sliders with stacked bars, galleries, sliding panels/menus, integrated full CVs/portfolios, profile cards with hover absolutes, endorsement badges, centered modals, complete résumé pages, dashboard tooltips, and hero landings with sticky elements. Guided sessions build integrations; challenges customize, add transitions, QA debugging for smoothness/mobile, and create capstone custom CVs from all prior work. Final review self-evaluates mastery, optimizes code, and wraps with best practices for production-ready profiles testable in varied viewports.",
                            link: 'https://example.com/module1-week2',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Intro to Sticky Positioning',
                                    content: [
                                        "Topics: position: sticky; Sticks within parent on scroll.",
                                        "Layouts: 27. Sticky section header (CV). 28. Sticky profile sidebar.",
                                        "Hour 1: Theory and Concepts – Hybrid fixed/relative. Browser support. Example: Table headers.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 27 (sticky in section). Hour 3: Build Layout 28 (sticky sidebar).",
                                        "Hour 4: Independent Challenge + Review – Add sticky to Layout 20 nav. Debug parent overflow. Review: Scroll behavior."
                                    ],
                                    link: 'https://example.com/day1',
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Advanced Overlaps',
                                    content: [
                                        "Topics: Modals, sliders, galleries.",
                                        "Layouts: 29. Skills slider. 30. Project gallery.",
                                        "Hour 1: Theory and Concepts – Stacking absolutes for sliders. Visibility toggling.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 29 (absolute stacked bars). Hour 3: Build Layout 30 (thumbnails over portfolio).",
                                        "Hour 4: Independent Challenge + Review – Slider for Layout 19. Debug transitions. Review: Interaction testing."
                                    ],
                                    link: 'https://example.com/day2',
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Sliding Panels',
                                    content: [
                                        "Topics: Sliding panels and side menus.",
                                        "Layouts: 31. Sliding education panel. 32. Off-canvas menu.",
                                        "Hour 1: Theory and Concepts – Absolute off-screen, (CSS only).",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 31 (slide in on trigger). Hour 3: Build Layout 32 (fixed off-canvas).",
                                        "Hour 4: Independent Challenge + Review – Panel for Layout 16. Debug smoothness. Review: Mobile simulation."
                                    ],
                                    link: 'https://example.com/day3',
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Full-Page Layouts',
                                    content: [
                                        "Topics: Combining fixed, sticky, absolute.",
                                        "Layouts: 33. Full CV layout. 34. Portfolio profile.",
                                        "Hour 1: Theory and Concepts – Holistic design; Avoid conflicts (e.g., z-index across types).",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 33 (integrate elements). Hour 3: Build Layout 34 (overlays on projects).",
                                        "Hour 4: Independent Challenge + Review – Customize Layout 33. Debug integrations. Review: Full-page scroll test."
                                    ],
                                    link: 'https://example.com/day4',
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Variations and Debugging',
                                    content: [
                                        "Topics: Google Fonts",
                                        "Layouts: 35. Profile card. 36. Endorsement badges. 37. Centered login modal.",
                                        "Hour 1: Theory and Concepts – Revise Concepts.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 35 (hover absolutes). Hour 3: Build Layouts 36 (badges) and 37 (modal).",
                                        "Hour 4: Independent Challenge + Review – QA."
                                    ],
                                    link: 'https://example.com/day5',
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Final Review',
                                    content: [
                                        "Topics: Capstone project; Performance optimization.",
                                        "Layouts: 38. Complete résumé page. 39. Dashboard profile. 40. Landing profile.",
                                        "Hour 1: Theory and Concepts – Recap all; Best practices (minimize absolutes for perf).",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Layout 38 (full integration). Hour 3: Build Layouts 39 (tooltips) and 40 (hero with sticky).",
                                        "Hour 4: Independent Challenge + Review – Build a custom CV from all layouts. Debug everything. Review: Program wrap-up; self-evaluation."
                                    ],
                                    link: 'https://example.com/day6',
                                }
                            ]
                        },
                        {
                            week: 4,
                            title: 'Week 4: Foundations of Box Model and Relative Positioning',
                            content: "Focus: Basic HTML and relative positioning for websites like Charles Business-Consulting, Fashion Landing Page, Okno – Ultimate Multipurpose, PURE – Sublime Coming Soon, Consider – Multi-Purpose, Triablo – eCommerce. Emphasize properties: width/height/margin/padding/border/box-sizing for sizing; overflow for handling content; position: relative with offsets/transitions/z-index for shifts/hovers; percentages/margins for grid-like patterns. Theory covers calculations, collapsing prevention, flow preservation, animations, simulations. Practice builds structures step-by-step. Challenges modify/debug/integrate. Review recaps errors, self-assesses mastery.",
                            link: 'https://example.com/week4',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Intro to Box Model',
                                    content: [
                                        "Websites: 1. Charles Business-Consulting (simplify header/sections with nested boxes).",
                                        "Focused CSS3 Properties: width, height, margin, padding, border, box-sizing (for sizing/spacing).",
                                        "Hour 1: Theory and Concepts – Cover width, height, margin, padding, border, box-sizing; calculate sizes. Analyze Charles snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML divs for header/body. Hour 3: CSS box model for centering/padding.",
                                        "Hour 4: Independent Challenge + Review – Add borders; debug margins. Review vs. snapshot."
                                    ],
                                    link: 'https://example.com/day1',
                                    demo: 'https://preview.themeforest.net/item/charles-businessconsulting-html-template/full_screen_preview/21992573'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Overflow and Spacing',
                                    content: [
                                        "Websites: 2. Fashion Landing Page (adjacent sections with overflow).",
                                        "Focused CSS3 Properties: overflow (hidden/auto/scroll), margin, padding (for consistent spacing, prevent collapsing).",
                                        "Hour 1: Theory and Concepts – Overflow types; margin/padding combos, collapsing prevention. Analyze Fashion snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML divs for sections. Hour 3: Apply overflow/margins.",
                                        "Hour 4: Independent Challenge + Review – Tune spacing; debug overflows. Review alignment."
                                    ],
                                    link: 'https://example.com/day2',
                                    demo: 'https://preview.themeforest.net/item/epic-launch-highconverting-landing-page-template/full_screen_preview/20831859'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Intro to Relative Positioning',
                                    content: [
                                        "Websites: 3. Okno – Ultimate Multipurpose (shifted elements).",
                                        "Focused CSS3 Properties: position: relative; top, left, bottom, right (for offsets from normal position).",
                                        "Hour 1: Theory and Concepts – Relative position; offsets for shifts. Analyze Okno snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML structure. Hour 3: Apply relative offsets.",
                                        "Hour 4: Independent Challenge + Review – Shift elements; debug disruptions. Review via inspector."
                                    ],
                                    link: 'https://example.com/day3',
                                    demo: 'https://preview.themeforest.net/item/okno-ultimate-multipurpose-html5-template/full_screen_preview/16256293'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Relative for Shifts (e.g., Hover)',
                                    content: [
                                        "Websites: 4. PURE – Sublime Coming Soon (hover effects).",
                                        "Focused CSS3 Properties: position: relative with transitions (e.g., transition: left 0.3s); z-index for stacking.",
                                        "Hour 1: Theory and Concepts – Transitions with relative; z-index basics. Analyze PURE snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML elements. Hour 3: Add hover shifts/z-index.",
                                        "Hour 4: Independent Challenge + Review – Add transitions; debug z-index. Review cross-browser."
                                    ],
                                    link: 'https://example.com/day4',
                                    demo: 'https://preview.themeforest.net/item/pure-sublime-coming-soon-template/full_screen_preview/17409583'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Box Model for Grid-Like Patterns',
                                    content: [
                                        "Websites: 5. Consider – Multi-Purpose (simulated rows/columns).",
                                        "Focused CSS3 Properties: width (percentages), margin (for spacing in grid-like structures).",
                                        "Hour 1: Theory and Concepts – Simulate grids via percentages/margins; inline-block pitfalls. Analyze Consider snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML div grid. Hour 3: Widths/margins.",
                                        "Hour 4: Independent Challenge + Review – Create 2x3 pattern; debug alignment. Review resizing."
                                    ],
                                    link: 'https://example.com/day5',
                                    demo: 'https://preview.themeforest.net/item/consider-multipurpose-responsive-html5-template/full_screen_preview/21202652'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review Week 4',
                                    content: [
                                        "Websites: 6. Triablo – eCommerce (full-width strips with overlays).",
                                        "Focused CSS3 Properties: Combination of width, margin, padding, position: relative, overflow (for review/debugging).",
                                        "Hour 1: Theory and Concepts – Recap Week 1; errors like collapses. Analyze Triablo snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML setup. Hour 3: Combine box model/relative.",
                                        "Hour 4: Independent Challenge + Review – Integrate 1-6 elements; self-assess."
                                    ],
                                    link: 'https://example.com/day6',
                                    demo: 'https://preview.themeforest.net/item/triablo-ecommerce-landing-page/full_screen_preview/9347216'
                                }
                            ]
                        },
                        {
                            week: 5,
                            title: 'Week 5: Absolute and Fixed Positioning',
                            content: "Focus: Precise placement for websites like Haswell – Multipurpose, Moto – Multipurpose, Pacifico – Multipurpose, Seppo – Corporate, NextSaaS – SaaS, Aplio – Fintech, SaaSox – SaaS. Emphasize properties: position: absolute with offsets/transform for centering; absolute in relative with display for triggers; z-index for stacking; position: fixed with top/left for viewports; fixed/absolute with width/height for overlays/modals; combined for scroll/resize handling. Theory covers flow removal, hover pitfalls, contexts/ordering, scrolling issues, sizing. Practice builds wrappers/sections/nav/modals. Challenges add/custom/stack/debug/integrate. Review addresses pitfalls, progress checks.",
                            link: 'https://example.com/week5',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Practice to Absolute Positioning',
                                    content: [
                                        "Websites: 7. Haswell – Multipurpose (centered absolutes).",
                                        "Focused CSS3 Properties: position: absolute; top, left, bottom, right (relative to parent); transform for centering.",
                                        "Hour 1: Theory and Concepts – Absolute flow removal; relative parents, centering. Analyze Haswell snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML with wrappers. Hour 3: Absolute offsets.",
                                        "Hour 4: Independent Challenge + Review – Add absolutes; debug. Review zooms."
                                    ],
                                    link: 'https://example.com/day1',
                                    demo: 'https://preview.themeforest.net/item/haswell-multipurpose-one-multi-page-template/full_screen_preview/12087194'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Practice to Absolute in Containers',
                                    content: [
                                        "Websites: 8. Moto – Multipurpose (contained dropdowns).",
                                        "Focused CSS3 Properties: position: absolute in relative containers; display for hover triggers.",
                                        "Hour 1: Theory and Concepts – Hover-triggered absolutes; overflowing pitfalls. Analyze Moto snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML sections. Hour 3: Absolute on hover.",
                                        "Hour 4: Independent Challenge + Review – Custom absolute; debug visibility. Review interactions."
                                    ],
                                    link: 'https://example.com/day2',
                                    demo: 'https://preview.themeforest.net/item/moto-multipurpose-landing-page-template/full_screen_preview/20342375'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Practice to Z-Index for Stacking',
                                    content: [
                                        "Websites: 9. Pacifico – Multipurpose (layered overlaps).",
                                        "Focused CSS3 Properties: z-index (for ordering stacked elements).",
                                        "Hour 1: Theory and Concepts – Stacking contexts; z-index ordering. Analyze Pacifico snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML stacks. Hour 3: Apply z-index.",
                                        "Hour 4: Independent Challenge + Review – Stack sections; debug order. Review dev tools."
                                    ],
                                    link: 'https://example.com/day3',
                                    demo: 'https://preview.themeforest.net/item/pacifico-multipurpose-html-landing-page-template/full_screen_preview/21381262'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Practice to Fixed Positioning',
                                    content: [
                                        "Websites: 10. Seppo – Corporate (fixed navs).",
                                        "Focused CSS3 Properties: position: fixed; top, left (viewport-relative).",
                                        "Hour 1: Theory and Concepts – Fixed vs. absolute; scrolling issues. Analyze Seppo snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML nav. Hour 3: Fixed positioning.",
                                        "Hour 4: Independent Challenge + Review – Add fixed; debug overlaps. Review scrolls."
                                    ],
                                    link: 'https://example.com/day4',
                                    demo: 'https://preview.themeforest.net/item/seppo-corporate-one-page-html-template/full_screen_preview/22813718'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Practice to Combining with Box Model',
                                    content: [
                                        "Websites: 11. NextSaaS – SaaS (modals with fixed/absolute).",
                                        "Focused CSS3 Properties: position: fixed with absolute content; width/height for full viewport.",
                                        "Hour 1: Theory and Concepts – Fixed overlays; sizing. Analyze NextSaaS snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML modal. Hour 3: Combine fixed/absolute.",
                                        "Hour 4: Independent Challenge + Review – Add popups; debug centering. Review accessibility."
                                    ],
                                    link: 'https://example.com/day5',
                                    demo: 'https://preview.themeforest.net/item/nextsaas-saas-software-startup-tailwind-template/full_screen_preview/59358848'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review Week 5',
                                    content: [
                                        "Websites: 12. Aplio – Fintech (endorsements/timelines). 13. SaaSox – SaaS (endorsements/timelines).",
                                        "Focused CSS3 Properties: position: absolute/fixed, z-index, overflow (for scroll/resize handling).",
                                        "Hour 1: Theory and Concepts – Scroll/resize pitfalls; fixed push. Analyze snapshots.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Aplio. Hour 3: Build SaaSox.",
                                        "Hour 4: Independent Challenge + Review – Integrate Week 2; debug resize. Review progress."
                                    ],
                                    link: 'https://example.com/day6',
                                    demo: 'https://preview.themeforest.net/item/aplio-fintech-saas-landing-template/full_screen_preview/50639764'
                                }
                            ]
                        },
                        {
                            week: 6,
                            title: 'Week 6: Advanced Combinations and Projects',
                            content: "Focus: Integrated positioning for websites like Appilo – App & SaaS, Sofbox – Software, SassGen – SaaS, SaaSify – Startup, Bulkit – Agency, Nioland – SaaS, Kane – Responsive Bootstrap 3 App. Emphasize properties: position: sticky with top for sticking; absolute/z-index with visibility/display for overlaps/toggling; absolute with left/right transitions for slides; mix of fixed/sticky/absolute/z-index for full designs; relative/absolute transitions/z-index for hovers/variations; all for optimization/review. Theory covers hybrid/support, stacking/conflicts, off-screen, tools/revisions, recap/minimization. Practice builds sections/overlaps/panels. Challenges add/customize/QA/debug. Review scrolls/interactions/program evaluation.",
                            link: 'https://example.com/week6',
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Practice to Sticky Positioning',
                                    content: [
                                        "Websites: 14. Appilo – App & SaaS (sticky headers).",
                                        "Focused CSS3 Properties: position: sticky; top (for sticking within parent on scroll).",
                                        "Hour 1: Theory and Concepts – Sticky hybrid; support. Analyze Appilo snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML sections. Hour 3: Apply sticky.",
                                        "Hour 4: Independent Challenge + Review – Add sticky nav; debug overflows. Review scrolls."
                                    ],
                                    link: 'https://example.com/day1',
                                    demo: 'https://preview.themeforest.net/item/appilo-app-landing-page/full_screen_preview/22227898'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Practice to Advanced Overlaps',
                                    content: [
                                        "Websites: 15. Sofbox – Software (sliders/galleries).",
                                        "Focused CSS3 Properties: position: absolute with z-index; visibility/display for toggling.",
                                        "Hour 1: Theory and Concepts – Stacking absolutes; toggling. Analyze Sofbox snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML overlaps. Hour 3: Absolute stacking.",
                                        "Hour 4: Independent Challenge + Review – Add transitions; debug. Review interactions."
                                    ],
                                    link: 'https://example.com/day2',
                                    demo: 'https://preview.themeforest.net/item/sofbox-software-landing-page/full_screen_preview/20744137'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Practice to Sliding Panels',
                                    content: [
                                        "Websites: 16. SassGen – SaaS (off-screen panels).",
                                        "Focused CSS3 Properties: position: absolute; left/right with transitions (for slide effects).",
                                        "Hour 1: Theory and Concepts – Absolute off-screen; CSS transitions. Analyze SassGen snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML panels. Hour 3: Slide effects.",
                                        "Hour 4: Independent Challenge + Review – Add triggers; debug smoothness. Review mobile sim."
                                    ],
                                    link: 'https://example.com/day3',
                                    demo: 'https://preview.themeforest.net/item/sassgen-saas-landing-page-html-template/full_screen_preview/23868019'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Practice to Full-Page Layouts',
                                    content: [
                                        "Websites: 17. SaaSify – Startup (combined elements). 18. Bulkit – Agency (combined elements).",
                                        "Focused CSS3 Properties: Mix of position: fixed/sticky/absolute, z-index (for holistic designs).",
                                        "Hour 1: Theory and Concepts – Combos; z-index conflicts. Analyze snapshots.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build SaaSify. Hour 3: Build Bulkit.",
                                        "Hour 4: Independent Challenge + Review – Customize; debug integrations. Review scrolls."
                                    ],
                                    link: 'https://example.com/day4',
                                    demo: 'https://preview.themeforest.net/item/saasify-startup-saas-landing-page-html5-template/full_screen_preview/48657992'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Practice to Variations and Debugging',
                                    content: [
                                        "Websites: 19. Nioland – SaaS (variations with hovers).",
                                        "Focused CSS3 Properties: position: relative/absolute with transitions; z-index for hovers.",
                                        "Hour 1: Theory and Concepts – Debugging tools; revisions. Analyze Nioland snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: HTML setup. Hour 3: Add variations.",
                                        "Hour 4: Independent Challenge + Review – QA/debug; review cross-device."
                                    ],
                                    link: 'https://example.com/day5',
                                    demo: 'https://preview.themeforest.net/item/nioland-saas-app-landing-page-html-template/full_screen_preview/43790266'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Final Review',
                                    content: [
                                        "Websites: 20. Kane – Responsive Bootstrap 3 App (capstone integration).",
                                        "Focused CSS3 Properties: All: box model, positions (relative/absolute/fixed/sticky), z-index, transitions (for optimization/review).",
                                        "Hour 1: Theory and Concepts – Recap; optimization (minimize absolutes). Analyze Kane snapshot.",
                                        "Hours 2-3: Guided Practice – Hour 2: Build Kane. Hour 3: Refine priors.",
                                        "Hour 4: Independent Challenge + Review – Custom full page; debug. Review program."
                                    ],
                                    link: 'https://example.com/day6',
                                    demo: 'https://preview.themeforest.net/item/kane-responsive-bootstrap-3-app-landing-page/full_screen_preview/7131523'
                                }
                            ]
                        }
                    ],
                },
                module2: {
                    title: 'Module 2 - JavaScript Fundamentals',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'JavaScript Basics',
                            content: 'Variables, data types, operators, control structures, and functions. Learn the fundamentals of programming with JavaScript.',
                            link: 'https://example.com/module2-week1',
                        },
                        {
                            week: 2,
                            title: 'DOM Manipulation',
                            content: 'Learn to interact with HTML documents, handle events, and create dynamic web applications using the Document Object Model.',
                            link: 'https://example.com/module2-week2',
                        },
                    ],
                },
                module3: {
                    title: 'Module 3 - Expert AI - Multi Stack (500 USD Per Month) Guarnteed After Apperenticeship',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Async JavaScript',
                            content: 'Master promises, async/await, and asynchronous programming patterns. Learn to handle API calls and manage application state.',
                            link: 'https://example.com/module3-week1',
                        },
                        {
                            week: 2,
                            title: 'REST APIs & AJAX',
                            content: 'Working with REST APIs, fetch API, axios, and handling HTTP requests. Learn JSON data manipulation and error handling.',
                            link: 'https://example.com/module3-week2',
                        },
                    ],
                    expertAI: {
                        title: 'Expert AI - Multi Stack',
                        price: '500 USD Per Month',
                        years: {
                            year1: {
                                title: 'Year 1 - Foundation & Core Skills',
                                tabs: {
                                    highlights: [
                                        {
                                            title: 'AI Foundation',
                                            content: 'Master the fundamentals of AI development, machine learning algorithms, and full-stack development with modern frameworks. Learn Python, TensorFlow, and basic neural networks for building intelligent applications.',
                                        },
                                        {
                                            title: 'Core Projects',
                                            content: 'Build 5 real-world projects including a recommendation system, chatbot, and basic computer vision application. Hands-on experience with real datasets and deployment.',
                                        }
                                    ],
                                    authentication: [
                                        {
                                            title: 'AI Security Fundamentals',
                                            content: 'Learn authentication and authorization in AI systems. Implement secure API endpoints, user authentication for AI applications, and protect machine learning models from unauthorized access.',
                                        },
                                        {
                                            title: 'Data Privacy',
                                            content: 'Understand data privacy regulations and implement privacy-preserving techniques in AI systems. Learn about GDPR, data anonymization, and secure data handling.',
                                        }
                                    ],
                                    verification: [
                                        {
                                            title: 'Model Validation',
                                            content: 'Learn how to verify and validate AI models. Implement testing strategies for machine learning models, performance metrics, and quality assurance processes.',
                                        },
                                        {
                                            title: 'Quality Assurance',
                                            content: 'Comprehensive quality assurance processes for AI systems. Learn about testing methodologies, bug tracking, and continuous integration for AI projects.',
                                        }
                                    ]
                                }
                            },
                            year2: {
                                title: 'Year 2 - Advanced Specialization',
                                tabs: {
                                    highlights: [
                                        {
                                            title: 'Advanced AI Concepts',
                                            content: 'Deep dive into advanced AI concepts, neural networks, and specialized stack implementations for enterprise solutions. Focus on NLP, deep learning, and cloud deployment strategies.',
                                        },
                                        {
                                            title: 'Complex Projects',
                                            content: 'Develop complex AI systems including sentiment analysis tools, predictive models, and automated ML pipelines. Work with large datasets and real-time processing.',
                                        }
                                    ],
                                    authentication: [
                                        {
                                            title: 'Advanced Security',
                                            content: 'Advanced authentication methods for enterprise AI systems. Implement OAuth, JWT, multi-factor authentication, and secure microservices architecture.',
                                        },
                                        {
                                            title: 'Enterprise Security',
                                            content: 'Security protocols for enterprise-level AI deployments. Learn about security audits, penetration testing, and compliance requirements.',
                                        }
                                    ],
                                    verification: [
                                        {
                                            title: 'Advanced Validation',
                                            content: 'Advanced techniques for AI model verification. Implement automated testing, performance benchmarking, and model monitoring in production environments.',
                                        },
                                        {
                                            title: 'Production Monitoring',
                                            content: 'Monitor AI models in production environments. Learn about model drift detection, performance tracking, and automated alert systems.',
                                        }
                                    ]
                                }
                            },
                            year3: {
                                title: 'Year 3 - Expert Implementation',
                                tabs: {
                                    highlights: [
                                        {
                                            title: 'Expert Level AI',
                                            content: 'Work on real-world AI projects, lead development teams, and implement cutting-edge multi-stack solutions for global clients. Master MLOps, AI ethics, and scalable architectures.',
                                        },
                                        {
                                            title: 'Enterprise Projects',
                                            content: 'Lead enterprise-level AI implementations, optimize existing systems, and deploy AI solutions at scale for international clients across various industries.',
                                        }
                                    ],
                                    authentication: [
                                        {
                                            title: 'Enterprise Security',
                                            content: 'Enterprise-level authentication for large-scale AI systems. Implement SSO, role-based access control, and security governance frameworks.',
                                        },
                                        {
                                            title: 'Compliance & Standards',
                                            content: 'Industry compliance standards and security certifications for AI systems. Learn about ISO standards, security frameworks, and audit processes.',
                                        }
                                    ],
                                    verification: [
                                        {
                                            title: 'Enterprise Validation',
                                            content: 'Verification processes for enterprise AI implementations. Implement comprehensive testing strategies, quality gates, and validation frameworks.',
                                        },
                                        {
                                            title: 'Performance Optimization',
                                            content: 'Optimize AI systems for maximum performance and reliability. Learn about load testing, stress testing, and performance tuning techniques.',
                                        }
                                    ]
                                }
                            },
                        },
                    },
                },
                module4: {
                    title: 'Module 4 - Frontend Frameworks',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'React Fundamentals',
                            content: 'Learn React components, props, state, hooks, and modern React patterns. Build interactive user interfaces with reusable components.',
                            link: 'https://example.com/module4-week1',
                        },
                        {
                            week: 2,
                            title: 'React Advanced',
                            content: 'Context API, custom hooks, performance optimization, and React best practices. Learn to build scalable React applications.',
                            link: 'https://example.com/module4-week2',
                        },
                    ],
                },
                module5: {
                    title: 'Module 5 - Backend Development',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Node.js & Express',
                            content: 'Server-side JavaScript with Node.js, building REST APIs with Express, middleware, routing, and error handling.',
                            link: 'https://example.com/module5-week1',
                        },
                        {
                            week: 2,
                            title: 'Database Integration',
                            content: 'Working with MongoDB, Mongoose ODM, database design, queries, and data relationships. Learn CRUD operations.',
                            link: 'https://example.com/module5-week2',
                        },
                    ],
                },
                module6: {
                    title: 'Module 6 - Full Stack Integration',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Authentication & Authorization',
                            content: 'Implement JWT authentication, password hashing, role-based access control, and secure session management.',
                            link: 'https://example.com/module6-week1',
                        },
                        {
                            week: 2,
                            title: 'File Uploads & Storage',
                            content: 'Handle file uploads, cloud storage integration (AWS S3, Cloudinary), image optimization, and CDN usage.',
                            link: 'https://example.com/module6-week2',
                        },
                    ],
                },
                module7: {
                    title: 'Module 7 - Advanced Topics',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'State Management',
                            content: 'Redux, Redux Toolkit, Context API, and modern state management patterns. Learn to manage complex application state.',
                            link: 'https://example.com/module7-week1',
                        },
                        {
                            week: 2,
                            title: 'Testing & Deployment',
                            content: 'Unit testing, integration testing, Jest, React Testing Library, CI/CD pipelines, and deployment strategies.',
                            link: 'https://example.com/module7-week2',
                        },
                    ],
                },
                module8: {
                    title: 'Module 8 - Professional Development',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Performance Optimization',
                            content: 'Code splitting, lazy loading, caching strategies, lighthouse audits, and web vitals optimization.',
                            link: 'https://example.com/module8-week1',
                        },
                        {
                            week: 2,
                            title: 'Security Best Practices',
                            content: 'XSS prevention, CSRF protection, SQL injection prevention, HTTPS, and security headers implementation.',
                            link: 'https://example.com/module8-week2',
                        },
                    ],
                },
                specialization: {
                    title: 'Individual Profile After 8 Months',
                    description: '',
                    content: [
                        {
                            title: 'Full Stack Developer Portfolio',
                            description: '<p>After completing 8 months of intensive training, you will have built a comprehensive portfolio including:</p><ul class="list-disc pl-6 space-y-2"><li>E-commerce platform with payment integration</li><li>Social media application with real-time features</li><li>Content management system</li><li>RESTful API services</li></ul>',
                            imageLink: 'https://via.placeholder.com/800x400',
                            VideoLink: 'https://www.youtube.com/embed/example',
                            link: 'https://demo.example.com',
                        },
                    ],
                },
                teamOfTen: {
                    title: 'Team of Ten+ Projects',
                    description: '',
                    content: [
                        {
                            title: 'Enterprise Web Application',
                            description: '<p>Collaborative project building a large-scale web application:</p><ul class="list-disc pl-6 space-y-2"><li>Microservices architecture</li><li>Team-based development workflow</li><li>Agile methodology</li><li>Code reviews and quality assurance</li></ul>',
                            imageLink: 'https://via.placeholder.com/800x400',
                            VideoLink: 'https://www.youtube.com/embed/example',
                            link: 'https://demo.example.com',
                        },
                    ],
                },
                projects: {
                    title: 'Final Projects',
                    description: '',
                    content: [
                        {
                            title: 'Capstone Project - Full Stack Application',
                            description: '<p>Your final project demonstrates mastery of:</p><ul class="list-disc pl-6 space-y-2"><li>Complete MERN stack implementation</li><li>Responsive design and UX best practices</li><li>API integration and data management</li><li>Deployment and hosting</li><li>Documentation and presentation</li></ul>',
                            imageLink: 'https://via.placeholder.com/800x400',
                            VideoLink: 'https://www.youtube.com/embed/example',
                            link: 'https://demo.example.com',
                        },
                    ],
                },
                authentication: {
                    title: 'AI Tools Authentication',
                    description: '',
                    content: [
                        {
                            title: 'ChatGPT',
                            imageLink: 'https://via.placeholder.com/1345x300/4A90E2/FFFFFF?text=ChatGPT',
                        },
                        {
                            title: 'GitHub Copilot',
                            imageLink: 'https://via.placeholder.com/1345x300/000000/FFFFFF?text=GitHub+Copilot',
                        },
                        {
                            title: 'Cursor AI',
                            imageLink: 'https://via.placeholder.com/1345x300/7C3AED/FFFFFF?text=Cursor+AI',
                        },
                        {
                            title: 'Claude AI',
                            imageLink: 'https://via.placeholder.com/1345x300/D97706/FFFFFF?text=Claude+AI',
                        },
                    ],
                },
                agreement: {
                    title: 'Course Agreement',
                    description: '',
                    content: [
                        {
                            title: 'Enrollment Terms',
                            description: 'By enrolling in this course, you agree to attend all scheduled sessions, complete assignments on time, and maintain professional conduct throughout the program.',
                        },
                        {
                            title: 'Payment Policy',
                            description: 'Course fees must be paid in full before the start date. Installment options are available upon request. Refunds are subject to our refund policy terms.',
                        },
                        {
                            title: 'Code of Conduct',
                            description: 'Students must respect instructors and peers, participate actively in discussions, and maintain academic integrity. Plagiarism and cheating will result in dismissal.',
                        },
                        {
                            title: 'Intellectual Property',
                            description: 'All course materials, including videos, documents, and code examples, are proprietary and may not be shared or distributed without written permission.',
                        },
                        {
                            title: 'Completion Requirements',
                            description: 'To receive a certificate, students must complete 80% of assignments, pass the final project evaluation, and maintain consistent attendance throughout the course.',
                        },
                    ],
                },
            },
        },
        // You can add more courses here with the same structure
    ],
};