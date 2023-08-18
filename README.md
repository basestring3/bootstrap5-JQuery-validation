# bootstrap5-JQuery-validation
Easy switch between Is-valid and is-Invalid or just remove both classes with a single line


SETUP:<br />
Download validinvalidswitch.js and add it you your page below the bootstrap5 JS file<br />
```
<script src="../js/bootstrap.bundle.min.js"></script>
<script src="../js/validinvalidswitch.js"></script>
```


To set is_valid use .valid(true);<br />
To set is_invalid use .valid(false);<br />
To Remove the validation use .valid();<br />


for example
```
$('#Input').valid(true);
$('#Input').valid(false);
$('#Input').valid();
```
