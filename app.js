(function() {

  window.onload = function() {

    var notesModel = NotesModel;
    var notesView = new NotesView();

    var controller = new NotesController(notesView, notesModel);

    controller.updateDOM();
  }

})(this);
