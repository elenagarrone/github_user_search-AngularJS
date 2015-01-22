githubUserSearch.controller('GitUserSearchController', function($scope){
  $scope.doSearch = function(){
    $scope.searchResult = {
      "items": [{
        'login': 'elenagarrone',
        'avatar_url': 'https://avatars0.githubusercontent.com/u/8397116?v=3',
        'html_url': 'https://github.com/elenagarrone'
      }]
    }  
  }
})