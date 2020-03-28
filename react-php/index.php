<?php

// Pour inclure facilement nos classes et dépendances
require 'vendor/autoload.php';

// Equivalent d'une requête en base de données pour trouver la liste
// des articles
$articles = App\Generator::getArticles();

// echo "<pre>";
// var_dump($articles);
// echo "</pre>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mon site en PHP etc etc.</title>
    <script src="https://kit.fontawesome.com/ce2ffed2c8.js" crossorigin="anonymous"></script>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'/>
</head>
<body>
    <div class="container">
        <h1>Les articles !</h1>
        <div class="row">
            <?php foreach ($articles as $article) : ?>
                <div class="col-4">
                    <h2><?= $article['title'] ?></h2>
                    <p><?= $article['introduction'] ?></p>
                    <a href="article.php" class="btn btn-primary">Lire la suite</a>
                    <span class="react-like" data-likes="<?= $article['likes']?>" data-is-liked="<?= $article['isLiked']?>"></span>
                </div>
            <?php endforeach ?>
        </div>
    </div>
  <script src="static/js/runtime.js"></script>
  <script src="static/js/vendors~posts.js"></script>
  <script src="static/js/posts.js"></script>

</body>
</html>
