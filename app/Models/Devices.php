<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devices extends Model
{
    use HasFactory;
    protected $table = 'devices';
    protected $fillable = ['id','app_default_id', 'device_id',  'name', 'brand', 'os_version', 'battery', 'connect_wifi', 'created_at','active','enabled', 'state', 'user_id',  'updated_at', 'update_time'];
    protected $casts = [
        'active' => 'boolean',
        'enabled' => 'boolean'
    ];
    public function groups()
    {
        return $this->belongsToMany(Groups::class, 'group_device', 'device_id', 'group_id')->withPivot('state');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function applications(){
        return $this->hasMany(Applicaion::class,'device_id');
    }

    public function hasApp($packageName)
    {   
        if(count($this->applications->where('packageName',$packageName)->values()) >0){
            return true;
        }
        else{
            return false;
        }
    }

    public function default_app(){
        return $this->belongsTo(Applicaion::class,'app_default_id');
    }

    public function wifis(){
        return $this->hasMany(Wifi::class,'device_id');
    }

    public function hasWifi($ssid)
    {   
        if(count($this->wifis->where('SSID',$ssid)->values()) >0){
            return true;
        }
        else{
            return false;
        }
    }

    public function history_devices(){
        return $this->hasMany(HistoryDevice::class,'device_id');
    }

    public function last_login()
    {
        return $this->hasOne(HistoryDevice::class,'device_id')->latest();
    }


    public function scopeOrderByFillter($query, array $filters)
    {   
        
        if(count($filters)> 0){
            $sortBy = $filters['sortBy'] ? $filters['sortBy'] : 'id';
            $sort_Direction = $filters['sortDirection'] ?  $filters['sortDirection'] : 'asc';
            if ($filters['sortBy']=='updated_at') {
               
                $query->whereHas('last_login', function($q) use($sortBy, $sort_Direction){
                         $q->orderBy($sortBy,$sort_Direction);
                    });
            } else {
                
                $query->orderBy($sortBy,$sort_Direction);
            }
        }
        else{
            $query->get();
        }
      
    }


    

 
}
