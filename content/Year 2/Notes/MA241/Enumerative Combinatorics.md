← Back to the [[MA241 - Combinatorics|Module Overview]]
- - -
# Balls and Boxes 

> [!note] Example 1
> Suppose we have $k$ labelled balls (i.e., they are labelled with the integers $1,...,k$), and $n$ labelled boxes (i.e. they are labelled with the integers $1,...,n$) How many different ways are there to distribute the balls in the boxes, if every ball has to go in a box, and every box can hold arbitrarily many balls?
> The answer to this problem is $n^k$. For the first of the $k$ balls, there are $n$ choices for where to put the ball. For the second ball, there are again $n$ choices. If we repeat this for each of the $k$ balls, we will find that each ball has a choice of $n$ boxes. Therefore, the total amount of ways to arrange the balls is $n \times n \times ... \times n$, $k$ times ($= n^k$).

# Counting Orderings 
Like before, suppose we have $k$ labelled balls and $n$ labelled boxes, with the new conditions that $n = k$ and that each of the $n$ boxes has a capacity $1$. How many ways are there to distribute the balls into the boxes? 

> [!note]- Solution
> Apply the same strategy of considering each ball individually and in order. For the first ball, there are $n$ choices of where to place it. No matter which of the $n$ boxes we choose, the second ball will have $n - 1$ choices for its placement, and so on, down to $1$ choice for the $kth$ ball. 
> This gives the answer $$n \cdot (n - 1) \cdot ... 2 \cdot 1 = \displaystyle \prod_{i = 1}^{n} i$$
> This expression comes up regularly


>[!warning] **DEFINITION** factorial
>Let $n$ be a positive integer. We define the *factorial* of $n$, denoted $n!$, to be the product of positive integers at most $n$. That is, $$n! = 1 \cdot 2 \cdot ... \cdot (n - 1) \cdot n = \displaystyle \prod_{i = 1}^{n} i$$
>We also define $0! = 1$

# Counting Subsets

How many ways are there to choose 3 distinct objects out of a total of 10? 

> [!note]- Solution
> Using the previous strategy, there are 10 choices for the first object. No matter which of the 10 was chosen, there are then 9 choices for the second, and 8 for the third. This would give the answer as $$10 \cdot 9 \cdot 8 = \frac{10!}{7!}$$
> However, we have overcounted - this is the number of of ways we can pick 3 objects if these objects are *labelled*. Therefore, we know how much we have overcounted by - the number of permutations of the 3 objects. The correct answer, factoring in the permutations, is $$\frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = \frac{10!}{7!3!} = 120$$

> [!warning] **PROPOSITION**
> Let $n$ be a positive integer, and let $k \le n$ be a nonnegative integer. The number of ways to distribute $k$ unlabelled balls into $n$ labelled $capacity - 1$ boxes is $\frac{n \cdot (n - 1) \cdot ... \cdot (n - (k - 1))}{k \cdot (k - 1) \cdot ... \cdot 2 \cdot 1} = \frac{n!}{k!(n - k)!}$
> 

> [!warning] **DEFINITION** n choose k
> Let $n \ge k$ be positive integers. We define *n choose k*, written $n \choose k$, to be the quantity $\frac{n!}{k!(n-k)!}$. The value $n \choose k$ is also called a "binomial coefficient". 

**Notes on $n \choose k$:**
- ${n \choose k} = {n \choose n - k}$
- ${n \choose 0} = {n \choose n} = 1$
- We can write out all the binomial coefficients using "Pascal's Triangle"

> [!warning] **PROPOSITION**
> ${n \choose k} = {n - 1 \choose k} + {n - 1 \choose k - 1}$
> There are 2 ways to prove this:
>> [!note]- Proof 1
>> 
>> $$\frac{(n - 1)!}{k!(n - k - 1)!} + \frac{(n - 1)!}{(k - 1)!(n - k)!} = \frac{(n - 1)!((n - k) + k)}{k!(n - k)!} = \frac{n!}{k!(n - k)!}$$
>
>> [!note]- Proof 2
>> 
>> Suppose we want to choose $k$ things out of $n$ choices. We can choose the first one, then choose $k - 1$ things out of $n - 1$ choices, or we can *not* choose the first one, and choose $k$ things out of $n - 1$ choices.
>> 

