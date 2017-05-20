<?php

/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * 08. 01. 2017.  1:00 PM
 */

namespace api\modules\v1\controllers\users;

use common\models\User;
use Yii;
use yii\rest\Action;

class RecoverAction extends Action {
    public function run() {
        $user = User::find()
            ->where(['password_reset_token' => Yii::$app->request->post('secret')])
            ->one();

        if(is_null($user))
            return [
                'success'   => false,
                'error'     => 'Invalid secret key'
            ];

        $response['success'] = true;

        $user->password             = Yii::$app->request->post("password");
        $user->password_reset_token = null;
        if(!$user->save()) {
            $response['success'] = false;

            foreach ($user->getErrors() as $error) {
                $response["error"] = $error[0];
                break;
            }
        }

        return $response;
    }
}