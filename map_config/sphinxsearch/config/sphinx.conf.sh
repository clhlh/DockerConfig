#!/bin/bash

DIR=$(dirname $0)

[ -f $DIR/base.conf ] && cat $DIR/base.conf
[ -d $DIR/conf.d ] && find $DIR/conf.d -name "*.conf" -exec cat {} \;
