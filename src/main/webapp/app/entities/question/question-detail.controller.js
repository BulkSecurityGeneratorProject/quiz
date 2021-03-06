(function() {
    'use strict';

    angular
        .module('quizApp')
        .controller('QuestionDetailController', QuestionDetailController);

    QuestionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Question', 'Topic', 'Proposition', 'Quiz'];

    function QuestionDetailController($scope, $rootScope, $stateParams, entity, Question, Topic, Proposition, Quiz) {
        var vm = this;
        vm.question = entity;
        vm.load = function (id) {
            Question.get({id: id}, function(result) {
                vm.question = result;
            });
        };
        var unsubscribe = $rootScope.$on('quizApp:questionUpdate', function(event, result) {
            vm.question = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
