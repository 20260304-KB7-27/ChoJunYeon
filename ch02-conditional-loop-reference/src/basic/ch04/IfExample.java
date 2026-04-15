package basic.ch04;

public class IfExample {

    static void main() {

        int score = 85;

        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 80) {

            if (score >= 85) {
                System.out.println("B+");
            } else {
                System.out.println("B");
            }
        } else {
            System.out.println("c");
        }
    }
}
