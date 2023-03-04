# Theinterview

So you think you a ready to work on some angular code, lets see what you got!

## Development server

Run `npm run start:client` for a dev server. Navigate to http://localhost:4220/. The app will automatically reload if you change any of the source files.

Run `npm run start:core` for a dev api server.

- your work should display on http://localhost:4220/feature when all done.

# Objectives

More detailed information is in the code comments for your tasks. Objectives are in order of importance.

## Number 1

Navigate to libs/xplat/features/src/lib/my-feature/state/feature.selector.ts

- Write a function to complete the selectSelectedFeatureLabels seelctor
- EST TIME TO COMPLETE: 15min

## Numbeer 2

Change the selector in the TestFeatureComponent to use the new selectSelectedFeatureLabels

## Number 3

Update the html of TestFeatureComponent to Loop through the infromation returned from new selector and input each object to the LabelKeyCardComponent

## Number 4

On click of the card have LebelKeyCard Component update TestFeatureComponent (via output) to print the right label selected

**Hints**
UPDATE THIS is written in comments on lines to help you figure out what to do, and requests to typeset.
