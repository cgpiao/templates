<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\Table(name="`user`")
 * @ORM\HasLifecycleCallbacks()
 */
class User implements UserInterface
{
   /**
    * @ORM\Id
    * @ORM\GeneratedValue
    * @ORM\Column(type="integer")
    */
   private $id;

   /**
    * @ORM\Column(type="string", length=180, unique=true)
    */
   private $username;

   /**
    * @ORM\Column(type="json")
    */
   private $roles = [];

   /**
    * @var string The hashed password
    * @ORM\Column(type="string")
    */
   private $password;

   /**
    * @ORM\Column(name="created_at", type="datetime")
    */
   private $createdAt;

   /**
    * @ORM\Column(name="updated_at", type="datetime")
    */
   private $updatedAt;

   public function getId(): ?int
   {
      return $this->id;
   }

   /**
    * A visual identifier that represents this user.
    *
    * @see UserInterface
    */
   public function getUsername(): string
   {
      return (string)$this->username;
   }

   public function setUsername(string $username): self
   {
      $this->username = $username;

      return $this;
   }

   /**
    * @see UserInterface
    */
   public function getRoles(): array
   {
      $roles = $this->roles;
      // guarantee every user at least has ROLE_USER
      $roles[] = 'ROLE_USER';

      return array_unique($roles);
   }

   public function setRoles(array $roles): self
   {
      $this->roles = $roles;

      return $this;
   }

   /**
    * @see UserInterface
    */
   public function getPassword(): string
   {
      return (string)$this->password;
   }

   public function setPassword(string $password): self
   {
      $this->password = $password;

      return $this;
   }

   /**
    * @return mixed
    */
   public function getCreatedAt()
   {
      return $this->createdAt;
   }

   /**
    * @param mixed $createdAt
    */
   public function setCreatedAt($createdAt): void
   {
      $this->createdAt = $createdAt;
   }

   /**
    * @return mixed
    */
   public function getUpdatedAt()
   {
      return $this->updatedAt;
   }

   /**
    * @param mixed $updatedAt
    */
   public function setUpdatedAt($updatedAt): void
   {
      $this->updatedAt = $updatedAt;
   }

   /**
    * @see UserInterface
    */
   public function getSalt()
   {
      // not needed when using the "bcrypt" algorithm in security.yaml
   }

   /**
    * @see UserInterface
    */
   public function eraseCredentials()
   {
      // If you store any temporary, sensitive data on the user, clear it here
      // $this->plainPassword = null;
   }

   /**
    * @ORM\PrePersist
    */
   public function setCreatedAtValue(): void
   {
      $this->createdAt = new \DateTime();
   }

   /**
    * @ORM\PreUpdate
    * @ORM\PrePersist
    */
   public function setUpdatedAtValue(): void
   {
      $this->updatedAt = new \DateTime();
   }
}
