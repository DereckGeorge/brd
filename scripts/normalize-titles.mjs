import ts from "typescript";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function normalize(path) {
  const source = readFileSync(path, "utf8");
  const ast = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, path.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const edits = [];
  function visit(node) {
    if (ts.isJsxText(node) && ts.isJsxElement(node.parent) && /^h[1-6]$/.test(node.parent.openingElement.tagName.getText(ast))) {
      const text = node.getFullText(ast).replace(/\.+(\s*)$/, "$1");
      if (text !== node.getFullText(ast)) edits.push({ start: node.pos, end: node.end, text });
    }
    if (ts.isStringLiteral(node) && ((ts.isPropertyAssignment(node.parent) && /^(title|heading)$/.test(node.parent.name.getText(ast))) || (ts.isJsxAttribute(node.parent) && node.parent.name.getText(ast) === "title"))) {
      const text = node.text.replace(/\.+$/, "");
      if (text !== node.text) edits.push({ start: node.getStart(ast), end: node.end, text: JSON.stringify(text) });
    }
    ts.forEachChild(node, visit);
  }
  visit(ast);
  let result = source;
  for (const edit of edits.sort((a, b) => b.start - a.start)) result = result.slice(0, edit.start) + edit.text + result.slice(edit.end);
  if (result !== source) writeFileSync(path, result);
}
function walk(path) {
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const target = join(path, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (/\.tsx?$/.test(entry.name)) normalize(target);
  }
}
walk("app");
