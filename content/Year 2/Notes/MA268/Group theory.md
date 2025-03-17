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

## The Quotient Group

## Linear Transformations

## Homomorphisms and Isomorphisms of Groups 

## Kernel and Image

## The First Isomorphism Theorem

## The Sign of a Permutation

## Classifying Groups

## Fundamental Theorem of Finite Abelian Groups

# Group Presentations
## Dihedral Group

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
