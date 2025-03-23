1. With the help of Euclid's Algorithm, compute the multiplicative inverse of $\overline{11}$ in $\mathbb{Z}/101\mathbb{Z}$. (Note that $\overline{11} = [11]_{101}$)

>[!note]- Solution
>Note that $\gcd(11, 101) = 1$ therefore 11 and 101 are coprime, and so a multiplicative inverse exists, from Euclid's Algorithm:
>$11 = 101 \cdot 0 + 11$
>$101 = 11 \cdot 9 + 2$ 
>$11 = 2 \cdot 5 + 1$.
>Now, calculate the inverse from the above:
>$1 = 11 \cdot 1 - 2 \cdot 5$
>$1 = 11 \cdot 1 - (101 - 11 \cdot 9) \cdot 5$ 
>$1 = 11 \cdot 46 - 101 \cdot 5$ 
>$1 = (11 - 101 \cdot 0)\cdot 46 - 101 \cdot 5$ 
>$1 = 11 \cdot 46 - 101 \cdot 5$ 
>Therefore, the multiplicative inverse of $11 mod 101$ is $46 \mod 101$. 

2. Let $\rho$ and $\tau$ be the following permutations: 
$$\rho = \left(\begin{array}{ccccc}
1 & 2 & 3 & 4 & 5 \\
2 & 3 & 5 & 1 & 4 \\
\end{array}\right), \quad 
\tau = \left( \begin{array}{ccccc}
1 & 2 & 3 & 4 & 5 \\
3 & 1 & 2 & 5 & 4 \\
\end{array}\right)$$
	i) Write $\rho$ and $\tau$ as products of disjoint cycles 
	ii) Write $\rho$ and $\tau$ as products of transpositions and state if they're even or odd.

>[!note]- Solution
>i) $\rho = (2, 3, 5, 4, 1)$, $\tau = (3, 2, 1)(4, 5)$
>ii) $\rho = (1, 2)(2, 3)(3, 5)(5, 4)(4, 1)$, $\tau = (1, 3)(3, 2)(2, 1)(4, 5)(5, 4)$, they are both odd. 
>


3. Let $\rho = (1, 2, 3)(4, 5)$ and $\tau = (1, 2, 3, 4)$. Write the following in cycle notation (i.e. as the product of disjoint cycles): $\rho^{-1}, \tau^{-1}, \rho\tau, \tau\rho^2$

>[!note]- Solution
>rahhh

4. $$H = \left \{\left( \begin{array}{cc} 1 & r \\ 0 & s\\ \end{array} \right)    : r \in \mathbb{R}, s \in \mathbb{R}^*\right\}$$
	a) Show that $(H, \cdot)$ is a group.
	b) Show that $H$ is non-abelian by giving a non-commuting pair of elements 
	c) How many elements of order 2 does $H$ have?

>[!note]- Solution
>rahhh

5. Recall that $\mathbb{Z}[x]$ is the ring of polynomials in variable $x$ with coefficients in $\mathbb{Z}$. Which of the following subsets are subrings of $\mathbb{Z}[x]$. Which of the following subsets are ideals of $\mathbb{Z}[x]$? Give justification for your answers.
	i) $\mathbb{Z}$
	ii) $\{f \in \mathbb{Z}[x]: f(5) = 1\}$ 
	iii) $\{f \in \mathbb{Z}[x]: f(5) = 0\}$ 
	iv) $\{f^2: f \in \mathbb{Z}[x]\}$
	v) $\{(x^2 + 1)g(x):g \in \mathbb{Z}[x]\}$

>[!note]- Solution
>rahhh

