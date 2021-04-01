# CycleQueue

## How to use

Code snippet:

    `let cycleQ = require("CycleQueue")`

To initalize:

    `let queue = new cycleQ("Test")`

CycleQueue accepts all primative types and Arrays

## Useful Functions

What sets CycleQueue apart from a standard queue is the ability to go forward and backwards in the queue without losing the current element. 

    `queue.cycleForward()`

    `queue.cycleBack()`

## About

I was originally working on another app and created this data structure to handle our Objects. I needed to cycle back and forth but I couldn't find a package that had the capability. Hopefully there is someone that finds utility with this class for their use case. 