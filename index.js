angular
  .module('a', [])
  .controller('c', ($scope,$window) => {
        lnko = (a,b) => {
            if (a == b) return a
            if (a > b) return lnko(a-b,b)
            else return lnko(a,b-a)
        }
        $scope.f = () => {
          $scope.er=lnko(parseInt($scope.x), parseInt($scope.y))
          $window.document.getElementById('i').focus()
        }
        $window.document.getElementById('i').focus()
  } )
