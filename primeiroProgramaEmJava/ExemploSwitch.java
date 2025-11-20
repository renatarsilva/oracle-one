package primeiroProgramaEmJava;

public class ExemploSwitch {
    public static void main(String[] args) {
        int dia = 2 ;

        String diaDaSemana = switch (dia) {
            case 1 -> "Domingo";
            case 2 -> "Segunda-feira";
            case 3 -> "Terça-feira";
            default -> "Nenhum dia";
        }; System.out.println(diaDaSemana);
    }
}
