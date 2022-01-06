#!/usr/bin/env bash

BASEPATH=$(dirname "$0")

PUBLICSTOREFRONTFOLDER=${BASEPATH}/../public/storefront/
NODEMODULESFOLDER=${BASEPATH}/node_modules/
SCSSSTOREFRONTFOLDER=${BASEPATH}/storefront/src/scss/

mkdir "${PUBLICSTOREFRONTFOLDER}" -p
mkdir "${SCSSSTOREFRONTFOLDER}" -p

cp "${NODEMODULESFOLDER}"/plyr/dist/plyr.min.js* "${PUBLICSTOREFRONTFOLDER}" || exit 1
cp "${NODEMODULESFOLDER}"/plyr/dist/plyr.css "${SCSSSTOREFRONTFOLDER}"/_plyr.package.scss || exit 1

cp "${NODEMODULESFOLDER}"/hls.js/dist/hls.light.min.js* "${PUBLICSTOREFRONTFOLDER}" || exit 1
