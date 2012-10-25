if (Meteor.is_client) {
  Template.aloha.greeting = function () {
    return "Aloha Meteor! Use HTML5 contentEditable to edit content in your application.";
  };

  Template.aloha.events = {
    'click input' : function () {
      // this will enable Aloha Editor for all HTML elements with the class "editable"
      $(".editable").aloha();
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