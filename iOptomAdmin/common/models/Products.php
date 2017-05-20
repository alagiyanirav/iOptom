<?php

namespace common\models;

use yii\web\UploadedFile;
use backend\components\ImageHelper;
use Yii;

/**
 * This is the model class for table "products".
 *
 * @property integer $id
 * @property string $name
 * @property string $type
 * @property string $modality
 * @property double $sphere
 * @property double $cylinder
 * @property integer $axis
 * @property string $add
 * @property double $bc
 * @property double $td
 * @property string $image
 * @property UploadedFile $image_file
 */
class Products extends \yii\db\ActiveRecord {
    public $image_file;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'type', 'modality', 'sphere'], 'required'],
            [['type', 'modality', 'add'], 'string'],
            [['sphere', 'cylinder', 'bc', 'td'], 'number'],
            [['axis'], 'integer'],
            [['name'], 'string', 'max' => 128],
            [['image_file'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg, jpeg'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'type' => 'Type',
            'modality' => 'Modality',
            'sphere' => 'Sphere',
            'cylinder' => 'Cylinder',
            'axis' => 'Axis',
            'add' => 'ADD',
            'bc' => 'BC',
            'td' => 'TD',
        ];
    }

    /**
     * Upload image
     * @return bool
     */
    public function upload() {
        if ($this->validate()) {
            if(empty($this->image_file))
                return false;

            // generate image name
            $base_name = str_replace(" ", "_", $this->image_file->getBaseName());
            $image_name = time() . "_" . uniqid() . "_" . $base_name . "." . $this->image_file->extension;

            $location = __DIR__ . DIRECTORY_SEPARATOR
                . '..' . DIRECTORY_SEPARATOR
                . '..' . DIRECTORY_SEPARATOR
                . 'backend' . DIRECTORY_SEPARATOR
                . 'web' . DIRECTORY_SEPARATOR
                . 'images' . DIRECTORY_SEPARATOR
                . 'products' . DIRECTORY_SEPARATOR
            ;
            if(!file_exists($location))
                mkdir($location, 0775, true);

            // upload new image
            $this->image_file->saveAs($location . $image_name);

            // create image thumb
            ImageHelper::createProductThumb($location . $image_name);

            // return image name
            return $image_name;
        } else return false;
    }

    /**
     * Update path to product image
     */
    public function afterFind() {
        $image = Yii::$app->params['images-server'];

        if(empty($this->image)) {
            $settings = Settings::getByKey("DEFAULT_IMAGE");

            if(is_null($settings))
                $image = null;
            else $image .= $settings->value;

        } else $image .= "products/" . $this->image;

        $this->image = $image;

        parent::afterFind();
    }
}
