## Introduction

Users who are members of the "admin" group may carry out
administration tasks from the `Admin` page accessed from the main
navigation bar at the top of the Panther screen.


## User Administration

There are two groups of users supported by Panther -- "Admin" and
"User".  Both can be used to login to the application, view the
recorded data, and carry out most associated actions, but members of
the "Admin" group may additionally:
 + add more users
 + download the rsyslog configuration and TLS certificates
 + create API Keys

The user created during the signup process will automatically be an
"Admin" user, who may then go on to carry out any further
configuration and create any more user accounts that may be required.


### Creating User Accounts

New users may be added by completing the user name and email address
input fields in the `Console Users` section of the administration
page. Once a group has been selected and the `Add` button clicked, a
link will be sent to the new user via email for them to use to set
their password.

![](_media/console-users.png)


### Modifying User Accounts

A menu to edit user accounts can be displayed by clicking on an entry
in the list of `Console Users`.

![](_media/console-user-edit-modify.png)

#### Deleting Users

To delete a user, click on the user in the users list to display the
account control buttons, and then click the `Delete` button.

![](_media/console-user-edit-delete.png)

#### Changing Email Addresses

To change a user's email address, click on the user in the users list
to display the account control buttons, type the new email address
into the `Email` input field, and then click the `Save` button.

![](_media/console-user-edit-email.png)

#### Resetting Passwords

To reset a user's password, click on the user in the users list to
display the account control buttons, and then click the `Reset
Password` button to send a password reset link via email to the user's
configured address.

![](_media/console-user-edit-reset.png)


## Rsyslog Configuration

For complete information on configuring [rsyslog](https://www.rsyslog.com/),
please consult the official [guides for rsyslog.](https://www.rsyslog.com/category/guides-for-rsyslog/)

What follows here is a brief configuration guide for sending events to
a Panther console that should be sufficient in most cases.

In outline, the necessary steps are:

 * [install supporting gnutls packages](#gnutls)
 * [download configuration files](#download)
 * [install configuration files](#install)
 * [restart rsyslog](#restart)


<a name="gnutls" id="gnutls"></a>

### Install GNU-TLS support for rsyslog

Event data is sent securely via an encrypted connection from your
local syslog server to the Panther server.  We use TLS (Transport Layer
Security) to achieve this, which requires the use of unique client keys.
Please ensure that the `client.key` is kept secure.

On GNU/Linux systems, rsyslog uses [the GnuTLS](https://gnutls.org/)
library to provide its TLS compatibility. This is not generally
installed automatically as a dependency, and may have to be added
explicitly by the system administrator.

#### Debian / Ubuntu

```console
# apt-get install rsyslog-gnutls
```

#### RedHat / CentOS

```console
# yum install rsyslog-gnutls
```

<a name="download" id="download"></a>

### Download Configurations

#### Go to the Admin page.

![](_media/rsyslog1.png "Setting up rsyslog")

#### Download the rsyslog tarball

The rsyslog tarball contains an `rsyslog-panther.conf` and the TLS
certificate files needed to configure the client system to communicate
with Panther.

![](_media/rsyslog2.png "Setting up rsyslog")

<a name="install" id="install"></a>

#### Install the configuration files

The downloaded resources need to be installed in the system rsyslog
configuration directory.

```console
[root@localhost ~]# cd /etc/rsyslog.d/
[root@localhost rsyslog.d]# tar -xvf /path/to/rsyslog-client.tar

[root@localhost /etc/rsyslog.d]# ls -l
drwxr-xr-x 1 root root 1013 May  9 11:19 panther
-rw-r--r-- 1 root root  763 May 10 13:45 rsyslog-panther.conf
```

#### Edit `/etc/rsyslog.conf` to reference the Panther configuration file

Once the new configuration files have been installed, the main system
rsyslog configuration file must be updated in order to reference them.

If `/etc/rsyslog.conf` already contains a line like this:

```console
$IncludeConfig /etc/rsyslog.d/*.conf
```

Then no further action is necessary. Otherwise, either add such a line
to include all files from that directory or explicitly reference
Panther's configuration with:

```console
$IncludeConfig /etc/rsyslog.d/rsyslog-panther.conf
```

<a name="restart" id="restart"></a>

### Restart rsyslog

The new configuration should take effect automatically when the system
is next rebooted, but it is also possible to simply restart rsyslog to
have the changes take effect immediately without resorting to a reboot.

#### systemd based systems

Systems using the newer systemd service manager, such as Ubuntu 18 and
CentOS 7, can restart the rsyslog service as follows:

```console
# systemctl restart rsyslog
```

#### init.d based systems

Systems using the older System V init service management scripts can
generally restart the rsyslog service as follows:

```console
# /etc/init.d/rsyslog restart
```

## API Keys

Panther also offers [an API](/api/) to import event logs.

For security, registered users must supply unique keys when using this
method to transfer data to Panther.

Keys are generated simply by navigating to the `API Keys` section and
clicking the `Generate` button.

![](_media/apigeneration.png "Generating an api key")

See [the API documentation](/api/) for more information.

## Delete All Events

TODO

## Integrations

TODO

## Console Fields

TODO
