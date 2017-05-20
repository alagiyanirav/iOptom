<?php

namespace common\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use common\models\Products;

/**
 * ProductsSearch represents the model behind the search form about `common\models\Products`.
 */
class ProductsSearch extends Products
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'axis'], 'integer'],
            [['name', 'type', 'modality', 'add'], 'safe'],
            [['sphere', 'cylinder', 'bc', 'td'], 'number'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    public function searchSphere($params) {
        return $this->search($params, 'Sphere');
    }

    public function searchToric($params) {
        return $this->search($params, 'Toric');
    }

    public function searchMultifocal($params) {
        return $this->search($params, 'Multifocal');
    }

    public function searchMultifocalToric($params) {
        return $this->search($params, 'Multifocal Toric');
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params, $type)
    {
        $query = Products::find();
        $query->where(['type' => $type]);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'sphere' => $this->sphere,
            'cylinder' => $this->cylinder,
            'axis' => $this->axis,
            'bc' => $this->bc,
            'td' => $this->td,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'type', $this->type])
            ->andFilterWhere(['like', 'modality', $this->modality])
            ->andFilterWhere(['like', 'add', $this->add]);

        return $dataProvider;
    }
}
