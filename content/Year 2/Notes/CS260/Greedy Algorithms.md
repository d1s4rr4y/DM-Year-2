It is difficult to precisely define a greedy algorithm. One definition is an algorithm that *builds up to a solution in small steps*. In other words, a greedy algorithm attempts to find a *global optimum* through iterative local optimisation (essentially, it operates on the principle of choosing the best option at the time, without considering long-term consequences). 

There are 2 practical methods of proving a greedy algorithm provides an optimal solution: (note this says "an" optimal solution, not "the" optimal solution). 
- Stay Ahead
- Exchange Argument

## Staying Ahead 
An algorithm that "stays ahead" is at least as good as any other algorithm at each stage of execution, and therefore it must be optimal. To demonstrate a "staying ahead" proof, we take the **interval scheduling problem**

### The Interval Scheduling Problem
**Input:** A set of intervals $I = [n]$ such that $s(i)$ and $f(i)$ refer to the start and finish time of interval $i$ respectively
**Output:** The largest subset $S \subseteq I$ such that no two intervals are *incompatible*. Two intervals $i$ and $j$ are incompatible if and only if $s(i) < f(j)$ or $s(j) < f(i)$ (i.e. they overlap)

There are a few intuitive greedy rules that could be applied:
- Earliest start time first: pick a compatible interval with the earliest start time
- Shortest first: Pick the shortest compatible interval 
- Fewest incompatibilities first: Pick a compatible interval with the fewest incompatibilities with the remaining intervals
- Earliest finish time first: pick a compatible interval with the earliest finish time
Only the "earliest finish time first" strategy is both correct and optimal. 

Below is an example implementation of this strategy, in $O(n \cdot \log(n))$ time. 
>[!note]- Example Implementation
>
>$i \leftarrow 0$
>$\operatorname{SORT}(I)$
>$A \leftarrow \emptyset$
>while $i \le n$ do:
>	....$x \leftarrow  I[i]$
>	....$A \leftarrow  A \cup \{x\}$
>	....while $s(I[i]) < f(x)$ do
>	........$i++$
>	....end
>end
>return $A$

### Interval Colouring
Consider the following scenario: a conference organiser is renting a venue for a series of talks. They know there are $n$ talks, and the start and finish times of each. The venue providers charge by the number of rooms needed - how should the organiser minimise the cost?

This problem is called the **interval colouring** or **interval partitioning** problem:

#### The Problem

**Input:** A set of intervals $I = [n]$ such that $s(i)$ and $f(i)$ refer to the start and finish time of interval $i \in I$. 
**Output:** A colouring $k: [n] \to [d]$ where $d$ is minimal and no two $i, j$, where $k(i) = k(j)$ are incompatible. 

Recall the "earliest start time first" rule from earlier. We can prove that while it was incorrect for the **interval scheduling** problem, it is correct and optimal for **interval colouring**. The algorithm for this uses $O(n \cdot \log(n))$ sorting, so is $O(n \cdot \log(n))$ overall. 

#### Proof of correctness 
Given a set of intervals $I = [n]$, let the *depth* of $I$ be defined as the maximum number of mutually incompatible intervals. We claim the following:
>[!warning] **THEOREM**
>The number of resources needed to colour $I$ is at least the depth of $I$.
>> [!note]- Proof
>> 
>> Suppose for contradiction that the claim is false. Then $I$ has a colouring $k$ that uses $d$ colours, where $d$ is less than the depth of $I$. Let $S$ be a set of mutually incompatible intervals of size equal to the depth of $I$. By the pigeonhole principle, at least two distinct elements of $S$ share a colour w.r.t. $k$, which is a contradiction


> [!warning] **CLAIM**
> The *Earliest Start Time First* greedy rule is optimal for the *Interval Colouring* problem. 

## Exchange Argument 
Broadly, an *exchange argument* is a proof which shows that a modification to a given solution can only make it less optimal (and hence the solution must be optimal).

## The Shortest Path Problem
One of the most well-known problems in graph theory is finding the shortest path between two nodes in a connected, weighted graph. There is a variant on this problem - the *single source shortest path problem*, which asks whether we can efficiently find the shortest path from some start node $s$ to every other node in the graph. 

### The Problem 
**Input:** A connected weighted graph $G = (V, E)$ and a start node $s \in V$. The weight of each edge $e \in E$ is denoted $\ell(e)$
**Output:** A path $P$ of lowest weight from $s$ to each $v \in V$. The weight of a path $P = p_0, p_1, ..., p_k$ is defined as $w(P) = \sum_{i = 0}^{k} w(p_i)$

