AuthorizedDirective
===================
A sample directive to enable/disable element on a view based on roles

Usage
------
    <input type="text" is-authorized for-roles="['role1']" your-roles="['role2']" />

Output  

    <input type="text" readonly />
    
It works for any tag following these rules:

* **input** will be readonly
* **button** will be disabled
* any other **tag** and its content will be removed

To manage complex **form** if you put the directive on the form all the form controls will be disabled or set as a readonly following the rule above.
