(function(exports) {

  function NotesList() {
    this.list = ['my note'];
  }

  NotesList.prototype = {
    addNote: function(note) {
      this.notesList.push(note);
    },

    list: function() {
      return this.list;
    }
  }

  exports.NotesList = NotesList;
})(this);
