# Theinterview

Welcome to the Launchpoint Interview Repo! Thank you for considering a position with us. Please Fork This Repo To Complete Your Work.

## Our Approach

We are a software agency specializing in building SaaS and custom applications for startups, as well as digital transformations. Our development process is focused on efficiency, and we utilize cutting-edge technology to deliver high-quality products.

At Launchpoint, we take pride in our approach to development. Our tech stack is 100% TypeScript end-to-end, which means that we build Web, Mobile, and Servers using the same framework patterns. This approach allows us to deliver a consistent and cohesive experience across all platforms. The repo is a small sample of that pattern.

To further optimize our development process, we use a mono repo workspace on projects. This approach allows for a highly efficient shared codebase in our cross-platform development process. By reusing code across platforms, we can reduce development time and deliver products faster.

## Join Our Team

If you are interested in joining our team, we welcome you to explore our Github repository. Here, you will find more information about our company, our approach to development, and our current projects. We are always looking for talented individuals to join our team, and we look forward to hearing from you!

## Objectives

Complete Objectives relative to position, if applying for both complete them all in the same fork. We do not want this to take long, we have included time to completions for the experience level we are looking for.
If it is taking you longer do not be discouraged:

- The time goals are to respect your time, if you are not able to complete in time, we do not want this to take 4 hours (should be <45min). However...
- We are looking for completion more than you met the time goals for these objectives. These time goals are to give you an example of our expectations AFTER onboarding and training period. You may take as much time as you need.

### Backend Node, Nest.js and Mongodb Specialist Objectives

Backend Tasks are outlined on the readme at `apps/web-theinterview/README.md`

### Front End Nativescript and Angular Specialist Objectives

Frontend Tasks are outlined on the [readme](apps/core-backend-user/README.md) at `apps/core-backend-user/README.md`

Nativescript Tasks are outlined on the readme at `apps/nativescript-theinterview/README.md`

# Installing and Running

View the package json, Node 16+ required. Other requirements outlined in objectives depending on position.

## Development server

Run `npm run start:client` for a dev server. Navigate to http://localhost:4220/. The app will automatically reload if you change any of the source files.

Run `npm run start:core` for a dev api server.

### Build and Run nativescript

To build and run the nativescript app, you will need to follow the nativescript [environment setup](https://docs.nativescript.org/environment-setup.html)

- Run `nx run nativescript-theinterview:ios` for iOS simulator.
- Run `nx run nativescript-theinterview:android` for Android emulator.

If running into issues:
Start by running `ns doctor` from the `apps/nativescript-theinterview` directory to see which pieces of your dev environment are missing to build for iOS or Android. If you run this command from root, you will be missing some packages that are only installed at the app level.
