<?php
include './db.php';
$row = $db->select(
  'pages',
  ['id','title','content'],
  ['id' => 2],
  ['LIMIT' => 1]
);
echo json_encode($row);
