---
no_dropcap: true
---
Let $n \ge 1$. Recall that $S_n$ is the set of bijections from $\{1,2,...,n\}$ to itself. Composition of bijections turns $S_n$ into a group. 

**Theorem:** $\# S_n = n!$ 

**Definition:** Let $a_1, a_2,...,a_k$ be distinct elements of the set $\{1, 2, ..., n\}$. The permutation that sends $a_1$ to $a_2$, and $a_2$ to $a_3$, $...$, $a_{k-1}$ to $a_k$ and $a_k$ to $a_1$ and fixes all other elements of $\{1, 2, ..., n\}$ is denoted by $(a_1, a_2, ..., a_k)$ and is called a *cycle* of length $k$ 

**Definition:** We call cycles $(a_1, a_2, ..., a_k)$ and $(b_1, b_2, ..., b_\ell)$ *disjoint* if $a_i \ne b_j$ for all $i, j$

**Theorem:** Disjoint cycles commute, i.e. if $\sigma = (a_1, a_2, ..., a_k)$ and $\tau = (b_1, b_2,...,b_\ell)$ are disjoint, then $\sigma\tau = \tau\sigma$ 
*Example:* $S_n$ is not abelian for $n \ge 3$. For example 
- $(1, 2)(1, 2, 3) = (2, 3)$,
- $(1, 2, 3)(1, 2) = (1, 3)$
Note that $(1, 2)$ and $(1, 2, 3)$ are cycles but not disjoint.

**Theorem:** Every permutation can be written as a product of disjoint cycles