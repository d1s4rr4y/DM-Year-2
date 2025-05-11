**Lemma 5.1:** Let $G = (V, E)$ and let $x \in V$ have $\deg(x) = 1$. Let $G' := G - x$. Then $G$ is a tree if and only if $G'$ is a tree
*Proof:* Routine verification ^ecd43a

**Lemma 5.2** A graph $G = (V, E)$ is a tree if and only if $G$ is connected and $\lvert E \rvert = \lvert V \rvert - 1$ 
*Proof:* Induction on $\lvert V \rvert$ with $\lvert V \rvert = 1$ trivial.  ^15ec23
- **Forwards** Take a max-length path $(v_0,...,v_m)$ in $G$. Then $\deg(v_0) = 1$ (otherwise we would have a cycle) and $G' := G - v_0$ is a tree. By induction, $\lvert E(G) \rvert = \lvert E(G') \rvert + 1 = \lvert V(G') \rvert = \lvert V(G) \rvert - 1$ as required. 
- **Backwards**We have $\sum_{x \in V} \deg(x) = 2 \lvert E \rvert = 2 \lvert V \rvert - 2$ and thus the average is less than 2. So there exists an $x \in V$ with $\deg(x) < 2$. Since $G$ is connected, we have $\deg(x) = 1$. As $x$ is a leaf, $G - x$ is connected. By induction, it is a tree. Adding a pendant edge keeps this property by [[#^ecd43a|Lemma 5.1]] so $G$ is a tree

**Definition:** A *cut* is a set $\delta(A) := \{ab \in E : a \in A. b \in V \backslash A\}$ for some $A \subseteq V$. Sometimes we may call the set $A$ itself a cut (meaning the set $\delta(A)$ of edges it defines). 

**Lemma 5.3** A graph $G$ is connected if and only if $\forall$ proper $A \subseteq V$ we have $\delta(A) \ne \emptyset$. 
*Proof:* If $\delta(A) = \emptyset \Rightarrow$ no path from $A$ to $V \backslash A \Rightarrow$ not connected. Suppose $G$ is not connected. Pick $x, z \in V$ such that there is no $xz$-path. Let $A := \{y \in V : \exists xy\text{-path}\}$. Then $A \ni z$ are non-empty but $\delta(A) = \emptyset$. ^88bbf9

**Input:** Graph $G = (V, E)$ and $c: E \to \mathbb{R}_{\ge 0}$ costs to connect. 
A *minimum spanning tree (MST)* is a spanning tree of the smallest cost. 
Non-negative costs $\Rightarrow$ every min-cost connected spanning subgraph is an MST.
Call $E' \subseteq E$ extendable (to an MST) if $\exists$ MST $T \subseteq G$ with $E(T) \supseteq E'$

**Lemma 5.4** Suppose that $E' \subseteq E$ is extendable to an MST, $\emptyset \subseteq A \subseteq V$ is such that $\delta(A) \cap E' = \emptyset$, and $e$ is a min-cost edge in $\delta(A) \cap E$. Them $E' \cup \{e\}$ is extendable. 
*Proof* Take an MST $T$ such that $E(T) \supseteq E'$. If $E(T) \ni e$, done. Suppose $E(T) \not \ni e$. Then $T + e$ has a cycle $C$. It uses another edge $f$ from $\delta(A)$. By definition, $c(f) \ge c(e)$. But then $T' := T - f + e$ is connected and has $\lvert V \rvert - 1$ edges, so is a tree by [[#^15ec23|Lemma 5.2]]. Also, $c(T') \le c(T)$, so $T'$ is also an MST with $E(T') \supseteq E'$. ^2a569d

**Algorithm 5.1 (Prim's Algorithm)** ^3548ad
$$\begin{align}
&\text{Input: connected graph } G = (V, E) \text{, cost } c:E \to \mathbb{R}_{\ge 0}\\
&\text{Output: MST } T\\
&T := (\{r\}, \emptyset) \text{ for some } r \in V\\
&\text{While } V(T) \ne V\\
&\qquad \text{Find min-cost } xy \in E \text{ such that } x \in V(T) \text{ and } y \in V \backslash V(T)\\
&\qquad V(T) := V(T) \cup \{y\}\\
&\qquad E(T) := E(T) \cup \{xy\}
\end{align}$$
**Note** that if $V(T) \ne V$ then $\delta(V(T)) \ne \emptyset$ by [[#^88bbf9|Lemma 5.3]] and the next iteration of the algorithm increases $V(T)$. Thus the algorithm stops. The final graph $T$ is connected and has $\lvert V \rvert - 1$ edges, so it is a spanning tree. 

**Theorem 5.1** [[#^3548ad|Prim's Algorithm]] is correct
*Proof:* (By induction on $\lvert E(T) \rvert$)
When $\lvert E(T) \rvert = 0$, $E(T)$ is extendable. Consider the step when we add a min-cost edge in $\delta(V(T))$ to $E(T)$. By [[#^2a569d|Lemma 5.4]], the new set $E(T)$ is extendable, as desired. 
Thus the final $E(T)$ is extendable to an MST $T'$. Since $E(T) = n - 1 = E(T')$, we have that $T = T'$ and thus $T$ is an MST. 

Lets estimate the running time in terms of $n := \lvert V \rvert$ and $m := \lvert E \rvert$. A naïve estimate is $O(nm)$: the outer cycle is repeated $n - 1$ times and each time we have to find the minimum value among at most $m$ elements. 
This can be improved as follows: for each $u \in V \backslash V(T)$, keep track of $f(u) \in V(T)$ with $c(f(u), u) = min_{v \in V(T)}c(vu)$. Then finding an edge in $\delta(V(T))$ of min-cost can be done in $O(n)$ steps as it is enough to consider only edges of the form $\{f(u), u)\}$ for $u \in V \backslash V(T)$. When we add a new vertex $y$ to $V(T)$, we have to update $f$ on each remaining vertex $v$ of $V \backslash V(T)$. If $c(yv < c(f(v), v)$ then we redefine $f(v) := y$ and otherwise leave $f(v)$ unchanged. The running time with this implementation is $O(n^2)$. Note that, by $m \ge n - 1$, this is at least as good as the previous ($O(nm)$) estimate. 

Using heaps, Prim's algorithm can be implemented in $O(m \log m)$. In brief, for current $T$ with $V(T) =: U$, we maintain heap on $S := \delta(U)$ with key $c$. Find a min-cost edge $vw \in E$, add $vw$ to heap $S$: namely, we add $vq$ as the last element and heapify going upwards using $O(\log m)$ operations. For each $x \in U$ with $xv \in E$, remove $xv$ from $S$: delete the last element $yz$ of $S$, replace $xv$ with $yz$ and heapify in $O(\log m)$ operations. Each edge changes status at most 2 times: not in the heap (when outside $V(T)$), in the heap (when $V(T)$ contains its one vertex), and then again not in the heap (when not in $V(T)$). Thus the running time is $O(m \log m)$. 

**Note** that $m \log m = O(n^2)$ iff $m = O(n^2 / \log n)$, so the implementation with heaps is faster then $m$ is much smaller than $n^2 / \log n$ 

**Algorithm 5.2 (Kruskal's Algorithm)** ^25119f
$$\begin{align} 
&\text{Input: connectedd graph } G \text{, cost } c: E \to \mathbb{R}_{\ge 0}\\
&\text{Output: MST} T\\
&T := (V, \emptyset)\\
&\text{While } T \text{ is not connected}\\
&\qquad \text{Add min-cost } e in E(G) \backslash E(T) \text{ such that } T + e \text{ is acyclic}
\end{align}$$

**Theorem 5.2** [[#^25119f|Kruskal's Algorithm]] is correct
*Proof* Let us show that $T$ eventually becomes connected. Suppose for contradiction that we reached non-connected $T$ such that every new edge of $G$ creates a cycle. Let $S_1,...,S_k$ be the components of $T$; thus $k \ge 2$. Pick any $x_1 \in S_1$ and $x_2 \in S_2$. As $G$ is connected, it has an $x_1x_2$-path $P = (v_0,...,v_m)$. This path starts in $S_1$ but ends outside of $S_1$ (at $S_2$). Thus there is $i \in [m]$ such that $v_{i - 1} \in S_1$ and $v_i \not \in S_1$. But then the edge $v_{i - 1}v_i$ of $G$ cannot create any cycle when added to $T$ (because a cycle using $e$ must have another edge in $\delta(S_1)$), which is a contradiction. 
To finish this proof it suffices to show that the set $E(T)$ of edges is extendable during the whole run of the algorithm. We use induction on the size of $E(T)$. The claim is true in the base case of $E(T) = \emptyset$. Consider the moment before addition: split $V(T) = S_1 \cup ... \cup S_k$ into connected components of $T$, $k \ge 2$. Let the new edge $e$ have end-points $x \in S_1$ and $y \in S_j$. We cannot have $i = j$ as otherwise $e$ together with an $xy$-path in $S_i$ gives a cycle. The edge $e$ has the smallest cost in $\delta(S_i)$ as none of these edges creates a cycle. [[#^2a569d|Lemma 5.4]] implies that the new set $E(T) \cup \{e\}$ is extendable. 