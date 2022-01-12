package br.com.teste.estagio.grafico.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.teste.estagio.grafico.model.Faturamento;

public interface FaturamentoRepository extends JpaRepository<Faturamento, Long>{

}
