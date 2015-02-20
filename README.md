AuthorizedDirective
===================
A sample directive to enable/disable element on a view based on roles.

You can read more about it: https://aaatdd.wordpress.com/2014/10/02/an-authentication-directive/

Usage
------
    <input type="text" is-authorized for-roles="['role1']" your-roles="['role2']" />

Output  

    <input type="text" disabled />
    
It works for any tag following these rules:

* **input** will be disabled
* **button** will be disabled
* any other **tag** and its content will be removed

To manage complex **form** if you put the directive on the form all the form controls will be disabled following the rule above.
