package br.com.teste.estagio.grafico.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.teste.estagio.grafico.model.Faturamento;
import br.com.teste.estagio.grafico.repository.FaturamentoRepository;

@Service
public class FaturamentoService {
	
	@Autowired
	private FaturamentoRepository repository;
	
	
	public List<Faturamento> listarTudo(){
		return repository.findAll();
	}
	

}
