A *network* is $N = (V, A, b, s, t)$ such that 
- $D = (V, A)$ is a digraph
- the *source* $s \in V$ satisfies that there is no $v$ with $(v, s) \in A$
- The *target* $t \in V$ satisfies that there is no $v$ with $(t, v) \in A$ 
- $b : A \to \mathbb{R}_{\ge 0}$, that is, *capacities/bounds* $b(v, w)$ for $(v, w) \in A$ are all non-negative.
capacity $\ne$ cost. 
- Cost of an arc: length, cost of building/using it (e.g. road tolls)
- Capacity of an arc: maximum throughput (e.g. thickness of a pipe)

A *flow* in $N$ (or an $(s,t)$-flow, or a flow from $s$ to $t$) is a function $f: A \to \mathbb{R}_{\ge 0}$ such that 
- $f(xy) \le b(xy)$ (we don't exceed any capacity)
- $\forall x \in V \backslash \{s, t \}$, it holds that $\sum_{yx \in A} f(yx) = \sum_{xz\in A} f(xz)$ (conservation law: flow into $x$ = flow out of $x$)
The *value* of flow $f$ is $\lvert f \rvert := \sum_{sx\in A} f(sx)$ 

We want to send max flow $f$ (i.e. maximise $\lvert f \rvert$) from $s$ to $t$ under these restrictions. 
A *cut* is a set $\delta(X) := \{(x, y) x \in X, y \in V \backslash X\}$ for some $X \subseteq V$ 

If $x \in X$ and $t \in V \backslash X$ then the cut $\delta(X)$ is called an $(s, t)$-cut. 

**Lemma 6.1** For every $(s, t)$-cut $\delta(X)$ and every $(s, t)$-flow $f$, we have
$$\sum_{xy \in \delta(X)}f(xy) - \sum_{zw \in \delta(V \backslash X)}f(zw) = \lvert f \rvert$$
*Proof* Sum the conservation law for all $x \in X\backslash \{s\}$
$$0 = \sum_{x \in X \backslash \{s\}} \left( \sum_{xz \in A} f(xz) - \sum_{yx \in A} f(yx)\right) = - \lvert f \rvert + \sum_{xy \in \delta(X)} f(xy) - \sum_{zw \in \delta(V \backslash X)} f(zw)$$ where the last equality can be checked by looking at the contribution of each arc to both sides. For an example, an arc $su$ with $u \in X \backslash \{s\}$ contributes $-f(su)$ to the left-hand side while contributing $-f(su)$ to $-f$ and $0$ to each of the two sums in the right-hand side. Another example, an arc $ab \in A$ with $a, b \in X \backslash \{s\}$ contributes $f(ab) - f(ab) = 0$ to the left-hand side and does not appear at all in the right-hand side.  ^48073c

**Corollary 6.1** If $f$ is a flow from $s$ to $t$ then $\sum_{sx \in A} f(sx) = \sum_{yt \in A}f(yt)$ 
*Proof:* Take $X := V \backslash \{t\}$ in [[#^48073c|Lemma 6.1]]

The *capacity*of an $(s, t)$-cut $\delta(X)$ is $b(\delta(X)) := \sum_{xy\in \delta(X)} b(xy)$ 

**Corollary 6.2** 
- (A) If $f$ is a flow on $N$ and $X$ is an $(s, t)$-cut then $\lvert f \rvert \le b(\delta(X))$ (thus max-flow $\le$ min-cut)
- (B) If $f$ is a flow with $\lvert f \rvert = b(\delta(X))$ for some $(s, t)$-cut then 
	- $\lvert f \rvert$ is maximal
	- For every $(x, y) \in \delta(X)$ we have $f(x, y) = b(x, y)$ and 
	- for every $(y, x) \in \delta(V \backslash X)$ we have $f(y, x)= 0$
*Proof:* (A) is clearly implied by [[#^48073c|Lemma 6.1]] 
For (B), the maximality of $\lvert f \rvert$ follows from (A). Also, we have again my [[#^48073c|Lemma 6.1]] that 
$$b(\delta(A)) = \lvert f \rvert = \sum_{xy \in \delta(X)} f(xy) - \sum_{zw \in \delta(V \backslash X)} f(zw) \le \sum{xy \in \delta(X)} f(xy) = b(\delta(X))$$ Since we have equality, $\sum_{xy \in \delta(X)} f(xy) = \sum_{xy \in delta(X)} b(xy)$ and $\sum_{zw \in \delta(V \backslash X)} f(zw) = 0$ which implies the stated claims by $0 \le f \le b$. 

**Aim:** T prove that max-flow = min-cut. We need some preliminaries first for a (not necessarily optimal) flow of $f$.
The *residual digraph* $D(f) = D(f, N)$ of a flow $f$: the same vertex set $V$ and arcs $(x, y)$ such that 
- $(x, y) \in A$ and $f(x, y) < b(x, y)$, or 
- $(y, x) \in X$ and $f(y, x) > 0$

An *augmenting path* $P$ for $f$ is an $(s, t)$-path in the digraph $D(f)$. 
Then, for some $\varepsilon > 0$ we can increase $f$ by $\varepsilon$ for each forward edge of $P$ and decrease $f$ by $\varepsilon$ for each backward edge. (If both $xy$, $yx$ are arcs in the input network $N$ for some arc $xy$ of $P$ then we can do both operations simultaneously for some $\varepsilon_{forward} \ge 0$ and $\varepsilon_{backward} \ge 0$ (with at least one strictly positive due to $xy$ being an arc of $P$), with the combined flow increase being $\varepsilon := \varepsilon_{forward} + \varepsilon_{backward} > 0$) 

*Augmentation* along $P$: do above with the $f$-width of $P$, the maximum possible $\varepsilon$. 

A *critical arc* of $P$: an ordered pair $v_{i - 1}, v_i$ which gives the $f$-width. Each of the corresponding arcs with disappear from the residual digraph when we augment along $P$. 

**Lemma 6.2** A flow $f$ in $N$ is maximum if and only if the residual digraph $D(f)$ has no $st$-path. 
*Proof:* If there is an augmenting path $P$ then the augmentation along $P$ strictly increases $\lvert f \rvert$ so $f$ is  not maximum. 
Conversely, suppose there is no augmenting path. Let $X := \{x : \exists st\text{-path in } D(f)\}$. For every $xy \in \delta(X)$ we have $xy \not \in A(D(f))$ by the definition of $X$ so $f(xy) = b(xy)$ by the definition of $D(f)$. Similarly for every $zx \in \delta(V \backslash X)$ we have $xz \not \in A(D(f))$ so $f(zx) = 0$. By [[#^48073c|Lemma 6.1]] $\lvert f \rvert = b(\delta(X))$ and thus the flow of $f$ is maximum. ^8e1840

This suggests:
**Algorithm 6.1 (Ford-Fulkerson)** 
$$\begin{align}
&\text{Input: Network } N = (V, A, b, s, t)\\
&\text{Output: max-flow } f \text{ in } N\\
&f := 0\\
&\text{While } D(f) \text{ has an } st \text{-path } P\\
&\qquad \text{augment } f \text{ along } P \text{(by the } f \text{-width of} P \text{, the max possible amount)}
\end{align}$$

**Theorem 6.1 (Max-Flow Min-Cut Theorem)** For any network $N$ there is a flow $f$ with $\lvert f \rvert = \text{min-cut}$
*Proof:* Max-flow is bounded so the supremum $F$ of $\lvert f \rvert$ over all flows is finite. Take a sequence $(f_n)_{n \in \mathbb{N}}$ of flows such that $\lim_{n \to \infty} \lvert f_n \rvert = F$. Enumerate all arcs of $N$ as $(a_1,...,a_m)$. By the Bolzano-Weierstrass Theorem, we can pass to a subsequence of $n$ such that $f_n(a_1)$ converges to some limit, and denote it by $f(a_1)$. By passing it to a further subsequence, we can assume that $f_n(a_2)$ converges and denote this limit $f(a_2)$. Repeat for each $a_i$. It is routine to verify that the obtained function $f: A \to \mathbb{R}$ as a pointwise limit of flows, is a flow itself. For example, let us check the conservation law for some $x \in V \backslash \{s, t\}$ 
$$ \sum_{xz \in A} f(xz) - \sum_{yx \in A} f(yx) = \sum_{xz \in A} \lim_n f_n(xz) - \sum_{yx \in A} \lim_n f_n(yx)  = \lim_n \left( \sum_{xz \in A} f_n(xz) - \sum_{yx \in A} f_n(yx) \right) = 0$$
where interchanging the limit and the sums/differences is allowed as there are finitely many summands and all limits are finite. ^3de692

Additionally, $\lvert f \rvert = lim_n \lvert f_n \rvert = F$, that is, the limit flow $f$ attains the supremum $F$. By [[#^8e1840|Lemma 6.2]], there is $X \subseteq V$ with $x \in X$ and $t \in V \backslash X$. Thus $\lvert f \rvert \le b(\delta(X))$. By [[#^48073c|Lemma 6.1]] we have equality and $X$ gives min-cut. 

If all capacities are integers then the Ford-Fulkerson Algorithm stops in finitely many iterations, and each intermediate flow has integer values, so we obtain:
**Theorem 6.2** If $b$ assumes integer values then at least one max-value flow has all values integer ^ebf931

**Theorem 6.3** In the Ford-Fulkerson Algorithm, if we always choose an $st$-path $P$ in $D(f)$ of the shortest length (i.e. the one with the smallest number of arcs), then we need at most $O(\lvert V \rvert \lvert A \rvert)$ augmentations
*Proof non-examinable*

**Algorithm 6.2 (Edmonds-Karp Algorithm)**
$$\begin{align}
&\text{Input: Network } N = (V, A, b, s, t)\\ 
&\text{Output: max-flow } f \text{ in } N\\
&f := 0\\
&\text{While } D(f) \text{ has an } st \text{-path } P\\
&\qquad \text{find a shortest such path } P\\
&\qquad\text{augment } f \text{ alng a } P \text{ by the } f \text{-width of } P
\end{align}$$
Using the [[Dijkstra's#^95c476|BFS Algorithm]] in Edmonds-Karp we get running time $O(\lvert V\rvert \lvert A \rvert ^2)$ 