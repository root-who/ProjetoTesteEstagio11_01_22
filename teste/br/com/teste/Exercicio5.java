package br.com.teste;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;





public class Exercicio5 {
	
	public static String reverter(String toRevert) {
		StringBuilder nova = new StringBuilder();
		for(int i=toRevert.length()-1 ; i>=0; i--) {
			nova.append(toRevert.charAt(i));
		}
		
		return nova.toString();
	}
	
	public static void main(String[] args) throws IOException {
		
		
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Digite algo para ser invertido: ");
		try {
			String toReverse = input.readLine();
			String reversed = Exercicio5.reverter(toReverse);
			System.out.println("Ao contrario: "+ reversed);
		} catch (Exception e) {
			System.out.println("Opss.. houve algum erro");
			System.out.println(e.getMessage());
		}
		
		
		
		
		
	}

}
