<?php
/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * Date: 24/01/2017 11:32
 */

namespace api\modules\v1\controllers\products;

use common\models\Orders;
use common\models\User;
use yii\rest\Action;

class OrdersAction extends Action {
    public function run() {
        $user = User::findIdentityByAccessToken();

        $accounts = [];
        $accounts[] = $user->id;

        if(!$user->parent) {
            $childs = User::find()
                ->where(["parent" => $user->id])
                ->all();

            if(!empty($childs))
                foreach ($childs as $child)
                    $accounts[] = $child->id;
        }

        $orders = Orders::find()
            ->where(["user_id" => $accounts])
            ->all();

        return ["orders" => $orders];
    }
}