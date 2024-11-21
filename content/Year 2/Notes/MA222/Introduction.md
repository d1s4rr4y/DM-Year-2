# Notation

The LaTeX command for each symbol will be given after their representation

- $\emptyset$ (`\emptyset`) denotes the empty set
- $\in$ (`\in`) denotes "is an element of"
- $\cup$ (`\cup`) and $\cap$ (`\cap`) denote union and intersection, respectively. 
	- We will also use $\bigcup$ (`\bigcup`) and $\bigcap$ (`\bigcap`) for unions and intersections over families of sets. 
- $\subset$ (`\subset`) denotes "is a subset of"
- $\mathbb{C}$ (`\mathbb{C})`) denotes the set of complex numbers, $\mathbb{R}$ (`\mathbb{R}`) the set of real numbers, $\mathbb{Q}$ (`\mathbb{Q}`) the set of rational numbers, $\mathbb{Z}$ (`\mathbb{Z}`) the set of integers, and $\mathbb{N}$ (`\mathbb{N}`) the set of natural numbers $\{1, 2, 3\}$. We also write $\mathbb{R}^+ = \{x \in \mathbb{R} : x \ge 0\}$
- For sets $a$ and $B, $A \times B$ (`\times`) will denote their Cartesian product. 
- For $n \ge 2$, $\mathbb(R)^n$ is the Cartesian product of $\mathbb{R}$ with itself $n$ times
- Let $A_\alpha, \alpha \in Y$ be a collection of sets indexed by an arbitrary set $Y$. Here, the product $\prod_{\alpha \in Y} A_\alpha$ (`\prod_{\alpha \in Y} A_\alpha`) is interpreted as the set of all functions $f: \mathcal{A} \to \bigcup_{\alpha \in Y} A_\alpha$ (`f: \mathcal{A} \to \bigcup_{\alpha \in Y} A_\alpha`) with the property that $f(\alpha) \in A_\alpha$
- IF $A_\alpha = X$ for all $\alpha \in Y$, then we can write the above product as $X^Y$ and note that it is the set of all functions $f: Y \to X$
- A set $A$ is countable if it is in bijection with a subset of $\mathbb{N}$ or, equivalently, if there is an injection from $A$ to $\mathbb{N}$. A countable set may be finite or infinite, in which case we call it countable infinite. $\emptyset$ is countable. 

# Sets, Functions, Images and pre-Images 

>[!warning] **DEFINITION** Image 
> Let $X$ and $Y$ be sets and let $f: X \to Y$ be a function. The *image* $f(A)$ of a set $A \subset X$ is defined to be 
> $$f(A) = \{f(x) : x \in A\}$$

