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


>[!warning] Definition (Factorial)
>Let $n$ be a positive integer. We define the *factorial* of $n$, denoted $n!$, to be the product of positive integers at most $n$. That is, $$n! = 1 \cdot 2 \cdot ... \cdot (n - 1) \cdot n = \displaystyle \prod_{i = 1}^{n} i$$
>We also define $0! = 1$

# Counting Subsets

How many ways are there to choose 3 distinct objects out of a total of 10? 

> [!note]- Solution
> Using the previous strategy, there are 10 choices for the first object. No matter which of the 10 was chosen, there are then 9 choices for the second, and 8 for the third. This would give the answer as $$10 \cdot 9 \cdot 8 = \frac{10!}{7!}$$
> However, we have overcounted - this is the number of of ways we can pick 3 objects if these objects are *labelled*. Therefore, we know how much we have overcounted by - the number of permutations of the 3 objects. The correct answer, factoring in the permutations, is $$\frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = \frac{10!}{7!3!} = 120$$

> [!warning] Proposition
> Let $n$ be a positive integer, and let $k \le n$ be a nonnegative integer. The number of ways to distribute $k$ unlabelled balls into $n$ labelled $capacity - 1$ boxes is $\frac{n \cdot (n - 1) \cdot ... \cdot (n - (k - 1))}{k \cdot (k - 1) \cdot ... \cdot 2 \cdot 1} = \frac{n!}{k!(n - k)!}$
> 

> [!warning] Definition (n choose k)
> Let $n \ge k$ be positive integers. We define *n choose k*, written $n \choose k$, to be the quantity $\frac{n!}{k!(n-k)!}$. The value $n \choose k$ is also called a "binomial coefficient". 

**Notes on $n \choose k$:**
- ${n \choose k} = {n \choose n - k}$
- ${n \choose 0} = {n \choose n} = 1$
- We can write out all the binomial coefficients using "Pascal's Triangle"

> [!warning] Proposition
> ${n \choose k} = {n - 1 \choose k} + {n - 1 \choose k - 1}$
> There are 2 ways to prove this:
>> [!note]- Proof 1
>> $$\frac{(n - 1)!}{k!(n - k - 1)!} + \frac{(n - 1)!}{(k - 1)!(n - k)!} = \frac{(n - 1)!((n - k) + k)}{k!(n - k)!} = \frac{n!}{k!(n - k)!}$$
>
>> [!note]- Proof 2
>> Suppose we want to choose $k$ things out of $n$ choices. We can choose the first one, then choose $k - 1$ things out of $n - 1$ choices, or we can *not* choose the first one, and choose $k$ things out of $n - 1$ choices.
>> 

Now consider that you are allowed to choose any number of objects - i.e. distribute 10 labelled balls into 2 labelled boxes with arbitrary capacity: "chosen" and "not chosen". There is another way to present this - there are 10 unlabelled balls, and there are 11 labelled boxes - one for each of the balls (each with capacity 1), and one "not chosen" box (with capacity $\infty$). We have already shown that for labelled balls and labelled boxes with arbitrary capacity, the answer is $n^k$ - in this case, the answer is $2^{10}$ (Note that one of these options is to choose none of the balls).

We can also answer this in a different way - it is the number of 0 ball choices (${10 \choose 0} = 1$), plus the number of 1 ball choices (${10 \choose 1} = 10$) plus the number of 2 ball choices (${10 \choose 2} = 45$) and so on. From this, we can derive a formula: $$2^n = \displaystyle \sum_{k = 0}^{n} {n \choose k}$$
> [!warning]  Theorem (Binomial Theorem)
> Let $n$ be a positive integer. Then: $$(a + b)^n = \displaystyle \sum_{k = 0}^{n} {n \choose k}a^kb^{n - k}$$
>> [!note] Example
>> $$(a + b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$$
> 
>> [!note]- Proof
>> Specifying any term of $(a + b)(a + b)...(a + b)$ consists of choosing, for each factor, either the $a$ or the $b$. There are $n \choose k$ ways to choose $k$ $a$s and $n - k$ $b$s. 

> [!warning] Proposition 
> Suppose we have $n$ labelled boxes, and $n$ balls - $k_1$ labelled with colour $c_1$, $k_2$ labelled with colour $c_2$, and so on up to $k_r$ labelled with colour $c_r$, where$k_1 + k_2 + ... + k_r = n$. Then the number of distinct ways to distribute the balls among the boxes is $\frac{n!}{k_1!k_2!...k_r!}$

We give this quantity a symbol in analogy with binomial coefficients: ${n \choose k_1, k_2, ..., k_r}$, and call it a *multinomial coefficient*:

> [!warning] Theorem (Multinomial Theorem)
> Let $n$ be a positive integer. Then $$(a_1 + ... + a_r)^n = \displaystyle \sum_{k_1 + ... + k_r = n} {n \choose k_1, ..., k_r}a_1^{k_1}...a_r^{k_r}$$

# Types of Functions

Recall that if $K$ and $N$ are sets, a *function* $f: K \to N$ assigns a single element of $N$ to each element of $K$. There are some important classes of functions: 

> [!warning] Definition (Injective)
> A function $f: K \to N$ is *injective* or *one-to-one* if it takes each value at most once. That is, we never have $f(k_1) = f(k_2)$ for $k_1 \ne k_2, k_1, k_2 \in K$
> It is only possible to have such a function if $K$ has at most as many elements as $N$, i.e $|K| \le |N|$

> [!warning] Definition (Surjective)
> A function $f: K \to N$ is *surjective*or *onto* if it takes each value at least once - i.e. if every $n \in N$ is equal to $f(k) for some $k \in K$. 
> It is only possible to have such a function if $K$ has at least as many elements as $N$, i.e. $|K| \ge |N|$

> [!warning] Definition (Bijective)
> A function $f: K \to N$ that is both injective and surjective is called *bijective*. 
> It is only possible to have such a function if $|K| = |N|$. 
> 












