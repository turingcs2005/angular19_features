How to force change detection to reevaluate bindings?

- In parent component: child.cdr.markForCheck();
- In child component: self.cdr.detectChanges();
- Use a dummy input;
- Create a new object reference to force reference change;
- Reconstruct child component.
