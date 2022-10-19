# Static Typing

## TypeScript & Flow

Benefits
- Catch type-related mistakes
- Communicate type intent
- Provide IDE feedback

Caveats
- Inferencing is best-guess, not a guarantee
- Annottions are optional
- Any part of the applicattion that isn't typed introduces uncertainty

## Inferencing

```typescript
var teacher = "Kyle"

teacher = { name: "Kyle" } //error
```

## Custom Types

## Validating Operand Types

```typescript
var studentName: string = "Frank";
var studentCount: number = 16 - studentName; // error
```

## TypeScript & Flow Summary

## Static Typing Pros

- Make types obviouse
- Look like other language's type system
- Popular
- Sophisticated

## Static Typing Cons

- Use non-JS-standard
- Require build process

## Understanding Your Types

