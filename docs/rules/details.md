
# Details

  Rules take incoming messages and process them into an event. 

  The rule definition is stored in a yaml file

  The basic rule is a `name` followed by a *Select* verb and an *Action* verb

      name: 'Rule name'
      match:
        some_field: value
      discard: true

  You can have multiple *Select*s which are interperated as logical `AND` operations. 

      match:
        some_field: !!js/regexp /value/
      equals: 
        other_field: value

  The above would equate to: *Select* where `some_field` **matches** the regular expression /value/ AND where `other_field` **equals** "value"

  Multiple *Actions* can be specified too. 

      discard: true
      stop: true

  A *RuleSet*, which is what groups the rules into logical areas, is made up of an array of *Rules*. These are processed in order until till the last rule is found or a `stop` or `stop_ruleset` action is encountered

      - name: 'Rule name'
        match:
          some_field: value
        set:
          new_field: 17

      - name: 'No junk'
        equals:
          my_field: 'linux'
        set:
          that_field: 'Torvalds'

  There are multiple *RuleSets* in the processing. The *Global* RuleSet is the first to be processed. 

  The *Group* rules are processed next. Only 1 group will be matched. This is done with *Select* verbs, just like the in a *Rule*.  When matched, the groups rules will be processed.

  *Discard* and *Dedupe* are shortcuts for what end up as rules that are placed before the rest of the *RuleSet*.



# Rule Order

  1. Syslog mapping happens first
  2. Global First discards are run to remove junk
  3. Global deduplication occurs
  4. Global rules next, in order
  5. Grouping, and the group rules. (group_order: if required?)
      1. discard_first
      2. dedupe
      3. rules
      4. discard_last
  6. Last discards are run that rely on other mappings



--------------------
# Shortcut helpers
--------------------

  There are some tasks that are repeated frequently so the most
  reqular have shortcuts setup to make the rules more succint. 


---------------------
## `syslog_mapping`

  Takes the syslog levels and maps them
  to console severities

  * This is a required field 


------------------
## `deduplicate`

  Shortcut for matching on `summary` with a regex and replacing it.

     - [ /match/, 'replace' ]

  Or supply a second regex if you want a more specific search replace

     - [ /match/, /replace_match/, 'replace' ]

  * A match will shortcircuit dedupe execution but continue onto
  following rules


-------------------------------
## `discard` / `discard_last`

  Shortcuts for dumping messages, either before or after normal 
  processing. 

  Discard on summary:

      - '/trash/'

  Or write a full rule

      - name: 'To the bin'
        match:
          summary: /trash/

  * Discard will shortcircuit execution



# Selecting Events

 Rules need to be able to select an event to apply to an `action` to.
 
 Multuiple `select` options will complete a logical AND operation
 
 OR can be achieved by 
   - specifying an array of values for a select field
   - In regular expressions, using a regex `|` operator 
   - Specifying an additional rule in the ruleset
 

------------
## `match`

  Search a field for a match. 

  When you supply `string` the match becomes `/string/` with any regex
  literals escaped

    match:
      this_field: "some string"
   
  You can also speciy a regex directly with `js-yaml` type syntax

    match:
      that_field: !!js/regexp /some \d+ digit/

  You can achieve an `or` by specifying an array of objects

    match:
      other_field:
        - string search
        - !!js/regexp /regex search/
        - more


-------------
## `equals`

  Exact match of the field value

    equals:
      some_field: 7

  You can achieve an `or` by specifying an array of values

    match:
      other_field:
        - value
        - temp
        - over


-------------------
## `field_exists`

  Test for the existence of a field 

    field_exists: some_name_of_existing_field


--------------------
## `field_missing`

  Test if a field is missing

    field_missing: some_name_of_missing_field


------------------
## `starts_with`

  Fields starts with the string. Like a regular expression `/^text/`

    starts_with
      a_field_name: 'Starting Text'


----------------
## `ends_with`

  Field ends with the string. Like a regular expression `/text$/`

    ends_with
      a_field_name: 'Ending Text'



# Actions

## `set`

  * Set a field to a value.


    - name: super_set
      equals: 
        node: 'super.man.com'
      set:
        group: 'Krypton'

  * Set a field by using another fields value


    - name: prefix summary with node name
      set:
        summary: '{node} - {summary}'
      match:
        summary: /hello world/

  * Set a field using a paramatised pattern match


    - name: change the words around
      set:
        summary: '{match.2} {match.1} number: {match.2}'
      match:
        summary: /^(\w+) (\d+) (\w+).*/



--------------
## `replace`

  An field to do the replace on must be specified by using
  `field` for where the replace will happen and `this`. A warning
  will be logged if the replacement doesn't find a match. 

    - name: other_replace
      match:
        summary: 'repeating repeating repeating'
      replace:
        field: message
        this: 'repeating'
        with: 'newrepeat'

--------------
## `discard`

Sets the serverity of the alert to -1

    - name: other_replace
      match::
        node: 'suprious.alerts'
      discard: true


regex replace a value
