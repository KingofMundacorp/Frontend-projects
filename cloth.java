package src;
public class cloth {
    private int length;
    private String name;
    private int size;
    private int width;

    public cloth(int length,String name,int size,int width){
        this.length = length;
        this.name = name;
        this.size = size;
        this.width = width;
    }
    public int getlength(){
        return length;
    }
    public void setlength(int length){
        this.length = length;
    }
    public String getname(){
        return name;
    }
    public void setname(String name){
        this.name = name;
    }
    public int getsize(){
    return size;
    }
    public void setsize(int size){
    this.size = size;
    }
    public int getwidth(){
    return width;
    }
    public void setwidth(int width){
    this.width = width;
    }
    public void clothworn(){
    System.out.println("the "+name+" deluxe  has been worn");
    }
    public void clothtakenoff(){
    System.out.println("the "+name+" deluxe has been taken off");
    }

    
}
