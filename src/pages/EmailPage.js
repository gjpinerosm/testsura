
module.exports = {
	elementosEmailPage: {
		campoAsunto: element(by.xpath("//div[@class='ha']/h2")),
		campoEmailDestinatario: element(by.xpath("//span[@class='go']/span/ancestor::h3/span")),
		campoCuerpoMensaje: element(by.xpath("//div[@class='gs']//div[@dir='ltr']"))
	},

	obtenerAsuntoMensaje: function(){
		let emailPage = this.elementosEmailPage;
		emailPage.campoAsunto.getAttribute('email');
	},

	obtenerEmailDestinatario: function(){
		let emailPage = this.elementosEmailPage;
		emailPage.campoEmailDestinatario.getAttribute('name');
	},

	obtenerCuerpoMensaje: function(){
		let emailPage = this.elementosEmailPage;
		emailPage.campoCuerpoMensaje.getText();
	}
};