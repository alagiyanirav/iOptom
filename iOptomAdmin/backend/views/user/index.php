<?php
use yii\widgets\Pjax;
use yii\helpers\Url;
use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\UserSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Users';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-index">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create User', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

<?php
Pjax::begin([
    'id' => 'users-grid',
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
            'attribute' => 'parent',
            'format' => 'raw',
            'value'     => function($model) {
                $parent = null;
                if($model->parent)
                    $parent = $model->parentUser;

                if(is_null($parent))
                    return '<span class="label label-success">None</span>';

                return $parent->username . " (#" . $parent->id . ")";
            }
        ],

        [
            'attribute' => 'is_admin',
            'value' => function($model) {
                return $model->is_admin ? 'Yes' : 'No';
            },
            'filter'    => Html::activeDropDownList(
                $searchModel,
                'is_admin',
                [
                    1   => 'Yes',
                    0   => 'No',
                ],
                [
                    'class'     => 'form-control',
                    'prompt'    => ''
                ]
            ),
        ],

        'username',
        'email:email',

        [
            'attribute' => 'status',
            'format' => 'raw',
            'value' => function($model) {
                return $model->status ? '<span class="label label-success">Active</span>' : '<span class="label label-danger">Banned</span>';
            },
            'filter'    => Html::activeDropDownList(
                $searchModel,
                'is_admin',
                [
                    10  => 'Active',
                    0   => 'Banned',
                ],
                [
                    'class'     => 'form-control',
                    'prompt'    => ''
                ]
            ),
        ],

        [
            'attribute' => 'created_at',
            'value' => function($model) {
                return Yii::$app->formatter->format($model->created_at, 'relativeTime');
            }
        ],

        [
            'header' => 'Actions',
            'class' => 'yii\grid\ActionColumn',
            'template' => '{child}{update}{ban}',
            'contentOptions' => ['class' => 'action-column'],

            'visibleButtons' => [
                'child' => function ($model) {
                    return $model->parent === 0 ? true : false;
                }
            ],

            'buttons' => [

                'child' => function ($url, $model) {
                    return Html::a('Add child account', Url::toRoute(['user/create', 'parent' => $model->id]), [
                        'class'         => 'btn btn-warning btn-xs grid-button',
                        'title'         => 'Add child account',
                        'aria-label'    => 'Add child account',
                        'data-pjax'     => 0
                    ]);
                },

                'update' => function ($url, $model) {
                    return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $url, [
                        'class'         => 'btn btn-primary btn-xs grid-button',
                        'title'         => 'Update',
                        'aria-label'    => 'Update',
                        'data-pjax'     => 0
                    ]);
                },

                'ban' => function ($url, $model) {
                    return Html::a('<span class="glyphicon glyphicon-remove"></span>', Url::to(["user/ban", "id" => $model->id]), [
                        'class'         => 'btn btn-danger btn-xs grid-button last',
                        'title'         => 'Ban',
                        'aria-label'    => 'Ban',
                        'data-pjax'     => '#users-grid'
                    ]);
                },
            ],
        ],
    ],
]);
Pjax::end();
?>
</div>
