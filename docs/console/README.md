# Console

The console is the main feature of Panther. It contains the system event logs which are filtered and catagorised based on your settings.

These events can be intereacted with using the console, there are numerous options the user has such as, deleting an event, expanding it to display more information or even assigning it to a specific user. All the options will be explained in this section.

## Events

 * Click on an Event to higlight it.
 * Click hold and drag (like drawing a box) to highlight many events.
 * Ctrl click to add a single event to your selection.
 * Shift click to add all group of events to your selection.

[event-selection-multiple](/_media/event-selection-multiple.mp4 ':include :type=video')

Right click to see the context menu of actions to take on your selected events.

Ctrl-A selects all events loaded in the grid.

## Acknowledge and Unacknowledge

New events will be in an unacknowledged state by default, unless you have a [Rule](#rules) that says otherwise. These will be in bold text.

When you acknowledge an event, then event will be set to acknowledged, stop being bold and will be assigned to you.

You can also acknowledge and unacknowledge from the [Event Details](#event-details) window.

[event-selection-multiple](/_media/event-right-click-ack-unack.mp4 ':include :type=video')

## Clear

Clear sets your event to be removed from the console. Cleared events will be highlighted green for a period so other users are notified until a background task deletes them completely.

## Assign

You can assign events to console users, so users can see the events in their "Mine" [view](#views).

## Severity

You can set the severity of this event to a new value.

## Copy Event

You can copy the summary details of the selected events.

## Event Details

You can view more detail of each event by double clicking the event or pressing the enter key when an event is selected.
Also, all options available in the Consoles right click context menu are available as buttons at the bottom of the Event Details view.

### Summary

The Summary tab provides an overview of the event and a graph of the events previous occurrences (up to 1000).

### History

The History tab will provide you any activity that has occured on the event. Firstly what [Rules](#rules) have impacted the event during rules processing. Then any activity a user has taken on the event in the console.

### Notes

Users can add text notes to an event that other users can see view.

## Activity

The activity stream on the dashboard keeps track of the users interaction with Panther. It logs events along with the time and the user that was responsible for the action. The activity stream logs:

* When an event log is acknowledged or unacknowledged
* Event assignments
* Severity changes
* Clearing an event
* Deleting an event

## Groups

Selecting a group from the dropdown menu will filter all events down to just the group that you have setup in your [rules](#rules).

There are two special groups "All" and "None".  "All" will display every event. "None" will display events that have not been categorised into a group.

## Console Views

Views allow you to query event fields for particular data and only show those events in your console.

By default you will have the "All", "Mine" and "Unacknowledged" views configured for you.

## Severities

You can further filter your view by severity.

Select "All" to reset your view back to everything.

## Group/Views/Severities

You are able to select certain groups, views, and severities at the same time.

For example you could view all Critical alerts that are assigned to you in group Xyz.

## Keyboard Shortcuts

### Select next event

<kbd>up</kbd>/<kbd>down</kbd>


### Add event to selection

<kbd>shift</kbd> + <kbd>up</kbd> / <kbd>shift</kbd> + <kbd>down</kbd>


### Delete the selected events

<kbd>backspace</kbd> / <kbd>delete</kbd>


### Open the events detailed information

<kbd>enter</kbd> / <kbd>return</kbd> 


### Select all events in your view

<kbd>ctrl</kbd> + <kbd>a</kbd> 


### Clear selection

<kbd>escape</kbd>


### Copy selected rows to clipboard

<kbd>ctrl</kbd> + <kbd>c</kbd>


### Assign the selected events to a user

<kbd>a</kbd> 


### Clear selected events

<kbd>c</kbd>


### Toggle the Acknowledged flag of the event

<kbd>k</kbd>


### Set the severity for selected events

<kbd>s</kbd>


### This help, but how did you get here?

<kbd>?</kbd> / <kbd>h</kbd>

