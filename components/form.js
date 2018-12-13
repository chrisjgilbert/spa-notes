var Form = (function() {

  var form = [
    "<form>",
      "<input type='text'></input>",
      "<input type='submit'></input>",
    "</form>"
  ]

 return {
   getForm: function() {
     return form.join("");
   }
 }

})();
