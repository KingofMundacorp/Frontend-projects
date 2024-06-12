package src;

public class loraine {
    public static void main(String args[]){
        cloth mycloth = new cloth(34,"gucci",23,40);
        System.out.println("size of cloth:"+mycloth.getsize());
        System.out.println("name of cloth :"+mycloth.getname());
        System.out.println("length and width of cloth:"+mycloth.getlength()+" x "+mycloth.getwidth());
         mycloth.clothworn();
          mycloth.clothtakenoff(); 
    }
    
}
