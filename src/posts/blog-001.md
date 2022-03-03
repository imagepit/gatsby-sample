---
title: "記事001"
date: "2021-01-18"
thumbnailAlt: "猫ねこネコ"
---

## 環境構築

```
brew install node@16
npm install -g gatsby-cli
```

## プロジェクト作成

```
gatsby new gatsby-starter-ts https://github.com/jpedroschmitz/gatsby-starter-ts
```

## 起動

```
cd gatsby-starter-ts
gatsby develop
```

## Markdown入稿

### gatsby-transformer-remarkのインストール

```
npm install --save gatsby-transformer-remark
npm install --save gatsby-remark-relative-images
npm install --save gatsby-remark-images
```

### gatsby-source-filesystemのインストール

```
npm install --save gatsby-source-filesystem
```

```js
module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // マークダウンを格納しているフォルダを指定する
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/posts`,
      },
    }, 
    // マークダウン関連の設定    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            }
          }
        ],
      }
    }
    //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
  ],
};
```

### 記事の追加

_src/posts/blog-001.md_

```
---
title: "記事001"
date: "2021-01-18"
---

記事 001

## 概要

1. テスト 1
2. テスト 2
3. テスト 3
```

_src/posts/blog-002.md_

```
---
title: "記事002"
date: "2021-01-18"
---

記事 002

## 概要

1. テスト 1
2. テスト 2
3. テスト 3
```

## ファイル名からアクセスできるようにする（File System Route API）

_src/pages/post/{MarkdownRemark.parent__(File)__name}.tsx_

```tsx
import React from 'react';
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default function Home({data}) {
  const html = data.markdownRemark.html
  const { title } = data.markdownRemark.frontmatter
  return (
    <main>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
```

### トップページ

_src/pages/index.tsx_

```tsx
import React from 'react';
//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
import { graphql } from "gatsby"
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼削除▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
import Title from '@/components/Title';
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲削除▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
export default function Home({data}) {
  return (
    <main>
      {data.allMarkdownRemark.nodes.map(node => (
          <div>
            <Link to={"post/"+node.parent.name}><h2>{node.frontmatter.title}</h2></Link>
            <p>{node.frontmatter.date}</p>
            <p dangerouslySetInnerHTML={{__html: node.html}}></p>
          </div>
      ))}
    </main>
  );
}
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
```

## BootStrap対応

_src/components/Layout.tsx_

```
npm install --save react-bootstrap bootstrap
```

## レイアウト

- [Reactで複数のchildrenを扱いたい場合の実装パターン](https://zenn.dev/terrierscript/articles/2018-10-24-react-children)

```ts
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';

function Layout(props) {
  return (
    <>
      <Container fluid className="px-0 main">
        <Row className="justify-content-center">
          <Col>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col>
            <LeftSide />
          </Col>
          <Col xs={6}>
            <main>{props.children}</main>
          </Col>
          <Col>
            <LeftSide />
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Row>
          <Col className="footer-col">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
```

## カルーセル

```
npm install --save react-multi-carousel
```

## TOC

## 画像のBlur対策

## Syntax hilight

```
npm install --save gatsby-remark-prismjs prismjs
```



## Github連携

## netlify連携

---

## 参考

- [Gatsby + TypeScript で技術ブログを書くための知見](https://blog.ojisan.io/1st-blog-stack/)
- [Gatsbyで1時間でブログを作るチュートリアル (Qiitaの記事を移行する)](https://qiita.com/abouch/items/2668fbc185b8dc7b659c)
- [【Gatsby】Sass + CSS Modulesな環境を作る](https://dezanari.com/gatsby-sass-css-modules/)