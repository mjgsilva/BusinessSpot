angular.module('collapse', [])
.directive('collapse', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    template: '<div class="angular-collapse-wrapper"><div ng-transclude></div></div>',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.collapse, function(isExpanded) {
        $timeout(function() {
          element.css('height', isExpanded ? element.children()[0].offsetHeight + 'px' : '0');
        }, 10);
      });
    }
  };
}]);