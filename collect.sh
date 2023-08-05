#!/bin/bash

# ディレクトリパス
directory="./public/photos/"

# 拡張子が.jpgのファイルを取得して辞書順にソート
file_list=$(find "$directory" -type f -name "*.webp" | sort -r)

# ファイル名をダブルクォーテーションで囲み、角括弧で囲んでリスト形式で表示
echo "["

for file in $file_list; do
  filename=$(basename "$file")
  echo "\"$filename\","
done

echo "]"
