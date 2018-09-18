#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# https://www.youtube.com/watch?v=pUN3algpvMs

def pair (first): return (lambda second: {'first': first, 'second': second})

def fst (p): return p['first']

def snd (p): return p['second']

def add (a): return (lambda b: a + b)

def range (low): return (lambda high: None if low > high
                         else pair (low) (range (low + 1) (high)))

def map (f): return (lambda xs: None if xs is None
                     else pair (f (fst (xs))) (map (f) (snd (xs))))

def array2list (arrayLike):
    result = None
    xs     = reversed(arrayLike)

    for x in xs:
        result = pair (x) (result);

    return result

def list2array (xs):
    result = []

    while xs != None:
        result.append(fst (xs))
        xs = snd(xs)

    return result

def fizzbuzz (n): return ('fizzbuzz' if n % 15 == 0 else (
                          'fizz'     if n % 3  == 0 else (
                          'buzz'     if n % 5  == 0 else n )))

if __name__ == '__main__':
    myPair  = array2list([1, 2, 3])
    myAdd   = add (1)
    myRange = range (1) (20)
    print(myPair)
    print(myAdd (fst (myPair)))
    print(list2array(myRange))
    print(list2array(map (fizzbuzz) (map (myAdd) (myRange))))
