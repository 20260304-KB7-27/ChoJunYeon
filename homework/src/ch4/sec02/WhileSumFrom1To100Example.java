package ch4.sec02;

public class WhileSumFrom1To100Example {
    public static void main(String[] args) {
        int i = 1;
        int sum = 0;
        while (i <= 100) {
            sum += i;
            i++;
        }
        System.out.println("1~100 합 : " + sum);
    }
}
