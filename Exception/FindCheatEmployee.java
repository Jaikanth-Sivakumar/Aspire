public class FindCheatEmployee{
    public static void main(String[] args){
     for (int EmployeeInX = 0; EmployeeInX < 5; EmployeeInX++) {
      try {
       for (int EmployeeInY = 0; EmployeeInY < 5; EmployeeInY++) {
        try {
         if (EmployeeInY == 2) {
          System.out.println("The persons of employee id" + EmployeeInX + " and" + EmployeeInY + "are different");
         }
        } 
        catch (Exception innerException) {
         System.err.println("Error in inner loop: " + innerException.getMessage());
        } 
        finally {
         System.out.println("Finally block for inner loop: j=" + EmployeeInY);
        }
                   }
               } catch (Exception outerException) {
                   System.err.println("Error in outer loop: " + outerException.getMessage());
               } finally {
                   System.out.println("Finally block for outer loop: i=" + EmployeeInX);
               }
           }
       }
   }