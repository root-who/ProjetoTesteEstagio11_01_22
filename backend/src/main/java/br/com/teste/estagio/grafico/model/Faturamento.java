package br.com.teste.estagio.grafico.model;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Faturamento {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long dia;
	private BigDecimal valor;
	
	public Faturamento() {
	}
	
	public Long getDia() {
		return dia;
	}
	
	public BigDecimal getValor() {
		return valor;
	}
	
}
