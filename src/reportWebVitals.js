// Import the 'reportWebVitals' function from the 'web-vitals' package
// import { reportWebVitals } from 'web-vitals';
// eslint-disable-next-line no-unused-vars
import reportWebVitals from './reportWebVitals';


// Define your custom function (logWebVitals)
const logWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the logWebVitals function as default
export default logWebVitals;
