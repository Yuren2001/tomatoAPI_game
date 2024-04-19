const reportWebVitals = (onPerfEntry) => {
  // Check if the provided callback function is valid and a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Asynchronously import the 'web-vitals' module
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Once the module is imported, call each of its functions with the provided callback

      getCLS(onPerfEntry); // Cumulative Layout Shift (CLS) metric
      getFID(onPerfEntry); // First Input Delay (FID) metric
      getFCP(onPerfEntry); // First Contentful Paint (FCP) metric
      getLCP(onPerfEntry); // Largest Contentful Paint (LCP) metric
      getTTFB(onPerfEntry); // Time to First Byte (TTFB) metric
    });
  }
};

export default reportWebVitals;
