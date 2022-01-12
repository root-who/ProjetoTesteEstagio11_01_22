package br.com.teste;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;

public class Distribuidora {

	String estado;
	BigDecimal valor;
	private BigDecimal porcentual;
	
	
	public Distribuidora(String estado, BigDecimal valor) {
		this.estado = estado;
		this.valor = valor;
	}
	
	public static BigDecimal somaValores(ArrayList<Distribuidora> dis) {
		BigDecimal sum = BigDecimal.ZERO;
		for (Distribuidora d : dis) {
			sum = sum.add(d.valor);
		}
		return sum;
	}
	
	public void calcPorcent(BigDecimal total){
		this.porcentual = this.valor.multiply(new BigDecimal("100")).divide(total, MathContext.DECIMAL128);
	}
	
	public BigDecimal getPorcentual() {
		return porcentual;
	}
	
	
}
