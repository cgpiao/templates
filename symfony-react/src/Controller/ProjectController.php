<?php

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController extends AbstractController
{

   /**
    * @Route("/projects", name="projects_list")
    */
   public function index(LoggerInterface $logger): Response
   {
      return $this->render('project/index.html.twig', [
         'controller_name' => 'ProjectController',
      ]);
   }
}
