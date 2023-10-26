<?php
namespace DaVinci\Mail;

use PHPMailer\PHPMailer\PHPMailer;

/**
 * Clase para enviar emails con una interfaz fluida.
 */ 
class Mailer
{
	private PHPMailer $mailer;

	public function __construct()
	{
		$this->mailer = new PHPMailer(true); // El true es para que lance Exceptions.

		$this->mailer->isSMTP();
		$this->mailer->Host = '127.0.0.1';
		$this->mailer->Port = 1025;

	    $this->mailer->setFrom('no-responder@saraza-basket.com', 'Saraza Basket');
	}

	public function addAddress(string $name, string $to = ''): self
	{
		$this->mailer->addAddress($name, $to);

		return $this;
	}

	public function loadHTMLBodyFromTemplate(string $filepath, array $replacements = []): self
	{
		$this->mailer->isHTML();
		$this->mailer->Body = file_get_contents($filepath);

		foreach($replacements as $key => $value) {
			$this->mailer->Body = str_replace($key, $value, $this->mailer->Body);
		}

		return $this;
	}

	public function setSubject(string $subject): self
	{
		$this->mailer->Subject = $subject;

		return $this;
	}

	public function send()
	{
		$this->mailer->send();
	}

	public function getMailer(): PHPMailer
	{
		return $this->mailer;
	}
}