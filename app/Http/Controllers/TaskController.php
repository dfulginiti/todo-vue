<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function create()
    {
        return "test";
    }

    public function index()
    {
        return [
            [ 'description' => 'Take out the trash', 'due_date' => Carbon::tomorrow(), 'is_complete' => false ],
            [ 'description' => 'Walk the dog', 'due_date' => Carbon::today(), 'is_complete' => false ],
            [ 'description' => 'Finish homework', 'due_date' => Carbon::today(), 'is_complete' => false ],
            [ 'description' => 'Write a thesis paper', 'due_date' => Carbon::today()->addWeek(), 'is_complete' => false ],
        ];
    }
}
