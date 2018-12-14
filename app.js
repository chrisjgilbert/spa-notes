window.addEventListener("load", function() {

  var notesModelList = new NotesModelList(NotesModel)

  var notesListView = new NotesListView(notesModelList);

  var notesController = new NotesController(notesModelList, notesListView, NotesView);

  var html = notesListView.render();
  notesController.render(html);

})
