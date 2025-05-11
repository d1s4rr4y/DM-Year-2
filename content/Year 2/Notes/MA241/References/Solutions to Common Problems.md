# Graph Colouring
## Vertex Colouring
Given a graph $G$, calculate the chromatic number $\chi(G)$.
- Easy Lower Bound: $\chi(G)$ is bounded below by the size of the largest complete subgraph in $G$.
- Easy upper bound: $\chi(G) \le \Delta(G) + 1$ where $\Delta(G)$ is the maximum degree of a vertex
- Bipartite is the same, by definition, as $\chi(G) = 2$. This is equivalent to $G$ having no odd cycles. 
- $\chi(K_n) = n$ and $\chi(C_n)$ is 2 ($n$ even) or 3 ($n$ odd)
- Four colour Theorem: if $G$ is planar, $\chi(G) \le 4$ 

# Graph Traversal Problems
## Eulerian Circuit
Given a graph $G$, decide whether $G$ has an Eulerian Circuit
- Easy and necessary sufficient condition: [[Year 2/Notes/MA241/References/Key Theorems#^eulersThm|Euler's Theorem]]

## Hamiltonian Cycle
Given a graph $G$, decide whether $G$ has a Hamiltonian cycle
- Some easy necessary conditions, e.g. $G$ must be connected and have no leaves
- A sufficient condition (far from necessary): Dirac's Theorem
# Graph "Packing Problems"
## Vertex Independence Number
Given a graph $G$, find the largest possible size of an independent set of vertices in $G$
- $\text{ind}_V(G)\chi(G) \ge |V|$, since each colour class is an independent set

## Matching/Edge-Independence Number
Given a graph $G$, find the largest possible size of a matching in $G$.
- If there is a matching $M$ with *no* unmatched vertices, then $\text{ind}_E(G) = |M|$, and $M$ called a perfect matching
- Bipartite case: If $A$ and $B$ are the partite sets with $|A| \le |B|$, best-case scenario is the existence of a matching of $A$. Necessary and sufficient condition: [[Year 2/Notes/MA241/References/Key Theorems#^hallsThm|Hall's Theorem]]
# Determining Planarity
Given a graph $G$, is $G$ planar? 
- Necessary and sufficient condition: [[Year 2/Notes/MA241/References/Key Theorems#^kwThm|Kuratowski-Wagner Theorem]]

# Ramsey Theory Problems
What kind of structures exist in all large graphs?
- [[Year 2/Notes/MA241/References/Key Theorems#^ramseyThm|Ramsey's Theorem]]: A graph with sufficiently many vertices has a large complete subgraph or a large independent set

What are the values of the Ramsey numbers $R(k, \ell)$? 
- $R(3, 3) = 6$
- The proof of [[Year 2/Notes/MA241/References/Key Theorems#^ramseyThm|Ramsey's Theorem]] implies $R(k, \ell) \le {{k + \ell - 2} \choose {k - 1}}$ 
- The lower bound to $R(k, k)$ is $2^\frac{k}{2}$ 
