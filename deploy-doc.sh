#!/bin/bash -x
# Small script to auto-deploy docs to gh-pages branch
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

rm -rf out
git clone -b ${TARGET_BRANCH} --single-branch https://github.com/ironSource/atom-javascript-session.git out
rm -rf out/*
./node_modules/.bin/jsdoc -c jsDoc.json
cd out
git add .
git commit -m "Deploy to GitHub Pages"
git push
cd ..
rm -rf out
