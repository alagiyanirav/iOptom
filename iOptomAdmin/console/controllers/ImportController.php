<?php

/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * Date: 19/12/2016 13:33
 */

namespace console\controllers;

use common\models\Products;
use yii\console\Controller;

class ImportController extends Controller {
    public function actionIndex() {

        $import_directory = __DIR__ . DIRECTORY_SEPARATOR
            . '..' . DIRECTORY_SEPARATOR
            . '..' . DIRECTORY_SEPARATOR
            . 'data' . DIRECTORY_SEPARATOR
            . 'import' . DIRECTORY_SEPARATOR;

        $files = scandir($import_directory);

        foreach ($files as $file) {

            if($file == "." || $file == "..")
                continue;

            $this->readFile($import_directory . $file);
        }
    }

    private function readFile($file) {
        $row = 0;
        if (($handle = fopen($file, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                $row ++;

                if($row == 1)
                    continue;

                if($data[1] == 'Spherical')
                    $data[1] = 'Sphere';

                $product            = new Products();
                $product->name      = trim(strip_tags($data[0]));
                $product->type      = trim(strip_tags($data[1]));
                $product->modality  = trim(strip_tags($data[2]));
                $product->sphere    = trim(strip_tags($data[3]));
                $product->cylinder  = trim(strip_tags($data[4]));
                $product->axis      = (int) trim(strip_tags($data[5]));
                $product->add       = trim(strip_tags($data[6]));
                $product->bc        = trim(strip_tags($data[7]));
                $product->td        = trim(strip_tags($data[8]));
                if(!$product->save()) {

                    print_r($product->getErrors());

                    print_r($product);

                    die();
                }
            }
            fclose($handle);
        }
    }
}