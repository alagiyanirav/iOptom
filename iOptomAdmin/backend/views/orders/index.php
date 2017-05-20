<?php

use yii\widgets\Pjax;
use yii\helpers\Html;
use yii\grid\GridView;
use yii\helpers\Url;

/* @var $this yii\web\View */
/* @var $searchModel common\models\OrdersSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Orders';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="orders-index">
    <h1><?= Html::encode($this->title) ?></h1>

<?php
Pjax::begin([
'id' => 'orders-grid',
'enablePushState' => false
]);
echo GridView::widget([
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns' => [

        [
            'attribute' => 'id',
            'format' => 'raw',
            'value' => function($model) {
                return '<span class="label label-success">#' . $model->id . '</span>';
            }
        ],

        [
            'attribute' => 'user_id',
            'value' => function($model) {
                return $model->user->username;
            }
        ],

        [
            'attribute' => 'right_eye',
            'value' => function($model) {
                return $model->rightEye->name;
            }
        ],

        'right_quantity',

        [
            'attribute' => 'left_eye',
            'value' => function($model) {
                return $model->leftEye->name;
            }
        ],

        'left_quantity',

        [
            'attribute' => 'status',
            'format' => 'raw',
            'value' => function($model) {
                if($model->status)
                    return '<span class="label label-success">Processed</span>';
                else return '<span class="label label-danger">Waiting</span>';
            },
            'filter'    => Html::activeDropDownList(
                $searchModel,
                'status',
                [
                    1   => 'Processed',
                    0   => 'Waiting',
                ],
                [
                    'class'     => 'form-control',
                    'prompt'    => ''
                ]
            ),
        ],

        [
            'header' => 'Actions',
            'class' => 'yii\grid\ActionColumn',
            'template' => '{update}',
            'contentOptions' => ['class' => 'action-column'],
            'buttons' => [
                'update' => function ($url, $model, $key) {
                    return Html::tag('div',
                        Html::a('Process', Url::toRoute(['orders/update', 'id' => $model->id]), [
                            'class'     => 'btn btn-success btn-xs',
                            'title'     => 'Process',
                            'data-pjax' => '#orders-grid',
                        ]),
                        [
                            'class'     => 'text-center'
                        ]
                    );
                },
            ],
        ],
    ],
]);
Pjax::end();
?>
</div>
