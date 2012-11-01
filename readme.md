# Meteor + Aloha Editor

## HTML5 contentEditable editable with Aloha Editor as WYSIWYG editor

Use [Aloha Editor](http://aloha-editor.org) in your Meteor applications.

### Live example
* http://aloha-editor.meteor.com

### Aloha Editor Meteor package
* Atmosphere: https://atmosphere.meteor.com/package/aloha-editor
* Github: https://github.com/evo42/meteor-aloha-editor

### Usage
To use the Aloha Editor smart package for Meteor you'll need to add it to your Meteor application / installation.

* Install Meteorite with `npm install -g meteorite`
* Add the Aloha Editor package: `mrt add aloha-editor`
* Launch the application locally with `mrt`

For further information see: https://atmosphere.meteor.com/wtf/app


See `client/contenteditable.html` and `client/contenteditable.js` -- HTML
elements with the class `editable` will become editable with Aloha Editor
when you click the "click to edit" button (this triggers
`$(".editable").aloha();`).