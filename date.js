//jshint esversion:6

exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
};

exports.getDay = function() {
    const today = new Date();

    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
};

    // var currentDay = today.getDay();
    // var day = "";
    // var date = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // day = date[currentDay];