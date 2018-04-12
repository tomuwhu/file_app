mj = false
angular
  .module( 'a', [] )
  .controller( 'c', ($scope,$interval) => {
      $interval( () => $scope.img = mj, 100)
      $scope.s  = "Eztmentsdel"
      $scope.save = () => {
          Blob = new Blob([$scope.s], {type:"text/plain"})
          a = document.createElement("a")
          a.download      = "filename.txt"
          a.href          = window.URL.createObjectURL(Blob)
          a.style.display = "none"
          document.body.appendChild(a)
          a.click()
      }
  } )
  .directive( "fr", () => {
    return {
      scope: { fr: "=" },
      link: (sc, e) => e.bind( "change", chev => {
            var reader = new FileReader()
            //console.log(chev.target.files)
            reader.readAsDataURL(chev.target.files[0])
            reader.onload = lev => sc.$apply( () => {
                    res = lev.target.result
                    rest = res.split(',')
                    if ( rest[0].split('/')[0] == "data:text" ) {
                        sc.fr = window.atob(rest[1])
                        mj=false
                    }
                    else if ( rest[0].split('/')[0] == "data:image" ) {
                        mj=true
                        sc.fr = res
                    }
                    else {
                        sc.fr = "Nem támogatott formátum"
                        mj=false
                    }
            } )
      } )
    }
  } )
