**Algorithm 2.1 (BFS)** ^95c476
$$\begin{align}
&\text{Input: digraph } D = (V, A)\text{, vertex } s \in V\\
&\text{Output distances from } s\\
&V_0 := \{s\}\\
&i := 0\\
&\text{While } V_i \ne \emptyset\\
&\qquad V_{i+1} := \{v \in V \backslash (V_0\cup ... \cup V_i : \exists u \in V_i, uv \in E)\\
&\qquad i := i + 1
\end{align}$$
**Lemma 2.1:** For each integer $i \ge 0$, the set $V_i$ returned by the BFS algorithm consists exactly of the vertices at distance $i$ from $s$. 
*Proof: (Induction)* The lemma is trivially true in the base case $i = 0$ when $V_0 = \{s\}$.
For the inductive step, take any $i \ge 0$. Note that a vertex $v$ is at distance $i + 1$ from $s$ if and only if $v$ is not at distance at most $i$ from $s$ and there is a vertex $u$ at a distance $i$ from $s$ with $uv \in A$. This is exactly the definition of $V_{i+1}$ within the BFS algorithm, QED. ^cee4e1

**Note** that a vertex $v$ is not in any constructed set $V_i$ if and only if $\text{dist}(s,t) = \infty$

**Algorithm 2.2 (Dijkstra's Algorithm)**
$$\begin{align}
&\text{Input: digraph } D = (V, A) \text{, cost } c:A \to \mathbb{R}_{\ge 0} \text{, vertex } s \in V\\ 
&\text{Output: } d^*\\
&U := V \text{ [View U as the set of yet "unvisited" vertices]}\\
&d(s) := 0\\
&d(u):=\infty \text{ for } u \in V \backslash \{s\}\\ 
&\text{While } U \ne \emptyset\\
&\qquad \text{Find a vertex } u \in U \text{ such that } d(u) = \min_U d \text{ [we call the picked vertex u "active"]}\\
&\qquad \text{For each } uv \in A \text{ with } u \in U \text{ and } d(v) > d(u) + c(uv)\\
&\qquad \qquad d(v) :+ d(u) + c(uv) \\
&\qquad U := U \backslash \{u\}
\end{align}$$
Where $d^*(u) := \text{dist}^c(s,u)$ for each $u \in V$

**Lemma 2.2** At every time in Dijkstra's Algorithm, we have $d \ge d^8$
*Proof: (Induction on the number of steps)* The base case (the initial assignment $d = (0, \infty,...,\infty)$) trivially satisfies the lemma.
Suppose that the new step changed $d(v)$ by replacing it by (smaller) $d(u) + c(uv)$. Bu induction, $d(u) \ge d^*(u)$. Thus the new value of $d(v)$ is at least $d^*(u) + c(uv)$. 
To finish this proof it suffices to show that $d^*(u) + c(uv)$ is at least $d^*(v)$. Tae a mon-cost $su$-path $P = (v_0,...,v_m)$. If $P$ passes through $v$ then its cost $d^*(u)$ itself is at least $d^*(v)$, otherwise $(v_0,...,v_m, v)$ is an $sv$-path so its cost $d^*(u) + c(uv)$ is at least $d^*(v)$ as required.  ^9ab7ae

**Theorem 2.1:** The final $d(u)$ in Dijkstra's algorithm is equal to $d^*(u) \forall u \in V$ 
*Proof:* By [[#^cee4e1|Lemma 2.2]] it suffices to show that for every $u \in V$ the final $d(u)$ is at most $d^*(u)$. Suppose that this is false for some $u$. Take such $u$ which is removed from $U$ at the earliest time. Fix the moment when we are about to make $u$ "active" (so that $d(u) = \min_Ud$ and $u \in U$)
Take a min-cost $su$-path $P = (v_0 = s,..., v_m = u)$, which exists as otherwise $d^*(u) = \infty$ which cannot be smaller than $d(u)$. Let $i$ be minimum such that $v_i \in U$.
Suppose that $i = 0$. Then $s = v_i$ is in $U$, so we are at the start of the algorithm (where $U = V$). By the choice of $u$, $u = s$. But then $d(u) = 0 = d^*(u)$ forms a contradiction.
Suppose that $i \ge 1$. Consider the earlier moment when $v_{i - 1}$ became active and we have just processed the arc $v_{i-1}v_i$. The value of $d(v_{i-1})$ is $d^*(v_{i-1})$ and since we have processed the arc $v_{i-1}v_{i}$, the value $d(v_i)$ is at most $d^*(v_{i-1}) + c(v_{i-1}v_1)$. The value of $d(v_i)$ cannot increase afterwards.
Thus, switching to the later moment when $u$ becomes active, we have
$$d(v_1) \le d^*(v_{i-1}) _ c(v_{i-1}v_i) = d^*(v_i)$$
Since $v_i$ is on the mon-cost $su$-path $P$, we have that $d^*(v_i) \le d^*(u)$. Putting all of this together we conclude that 
$$d(v_i) \le d^*(v_1) \le d^*(u) < d(u) = \min_U d$$
which is a contradiction to $v_i \in U$. 

# Asymptotic Notation Recap
Let $f : \mathbb{N} \to \mathbb{N}$ and $g : \mathbb{N} \to \mathbb{R}_{\ge 0}$
**Definition:** We write $f(n) = O(g(n))$ as $n \to \infty$ if $\exists n_0$ and $C$ such that $\forall n \ge n_0, \lvert f(n) \rvert \le Cg(n)$. Usually $g$ is a "simpler" function.
**Examples:**
- $n^2 = O(n^3)$: take $n_0 = 1 = C$
- $5n^2 = O(n^3)$
- $n^4 \ne O(n^3)$
- $2^n \ne O(n^3)$
- $f_1 = O(g), f_2 = O(g) \Rightarrow f_1 + f_2 = O(g)$ 
- $f = O(g), g = O(h) \Rightarrow f = O(h)$

# Running Time
**Random Access Machine (RAM) Model:** Each arithmetic operation or read/write to a variable takes one unit of time
$r(I) = \# \text{ operations on input } I$ 

**Examples:** Let $n$ be $\lvert V \rvert$ on an input digraph $D = (V, A)$. 
Running time of **BFS** is $O(n + \lvert A \rvert)$: Track the current remaining part $R = V \backslash (V_0 \cup ... \cup V_i)$ and, to define $V_{i+!}$, add for each vertex $v \in V_i$ all its out-neighbours in $R$. Thus, BFS is a linear time algorithm, i.e. it is as fast as reading the input, up to a constant factor.

Running time of **Dijkstra's** is $R(D, c, s) = O(n^2)$: the while-loop is executed $n$ times, we need $O(n)$ operations to find an active $u$ plus $O(n)$ operations to update the value for $v$ with $uv \in E$. 

# Speeding Dijkstra's With Heaps. 
Consider the case where $\lvert A \rvert$ is much smaller than $\lvert V \rvert ^2$ - we lose time finding the minimum of $d$. As we do not need to keep all vertices totally sorted we can arrange them using a **heap** (with the current function $d$ being the key). An ordering $H = (u_1,...,u_n)$ of the vertices such that if$i = \lfloor{j/2}\rfloor$ then $d(u_1) \le d(u_j)$, e.g. $d(u_1) \le d(u_2)$, $d(u_1) \le d(u_3)$ etc. 
View this as an almost full binary tree $T$: the first $\ell - 1$ levels are full while the last $\ell$'s level is filled from left to right. This only the lowest level can be incomplete. 
*Depth of* $T := \# \text{ levels } \ell$. We can have $1 + 2 + ... + 2^{\ell-1} \le n$ so $2^\ell - 1 \le n$ and $\ell = O(\log n)$
*Children of*  $u_i: u_{2i}$ and $u_{2i+1}$ 
*Parent of* $u_i$ for $i > 1$: $u_{\lfloor i/2 \rfloor}$
Heap (rephrased in terms of the tree $T$): the key of every non-root node $v$ is at least the key of its parent.
Dijkstra needs the following operations:
- Find an element $u \in U$ with the smallest value of $d$
- Decrease some values of $d$
- Remove the min-value element $u$ from $U$. 

## Finding min-value element(H):
Take $u_1$ (one operation)
Deleting the min-value element $u_1$ from heap $H = (u_1,...,u_n)$ can be done as follows:

**heap_remove_minimum(H):**
$u_1 := u_n$ 
$n := n - 1$ 
$\text{down\_heapify} (H, 1)$

**down_heapify($H$, $i$):**
While $u_i$ satisfies $d(u_i) > \max(d(u_{2i}), d(u_{2i+1}))$ (a child of $u_i$ has a smaller key)
	Let $j \in \{2i, 2i+1\}$ have smaller $d(u_j)$
	Swap $u_j$ and $u_i$
	$i := j$

This uses $O(\log n)$ operations. 

## Decreasing a value of $d$ 
Decreasing $d(u_i)$ in a heap $H=(u_1,...,u_n)$ can be done as follows: 

**heap_decrease_value$(H, i, \text{new\_value})$**
$d(u_i) := \text{new\_value}$ 
$\text{up\_heapify}(H, i)$ 

**up_heapify$(H, i)$**
While $d(u_i) < d(u_{\lfloor i/2 \rfloor})$ (the parent of $u_i$ has a larger key)
	swap $u_i$ and $u_{\lfloor i/2\rfloor}$
	$i := \lfloor i/2 \rfloor$

This uses $O(\log n)$ operations

**Algorithm 3.1 (Dijkstra with Heaps)** 
$$\begin{align}
&\text{Input: digraph } D = (V, A), \text{ cost } c : A \to \mathbb{R}_{\ge 0}, \text{ vertex } s \in V\\ 
&\text{Output: } d^*\\
&d(s) := 0\\
&d(u) := \infty \text{ for} u \in V \backslash \{s\}\\
&H := (u_1,...,u_n) \text{(some enumeration of } V \text { with } u_1 = s \text{)}\\
&\text{While } n \ge 1\\
&\qquad u := u_1\\
&\qquad \text{heap\_remove\_min(H) [note that this also decreases } n \text { by } 1 \text{]}\\
&\qquad \text{For each } uu_i \in A \text{ with } d(u_i) > d(u) + c(uu_i)\\
&\qquad \qquad \text{heap\_decrease\_value}(H, i, d(u) = c(uu_i))
\end{align}$$

**Theorem 3.1 (Johnson 1977):** Dijkstra's algorithm with heaps runs in time $$O((\lvert A \rvert + n) \log n)$$ where $n := \lvert V \rvert$
*Proof:* Dijkstra's minimises $d$ over $U$ and removes the min-value vertex $n$ times, decreases some value $d(u_i)$ at most $\lvert A \rvert$ times, so uses $O(n + n \log n + \lvert A \rvert \log n)$ operations.