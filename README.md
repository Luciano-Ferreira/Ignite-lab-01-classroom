# Back-end

Purchases (http://localhost:3333/graphql) (https://purchases.lfs/graphql)
Classroom (http://localhost:3334/graphql) (https://classroom.lfs/graphql)


# Front-end





Web
Gateway (http://localhost:3332/)
```
# http://localhost:3333/graphql
query {
  me {
    purchases {
      id
    }
  }
}
```
```
# http://localhost:3334/graphql
query {
  me {
    enrollments {
      id
    }
  }
}
```


# Apollo Federation
<!-- Gateway (localhost:3332/graphql) PROXY-->

```
# http://localhost:3332/graphql
query {
  me {
    purchases {
      id
    }
    
    enrollments {
      id
    }
  }
}
```