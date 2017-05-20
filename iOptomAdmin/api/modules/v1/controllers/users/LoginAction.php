<?php
/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * 08. 01. 2017.  1:09 PM
 */

namespace api\modules\v1\controllers\users;

use Yii;
use common\models\User;
use yii\rest\Action;

class LoginAction extends Action {
    public function run() {
        $response = ["success" => false];

        // try to find user by email address
        $user = User::findOne([
            "username" => Yii::$app->request->post("username"),
        ]);

        // if user exists and his password match we have successful login
        if (
            $user &&
            $user->validatePassword(Yii::$app->request->post("password"))
        ) {

            // generate new access token for user
            $user->access_token = Yii::$app->security->generateRandomString(256);
            $user->save();

            // prepare response data
            $response["success"] = true;
            $response["data"] = $user;
        }

        return $response;
    }
}