(function(exports) {

  function NotesModel(text) {
    this.text = text;
    this.shortenedText = this.shortenedText();
  }

  NotesModel.prototype = {
    shortenedText: function() {
      return this.text.substring(0, 20);
    }
  }

  exports.NotesModel = NotesModel;
})(this);
