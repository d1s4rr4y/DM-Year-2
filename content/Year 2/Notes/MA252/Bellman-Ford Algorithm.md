*Here we allow negative edge costs on arcs*

**Lemma 4.1:** No negative circuits in a graph $\Rightarrow \exists st$-walk $W$ $\exists st$-path $P$ with $c(P) \le c(W)$
*Proof:* If $W = (v_0,...,v_i = x,...,v_j = x,...,v_m)$ is not a path then $$W := (v_0,...,v_i, v_j+1,...,v_m)$$ is a shorter $st$-walk with $c(W') \le C(W)$. Replace $W$ by $W'$ and repeat until $W$ is a path. ^ce2208



**Algorithm 4.1 (Bellman-Ford):**  ^9e6b50
$$\begin{align} 
&\text{Input: } D = (V, A), s \in V, c : A \to \mathbb{R} \\
&\text{Output: } d^* \text{ or ``negative circuit"}\\
&d_0(s) := 0, d_0(u) := \infty \ \forall u \in V \backslash \{s\}\\
&n := \lvert V \rvert\\
&\text{For } i := 1 \text{ to } n - 1\\
&\qquad d_i := d_{i-1}\\
&\qquad \text{For } uv \in A\\
&\qquad\qquad d_i(v) := \min(d_{i-1}(v), d_{i - 1}(u) + c(uv))\\
&\text{If } \forall uv \in A \ d_{n - 1}(v) \le d_{n-1}(u) + c(uv)\\
&\qquad \text{then output } d_{n-1}\\
&\qquad \text{else output ``there is a negative circuit"}
\end{align}$$
The result of the inner cycle over all $vu \in A$ is to assign $$d_i(v) := \min(d_{i-1}(V), \min\{d_{i - 1}(u) = + c(uv) : vu \in A\}) \quad \forall v \in V$$
The running time $r(D, c, s) = O(\lvert V\rvert (\lvert V \rvert + \lvert A \rvert))$. We can assume that $\lvert V \rvert \le 2 \lvert A \rvert$ by removing isolated vertices. Then the running time can be written as $O(\lvert V \rvert \cdot \lvert A \rvert)$. 

**Definition:** $d_i^*(t) :=$ the min cost of an $st$-walk with at most $i$ arcs (or $\infty$ if none exists). 

Let $d_n, d_{n-1},...$ be defined by continuing to run the [[#^9e6b50|Bellman-Ford Algorithm]]
**Lemma 4.2:** For any (possibly negative) costs and any integer $i \in \mathbb{N}, d_i(u) = d_i^*(u)$ for all $u \in V$
*Proof: (by induction on $i$)* The base case $i = 0$ is trivially true. Suppose $i \ge 1$ and the lemme is true for $i - 1$. Take any $u \in v$. If $d_i^*(V) = \infty$ then $d_i(V) = \infty$ and we are done. 
Suppose that the claim is false for $u$. Take an $su$-walk $W = (v_0 = s,..., v_m = u)$ of min cost: $c(W) = d_i^*(u)$. Then, since $(v_0,...,v_{m-1})$ is a mon-cost walk with $\le m - 1$ arcs, $$d_i(v+m) \le d_{i-1}(v_{m-1}) + c(v_{m-1},u) = d_{i-1}^*(u) + c(v_{m-1}, u) = d^*(u) = c(W) = d_i^*(u)$$ On the other hand, at least one of the following holds: $d_i(u) = d_{i - 1}(u)$ and then we have $$d_i(u) = d_{i-1}(u) = d_{i-1}^*(u) \ge d_i^*(u)$$
or, $d_i(u) = d_{i-1}(v) + c(vu)$ for some $v$ with $vu \in A$, and then we have $$d_i(u) = d_{i-1}(V) + c(vu) = d_{i-1}^*(v) + c(vu) \ge d_i^*(u)$$
Thus $d_i^*(u) = d_i(u)$ as required.  ^25dfa5

**Theorem 4.1:** The [[#^9e6b50|Bellman-Ford Algorithm]] is correct. 
*Proof:* Suppose that no update can be applied to $d_{n-1}$, that is $d_n = d_{n-1}$. Then, for every $i \ge n$, $d_i = d_{n-1}$ and by [[#^25dfa5|Lemma 4.2]], $d_{n-1}(u) = d_n(u) = ...$ is the min-cost of an $su$-walk (with no restrictions on its length). 
Also, no negative circuit $C = (v_0,...,v_m)$ is reachable from $s$, otherwise for all $i \ge n$ we would have $d_{i + m}(v_0) \le d_i(v_0) + c(C) < d_i(v_0)$, which is a contradiction to $d_i$ stabilising after $n-1$. By [[#^ce2208|Lemma 4.1]] applied to the part of $D$ reachable from $s$, $d_{n-1}(u)$ is the mon-cost of an $su$-path, as required.

Suppose that the Bellman-Ford Algorithm outputs "negative circuit", i.e. $d_n(u) < d_{n-1}(u)$ for some $u \in V$. Then the min-cost $d^*(u)$ of an $su$-path is at least $d_{n-1}^*(u)$ since every path has at most $n - 1$ edges. By [[#^25dfa5|Lemma 4.2]] we have $d_{n-1}^*(u) = d_{n-1}(u)$ which we assumed to be strictly larger than $d_n(u)$. That is, there is an $su$-walk (of length $n$) of cost less than the min-cost of an $su$-path. [[#^ce2208|Lemma 4.1]] shows that there is a negative circuit, concluding the proof that the Bellman-Ford Algorithm produces the correct answer.


**Note:** For an undirected graph $G = (V, E)$, if $c(xy) < 0$ for some $xy \in E$ then $(x, y, x)$ is a negative circuit; otherwise $c \ge 0$ and, for large $\lvert V \rvert$, Dijkstra runs faster than Bellman-Ford (so Bellman-Ford is not very useful for undirected graphs). 