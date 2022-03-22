import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import go from 'highlight.js/lib/languages/go';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import scss from 'highlight.js/lib/languages/scss';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';
import 'highlight.js/styles/github.css';

export default function highlight() {
  hljs.registerLanguage(`bash`, bash);
  hljs.registerLanguage(`css`, css);
  hljs.registerLanguage(`dockerfile`, dockerfile);
  hljs.registerLanguage(`go`, go);
  hljs.registerLanguage(`js`, javascript);
  hljs.registerLanguage(`json`, json);
  hljs.registerLanguage(`scss`, scss);
  hljs.registerLanguage(`ts`, typescript);
  hljs.registerLanguage(`yaml`, yaml);
  hljs.registerLanguage(`md`, markdown);
  hljs.registerLanguage(`xml`, xml);
  hljs.highlightAll();

  document.querySelectorAll(`pre code`).forEach((codeBlock) => {
    // コメント部分を置換
    let text = codeBlock.innerHTML;
    text = text.replace(
      /.*\/\/▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼.*\n/g,
      `<b style="background:yellow;">`,
    );
    text = text.replace(
      /.*\/\/▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲.*\n/g,
      `</b>`,
    );
    text = text.replace(
      /.*\/\/▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼削除▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼.*\n/g,
      `<del style="background:#ddd;">`,
    );
    text = text.replace(
      /.*\/\/▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲削除▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲.*\n/g,
      `</del>`,
    );
    // HTMLを変更
    codeBlock.innerHTML = text;
  });
}
