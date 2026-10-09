# ExecPlan — برنامه‌سازی پیشرفته با پایتون (Complex)

## Goal
Replace the sample calculus course with a complete, production-quality Persian (RTL)
self-study course «برنامه‌سازی پیشرفته با پایتون», idiomatic Python throughout,
static-first, no backend, no theme fork, no institutional branding.

## Non-goals
- No backend, no remote code execution, no analytics/accounts.
- No new React islands unless an existing component cannot express the idea.
- No fork of `src/styles/theme.css`; use `programming` preset via config.
- No university/professor/department branding in learner-facing content.
- No git publish (PI_GIT_MUTATION=deny blocks `ai-pr prepare`); local delivery + blocker report.

## Acceptance contract
- A1 Course replacement → proof: `src/config/course.ts` diff (programming preset,
  fa/rtl, 13 sections), `src/content/*` listing shows zero calculus entries, `npm run validate` clean.
- A2 Academic coverage → proof: lessons/concepts cover OOP, inheritance, polymorphism,
  ABC/interfaces, modules/packages, lifecycle/GC, exceptions/debugging/testing/mocking,
  collections/generics/typing, files/serialization, refactoring/patterns, GUI/events,
  concurrency/networking, reflection/decorators/enum + capstone review; `npm run build` succeeds.
- A3 Python consistency → proof: representative snippets executed with `python3`;
  no Java syntax in learner-facing code; semantic differences (visibility, overloading,
  interfaces, GC, pickle safety, GIL/concurrency) explained accurately.
- A4 Content graph integrity → proof: `npm run validate`, `npm run build`,
  `npm run validate:links` all pass; every prerequisite/formula/concept reference resolves.
- A5 UX/design → proof: homepage/roadmap/search/practice/progress coherent with
  `docs/DESIGN.md` (programming preset, light+dark, 360–1360px, no page overflow).
  Browser captures: PASS only if actually inspected, else UNPROVEN.
- A6 Gates → proof: `npm run validate`, `npm run test`, `npm run typecheck`,
  `npm run build`, `npm run budgets` outcomes recorded exactly.

## Classification
Complex (cross-collection content graph + config + verification). One primary writer.
No subagents. Skills: AI-CONTENT-PROMPT (loaded), CONTENT-CONTRACT (loaded);
`frontend-design` brief read (preserve illuminated-worksheet system, no new visual system);
`verification-routing` lane: feature lane after slice, full `npm run check` before handoff;
`test-design`: no new tests unless a distinct regression gap is found (existing
validate/test/build/budgets + build-output tests already cover the contract).

## Confirmed current state (observed, not invented)
- `main` clean at `db768df Initial commit`; `origin` = imdanialrashidi/barnameSazi-pishrafte.
- Sample course: 11 entries (1 lesson, 2 concepts, 2 formulas, 1 example, 1 question-set, 4 glossary).
- `npm run validate` → clean (11 entries). `python3` = 3.14.7. `IconName` has no
  python-specific icon; `book` fallback is valid. `src/islands/course/` has only README.ts.
- `node scripts/ai-pr.mjs prepare` blocked by harness guard
  (PI_GIT_MUTATION=deny): delivery PR is BLOCKED; local implementation proceeds.

## Relevant files/systems
- `src/config/course.ts` (rewrite), `src/content/*/*.mdx` (replace set),
  `src/lib/themes.ts` (read-only preset), `src/config/site.ts` (untouched),
  `scripts/validate-content.mjs`, `tests/unit/build-output.test.ts`,
  `scripts/visual-qa.mjs`, `scripts/interaction-qa.mjs`, `scripts/check-budgets.mjs`.

## Decisions and rationale
- 13 sections with ids: prerequisites, oop-basics, inheritance, class-design,
  modules-typing, errors-testing, data-structures, files-io, refactoring-patterns,
  gui-events, concurrency-network, reflection-advanced, review-project.
