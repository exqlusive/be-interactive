<?php

namespace App\Models;

use App\Traits\Guid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrationForm extends Model
{
    use HasFactory, Guid;
}
