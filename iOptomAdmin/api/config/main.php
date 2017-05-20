<?php
/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * 26. 09. 2016.  12:15 PM
 */

$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php')
);

return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'modules' => [
        'v1' => [
            'class' => 'api\modules\v1\Module'
        ],
    ],
    'components' => [
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => false,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],

        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [

                // Users controller
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/users',
                    'pluralize' => false,
                    'only' => [
                        'register',
                        'login',
                        'logout',
                        'secret',
                        'recover',
                    ],
                    'extraPatterns' => [
                        'OPTIONS,POST register'     => 'register',
                        'OPTIONS,POST login'        => 'login',
                        'OPTIONS,GET logout'        => 'logout',
                        'OPTIONS,POST secret'       => 'secret',
                        'OPTIONS,POST recover'      => 'recover',
                    ]
                ],

                // Products controller
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/products',
                    'pluralize' => false,
                    'only' => [
                        'search',
                        'order',
                        'orders'
                    ],
                    'extraPatterns' => [
                        'OPTIONS,POST search'   => 'search',
                        'OPTIONS,POST order'    => 'order',
                        'OPTIONS,POST orders'   => 'orders',
                    ]
                ],
            ],
        ]
    ],
    'params' => $params,
];