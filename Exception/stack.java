import java.util.Stack;

public class stack {
    public static void main(String args[]){
        Stack<String> employeeName=new Stack<String>();

        //insert
        employeeName.push("Jai");
        employeeName.push("Surya");
        employeeName.push("venky");
        employeeName.push("prem");
        System.out.println(employeeName);

        //delete
        String removedString=employeeName.pop();
        System.out.println(removedString);

        //after deletion
        System.out.println(employeeName);
    }
}
