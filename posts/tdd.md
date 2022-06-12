---
title: "テスト駆動開発"
date: "2021-01-19"
published: true
category: system-design
thumbnail: ../images/ddd-basic.png
thumbnailAlt: "テスト駆動開発"
description: マイクロサービスは小さいサービスの集まったものであり全体で1つの大きなサービスを構成します。本研修ではマイクロサービスアーキテクチャの基本的な概念の理解と実際にマイクロサービスとしてアプリケーションの実装、運用、デプロイをしながらその勘所を学習します。
---

## 概要

博報堂プロダクツは、12の事業本部と３つの支社、さらに9つのグループ会社からなる製販一体型の総合制作事業会社です。

「こしらえる」という創業以来ブレない力を武器に、専門性と実施力で勝負してきました。そして今、デジタルという新たな景色が広がっています。今まで想像もしなかった体験が日々生み出されているこの時代において、私たちがやるべきこと。

## 対象者

- システム開発プロジェクトに携わっている人
- マイクロサービスアーキテクチャに興味がある人

## 前提とする知識

- オブジェクト指向のプログラミング言語（Java）の基礎知識
- Windowsの基本的な使い方の知識
- Linuxについての基礎知識
- ネットワークについての基礎知識

## カリキュラム

### 第1章 Kubernetes基礎知識

- Kubernetesの基本要素
- Kubernetesの拡張機能
- Kubernetesの機能拡張に必要な要素
  - Custom Controller
  - Kind
  - Resource
  - Object
  - Operatorについて

### 第2章 Custom ResourceとCustome Resource Definition

- Custom Resource（CR）とは
- Custome Resource Definition（CRD）とは
- Custome Resource Definitionを追加する
- Custom Resourceを追加する
- Custome Resource Definitionの拡張
- Custom Resourceの検証

### 第3章 Go言語の理解

### 第4章 client-go及び関連コンポーネントの理解

- client-goとは
- apimachineryとは
- client-goでPodの情報を取得する
- Informer
- Workqueue 
- runtime.Object
- Scheme 

### 第5章 Sample Controllerのソースコードを読み解く

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

### 第6章 controller-runtimeとcontroller-tools

- controller-toolsとは
- controller-runtimeとは

### 第7章 KubebuilderでSample Controllerを実装しよう

- Kubebuilderでの開発の流れ
- Kuberbuilderプロジェクトの初期化
- KuberbuilderでAPI ObjectとControllerのテンプレートを作成 
- types.goを編集してAPI Objectを定義
- controller.goを編集してReconcileを実装
- main.goを編集してmain関数を修正
- 実行フェーズとしてOperatorを実際に動かす

### 第8章 OperatorSDKでSample Controllerを実装しよう

- Operator SDKでの開発の流れ
- Operator SDKでOperator用のディレクトリーの初期化 
- Operator SDKでAPI Objectのテンプレートを作成 
- Operator SDKでControllerのテンプレートを作成 
- types.goを編集してAPI Objectを定義
- controller.goを編集してReconcileを実装
- 実行フェーズとしてOperatorを実際に動かす 

### 第 9章 Custom Resourceの応用機能を実装しよう

- Admission Webhook
- Conversion Webhook

## 演習問題

- 丸々を作ってみよう！！
- 丸々を作ってみよう！！
- 丸々を作ってみよう！！
- 丸々を作ってみよう！！
- 丸々を作ってみよう！！