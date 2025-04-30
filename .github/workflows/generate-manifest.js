name: Generate Media Manifest

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Generate media_manifest.json
        run: |
          node generate-manifest.js

      - name: Commit and push manifest
        run: |
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add media_manifest.json
          git commit -m "Auto-generate media manifest"
          git push
