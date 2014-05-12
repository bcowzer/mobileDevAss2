	function ToDoController($scope) {

		$scope.toDoList=[
            {task:'some task', detail:'some details of task'}, 
            {task:'some other task', detail:'some other details'}
		];


		$scope.addNewTask = function () {
			$scope.toDoList.push(

				{
					task: $scope.newTask.task,
					detail: $scope.newTask.detail
				}
			);
            $scope.newTask.task= '';
            $scope.newTask.detail='';
		}


$scope.delete = function ( index ) {

    $scope.toDoList.splice(index, 1);

};

	}

	console.log('got it...........');