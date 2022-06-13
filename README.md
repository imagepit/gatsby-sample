# Gatsby.js + Typescriptサンプル

## TODO

- [ ] TOCの配置
  - [ ] サイドバー
  - [ ] 記事上部
- [ ] トップページのレイアウト
  - [ ] 記事のカルーセル表示
- [ ] パンくずリスト
- [ ] ヘッダー
  - [ ] グローバルメニュー
  - [ ] 検索窓
- [ ] SNSリンク
- [ ] フッター
  - [ ] 次のサイトのようなもの
    - [ ] https://www.extage-marketing.co.jp/web-school/nofollow/
- [ ] 人気記事一覧
  - [ ] https://kinnikumegane.com/posts/popularlist/
- [ ] 辞典ページ作成
  - [ ] https://terakoya.site/ios_dic/ios-dic-orientation/
- [ ] Dockerイメージ化

## 環境構築

```
brew install node@16
npm install -g gatsby-cli
```

## プロジェクト作成

```cmd
gatsby new gatsby-starter-ts https://github.com/jpedroschmitz/gatsby-starter-ts
```

## 起動

```
cd gatsby-starter-ts
gatsby develop
```

## 依存関係

名前|バージョン|説明
---|---|---
gatsby|4.9.3|Gatsby.js本体
gatsby-background-image|1.6.0|背景画像`<BackgroundImage>`を使うためのプラグイン
gatsby-plugin-image|2.9.1|画像処理を行うための静的画像用タグ`<StaticImage>`や動的画像用タグ`<GatsbyImage>`を扱うためのプラグイン
gatsby-plugin-mdx|3.8.1|MDXを使うためのプラグイン
gatsby-plugin-sass|5.7.0|sassを使うためのプラグイン
gatsby-plugin-sharp|4.9.1|色々サイズの画像を複数生成してくれるプラグイン
gatsby-plugin-styled-components|5.9.0|Styled Component CSSを使うためのプラグイン
gatsby-remark-autolink-headers|5.7.0|記事にあるHeadingタグにシャープ（#)付きのURLであるURLフラグメントを付けるプラグイン
gatsby-remark-images|6.6.0|Markdown内の画像を表示するプラグイン
gatsby-remark-images-remote|1.1.0|Markdown内の外部URLの画像もgatsby-imageで最適化するプラグイン
gatsby-remark-relative-images|2.0.2|Markdownファイルからの相対パスで画像ファイルを指定できるようにする
gatsby-remark-table-of-contents|2.0.0|Markdown記事に目次と見出しへのアンカー設定を実装する
gatsby-source-filesystem|4.6.0|ローカルのファイルシステムとGatsbyをつなぐインターフェイスになるプラグイン
gatsby-transformer-remark|5.6.0|Remarkを使用してMarkdownファイルを解析する
gatsby-transformer-sharp|4.9.0|色々サイズの画像を最適化してくれるプラグイン

## Markdown入稿

### gatsby-transformer-remarkのインストール

```cmd
npm install --save gatsby-transformer-remark
npm install --save gatsby-remark-relative-images
npm install --save gatsby-remark-images
```

### gatsby-source-filesystemのインストール

```cmd
npm install --save gatsby-source-filesystem
```

```js
module.exports = {
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
export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        date
        title
      }
      html
      parent {
        ... on File {
          name
        }
      }
    }
  }
}
`

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

```cmd
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

```tsx
export default function Home({ data }) {
  //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
  return (
    <>
      //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
      <div>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
        >
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
          <div>
            <img
              src="https://tk.ismcdn.jp/mwimgs/4/a/1140/img_4a30e7236c831a031f5b536bc5ea490628815.jpg"
              alt="cat"
              width={450}
            />
          </div>
        </Carousel>
      </div>
      //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
      <Layout>
        {/* <Title>タイトル</Title> */}
        {data.allMarkdownRemark.nodes.map((node) => (
          <div key={node.id}>
            <Link to={`post/${node.parent.name}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </Layout>
    </>
  );
}
```

## TOC

```
npm install --save gatsby-remark-autolink-headers gatsby-remark-table-of-contents
```

_gatsby-config.js_

```js
module.exports = ({ root }) => ({
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`
          //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
        ],
      },
    },
  ],
})
```

_src/pages/post/{MarkdownRemark.parent__(File)__name}.tsx_

```tsx
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
      tableOfContents
      //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
      frontmatter {
        title
      }
    }
  }
`;
export default function Home({ data }) {
  const { html,tableOfContents } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <main>
        <h1>{title}</h1>
        //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
        <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
        //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </Layout>
  );
}
```

## MDX

```cmd
npm install --save gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react gatsby-source-filesystem
```

TODO Gitの差分を見て追記すること

## ScrollSpy

- scrollspyにするにはmdxにしたほうがいいらしい。

https://desktopofsamuel.com/how-to-create-a-scroll-tracking-table-of-content-in-gatsby/

```cmd
npm install --save react-scrollspy
```

