<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "orders".
 *
 * @property integer $id
 * @property integer $status
 * @property integer $user_id
 * @property integer $left_eye
 * @property integer $right_eye
 * @property integer $left_quantity
 * @property integer $right_quantity
 *
 * @property Products $leftEye
 * @property Products $rightEye
 * @property User $user
 */
class Orders extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'orders';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'left_eye', 'right_eye', 'left_quantity', 'right_quantity'], 'integer'],
            [['user_id', 'left_eye', 'right_eye', 'left_quantity', 'right_quantity'], 'required'],
            [['left_eye'], 'exist', 'skipOnError' => true, 'targetClass' => Products::className(), 'targetAttribute' => ['left_eye' => 'id']],
            [['right_eye'], 'exist', 'skipOnError' => true, 'targetClass' => Products::className(), 'targetAttribute' => ['right_eye' => 'id']],
            [['user_id'], 'exist', 'skipOnError' => true, 'targetClass' => User::className(), 'targetAttribute' => ['user_id' => 'id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'status' => 'Status',
            'user_id' => 'User ID',
            'left_eye' => 'Left Eye',
            'right_eye' => 'Right Eye',
            'left_quantity' => 'Left Quantity',
            'right_quantity' => 'Right Quantity',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getLeftEye()
    {
        return $this->hasOne(Products::className(), ['id' => 'left_eye']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getRightEye()
    {
        return $this->hasOne(Products::className(), ['id' => 'right_eye']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getUser()
    {
        return $this->hasOne(User::className(), ['id' => 'user_id']);
    }
}
