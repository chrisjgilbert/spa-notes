function NotesModelList(noteModel) {
  this.noteModel = noteModel;
  this.notes = []
}

NotesModelList.prototype = {
  createNote: function(text) {
    var note = new this.noteModel(text)
    this.notes.push(note);
  }
}
