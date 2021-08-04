var app = angular.module("myApp", []);
app.controller("myCtrl", ($scope) =>{
    $scope.isDownload = false;
    console.log("$scope.posts--", $scope.posts)


    if(localStorage.getItem("posts")){
        $scope.post = localStorage.getItem("posts");
        console.log("$scope.posts--", $scope.posts)
        $scope.user = localStorage.getItem("users");
        $scope.engage =  localStorage.getItem("engagement");
        $scope.newReach = localStorage.getItem("reach");
        $scope.impression =  localStorage.getItem("impressions");
    }else{
        $scope.post = ""
        $scope.user = ""
        $scope.engage = ""
        $scope.newReach = ""
        $scope.impression = ""
    }

    $scope.submit = function(){
        if($scope.posts){
            $scope.post = $scope.posts
        }
        if($scope.users){
            $scope.user = $scope.users
        }
        if($scope.engagement){
            $scope.engage = $scope.engagement
        }
        if($scope.reach){
            $scope.newReach = $scope.reach
        }
        if($scope.impressions){
            $scope.impression = $scope.impressions
        }
    
        localStorage.setItem("posts", $scope.post);
        localStorage.setItem("users", $scope.user);
        localStorage.setItem("engagement", $scope.engage);
        localStorage.setItem("reach", $scope.newReach);
        localStorage.setItem("impressions", $scope.impression);
        $scope.isDownload = true;
    }

    $scope.reset = function(){
        localStorage.removeItem("posts")
        localStorage.removeItem("users")
        localStorage.removeItem("engagement")
        localStorage.removeItem("reach")
        localStorage.removeItem("impressions")
        $scope.isDownload = false;


        $scope.posts = 0;
        $scope.users = 0;
        $scope.engagement = 0;
        $scope.reach = 0;
        $scope.impressions = 0;
    }

    $scope.download = function(){
        html2canvas(document.getElementById('exportthis'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("dashboard.pdf");
            }
        });
    }
})