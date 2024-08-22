← Back to the [[Enumerative Combinatorics|Previous Topic]]
- - -
# Definitions 

- **Graph** - A (simple) graph is a pair $G = (V, E)$, where $V$ is a finite set ("vertices") and $E$ is a set ("edges") of unordered pairs $\{v, w\}$, where $v, w \in V$.
	- In some cases we allow duplicate edges and groups, in which case we call $G$ a *multigraph*
- **Degree** - The degree $\deg (v)$ of a vertex $v$ of a graph is the number of edges incident to $v$
- **Regular Graph** - A graph $G$ is $k$-regular if $\deg (v) = k$ for every vertex $v$
- **Subgraph** - A subgraph of a graph $G = (V, E)$ is a graph whose vertices are a subset of $V$ and whose edges are a subset of $E$
- **Spanning Subgraph** - A subgraph $H$ of $G = (V, E)$ is a spanning subgraph if $H$ has a vertex set $V$
- **Induced Subgraph** - Given a graph $G = (V, E)$ and a subset $U \subseteq V$, the subgraph of $G$ induced by $U$ is the subgraph of $G$ consisting of the vertices $U$ and *all* edges of $G$ connecting vertices in $U$. 
- **Isomorphic Graphs, Graph Isomorphisms, Graph Automorphism** - An Isomorphism from a (simple) graph $G = (V, E)$ to a (simple) graph $G' = (V', E')$ is a bijection $\phi : V \to V'$ such that vertices $v_1, v_2 \in V$ are connected by an edge of $G$ if and only if $\phi(v_1), \phi(v_2) \in V'$ are connected by an edge of $G'$. Two (simple) graphs are isomorphic if there exists an isomorphism between them. An automorphism of a (simple) graph $G$ is an isomorphism from $G$ to itself.
- **Walk, Closed Walk, Path, Cycle** - A walk in a graph is a sequence of the form $v_1, e_1, v_2, e_2,...,v_{k - 1}, e_{k-1}, v_k$, where $e_i$ connects $v_i$ to $v_{i + 1}$. A closed walk is a walk such that $v _ k = v _ 1$ A path in a graph is a walk with no repeated vertices. A cycle in a graph is a closed with no repeated vertices (other than the start/end)
- **Connected Graph** - A graph $G$ is connected if for any two vertices $v_1, v_2$, there exists a path in $G$ from $v_1$ to $v_2$. The maximal connected subgraphs of $G$ are called connected components.. 
- **Tree, Rooted Tree, Leaf** - A graph $G$ is a tree if it is connected and acyclic (contains no cycles). A rooted tree is a tree with a distinguished vertex. A leaf of a tree is a degree-1 vertex. 
- **Colouring, Chromatic Number $\mathcal{X}(G)$** - A (vertex) colouring of a graph $G$ is an assignment of a colour to each vertex such that adjacent vertices have different colours. The chromatic number of a graph is the least number of colours used in any colouring. 
- **Bipartite Graph, Multipartite Graph** - A graph is $k$-partite if there exists a proper vertex colouring with $k$ colours, 
- **Eulerian Circuit, Eulerian Graph** - An Eulerian circuit of a graph is a closed walk that traverses each edge exactly once. A graph that has an Eulerian circuit is called Eulerian, 
- **Hamiltonian Cycle, Hamiltonian Graph** - A Hamiltonian cycle of a graph is a closed walk that visits every vertex in a graph exactly once. A graph that has a Hamiltonian cycle is called Hamiltonian. 
- **Independent Set of Vertices, Vertex Independence Number $\operatorname{ind}_V(G)$** A subset $I$ of the vertices of a graph $G$ is an independent set if no two elements of $I$ are adjacent in $G$. The vertex independence number $\operatorname{ind}_V(G)$ of $G$ is the largest possible size of an independent set of vertices. 
- **Independent Set of Edges, Matching, Perfect Matching, Matching Number $\operatorname{ind}_E(G)$** - A subset $M$ of the edges of a graph $G$ is an independent set, or matching, if no two elements of $M$ share an endpoint. A matching that spans $G$ (touches every vertex) is a perfect matching. The edge independence number, or matching number, $\operatorname{ind}_E(G)$ of $G$ is the largest possible size of a matching. 
- **Planar** - A graph is planar if it can be drawn in $\mathbb{R}^2$ with no edge crossings. 
- **Edge Contraction** - Given a graph $G$ and an edge $e$, contracting $e$ yields a new graph where $e$ has been "shrunk to a point". That is, the edge $e$ disappears, and its two endpoints are merged, and all other connectivity remains as in $G$. 
- **Minor** - A graph $H$ is a minor of $G$ if $H$ can be obtained from $G$ by a sequence of edge contractions, edge deletions, and vertex deletions (deleting a vertex also means deleting all incident edges). 
- **Ramsey Number** - For positive integers $k, \ell$, the Ramsey Number $R(k, \ell)$ is the smallest $n$ such that every 2-edge-colouring of $K_n$ has either a red $K_k$ or a blue $K_\ell$

