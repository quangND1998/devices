<?php

namespace App\Repositories;

use App\Models\Applicaion;
use Illuminate\Support\Facades\Auth;

class ApplicationRepository extends BaseRepository
{
    /**
     * Init model associate with this repository
     */
    protected function model()
    {
        return new Applicaion;
    }

    /**
     * Remove bookmark post
     *
     * @var int $userId
     * @var int $postId
     *
     * @return boolean
     */
    public function applicationsByDeivces($devices)
    {
        return Applicaion::groupby('packageName')->whereIn('device_id', $devices)->get();
    }


    public function applications()
    {
        return  Applicaion::groupby('packageName')->get();
    }


}
