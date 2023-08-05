#!/bin/bash

# ディレクトリパスを指定
dir="./public/photo/"

# 拡張子がjpgのファイル名を取得してリスト形式で表示
find "$dir" -type f -name "*.jpg" -exec basename {} \;
