#!/usr/bin/env bash

tslint iters_genrs.ts
tsc --lib 'es5, es6, dom' --downlevelIteration iters_genrs.ts
node iters_genrs.js
