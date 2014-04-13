(function(elem) {
    var START_VALUE = 3 * 60; // seconds

    var timer;
    var count;

    function pad(value) {
        return value < 10 ? "0" + value : value;
    }

    function update(value) {
        var str = pad(Math.floor(count / 60)) + ":" + pad(count % 60);
        elem.innerHTML = str.split("").map(function(c) {
            return "<span>" + c + "</span>";
        }).join("");
    }

    function start(startCount) {
        count = startCount || count;
        timer = setInterval(function() {
            if (!--count) {
                clearInterval(timer);
                timer = null;
            }
            update(count);
        }, 1000);
    }

    function init() {
       count = START_VALUE;
       update(count);
    }

    elem.addEventListener("click", function() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        } else if (count > 0) {
            start(count);
        }
    });

    init();
})(
    document.getElementById("countdown")
);



