(function(exports) {

  function NotesView() {
    this.notes = [];
  }

  NotesView.prototype = {
    renderApp: function() {
      return [
        "<h1>Single Page Notes App</h1>",
        "<form>",
          "<input type='text'></input>",
          "<input type='submit'></input>",
        "</form>",
        this.notes.map(function(note) { return "<p>"+ note.text +"<p>" }).join("")
      ].join("");
    },

    addNote: function(note) {
      this.notes.push(note);
    }
  }

  exports.NotesView = NotesView;
})(this);
