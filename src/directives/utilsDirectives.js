'use strict';


app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        console.log('myEnter');
        element.bind("keydown keypress", function (event) {
            if(event.which === 27) { // 27 = esc key
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });
                event.preventDefault();
            }
        });
    };
});
