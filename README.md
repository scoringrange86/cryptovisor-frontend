# Cryptovisor (Frontend)

This is the frontend version of the Cryptovisor webapp, built with ReactJs.

## Components/ Features

### Navigation

Each page within the webapp has a navigation bar, called the Navbar component. The Navbar utilizes link from the react-router-dom library. The rest of the app uses the BrowserRouter (and company) to navigate throughout.

### CryptoPanel 

The CryptoPanel makes an API call to CoinMarketCap and displays the results. Since this is front end only, the crypto data is statically loaded.

### Custom Articles

Outside of the components present in all pages, the Homepage includes a RightPanel component that displays articles. Articles are currently being statically loaded. 

### Mobile Friendly

This app adjusts to different browser sizes using css styling. 

## Still in progress

### Backdrop 

The backdrop is functional, but it doesn't completely black out the screen in the background. 

### Load More Articles 

A mechanism to load more (static) articles needs to be developed. Currently, the load more button doesn't point to any action.

### Courses 

The UI for course content still needs to be developed. Error handling also needs to be added to safely guide user back to working components. 

Once you click into a course, you will run into a blank page. To get back to a working portion, backspace and then refresh the browser.

### Theme toggle

This will be a toggle to switch the webapp from a dark mode to a light mode. Currently exploring MaterialUI library and the useContext() for implementation. 




