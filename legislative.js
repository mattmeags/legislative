$(function (){
    $.ajax({
        type: 'GET', //default don't have to set
        url: "https://congress.api.sunlightfoundation.com/legislators?state=IN",
        success: function(data) {
            var source = $("#entry-template").html(),
                template = Handlebars.compile(source),
                html = template(data);
                alert('success');
               //$('body').html(JSON.stringify(data));
               $('#content').html(html);
        },
        error: function(){
            alert('fail');
        }
    });
});
