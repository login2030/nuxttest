<?php
include './db.php';
$row = $db->select(
  'pages',
  ['id','title','content'],
  ['id' => 1],
  ['LIMIT' => 1]
);
echo json_encode($row);
