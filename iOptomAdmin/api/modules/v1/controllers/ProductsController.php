<?php
/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * Date: 14/01/2017 14:25
 */

namespace api\modules\v1\controllers;

use Yii;
use yii\rest\Controller;

class ProductsController extends Controller {
    public $modelClass = 'common\models\Products';

    public function actions() {
        return [

            'search'    => [
                'class'         => 'api\modules\v1\controllers\products\SearchAction',
                'modelClass'    => $this->modelClass,
            ],

            'order'    => [
                'class'         => 'api\modules\v1\controllers\products\OrderAction',
                'modelClass'    => $this->modelClass,
            ],

            'orders'   => [
                'class'         => 'api\modules\v1\controllers\products\OrdersAction',
                'modelClass'    => $this->modelClass,
            ],
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