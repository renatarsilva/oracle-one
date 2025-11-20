public class Pessoa{
    public String nome;
    public String cpf;
    public String email;

    public String exibirDados(){
        return "nome: " + this.nome + "\n"+
                "CPF: " + this.cpf + "\n" +
                "email: "+ this.email +"\n";
    }

    public static void main(String[] args) {
        Pessoa andre = new Pessoa();
        andre.nome = "André da silva";
        andre.cpf = "123456-78";
        andre.email = "andre@email";
        System.out.println(andre.exibirDados());
    }

//    public static void main(String[] args) {
//        Pessoa maki = new Pessoa();
//        maki.nome = "Maki Zenin";
//        maki.cpf = "987654-32";
//        maki.email = "maki@email.com";
//        System.out.println(maki.exibirDados());
//    }
}