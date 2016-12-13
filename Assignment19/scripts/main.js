$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';

    $.get(appendUrl, function (result) {
        var appendElm = $('#append');
        for (var i = 0; i < result.length; i++) {
            appendElm.append('<li>Index:' + i + ' Title: ' + result[i].title + '</li>');

        }
    });

    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';

    $.get(prependUrl, function (result) {
        var prependElm = $('#prepend');
        for (var i = 0; i < result.length; i++) {
            prependElm.prepend('<li>Index:' + i + ' Title: ' + result[i].title + '</li>');

        }
    });

});