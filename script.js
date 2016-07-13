$("document").ready(function(){
  console.log("Ready!");
  //*********** Start Dynamic Disk Creation************
  var numDiscs
  function getDiscNum() {
    numDiscs = $(".discChoice").val()
    return numDiscs
  }
  $("#target").submit(function(event){
    event.preventDefault();
    getDiscNum()
    createDisc(getDiscNum())
  });

  function createDisc(num) {
    num = parseInt(num);
    for(i = 1; i != num+1; i++){
      $("#discContainerA").prepend("<div class='disc' draggable='true'" +" " + "id=" + i + ">").css('height', "30")
      $('.disc').css('width', function(i) {
        return 100 + (i * 20) ;
      });
    }
    //***********Begin Drag & Drop Code:******************
    $(".disc").draggable({
      snap: ".discContainer",
      snapMode: "inner",
      stack: ".disc",
      helper: 'clone',
      opacity: 0.35,
      revert: "invalid",

       start: function( event, ui ) {
         var parentsFirstChild = $(this).parent().find(">:first-child").attr('id');
         var discId = $(this).attr('id');
         console.log(parentsFirstChild)
         if (discId === parentsFirstChild ) {
           console.log("you're a genius")
         }



        //  if (discId != $(this).parent().find(">:first-child").attr('id')) {
        //    // Setter
        //    $(".disc").draggable( "option", "disable", true );
        //  }
        //  else {
        //    $( ".disc" ).draggable( "option", "disable", false )
        //  }
       },

    });
  }
});


//CONTAINER A
$("#discContainerA").droppable({
  drop: function(event, ui) {
    ($(this)).prepend($(ui.draggable)),
    $(".disc").css("height", "10")
  },

  // over: function(discId) {
  //   var firstChildId = $(this).children('div').attr("id")
  //   //this is the rule! need to disable drop on invalid moves
  //   if (firstChildId < discId){
  //     console.log("invalid move")
  //     var disabled = $( "#discContainerA" ).droppable( "option", "disabled", true );
  //   }
  //   else {
  //     console.log("valid move");
  //     var disabled = $( "#discContainerA" ).droppable( "option", "enabled", true );
  //   }
  // },

});
//CONTAINER B
$("#discContainerB").droppable({
  drop: function(event, ui) {
    ($(this)).prepend($(ui.draggable)),
    $(".disc").css("height", "10"),
    $(this).droppable( "option", "enabled", true );

  },


  // over: function(discId) {
  //   var firstChildId = $(this).children('div').attr("id")
  //   //this is the rule! need to disable drop on invalid moves
  //   if (firstChildId < discId){
  //     console.log("invalid move")
  //     $( "#discContainerB" ).droppable( "option", "disabled", true );
  //
  //   }
  //   else {
  //     console.log("valid move");
  //     $( "#discContainerB" ).droppable( "option", "enabled", true);
  //   }
  //
  //
  // },
});
//CONTAINER C
$("#discContainerC").droppable({
  drop: function(event, ui) {
    ($(this)).prepend($(ui.draggable)),
    $(".disc").css("height", "10");
  },
  // over: function(discId) {
  //   var firstChildId = $(this).children('div').attr("id")
  //   //this is the rule! need to disable drop on invalid moves
  //   if (firstChildId < discId){
  //     console.log("invalid move")
  //     $( "#discContainerC" ).droppable( "option", "disabled", true );
  //   }
  //   else {
  //     console.log("valid move");
  //     $( "#discContainerC" ).droppable( "option", "enabled", true );
  //   }
  // },
});



//***********End Drag & Drop Code**************

//***********Start First Child Rule***************************
//If discContainer's first child element has LOWER 'rank' than 'ui.draggable'
// then revert/cancel the drag/drop.

//*************End First Chil Rule*******************************

//************END Dynamic Disk Creation******************

//~~~~~~###~~~~~~~~~~ *********Rules************* ~~~~~~~~~~~~###~~~~~~~


//**********End addClass code*********************
