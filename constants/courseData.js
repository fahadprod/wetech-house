export const CoursesData = {
    courses: [
        {
            id: 'expert-ai-year-1',
            title: 'Expert AI - Year 1',
            color: 'rgba(54, 63, 70, 0.5)',
            modules: {
                highlights: {
                    title: 'Course Highlights Year 1',
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
                    title: 'Junior Front-End Developer: CSS & Sass Specialist: 105 Projects in 10 Weeks',
                    description: "This Module 1, spanning Weeks 1-10, offers an intensive curriculum focused on building practical skills in web development through hands-on projects. A detailed project calculation yields a total of 105 distinct projects and components. Capstones and integrations (e.g., responsive dashboards or landing pages) are not counted as separate projects, as they combine existing elements. The technology stack is foundational yet modern, emphasizing HTML for structure (using divs, classes, and semantic elements where applicable) and CSS3 for styling, including box model properties (width, height, margin, padding, border, box-sizing, overflow), positioning (relative, absolute, fixed, sticky, z-index), Flexbox (flex-direction, justify-content, align-items, flex-wrap, grow/shrink), and CSS Grid (template-columns/rows, fr, minmax, auto-fit, grid-areas). Sass is introduced in Weeks 9-10 as a preprocessor, incorporating variables, nesting, partials, mixins, extends, loops, conditionals, and the 7-1 architecture for modular, scalable code. Tools include code editors (e.g., VS Code), browsers with dev tools, NPM for Sass compilation, and basic JavaScript for interactions like toggles or carousels. No advanced frameworks like React are used, keeping the focus on pure front-end mastery. Upon completion, the student's worth is significant for entry-level roles, based on proficiency in converting UX/UI designs to pixel-perfect, responsive web pages. They would be about 85% ready as a UX/UI Design to HTML/CSS3 with Sass Developer, capable of handling static sites, layouts, and preprocessors independently, but may need 15% more real-world experience in accessibility, performance optimization, or team collaboration tools like Git. A fitting professional heading for them is 'Junior Front-End Developer: CSS & Sass Specialist.' Practice strength is rated at 90%, derived from the program's daily 4-hour (On Campus) + (4 hours Online) structure (theory, guided builds, independent challenges) across 54+ training days, emphasizing debugging, responsive testing (320px-1440px), and iterative reviews. This high percentage reflects deep repetition in layouts and components, fostering muscle memory for production-ready code, though supplementing with live client projects could push it to 100%.",
                    content: [
                        {
                            week: 1,
                            title: 'Week 1: Foundations of Box Model and Relative Positioning',
                            content: "Focus on box model basics (width, height, margin, padding, border, box-sizing: border-box) and relative positioning for abstract box arrangements. All 13 layouts are geometric designs using colored/bordered divs to visualize concepts. Theory covers calculating element sizes, content-box vs. border-box, overflow handling, margin collapsing, relative offsets, z-index, and hover transitions. Practice builds centered squares, nested boxes, scrollable overflows, side-by-side adjacencies, shifted/aligned stacks, hover effects, overlapped layers, and grid-like rows/columns via percentages and margins. Guided sessions construct layouts step-by-step; independent challenges modify prior work, debug issues like collapses or flow disruptions, and combine into a 2x3 grid or full page. Review emphasizes browser dev tools inspection, cross-browser testing, and integrating all layouts into one cohesive abstract website. Mastery goal: Precise spacing and subtle adjustments without disrupting document flow.",
                            listOfProjects: [
                                "Centered squares",
                                "Nested boxes",
                                "Scrollable overflows",
                                "Side-by-side adjacencies",
                                "Shifted/aligned stacks",
                                "Hover effects",
                                "Overlapped layers",
                                "Grid-like rows/columns (using percentages and margins)",
                                "A 2x3 grid",
                                "A full page layout",
                                "One cohesive abstract website integrating all individual layouts",
                                "A complex Layout",
                                "A more complex Layout"
                            ],
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
                            listOfProjects: [
                                "Centered Absolute Box (abstract)",
                                "Profile Header — Absolute Photo Over Banner",
                                "Skills Dropdown (CV: absolute sub-list)",
                                "Experience Tooltip",
                                "Layered Profile Cards (using z-index)",
                                "Photo Caption (absolute text over image)",
                                "Fixed Navigation Bar",
                                "Fixed Contact Sidebar",
                                "Profile Modal (fixed overlay + centered absolute)",
                                "Fixed Download Button (bottom-right)",
                                "Fixed Footer",
                                "Absolute Endorsements (overlay badges/elements)",
                                "Overlapping Timeline (absolute positioning)"
                            ],
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
                            listOfProjects: [
                                "Sticky section header (CV)",
                                "Sticky profile sidebar",
                                "Skills slider",
                                "Project gallery",
                                "Sliding education panel",
                                "Off-canvas menu",
                                "Full CV layout",
                                "Portfolio profile",
                                "Profile card",
                                "Endorsement badges",
                                "Centered login modal",
                                "Complete résumé page",
                                "Dashboard profile",
                                "Landing profile"
                            ],
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
                            listOfProjects: [
                                "Charles Business-Consulting",
                                "Fashion Landing Page",
                                "Okno – Ultimate Multipurpose",
                                "PURE – Sublime Coming Soon",
                                "Consider – Multi-Purpose",
                                "Triablo – eCommerce"
                            ],
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
                            title: 'Week 5: Practice: Absolute and Fixed Positioning',
                            content: "Focus: Precise placement for websites like Haswell – Multipurpose, Moto – Multipurpose, Pacifico – Multipurpose, Seppo – Corporate, NextSaaS – SaaS, Aplio – Fintech, SaaSox – SaaS. Emphasize properties: position: absolute with offsets/transform for centering; absolute in relative with display for triggers; z-index for stacking; position: fixed with top/left for viewports; fixed/absolute with width/height for overlays/modals; combined for scroll/resize handling. Theory covers flow removal, hover pitfalls, contexts/ordering, scrolling issues, sizing. Practice builds wrappers/sections/nav/modals. Challenges add/custom/stack/debug/integrate. Review addresses pitfalls, progress checks.",
                            listOfProjects: [
                                "Haswell – Multipurpose",
                                "Moto – Multipurpose",
                                "Pacifico – Multipurpose",
                                "Seppo – Corporate",
                                "NextSaaS – SaaS",
                                "Aplio – Fintech",
                                "SaaSox – SaaS"
                            ],
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
                            listOfProjects: [
                                "Appilo – App & SaaS",
                                "Sofbox – Software",
                                "SassGen – SaaS",
                                "SaaSify – Startup",
                                "Bulkit – Agency",
                                "Nioland – SaaS",
                                "Kane – Responsive Bootstrap 3 App"
                            ],
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
                        },
                        {
                            week: 7,
                            title: 'Week 7: Flexbox and Grid Mastery for Responsiveness',
                            content: "This week, Flexbox + Grid Mastery Training enables building 20 real-world UI components (10 Flexbox, 10 Grid) and 18 advanced assignments. First focus on Flexbox: mastering alignment, spacing, and flow through galleries, sticky footers, blog posts, pricing tables, product grids, and sign-up forms. Key advantages include natural reflow via flex-wrap, equal-height cards, and mobile-first stacking for better touch targets and visual hierarchy. Then shift to Grid: rebuilding layouts with auto-fit, minmax(), and grid-template-areas for precise 2D control in galleries, pricing, forms, and team sections. Grid eliminates reflow issues and reduces media queries, enhancing maintainability and semantic structure. The program culminates in a mini-capstone: combining all components into a responsive landing page (320px–1440px). Flexbox excels in 1D flow; Grid dominates 2D precision. Together, they deliver accessible, performant, layout-shift-free designs ready for design systems.",
                            listOfProjects: [
                                "Full-Width Gallery (Flexbox)",
                                "Sticky Footer (Flexbox)",
                                "Blog Posts (Flexbox)",
                                "Pricing Tables (Flexbox)",
                                "Pricing Component (Flexbox)",
                                "Gallery Grid (Flexbox)",
                                "Responsive Product Grid (Part 1 & 2, Flexbox)",
                                "Sign Up Page (Flexbox)",
                                "Featured Products (Flexbox)",
                                "Full-Width Gallery (Grid)",
                                "Sticky Footer (Grid)",
                                "Blog Posts (Grid)",
                                "Pricing Tables (Grid)",
                                "Pricing Component (Grid)",
                                "Gallery Grid (Grid)",
                                "About Section (Grid)",
                                "Responsive Product Grid (Grid)",
                                "Sign Up Form (Grid)",
                                "Call to Action (Grid Assignment)",
                                "Team (Grid Assignment)",
                                "Contact (Grid Assignment)",
                                "Navbar (Grid Assignment)",
                                "Header (Grid Assignment)",
                                "Product Carousel (Grid Assignment)",
                                "Shopping Cart (Grid Assignment)",
                                "Footer (Grid Assignment)",
                                "Sign Up Form (Grid Assignment)",
                                "Flexbox Layouts (1D mastery, final integration)",
                                "Grid Layouts (2D precision, final integration)",
                                "Mini-Capstone: Full Responsive Landing Page (Combined Integration)",
                                "Flexbox Navbars",
                                "Flexbox Forms",
                                "Flexbox Carousels",
                                "Grid Galleries",
                                "Grid Cards",
                                "Grid Page Structure",
                                "Accessible, Performant Layouts (Final Outcome)",
                                "Advanced Combinations, CSS Variables, Design Systems (Future Ready)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Flexbox Foundations – Alignment & Flow',
                                    content: [
                                        "Layouts (Flexbox): 1 (Full-Width Gallery), 2 (Sticky Footer), 3 (Blog Posts)",
                                        "Hour 1 – Theory & Whiteboarding: display: flex, flex-direction, justify-content, align-items, gap, flex-wrap. UI/UX Win: Auto-spacing → visual rhythm; stretch → equal card heights. Whiteboard: Gallery (space-between), Sticky Footer (min-height: 100vh), Blog (wrap)",
                                        "Hours 2–3 – Guided Coding: Build responsive gallery (stack on mobile). Code sticky footer (margin-top: auto). Develop blog cards with gap + hover scale",
                                        "Hour 4 – Challenge: Stack vertically <600px; test no horizontal scroll. Responsive Advantage: flex-wrap → natural reflow, zero layout shift"
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Flexbox for Components & Pricing',
                                    content: [
                                        "Layouts (Flexbox): 4 (Pricing Tables), 5 (Pricing Component), 6 (Gallery Grid)",
                                        "Hour 1 – Theory: flex-grow/shrink/basis, order, align-self. Centering: margin: auto vs justify/align. Whiteboard: 3-tier pricing, vertical CTA, flexible gallery",
                                        "Hours 2–3 – Coding: Pricing Tables: Highlight middle (transform: scale(1.05)). Pricing Component: CTA pinned with margin-top: auto. Gallery Grid: flex: 1 1 300px + gap",
                                        "Hour 4 – Challenge: Reverse order on mobile; add hover uplift. UI/UX Win: Visual hierarchy → faster decision-making"
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Responsive Forms & Product Grids (Flexbox)',
                                    content: [
                                        "Layouts (Flexbox): 7 (Responsive Product Grid – Parts 1 & 2), 8 (Sign Up Page), 9 (Featured Products)",
                                        "Hour 1 – Theory: Simulate grids with flex-basis + media queries. Form alignment: labels above inputs on mobile. Whiteboard: 4→2→1 product grid, centered form, horizontal featured",
                                        "Hours 2–3 – Coding: Product Grid: 4-col → 1-col, consistent gutters. Sign Up Page: Vertically centered form. Featured Products: Scroll snap with flex-shrink: 0",
                                        "Hour 4 – Challenge: Add focus/error states; reverse featured on mobile. Responsive Advantage: flex-direction: column → better touch targets"
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Grid Introduction – 2D Precision',
                                    content: [
                                        "Layouts (Grid): 1 (Full-Width Gallery), 2 (Sticky Footer), 3 (Blog Posts) — Rebuilt with Grid",
                                        "Hour 1 – Theory & Whiteboarding: display: grid, grid-template-columns/rows, fr, minmax(), auto-fit. Why Grid? → Explicit 2D control, no reflow hacks. Whiteboard: Gallery (repeat(auto-fit, minmax(250px, 1fr))), Blog (grid-auto-rows)",
                                        "Hours 2–3 – Guided Coding: Grid Gallery: Auto-fit columns, perfect gutters. Sticky Footer: grid-template-rows: 1fr auto. Blog Posts: Equal height via minmax()",
                                        "Hour 4 – Challenge: Compare Flexbox vs Grid → Grid wins for alignment precision. UI/UX Advantage: No unexpected reflow; semantic structure"
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Grid for Complex Components',
                                    content: [
                                        "Layouts (Grid): 4 (Pricing Tables), 5 (Pricing Component), 6 (Gallery Grid), 10 (About Section)",
                                        "Hour 1 – Theory: grid-template-areas, grid-column/row, named lines. Highlighting with z-index + grid-area. Whiteboard: 3-col pricing, vertical component, masonry, two-col about",
                                        "Hours 2–3 – Coding: Pricing Tables: repeat(3, 1fr). Pricing Component: grid-template-rows for sections. Gallery Grid: grid-auto-rows: 10px + span. About Section: Image left, text right → stack on mobile",
                                        "Hour 4 – Challenge: Stack pricing on mobile; add dense packing. UI/UX Win: Named areas → maintainable, scannable code"
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Grid for Forms & Assignments (Mini-Capstone)',
                                    content: [
                                        "Layouts (Grid): 7 (Responsive Product Grid), 8 (Sign Up Page) Assignments (Grid): Call to Action, Team, Contact, Navbar, Header, Product Carousel, Shopping Cart, Footer, Sign Up Form",
                                        "Hour 1 – Planning: Map 9 Grid assignments to real UI blocks. Define breakpoints: mobile (1-col), tablet (2-col), desktop (3–12-col)",
                                        "Hours 2–3 – Guided Build: Product Grid: auto-fit, minmax(200px, 1fr). Sign Up Form: Label/input alignment. Team Section: 3-col cards. Shopping Cart: Table-like grid. Navbar/Header/Footer: Grid-based overlays",
                                        "Hour 4 – Mini-Capstone Challenge: Combine all 9 Grid assignments + Flexbox Layouts 1–9 into a responsive landing page. Test: 320px → 1440px, no layout shift"
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 8,
                            title: 'Week 8: Crafting Professional Sites Using Modern Markup and Styling',
                            content: "This week, 8-hour-per-day program equips learners to build professional, responsive websites using modern HTML and CSS, centered on a Nutrition Service Platform project. The week emphasizes design principles (color harmony, typography, spacing, visual hierarchy), reusable components (accordions, carousels, modals), and responsive architecture using relative units, max/min-width constraints, and fluid layouts. Participants progress from foundational aesthetics and component design to full-site implementation—starting with broad desktop layouts, adapting via flexible grids and media queries, and culminating in performance-optimized, animated, deployment-ready interfaces. Key outcomes include mastery of inclusive, scalable design, cross-device consistency, and efficient code practices. Learners enhance UI/UX through balanced whitespace, intuitive interactions, and smooth transitions. The capstone integrates all skills into a polished, accessible platform, with final review reinforcing best practices and extension pathways.",
                            listOfProjects: [
                                "Nutrition Service Platform (Profile Showcase Project)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Standards for Platform Appearance and Framework',
                                    content: [
                                        "Material: Investigate primary criteria for aesthetic quality, encompassing balance in hues, character formatting, gap management, and a methodical strategy for developing compelling exteriors.",
                                        "Targeted Attributes: Surface tones, typeface selection, vertical spacing, blank area control.",
                                        "Hour 1: Ideas and Clarification – Examine appearance standards, possible imbalances, inspect model creations.",
                                        "Hours 2-3: Supervised Construction – Hour 2: Establish markup for primary parts. Hour 3: Apply styling for aesthetic equilibrium and organization.",
                                        "Hour 4: Autonomous Assignment + Assessment – Modify hue arrangements; address gap issues. Assess compared to models."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Parts and Configuration Designs',
                                    content: [
                                        "Material: Review adaptable units such as expandable panels, rotating displays, data grids, and standard assembly approaches to form expert interfaces.",
                                        "Targeted Attributes: Visibility modes, hidden states, virtual states for engagements.",
                                        "Hour 1: Ideas and Clarification – Discuss unit formation, reuse challenges, evaluate usual assemblies.",
                                        "Hours 2-3: Supervised Construction – Hour 2: Markup for diverse units. Hour 3: Styling to format and locate segments.",
                                        "Hour 4: Autonomous Assignment + Assessment – Alter a unit; correct engagement flaws. Evaluate operation."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Nutrition Service Platform – Start and Broad Display',
                                    content: [
                                        "Material: Commence the hands-on exercise by arranging documents, forming main framework, and crafting the wide-oriented look with areas for attributes, endorsements, and prompts to engage.",
                                        "Targeted Attributes: Placement comparative, excess handling, layer priority for overlapping.",
                                        "Hour 1: Ideas and Clarification – Describe exercise initiation, typical arrangement flaws, study wide layout instances.",
                                        "Hours 2-3: Supervised Construction – Hour 2: Markup skeleton for platform. Hour 3: Styling for wide formatting and allocation.",
                                        "Hour 4: Autonomous Assignment + Assessment – Insert a fresh area; resolve overlapping. Assess total framework."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Nutrition Service Platform – Flexible Platform Assembly',
                                    content: [
                                        "Material: Modify the exercise for multiple tools, guaranteeing smooth modifications in dimensions, visuals, and routing without rigid thresholds.",
                                        "Targeted Attributes: Upper limit width, lower limit width, ratio-based measurements, adjustment queries (simplified if required).",
                                        "Hour 1: Ideas and Clarification – Clarify flexibility concepts, expansion obstacles, examine adaptable instances.",
                                        "Hours 2-3: Supervised Construction – Hour 2: Improve markup for flexibility. Hour 3: Styling changes for smooth adaptation.",
                                        "Hour 4: Autonomous Assignment + Assessment – Examine on varied dimensions; fix expansion problems. Assess flexibility."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Nutrition Service Platform – Upgrades, Refinements, and Release',
                                    content: [
                                        "Material: Integrate aesthetic enhancements like movements, polish efficiency via script tidying, visual reduction, and ready for digital placement.",
                                        "Targeted Attributes: Movement duration, transparency, alteration for motions, refinement methods.",
                                        "Hour 1: Ideas and Clarification – Talk about enhancement inclusion, refinement approaches, placement procedures.",
                                        "Hours 2-3: Supervised Construction – Hour 2: Insert markup for enhancements. Hour 3: Styling upgrades and polishes.",
                                        "Hour 4: Autonomous Assignment + Assessment – Execute personalized motion; refine and mimic release. Assess efficiency."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Summary and Closure',
                                    content: [
                                        "Material: Recap main insights, investigate additional materials, and rehearse by expanding the exercise or addressing typical problems.",
                                        "Targeted Attributes: Overview all: allocation, dimensions, enhancements for thorough utilization.",
                                        "Hour 1: Ideas and Clarification – Summarize refined subjects, talk about subsequent actions, examine expanded instances.",
                                        "Hours 2-3: Supervised Construction – Hour 2: Polish exercise markup. Hour 3: Implement ultimate styling adjustments.",
                                        "Hour 4: Autonomous Assignment + Assessment – Assemble an extension; resolve completely. Assess total abilities acquired."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 9,
                            title: 'Week 9: SASS-Driven CSS Mastery Training',
                            content: "This intensive 8-hour-per-day program transforms learners into proficient front-end developers by building three professional websites—Swattours (tour agency), Avari (hotel booking), and Vveba (real estate)—using Sass, modern CSS architecture, and responsive layout systems. Each day follows a proven structure: Hour 1 explores core concepts (cascade, specificity, BEM, 7-1 pattern) with Sass fundamentals (variables, nesting, mixins, partials); Hours 2–3 deliver guided, project-based coding; Hour 4 focuses on independent refinement and mobile optimization. Participants master Sass-powered workflows via NPM: local compilation, watch scripts, and build processes. The 7-1 architecture ensures scalable, maintainable code. Responsive design is embedded using mobile-first principles, Sass media query mixins, and fluid typography. Projects progress logically: Swattours (floats + Sass), Avari (Flexbox + custom properties), Vveba (CSS Grid + auto-fit). Learners implement reusable components, animated buttons, pure CSS popups, and responsive images (srcset, picture). The capstone integrates top components into a unified responsive dashboard, optimized and deployment-ready.",
                            listOfProjects: [
                                "SwatTours (Tour Agency Website)",
                                "Avari (Luxury Hotel Booking UI)",
                                "Vveba (Real Estate Platform)",
                                "Capstone Responsive Dashboard (Synthesis Project)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: SASS Environment & CSS Core',
                                    content: [
                                        "Focus: Swattours Header + Button",
                                        "Hour 1 – Concepts & Sass: Sass Essentials: Variables, nesting, partials, @mixin, @extend, functions. CSS Mechanics: Cascade, specificity, inheritance, rem conversion. 7-1 Pattern: Split into base/, components/, layout/, etc. BEM Syntax: .block__element--modifier",
                                        "Hours 2–3 – Build: Install Sass via NPM, create watch scripts. Migrate CSS to Sass: Color/spacing variables, nested header rules. Craft animated button using @mixin hover-effect()",
                                        "Hour 4 – Task: Organize header in 7-1 folders, enable live reload. UX Gain: Uniform spacing via $gap-lg, reusable buttons"
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: SASS Structure & Swattours Sections',
                                    content: [
                                        "Focus: About, Features, Tours",
                                        "Hour 1 – Concepts: 7-1 in Action: _grid.scss, _card.scss. Float grids with Sass loops. Dynamic utilities via @for/@if",
                                        "Hours 2–3 – Build: Create float-based grid with Sass loops. Develop About, Features, Tours using BEM partials. Prepare @mixin break($size) for media queries",
                                        "Hour 4 – Task: Build reusable card with @extend, reuse across sections. Responsive Edge: Central breakpoint config"
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: SASS Media Queries & Swattours Finish',
                                    content: [
                                        "Focus: Stories, Booking, Footer, Nav, Popup",
                                        "Hour 1 – Concepts: Mobile-First strategy, breakpoint planning. Sass Media Mixins: @mixin respond($bp). Responsive images: srcset, picture, art direction",
                                        "Hours 2–3 – Build: Apply media queries via Sass mixins. Construct Stories (shapes), Booking, Footer, Nav, CSS Popup. Use @supports for fallbacks",
                                        "Hour 4 – Task: Optimize images, set up NPM build, generate clean CSS. UX Gain: Fluid type with clamp(), smooth modals"
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Flexbox + SASS – Hotel Booking UI',
                                    content: [
                                        "Focus: Hotel Booking",
                                        "Hour 1 – Concepts: Flexbox Logic: Container, items, flex, order. Sass + Flexbox: Gap variables, alignment mixins. Setup with CSS Variables + Sass",
                                        "Hours 2–3 – Build: Develop Header, Nav, Overview, Description, Reviews, CTA. Use Sass maps for themes, @each for avatars",
                                        "Hour 4 – Task: Add responsive nav collapse via Sass. Responsive Edge: flex-wrap + order → flawless stacking"
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: CSS Grid + SASS – Real Estate Start',
                                    content: [
                                        "Focus: Real Estate",
                                        "Hour 1 – Concepts: Grid Philosophy: fr, minmax(), auto-fit, named areas. Sass + Grid: Dynamic lines, config-driven layouts. Explicit vs implicit grids",
                                        "Hours 2–3 – Build: Define page layout with grid-template-areas. Build Features, Story, Homes, Gallery",
                                        "Hour 4 – Task: Create masonry gallery using span. UX Gain: Pixel-perfect alignment, no gaps"
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Grid Final + Full Integration',
                                    content: [
                                        "Focus: Real Estate (Sidebar, Header, Realtors) + Synthesis",
                                        "Hour 1 – Strategy: Review all project components. Sass Discipline: DRY, modular, scalable",
                                        "Hours 2–3 – Build: Complete Sidebar, Header, Realtors. Final media queries with Sass mixins. Add @supports grid fallbacks",
                                        "Hour 4 – Capstone: Merge top components from all projects into one responsive dashboard. Optimize: Minify, purge, test 320px–1440px"
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 10,
                            title: 'Week 10: Fully Responsive with Sass Assignments',
                            content: "This hands-on (8 hours/day) transforms learners into responsive web builders through three assignment-driven websites: Elena Voss Portfolio, Luxe Haven Villas, and PeakPulse Gym. Each day blends theory, guided coding, and independent challenges to master Flexbox, CSS Grid, Sass, and UI/UX fundamentals. First focus on Flexbox and UI design principles (whitespace, contrast, hierarchy, typography). Learners build Elena's responsive portfolio: side/main nav, hero, work, skills, and contact sections using flex-wrap, align-items, viewport units, and media queries. Then shift to CSS Grid, constructing Luxe Haven with grid-template-areas, auto-fit, minmax(), and a JavaScript-powered gallery carousel. Precise 2D layouts ensure pixel-perfect villas, booking forms, and testimonials. Finally revise Sass (variables, mixins, partials, 7-1 architecture) to power PeakPulse Gym. Dark mode, form validation, and modular styling are implemented via loops, conditionals, and theme maps. Outcomes: 60% less CSS with Sass, zero layout shift, mobile-first design, and scalable code.",
                            listOfProjects: [
                                "Elena Voss Personal Portfolio",
                                "Luxe Haven Villas (Luxury Real Estate)",
                                "PeakPulse Gym (Dark-Mode Fitness Site)",
                                "Agency Landing Page (Capstone Bonus)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Flexbox Mastery + UI Design Principles',
                                    content: [
                                        "Assignment: Elena Voss Portfolio – Nav, Hero, Work",
                                        "Hour 1 – Theory & Challenge: Flexbox Core: flex-direction, justify-content, align-items, flex-wrap, order, flex-grow/shrink/basis. UI Fundamentals: Whitespace, alignment, contrast, scale, typography, color, visual hierarchy. Challenge 1: Sketch responsive nav (mobile → desktop)",
                                        "Hours 2–3 – Guided Build: Setup: VS Code, Firefox DevTools, box-sizing: border-box. Build Side Nav, Main Nav (responsive toggle), Hero (centered content). Apply viewport units (vh, vw) for full-screen hero",
                                        "Hour 4 – Assignment: Code Work Section (flex cards, hover scale). Responsive Fix: Stack nav vertically <768px. UI Win: Clean spacing, scannable hierarchy"
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Flexbox Deep Dive + Portfolio Completion',
                                    content: [
                                        "Assignment: Elena Voss – About, Services, Skills, Testimonials, Contact",
                                        "Hour 1 – Theory: Flex Item Control: align-self, flex shorthand. Responsive Units: rem, max-width, media queries. Challenge 2: Design skill bars with flex",
                                        "Hours 2–3 – Build: About Me, Services (flex columns), Skills (progress bars via flex-basis). Testimonials (flex carousel layout), Contact (form alignment)",
                                        "Hour 4 – Assignment: Make entire site responsive using media queries + viewport units. Add sticky footer with min-height: 100vh. UX Gain: Consistent rhythm, touch-friendly targets"
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: CSS Grid + Luxe Haven Villas Start',
                                    content: [
                                        "Assignment: Luxe Haven Villas – Layout, Header, Booking",
                                        "Hour 1 – Theory: Grid Essentials: grid-template-columns/rows, fr, repeat(), gap, minmax(). Grid Placement: grid-column/row, span, named lines, grid-template-areas. Challenge: Plan 12-col grid system",
                                        "Hours 2–3 – Build: Setup overall layout with grid-template-areas. Build Header, Nav (multi-level), Booking Form (grid-aligned inputs)",
                                        "Hour 4 – Assignment: Code Villas Grid (3-col → 1-col), Motto, Events. Responsive Fix: auto-fit for villa cards. UI Win: Perfect alignment, no float hacks"
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Grid Advanced + Villas Features',
                                    content: [
                                        "Assignment: Luxe Haven – Gallery Carousel, Features, Testimonials, Footer",
                                        "Hour 1 – Theory: Grid Auto: auto-fill/fit, grid-auto-rows, min-content. Alignment: justify/align/place-items/content/self. Challenge: Design masonry gallery",
                                        "Hours 2–3 – Build: Gallery Carousel (grid + JS for navigation). Features, Testimonials (grid cards), Footer (multi-column)",
                                        "Hour 4 – Assignment: Add full JS carousel (prev/next, indicators). Make all sections responsive. UX Gain: Smooth scrolling, accessible controls"
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Sass Mastery + PeakPulse Gym Start',
                                    content: [
                                        "Assignment: PeakPulse Gym – Header, Showcase, Motto",
                                        "Hour 1 – Theory & Sass Setup: Sass Install: Node-Sass or VS Code extension. Sass Power: Variables, maps, nesting, partials, @import, @mixin, @extend, loops, conditionals. Challenge: Create color theme map",
                                        "Hours 2–3 – Build: Setup 7-1 Sass architecture. Build Header (dark mode toggle), Showcase (hero), Motto. Use Sass mixins for responsive spacing",
                                        "Hour 4 – Assignment: Implement dark mode with Sass map + JS toggle. Responsive Fix: Mobile menu collapse. Scalability Win: Theme switch in 1 line"
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Sass + Full Gym + Capstone',
                                    content: [
                                        "Assignment: PeakPulse – Features, Trainers, Clients, Register, Footer + Capstone",
                                        "Hour 1 – Strategy: Sass Workflow: Partials, loops for trainers, conditionals for form validation. Review all 3 sites",
                                        "Hours 2–3 – Build: Features, Trainers (grid), Clients (logos), Register Form (validation). Footer, Scroll to Top button",
                                        "Hour 4 – Capstone Assignment: Combine best sections from all 3 sites into one responsive agency landing page. Optimize: Compile Sass → minified CSS, test 320px–1440px"
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        }
                    ],
                },
                module2: {
                    title: 'Full-Stack Junior UI/UX + Front-End Developer (Design-to-Code Specialist Pathway)',
                    description: "This transformative Module 2 delivers one of the fastest, most complete, and highest-ROI pathways from absolute beginner to paid professional in 2025. By combining Figma-first design mastery with deep CSS/Sass implementation and a mandatory design-to-code bridge, graduates emerge as rare end-to-end hybrids who can independently deliver interactive prototypes and pixel-perfect, production-ready code. Phase 1: Figma UI/UX Mastery – The 6-Day Intensive (48 total hours: 24 on-site + 24 online) delivers complete beginners to confident junior designers in one week. Phase 1A covers Figma Essentials: full interface mastery, core UX principles (personas, hierarchy, user flows), wireframing → high-fidelity mockups, reusable components, multi-state variants, style guides, and basic prototyping. Phase 1B advances to Figma Advanced (2024–2025 industry standards): nested Auto Layout for responsive components, design tokens & variables (theming, light/dark mode), advanced animations (Lottie, gradient shifts, path morphing, hover states), complex prototyping (sticky scroll, conditional logic, boolean variables), full accessibility (contrast, focus order, ARIA), and Dev Mode handoff. Phase 2 – Mandatory Self-Study Bridge (20 Figma-to-Code Conversions) cements unbreakable design-to-code fluency. Total Portfolio Output: 128+ Professional Assets including 3–5 advanced interactive Figma prototypes + capstone, 105 fully coded websites/components, and 20 production-grade Figma versions. Combined Technology Stack: Figma (Variables, Nested Auto Layout, Advanced Prototyping, Dev Mode), HTML5, CSS3 (Flexbox + Grid mastery), Sass 7-1, Vanilla JS, NPM. Practice Strength: 98% across 450+ hours and 128+ real projects. Professional Positioning: 'Junior UI/UX + Front-End Developer | Figma-First Design → Pixel-Perfect HTML/CSS/Sass Specialist | 128+ Design-to-Code Projects'.",
                    content: [
                        {
                            week: 11,
                            title: 'Week 11: Figma Design Mastery Intensive',
                            content: "Week 11 launches the pivotal Phase 1 of Module 2: a high-intensity, 48-hour (24 on-site + 24 online) Figma UI/UX Design Intensive that transforms absolute beginners into confident, portfolio-ready junior designers in just one focused week. Using the proven 8-hour daily rhythm of 'Theory → Guided Practice → Independent Challenge', participants rapidly progress from zero knowledge to professional-grade mastery. The curriculum is deliberately structured in two seamless stages: Figma Essentials where students immediately master the full Figma interface alongside core UX principles—personas, visual hierarchy, user flows, and information architecture, learning to translate ideas into low-fidelity wireframes and high-fidelity mockups, build reusable components with multi-state variants, and add micro-interactions using Smart Animate; and Figma Advanced – 2024–2025 Industry Standards covering nested Auto Layout mastery for truly responsive components, design tokens and variables for themeable systems, advanced animations including Lottie integrations, complex prototyping with sticky scrolling and conditional logic, full accessibility implementation, and professional developer handoff via Dev Mode. The intensive culminates in a high-impact capstone project: each student delivers a fully interactive, multi-screen portfolio piece that seamlessly integrates every concept covered.",
                            listOfProjects: [
                                "Simple Mobile App Wireframe + Basic Interactive Flow",
                                "Personal Profile / Portfolio Page (High-Fidelity + Interactive)",
                                "Animated Prototype with Advanced Interactions",
                                "20 Self-Assignment Projects (Figma-to-Code Conversions)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Figma Essentials – Introduction and Basics',
                                    content: [
                                        "Focus: Course intro, UX concepts, Figma interface, basic tools.",
                                        "Topics: UX personas, simple wireframes, box model equivalents in Figma (frames, shapes).",
                                        "Hour 1: Theory – Explain UX brief, interface navigation.",
                                        "Hours 2-3: Guided – Create wireframe for a simple app page.",
                                        "Hour 4: Challenge – Add basic interactions; review flow."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Figma Essentials – Design Elements and Components',
                                    content: [
                                        "Focus: Colors, images, typography, UI components, constraints.",
                                        "Topics: Implementing colors/images, typography best practices, creating icons/buttons.",
                                        "Hour 1: Theory – Discuss visual hierarchy, multi-dimensional variants.",
                                        "Hours 2-3: Guided – Build UI kit with reusable components.",
                                        "Hour 4: Challenge – Customize a profile page; debug constraints."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Figma Essentials – Prototyping and Review',
                                    content: [
                                        "Focus: Style guides, micro-interactions, animations, interactive prototypes.",
                                        "Topics: Plugins/UI kits, basic animations, prototyping flows.",
                                        "Hour 1: Theory – Cover interactions, user testing basics.",
                                        "Hours 2-3: Guided – Prototype a CV/profile site.",
                                        "Hour 4: Challenge – Integrate all elements into a full mockup; self-evaluate."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Figma Advanced – Autolayouts and Components',
                                    content: [
                                        "Focus: Multilevel nested autolayouts, robust components, variables/design tokens.",
                                        "Topics: Advanced layouts, properties, workflow tips (assets, styles, grids).",
                                        "Hour 1: Theory – Discuss nested structures, token management.",
                                        "Hours 2-3: Guided – Build responsive component library.",
                                        "Hour 4: Challenge – Apply to a complex UI; test resizing."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Figma Advanced – Animations and Responsive Design',
                                    content: [
                                        "Focus: Advanced animations (gradients, Lottie, paths), responsive techniques, shortcuts/plugins.",
                                        "Topics: Absolute positioning, masking, typography features, AI integration.",
                                        "Hour 1: Theory – Explore animation pitfalls, AI tools.",
                                        "Hours 2-3: Guided – Create animated prototypes with responsive elements.",
                                        "Hour 4: Challenge – Add hover effects, search bars; debug on devices."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Figma Advanced – Prototyping, Accessibility, and Capstone',
                                    content: [
                                        "Focus: Advanced prototyping (sticky scrolls, booleans), accessibility, collaboration, exporting.",
                                        "Topics: Variant reduction, user testing, developer handoff, professional workflows.",
                                        "Hour 1: Theory – Recap advanced features, best practices.",
                                        "Hours 2-3: Guided – Build full UX project (e.g., app dashboard).",
                                        "Hour 4: Challenge – Create portfolio piece integrating essentials/advanced; review/optimize."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 12,
                            title: 'Week 12: Design-to-Code Bridge & Portfolio Integration',
                            content: "This week focuses on the crucial Phase 2 – Mandatory Self-Study Bridge where students independently take 20 of their best Module 1 coded projects and recreate them first in Figma using everything learned in Module 2 (perfect Auto Layout, variables, advanced prototyping), then re-code them again with even higher fidelity. This reverse-and-forward cycle cements unbreakable design-to-code fluency and creates a comprehensive portfolio showcasing both design thinking and technical implementation skills. Students learn to think like senior developers by anticipating implementation challenges during the design phase, eliminating the typical junior gap between design and development. The week emphasizes creating production-ready design systems, establishing consistent design tokens that translate directly to CSS custom properties, and building modular component libraries that work seamlessly across both design and code environments. By the end of Week 12, students have a complete 128+ project portfolio demonstrating their unique hybrid capabilities.",
                            listOfProjects: [
                                "20 Self-Assignment Design-to-Code Conversions",
                                "Portfolio Integration Project",
                                "Design System Documentation",
                                "Component Library Showcase"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Project Selection & Design System Setup',
                                    content: [
                                        "Focus: Selecting 20 best Module 1 projects for conversion, establishing design system foundation.",
                                        "Topics: Project prioritization, design token creation, component architecture planning.",
                                        "Hour 1: Theory – Design system principles, token mapping strategies.",
                                        "Hours 2-3: Guided – Set up comprehensive design system in Figma with variables.",
                                        "Hour 4: Challenge – Convert first 2 projects to high-fidelity Figma designs."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Advanced Component Recreation',
                                    content: [
                                        "Focus: Recreating complex components with proper Auto Layout and variants.",
                                        "Topics: Nested Auto Layout, component states, responsive behavior design.",
                                        "Hour 1: Theory – Advanced component architecture, variant best practices.",
                                        "Hours 2-3: Guided – Convert 4 complex components with all interaction states.",
                                        "Hour 4: Challenge – Implement responsive behavior across breakpoints."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Interactive Prototyping & Micro-interactions',
                                    content: [
                                        "Focus: Adding sophisticated interactions and animations to converted designs.",
                                        "Topics: Smart Animate, micro-interactions, user flow optimization.",
                                        "Hour 1: Theory – Interaction design principles, animation timing and easing.",
                                        "Hours 2-3: Guided – Create interactive prototypes for 4 converted projects.",
                                        "Hour 4: Challenge – Implement complex hover states and transitions."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Accessibility & Developer Handoff',
                                    content: [
                                        "Focus: Ensuring accessibility compliance and preparing for developer handoff.",
                                        "Topics: Contrast ratios, focus management, Dev Mode setup, export preparation.",
                                        "Hour 1: Theory – Accessibility standards, handoff best practices.",
                                        "Hours 2-3: Guided – Audit and fix accessibility issues in 4 projects.",
                                        "Hour 4: Challenge – Prepare complete Dev Mode handoff packages."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Code Refinement & Implementation',
                                    content: [
                                        "Focus: Re-coding designed projects with enhanced fidelity and performance.",
                                        "Topics: CSS architecture optimization, performance improvements, code quality.",
                                        "Hour 1: Theory – Production-ready code standards, optimization techniques.",
                                        "Hours 2-3: Guided – Re-code 4 projects with improved architecture.",
                                        "Hour 4: Challenge – Implement design tokens as CSS custom properties."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Portfolio Integration & Final Review',
                                    content: [
                                        "Focus: Assembling complete portfolio and conducting final quality review.",
                                        "Topics: Portfolio presentation, project documentation, quality assurance.",
                                        "Hour 1: Theory – Portfolio strategy, presentation best practices.",
                                        "Hours 2-3: Guided – Assemble and polish complete 128+ project portfolio.",
                                        "Hour 4: Challenge – Conduct final QA and prepare portfolio for deployment."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        }
                    ]
                },
                module3: {
                    title: 'Ultimate 2025 Career Metamorphosis: From Zero to AI Engineer in Just 27 Weeks',
                    description: "This is not another bootcamp success story. This is a complete synergetic career annihilation and rebirth — a ruthless 27-week demolition of junior limitations and the surgical construction of a senior-level AI Engineer identity that commands globally in 2025–2026. Phase 1 – Weeks 1–10: Becoming a Junior Front-End Developer (CSS & Sass Specialist) with 105 coded projects and 90% practice strength. Phase 2 – Weeks 11–12: The Figma-First Quantum Leap (Design-to-Code Hybrid) achieving 98% practice strength and creating 128+ professional assets. Phase 3 – Weeks 12–27: The Final Ascension – Senior-Level AI Engineer (JavaScript/TS Stack) with 145 projects and 273 total career artifacts. This transformation delivers professional JavaScript mastery, DOM domination, production backend skills, and TensorFlow.js expertise from zero to enterprise. Graduates emerge as battle-tested, full-stack, design-first, JavaScript-native AI Engineers with one of the strongest, most diverse, and visually stunning portfolios in the entire industry, capable of commanding $150K–$350K+ starting salaries with equity.",
                    content: [
                        {
                            week: 12,
                            title: 'Week 12: JavaScript Fundamentals - Part 1',
                            content: "This intensive 6-day JavaScript Fundamentals program takes absolute beginners to a solid grasp of core JavaScript concepts. Delivered through a hybrid model of 4 hours daily guided on-campus learning and 4 hours self-paced online videos and exercises, the curriculum emphasizes hands-on practice using VS Code and browser console. Participants begin with environment setup and running their first scripts, quickly progressing to understanding primitive data types, objects, arithmetic/comparison operators, and type coercion. Control flow is covered thoroughly through if/else statements, switch cases, logical operators, and truthy/falsy values. The program then introduces iteration using for, while, and do-while loops, including break, continue, and nested loop patterns. Function fundamentals follow, focusing on declarations, expressions, parameters, arguments, and return values to promote code reusability. Strict mode and basic error handling are introduced early to instill clean coding habits.",
                            listOfProjects: [
                                "Simple Logger (Console output and basic debugging)",
                                "Basic Math Tool (Arithmetic operators + type coercion practice)",
                                "Grade Calculator (If/else, logical operators, truthy/falsy)",
                                "Pattern Printer (Loops: for, while, nested loops, break/continue)",
                                "Function Library (Declarations, parameters, return values)",
                                "Integrated Mini-App (Combine all concepts: conditionals + loops + functions + strict mode)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Introduction and Setup',
                                    content: [
                                        "Focus: JS environment, running code.",
                                        "Topics: Console usage, basic output.",
                                        "Hour 1: Theory – JS runtime.",
                                        "Hours 2-3: Guided – Hello World scripts.",
                                        "Hour 4: Challenge – Simple logger; debug."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Data Types and Operators',
                                    content: [
                                        "Focus: Primitives and objects intro.",
                                        "Topics: Arithmetic, comparison, coercion.",
                                        "Hour 1: Theory – Type conversions.",
                                        "Hours 2-3: Guided – Operator exercises.",
                                        "Hour 4: Challenge – Basic math tool."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Control Flow Basics',
                                    content: [
                                        "Focus: If/else, switch.",
                                        "Topics: Logical operators, truthy/falsy.",
                                        "Hour 1: Theory – Decision making.",
                                        "Hours 2-3: Guided – Conditional branches.",
                                        "Hour 4: Challenge – Grade calculator."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Loops Introduction',
                                    content: [
                                        "Focus: For, while, do-while.",
                                        "Topics: Break/continue, nested loops.",
                                        "Hour 1: Theory – Iteration pitfalls.",
                                        "Hours 2-3: Guided – Looping patterns.",
                                        "Hour 4: Challenge – Pattern printer."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Functions Basics',
                                    content: [
                                        "Focus: Declarations, parameters.",
                                        "Topics: Return values, expressions.",
                                        "Hour 1: Theory – Reusability.",
                                        "Hours 2-3: Guided – Simple functions.",
                                        "Hour 4: Challenge – Function library."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review and Mini-Projects',
                                    content: [
                                        "Focus: Combining basics.",
                                        "Topics: Error basics, strict mode.",
                                        "Hour 1: Theory – Debugging intro.",
                                        "Hours 2-3: Guided – Small app.",
                                        "Hour 4: Challenge – Integrate; assess."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 13,
                            title: 'Week 13: JavaScript Fundamentals - Part 2',
                            content: "Week 13 advances JavaScript proficiency by diving into powerful data structures and modern language features. The curriculum builds directly on fundamentals, shifting focus to real-world application and cleaner, more expressive code. Arrays are explored in depth: basic methods (push, pop, shift, unshift, slice, splice) give way to the transformative trio of map, filter, and reduce. Objects receive equal attention, covering literal syntax, dynamic property access, computed property names, and modern enhancements like spread/rest operators and object destructuring. Advanced functions introduce arrow syntax, lexical scoping, closures, immediately invoked function expressions (IIFE), and higher-order functions. The week transitions smoothly into browser interactivity with an introduction to the Document Object Model (DOM) and event handling.",
                            listOfProjects: [
                                "List Manager (Full CRUD with push/pop/shift/unshift/splice)",
                                "Stats Calculator (map, filter, reduce + chaining on real data)",
                                "User Profile Builder (Object literals, destructuring, spread/rest, optional chaining)",
                                "Timer App (Closures, arrow functions, setInterval, IIFE)",
                                "Button Toggler (DOM selection, addEventListener, classList toggle, event object)",
                                "Event-Driven Mini Application (Combine arrays, objects, functions, and multiple DOM events with debugging)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Arrays Essentials',
                                    content: [
                                        "Focus: Creation, methods.",
                                        "Topics: Push/pop, slice, splice.",
                                        "Hour 1: Theory – Array mutation.",
                                        "Hours 2-3: Guided – Array ops.",
                                        "Hour 4: Challenge – List manager."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Advanced Arrays',
                                    content: [
                                        "Focus: Map, filter, reduce.",
                                        "Topics: Chaining methods, find/indexOf.",
                                        "Hour 1: Theory – Functional style.",
                                        "Hours 2-3: Guided – Data transforms.",
                                        "Hour 4: Challenge – Stats calculator."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Objects and Destructuring',
                                    content: [
                                        "Focus: Literals, methods.",
                                        "Topics: Spread, rest, optional chaining.",
                                        "Hour 1: Theory – Object keys.",
                                        "Hours 2-3: Guided – Object builds.",
                                        "Hour 4: Challenge – User profile."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Functions Advanced',
                                    content: [
                                        "Focus: Arrows, closures.",
                                        "Topics: Higher-order, IIFE.",
                                        "Hour 1: Theory – Scope revisit.",
                                        "Hours 2-3: Guided – Callbacks.",
                                        "Hour 4: Challenge – Timer app."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Events and DOM Intro',
                                    content: [
                                        "Focus: Listeners, targets.",
                                        "Topics: Basic manipulation, bubbling.",
                                        "Hour 1: Theory – Browser events.",
                                        "Hours 2-3: Guided – Click interactions.",
                                        "Hour 4: Challenge – Button toggler."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Projects and Debugging',
                                    content: [
                                        "Focus: Integrated scripts.",
                                        "Topics: Console tools, error handling.",
                                        "Hour 1: Theory – Common errors.",
                                        "Hours 2-3: Guided – Event-driven app.",
                                        "Hour 4: Challenge – Full review."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 14,
                            title: 'Week 14: How JavaScript Really Works',
                            content: "Week 14 pulls back the curtain on JavaScript's engine, revealing the hidden mechanics that separate intermediate developers from true experts. It starts with the subtle but critical differences between var, let, and const: hoisting behavior, block scoping, and the temporal dead zone. Execution context is demystified in detail—the call stack, memory heap, and exact phases of global and function contexts. The notorious this keyword finally becomes predictable through its four binding rules: default, implicit, explicit (call/apply/bind), and new binding. Prototypal inheritance takes center stage with manual inheritance chains using constructor functions and proto, then transitioning to clean ES6 classes and extends. Advanced patterns include mixins for composition over inheritance, static methods, and proper use of super in complex hierarchies.",
                            listOfProjects: [
                                "Scope & Hoisting Bug Hunter (Fix 20 real-world var/let bugs)",
                                "This-Binding Master (Explicit control with call/apply/bind + arrow exceptions)",
                                "Manual Prototype Inheritance (Build full chain without classes)",
                                "ES6 Class Vehicle/Aircraft System (Proper extends, super, method overriding)",
                                "Proxy-Based Validator (Auto-validate and log object property changes)",
                                "Immutable Data Manager (Factory + Object.freeze + Symbol keys)",
                                "Full Prototype Pattern Showcase (Combine factory, constructor, class, and mixin approaches)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Variable Declarations',
                                    content: [
                                        "Focus: Var/let/const nuances.",
                                        "Topics: Block scoping, temporal dead zone.",
                                        "Hour 1: Theory – Declaration types.",
                                        "Hours 2-3: Guided – Variable tests.",
                                        "Hour 4: Challenge – Scope fixer."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Execution Context Details',
                                    content: [
                                        "Focus: Stack, heap.",
                                        "Topics: This binding, call/apply/bind.",
                                        "Hour 1: Theory – Context creation.",
                                        "Hours 2-3: Guided – Tracing execution.",
                                        "Hour 4: Challenge – Method calls."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Prototypes Basics',
                                    content: [
                                        "Focus: Chain, constructors.",
                                        "Topics: Inheritance setup, proto.",
                                        "Hour 1: Theory – Proto links.",
                                        "Hours 2-3: Guided – Proto objects.",
                                        "Hour 4: Challenge – Class sim."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Advanced Prototypes',
                                    content: [
                                        "Focus: ES6 classes, extends.",
                                        "Topics: Mixins, static methods.",
                                        "Hour 1: Theory – Delegation.",
                                        "Hours 2-3: Guided – Inherited methods.",
                                        "Hour 4: Challenge – Hierarchy build."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Object Features',
                                    content: [
                                        "Focus: Symbols, proxies.",
                                        "Topics: Freezing/sealing objects.",
                                        "Hour 1: Theory – Advanced props.",
                                        "Hours 2-3: Guided – Proxy traps.",
                                        "Hour 4: Challenge – Secure object."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review and Patterns',
                                    content: [
                                        "Focus: Combining concepts.",
                                        "Topics: Factory patterns.",
                                        "Hour 1: Theory – OO best practices.",
                                        "Hours 2-3: Guided – Proto project.",
                                        "Hour 4: Challenge – Evaluate code."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 15,
                            title: 'Week 15: Professional JavaScript Architecture & Patterns',
                            content: "Week 15 marks the transition from 'knowing JavaScript' to 'thinking like a senior JavaScript engineer.' It focuses on battle-tested architectural patterns and advanced language features that power real-world applications and open-source libraries. Students master true encapsulation with the classic IIFE and revealing module pattern. Closures evolve from concept to superpower: memoization caches, data privacy, function factories, currying, and partial application. The week introduces foundational design patterns every professional must know: Singleton, Observer with full publish-subscribe implementation, Decorator for cross-cutting concerns, and Facade to tame sprawling APIs. Generators and the iterable protocol unlock lazy evaluation and custom async flows. Performance is never an afterthought: memory implications of closures, observer unsubscribe discipline, and pattern trade-offs are profiled with DevTools.",
                            listOfProjects: [
                                "Private State Module (IIFE + revealing pattern with true private methods)",
                                "High-Performance Memoizer (Generic cache with closure + currying)",
                                "Full-Featured Event Bus (Pub/sub with wildcards and once() support)",
                                "Cross-Cutting Decorator Toolkit (Logging, debounce, retry, auth)",
                                "Unified API Facade (Wrap Fetch + localStorage + WebSocket behind one interface)",
                                "Lazy Data Stream Generator (Async generator with filtering, mapping, take())",
                                "Professional Mini-Framework (Integrated architecture using all patterns: module + pub/sub + decorators + generators)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Modules and IIFE',
                                    content: [
                                        "Focus: Encapsulation.",
                                        "Topics: Revealing module.",
                                        "Hour 1: Theory – Namespacing.",
                                        "Hours 2-3: Guided – Module creation.",
                                        "Hour 4: Challenge – Private vars."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Closures Deep Dive',
                                    content: [
                                        "Focus: Practical uses.",
                                        "Topics: Memoization, currying.",
                                        "Hour 1: Theory – Memory management.",
                                        "Hours 2-3: Guided – Closure funcs.",
                                        "Hour 4: Challenge – Cache system."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Design Patterns Intro',
                                    content: [
                                        "Focus: Singleton, observer.",
                                        "Topics: Pub/sub.",
                                        "Hour 1: Theory – Pattern benefits.",
                                        "Hours 2-3: Guided – Singleton impl.",
                                        "Hour 4: Challenge – Event emitter."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Advanced Patterns',
                                    content: [
                                        "Focus: Decorator, facade.",
                                        "Topics: Composition over inheritance.",
                                        "Hour 1: Theory – Pattern combos.",
                                        "Hours 2-3: Guided – Decorator app.",
                                        "Hour 4: Challenge – Facade wrapper."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Generators and Iterators',
                                    content: [
                                        "Focus: Yield, custom iter.",
                                        "Topics: Async generators.",
                                        "Hour 1: Theory – Iterable protocol.",
                                        "Hours 2-3: Guided – Generator funcs.",
                                        "Hour 4: Challenge – Infinite sequence."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Performance and Review',
                                    content: [
                                        "Focus: Optimization tips.",
                                        "Topics: Pattern trade-offs.",
                                        "Hour 1: Theory – Efficiency.",
                                        "Hours 2-3: Guided – Optimized patterns.",
                                        "Hour 4: Challenge – Grandmaster project."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 16,
                            title: 'Week 16: Mastering the DOM – Core Manipulation & Events',
                            content: "Week 16 transforms static HTML into living, responsive interfaces by giving learners complete command over the Document Object Model. Students begin with the DOM as a true tree: navigating parentNode, children, next/previousElementSibling, and the difference between Node and Element. Selection mastery follows: querySelector/All versus the older getElementBy* family, live vs static NodeLists, and performance implications. Content manipulation covers every weapon in the arsenal: textContent vs innerHTML (with XSS awareness), createElement, append/prepend, insertAdjacentHTML, and the full suite of node removal/replacement methods. Styling and attributes receive equal depth: setAttribute/removeAttribute, classList API, dataset for custom data, and direct style property manipulation. Event fundamentals are revisited with professional rigor: addEventListener syntax, the event object, preventing default behavior, and stopping propagation.",
                            listOfProjects: [
                                "DOM Tree Walker (Traverse and log full document structure with recursion)",
                                "Universal Selector Engine (Build helper that falls back intelligently: ID → class → query)",
                                "Real-Time List Builder (Add/remove/edit items with full node creation)",
                                "Advanced Theme Switcher (Dark/light/system with classList + prefers-color-scheme)",
                                "Multi-Event Click Dashboard (Separate counters for left/middle/right/double-click)",
                                "Memory-Safe Modal System (Open/close with escape + overlay click, proper cleanup)",
                                "Complete Interactive Page (Combine all: dynamic content, styling, events, no leaks)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: DOM Structure',
                                    content: [
                                        "Focus: Tree navigation.",
                                        "Topics: Parent/child/sibling.",
                                        "Hour 1: Theory – DOM model.",
                                        "Hours 2-3: Guided – Traversal code.",
                                        "Hour 4: Challenge – Tree walker."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Selection Methods',
                                    content: [
                                        "Focus: QuerySelector, getElement.",
                                        "Topics: Class/ID selectors.",
                                        "Hour 1: Theory – Efficiency.",
                                        "Hours 2-3: Guided – Element grabs.",
                                        "Hour 4: Challenge – Dynamic select."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Content Manipulation',
                                    content: [
                                        "Focus: InnerHTML, textContent.",
                                        "Topics: Node creation/removal.",
                                        "Hour 1: Theory – Security risks.",
                                        "Hours 2-3: Guided – Append/insert.",
                                        "Hour 4: Challenge – List builder."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Attributes and Styles',
                                    content: [
                                        "Focus: Set/get attributes.",
                                        "Topics: Inline styles, classes.",
                                        "Hour 1: Theory – Computed styles.",
                                        "Hours 2-3: Guided – Style toggles.",
                                        "Hour 4: Challenge – Theme switcher."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Events Basics',
                                    content: [
                                        "Focus: AddEventListener.",
                                        "Topics: Event objects.",
                                        "Hour 1: Theory – Handler binding.",
                                        "Hours 2-3: Guided – Basic listeners.",
                                        "Hour 4: Challenge – Click counter."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Review Projects',
                                    content: [
                                        "Focus: Simple interactive pages.",
                                        "Topics: Event removal.",
                                        "Hour 1: Theory – Memory leaks.",
                                        "Hours 2-3: Guided – DOM project.",
                                        "Hour 4: Challenge – Assess build."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 17,
                            title: 'Week 17: Professional DOM Mastery – Events, Forms & Performance',
                            content: "Week 17 elevates DOM skills from functional to production-grade by focusing on the techniques used in high-performance, real-world applications. Event propagation is dissected completely: bubbling vs capturing phases, event.order, stopPropagation vs stopImmediatePropagation, and the critical role of currentTarget vs target. Event delegation becomes second nature with one listener on a parent handling thousands of dynamic children. Custom events unlock true component communication with CustomEvent objects and detail payloads. Forms and validation go far beyond basics with input, change, and blur events combined with the Constraint Validation API. Data persistence is introduced via localStorage and sessionStorage with JSON workflows. Performance is treated as a core requirement: debounce and throttle functions tame expensive handlers, while MutationObserver replaces inefficient polling for DOM changes.",
                            listOfProjects: [
                                "Event Propagation Playground (Visualize bubbling/capturing with nested colored boxes)",
                                "Infinite Dynamic List with Delegation (Add/remove 10,000 items with one listener)",
                                "Custom Event Messenger (Cross-component communication using dispatch/detail)",
                                "Bulletproof Login/Register Form (Live validation + custom messages + accessibility)",
                                "Persistent Shopping Cart (localStorage + sync across tabs + cart counter badge)",
                                "Debounced Live Search with MutationObserver (Auto-update results on DOM changes)",
                                "Complete SPA Dashboard (Delegated events, custom events, forms, storage, optimization)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Event Propagation',
                                    content: [
                                        "Focus: Bubbling, capturing.",
                                        "Topics: Stop propagation.",
                                        "Hour 1: Theory – Phase order.",
                                        "Hours 2-3: Guided – Nested events.",
                                        "Hour 4: Challenge – Menu handler."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Delegation Techniques',
                                    content: [
                                        "Focus: Single listener.",
                                        "Topics: Target matching.",
                                        "Hour 1: Theory – Performance gains.",
                                        "Hours 2-3: Guided – Delegated clicks.",
                                        "Hour 4: Challenge – List delegation."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Custom Events',
                                    content: [
                                        "Focus: Dispatching events.",
                                        "Topics: Data passing.",
                                        "Hour 1: Theory – Event creation.",
                                        "Hours 2-3: Guided – Custom triggers.",
                                        "Hour 4: Challenge – Pub/sub sim."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Forms and Validation',
                                    content: [
                                        "Focus: Input events.",
                                        "Topics: Submit handling.",
                                        "Hour 1: Theory – Validity API.",
                                        "Hours 2-3: Guided – Form validators.",
                                        "Hour 4: Challenge – Login form."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Storage and Persistence',
                                    content: [
                                        "Focus: LocalStorage, session.",
                                        "Topics: JSON storage.",
                                        "Hour 1: Theory – Data limits.",
                                        "Hours 2-3: Guided – Persistent UI.",
                                        "Hour 4: Challenge – Cart saver."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Optimization and Projects',
                                    content: [
                                        "Focus: MutationObserver.",
                                        "Topics: Debounce/throttle.",
                                        "Hour 1: Theory – Efficient DOM.",
                                        "Hours 2-3: Guided – Observed changes.",
                                        "Hour 4: Challenge – Full interactive site."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 18,
                            title: 'Week 18: AJAX, APIs & The Bankist Project – From XHR to Real App',
                            content: "Week 18 bridges client-side JavaScript to the outside world and culminates in a complete, polished banking web application. Students start with the original AJAX engine: XMLHttpRequest, mastering readyState progression, status codes, responseType, timeout handling, and custom headers. Response handling covers JSON and legacy XML with deep practice in JSON.stringify/parse and graceful fallback strategies. POST requests introduce FormData, URL-encoded bodies, and CORS basics. Promises are introduced by wrapping XHR into reusable, chainable request functions. The week climaxes with the famous Bankist app — a fully functional banking interface featuring multiple user accounts, login with PIN, real-time balance calculation, transfer between accounts, loan requests with interest, automatic logout timer, and international currency/date formatting using the Intl API.",
                            listOfProjects: [
                                "XHR Data Dashboard (Load and display random users from public API)",
                                "Robust API Client with Error Boundaries (Auto-retry + user-friendly alerts)",
                                "JSON CRUD Interface (Full create/read/update/delete against JSON server)",
                                "Secure User Registration Flow (POST with FormData + validation feedback)",
                                "Promise-Based AJAX Utility (Reusable get/post/delete with chaining)",
                                "Enhanced Bankist Premium (Add sorting, request loan with 10% interest, transfer history)",
                                "Multi-Account Bankist Pro (Switch users, persistent login state, dark mode)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: AJAX Introduction',
                                    content: [
                                        "Focus: XHR object.",
                                        "Topics: Ready states.",
                                        "Hour 1: Theory – Async comm.",
                                        "Hours 2-3: Guided – Basic GET.",
                                        "Hour 4: Challenge – Data loader."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Response Handling',
                                    content: [
                                        "Focus: Status codes.",
                                        "Topics: Headers.",
                                        "Hour 1: Theory – HTTP basics.",
                                        "Hours 2-3: Guided – Parse responses.",
                                        "Hour 4: Challenge – Error manager."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: JSON and XML',
                                    content: [
                                        "Focus: Data formats.",
                                        "Topics: Stringify/parse.",
                                        "Hour 1: Theory – Serialization.",
                                        "Hours 2-3: Guided – JSON fetches.",
                                        "Hour 4: Challenge – API display."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: POST Requests',
                                    content: [
                                        "Focus: Sending data.",
                                        "Topics: FormData.",
                                        "Hour 1: Theory – Methods diff.",
                                        "Hours 2-3: Guided – POST submits.",
                                        "Hour 4: Challenge – User create."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Promises with AJAX',
                                    content: [
                                        "Focus: Wrapping XHR.",
                                        "Topics: Chain handling.",
                                        "Hour 1: Theory – Promise flow.",
                                        "Hours 2-3: Guided – Promised requests.",
                                        "Hour 4: Challenge – Chain ops."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Bank App Project',
                                    content: [
                                        "Focus: Bankist app build (accounts, transfers, loans).",
                                        "Topics: Arrays, timers, intl API.",
                                        "Hour 1: Theory – App architecture.",
                                        "Hours 2-3: Guided – Core features.",
                                        "Hour 4: Challenge – Customize app."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 19,
                            title: 'Week 19: Modern API Mastery & The Bandukhan MVC Project',
                            content: "Week 19 transforms learners into confident full-stack-front-end developers by conquering real-world APIs and rock-solid application architecture. Students master RESTful principles end-to-end: correct HTTP methods, idempotency, resource naming, status codes, and HATEOAS concepts. Authentication flows become second nature—JWT handling, secure token storage, refresh logic, and Bearer-protected endpoints. CORS is fully demystified with preflight requests and practical proxy workarounds. The modern fetch ecosystem is drilled deeply with clean async/await patterns, AbortController for cancellation/timeouts, and robust error handling. The capstone project is Bandukhan—a sleek, fully functional recipe search and management app powered by a real third-party food API, built strictly with the MVC pattern.",
                            listOfProjects: [
                                "RESTful Todo API Client (Full CRUD with proper verbs and status handling)",
                                "JWT-Protected Dashboard (Login → store token → auto-refresh → protected routes)",
                                "CORS-Proof Multi-Origin App (Fix preflight issues + fallback proxy)",
                                "Cancellable File Uploader (AbortController + progress + resume support)",
                                "Smart-Caching Recipe Browser (ETag + Cache-Control + offline fallback)",
                                "Bandukhan Pro (Live search, pagination, bookmarking, custom recipe upload)",
                                "Bandukhan Ultimate (User accounts, personal collections, recipe sharing, offline mode)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: REST Principles',
                                    content: [
                                        "Focus: Endpoints, verbs.",
                                        "Topics: Idempotency.",
                                        "Hour 1: Theory – API design.",
                                        "Hours 2-3: Guided – REST calls.",
                                        "Hour 4: Challenge – CRUD API."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Authentication',
                                    content: [
                                        "Focus: Tokens, OAuth.",
                                        "Topics: Bearer auth.",
                                        "Hour 1: Theory – Secure APIs.",
                                        "Hours 2-3: Guided – Auth requests.",
                                        "Hour 4: Challenge – Login flow."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: CORS Handling',
                                    content: [
                                        "Focus: Origins, preflights.",
                                        "Topics: Proxy solutions.",
                                        "Hour 1: Theory – Browser policy.",
                                        "Hours 2-3: Guided – CORS fixes.",
                                        "Hour 4: Challenge – Cross-domain."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Advanced Fetch',
                                    content: [
                                        "Focus: Abort, streams.",
                                        "Topics: Async/await.",
                                        "Hour 1: Theory – Modern syntax.",
                                        "Hours 2-3: Guided – Awaited fetches.",
                                        "Hour 4: Challenge – Cancellable req."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Caching and Performance',
                                    content: [
                                        "Focus: ETags, cache-control.",
                                        "Topics: Service workers intro.",
                                        "Hour 1: Theory – Optimization.",
                                        "Hours 2-3: Guided – Cached data.",
                                        "Hour 4: Challenge – Offline support."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: MVC App Project',
                                    content: [
                                        "Focus: Forkify app (recipe search, bookmarks).",
                                        "Topics: MVC pattern, API integration.",
                                        "Hour 1: Theory – MVC structure.",
                                        "Hours 2-3: Guided – App modules.",
                                        "Hour 4: Challenge – Extend features."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 20,
                            title: 'Week 20: Real-World AJAX Projects + Performance Mastery',
                            content: "Week 20 combines the legendary 'AJAX Projects' challenge with hardcore web performance training, turning learners into fast, confident full-stack-front-end developers. The first half is pure project firepower with 25+ production-quality AJAX apps using only vanilla JavaScript and public APIs: random quote machines, weather dashboards, real-time cryptocurrency trackers, news aggregators with infinite scroll, movie search engines, GitHub user profiles, recipe finders, and more. The second half shifts to performance domination through the Critical Rendering Path (CRP), mastering the exact browser rendering pipeline and eliminating render-blocking resources. Lighthouse and Chrome DevTools become daily tools for chasing 100/100 performance scores. The final days merge both worlds with every AJAX project ruthlessly optimized for blazing-fast experiences.",
                            listOfProjects: [
                                "Infinite Quote Machine (API + copy-to-clipboard + share)",
                                "Live Weather Dashboard (Geolocation + 7-day forecast + animations)",
                                "Real-Time Crypto Tracker (WebSocket fallback + price alerts)",
                                "News Aggregator with Categories & Infinite Scroll",
                                "Movie Search Engine (OMDb API + ratings + watchlist)",
                                "GitHub Profile Analyzer (Repos, stars, contribution graph)",
                                "Currency Converter Pro (Live rates + historical chart)",
                                "Unsplash Infinite Image Gallery (Masonry + lazy load)",
                                "Live Sports Scoreboard (Cricket/Football API + auto-refresh)",
                                "Interactive Task Manager with LocalStorage Sync",
                                "Instant Wikipedia Search Tool (Real-time query + formatted results)",
                                "Dynamic WikiMap Location Viewer (Fetch and render geographic JSON data)",
                                "Random User Profile Showcase (Generate multiple profiles + refresh)",
                                "Real-Time Weather Widget (Auto geolocation + current conditions)",
                                "Chuck Norris Joke Machine (Filter by category + one-click share)",
                                "Star Wars Data Navigator (Browse characters, planets & starships)",
                                "Complete Trivia Challenge Game (10 random questions + countdown timer)",
                                "Stack Exchange Live Feed Viewer (Search + display latest questions)",
                                "Country Finder & Info Hub (REST Countries API + flags, currencies)",
                                "Live Quiz Powered by Google Sheets (Pull questions in real-time)",
                                "GitHub User Summary Card (Auto-load repos, followers, stars)",
                                "Word Scramble Challenge (Google Sheets word bank + timer)",
                                "YouTube Video Finder & Player (Search + embedded video)",
                                "All-in-One API Testing Tool (GET/POST/PUT/DELETE + real-time JSON)",
                                "Full-Featured CRUD App with Local JSON-Server",
                                "Serverless Contact Form with Email Delivery",
                                "Multi-API Joke Generator (Switch between sources + category picker)",
                                "Real-Time Multi-Data Dashboard (Live weather + latest news + daily quote)",
                                "Async Fake Login System (Promise + async/await + protected dashboard)",
                                "Ultimate AJAX Portfolio Showcase (Beautiful single-page site + Lighthouse 100/100 optimized)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Basic AJAX Projects',
                                    content: [
                                        "Focus: Simple API integrations.",
                                        "Topics: Public APIs.",
                                        "Hour 1: Theory – Project planning.",
                                        "Hours 2-3: Guided – Quote generator.",
                                        "Hour 4: Challenge – Random user."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Intermediate Projects',
                                    content: [
                                        "Focus: Data visualization.",
                                        "Topics: Charting fetches.",
                                        "Hour 1: Theory – UI updates.",
                                        "Hours 2-3: Guided – Weather dashboard.",
                                        "Hour 4: Challenge – Stock viewer."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Advanced Projects',
                                    content: [
                                        "Focus: Real-time polling.",
                                        "Topics: Error retry.",
                                        "Hour 1: Theory – Polling vs WS.",
                                        "Hours 2-3: Guided – News aggregator.",
                                        "Hour 4: Challenge – Search engine."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: CRP Fundamentals',
                                    content: [
                                        "Focus: Rendering pipeline.",
                                        "Topics: Parse phases.",
                                        "Hour 1: Theory – Browser flow.",
                                        "Hours 2-3: Guided – HTML opt.",
                                        "Hour 4: Challenge – Minify code."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: CRP Techniques',
                                    content: [
                                        "Focus: Async loading.",
                                        "Topics: Resource hints.",
                                        "Hour 1: Theory – Paint metrics.",
                                        "Hours 2-3: Guided – Lazy images.",
                                        "Hour 4: Challenge – Critical CSS."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Integrate with Projects',
                                    content: [
                                        "Focus: Optimized AJAX apps.",
                                        "Topics: Audit tools.",
                                        "Hour 1: Theory – Performance metrics.",
                                        "Hours 2-3: Guided – Optimized project.",
                                        "Hour 4: Challenge – 10-project sample."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 21,
                            title: 'Week 21: Secure Real-Time Communication – TLS, HTTPS & WebSockets Mastery',
                            content: "Week 21 transforms learners into professionals who understand and implement secure, real-time web applications — the backbone of chat apps, live dashboards, trading platforms, and collaborative tools. The journey begins with a crystal-clear mental model of TLS/SSL: students master the difference between symmetric and asymmetric encryption, visualize the entire handshake, and learn why perfect forward secrecy matters. They generate and trust self-signed certificates, set up HTTPS on localhost, and understand Certificate Authorities. The second half shifts to WebSockets — the protocol that killed long-polling forever. Learners dissect the HTTP Upgrade handshake, explore frame structure, and implement raw WebSocket connections. Security is never an afterthought with WSS deployment, token-based authentication, and prevention of common attacks.",
                            listOfProjects: [
                                "TLS Handshake Visualizer (Animated step-by-step encryption demo)",
                                "Secure Localhost HTTPS Server (mkcert + self-signed cert + forced HTTPS redirect)",
                                "Basic WebSocket Echo Server & Client (Vanilla JS + ws library connection)",
                                "Real-Time Chat Room (Multi-user messaging with usernames + online list)",
                                "Live Collaborative Whiteboard (WebSocket drawing sync across browsers)",
                                "Secure Authenticated WebSocket Dashboard (JWT on connect + protected messages)",
                                "Stock Ticker with WSS & Heartbeats (Auto-reconnect + ping/pong + message history)",
                                "Full Secure Real-Time App (HTTPS + WSS + auth + chat + notifications)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: TLS Basics',
                                    content: [
                                        "Focus: Symmetric/asymmetric.",
                                        "Topics: Key exchange.",
                                        "Hour 1: Theory – Encryption basics.",
                                        "Hours 2-3: Guided – TLS diagram.",
                                        "Hour 4: Challenge – Handshake sim."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: HTTPS Setup',
                                    content: [
                                        "Focus: Certs, localhost.",
                                        "Topics: Self-signed.",
                                        "Hour 1: Theory – CA trust.",
                                        "Hours 2-3: Guided – Local server.",
                                        "Hour 4: Challenge – Secure page."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: WebSockets Intro',
                                    content: [
                                        "Focus: Upgrade handshake.",
                                        "Topics: HTTP fallback.",
                                        "Hour 1: Theory – Persistent conn.",
                                        "Hours 2-3: Guided – WS setup.",
                                        "Hour 4: Challenge – Basic connect."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: WS Frames',
                                    content: [
                                        "Focus: Opcode, payload.",
                                        "Topics: Masking data.",
                                        "Hour 1: Theory – Frame structure.",
                                        "Hours 2-3: Guided – Frame build.",
                                        "Hour 4: Challenge – Message parse."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: WS Advanced',
                                    content: [
                                        "Focus: Ping/pong, close.",
                                        "Topics: Subprotocols.",
                                        "Hour 1: Theory – Heartbeats.",
                                        "Hours 2-3: Guided – Control frames.",
                                        "Hour 4: Challenge – Extension add."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Security in WS',
                                    content: [
                                        "Focus: WSS, auth.",
                                        "Topics: Integration with HTTPS.",
                                        "Hour 1: Theory – WS vulnerabilities.",
                                        "Hours 2-3: Guided – Secure WS.",
                                        "Hour 4: Challenge – Protocol review."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 22,
                            title: 'Week 22: Building Production-Grade Real-Time Backends with WebSocket Servers & TypeScript',
                            content: "Week 22 elevates students from WebSocket users to WebSocket architects by teaching them how to build fast, scalable, and type-safe real-time servers from scratch using Node.js and TypeScript. The first half is pure backend power: learners implement a raw WebSocket server without Socket.IO, manually handling the HTTP Upgrade handshake, parsing binary frames, and managing connection lifecycle. They master broadcasting patterns, room-based messaging, graceful error handling, and scaling fundamentals. The second half introduces TypeScript as a non-negotiable production tool with professional TS environment setup, interfaces, enums, unions, type guards, generics, and utility types. They refactor the raw WebSocket server into fully typed code — eliminating entire classes of runtime bugs.",
                            listOfProjects: [
                                "Raw WebSocket Server from Scratch (No libraries – manual handshake + frame parsing)",
                                "Multi-Room Chat Server with Broadcasting (Join/leave rooms + user list sync)",
                                "TypeSafe Real-Time Notification System (Typed events + user roles + delivery receipts)",
                                "Live Collaborative Code Editor Backend (Operational transformation-ready message routing)",
                                "Scalable Game Server Core (Player auth + matchmaking queue + state sync)",
                                "Fully Typed Production WebSocket Server (Strict TS + ESLint + Redis adapter ready)",
                                "Real-Time Analytics Dashboard Backend (Live metrics push + historical replay)",
                                "Ultimate TypeScript WebSocket Framework (Generic room system + middleware + auth plugins)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: WS Server Basics',
                                    content: [
                                        "Focus: Node socket setup.",
                                        "Topics: Handshake impl.",
                                        "Hour 1: Theory – Raw sockets.",
                                        "Hours 2-3: Guided – Server code.",
                                        "Hour 4: Challenge – Client test."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Message Handling',
                                    content: [
                                        "Focus: Frame parsing.",
                                        "Topics: Broadcasting.",
                                        "Hour 1: Theory – Data flow.",
                                        "Hours 2-3: Guided – Msg router.",
                                        "Hour 4: Challenge – Echo server."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Advanced Server',
                                    content: [
                                        "Focus: Error, close handling.",
                                        "Topics: Scaling basics.",
                                        "Hour 1: Theory – Connection mgmt.",
                                        "Hours 2-3: Guided – Chat room.",
                                        "Hour 4: Challenge – Multi-room."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: TypeScript Intro',
                                    content: [
                                        "Focus: Setup, types.",
                                        "Topics: Interfaces.",
                                        "Hour 1: Theory – Static checking.",
                                        "Hours 2-3: Guided – Typed vars.",
                                        "Hour 4: Challenge – Typed funcs."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: TS Advanced Types',
                                    content: [
                                        "Focus: Generics, unions.",
                                        "Topics: Type guards.",
                                        "Hour 1: Theory – Advanced inference.",
                                        "Hours 2-3: Guided – Generic utils.",
                                        "Hour 4: Challenge – Typed data."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: TS in Projects',
                                    content: [
                                        "Focus: Modules, config.",
                                        "Topics: TS with Node.",
                                        "Hour 1: Theory – TS/JS interop.",
                                        "Hours 2-3: Guided – TS server.",
                                        "Hour 4: Challenge – Typed WS."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 23,
                            title: 'Week 23: Google Apps Script Automation + Core Data Structures',
                            content: "Week 23 delivers two high-impact skill sets that dramatically boost employability and problem-solving power. The first half turns learners into Google Workspace automation experts using Google Apps Script (GAS), mastering the script editor, triggers, and core services: SpreadsheetApp, DriveApp, GmailApp, Docs, and Forms. They build bound and standalone scripts, create custom menus, design HTML Service web apps, and deploy them as add-ons or public endpoints. The second half jumps into professional-grade algorithmic thinking with classic data structures: implementing stacks, queues, singly/doubly linked lists, and hash tables from scratch in clean JavaScript/TypeScript. They understand Big O notation in practice, master pointer manipulation, handle edge cases, and learn when to choose each structure.",
                            listOfProjects: [
                                "Auto Report Generator (Daily Sheets → PDF → Email via time trigger)",
                                "Custom Google Sheets Add-on with Sidebar & Menu (Bulk formatting + data cleanup)",
                                "Form-to-Drive Web App (HTML form → auto-create folders + save files + confirmation email)",
                                "Gmail Auto-Responder with Labels & Templates (Smart replies + follow-up scheduler)",
                                "From-Scratch Stack & Queue Library (With peek, isEmpty, size methods)",
                                "Fully Featured Singly & Doubly Linked List (Reverse, detect cycle, merge lists)",
                                "High-Performance Hash Table Implementation (Separate chaining + custom hash function)",
                                "Google Sheets CRUD Dashboard Powered by Linked List & Hash Table (In-memory caching + instant search)",
                                "Ultimate GAS Automation Suite (Menu + sidebar + web app + scheduled reports + data structures backend)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: GAS Basics',
                                    content: [
                                        "Focus: Editor, functions.",
                                        "Topics: Triggers.",
                                        "Hour 1: Theory – Google integration.",
                                        "Hours 2-3: Guided – Script basics.",
                                        "Hour 4: Challenge – Logger script."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: GAS Services',
                                    content: [
                                        "Focus: Sheets, Drive.",
                                        "Topics: API calls.",
                                        "Hour 1: Theory – Bound scripts.",
                                        "Hours 2-3: Guided – Data manip.",
                                        "Hour 4: Challenge – Sheet automation."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: GAS Projects',
                                    content: [
                                        "Focus: Web apps, add-ons.",
                                        "Topics: Deployment.",
                                        "Hour 1: Theory – UI building.",
                                        "Hours 2-3: Guided – Form processor.",
                                        "Hour 4: Challenge – Custom menu."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: DS Basics',
                                    content: [
                                        "Focus: Arrays, stacks.",
                                        "Topics: Big O intro.",
                                        "Hour 1: Theory – Time/space.",
                                        "Hours 2-3: Guided – Stack impl.",
                                        "Hour 4: Challenge – Queue build."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Linked Lists',
                                    content: [
                                        "Focus: Singly/doubly.",
                                        "Topics: Operations.",
                                        "Hour 1: Theory – List vs array.",
                                        "Hours 2-3: Guided – List methods.",
                                        "Hour 4: Challenge – List traversal."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Hash Tables',
                                    content: [
                                        "Focus: Collision handling.",
                                        "Topics: Key-value.",
                                        "Hour 1: Theory – Hashing.",
                                        "Hours 2-3: Guided – Table code.",
                                        "Hour 4: Challenge – DS review."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 24,
                            title: 'Week 24: Mastering Algorithms & Advanced Data Structures',
                            content: "Week 24 transforms learners into confident problem-solvers by building a complete algorithmic toolkit used daily in technical interviews at FAANG and top startups. Students begin with recursion mastery — writing clean base cases, understanding call stack mechanics, and solving classic problems while avoiding stack overflow pitfalls. Searching and sorting follow with deep complexity analysis: linear vs binary search, then bubble/insertion sorts, followed by the game-changers — merge sort and quicksort with smart pivot strategies. The week escalates to tree structures: implementing Binary Search Trees from scratch with insert, delete, search, and three traversal types. The finale is graphs — the crown jewel of system design and interview questions, with DFS, BFS, cycle detection, and shortest path algorithms.",
                            listOfProjects: [
                                "Recursive Tree Visualizer (Draw any recursive function call stack live in browser)",
                                "Algorithm Speed Race Dashboard (Compare all sorting/search algos on random + nearly-sorted data)",
                                "Fully Functional Binary Search Tree with Delete & Balance Check",
                                "Interactive Graph Playground (Add nodes/edges + visualize DFS/BFS traversal in real-time)",
                                "LeetCode-Style Problem Solver Suite (20 hand-picked medium problems with clean solutions)",
                                "Shortest Path Finder (BFS maze solver + visual animation)",
                                "Merge + Quick Sort Hybrid with Pivot Benchmarking (Auto-switches strategy for best performance)",
                                "Algorithm Interview Prep App (Random problem generator + timer + Big-O grader)",
                                "Ultimate Data Structures & Algorithms Visual Encyclopedia (All week's structures in one interactive demo app)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Recursion Basics',
                                    content: [
                                        "Focus: Factorial, fib.",
                                        "Topics: Stack overflow.",
                                        "Hour 1: Theory – Base cases.",
                                        "Hours 2-3: Guided – Recursive funcs.",
                                        "Hour 4: Challenge – Tree recursion."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Searching Algorithms',
                                    content: [
                                        "Focus: Linear, binary.",
                                        "Topics: Sorted search.",
                                        "Hour 1: Theory – Complexity analysis.",
                                        "Hours 2-3: Guided – Binary impl.",
                                        "Hour 4: Challenge – Search optimizer."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Sorting Basics',
                                    content: [
                                        "Focus: Bubble, insertion.",
                                        "Topics: Stable sorts.",
                                        "Hour 1: Theory – Sort metrics.",
                                        "Hours 2-3: Guided – Bubble code.",
                                        "Hour 4: Challenge – Insertion sort."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: Advanced Sorting',
                                    content: [
                                        "Focus: Merge, quick.",
                                        "Topics: Pivot selection.",
                                        "Hour 1: Theory – Divide/conquer.",
                                        "Hours 2-3: Guided – Merge sort.",
                                        "Hour 4: Challenge – Quick sort."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Trees and BST',
                                    content: [
                                        "Focus: Traversal methods.",
                                        "Topics: Balancing intro.",
                                        "Hour 1: Theory – Tree properties.",
                                        "Hours 2-3: Guided – BST insert.",
                                        "Hour 4: Challenge – Tree search."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Graphs and Algorithms',
                                    content: [
                                        "Focus: DFS, BFS.",
                                        "Topics: Adjacency lists.",
                                        "Hour 1: Theory – Graph reps.",
                                        "Hours 2-3: Guided – Graph traversal.",
                                        "Hour 4: Challenge – Shortest path."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 25,
                            title: 'Week 25: AI Engineer Bootcamp – Machine Learning & TensorFlow.js from Zero to Production-Ready',
                            content: "Week 25 is the definitive launchpad for JavaScript developers becoming real AI Engineers. No Python, no PhD-level math, no Jupyter notebooks — just pure, production-ready machine learning that runs anywhere JavaScript does. Students master the end-to-end ML workflow in the browser: loading real-world datasets, cleaning, normalizing, train/test splitting, and interactive visualization. They implement core algorithms from scratch — linear regression with gradient descent, cost functions, feature scaling — then move to classification with K-Nearest Neighbors and logistic regression. The breakthrough is TensorFlow.js: learners go from tensor basics to building, training, and persisting full models directly in the browser or Node.js. Everything executes in pure JavaScript/TypeScript — instantly deployable in vanilla web apps, Electron desktop tools, browser extensions, or server-side Node environments.",
                            listOfProjects: [
                                "Live House Price Predictor (TensorFlow.js linear regression trained and running fully in the browser)",
                                "Real-Time Iris Flower Classifier (KNN + TF.js model using webcam feed for instant classification)",
                                "Client-Side Sentiment Analysis Tool (Train logistic regression directly on user-typed text – 100% browser)",
                                "Interactive Gradient Descent Visualizer (Real-time canvas animation of weights and loss during training)",
                                "Browser-Based Digit Recognizer (MNIST loaded in TF.js – draw on canvas → instant handwritten digit prediction)",
                                "Personal Loan Approval Model (Full training + inference running in vanilla JavaScript on a single HTML page)",
                                "TensorFlow.js Model Converter Dashboard (Drag-and-drop .h5/.json model → convert → test predictions in pure JS)",
                                "End-to-End AI Dashboard (CSV upload → auto-train regression or classification → export model – all vanilla JS)",
                                "Production-Ready On-Device AI Demo (Zero server calls – model loads once, runs predictions instantly in plain JavaScript)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: ML Intro',
                                    content: [
                                        "Focus: Supervised learning.",
                                        "Topics: Data sets.",
                                        "Hour 1: Theory – ML workflow.",
                                        "Hours 2-3: Guided – Data load.",
                                        "Hour 4: Challenge – Simple dataset."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Regression Models',
                                    content: [
                                        "Focus: Linear regression.",
                                        "Topics: Least squares.",
                                        "Hour 1: Theory – Cost functions.",
                                        "Hours 2-3: Guided – Regression code.",
                                        "Hour 4: Challenge – Price predictor."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: Classification Basics',
                                    content: [
                                        "Focus: KNN, logistic.",
                                        "Topics: Distance metrics.",
                                        "Hour 1: Theory – Class boundaries.",
                                        "Hours 2-3: Guided – KNN impl.",
                                        "Hour 4: Challenge – Iris classifier."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: TensorFlow.js Setup',
                                    content: [
                                        "Focus: Tensors, ops.",
                                        "Topics: Data tensors.",
                                        "Hour 1: Theory – Tensor basics.",
                                        "Hours 2-3: Guided – Tensor manip.",
                                        "Hour 4: Challenge – Matrix ops."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: TF Models',
                                    content: [
                                        "Focus: Layers, compile.",
                                        "Topics: Training loop.",
                                        "Hour 1: Theory – Gradient descent.",
                                        "Hours 2-3: Guided – Simple model.",
                                        "Hour 4: Challenge – TF regression."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Evaluation Basics',
                                    content: [
                                        "Focus: Accuracy, loss.",
                                        "Topics: Overfitting.",
                                        "Hour 1: Theory – Metrics.",
                                        "Hours 2-3: Guided – Model eval.",
                                        "Hour 4: Challenge – Tune model."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 26,
                            title: 'Week 26: AI Engineer Deep Dive – Deep Learning & TensorFlow.js Production Mastery',
                            content: "Week 26 turns JavaScript-focused AI Engineers into true deep learning practitioners who can design, train, and ship state-of-the-art neural networks entirely in the browser or Node.js. Students begin with the foundations of neural networks: single perceptrons, activation functions, forward propagation, and loss calculation. They quickly scale to multi-layer perceptrons (MLPs), implement backpropagation from scratch, and solve the classic XOR problem. The week accelerates into modern architectures: Convolutional Neural Networks (CNNs) with filters, strides, padding, and pooling layers — trained on MNIST to achieve 98%+ accuracy. Then Recurrent Neural Networks (RNNs) and LSTMs tackle sequential data. Advanced production techniques follow: dropout, batch normalization, learning rate schedulers, gradient clipping, and modern optimizers. The capstone focuses on real-world AI Engineer deployment with model optimization and client-side inference.",
                            listOfProjects: [
                                "XOR Neural Network from Scratch (MLP + backprop trained live in browser)",
                                "Real-Time Handwritten Digit Recognizer (Full CNN on MNIST – draw → instant prediction)",
                                "Live Webcam Object Detector (MobileNet converted to TF.js – 30+ FPS classification)",
                                "Next-Word Text Predictor (LSTM trained on Shakespeare – autocomplete in real-time)",
                                "Emotion Detection from Face (CNN + webcam → happy/sad/angry/neutral live labels)",
                                "Music Genre Classifier (Audio → spectrogram → CNN running fully in browser)",
                                "Human Pose Estimation Playground (PoseNet/BlazePose in TF.js – live skeleton overlay)",
                                "Browser-Based Image Style Transfer (Fast pre-trained style model – apply artistic filters live)",
                                "Capstone: AI-Powered Photo Editor (Object removal + style transfer + super-resolution all on-device)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Neural Networks Intro',
                                    content: [
                                        "Focus: Perceptrons.",
                                        "Topics: Activation funcs.",
                                        "Hour 1: Theory – Forward pass.",
                                        "Hours 2-3: Guided – Single neuron.",
                                        "Hour 4: Challenge – Binary class."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Multi-Layer Nets',
                                    content: [
                                        "Focus: Hidden layers.",
                                        "Topics: Backprop.",
                                        "Hour 1: Theory – Weight updates.",
                                        "Hours 2-3: Guided – MLP build.",
                                        "Hour 4: Challenge – XOR solver."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: CNN Basics',
                                    content: [
                                        "Focus: Convolution, pooling.",
                                        "Topics: Filters.",
                                        "Hour 1: Theory – Image processing.",
                                        "Hours 2-3: Guided – CNN layers.",
                                        "Hour 4: Challenge – Digit recognizer."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: RNN and LSTM',
                                    content: [
                                        "Focus: Sequences.",
                                        "Topics: Vanishing gradients.",
                                        "Hour 1: Theory – Time series.",
                                        "Hours 2-3: Guided – RNN model.",
                                        "Hour 4: Challenge – Text predictor."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: Advanced Techniques',
                                    content: [
                                        "Focus: Dropout, batch norm.",
                                        "Topics: Optimizers.",
                                        "Hour 1: Theory – Regularization.",
                                        "Hours 2-3: Guided – Tuned nets.",
                                        "Hour 4: Challenge – Overfit fix."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Deployment and Projects',
                                    content: [
                                        "Focus: Browser ML.",
                                        "Topics: Model saving.",
                                        "Hour 1: Theory – JS specifics.",
                                        "Hours 2-3: Guided – Full DL app.",
                                        "Hour 4: Challenge – Capstone ML."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        },
                        {
                            week: 27,
                            title: 'Week 27: AI Engineer Capstone – Building & Shipping Production-Grade Intelligent Web Applications',
                            content: "Week 27 is where everything clicks: AI Engineers stop building isolated demos and start shipping full-stack, production-ready intelligent applications that companies actually pay six figures for. Students architect real-world systems from day one: combining vanilla JavaScript/TypeScript frontends, secure AJAX + WebSocket backends, Google Apps Script automation, and on-device TensorFlow.js models into cohesive products. They master the complete modern AI Engineer stack — DOM-driven reactive UIs, real-time data sync, typed backend services, automated workflows, and blazing-fast client-side inference. Key integrations include algorithm-powered interactive interfaces, hybrid AJAX/WebSocket dashboards, TypeScript-enhanced Google Workspace automation tools, and optimized ML models. The week culminates in a portfolio-destroying capstone: a complete, deployable AI-powered web application built entirely with the skills from Weeks 12–26.",
                            listOfProjects: [
                                "Real-Time AI-Powered Search Engine (Binary search + live TF.js relevance scoring)",
                                "Collaborative Live Analytics Dashboard (WebSocket sync + on-device anomaly detection via TF.js)",
                                "Smart Google Sheets Add-on with Embedded ML (Auto-categorize expenses using browser-based classifier)",
                                "Secure Real-Time Chat with Sentiment Analysis (WSS + live emotion detection + message filtering)",
                                "AI-Enhanced Task Manager (Predictive priority scoring + auto-sorting using trained TF.js model)",
                                "Full-Stack Personal Finance Tracker (AJAX budget API + on-device fraud detection + Sheets sync)",
                                "Intelligent Form Processor (Live input validation + duplicate detection + auto-fill using ML)",
                                "AI Engineer Portfolio Site (Showcase all 27 weeks: live ML demos, real-time features, typed code, zero backend)",
                                "Capstone: Enterprise-Grade AI Web Platform (Real-time collaboration + on-device ML + Google Workspace automation + full auth + mobile-ready)"
                            ],
                            days: [
                                {
                                    day: 1,
                                    title: 'Day 1: Planning Integration',
                                    content: [
                                        "Focus: Stack overview.",
                                        "Topics: JS to ML pipeline.",
                                        "Hour 1: Theory – Full architecture.",
                                        "Hours 2-3: Guided – App blueprint.",
                                        "Hour 4: Challenge – Component map."
                                    ],
                                    link: 'https://example.com/day1'
                                },
                                {
                                    day: 2,
                                    title: 'Day 2: Core JS and DOM Integration',
                                    content: [
                                        "Focus: Interactive UIs.",
                                        "Topics: With algorithms.",
                                        "Hour 1: Theory – Efficient code.",
                                        "Hours 2-3: Guided – Algo-driven UI.",
                                        "Hour 4: Challenge – Search app."
                                    ],
                                    link: 'https://example.com/day2'
                                },
                                {
                                    day: 3,
                                    title: 'Day 3: AJAX and WS Combo',
                                    content: [
                                        "Focus: Data + real-time.",
                                        "Topics: Secure fetches.",
                                        "Hour 1: Theory – Hybrid comm.",
                                        "Hours 2-3: Guided – Live dashboard.",
                                        "Hour 4: Challenge – Chat with API."
                                    ],
                                    link: 'https://example.com/day3'
                                },
                                {
                                    day: 4,
                                    title: 'Day 4: TS and GAS Enhancement',
                                    content: [
                                        "Focus: Typed automation.",
                                        "Topics: Google integrations.",
                                        "Hour 1: Theory – Safe scripts.",
                                        "Hours 2-3: Guided – TS GAS app.",
                                        "Hour 4: Challenge – Automated tool."
                                    ],
                                    link: 'https://example.com/day4'
                                },
                                {
                                    day: 5,
                                    title: 'Day 5: ML and Optimization',
                                    content: [
                                        "Focus: Performant models.",
                                        "Topics: CRP in ML apps.",
                                        "Hour 1: Theory – Fast inference.",
                                        "Hours 2-3: Guided – Optimized predictor.",
                                        "Hour 4: Challenge – Deploy model."
                                    ],
                                    link: 'https://example.com/day5'
                                },
                                {
                                    day: 6,
                                    title: 'Day 6: Final Capstone',
                                    content: [
                                        "Focus: Complete app build.",
                                        "Topics: Testing, deploy.",
                                        "Hour 1: Theory – Holistic review.",
                                        "Hours 2-3: Guided – End-to-end project.",
                                        "Hour 4: Challenge – Polish and evaluate."
                                    ],
                                    link: 'https://example.com/day6'
                                }
                            ]
                        }
                    ]
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
                module9: {
                    title: 'Module 9 - Professional Development',
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
        {
            id: 'expert-ai-year-2',
            title: 'Expert AI - Year 2',
            color: 'rgba(54, 63, 70, 0.5)',
            modules: {
                highlights: {
                    title: 'Course Highlights Year 2',
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
                    title: 'Module 3 - Nextjs Fundamentals',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Nextjs Basics',
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
        {
            id: 'expert-ai-year-3',
            title: 'Expert AI - Year 3',
            color: 'rgba(54, 63, 70, 0.5)',
            modules: {
                highlights: {
                    title: 'Course Highlights Year 3',
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
                    title: 'Module 3 - Nextjs Fundamentals',
                    description: '',
                    content: [
                        {
                            week: 1,
                            title: 'Nextjs Basics',
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