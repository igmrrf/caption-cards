# Welcome to CaptionCards!

This is a simple Front-End project built with React.js while using Redux as the state manager. The API was pre-built and Documentation on the API can be seen in the link below.
<i class="icon-cog" id="api-documentation></i><a href="https://documenter.getpostman.com/view/7988284/SzKTvysQ?version=latest"> **API Documentation**</a>

---

## Documentation

CaptionCards holds in captions in cards for all categories of captions which are categorized by <i class="icon-refresh"></i> **Tags**

> **Note:**

> - Caption Cards is accessible **offline** and can be saved on mobile devices like a **native app**, although it's a web app.
> - Your local contents are not shared between different browsers or computers.
> - Clearing your browser's data and cache may **delete all your locally saved contents!**

#### <i class="icon-file"></i> Create a Caption

The Caption panel is accessible using the <i class="icon-folder-open"></i> contribute Nav link in the navigation bar. You can create a new Caption Card by clicking <i class="icon-file"></i> **Add Caption** in the dropdown panel.

#### <i class="icon-file" ></i> Add a Tag(s)

To add a tag is familliar like creating a caption, and is accessed using the <i class="icon-folder-open"></i> contribute Nav link in the navigation bar and by clicking <i class="icon-file"></i> **Add Tag(s)** in the dropdown panel.

#### <i class="icon-file"></i> Create a Caption with Tag(s)

The Create Caption option just lies in the dropdown explained above
And is accessible using the <i class="icon-folder-open"></i> contribute Nav link in the navigation bar. You can create a new Caption Card by clicking <i class="icon-file"></i> **Add Caption with Tag(s)** in the dropdown panel.

#### <i class="icon-refresh"></i> Get All Captions

Click on Browse on the Navigation and select **Captions** then in the <i class="icon-cog"></i>Filter Section, mark **All**. You'll be shown 10 captions, and by clicking the next page button you get another 10 till you get all captions in the database.

#### <i class="icon-refresh"></i> Get All Tags

Click on Browse on the Navigation and select **Tags** then in the <i class="icon-cog"></i>Filter Section, mark **All**. You'll be shown 20 tags, button you get another 20 till you get all tags in the database.

#### <i class="icon-trash"></i> Delete a Caption

You can not delete captions, the API provided doesn't support such endpoints.

#### <i class="icon-trash"></i> Delete a Tag

You can not delete Tags, the API provided doesn't support such endpoints any delete endpoints.

#### <i class="icon-pencil"></i> Edit a Caption

You cannot edit a caption.

> **Tip:** Check out the [<i class="icon-upload"></i> API Documentation](#api-documentation) section for a description of the different possible actions.

### <i class="icon-share"></i> Share Caption

You can copy captions by clicking the clipboard icon on the top right of each card to copy the contents of the caption card to your clipboard.
Your can paste this anywhere by pressing<kbd>Ctrl+v</kbd> or long pressing on a text field on your mobile device.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
