/**
 * Wrap GFM tables in a scroll container so wide tables never widen the page.
 *
 * `docs/DESIGN.md` requires tables to scroll inside their own container on
 * narrow viewports, and `src/styles/global.css` already provides the
 * `.table-scroll` pattern — but nothing applied it to author-written Markdown
 * tables, so any course with a real comparison table overflowed at 360 px.
 * Authors keep writing plain `| a | b |` tables; the deployment contract is
 * handled here, next to `remark-base-links.mjs`.
 *
 * The wrapper is a plain `div` (not a second table), so table semantics for
 * assistive technology are unchanged — only the scroll container is added.
 */

/**
 * @returns {(tree: unknown) => void}
 */
export function remarkTableScroll() {
  return function transformer(tree) {
    walk(tree);
  };
}

function walk(node) {
  if (!node || typeof node !== 'object') return;
  const children = node.children;
  if (!Array.isArray(children)) return;
  for (let index = 0; index < children.length; index += 1) {
    const child = children[index];
    if (child && typeof child === 'object' && child.type === 'table') {
      // Raw html nodes pass through both the Markdown and the MDX
      // pipelines untouched, unlike mdxJsx nodes.
      children.splice(
        index,
        1,
        { type: 'html', value: '<div class="table-scroll">' },
        child,
        { type: 'html', value: '</div>' },
      );
      index += 2;
    } else {
      walk(child);
    }
  }
}
