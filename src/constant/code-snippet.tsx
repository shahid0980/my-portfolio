export const codeSnippet = `
    class shahid:
    def __init__(self, webDevelopment, backendDevelopment):
        self.name = "Shahid Khan"
        self._webDevelopment = webDevelopment
        self._backendDevelopment = backendDevelopment

    # Property for webDevelopment
    @property
    def webDevelopment(self):
        """Getter for webDevelopment"""
        return self._webDevelopment

    @webDevelopment.setter
    def webDevelopment(self, value):
        """Setter for webDevelopment"""
        print(f"Updating Web Dev to: {value}")
        self._webDevelopment = value

    # Property for backendDevelopment
    @property
    def backendDevelopment(self):
        """Getter for backendDevelopment"""
        return self._backendDevelopment

    @backendDevelopment.setter
    def backendDevelopment(self, value):
        """Setter for backendDevelopment"""
        print(f"Updating Backend Dev to: {value}")
        self._backendDevelopment = value

# Example Usage:
developer = shahid("React", "Node.js with Express")

# Accessing properties (calls the getter)
print(developer.webDevelopment)    # Output: React
print(developer.backendDevelopment) # Output: Node.js with Express

# Updating properties (calls the setter)
developer.backendDevelopment = "FastAPI" 

`;