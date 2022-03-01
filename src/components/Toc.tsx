import React from 'react';
import Scrollspy from 'react-scrollspy';
import './Toc.css';

function Items(props) {
  const { toc, depth } = props;
  const url = toc.map((post) => post.url.substring(1));
  return (
    <Scrollspy items={url} currentClassName="is-current" className="toc-list">
      {toc.map((p) => (
        <li key={p.url}>
          <a href={p.url}>{p.title}</a>
          {p.items && <Items toc={p.items} depth={depth + 1} />}
        </li>
      ))}
    </Scrollspy>
  );
}

export default function Toc(props) {
  const { toc } = props;
  return (
    <nav>
      <Items toc={toc.items} depth={0} />
    </nav>
  );
}
