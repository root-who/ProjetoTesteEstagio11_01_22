package br.com.teste;

import java.math.BigDecimal;

public class Faturamento {

	int dia;
	BigDecimal valor;
	
	public Faturamento() {
	}
	
	public Faturamento(int dia, BigDecimal valor) {
		this.dia = dia;
		this.valor = valor;
	}
}
