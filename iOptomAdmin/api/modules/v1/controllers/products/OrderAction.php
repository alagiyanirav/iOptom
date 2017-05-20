<?php
/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * Date: 14/01/2017 17:04
 */

namespace api\modules\v1\controllers\products;

use common\models\Orders;
use common\models\User;
use Yii;
use yii\rest\Action;

class OrderAction extends Action {
    public function run() {

        $user   = User::findIdentityByAccessToken();
        $left   = json_decode(Yii::$app->request->post("left"));
        $right  = json_decode(Yii::$app->request->post("right"));

        $order                  = new Orders();
        $order->user_id         = $user->id;
        $order->left_eye        = $left->id;
        $order->right_eye       = $right->id;
        $order->left_quantity   = $left->quantity;
        $order->right_quantity  = $right->quantity;
        $order->save();

        return ["success" => 1];
    }
}