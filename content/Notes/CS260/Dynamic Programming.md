## Weighted Interval Scheduling 
We can now revisit a problem we saw earlier: *interval scheduling*. A generalised version of this problem assigns a weight $v(i)$ to each interval $i$, and asks whether we can efficiently maximise the total weight of the schedule

### The Weighted Interval Scheduling Problem
**Input:** A set of intervals $I = [n]$ such that $s(i)$ and $f(i)$ denote the start and finish time of interval $i$. A map $w: I \to \mathbb{R}$ gives each interval a weight. 
**Output:** A subset $S \subseteq I$ of maximum weight such that no two intervals are incompatible. 

We were able to solve the unweighted problem using a greedy approach. However, adding weights makes that approach redundant; instead we use dynamic programming. The main observation is that for each interval there are two choices: it is either included in the schedule or it isn't. 

In the first case, we rule out any intervals which are incompatible with the included interval. We can do this with a map $p:I \to I$ which gives the latest interval $p(i)$ such that $p(i)$ is compatible with $i$ and $p(i) < i$.
In the second case, out optimal solution is the same as the optimal solution where we ignore the current interval. 

With these two options, we can define an optimal solution $\operatorname{OPT}(j)$ which considers intervals $i, ..., j$ as the following:
$$
\operatorname{OPT}(j) = \max(w(j) + \operatorname{OPT}(p(j)), \operatorname{OPT}(j - 1))
$$
Since the formula for each $\operatorname{OPT}(j)$ only accessed values of $\operatorname{OPT}$ for earlier intervals; namely, $\operatorname{OPT}(p(j))$ and $\operatorname{OPT}(j - 1)$. This means we can compute $\operatorname{OPT}$ from the bottom up, starting with $\operatorname{OPT}(1)$, in linear time. 
## Sequence Alignment 
Let us now consider the problem of determining how similar two sequences, $X = x_1, ..., x_m$ and $Y = y_1, ..., y_n$ are, where $X, Y \in \Sigma^*$ and $\Sigma$ is a finite alphabet. 

>[!note]
>The notation $\Sigma^*$ indicates the cartesian product of arbitrary finite degree of the alphabet $\Sigma$. In simpler terms, $X$ and $Y$ are sequences of letters from the alphabet $\Sigma$

A common application of this is search suggestion. When you misspell something when using a search engine, you usually get a response such as $\text{"Did you mean [suggestion]"}$ after determining, via sequence alignment, that the two words are similar. 

While I misspelled work may be intuitively similar to the intended word, it is not clear how to represent this formally. The predominant model is to consider the *Levenshtein Distance* between the sequences of letters. 

>[!warning] **DEFINITION** Levenshtein Distance
>The *Levenshtein Distance* (or *Edit Distance*) between two sequences, denoted $\Delta(X, Y)$ is the minimum cost of an alignment of $X, Y \in \Sigma^*$

To understand this, we must also understand the terms *cost* and *alignment*: 

>[!warning] **DEFINITION** Alignment 
>An *alignment* $A$ of two sequences $X = x_1,...,x_m$ and $Y = y_1,...,y_n$ is a set of pairs such that each pair is either $(x_i, -)$, $(-, y_i)$ or $(x_i, y_i)$. We can think of this as matching each letter in one sequence to a letter in the other sequence, or a gap. 

If our sequences are identical, it is clear there would exist an alignment with no gaps or mismatches. Conversely, two very different sequences are likely to have many gaps/mismatches. 

If we assign a *penalty* to each gap or mismatch, we can then quantitatively describe how similar two sequences may be. Levenshtein proposes exactly this:  
- For each *gap*, assign a penalty $\delta$ 
- For each *mismatch* $(a, b)$, assign a penalty $\alpha_{a,b}$

>[!warning] **DEFINITION** Cost
>The *cost* of an alignment $A$, denoted $cost(A)$, is the sum o  gap penalties and mismatch penalties in $A$. 

Hence, we can say that:
$$
\Delta(X, Y) := \displaystyle \min_{A \in Alignments(X,Y)} cost(A)
$$

### Finding an Optimal Alignment
We can apply dynamic programming to the problem of finding an alignment which minimises $\Delta(X,Y)$ in the following way. In each step, we minimise against our three choices: 
- Match the next two characters of each word together, thereby adding $\alpha_{x_i, y_j}$ to the edit distance. This leaves us with $i - 1$ and $j - 1$ unmatched characters in each word respectively (given we had $i$ and $j$ previously)
- Match the next character in the first word to a blank, thereby adding $\delta$ to the edit distance
- Match the next character in the second word to a blank, again adding $\delta$ to the edit distance
This can be represented by the following recursion:
$$
\operatorname{OPT}(i, j) = \min[\alpha_{x_i, y_j} + \operatorname{OPT}(i - 1, j - 1), \delta + \operatorname{OPT}(i - 1, j), \delta + \operatorname{OPT}(i, j - 1)]
$$
### Sequence Alignment in linear Space: Calculating the Edit Distance 
If we observe that there is a bijection between the optimal alignment and the problem of finding a shortest path between two notes in a graph, we can find an optimal alignment in constant space. 

The graph is constructed as follows:
- We have a node for each pair $(i, j) \in \{0,...,m\} \times \{0,...,n\}$
- From each node $(i, j)$ there are up to three edges:
	- If $i < m$ and $j < n$, there is an edge corresponding to matching the $i^{th}$ and $j^{th}$ character if $X$ and $Y$ respectively. This is labelled with the cost $\\alpha_{x_i, y_j}$
	- If $i < m$ there is an edge corresponding to matching the $i^{th}$ character of $X$ with a blank. This is labelled with $\delta$
	- If $j < n$ there is an edge corresponding to matching the $j^{th}$ character of $X$ with a blank. This is labelled with $\delta$
