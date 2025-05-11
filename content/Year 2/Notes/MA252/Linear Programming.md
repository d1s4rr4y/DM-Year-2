# Basics of Linear Programming
Recall that the Max-Flow Problem for a network $N = (V, A,b, s, t)$ is to maximise $\sum_{sv \in A} f(sv)$ subject to $\sum_{uv \in A} f(uv) - \sum_{vw}f(vw) = 0 \ \forall v \in V \backslash \{s, t\}$ and $0 \le f(vw) \le u_{vw} \ \forall vw \in A$ 
The min cost $dist^c(s, t)$ of an $st$-path for $G = (V, E)$, $c : E \to \mathbb{R}_{\ge 0}$ and $s, t \in V$ can be re-formulated as follows

**Lemma 11.1** $dist^c(s,t)$ is max $x_t$ subject to 
- $x_s = 0$
- $x_v \le x_u + c(uv) \ \forall uv \in A$
*Proof* "$\ge$" $x_u := dist^c(s, u)$ for $u \in V$ is a feasible solution to the value of $dist^c(s, t)$
"$\le$" Take any feasible $\mathbf{x}$. Fix a min-cost path $(v_0 = s, v_1,..., v_m = t)$. 
Prove by induction on $i = 0, 1,...,m$ that $x_{v_i} \le dist^c(s, v_i)$
- $i = 1: 0 \le 0$
- $i \ge 1: x_{v_i} \le x_{v_{i - 1}} + c(v_{i - 1}, v_i) = dist^c(s, v_{i - 1}) + c(v_{i - 1}, v_i) = dist^c(s, v_i)$ 

Common features of these two problems are that the objective function and all constraints are linear functions in the unknown variables. Some other optimisation problems (e.g. the maximum size of a matching in a bipartite graph) can be expressed in this form. 

The general setting is as follows, We are given
A (row) $n$-vector $\mathbf{c} = (c_1,...,c_n)$
A (column) $m$-vector = $\mathbf{b} = (b_1,...,b_m)^T$
an $m \times n$-matrix $A$, rows $\mathbf{a}_1,..., \mathbf{a}_m$
For unknown (column) $n$-vector $\mathbf{X} = (x_1,...,x_n)^T$ we define: 
$\mathbf{cx} := \sum_{i = 1}^n c_ix_i$ (same as the *scalar product $\mathbf{c}\cdot\mathbf{x}$*). Also, we have
$$A\mathbf{x} = \begin{pmatrix} \mathbf{a}_1\mathbf{x}\\ \vdots \\  \mathbf{a}_m\mathbf{x} \end{pmatrix} = \begin{pmatrix} \mathbf{a}_1 \cdot \mathbf{x}\\ \vdots \\  \mathbf{a}_m\cdot \mathbf{x} \end{pmatrix}$$
*Linear Programming:* Determining the max (or min) of $\mathbf{c} \cdot \mathbf{x}$ subject to 
- $A\mathbf{x} \le \mathbf{b}$ (taken component-wise, i.e. $\forall j \in [m] \mathbf{a}_j \cdot \mathbf{x} \le b_j$)

**Glossary**
*Cost/Objective Function:* $\mathbf{c} \cdot \mathbf{x}$ 
*Constraints:* $A\mathbf{x} \le \mathbf{b}$
*Feasible $\mathbf{x}$:* satisfies all constrains 
*Feasible Region:* $F := \{\mathbf{x} \in \mathbb{R}^n : A \mathbf{x} \le \mathbf{b}\} = \{\text{all feasible } \mathbf{x}\}$ 
*Optimal $\mathbf{x}$:* feasible $\mathbf{x}$ that maximises (or minimises) the objective function

