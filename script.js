$("document").ready(function(){
  console.log("Ready!");


  /*
  SYNTAX : draggable() method can be used in two forms:

  $(selector, context).draggable (options) Method

  $(selector, context).draggable ("action", [params]) Method
  */

  $(".disc").draggable({
    revert: "invalid",
    //on Snap: add CSS class to center, etc.
    snap: ".discContainer",
    snapMode: "inner",
    stack: ".disc",
    over: function( event, ui ) {
                $(ui.draggable).addClass('.disc');
            },
            out: function (event, ui) {
                $(ui.draggable).removeClass('.disc');
            }
  });

  $(".discContainer").droppable({
    drop: function(event, ui) {
      console.log("Dropped!")

    }

  });

});
