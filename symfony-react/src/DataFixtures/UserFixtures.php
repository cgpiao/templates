<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{
   private $passwordEncoder;

   public function __construct(UserPasswordEncoderInterface $passwordEncoder)
   {
      $this->passwordEncoder = $passwordEncoder;
   }

   public function load(ObjectManager $manager)
   {
      $user = new User();
      $user->setUsername('user');
      $user->setPassword($this->passwordEncoder->encodePassword(
         $user, 'foobar'
      ));
      $manager->persist($user);
      $admin = new User();
      $admin->setUsername('admin');
      $admin->setRoles(['ROLE_ADMIN']);
      $admin->setPassword($this->passwordEncoder->encodePassword(
         $user, 'foobar'
      ));
      $manager->persist($admin);
      $manager->flush();
   }
}
