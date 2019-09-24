# Syslog Mappings

All events need to be mapped from their syslog form to an event in the console.

## Default Event Identifier

The #[code identifier] field is what decides if an event is unique in the console.

The default setting is to combine the node, severity and summary fields: #[code {node}:{severity}:{summary}].

Any events with a matching identifier will be grouped together and that events #[code tally] will increase by 1. If no matching event identifier is found, a new event is created. Timestamps will be stored of when the events happened.


## Field Mappings

Syslog fields need to be mapped to event console fields. These fields will then be available to match against in rules processing.

Please note that when events are deduplicated via the #[code identifier] field, you may lose this information. For example the pid of a process can change regularly but is not included in the identifier by default, so you can have multiple pids that aggregate into the one event.


## Severity Mapping

Syslog logging levels need to be mapped to event console severeties as they are not a one to one relationship. The scale is also inverted.

Syslog levels are from 7 (Debug) to 0 (Emergency).


![](_media/severities.png)
Event console severities are from 5 (Critical) to 0 (Clear).

By default `Clear` events will be periodically removed from the system

Events that are clear will be removed from the list of event logs in the console.

## Field Transform

The transforms allow you to apply a pre defined function to an event console field before rules processing takes place.

Currently #[code lower_case] is the only transform supported and by default it is applied to the "node" field so you don't need to worry about case when checking the node field.

If you have an idea for a transform you would like added, please let us know.

## Agent Rules