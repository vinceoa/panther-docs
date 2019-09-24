# rsyslog configuration

For more information on configuring rsyslog please consult
[rsyslog](https://www.rsyslog.com/) for further help.

What follows is a guide for configuring rsyslog to send events to a panther console.
In short you will:
 
 * [install supporting gnutls packages](#gnutls)
 * [download configuration files](#download)
 * [install configuration files](#install)
 * [restart rsyslog](#restart)



---
<a name="gnutls" id="gnutls"></a>

## Install GNU-TLS support for rsyslog

Event are sent securely via an encrypted connection from your local syslog server to the Panther server.  We use TLS client keys to achieve this.  Please ensure that the `client.key` is kept secure.

### Debian / Ubuntu

```console
# apt-get install rsyslog-gnutls
```

### RedHat / CentOS

```console
# yum install rsyslog-gnutls
```

---
<a name="download" id="download"></a>

## Download Configurations

### Go to the Admin page.

![](_media/rsyslog1.png "Setting up rsyslog")

### Download the rsyslog tarball 

This contains an `rsyslog-panther.conf` and the TLS certificate files
![](_media/rsyslog2.png "Setting up rsyslog")

---
<a name="install" id="install"></a>

### Install the configuration files

This contains the TLS certificates you need along with the rsyslog configuration file.

```console

[root@localhost ~]# cd /etc/rsyslog.d/
[root@localhost rsyslog.d]# tar -xvf /path/to/rsyslog-client.tar

[root@localhost /etc/rsyslog.d]# ls -l
drwxr-xr-x 1 root root 1013 May  9 11:19 panther
-rw-r--r-- 1 root root  763 May 10 13:45 rsyslog-panther.conf
```

## Ensure `/etc/rsyslog.conf` includes the panther configuration file
   * Either with the directive `$IncludeConfig /etc/rsyslog.d/*.conf`
   * or `$IncludeConfig /etc/rsyslog.d/rsyslog-panther.conf`


---
<a name="restart" id="restart"></a>

## Restart rsyslog

### systemd based Ubuntu 18, CentOS 7

```console
# systemctl restart rsyslog
```

### for older systems

```console
# /etc/init.d/rsyslog restart
```
