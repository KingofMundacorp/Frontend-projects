package src;

public class headphones {
    String charge = "micro usb";
    String[] controls = {"power","volume","skip","play/pause"};
    String color = "red/black";
    public boolean power = false;
    int volume = 0;
    public void poweron(){
        power = true;
    }
    public void poweroff(){
    System.out.println("false");
    }
    public void volumeup(){
        volume++;
    }
    public void volumedown(){
        volume--;
    }
    
}