## Sass + CSS Modules対応

```
npm install --save node-sass gatsby-plugin-sass
```

## 画像対策

### アイキャッチ画像

https://note.com/daikinishimatsu/n/n2ea03a0785fb

```cmd
npm install --save gatsby-plugin-image gatsby-transformer-sharp gatsby-plugin-sharp
```

_gatsby-config.js_

```js
module.exports = {
  plugins: [
    //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // image
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    // sass css modules
    `gatsby-plugin-sass`,
    // set md file directory
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    }, 
    //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
    // set image file directory
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    // mdx
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
          'gatsby-remark-relative-images',
          //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
          `gatsby-remark-autolink-headers`,
          //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: true,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
};
```

_{mdx.parent__(File)__name}.tsx._

```tsx
import React from 'react';
import { graphql } from 'gatsby';
import Layout2Col from '@/components/Layout2Col';
import Toc from '@/components/Toc';
import Markdown from '@/components/Markdown';
import './post.module.sass';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
        thumbnail_alt
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
        //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
      }
      body
      tableOfContents
    }
  }
`;

export default function Home({ data }) {
  //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
  const thumbnail = getImage(data.mdx.frontmatter.thumbnail)
  const thumbnail_alt = data.mdx.frontmatter.thumbnail_alt
  //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
  const { body, tableOfContents } = data.mdx;
  const { title } = data.mdx.frontmatter;
  return (
    <Layout2Col>
      <main>
        <h1>{title}</h1>
        //▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼追加▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
        {thumbnail ? <GatsbyImage image={thumbnail} alt={thumbnail_alt} /> : <StaticImage alt="" src="../../../images/default_thumbnail.png" />}
        //▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲追加▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
        <Toc toc={tableOfContents} />
        <Markdown>{body}</Markdown>
      </main>
    </Layout2Col>
  );
}
```

## Syntax hilight

```cmd
npm install --save gatsby-remark-prismjs prismjs
```

### コードタイトル

https://moon-forest-design.github.io/memo/gatsbyjs-remark-code-titles-mdx/

## netlify連携

キャプチャ撮っていないけど実際にビルドできた。

## サイト内検索

## SEO対策

## SNS対応

## 記事埋め込み（ブログカード）

https://masalib.hatenablog.com/entry/2019/03/16/012357

## フォント追加

## タグ、カテゴリ一覧

https://blog.killinsun.com/posts/2021/08/24/gatsby-categories-and-tags

## 外部画像取得

https://takumon.com/gatsby-image-of-remote-in-building-by-using-create-remote-file-node

Gatsby.jsでマークダウン内の外部URLの画像もgatsby-imageで最適化したい！

https://qiita.com/akitkat/items/927d5dd97eecef51c10e

- [ ] 上記を使ってTerakoyaの記事を実際に入れて確認してみたい。
- 下記のコマンドでインストールできた。

```
npm install --save gatsby-remark-images-remote --legacy-peer-deps
```

## Markdownの出力内容を加工

https://www.mono7555e.com/customize-gatsby-transfer-remark/

- [ ] 上記を使ってコード部分のハイライトを行いたい

## マルチステートビルド

https://github.com/gatsbyjs/gatsby-docker


## gatsby build時にハマった

- gatsby developではうまく動いていたのが、gatsuby build時では下記のエラーになった。
- 単純に全ての画像のリンクがうまくいっていないとこのような事象が起きるらしい。。

```
 ERROR #85901  GRAPHQL

There was an error in your GraphQL query:

Cannot read property 'dir' of null

   1 | query pageUsersimagepitDesktopgatsbyStarterTssrcpagespostmdxParentFileNameTsx856225173($id: String) {
   2 |   mdx(id: {eq: $id}) {
   3 |     frontmatter {
   4 |       title
   5 |       thumbnailAlt
>  6 |       thumbnail {
     |       ^
   7 |         childImageSharp {
   8 |           gatsbyImageData
   9 |         }
  10 |       }
  11 |     }
  12 |     body
  13 |     tableOfContents
  14 |   }
  15 | }
  16 |

File path: /Users/imagepit/Desktop/gatsby-starter-ts/src/pages/post/{mdx.parent__(File)__name}.tsx
Url path: /post/blog-001/
Plugin: none
```

## Styled Components

```
npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

```
module.exports = {
  plugins: [`gatsby-plugin-styled-components`],
}
```

## gatsby-background-imageを使った背景画像の利用

```cmd
npm install --save gatsby-background-image gbimage-bridge
```



---

## 参考

- [Gatsby + TypeScript で技術ブログを書くための知見](https://blog.ojisan.io/1st-blog-stack/)
- [Gatsbyで1時間でブログを作るチュートリアル (Qiitaの記事を移行する)](https://qiita.com/abouch/items/2668fbc185b8dc7b659c)
- [【Gatsby】Sass + CSS Modulesな環境を作る](https://dezanari.com/gatsby-sass-css-modules/)