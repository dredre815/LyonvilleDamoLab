# **Lyonville Webpage Project**

Official webpage for Lyonville, dedicated to serving both the local community and visitors. This platform emphasizes user experience, accessibility, and content tailored to various audience segments.

## **Table of Contents**

- [Project Overview](#project-overview)
- [Pages Overview](#pages-overview)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Contributors & Roles](#contributors--roles)
- [Feedback](#feedback)
- [How to use](#how-to-use)

## **Project Overview**

- **Objective:** Design the front end of the Lyonville website.
- **Main Focus:** Visitors and the general Lyonville community, with sections dedicated to locals.
- **Content:** Rich information tailored for visitors and the local community.
- **Source Files:** The project is a collective effort initiated by the XX Group, with contributions from various teams and individuals.

## **Pages Overview**

### **Main Pages:**
- **Things To Do:** A comprehensive guide for activities in Lyonville.
- **History:** A deep dive into Lyonville's past and heritage.
- **Real Estate:** Information and insights about property in Lyonville.
- **Local Business:** Showcasing businesses and services in Lyonville.

### **Development Approach:**

- Each main page (Things To Do, History, Real Estate, Local Business) is managed in separate large files.
- Designers from Damolab are responsible for individual page designs.
- The individual designs will be merged into the main file, `lyonville-frontend-damolab`, upon completion.
- Interaction with other pages will be implemented accordingly.

## **Setup & Installation**

1. Clone the repository:
   ```
   git clone https://github.com/[your-username]/lyonville-webpage.git
   ```
2. Navigate to the directory:
   ```
   cd lyonville-webpage
   ```

## **Usage**

Visit the live website at `[website link]` or run it locally following the setup instructions above.

## **Contributors & Roles**

- **Damolab Team:** Responsible for the design of the main pages (Things To Do, History, Real Estate, Local Business).
- **XX Group:** Oversight and overall project management.

## **Feedback**

To provide feedback or report inappropriate content, please email us at `[group email address]`.

## **How to Use**
（From Owner avatar lyonville-frontend's Readme file)
Please contact The Duy Nguyen from HillClimbers for any queries and issues with setting up node_modules and running unit tests and linters. Firstly, ensure that you have installed npm or yarn. Then, do as follows:

Clone the main repository. Then git switch to your team's branch (you might need to fetch)
Run git branch (to ensure that you're on your team's branch, such as i-want-h1 or damolab, instead of main).
Copy all of your coding files to the respective folders that are present in this template.
For example, you have an Events page file, Events.jsx. Then you might want to move that to src/pages.
Likewise, if you have a Navigation Bar component, NavBar.jsx, then you can move that to src/components.
These steps ensure that you have all necessary and secure dependencies specified in package.json, and a complete .gitignore. Now, use the following commands:

npm install (install everything to node_modules)
npm run dev (to make sure vite is working properly)
npm run lint (JS linter to improve code quality; if this shows errors, you must correct your code as per what the error is telling you)
npm run tsc (loose type check)
After you've ensured everything is running fine with no errors, do as follows:

Run git push (push your code on your team's branch)
Go onto GitHub, check the icon next to your commit to see the status of the CI tests, it will be either 🟠 (currently running), ❌ (failed), or ✅ (successful).
If failed, see the failed tests and please correct your code or contact me.
If succeeded, go to next step.
Create a Pull Request and wait for approval.

---
