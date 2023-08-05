#!/bin/bash

# 変換元のディレクトリと変換先のディレクトリを指定します
input_directory="./photos"
output_directory="./public/photos"

# 変換先のディレクトリが存在しない場合は作成します
mkdir -p "$output_directory"

# 変換元ディレクトリ内のjpgファイルを再帰的に探索して処理します
for file in $(find "$input_directory" -type f -name "*.jpg"); do
  # ファイル名と拡張子を取得します
  filename=$(basename -- "$file")
  extension="${filename##*.}"

  # ファイル名から拡張子を除いた部分を取得します
  filename_without_ext="${filename%.*}"

  # 変換先のファイルパスを作成します
  output_file="$output_directory/${filename_without_ext}.webp"

  # 画像の解像度を半分に縮小して .webp に変換します
  convert "$file" -resize 50% "$output_file"

  echo "変換完了: $file -> $output_file"
done

echo "処理が完了しました。"




