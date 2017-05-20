<?php
/**
 * Created by Boris Savic.
 * Email: bsavic@codebluestudio.com
 * 17. 01. 2017.  7:37 PM
 */

namespace backend\components;

use yii\imagine\Image;

class ImageHelper {

    public static function createProductThumb($image) {

        // get image size
        list($width, $height) = getimagesize($image);

        // lets check is this image big
        if($width > 500 || $height > 500) {

            // if image height is bigger than image width lets create thumb by limiting by height
            if($height > $width) {

                $width     = number_format(500 * $width / $height, 0, "", "");
                $height    = 500;

            } else {

                $height    = number_format(500 * $height / $width, 0, "", "");
                $width     = 500;

            }

            Image::thumbnail(
                $image,
                $width,
                $height
            )->save($image, ['quality' => 70]);

        }

    }

}