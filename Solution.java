import java.util.*;
public class Solution {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int arr[] = new int[n];
        for (int i = 0; i<n; i++){
            arr[i] = sc.nextInt();
        }
            for (int i = 0; i<n; i++){
                if (arr[i] == k) {
                    int res = 0;
                    if (arr[i] == (k-1)) {
                        if (arr[i] == (k-2)) {
                            res++;
                    }
                    System.out.println(res);
                }        
            }
        }
    }
}