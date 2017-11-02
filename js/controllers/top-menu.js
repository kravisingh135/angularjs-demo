'use strict';

myApp.controller('MenuController', 
	function MenuController($scope){
		// $scope.menuitems={
		// 	menu1 : 'About',
		// 	menu2 : 'Contactus',
		// 	menu3 : 'Help'
		// }
		$scope.newnav = [
			{menu:'About'},
			{menu:'Contactus'},
			{menu:'Help'}
			//{name:'Jessie', age:30, gender:'girl'}
		]
		$scope.leftnav={
			lnmenu1 : 'Web Applications',
			lnmenu2 : 'Big Data & HPC',
			lnmenu3 : 'Line of Business Apps'
		}		
	}
);