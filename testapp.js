if (Meteor.is_client) {
  Template.aloha.greeting = function () {
    return "Aloha! Meteor with Aloha Editor support -- HTML5 contentEditable WYSIWYG editor.";
  };

  Template.aloha.events = {
    'click input' : function () {
      $(".aloha-editable").aloha();
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You activated Aloha Editor!");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}