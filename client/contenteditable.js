if (Meteor.is_client) {
  Template.aloha.greeting = function () {
    return "Aloha Meteor! Use HTML5 contentEditable to edit content in your application.";
  };

  Template.aloha.events = {
    'click input' : function () {
      $(".editable").aloha();
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