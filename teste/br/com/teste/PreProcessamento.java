package br.com.teste;

import java.math.BigDecimal;
import java.util.ArrayList;

public class PreProcessamento {

	
	private ArrayList<Faturamento> lista;
	private ArrayList<Distribuidora> dis;
	
	public ArrayList<Faturamento> getLista() {
		lista = new ArrayList<Faturamento>();
		addDadosLista();
		return lista;
	}
	
	public ArrayList<Distribuidora> getDis() {
		dis = new ArrayList<Distribuidora>();
		addDadosDis();
		return dis;
	}
	
	void addDadosDis() {
		dis.add(new Distribuidora("SP", new BigDecimal("67836.43")));
		dis.add(new Distribuidora("RJ", new BigDecimal("36678.66")));
		dis.add(new Distribuidora("MG", new BigDecimal("29229.88")));
		dis.add(new Distribuidora("ES", new BigDecimal("27165.48")));
		dis.add(new Distribuidora("OUTROS", new BigDecimal("19849.53")));
	}
	
	void addDadosLista(){
		lista.add(new Faturamento(1, new BigDecimal("22174.1664")));
		lista.add(new Faturamento(2, new BigDecimal("24537.6698")));
		lista.add(new Faturamento(3, new BigDecimal("26139.6134")));
		////lista.add(new Faturamento(4, new BigDecimal("0.0")));
		//lista.add(new Faturamento(5, new BigDecimal("0.0")));
		lista.add(new Faturamento(6, new BigDecimal("26742.6612")));
		//lista.add(new Faturamento(7, new BigDecimal("0.0")));
		lista.add(new Faturamento(8, new BigDecimal("42889.2258")));
		lista.add(new Faturamento(9, new BigDecimal("46251.174")));
		lista.add(new Faturamento(10, new BigDecimal("11191.4722")));
		//lista.add(new Faturamento(11, new BigDecimal("0.0")));
		//lista.add(new Faturamento(12, new BigDecimal("0.0")));
		lista.add(new Faturamento(13, new BigDecimal("3847.4823")));
		lista.add(new Faturamento(14, new BigDecimal("373.7838")));
		lista.add(new Faturamento(15, new BigDecimal("2659.7563")));
		lista.add(new Faturamento(16, new BigDecimal("48924.2448")));
		lista.add(new Faturamento(17, new BigDecimal("18419.2614")));
	//	lista.add(new Faturamento(18, new BigDecimal("0.0")));
	//	lista.add(new Faturamento(19, new BigDecimal("0.0")));
		lista.add(new Faturamento(20, new BigDecimal("35240.1826")));
		lista.add(new Faturamento(21, new BigDecimal("43829.1667")));
		lista.add(new Faturamento(22, new BigDecimal("18235.6852")));
		lista.add(new Faturamento(23, new BigDecimal("4355.0662")));
		lista.add(new Faturamento(24, new BigDecimal("13327.1025")));
	//	lista.add(new Faturamento(25, new BigDecimal("0.0")));
	//	lista.add(new Faturamento(26, new BigDecimal("0.0")));
		lista.add(new Faturamento(27, new BigDecimal("25681.8318")));
		lista.add(new Faturamento(28, new BigDecimal("1718.1221")));
		lista.add(new Faturamento(29, new BigDecimal("13220.495")));
		lista.add(new Faturamento(30, new BigDecimal("8414.61")));
	}
}
