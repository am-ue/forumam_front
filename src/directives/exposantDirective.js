'use strict';


app.directive('exposant', function ($compile, $rootScope, $templateRequest) {
    return {
        restrict: "EA",
        templateUrl: 'src/directives/views/detailsExposant.html',
        scope: {
            exposant: '=exposantData'
        },
        link: function (scope, element, attrs) {
        },
        controller: function ($rootScope, $scope, $element) {

            $scope.hideExposant = function () {
                var _body = $('body');
                var BodyScrollTop = _body.scrollTop();
                var exposantsItems = $('.exposants_liste li a');
                if (exposantsItems.length) {
                    _body.removeClass('exposant_opened');
                    $('html,body').stop().animate({ scrollTop: BodyScrollTop },300);
                }
            };

        }
    }
});
