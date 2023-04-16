# Houndr

## Description
This is a single-page application utilizing the MERN stack (MongoDB/Mongoose ODM, Express, React, and Node.js), GraphQL, JWT (JSON Web Tokens). This site is currently hosted on Heroku at [Heroku](https://houndr.herokuapp.com/) and can be locally run using the files located in the [GitHub](https://github.com/llangerud/Houndr) repository. To learn how to run this application, continue to the [Installation](#installation) and [Usage](#usage) sections of this README. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)

## Installation
1. Navigate to the GitHub repository ( https://github.com/llangerud/Houndr ) in your browser and click the green dropdown menu that says "Code". Cope the SSH key to your clipboard and then open your terminal.
2. In the terminal navigate to the directory you wish to house the repo.
3. Type "git clone" and paste the SSH key and hit enter.
4. Since the application uses Node.js you will need to have Node installed on your computer. For detailed instructions on how to install please visit: https://www.guru99.com/download-install-node-js.html
5. Once Node is installed navigate to the projects root directory in VS Code and right click and select "Open in Intergrated Terminal".
6. Type "npm i" to install all the proper dependacies.
7. Once the repo is cloned and all node dependacies are downloaded you are ready to run the server locally! The [Usage](#usage) section will have instructions on how to properly set up and seed the database.


## Usage
With the Houndr application, users can create an account to login, by clicking the "Get Started" button. If the user already has an account, click the "Log In" button on the top right hand side of the page. 

![mainpage](https://user-images.githubusercontent.com/112982735/232259440-9e9af03e-6ddb-4314-b1fd-f301103f4f91.jpg)


![login](https://user-images.githubusercontent.com/112982735/232259443-3fae5e97-f948-4cf8-947a-d77da954471b.jpg)

Once logged in, the user will have a choice to add a dog, or find a friend.

![add_or_find](https://user-images.githubusercontent.com/114967552/231615817-1ba012b8-89d2-433c-82b0-1cb59fc407e5.JPG)

To add their dog/s information to their profile, they can do this by clicking on the "Add Your Dog" button. By adding this information, other app users will be able to search your dog/s. 

![doginfo](https://user-images.githubusercontent.com/112982735/232259442-f738f94f-bc61-4287-8d78-5ac005faf708.jpg)

To find a friend, the user can search for other dogs in their area by clicking on the "Find Friends" button. Here, the user can search for a type of breed and an age range. If there is a dog within the search criteria, it will appear with partial information. 

If there is a dog within the search criteria, it will appear with partial information. 

![found_friend](https://user-images.githubusercontent.com/114967552/231615811-e25822b6-f9e8-45ad-8871-5b2d69db496b.JPG)

If the user finds a dog that they would like to get more details on, they can click on the "Meet Up" button. This opens up a modal with the additional information and a button to email the dog's owner to setup a place, date, and time. 


## Credits
Contributors:
[Lily,](https://github.com/llangerud)
[Salena,](https://github.com/salenaoneill)
[Ben,](https://github.com/Benmarz10)
and
[Carrie](https://github.com/CarrieLJ)

This application utilizes the MERN stack. 

CSS Styling: https://daisyui.com/

Dog Breed List API: https://dog.ceo/api/

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

This project is under MIT license

## Tests
To test this application you can run the server locally or navigate to the [Heroku](https://houndr.herokuapp.com/).
