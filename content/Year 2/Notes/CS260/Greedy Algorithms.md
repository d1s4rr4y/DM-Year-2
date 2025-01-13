>[!note] Contents
>1. [[#The Interval Scheduling Problem]]
>2. [[#The Interval Partitioning (Colouring) Problem]]
>3. Minimising Lateness
>4. Strategies of Analysis

A *greedy algorithm* attempts to find a *global optimum* through iterative local optimisation. The heuristic/rule we use to decide how to proceed at each stage is called the *greedy rule*, which should be easy to compute.

In this module, we explore 2 practical methods of proving that a greedy algorithm produces an optimal solution:
- Staying ahead (& the interval scheduling problem)
- The exchange argument 
Note the fact it produces "an" optimal solution, not "the" optimal solution - there may be more than one.

An algorithm with "stays ahead" is at least as good as any other algorithm at each stage of execution, and therefore must be optimal. To demonstrate a "staying ahead" proof we examine <span style="font-variant:small-caps;">The Interval Scheduling Problem</span>

--- 
## The Interval Scheduling Problem
- - - 
**Input:** A set of intervals $I = [n]$ such that $s(i)$ and $f(i)$ refer to the start and finish time of interval $i$ respectively
**Output:** The largest subset $S \subseteq I$ such that no two intervals are *incompatible*. (Two intervals $i$ and $j$ are incompatible if and only if $s(i) < f(j)$ or $s(j) < f(i)$, i.e. they overlap) 

This can be solved using a greedy algorithm, but we need to define the rules that allow us to implement it. We can sort the intervals by a specific rule, then take intervals in order, providing they are compatible with all intervals already selected. 

The rule used to order the intervals can be many things: earliest start time, earliest finish time, or shortest interval all being possibilities. 

The only correct and optimal rule is earliest finish time, with the following algorithm: 

>[!note] Interval Scheduling Problem
>$$\begin{aligned} &\text{sort intervals by finish time, and renumber them such that } f(1) \le f(2) \le ... \le f(n) \\ &S = \emptyset \\ &\text{for } j = 1..n:\\ &\quad \text{if interval } j \text{ compatible with } S:\\ &\qquad S\text{.add}(j)\\ &\text{return } S \end{aligned} $$
>We can prove this algorithm runs with $O(n\log n)$: 
>>[!note]- Proof of Runtime
>>
>>We know that sorting is at best $O(n \log n).
>>We can prove that the for loop is only $O(n)$. If the for loop is $O(n)$, the compatibility check must be $O(1)$.
>>- If we keep track of an interval $j^*$, which is the *last interval* added to $S$
>>- $j$ is compatible with $S$ if and only if $s(j) \ge f(j^*)$
>>Therefore, comparison is indeed $O(1)$
>
>We must also prove the correctness of the algorithm, i.e. that the Earliest Finish First algorithm is optimal
>>[!note]- Proof of Correctness
>>
>>We will prove by contradiction. Let us assume that the Earliest Finish First algorithm is not optimal.
>>Let $i_1, i_2,...,i_k$ be the set of intervals selected by EFF
>>Let $j_1, j_2,...,j_m$ be the optimal set, with $i_1 = j_1, i_2 = j_2,...i_r = j_r$ for as large of a value of $r$ as possible. If EFF is not optimal, $m > k$.
>>If interval $i_{r + 1}$ doesn't exist, then by nature of the algorithm all jobs after $i_r$ are incompatible with it. However, since $i_r = j_r$, and we know that the optimal must *strictly* have more jobs than EFF, there must be compatible jobs after $i_r$, and this we reach a contradiction. 
>>If interval $i_{r+1}$ exists, it cannot finish later than $j_{r+1}$ because of the sorting rule. Thus we can just replace $j_{r+1}$ with $i_{r+1}$ and guarantee that all jobs $j_r + 2$ and afterwards are compatible. This the optimal is still optimal, and the condition that we have met the *largest possible* $r$ has been violated. 

---
## The Interval Partitioning (Colouring) Problem
- - - 
Another common interval problem is the interval partitioning problem - consider the scenario that you are once again arranging a set of intervals $I$. Interval $i \in I$ has start time $s(i)$ and finish time $f(i)$. Your goal is to find the *minimum* number of groups the intervals can be split into, thus *all* $i \in I$ are scheduled such that none are incompatible. 

**Input:** A set of intervals $I = [n]$ such that $s(i)$ and $f(i)$ refer to the start and finish time of interval $i$ respectively
**Output:** The smallest possible collection of sets of compatible intervals

Recall the "earliest start time first" rule from earlier. We can prove that while it was incorrect for the **interval scheduling** problem, it is correct and optimal for **interval partitioning**: 

>[!note] Interval Partitioning Problem
>$$\begin{aligned} 
&\text{sort intervals by start time, and renumber them such that } s(1) \le s(2) \le ... \le s(n) \\ 
& d = 0 \text{ \# number of allocated rooms} \\ 
&\text{for } j = 1..n:\\ 
&\quad \text{if interval } j \text{ compatible with all intervals in any set } k \\ 
&\qquad \text{schedule} j \text{ in } k\\ 
&\quad\text{else: }\\ 
&\qquad \text{allocate new set } d + 1 \\ 
&\qquad \text{ schedule } j \text{ in set } d + 1\\
&\text{return the schedule}
\end{aligned}$$
>
>If we use a suitable data structure to store the set of schedules, we can prove this algorithm runs with $O(n\log n)$: 
>>[!note]- Proof of Runtime
>>
>>We know that sorting is at best $O(n \log n). If we store the set of schedules in a *priority queue* with the key being the finish time of the last interval:
>>- When we allocate a new schedule, we insert it in to the priority queue
>>- When we schedule $j$ in $k$, we increase the key of $k$ to $f(j)$
>>- To determine whether $j$ is compatible with any $k$, we compare $s(j)$ to findMin of the priority queue
>> The total number of searches in the priority queue is of order $O(n)$, where each priority queue operation is $O(\log n)$, and therefore we get $O(n \log n)$
>
>> [!note] Definition
>> The **depth** of a set of open intervals is the maximum number of intervals that contain some point, i.e. the point where the most intervals overlap from all schedules determines the depth (which will equal the number of separate schedules)
>
>We must also prove the correctness of the algorithm, i.e. that the Earliest Start First (ESF) algorithm is optimal
>>[!note]- Proof of Correctness
>>
>>Let $d =$ the number of schedules ESF allocations
>>Schedule number $d$ is opened because we need to schedule an interval $j$, which is incompatible with all intervals in schedules $1..d-1$.
>>Because of the earliest start sort, each incompatible interval in all prior schedules must have a start time $\le s(j)$. Additionally, all $d$ intervals (including $j$) will have ended by $f(j)$.
>>Thus there will be $d$  intervals overlapping at some time $s(k) + \epsilon$ for a number $\epsilon$, which is our depth. Since depth = number of schedules by definition, this demonstrates that ESF is optimal.








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
