import java.util.ArrayList;
import java.util.Vector;

public class vector {
    public static void main(String[] args) {
       //vector is a part of list interface 
       //similar to array list
       //vector is synchronous - one by one operation
       //concorent modification exception - if we touch the finished collection

       Vector<String> employeeName = new Vector<String>();

        //insert
        employeeName.add("Jai");
        employeeName.add("Surya");
        employeeName.add("venky");
        employeeName.add(1,"prem");
        System.out.println(employeeName);

        //delete First
        String removedString=employeeName.removeFirst();
        System.out.println(removedString);

        //delete First
        removedString=employeeName.removeLast();
        System.out.println(removedString);

        //after deletion
        System.out.println(employeeName);

        //ArrayList
        ArrayList<String> employeeName1=new ArrayList<String>();
        employeeName1.add("kavi");
        employeeName1.add("sujith");
        employeeName1.add("kodi");
        employeeName1.add(1,"prasanth");
        System.out.println(employeeName1);
    }
    
}
