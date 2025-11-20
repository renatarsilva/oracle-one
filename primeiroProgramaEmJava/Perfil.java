package primeiroProgramaEmJava;

public class Perfil {
    public String nome;
    public String curso;

    public String exibir(){
        return "Oi " + this.nome + "seja bem vinda!" + "\n" +
                "seu curso é: " + this.curso + "!!";
    }

    public static void main(String[] args) {
        Perfil maki = new Perfil();
        maki.nome = "Maki Zenin";
        maki.curso = "Java, Oracle One";
        System.out.println(maki.exibir());
    }
}
