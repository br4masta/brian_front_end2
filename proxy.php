<?php
header('Content-Type: application/xml');
header('Access-Control-Allow-Origin: *');
echo file_get_contents('https://medium.com/feed/@brianaldybramasta');
