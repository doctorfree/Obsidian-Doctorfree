#!/bin/bash

VERSION="1.0.3"
RELEASE=2

usage() {
    printf "\nUsage: mkrelease [-c] [-d] [-p] [-u]"
    printf "\nWhere:"
    printf "\n\t-c indicates clean first"
    printf "\n\t-d indicates create draft release"
    printf "\n\t-p indicates skip package creation step"
    printf "\n\t-u displays this usage message and exits\n"
    exit 1
}

CLEAN=
DRAFT=
PACKAGE=1
while getopts "cdpu" flag; do
    case $flag in
        c)
            CLEAN=1
            ;;
        d)
            DRAFT="--draft"
            ;;
        p)
            PACKAGE=
            ;;
        u)
            usage
            ;;
    esac
done
shift $(( OPTIND - 1 ))

ANNO="Obsidian Doctorfree Theme, version ${VERSION} release ${RELEASE}"

gh release create v${VERSION}r${RELEASE} ${DRAFT} \
                  --title "${ANNO}" \
                  --notes-file release_notes.md

git fetch --tags origin
