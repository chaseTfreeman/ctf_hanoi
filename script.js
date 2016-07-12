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
      $("#discContainerA").prepend("<div class=disc draggable=true" +" " + "id=" + i + ">").css("height", "20px")
    }
  }

  //************END Dynamic Disk Creation******************
  //                      *********Rules*************
  //If discContainer's first child element has LOWER 'rank' than 'ui.draggable'

  var discID = $(".disc").attr("id")


  // then revert/cancel the drag/drop.

  //**********End addClass code*********************
});
