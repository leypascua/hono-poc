(function(w) {
    console.log("logging from a browser-loaded Javascript file");
    w.sayFoo = () => alert('say foo!');
})(window);