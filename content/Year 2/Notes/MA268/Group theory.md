---
no_dropcap: true
---
# Group Cosets & Lagrange's Theorem
## Cosets
**Definition:** Let $G$ be a [[Groups|group]] and $H$ a [[Subgroups|subgroup]]. Get $g$ be an element of $G$. We call the set 
$$gH = \{gh : h \in H\}$$ a *left coset* of $H$ in $G$, and the set 
$$Hg = \{hg : h \in G\}$$ a *right coset* of $H$ in $G$

- In an Abelian group, there is no difference between left and right cosets 
- if $G$ is an additive group, we write cosets additively, e.g. $g + H = \{g + h : h \in H \}$
	- As additive groups are always Abelian, $g + H = H + g$

**Lemma:** Let $G$ be a group and $H$ a subgroup. Let $g_1, g_2 \in G$. Then $g_1H = g_2H$ if and only if $g_1^{-1}g_2 \in H$
*Proof:* Suppose $g_1H = g_2H$. Note that $g_2 = g_2 \cdot 1_G \in g_2H$ as $H$ is a subgroup of $G$. But $g_2H = g_1H$, and so $g_2 \in g_1H$, so $g_2 = g_1h$ for some $h \in H$. Hence $g_1^{-1}g_2 = h \in H$ as required.
Conversely, suppose $g_1^{-1}g_2 = h \in H$. We want to show that $g_1H = g_2H$. Let $k \in g_1H$. Then $k = g_1h_1$ for some $h_1 \in H$. But $h^{-1} = g_2^{-1}g_1$, so $g_1 = g_2h^{-1}$, so $k = g_1h_1 = g_2h^{-1}h_1 \in g_2H$. Therefore every $k \in g_1H$ belongs to $g_2H$. By a similar argument, every $k \in g_2H$ belongs to $g_1H$. Thus, $g_1H = g_2H$ ^4c1816

## Index
**Definition:** Let $G$ be a group and $H$ be a subgroup. Define the *left index* of $H$ in $G$, denoted by $[G : H]$, to be the number of left cosets of $H$ in $G$. Likewise, define the *right index* of $H$ in $G$ to be the number of right cosets of $H$ in $G$.
## Properties of Cosets 
**Lemma:** Let $G$ be a group and $H$ a finite subgroup. If $g \in G$ then $gH$ and $Hg$ have the same number of elements as $H$.
*Proof:* Let $g \in G$. We want to show that $H$ and $gH$ have the same number of elements. Both $H$ and $gH$ are finite, and the best way to show that two finite sets have the same number of elements is to set up a bijection between them. 
Let 
$$\phi : H \to gH, \quad h \mapsto gh$$From the definition of $gH$ it is clear that $\phi(h)$ is in the coset $gH$ whenever $h$ is in the subgroup $H$. So the map $\phi$ makes sense. 
To check this map is bijective we must check it is both injective and surjective: ^72891f
- **Injectivity:** Suppose two elements $h_1, h_2$ map to the same element in $gH$ ($\phi(h_1) = \phi(h_2)$). This means that $gh_1 = gh_2$. If we left multiply both sides by $g^{-1}$, we obtain $g^{-1}(gh_1) = g^{-1}(gh_2)$, and thus $h_1 = h_2$
- **Surjectivity:** Suppose $k \in gH$, we want to show that $k$ is of the form $\phi(h)$ for some $h \in H$. By definition, $gH = \{gh : h \in H\}$, so $k = gh = \phi(h)$ for some $h \in H$

