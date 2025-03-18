---
no_dropcap: true
---
**Definition:** Let $R$ be a ring. A subset $S \subseteq R$ is a *subring* of $R$ if it is a ring with respect to the same operations and identity elements.

**Lemma:** Let $R$ be a ring. Then $S \subseteq R$ is a subring if and only if
- $0, 1 \in S$
- $a + b \in S$ for all $a, b \in S$ 
- $-a \in S$ for all $a \in S$ 
- $ab \in S$ for all $a, b \in S$ 

**Definition:** Let $R$ be a ring. An *ideal* of $R$ is a subset $I \subset R$ such that
- $0 \in I$ 
- $a + b \in I$ for all $a, b \in I$ 
- for all $r \in R$ and $a \in I$ we have $ra \in I$ and $ar \in I$ 
**Lemma:** Let $R$ be a ring and let $I$ be an ideal of $R$. Then $I = R$ if and only if $1 \in I$ 
*Proof:* Suppose $1 \in I$. Let $r \in R$. Then $r = r \cdot 1 \in I$ by definition of an ideal, and so $R \subseteq I$. But $I \subseteq R$, and so $I = R$