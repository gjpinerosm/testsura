
const { browser } = require('protractor');

const { expect } = require('chai');

var autenticacionPage = require('../src/pages/AutenticacionPage.js');
var bandejaEmailPage = require('../src/pages/BandejaEmailPage.js');
var emailPage = require('../src/pages/EmailPage.js');

module.exports = function(){

    this.Given(/^Como usuario '(.*)' con contrasena '(.*)' me autentico en gmail$/, function (usuario, contrasena) {
		autenticacionPage.habilitarAngular(false);
		browser.ignoreSynchronization = true;
		autenticacionPage.get();
		autenticacionPage.ingresarUsuario(usuario);
		browser.sleep(3000);
		autenticacionPage.clicSiguienteAutenticacion();
		browser.sleep(3000);
		autenticacionPage.ingresarPassword(contrasena);
		browser.sleep(3000);
		autenticacionPage.clicSiguientePassword();
		browser.sleep(5000);
    });
	
	this.When(/^Envio el correo al usuario '(.*)' con asunto '(.*)' y con mensaje '(.*)'$/, function(usuario, asunto, mensaje) {
	browser.ignoreSynchronization = true;
	bandejaEmailPage.clicOpcionRedactar();
	bandejaEmailPage.ingresarDestinatario(usuario);
	browser.sleep(2000);
	bandejaEmailPage.ingresarAsunto(asunto);
	bandejaEmailPage.ingresarMensajeEmail(mensaje);
	bandejaEmailPage.clicEnviarMensaje();
	browser.sleep(5000);
	bandejaEmailPage.clicOpcionSesion();
	bandejaEmailPage.clicCerrarSesion();
	browser.sleep(3000);
	});
	
	this.Then(/^Verifico el email con la informacion en el correo destinatario '(.*)'$/,function(usuario){ 
		browser.ignoreSynchronization = true;
		browser.sleep(4000);
		autenticacionPage.clicBotonCambiarCuenta();
		browser.sleep(3000);
		autenticacionPage.clicOpcionUsarOtraCuenta();
		browser.sleep(3000);
		autenticacionPage.ingresarUsuario('gpineros.qvision@gmail.com');
		autenticacionPage.clicSiguienteAutenticacion();
		browser.sleep(3000);
		autenticacionPage.ingresarPassword('!!gicogE99**');
		autenticacionPage.clicSiguientePassword();
		browser.sleep(3000);
		browser.refresh();
		browser.sleep(3000);
		bandejaEmailPage.clicCorreoRecibido();
		browser.sleep(3000);
		expect(bandejaEmailPage.obtenerAsuntoMensaje()).to.equal("Mi nuevo desarrollo");
		expect(bandejaEmailPage.obtenerEmailDestinatario()).to.equal("gjpinerosm@udistrital.edu.co");
		expect(bandejaEmailPage.obtenerCuerpoMensaje()).to.equal("Esta es una prueba");
	});
};
