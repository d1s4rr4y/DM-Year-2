# Enumerative Combinatorics

# Graph Theory

**Degree-Sum Formula** Let $G = (V, E)$ be a graph. Then $\sum_{v \in V} \deg(v) = 2|E|$ 

**Characterisation of Trees:** Let $G = (V, E)$ be a graph. The following are equivalent:
- $G$ is a tree 
- $G$ is connected and $|V| = |E| - 1$
- $G$ is acyclic and $|V| = |E| - 1$ 
- Any two vertices in $G$ are connected by a unique path
- $G$ is connected, but deleting any edge of $G$ yields a disconnected graph
- $G$ is acyclic, but adding an edge between any two vertices of $G$ yields a graph with a cycle.

**Cayley's Formula:** Given a labelled vertex set $V = \{v_1,...,v_n\}$, there are $n^{n - 2}$ different trees with vertex set $V$.

**Euler's Theorem:** A graph is Eulerian if and only if it is connected and every vertex has even degree. ^eulersThm

**Characterisation of Bipartite Graphs:** A graph is bipartite if and only if it has no odd cycles.

**Hall's Theorem:** Let $G$ be a bipartite graph with partite sets $A$ and $B$. Then $G$ has a matching of $A$ if and only if $G$ satisfies *Hall's condition*; for every $S \subseteq A$ we have $N_G(S)| \ge |S|$, where $$N_G(S) = \{b \in B : b \text{ is adjacent to } s \text{ for some } s \in S\}$$ ^hallsThm
 
**Euler's Formula:** Let $G$ be a planar graph, drawn with $v$ vertices, $e$ edges and $f$ faces. Then $v - 2 + f = 2$

**Planar Graph no. Edges:** A simple planar graph with $n$ vertices has at most $3n - 6$ edges 

**Planar Graph Max Degree:** A simple planar graph ahs a vertex with degree at most 5 

**Known Non-Planar Graphs:** $K_5$ and $K_{3, 3}$ are not planar 

**Kuratowski-Wagner Theorem:** A graph $G$ is planar if and only if it does not have $K_{3, 3}$ or $K_5$ as a minor. ^kwThm

**Four/Five Colour Theorem:** If $G$ is a simple planar graph, then $\chi(G) \le 4$

**Ramsey's Theorem:** Fix positive integers $k$ and $\ell$. Then for sufficiently large $n$, every 2-edge-colouring of $K_n$ contains a red $K_k$ or a blue $K_\ell$ ^ramseyThm

**Upper Bound For Ramsey Numbers:** The Ramsey Number $R(k, \ell)$ satisfies $R(k, \ell) \le {{k + \ell - 2} \choose {k - 1}}$ 