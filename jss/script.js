$(document).ready(function(){
// dragg
$( "#draggable" ).draggable();

// accordion
$( "#accordion" ).accordion({
    collapsible: true
  });

//   sortable
$( "#sortable1, #sortable2" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();

// autocomplet

  var data=[
    
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "html",
    "Scheme"
  ]
  $( "#course" ).autocomplete({
    source: data
  });

//   datepicker
$( "#datepicker" ).datepicker();


// tabs
$( "#tabs" ).tabs();

// tooltips
// $( document ).tooltip();


// add class

$( "#buttoncall" ).on( "click", function() {
    $( "#effectcall" ).addClass( "newClasscall", 1000, callback );
  });

  function callback() {
    setTimeout(function() {
      $( "#effectcall" ).removeClass( "newClasscall" );
    }, 1500 );
  }
// coloranimation
var state = true;
$( "#buttonall" ).on( "click", function() {
  if ( state ) {
    $( "#effectall" ).animate({
      backgroundColor: "#aa0000",
      color: "#fff",
      width: 500
    }, 1000 );
  } else {
    $( "#effectall" ).animate({
      backgroundColor: "#fff",
      color: "#000",
      width: 240
    }, 1000 );
  }
  state = !state;
});

// remove class
$( "#buttonfall" ).on( "click", function() {
    $( "#effectfall" ).removeClass( "newClassfall", 1000, callback );
  });

  function callback() {
    setTimeout(function() {
      $( "#effectfall" ).addClass( "newClassfall" );
    }, 1500 );
  }

// switch 
$( "#buttonwall" ).on( "click", function() {
    $( ".newClasswall" ).switchClass( "newClasswall", "anotherNewClasswall", 1000 );
    $( ".anotherNewClasswall" ).switchClass( "anotherNewClasswall", "newClasswall", 1000 );
  });

// menu-item
$( "#menu" ).menu({
    items: "> :not(.ui-widget-header)"
  });

});




