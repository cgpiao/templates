<?php

namespace App\Message;

final class SmsNotification
{
   private $phone;

   public function __construct($phone)
   {
      $this->phone = $phone;
   }

   public function getPhone()
   {
      return $this->phone;
   }
}
