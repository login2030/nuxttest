<?php
include './lib/medoo.php';
use Medoo\Medoo;

$db = new Medoo([
	'database_type'=> 'mysql',
	'database_name' => 'nuxttest',
	'server' => 'localhost',
	'username' => 'root',
	'password' => '',
	'charset'=> 'utf8',
	'prefix'=> ''
]);
