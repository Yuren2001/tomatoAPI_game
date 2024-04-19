// Define a class called LevelInstance
class LevelInstance {
  // Constructor for LevelInstance class
  constructor() {
    // Check if an instance of LevelInstance already exists
    if (!LevelInstance.instance) {
      // If not, initialize CurrentLevel property as null
      this.CurrentLevel = null;
      // Assign the current instance of LevelInstance to 'instance' property
      LevelInstance.instance = this;
    }

    // Return the instance of LevelInstance
    return LevelInstance.instance;
  }
  // Method to set the CurrentLevel property
  setLevel(CurrentLevel) {
    this.CurrentLevel = CurrentLevel;
  }
  // Method to get the CurrentLevel property
  getLevel() {
    return this.CurrentLevel;
  }
}
// Create a single instance of LevelInstance class
const CurrentLevelInstance = new LevelInstance();

// Export the single instance of LevelInstance
export default CurrentLevelInstance;
