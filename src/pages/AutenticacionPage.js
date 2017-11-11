
module.exports = {
	elementosAutenticacionPage: {
		identifierId: element(by.id('identifierId')),
		botonIdentifierNext: element(by.id('identifierNext')),
		passwordId: $('[type="password"]'),
		botonPasswordNext: element(by.id('passwordNext')),
		botonCambiarCuenta: element(by.xpath("//div[@jsname='paFcre']//div[@role='button']")),
		botonUsarOtraCuenta: element(by.xpath("//div[@id='identifierLink']//p[contains(text(),'Usar otra cuenta')]"))
	},
	
	habilitarAngular: function(valor){
      browser.waitForAngularEnabled(valor);
	},
	
    get: function() {
      return browser.get('https://mail.google.com');
	},
	
	ingresarUsuario: function(valor){
		let autenticacionPage = this.elementosAutenticacionPage;
		return autenticacionPage.identifierId.sendKeys(valor);
	},
	
	clicSiguienteAutenticacion: function(){
		let autenticacionPage = this.elementosAutenticacionPage;
		return autenticacionPage.botonIdentifierNext.click();		
	},
	
	ingresarPassword: function(valor){
		let autenticacionPage = this.elementosAutenticacionPage;
		autenticacionPage.passwordId.sendKeys(valor);
	},
	
	clicSiguientePassword: function(){
		let autenticacionPage = this.elementosAutenticacionPage;
		autenticacionPage.botonPasswordNext.click();
	},

	clicBotonCambiarCuenta: function(){
		let autenticacionPage = this.elementosAutenticacionPage;
		autenticacionPage.botonCambiarCuenta.click();
	},

	clicOpcionUsarOtraCuenta: function(){
		let autenticacionPage = this.elementosAutenticacionPage;
		autenticacionPage.botonUsarOtraCuenta.click();
	},
};

