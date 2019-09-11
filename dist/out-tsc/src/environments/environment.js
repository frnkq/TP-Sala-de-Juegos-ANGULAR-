// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
    production: false,
    // Initialize Firebase
    firebase: {
        apiKey: "AIzaSyAIKTXAKHZh4-UXru7FaG7IHkAR3Mx4veA",
        authDomain: "saladejuegos-d829d.firebaseapp.com",
        databaseURL: "https://saladejuegos-d829d.firebaseio.com",
        projectId: "saladejuegos-d829d",
        storageBucket: "saladejuegos-d829d.appspot.com",
        messagingSenderId: "857042851772",
        appId: "1:857042851772:web:2fe99d6e37a85cab"
    }
    //firebase.initializeApp(firebaseConfig);
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map