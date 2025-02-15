#!/bin/bash

set -uex

cd "$(dirname "$0")/.."

npm ci
npm test
npm run build
npm run generate-parser
npm run format
if git status --porcelain | grep -v -e "^[MADR]\s"; then
    echo "The working copy has unstaged changes"
    exit 1
fi

if [[ "${1:-}" == "--release" ]]; then
    git config --global user.email "info@softwaretechnik.berlin"
    git config --global user.name "Softwaretechnik Berlin"

    npm version patch
    git push
    git push --tags
    npm publish
fi
