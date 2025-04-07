How to force change detection to reevaluate bindings?

- In parent component: child.cdr.markForCheck();
- In child component: self.cdr.detectChanges();
- Create a new object to force reference change;
- Reconstruct child component.
