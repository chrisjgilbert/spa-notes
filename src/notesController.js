function NotesController(notesList, notesListView, notesView) {
  this.notesList = notesList;
  this.notesListView = notesListView;
  this.NotesView = notesView;

  this._setup();
}

NotesController.prototype = {

  _setup: function() {
    var self = this;
    window.addEventListener('submit', function(event) {
      event.preventDefault();
      self.notesList.createNote(event.target[0].value);
      var html = self.notesListView.render();
      self.render(html);
    })
  },

  render: function(html) {
    document.getElementById('app').innerHTML = html;
  }

}