### Dijkstra's Algorithm
This is a classic algorithm for the single source shortest path problem. At a high level it works as follows:
- We maintain an "estimate" for the distance from the source node to each other node of the graph
- In each round of the algorithm, we explore an unexplored node with the lowest estimate (i.e. the closest unexplored node). 
- Initially, we set values for the shortest paths to each vertex as $\infty$ and update these as we explore the graph. 

> [!note]- Psuedocode 
> $F \leftarrow \emptyset$
> foreach $v \in V$ do
> .... $\operatorname{dist}[v] \leftarrow \infty$
> .... $\operatorname{prev}[v] \leftarrow undefined
> .... add $v$ to $F$
> end 
> $\operatorname{dist}[s] \leftarrow 0$
> while $F is\,not\,empty$ do
> .... $v \leftarrow \operatorname{argmin}_{v \in V} \operatorname{dist}[v]$
> ....remove $v$ from $F$
> .... foreach $neightbour\,u\,of\,v\,still\,in\,F$ do
> ........ alt $\leftarrow \operatorname[v] + c(v, u)$
> ........ if alt $< \operatorname{dist}[u]$ then
> ............ $\operatorname{dist}[u] \leftarrow$ alt
> ............ $\operatorname{prev}[u] \leftarrow v$
> ........ end
> .... end 
> end 

The use of the array $prev$ in the code above allows us to say, for each node, which neighbour is the shortest path to the source. For example, suppose the shortest path to an arbitrary node $z$ is 

$$s \to x \to y \to z$$
the $prev[z] = y,\, prev[y] = [x]$ and $prev[x] = s$
By using the array like this, we can reconstruct the shortest path from $s$ to any other node using linear space. 

Using a binary heap allows Dijkstra to be implemented in $O((m + n)\log n)$ time, however there are more sophisticated implementations that can achieve $O(m + n \log n)$

## Minimum Spanning Trees 
Another common problem in graph theory is, given a connected, weighted graph $G$, to find a tree which spans $G$ for the minimum cost.

### The Problem
**Input:** A connected weighted graph $G = (V, E)$, where $\ell(e)$ is the weight of an edge $e \in E$

**Output:** A set of edges $T \subseteq E$ such that the graph $G' = (V, T) is connected and $\sum_{e \in T}\ell(e)$ is minimised. 
### The Cutset Property
We begin the solution by observing a property of *cutsets* of a minimum spanning tree, allowing us to identify which edges in $E$ will be included in $V$. 

>[!note] **DEFINITION** Cutsets
>A *cutset* of a minimum spanning tree is the set of edges $\{(v, w): v \in X, w \in E \backslash X\}, where $X$ is a nonempty proper subset of $E$, in the graph $G = (V, E)$
>

>[!warning] **CLAIM**
>For each cutset $C$ of a graph $G = (V, E)$, every minimum spanning tree contains an edge $x \in C$ such that there does not exist $x' \in C$ where $\ell(x') < \ell(x)$
>> [!note]- Proof
>> 
>> Suppose that for someone cutset $C$ of a graph $G = (V, E)$ we have a minimum-cost edge $x = (v, w) \in C$. It suffices to show that if $G = (V, T)$ is a minimum spanning tree, then either $x \in T$ or $x' \in T$ where $\ell(x') = \ell(x)$ 
>> 
>> This is equivalent to the contraposition 
>> $$\neg[x \in T \text{ or } x' \in T \text{ where } \ell(x') = \ell(x)] \Rightarrow \neg[T \text{ is a minimum spanning tree}]$$
>> 
>> Consider a cutset $C$. Suppose:
>> $x$ is an edge in the cutset $C$ such that $\not\exists x' \in C$ such that (1) $\ell(x') < \ell(x)$
>> (2) $T$ is a minimum spanning tree 
>> 
>> We can then say:
>> (3) By (2), there must exist a unique edge $y \in C$ on the path $P$ from $v$ to $w$ 
>> (4) By (1), $\ell(y) \ge \ell(x)$
>> (5) Let $T' = (T \cup \{x\}) \backslash \{y\}$. By (4), $\sum_{e \in T} \ell(e) > \sum_{e \in T'}\ell(e) if and only if \ell(y) \ne \ell(x)$ 
>> (6) By (5), $\ell(y) \ne \ell(x) \Rightarrow T$ is not a minimum spanning tree 
>> (7) Since $C$ is an arbitrary cutset, (6) holds for all cutsets, Q.E.D.
>
>
