# Divisibility and Congruences 
Let $u$, $v$ be integers. We say that $u$ **divides** $v$ and write $u | v$ if there is some integer $w$ such that $v = uw$. Note that any integer $u$ divides 0. 

> [!warning] Lemma ^d9ada2
> Let $m$ be an integer $\ge 2$. Let $a$, $b$, $c$, $d$ be integers. 
> Suppose $a  \equiv c  \, (\bmod m)$ and $b \equiv d \, (\bmod m)$. Then
> $$ a + b \equiv c + d \, (\bmod m)$$
> $$a - b \equiv c - d \, (\bmod m)$$
> $$ab \equiv cd \, (\bmod m)$$ 
>> [!note]-
>> 
>> We're told that $a \equiv  c \, (\bmod m)$. Thus, $m | (a - c)$ which means that $a - c = um$ for some integer $u$. Thus $a = c + um$ where $u$ is an integer. 
>> Likewise, $b - d + vm$ where $v$ is an integer. Hence
>> $$\begin{align}
>> 	ab - cd &= (c + um)(d + vm) - cd \\
>> 		  &= umd + cvm = uvm^2\\
>> 		  &= m \cdot (ud + cv + uvm)
>>   \end{align}
>>   $$
>>   The expression $ud + cv + uvm$ is an integer as $u$, $d$, $c$, $v$ and $m$ are all integers. Thus, $m | (ab - cd)$ and so $ab \equiv cd \, (\bmod m)$ as required. 


Let $m$ be an integer $\ge 2$. We write $\mathbb{Z}/m\mathbb{Z}$ for the classes of integers modulo $m$. Last year, we used the notation $[a]_m$ for the class of integers congruent to $a$ module $m$. In this module we will write $\bar a$ for the class of integers that are congruent to $a$ modulo $m$. The $m$ is understood as fixed. Thus

$$
\bar a = [a]_m = \{..., a - 3m, a - 2m, a - m, a, a + m, a + 2m,...\}
$$

We carry out addition, subtraction and multiplication in $\mathbb{Z}/m\mathbb{Z}$ in the obvious way: 

$$\bar a + \bar b = \bar{a + b}$$
$$
	\bar a - \bar b = \bar{a - b}