Now consider that you are allowed to choose any number of objects - i.e. distribute 10 labelled balls into 2 labelled boxes with arbitrary capacity: "chosen" and "not chosen". There is another way to present this - there are 10 unlabelled balls, and there are 11 labelled boxes - one for each of the balls (each with capacity 1), and one "not chosen" box (with capacity $\infty$). We have already shown that for labelled balls and labelled boxes with arbitrary capacity, the answer is $n^k$ - in this case, the answer is $2^{10}$ (Note that one of these options is to choose none of the balls).

We can also answer this in a different way - it is the number of 0 ball choices (${10 \choose 0} = 1$), plus the number of 1 ball choices (${10 \choose 1} = 10$) plus the number of 2 ball choices (${10 \choose 2} = 45$) and so on. From this, we can derive a formula: $$2^n = \displaystyle \sum_{k = 0}^{n} {n \choose k}$$
> [!warning]  **THEOREM** Binomial Theorem
> Let $n$ be a positive integer. Then: $$(a + b)^n = \displaystyle \sum_{k = 0}^{n} {n \choose k}a^kb^{n - k}$$
>> [!note] Example
>> $$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$
> 
>> [!note]- Proof
>> 
>> Specifying any term of $(a + b)(a + b)...(a + b)$ consists of choosing, for each factor, either the $a$ or the $b$. There are $n \choose k$ ways to choose $k$ $a$s and $n - k$ $b$s. 

> [!warning] **PROPOSITION** 
> Suppose we have $n$ labelled boxes, and $n$ balls - $k_1$ labelled with colour $c_1$, $k_2$ labelled with colour $c_2$, and so on up to $k_r$ labelled with colour $c_r$, where$k_1 + k_2 + ... + k_r = n$. Then the number of distinct ways to distribute the balls among the boxes is $\frac{n!}{k_1!k_2!...k_r!}$

We give this quantity a symbol in analogy with binomial coefficients: ${n \choose k_1, k_2, ..., k_r}$, and call it a *multinomial coefficient*:

> [!warning] **THEOREM** Multinomial Theorem
> Let $n$ be a positive integer. Then $$(a_1 + ... + a_r)^n = \displaystyle \sum_{k_1 + ... + k_r = n} {n \choose k_1, ..., k_r}a_1^{k_1}...a_r^{k_r}$$

# Types of Functions

Recall that if $K$ and $N$ are sets, a *function* $f: K \to N$ assigns a single element of $N$ to each element of $K$. There are some important classes of functions: 

> [!warning] **DEFINITION** Injective
> A function $f: K \to N$ is *injective* or *one-to-one* if it takes each value at most once. That is, we never have $f(k_1) = f(k_2)$ for $k_1 \ne k_2, k_1, k_2 \in K$
> It is only possible to have such a function if $K$ has at most as many elements as $N$, i.e $|K| \le |N|$

> [!warning] **DEFINITION** Surjective
> A function $f: K \to N$ is *surjective* or *onto* if it takes each value at least once - i.e. if every $n \in N$ is equal to $f(k) for some $k \in K$. 
> It is only possible to have such a function if $K$ has at least as many elements as $N$, i.e. $|K| \ge |N|$

> [!warning] **DEFINITION** Bijective
> A function $f: K \to N$ that is both injective and surjective is called *bijective*. 
> It is only possible to have such a function if $|K| = |N|$. 
>> [!note] Note
>> 
>> A function is bijective if and only if it has an *inverse* - A function $f: K \to N$ is bijective if and only if there exists a function $g: N \to K$ such that $f \circ g = id_N$, and $g \circ f = id_K$, where $id_n:N \to N$ and $id_K: K \to K$ are the identity functions. 
>
>> [!note] Example
>> 
>> Here is a bijection $f$ from $K = \{1, 2, 3\}$ to $N = \{A, B, C\}$:
>> $$f(1) = A, f(2) = C, f(3) = B$$

