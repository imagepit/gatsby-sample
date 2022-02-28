import React from 'react';

export default function Toc(props) {
  const { toc } = props;
  console.log(toc);
  return (
    <nav>
      {/* {toc.items.map(p =>(
                <li key={p.url}>
                    <a href={p.url}>{p.title}</a>
                </li>
            ))} */}
    </nav>
  );
}
