<?php
/**
 * User: Boris Savic
 * Email: bsavic@codebluestudio.com
 * Date: 21/03/16
 * Time: 11:33
 */

namespace api\modules\v1\controllers;

use Yii;
use yii\rest\ActiveController;

class UsersController extends ActiveController {
    public $modelClass = 'common\models\User';

    public function actions() {
        return [

            'register'  => [
                'class'         => 'api\modules\v1\controllers\users\RegisterAction',
                'modelClass'    => $this->modelClass,
            ],

            'login'     => [
                'class'         => 'api\modules\v1\controllers\users\LoginAction',
                'modelClass'    => $this->modelClass,
            ],

            'logout'    => [
                'class'         => 'api\modules\v1\controllers\users\LogoutAction',
                'modelClass'    => $this->modelClass,
            ],

            'secret'    => [
                'class'         => 'api\modules\v1\controllers\users\SecretAction',
                'modelClass'    => $this->modelClass,
            ],
            
            'recover'   => [
                'class'         => 'api\modules\v1\controllers\users\RecoverAction',
                'modelClass'    => $this->modelClass,
            ]
        ];
    }

    public function init() {
        parent::init();

        // avoid CORS OPTIONS request
        if(Yii::$app->request->getIsOptions()) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: X-Requested-With');
            header("HTTP/1.1 200 OK");
            exit;
        }
    }
}