# Main Theorems 
- **Degree-Sum Formula** - Let $G = (V, E)$. Then $\sum_{v \in V} \deg(v) = 2|E|$
- **Characterisation of Trees** - Let $G = (V, E)$ be a graph. The following are equivalent:
	- $G$ is a tree
	- $G$ is connected and $|V| = |E| - 1$
	- $G$ is acyclic and $|V| = |E|-1$
	- Any two vertices in $G$ are connected by a unique path 
	- $G$ is connected, but deleting any edge of $G$ yields a disconnected graph. 
	- $G$ is acyclic, but adding an edge between any two vertices of $G$ yields a graph with a cycle.
- **Euler's Theorem, 1736** - A graph is Eulerian if and only if it is connected and every vertex has an even degree
- **Dirac's Theorem, 1952** - If every vertex of a simple graph $G = (V, E)$ has a degree at least $|V| / 2$, then $G$ is Hamiltonian. 
- **Characterisation of Bipartite Graphs** - A graph is bipartite if and only if it has no odd cycles
- **Hall's Theorem, 1935** - Let $G$ be a bipartite Graph with partite sets $A$ and $B$. Then $G$ has a matching of $A$ if and only if $G$ satisfies Hall's Condition; that is, for every $S \subseteq A$ we have $|N_G(S)| \ge |S|$ where $N_G(S) = \{b \in B: b \text{ is adjacent to } s \text{ for some } s \in S\}$
- **Euler's Formula, 1750 - 1811** - Let $G$ be a planar graph, drawn with $v$ vertices, $e$ edges, and $f$ faces. Then $v - e + f = 2$
- *Corollary* - A simple planar graph with $N$ vertices has at most $3n - 6$ edges 
- *Corollary* A simple planar graph has a vertex with degree at most 5
- *Corollaries* $K_5$ and $K_{3, 3}$ are not planar
- **Kuratowski-Wagner, 1930/1937** - A graph $G$ is planar if and only if it does not have $K_5$ or $K_{3, 3}$ as a minor
- **Four/Five Colour Theorem** - If $G$ is a simple planar graph, then $\mathcal{X}(G) \le 4$
- **Ramsey's Theorem, 1930** - Fix positive integers $k$ and $\ell$. Then for sufficiently large $n$, every 2-edge-colouring of $K_n$ contains a red $K_k$ or a blue $K_\ell$ 
- *Corollary (Upper bound for Ramsey Numbers)* - The Ramsey Number $R(k, \ell)$ satisfies $R(k, \ell) \le {k + \ell - 2 \choose k - 1}$
- **Erdös Lower Bound for Ramsey Numbers, 1947** - The Ramsey number $R(k, k)$ satisfies $R(k, k) > 2^\frac{k}{2}$

- - - 
End of Content, back to the [[MA241 - Combinatorics|Module Overview]] →