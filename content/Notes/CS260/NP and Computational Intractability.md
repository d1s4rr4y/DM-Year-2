## Problems and Algorithms 
Here we'll ore formally define the terms which form the basis of this topic. Firstly, we'll suppose that the input to an algorithm is a binary string $s$, or size $|s|$. 

> [!warning] **DEFINITION** Decision Problem 
> A *decision problem* $X$ is the set of strings on which the answer is "yes". An algorithm $A$ for a decision problem receives an input string $s$ and returns  either "yes" or "no". We say that $A$ "solves" $X$ if $A(s) = yes \Leftrightarrow s \in X$

An aside: It's often preferable to consider decision problems since they're easier to work with than their optimisation equivalents, and usually equally hard. 

>[!warning] **DEFINITION** Polynomial Runtime 
>We say $A$ has a polynomial runtime if there is a polynomial function $p(x)$ such that $A$ terminates on an input string $s$ in at most $O(p(|s|))$ steps. 

The symbol $\mathcal{P}$ denotes the set of problems which have a polynomial time solution. 
### Efficient Certification 
As well as the set of problems that can be *solved* efficiently, we can also define the set of problems for which an answer can be *checked* (or "certified") efficiently. 
The symbol $\mathcal{NP}$ denotes the set of problems which can be certified in polynomial time. This turns out to be an equally important definition for working with commonly-arising algorithmic problems. 

An efficient certifier for an algorithmic problem $X$ is an algorithm which takes an instance of $X$ as well as some string whose length is polynomial in the size of the instance. The additional string acts as a solution, or evidence of a solution, which the certifier uses to either confirm a "yes" answer, or decide that the solution is incorrect. 

The $\mathcal{P}$ vs $\mathcal{NP}$ problem can be states as a question of whether solving a problem outright is as easy as certifying a solution.
## Reductions 
As we build up to a general framework for classifying algorithmic problems, it will be essential to compare the relative *harness* of the problems: we can achieve this through *reductions*. 
### Oracle Calls & Reductions 
Suppose we want to show that a problem $X$ is no harder than a problem $Y$. An intuition here is: if we can solve instances of $X$ in terms f $Y$, then finding an algorithm for $X$ is no harder than finding an algorithm for $Y$. 