// Filter: range 
angular.module('ng').filter('range', function() {
    return function(input, start, total) {
        start = parseInt(start);
        total = parseInt(total);
        for (var i = start; i < total; i++)
            input.push(i);
        return input;
    };
});
