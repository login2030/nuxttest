<?php
include './db.php';
$row = $db->select(
  'posts',
  ['id','title']
);
echo json_encode($row);
