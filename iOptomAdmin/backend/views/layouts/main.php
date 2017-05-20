<?php

/* @var $this \yii\web\View */
/* @var $content string */

use backend\assets\AppAsset;
use yii\helpers\Html;
use yii\widgets\Breadcrumbs;
use common\widgets\Alert;
use yii\helpers\Url;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="wrap">
    <nav id="w0" class="navbar-inverse navbar-fixed-top navbar" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#w0-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a class="navbar-brand" href="<?= Url::home() ?>">iOptom</a>
            </div>

<?php if(!Yii::$app->user->isGuest) { ?>
            <div id="w0-collapse" class="collapse navbar-collapse">
                <ul id="w1" class="navbar-nav navbar-right nav">
                    <li>
                        <a href="<?= Url::toRoute("orders/index") ?>">Orders</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("products/sphere") ?>">Sphere</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("products/toric") ?>">Toric</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("products/multifocal") ?>">Multifocal</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("products/multifocal-toric") ?>">Multifocal Toric</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("settings/index") ?>">Settings</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("user/index") ?>">Users</a>
                    </li>

                    <li>
                        <a href="<?= Url::toRoute("site/logout") ?>">Logout</a>
                    </li>
                </ul>
            </div>
<?php } ?>
        </div>
    </nav>

    <div class="container">
        <?= Breadcrumbs::widget([
            'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
        ]) ?>
        <?= Alert::widget() ?>
        <?= $content ?>
    </div>
</div>

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; iOptom <?= date('Y') ?></p>
    </div>
</footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
