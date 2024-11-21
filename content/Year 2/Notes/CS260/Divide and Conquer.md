Instead of the greedy approach, we can design algorithms with a *divide and conquer* strategy. This is algorithms which: 
- Divide a problem into 2 or more subproblems
- Solve each problem recursively
- Combine the solutions to the subproblems 
A classic example of this is *merge sort*. There are two ways to analyse the runtime of merge sort: one with induction, and one with a recurrence tree. 

### Recurrence Tree 
In merge sort, we recursively divide a list of $n$ elements into 2 subproblems of size $\frac{n}{2}$, then combine them in linear time. Hence, we make $c \cdot n = )(n)$ computation steps at each level of the recurrence, where $c$ is some constant: 
- Level 0 (the full list) = $cn$
- Level 1 (2 sublists) = $2 \cdot \frac{cn}{2} = cn$ 
- Level 2 (4 sublists) = $4 \cdot \frac{cn}{4} = cn$
And so on

The recurrence tree has $\log_2(n)$ levels, since the base case occurs when we reach problems of size 1. Therefore, the time complexity is upper bounded by 
$$(n \cdot \log_2(n)) = O(n \cdot \log(n))$$
### Substitution with Induction
Alternatively, we can prove the recurrence algebraically by expressing it with the recurrence 
$$T(n) = \begin{cases} 1 & \text{if } n = 1 \\ 2 \cdot T(\frac{n}{2}) + O(n) & \text{if } n > 1 \end{cases}$$
Suppose the upper bound is of the form $kn \cdot \log_b(b)$ for some constants $k$ and $b$. We will, by induction, attempt to prove that 
$$T(n) \le kn \cdot \log_b(n)$$ From the recurrence, we have $T(2) < 2(c + 1)$ for some constant $c$. If we pick $b= 2$ and some $k > c$, then $2(c + 1) \le 2k \cdot \log_2(2) + 2$, hence the statement holds for $n = 2$

Assuming the statement holds for $T(\frac{n}{2})$, we can show it holds for $T(n)$
$$T(n) \le 2 \cdot T(\frac{n}{2}) + cn \le 2k \cdot \frac{n}{2} \log_2 (\frac{n}{2}) + cn$$

This simplifies to:
$$T(n) \le kn \cdot \log_2(n) + (c - k)n \le kn \cdot log_2(n)$$
Hence, by induction, $T(n) = (n \cdot log(n))$

## The Master Theorem 
We can form upper bounds of a general form for divide-and-conquer problems with "balanced" recursion trees using *The Master Theorem*
Specifically, when we have problems which: 
- Divide an input of size $n$ into $A$ parts of size $\frac{n}{B}$ where $B \ge 2$
- Solve the $A$ parts of $\frac{n}{B}$ recursively 
- Combine the results in $O(n^c)$ for some $c \ge 0$
In other words, The Master Theorem deals with runtimes in the form 
$$T(n) = A \cdot T(\frac{n}{B}) + O(n^c)$$
The overall runtime is dependent on the relationship between $c$ and $\log_B(A)$
$$
T(n) =
\begin{cases} 
O(n^c) & c > \log_BA \\
O(n^{\log_BA}) & c < \log_BA\\
O(n^c \cdot \log n) & c = \log_BA
\end{cases}
$$
## Fast Integer Multiplication
A subtle algorithmic problem is that of integer multiplication. Suppose we multiply two integers $x$ and $y$. The length of $x$ and $y$ is logarithmic in the base they're represented in. For example, the binary number $100$ is $4$ times larger than the binary number $1$, and it requires $\log_2(4) - \log_2(1) = 2$ more digits to represent. 

Traditional long multiplication takes $O(n^2)$ time - can we do any better? 

### Karatsuba Multiplication 
It was shown in 1960 by a Russian mathematics student Anatoly Karatsuba that we can. His method makes use of divide and conquer to reduce the number of individual multiplications required to compute a product of two integers. 

To multiply two number with a representation of length $n$ in base $B, we can split each number into the lower half of its bits (which have the subscript $L$ below), and the upper half of its bits (with subscript $H$). To account for the bit shift we need an extra factor of $B^{\frac{n}{2}}$ for the upper components, but note these are quick to compute as left/right bitshifts can be done in constant time. 

$$
(x_H B^{\frac{n}{2}} + x_L)(y_H B^{\frac{n}{2}} + y_L)
= x_L y_L + x_H y_H B^n + B^{\frac{n}{2}}(x_L y_H + x_H y_L)
$$
Having performed two multiplications to achieve values for $x_L y_L$ and $x_H y_H$, we can see only one further multiplication is required:
$$
(x_Ly_L + x_Hy_L) = (x_L + x_H)(y_L + y_H) - x_Ly_L - x_Hy_H
$$
This yields the recurrence $T(n) = 3 \cdot T(\frac{n}{2}) + O(n)$, which is equal to $O(n^{\log_3(2)})$ by the Master Theorem (which is better than the $O(n^2)$ solution we started with). 


