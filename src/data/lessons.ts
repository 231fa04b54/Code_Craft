export interface CodeChallenge {
  id: string;
  title: string;
  description: string;
  starterCode: string;
  solution: string;
  testCases: {
    input?: string;
    expectedOutput: string;
    description: string;
  }[];
  hints: string[];
  language: 'python' | 'javascript' | 'html' | 'sql' | 'typescript';
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  xp: number;
  completed: boolean;
  locked: boolean;
  type?: string;
  description?: string;
  challenge?: CodeChallenge;
}

export const courseLessons: Record<string, Lesson[]> = {
  'python-basics': [
    {
      id: 1,
      title: "The Python Realm - Variables & Data Types",
      duration: "45 min",
      xp: 100,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn the fundamentals of Python variables and data types",
      challenge: {
        id: "py-vars-1",
        title: "Create Your First Variables",
        description: "Create variables to store a player's name, level, and health points. Print them to the console.",
        starterCode: `# Welcome to the Python Realm!
# Create three variables:
# - name (string): The hero's name
# - level (integer): Starting at 1
# - health (integer): Starting at 100

# Your code here:


# Print the variables
print(f"Hero: {name}")
print(f"Level: {level}")
print(f"Health: {health}")`,
        solution: `name = "CodeHero"
level = 1
health = 100

print(f"Hero: {name}")
print(f"Level: {level}")
print(f"Health: {health}")`,
        testCases: [
          {
            expectedOutput: "Hero: CodeHero\nLevel: 1\nHealth: 100",
            description: "Variables should be correctly defined and printed"
          }
        ],
        hints: [
          "Use = to assign values to variables",
          "Strings need quotes, numbers don't",
          "Variable names should be lowercase"
        ],
        language: 'python'
      }
    },
    {
      id: 2,
      title: "Spell Casting - Functions & Methods",
      duration: "60 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Master functions and methods in Python",
      challenge: {
        id: "py-func-1",
        title: "Cast Your First Spell",
        description: "Create a function that calculates damage based on attack power and level.",
        starterCode: `# Create a spell casting function
# Function should take attack_power and level as parameters
# Return damage = attack_power * level

def cast_spell(attack_power, level):
    # Your code here
    pass

# Test your spell
damage = cast_spell(10, 5)
print(f"Damage dealt: {damage}")`,
        solution: `def cast_spell(attack_power, level):
    damage = attack_power * level
    return damage

damage = cast_spell(10, 5)
print(f"Damage dealt: {damage}")`,
        testCases: [
          {
            expectedOutput: "Damage dealt: 50",
            description: "Function should calculate damage correctly"
          }
        ],
        hints: [
          "Use def to define a function",
          "Multiply attack_power by level",
          "Use return to send back the result"
        ],
        language: 'python'
      }
    },
    {
      id: 3,
      title: "Ancient Loops - For & While Magic",
      duration: "50 min",
      xp: 125,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Control flow with loops",
      challenge: {
        id: "py-loop-1",
        title: "Train Your Hero",
        description: "Use a for loop to simulate gaining XP. Each training session gives 100 XP.",
        starterCode: `# Start with 0 XP
xp = 0

# Train 5 times using a for loop
# Each session adds 100 XP
# Your code here:


print(f"Total XP gained: {xp}")`,
        solution: `xp = 0

for session in range(5):
    xp += 100
    print(f"Training session {session + 1}: +100 XP")

print(f"Total XP gained: {xp}")`,
        testCases: [
          {
            expectedOutput: "Total XP gained: 500",
            description: "Should gain 500 XP total from 5 training sessions"
          }
        ],
        hints: [
          "Use for i in range(5) to loop 5 times",
          "Use += to add to the XP variable",
          "Don't forget to increment inside the loop"
        ],
        language: 'python'
      }
    },
    {
      id: 4,
      title: "Conditional Portals - If/Else Statements",
      duration: "40 min",
      xp: 100,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Make decisions with conditional statements",
      challenge: {
        id: "py-cond-1",
        title: "Choose Your Path",
        description: "Create a level checker that determines rank based on player level.",
        starterCode: `# Check player rank based on level
level = 15

# Write conditions:
# level < 10: "Novice"
# level < 20: "Apprentice"
# level < 30: "Expert"
# level >= 30: "Master"

# Your code here:


print(f"Rank: {rank}")`,
        solution: `level = 15

if level < 10:
    rank = "Novice"
elif level < 20:
    rank = "Apprentice"
elif level < 30:
    rank = "Expert"
else:
    rank = "Master"

print(f"Rank: {rank}")`,
        testCases: [
          {
            expectedOutput: "Rank: Apprentice",
            description: "Level 15 should be Apprentice rank"
          }
        ],
        hints: [
          "Use if, elif, and else for multiple conditions",
          "Check conditions in order from smallest to largest",
          "Remember the colon : after each condition"
        ],
        language: 'python'
      }
    },
    {
      id: 5,
      title: "List Enchantments - Arrays & Lists",
      duration: "55 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Challenge",
      description: "Work with data collections",
      challenge: {
        id: "py-list-1",
        title: "Manage Your Inventory",
        description: "Create a list of items and add/remove items from your inventory.",
        starterCode: `# Create an inventory list
inventory = ["sword", "shield", "potion"]

# Add "helmet" to inventory
# Your code here:


# Remove "potion" from inventory
# Your code here:


# Print the final inventory
print(f"Inventory: {inventory}")`,
        solution: `inventory = ["sword", "shield", "potion"]

inventory.append("helmet")
inventory.remove("potion")

print(f"Inventory: {inventory}")`,
        testCases: [
          {
            expectedOutput: "Inventory: ['sword', 'shield', 'helmet']",
            description: "Should have sword, shield, and helmet"
          }
        ],
        hints: [
          "Use .append() to add items",
          "Use .remove() to delete items",
          "Lists are enclosed in square brackets []"
        ],
        language: 'python'
      }
    }
  ],
  'javascript-quest': [
    {
      id: 1,
      title: "The DOM Kingdom - Document Object Model",
      duration: "50 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn to manipulate HTML elements with JavaScript",
      challenge: {
        id: "js-dom-1",
        title: "Change the Title",
        description: "Use JavaScript to change the text content of an element.",
        starterCode: `// Select an element and change its text
// Imagine there's a <h1 id="title">Old Title</h1>

// Your code here:
const title = document.getElementById('title');

// Change the text to "Welcome Hero!"

console.log(title.textContent);`,
        solution: `const title = document.getElementById('title');
title.textContent = "Welcome Hero!";
console.log(title.textContent);`,
        testCases: [
          {
            expectedOutput: "Welcome Hero!",
            description: "Title should be changed to 'Welcome Hero!'"
          }
        ],
        hints: [
          "Use getElementById() to select elements",
          "Use textContent property to change text",
          "Don't forget to assign the new value"
        ],
        language: 'javascript'
      }
    },
    {
      id: 2,
      title: "Event Wizardry - Handling User Interactions",
      duration: "60 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Handle clicks, inputs, and other user events",
      challenge: {
        id: "js-event-1",
        title: "Create a Click Counter",
        description: "Create a counter that increments when a button is clicked.",
        starterCode: `// Create a click counter
let clicks = 0;

// Function to handle click
function handleClick() {
    // Increment clicks
    
    // Log the current count
    console.log(\`Clicks: \${clicks}\`);
}

// Simulate 3 clicks
handleClick();
handleClick();
handleClick();`,
        solution: `let clicks = 0;

function handleClick() {
    clicks++;
    console.log(\`Clicks: \${clicks}\`);
}

handleClick();
handleClick();
handleClick();`,
        testCases: [
          {
            expectedOutput: "Clicks: 1\nClicks: 2\nClicks: 3",
            description: "Should count clicks correctly"
          }
        ],
        hints: [
          "Use ++ to increment a number",
          "Template literals use backticks ``",
          "Call the function to simulate clicks"
        ],
        language: 'javascript'
      }
    }
  ],
  'html-css-realm': [
    {
      id: 1,
      title: "HTML Foundations - Structure & Semantics",
      duration: "40 min",
      xp: 100,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn HTML structure and semantic elements",
      challenge: {
        id: "html-struct-1",
        title: "Build Your First Page",
        description: "Create a basic HTML structure with header, main, and footer sections.",
        starterCode: `<!-- Create a complete HTML page structure -->
<!DOCTYPE html>
<html>
<head>
    <title>My Hero Page</title>
</head>
<body>
    <!-- Add header with h1 -->
    
    <!-- Add main section with paragraph -->
    
    <!-- Add footer with copyright -->
    
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html>
<head>
    <title>My Hero Page</title>
</head>
<body>
    <header>
        <h1>Welcome Hero!</h1>
    </header>
    
    <main>
        <p>This is your adventure page.</p>
    </main>
    
    <footer>
        <p>&copy; 2025 Hero Academy</p>
    </footer>
</body>
</html>`,
        testCases: [
          {
            expectedOutput: "Valid HTML structure with header, main, and footer",
            description: "Should have proper semantic HTML elements"
          }
        ],
        hints: [
          "Use <header>, <main>, and <footer> tags",
          "Put h1 inside header",
          "Use &copy; for copyright symbol"
        ],
        language: 'html'
      }
    }
  ],
  'react-mastery': [
    {
      id: 1,
      title: "React Components - Building Blocks",
      duration: "50 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn to create React components",
      challenge: {
        id: "react-comp-1",
        title: "Create Your First Component",
        description: "Create a functional component that displays a greeting message.",
        starterCode: `// Create a Greeting component
// It should accept a 'name' prop and display "Hello, {name}!"

function Greeting(props) {
    // Your code here
    
}

// Test your component
const message = Greeting({ name: "Hero" });
console.log(message);`,
        solution: `function Greeting(props) {
    return "Hello, " + props.name + "!";
}

const message = Greeting({ name: "Hero" });
console.log(message);`,
        testCases: [
          {
            expectedOutput: "Hello, Hero!",
            description: "Component should return greeting with name"
          }
        ],
        hints: [
          "Access props using props.name",
          "Return a string with the greeting",
          "Use + to concatenate strings"
        ],
        language: 'javascript'
      }
    },
    {
      id: 2,
      title: "State Management - useState Hook",
      duration: "60 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Master React state with hooks",
      challenge: {
        id: "react-state-1",
        title: "Build a Counter",
        description: "Create a counter that tracks clicks and displays the count.",
        starterCode: `// Simulate useState hook
let count = 0;

function increment() {
    // Increment the count
    
    console.log(\`Count: \${count}\`);
}

// Test it
increment();
increment();
increment();`,
        solution: `let count = 0;

function increment() {
    count = count + 1;
    console.log(\`Count: \${count}\`);
}

increment();
increment();
increment();`,
        testCases: [
          {
            expectedOutput: "Count: 1\nCount: 2\nCount: 3",
            description: "Should increment count correctly"
          }
        ],
        hints: [
          "Increment count by 1",
          "Use count = count + 1 or count++",
          "Log using template literals"
        ],
        language: 'javascript'
      }
    }
  ],
  'node-backend': [
    {
      id: 1,
      title: "Node.js Basics - HTTP Server",
      duration: "55 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Build your first HTTP server",
      challenge: {
        id: "node-http-1",
        title: "Create a Response Handler",
        description: "Create a function that returns a JSON response with status code.",
        starterCode: `// Create a function that returns a response object
// Response should have: status, message, data

function createResponse(status, message, data) {
    // Your code here
    
}

// Test it
const response = createResponse(200, "Success", { user: "hero" });
console.log(JSON.stringify(response));`,
        solution: `function createResponse(status, message, data) {
    return {
        status: status,
        message: message,
        data: data
    };
}

const response = createResponse(200, "Success", { user: "hero" });
console.log(JSON.stringify(response));`,
        testCases: [
          {
            expectedOutput: '{"status":200,"message":"Success","data":{"user":"hero"}}',
            description: "Should return proper JSON response"
          }
        ],
        hints: [
          "Return an object with three properties",
          "Use status, message, data as keys",
          "Remember the colon syntax for objects"
        ],
        language: 'javascript'
      }
    },
    {
      id: 2,
      title: "Express Routes - API Endpoints",
      duration: "60 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Create RESTful API endpoints",
      challenge: {
        id: "node-api-1",
        title: "Build a Route Handler",
        description: "Create a route handler that processes request data.",
        starterCode: `// Create a handler for user registration
// Extract username and email from request body
// Return success message

function registerUser(requestBody) {
    // Your code here
    
}

// Test it
const result = registerUser({ username: "hero", email: "hero@test.com" });
console.log(result);`,
        solution: `function registerUser(requestBody) {
    const username = requestBody.username;
    const email = requestBody.email;
    return "User " + username + " registered with " + email;
}

const result = registerUser({ username: "hero", email: "hero@test.com" });
console.log(result);`,
        testCases: [
          {
            expectedOutput: "User hero registered with hero@test.com",
            description: "Should extract and use request data"
          }
        ],
        hints: [
          "Access properties using dot notation",
          "Store username and email in variables",
          "Return a formatted string"
        ],
        language: 'javascript'
      }
    }
  ],
  'sql-database': [
    {
      id: 1,
      title: "SQL SELECT - Query Basics",
      duration: "45 min",
      xp: 125,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn to query data with SELECT",
      challenge: {
        id: "sql-select-1",
        title: "Select Heroes",
        description: "Write a query to select all heroes from the heroes table.",
        starterCode: `-- Write a SELECT query to get all columns from heroes table
-- Your SQL here:

`,
        solution: `SELECT * FROM heroes;`,
        testCases: [
          {
            expectedOutput: "SELECT * FROM heroes;",
            description: "Should select all columns from heroes"
          }
        ],
        hints: [
          "Use SELECT * to get all columns",
          "FROM specifies the table",
          "Don't forget the semicolon"
        ],
        language: 'sql'
      }
    },
    {
      id: 2,
      title: "SQL WHERE - Filtering Data",
      duration: "50 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Filter data with WHERE clauses",
      challenge: {
        id: "sql-where-1",
        title: "Find High-Level Heroes",
        description: "Select heroes with level greater than 10.",
        starterCode: `-- Select name and level from heroes where level > 10
-- Your SQL here:

`,
        solution: `SELECT name, level FROM heroes WHERE level > 10;`,
        testCases: [
          {
            expectedOutput: "SELECT name, level FROM heroes WHERE level > 10;",
            description: "Should filter heroes by level"
          }
        ],
        hints: [
          "Use WHERE to filter rows",
          "Use > for greater than comparison",
          "Specify columns: name, level"
        ],
        language: 'sql'
      }
    }
  ],
  'mongodb-quest': [
    {
      id: 1,
      title: "MongoDB CRUD - Create Documents",
      duration: "50 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn to insert documents in MongoDB",
      challenge: {
        id: "mongo-insert-1",
        title: "Create Hero Document",
        description: "Create an object representing a hero document for MongoDB.",
        starterCode: `// Create a hero document with name, level, and class
// Return the document as an object

function createHeroDocument(name, level, heroClass) {
    // Your code here
    
}

// Test it
const hero = createHeroDocument("Warrior", 5, "Fighter");
console.log(JSON.stringify(hero));`,
        solution: `function createHeroDocument(name, level, heroClass) {
    return {
        name: name,
        level: level,
        class: heroClass
    };
}

const hero = createHeroDocument("Warrior", 5, "Fighter");
console.log(JSON.stringify(hero));`,
        testCases: [
          {
            expectedOutput: '{"name":"Warrior","level":5,"class":"Fighter"}',
            description: "Should create proper document structure"
          }
        ],
        hints: [
          "Return an object with three properties",
          "Use name, level, class as keys",
          "Objects use curly braces {}"
        ],
        language: 'javascript'
      }
    },
    {
      id: 2,
      title: "MongoDB Query - Find Documents",
      duration: "55 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Query documents with filters",
      challenge: {
        id: "mongo-find-1",
        title: "Filter Heroes",
        description: "Create a filter object to find heroes above a certain level.",
        starterCode: `// Create a MongoDB filter to find heroes with level >= minLevel

function createLevelFilter(minLevel) {
    // Your code here
    
}

// Test it
const filter = createLevelFilter(10);
console.log(JSON.stringify(filter));`,
        solution: `function createLevelFilter(minLevel) {
    return {
        level: { $gte: minLevel }
    };
}

const filter = createLevelFilter(10);
console.log(JSON.stringify(filter));`,
        testCases: [
          {
            expectedOutput: '{"level":{"$gte":10}}',
            description: "Should create proper MongoDB query filter"
          }
        ],
        hints: [
          "Use $gte for greater than or equal",
          "Nested objects: { field: { $operator: value } }",
          "Return the complete filter object"
        ],
        language: 'javascript'
      }
    }
  ],
  'react-native': [
    {
      id: 1,
      title: "React Native Components - Mobile Views",
      duration: "60 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Build mobile UI components",
      challenge: {
        id: "rn-comp-1",
        title: "Create a Profile Card",
        description: "Create a function that returns profile data as an object.",
        starterCode: `// Create a profile card data object
// Should have: name, avatar, bio

function createProfile(name, avatar, bio) {
    // Your code here
    
}

// Test it
const profile = createProfile("Hero", "avatar.jpg", "Coding warrior");
console.log(JSON.stringify(profile));`,
        solution: `function createProfile(name, avatar, bio) {
    return {
        name: name,
        avatar: avatar,
        bio: bio
    };
}

const profile = createProfile("Hero", "avatar.jpg", "Coding warrior");
console.log(JSON.stringify(profile));`,
        testCases: [
          {
            expectedOutput: '{"name":"Hero","avatar":"avatar.jpg","bio":"Coding warrior"}',
            description: "Should create profile object correctly"
          }
        ],
        hints: [
          "Return an object with three properties",
          "Use name, avatar, bio as keys",
          "Match parameter names to object keys"
        ],
        language: 'javascript'
      }
    }
  ],
  'typescript-pro': [
    {
      id: 1,
      title: "TypeScript Types - Type Safety",
      duration: "50 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn TypeScript type system",
      challenge: {
        id: "ts-types-1",
        title: "Create Typed Function",
        description: "Create a function with type annotations that calculates area.",
        starterCode: `// Create a function that calculates rectangle area
// Parameters: width (number), height (number)
// Return: area (number)

function calculateArea(width, height) {
    // Your code here
    
}

// Test it
const area = calculateArea(5, 10);
console.log(\`Area: \${area}\`);`,
        solution: `function calculateArea(width, height) {
    return width * height;
}

const area = calculateArea(5, 10);
console.log(\`Area: \${area}\`);`,
        testCases: [
          {
            expectedOutput: "Area: 50",
            description: "Should calculate area correctly"
          }
        ],
        hints: [
          "Multiply width by height",
          "Return the result",
          "Use the * operator"
        ],
        language: 'typescript'
      }
    },
    {
      id: 2,
      title: "TypeScript Interfaces - Object Shapes",
      duration: "55 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Define interfaces for objects",
      challenge: {
        id: "ts-interface-1",
        title: "Create User Object",
        description: "Create a user object with id, name, and email properties.",
        starterCode: `// Create a user object
// Properties: id (number), name (string), email (string)

function createUser(id, name, email) {
    // Your code here
    
}

// Test it
const user = createUser(1, "Hero", "hero@test.com");
console.log(JSON.stringify(user));`,
        solution: `function createUser(id, name, email) {
    return {
        id: id,
        name: name,
        email: email
    };
}

const user = createUser(1, "Hero", "hero@test.com");
console.log(JSON.stringify(user));`,
        testCases: [
          {
            expectedOutput: '{"id":1,"name":"Hero","email":"hero@test.com"}',
            description: "Should create user object correctly"
          }
        ],
        hints: [
          "Return an object with three properties",
          "Match property names to parameters",
          "Use object literal syntax"
        ],
        language: 'typescript'
      }
    }
  ],
  'docker-kubernetes': [
    {
      id: 1,
      title: "Docker Basics - Container Configuration",
      duration: "60 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Learn container configuration",
      challenge: {
        id: "docker-config-1",
        title: "Create Config Object",
        description: "Create a configuration object for a Docker container.",
        starterCode: `// Create container config
// Properties: image, port, env (environment variables)

function createContainerConfig(image, port, env) {
    // Your code here
    
}

// Test it
const config = createContainerConfig("node:18", 3000, { NODE_ENV: "production" });
console.log(JSON.stringify(config));`,
        solution: `function createContainerConfig(image, port, env) {
    return {
        image: image,
        port: port,
        env: env
    };
}

const config = createContainerConfig("node:18", 3000, { NODE_ENV: "production" });
console.log(JSON.stringify(config));`,
        testCases: [
          {
            expectedOutput: '{"image":"node:18","port":3000,"env":{"NODE_ENV":"production"}}',
            description: "Should create config correctly"
          }
        ],
        hints: [
          "Return an object with three properties",
          "Use image, port, env as keys",
          "env is an object itself"
        ],
        language: 'javascript'
      }
    }
  ],
  'flutter-mobile': [
    {
      id: 1,
      title: "Flutter Widgets - Building UI",
      duration: "55 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Create Flutter widget structures",
      challenge: {
        id: "flutter-widget-1",
        title: "Create Widget Data",
        description: "Create a widget configuration object.",
        starterCode: `// Create a widget config
// Properties: type, text, color

function createWidget(type, text, color) {
    // Your code here
    
}

// Test it
const widget = createWidget("Button", "Click Me", "blue");
console.log(JSON.stringify(widget));`,
        solution: `function createWidget(type, text, color) {
    return {
        type: type,
        text: text,
        color: color
    };
}

const widget = createWidget("Button", "Click Me", "blue");
console.log(JSON.stringify(widget));`,
        testCases: [
          {
            expectedOutput: '{"type":"Button","text":"Click Me","color":"blue"}',
            description: "Should create widget config"
          }
        ],
        hints: [
          "Return an object with three properties",
          "Use type, text, color as keys",
          "Match parameter names"
        ],
        language: 'javascript'
      }
    }
  ],
  'graphql-apis': [
    {
      id: 1,
      title: "GraphQL Queries - Fetching Data",
      duration: "50 min",
      xp: 150,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Build GraphQL query structures",
      challenge: {
        id: "graphql-query-1",
        title: "Create Query Object",
        description: "Create a GraphQL query object structure.",
        starterCode: `// Create a GraphQL query object
// Properties: query (string), variables (object)

function createQuery(query, variables) {
    // Your code here
    
}

// Test it
const gqlQuery = createQuery("query { user { name } }", { id: 1 });
console.log(JSON.stringify(gqlQuery));`,
        solution: `function createQuery(query, variables) {
    return {
        query: query,
        variables: variables
    };
}

const gqlQuery = createQuery("query { user { name } }", { id: 1 });
console.log(JSON.stringify(gqlQuery));`,
        testCases: [
          {
            expectedOutput: '{"query":"query { user { name } }","variables":{"id":1}}',
            description: "Should create query object correctly"
          }
        ],
        hints: [
          "Return an object with two properties",
          "Use query and variables as keys",
          "variables is an object"
        ],
        language: 'javascript'
      }
    },
    {
      id: 2,
      title: "GraphQL Mutations - Modifying Data",
      duration: "55 min",
      xp: 175,
      completed: false,
      locked: false,
      type: "Lesson",
      description: "Create mutation operations",
      challenge: {
        id: "graphql-mutation-1",
        title: "Build Mutation",
        description: "Create a mutation object for creating a user.",
        starterCode: `// Create a mutation object
// Properties: mutation (string), variables (object with name and email)

function createUserMutation(name, email) {
    // Your code here
    
}

// Test it
const mutation = createUserMutation("Hero", "hero@test.com");
console.log(JSON.stringify(mutation));`,
        solution: `function createUserMutation(name, email) {
    return {
        mutation: "mutation CreateUser($name: String!, $email: String!) { createUser(name: $name, email: $email) { id } }",
        variables: {
            name: name,
            email: email
        }
    };
}

const mutation = createUserMutation("Hero", "hero@test.com");
console.log(JSON.stringify(mutation));`,
        testCases: [
          {
            expectedOutput: '{"mutation":"mutation CreateUser($name: String!, $email: String!) { createUser(name: $name, email: $email) { id } }","variables":{"name":"Hero","email":"hero@test.com"}}',
            description: "Should create mutation correctly"
          }
        ],
        hints: [
          "Return object with mutation and variables",
          "variables should have name and email",
          "mutation is a GraphQL string"
        ],
        language: 'javascript'
      }
    }
  ]
};
