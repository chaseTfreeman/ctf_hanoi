$("document").ready(function(){
  console.log("Ready!");


//***********Begin Drag & Drop Code:******************
  $(".disc").draggable({
    revert: "invalid",
    snap: ".discContainer",
    snapMode: "inner",
    stack: ".disc",

  });

  $(".discContainer").droppable({
    drop: function(event, ui) {
      console.log("Dropped!")
    }


  });
//***********End Drag & Drop Code**************

//************Handle the addClass when moving between Divs**********
  // function init() {
  //   $('.disc').draggable();
  //   $('.discContainer').droppable( {
  //     drop: handleDropEvent
  //   } );
  // }
  // function handleDropEvent( event, ui ) {
  //   $("#disc").removeClass(".disc").addClass(".dropped");
  //   console.log("Class Change")
  // }
  //**********End addClass code*********************
});