# Counting Surjections

>[!note] Notation
> For brevity, we will denote $\{1,...,k\}$ and $\{1,...,n\}$ as $[k]$ and $[n]$ respectively. Note that 0 is not included, and $[0]$ is the empty set $\emptyset$ 


We have counted functions $[k] \to [n]$ (there are $n^k$ of them), as well as injective functions ($\frac{n!}{(n-k)!}$, assuming $k \le n$, and 0 otherwise), and bijective functions ($n!$ assuming $n = k$, otherwise 0). What about surjective functions? 

Surjective functions are harder to count. Let's define $\operatorname{Surj}(k, n)$ to be the number. 

>[!note] Example
>Let $n = 4$ and $k = 2$. We could put 3 balls in one box and 1 ball in another (8 ways), or we could put 2 balls in each box (6 ways). 

# Inclusion-Exclusion 


>[!note] Example
>250 students are taking Combinatorics, and 350 students are taking Algebra. How many students are taking at least one of the 2? The answer could be anywhere from 250 (every Combinatorics student also takes algebra) to 600 (no student takes both). To get the right answer, we need to subtract the number of students taking both to avoid double-counting them: $|A_1 \cup A_2| = |A_1| + |A_2| - |A_1 \cap A_2|$

Now what about $|A_1 \cup A_2 \cup A_3|$? Concretely:
Suppose 250 students are taking Combinatorics, 300 are taking Analysis, and 250 are taking Algebra. How many students in total are taking at least one of the three? To count, we could add $250 + 300 + 350 = 900$, but clearly we have overcounted, as some students will have been counted more than once. 

How much did we overcount by? Suppose 140 students do both Combinatorics and Algebra, 225 students do both Algebra and Analysis, and 175 students do both Analysis and Combinatorics. Furthermore, suppose 125 students are taking all 3 modules. So we have counted 125 students 3 times, and $15 + 100 + 50 = 140 + 224 + 175 - 3 \cdot 125 = 165$ students twice. Overall, we have overcounted by $165 + 125 \cdot 2 = 415$, so the total number of students is $900 - 415 = 485$. 

> [!warning] **THEOREM** inclusion-Exclusion Theorem
> Let $A_1, ..., A_r$ be sets. Then
> $$|A_1 \cup ... \cup A_r| = \displaystyle \sum_{I \subseteq \{1,..., r\}, I \ne \emptyset} (-1)^{|I| - 1}|\displaystyle \bigcap_{i \in I} A_i |$$
> 
>> [!note]- Proof
>> 
>> We need to see why each element of $A_1 \cup ... \cup A_r$ gets counted exactly once in total on the right side. Let $J \subseteq \{1,...,r\}$ be the set of $A_i$s containing element $x$ (in other words, the set of modules a student $x$ is enrolled in). Then $x$ gets counted as $+1$ in term $I$ for all $I \subseteq J$ with an odd number of elements, and $x$ gets counted as $-1$ in term $I$ for all nonempty $I \subseteq J$ with an even number of elements. 
>> 
>> Overall, $x$ gets counted 
>> $${|J| \choose 1} - {|J| \choose 2} + {|J| \choose 3} - {|J| \choose 4} + ... + (-1)^{|J| + 1}{|J| \choose |J|}$$
>> This is the same as 
>> $${|J| \choose 0} + \displaystyle \sum_{k = 0}^{|J|} (-1)^{k + 1} {|J| \choose k} = {|J| \choose 0} + 0^{|J|}$$
>> Where the last equality is by expanding $(-1 + 1)^{|J|}$ using the binomial theorem. Thus, $x$ gets counted altogether ${|J| \choose 0} = 1$ time. 
## Application of Inclusion-Exclusion - Counting Surjections
Back to the problem of counting surjections $[k] \to [n]$. We have discovered it may be easier to count functions that are *not* surjections, but how can we break up this set as much as possible? 

