# 2.1 First Proof of Euclid's Second Theorem
Euclid's Proof of Theorem 4 is as follows: 

Let $2, 3, 5,..., p$ be the aggregate of primes up to $p$, and let 
$$q = 2 \cdot 3 \cdot 5 ... p + 1 \qquad (2.1.1)$$ Then $q$ is not divisible by any of the numbers $2, 3, 5, ..., p$. It is therefore either prime, or divisible by a prime between $p$ and $q$. In either case there is a prime greater than $p$, which proves the theorem. The theorem is equivalent to 
$$n(x) \rightarrow \infty$$
# 2.2 Further Deductions from Euclid's Argument 
If $p$ is the $n$th prime $p_n$ and $q$ is defined as above. It is plain that 
$$q < p_n^n + 1$$
for $n > 1$, and so that 
$$p_{n+1} < p_n^n + 1$$
This inequality enables us to assign an upper limit to the rate of increase of $p$, and a lower limit to that of $\pi(x)$.
We can obtain better limits as follows. Suppose that 
$$p_n < 2^{2^n}$$
for $n = 1, 2,...,N$. Then Euclid's argument shows that
$$p_{N+1} \le p_1p_2...p_N + 1 < 2^{2+4+...+2^N}+1<2^ {2^{N+1}}$$
Since $p_n < 2^{2^N}$ for $n = 1$, it is true for all $n$.
Suppose now that $n \ge 4$ and 
$$e^{e^{n - 1}} < x \le e^{e^n}$$ $$e^{n--1} > 2^n, \qquad e^{e^{n-1}} > 2^{e^n}$$And so 
$$\pi(x) \ge \pi(e^{e^{n-1}}) \ge \pi(2^{2^n}) \ge n$$by $p_n < 2^{2^n}$ Since $\log (\log x) \le n$ we deduce that 
$$x(x) \ge \log(\log x)$$
for $x > e^{e^3}$ and it is clear that the inequality holds also for $2 \le x \le e^{e^3}$ 
We have therefore proved:
**Theorem 10:** $\pi(x) \ge \log(\log x) \qquad (x \ge 2)$
We have thus gone beyond Theorem 4 and found a lower limit for the order of magnitude of $\pi(x)$. The limit is of course an absurdly weak one, since for $x = 10^9$ it gives $\pi(x) \ge 3$, and the actual value of $\pi(x)$ over 50 million.
# 2.3 Primes in Certain Arithmetical Progressions 
Euclid/'s argument may be developed in other directions 
**Theorem 11:** There are infinitely many primes of the form $4n + 3$ 
Define $q$ by $q = 2^2 \cdot 3 \cdot 5 ... p - 1$ instead of by $(2.1.1)$. Then $q$ is of the form $4n+3$ and is not divisible by *any* of the primes up to $p$. It cannot be a product of primes $4n+1$ only, since the product of two numbers of this form is of the same form, and therefore it is divisible by a prime $4n+3$ greater than $p$.

**Theorem 12:** There are infinitely many primes of the form $6n+5$.
The proof is similar to that of theorem 11. We define $q$ by $q = 2 \cdot 3 \cdot 5 ... p-1$ and observe that any prime (other than 2 or 3) is $6n + 1$ or $6n+5$m and that the product of two numbers $6n + 1$ is of the same form. 
The progression $4n+1$ is more difficult. We must assume the truth of a theorem we will prove in 20.3

**Theorem 13:** If $a$ and $b$ have no common factor, then any odd prime divisor of $a^2 + b^2$ is of the form $4n+1$. 

**Theorem 14:** There are infinitely many primes of the form $8n + 5$.
We take $q = 32 \cdot 52 \cdot 7^2 ... p^2 + 2^2$ a sum of 2 squares which have no common factor. The square of an odd number $2m + 1$ is $4m(m+1)+1$, and is $8n+1$, so $q$ is $8n+1$ or $8n+5$, and that the product of 2 numbers $8n+1$ is of the same form, we can complete the proof as before.

All of the above theorems are particular cases of a famous theorem of Dirichlet

