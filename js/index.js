
$(document).ready(function () {
    

    $('body').flowtype({
   minimum   : 360,
   maximum   : 1440,
   minFont   : 14,
   maxFont   : 20,
   fontRatio : 35
});  
      
  $('.lazy').lazy({
        effect: "fadeIn",
        effectTime: 600,
        threshold: 0,
        customLoaderName: function(element) {
                element.load();
            },
    
});
   $('.lazyvid').lazy({
        threshold: 0,
        afterLoad: function(e) {
            e.css("opacity", 1);
        }
    });
    
  });


// GET THE SPACING VALUES OF THE ELEMENTS BASED ON WINDOW SIZE

        
$(window).on('load resize', function () {     

var myVar = Math.round($( '.first' ).height());
var myVar2 = Math.round($( '.end' ).height());
var myVar3 = Math.round($( window ).height());
var total = myVar3 - myVar - myVar2 - myVar2;
var total2 = total / 4;
var total4 = total2 / 2;    
var total3 = total2 + total4;
    
$(".profile").css({
    'padding-top':total2
});    
    
if(window.innerHeight > window.innerWidth){

$(".setup, .links").css({
    'padding-top':total2, 'padding-bottom':total2
});
} else {
    $(".links").css({
    'padding-top':total2, 'padding-bottom':total2
});
$(".setup").css({
    'padding-top':total3, 'padding-bottom':total3
});
}  

    
    
  $('div.hidden').fadeIn(600).removeClass('hidden');
    

});


// ADJUST THE SPACING BASED ON VERTICLE/HORIZONTAL ORIENTATION

/*
$(window).on("orientationchange",function(){
  if(window.orientation == 0) // Portrait
  {
   alert("Orientation is: Portrait");
  }
  else // Landscape
  {
      alert("Orientation is: Landscape");
  }
});*/


var $project = $('.project');
var count = 0;
var count2 = 1;
var onoff = 0;
var a = [];
txtArray = ["Next (2/8)", "Next (3/8)", "Next (4/8)", "Next (5/8)", "Next (6/8)", "Next (7/8)", "Next (8/8)",]


$(".aboutme").click(function(){
      $(".overlay").fadeToggle(350);
    });
$('.overlay').on('click', function(){
  if ( $(event.target).closest(".noclickout").get(0) == null ) {         
    $(".overlay").fadeToggle(350);          
    } else{
    
    }  

});


$("#load-more").click(function(e) {
            
  var x = screen.height / 2;
  e.preventDefault();
  document.getElementById("project").innerHTML = txtArray[count];
  count++;
  count2++;
  a.push(count);

  if ($(this).hasClass('disable')) return false;
  

  var $hidden = $project.filter(':hidden:first').addClass('active');
  

  $("html, body").animate({
    scrollTop: $('#project' + count).offset().top - 0
  }, 300);


  
    $(".f" + count).fadeIn(800);
  
    if (count==8) {
    $('.end').remove();
  }
  
  if (!$hidden.next('.project').length) {
    $(this).addClass('disable');
  }
 /* Change out background on button
 $("div.box").css('background-image', baseUrl);*/
});

$('#go-to-top').each(function(){
    $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 500);
        return false; 
    });
});

/*
$(document).click(function(event) {
    if ( $(event.target).closest(".columns2").get(0) == null ) {         
    alert('clicked outside');           
    } else{
    alert('clicked inside');
    }
});*/