**Lemma:** Let $G$ be a group and $H$ be a subgroup. Let $g_1, g_2 \in G$. Then the cosets $g_1H$ and $g_2H$ are either equal or disjoint. 
*Proof:* Suppose $g1H$ and $g_2H$ are not disjoint. We want to show they are necessarily equal. As $g_1H$ and $g_2H$ are not disjoint, they must have a common element which we can denote $g_3$. Then $g_3 \\in g_1H$ and $g_2 \in g_2H$. Thus $$g_3 = g_1h_1, \quad g_3 = g_2h_2, \quad h_1, h_2 \in H$$ Then $$g_1^{-1}g_2 = (g_3h_1^{-1})^{-1}g_3h_2^{-1} = h_1g_3^{-1}g_3h_2^{-1} = h_1h_2^{-1} \in H$$By [[#^4c1816|lemma]] we have $g_1H = g_2H$  ^5dae38

## Lagrange's Theorem 
**Definition:** Let $A$ be a set and $B_1, B_2, ..., B_n$ be subsets of $A$. We say that $B_1, B_2, ..., B_n$ is a *partition* of $A$ if the following conditions hold:
- $A = B_1 \cup B_2 \cup ... \cup B_n$ 
- If $i \ne j$ then $B_i \cap B_j = \emptyset$ (All subsets are pairwise disjoint)
- $B_i \ne \emptyset$ for $i = 1,...,n$

**Lemma:** Let $G$ be a finite group and $H$ a subgroup. The left cosets of $H$ in $G$ form a partition of $G$. 
*Proof:* Let $g_1H, g_2H,...,g_mH$ be the distinct left cosets of $H$. As they are distinct, we know by [[#^5dae38|lemma]] that they are disjoint. Suppose now that $g \in G$. Then $gH$ must equal one of the $g_iH$. But $g \in gH$ as $1 \in H$. Hence, the cosets $g_1H, g_2H, ..., g_mH$ are not only disjoint, but every element of $G$ belongs to one of them, and so their union is equal to $G$. Finally, $1_G \in H$ so $g_i \in g_iH$, so all cosets are non-empty, and so the cosets form a partition of $G$. ^1d0be5

**Theorem (Lagrange's Theorem):** Let $G$ be a finite group and $H$ a subgroup. Then $$\# G = [G : H] \cdot \#H$$
*Proof:* Let $g_1H, g_2H,...,g_mH$ be the distinct left cosets of $H$. By [[#^1d0be5|lemma]], these form a partition of $G$, and so $$\#G = \#g_1H + \#g_2H + ... + \#g_mH$$ Now, by [[#^72891f|lemma]] $$\#g_1H= \#g_2H = ... = \#g_mH = \#H$$ Hence $$\#G = m \cdot \#H$$ where $m$ is the number of left cosets of $H$ in $G$, which we defined to be the index of $H$ in $G$, so $m = [G : H]$

**Corollary:** Let $G$ be a group and $H$ a subgroup. Then $\#H \mid \#G$
*Proof:* This follows from Lagrange's Theorem as the index $[G:H]$ is an integer.  ^d8e040

**Corollary:** Let $G$ be a finite group. Let $g \in G$ have order $n$. Then $n \mid \#G$
*Proof:* Let $H = \langle g \rangle$ the cyclic group generated by $g$. We know from [[Cyclic Groups#^b21157|lemma]] that $\#H = n$. By [[#^d8e040|corollary]] we have $n \mid \#G$

# Homomorphisms and Normal Subgroups
## Normal Subgroups
Let $H$ be a subgroup of $G$. A *conjugate* of $H$ has the form $gHg^{-1}$ for some $g \in G$

We say that a subgroup $H$ of $G$ is *normal* if and only if $$gHg^{-1} = H$$ for all $g \in G$. That is, $H$ is normal if and only if it is equal to all its conjugates. We write $H \trianglelefteq G$ to denote that $H$ is a normal subgroup of $G$. 

**Lemma:** Let $H$ be a subgroup of $G$. Then the following are equivalent.
1. $H$ is normal in $G$
2. $gHg^{-1} = H$ for all $g \in G$
3.  $gH = Hg$ for all $g \in G$
4. $gHg^{-1} \subseteq H$ for all $g \in G$
5. $ghg^{-1} \in H$ for all $g \in G, h \in H$ 
*Proof:* It is easy to see that $$(1) \Leftrightarrow (2) \Leftrightarrow (3), \quad (4) \Leftrightarrow (5)$$ and also that $(2) \Rightarrow (4)$. Let's do $(4) \Rightarrow (2)$. Suppose $gHg^{-1} \subseteq H$ for all $g \in G$. Then, since $g^-1 \in G$ we have $g^{-1}Hg \subseteq H$. Left multiplying by $g$ and right multiplying by $g^{-1}$ gives $$H = g(g^{-1}Hg)g^{-1} \subseteq gHg^{-1}$$ As $gHg^{-1} \subseteq H$ and $H \subseteq gHg^{-1}$ we have $gHg^{-1} = H$

**Lemma:** Let $G$ be a finite group and let $H$ be a subgroup of $G$ of index 2. Then $H$ is normal in $G$. 
*Proof:* We want to show that $gH = Hg$ for all $g \in G$. By [[#^4c1816|lemma]], $gH = H$ if and only if $g \in H$.  ^6f1afc
- Suppose first that $g \in H$. Then $gH = H$ and $Hg = H$, and so $gH = Hg$
- Suppose instead that $g \not \in H$. Then $gH \ne H$. But $H$ has index 2 in $G$ and so has exactly 2 left cosets, which must be $H$ and $gH$. Therefore, $G = H \cup gH$ and $H \cap gH = \emptyset$, since cosets form a partition. Thus, $gH = G \backslash H$. Similarly, $Hg = G \backslash H$. Hence, $gH = Hg$.
## The Quotient Group
Let $G$ be a group and $H$ a subgroup. We write $G/H$ for the set of left cosets of $H$ in $G$: $$G/H = \{gH : g \in H\}$$
If $N$ is normal subgroup of $G$, we define multiplication on $G/N$ by $$(gN)(g'N) = gg'N$$
**Lemma:** Suppose $N$ is normal in $G$. Then $(gN)(g'N) = gg'N$ is well-defined. 
*Proof:* Suppose $xN = aN$ and $yN = bN$. For the definition to be sensible we want $xyN = abN$. By [[#^4c1816|lemma]] we know that $x^{-1}a \in N$ and $y^{-1}b \in N$. We want to prove that $(xy)^{-1}ab \in N$. However, $$(xy)^{-1}ab = y^{-1}x^{-1}ab = y^{-1}\cdot(x^{-1}a)\cdot y \cdot y^{-1}b$$
We know that as $N$ is normal and $x^{-1}a \in N$, we have $y^{-1} \cdot (x^{-1}a) \cdot y \in N$. Therefore, $(xy)^{-1}ab \in N$. 

**Lemma:** Let $G$ be a group and $N$ a normal subgroup. Then $G/N$ with $(gN)(g'N) = gg'N$ is a group with identity element $N = 1_GN$ and inverses given by $(gN)^{-1} = g^{-1}N$. Moreover, if $G$ is finite then $$\#(G/N) = [G:N]=\frac{\# G}{\#N}$$ We call $G/N$ the *quotient group* of $G$ over $N$.
*Proof:* The fact that $G/N$ is a group easily follows from the fact $G$ is a group. For the last part, note that $G/N$ is the set of left cosets of $N$, so $\#(G/N) = [G:N]$ by definition of the index. By Lagrange's Theorem, $[G:N] = \frac{\#G}{\#N}$ 
## Linear Transformations
Let $F$ be a field. Let $V$ and $W$ be $F$-vector spaces. A *linear transformation* is a map $\phi: V \to W$ satisfying:
- $\phi(\mathbf{v}_1 + \mathbf{v}_2) = \phi(\mathbf{v}_1) + \phi(\mathbf{v}_2)$ for all $\mathbf{v}_1, \mathbf{v}_2 \in V$
- $\phi(\lambda \mathbf{v}) = \lambda \phi(\mathbf{v})$ for all $\lambda \in F$ and $\mathbf{v}\in V$ 
We define the *kernel* and *image* of the linear transformation $\phi$ by $$\text{Ker}(\phi) = \{\mathbf{v} \in V : \phi(\mathbf{v}) = \mathbf{0}\}, \quad \text{Im}(\phi) = \{\phi(\mathbf{v}) : \mathbf{v} \in V\}$$
We recall that $\text{Ker}(\phi)$ is a subspace of $V$ and $\text{Im}(\phi)$ is a subspace of $W$. 
## Homomorphisms and Isomorphisms of Groups 
**Definition:** Let $G$, $H$ be groups and let $\phi: G \to H$ be a map. We say that $\phi$ is a *homomorphism of groups* if $$\phi(gh) = \phi(g)\phi(h)$$ for all $g, h \in G$

**Definition:** Let $G$ and $H$ be groups. A map $\phi: G \to H$ is an *isomorphism* if it is a bijective homomorphism. If $G$ and $H$ are isomorphic we write $G \cong H$.

## Kernel and Image
Associated to any homomorphism $\phi: G \to H$ are its *kernel* and *image*: 
$$\text{Ker}(\phi) = \{g \in G : \phi(g) = 1_H\}, \quad \text{Im}(\phi) = \{\phi(g) : g \in G\}$$
**Theorem:** Let $\phi : G \to H$ be a homomorphism of groups. Then
- $\text{Ker}(\phi)$ is a normal subgroup of $G$
- $\text{Im}(\phi)$ is a subgroup of $H$

**Lemma:** Let $\phi : G \to H$ be a homomorphism of groups. Then $\phi$ is injective if and only if $\text{Ker}(\phi) = \{1_G\}$ 
*Proof:* Suppose $\text{Ker}(\phi) = \{1_G\}$. Let $g_1, g_2 \in G$ and suppose $\phi(g_1) = \phi(g_2)$. Then $\phi(g_1^{-1}g_2) = \phi(g_1)^{-1} \phi(g_2) = 1_H$. Thus $g_1^{-1} g_2 \in \text{Ker}(\phi) = \{1_G\}$ and so $g_1^{-1}g_2 = 1_G$ and hence $g_1 = g_2$. Therefore $\phi$ is injective. 
Conversely, suppose $\phi$ is injective. Let $g \in \text{Ker}(\phi)$. Thus $\phi(g) = 1_H = \phi(1_G)$. As $\phi$ is injective, $g = 1_G$. Hence $\text{Ker}(\phi) = \{1_G\}$ ^154
## The First Isomorphism Theorem
**Theorem (The First Isomorphism Theorem):** Let $\phi : G \to H$ be a homomorphism of groups. Let $$\hat \phi  : G/\text{Ker}(\phi) \to \text{Im}(\phi), \quad \hat\phi(g \text{Ker}(\phi)) = \phi(g)$$Then $\hat\phi$ is a well-defined group isomorphism.
*Proof:* Lets show first that $\hat\phi$ is well-defined. Let $g_1, g_2\in G$ and suppose $g_1\text{Ker}(\phi) = g_2\text{Ker}(\phi)$. $\hat\phi$ sends $g_1\text{Ker}(\phi)$ to $\phi(g_1)$ and $g_2\text{Ker}(\phi)$ to $\phi(g_2)$. For $\hat\phi$ to be well-defined we want $\phi(g_1) = \phi(g_2)$. $g_1\text{Ker}(\phi) = g_2 \text{Ker}(\phi)$ tells us that $g_1^{-1}g_2 \in \text{Ker}(\phi)$ and so by definition of kernel, $\phi(g_1^{-1}g_2) = 1_H$. As $\phi$ is a homomorphism, we have $\phi(g_1)^{-1}\phi(g_2) = 1_H$, so $\phi(g_1) = \phi(g_2)$. Thus, $\hat \phi$ is well-defined. 
To show that $\hat\phi$ is a homomorphism note that
$$\hat\phi(g_1\text{Ker}(\phi) \cdot g_2 \text{Ker}(\phi)) = \hat\phi(g_1g_2\text{Ker}(\phi)) = \phi(g_1g_2) = \phi(g_1)\phi(g_2) = \hat\phi(g_1\text{Ker}(\phi)) \cdot \hat\phi(g_2\text{Ker}(\phi))$$
To show that $\hat\phi$ is injective we apply [[#^154|lemma]]. Let $g\text{Ker}(\phi) \in \text{Ker}(\hat\phi)$. Then $\phi(g) = \hat\phi(g\text{Ker}(\phi)) = 1_H$. Thus $g \in \text{Ker}(\phi)$. Therefore, $g\text{Ker}(\phi) = 1_G\text{Ker}(\phi)$. It is clear from the definition of $\hat\phi$ that it is surjective, and so $\hat\phi$ is an isomorphism.
## The Sign of a Permutation
Let $n \ge 2$. An important homomorphism to know is the sign of a permutation. Recall that a permutation $\sigma \in S_n$ is *even* if it can be written as a product of an even number of transpositions, and *odd* if it can be written as a product of an odd number of permutations. A permutation cannot be both even and odd.

We define the *sign* of a permutation $\sigma \in S_n$ as follows: $$\text{sign}(\sigma) = \begin{cases} 1 & \text{if } \sigma \text{ is even}\\ -1 & \text{if } \sigma \text{ is odd} \end{cases}$$ We obtain a homomorphism $$\text{sign} : S_n \to \{\pm1\}, \quad \sigma \mapsto \text{sign}(\sigma)$$ How do we know that sign is a homomorphism? We need to check that $\text{sign}(\sigma\tau) = \text{sign}(\sigma)\text{sign}(\tau)$. Write $$\sigma = \epsilon_1...\epsilon_m, \quad \tau = \delta_1...\delta_n$$ as products of transpositions. Then $$\text{sign}(\sigma) = (-1)^m, \quad \text{sign}(\tau) = (-1)^n$$
However, $$\sigma\tau = \epsilon_1...\epsilon_m\delta_1...\delta_n$$ which is a product of $m + n$ transpositions. Thus $$\text{sign}(\sigma\tau) = (-1)^{m+n} = \text{sign}(\sigma)\text{sign}(\tau)$$ Hence sign is a homomorphism

**Theorem:** Let $n \ge 2$. Then $A_n$ is a normal subgroup of $S_n$. Moreover, $$[S_n:A_n] = 2, \quad \# A_n = \frac{\#S_n}{2} = \frac{n!}{2}$$ *Proof:* Now that we've checked that sign is a homomorphism, we can observe that the kernel is defined to be $$A_n = \{\sigma \in S_n: \sigma \text{ is even}\}$$ So we know that $A_n$ is a normal subgroup of $S_n$. 
It is easy to see that sign is surjective, since $\text{sign}(\text{id}) = 1$ and $\text{sign}((1, 2)) = -1$. So $\text{Im}(\text{sign}) = \{1, -1\}$
Applying the first isomorphism theorem to $\text{sign} : S_n \to \{1, -1\}$ gives an isomorphism $$\widehat{\text{sign}}:S_n/A_n \to \{1, -1\}, \quad \widehat{\text{sign}}(\sigma A_n) = \text{sign}(\sigma)$$
Thus $[S_n:A_n] = \#(s_n/A_n) = \#\{1, -1\} = 2$. Therefore $\#A_n = \frac{\#S_n}{2} = \frac{n!}{2}$
## Classifying Groups
**Lemma:** Let $G$ and $H$ be cyclic groups of order $n$. Then $G$ and $H$ are isomorphic. 
*Proof:* Let $G = \langle g \rangle$ and $H = \langle h \rangle$, where $g$ and $h$ have order $n$. Define $$\phi: G \to H, \quad \phi(g^i) = h^i$$
Is this well-defined? Suppose there are two integers $i$ and $j$ such that $g^i = g^j$. The map $\phi$ sends $g^i$ to $h^i$ and $g^j$ to $h^j$. For the definition to be sensible, $h^i$ must be equal to $h^j$. $g^i = g^j$ tells me that $g^{i-j} = 1_G$ and since $g$ has order $n$ we have $n \mid (i - j)$. But $h$ also has order $n$, so $h^{i-j} = 1_h$ and hence $h^i = h^j$. It follows that $\phi$ is well-defined. 
We now need to check that $\phi$ is a homomorphism. We want $$\phi(g^i \cdot g^j) = \phi(g^i)\cdot \phi(g^j)$$ which is the same as $h^{i+j} = h^i \cdot h^j$, which is true. Finally, we need to show that $\phi$ is a bijection. Let $$\psi: H \to G, \quad \psi(h^i) = g^i$$Then $\psi$ is well-defined as before and $\psi, \phi$ are mutual inverses. Since $\phi$ has an inverse it must be a bijection.

**Lemma:** Let $p$ be a prime. Any group of order $p$ is isomorphic to $C_p$ 
*Proof:*

**Definition:** Let $G$ and $H$ be groups. We define the *direct product* of $G$ and $H$ to be $$G \times H = \{(g, h): g \in G, h \in H\}$$ i.e. $G \times H$ is the set of ordered pairs $(g, h)$ where $g \in G$ and $h \in H$. The binary operation on $G \times H$ is $$(g_1, h_1) \cdot (g_2, h_2) = (g_1g_2, h_1h_2)$$ 
**Lemma:** $G \times H$ is a group with identity element $(1_G, 1_H)$ and inverse given by $(g, h)^{-12} = (g^{-1}, h^{-1})$. If $G$ and $H$ are finite then $$\#(G \times H) = (\#G)\cdot(\#H)$$ *Proof:*

**Theorem:** The only groups of order 4 are $C_4$ and $C_2 \times C_2$
*Proof:* What this theorem states is that any group of order 4 is isomorphic to either $C_4$ or $C_2 \times C_2$. Lets write $C_2 = \langle u \rangle$ where $u$ has order 2. Then $$C_2 = \{1, u\}, \quad C_2 \times C_2 = \{(1, 1), (1, u), (u, 1), (u, u)\}$$ Note that $(1, 1)$ has order 1 and all other elements have order 2. In particular, $C_4$ and $C_2 \times C_2$ are non-isomorphic as the latter has no elements of order 4. 
Let $G$ be a group of order 4. We want to show that $G \cong C_4$ or $G \cong C_2 \times C_2$. If $G$ is cyclic, then $G \cong C_4$. Thus we may suppose that $G$ is not cyclic, and so $G$ has no element of order 4. Write $G = \{1, a, b, c\}$. The elements $a, b, c$ have order 2 by Lagrange's Theorem.
- What is $ab$? It must be one of the 4 elements of $G$. If $ab = 1$ then $b = a^{-1} = a$ giving a contradiction. If $ab = a$ then $b = 1$ giving a contradiction. Likewise $ab = b$ gives a contradiction. Therefore, $ab = c$. We find that whenever we multiply two distinct elements among $a, b, c$, we obtain the third one.
Now, let $$\phi:G \to C_2 \times C_2 = 
\begin{cases} 
\phi(1) & (1, 1)\\
\phi(a) & (1, u)\\
\phi(b) & (u, 1)\\
\phi(c) & (u, u)
\end{cases}$$ and we just check (with the help of a multiplication table) that $\phi$ is an isomorphism. Thus, $G \cong C_2 \times C_2$. 

One way of thinking about isomorphisms of groups $\phi:G \to H$ is that $\phi$ is a map that sends the multiplication table of $G$ to the multiplication table of $H$. 

## Fundamental Theorem of Finite Abelian Groups
**Theorem (Fundamental Theorem of Finite Abelian Groups):** Let $G$ be a non-trivial finite abelian group. Then there are integers $b_1 \mid b_2 \mid ... \mid b_2, b_1,...,b_n > 1$, such that $$ G \cong C_{b_1} \times C_{b_2} \times ... \times C_{b_n}$$
Here, $C_b$ is the cyclic group of order $b$. The integers $b_1, ..., b_n$ are called the *invariants* of the finite abelian group $G$. Note that they are positive integers, that each divides the next one, and that $\#G = b_1 b_2 ... b_n$.

# Group Presentations
## Dihedral Group
A regular $n$-gon has $2n$ symmetries (consisting of $n$ rotations and $n$ reflections). The set of these symmetries forms a group which we will denote $D_{2n}$, which is called the *dihedral group* of order $2n$. 
- Note that some sources will denote this $D_n$, however $D_{2n}$ has been chosen to be consistent with the resources from Algebra 1 (MA151) and Algebra 3 (MA268)

**Lemma:** Let $a \in D_{2n}$. Suppose $a$ fixes vertices 1 and 2. Then $a = \text{id}$   ^512
*Proof:* The proof is geometric. Suppose $a$ fixes vertices 1 and 2. Then $a$ fixes the whole line segment joining these two vertices. But $a$ also fixes $O$ (the centre of the $n$-gon). Therefore, $a$ fixes the whole $n$-gon and so $a = \text{id}$  ^72f4eb

**Lemma:** Let $b, c \in D_{2n}$. Suppose $b(1) = c(1)$ and $b(2) = c(2)$. Then $b = c$ ^513
*Proof:* Here we consider $b$ and $c$ as permutations of $\{1, 2, ..., n\}$. Suppose $b(1) = c(1) = k$ and $b(2) = c(2) = \ell$ where $k$ and $\ell$ are vertex numbers. Let $a = c^{-1}b \in D_{2n}$. Then $$a(1) = c^{-1}(b(1)) = c^{-1}(k) = 1), \quad a(2) b= c^{-1}(b(2)) = c^{-1}(\ell) = 2$$ By [[#^72f4eb|lemma]] we get $a = \text{id}$, so $b = c$ ^ae07c0

**Theorem:** Let $n \ge 3$. Then $$D_{2n} = \{\text{id}, r, r^2,...,r^{n-1}\} \cup \{s, sr, sr^2,...,sr^{n-1}\} = R \cup sR$$ In particular, $\#D_{2n} = 2n$ and $R$ is a normal subgroup of index 2.
*Proof:* Let $a \in D_{2n}$. Let $a(1) = k$. Note that $a$ must map the vertices adjacent to the vertex 1 (2 and $n$) to the vertices adjacent to the vertex $k$ ($k - 1$ and $k+1$. Therefore, we have 2 cases, either:

$$a: 
\begin{cases} 
n \mapsto k -1 & \\ 
1 \mapsto k & \\
2 \mapsto k+1 & 
\end{cases}$$
or

$$a:
\begin{cases} 
n & \mapsto k + 1  \\ 
1 & \mapsto k \\ 
2 &\mapsto k - 1 
\end{cases}$$ 

In the first case, let $b = r^{k-1}$. Note that $$a(1) = k = b(1), \quad a(2) = k + 1 = b(2)$$ so $a = b = r^k$ by [[#^ae07c0|lemma]]. Now we take the second case. Note that 
$$s : 
\begin{cases} 
n & \mapsto 2 \\ 
1 & \mapsto 1 \\ 
2 & \mapsto n 
\end{cases}$$
So
$$as : 
\begin{cases} n & \mapsto k - 1 \\ 
1 & \mapsto k \\ 
2 & \mapsto k + 1 
\end{cases}$$
Hence $as = r^{k-1}$ so $a = r^{k-1}s^{-1} = r^{k-1}s$. We conclude that any $a \in D_{2n}$ belongs to either $R$ or $Rs$. Thus $D_{2n} = R \cup Rs$. Note that any two cosets $R$ and $Rs$ are distinct as $s \not \in R$. Therefore $[D_{2n} : R] = 2$ and so $R$ is normal in $D_{2n}$ by [[#^6f1afc|lemma]]. Therefore $Rs = sR$ and so $D_{2n} = R \cup RS$ as required.

**Lemma:** With $r, s$ as above, $$r^n = \text{id}, \quad s^2 = \text{id}, \quad srs = r^{-1}$$
*Proof:* The first two relations are trivial. For the third, note that $s^{-1} = s$. Therefore, $srs = srs^{-1}$. As $R$ is normal in $D_{2n}$ and $r \in R$ we have $srs \in R$. So $srs = r^k$ for some $k$. We compute $$(srs)(1) = (sr)(s(1)) = (sr)(1) = s(r(1)) = s(2) = n$$ Hence $srs = r^{n-1} = r^{-1}$
## Generators

## Group Presentations

## Homomorphisms From Groups Defined By Presentations

## The Quaternion Group $Q_8$ 

## A Presentation for $D_{2n}$ 

# Classification of Groups
## Groups with Exponent 2

## Groups of Order 6

## Groups of Order 8

# Group Actions
## Group Actions 

## Cauchy's Theorem

## Conjugation

## Conjugacy Classes in $S_n$
