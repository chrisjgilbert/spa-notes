var NotesView = (function() {

  var heading = Heading;
  var form = Form;

  return {
    renderHeading: function() {
      return heading.getHeading();
    },

    renderForm: function() {
      return form.getForm();
    },

    renderNotes: function(notes) {
      return notes.map(function(note) { return "<p>"+ note +"<p>" }).join("");
    }
  }

})(this);