$$
$$ \bar a \cdot \bar b = \bar{ab} $$ 
Thanks to the lemma [[Revision#^d9ada2|above]], addition, subtraction and multiplication in $\mathbb{Z}/m\mathbb{Z}$ make sense. Thus, for example, in $\mathbb{Z}/14\mathbb{Z}$: 
$$ \bar{2} \times \bar{3} \times \bar{11} = \bar{66} = \bar{10}$$ since $66-10 = 56 = 4 \times 14$. A key tool for working with congruences is division with remainder 

> [!warning] Theorem (Division with remainder)
> Let $n, m \in \mathbb{Z}$ with $m \ge 1$. Then there are unique $q, r \in \mathbb{Z}$ such that
> $$ n = qm + r, 0 \le r \le m - 1$$ 
> We call $q$ the **quotient** and $r$ the **remainder** obtained upon dividing $n$ by $m$. Note that $\bar{n} = \bar{r}$ in $\mathbb{Z}/m\mathbb{Z}$ since $n - 1 = qm$ is divisible by $m$. 
> It follows from this that 
> $$\mathbb{Z}/m\mathbb{Z} = \{\bar 0, \bar 1, \bar 2,..., \bar{m - 1}\}$$
> consists of precisely $m$ congruence classes as there are $m$ possibilities for the remainder $r$

>[!example] Example 
>What about division in $\mathbb{Z}/m\mathbb{Z}$? Or at least taking multiplicative inverse? 
>For example, in $\mathbb{Z}/4\mathbb{Z}$ we get the class $\bar 2$ is non-zero, but it doesn't have a multiplicative inverse.
>Suppose $\bar{2} \cdot \bar{a} = \bar{1}$ is in $\mathbb{Z}/4\mathbb{Z}$. Then $2a - 1$ is divisible by 4, and hence even. However, we know that $2a - 1$ is an odd number, giving a contradiction. 

The following lemma can be used to compute inverses in $\mathbb{Z}/m\mathbb{Z}$ 

>[!warning] Lemma (Bezout's Lemma) ^bezout
>
>Let $m, n \in \mathbb{Z}$ (not both zero) and let $h = \gcd(m, n)$. Then there are $u, v \in \mathbb{Z}$ such that 
>$$h = um + vn$$ 
>

> [!warning] Lemma
> Let $m \ge 2$ Let $n$ be an integer. Then $\bar{n}$ has a multiplicative inverse in $\mathbb{Z}/m\mathbb{Z}$ if and only if $\gcd(m, n) = 1$ 
>> [!note]- Proof 
>> 
>> Suppose that $\gcd(m, n) = 1$ Then by [[Revision#^bezout|Bezout's Lemma]] $um + vn = 1$ for some integers $u, v$. Thus, $vn \equiv 1 \, (\bmod m)$. Therefore $\bar{v}\cdot\bar{n} = \bar{1}$ in $\mathbb{|}/m\mathbb{Z}$ or equivalently $\bar{n}^{-1} = \bar{v}$ in $\mathbb{z}/m\mathbb{Z}$
>> Conversely, suppose $\bar{n}$ has a multiplicative inverse in $\mathbb{Z}/m\mathbb{Z}$. Thus $\bar{v}\cdot\bar{n} = \bar{1}$ for some integer $v$. Therefore $vn - 1 = um$ for some integer $u$. Let $d = \gcd(m, n)$. Then $d$ divides $m$ and $n$, and therefore divides $vn - um = 1$, showing that $d = 1$
>

# Groups 
A **group** is a pair $(G, \circ)$ where $G$ is a set and $\circ$ is a binary operation on $G$, such that the following properties hold: 
- **Closure:** $a \circ b \in G \ \forall a, b \in G$ 
- **Associativity:** $a \circ (b \circ c) = (a \circ b) \circ c \ \forall a, b, c \in G$ 
- **Existence of an Identity Element:** There is an element $e \in G$ such that $e \circ a = a \circ e = a \ \forall a \in G$ 
- **Existence of Inverses:** $\forall a \in G \ \exists b \in G$ such that $a \circ b = b \circ a = e$. We call $b$ the *inverse* of $a$
The binary operation $\circ$ is often not made explicit. Unless the group $G$ is additive, we usually use multiplicative notation.

The **order** of a group is its size (the cardinality of $G$). The **order** of an element $g \in G$ is the smallest positive integer $n$ such that $g^n = 1$, where $1$ is the identity element. If there is no such positive integer then $g$ has infinite order. 

> [!example]
> $\mathbb{Z}$ is a group of infinite order. All elements have infinite order except $0$, which has order $1$. To see this, note that if $g \in \mathbb{Z}$ has finite order $n$ then $ng = 0$ which implies $g = 1$. 

>[!example]
>$\mathbb{C}^*$ is a group of infinite order. The elements of order $n$ satisfy $g^n = 1$. The solutions to $g^n = 1$ are the $n$-th roots of unity: 
>$$1, \zeta, \zeta^2,...,\zeta^{n-1}$$
>where $\zeta = \zeta_n = exp(\frac{2 \pi i}{n})$. 
>However, not every $n$-th root of unity has order $n$. E.g., take $n = 4$: 
>$$ \zeta = exp(\frac{2 \pi i}{4}) = \exp(\frac{\pi i}{2}) = \cos(\frac{\pi}{2}) + i \sin(\frac{\pi}{2}) = 1$$
>So the 4-th roots of unity are $1, i, -1, -i$ with orders $1, 4, 2, 4$ respectively. 
>The **primitive** $n$-th roots of unity are the ones that have order exactly $n$. Thus the primitive 4-th roots of unity are $i$ and $-i$. 

>[!example] 
>Let $m \ge 2$. Then $(\mathbb{Z}/m\mathbb{Z}, +)$ is an abelian group. 
>All elements have finite order. The order of $\bar{1}$ is $m$. The order of $\bar{2}$ depends on $m$: if $m$ is even, $\bar{2}$ has order $\frac{m}{2}$, and if $m$ is odd then $\bar{2}$ has order $m$. 

>[!example]
>Let $d$ be a positive integer. et $K$ be a field (e.g. $K = \mathbb{R}, \mathbb{C}$). We write $M_d(K)$ for the ring of $d \times d$ matrices with entries in $K$. We let 
>$$ GL_d(K) = \{A \in M_d(K) : \det(A) \ne 0 \}$$
>Then $GL_d(K)$ is a group where the operation is multiplication of matrices. This is called the **general linear group of degree $d$**. The identity element is the identity matrix $I_d$ and the inverse of $A \in GL_d(\mathbb{C})$ is the inverse matrix $A^{-1}$.

A group $G$ is called **abelian** if $gh = hg$ for all $g, h \in G$. 

>[!example]
>$GL_1(K) = K^*$ is abelian, but $GL_d(K)$ is non-abelian for all $d \ge 2$. 
>

Note that additive groups are *always* abelian. Additive notation is never used for a non-abelian group. 

# Subgroups 
Let $G$ be a group. A subset $H$ is a **subgroup** of $G$ if it is a group with respect to the same binary operation. We sometimes write $H \le G$ to denote that $H$ is a subgroup of $G$. 

>[!warning] Theorem
>Let $G$ be a group, and let $H \subseteq G$. Then $H$ is a subgroup if and only if 
>- $1_G \in H$ 
>- $h_1 h_2 \in H$ for all $h_1, h_2 \in H$ 
>- $h^{-1} \in H$ for all $h \in H$ 
> ^subgroups



>[!example]
>Let 
>$$SL_d(K) = \{A \in GL_d(K) : \det(A) = 1\}$$
>Clearly, $I_n \in SL_d(K) \subseteq GL_d(K)$. Also, if $A, B \in SL_d(K)$ then $\det(A) = \det(B) = 1$, so
>$$\det(AB) = \det(A)\det(B) = 1, \det(A^{-1}) = \frac{1}{\det(A)} = 1$$ 
>It follows from the [[Revision#^subgroups|above theorem]] that $SL_d(K)$ is a subgroup of $GL_d(K)$. This is called the **special linear group of degree $d$**

# Cyclic Groups 
Let $G$ be a group, and let $g \in G$. The **cyclic subgroup** generated by $g$ is 
$$\langle g \rangle = \{g^m : m \in \mathbb{Z} \}$$
>[!warning] Lemma 
>Suppose $g$ has order $n$. Then
>$$\langle g \rangle = \{1, g, g^2, ..., g^{n - 1}\}$$
>Additionally, $1, g, ..., g^{n-1}$ are *pairwise distinct.* Thus $\# \langle g \rangle = n$ 
>> [!note]- Proof
>> 
>> It is clear that the right hand side of $\langle g \rangle = \{1, g, g^2,...,g^{n - 1} \}$ is contained within the left hand side. To prove the reverse inclusion we use division with remainder. 
>> Suppose $m \in \mathbb{Z}$. By division with remainder we can write 
>> $$m = qn + r, q, r \in \mathbb{Z}, 0 \le r \le n - 1$$
>> Then
>> $$
>> \begin{align}
>> g^m &= g^{qn + r} \\
>> 	&= g^{nq} \cdot g^r\\
>> 	&= g^r \text{ since } g^n = 1
>> \end{align} 
>> $$
>> Thus, $g^m \in \{1, g,...,g^{n - 1}\}$ 
>> Finally, suppose $g^a = g^b$ with $0 \le a \le b \le n - 1$. Then $g^{b - a} = 1$. However $0 \le b - a \le n - 1$. Since $g$ has order $n$, we have $b - a = 0$ so $b = a$, this the elements $1, g, ..., g^{n - 1}$ are pairwise distinct.

We say that $G$ is **cyclic** if $G = \langle g \rangle$ for some $g \in G$, which is called the **generator** of $G$. 

>[!warning] Lemma 
>Cyclic groups are abelian
>>[!note]- Proof
>>Suppose $G = \langle g \rangle$. Then
>>$$
>>\begin{align} 
>>g^r \cdot g^s &= g^{r + s}\\
>>		   &= g^{s + r} \quad \text{ Integer addition is commutative} \\
>>		   &= g^s \cdot g^r
>>   \end{align}
>>   $$

>[!example]
>In an additive group, $\langle g \rangle = \{mg : m \in \mathbb{Z} \}$. Thus $\mathbb{Z} = \langle 1 \rangle$ is cyclic of infinite order. Also $\mathbb{Z}/n\mathbb{Z} = \langle \bar{1} \rangle$ is cyclic of order $n$. 

>[!example]
>Let $n$ be a positive integer, and let $U_n = \{ \alpha \in \mathbb{C}^* : \alpha^n = 1 \}$. Then $U_n$ is a subgroup of the $n$-th roots of unity, and we know that $U_n$ is cyclic of order $n$ ;
>$$U_n = \langle \zeta \rangle = \{1, \zeta, \zeta^2,..., \zeta^{n-1}\}$$ 
>where $\zeta = \exp(\frac{2 \pi i}{n}).$
>It is important to realise that $\zeta$ isn't the only generator for $U_n$.
>We know that the order of $\zeta^k = \exp(\frac{2 \pi k}{n})$ is $\frac{n}{\gcd(k, n)}$. Thus $\zeta^k$ has order $n$ if and only if $\gcd(k, n) = 1$. Hence $U_n = \langle \zeta^k \rangle$ if and only if $\gcd(k, n) = 1$

>[!example]
>$\mathbb{R}^*, \mathbb{C}^*$ are not cyclic. One way of seeing this is to realise they're uncountable, and cyclic groups are always countable. 

# Symmetric Group 

# The Alternating Group 

# Rings and Fields

# Polynomials

# Subrings and Ideals 

# Quotient Rings 