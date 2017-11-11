
module.exports = {
	elementosBandejaEmailPage: {
		botonRedactar: element(by.xpath("//div[contains(text(),'REDACTAR')]")),
		campoDestinatario: element(by.xpath("//span[contains(text(),'Para')]/ancestor::td//textarea[@name='to']")),
		campoAsunto: element(by.xpath("//input[@name='subjectbox']")),
		campoMensaje: element(by.xpath("//div[@aria-label='Cuerpo del mensaje']")),
		botonEnviar: element(by.xpath("//tr//div[@aria-label='Enviar ‪(Ctrl-Enter)‬']")),
		MensajeEnviado: element(by.xpath("//div[contains(text(),Tu mensaje ha sido enviado.)]")),
		campoCerrarSesion: element(by.xpath("//span[@class='gb_bb gbii']")),
		campoBotonCerraSesion: element(by.xpath("//div//a[@id='gb_71']")),
		campoEmailDestinatario: element(by.xpath("//div[@class='adn ads']//div[@class='gE iv gt']//tr[@class='acZ']//h3//span")),
		campoAsuntoMensajeInterno: element(by.xpath("//td[@class='Bu']//div[@class='ha']")),
		campoAsuntoCorreoRecibido: element.all(by.xpath("//div[@class='nH bkK nn']//div[@id=':2']//tbody//tr[@class='zA zE']//div[@role='link' and contains(.,'Mi nuevo desarrollo')]")),
		campoCuerpoMensaje: element(by.xpath("//div[@class='adn ads']//div[@dir='ltr']")),
	},
	
	clicOpcionRedactar: function(){
		var bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.botonRedactar.click();
	},
	
	ingresarDestinatario: function(valor){
		var bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoDestinatario.sendKeys(valor);
	},
	
	ingresarAsunto: function(valor){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoAsunto.sendKeys(valor);
	},
	
	ingresarMensajeEmail: function(valor){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoMensaje.sendKeys(valor);
	},
	
	clicEnviarMensaje: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.botonEnviar.click();
	},
	
	clicOpcionSesion: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoCerrarSesion.click();
	},

	clicCerrarSesion: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoBotonCerraSesion.click();
	},

	clicCorreoRecibido: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoAsuntoCorreoRecibido.filter(function(elem) { 
			return elem.isDisplayed();
		}).first().click();
	},

	obtenerAsuntoMensaje: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoAsuntoMensajeInterno.getText();
	},

	obtenerEmailDestinatario: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		return bandejaEmailPage.campoEmailDestinatario.getAttribute("email");
	}, 

	obtenerCuerpoMensaje: function(){
		let bandejaEmailPage = this.elementosBandejaEmailPage;
		bandejaEmailPage.campoCuerpoMensaje.getText();
	}
};