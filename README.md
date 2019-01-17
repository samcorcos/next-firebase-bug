# Next Firebase Bug

A bug as of 16 January 2019.

## Installation

`npm i`

## Deployment

`npm run deploy`

When you deploy, the deploy will be successful, but the site won't load:

https://next-firebase-bug-m9ieolduz.now.sh/

Then try removing `firebase` as a dependency, comment it out everywhere it exists, redeploy, and it will work:

https://next-firebase-bug-n3sn75lfj.now.sh
