# 1.1 Divisibility of Integers 

An integer $a$ is said to be divisible by some integer $b$ (not 0) if there exists another integer $c$ such that $a = bc$. We express the fact that $a$ is divisible by $b$ by $b|a$ 

It is also given that 
$$b | a \cap c|b \rightarrow c|a$$
$$b|a \rightarrow bc|ac$$ $$c|a \cap c|b \rightarrow c|ma + nb$$ if $c \ne 0$ and $m,n \in \mathbb{Z}$

# 1.2 Prime Numbers 
A number $p$ is said to be prime if 
- $p > 1$ 
- $p$ has no positive divisors except $1$ and $p$ 
e.g. 37 is prime. 1 is *not* a prime
A number greater than 1 that is not prime is called *composite*.

**Theorem 1:** Every positive integer except 1 is a product of primes 
Either $n$ is prime, where there is nothing to prove, or $n$ has divisors between $1$ and $n$. If $m$ is the least of these divisors, then $m$ is prime, as otherwise: 
$$\exists l \text{ such that } 1 < l < m \text { and } l |m$$
and 
$$l | m \rightarrow l | n$$ 
which contradicts the definition of $m$. 
Hence, $n$ is prime or divisible by a prime less than $n$, which we will denote $p_1$. In this case, $n = p_1 n_1$ with $1 < n_1 < n$. Here, either $n_1$ is prime, in which case the proof is complete, or it is divisible by a prime $p_2$ less than $n_1$, giving $n = p_1 n_1 = p_1p_2n_2$ with $1 < n_2 < n_1 < n$.
Repeating the argument, we obtain a sequence of decreasing numbers $n, n_1, ... , n_{k-1},...,$, all greater than 1, for each of which the above presents itself. Eventually, we will reach a situation such that $n_{k-1}$ is prime, denoted $p_k$, giving the fact that $n = p_1p_2...p_k$. 

If $ab = n$, then $a$ and $b$ cannot **both** exceed $\sqrt{n}$. Therefore any composite $n$ is divisible by a prime $p$ not exceeding $\sqrt n$. 

The primes $p_1,p_2,...,p_k$ are not necessarily distinct or in any particular order. If they are arranged in increasing order with equal primes denoted as powers, we obtain $n$ in *standard form*. 

For example:
$$666 = 2 \cdot 3 \cdot 3 \cdot 37$$ $$666 = 2 \cdot 3^2 \cdot 37$$ 
# 1.3 The Fundamental Theorem of Arithmetic
**Theorem 1** doesn't state that the expression of $n$ as a product of primes is unique besides rearrangement of factors. 

**Theorem 2 (The Fundamental Theorem of Arithmetic):** The standard form of an integer $n$ is unique; apart from the rearrangement of factors, $n$ can be expressed as a product of primes in one way only. 

*Proof:* Suppose that $n = p_{1}^{a_1}p_{2}^{a_2}...p_{k}^{a_k} = q_1^{b_1}q_2^{b_2}...q_j^{b_j}$, each being a product of primes in standard form. Then $p_1|q_1^{b_1}...q_j^{b_j}$$ for every $i$, such that every $p$ is a $q$, and every $q$ is a $p$. Hence, $k = j$ and since both sets are arranged in increasing order, $p_i = k_i$ for every $i$. 
If $a_i > b_i$ and we divide by $p_i^{b_i}$, we obtain 
$$p_1^{a_1}...p_i^{a_i - b_i}...p_k^{a_k} = p_1^{b_1}...p_{i - 1}^{b_{i - 1}}p_{i+1}^{b_{i+1}}...p_k^{b_k}$$
The LHS is divisible by $p_i$ and the right hand side is not, which forms a contradiction. Similarly, $b_i > a_i$ forms a contradiction. It follows that necessarily $a_i = b_i$ and this completes the proof of Theorem 2.

If 1 were considered to be a prime, the fundamental theorem of arithmetic would not hold, as we could insert any number of unit factors. 

**Theorem 3 (Euclid's First Theorem):** If $p$ is prime, and $p|ab$, then $p|a$ or $p|b$. 
The proof of theorem 2 can be reduced to that of theorem 3. 

It is a clear corollary of Theorem 3 that 
$$p|abc...l \rightarrow p|a \text { or } p|b \text { or } p|c ... \text { or } p|l$$
and in particular that if $a, b...l$ are primes, then $p$ is one of them. 

# 1.4 The Sequence of Primes 

The first primes are 
$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 331, 37, 41, 43, 47, 53,...$$
It is easy to construct a table of primes up to a limit $N$ by a procedure known as the "sieve of Eratosthenes". 
We have seen that if $n \le N$ and  $n$ is not prime, then $n$ must be divisible by a prime not greater than $\sqrt N$. Now, we write the numbers
$$2, 3, 4, 5, 6, ..., N$$
and strike out successively 
- $4, 6, 8, 10,...,$, i.e. $2^2$ and every number following
- $9, 15, 21, 27,...,$, i.e. $3^2$ and then every multiple of 3 not yet struck out 
- $25, 35, 55, 65,...,$ i.e. $5^2$ (the square of the next remaining number after 3) and then every multiple of 5 not yet struck out
We continue this process until the next remaining number, after that whose multiples were struck out last, is greater than $\sqrt N$. The numbers which remain are primes. All present tables of primes have been constructed by modifications of this procedure. 

The tables indicate that the series of primes is infinite. 
**Theorem 4 (Euclid's Second Theorem):** The number of primes is infinite.
*Proof:* 

**Theorem 5:** There are blocks of consecutive composite numbers whose length exceeds any given number $N$. 

# 1.7 The Logarithmic Function 
The theory of the distribution of primes requires knowledge of the logarithmic function $\log x$. We take the ordinary analytic theory of logarithms and exponentials for granted except one property of $\log x$: since 
$$e^x = 1 +  x + ... + \frac{x^n}{n!} + \frac{x^{n+1}}{(x+1)!}+...$$ $$x^{-n}e^x > \frac{x}{(n+1)!} \rightarrow \infty$$
When $x \rightarrow \infty$. Hence, $e^x$ tends to infinity more rapidly than any power of $x$. It follows that $\log x$, the inverse function, tends to infinity more slowly than any positive power of $x$: $\frac{\log x}{x^\delta} \rightarrow 0$ or $\log x = o(x^\delta)$ for every positive $\delta$. 

# 1.8 Statement of the Prime Number Theory 
**Theorem 6 (The Prime Number Theorem):** The number of primes not exceeding $x$ is asymptotic to $\frac{x}{\log x}$. 
$$\pi(x) \sim \frac{x}{\log x}$$
This is the central theorem in the distribution of primes. The proof is given in chapter 22. 

**Theorem 7 (Tchebychev's Theorem):** The order of magnitude of $\pi(x)$ is $\frac{x}{\log x}$
