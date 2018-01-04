<?php
include './db.php';

$row = $db->select(
  'posts',
  ['id','title','content', 'author'],
  ['id' => $_GET['id']],
  ['LIMIT' => 1]
);
echo json_encode($row);

