package primeiroProgramaEmJava;

import java.util.Random;
import java.util.Scanner;

public class JogoDaAdivinhacao {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int numeroSecreto = new Random().nextInt(5);


        int tentativa = -1;
        int contador = 0;


        while (tentativa != numeroSecreto) {

            System.out.println("Digite um número entre 0 e 5:");
            tentativa = sc.nextInt();
            contador++;

            if (tentativa > numeroSecreto) {
                System.out.println("O número secreto é MENOR que " + tentativa);
            } else if (tentativa < numeroSecreto) {
                System.out.println("O número secreto é MAIOR que " + tentativa);
            } else {
                System.out.println("Parabéns! Você acertou em " + contador + " tentativas!");
            }
        }
        System.out.println(numeroSecreto);

        sc.close();
    }
}