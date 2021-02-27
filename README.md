# Deploying a React Application to Github Pages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

So you want to make your react app and host it on github pages? Run a local version of the project using `npm start` or `yarn start` and run a build version using `npm run deploy`. The build version will be saved on a separate branch of your github repository known as gh-pages. Making changes to your local branch will be faster than redeploying. 

You can visit the application at https://fahadhameed89.github.io/react_startup_deploy_gh/

## Introduction

In this brief tutorial, we will build a template application using create-react-app and host it to github pages. This is a great way to demonstrate a react website without having to pay for hosting! 

- As an example, my version of this application can be found here --> https://fahadhameed89.github.io/react_startup_deploy_gh/
- Please note that the master/main branch will contain the source code, but each time you run 'npm build deploy' you will generate a new branch called gh-pages which will store the build version of your application. 



### Requirements


1. Install [`Node.js`](https://nodejs.org/) and ensure you have an adequate version on your system. 

    ```sh
    $ node --version
    My Version: v14.15.1
    ```

2. An adequate version of  [`npm`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ npm --version
    My Version: 7.5.2 
    ```
3. An adequate version of [`create-react-app`](https://github.com/facebookincubator/create-react-app) is installed. Here's the adequate version I use:

    ```sh
    $ create-react-app --version
    My Version: 4.0.3
    ```
3. [`Access to the GitHub CLI`](https://docs.github.com/en/github/getting-started-with-github/set-up-git) or the GitHub Desktop client

# Procedure
1. **Create an *empty* repository on GitHub.**
    * By *empty*, I mean *without* a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files.

2. **Use create-react-app somewhere on your local machine.** 

    * Open a scripting terminal (Bash, Powershell, etc) where you would like to save your application and run the following command. 

    ```sh
    $ create-react-app react-gh
    ```

    * [`Create React App`](https://create-react-app.dev/)
    * This will create a new folder named `react-gh` at the location your ran this command.

3. **Install `gh-pages` package as a dependency of the app.**

    ```
    $ cd react-gh-pages
    $ npm install gh-pages --save-dev
    ```
    

4. **Add some properties to the app's `package.json` file.** (3 minutes)

    * At the top, under the first opening brace, add a `homepage` property. Define its value to be the string `http://{username}.github.io/{repo-name}`, where `{username}` is your GitHub username, and `{repo-name}` is the name of the GitHub repository you created in step 1. Since my GitHub username is `FahadHameed89` and the name of my GitHub repository is `react_startup_deploy_gh`, I added the following:
    
    ```js
    //...
    {
    "homepage": "http://FahadHameed89.github.io/react_startup_deploy_gh"
    ```
    
    * In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:

    ```js
    "scripts": {
      //...
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```
    
    
5. **Create a git repository in the Application folder.**

    ```
    $ git init
    Initialized empty Git repository in C:/path/to/react-gh/.git/
    ```

6. **Add the GitHub repository as a "remote" in your local git repository.** (1 minute)

    ```
    $ git remote add origin https://github.com/gitname/react_startup_deploy_gh.git
    ```
    
    * This will make it so the `gh-pages` package knows where you want it to deploy your app in step 7.
    * It will also make it so git knows where you want it to push your source code (i.e. the commits on your `master` branch) in step 8.

7. **Generate a *production build* of your app, and deploy it to GitHub Pages.** (2 minutes)

    ```
    $ npm run deploy
    ```
    
    * That's it! Your app is now accessible at the URL you specified in step 4.
    * In my case, my app is now accessible at: https://fahadhameed89.github.io/react_startup_deploy_gh/
    * I recommend exploring the GitHub repository at this point. When I explored it, I noticed that, although a `master` or `main` branch did not exist, a `gh-pages` branch did exist. I noticed the latter contained the *built* app code, as opposed to the app's source code.

8. **Optionally, commit your source code to the "master" branch and push your commit to GitHub.** (1 minute)

    ```
    $ git add .
    $ git commit -m "Create a React app using create-react-app and publish it to GitHub Pages"
    $ git push origin main
    ```

    * I recommend exploring the GitHub repository once again at this point. When I did that, I noticed that a `main` branch now existed, and it contained the app's source code.
    * So, the `main` branch held the source code, and the `gh-pages` branch held the *built* app code.
### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. This is our 'Local' Branch

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# References

1. [Facebook's tutorial on deploying a React app to GitHub Pages](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)

2. [rhulse's tutorial on deploying a React app to Github Pages](https://github.com/gitname/react-gh-pages/blob/master/README.md)
