A *norm* on a vector space is a generalised notion of "length" of a vector.

>[!warning] **DEFINITION** Norms 
>A norm on a vector space $X$ is a map $|| \cdot || : X \rightarrow \mathbb{R}^+$ such that 
> - $|| x || = 0$ if and only if $x = 0$ 
> - $|| \lambda x || = |\lambda|||x||$ for every $\lambda \in \mathbb{R},\ x \in X$ ("homogeneity") and 
> - $||x + y|| \le ||x|| + ||y||$ for every $x, y \in X$ (the triangle inequality)

>[!note] **EXAMPLE** 2.2 
>In the vector space $\mathbb{R}^n$, for $x = (x_1,..., x_n)$ define 
>$$ ||x|| = (\sum_{j = 1}^{n} |x_j|^2)^{\frac{1}{2}}$$
>The "standard norm" or "Euclidean norm".
>
>Lets check this is a norm. If $x = 0$, the $||x|| = 0$, and if $||x|| = 0$ then $|x_j| = 0$ for every $j$, i.e. $x = 0$, giving us bullet point 1. 
>
>For bullet point 2, we have 
>$$||\lambda x|| = (\sum_{j=1}^{n} |\lambda x_j|^2)^{\frac{1}{2}} = (\sum_{j=1}^{n}|\lambda|^2 |x_j|^2)^{\frac{1}{2}} = |\lambda|||x||,$$
>as required.
>
>The triangle inequality proof is non-examinable, but I will show this below. 
>Let $x \cdot y$ denote the "dot product": $x \cdot y = \sum_{j=1}^{n} x_j y_j$. We have
>$$\begin{align}
>||x + y||^2 = (x+y)\cdot (x+y) &= ||x||^2 + 2x \cdot y + ||y||^2\\
>& \le ||x||^2 + 2||x|| ||y|| + ||y||^2\\
>& \le (||x|| + ||y||)^2 
>\end{align}$$
>Using the inequality $|x \cdot y| \le ||x||||y||$ 
>

>[!warning] **DEFINITION** Normed spaces
>If $X$ is a vector space and $\lVert \cdot \rVert$ is a norm on $X$, the pair $(X, \lVert \cdot \rVert)$ is a *normed space*.

Many spaces have a "standard norm", so for exampled $\mathbb{R}^n$ is usually $\mathbb{R}^n$ with the Euclidean norm, or it is clear that we are working with a particular norm. Therefore, we might talk about "the normed space $X$" rather than the normed space $(X, \lVert \cdot \rVert)$ for brevity. 

>[!warning] **DEFINITION** Convexity  
>Let $X$ be a vector space. A subset $K$ of $X$ is *convex* if whenever $x, y \in K$ and $0 \le \lambda \le 1$ we have $\lambda x + (1 - \lambda) y \in K$.
>Informally, a set is convex if the line segment joining any two points in the set is entirely contained in the set. 

>[!note] **LEMMA** 
>In any normed space $(X, \lVert \cdot \rVert)$, the closed unit ball $\overline{\mathcal{B}_X}$ is convex
>
>> [!note]-- Proof 
>> If $x, y \in \overline{\mathcal{B}_X}$ then $\lVert x\rVert \le 1$ and $\lVert y \rVert \le 1$. Then, for $0 < \lambda < 1$,
>> $$ \lVert \lambda x + (1 - \lambda) y \rVert \le |\lambda| \lVert x \rVert + | 1 - \lambda| \lVert y \rVert \ le \lambda+ (1 - \lambda) = 1$$
>> So $\lambda x + (1 - \lambda)y \in \overline{\mathcal{B}_X}$
