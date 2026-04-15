package basic.ch05.sec03;

public class ArrayExample {
    static void main() {
        // 배열
        // 같은 타입의 데이터

        int[] arr1; // 배열변수 arr1 선언
        int[] arr2 = new int[] {1,2,3}; // 선언과 동시에 초기화
        int[] arr3 = {1,2,3}; // 생성자 생략가능



        arr1 = new int[] {1,2,3}; // 선언된 배열을 초기화할때는 이 방식만 가능

        System.out.println(arr1[0]);
        System.out.println(arr1[1]);
        System.out.println(arr1[2]);
    }
}
