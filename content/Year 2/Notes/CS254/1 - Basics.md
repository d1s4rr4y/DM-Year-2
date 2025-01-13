# 1.1 Graphs
A *graph* is a pair $G =  (V, E)$ of sets satisfying $E \subseteq [V]^2$,  i.e.  the elements of $E$ are 2 element subsets of  $V$. 
The elements of $V$ are the *nodes* or *vertices* of the graph $G$, and the elements of $E$ are the *edges*.  A graph with a vertex set $V$ is said to be a graph *on* $V$. 

The number of vertices of a graph $G$ is its *order*, denoted $|G|$. The number of edges of a graph $G$ is denoted $\lVert G \rVert$. Graphs are *finite* or *infinite* dependent on their order. 

A vertex $v \in V$ is *incident* with an edge $e \in E$ if $v \in  e$. Two vertices incident with an edge are it's *ends*. 
Two vertices $u, v \in V$ are *adjacent* or *neighbours* if they are incident to the same edge. Two edges $e, f \in E$ are  *adjacent* if they share an end. If all vertices of  $G$ are pairwise adjacent then $G$ is *complete*. A complete graph on $K$ vertices is denoted $K^n$, e.g. $K^3$ is a triangle. 

Pairwise non-adjacent vertices and edges are *independent*. 

Let $G = (V, E)$ and $G' = (V', E')$. $G$ and $G'$ are *isomorphic* (denoted $G \cong G'$) if there exists a bijection $\varphi: V \to V'$ with $\{x, y\} \in E \Leftrightarrow \{\varphi(x), \varphi(y)\} \in E' \forall x, y \in V$. This bijection is called an *isomorphism*, unless $G = G'$, in which case it is called an *automorphism*. A map taking graphs as arguments is called a *graph invariant* if it assigns equal values to isomorphic graphs. 

We set $G \cup G' := (V \cup V', E \cup E')$, and $G \cap G' = (V \cap V', E \cap E')$. If $G \cap G' = \emptyset$ then $G$ and $G'$ are *disjoint*. If $V' \subseteq V$ and $E' \subseteq E$ then $G'$ is a *subgraph* of $G$, denoted $G' \subseteq G$. (Less formally, that $G$ *contains* $G'$). 
If $G' \subseteq G$ and $G'$ contains all the edges $\{x, y\} \in E$ with $x, y \in V'$, then $G'$ is an *induced subgraph* of $G$. $G' \subseteq G$ is a *spanning subgraph* of $G$ if $V'$ spans all of $G$ (i.e. $V' = V$). 

If $G$ and $G'$ are disjoint, we denote $G * G'$ the graph obtained by joining all vertices of $G$ to all vertices of $G'$, for example $K^2 * K^3 = K^5$. The *complement* $\bar G$ of $G$ is the graph on $V$ with edge set $[V]^2 \backslash E$. THe *line graph* $L(G)$ is the graph on $E$ in which $x, y \in E$ are adjacent as vertices if and only if they are adjacent as edges in $G$. 

# 1.2 The Degree of a Vertex
Let $G = (V, E)$ be a non-empty graph. The set of neighbours of a vertex $v$ in $G$ is denoted by $G_g(v)$, The *degree* $d_G(v)$ of a vertex $v$ is the number $|E(v)|$ of edges incident to $v$, which is equal to the number of neighbours of $v$. A vertex of degree 0 is *isolated*. If all vertices of $G$ have the same degree, then $G$ is *k-regular*. A 3-regular graph is called *cubic*. 

**Proposition 1.2.1:** the number of vertices in a graph with odd degree is always even. 
*Proof:* A graph on $V$ has $\frac{1}{2} \sum_{v \in V} d(v)$ edges, so $\sum d(v)$ is an even number. 

# 1.3 Paths and Cycles

# 1.4 Connectivity

# 1.5 Trees and Forests 

# 1.6 Bipartite Graphs 

# 1.7 Contraction and Minors

# 1.8 Euler Tours 

# 1.9 Linear Algebra

# 1.10 Other Notions of Graphs

