package primeiroProgramaEmJava;

import java.util.Scanner;

public class Desafios {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Digite um número");
        int numero = sc.nextInt();

        String escolha = (numero % 2 == 0) ? "número positivo" : "número negativo";
        System.out.println(escolha);
    }
}
