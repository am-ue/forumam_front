'use strict';


app.directive('scroll', function ($window,$compile, $rootScope, $templateRequest) {

    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            console.log('here')
            var home_page = angular.element(document.getElementsByClassName("home_page"));
            var info_pratic_page = angular.element(document.getElementsByClassName("info_pratic_page"));
            var biensepreparer_page = angular.element(document.getElementsByClassName("biensepreparer_page"));
            var stickNavLinks = $('.stick_nav li a');
            if (home_page.length) {
                var presentationSection = angular.element(document.querySelector("#presentation_area"));
                var newsSection = angular.element(document.querySelector("#news_area"));
                var spacesSection = angular.element(document.querySelector("#spaces_area"));
                var infoPraticSection = angular.element(document.querySelector("#info_pratic_area"));
                var contactSection = angular.element(document.querySelector("#contact_area"));

                if (this.scrollTop() >= presentationSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + presentationSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= newsSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + newsSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= spacesSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + spacesSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= infoPraticSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + infoPraticSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= contactSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + contactSection.attr('id') + ']').addClass("active");
                }
            }

            if (info_pratic_page.length) {
                var forumPlanSection = angular.element(document.querySelector("#forum_plan_area"));
                var infoPraticSectionBiensepreparer = angular.element(document.querySelector("#biensepreparer_area"));
                if (this.scrollTop() >= forumPlanSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + forumPlanSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= infoPraticSectionBiensepreparer.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + infoPraticSectionBiensepreparer.attr('id') + ']').addClass("active");
                }
            }

            if (biensepreparer_page.length) {
                var biensepreparerSection = angular.element(document.querySelector("#biensepreparer_area"));
                var carreSection = angular.element(document.querySelector("#carre_area"));
                var programmeSection = angular.element(document.querySelector("#programme_area"));
                if (this.scrollTop() >= biensepreparerSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + biensepreparerSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= carreSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + carreSection.attr('id') + ']').addClass("active");
                }
                if (this.scrollTop() >= programmeSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    //$('.stick_nav li a[href=#' + programmeSection.attr('id') + ']').addClass("active");
                }
            }
            scope.$apply();
        });
    };
});
