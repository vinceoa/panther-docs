# Views

Views allow you to narrow down the events displayed on the console

- [Adding a view](#adding-views)
- [Deleteing a view](#deleting-a-view)
- [The Default view](#the-default-view)

## Adding Views

A view is comprised of three components

 - Name
   Identifies the view in the drop down selection on the console

 - Field
   The event field name, choices are
   - node
   - summary
   - tally

 - Value
   What to match the field against.  This can be in one of three formats:
   - string
   - number
   - regular expression


Text you enter will default to an exact matching string.

    summary: Authentication failure

You can use /regular expressions/ as well by surrounding your re with forward slash's '/'.

    summary: /.*Authentication.*/

A number 5 will look for a numeric type of data.

    tally: 5

If you want to match a number that is in fact a string, surround the number in double quotes.

    summary: "42"

## Deleting a View

You can delete a view by clicking on the view you would like to delete, then clicking on the red trash icon.

## The Default View

The view your console defaults to can be set by clicking on the view you would like. Then clicking on the "Default" button.
