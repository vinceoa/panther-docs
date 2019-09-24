# Group Rules

A group rule is used to sort the event logs into different groups based on the users discretion.

An exmaple of this would be splitting the events based on the service e.g web service and OS. The web service group would handle events related to apache for example such as downtime and the OS group would want to handle events like OS crashes. Sorting the event logs into groups like this will maximise efficiency by letting the relavent teams deal with them.

To create a new group rule:

1.) Create a new group

![](_media/CreateGroupRule1.png)


2.) Here type the name of the group you want to make, in this case we created two groups one named Operating System and one named Apache Web Service.

![](_media/CreateGroupRule2.png)


3.) To match any event log with this group we are going to set a rule in the group selector. The rule is going to check the tag of the event log for the word "os", once this match has been found it will run through the rules in the group one by one against the event log entry and execute any processes it needs to.

To do this click on the pencil to open up the group selector.

![](_media/GroupSelector.png)


4.) Now create a rule to match the tag field with the word "os" and save it.
<br  />
<br  />

<img src="/help/tagos.png" alt="Creating a new group rule" class="helpimg" >

<br  />

5.) We now have a group selector that will match event logs against any rules in this group if it contains the "os" tag. To create a new rule for the group, it is similar to creating a global rule. Click on the down arrow for the group you wish to create a rule for and select 'Create a rule for...'

![](_media/CreateGroupRule33.png)


6.) This section is also very similar to the global rule section as you are just creating a rule. In the example we are creating a rule to log and group any failed su authentication events.

![](_media/CreateGroupRule444.png)

This rule is setting any event log that contains the String "FAILED su for .*" to be added to the Operating System group and the severity set to 3.


7.) Similar to creating a global rule, click save and enable the delopyment to the server.

![](_media/CreateGroupRule5.png)

An example of this group rule in action is displayed in the [API](#api) section.