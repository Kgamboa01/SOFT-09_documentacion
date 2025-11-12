public class HolaMundo{

    public static void main(String[] args){
        FileSystem.out.println("hola, mundo desde java");
        saludar("nombre");
        sumar(5, 3);
    }

    public static void saludar(String nombre) {
        System.out.println("Hola, " + nombre + ". Bienvenido al ejercicio de git y GitHub!");    
    }

    public static void sumar(int a, int b) {
        int resultado = a + b;
        System.out.println("La suma de " + a + " + " + b + " es: " + resultado);
    }
}