<?php

namespace backend\controllers;

use Yii;
use common\models\Settings;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\UploadedFile;

/**
 * SettingsController implements the CRUD actions for Settings model.
 */
class SettingsController extends Controller {

    /**
     * @inheritdoc
     */
    public function behaviors() {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['index'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    /**
     * Lists all Settings models.
     * @return mixed
     */
    public function actionIndex() {
        $default_image = Settings::getByKey("DEFAULT_IMAGE");

        if ($default_image->load(Yii::$app->request->post())) {
            $default_image->image_file  = UploadedFile::getInstance($default_image, 'image_file');
            $uploaded                   = $default_image->uploadDefaultProductImage();

            if($uploaded !== false) {
                $default_image->value       = $uploaded;
                $default_image->image_file  = null;

                if($default_image->save())
                    Yii::$app->session->setFlash('success', 'Successfully saved.');
            }
        }

        return $this->render('index', [
            'default_image' => $default_image
        ]);
    }
}
