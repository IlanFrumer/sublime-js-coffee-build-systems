#!/bin/bash
FOLDER="$( cd "$( dirname "$0" )" && pwd )"
PACKAGES="$( cd && pwd )/.config/sublime-text-3/Packages"

pushd $PACKAGES
ln -s $FOLDER
popd