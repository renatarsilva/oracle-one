package primeiroProgramaEmJava;

import java.util.Scanner;

public class Leitura {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Qual seu nome?");
        String nome = sc.nextLine();

        System.out.println("Qual sua idade?");
        int idade = sc.nextInt();
        sc.nextLine();

        System.out.println("Digite sua cidade");
        String cidade = sc.nextLine();

        System.out.println("Digite seu sexo F ou M");
        String sexo = sc.nextLine();

        System.out.println(" Por favor confirme suas informações, nome: " + nome + "\n"
                            + "idade: " + idade + " cidade: " + cidade + " seu sexo: " + sexo
        );
    }
}
