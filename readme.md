This is a minimal example of a single threaded scraper api. You can create and control and instance. 

Positively, It shows the minimal ways to create scraping api and negetively, the limitations of how storing the references inside one process/file will cause scaling issues.

# Instructions
- Clone the repo
- Install all dependencies
- Start the main api with `node index.js`

# API
- `/create` creates an browser instance and gives you an unique id.
- `/title/:id/:url` navigates to a website and grabs the title.
- `/remove/:id` closes a browser instance.

# How it works
It creates a instance and stores the unique id to a instances object. Whenever you want to access the browser with specific id, it grabs the references from the object.