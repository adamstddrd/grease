---
title: Animation
---
Grease includes a simple, tiny, composable animation system:

1. Define a CSS animation and a utility class that invokes it.
2. Use the class name as the value for the `data-aos` attribute on the element you want to animate.
3. Grease will animate in the element when it enters the viewport. If multiple elements appear at once, Grease builds in a brief stagger (taking into consideration any existing delays).

By adding animation to elements and sub-elements, you can quickly scaffold out surprisingly complex animations from a handful of simple primitives. For instances where it's inconvenient to add an attribute directly to an element, use `data-aos-children` to apply the animation class to all direct children of the element.