**Theorem 15 (Dirichlet's  Theorem):** If $a$ is positive and $a$ and $b$ have no common divisors except 1, then there are infinitely many primes of the form $an + b$ 
# 2.4 Second Proof of Euclid's Theorem
The second proof of Theorem 4 depends on a property of Fermat's numbers.
Fermat's numbers are defined by
$$F_n = 2^{2^n} + 1$$ and so $F_1 = 5, F_2 = 17, F_3=257, F_4 = 65537$ 
The relevant property of Fermat numbers is as follows:
**Theorem 16:** No two Fermat numbers have a common divisor greater than 1 
Suppose that $F_n$ and $F_{n + k}$, where $k > 0$ are two Fermat numbers, and that 
$$m|F_n,\qquad m|F_{n+K}$$ If $x = 2^{2^n}$ we have
$$\frac{F_{n+k} - 2}{F_n} = \frac{2^{2^{n-k}} - 1}{2^{2^n}+1} = \frac{x^{2^k} - 1}{x+1} = x^{2^k - 1}-x^{2^k - 2}+...-1$$
And so $F_n | F_{n+1} - 2$. Hence
$$m|F_{n+k}, \qquad m|F_{n+k} - 2$$ And therefore $m|2$. Since $F_n$ is odd, $m = 1$, proving the theorem
It follows that each of the numbers $F_1, F_2,...,F_n$ is divisible by an odd prime prime that does not divide any of the others, and therefore there are at least $n$ odd primes not exceeding $F_n$. This proves Euclid's Theorem.

Additionally, 
$$p_{n+1} \le F_n = 2^{2^n} + 1$$
This inequality is a little stronger than (2.2.1), leads to a proof of Theorem 10. 
# 2.5 Fermat's and Mersenne's Numbers 
The first four Fermat numbers are prime, and Fermat conjectures that all were prime. Euler, however, found in 1732 that
$$F_5 = 2^{2^5} + 1 = 641 \cdot 6700417$$ is composite, as $641 = 2^4 + 5^4 = 5 \cdot 2^7 + 1$ divides each of $5^4 \cdot 2^{28} + 2^{32}$ and $5^4 \cdot 2^{28} - 1$ so and divides their difference $F_5$

In 1880, Landry proved that $$F_6  = 2^{2^6} + 1 = 274177 \cdot 67280421310721$$ 

More recent writers have proved that $F_n$ is composite for 
$$7 \le n \le 16$$
and for $n = 18, 19, 23, 36, 38, 39, 55, 63, 73$ and many larger values of $n$. 
No factor is known for $F_14$, but for all other cases provided to be composite, a factor is known. 
No prime $F_n$ has been found beyond $F_4$, It is perhaps more probable that the number of primes $F_n$ is finite; if this is true, then the number of primes $2^n + 1$ is finite.

**Theorem 17:** If $a \ge 2$ and $a^n + 1$ is prime, then $a$ is even and $n = 2^m$
*Proof:* If $a$ is odd, then $a^n + 1$ is even, and if $n$ has an odd factor $k$ and $n = kl$, then $a^n + 1$ is divisible by
$$\frac{a^{kl} + 1}{a^l + 1} = a^{(k-1)l} - a^{(k - 2)l} + ... + 1$$

It is interesting to compare Fermat's conjecture with another famous conjecture concerning the primes of the form $2^n - 1$. We begin with another trivial theorem of similar type to theorem 17. 

**Theorem 18:** If $n > 1$ and $a^n - 1$ is prime, then $a = 2$ and $n$ is prime. 
*Proof:* If $a > 2$, then $a - 1 | a^n - 1$; and if $a = 2$ then $n = kl$, then we have $2^k - 1 | 2^n - 1$. 
Thus, the problem of the primality of $a^n - 1$ is reduced to that of the primality of $2^p - 1$. 

It was shown by Mersenne in 1644 that $M_p = 2^p - 1$ is prime for $$p = 2, 3, 5,  7, 13, 17, 19, 31, 67, 127, 257$$and composite for the other 44 values of $p$ less than 257. 
The first mistake in Mersenne's statement was found around 1886, when Pervusin and Seelhoff discovered that $M_{61}$ is prime. Subsequently, four further mistakes were found in Mersenne's statement and it need no longer be taken seriously. 

In 1876 Lucas found a method for testing whether $M_p$ is prime, and used it to prove $M_{127}$ prime. This remained the largest known prime until 1951, when, using different methods, Ferrier found a larger prime number, and Miller and Wheeler found several large primes, of which the largest was $$180M_{127}^2 + 1$$
It is now shown that $M_p$ is prime for 
$$p = 2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701$$ and composite for all other $p < 21700$. The largest known prime is thus $M_{21701}$, a number of 6533 digits. 

We will describe Lucas's test in 15.5 and give the test used by Miller and Wheeler in Theorem 101. 
The problem of Mersenne's numbers is connected with that of "perfect numbers", which will be considered in 16.8
# 2.6 Third Proof of Euclid's Theorem 
Suppose that $2, 3, ..., p_j$  are the first $j$ primes and let $N(x)$ be the number of $n$ not exceeding $x$ which are not divisible by any prime $p > p_j$. If we express such an $n$ in the form $$n=n_1^2m$$where $m$ is "quadratfrei" (i.e. is not divisible by the square of any prime), we have 
$$m = 2^{b_1}3^{b_2}...p_j^{b_j}$$with every $b$ either 0 or 1. Then there are just $2^j$ possible choices of the exponents and so no  more than $2^j$ different values of $m$. Again, $n_1 \le \sqrt n \le \sqrt x$ and so there are  no more than $\sqrt x$ different values of $n$. Hence,
$$N(x) \le 2^j \sqrt x \qquad (2.6.1)$$ If theorem 4 is false, so that the number of primes is finite, let the primes be $2, 3,..., p_j$. In this case, $N(x) = x$ for all $x$ and so 
$$x \le 2^j \sqrt x, \qquad x \le 2^{2j}$$Which is false for $x  \ge 2^{2j} + 1$
We can use this argument to prove 2 further results

**Theorem 19:** The series 
$$\sum  \frac{1}{p} = \frac{1}{2} + \frac{1}{3} + \frac{1}{5}+ \frac{1}{7} + \frac{1}{11}+...$$ is divergent. 
*Proof:* If the series is convergent, we can choose $j$ such that the remainder after $j$ terms is less than $\frac{1}{2}$, i.e. 
$$\frac{1}{p_{j+1}} + \frac{1}{p_{j+2}} + ... < \frac{1}{2}$$
The number of $n \le x$ which are divisible by $p$ is at most $\frac{x}{p}$. Hence $x - N(x)$, the number of $n \le x$ divisible by one or more of $p_{j+1}, p_{j+2},...$ is no more than 
$$\frac{x}{p_{j+1}} + \frac{x}{p_{j+2}} + ... < \frac{1}{2}x$$Hence, by $(2.6.1)$ 
$$\frac{1}{2} x < N(x) \le 2^j \sqrt x, \qquad x < 2^{2j + 2}$$
which is false for $x \ge 2^{2j + 2}$, hence the series diverges

**Theorem 20:** $\pi(x) \ge \frac{\log  x}{2 \log 2}$ for $x \ge 1$, $p_n \le 4^n$ 
*Proof:* We take $j = \pi(x)$ such that $p_{j+1} > x$ and $N(x) = x$. We have 
$$x = N(x) \le 2^{\pi(x)} \sqrt x, \qquad 2^{\pi(x)} \ge \sqrt x$$
and the first part of the theorem follows on taking logarithms. If we put $x = p_n$, so that $\pi(x) = n$ , the second part is immediate. 

# 2.7 Further Results on Formulae for Primes 

# 2.8 Unsolved Problems Concerning Primes 

# 2.9 Moduli for Integers 

# 2.10 Proof of the Fundamental Theorem of Arithmetic 

# 2.11 Another Proof for the Fundamental Theorem