// Filter: twitdate 
angular.module('ng').filter('twitdate', function ($filter) {
        var angularDateFilter = $filter('date');
        return function (input, format) {
            var date = new Date(Date.parse(input.replace(/( \+)/, ' UTC$1')));
            return angularDateFilter(date, 'MMMM d');
        };
    });
