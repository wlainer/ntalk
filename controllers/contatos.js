module.exports = function(app) {
	var Contato = app.models.contato;

	var ContatoController = {
		index: function(req, res) {
			var usuario = req.session.usuario,
				contatos = usuario.contatos,
				params = {usuario: usuario,
							contatos: contatos };
			res.render('contatos/index', params);
		},
		create: function(req, res) {
			var contato = req.body.conato,
				usuario = req.session.usuario;
			usuario.contatos.push(contato);
			res.redirect('/contatos');
		},
		show: function(req, res) {
			var id = req.params.id,
				contato = req.usuario.contatos[id],
				params = {contato: contato, id: id};
			res.render('contatos/show', params);
		},
		edit: function (req, res) {
			var id = req.params.id,
				usuario = req.session.usuario,
				contato = usuario.contatos[id],
				params = {usuario: usuario,
						contato: contato,
						id: id};
			res.render('contatos/edit', params);
		},
		update: function (req, res) {
			var contato = req.body.contato,
				usuario = req.session.usuario;
			usuario.contato[req.params.id] = contato;
			res.redirect('/contatos');
		},
		destroy: function (req, res) {
			var usuario = req.session.usuario,
				id = req.params.id;
			usuario.contatos.splice(id, 1);
			res.redirect('/contatos');
		}
	}
	return ContatoController;
}