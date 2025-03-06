const mockAuth = {
  currentUser: null,
  async signInWithEmailAndPassword(email, password) {
    this.currentUser = { email };
    return { user: this.currentUser };
  },
  async createUserWithEmailAndPassword(email, password) {
    this.currentUser = { email };
    return { user: this.currentUser };
  },
  onAuthStateChanged(callback) {
    callback(this.currentUser);
    return () => {}; // Unsubscribe function
  },
};

export default mockAuth;
