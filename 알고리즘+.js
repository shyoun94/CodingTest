
        let a = [1] // 비교 : 0
        let b = [2, 3] // 비교 : 1
        let c = [3, 2, 1] // [2,3,1] ==> [2,1,3] 비교 : 2
        let d = [4, 3, 2, 1]// [3,4,2,1] ==> [3,2,4,1] ==> [3,2,1,4] 비교 : 3
        // 정렬이 처리되는 과정이 마치 거품이 올라오는 모습과 같다고 하여 버블 정렬이라고 합니다.

        let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];
        // let myArr2 = [10, 9, 8, 5, 6];

        // function bubbleSort(arr) {
        //     for (let index = 0; index < arr.length - 1; index++) {
        //         // 원소의 위치를 변경해줍니다.
        //         if (arr[index] > arr[index + 1]) {
        //             // let temp = arr[index];
        //             // arr[index] = arr[index + 1];
        //             // arr[index + 1] = temp;

        //             [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        //         }
        //         console.log(arr);
        //     }
        //     return arr
        // }

        // // let result = bubbleSort(myArr);


        // function bubbleSortAdvanced(arr) {
        //     for (let index = 0; index < arr.length - 1; index++) {
        //         for (let index2 = 0; index2 < arr.length - 1; index2++) {
        //             // 원소의 위치를 변경해줍니다.
        //             if (arr[index2] > arr[index2 + 1]) {

        //                 [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
        //             }
        //             console.log(arr);
        //         }
        //     }
        //     return arr
        // }

        // let result2 = bubbleSortAdvanced(myArr2);

        let myArr2 = [6, 7, 1, 8, 9, 10];

        function bubbleSortAdvanced2(arr) {
          // let isSorted = true;
            for (let index = 0; index < arr.length - 1; index++) {
              let isSorted = true;
                for (let index2 = 0; index2 < arr.length - index; index2++) {
                    // 원소의 위치를 변경해줍니다.
                    if (arr[index2] > arr[index2 + 1]) {
                        isSorted = false;
                        [arr[index2], arr[index2 + 1]] = [arr[index2 + 1], arr[index2]];
                    }
                    
                    console.log(arr);
                }
                if(isSorted) break;
            }
            return arr
        }

        bubbleSortAdvanced2(myArr2)