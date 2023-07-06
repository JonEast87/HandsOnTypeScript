var lets;
(function (lets) {
    var val1 = 1;
    val1 = 2;
    if (true) {
        var val2 = 3;
        val2 = 3;
    }
    console.log(val1);
    console.log(val2);
})(lets || (lets = {}));
