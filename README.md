TLDR- DOM input creates element that also has DOM delete button

Create an HTML page that contains a text area and a button labeled Create.
When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

Use Append Child instead of adding to HTML so event listeners remain