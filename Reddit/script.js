//$(document).ready(function () {

    var ajaxhttp = new XMLHttpRequest();
    var url = "json.json";
    ajaxhttp.open("GET", url, true);
    ajaxhttp.setRequestHeader("content-type", "application/json");
    ajaxhttp.onreadystatechange = function () {
        if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
            var jcontent = ajaxhttp;
            console.log(jcontent);
            console.log(ajaxhttp);
        };
    };
    
ajaxhttp.send();
    //    $('.add-img').click(function () {
    //        // add loading image to div
    //        $('.loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> loading...');
    //    });
    //    // run ajax request
    //    $.ajax({
    //        crossDomain: true,
    //        async: true,
    //        type: 'GET',
    //        dataType: 'json',
    //        url: 'https://api.github.com/users/tarjalorem',
    //        success: function (data) {
    //            // replace div's content with returned data
    //            setTimeout(function () {
    //                $('.loading').html('<img src="' + data + '">');
    //            }, 2000);
    //        },
    //        error: function() {
    //            console.log('Error');
    //        }
    //    });
    //    
    //    

//});
