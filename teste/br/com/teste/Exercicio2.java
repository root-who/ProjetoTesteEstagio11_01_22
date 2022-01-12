package br.com.teste;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Exercicio2 {
	
	public static long fibonacci(int num) {
		if(num ==0 || num ==1) return num;
         else {
            return fibonacci(num - 1) + fibonacci(num - 2);
        }
	}
	
	public static int lerNmr() throws Exception {
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		int num = Integer.decode(input.readLine());
		return num;
	}
	
	public static void main(String[] args) throws Exception{
		System.out.println("Digite um número: ");
		try {
			int num = Exercicio2.lerNmr();
			for(int i = 0; i< Integer.MAX_VALUE; i++) {
				long fibo = Exercicio2.fibonacci(i);
				if(fibo > num) {
					System.out.println("Não é um numero de fibonacci");
					return;
				}
				if(fibo == num){
					System.out.println("É um numero de fibonacci");
					return;
				}
				
			}
		} catch (Exception e) {
			System.out.println("digite apenas numeros");
			Exercicio2.main(args);; 
		}	
	}
}
