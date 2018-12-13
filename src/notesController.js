(function(exports) {

  function NotesController(notesView, notesModel) {
    this.notesView = notesView;
    this.notesModel = notesModel;
    this._listenForInput();
  }

  NotesController.prototype = {
    updateDOM: function() {
      document.getElementById("app").innerHTML = this.notesView.renderApp();
    },

    _listenForInput: function() {
      var self = this;
      window.addEventListener("submit", function(event) {
        event.preventDefault();
        var note = new self.notesModel(event.target[0].value);
        self.notesView.addNote(note);
        self.updateDOM();
      })
    }
  }

  exports.NotesController = NotesController;
})(this);
