(function(exports) {

  function NotesController(notesModel, notesList, notesView) {
    this.notesModel = notesModel;
    this.notesList = notesList;
    this.notesView = notesView;
  }

  NotesController.prototype = {
    updateDOM: function() {
      this._refreshPage();
      // this._listenForSubmit();
    },

    _listenForSubmit: function() {
      document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        submitNote();
      })
    },

    _refreshPage: function() {
      document.getElementById('heading').innerHTML = this.notesView.renderHeading();
      document.getElementById('form').innerHTML = this.notesView.renderForm();
      document.getElementById('notes').innerHTML = this.notesView.renderNotes(this.notesList.list);
    },
  }

  exports.NotesController = NotesController;
})(this);
