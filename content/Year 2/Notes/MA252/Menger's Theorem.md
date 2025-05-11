**Theorem 7.1 (Menger)** Let $D = (V, A)$ be a digraph and let $S, T \in V$ be two disjoint sets of vertices. Then the Max $\#$ of arc-disjoint paths from $S$ to $T$ = the min $\#$ of arcs whose removal destroys all paths from $S$ to $T$. Moreover, we can choose arc-disjoint paths so that if $xy, yx \in A$ and $xy$ is used by some path then no path uses $xy$. 
*Proof:* $\le$ is obvious. 
$\ge$: Given $D, S, T$, we construct a network. Let the capacities of all arcs in $A$ be 1. Add two new vertices $s$ and $t$, with $s$ sending arcs to $S$ and $t$ receiving arcs from $T$, with new arcs having capacity $\infty$. Let $N$ be the obtained network. Thus its vertex set is $V' := V \cup \{x, y\}$ and arc set is $A' := A \cup \{sx : s \in S\} \cup \{yt : y \in T\}$ ^c015bb

Take a max flow $f$. By [[Year 2/Notes/MA252/Network Flows#^8e1840|Theorem 6.2]] we can additionally assume that $f$ is integral; in particular, $f$ assumes value 0 or 1 on each arc of $A$. Also, we can assume that for every double arc $xy, yx \in A$ if $f(xy) = 1$ then $f(yx) = 0$: as long as there are $x, y$ with $f(xy) = f(yx) = 1$, decrease $f$ by 1 on $xy$ and $yx$. 

Let $k := \lvert f \rvert \in \mathbb{N}$ be its value. Repeat the following while $k > 0$. Make a digraph $D'$ where $xy \in A'$ is an arc of $D'$ iff $f(xy) > 0$. Then $D'$ has an $st$-path $P$, for otherwise the set $X$ of vertices reachable from $s$ in $D'$ would be an $(s, t)$-cut with zero flow passing through it, contradicting $\lvert f \rvert > 0$. Decrease $f$ by 1 on all arcs in $P$, with the new flow $f$ having value $k - 1$. Repeat until $\lvert f \rvert  = 0$, obtaining $k$ arc-disjoint paths in $D'$. Note that if $A$ has both $(x, y)$ and $y, x)$, then at most one of these two arcs is used by the paths. 

Take a min $st$-cut $X'$ in $N$. Its capacity is at most $\lvert A \rvert$. Since each $sS$-arc and each $Tt$-arc has capacity larger than $\lvert A \rvert$, none of these arcs can be in $\delta(X')$ and we have that $S \subseteq X'$ and $T \cap X = \emptyset$. By [[Year 2/Notes/MA252/Network Flows#^3de692|Theorem 6.1]], $b(\delta(X')) = k$. 

Let $X := X' \backslash \{s\}$. Every $ST$-path $P = (v_0,...,v_m)$ in $D$ corresponds to an $st$-path $P' = (s, v_0,...,v_m, t)$ in $D'$. The path $P'$ has a vertex in $X$ followed by a vertex in $V \backslash X$. Thus $X$ separates $S$ from $T$ in the original digraph $D$. Now the desired inequality $\ge$ follows. 

[[#^c015bb|Theorem 7.1]] remains true but becomes trivial if $S$ and $T$ intersect. Then, we have infinitely many arc-disjoint paths while the set of $ST$-separating cuts is empty so the minimum over it is also $\infty$. It is also easy to see that the smallest number of arcs separating $S$ from $T$ is equal to the minimum of $\delta(X)$ over all $X \subseteq V$ with $S \subseteq X \subseteq V \backslash T$ 

**Theorem 7.2 (Menger)** Let $G = (V, E)$ be a graph and let $S, T \in V$ be two disjoint sets of vertices. Then the max $\#$ of edge-disjoint paths from $S$ to $T$ = min $\#$ of edges whose removal disconnects $S$ from $T$. 
*Proof:* The $\le$ direction is obvious, so we will prove $\ge$. Consider the digraph $D = (V, A)$ where for each edge $\{x, y\} \in E$ we put arcs $(x, y)$ and $(y, x)$ into $A$. 
Apply [[#^c015bb|Theorem 7.1]] to $D$ to find $k$ arc-disjoint $ST$-paths and a $k$-set $F \subseteq A$ that separates $S$ from $T$, for some $k$. Since $\{x, y\} \in E$ can be used by at most one of the obtained paths, we have $k$ edge-disjoint $ST$-paths in $G$. Also, the set of edge $\{\{x, y\}: (x, y) \in F\}$ disconnects $S$ from $T$ in $G$.  ^581cd7

**Definition:** An undirected graph $G$ is called *$k$-edge-connected* if any removal of at most $k - 1$ edges leaves $G$ connected. 

The following can be shown to be equivalent to [[#^581cd7|Theorem 7.2]] (e.g. to derive Theorem 7.2 from Theorem 7.3, add two extra vertices $s$ and $t$ adjacent precisely to $S$ and $T$ respectively)

**Theorem 7.3 (Menger)** A graph $G$ is $k$-edge-connected iff for any two points there are $\ge k$ edge-disjoint paths

**Definition** Let $G = (V, E)$ be a graph and $S, T \subseteq V$ be two sets. A set $X \subseteq V$ of vertices *separates* $S$ from $T$ if $G - X := (V \backslash X, \{\{x, y\} \in E : x, y \in V \backslash X\})$ has no paths from $S \backslash X$ to $T \backslash X$ (equivalently, every path $P$ in $G$ starting in $S$ and ending in $T$ has at least one vertex from $X$). Such $X$ always exists. Also, $X$ has to contain every vertex in $S \cap T$  

**Theorem 7.4 (Vertex Form of Menger's Theorem)** Let $G = (V, E)$ be a graph and $S, T \subseteq V$ be two sets. Then the maximum number of vertex-disjoint $ST$-paths is equal to the smallest size of $X \subseteq V$ separating $S$ from $T$.
*Proof is non-examinable*

