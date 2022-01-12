package br.com.teste.estagio.grafico.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.teste.estagio.grafico.model.Faturamento;
import br.com.teste.estagio.grafico.service.FaturamentoService;

@RestController
@RequestMapping("/faturamento")
public class FaturamentoController {

	@Autowired
	private FaturamentoService service;
	
	@PostMapping("/todos")
	public ResponseEntity<List<Faturamento>> listar(){
		return ResponseEntity.ok(service.listarTudo());
	}
	
}
