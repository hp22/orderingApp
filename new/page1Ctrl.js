angular.module("mainApp")
.controller("page1Ctrl", function($scope){
  
  var para = document.createElement("p");
  var node = document.createTextNode("this is new node");
  para.appendChild(para);
  
  var element = document.getElementById("div1");
  element.appendChild(para);
  
  
});