
# Global Rules

A Global rule is a rule that is applied to every event that is parsed into Panther. These are common rules that will apply to most if not every group.

An exmaple of this would be a global rule to discard any events that are parsed in due to the registry file being in use by another application or service.

To do this you must:

1. Create a new rule
![](_media/CreateGlobalRule7.png)


2. Enter a name for the rule and choose a selector from the drop down menu, in this case we are going to use 'Match' to check for a string in the summary of the event.
![](_media/CreateGlobalRule4.png)

3. Select a field, in this case it will be the summary field of the log event.

4. Type the String you want to match with in the summary, in this case the message that we will be looking for is '/detected your registry file is still in use by other applications or services/'.

5. The action we want to select discard to delete the event log from the console.
![](_media/CreateGlobalRule6.png)

6. Lastly save the new rule, once the rule is saved you must click deploy to deploy the changes to the server.
![](_media/CreateGlobalRule9.png)
