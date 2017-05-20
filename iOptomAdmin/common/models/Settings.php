<?php

namespace common\models;

use yii\web\UploadedFile;
use backend\components\ImageHelper;
use Yii;

/**
 * This is the model class for table "settings".
 *
 * @property integer $id
 * @property string $key
 * @property string $value
 * @property UploadedFile $image_file
 */
class Settings extends \yii\db\ActiveRecord {
    public $image_file;

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'settings';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['key'], 'required'],
            [['value'], 'string'],
            [['key'], 'string', 'max' => 128],
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
            'key' => 'Key',
            'value' => 'Value',
        ];
    }

    /**
     * Returns settings by key
     *
     * @param $key
     * @return Settings|static
     */
    public static function getByKey($key) {
        $setting = Settings::findOne([
            "key" => $key
        ]);

        if(!is_null($setting))
            return $setting;

        $setting = new Settings();
        $setting->key = $key;

        return $setting;
    }

    /**
     * Upload image
     * @return bool
     */
    public function uploadDefaultProductImage() {
        if ($this->validate()) {
            if(empty($this->image_file))
                return false;

            // generate image name
            $image_name = "default_product." . $this->image_file->extension;

            $location = __DIR__ . DIRECTORY_SEPARATOR
                . '..' . DIRECTORY_SEPARATOR
                . '..' . DIRECTORY_SEPARATOR
                . 'backend' . DIRECTORY_SEPARATOR
                . 'web' . DIRECTORY_SEPARATOR
                . 'images' . DIRECTORY_SEPARATOR
            ;
            if(!file_exists($location))
                mkdir($location, 0775, true);

            // upload new image
            $this->image_file->saveAs($location . $image_name);

            // create image thumb
            ImageHelper::createProductThumb($location . $image_name);

            // return image name
            return $image_name;
        } return false;
    }
}