**Lemma 11.2** Every LP, to minimise $\mathbf{cx}$ subject to $A\mathbf{x} \le \mathbf{b}$, is equivalent to one in standard form, meaning that there are simple rules on how to transform a feasible solution of one LP to a feasible solution of the other having the same objective function
*Proof* Replace each constraint $\mathbf{a}_j\mathbf{x}\le b_j$ by $\mathbf{a}_j\mathbf{x} + s_j = b_j$ where $s_j \ge 0$ ($s$ for slack) is a new variable. 
Replace each $x_i$ by $y_i^+ - y _ i ^-$ and add $y_i^+, y_i^- \ge 0$
Equivalently, take the $m \times ( 2n + m )$ matrix $A' := (A, -A, I_m)$, the new cost vector $\mathbf{c}' := (\mathbf{c}, -\mathbf{c}, 0^m)$, and the column vector $\mathbf{z} := (y_1^+,...,y_n^+,y_1^-,...,y_n^-,s_1,...,s_m)^T$ of unknowns. Then $A\mathbf{X} = A'\mathbf{z}$ and $\mathbf{c}'\mathbf{z} = \mathbf{c} \cdot \mathbf{x}$ 
Consider a new LP in standard form: $\min \mathbf{c}'\mathbf{z} \ st \ A' \mathbf{z} = \mathbf{b}, \mathbf{z} \ge 0$, that is 
$\min(\mathbf{c}, -\mathbf{c}, o^m)\mathbf{z}$
	$(A, -A, I)\mathbf{z} = \mathbf{b}$
	$\mathbf{z} \ge 0$
It is equivalent to the original LP. Indeed, given feasible $\mathbf{z}$, the corresponding $\mathbf{x}$, where $x_i := y_1^+ - y_i^-$ for $i \in [n]$ is feasible and of the same value. Conversely, given feasible $\mathbf{x}$, define $y_i^+ := \max(x_i, 0) \ge 0, y_i^- := \max (-x_1, 0) \ge 0$ and $s_j := b_j - \mathbf{a}_j\mathbf{x} \ge 0$. Then the corresponding $\mathbf{z}$ is feasible and of the same value

**Theorem 11.1** Suppose that we have an LP to minimise $\mathbf{c} \cdot \mathbf{x}$ subject to $A \mathbf{x} = \mathbf{b}$, $\mathbf{x} \ge 0$ with an $m \times n$ matrix $A$ having rank $m$. Suppose also that the feasible region $F = \{\mathbf{x} \ge 0 : A \mathbf{x} = \mathbf{b}\}$ is non-empty ^349edf
- (i) Then at least one bfs exists 
- (ii) Suppose additionally that the value of LP is not $- \infty$ and let $\mathbf{z} \in F$. Then there is a bfs $\mathbf{y} \in F$ such that $\mathbf{c} \cdot \mathbf{y} \le \mathbf{c} \cdot \mathbf{z}$
*Proof* (i) Pick $\mathbf{x} \in F$ that has as many 0 entries as possible. WLOG assume $x_1,...,x_t > 0$ while $x_{t + 1} = ... = x_n = 0$. Let $r := rank(A_{[t]})$ there $A_{[t]} = (A_1,...,A_t)$. Suppose that $r < t$ as otherwise we are done: by linear algebra there is a basis set $I$ that contains the set $[t]$ and $\mathbf{x} \in F$ is the bs of $I$. 
WLOG suppose that the first $r$ columns $A_1, ..., A_r$ are linearly independent. Find $\mathbf{d} \ne \mathbf{0}$ in $mathbb{R}^n$ such that $d_i = 0$ for $i \in [r + 2, n]$, $d_{r +1} = 1$ and $A \mathbf{d} = \mathbf{0}$. Let $$L := \{\mathbf{x} + \theta \mathbf{d} : \theta \in \mathbb{R}\}$$For any $\mathbf{y} = \mathbf{x} + \theta \mathbf{d}$ on the line $L$ we have $$A\mathbf{y} = A \mathbf{x} + \theta A \mathbf{d} = A\mathbf{x} = \mathbf{b}$$Moreover, if $\lvert \theta \rvert$ is sufficiently small, then $\mathbf{y} \ge 0$ and thus $\mathbf{y} \in F$. Lets decrease $\theta$ down from 0 until a new coordinate becomes 0. This happens at or before $\theta$ becomes $-x_{r+1}$. But this then contradicts the minimality of $t$.

