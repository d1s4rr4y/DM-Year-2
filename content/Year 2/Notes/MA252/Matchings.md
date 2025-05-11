A *matching* in a graph $G$ is a set $M$ of disjoint edges. The *matching number*$\mu(G)$ is the maximum number of disjoint edges.

A *vertex cover* is a set $X \subseteq P \cup Q$ such that every edge intersects $X$ (or equivalently $G - X$ has no edges). The *vertex cover number* $\tau(G)$ is the minimal size of a vertex cover. 
A graph $G = (V, E)$ is *bipartite* if $V$ is partitioned as $P \cup Q$ with all edges going across. 

**Theorem 8.1 (Konig)** $\mu(G) = \tau(G)$ for any bipartite $G = (P \cup Q, E)$ 
*Proof:* Construct a new network $N$ as follows: each edge $xy$ is replaced by one arc from $P$ to $Q$ of capacity $\lvert E \rvert + 1$. Add new vertices $s$ and $t$, with arcs from $s$ to $P$ and $Q$ to $t$, each of capacity 1
There is a natural bijection between matchings $M$ in $G$ and integral flow $f$ in $N$. Given $M$, define a flow $f$ in $N$ by $f(xy) := 1$ if $xy \in M$ and $xy \in P \times Q$, or if $x = s$ and $y$ is matched, or if $x$ is matched and $y = t$; otherwise let $f(xy) := 0$. Conversely, for any integral flow $f$, the set $$M := \{\{x, y\} : f(x, y) = 1, x \in P, y \in Q\}$$which is a matching in $G$. 
Take a min $st$-cut $\delta(X)$. Let $P' := P \cap X$ and $Q' := Q \cap X$; thus $X = s \cup P' \cup Q'$. Its capacity is $$b(\delta(X)) = \lvert P \backslash P' \rvert + (\lvert E \rvert + 1) \cdot \#(P', Q \backslash Q')\text{-arcs} + \lvert Q' \rvert$$ There are cuts of value $\le \lvert E \rvert$ so $\#(P', Q \backslash Q')\text{-arcs} = 0$. This means that $(P \backslash P') \cup Q'$ is a vertex cover in $G$, so $\lvert P \backslash P' + \lvert Q' \rvert \ge \tau(G)$. By [[Year 2/Notes/MA252/Network Flows#^ebf931|Theorem 6.2]] there is an integral max-value flow $f$ with $$\lvert F \rvert = \lvert P \backslash P' \rvert + \lvert Q' \rvert \ge \tau(G)$$Since the capacities at $s$ are at most 1, each $x \in P$ receives flow 0 or 1, and if $f(sx) = 1$ then there is $y \in Q$ such that $f(xy) = 1$ and $f(xz) = 0$ for all $z \in Q \backslash \{y\}$. The analogous claim holds for $P$. Thus the edges $\{x, y\}$ corresponding to the arcs $(x, y) \in P \times Q$ with flow 1 form a matching $M$ in $G$. Moreover, by [[Year 2/Notes/MA252/Network Flows#^48073c|Lemma 6.1]] we have that 
$$\lvert f \rvert = f(\delta(s \cup P)) = \lvert M \rvert$$ Thus $\mu(G) \ge \lvert M \rvert = \lvert f \rvert \ge \tau(G)$ as desired. ^713b94

An *augmenting* path for a matching $M$ in a graph $G$ is a path that starts/ends at an unmatched vertex (not covered by an edge of $M$) and alternates between $E(G) \backslash M$ and $M$. The *augmentation* of $M$ along $P$ is the new (larger) matching $M'$ which is XOR of $M$ and $E(P)$.
Augmenting paths for a bipartite graph $G$ correspond, after adding the special vertices $s$ and $t$, to augmenting paths in the above network $N$. 

**Theorem 8.2 (Berge)** For an arbitrary graph $G$, a matching $M$ has the maximum size if and only if there is no augmenting path. 
*Proof* Forwards is obvious, as an augmenting path allows us to strictly increase the size of the matching. 
Backwards: Suppose $\lvert M' \rvert > \lvert M \rvert$ for some matching $M'$. Take the XOR of $M$ and $M'$/ Its connectivity components are cycles and paths. All cycles alternate between $M$ and $M'$, so are even and have the same number of edges from each. Thus at least one path $P$ has more $M'$-edges. It starts and ends with an $M'$-edge and its endpoints are not matched by $M$, so it is augmenting for $M$. 

