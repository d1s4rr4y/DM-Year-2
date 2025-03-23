**Group:** A *group* is a set $G$ together with a binary operation that satisfies associativity ($a \cdot (b \cdot c) = (a \cdot b) \cdot c$ for all $a, b, c \in G$), existence of an identity ($\exists e \in G$ s.t. $a \cdot e = e \cdot a = a\ \forall a \in G$ ) and existence of inverses (for any $a$ there exists $a^{-1}$ such that $a \cdot a^{-1} = a^{-1} \cdot a = e$) ^group

**Order:** The *order of a group* is the number of elements it contains (which may be finite or infinite). The *order of an element* $a \in G$ is the smallest $k \in \mathbb{Z}^+$ such that $a^k = e$, where exponentiation denotes repeated operation. An element has infinite order if no such $k$ exists. ^order

**Abelian Group:** A group is *abelian* if its operation is also commutative ($a \cdot b = b \cdot a$ for all $a, b \in G$ ^abelian

**Homomorphism:** A function $f: G \to H$ is a *homomorphism* if $f(g_1 \circ g_2) = f(g_1) \circ f(g_2)$ for all $g, h \in G$ ^homomorphism

**Isomorphism:** A bijective function $f:G \to H$ is an *isomorphism* if both $f$ and $f^{-1}$ are homomorphisms ^isomorphism

**Subgroup:** A subset $H$ of a group $G$ that is itself a group is called a *subgroup*, denoted $H < G$ ^subgroup

**Cosets:** A *left coset* of a subgroup $H < G$ is a subset $aH = \{ah:h \in H\}$ for some $a \in G$. A *right coset* is defined similarly. ^coset

**Index of a Subgroup $[G : H]$:** The *index* $[G:H]$ of a subgroup $H < G$ is the number of cosets of $H$ in $G$, equal to $\frac{|G|}{|H|}$ by Lagrange's Theorem ^index

**Normal Subgroup:** A subgroup $K \le G$ is *normal* if $gkg^{-1} \in K$ for all $g \in G$ and $k \in K$, denoted $H \trianglelefteq G$ ^normal

**Quotient Group:** Given a normal subgroup $K \trianglelefteq G$, the *quotient group* is comprised of the cosets of $K$, denoted $G/K$. y Lagrange's Theorem, the order of a quotient group is $|\frac{G}{K}| = \frac{|G|}{|K|}$ ^quotient



