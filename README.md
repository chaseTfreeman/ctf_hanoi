# ctf_hanoi
My JS build out of the popular game "Tower's of Hanoi"


Tech Used:
Jquery & Jquery-ui's drag and drop functions. This includes HTML5's compatability with DnD as well.
Lots of CSS, too.

My approach was completely guided by Jquery's UI plugin. I had no idea it was A). so powerful, and B). (seemingly) limited in what it could do. After a while I full understood how far I could go with DnD, however, I may not have a full grasp of how to call all the events, options, etc. because some didn't work and there are various documentations that work and not all are listed on the Jquery UI site.

UNSOLVED PROBLEMS:
I need to figure out how to "re-enable" a 'droppable' div after it has been disabled. The trick is not the syntax but how/when it can be called in the code. All of these action take place at three specific moments:
  -When the 'draggables' are created (the discs)
  -When the 'droppables' are hovered over
  -when the 'draggables' are 'dropped'
Almost ALL of the code is contained within those functions and is dependent on its timing. I know what I am trying to do is possible I just need to solve the puzzle. In fact, I think my current puzzle is specifc to ALL forms of javascript, not just the UI plugin. 
