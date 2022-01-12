package br.com.teste;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;

public class Exercicio4{

	public static void main(String[] args) {
		
		ArrayList<Distribuidora> dis = new PreProcessamento().getDis();
		BigDecimal sum = Distribuidora.somaValores(dis);
	
		dis.forEach(d ->  {
			d.calcPorcent(sum);
			System.out.println("Porcentual de "+ d.estado + " é "+ d.getPorcentual().setScale(2, RoundingMode.HALF_DOWN) + "%");
		});
		
		
	}
	
}
