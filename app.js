(function() {

  window.onload = function() {

    var notesModel = NotesModel;
    var notesList = new NotesList;
    var notesView = NotesView;

    var controller = new NotesController(
      notesModel,
      notesList,
      notesView
    );

    controller.updateDOM();
  }

})(this);
