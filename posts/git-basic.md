---
title: "Git入門"
date: "2021-01-19"
published: true
category: software
thumbnail: ../images/git-basic.png
thumbnailAlt: "Git入門"
---

## カリキュラム

<div class="col2">

#### 第1章 Kubernetes基礎知識

- Kubernetesの基本要素
- Kubernetesの拡張機能
- Kubernetesの機能拡張に必要な要素
  - Custom Controller
  - Kind
  - Resource
  - Object
  - Operatorについて

#### 第2章 Custom ResourceとCustome Resource Definition

- Custom Resource（CR）とは
- Custome Resource Definition（CRD）とは
- Custome Resource Definitionを追加する
- Custom Resourceを追加する
- Custome Resource Definitionの拡張
- Custom Resourceの検証

#### 第3章 Go言語の理解

#### 第4章 client-go及び関連コンポーネントの理解

- client-goとは
- apimachineryとは
- client-goでPodの情報を取得する
- Informer
- Workqueue 
- runtime.Object
- Scheme 

#### 第5章 Sample Controllerのソースコードを読み解く

- Sample Controllerとは
- Sample Controllerディレクトリー構成 
- Sample ControllerのCRD
- types.go
- main関数
- Foo Controller 
- Controllerの定義 
- メインロジック(Reconcile) 
- processNextWorkItem関数 
- syncHandler関数 

#### 第6章 controller-runtimeとcontroller-tools

- controller-toolsとは
- controller-runtimeとは

#### 第7章 KubebuilderでSample Controllerを実装しよう

- Kubebuilderでの開発の流れ
- Kuberbuilderプロジェクトの初期化
- KuberbuilderでAPI ObjectとControllerのテンプレートを作成 
- types.goを編集してAPI Objectを定義
- controller.goを編集してReconcileを実装
- main.goを編集してmain関数を修正
- 実行フェーズとしてOperatorを実際に動かす

#### 第8章 OperatorSDKでSample Controllerを実装しよう

- Operator SDKでの開発の流れ
- Operator SDKでOperator用のディレクトリーの初期化 
- Operator SDKでAPI Objectのテンプレートを作成 
- Operator SDKでControllerのテンプレートを作成 
- types.goを編集してAPI Objectを定義
- controller.goを編集してReconcileを実装
- 実行フェーズとしてOperatorを実際に動かす 

#### 第 9章 Custom Resourceの応用機能を実装しよう

- Admission Webhook
- Conversion Webhook

</div>

## 演習問題

- 丸々を作ってみよう！！
- 丸々を作ってみよう！！
- 丸々を作ってみよう！！
- 丸々を作ってみよう！！
- 丸々を作ってみよう！！