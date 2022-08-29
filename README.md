# Blog d'astronomie avec React JS pour le frontend et Firebase pour le backend

Le but de ce blog est de creer des articles et de les lister,le contenu des articles a pour theme l'astronomie.

1. Forker le depot suivant [https://github.com/formeka/ceppic-react-astronomie](https://github.com/formeka/ceppic-react-astronomie) ensuite travailler en le clonant localement.
2. Vous devez avoir un **header** et un **footer** :
   - le **header** doit compoter un menu avec 3 liens : **Articles**,**Ajouter Article**,**A Propos**
   - nav responsive avec un menu hamburger [https://hamburger-react.netlify.app/](https://hamburger-react.netlify.app/)
   - le footer doit comporter un [Copyleft](https://fr.wikipedia.org/wiki/Copyleft) et l'annee courante
3. L'acceuil de l'application donne sur une page avec un texte libre expliquant le theme et le contenue de ce blog.
4. La page **Articles** doit lister tous les articles du plus recent au plus plus ancien.
5. La page **Ajouter Article** comporte un formulaire avec 2 champs : **titre**, **article** , lors de la validation inserer en base de donnee egalement un champ **created** qui prendra la date courante de l'insertion.
6. S'inspirer de la branche **08-bdd** du depot [ceppic-react: https://github.com/formeka/ceppic-react](https://github.com/formeka/ceppic-react) afin d'integrer **firebase** , les explications se trouve dans le [readme](https://github.com/formeka/ceppic-react/blob/08-bdd/README.md).
7. La page **A Propos** contient du texte libre sur le createur de l'application.
8. Utiliser **git** et **github** (ou autre **gitlab** etc ...) afin de versionner votre code .
9. Travailler sur une branche **developp** ainsi que des branches **feature/xxx** en effectuant des **PR(pull request)**.
10. Faite des **commits atomiques**.
11. Travailler le visuel de votre application (**style csss**)
##

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
