---
no_dropcap: true
---
A **Ring** is a triple $(R, +, \cdot)$ where $R$ is a set and $+, \cdot$ are binary operations on $R$ such that the following properties hold 
- **Closure:** for all $a, b \in R$, $a + b \in R$ and $a \cdot b \in R$ 
- **Associativity of Addition:** for all $a, b, c \in R$, $(a + b) + c = a + (b + c)$
- **Additive Identity:** There is an element $0 \in R$ such that for all $a \in R$, $a + 0 = 0 + a = a$
- **Additive Inverse:** For all $a \in R$, there is an element, denoted $-a$, such that $a + (-a) = (-a) + a = 0$ 
- **Commutativity of Addition:** For all $a, b \in R$, $a + b = b + a$ 
- **Associativity of Multiplication:** for all $a, b, c \in R$, $a \cdot (b \cdot c) = (a \cdot b) \cdot c$ 
- **Distributivity:** for all $a, b, c \in R$, $a \cdot (b + c) = a \cdot b + a \cdot c$ and $(b + c) \cdot a)$ = $b \cdot a + c \cdot a$
- **Multiplicative Identity:** There is an element $1 \in R$ such that for all $a \in R$, $1 \cdot a = a \cdot 1 = a$ 

A ring $(R, +, \cdot)$ is said to be *commutative* if it satisfies the following additional property: 
- **Commutativity of Multiplication:** for all $a, b \in R$, $a \cdot b = b \cdot a$ 

**Definition:** A *field* $F$ is a non-zero commutative ring in which every non-zero element has a multiplicative inverse, i.e. for any $u \in F$, if $u \ne 0$ then there exists $v \in F$ such that $uv = 1$ 


**Lemma:** Let $m \ge 2$. The ring $\mathbb{Z}/m\mathbb{Z}$ is a field if and only if $m$ is prime
*Proof:* Let $m = p$ be a prime number. We want to show that $\mathbb{Z}/p\mathbb{Z}$ is a field. This means every non-zero element has an inverse. Let $\bar a$ be a non-zero element of $\mathbb{Z}/p\mathbb{Z}$. This means $p \nmid a$. As $p$ is prime, this is the same as saying $\gcd(p, a) = 1$. Then by an application of Bezout's lemma, $\bar a$ has a multiplicative inverse in $\mathbb{Z}/p\mathbb{Z}$. 
Conversely, suppose that $m$ is composite. Then we can write $m = uv$ where $u, v \in \mathbb{Z}$ and $1 < u < m$. Note that $\bar u \ne \bar 0$ in $\mathbb{Z}/m\mathbb{Z}$, since $m \nmid u$ But $\gcd(m, u) = u > 1$. Thus by the same application of Bezout's Lemma as before, the element $\bar u$ does not have a multiplicative inverse, despite being non-zero. Therefore, $\mathbb{Z}/m\mathbb{Z}$ is not a field. 
