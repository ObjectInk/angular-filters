// Filter: paginationRange 
angular.module('ng').filter('paginationRange', function() {
    return function (input, current, total, length) {
        var start;
        var end;

        current = parseInt(current);
        total = parseInt(total);
        length = parseInt(length);

        if (total >= length && current > (length / 2)) {
            if (current + (length / 2) < total) {
                start = current - ((length / 2) - 1);
                end = current + (length / 2);
            } else {
                start = total - (length - 1);
                end = total;
            }
        } else {
            if (total >= length) {
                start = 1;
                end = length;
            } else {
                start = 1;
                end = total;
            }
        }

        for (var i = start; i <= end; i++)
            input.push(i);
        return input;
    };
});
