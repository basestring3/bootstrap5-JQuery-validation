# bootstrap5-JQuery-validation
Easy switch between Is-valid and is-Invalid or just remove both classes with a single line


SETUP:
Download validinvalidswitch.js and add it you your page below the bootstrap5 JS file

<sub><script src="../js/bootstrap.bundle.min.js"></script></sub>
<sub><script src="../js/validinvalidswitch.js"></script></sub>


To set is_valid use .valid(true);
To set is_invalid use .valid(false);
To Remove the validation use .valid();

for example

$('#Input').valid(true);
$('#Input').valid(false);
$('#Input').valid();