How can a function fail to be surjective? It must miss some element $i \in [n]$ - so the set of non-surjective functions is precisely the union, over $i \in [n]$, of functions that miss $i$. 

Define $A_i$ to be the set of functions missing $i$. Now lets try to apply inclusion-exclusion. $A_i$ is the set of functions $[k] \to [n] \backslash \{i\}$, so $|A_i| = (n - 1)^k$. 

We also need to calculate $|A_i \cap A_j|$. $A_i \cap A_j$ is the set of functions $[k] \to [n] \backslash \{i, j\}$, so $|A_i \cap A_j| = (n - 2)^k$

We can calculate any term of the inclusion exclusion formula: $|\bigcap_{i \in I} A_i| = (n - |I|)^k$. So the number of *non*-surjections $[k] \to [n]$ is 
$$\displaystyle \sum_{I \subseteq [n], I \ne \emptyset}(-1)^{|I| + 1}(n - |I|)^k$$
Subtracting this from the total number of functions gives $\operatorname{Surj}(k, n)$: 
$$\operatorname{Surj}(k,n) = n^k - \displaystyle \sum_{I \subseteq [n], I \ne \emptyset}(-1)^{|I| + 1}(n - |I|)^k = \displaystyle \sum_{I \subseteq [n]} (-1)^{|I|}(n - |I|)^k$$

We can simplify this formula (to remove having to sum over a very large set) by grouping terms with the same size $I$, as follows: 
$$\operatorname{Surj}(k, n) = \displaystyle \sum_{I \subseteq [n]} (-1)^{|I|}(n - |I|)^k = \displaystyle \sum_{m = 0}^{n} \displaystyle \sum_{I \subseteq [n], |I| = m} (-1)^{|I|}(n - |I|)^k$$ $$= \displaystyle \sum_{m = 0}^{n} \displaystyle \sum_{I \subseteq [n], |I| = m} (-1)^m(n - m)^k$$
$$ = \displaystyle \sum_{m = 0}^{n} (-1)^m(n - m)^k \displaystyle \sum_{I \subseteq [n], |I| = m} 1$$
$$ = \displaystyle \sum_{m = 0}^{N} (-1)^m (n - m)^k {n \choose m}$$
To check, let's use the example from before: 
$$\operatorname{Surj}(4, 2) = 2^4 {2 \choose 0} - 1^4 {2 \choose 1} + 0^4 {2 \choose 2} = 16 - 2 + 0 = 14$$
We can also see that if $k = 1$ and $n > 1$, then 
$$ 0 = \operatorname{Surj}(k, n) = \displaystyle \sum_{m = 0}^{n} (-1)^m(n - M) {n \choose m}$$
Using ${n \choose m} = {n \choose n - m}$ and the substitution $j = n - m$ gives  
$$0 = (-1)^n \displaystyle \sum_{j = 0}^{n}(-1)^j j {n \choose j}$$

# Counting Set Partitions: Stirling Numbers 

What if we count surjections, but with unlabelled boxes. This can be interpreted as counting the ways of dividing $[k]$ into $n$ nonempty pieces. These numbers $S(k, n)$ are called the *Stirling numbers of the second kind*. If we think this through carefully, each surjection gets counted exactly $n!$ times, giving the formula: 
$$S(k, n) = \frac{1}{n!} \displaystyle \sum_{m = 0}^{n}(-1)^m(n - m)^k {n \choose m}$$
Similarly to the binomial coefficients, we can make observations by writing the Stirling numbers out in a triangle
> [!warning] **PROPOSITION**
> $S(k, n) = S(k - 1, n - 1) + nS(k - 1, n)$
>> [!note]- Proof
>> 
>> Does $1 \in [k]$ form a singleton block? If yes, there are $K(k - 1, n - 1) ways to partition the rest of the set. If no, removing $1$ yields a partition of $[k] \backslash \{1\} = \{2, ..., k \}$ into $n$ pieces, and $1$ must have come from one of these pieces. 
>
>> [!note] Notes
>> 
>> If we allowed empty parts, we would be partitioning $[k]$ into *at most* $n$ parts, which would form a summation. 

