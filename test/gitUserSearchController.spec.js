describe('GitUserSearchController', function(){
  beforeEach(module('GithubUserSearch'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('GitUserSearchController', {
      $scope: scope
		});
  }));

  it('should initialise with an empty search result and term', function(){
    expect(scope.searchResult).toBeUndefined();
    expect(scope.searchTerm).toBeUndefined();
  })

  describe('When searching for a user', function(){

    var httpBackend;
    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend
      httpBackend
      .when('GET', 'https://api.github.com/search/users?q=hello')
      .respond({
        items: items
      });
    }));

    var items = [{
      'login': 'elenagarrone',
      'avatar_url': 'https://avatars0.githubusercontent.com/u/8397116?v=3',
      'html_url': 'https://github.com/elenagarrone'
    }];

    it('should display search results', function(){
      scope.searchTerm = 'hello';
      scope.doSearch();
      scope.$apply();
      httpBackend.flush();
      expect(scope.searchResult.items).toEqual(items);
    })
  })
})
