---
title: MongoDB Introduction and CheatSheet
author: Swastik Yadav
date: 2021-08-06
hero: ./banner.jpg
excerpt: Introduction to MongoDB. Mongo is a No SQL database, Let's see some basic commands of mongoDB.
---

Hello World,

In this post we will explore some basic commands of mongoDB. MongoDB is a NO SQL database.

**With NO SQL databases like mongoDB we store our data in collections of documents**. Documents are very similar to JSON objects, they are BSON which is similar to JSON with some additional datatypes.

MongoDB is very scalable, it has built in replication and sharding (a method for distributing data across multiple machines). It scales horizontally.

With mongoDB we don't have to map our data structure beforehand like we do in relational SQL databases.

## Installation
There are two major ways to use mongoDB. One is to install mongo in your operating sytem and second is to use **mongoDB Atlas** a cloud database service. Atlas is preffered over the first one.

Here is Atlas setup tutorial: https://dev.to/dalalrohit/how-to-connect-to-mongodb-atlas-using-node-js-k9i

## MongoDB CheatSheet
Now let's see the most commonly used mongoDB commands.

### Show All Databases

```
show dbs
```

### Show Current Database

```
db
```

### Create Or Switch Database
Switch to the database named acme, or create new database if already does not exist.

```
use acme
```

### Drop
Drop the current database.

```
db.dropDatabase()
```

### Create Collection

```
db.createCollection('posts')
```

### Show Collections

```
show collections
```

### Insert Row

```
db.posts.insert({
  title: 'Post One',
  body: 'Body of post one',
  category: 'News',
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```

### Insert Multiple Rows

```
db.posts.insertMany([
  {
    title: 'Post Two',
    body: 'Body of post two',
    category: 'Technology',
    date: Date()
  },
  {
    title: 'Post Three',
    body: 'Body of post three',
    category: 'News',
    date: Date()
  },
  {
    title: 'Post Four',
    body: 'Body of post three',
    category: 'Entertainment',
    date: Date()
  }
])
```

### Get All Rows

```
db.posts.find()
```

### Get All Rows Formatted

```
db.posts.find().pretty()
```

### Find Rows

```
db.posts.find({ category: 'News' })
```

### Sort Rows

```
# asc
db.posts.find().sort({ title: 1 }).pretty()
# desc
db.posts.find().sort({ title: -1 }).pretty()
```

### Count Rows

```
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
```

### Limit Rows

```
db.posts.find().limit(2).pretty()
```

### Chaining

```
db.posts.find().limit(2).sort({ title: 1 }).pretty()
```

### Foreach

```
db.posts.find().forEach(function(doc) {
  print("Blog Post: " + doc.title)
})
```

## Find One Row

```
db.posts.findOne({ category: 'News' })
```

### Find Specific Fields

```
db.posts.find({ title: 'Post One' }, {
  title: 1,
  author: 1
})
```

### Update Row

```
db.posts.update({ title: 'Post Two' },
{
  title: 'Post Two',
  body: 'New body for post 2',
  date: Date()
},
{
  upsert: true
})
```

**upsert: true** creates a new post if the specified post is not found.

### Update Specific Field

```
db.posts.update({ title: 'Post Two' },
{
  $set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
```

### Increment Field (\$inc)

```
db.posts.update({ title: 'Post Two' },
{
  $inc: {
    likes: 5
  }
})
```

### Rename Field

```
db.posts.update({ title: 'Post Two' },
{
  $rename: {
    likes: 'views'
  }
})
```

### Delete Row

```
db.posts.remove({ title: 'Post Four' })
```

### Sub-Documents

```
db.posts.update({ title: 'Post One' },
{
  $set: {
    comments: [
      {
        body: 'Comment One',
        user: 'Mary Williams',
        date: Date()
      },
      {
        body: 'Comment Two',
        user: 'Harry White',
        date: Date()
      }
    ]
  }
})
```

### Find By Element in Array (\$elemMatch)

```
db.posts.find({
  comments: {
     $elemMatch: {
       user: 'Mary Williams'
       }
    }
  }
)
```

### Add Index

```
db.posts.createIndex({ title: 'text' })
```

### Text Search

```
db.posts.find({
  $text: {
    $search: "\"Post O\""
    }
})
```

### Greater & Less Than

```
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```

------------------------------------

That's it for this post, if you found this post helpful, please do share and stay tuned by subscribing to my [newsletter](./subscribe) below.

Thank You!