> [!note] Notation 
> For $k \ge o$, define the Bell numbers $B_k = \sum_{n = 0}^{k} S(k, n)$. That is, $B_k$ is the number of ways to partition $[k]$ into any number of parts. 
> The first few Bell numbers are $1, 1, 2, 5, 15, 52, 203, 877, 4140,...$

> [!warning] **PROPOSITION** 
> $$B_k = \displaystyle \sum_{n = 0}^{k - 1} {k - 1 \choose n} B_n$$
>> [!note]- Proof 
>> 
>> I'm lazy I'll do it later
# Stars and Bars 

If we have $k$ unlabelled balls, and $n$ labelled boxes (of arbitrary capacity), how many ways can we distribute the balls? 

> [!note] Example
> Let $k = 3$ and $n = 3$. The ways to arrange the balls are:
> 3 | 0 | 0     2 | 1 | 0     2 | 0 | 1     1 | 2 | 0     1 | 1 | 1
> 1 | 0 | 2     0 | 3 | 0     0 | 2 | 1     0 | 1 | 2     0 | 0 | 3
> 
> Which is the same as $x^3, x^2y, x^2z, xy^2 xyz, xz^2, y^3, y^2z, yz^2, z^3$
> 
> Note that we get a recursion $C_{k, n} = \sum_{i = 0}^{k} F_{k - i, n - 1}$
> 
> This example can be redrawn as follows: 
> \*\*\*||     \*\*|\*|     \*\*||*     \*|\*\*|     \*|\*|\*|
> \*||\*\*     |\*\*\*|     |\*\*|\*     |\*|\*\*     ||\*\*\*
> 
> They are sequences of 5 symbols, with 2 bars and 3 stars. That is, choose 3 stars out of 5 slots. 

> [!warning] **PROPOSITION**
> There are ${n + (k - 1) \choose n - 1}$ ways to distribute the balls.

# Generating Functions 

>[!warning] **DEFINITION** Ordinary and Exponential Generating Functions
> Let $(a_n)_{n \ge 0}$ be a sequence of numbers. The formal power series 
> $$ \displaystyle \sum_{n = 0}^{\infty} a_nx^n$$ 
> is called the *ordinary generating function* of $(a_n)_{n \ge o}$, and the formal power series 
> $$\displaystyle \sum_{n = 0}^{\infty}a_n \frac{x^n}{n!}$$
> is called the *exponential generating function* of $(a_n)_{n \ge 0}$
> Where "formal" means we haven't checked whether the power series has a nonzero radius of convergence. 

