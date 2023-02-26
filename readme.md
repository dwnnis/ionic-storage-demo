# Ionic Storage Demo

This demo was created for INF 133 (Winter 2023) to showcase Storage solutions for Ionic Framework. 

The project consists of three versions of a list-making app (with create, read, and delete function) that showcase the different storage solutions that helped store data either locally or using a cloud storage:

* `1-ionic-no-storage`: without a storage solution, data disappear after page reload.
* `2-ionic-local-storage`: with **Preferences API** of Capacitor, data could be stored locally in key-value pairs.
* `3-ionic-firebase`: with **Firestore database** from Firebase, data could be stored on a cloud storage for a wide range of purposes.

## Get Started

For testing each version of the project, navigate to the directory:

    cd [folder-name] (1-ionic-no-storage, 2-ionic-local-storage, or 3-ionic-firebase)

Install dependencies:

    npm install

Run the app with:

    ionic serve ([-l] for ionic lab)


## Set up Firebase for Cloud Storage 

Before running `3-ionic-firebase`, follow these steps to set up Firebase (Firestore Database) for the ionic project: 
1. Create a new Firebase project on your [Firebase console](https://console.firebase.google.com/)
2. Copy and paste Firebase SDK to the `environments/environment.ts` of `3-ionic-firebase`
3. Create database for Cloud Firestore


## Acknowledgements
* The project was built on top of demo codes from previous years' INF 133 (especially [Winter 2021](https://inf133-wi21.depstein.net/calendar) and [Fall 2019](https://inf133-fa19.depstein.net/calendar)) 
* The Firebase version referenced the [Angular + Firebase tutorial](https://www.youtube.com/watch?v=BlMhUSjnlJI) created by [desoga10](https://github.com/desoga10)