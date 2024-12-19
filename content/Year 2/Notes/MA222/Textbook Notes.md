Introduction to Metric and Topological Spaces - Wilson A. Sutherland

# Sets and Functions 
## Direct and Inverse Images
Let $f: X \rightarrow Y$ be any map, and let $A,\ C$ be subsets of $X,\ Y$ respectively

>[!multi-column]
>>[!note] Definition 3.1 
>>The image $f(A)$ of $A$ under $f$ is the subset of $Y$ given by $\{y \in Y : y = f(a) \text{ for some } a \in A\}$
>
>>[!note] Definition 3.2
>>The inverse image $f^{-1}(C)$ of$C$ under $f$ is the subset of $X$ given by $\{x \in X : f(x) \in C\}$

In order to make sense, definition 3.2 does not require the existence of an 'inverse function' $f^{-1}$. 

>[!note] Example 3.3
>Let $X = \{x,y,z\},\ Y = \{1, 2, 3\}$, and define $f: X \rightarrow Y$ by  $f(x)  = 1,\ f(y) = 2,\ f(z) = 1$. Then we have $f(\{x, y\}) = \{1, 2\},\ f(\{x, z\}) = 1,\ f^{-1}(\{1\}) = \{x, z\}, \text{ and } f^{-1}(\{2, 3\}) = \{y\}$

>[!multi-column]
>>[!note] Proposition 3.6
>>Suppose that $f:X \rightarrow Y$ is a map, and that $A,\ B$ are subsets of $X$ and $C,\ D$ are subsets of $Y$. Then:
>>$$f(A \cup B) = f(A) \cup f(B)$$
>>$$f(A \cap B) \subseteq f(A) \cap f(B)$$
>>$$f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D)$$
>>$$f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)$$
>
>>[!note] Proposition 3.7
>>Suppose that $f: X \rightarrow Y$ is a map, and that for each $i$ in some indexing set $I$ we are given a subset $A_i$ of $X$ and a subset $C_i$ of $Y$. Then:
>>$$\displaystyle f(\bigcup_{i \in I} A_{i}) = \bigcup_{i \in I}f(A_i)$$
>>$$\displaystyle f(\bigcap_{i \in I} A_{i}) \subseteq \bigcap_{i \in I}f(A_i)$$
>>$$\displaystyle f^{-1}(\bigcup_{i \in I} C_{i}) = \bigcup_{i \in I}f^{-1}(C_i)$$
>>$$\displaystyle f^{-1}(\bigcup_{i \in I} C_{i}) = \bigcup_{i \in I}f^{-1}(C_i)$$

>[!multi-column]
>>[!note] Proposition 3.8 
>>Suppose that $f: X \rightarrow Y$ is a map and $B \subseteq X,\ D \subseteq Y$. Then
>>$$f(X \backslash B) \supseteq f(X) \backslash f(B),\ f^{-1}(Y \backslash D) = X \backslash f^{-1}(D)$$
>
>>[!note] Proposition 3.9
>>With the notation of proposition 3.6 (above), 
>>$$f(A \backslash B) \supseteq f(A) \backslash f(B) \text{ and } f^{-1}(C \backslash D) = f^{-1}(C) \backslash f^{-1}(D)$$

>[!note] Proposition 3.13
>Suppose that $f:X \rightarrow Y$ is a map, $B \subseteq Y$, and for some indexing set $I$ there is a family $\{A_{i}: i \in I\}$ of subsets of $X$ with $X = \cup_{I}A_i$. Then:
>$$f^{-1}(B) = \bigcup_{I}(f | A_{i})^{-1}(B)$$
>
>> [!note]- Proof 
>>
>>First suppose $x \in f^{-1}(B)$. Since $X = \bigcup_I A_i$, we have $x \in A_{i_0}$ for some $i_{0}\in I$. Then $(f | A_{i})(x) = f(x) \in B$, so $x \in (f| A_{i_0})^{-1}(B)$, which is contained in $\displaystyle \bigcup_{I}(f|A_{i})^{-1}(B)$
>>Conversely, suppose that $x \in (f|A_{i})^{-1}(B)$. Then $x \in (f| A_{i_0})^{-1}(B)$ for some $i_{0}\in I$. This says $(f | A_{i_0})(x) \in B$. But $(f | A_{i_{0})(x) =}f(x)$, so $f(x) \in B$ which gives $x \in f^{-1}(B)$

## Inverse Functions 

>[!note] Definition 3.17 
>A map $f:X \rightarrow Y$ is said to be invertible if there exists a map $g:Y \to X$ such that the composition $g \circ f$ is the identity map of $X$ and the composition $f \circ g$ is the identity map of$Y$

>[!note] Proposition 3.18
>A map $f: X\to Y$ is invertible if and only if it is bijective 
>>[!note]- Proof 
>>Suppose first that $f$ is invertible, and let $g$ be as in Definition 3.17. Then 
>>$$f(x) = f(x') \Rightarrow g(f(x)) = g(f(x')) \Rightarrow x = x'$$
>>So $f$ is injective. Also, given any $y \in Y$ we have $y = f(g(y))$ so $y \in f(Y)$, which says that $f$ is also surjective. Hence, $f$ is bijective.

>[!note] Proposition 3.19 (pg 14)

>[!note] Proposition 3.20
>content 
>>[!note]- Proof







# Real Analysis Review 

# Metric Spaces

# Topological Spaces

# Subspaces and Product Spaces

# The Hausdorff Condition 

# Connected Spaces

# Compact Spaces

# Sequential Compactness

# Quotient Spaces and Surfaces

# Uniform Convergence 

# Complete Metric Spaces