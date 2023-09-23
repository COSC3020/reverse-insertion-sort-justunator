[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754414&assignment_repo_type=AssignmentRepo)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

The worst case can generally be written as a $\sum_{k=1}^{n-1} k$ where it would then turn into $\frac{\left(k-1\right)k}{2}$ using sumation formulas. https://www.cuemath.com/summation-formulas/.
From here we can simplify it down to $\frac{\left(k^{2}-k\right)}{2}$ and asymtotically, all the constants go away and $k^2$ grows faster than $k$ so $\Theta(k^2)$

For an average case, we can assume that only half of the array from the worst case is sorted. Because we are assuming half the array is sorted, array size 2 will guarenteed be sorted. We can obtain $\sum_{k=1}^{n-1} \frac{k + 1}{2}$ and using more sumation formulas, we can get $\frac{\left(k-1\right)\left(k+2\right)}{4}$ = $\frac{\left(k^{2}+k-2\right)}{4}$
Asymtotically, $\Theta(k^2)$ so the average case and worst case have the same complexity.