> [!note] Example 
> Let $f_n$ denote the $n$th Fibonacci number, defined by $f_0 = f_1 = 1$ and $f_n = f_{n - 1} + f_{n - 2}$ for $n \ge 2$. 
> The generating function $F(x)$ for the Fibonacci numbers is as follows:
> $$F(x) = 1 + x + 2x^2 + 3x^3 + 5x^4 + 8x^5 + 13x^6 + 21x^7+...$$
> Note what happens when $F(x)$ is multiplied by $x$ and $x^2$. 
> $$xF(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7 + ...$$
> $$x^2 F(x) = x^2 + x^3 + 2x^4 + 3x^5 + 5x^6 + 8x^7 + ...$$
> Using the recursion we see that $1 + xF(x) + x^2F(x) = F(x)$. We can solve for $F(x)$ to get $F(x) = \frac{1}{1 - x - x^2}$.

Note: I am so confused what the fuck is this shit 

# Integer Partitions 

Let $k \le n$ be positive integers. How many ways are there to divide $n$ unlabelled balls into $k$ unlabelled boxes so that each box gets a ball? Now all that matters is the number of balls in each box. This is the number of ways to write the integer $n$ as a sum of $k$ positive integers (without caring about the order). We call this number $p_k(n)$. 

> [!note] Example
> There are 8 partitions of 10 into 3 parts:
> $8 + 1 + 1, 7 + 2 + 1, 6 + 3 + 1, 6 + 2 + 2, 5 + 4 + 1, 5 + 3 + 2, 4 + 4 + 2, 4 + 3 + 3$

If we allow any number of boxes, we get $p(n)$, the number of partitions of $n$. 

>[!note] Example
>There are 7 partitions of 5:
>$5, 4 + 1, 3 + 2, 3 + 1 + 1, 2 + 2 + 1, 2 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1$

There are no good formulas for $p(n)$ or $p_k(n)$

> [!warning] **DEFINITION** Conjugate Partition
> Let $\lambda$ be a partition of $n$. The *conjugate partition* $\lambda^T$ of $\lambda$ is the partition corresponding to the reflection of the Ferrers diagram of $\lambda$ over the diagonal 
>> [!note] Example 
>> $4 + 1$ is conjugate to $2 + 1 + 1 + 1$. 
>> $3 + 1 + 1$ is conjugate to itself

>[!warning] **PROPOSITION**
>The number of partitions of $n$ into at most $k$ parts is equal to the number of partitions of $n$ into parts of size at most $k$
>>[!note]- Example
>>
>>The partitions of 7 into at most 3 pieces:
>>$7, 6 + 1, 5 + 2, 4 + 3, 5 + 1 + 1, 4 + 2 + 1, 3 + 3 + 1, 3 + 2 + 2$
>>The partitions of 7 into parts of size at most 3:
>>$3 + 3 + 1, 3 + 2 + 1, 3 + 2 + 1 + 1, 3 + 1 + 1 + 1 + 1, 2 + 2 + 2 + 1, 2 + 2 + 1 + 1 + 1, 2 + 1 + 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1 + 1 + 1$
>
>>[!note]- Proof 
>>
>> The two sets of partitions are related by conjugation

> [!warning] **PROPOSITION**
> The number of partitions of $n$ into distinct off parts is equal to the number of self-conjugate partitions of $n$
> 

 > [!warning] **PROPOSITION**
 > The number of partitions of $n$ into odd parts is equal to the number of partitions of $n$ into distinct parts
 >> [!note]- Example 
 >> 
 >> Let $n = 8$
 >> Odd parts: $7 + 1, 5 + 3, 5 + 1 + 1 + 1, 3 + 3 + 1 + 1, 3 + 1 + 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1$
 >> Distinct parts: $8, 7 + 1, 6 + 2, 5 + 3, 5 + 2 + 1, 4 + 3 + 1$
 >
 >>[!note]- Proof 
 >> Using $(1 + x^i) = \frac{1 - x^{2i}}{1 - x^i}$, we have 
 >> $$ \displaystyle \sum_{n \ge 0} p_{distinct}(n)x^n = \displaystyle \prod_{i \ge 1}(1 + x^i) = \displaystyle \prod_{i \ge 1} \frac{1 - x^{2i}}{1 - x^1}$$
 >> $$= \frac{(1- x^2)(1 - x^4)(1 - x^6)...}{(1 - x)(1 - x^2)(1 - x^3)...}$$
 >> $$=\frac{1}{(1 - x)(1 - x^3)(1 - x^5)...} = \displaystyle \sum_{n \ge 0}p_{odd}(n)x^n$$
 
# Catalan Numbers

>[!warning] **DEFINITION** Triangulation
>A *triangulation* of a regular $n$-gon is a collection of non-crossing diagonals that divide the $n$-gon into triangles.

>[!warning] **DEFINITION** Catalan Number
>The $n$th *Catalan number* $C_n$ is the number of triangulations of a regular $(n + 2)$-gon.

> [!warning] **DEFINITION** Balanced Sequence
> A *balanced sequence* of $n$ opening and $n$ closing parenthesis is a sequence such that every close-parenthesis has a matching open-parenthesis 

- - - 
Go to the [[Graph Theory|Next Topic]] →