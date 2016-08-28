// Boilerplate code based on http://jqueryui.com/dialog/#modal-confirmation
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Dialog - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.js"></script>
  <script>
  $(function() {
    $('#dialog-confirm').dialog(
      {
        resizeable: false,
        height: 'auto',
        width: 400,
        modal: true,
        buttons: {
          "Ok!": function() {
            $(this).dialog("Close");
          },
          Cancel: function() {
            $(this).dialog("Close");
          }
        }
      });
  });
  </script>
</head>
</html>
