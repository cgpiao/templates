<?php

namespace App\Controller;

use App\Message\SmsNotification;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MakeController extends AbstractController
{
   #[Route('/mk', name: 'make')]
   public function index(): Response
   {
      $this->dispatchMessage(new SmsNotification('112345678'));
      return $this->render('make/index.html.twig');
   }
}
