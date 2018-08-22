$(document).ready(function() {
    $('.slides a').each(function () {
      var slideImg = $(this).find('img');
      var slideHeight = slideImg.height();
      var slideImgSrc = $(this).find('img').attr('src');
      $(this).css({
       'background-image' : 'url(' + slideImgSrc + ')',
      });
      $(this).find('img').remove(); // we can toss these now that we have them set as bg-images
    });	
});