# CycleQueue

## Install

   ```npm install cycle-queue```
   or 
   ```npm i cycle-queue```

## github

   ```https://github.com/pcaly626/CycleQueue```

## Test

   ```npm run test``

   This is the expected output 

   ```
   Test
   1
   2
   3
   CycleQueue { queue: [ 'Test', 1, 2, 3 ], indexOfQueue: 0 }
   { test: [ 1, 2, 3, 4 ] }
   CycleQueue { queue: [ { test: [Array] } ], indexOfQueue: 0 }
   ```

This will test initalization of the CycleQueue class

## How to use

Code snippet:

   ```let cycleQ = require("cycle-queue")```

To initalize:

   ```let queue = new cycleQ("Test")```

CycleQueue accepts all primative types and Arrays

## Useful Functions

What sets CycleQueue apart from a standard queue is the ability to go forward and backwards in the queue without losing the current element. 

   ```queue.cycleForward()```

   ```queue.cycleBack()```

## About

I was originally working on another app and created this data structure to handle our Objects. I needed to cycle back and forth but I couldn't find a package that had the capability. Hopefully there is someone that finds utility with this class for their use case. 