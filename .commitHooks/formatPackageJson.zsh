#!/bin/zsh

pnpm syncpack format
git add ./package.json
echo "Formatted package.json successfully"
