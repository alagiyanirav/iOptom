<?php

namespace backend\controllers;

use Yii;
use common\models\Products;
use common\models\ProductsSearch;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * ProductsController implements the CRUD actions for Products model.
 */
class ProductsController extends Controller {

    /**
     * @inheritdoc
     */
    public function behaviors() {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['sphere', 'toric', 'multifocal', 'multifocal-toric', 'create', 'update', 'delete'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    /**
     * Renders Spheres List
     *
     * @return string
     */
    public function actionSphere() {
        $searchModel = new ProductsSearch();
        $dataProvider = $searchModel->searchSphere(Yii::$app->request->queryParams);

        return $this->render('sphere', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Renders Toric List
     *
     * @return string
     */
    public function actionToric() {
        $searchModel = new ProductsSearch();
        $dataProvider = $searchModel->searchToric(Yii::$app->request->queryParams);

        return $this->render('toric', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Renders Multifocal List
     *
     * @return string
     */
    public function actionMultifocal() {
        $searchModel = new ProductsSearch();
        $dataProvider = $searchModel->searchMultifocal(Yii::$app->request->queryParams);

        return $this->render('multifocal', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Renders Multifocal Toric List
     *
     * @return string
     */
    public function actionMultifocalToric() {
        $searchModel = new ProductsSearch();
        $dataProvider = $searchModel->searchMultifocalToric(Yii::$app->request->queryParams);

        return $this->render('multifocal-toric', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Creates a new Products model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     *
     * @param $type
     * @return mixed
     */
    public function actionCreate($type) {
        $model = new Products();
        $model->type = $type;

        if ($model->load(Yii::$app->request->post())) {
            $model->image_file  = UploadedFile::getInstance($model, 'image_file');
            $uploaded           = $model->upload();

            if($uploaded !== false) {
                $model->image       = $uploaded;
                $model->image_file  = null;
            }

            if($model->save()) {
                Yii::$app->session->setFlash('success', 'Successfully saved.');
                return $this->returnByType($model);
            }
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Products model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id) {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post())) {
            $model->image_file  = UploadedFile::getInstance($model, 'image_file');
            $uploaded           = $model->upload();

            if($uploaded !== false) {
                $model->image       = $uploaded;
                $model->image_file  = null;
            }

            if($model->save()) {
                Yii::$app->session->setFlash('success', 'Successfully saved.');
                return $this->returnByType($model);
            }
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Redirect user by product type
     *
     * @param $model
     * @return \yii\web\Response
     */
    private function returnByType($model) {
        switch ($model->type) {
            case 'Toric':
                return $this->redirect(['toric']);
                break;

            case 'Multifocal':
                return $this->redirect(['multifocal']);
                break;

            case 'Multifocal Toric':
                return $this->redirect(['multifocal-toric']);
                break;

            default:
                return $this->redirect(['sphere']);
                break;
        }
    }

    /**
     * Deletes an existing Products model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id) {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Products model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Products the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id) {
        if (($model = Products::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