(ii) Take $\mathbf{x} \in F$ such that $\mathbf{c} \cdot \mathbf{x} \le \mathbf{c} \cdot \mathbf{z}$ and the number $t$ of non-zero entries in $\mathbf{x}$ is as small as possible. As in (i), WLOG, $x_1,...,x_t > 0$ while other $x_i = 0$. Let $r := rank(A_{[t]})$. Suppose $r < t$. WLOG $A_1,..., A_r$ are linearly independent. Find $\mathbf{d}$ such that $d_1 = 0$ for $i \in [r + 2, n]$, $d_{r+1} = 1$ and $A\mathbf{d} = \mathbf{0}$. Define $L$ as before. 
If $\mathbf{c} \cdot \mathbf{d} = 0$ then the objective function is constant on the line $L$ and we proceed as above. Otherwise we move along the line from $\mathbf{x}$ so that the objective function strictly decreases; then we make some new $x_i$ zero or conclude that the value of the LP is $-\infty$ which is a contradiction in either case.

**Corollary 11.1** For an LP in standard form ($\min \mathbf{c} cdot \mathbf{x} \ s.t. \ A \mathbf{x} = 0, \mathbf{x} \ge 0$ for $m \times n$ matrix with $rank(A) = m$) if its value is finite then it is attained by a bfs
*Proof:* The feasible region $F$ is non-empty (as otherwise $\min = +\infty$). There are finitely many (at most $n \choose m$) choices of a bfs $\mathbf{x}$. Let $M$ be the minimum of $\mathbf{c} \cdot \mathbf{x}$ over them. Part (ii) of [[#^349edf|Theorem 11.1]] implies that for every $\mathbf{z} \in F$ there is a bfs $\mathbf{x}$ with $\mathbf{c} \cdot \mathbf{x} \le \mathbf{c} \cdot \mathbf{z}$. Thus for every $\mathbf{z} \in F$ we have $\mathbf{c} \cdot \mathbf{z} \ge M$ so the value of the LP is exactly $M$. 

**Algorithm 11.1 (Impractical Algorithm)**
$$\begin{align}
&\text{Input: $m \times n$ matrix $A$ with $rank(A) = m, \mathbf{b} \in \mathbb{R}^m, \mathbf{c} \in \mathbb{R}^n$}\\
&\text{Output: minimum of $\mathbf{c} \cdot \mathbf{x}$ such that $A\mathbf{x} = \mathbf{b}$ and $\mathbf{x} \ge 0$}\\
&M := +\infty\\
&\text{For $I \subseteq [n]$ with $\lvert I \rvert = m$}\\
&\qquad \text{If $rank(A_i) = m$ then}\\
&\qquad \qquad \text{Compute the basic solution $\mathbf{X}$ corresponding to $I$}\\
&\qquad \qquad \text{If $\mathbf{x} \ge 0$ then $M := \min(M, \mathbf{c} \cdot \mathbf{x})$}\\
&\text{If $M = + \infty$}\\
& \qquad \text{Then output "$+\infty$" (i.e.``infeasible")}\\
& \qquad \text{Else output ``$M$ or $-\infty$"}\\
\end{align}$$
How do we know if the value of the PL if $-\infty$ or not? Run the above algorithm again adding the constraint $\mathbf{c} \cdot \mathbf{x} \le M - 1$ and check if the new LP is feasible. If yes, output "$-\infty$" else output $M$.

**Lemma 11.3** Let $m \times n$ matrix $A$ have rank $m$, let $\mathbf{b} \in \mathbb{R}^m$ and let $F = \{\mathbf{X} \in \mathbb{R}^n : A\mathbf{x} = \mathbf{b}, \mathbf{x} \ge 0\}$. Then $\mathbf{y}$ is a bfs (with respect to $A$ and $\mathbf{b}$) if and only if there is $\mathbf{c}$ such that $\mathbf{y}$ is the unique element of $F$ minimising $\mathbf{c} \cdot \mathbf{x}$. 
*Proof:* $\Rightarrow$ Let $\mathbf{y}$ correspond to a basic set, $I \subseteq [n]$. Define $c_i := -$ for $i \in I$ and $c_i := i$ otherwise. Here $\mathbf{c} \cdot \mathbf{y} = 0$. Any other feasible $\mathbf{x}$ is non-negative, so $\mathbf{} \cdot \mathbf{x} \ge 0$ with equality iff $x_j = 0$ for all $j \not \in I \Rightarrow \mathbf{x} = \mathbf{y}$ 
$\Leftarrow$ Let $\mathbf{y, c}$ be as stated. As before, it suffices to prove that the columns of $A$ corresponding to the indices $i$ with $y_i > 0$ are linearly independent. Suppose on the contrary that there is some linear relation between them, i.e. there is a non-zero vector $\mathbf{d}$ such that $A \mathbf{d} = 0$ and $d_i = 0$ for each $i$ with $y_i = 0$. Take any real $\theta \ne 0$ of small absolute value. Then $\mathbf{y} - \theta \mathbf{c}, \mathbf{y} + \theta \mathbf{c} \in F$ and $$\frac{\mathbf{c} \cdot (\mathbf{y} + \theta \mathbf{d}) + \mathbf{c} \cdot (\mathbf{y} - \theta \mathbf{d})}{2} = \mathbf{c} \cdot \mathbf{y}$$
So $\mathbf{y}$ cannot be the unique minimiser, which is a contradiction. ^69ab53
# Polyhedra 
Lets give a geometric interpretation of bfs
A *polyhedron* is a set in $\mathbb{R}^n$ of the form $\{\mathbf{x} \in \mathbb{R}^n : A \mathbf{x} \le \mathbf{b}\}$ 
A *half-space* is a set $\{\mathbf{x} \in \mathbb{R}^n : \mathbf{ax} \le b\}$ for some $\mathbf{a} \in \mathbb{R}^n$ and $b \in \mathbb{R}$
Thus a polyhedron is an intersection of finitely many half-spaces. 
A *hyperplane* is a set $$H = \{\mathbf{x} \in \mathbb{R}^n : \mathbf{ax} = b\} = \left\{\\mathbf{x} \in \mathbb{R}^n : \begin{pmatrix}\mathbf{a} \\ -\mathbf{a}\end{pmatrix} \mathbf{x} \le \begin{pmatrix} b \\ -b\end{pmatrix}\right\}$$for some $\mathbf{a} \in \mathbb{R}^n$ and $b \in \mathbb{R}$
[[#^69ab53|Lemma 11.3]] shows that for an LP in standard form, its basic feasible solutions are exactly the vertices of the feasible region $F$. 
# Simplex Algorithm 
The main idea of the Simplex Algorithm is to be able to move from a basic feasible solution for $I$ to a bfs for $I'$ where $\lvert I \triangle I' \rvert = 2$ is the smallest possible for $I' \ne I$. 
**Algorithm 13.1 (Simplex Algorithm)**
$$\begin{align} 
&\text{Input: $m \times n\ A$ of rank $m$, $\mathbf{c} \in \mathbb{R}^n, \mathbf{b} \in \mathbb{R}^m$, basic set $I \subseteq [n]$ st its basic solution is feasible}\\
&\text{Output: Optimal $\mathbf{x}$ for $\min \mathbf{c} \cdot \mathbf{x}$ subject to $A \mathbf{x} \le \mathbf{b}$, or conclude that the LP is unbounded }\\
&\text{Write the initial sompliex tableau} \begin{pmatrix} z := 0  &|& \mathbf{c} \\ \hline \mathbf{b} & | & A \end{pmatrix}\\
&\text{Reduce with respect to $I$: apply row operations to the whole tableau so that $A_I$ is a permutation of the $m \times m$ identity matrix, and $c_j = 0$ for every $j \in I$}
&\text{Repeat}\\
&\qquad\text{If $\mathbf{c} \ge 0$ then output the bfs of $I$ (and $-z$ as the value of the LP)  and stop}\\
&\qquad\text{Choose $j \in [n]$ such that $c_j < 0$}\\
&\qquad\text{If $a_{ij} \le 0$ for all $i$ then output ``unbounded" and stop}\\
&\qquad\text{Choose $k \in [m]$ such that $\min\{b_i/a_{ij} : a_{ij} > 0\} = b_k . a_{kj}$}\\
&\qquad\text{Pivot on $(k, j)$}\\
&\qquad\qquad\text{$I := (I \cup \{j\})\backslash \{s\}$ where $s$ is the unique element of $I$ with $A_s = \mathbf{e}_k$}\\
&\qquad\qquad\text{Reduce the tableau with respect to the new set $I$}\\
\end{align}$$
Here $\mathbf{e}_k = (0,...,0,1,0,...,0)^T$ denotes the $k$-th standard basis vector in $\mathbb{R}^m$ 

**Lemma 13.1** The set $S := \{ \mathbf{x} \in \mathbb{R}^n : A \mathbf{x} = \mathbf{b}\}$ remains unchanged during the run of the Simplex Algorithm ^9209b9

**Lemma 13.2** For any stage( of the Simplex Algorithm, the cost of any $\mathbf{x} \in S$ is $\mathbf{c} \cdot \mathbf{x} - z$ (for $\mathbf{c}, z$ from the current simplex tableau)
*Proof:* Induction on the number of row operations with the claim initially true when we set $z := 0$
Consider a row operation that affects row 0, the row that contains $\mathbf{c}$ and $z$. Each such row operation in the Simplex Algorithm adds $\lambda\mathbf{a}_i$ to $\mathbf{c}$ and $\lambda b_i$ to $z$. By [[#^9209b9|Lemma 13.1]], we have that $\mathbf{x} \in S$ satisfies all current equality constraints; in particular, $\mathbf{a}_i \cdot \mathbf{x} = b_i$. Thus the new vale of $\mathbf{c} \cdot \mathbf{x} - z$ is $$(\mathbf{c} + \lambda\mathbf{a}_i)\mathbf{x} - (z + \lambda b_i) = \mathbf{c} \cdot \mathbf(x) - z + \lambda(\mathbf(a)_i\mathbf{x} - b_i) = \mathbf{c} \cdot \mathbf{x} - z$$as desired. ^259dcc

Suppose that at some moment of the Simplex Algorithm we have the simplex tableau reduced with respect to the current basis set $I$. The coefficient $c_j$ for $j \not \in I$ tells by how much the objective function increases per increasing $x_j$ if we bring $j$ into the basis. This is why we pick negative $c_j$: $x_j$ (which is 0 for the bfs of $I$ before the iteration) can only increase while we want to minimise the objective function. Suppose that we have picked $j$ with $c_j < 0$. By the symmetry between columns of $A$, suppose for notational convenience that $I = \{1,..., m\}$ with $A_i = \mathbf{e}_i$ for $i \in [m]$ (that is, $A_I$ is the $m \times m$ identity matrix). Then the column $A_j = (a_{ij})_{i = 1}^m$ is the linear combinations $\sum_{i = 1}^m a_{ij}A_i$. This means that if we increase $x_j$ from 0 to $\theta$ then $x_i$ for each $i \in [m]$ decreases by $\theta a_{ij}$, that is, from $b_i$ to $b_i - \theta a_{ij}$. The Simplex Algorithm picks the maximum $\theta \ge 0$ so that no $x_i$ becomes negative but at least one becomes 0, which dictates the choice of $k$, one that minimises $b_k/a_{kj}$ over all $a_{kj} > 0$. (If $a_{ij} < 0$ then there is no danger that $x_i$ becomes 0, so this $i$ plays no role)

**Lemma 13.3** Assume the above conventions (that, in the reduced simplex tableau, $c_j < 0, I = [m], A_I$ is the identity matrix) and assume that the current $\mathbf{b}$ is non-negative ^752e2b
- (i) Suppose that the column $A_j$ has at least one positive entry and we pivot on $(k, j)$. Then the new vector $\mathbf{b}$ is non-negative, $s = k$, and, for the new set $I := I \cup \{j\} \backslash \{k\}$, the new matrix $A_I$ is a permutation of the $m \times m$ identity matrix (so in particular the new set $I$ is a basic set)
- (ii) If the column $A_j$ has no positive entry then the LP is unbounded
*Proof* (i) For $i \in [m] \backslash \{k\}$, the new value of $b_i$ is $b_i - (a_{ij}/a_{kj} \cdot b_k)$. This is non-negative by the definition of $k$ if $a_{ij} > 0$ and trivially otherwise. Also, the new value of $b_k$ is $b_k/a_{kj} \ge 0$. Clearly $s = k$
Also, when we pivot on $(k, j)$, we add multiples of Row $k$ to the other rows. Since Row $k$ has zeroes in the positions indexed by $[m] \backslash \{k\}$, the corresponding columns of $A$ do not change. Thus for any $i \in [m] \backslash \{k\}$ the new $i$-th column of $A$ is the same as the old $i$-th column of $A$, that is, remains equal to the standard basis vector $\mathbf{e}_i$. Also, the new $j$-th column is $\mathbf{e}_j$ by definition. Thus the new set $I$ indeed spans a permutation of the identity matrix $I_m$. 

(ii) Let $\mathbf{x}$ be the bfs of $I$. Take any $\theta \ge 0$. Let $\mathbf{x}'$ be obtained from $\mathbf{x}$ by increasing $x_j$ from 0 to $\theta$ and increasing $x_i$ by $-\theta a_{ij} \ge 0$ for each $i \in [m]$. Then $A\mathbf{x}' = \mathbf{b}$ and trivially $\mathbf{x}' \ge 0$, so the new vector $\mathbf{x}'$ is feasible for every $\theta \ge 0$. The new objective function is changed by $c_j \theta < 0$, that is it decreases linearly with $\theta$. Since $\theta$ can be any aribtrarily large positive number, the LP is indeed bounded

It follows from [[#^752e2b|Lemma 13.3]] by induction on the number of pivots that the vector $\mathbf{b}$ stays non-negative during the whole run of the Simplex Algorithm. 
**Note** that if there is more than one choice for $k$, then the next bfs is *degenerate* (i.e., has fewer than $m$ non-zero entries) because an entry of $\mathbf{b}$ becomes 0

**Lemma 13.4** If $\mathbf{c} \ge 0$ then the bfs $\mathbf{x}$ of the current $I$ is optimal
*Proof* By [[#^752e2b|Lemma 13.3]], the reduced simplex tableau for $I$ satisfies $\mathbf{b} \ge 0$. Thus the bs $\mathbf{x}$ of $I$ is non-negative. 
The objective function at $\mathbf{x}$ is $\mathbf{c} \cdot \mathbf{x} - z$ by [[#^259dcc|Lemma 13.2]]. This is exactly $-z$ since $c_i = 0$ for every $i \in I$ and $x_i = 0$ for every $i \in [n] \backslash I$ 
Take any feasible $\mathbf{y} \in F$. Again, by [[#^259dcc|Lemma 13.2]], $\mathbf{c} \cdot \mathbf{y} - z$ is the value of the objective function on $\mathbf{y}$. But $\mathbf{c} \cdot \mathbf{y} \ge 0$ since $\mathbf{y} \ge 0$ (as a feasible vector) and $\mathbf{c} \ge 0$ (by assumption). Since $\mathbf{y} \in F$ was arbitrary, the bfs $\mathbf{x}$ is optimal.  ^70dea2

Thus if the Simplex Algorithm stops then its output is correct. There are finitely many (at most $n \choose m$ possible basic sets. If we can ensure the Simplex Algorithm does not use the same basic set $I$ twice then we know it finishes with a correct answer)

# Rules for Choosing the Pivot 
Picking $\min c_j < 0$ may lead to cycling. For $\mathbf{x, y} \in \mathbb{R}^n, \mathbf{x}$ is *lexicographically smaller* than $\mathbf{y}$, denoted $\mathbf{x} \prec \mathbf{y}$, if there is an $i \in [n]$ such that $x_j = y_j$ for all $j \in [i - 1]$ and $x_i < y_i$

The *lexicographic rule* By Dantzig-Orden:
- Choose any $j$ with $c_j < 0$ 
- Given $j$, if there is more than one choice of $k$ minimising $b_k/a_{kj}$ for $a_{kj} > 0$, then among such $k$'s choose one such that the vector $(a_{k1}/a_{kj},...,a_{kn}/a_{kj})$ is lexicographically smallest (i.e. has the smallest possible first entry, then the second entry, and so on)

**Theorem 14.1** The lexicographic rule prevents cycling. 
*Proof is Theorem 14.1 in the Papadimitrou-Steiglitz book*

**Bland's Rule**
- Pick the smallest $j$ with $c_j < 0$ 
- Given $j$, pick $k$ such that $a_{kj} > 0$, then $b_k/a_{kj}$ is smallest and then $s = s(k)$, the index of the column that will leave the basis, is smallest

**Theorem 14.2** Bland's rule prevents cycling
*Proof is non-examinable*

# Finding a BFS (Basic Feasible Solution)
How do we find a bfs for a given feasible region $F = \{\mathbf{x} \in \mathbb{R}^n : a \mathbf{x} = \mathbf{b}, \mathbf{x} \ge 0\}$ 

**Algorithm 15.1**
$$\begin{align}
&\text{Input: $m \times n$ matrix $A$ of rank $m$ and vector $\mathbf{b} \in \mathbb{R}^m$}\\
&\text{Output: bfs $\mathbf{x}$ or ``infeasible"}\\
&\text{1st Step: Make each $b_i \ge 0$ (by multiplying the $i$-th row by $-1$ if necessary)}\\
&\text{2nd Step: Add extra variables $s_1,...,s_m \ge 0$ and replace each equation $\mathbf{a}_i\mathbf{x} = b_1$ by $\mathbf{a}_i\mathbf{x} + s_i = b_i$}\\
&\text{3rd Step: Starting with a bfs $(\mathbf{x}, \mathbf{s}) = (0,...,0,b_1,...,b_m)$, minimuse function $s_1 + ... + s_m$.}\\
&\text{4th Step: If the value of the new LP is $> 0$ then the problem is infeasible.}\\
&\qquad\qquad\text{Otherwise, the optimal bfs has each $s_i = 0$ and removing these zeroes we get a bfs $\mathbf{x}$ to the original LP}\\
&\text{5th Step: (if we also need a basic set $I$ for the original LP) Extend $\{i \in [n] : x_i > 0\}$ to a basic set for $A$,}\\
&\qquad\qquad\text{e.g. by bringing all $\mathbf{s}$-solumns ot of the current basic set one by one (and reducing the tableau each time)}
\end{align}$$

# Duality 
Lets start with some motivation: 
Suppose $\mathbf{x}$ is a feasible solution for the LP to minimise $\mathbf{c} \cdot \mathbf{x}$ subject to $A\mathbf{x} = \mathbf{b}$ and $\mathbf{x} \ge 0$. If we multiply by the $i$-th equation $\mathbf{a}_i \cdot \mathbf{x} = b_i$ for some $y_i \in \mathbb{R}$ and add it up we get $$\sum_{i = 1}^m y_i \left ( \sum_{j=1}^na_{ij}x_j\right ) = \sum_{i = 1}^m y_ib_i$$
By expanding, the coefficient at $x_j$ is $\sum_{i = 1}^m y_ia_{ij}$. If this coefficient happens to be at most $c_j$ for every index $j \in [m]$ (in matrix form, if $\mathbf{y}A \le \mathbf{c}$) then, by $\mathbf{x} \ge 0$, the left-hand size of the above equation is at most $\sum_{j = 1}^mc_jx_j = \mathbf{c} \cdot \mathbf{x}$. Thus any (row) vector $\mathbf{y} \in \mathbb{R}^m$ with $\mathbf{y}A \le \mathbf{c}$ gives a lower bound $\mathbf{y} \cdot \mathbf{b}$ on the value of the LP. If we try to get as large as possible lower bound in this way, we get the following definition: 

**Definition:** suppose we have an LP (called *primal*) to minimise $\mathbf{c} \cdot \mathbf{x}$ subject to $A \mathbf{x} = \mathbf{b}$ and $\mathbf{x} \ge 0$ (with $m \times n$ matrix $A$). Its *dual* is the LP to maximise $\mathbf{y} \cdot \mathbf{b}$ for a (row) vector $\mathbf{y} \in \mathbb{R}^m$ with $\mathbf{y}A \le \mathbf{c}$

**Theorem 16.1 (The Weak Duality Theorem)** For any feasible solutions $\mathbf{x}$ and $\mathbf{y}$ to the primal and dual LPs we have $\mathbf{c} \cdot \mathbf{x} \ge \mathbf{y} \cdot \mathbf{b}$ 
*Proof* 
$$\mathbf{c} \cdot \mathbf{x} \ge (\mathbf{y}A) \mathbf{x} = \mathbf{y}(A\mathbf{x}) = \mathbf{y} \cdot \mathbf{b}$$ ^e2e864

**Theorem 16.2 (Strong Duality Theorem)** If the primal LP is finite, then so is its dual and their values coincide
*Proof* We can verify that when we bring the LP into standard form, the value of its dual does not change. WLOG, assume that the primal LP is in standard form. Minimise $\mathbf{c} \cdot \mathbf{x}$ given that $A\mathbf{x} = \mathbf{b}$ and $\mathbf{x} \ge 0$ for an $m \times n$ matrix $A$ of rank $m$.
The dual is to maximise $\mathbf{y} \cdot \mathbf{b}$ given that $\mathbf{y}A \le \mathbf{c}$ 
Since the original LP is feasible, a bfs exists. Run the Simplex Algorithm. Since the original LP is bounded, the algorithm stops (following Bland's Rule).
Row operations amount to multiplying the tableau $(m + 1) \times (m + 1)$ invertible matrices on the left. Let the final tableau be obtained from the initial tableau by multiplication by an invertible matrix $M$. 
Note that Row 0 is never added to another row. Also, it is never multiplied by a constant other than 1. Thus, each row operation is given by some matrix which has the first standard basis vector $\mathbf{e}_1$ as its first column. It is easy to see that the product of any 2 such matrices has the same property. Alternatively, observe that the meaning of the $(i, j)$-th entry $m_{ij}$ of $M$ is to take Row $j$ of the initial tableau, multiply it my $m_{ij}$ and add the result to Row $i$ of the final tableau. Thus the final matrix $M$ has the form 
$$M = \begin{pmatrix} 1 & -y_1 & ... & -y_m \\ 0 \\ \vdots & & D\\ 0 \end{pmatrix}$$
for some row vector $\mathbf{y} \in \mathbb{R}^m$ and $m \times m$ matrix $D$. Also, $M$ satisfies  ^bc2e5c
$$
M \begin{pmatrix} 0 & | & \mathbf{c} \\ \hline \mathbf{b} & | & A \end{pmatrix} = 
\begin{pmatrix} z' & | & \mathbf{c}' \ge 0 \\ \hline \vdots & | & ...\end{pmatrix}
$$
Thus $0 \le \mathbf{c}' = -\mathbf{y}a + \mathbf{c}$. This implies that the vector $\mathbf{y}$ satisfies $\mathbf{y}A \le \mathbf{c}$, this it is a feasible vector for the dual. Let $\mathbf{x}$ be the bfs corresponding to the final basic set $I'$. It is optimal by [[#^70dea2|Lemma 13.4]]. By [[#^259dcc|Lemma 13.2]], the value of the primal LP is $\mathbf{c}'\mathbf{x} - z'$, which is $-z'$ since the final simplex tableau is reduced (and thus $c_j' = 0$ whenever $x_j > 0$). By the [[#^e2e864|Weak Duality Theorem]], the value of the dual LP is at most $-z'$. Since $\mathbf{y} \cdot \mathbf{b} = -z'$, the vector $\mathbf{y}$ is an optimal solution to the dual. Thus the dual LP has the same value as the primal LP

**Lemma 16.1 (Complementary Slackness)** Consider an LP ($\min \mathbf{c} \cdot \mathbf{x}$ such that $A\mathbf{x} = \mathbf{b}$ and $\mathbf{x} \ge 0$, $m \times n$ matrix $A$) and its dual ($\max \mathbf{y} \cdot \mathbf{b}$ such that $\mathbf{y}A \le \mathbf{c}$). Then feasible vectors $\mathbf{x}$ and $\mathbf{y}$ in respectively the LP and its dual are both optimal if and only if for all $j \in [n]$ we have $(c_j - \mathbf{y}A_j)x_j = 0$
*Proof:* For any feasible $\mathbf{x}$, $\mathbf{y}$ we have 
$$\mathbf{c} \cdot \mathbf{x} - \mathbf{y} \cdot \mathbf{b} - \mathbf{c} \cdot \mathbf{x} - (\mathbf{y}A)\mathbf{x} = \sum_{j = 1}^n(c_j - \mathbf{y}A_j)x_j$$ If the vectors $\mathbf{x}$ and $\mathbf{y}$ are optimal then, by the [[#^bc2e5c|Strong Duality Theorem]], $\mathbf{c} \cdot \mathbf{x} = \mathbf{y} \cdot \mathbf{b}$, so by the [[#^e2e864|Weak Duality Theorem]] these are the optimal values. 