#!/usr/bin/env bash
#DESCRIPTION: fix code style in src folder

php $(dirname "$0")/../../../../dev-ops/analyze/vendor/bin/ecs check --fix ./ --config $(dirname "$0")/../../../../platform/easy-coding-standard.php
