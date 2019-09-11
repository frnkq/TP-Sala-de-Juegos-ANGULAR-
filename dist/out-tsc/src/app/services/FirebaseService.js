;
export class FirebaseService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    CreateUser(username, password) {
        this.firestore.collection("usuarios").add({ username: username, password: password });
    }
}
//# sourceMappingURL=FirebaseService.js.map