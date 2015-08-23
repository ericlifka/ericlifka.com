#!/bin/sh
npm run build
rsync -r dist/ ../ericlifka.github.io
cd ../ericlifka.github.io
git add --all
git commit -m "build from https://github.com/ericlifka/ericlifka.com"
git push
cd ../ericlifka.com
