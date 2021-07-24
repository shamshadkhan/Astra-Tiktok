<p align="center"><img src="https://www.import.io/wp-content/uploads/2017/10/React-logo.png" width=100 height=50>
  <img src="https://user-images.githubusercontent.com/12265243/125605180-7260a070-ff8e-4c3c-9859-5c821524edc5.png" width=100 height=50></p>
  
<p align="center">
<a href="https://github.com/facebook/react/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/react"><img src="https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token" alt="Total Downloads"></a>
<a href="https://circleci.com/gh/facebook/react"><img src="https://img.shields.io/npm/v/react.svg" alt="Latest Stable Version"></a>
<a href="https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="License"></a>
</p>

# TikTok + Astra + Cassandra 📒

This is an example React TikTok application from scratch using a [DataStax Astra](https://dtsx.io/appdev-7-7) free tier database.

Demo: https://astra-tiktok.netlify.app

## Home
![image](https://user-images.githubusercontent.com/12265243/126870636-7d8dc140-4326-4538-b59b-b65a468f5a5e.png)

## Login
![image](https://user-images.githubusercontent.com/12265243/126871349-85d9a453-25b6-4115-8e5b-8c40845b9faa.png)

## Profile
![image](https://user-images.githubusercontent.com/12265243/126870666-a9600e7c-6810-4096-b40f-43e051406694.png)

## Objectives
* Deploy a TikTok clone "locally" and to production
* Learn how to use the @astrajs document API to quickly and easily interact with JSON documents
* Leverage Netlify and DataStax AstraDB

### 1. Login or Register to AstraDB and create database
**Use the following values when creating the database**
|Field| Value|
|---|---|
|**database name**| `tiktok_workshop_db` |
|**keypace**| `tiktok_keyspace` |
|**Cloud Provider**| *Use the one you like, click a cloud provider logo,  pick an Area in the list and finally pick a region.* |

![1](https://user-images.githubusercontent.com/12265243/125809299-5e151996-4bbc-4b92-90d5-27d937eb76a3.PNG)
### 2. Deploy to Netlify
  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](app.netlify.com/start/deploy?repository=your_new_git_repo_url)
  
This will take a few minutes.

  * Click on `Site deploy in progress` within the Netlify UI, 
  * Click the top deploy link to see the build process.
  * Wait until the build complete `Netlify Build Complete`,  **When you see Pushing to repository** you're ready to move on.
  * Scroll up to the top and click on the site name (it'll be after {yourlogin}'s Team next to the Netlify button).
### 3. Access YOUR GitHub repository
 * Click on the `GitHub` in `Deploys from GitHub` to get back to your new repository.
### 4. Launch GitPod IDE
 [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#/your_new_git_repo_url/)
* From your GitPod terminal execute the following command
```
git remote -v
```
#### WAIT! Before moving on ensure you are working out of YOUR new created repository.
### 5. Install the Netlify CLI (Command Line Interface)
 * In the directory run the following command to install the netlify-cli
 ```
 npm install -g netlify-cli
```
### 6. Configure and connect database
 * In the repository directory run the following command to set up your Astra DB environment. This will verify the database you created earlier or create a new one for you if it can't find your database.
 ```
npm exec astra-setup tiktok_workshop_db tiktok_keyspace
```
### 7. Launch your app
  * Run the application 
  ```
  netlify dev
  ```
  * The application should automatically launch in the GitPod preview pane
### 8. Connect Netlify to your site
Execute each of the commands below to link your code to your Netlify deployment.
  * First thing, we'll need to **STOP** the `netlify dev` command we issued a moment ago. In the terminal where you executed the netlify command issue a `CTRL-C` (control key + the C key) in order to stop the process.
  * Then continue with the following commands
  * This will pop up a browser to authenticate with netlify
  ```
  netlify login
  ```
  _Note, when using GitPod the preview pane will not display this properly. You must click the "open in a new window" button in the very top right of the preview pane._

  * This will link your workspace to the associated site
  ```
  netlify link
  ```

  * This will take the .env file created by astra-setup and upload it to netlify
  ```
  netlify env:import .env
  ```
### 9. Deploy to production
Now that you've hooked everything up, time to deplpoy to production.

  * Run
  ```
  netlify build
  ```

  * Then run
  ```
  netlify deploy --prod
  ```

  * Then finally run
  ```
  netlify open:site
  ```
  
  You've deployed your app to Netlify!
  
### Running on your local machine
1. Create a `.env` file and fill it with values from the `.env.sample` file.
Use the token you previously generated.
2. Make sure the package dependencies are installed
```sh
npm install
```

3. Then, start the app in dev mode. Changes in the `src` or `functions` directories will trigger reloads.
```sh
npm run dev
```
