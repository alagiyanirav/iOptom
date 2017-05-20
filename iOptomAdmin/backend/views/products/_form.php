<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model common\models\Products */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="products-form">
    <?php $form = ActiveForm::begin(); ?>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'name')->textInput(['maxlength' => true]) ?>
        </div>

        <div class="col-md-6">
            <?= $form->field($model, 'image_file')->fileInput() ?>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'type')->dropDownList([ 'Sphere' => 'Sphere', 'Toric' => 'Toric', 'Multifocal' => 'Multifocal', 'Multifocal Toric' => 'Multifocal Toric', ], ['prompt' => '']) ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'modality')->dropDownList([ 'Daily' => 'Daily', 'Fortnightly' => 'Fortnightly', 'Monthly' => 'Monthly', ], ['prompt' => '']) ?>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'sphere')->textInput() ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'cylinder')->textInput() ?>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'axis')->textInput() ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'add')->dropDownList([ 'LOW' => 'LOW', 'MED' => 'MED', 'HIGH' => 'HIGH', ], ['prompt' => '']) ?>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <?= $form->field($model, 'bc')->textInput() ?>
        </div>
        <div class="col-md-6">
            <?= $form->field($model, 'td')->textInput() ?>
        </div>
    </div>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>
</div>
