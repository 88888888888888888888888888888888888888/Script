var body = $response.body;
body = '\/*\n@supported 7B507DDE1443\n*\/\n' + body;

$done(body);
