**Zero Divisor:** In a commutative ring $R$, a *zero divisor* is a non-zero element $a$ such that there exists a non-zero element $b \in R$ with $ab = 0$. 

**Integral Domain:** An *integral domain* is a commutative ring with unity and no zero divisors. Equivalently, any ring that satisfies $ab = ac \Rightarrow b = c$ and $ba = ca \Rightarrow b = c$ is an integral domain.

**Prime Ideal:** A *prime ideal* in a ring $R$ is an ideal $A \subset R$ such that $ab \in A$ implies either $a \in A$ or $b \in A$, In this case, the quotient ring $R/A$ is an integral domain.

**Maximal Ideal:** A *maximal ideal*in a ring $R$ is an ideal $A \subset R$ contained in no other nontrivial ideal of $R$. In this case, the quotient ring $R/A$ is a field. 

**Chinese Remainder Theorem:** Given a ring $R$ with pairwise coprime ideals $I_1,...,I_n$ and elements $a_1,...,a_n \in R$, there exists a single $r \in R$ such that $r + I_i = a_i + I_i$ for all $i$. 

**Principle Ideal:** A *principle ideal* in a commutative ring $R$ is one of the form $\langle a \rangle = \{ra : r \in R\}$ for some $a \in R$. It is the smallest subring containing $a$.

**Principle Ideal Domain (PID):** A *principle ideal domain* is an integral domain in which every ideal is principle. 

**Prime Element:** In an integral domain $R$, a *prime element* is an element $a \in R$ for which $a \mid bc$ implies either $a \mid b$ or $a \mid c$. 

**Irreducible Element:** In an integral domain $R$, an *irreducible element* is an element $a \in R$ for which $a = bc$ implies that either $b$ or $c$ is a unit. 

**Unique Factorisation Domain (UFD):** A *unique factorisation domain* is an integral domain in which the unique factorisation property holds, meaning that every element can be factored into irreducible elements, and the factorisation is unique up to units. Every PID is a UFD.

**Euclidean Ring/Domain (ED):** A *Euclidean domain* is an integral domain $R$ with a division algorithm. Thus, there is some function $d: R^* \to \mathbb{Z}_0^+$ such that $d(a) \le d(ab),\ b \ne 0$ implies that there are $q, r \in R$ such that $a = bq + r$ and $d(r) < d(b)$. Every ED is a PID. 