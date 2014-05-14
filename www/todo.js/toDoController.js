
    var toDoApp = angular.module('toDoApp', []); // defines angular module

 toDoApp.controller('ToDoController',function($scope) {

		$scope.toDoList=[
            {task:'some task', detail:'some details of task'}, 
            {task:'some other task', detail:'some other details'}
		];


		$scope.addNewTask = function () {   //adds items to toDoList
			$scope.toDoList.push(

				{
					task: $scope.newTask.task,
					detail: $scope.newTask.detail
				}
			);
            $scope.newTask.task= '';
            $scope.newTask.detail='';
		}


        $scope.delete = function ( index ) {  //deletes items from list

            $scope.toDoList.splice(index, 1);

        };

	});

