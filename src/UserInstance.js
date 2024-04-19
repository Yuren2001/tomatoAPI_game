class UserInstance {
  constructor() {
    // Check if an instance of UserInstance already exists
    if (!UserInstance.instance) {
      // If not, initialize the CurrentUserName property as null
      this.CurrentUserName = null;
      // Set the instance of UserInstance to this object
      UserInstance.instance = this;
    }

    // Return the instance of UserInstance
    return UserInstance.instance;
  }

  // Method to set the current user's name
  setUserName(CurrentUserName) {
    this.CurrentUserName = CurrentUserName;
  }

  // Method to get the current user's name
  getUserName() {
    return this.CurrentUserName;
  }
}
// Create a single instance of UserInstance
const CurrentUserName = new UserInstance();
// Export the instance to be used throughout the application
export default CurrentUserName;
