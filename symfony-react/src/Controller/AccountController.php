<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AccountController extends BaseController
{
   #[Route('/account', name: 'account')]
   public function index(): Response
   {
      return $this->render('account/index.html.twig', [
         'controller_name' => 'AccountController',
      ]);
   }

   #[Route('/login', name: 'app_login')]
   public function login(AuthenticationUtils $authenticationUtils): Response
   {
      if ($this->getUser()) {
         $this->logger->debug($this->getUser()->getUsername());
         return $this->redirectToRoute('app_root');
      }

      $error = $authenticationUtils->getLastAuthenticationError();
      $lastUsername = $authenticationUtils->getLastUsername();
      return $this->render('account/login.html.twig', [
         'controller_name' => $this->translator->trans('Symfony is great'),
         'last_username' => $lastUsername,
         'error' => $error,
      ]);
   }

   #[Route('/logout', name: 'app_logout')]
   public function logout()
   {
      throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
   }
}
