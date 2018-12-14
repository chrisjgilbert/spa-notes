function NotesModel(text) {
  this.text = text
}

NotesModel.prototype = {
  title: function() {
    return this.text.substring(0, 20);
  }
}
