
# User Administration

There are two types of users, "Admin" and a normal "User", both can be used to login to the Panther application.  

During the signup process an admin user will have been created with the password given.

Admins are able to
 + add more users
 + download the rsyslog configuration and TLS certificates
 + create API Keys


## User creation

Adding a new user requires a username, an email address and the privilege level the user will have.  The password is set by the user via an email link that is sent to them.

![](_media/console-users.png)


## Modifying User

To access the menu to edit users click on an entry in the users list, this will bring up extra features such as saving, deleting and resetting passwords.

![](_media/console-user-edit-modify.png)

## Delete User

To delete a user click on the user in the users list and click on the delete button.

![](_media/console-user-edit-delete.png)

## Changing Email

To change an email address click on the user in the users list, type the email address that you would like it to be changed to and click save.

![](_media/console-user-edit-email.png)

## Reset Password

To reset a password click on the user in the users list and click on reset password, this should send a password reset link to the email address linked to that user.

![](_media/console-user-edit-reset.png)