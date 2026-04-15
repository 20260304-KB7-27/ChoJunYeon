package basic.ch04;

public class forExample {

    static void main() {
        // for(초기값 ; 조건식 ; 증감식;) {}

        for (int i = 1 ; i <= 9 ; i++) {
            if (i%2 == 0) {
                // 짝수가 아닐때

                // 이번 회차 반복만 건너뜀
                // break;
                continue;
            }
            System.out.println(i);
        }
    }
}
