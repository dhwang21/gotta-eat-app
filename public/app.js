'use strict';

console.log('in app.js');

let mainNav = document.getElementById('js-navigation');
let bookmark = document.getElementById('js-bookmark');
let recipe = document.getElementById('js-recipe');

let navBarToggle = document.getElementById('js-navbar-toggle');
let bookmarkToggle = document.getElementById('js-bookmark-toggle');
let recipeToggle = document.getElementById('js-recipe-toggle');



navBarToggle.addEventListener('click', function(){
  mainNav.classList.toggle('active');
});
bookmarkToggle.addEventListener('click', function(){
  bookmark.classList.toggle('active');
});
recipeToggle.addEventListener('click', function(){
  recipe.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
  new Choices('#choices-basic');

  new Choices('#choices-edit-items', {
    editItems: true,
  });

  new Choices('#choices-remove-button', {
    removeItemButton: true,
  });

  new Choices('#choices-unique-values', {
    duplicateItemsAllowed: false,
  });

  new Choices('#choices-input-limit', {
    maxItemCount: 5,
  });

  new Choices('#choices-regex-filter', {
    regexFilter: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  });

  new Choices('#choices-adding-items-disabled', {
    addItems: false,
  });

  new Choices('#choices-disabled-via-attr');

  new Choices('#choices-prepend-append', {
    prependValue: 'before-',
    appendValue: '-after',
  });

  new Choices('#choices-prepopulated', {
    items: ['Josh Johnson', {
      value: 'joe@bloggs.co.uk',
      label: 'Joe Bloggs',
      customProperties: {
        description: 'Joe Blogg is such a generic name',
      }
    }],
  });

  new Choices('#choices-placeholder', {
    placeholder: true,
    placeholderValue: 'I am a placeholder',
  });
});