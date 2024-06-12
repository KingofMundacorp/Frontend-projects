package src;

public class car {
  public static void main(String[] args) {
        vroom myCar = new vroom("Toyota", "Camry", 2022);
        System.out.println("My car is a " + myCar.getYear() + " " + myCar.getMake() + " " + myCar.getModel() + ".");
        myCar.start();
        myCar.stop();  
    
}
}
