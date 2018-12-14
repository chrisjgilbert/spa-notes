function NotesListView(notesModelList) {
  this.notesModelList = notesModelList;
}

NotesListView.prototype = {
  render: function() {
      return [
        "<form>",
          "<input type='text'></input>",
          "<input type='submit'></input>",
        "</form>",
        this.notesModelList.notes.map(function(note) {
          return [
            "<div>",
            "<a href='#'>" + note.title() + "</a>",
          "</div>"
        ].join("")
      }).join("")
    ].join("")
  }
}
