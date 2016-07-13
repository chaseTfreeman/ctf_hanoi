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
      revert: function(pizza) {

          var discId = $(this).attr("id")

          if ( 0 > discId) {
            console.log("pizza success")
          }
          else {
            console.log(discId)
          }
        },

    });
    //CONTAINER A
    $("#discContainerA").droppable({

      drop: function(event, ui) {
        ($(this)).prepend($(ui.draggable)),
        $(".disc").css("height", "10")
      },
      over: function(firstChildId) {
          var firstChildId = $(this).children('div').attr("id")
          console.log(firstChildId)
        },

    });
    //CONTAINER B
    $("#discContainerB").droppable({
      drop: function(event, ui) {
        ($(this)).prepend($(ui.draggable)),
        $(".disc").css("height", "10");
      },
      over: function(discId) {
          var firstChildId = $(this).children('div').attr("id")
          //this is the rule! need to disable drop on invalid moves
          if (firstChildId < discId){
            console.log("invalid move")
          }
          else {
            console.log("valid move");
          }


        },
    });
    //CONTAINER C
    $("#discContainerC").droppable({
      drop: function(event, ui) {
        ($(this)).prepend($(ui.draggable)),
        $(".disc").css("height", "10");
      },
      over: function(discId) {
          var firstChildId = $(this).children('div').attr("id")
          console.log(firstChildId)
        },
    });

  };
});
//***********End Drag & Drop Code**************

//***********Start First Child Rule***************************
//If discContainer's first child element has LOWER 'rank' than 'ui.draggable'
// then revert/cancel the drag/drop.

//*************End First Chil Rule*******************************

//************END Dynamic Disk Creation******************

//~~~~~~###~~~~~~~~~~ *********Rules************* ~~~~~~~~~~~~###~~~~~~~


//**********End addClass code*********************