Any path from the node $(0, 0)$ to $(m, n)$ corresponds to an alignment along with its cost, and the shortest such path corresponds to an optimal alignment. 

Using this, we can calculate a value for the shortest path from $(0, 0)$ to each node row-by-row, starting at the bottom. Since no edge crosses more than 2 rows, we only need to "remember" 2 rows of information at a time, allowing for a linear space algorithm:

**Space-Efficient Alignment (X, Y)**
- Let $B$ be an $m \times n$ array; 
- For $i \in \{0..m\}$ do $B[i, 0] \leftarrow i\delta$ 
- for $j \in [n]$ do 
	- $B[0, 1] \leftarrow j\delta$ 
	- for $i \in [m]$ do 
		- $B[i, 1] \leftarrow \min[\alpha_{x_i, y_i} + B[i - 1, 0], \delta + B[i - 1, 1], \delta + B[i , 0]]$ 
	- end 
	- for $i \in [m]$ do $B[i, 0] \leftarrow B[i, 1]$;
- end

However, doing this we have no way to actually recover the alignment, only a way to get the *value* of the edit distance. 

### Sequence Alignment in Linear Space: Recovering the Alignment
Using a different approach, we can recover the alignment itself whilst maintaining our space efficiency. Any path between $(0, 0)$ and $(m, n)$ must pass through at least one node in each column. 

Suppose we find a node in the path at $(\frac{m}{2}, q)$, where $\frac{m}{2}$ gives the middle column, and $q$ denotes the row where $0 \le q \le n$. We now have 2 subproblems: 
- Finding a path between $(\frac{m}{2},q)$ and $(m, n)$
- Finding a path between $(0, 0)$ and $(\frac{m}{2}, q)$
If we can perform this divide-and-conquer step in linear space, we can apply our original "space-inefficient" algorithm once the subproblems fall below a certain fixed size. 

So the question becomes: how do we do the first step in linear space? Recall that we already have an algorithm for calculating the shortest path from $(0, 0)$ for a given row/column of nodes (space-efficient alignment). It is easy to adapt this algorithm into another which gives the shortest path from $(m, n)$ to a given row/column of nodes (backwards-space-efficient alignment). If we calculate these two values for column $\frac{m}{2}$, this gives us values for the shortest path length passing through each node in that column. We can then just pick the node with the lowest value. 

## Shortest Paths & Bellman-Ford 
While efficient, Dijkstra's Algorithm quickly runs into problems when considering graphs with negative edge-costs and/or negative cycles. We'll consider a dynamic programming approach which can solve the first case, and later extend it to detect the second. 

To begin, let's define our problem: 

### The Single-Target Shortest-Paths Problem 
**Input:** A weighted digraph $G = (V, E, c : E \rightarrow \mathbb{Z})$ and a target vertex $t \in V$ 
**Output:** If $G$ has no negative cycles, then $\forall v \in V$, return: 
- The minimum cost of a $v \to t$ path 
- The min-cost path itself

> [!warning] **Claim** 
> If $G$ has no negative cycles then there is a min-cost $v \to t$ that is simple 
>> [!note]- Proof 
>> 
>> Let $P$ be a min-cost $v \to t$ path with a cycle $\zeta$ which starts and ends at an intermediate node $\omega$, where $p'$ denotes the path from $v \to \omega$ and $p''$ denotes the path from $\omega \to t$ 
>> Then $p' \cdot p''$ is also a $p \to t$ path, with cost: 
>> $c(p' \cdot p'') = c(p') + c(p'') \le c(p') + c(\zeta) + c(p'')$ 
>> Hence the path $p' \cdot p''$ is a lower-cost $v \to t$ path. By contradiction, our proof is complete, 

An important consequence of the above claim is that a shortest path between any two nodes has at most $n - 1$ edges, since otherwise there must be a cycle, This allows us to apply dynamic programming by recursing on the length of the shortest path. 

Suppose we are interesting in finding the length of a shortest path between nodes $v$ and $t$. The shortest path which uses at most $n - 1$ edges is either: 
- The same as the shortest path which uses at most $n$ edges, if it uses $\le n$ edges. 
- The cost of an edge $(v, u)$ to a neighbour $u$ of $v$, plus the cost of the shortest path from $u$ to $t$ which uses at most $n$ edges, 
In this way, we "use up" edges one at a time, and minimise over the length of the path at each step, giving us the overall shortest path length overall. As a recursion, we can express the optimal length of a $v \to t$ path which uses at most $i$ edges as the following: 
$$\displaystyle \operatorname{Opt}(i, v) = \min(\operatorname{Opt}(i  - 1, v), \min_{u:(u, v) \in E} (\operatorname{Opt}(i - 1, u) + c(v, u)))$$ The algorithm, due to Richard Bellman and Lester Ford Jr, solves the STSP Problem and is built around the recursion:
**Bellman-Ford($(V, E), t, c: E \to \mathbb{R}$)
- Let $M$ be an $n \times n$ array; 
- For $v \in V$ do $M[0, v] = \infty$ 
- $M[0, t] = 0$; 
- for $i = 1 ... n - 1$ do
	- for $v \in V$ do 
		- $M[i, v] = \min(M[i - 1, v], \min_{u \in V}(M[i - 1, u] + c(v, u)))$ 
	- end 
- end 