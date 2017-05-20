<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\ProductsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Multifocal Toric Products';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="products-index">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Add New Multifocal Toric', ['create', 'type' => 'Multifocal Toric'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            'name',
            'type',
            'modality',
            'sphere',

            [
                'class' => 'yii\grid\ActionColumn',
                'template' => '{update}{delete}',
                'buttons'   => [
                    'update' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                            'class'         => 'btn btn-primary btn-xs grid-button',
                            'title'         => 'Update',
                            'aria-label'    => 'Update',
                            'data-pjax'     => 0
                        ]);
                    },

                    'delete' => function ($url, $model) {
                        return Html::a('<span class="glyphicon glyphicon-trash"></span>', $url, [
                            'class'         => 'btn btn-danger btn-xs grid-button last',
                            'title'         => 'Delete',
                            'aria-label'    => 'Delete',
                            'data-confirm'  => 'Are you sure you want to delete this item?',
                            'data-method'   => 'post',
                            'data-pjax'     => 0
                        ]);
                    },
                ]
            ],
        ],
    ]); ?>
</div>
