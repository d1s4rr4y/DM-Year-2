# Enumerative Combinatorics
**n choose k:** Let $n \ge k$ be positive integers. We define *n choose k*, denoted $n \choose k$, to be the quantity $\frac{n!}{k!(n-k)!}$. The value $n \choose k$ is also called a *binomial coefficient*

**Generating Functions:** Let $(a_n)_{n \ge 0}$ be a sequence of numbers. The formal power series $$\sum_{n = 1}^{\infty} a_nx^n$$ is called the *ordinary generating function* of $(a_n)_{n \ge 0}$, and the formal power series $$\sum_{n=0}^{\infty} a_n \frac{x^n}{n!}$$ is called the *exponential generating function* of $(a_n)_{n \ge 0}$ 

**Conjugate Partition:** Let $\lambda$ be a partition of $n$. The *conjugate partition* $\lambda^T$ of $\lambda$ is the partition corresponding to the reflection of the Ferrers Diagram of $\lambda$ over the (upper left to lower right) diagonal. 

**Triangulation:** A *triangulation* of a regular $n$-gon is a collection of non-crossing diagonals that divide the $n$-gon into triangles. 

**Catalan Number:** The $n$th *Catalan number* $C_n$ is the number of triangulations of the regular $(n + 2)$-gon 

**Balanced Sequence:** A *balanced sequence* $n$ opened and $n$ closing parentheses is a sequence such that every close-paren has a matching open-paren
# Graph Theory
**Graph:** A *graph* $G = (V, E)$ is a set $V$, whose elements are called the vertices of $G$, and a set $E$ of unordered pairs of distinct vertices, whose elements are called the edges of $G$. 

**Incidence:** Let $G = (V, E)$ be a graph. If $e \in E$ contains $v$, we say $e$ is *incident* to $v$. 

**Adjacency:** Let $G = (V, E)$ be a graph. If $v_1, v_2 \in V$ are vertices such that $\{v_1, v_2\} \in E$, we say $v_1$ and $v_2$ are *adjacent* (or *neighbours*)

**Degree:** Let $G = (V, E)$. For $v \in V$, the number of edges incident to $v$ is called the *degree* of $v$, $\deg(v)$, or the *valence* of $v$.

**K-regularity:** A graph is called *k-regular* if every vertex has degree $k$. 

**Isomorphic:** Two graphs $G = (V, E)$ and $G' = (V', E')$ are *isomorphic* if there exists a bijection $\phi: V \to V'$ such that $\{v_1, v_2\} \in E$ if and only if $\{\phi(v_1), \phi(v_2)\} \in E'$.

**Subgraph:** Let $G = (V, E)$ and $H = (V', E')$ be graphs, where $V' \subseteq V$. We say $H$ is a *subgraph* of $G$ if for all edges $\{v_1, v_2\} \in E'$, we have $\{v_1, v_2\} \in E$

**Spanning Subgraph:** Let $G = (V, E)$ be a connected graph and let $H = (V', E')$ be a subgroup. We say $H$ is a *spanning subgraph* (or that $H$ *spans* $G$) if $V' = V$ 

**Induced Subgraph:** For a graph $G = (V, E)$ and a subset $V' \subseteq V$, the subgraph of $G$ *induced* by $V'$ is the subgraph with the vertex set $V'$ and the edge set $E' = \{e \in E : e \subseteq V'\}$ (i.e., the set of all edges between vertices in $V'$)

**Contains:** Let $G$ and $G'$ be graphs. We say $G$ *contains* $G'$ if $G'$ is isomorphic to a subgraph of $G$. 

**Connected:** A graph $G = (V, E)$ is *connected* if for every pair $v_1, v_2 \in V$, there is a path in $G$ from $v_1$ to $v_2$ 

**Connected Components** The maximal connected subgraphs of a (disconnected) graph are called its *connected components*

**Independent Set of Vertices:** An *independent set of vertices* in a graph is a subset of the vertices in which no two elements are adjacent. The *vertex independence number* $\text{ind}_V(G)$ of $G$ is the cardinality of the largest independent set in $G$.  

**Clique:** A *clique* in a graph is a subset of the vertices in which every two elements are adjacent. The *clique number* $\text{clique}(G)$ of $G$ is the cardinality of the largest clique in $G$. 

**Matching:** A *matching* in a graph is a subset of the edges such that no two elements share an endpoint. The *matching number* $\text{ind}_E(G)$ of $G$ is the cardinality of the largest matching in $G$. If there exists a matching using all vertices of $G$, it is called a *perfect matching*

**Vertex Colouring:** A *vertex colouring* of a graph $G = (V, E)$ with colour set $C$ is a function $f:V \to C$ such that $f^{-1}(c)$ is an independent set for all $c \in C$. The *chromatic number* $\chi(G)$ of $G$ is the cardinality of the smallest colour set for which there exists a vertex colouring of $G$. If $G$ admits a vertex colouring with $k$ colours, then $G$ is called *$k$-colourable* or $k$*-partite*.

**Distance and Diameter:** The distance between 2 vertices $v_1, v_2$ in a graph $G = (V, E)$ is the length of the shortest path containing $v_1$ and $v_2$. The diameter $\text{diam}(G)$ of $G$ is the maximum distance between 2 vertices in $G$. 

**Girth:** The *girth* $\text{girth}(G)$ of a graph $G = (V, E)$ is the length of the shortest cycle in $G$.

**Eulerian Graphs:** A graph is called *Eulerian* if there is a closed walk on $G$ that traverses each edge exactly once.

**Hamiltonian Graphs:** A graph is called *Hamiltonian* if there is a closed walk on $G$ that visits each vertex exactly once

**Acyclic Graphs** A graph is called *acyclic* if it contains no cycles.

**Crossing Number:** The *crossing number* $\text{cross}(G)$ of a graph $G$ is the fewest number of crossings needed to draw $G$ in $\mathbb{R}^2$ 

**Planar Graphs:** A graph is called *planar* if it can be drawn in $\mathbb{R}^2$ with no edge crossings. 

**Adjacency Matrix:** The *adjacency matrix* of a graph $G$ is the symmetric $|V| \times |V|$ matrix $M(G) = (m_{vw})_{v, w \in V}$ with entries $$m_{v, w} = \begin{cases} 1 & \{v, w\} \in E \\ 0 & \{v, w\} \not \in E\end{cases}$$ 
**Trees:** A connected acyclic graph is called a *tree*.

**Contracting an edge:** Given a graph $G$ and an edge $e$ of $G$, we can *contract* $e$; this means we remove $e$ and merge its two end points.

**Minor:** A graph $H$ is a *minor* of a graph $G$ if $H$ can be obtained from $G$ by a sequence of edge contractions, edge deletions, and vertex deletions.

**Ramsey Number:** For positive integers $k, \ell$, the *Ramsey number* $R(k, \ell)$ is the smallest $n$ such that every 2-edge-colouring of $K_n$ has a red $K_k$ or a blue $K_\ell$ 