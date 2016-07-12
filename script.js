$("document").ready(function(){
  console.log("Ready!");
  //***********Begin Drag & Drop Code:******************
  $(".disc").draggable({
    revert: "invalid",
    snap: ".discContainer",
    snapMode: "inner",
    stack: ".disc",
    helper: 'clone',
    opacity: 0.35,
  });
  $(".discContainer").droppable({
    drop: function(event, ui) {
      ($(this)).prepend($(ui.draggable)),
      console.log($(this))
    }
  });
  //***********End Drag & Drop Code**************
  //*********** Start Dynamic Disk Creation************
  $("#target").submit(function( event ) {
    var numDiscs = $(".discChoice").val()
    event.preventDefault();
     for (i = 0; i < numDiscs; i++) {
       console.log(numDiscs);
       }
     });
  //************END Dynamic Disk Creation******************
  //                      *********Rules*************
  //If discContainer's first child element has LOWER 'rank' than 'ui.draggable'
  // then revert/cancel the drag/drop.

  //**********End addClass code*********************
});
