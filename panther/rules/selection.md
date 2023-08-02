---
layout: home
title: Event selection
nav_order: 5
permalink: /panther/rules/selection
parent: Rules
layout: template
description: Panther Rules - selections
---


# Selecting Events

 Rules need to be able to select an event to apply an action to.

 Multiple "select" options will combined into a logical "and" operation.

 Logical "or" operations can be achieved by:
   - specifying an array of values for a "select" field
   - using a regular expression `|` operator
   - specifying an additional rule in the ruleset


##  `match`

  Search a field for a match.

  When you supply `some string` the match becomes `/some string/` with any regex
  literals escaped:

  ```yaml
    match:
      this_field: "some string"
  ```

  You can also specify a regex directly with `js-yaml` type syntax

  ```yaml
    match:
      that_field: !!js/regexp /some \d+ digit/
  ```

  You can achieve a logical "or" by specifying an array of objects

  ```yaml
    match:
      other_field:
        - string search
        - !!js/regexp /regex search/
        - more
  ```

  You can achieve a logical "and" by specifying a dictionary of values

  ```yaml
    match:
      this_field: "some string"
      other_field: "also this string"
  ```

  You can combine the two by specifying a dictionary with an array of values:

  ```yaml
    match:
      this_field:
        - this string
        - or this string
      other_field:
        - also one
        - of these strings
  ```

## `equals`

  Exact match of the field `some_field` against the value `7`:

  ```yaml
    equals:
      some_field: 7
  ```

  You can achieve a logical "or" by specifying an array of values:

  ```yaml
    equals:
      other_field:
        - value
        - temp
        - over
  ```

  You can achieve a logical "and" by specifying a dictionary of values:

  ```yaml
    equals:
      some_field: 7
      other_field: value
  ```

  You can combine the two by specifying a dictionary with an array of values:

  ```yaml
    equals:
      some_field:
        - 7
        - 8
        - 9
      other_field:
        - value
        - temp
        - over
  ```


## `field_exists`

  Test for the existence of a field:

  ```yaml
    field_exists: some_name_of_existing_field
  ```


## `field_missing`

  Test whether a field is missing:

  ```yaml
    field_missing: some_name_of_missing_field
  ```


## `starts_with`

  Field starts with the string `Starting Text`. Like a regular expression `/^Starting Text/`

  ```yaml
    starts_with
      a_field_name: 'Starting Text'
  ```


## `ends_with`

  Field ends with the string `Ending Text`. Like a regular expression `/Ending Text$/`

  ```yaml
    ends_with
      a_field_name: 'Ending Text'
  ```



# Actions

## `set`

  * Set a field to a value:

  ```yaml
    - name: super_set
      equals:
        node: 'super.man.com'
      set:
        group: 'Krypton'
  ```

  * Set a field by using the value from another field:


  ```yaml
    - name: prefix summary with node name
      set:
        summary: '{node} - {summary}'
      match:
        summary: /hello world/
  ```

  * Set a field using a paramaterized pattern match:

  ```yaml
    - name: change the words around
      set:
        summary: '{match.2} {match.1} number: {match.2}'
      match:
        summary: /^(\w+) (\d+) (\w+).*/
  ```



## `replace`

  A field holding the value to be replaced must be specified using
  `field` and the value to be replaced using `this`. The new value
  must be specified using `with`:

  ```yaml
    - name: other_replace
      match:
        summary: 'repeating repeating repeating'
      replace:
        field: message
        this: 'repeating'
        with: 'newrepeat'
  ```

  A warning will be logged if the replacement doesn't find a match.

## `discard`

Sets the severity of the event to -1 and stops further rule processing. The event will be discarded:

  ```yaml
    - name: other_replace
      match::
        node: 'spurious.alerts'
      discard: true
  ```

TODO: is this incomplete?
regex replace a value
