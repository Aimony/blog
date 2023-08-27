#!/usr/bin/env sh
set -e

git bash npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m '自动化部署'
git push -f https://gitee.com/Aimony/blog.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist