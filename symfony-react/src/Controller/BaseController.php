<?php


namespace App\Controller;


use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

class BaseController extends AbstractController
{
   public $translator;
   public $logger;
   public function __construct(TranslatorInterface $translator, LoggerInterface $logger)
   {
      $this->translator = $translator;
      $this->logger = $logger;
   }
}