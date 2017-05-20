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

class SecretAction extends Action {
    public function run() {
        $email = Yii::$app->request->post('email');

        if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            return [
                'success'   => false,
                'error'     => 'Invalid email address'
            ];

        $user = User::findOne([
            'email' => $email
        ]);

        if(is_null($user))
            return [
                'success'   => false,
                'error'     => 'User with this email address do not exists in our database'
            ];

        $user->password_reset_token = Yii::$app->security->generateRandomString(6);
        $user->save();

        $email_body = '<p>Hello ' . $user->username . ',</p>';
        $email_body .= '<p>You have requested password recovery. Please use following code to reset your password: ' . $user->password_reset_token . '</p>';
        $email_body .= '<p>Thank you, <br />iOptom</p>';
        
        Yii::$app->mailer->compose()
            ->setFrom('no-replay@ioptom.com')
            ->setTo($user->email)
            ->setSubject('iOptom - Recover Your Password')
            ->setHtmlBody($email_body)
            ->send();

        return ['success' => true];
    }
}