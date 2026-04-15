package basic.ch04;

public class SwitchExample {
    static void main() {
        // Switch문
        // 특정 case별로 코드를 분기하고 싶을때 사용

        char grade = 'A';

//        switch (grade) {
//            case 'A' :
//            case 'a':
//                System.out.println("A입니다!");
//                break;
//            case 'B':
//            case 'b':
//                System.out.println("B입니다!");
//                break;
//            default:
//                System.out.println("C입니다!");
//        }

        // 개선된 switch문
        // 화살표 문법
        // break
        // 값 반환
        String result = switch (grade) {
            case 'A', 'a' -> {
                System.out.println("실행됨");
                yield "A입니다!";}
            case 'B', 'b' -> "B입니다!";
            default -> "C입니다!";
        };

        System.out.println(result);
    }
}