**Theorem 8.3 (Hall's Marriage Theorem)** A bipartite graph $G$ on $P \cup Q$ has a matching of size $\lvert P\rvert$ if and only if $\lvert N(S) \rvert \ge \lvert S \rvert$ for all $S \subseteq P$ 
*Proof* $\Rightarrow$ trivial
$\Leftarrow$ Take a minimum vertex cover $P' \cup Q'$ with $P' \subseteq P$ and $Q' \subseteq Q$. Let $S := P \backslash P'$. Hall's condition implies that $$\lvert P \rvert - \lvert P' \rvert = \lvert S \rvert \le \lvert N(S) \rvert$$Which is at most $\lvert Q' \rvert$ since $Q'$ has to contain $N(S)$. Thus $\tau(G) = \lvert P' \rvert + \lvert Q' \rvert \ge \lvert P \rvert$. Konig's Theorem ([[#^713b94|Theorem 8.1]]) gives that $G$ has a matching of size $\lvert P \rvert$ as required. 

# Weighted Matchings
Consider this problem: We are given an $n \times n$ matrix $(c_{ij})_{i, j = 1}^n$. There are $n$ tasks to be done and $n$ workers to assign bijectively to these tasks. The cost of worker $i$ doing task $j$ is $c_{ij}$. Minimise the total cost. 
This includes the maximum matching problem in a bipartite graph $G$. Indeed, by adding isolated vertices we can assume that the parts have the same size, say $W = \{w_1,...,w_n\}$ and $T = \{t_1,...,t_n\}$. Define the $n \times n$ matrix $(c_{ij})_{i, j = 1}^n$ by letting $c_{ij}$ by $-1$ if $w_it_j$ is an edge and 0 otherwise. Then the matching number of $G$ is equal to the negation of the min-cost of an assignment. 

How can we solve this? The naive approach to check all $n!$ cases is too slow. 
However, the key observation is that adding a constant to a line (a row or a column) doesn't change the set of optimal assignments. We can assume that $c_{ij} \ge 0$ for all $i, j$

**Algorithm 8.1 (Hungarian Algorithm)**
$$\begin{align}
&\text{Input: Matrix } (c_{ij})_{i, j = 1}^n \text{ with non-negative entries}\\
&\text{Output: Bijection } \sigma:[n] \to [n] \text{ whose cost } \sum_{i = }^n c_{i, \sigma(i)} \text{ is minimum}\\
&W := \{w_1,...,w_n\}\\
&T := \{t_1,...,t_n\}\\
&\text{While } G:=(W \cup T, \{\{w_i, t_j\}:c_{i,j} = 0\}) \text{ has no perfect matching}\\
&\qquad\text{Find a vertex cover } W' \cup T \text{ in } G \text{ with at most } n - 1 \text{ elements1}\\
&\qquad x:=\min\{c_{i, j}:w_i \in W \backslash W', t_j \in T \backslash T'\}\\
&\qquad\text{Subtract } x/2 \text{ from each line in } (W \backslash W') \cup (T \backslash T') \quad \text{[at least $n + 1$ lines]}\\
&\qquad\text{Add } x/2 \text{ to each line in } W' \cup T' \quad \text{[at most $n - 1$ lines]}\\
&\text{Output bijection } \sigma \text{ such that } c_{i, \sigma(i) = 0} \text{ for every } i \in [n]
\end{align}$$
Note that each change to the matrix decreases its sum of entries by at least $x$ and keeps each entry non-negative. The algorithm stops after the while-loop is repeated at most $O(n^2)$ times. 

# Stable Matchings 
**Example** We have a set $M$ of $n$ men and $W$ of $n$ women. Each man $m$ has ordering $>_m$ n $W$, and each woman $w$ has an ordering $>_w$ on $M$. We want to marry $n$ couples. 
Take for example, $M = 12$, $W = ab$, $1 : a > b, 2 : a > b, a : 1 > 2, b : 2 > 1$ 
The matching $1b, 2a$ is not good - 1 and $a$ prefer each other to their matches.

A matching is called *unstable* if there are matched pairs $mw$ and $m'w'$ such that $w' >_m w$ ($m$ prefers $w'$ to $m$) and $m >_{w'} m'$. Otherwise the matching is called *stable*

Does a stable matching always exist? How can we find one? 

**Algorithm 9.1 (Gale-Shapley)**
Each day:
	Each man goes to the top woman on his list
	Each woman says 
		"Maybe" to the best suitor
		"No" to all others
	Each rejected man crosses that woman out of his list
Repeat as long as at least one "No" is said 
*Proof that the Gale-Shapley Algorithm returns a stable matching* Note that the algorithm stops after at most $n^2$ days. Can a man be rejected $n$ times? Look at the moment of the $n$-th rejection. The woman who rejects him has a better suitor while every other woman rejected this man in the past, and thus has at least one suitor. But there are only $n - 1$ other men, forming a contradiction. 
So all men are paired. 
Suppose the algorithm matched $mw$ and $m'w'$ such that $m$ and $w'$ prefer each other to their matches. Why did $m$ propose to $w$? Because $w'$ rejected him earlier. Why did $w'$ reject $m$? Because she had a better suitor $s$ at the time when $m$ proposed to her. But her final match $m'$ is as good as $s$, so $m' \ge_{w'} s >_{w'}m$ which is a contradiction. 

So a stable matching always exist (though there may be many of them)

**Theorem 9.1** The Gale-Shapley Algorithm is men-optimal and women-pessimal
*Proof* Suppose an obtained matching is not men-optimal. Take the smallest $t$ such that on Day $t$ some man $m$ is rejected by $w = opt(m)$. Why? Because $w$ said £maybe$ to some $m'$ with $m' > _w m$. Since $m'$ is not yet rejected by $opt(m')$ (by minimality of $t$) we have that $w \ge_{m'} opt(m')$. Take a stable matching $S$ that matches $mw$. Let $w^*$ be the $S$-match of $m'$. Then $w \ge_{m'} opt(m') \ge_{m'} w^*$. Bu then $S$ is unstable: both $m'$ and $w$ prefer to be matched together.

**Lemma 9.1** Every men-optimal matching $T$ is women-pessimal
*Proof* Let $T$ pair $mw$. Suppose for contradiction that there is a stable matching $S$ with $m'w$ such that $m >_w m'$. But $m$ prefers $w = opt(m)$ to his $S$-match. Thus, $S$ is not stable: $mw$ are happier together. 