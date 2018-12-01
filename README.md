# vegasLoadMore
Loading content without reloading the page

```js
$('.btn-load-more').vegasLoadMore({
  target: '#load-box',
  limit: 50,
  offset: 50,
  route: 'https://url.site/get/load/content',
  params: {
    var1: 'any variable',
    var2: 'any variable',
  }
});
```
