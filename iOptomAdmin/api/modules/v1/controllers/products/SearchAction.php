<?php

/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * Date: 14/01/2017 14:27
 */

namespace api\modules\v1\controllers\products;

use common\models\Products;
use common\models\User;
use Yii;
use yii\rest\Action;

class SearchAction extends Action {
    public function run() {
        $user = User::findIdentityByAccessToken();
        $lens_power = $this->round(Yii::$app->request->post("sphere", 0) / (1 - (0.012 * 4) ), 0.25);

        $products = Products::find()
            ->where(["type" => Yii::$app->request->post("type")])
            ->andWhere(["modality" => Yii::$app->request->post("modality")])
            ->andWhere(["sphere" => $lens_power])
            ->groupBy("name")
            ->all();

        return $products;
    }

    private function round($value, $step) {
        $inv = 1.0 / $step;
        return round($value * $inv) / $inv;
    }
}