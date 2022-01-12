package br.com.teste;

import java.math.BigDecimal;
import java.math.MathContext;
import java.util.ArrayList;

public class Exercicio3 {
	
	public static void main(String[] args) {
		ArrayList<Faturamento> lista = new PreProcessamento().getLista();
		
		BigDecimal menor = lista.get(1).valor;
		BigDecimal maior = lista.get(1).valor;
		BigDecimal media = BigDecimal.ZERO;
		for (Faturamento f : lista) {
				media = media.add(f.valor);
		}
		media = media.divide(new BigDecimal(lista.size()) , MathContext.DECIMAL128);
		
		
		for (Faturamento f : lista) {
			if(f.valor.compareTo(menor) == -1) {
				menor = f.valor;
			}
			
			if(f.valor.compareTo(maior) == 1) {
				maior = f.valor;
			}
		}
		System.out.print("Media: "+ media.setScale(2,2) + "\nMaior valor: " + maior + "\nMenor valor: "+menor);
		
		
	}
}
