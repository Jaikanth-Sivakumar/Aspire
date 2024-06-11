import java.util.Queue;
import java.util.LinkedList;

public class queue {
    public static void main(String args[]){
        Queue<Integer> numbers=new LinkedList<Integer>();

        //Enqueue
        numbers.offer(1);
        numbers.offer(2);
        numbers.offer(3);
        System.out.println(numbers);

        //Dequeue
        int removenumber=numbers.poll();
        System.out.println(removenumber);

        System.out.println(numbers);
    }
}
