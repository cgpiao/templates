<?php

namespace App\MessageHandler;

use App\Message\WelcomeMail;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

final class WelcomeMailHandler implements MessageHandlerInterface
{
    public function __invoke(WelcomeMail $message)
    {
        // do something with your message
    }
}
