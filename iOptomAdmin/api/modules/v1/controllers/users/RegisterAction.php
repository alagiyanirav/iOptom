<?php

/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * 08. 01. 2017.  1:00 PM
 */

namespace api\modules\v1\controllers\users;

use Yii;
use common\models\User;
use yii\rest\Action;

class RegisterAction extends Action {
    public function run() {
        $response = ["success" => true];

        $user               = new User();
        $user->email        = Yii::$app->request->post("email");
        $user->username     = Yii::$app->request->post("username");
        $user->password     = Yii::$app->request->post("password");
        $user->status       = User::STATUS_ACTIVE;
        $user->created_at   = date("Y-m-d H:i:s");
        $user->access_token = Yii::$app->security->generateRandomString(256);

        if(!$user->save()) {
            $response["success"] = false;

            foreach ($user->getErrors() as $error) {
                $response["error"] = $error[0];
                break;
            }
        } else $response["data"] = $user;

        return $response;
    }
}