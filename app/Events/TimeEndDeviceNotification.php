<?php

namespace App\Events;

use App\Models\Devices;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TimeEndDeviceNotification implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $device;
    public $user;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Devices $device,User $user)
    {
        $this->device = $device;
        $this->user = $user;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        dd($this->user);
        return new Channel('time-end-device.'.$this->user->id);
    }


    public function broadcastWith()
    {
        return
            [
                'device' => $this->device->id,
                'device_name' => $this->device->name,
                'device_id' => $this->device->deivce_id
            ];
    }
}
