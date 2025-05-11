[Reference](https://mathcs.org/analysis/reals/index.html) 

# Sequences
**Sequence:** A *sequence* of real numbers is a function $f:\mathbb{N}\to \mathbb{R}$. In other words, a sequence can be written as $f(1), f(2), ...$. We usually denote this by $\left \{ a_j\right\}_{j = 1}^{\infty}$ where $a_j = f(j)$ ^sequence

**Convergence:** A sequence $\left \{ a_j\right\}_{j = 1}^{\infty}$ is said to *converge* to a real number $c$ if for every $\epsilon > 0$ there exists $N \in \mathbb{N}$ such that for all $n > N$, $|a_n - c | < \epsilon$. $c$ is called the *limit* of the sequence $a_k$, and we write $a_j \to c$. If a sequence doesn't converge it is said to *diverge*. ^convergence

**Monotonicity:** A sequence $a_j$ is called *monotone increasing* if $a_{j+1} \ge a_j$ for all $j$. *Monotone decreasing* is defined similarly. ^monotonicity

**Cauchy Sequence:** Let $a_j$ be a sequence of real numbers. We say the sequence satisfies the *Cauchy criterion* (or is simply *Cauchy*) if for all $\epsilon > 0$ there exists $N \in \mathbb{N}$ such that if $j, k > N$ then $| a_j - a_k | < \epsilon$ ^cauchySeq

**Subsequence:** Let $a_j$ be a sequence. When we extract from this sequence only certain elements, and remove the remaining ones, we obtain a new sequence containing an infinite subset of the original sequence. That sequence is called a *subsequence* and is denoted by $\left \{ a_{j_k} \right \}_{k = 1}^{\infty}$ ^subseq

# Series
**Series:** Let $a_n$ be an infinite sequence. The expression $\sum_{n=1}^{\infty} a_n$ is called a *series* ^series

**Partial Sum:** For $N = 1, 2, 3,...$, the expression $\lim S_n = \sum_{n=1}^{N} a_n$ is called the $N$-th *partial sum* of the series ^partialSum

**Convergence:** If $\lim S_n$ exists and is finite, the series is said to *converge*. If $\lim S_n$ does not exist or is infinite, the series is said to *diverge* ^convergenceSeries

**Absolute and Conditional Convergence:** A series $\sum_{n=1}^{\infty} a_n$ *converges absolutely* if the sum of the absolute values $\sum_{n=1}^{\infty} |a_n|$ converges. A series *converges conditionally* if it converges, but not absolutely. ^absoluteConvergence

# Limits & Continuity
**Limit of a function:** A function $f$ with domain $D \in \mathbb{R}$ converges to a *limit* $L$ as $x \to c$ if $D/\{c\}$ is non-empty and for any sequence $x_n \in D/\{c\}$ that converges to $c$, the sequence $f(x_n)$ converges to $L$. We denote this $\lim_{x \to c} f(x) = L$^limit

**Epsilon-Delta Definition of a Limit:** A function $f$ with domain $D \in \mathbb{R}$ converges to a *limit* $L$ as $x \to c \in \text{closure}(D)$ if, given any $\epsilon > 0$ there exists $\delta > 0$ such that if $x \in D$ and $|x - c| < \delta$, then $|f(x) - L| < \epsilon$ ^epsilonDelta

**One-Sided Limits of Functions:** If $f$ is a function with domain $D$ and $c \in \text{closure}(D)$, then $f$ has a *left-hand limit* at $c$ if for every $\epsilon > 0$ there exists $\delta > 0$ such that if $x \in D$ and $c - \delta < x < c$ then $|f(x) - L| < \epsilon$. Likewise, $f$ has a *right-hand limit* at $c$ if for every $\epsilon > 0$ there exists $\delta > 0$ such that if $x \in D$ and $c < x < c + \delta$ then $|f(x) - L| < \epsilon$. We denote the left-hand limit as $\lim_{x \to c^-}$ and the right-hand limit as $\lim_{x \to c^+}$ ^onesidedlimit

**Continuity:** A function is *continuous at a point* $c$ in its domain $D$ if, given any $\epsilon > 0$ there exists a $\delta > 0$ such that if $x \in D$ and $|x - c| < \delta$ then $|f(x) - f(c)| < \epsilon$. A function is *continuous in its domain*$D$ if it is continuous for all $c \in D$ ^continuity

**Uniform Continuity:** A function $f$ with domain $D$ is called *uniformly continuous* on the domain $D$ if for any $\epsilon > 0$ there exists a $\delta > 0$ such that if $s, t \in D$ and $|s - t| < \delta$ then $|f(s) - f(t)| < \epsilon$ ^uniformcontinuity

**Discontinuous Function:** If a function is not continuous at a point $c$, then the function is called *discontinuous* at $c$, and $c$ is called a *point of discontinuity* (or simply a discontinuity) ^discontinuity

**Monotone Function:** A function $f$ is *monotone increasing* on $(a, b)$ if $f(x) \le f(y)$ whenever $x < y$. A function is *monotone decreasing* on $(a, b)$ if $f(x) \ge f(y)$ whenever $x < y$. A function is called *monotone* on $(a, b)$ if it is either always monotone increasing or monotone decreasing. ^monotoneFunc

# Differentiation
**Derivative:** Let $f$ be a function with a domain $D \in \mathbb{R}$, and let $D$ be an open set in $\mathbb{R}$. Then the *derivative* of $f$ at the point $c$ is defined as $$f'(c) = \lim_{x \to c} \frac{f(x) - f(c)}{x - c}$$. If that limit exists, the function is called *differentiable* at $c$. If $f$ is differentiable at every $c \in D$, then $f$ is called differentiable in $D$. ^derivative

# Integrals
**Partition of an Integral:** A *partition* $P$ of the closed interval $[a, b]$ is a finite set of points $P = \{x_0, x_1, ..., x_n\}$ such that $$a = x_0 < x_1 < ... < x_{n-1} < x_n = b$$. The maximum difference between any two consecutive points of the partition is called the *norm* or the *mesh* of the partition, denoted $|P|$. A *refinement* of the partition $P$ is another partition $P'$ that contains all points from $P$ alongside additional points, again sorted by order of magnitude. ^partition

**Riemann Sums:** If $P = \{x_0, x_1,...,x_n\}$ is a partition of the closed interval $[a, b]$ and $f$ is a function defined on that interval, then the $n$-th *Riemann Sum* of $f$ with respect to the partition $P$ is defined as $$R(f, P) = \sum_{j = 1}^n f(t_j)(x_j - xA_{j - 1})$$ where $t_j$ is an arbitrary value in the interval $[x_{j_1}, x_j]$ ^RiemannSum

**Upper and Lower Sum:** Let $P = \{x_0, x_1,...,x_n\}$ be a partition of the closed interval $[a, b]$ and $f$ a bounded function defined on that interval. Then the *upper sum* of $f$ with respect to the partition $P$ is defined as $$U(f, P) = \sum_{j = 1}^n c_j(x_j - x_{j - 1})$$ where $c_j$ is the supremum of $f(x)$ in the interval $[x_{j-1}, x_j]$. Likewise, the *lower sum* of $f$ with respect to $P$ is defined as $$L(f, P) = \sum_{j = 1}^n d_j(x_j - x_{j - 1})$$ where $d_j$ is the infimum of $f(x)$ in the interval $[x_{j-1}, x_j]$. ^ULSum

**The Riemann Integral:** Suppose $f$ is a bounded function defined on a closed, bounded interval $[a, b]$. Define the upper and lower Riemann integrals, respectively, as $I^*(f) = \inf\{U(f, P):P \text{ a partition of } [a, b]\}$ and $I_*(f) = \sup\{L(f, P):P \text{ a partition of } [a, b]\}$. Then if $I^* = I_*$, the function $f$ is called *Riemann Integrable*, and the Riemann integral of $f$ over $[a, b]$ is denoted by $\int_a^b f(x) dx$. ^RiemannInt

**Antiderivative:** For a given function $f$, the function $F$ such that $F'(x) = f(x)$ is called the *antiderivative* of $f$. ^antiderivative

# Sequences of Functions
**Sequences of Functions:** $f : \Omega \times \mathbb{N} \to \mathbb{R}$ where $\Omega \subseteq \mathbb{R}$ is called a *sequence of functions*, denoted $\{f_n(x)\}$ ^seqfunc

**Pointwise Convergence:** A sequence of functions $(f_n)_{n = 1}^{\infty}$, $fn : \Omega \to \mathbb{R}$ *converges pointwise* if for each fixed $x_0 \in \Omega$, the sequence $f_n(x_0)$ converges. ^pointwiseConv

**Uniform Convergence:** A sequence of functions s$(f_n)_{n = 1}^{\infty}$, $f_n : \Omega \to \mathbb{R}$ *converges uniformly* to a function $f(x)4 if, given any $\epsilon > 0$, there exists $N \in \mathbb{N}$ such that for all $n \ge N$ $$|f_n(x) - f(x)| < \epsilon \quad \forall x \in \Omega$$ ^uniformConv
**Series of Functions:** Suppose $\{f_n(x)\}$ is a sequence of functions. We define the $N$-th partial sum as $$S_N(x) = \sum_{n = 1}^N f_n(x)$$ Let $D$ be the set of points for which the sequence of partial sums converge pointwise. Then for $x \in D$, we denote the resulting limit function by $$\sum_{n = 1}^{\infty} f_n(x) = \lim_{N \to \infty} \sum_{n = 0}^N f_n(x)$$ ^seriesFunc

**Power Series:** A function series of the form $$\sum_{n = 1}^{\infty} a_n (x - c)^n = a_0 + a_1(x - c) + a_2(x - c)^2 + ...$$ is called a *power series* centred at $c$. ^powerSeries

**Taylor Series:** Suppose $f$ is an infinitely often differentiable function on a set $\Omega$, and $c \in \Omega$. Then the series $$T_f(x, c) = \sum_{n=0}^{\infty} \frac{f^{(n)}(c)}{n!} (x - c)^n$$ is called the *Taylor series* of $f$ centred at (or around) $c$. If $c = 0$ the series is sometimes referred to as the *Maclaurin series* ^TaylorSeries

# Complex Analysis

**Convergence:** We say that $(z_n)_{n = 1}^{\infty} \subset \mathbb{C}$ *converges* to $z$ if and only if $|z_n - z| \to 0$ as $n \to \infty$. I.e., for every $\epsilon > 0$ there exists $N \in \mathbb{N}$ such that $|z_n - z| < \epsilon$ for all $n > N$. 

**Open and Closed Sets:** We say that $\Omega \subset \mathbb{C}$ is *open* if and only if for every $x \in \Omega$ there exists $r > 0$ such that $B_r(x) = \{z \in \mathbb{C} : |z - x| < r\} \subset \Omega$. We say that $\Omega$ is *closed* if and only if $\Omega^c$ is open

**Sequential Compactness:** A set $K \subset \mathbb{C}$ is *sequentially compact* if and only if for every sequence $(x_j)_{j \in \mathbb{N}} \subset K$ has a convergent subsequence $(x_{j(l)})_{l \in \mathbb{N}}$ whose limit is in $K$. 

**Continuity:** Given $f : \Omega \subset \mathbb{C} \to \mathbb{C}$, we say it is *continuous* at $z_0 \in \Omega$ if and only if for every $\epsilon > 0$ there exists $\delta$ such that $|z - z_0| < \delta$, with $z \in \Omega$ implies $|f(z) - f(z_0)| < \epsilon$ 

**Complex Differentiability:** Let $\Omega \subset \mathbb{C}$ be an open set and $z \in \Omega$. We say $f$ is *complex differentiable* at $z$ if and only if the limit $$\lim_{h \to 0}\frac{f(z + h) - f(z)}{h}$$ exists. We denote the limit by $f'(z)$ 

**Analytic and Entire Functions:** We say that $f:\Omega \to \mathbb{C}$ is *analytic* (or *holomorphic*) in a neighbourhood $U$ of $z$ if it is complex differentiable everywhere in $U$. We say that $f$ is *entire* if it is analytic in the whole of $\mathbb{C}$. 

