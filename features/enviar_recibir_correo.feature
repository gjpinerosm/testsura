Feature: Enviar y recibir correo
Como usuario del correo electronico de gmail
Yo quiero enviar un mensaje de correo a otro email
Para recibir el correo con asunto, destinatario y mensaje

  Scenario: Enviar y recibir correo
  Given Como usuario 'gjpinerosm.ud@gmail.com' con contrasena 'holaqwert' me autentico en gmail
   When Envio el correo al usuario 'gpineros.qvision@gmail.com' con asunto 'Mi nuevo desarrollo' y con mensaje 'Esta es una prueba'
   Then Verifico el email con la informacion en el correo destinatario 'gpineros.qvision@gmail.com'