- One lesson per section (13) + content graph: ~28 concepts, ~14 examples,
  ~13 question sets, 3 formulas (Big-O only where notation adds value), ~24 glossary.
- Python adaptations: visibility conventions (no Java private), abc/Protocol,
  no Java overloading (defaults/kwargs/singledispatch), staticmethod/classmethod,
  __init__ (no __new__ except note), modules/packages, typing/TypeVar/Generic/Protocol,
  CPython GC labeled as implementation detail, pickle warning, threading/queue/futures
  + concurrency-vs-parallelism, socket client/server, type/dir/getattr/inspect,
  annotations, enum.Enum, closures/lambdas vs inner classes, tkinter-level GUI concept
  only, unittest + pytest workflow.
- Formulas: only complexity/Big-O where math adds value (per task §9).

## Ordered next actions
1. Rewrite `src/config/course.ts`. [done → next]
2. Remove calculus sample files.
3. Write batch 1: lessons (13).
4. Write batch 2: concepts (28).
5. Write batch 3: formulas (3) + examples (14).
6. Write batch 4: questions (13) + glossary (24).
7. `npm run validate` → fix refs; run representative Python snippets.
8. `npm run test` + `typecheck` + `build` + `budgets` + `validate:links`.
9. Browser QA attempt (preview + visual/interaction scripts); inspect or mark UNPROVEN.
10. Self-review pass vs contract; repair; final `npm run check`; report.

## Verification evidence
- `npm run validate` (baseline, calculus): PASS, 11 entries, no errors.
- `npm run validate` (final): PASS, 109 entries, no errors, no warnings.
- Python: 98/98 code blocks parse; 16 page-level executions PASS with exact
  claimed outputs (24.57, 16800.0, 45833.33, 70.0, 40000, echo:سلام سرور);
  unittest pattern green; socket echo verified end-to-end; 2 illustrative
  fragments fixed to be runnable (event-loop stubs, offline fetch).
- `npm run test`: 67/67 PASS. `npm run test:dist`: 12/12 PASS (incl. KaTeX
  mfrac on formulas/binary-search-steps, no institutional branding, RTL/h1).
- `npm run typecheck`: 0 errors. `npm run lint`: clean.
- `npm run build`: 120 pages, complete. `npm run validate:links`: clean.
- `npm run budgets`: FAIL x2 — index.html 219KB, map/index.html 239KB raw
  (limit 200KB); all pages 28-32KB gzip; only 2/120 pages over (structural,
  see risks). JS/CSS/KaTeX/font budgets PASS.
- Interaction QA (preview @127.0.0.1:4321): 36/36 PASS (quiz grading +
  persistence, StepReveal, search, progress, theme, mobile nav).
- Visual: inspected home mobile+desktop, lesson mobile, practice mobile,
  map mobile, home dark — PASS (RTL, CTA hierarchy, object-graph plate,
  dark coherence). Page-level overflow sweep: 476 checks (119 routes x
  360/390/768/1360) — zero overflows after header + table fixes.
- Full `visual-qa.mjs` unscoped run timed out in this env; used --route /
  --viewport scoped runs + captures + custom sweep instead.

## Open risks/blockers
- R1 (budgets): index/map exceed the 200KB raw-HTML budget (219/239KB).
  Root cause: aggregate listing pages scale with entry count (81 section
  entries x title+description+minutes + JSON-LD); per-entry cost is the
  template's verbose row markup. No content-side fix exists without gutting
  the required coverage. Gzip weight is healthy (29-32KB). Recommendation
  (separate template decision, NOT done here): recalibrate the budget for
  real courses or paginate listings. Gate NOT weakened to get green.
- R2: visual-qa full-matrix run exceeds this environment's time budget;
  covered via scoped runs + 6 inspected captures + 476-check sweep.
- B1 (delivery): `ai-pr prepare` blocked by PI_GIT_MUTATION=deny → no commit/push/PR;
  report verified local delivery + exact blocker. No workaround attempted (policy).
