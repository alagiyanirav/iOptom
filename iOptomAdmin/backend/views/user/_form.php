<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\User */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="user-form">

<?php if(!is_null($parent_user)) { ?>
    <div class="alert alert-warning">
        You are <?= $model->isNewRecord ? 'creating new' : 'updating' ?>  child account of <strong><?= $parent_user->username ?> (ID: #<?= $parent_user->id ?>)</strong> user.
    </div>
<?php } ?>

    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'username')->textInput() ?>
        </div>

        <div class="col-md-6">
            <?= $form->field($model, 'password')->passwordInput()->hint('<em><small>Leave empty to keep old password</small></em>') ?>
        </div>
    </div>

    <?= $form->field($model, 'email')->textInput() ?>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'is_admin')->dropDownList([
                0 => 'No',
                1 => 'Yes'
            ], ['prompt' => '']) ?>
        </div>

        <div class="col-md-6">
            <?= $form->field($model, 'status')->dropDownList([
                0 => 'Banned',
                10 => 'Active'
            ], ['prompt' => '']) ?>
        </div>
    </div>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
