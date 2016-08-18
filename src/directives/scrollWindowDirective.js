'use strict';


app.directive('scroll', function ($window,$compile, $rootScope, $templateRequest) {

    return function(scope, element, attrs) {
        // To Make specific fixed menu items active according to the main section shoed in the screen
        angular.element($window).bind("scroll", function() {
            var home_page = angular.element(document.getElementsByClassName("home_page"));
            var info_pratic_page = angular.element(document.getElementsByClassName("info_pratic_page"));
            var biensepreparer_page = angular.element(document.getElementsByClassName("biensepreparer_page"));
            var page_cover = angular.element(document.getElementsByClassName("page_cover"));
            var stickNavLinks = $('.stick_nav li a');
            var windowElement = angular.element($window);

            if (windowElement.scrollTop() >= 50) {
                page_cover.addClass('scrolled');
            }else{
                page_cover.removeClass('scrolled');
            }

            if (home_page.length) {
                var presentationSection = angular.element(document.querySelector("#presentation_area"));
                var newsSection = angular.element(document.querySelector("#news_area"));
                var spacesSection = angular.element(document.querySelector("#spaces_area"));
                var infoPraticSection = angular.element(document.querySelector("#info_pratic_area"));
                var contactSection = angular.element(document.querySelector("#contact_area"));

                if (windowElement.scrollTop() >= presentationSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_presentation_area = angular.element(document.querySelector("#target_presentation_area"));
                    target_presentation_area.addClass("active");
                }
                if (windowElement.scrollTop() >= newsSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_news_area = angular.element(document.querySelector("#target_news_area"));
                    target_news_area.addClass("active");
                }
                if (windowElement.scrollTop() >= spacesSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_spaces_area = angular.element(document.querySelector("#target_spaces_area"));
                    target_spaces_area.addClass("active");
                }
                if (windowElement.scrollTop() >= infoPraticSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_info_pratic_area = angular.element(document.querySelector("#target_info_pratic_area"));
                    target_info_pratic_area.addClass("active");
                }
                if (windowElement.scrollTop() >= contactSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_contact_area = angular.element(document.querySelector("#target_contact_area"));
                    target_contact_area.addClass("active");
                }
            }
            if (info_pratic_page.length) {
                var forumPlanSection = angular.element(document.querySelector("#forum_plan_area"));
                var infoPraticSectionBiensepreparer = angular.element(document.querySelector("#info_pratic_area"));
                if (windowElement.scrollTop() >= forumPlanSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_forum_plan_area = angular.element(document.querySelector("#target_forum_plan_area"));
                    target_forum_plan_area.addClass("active");
                }
                if (windowElement.scrollTop() >= infoPraticSectionBiensepreparer.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_info_pratic_area_Biensepreparer = angular.element(document.querySelector("#target_info_pratic_area"));
                    target_info_pratic_area_Biensepreparer.addClass("active");
                }
            }

            if (biensepreparer_page.length) {
                var biensepreparerSection = angular.element(document.querySelector("#biensepreparer_area"));
                var carreSection = angular.element(document.querySelector("#carre_area"));
                var programmeSection = angular.element(document.querySelector("#programme_area"));
                if (windowElement.scrollTop() >= biensepreparerSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_biensepreparer_area = angular.element(document.querySelector("#target_biensepreparer_area"));
                    target_biensepreparer_area.addClass("active");
                }
                if (windowElement.scrollTop() >= carreSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_carre_area = angular.element(document.querySelector("#target_carre_area"));
                    target_carre_area.addClass("active");
                }
                if (windowElement.scrollTop() >= programmeSection.offset().top - 300) {
                    stickNavLinks.removeClass("active");
                    var target_biensepreparer_presentation_area = angular.element(document.querySelector("#target_programme_area"));
                    target_biensepreparer_presentation_area.addClass("active");
                }
            }
            scope.$apply();
        });
    };
});
