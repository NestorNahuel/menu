# Restaurant Menu App

## Documentation

- `Please use Eslint + Prettier`

- https://react-query-firebase.invertase.dev/firestore/querying-collections

- https://www.npmjs.com/package/react-gsap

- https://react-bootstrap.github.io/

- https://github.com/i18next/react-i18next

## Configuration

Create a .env file with your firestore data

```
  REACT_APP_MENU_FIREBASE_API_KEY = "AIzaSyA94cc4idXTwLMM48LUiX3rohkhijBTGY0"
  REACT_APP_MENU_FIREBASE_AUTH_DOMAIN = "ram-firebase-test.firebaseapp.com"
  REACT_APP_MENU_FIREBASE_PROJECT_ID = "ram-firebase-test"
  REACT_APP_MENU_FIREBASE_STORAGE_BUCKET = "ram-firebase-test.appspot.com"
  REACT_APP_MENU_FIREBASE_MESSAGING_SENDER_ID = "1097411446808"
  REACT_APP_MENU_FIREBASE_APP_ID = "1:1097411446808:web:662390f23c1662146b1b6d"
```

## Data structure

- `Languages`

  Languages data structure:

  ```
  {
      en: {
        common: {
          languageName: 'English',
          hi: 'Hello'
        }
      },
      es: {
        common: {
          languageName: 'Spanish',
          hi: 'Hola'
        }
      }
  }
  ```

  Should have at least one language.

  If there is only one language, the language selection list will not appear

- `Products`

  Array of objects with this structure

  ```
  {
    "image": "https://www.image.com/1.jpg",
    "allergens": ["GaHK2ETnkW4pu7tFmc2K"],
    "categories": ["4K4T3ugnZkZWrheX6G3r"],
    "subcategory": "4K4T3ugnZkZWrheX6G3r",
    "name": "Product 1",
    "description": "Product description",
    "price": "100",
    "_id": "YHXcfzMZomzJwwA5ThFg"
  }
  ```

- `Categories`

  Array of objects with this structure

  ```
  {
    "name": "Catname 1",
    "image": "https://www.image.com/10.jpg",
    "price": 50,
    "description": "Category Description",
    "_id": "4K4T3ugnZkZWrheX6G3r"
  }
  ```

- `Allergens`

  Array of objects with this structure

  ```
  {
    "name": "Allergen 1",
    "image": "https://www.image.com/100.jpg",
    "_id": "GaHK2ETnkW4pu7tFmc2K"
  }
  ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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
