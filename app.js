var name= prompt('Plz, write your name: ');
alert('Welcome '+ name +' to my site');

$(function() {
    
$('#background').on('click',function() {
    var color1 = $('.color1').val();
    $('body').css('background-color',color1);
});

$('.text').on('click',function() {
    var color2 = $('.color2').val();
    $('p').css('color',color2);
});
$('.none').on('click',function() {
    
    $('.do').toggleClass('hidden');
});

$('.divRemove').on('click',function() {
    
    $('.ta-bort-mig').remove();
});


});