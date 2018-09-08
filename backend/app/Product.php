<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use SoftDeletes;

    /**
     * type of the "status" column.
     *
     * @var int
     */
    const STATUS_AVAILABLE = 1;

    /**
     * type of the "status" column.
     *
     * @var int
     */
    const STATUS_NOTAVAILABLE = 2;

    /**
     * type of the "status" column.
     *
     * @var int
     */
    const STATUS_INUSE = 3;

    /**
     * type of the product.
     *
     * @var int
     */
    const TYPE_LAPTOP = 1;

    /**
     * type of the product.
     *
     * @var int
     */
    const TYPE_DESKTOP = 2;

    /**
     * type of the product.
     *
     * @var int
     */
    const TYPE_MOBILE = 3;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'description', 'type', 'status'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * Return list of status codes and labels
     *
     * @return array
     */
    public static function listStatus()
    {
        return [
            self::STATUS_AVAILABLE => 'Available',
            self::STATUS_NOTAVAILABLE => 'Not Available',
            self::STATUS_INUSE => 'In Use',
        ];
    }

    /**
     * Return list of type codes and labels
     *
     * @return array
     */
    public static function listTypes()
    {
        return [
            self::TYPE_LAPTOP => 'Laptop',
            self::TYPE_DESKTOP => 'Desktop',
            self::TYPE_MOBILE => 'Mobile',
        ];
    }

    /**
     * Returns label of actual status
     *
     * @param string
     */
    public function statusLabel()
    {
        $list = self::listStatus();

        return isset($list[$this->status]) ? $list[$this->status] : $this->status;
    }

    /**
     * Returns if product is available or not
     *
     * @return Boolean
     */
    public function isAvailable()
    {
        return $this->status == self::STATUS_AVAILABLE;
    }
}
