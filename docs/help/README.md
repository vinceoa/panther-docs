## Introduction

TODO -- This is currently a set of pointers for further reading rather than an actual quickstart guide!

There are two main methods to import event logs. One is to use the rsyslog.conf file to import every event that is logged on the host machine, and the other is to use the API.

## rsyslog

Panther offers the option to receive event logs directly from rsyslog, this can be achieved by downloading the rsyslog tarball on the admin page. A tutorial on how to set this up is located in the [admin section](/admin/README#rsyslog-configuration).

## API

Panther offers the option to submit event logs to it through an API, secured with a key. A tutorial on how to use the API and generate a key is in the [admin section](/admin/README#api-keys).

## Configure a Global Rule

Global rules are rules that will be applied to every event log that is received by Panther. By default, you will have some syslog rules and a simple example. There is a tutorial for adding further global rules in the [Rules](/rules/README#global-rules) section.

## Configure a Group rule

There is a tutorial on setting up group rules in the [Rules](/rules/README#group-rules) section, along with a working example in the [API](/api/README#example) section.
